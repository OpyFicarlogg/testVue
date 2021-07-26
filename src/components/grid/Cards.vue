<template>
    <div class="grid grid--border">
        <div :class="CardClass(card)"  v-for="card in cards" :key="card.id" @click="SelectCard(card.id)">
            <div class="grid-card__title">
            <span>{{card.title}}</span>
            </div>
            <div class="grid-card__image">
            <img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
            </div>
            <input :class="'grid-card__btn--'+card.tag" type="button" value="Select" v-if="card.state">
        </div>
    </div>
</template>

<script>
export default {
  name: "Cards",
  data(){
    return{
      cards:[
        {id:1, title: "Joe", tag:"legendary", state:true},
        {id:2, title: "Mike", tag:"common",state:false},
        {id:3, title: "Herwin", tag:"rare",state:false},
        {id:4, title: "Pascal", tag:"epic",state:false},
      ],
    }
  },
  computed: {},
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
    }
  },
};
</script>

<style lang="scss" scoped>
$gridCardSize:250px;
$gridCardSizeMobile:90%;

$tags:(
  legendary: #FFBF00,
  epic:#CD2EFF,
  rare:#0061FF,
  common: #1E7C20
);


@mixin mediaCards(){
    @media (max-width:740px) {
      @content
    }
}

@mixin mediaCards400(){
    @media (max-width:400px) {
      @content
    }
}

@mixin tagColor($tags, $select){
  @each $tag, $color in $tags{
    &--#{$tag}{
      @if($select){
        border: 1rem solid  $color;
      }@else{
        border: solid $color;
      }
      
      border-radius:30px;

      animation-play-state: paused;
      &:hover {
        box-shadow: 0 0 0 0 rgba($color, 1);
	      transform: scale(1);
	      animation: pulse-#{$tag} 2s infinite;
      }
    }
  }
}

@mixin tagButtonColor($tags){
  @each $tag, $color in $tags{
    &--#{$tag}{
      background-color: $color;     
      border-radius:5px 5px 0px 0px;
      border: none;
      color: white;
      padding: 13px 32px 13px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
  }
}

@mixin pulseKeyFrames($tags) {
  @each $tag, $color in $tags{
    @keyframes pulse-#{$tag} {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba($color, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba($color, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba($color, 0);
      }
    }
  }
}

@include pulseKeyFrames($tags);

  /*https://stackoverflow.com/questions/43115822/can-i-make-a-css-grid-with-dynamic-number-of-rows-or-columns*/
  .grid{
    @include mediaCards(){
        grid-template-columns: repeat(auto-fill, $gridCardSizeMobile);
        grid-auto-rows: auto;
    }


    display: grid;
    grid-template-columns: repeat(auto-fill, $gridCardSize);
    grid-auto-rows: $gridCardSize + 100px;
    row-gap: .5em;
    column-gap: 5em;   
    justify-content: center; 

    &--border{
      border: solid rgb(199, 196, 196);
      border-radius:30px;
      margin: 50px;
      padding: 20px;
    }
    
  }

  .grid-card{
    @include mediaCards(){
      width: 100%;
    }

    height: fit-content;
    margin: 10px;
    padding: 15px;
    border: solid rgb(199, 196, 196);
    border-radius:30px;
    &__title {
        font-size: 2em;
        margin-bottom: 20px;
    }
    &__image {
      margin: 10px auto;
      & img{
        @include mediaCards(){
          width: $gridCardSizeMobile -10%;
        }

         @include mediaCards(){
          width: auto;
          height: auto;
          max-width: 100%;
        }

        width: $gridCardSize - 50px;
        height: auto;
      }   
    }
    &__btn{
      @include tagButtonColor($tags);
    }

    &--select{
      border-radius:30px;
      border: 1rem solid  rgb(199, 196, 196);

      @include tagColor($tags,true);
    }

    @include tagColor($tags,false);
  }

</style>
