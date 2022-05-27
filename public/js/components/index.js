import footer from './FooterPageComponent'
import advantages from './AdvantagesComponent';
import cart from './CartComponent';
import products from './ProductComponent';
import filterProducts from './FilterComponent';
import error from './ErrorComponent';
import mainPageCategory from './MainPageCategoryComponent';
import mainPageTitle from './MainPageTitleComponent';
import headerPage from './HeaderPageComponent';

// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

new Vue({
    el: '#app',
    data: {
        error: false
    },
    components: {
        'footer-component': footer,
        advantages,
        products,
        'filter-products': filterProducts,
        cart,
        error,
        'main-page-category': mainPageCategory,
        'main-page-title': mainPageTitle,
        'header-page': headerPage
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error);
                    this.error = true;
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.error = true;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.error = true;
                })
        },
        deleteJson(url, data){
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.error = true);
        },
    },
});

