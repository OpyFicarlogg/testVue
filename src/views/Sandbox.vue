
<template>

    <div class="main">

        <div class="container-object">
            <div class="object" v-for="index in 10" :key="index">
                    <div :class=" active == index ? 'object__grid active' : 'object__grid'" @click="active != index ? active=index : active = -1">
                        <div class="object__grid__img">
                            <img  src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
                        </div>
                        <div class="object__grid__app">Application</div>
                        <div class="object__grid__tags">
                            <div>tags</div>
                            <div>tags</div>
                        </div>
                        <div class="object__grid__wsname">Application test</div>
                        <div class="object__grid__dropdown">
                            <img  :class="active==index ? 'svg-rotate' : '' "  :src="getImg('arrow.svg')" alt="">
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="object__dropdown" v-if="active == index">
                            <div class="object__dropdown__app">
                                <input type="text" name=""  placeholder="Application">
                                <img :src="getImg('arrow.svg')" alt="">
                                <div class="options">
                                    <div>a</div>
                                    <div>a</div>
                                    <div>a</div>
                                    <div>a</div>
                                    <div>a</div>
                                </div>
                            </div>

                            <div class="object__dropdown__category">
                                <input type="text" name=""  placeholder="Todo">
                                <img :src="getImg('arrow.svg')" alt="">
                            </div>

                            <div class="object__dropdown__type">
                                <input type="text" name=""  placeholder="Type">
                                <img :src="getImg('arrow.svg')" alt="">
                            </div>

                            <input type="text" name="" class="object__dropdown__redirect" placeholder="redirect">
                            <input type="text" name="" class="object__dropdown__request" placeholder="request">
                            <textarea  class="object__dropdown__description" placeholder="description"></textarea>
                            <button class="object__dropdown__submit">Valider</button>

                            <label  class="object__dropdown__opt" >
                                <input type="checkbox" style="margin-right:10px;"> 
                                <span>Autoriser la connexion sans Api-Key</span>
                            </label>

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
        return require("@/assets/" + value);
    },
  },
};
</script>

<style lang="scss" scoped>


    @mixin tag{
        color: #A0A0A0;
        height:25px;
        line-height:25px;
        border-radius:5px;
        text-align: center;
        background-color:#F1F1F1;
    }

     @mixin inputOptions(){

        position:relative;
        width:190px;
        & input {
            width: 100%;
            height:100%;
        }

        & img {
            position:absolute;
            top: 50%;
            transform: translateX(-30px) translateY(-50%);
            width:20px;
            filter: invert(70%) sepia(49%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(106%);
        }
    }
    


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
        height:100%;

    }
    .object{
        
        width:1000px;
        max-width:1000px;
        margin: 0 auto;
        &__grid{
            height:120px;
            background-color:hsl(0, 0%, 100%);
            border-radius:8px 8px 8px 8px;
            transition: border-radius .5s;
            text-align:initial;

            display:grid;
            grid-template-columns: 100px 200px 450px 200px 50px;
            grid-template-rows: 35px 50px 35px;
            grid-template-areas: 
            ". app tags tags tags"
            "img wsName . . ."
            ". . . . dropdown";

            &.active{
                border-radius:8px 8px 0px 0px;
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
                @include tag();
                margin-top: 10px;
                width:fit-content;
                padding: 0px 15px 0px 15px;
            }

            &__tags{
                display:flex;
                align-items:flex-end;
                justify-content:flex-end;
                grid-area:tags;
                
                & div {
                    @include tag();
                    margin-right:30px;
                    width:100px;
                }
            }

            &__wsname{
                grid-area:wsName;
                line-height: 50px;
                font-size: 24px;

            }

            &__dropdown{
                grid-area:dropdown;

                & img {
                    transition: .5s ease-in-out; 
                    width:15px;
                    filter: invert(70%) sepia(49%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(106%);

                    &.svg-rotate{
                        transform: rotate(180deg);
                    }
                }
            }
        }

        &__dropdown{
            background-color:hsl(0, 0%, 100%);
            border-radius:0px 0px 8px 8px;
            overflow:hidden; /* ou bien opacity:0*/
            transition: 0.5s ease-in-out;
            height:410px;
            border-top:2px solid hsla(0, 0%, 85%,0.25);
            padding: 40px 60px;

            display:grid;
            grid-template-columns: 250px 190px 190px 250px;
            grid-template-rows: 40px 40px 90px 40px;
            row-gap: 40px;
            grid-template-areas: 
            "app category category type "
            " redirect redirect request request "
            " description description description description "
            " . submit submit opt";

            justify-items:center;


           & input, textarea {
               background-color: #F4F6FA;
               color:#BFBFBF;
               border:none;
               border-radius: 5px;
               padding: 10px 40px 10px 10px;
               resize: none;

               &::placeholder{
                   color:#BFBFBF;
               }

               &:focus{
                   box-shadow: inset 0px 1px 4px -3px black;
               }
            

           } 


           
            &__app{
                grid-area: app;

                @include inputOptions();
            }

            &__category{
                grid-area: category;

                @include inputOptions();
            }

            &__type{
                grid-area: type;

                @include inputOptions();
            }

            &__redirect{
                grid-area: redirect;
                width:380px;
            }

            &__request{
                grid-area: request;
                width:380px;
            }
            
            &__description{
                grid-area: description;
                width:820px;
            }

            &__submit{
                grid-area: submit;
                width:110px;
                border:none;
                height:40px;
                border-radius:9px;
                background-color:#42B466;
                color:#FFFFFF;
            }

            &__opt{
                grid-area: opt;
                font-size: 12px;
                height:100%;
                color: #BBBBBB;
                
                display: flex;
                justify-self: start;
                align-items:center;
                
            }
        }

        
    }




.fade-enter-active, .fade-leave-active {
  transition:  .7s;
 }
.fade-enter-from, .fade-leave-to {
  height:0px;
  padding: 0px 60px;
}


input:focus, textarea:focus, select:focus, button:focus{
        outline: none;
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
