<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

<div class="blob"></div>

<div class="grid grid--border">


  <div :class="CardClass(card)"  v-for="card in cards" :key="card.id" @click="SelectCard(card.id)">
    <div class="grid-card__title">
      <span>{{card.title}}</span>
    </div>
    <div class="grid-card__image">
      <img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
    </div>
    <input :class="'grid-card__btn--'+card.tag" type="button" value="select" v-if="card.state">
  </div>

</div>




  <div class="contain">
  <div class="card-list">
    <div class="card">
      <div class="card-header">Header</div>
      <div class="card-body"><img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt=""></div> 
      <div class="card-footer">Footer</div>
    </div>

    <div class="card">
      <div class="card-header">Header</div>
      <div class="card-body"><img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt=""></div>
      <div class="card-footer">Footer</div>
    </div>

    <div class="card abc">
      <div class="card-header">Header</div>
      <div class="card-body"><img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt=""></div>
      <div class="card-footer">Footer</div>
    </div>

    <div class="card">
      <div class="card-header">Header</div>
      <div class="card-body"><img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt=""></div>
      <div class="card-footer">Footer</div>
    </div>

    <div class="card">
      <div class="card-header">Header</div>
      <div class="card-body"><img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt=""></div>
      <div class="card-footer">Footer</div>
    </div>
    
  </div>
</div>


<div class="grid">
  <div class="grid-card">
    <div class="grid-card__title">
      <span>titre</span>
    </div>
    <div class="grid-card__image">
      <img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
    </div>
  </div>

  <div class="grid-card">
    <div class="grid-card__title">
      <span>titre</span>
    </div>
    <div class="grid-card__image">
      <img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
    </div>
  </div>

  <div class="grid-card">
    <div class="grid-card__title">
      <span>titre</span>
    </div>
    <div class="grid-card__image">
      <img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
    </div>
  </div>

  <div class="grid-card">
    <div class="grid-card__title">
      <span>titre</span>
    </div>
    <div class="grid-card__image">
      <img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
    </div>
  </div>

  <div class="grid-card">
    <div class="grid-card__title">
      <span>titre</span>
    </div>
    <div class="grid-card__image">
      <img src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
    </div>
  </div>
</div>






<div id="board">
  <div id="nemp"></div>
  <div class="frog"></div>
  <div class="frog"></div>
  <div class="frog"></div>
</div>

</template>


<script>
// @ is an alias to /src

export default {
  name: "About",
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
      border-radius:5px;
      border: none;
      color: white;
      padding: 13px 32px 13px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius:5px;
         
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
    @media (max-width:600px) {
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
    @media (max-width:600px) {
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
        @media (max-width:600px) {
          width: $gridCardSizeMobile -10%;
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

  /*--------------------------------------------------*/


  .contain{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    & .card-list{
      display:flex;
      flex-direction:row;
      justify-content: space-around;
      align-items: flex-start;
      @media (max-width:992px) {
        flex-direction:column;
        align-items: stretch;
      }

      & .card {
          min-width: 150px
      }

      /*& .abc{
        align-self:flex-end;
      }*/
    }
  }

  .element{
    background-color: darkgray;
    border: thick double #32a1ce;
    width:10%;
    height: 20vh;
    display: block;
  }

 
  .card-body img{
    width: 50%;
  height: auto;
  }
  
/*--------------------------------------------------------*/

   #board{
    margin: 50px;
    position: sticky;
    top: 0;
    width: 50vw;
    height: 50vw;
    min-width: 300px;
    min-height: 300px;
    max-width: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background-color: darkslategrey;
    border-radius: 10px;


    display:flex;
    justify-content: flex-end;
  }

  #nemp{
    
    margin: 10px 10px 10px 10px;
    position: relative;
    width: 20%;
    height: 20%;
    overflow: hidden;
    border-radius: 50%;
    background-color: forestgreen;
    position: absolute;
    left: 75%;
    top: 0;
    
  }
  .frog {
    margin: 10px 10px 10px 10px;
    position: relative;
    width: 15%;
    height: 15%;
    top: 2.5%;
    right: 1%;
    overflow: hidden;
    background-color: rgb(11, 70, 11);
    
}



/*https://www.florin-pop.com/blog/2019/03/css-pulse-effect/ --------------------------------------------*/
.blob {
	background: black;
	border-radius: 50%;
	margin: 10px;
	height: 20px;
	width: 20px;

	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: scale(1);
	animation: pulse 2s infinite;
}


@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
</style>
