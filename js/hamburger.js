class Hamburger {
  constructor(size) {
    this.stuffing = [];
    this.seasoning = [];
    this.sauces = [];

    this.setSize(size);

  }
  // узнать цену
  calcPrice() {
    this.price = this.size.price;
    this.stuffing.forEach(item => this.price += item.price);
    this.seasoning.forEach(item => this.price += item.price);
    this.sauces.forEach(item => this.price += item.price);

  }
  // узнать калорийность
  calcCalories() {
    this.calories = this.size.calories;
    this.stuffing.forEach(item => this.calories += item.calories);
    this.seasoning.forEach(item => this.calories += item.calories);
    this.sauces.forEach(item => this.calories += item.calories);
  }

  update() {
    this.calcPrice();
    this.calcCalories();
  }
  // установить размер бургера
  setSize(size) {
    if (this.searchItem(size, this.fetchSizes())) {
      this.size = this.searchItem(size, this.fetchSizes())
      this.update();
      return;
    }
  }

  getSize() {
    return this.size.title;
  }
  /**
   * @description - проверяем есть ли объект в массиве (ищем по названию)
   * @param  {string} title - название того что ищем
   * @param  {array} listItems - где ищем
   * @returns {boolean, object} - true: возвращает объект, false: объекта нет
   */
  searchItem(title, listItems) {
    for (let item of listItems) {
      if (item.title === title.toLowerCase()) {
        return item;
      }
    }
    return false;
  }

  /**
   * @description проверка был ли уже добавлен title в гамбургер
   * @param  {string} title - что нужно проверить
   * @param  {array} listItems - где нужно проверить
   * @returns {boolean} - true: уже добавлено , false: не добавлено
   */
  checkSelected(title, listItems) {
    if (this.searchItem(title, listItems)) {
      return true;
    }
    return false;
  }

  /**
   * @description - добавить начинку,соус или что то еще в гамбургер
   * @param  {string} title - что добавляем
   */
  add(title) {
    let listItems = [];

    if (this.searchItem(title, listItems = this.fetchStuffing())) {
      if (this.checkSelected(title, this.stuffing)) {
        alert(`${title} - уже добавлен`);
        return;
      };
      this.stuffing.push(this.searchItem(title, listItems));
      this.update();

    } else if (this.searchItem(title, listItems = this.fetchSeasoning())) {
      if (this.checkSelected(title, this.seasoning)) {
        alert(`${title} - уже добавлен`);
        return;
      };
      this.seasoning.push(this.searchItem(title, listItems));
      this.update();

    } else if (this.searchItem(title, listItems = this.fetchSauces())) {
      if (this.checkSelected(title, this.sauces)) {
        alert(`${title} - уже добавлен`);
        return;
      };
      this.sauces.push(this.searchItem(title, listItems));
      this.update();

    } else {
      console.log(`${title} - нет в меню`);
    }
  }

  remove(title) {
    let listItems = [];

    if (this.searchItem(title, listItems = this.fetchStuffing())) {
      if (this.checkSelected(title, this.stuffing)) {
        this.stuffing.splice(this.stuffing.indexOf(this.searchItem(title, this.stuffing)), 1);
        this.update();
        return;

      } else if (this.checkSelected(title, this.sauces)) {
        this.sauces.splice(this.sauces.indexOf(this.searchItem(title, this.sauces)), 1);
        this.update();
        return;

      } else if (this.checkSelected(title, this.seasoning)) {
        this.seasoning.splice(this.seasoning.indexOf(this.searchItem(title, this.seasoning)), 1);
        this.update();
        return;
      }
    }
  }


  // узнать какие начинки
  getStuffing() {
    let result = []
    if (this.stuffing.length === 0) {
      return `не выбрано`;
    }
    this.stuffing.forEach(item => result.push(item.title));
    return result.join(', ');
  }

  getSeasoning() {
    let result = []
    if (this.seasoning.length === 0) {
      return `не выбрано`;
    }
    this.seasoning.forEach(item => result.push(item.title));
    return result.join(', ');
  }

  getSauces() {
    let result = []
    if (this.sauces.length === 0) {
      return `не выбрано`;
    }
    this.sauces.forEach(item => result.push(item.title));
    return result.join(', ');
  }

  showInfo() {
    return `${this.size.title} гамбургер.
    Начинки - ${this.getStuffing()}.
    Посыпки - ${this.getSeasoning()}.
    Соусы - ${this.getSauces()}.
    Цена - ${this.price} руб.
    Калорийность - ${this.calories} cal.`;
  }


  // доступные размеры бургера
  fetchSizes() {
    return [
      {
        title: 'большой',
        price: 100,
        calories: 40,
      },
      {
        title: 'маленький',
        price: 50,
        calories: 20,
      }
    ];
  }
  // доступные начинки
  fetchStuffing() {
    return [
      {
        title: 'сыр',
        price: 10,
        calories: 20,
      },
      {
        title: 'салат',
        price: 20,
        calories: 5,
      },
      {
        title: 'картофель',
        price: 15,
        calories: 10,
      }
    ];
  }
  // доступные приправы
  fetchSeasoning() {
    return [
      {
        title: 'приправа',
        price: 15,
        calories: 0,
      }
    ];
  }
  // доступные соусы
  fetchSauces() {
    return [
      {
        title: 'майонез',
        price: 20,
        calories: 5,
      }
    ];
  }
}

