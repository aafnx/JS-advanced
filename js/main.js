'use strict'

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
    this.render();//вывод товаров на страницу
  }
  _fetchProducts() {
    this.goods = [
      {
        id: 1,
        title: 'Notebook',
        price: 2000,
        img: `https://picsum.photos/300?random=1`
      },
      {
        id: 2,
        title: 'Mouse',
        price: 20,
        img: `https://picsum.photos/300?random=2`
      },
      {
        id: 3,
        title: 'Keyboard',
        price: 200,
        img: `https://picsum.photos/300?random=3`
      },
      {
        id: 4,
        title: 'Gamepad',
        price: 50,
        img: `https://picsum.photos/300?random=4`
      },
    ];
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", item.render());
    }
  }

  calcSumProducts() {
    this.sumPriceProducts = 0;
    this.goods.forEach(product => this.sumPriceProducts += product.price);
  }
}

class ProductItem {
  constructor(product) {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = product.img ?? 'https://via.placeholder.com/300';
  }
  render() {
    return `<div class="card">
          <img src="${this.img}" class="card-img-top" alt="${this.title}">
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.price} &#36;</p>
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

  }

  calcTotalPrice() {

  }
  calcTotalCountProducts() {

  }

  addProduct(product) {

  }

  removeProduct(product) {

  }

  removeAllProducts() {

  }

  render() {

  }

}

class ProductInShoppingCart {
  constructor() {

  }

  calcSum() {

  }

  increaseCount() {

  }

  decraseCount() {

  }
}

const list = new ProductList();