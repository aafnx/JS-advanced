// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('cart', {
    data() {
        return {
            cartUrl: '/getBasket.json',
            cartItems: [],
            imgCart: 'https://placehold.it/200x150',
            showCart: false
        }
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents) {
                    this.$data.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(item) {
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, {
                        count: 1
                    })
                    .then(data => {
                        if (data.result === 1) {
                            find.count++
                        }
                    })
            } else {
                const prod = Object.assign({
                    count: 1
                }, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod)
                        }
                    })
            }
        },
        remove(item) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.count > 1) {
                            this.$parent.putJson(`/api/cart/${item.id_product}`, {
                                    count: -1
                                })
                                .then(data => {
                                    if (data.result === 1) {
                                        item.count--;
                                    }
                                });
                        } else {
                            this.$parent.deleteJson(`/api/cart/${item.id_product}`, item)
                                .then(data => {
                                    if (data.result === 1) {
                                        this.cartItems.splice(this.cartItems.indexOf(item), 1);
                                    }
                                })
                        }
                    }
                })
        },
    },

    computed: {
        cartCount() {
            return this.cartItems.reduce((summ, item) => summ + item.count, 0);
        },
        cartSumm() {
            return this.cartItems.reduce((summ, item) => summ + item.count * item.price, 0);
        }
    },
    template: `
        <div>
        <button class="header-menu__shopping-cart" type="button" @click="showCart = !showCart">
            <span class="count-in-cart" v-if="cartCount">{{ cartCount }}</span>
        </button>
        <div class="drop-down-cart" v-show="showCart">
            <error ref="error"></error>
            <div v-show="!$root.error">
                <h2 v-if="cartItems.length === 0">Корзина пуста</h2>
                    <div v-else class="cart-block">
                        <h3>
                        {{ cartCount }}
                        товара(ров)
                        ИТОГО:
                        {{ cartSumm }} $
                        </h3>
                        <cart-item 
                            v-for="item of cartItems"
                            :cart-item="item" 
                            @add-product="addProduct"
                            @remove="remove"
                        ></cart-item>
                    </div>  
            </div>
        </div>
        `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div class="cart-item">
        <div class="product-desc">
        <img :src="cartItem.img_product" class="imgInCart">
            <h3>{{ cartItem.product_name }}</h3>
            <p>Цена: {{ cartItem.price }} $</p>
            <div class="changeQuantity">
                <button class="del-btn btnInCart" @click="$emit('remove', cartItem)"> - </button>
                <p>&#160;{{ cartItem.count }}&#160; шт.&#160; </p>
                <button class="btnInCart" @click="$emit('add-product', cartItem)"> + </button>
            </div>          
            <p>Сумма: {{ cartItem.price * cartItem.count }} $</p>
        </div>
    </div>
    `
})