'use strict'

const products = [
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

const productsEl = document.querySelector('.products');


/**
 * @param  {object} product
 * @returns {string} - разметка карточки товара
 */
const renderProduct = (product) => {
  return `<div class="card">
          <img src="${product.img}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.price} &#36;</p>
            <button class="btn btn-primary">
              <i class="bi bi-cart-plus"></i>
              Добавить в корзину
            </button>
          </div>
          </div>`
};


/* Запятые отображаются на странице из за того, что внутрь разметки .products
 * вставляем массив с разметкой, каждый элемент массива отделяется от другого
 * запятой, поэтому эти запятые вставляются в верстку.
 * Можно обратиться ко всем потомкам .products, найти запятые и удалить их.
*/

/**
 * @description - удаляет лишние запятые при рендере карточек товаров
 * @param  {object} element
 */
const clearMarkUp = element => {
  element.childNodes.forEach(item => {
    if (item.nodeName === '#text') {
      item.remove()
    }
  });
}
let productsList = [];
const renderPage = list => {
  productsList = list.map(product => renderProduct(product));
  productsEl.innerHTML = productsList;
  console.dir(productsList);
  clearMarkUp(productsEl);
};

renderPage(products);