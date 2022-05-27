const fs = require('fs');
const logFile = 'server/log/log.json';



const logHandler = (req, res, action, file) => {
    const date = new Date();
    const day = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    fs.readFile(file, 'utf-8', (err, data)=> {
      if (err) {
        res.sendStatus(404, JSON.stringify({result:0, text: err}));
      } else {
      let product;
      // если товар в корзине, то ищем по id
        if (action === 'change') {
          const cart = JSON.parse(data).contents;
          product = cart.find(el => el.id_product === +req.params.id);

          // если увеличиваем количество товара в корзине, то
          // меняем информацию о действии (добавили в корзину 1 единицу) и
          // увеличиваем общее количество на еденицу (для корректного отображения)
          if (+req.body.count > 0) {
            action = 'added 1 unit';
            product.count++;
          // иначе уменьшаем
          } else {
            action = 'deleted 1 unit';
            product.count--;
          } 

          // если товара нет в корзине, то
          // берем информацию о товаре из тела запроса
        } else {
          product = req.body;
        }

        // меняем название действия, если полностью удаляем из корзины, то
        // так и пишем + удаляем свойство количество
        if (action === 'remove') {
          action = 'removed from cart';
          delete product.count;
        }
        // если добавляем товар в корзину, которого не было, то так и пишем
        if (action === 'add') {
          action = 'added to cart';
        }
        //  создаем новый объект с полной информацией о самом товаре,
        // что сделано с товаром, дата и время изменения.
        const logProduct = Object.assign(product, {
          action: action,
          date: day,
          time: time
        });

        // получаем информацию о всех логах, записанных ранее
        fs.readFile(logFile, 'utf-8', (errLog, dataLog) => {
          if (errLog) {
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
          } else {
          const logs = JSON.parse(dataLog);
        // добавляем новое событие в массив с логами
        // для удобства чтения в начало массива
          logs.unshift(logProduct);

        // перезаписываем файл с логами
          fs.writeFile(logFile, JSON.stringify(logs, null , 4), (err, data) => {
            if (err) {
              res.sendStatus(404, JSON.stringify({result:0, text: err}));
            }
          });
        }
        });
      }
    });
};

module.exports = logHandler;