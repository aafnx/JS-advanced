'use strict'

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
  constructor(container = '.products') {
    this.container = document.querySelector(container);
    this.goods = [];
    this._getProducts()
      .then(data => {
        this.goods = data;
        this.render();
      });
  }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then(data => data.json())
      .catch(error => console.log(error));
  }

  render() {
    for (let product of this.goods) {
      const item = new ProductItem(product);
      this.container.insertAdjacentHTML("beforeend", item.render());
    }
  }

  calcSumProducts() {
    this.sumPriceProducts = 0;
    this.goods.forEach(product => this.sumPriceProducts += product.price);
  }
  /**
   * @description - найти товар по id в массиве товаров
   * @param  {number} id - id товара который ищем
   * @param  {array} productsList - массив товаров
   * @returns {object, bollean} - возвращает объект товара если найден, если нет false
   */
  static searchProduct(id, productsList) {
    for (let product of productsList) {
      if (product['id_product'] === id) {
        return product;
      }
    }
    return false;
  }
}
class ProductItem {
  constructor(product) {
    this.title = product['product_name'];
    this['id_product'] = product['id_product'];
    this.price = product.price;
    this.img = product.img ?? `https://picsum.photos/300?random=${this['id_product']}`;
  }
  render() {
    return `<div class="card" data-id='${this['id_product']}'>
          <img src="${this.img}" class="card-img-top" alt="${this.title}">
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.price}</p>
            <button class="btn btn-primary">
              <i class="bi bi-cart-plus"></i>
              Добавить в корзину
            </button>
          </div>
          </div>`
  }
}

class ShoppingCart {
  constructor() {
    this.container = document.querySelector('.shopping-cart');
    this.button = document.querySelector('.btn-cart');
    this.buttonCount = this.button.querySelector('.rounded-pill');
    this.modalCart = document.querySelector('.modal');
    this.products = [];
    this.productsFromServer = []; // список продуктов в корзине из json с github
    this.priceAllProducts = 0;
    this.countProducts = 0;
    this.priceAllProductsFromServer = 0;
    this.initListeners();

    this._getShoppingCart()
      .then(data => {
        this.priceAllProductsFromServer = data.amount;
        this.productsFromServer = data.contents;
        // this.renderProductsServer();
      });
    this.update();

  }

  // получить данные продуктов в корзине из json с github
  _getShoppingCart() {
    return fetch(`${API}/getBasket.json`)
      .then(data => data.json())
      .catch(error => console.log(error));
  }

  // выводим данные о товарах в корзине из json с github
  renderProductsServer() {
    for (let product of this.productsFromServer) {
      console.log(product)
      let newProduct = new ProductInShoppingCart(product);
      this.container.insertAdjacentHTML('beforeend', newProduct.render());
    }
    this.container.insertAdjacentHTML('afterend', `<p>Общая стоимость - ${this.priceAllProducts}</p>`);
  }


  // выводим данные на страницу товаров добавленных со страницы
  render() {
    let markup = [];
    for (let product of this.products) {
      markup.push(product.render());
    }
    this.container.innerHTML = markup.join('');
    this.modalCart.querySelector('.cart-sum').textContent = this.priceAllProducts;

    if (this.countProducts) {
      this.buttonCount.textContent = this.countProducts;
      this.buttonCount.classList.remove('visually-hidden');
    } else {
      this.buttonCount.classList.add('visually-hidden');
    }
  }

  getSumAllProducts() {
    let sum = 0;
    this.products.forEach(product => sum += (product.price * product.count));
    return sum;
  }

  getCountProducts() {
    let count = 0;
    this.products.forEach(product => count += product.count);
    return count;
  }

  update() {
    this.priceAllProducts = this.getSumAllProducts();
    this.countProducts = this.getCountProducts();
    this.render();
  }

  addToCart() {
    list.container.addEventListener('click', event => {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }
      const id = Number(event.target.closest('.card').dataset.id);
      const productInCart = ProductList.searchProduct(id, this.products);

      if (productInCart) {
        productInCart.count++;
        this.update();
        return;
      }

      const product = ProductList.searchProduct(id, list.goods);
      const newProduct = new ProductInShoppingCart(product);

      this.products.push(newProduct);
      this.update();
    })
  }

  removeFromCart() {
    this.container.addEventListener('click', event => {

      if (event.target.tagName !== 'BUTTON') {
        return;
      }

      const id = Number(event.target.closest('.card-basket').dataset.id);
      const product = ProductList.searchProduct(id, this.products);

      product.count--;
      this.update();


      if (product.count === 0) {
        this.products.splice(this.products.indexOf(product), 1);
        this.update();
      }
    })
  }

  toggleCart() {
    this.button.addEventListener('click', event => {
      this.modalCart.style.display = 'block';
      this.modalCart.querySelector('.modal-dialog')
        .classList.remove('animate__slideOutDown');
      this.modalCart.querySelector('.modal-dialog')
        .classList.add('animate__slideInDown');
    });

    this.modalCart.addEventListener('click', event => {
      if (event.target.classList.contains('btn-close') ||
        event.target.classList.contains('modal')) {

        this.modalCart.querySelector('.modal-dialog')
          .classList.remove('animate__slideInDown');
        this.modalCart.querySelector('.modal-dialog')
          .classList.add('animate__slideOutDown');
        setTimeout((() => this.modalCart.style.display = 'none'), 300);
      }
    })
  }

  // запуск всех listener
  initListeners() {
    this.addToCart();
    this.removeFromCart();
    this.removeAllProducts();
    this.toggleCart();
  }

  removeAllProducts() {
    this.container.parentElement.addEventListener('click', event => {
      if (event.target.type !== 'reset') {
        return;
      }
      this.products = [];
      this.update();
    })
  }

  showProductsInCart() {
    this.products.forEach(product => console.log(`${product.title}, количество - ${product.count}, цена за единицу - ${product.price}, стоимость в корзине - ${product.count * product.price}`));
  }
}

class ProductInShoppingCart extends ProductItem {
  constructor(product) {
    super(product);
    this.count = 1;
  }

  render() {
    return `<div class="card-basket" data-id='${this['id_product']}'>
          <img src="${this.img}" class="card-img-top" alt="${this.title}">
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">Цена за единицу - ${this.price}</p>
            <p class="card-text">Добавлено - ${this.count}</p>
            <p class="card-text">Общая цена - ${this.count * this.price}</p>
            <button class="btn btn-primary">
              <i class="bi bi-cart-dash"></i>
              Удалить из корзины
            </button>
          </div>
          </div>`
  }
}

const list = new ProductList();

const cart = new ShoppingCart();