class Menu {
  constructor() {

    this.markupEl = document.querySelector('.burger');
    this.inputOptionEls = this.markupEl.querySelectorAll('.input-burger');
    this.inputTextEls = this.markupEl.querySelectorAll('.text-input-burger');
    this.textInfo = this.markupEl.querySelector('.text');

    this.disableOptions();
    this.init();
  }

  disableOptions() {
    this.inputOptionEls.forEach(element => element.disabled = true);
    this.inputTextEls.forEach(element => element.classList.add('disabled'));
    this.textInfo.textContent = '';
  }

  enableOptions() {
    this.inputOptionEls.forEach(element => element.disabled = false);
    this.inputTextEls.forEach(element => element.classList.remove('disabled'));
  }

  init() {
    this.markupEl.addEventListener('click', event => {
      let burger;
      let size;
      let stuffing = [];
      let seasoning = [];
      let sauce = [];

      if (event.target.type == 'reset') {
        this.disableOptions();
        return;
      }

      this.markupEl.querySelectorAll('input[name="size"]').forEach(element => {
        if (element.checked === true) {
          size = element.value;
          burger = new Hamburger(size);
          this.enableOptions();
        }
      })

      this.markupEl.querySelectorAll('input[name="stuffing"]').forEach(element => {
        if (element.checked === true) {
          stuffing.push(element.value);
        }
      });


      this.markupEl.querySelectorAll('input[name="seasoning"]').forEach(element => {
        if (element.checked === true) {
          seasoning.push(element.value);
        }
      });

      this.markupEl.querySelectorAll('input[name="sauce"]').forEach(element => {
        if (element.checked === true) {
          sauce.push(element.value);
        }
      });


      if (stuffing.length > 0) {
        stuffing.forEach(item => burger.add(item))
      }

      if (seasoning.length > 0) {
        seasoning.forEach(item => burger.add(item))
      }

      if (sauce.length > 0) {
        sauce.forEach(item => burger.add(item))
      }

      this.textInfo.textContent = burger?.showInfo();

      if (event.target.type === 'submit') {
        if (!size) {
          alert('Вы не выбрали размер! Нужно выбрать размер');
          event.preventDefault();
          return;
        }
        if (stuffing.length < 1) {
          alert('Вы не выбрали начинки! Нужно выбрать хотябы 1 начинку');
          event.preventDefault();
          return;
        }
      }
    })
  }

}

const menu = new Menu();