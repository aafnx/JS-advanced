import error from "./ErrorComponent";

const product = {
    props: ['product'],
    template: `
            <li class="product-cards-box__list-item">
                <article class="card-item">
                    <a href="#" class="card-item__link">
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
                        <button class="card-item__button" @click="$root.$refs.header.$refs.cart.addProduct(product)">Add to&nbsp;Cart</button>
                    </div>
                </article>
            </li>`
}


const products = {

   data(){
       return {
           catalogUrl: '/catalogData.json',
           filtered: [],
           products: [],
           imgProduct: 'https://placehold.it/200x150'
       }
   },
   components: {
    product,
    error
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
        `<section class="page-product-cards">
            <header class="product-cards-header">
                <h3 class="product-cards-header__title">
                    Fetured Items
                </h3>
                <p class="product-cards-header__text">
                    Shop for items on&nbsp;what we&nbsp;featured in&nbsp;this week
                </p>
            </header>
            <error ref="error"></error>
            <div v-show="!$root.error">
            <ul class="product-cards-box" v-if="filtered.length">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :product="item">
                
                </product>
            </ul>
            <h3 v-if='!filtered.length' class="no-product">Поиск не дал результатов</h3>
            <a href="#" class="browse-all-product-button">
                Browse All Product
            </a>
            </div>
        </section>
        `
}


export default products