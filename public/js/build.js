/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/components/AdvantagesComponent.js":
/*!*****************************************************!*\
  !*** ./public/js/components/AdvantagesComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst advantages = {\r\n  template: `<section class=\"our-advantages\">\r\n\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t<div class=\"our-advantages__box\">\r\n\t\t\t\t\t\t\t<div class=\"advatages-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"img/advantages-delivery-ico.svg\" alt=\"free delivery\" class=\"advatages-card__img\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"advatages-card__header\">Free Delivery</h4>\r\n\t\t\t\t\t\t\t\t<p class=\"advatages-card__text\">Worldwide delivery on&nbsp;all. Authorit tively morph\r\n\t\t\t\t\t\t\t\t\tnext-generation innov tion with\r\n\t\t\t\t\t\t\t\t\textensive models.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"advatages-card advatages-card_margin\">\r\n\t\t\t\t\t\t\t\t<img src=\"img/advantages-sales-ico.svg\" alt=\"sales\" class=\"advatages-card__img\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"advatages-card__header\">Sales &amp;&nbsp;discounts</h4>\r\n\t\t\t\t\t\t\t\t<p class=\"advatages-card__text\">Worldwide delivery on&nbsp;all. Authorit tively morph\r\n\t\t\t\t\t\t\t\t\tnext-generation innov tion with extensive models.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"advatages-card\">\r\n\t\t\t\t\t\t\t\t<img src=\"img/advantages-quality-ico.svg\" alt=\"sales\" class=\"advatages-card__img\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"advatages-card__header\">Quality assurance</h4>\r\n\t\t\t\t\t\t\t\t<p class=\"advatages-card__text\">Worldwide delivery on&nbsp;all. Authorit tively morph\r\n\t\t\t\t\t\t\t\t\tnext-generation innov tion with extensive models.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</section>`\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (advantages);\n\n//# sourceURL=webpack://edu-shop/./public/js/components/AdvantagesComponent.js?");

/***/ }),

/***/ "./public/js/components/CartComponent.js":
/*!***********************************************!*\
  !*** ./public/js/components/CartComponent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorComponent */ \"./public/js/components/ErrorComponent.js\");\n\n\nconst API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\n\nconst cartItem = {\n    props: ['cartItem'],\n    template: `\n    <div class=\"cart-item\">\n        <div class=\"product-desc\">\n        <img :src=\"cartItem.img_product\" class=\"imgInCart\">\n            <h3>{{ cartItem.product_name }}</h3>\n            <p>Цена: {{ cartItem.price }} $</p>\n            <div class=\"changeQuantity\">\n                <button class=\"del-btn btnInCart\" @click=\"$emit('remove', cartItem)\"> - </button>\n                <p>&#160;{{ cartItem.count }}&#160; шт.&#160; </p>\n                <button class=\"btnInCart\" @click=\"$emit('add-product', cartItem)\"> + </button>\n            </div>          \n            <p>Сумма: {{ cartItem.price * cartItem.count }} $</p>\n        </div>\n    </div>\n    `\n}\n\nconst cart = {\n    data() {\n        return {\n            cartUrl: '/getBasket.json',\n            cartItems: [],\n            imgCart: 'https://placehold.it/200x150',\n            showCart: false\n        }\n    },\n    components: {\n        'cart-item': cartItem,\n        error: _ErrorComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    },\n    mounted() {\n        this.$root.getJson(`/api/cart`)\n            .then(data => {\n                for (let item of data.contents) {\n                    this.$data.cartItems.push(item);\n                }\n            });\n    },\n    methods: {\n        addProduct(item) {\n            let find = this.cartItems.find(el => el.id_product === item.id_product);\n            if (find) {\n                this.$root.putJson(`/api/cart/${find.id_product}`, {\n                        count: 1\n                    })\n                    .then(data => {\n                        if (data.result === 1) {\n                            find.count++\n                        }\n                    })\n            } else {\n                const prod = Object.assign({\n                    count: 1\n                }, item);\n                this.$root.postJson(`/api/cart`, prod)\n                    .then(data => {\n                        if (data.result === 1) {\n                            this.cartItems.push(prod)\n                        }\n                    })\n            }\n        },\n        remove(item) {\n            this.$root.getJson(`${API}/addToBasket.json`)\n                .then(data => {\n                    if (data.result === 1) {\n                        if (item.count > 1) {\n                            this.$root.putJson(`/api/cart/${item.id_product}`, {\n                                    count: -1\n                                })\n                                .then(data => {\n                                    if (data.result === 1) {\n                                        item.count--;\n                                    }\n                                });\n                        } else {\n                            this.$root.deleteJson(`/api/cart/${item.id_product}`, item)\n                                .then(data => {\n                                    if (data.result === 1) {\n                                        this.cartItems.splice(this.cartItems.indexOf(item), 1);\n                                    }\n                                })\n                        }\n                    }\n                })\n        },\n    },\n\n    computed: {\n        cartCount() {\n            return this.cartItems.reduce((summ, item) => summ + item.count, 0);\n        },\n        cartSumm() {\n            return this.cartItems.reduce((summ, item) => summ + item.count * item.price, 0);\n        }\n    },\n    template: `\n        <div>\n        <button class=\"header-menu__shopping-cart\" type=\"button\" @click=\"showCart = !showCart\">\n            <span class=\"count-in-cart\" v-if=\"cartCount\">{{ cartCount }}</span>\n        </button>\n        <div class=\"drop-down-cart\" v-show=\"showCart\">\n            <error ref=\"error\"></error>\n            <div v-show=\"!$root.error\">\n                <h2 v-if=\"cartItems.length === 0\">Корзина пуста</h2>\n                    <div v-else class=\"cart-block\">\n                        <h3>\n                        {{ cartCount }}\n                        товара(ров)\n                        ИТОГО:\n                        {{ cartSumm }} $\n                        </h3>\n                        <cart-item \n                            v-for=\"item of cartItems\"\n                            :key=\"item.id_product\"\n                            :cart-item=\"item\" \n                            @add-product=\"addProduct\"\n                            @remove=\"remove\"\n                        ></cart-item>\n                    </div>  \n            </div>\n        </div>\n        </div>\n        `\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n\n\n//# sourceURL=webpack://edu-shop/./public/js/components/CartComponent.js?");

