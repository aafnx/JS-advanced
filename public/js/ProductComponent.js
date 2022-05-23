Vue.component('products', {
   data(){
       return {
           catalogUrl: '/catalogData.json',
           filtered: [],
           products: [],
           imgProduct: 'https://placehold.it/200x150'
       }
   },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
        template:
        `<div>
            <error ref="error"></error>
            <div v-show="!$root.error">
            <ul class="product-cards-box" v-if="filtered.length">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :product="item">
                
                </product>
            </ul>
            <h3 v-else class="no-product">Поиск не дал результатов</h3>
            </div>
        </div>
        `
});
Vue.component('product', {
    props: ['product'],
    template: `
            <li class="product-cards-box__list-item">
                <article class="card-item">
                    <a href="product.html" class="card-item__link">
                        <img :src="product.img_product" alt="product image" class="card-item__img">
                        <header class="card-item__header-box">
                            <h4 class="card-item__title">{{ product.product_name }}</h4>
                            <p class="card-item__description">Known for her sculptural takes
                                on&nbsp;traditional
                                tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with
                                Moda
                                Operandi.</p>
                            <p class="card-item__price">{{ product.price }} $</p>
                        </header>
                    </a>
                    <div class="card-item__form">
                        <button class="card-item__button" @click="$root.$refs.cart.addProduct(product)">Add to&nbsp;Cart</button>
                    </div>
                </article>
            </li>`
});