<template>
    <h1>Cards</h1>

    <div class="menu">
      <div class="menu__burger" @click="BurgerClick()">
        <BIconList style="width: 50px; height: 50px;"/>
      </div>
      <div class="menu__img">
        <BIconDice-3 style="width: 50px; height: 50px;"/>
      </div>
      <div class="menu__center"/>
      <div class="menu__elements" v-if="windowWidth > 660 || menu">
        <div class="menu__elements__el">
          <BIconPencilSquare />
          <span>menu 2</span>
        </div>
        <div class="menu__elements__el">
          <BIconPencilSquare />
          <span>menu 2</span>
        </div>
        <div class="menu__elements__el">
          <BIconPencilSquare />
          <span>menu 3</span>
        </div>
      </div>
      
    </div>


    <div class="flex flex--border">
        <div class="flex-card"  v-for="card in cards" :key="card.id" @click="SelectCard(card.id)">
            <div class="flex-card__title">
            <span>{{card.title}}</span>
            </div>
            <div class="flex-card__image">
            <img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
            </div>
            <input class="flex-card__btn" type="button" value="Select" v-if="card.state">
        </div>
    </div>


    <form class="example">
      <div class="wrapper"><label for="text">Label</label><input type="text" id="text"><input type="submit" value="Send"></div>
    </form>

     <p>window height: {{ resolutionWidth }}</p>
</template>

<script>
import { useWindowSize } from 'vue-window-size';

export default {
  name: "Flex",
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  data(){
    return{
      cards:[
        {id:1, title: "Joe", tag:"legendary", state:true},
        {id:2, title: "Mike", tag:"common",state:false},
        {id:3, title: "Herwin", tag:"rare",state:false},
        {id:4, title: "Pascal", tag:"epic",state:false},
        {id:5, title: "Eric", tag:"epic",state:false},
      ],
      menu:false,
      resolutionWidth:0, 
    }
  },
  methods: {
    SelectCard(id) {
      this.cards.forEach(el=> {
        el.state= false;
      });
      var index = this.cards.findIndex((obj => obj.id == id));
      this.cards[index].state = true;
    },
    CardClass(card){
      var cardClass="grid-card";
      if(card.state){
        cardClass+="--select";
      }
      return cardClass+"--"+card.tag;
    },
    BurgerClick(){
      this.menu = this.menu ? false :true;
    },
    handleOrientationChange() {
      const orientation = screen.orientation.type;
      if (orientation === "portrait-primary") {
        // portrait mode
        console.log("portrait");
      } else if (orientation === "landscape-primary") {
        // landscape mode
        console.log("landscape");
      }
    },
    handleResolutionChange(){
      const width =window.innerWidth;
      this.resolutionWidth =width;
      this.menu = false;
    },
  },
  computed: {},
  watch: {//https://vuejs.org/v2/guide/computed.html
  },
  mounted() {
    window.addEventListener("resize", this.handleResolutionChange); //https://stackoverflow.com/questions/49380830/vue-js-how-to-get-window-size-whenever-it-changes
    window.addEventListener("orientationchange",this.handleOrientationChange); //https://stackoverflow.com/questions/4917664/detect-viewport-orientation-if-orientation-is-portrait-display-alert-message-ad
  },
  unmounted() {
    window.addEventListener("orientationchange",this.handleOrientationChange);
    window.removeEventListener("resize", this.handleResolutionChange);
  },
};
</script>

<style lang="scss" scoped>

  .menu{
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 10px 0px 10px 0px;
    background-color: rgb(204, 203, 203);

    /*& > * {
      padding: 10px;
      flex: 1 100%;
    }*/

    &__burger{
      flex: 1;
      text-align: left;      
    }
 
    &__img{
      flex: 1 ;   
    }

    &__center{ /*création d'un élément qui prend de la place pour pouvoir centrer l'image*/
      @media (max-width:660px) {
        flex: 1;
      }
    }

    &__elements{
      display:flex;
      flex-flow:row wrap;
      justify-content:flex-end;

      flex: 1;
      text-align:right;
      margin-right:10px;

      @media (max-width:660px) {
        flex: 1 0 100%; /*passer en 100% pour le retour à la ligne */
        text-align: unset;
      }


      &__el{
        padding:10px;

        @media screen and (min-width:660px) and (max-width:820px) { /*Suppression de l'affichage du titre*/
          margin:0px 10px 0px 10px;
          & span {
            display:none; /* visibility: collapse*/
            
          }
        }          

        @media (max-width:660px) {
          flex: 1 0 100%;
        }
      }

    }

      
  }

 
  /*@mixin MediaMenu(){
    @media (min-width:600px) {
      @content
    }
  }

  .menu{
    display:flex;
    flex-flow: row wrap;
    margin-bottom: 50px;
    align-items: center;

    &__burger{
      align-self:flex-start;
      flex-grow:1;
      text-align: left;
      @include MediaMenu(){
        visibility:hidden;
      }
    }

    
    &__img{
      flex-grow:8;
      align-self:flex-start;
      min-width:300px;
      
    }

    &__elements{
      flex-grow:1;
      flex-basis:70px;
      min-width: 70px;
      flex-shrink:1;

      display:flex;
      flex-flow:row wrap;
      justify-content:flex-end;

      &__el{
        padding:10px;

        @media (max-width:600px) {
          flex-grow:1;
          min-width: 200px;
        }
      }

      @media (max-width:600px) {
        visibility: hidden;
        flex-grow:3;
      }
    }
    
  }*/



/*--------------------------------------*/
.wrapper {
  display: flex;

}

.wrapper input[type="text"] {
    flex: 1 1 auto;
}

/*--------------------------------------*/


  .flex{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-content:space-around;
    padding: 20px 20px;
    background-color: rgb(221, 221, 221);






    @mixin mediaCards(){
      @media (max-width:400px) {
        @content
      }
    }

    @mixin mediaCards170(){
        @media (max-width:170px) {
          @content
        }
    }   

    &-card{
      flex-basis: 200px;
      height: 200px;
      border-radius:30px;
      border: solid black;
      margin-bottom: 50px;
      @include mediaCards(){
        flex-grow:1;
      }
      
      & img{
        margin:20px;
      }

      &__title{
        margin:12px;
      }
      &__btn{
        background-color: black;     
        border-radius:20px 20px 0px 0px;
        border: none;
        color: white;
        padding: 13px 32px 13px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;

        @include mediaCards170(){
            border-radius:20px 20px 15px 15px;
        }
      }
    }
  }



</style>