/***/ }),

/***/ "./public/js/components/ErrorComponent.js":
/*!************************************************!*\
  !*** ./public/js/components/ErrorComponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst error = {\r\n  template: `\r\n              <h3 class='error' v-show=\"$root.error\">Ошибка загрузки данных с сервера</h3>\r\n            `,\r\n  data() {\r\n    return {\r\n      status: false,\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (error);\n\n//# sourceURL=webpack://edu-shop/./public/js/components/ErrorComponent.js?");

/***/ }),

/***/ "./public/js/components/FilterComponent.js":
/*!*************************************************!*\
  !*** ./public/js/components/FilterComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filterProducts = {\r\n  template: `\r\n  <form action=\"#\" @submit.prevent=\"$root.$refs.products.filter(userSearch)\" class=\"search-form header-menu__search-form_styled\">\r\n    <input type=\"checkbox\" name=\"search\" id=\"search\" class=\"search-form__switch-input\">\r\n    <label for=\"search\" class=\"search-form__switch-label\">\r\n      <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"search\"\r\n        class=\"svg-inline--fa fa-search fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"\r\n        viewBox=\"0 0 512 512\">\r\n        <path\r\n          d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\">\r\n        </path>\r\n      </svg>\r\n    </label>\r\n    <input v-model=\"userSearch\" type=\"search\" name=\"menu-search\" placeholder=\"press Enter for search\" class=\"search-form__input\">\r\n  </form>\r\n  `,\r\n  data() {\r\n    return {\r\n      userSearch: '',\r\n    }\r\n  },\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterProducts);\r\n\n\n//# sourceURL=webpack://edu-shop/./public/js/components/FilterComponent.js?");

/***/ }),

