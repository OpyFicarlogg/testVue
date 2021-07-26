<template>
  <div class="home-container">
    <h1>Articles</h1>

    <!-- search display -->
    <input
      v-model="searchKey"
      type="search"
      placeholder="Recherche..."
      id="search"
      autocomplete="off"
    />
    <span v-if="SearchArticles.length != 0"
      >{{ SearchArticles.length }} résultat<span
        v-if="SearchArticles.length > 1"
        >s</span
      ></span
    >

    <!-- card-display -->
    <div class="card-cart-container">
      <div class="card-container">
        <div v-for="article in SearchArticles" :key="article.id" class="card">
          <div class="img-container">
            <img :src="getImgArt(article.img)" alt="" />
            <!--<img :src="img/quarz-luxe.jpg" alt="">  IN PUBLIC-->
          </div>

          <div class="card-text">
            <h3>{{ article.description }}</h3>
            <span>{{ article.price }}€</span>
          </div>

          <div class="card-icons">
            <div class="like-container">
              <!-- permet de bind une checkbox à une liste -->
              <input
                type="checkbox"
                name="checkbox"
                :id="article.id"
                :value="article.id"
                v-model="liked"
                @click="setLikeCookie()"
              />
              <label :for="article.id">
                <i class="fas fa-heart" />
              </label>
            </div>

            <div class="add-to-cart">
              <button @click="addToCart(article)">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="SearchArticles.length == 0">
      <h3>Désolé, pas de résultats.</h3>
    </div>
    <!-- cart display --> 
    <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
        <h2>Panier</h2>
        <div class="item-group">
            
            <div v-for="c in cart" :key="c.product.id" class="item">
                <div class="img-container">
                    <img :src="getImgArt(c.product.img)" alt="" />
                </div>
                
                <div class="item-description">
                    <h4>{{c.product.description}}</h4>
                    <p>{{c.product.price}}€</p>
                </div>
                

                <div class="item-quantity">
                    <h6>quantité: {{c.quantity}}</h6>
                </div>

                <div class="cart-ico">
                    <button>
                        <i class="fa fa-plus" @click="cartPlusOne(c)"></i>
                    </button>
                    <button>
                        <i class="fa fa-minus" @click="cartMinusOne(c)"></i>
                    </button>
                    <button>
                        <i class="fa fa-trash" @click="cartRemoveItem(c.product.id)"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="grand-total">
          <div class="total">
            <h2>Total</h2>
            <h2>{{cartTotalAmount}}€</h2>
          </div>
          <h6>Nombre d'articles: {{itemTotalAmount}}</h6>
        </div>       
    </div>

  </div>
</template>

<script>
export default {
    name: "WishHome",
    props: {
        articles: {
        type: Array,
        required: true
        },
    },
    data() {
        return {
            searchKey: "",
            liked: [],
            cart:[],
            publicPath: process.env.BASE_URL,
        };
    },
    computed: {
        SearchArticles() {
            return this.articles.filter((article) => {
                return article.description.toLowerCase().includes(this.searchKey);
            });
        },
        cartTotalAmount(){
          let total= 0;
          this.cart.forEach(element => {
            total+= element.product.price * element.quantity;    
          });
          return total;
        },
        itemTotalAmount(){
          let total= 0;
          this.cart.forEach(element => {
            total+=  element.quantity;    
          });
          return total;
        },
    },
    methods: {
        getImgArt(value) {
            //Must be partially static https://forum.vuejs.org/t/vue-cli-3-project-dynamic-src-in-image-path-not-working/55375/3
            // https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working
            return require("@/assets/wish/img/" + value);
        },
        setLikeCookie() {
            document.addEventListener("input", () => {
                setTimeout(() => {
                    this.$cookie.set('like',JSON.stringify(this.liked));
                }, 300);
            });
        },
        getLikeCookie(){
            let cookieValue = JSON.parse(this.$cookie.get("like"));
            cookieValue == null ? this.liked = [] : this.liked = cookieValue;
        },
        addToCart(article){
            for(let i = 0; i < this.cart.length; i++){
                if(this.cart[i].product.id === article.id){
                    return this.cart[i].quantity++
                }
            }
            this.cart.push({
                product : article, 
                quantity : 1
            })
        },
        cartPlusOne(c){
            c.quantity = c.quantity +1;
        },
        cartMinusOne(c){
          c.quantity == 1? this.cartRemoveItem(c.product.id): c.quantity -=1;
        },
        cartRemoveItem(id){
          //this.cart.splice(id,1);
          this.cart = this.cart.filter((item) => item.product.id != id);
        }

    },   
    mounted() {
        this.getLikeCookie();
    }

};
</script>
;
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/wish/style/style.css";
</style>
