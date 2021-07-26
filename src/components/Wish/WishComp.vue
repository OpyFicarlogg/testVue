<template>  
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
  <nav>
    <div class="nav-container">
      <div id="logo">
        <img src="@/assets/wish/img/wish-logo-800.png" alt="logo" />
      </div>

      <ul id="icons">
        <li>
          <i class="fas fa-user"></i>
        </li>
        <li>
          <i class="fas fa-heart"></i>
          <span id="nav-notif"></span>
        </li>
        <li>
          <i class="fas fa-shopping-cart"></i>
        </li>
      </ul>
    </div>
  </nav>
  <WishHome v-bind:articles="products"/>

</template>

<script>
import WishHome from "@/components/Wish/WishHome.vue";

export default {
  name: "WishComp",
  data(){
    return{
      menu:"home",
      products : [
        { id: 1, description: "Quarz Luxe", price: 12, img: 'quarz-luxe.jpg'},
        { id: 2, description: 'Curren Business', price: 20, img: 'curren-business.jpg'},
        { id: 3, description: 'Curren Sport', price: 5, img: 'curren-sport.jpg'},
        { id: 4, description: 'Jaragar Racing', price: 8, img: 'jaragar-racing.jpg'},
        { id: 5, description: 'Liges Hommes', price: 3, img: 'liges-hommes.jpg'},
        { id: 6, description: 'Maserati Mechanical', price: 65, img: 'maserati-mechanical.jpg'},
        { id: 7, description: 'Montre Mecanique', price: 25, img: 'montre-mecanique.jpg'},
        { id: 8, description: 'Brand Designer', price: 28, img: 'brand-designer.jpg'},
        { id: 9, description: 'Relogio Masculino', price: 4, img: 'relogio-masculino.jpg'},
        { id: 10, description: 'Tissot Multifunction', price: 29, img: 'tissot-multifunction.jpg'},
        { id: 11, description: 'Hip Hop Gold', price: 87, img: 'hiphop-gold.jpg'},
        { id: 12, description: 'Mesh Genova', price: 6, img: 'mesh-genova.jpg'},
      ],
    }
  },
  components: {
    WishHome,
  },
};


// passage en version 10 https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   @import "../../assets/wish/style/style.css";

</style>