/***/ "./public/js/components/FooterPageComponent.js":
/*!*****************************************************!*\
  !*** ./public/js/components/FooterPageComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = {  \r\n  template: `\r\n  <footer>\r\n\t\t\t<div class=\"footer-top\">\r\n\t\t\t\t<div class=\"container footer-top__box\">\r\n\t\t\t\t\t<div class=\"comment\">\r\n\t\t\t\t\t\t<img src=\"img/footer-user-avatar.png\" alt=\"user avatar\" class=\"comment__img\">\r\n\t\t\t\t\t\t<blockquote class=\"comment__text\">\r\n\t\t\t\t\t\t\t&laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi, <span class=\"comment__text_italic\">\r\n\t\t\t\t\t\t\t\ta\r\n\t\t\t\t\t\t\t\tpulvinar\r\n\t\t\t\t\t\t\t\tpurus condimentum&raquo;</span>\r\n\t\t\t\t\t\t</blockquote>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"subscribe\">\r\n\t\t\t\t\t\t<p class=\"subscribe__text\">\r\n\t\t\t\t\t\t\t<span class=\"subscribe__text_bold\">\r\n\t\t\t\t\t\t\t\tsubscribe\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\tfor our newletter\r\n\t\t\t\t\t\t\tand promotion\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<form action=\"#\" class=\"subscribe__email-form\">\r\n\t\t\t\t\t\t\t<input type=\"email\" placeholder=\"Enter Your Email\" class=\"subscribe__email-input\">\r\n\t\t\t\t\t\t\t<button class=\"subscribe__button\">Subsribe</button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-bot\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"footer-bot__box\">\r\n\t\t\t\t\t\t<p class=\"footer-bot__copyright\">\r\n\t\t\t\t\t\t\t&copy;&nbsp;2021 Brand All Rights Reserved.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<ul class=\"footer-bot__social-list\">\r\n\t\t\t\t\t\t\t<li class=\"footer-bot__social-list-item\">\r\n\t\t\t\t\t\t\t\t<a href=\"//www.facebook.com/\" target=\"_blank\" class=\"social-button\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fab fa-facebook-f\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer-bot__social-list-item\">\r\n\t\t\t\t\t\t\t\t<a href=\"//www.instagram.com/\" target=\"_blank\" class=\"social-button\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fab fa-instagram\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer-bot__social-list-item\">\r\n\t\t\t\t\t\t\t\t<a href=\"//www.pinterest.ru/\" target=\"_blank\" class=\"social-button\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fab fa-pinterest-p\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer-bot__social-list-item\">\r\n\t\t\t\t\t\t\t\t<a href=\"//twitter.com/\" target=\"_blank\" class=\"social-button\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fab fa-twitter\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</footer>\r\n  \r\n  `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://edu-shop/./public/js/components/FooterPageComponent.js?");

/***/ }),

/***/ "./public/js/components/HeaderPageComponent.js":
/*!*****************************************************!*\
  !*** ./public/js/components/HeaderPageComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorComponent */ \"./public/js/components/ErrorComponent.js\");\n/* harmony import */ var _CartComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartComponent */ \"./public/js/components/CartComponent.js\");\n/* harmony import */ var _FilterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterComponent */ \"./public/js/components/FilterComponent.js\");\n\r\n\r\n\r\n\r\nconst headerPage = {\r\n  components: {\r\n    'filter-products': _FilterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    cart: _CartComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    error: _ErrorComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n  },\r\n  template: `<header class=\"header-page\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"header-menu\">\r\n\t\t\t\t\t\t<div class=\"header-menu__wrp\">\r\n\t\t\t\t\t\t\t<a href=\"index.html\"><img src=\"img/logo.svg\" alt=\"brand logo\" class=\"header-menu__logo\"></a>\r\n\t\t\t\t\t\t\t<!-- фильтр каталога товаров -->\r\n\t\t\t\t\t\t\t<filter-products></filter-products>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<ul class=\"header-menu__wrp\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<details class=\"category-nav\">\r\n\t\t\t\t\t\t\t\t\t<summary class=\"category-nav__dropdown\">\r\n\t\t\t\t\t\t\t\t\t</summary>\r\n\t\t\t\t\t\t\t\t\t<nav class=\"category-nav__menu\">\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"category-nav__title\">\r\n\t\t\t\t\t\t\t\t\t\t\tmenu\r\n\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"category-nav__heading\">\r\n\t\t\t\t\t\t\t\t\t\t\tman\r\n\t\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"category-nav__list\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tAccessories\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\" category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBags\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\" category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tDenim\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\" category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tT-Shirts\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"category-nav__heading\">\r\n\t\t\t\t\t\t\t\t\t\t\twoman\r\n\t\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"category-nav__list\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\" category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tAccessories\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tJackets &amp;&nbsp;Coats\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPolos\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tT-Shirts\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tShirts\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"category-nav__heading\">\r\n\t\t\t\t\t\t\t\t\t\t\tkids\r\n\t\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"category-nav__list\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tAccessories\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tJackets &amp;&nbsp;Coats\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPolos\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tT-Shirts\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tShirts\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"category-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"category-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBags\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t\t</details>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"registration.html\" class=\"header-menu__account\"></a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<!-- выпадающая корзина -->\r\n\t\t\t\t\t\t\t\t<cart ref=\"cart\"></cart>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</header>\r\n  `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerPage);\n\n//# sourceURL=webpack://edu-shop/./public/js/components/HeaderPageComponent.js?");

