<template>
  <div class="container">
    <div class="header">
      <div class="header__burger" @click="BurgerClick()">
        <a href="/"><img :src="getImg('burger.png')" alt=""></a>
      </div>
      <div class="header__logo">
        <img :src="getImg('logo_topachat.png')" >
      </div>
      <div class="header__search">
        <input type="text" name="" id="" placeholder="Rechercher un produit, une marque, une référence...">
        <input type="image" :src="getImg('searchButton.png')">
      </div>      
      <div class="header__account">
        <a href="/"><img :src="getImg('account.png')" alt=""></a>
        <div> Mon compte</div>
      </div>
      <div class="header__basket">
        <a href="/"><img :src="getImg('basket.png')" alt=""></a>
        <div> Total: 100€ </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "NavBar",
  data(){
    return{
    }
  },
  computed: {},
  methods: {
    getImg(value) {
        return require("@/assets/topAchat/img/" + value);
    },
    BurgerClick(){
      this.$emit('menu', true);
    },
    
    
  },
 
};
</script>

<style lang="scss" scoped>
  $main-color: hsl(212, 38%, 50%);
  $secondary-color: hsl(212, 69%, 65%);
  $dark-color: hsl(212, 38%, 30%);
  $border-color: hsl(212, 13%, 37%);
  $input-color: hsl(212, 38%, 75%);

  @mixin mediaMedium(){
    @media (max-width:1050px) {
      @content
    }
  }

  @mixin mediaSmall(){
    @media (max-width:700px) {
      @content
    }
  }

   @mixin mediaVerySmall(){
    @media (max-width:535px) {
      @content
    }
  }

  @mixin iconText(){
    & div {
      padding: 10px;
      color:white;
      @include mediaMedium(){
        display:none;
      }
    }
  }


  .container{
    margin:0px;
    padding:0px;
    max-width:100%;
    background-color: #4f7cb0;
    position:sticky;
    top:0;
  }
  .header{
    display: grid;
    grid-template-columns: 250px 1fr auto  auto ;
    grid-template-rows: auto;
    grid-template-areas: 
    "logo search account basket";
    column-gap: 10px;
    row-gap: 10px;
    place-items:center;
    
    background-color: $main-color;
    padding:20px 10px 20px 10px;
    max-width: 1400px;
    margin:0 auto;

    @include mediaMedium(){
      grid-template-columns: 75px 1fr 1fr 50px  80px ;

      grid-template-areas: 
    " burger logo . account basket"
    " search search search search search";
    }

    @include mediaVerySmall(){
        grid-template-columns: 55px 1fr 0px 50px  60px ;
        padding:20px 0px 20px 0px;
        column-gap:0px;
    }



    &__search{
      justify-self:stretch;
      grid-column: search-start / search-end;

      padding: 0px 20px 0px 20px;
      & input[type=text] {
        padding: 20px 10px 20px 10px;
        width: 100%;
        border-radius: 2px;
        border: 1px solid $border-color;
        background-color: $input-color;
        font-size: 1em;
      }
      & input[type=image]{
        /*https://stackoverflow.com/questions/7273338/how-to-vertically-align-an-image-inside-a-div*/
        /*https://stackoverflow.com/questions/35821279/positioning-an-image-inside-a-text-input-box/35821416*/
        vertical-align: middle;
        margin-left: -55px; 
      }
      @include mediaMedium(){
        grid-area:search;
      }

      @include mediaVerySmall(){
        padding: 0px 10px 0px 0px;
      }

    }

    &__burger{
      display:none;
      cursor: pointer;
      
      & a {
        pointer-events: none;
        
      }
      @include mediaMedium(){
        display:initial;
        justify-self:end;
      }
    }

    &__logo {
      justify-self:start;
      align-self:center;
        img{
        @include mediaVerySmall(){
          width: 100%;
          min-width:75px;
          height: auto;
        }
      }
    }
    

    &__account{
      grid-area: account;

      display:flex;
      flex-direction:row;

      @include iconText();
    }

    &__basket{
      grid-area:basket;

      display:flex;
      flex-direction:row;

      @include iconText();
    }
    



    /* remove default outline */
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
  }

</style>
