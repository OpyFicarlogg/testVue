
<template>
    
    <div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>


    <div class="main">

        <div class="container-object">
            <div class="object" v-for="index in 10" :key="index">
                    <div class="object-grid" @click="active != index ? active=index : active = -1">
                        <div class="object-grid__img">
                            <img  src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
                        </div>
                        <div class="object-grid__app">appName</div>
                        <div class="object-grid__tags">tags</div>
                        <div class="object-grid__wsname">wsname</div>
                        <div class="object-grid__dropdown">v</div>
                    </div>
                    <transition name="fade">
                        <div class="object__dropdown" v-if="active == index">test
                        </div>
                    </transition>
            </div>
        </div>

        <div class="container-left">
            <div class="elem-left" v-for="card in cards" :key="card.id">
            
            <div class="elem-left__txt"> {{card.tag}} </div>
            <div class="elem-left__img"><img :src="getImg('account.png')" alt=""></div>
            </div>
        </div>

        <div class="container">
            <div class="elem" v-for="card in cards" :key="card.id">
            <div class="elem__img"><img :src="getImg('account.png')" alt=""></div>
            <div class="elem__txt"> {{card.tag}} </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
  name: "Sandbox",
  data(){
    return{
      cards:[
        {id:1, title: "Joe", tag:"legendary", state:true},
        {id:2, title: "Mike", tag:"common",state:false},
        {id:3, title: "Herwin", tag:"rare",state:false},
        {id:4, title: "Pascal", tag:"epic",state:false},
        {id:5, title: "Eric", tag:"epic",state:false},
      ],
      active:-1,
      show: true,
    }
  },
  computed: {},
  methods: {
       getImg(value) {
        return require("@/assets/topAchat/img/" + value);
    },
  },
};
</script>

<style lang="scss" scoped>
    .main{
        position:absolute;
        background-color:hsl(213, 29%, 85%);
        min-height:100vh;
        width:100%;
    }

    .container-object{
        display:grid;
        row-gap: 60px;
        margin-top:60px;

    }
    .object{
        

        &__dropdown{
            background-color:grey;
            margin: 0 auto;
            height:0;
            width:800px;
            border-radius:0px 0px 8px 8px;
            overflow:hidden; /* ou bien opacity:0*/
            opacity:0;
            transition: 0.5s ease-in-out;
        }

        &-grid{

            width:800px;
            height:120px;
            background-color:hsl(0, 0%, 100%);
            border-radius:8px 8px 0px 0px;
            text-align:initial;
            margin: 0 auto;

            display:grid;
            grid-template-columns: 100px 200px 250px 250px;
            grid-template-rows: 35px 50px 35px;
            grid-template-areas: 
            ". app . tags"
            "img wsName . ."
            ". . . dropdown";

            &:hover + .object__dropdown{
                height:50px;
                opacity:100;
                
            }


            &__img{
                text-align:center;
                grid-area:img;

                & img {
                    width:50px;
                }
            }

            &__app{
                grid-area:app;
            }

            &__tags{
                grid-area:tags;
            }

            &__wsname{
                grid-area:wsName;
            }

            &__dropdown{
                grid-area:dropdown;
            }
        }

        
    }

 .fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
 }
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

















    .container-left{
        display:flex;
        flex-direction:column;
        justify-content: space-evenly;
        background-color:rgb(33, 99, 185);
        height:100vh;
        width:90px;
        position:fixed;
        left:0px;
        top:0px;
        padding:0;

    }


    .elem-left{
        display:flex;
        height:70px;
        width:250px;
        line-height: 70px;
        background-color:rgb(33, 99, 185);
        border-radius: 0px 15px 15px 0px;
        transition: 0.5s ease-in-out;
        transform:translateX(-160px);

        &:hover{
            transform:translateX(0px);
        }
        
        &__img{
            padding: 0px 21px 0px 21px;
            
        }
        &__txt{
            color:white;
            font-weight: 600;
            height:100%;
            width:100%;
            padding: 0px 15px 0px 15px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            text-align: center;
            vertical-align: middle;
        }
    }





    .container{
        display:flex;
        flex-direction:column;
        justify-content: space-evenly;
        background-color:rgb(33, 99, 185);
        height:100vh;
        width:90px;
        position:fixed;
        right:0px;
        top:0px;
        padding:0;

    }

    .elem{
        display:flex;
        height:70px;
        width:250px;
        line-height: 70px;
        background-color:rgb(33, 99, 185);
        border-radius: 0px 15px 15px 0px;
        transition: 0.5s ease-in-out;

        &:hover{
            transform:translateX(-160px)
        }
        
        &__img{
            padding: 0px 0px 0px 21px;
            
        }
        &__txt{
            color:white;
            font-weight: 600;
            height:100%;
            width:100%;
            padding: 0px 15px 0px 15px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            text-align: center;
            vertical-align: middle;
        }
    }
    
</style>