/***/ }),

/***/ "./public/js/components/MainPageCategoryComponent.js":
/*!***********************************************************!*\
  !*** ./public/js/components/MainPageCategoryComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mainPageCategory = {\r\n  template: `\r\n        <div>\r\n          <div class=\"main-page-category\">\r\n\t\t\t\t\t\t<div class=\"main-page-category__item main-page-category__item_bgi-women\">\r\n\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"main-page-category__link\">\r\n\t\t\t\t\t\t\t\t<p class=\"main-page-category__text\">\r\n\t\t\t\t\t\t\t\t\t30% off\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<h4 class=\"main-page-category__header\">\r\n\t\t\t\t\t\t\t\t\tfor women\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"main-page-category__item main-page-category__item_bgi-men\">\r\n\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"main-page-category__link\">\r\n\t\t\t\t\t\t\t\t<p class=\"main-page-category__text\">\r\n\t\t\t\t\t\t\t\t\thot deal\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<h4 class=\"main-page-category__header\">\r\n\t\t\t\t\t\t\t\t\tfor men\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"main-page-category__item main-page-category__item_bgi-kids\">\r\n\t\t\t\t\t\t\t<a href=\"catalog.html\" class=\"main-page-category__link\">\r\n\t\t\t\t\t\t\t\t<p class=\"main-page-category__text\">\r\n\t\t\t\t\t\t\t\t\tnew arrivals\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<h4 class=\"main-page-category__header\">\r\n\t\t\t\t\t\t\t\t\tfor kids\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"main-page-category__item main-page-category__item_bgi-accesories\">\r\n\t\t\t\t\t\t<a href=\"catalog.html\" class=\"main-page-category__link\">\r\n\t\t\t\t\t\t\t<p class=\"main-page-category__text\">\r\n\t\t\t\t\t\t\t\tluxerious &amp;&nbsp;trendy\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<h4 class=\"main-page-category__header\">\r\n\t\t\t\t\t\t\t\taccesories\r\n\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n        </div>\r\n  `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPageCategory);\n\n//# sourceURL=webpack://edu-shop/./public/js/components/MainPageCategoryComponent.js?");

/***/ }),

/***/ "./public/js/components/MainPageTitleComponent.js":
/*!********************************************************!*\
  !*** ./public/js/components/MainPageTitleComponent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mainPageTitle = {\r\n  template: `<section class=\"main-page-title\">\r\n\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t<div class=\"main-page-title__wrp\">\r\n\t\t\t\t\t\t\t<h1 class=\"main-page-title__header\">\r\n\t\t\t\t\t\t\t\tthe brand<span class=\"main-page-title__text\">of luxerious</span>\r\n\t\t\t\t\t\t\t</h1>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</section>\r\n        `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPageTitle);\n\n//# sourceURL=webpack://edu-shop/./public/js/components/MainPageTitleComponent.js?");

/***/ }),

/***/ "./public/js/components/ProductComponent.js":
/*!**************************************************!*\
  !*** ./public/js/components/ProductComponent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorComponent */ \"./public/js/components/ErrorComponent.js\");\n\n\nconst product = {\n    props: ['product'],\n    template: `\n            <li class=\"product-cards-box__list-item\">\n                <article class=\"card-item\">\n                    <a href=\"#\" class=\"card-item__link\">\n                        <img :src=\"product.img_product\" alt=\"product image\" class=\"card-item__img\">\n                        <header class=\"card-item__header-box\">\n                            <h4 class=\"card-item__title\">{{ product.product_name }}</h4>\n                            <p class=\"card-item__description\">Known for her sculptural takes\n                                on&nbsp;traditional\n                                tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with\n                                Moda\n                                Operandi.</p>\n                            <p class=\"card-item__price\">{{ product.price }} $</p>\n                        </header>\n                    </a>\n                    <div class=\"card-item__form\">\n                        <button class=\"card-item__button\" @click=\"$root.$refs.header.$refs.cart.addProduct(product)\">Add to&nbsp;Cart</button>\n                    </div>\n                </article>\n            </li>`\n}\n\n\nconst products = {\n\n   data(){\n       return {\n           catalogUrl: '/catalogData.json',\n           filtered: [],\n           products: [],\n           imgProduct: 'https://placehold.it/200x150'\n       }\n   },\n   components: {\n    product,\n    error: _ErrorComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n   },\n    mounted(){\n        this.$parent.getJson(`/api/products`)\n            .then(data => {\n                for (let item of data){\n                    this.$data.products.push(item);\n                    this.$data.filtered.push(item);\n                }\n            });\n    },\n    methods: {\n        filter(userSearch){\n            let regexp = new RegExp(userSearch, 'i');\n            this.filtered = this.products.filter(el => regexp.test(el.product_name));\n        }\n    },\n        template:\n        `<section class=\"page-product-cards\">\n            <header class=\"product-cards-header\">\n                <h3 class=\"product-cards-header__title\">\n                    Fetured Items\n                </h3>\n                <p class=\"product-cards-header__text\">\n                    Shop for items on&nbsp;what we&nbsp;featured in&nbsp;this week\n                </p>\n            </header>\n            <error ref=\"error\"></error>\n            <div v-show=\"!$root.error\">\n            <ul class=\"product-cards-box\" v-if=\"filtered.length\">\n                <product v-for=\"item of filtered\" \n                :key=\"item.id_product\" \n                :product=\"item\">\n                \n                </product>\n            </ul>\n            <h3 v-if='!filtered.length' class=\"no-product\">Поиск не дал результатов</h3>\n            <a href=\"#\" class=\"browse-all-product-button\">\n                Browse All Product\n            </a>\n            </div>\n        </section>\n        `\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);\n\n//# sourceURL=webpack://edu-shop/./public/js/components/ProductComponent.js?");

/***/ }),

/***/ "./public/js/components/index.js":
/*!***************************************!*\
  !*** ./public/js/components/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FooterPageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterPageComponent */ \"./public/js/components/FooterPageComponent.js\");\n/* harmony import */ var _AdvantagesComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdvantagesComponent */ \"./public/js/components/AdvantagesComponent.js\");\n/* harmony import */ var _CartComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartComponent */ \"./public/js/components/CartComponent.js\");\n/* harmony import */ var _ProductComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductComponent */ \"./public/js/components/ProductComponent.js\");\n/* harmony import */ var _FilterComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterComponent */ \"./public/js/components/FilterComponent.js\");\n/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorComponent */ \"./public/js/components/ErrorComponent.js\");\n/* harmony import */ var _MainPageCategoryComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainPageCategoryComponent */ \"./public/js/components/MainPageCategoryComponent.js\");\n/* harmony import */ var _MainPageTitleComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainPageTitleComponent */ \"./public/js/components/MainPageTitleComponent.js\");\n/* harmony import */ var _HeaderPageComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderPageComponent */ \"./public/js/components/HeaderPageComponent.js\");\n\n\n\n\n\n\n\n\n\n\n// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\n\nnew Vue({\n    el: '#app',\n    data: {\n        error: false\n    },\n    components: {\n        'footer-component': _FooterPageComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        advantages: _AdvantagesComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        products: _ProductComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        'filter-products': _FilterComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        cart: _CartComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        error: _ErrorComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        'main-page-category': _MainPageCategoryComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        'main-page-title': _MainPageTitleComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        'header-page': _HeaderPageComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    methods: {\n        getJson(url){\n            return fetch(url)\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error);\n                    this.error = true;\n                })\n        },\n        postJson(url, data){\n            return fetch(url, {\n                method: 'POST',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.error = true;\n                })\n        },\n        putJson(url, data){\n            return fetch(url, {\n                method: 'PUT',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.error = true;\n                })\n        },\n        deleteJson(url, data){\n            return fetch(url, {\n                method: 'DELETE',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => this.error = true);\n        },\n    },\n});\n\n\n\n//# sourceURL=webpack://edu-shop/./public/js/components/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/components/index.js");
/******/ 	
/******/ })()
;