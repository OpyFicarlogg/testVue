
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
                            <!-- type: dropdown, input, textarea || data: source || name: application --> 
                            <div class="object__dropdown__app floating-label">
                                <input type="text" name="application" v-model="searchKey"  required>
                                <label for="application">Application</label>
                                <img :src="getImg('arrow.svg')" alt="">
                                <div class="floating-label__options">
                                    <div @click="dropdownInputValue($event,option)" v-for="(option,index) in optionsFilter" :key="index">
                                        {{option}}
                                    </div>
                                </div>
                            </div>

                            <div class="object__dropdown__category floating-label">
                                <input type="text" name="category"  required>
                                <label for="category">Catégorie</label>
                                <img :src="getImg('arrow.svg')" @click="focusInput()">
                            </div>

                            <div class="object__dropdown__type floating-label">
                                <input type="text" name="type"   required>
                                <label for="type">Type</label>
                                <img :src="getImg('arrow.svg')" alt="">
                            </div>

                            <div class="object__dropdown__redirect floating-label">
                                <input type="text" name="redirect"  required>
                                 <label for="redirect">Redirect</label>
                            </div>
                            <div class="object__dropdown__request floating-label">
                                <input type="text" name="request"  required>
                                <label for="request">Request</label>
                            </div>
                            <div class="object__dropdown__description floating-label">
                                <textarea   name="description" required></textarea>
                                <label for="description">Description</label>
                            </div>
                            
                            <button class="object__dropdown__submit" @click="test()">Valider</button>

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
      options:["a","ab","abc","adb","bad","ba","b"],
      searchKey:"",
      active:-1,
      show: true,
    }
  },
  computed: {
    optionsFilter(){
    return this.options.filter((option) => {
            return option.toLowerCase().includes(this.searchKey);
    });
    },
    console: () => console,
    window: () => window,
  },
  methods: {
    getImg(value) {
        return require("@/assets/" + value);
    },
    dropdownInputValue(event,value){
        var input = event.currentTarget.parentElement.parentElement.getElementsByTagName("input")[0];
        input.value = value;
        
    },    
  },
};
</script>

<style lang="scss" scoped>

    @import "@/assets/css/Base/_base.scss";
    @import "@/assets/css/Layout/_menu.scss";
    @import "@/assets/css/Utils/_mixins.scss";
    @import "@/assets/css/Composants/_inputs.scss";

    
    


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
            transition: border-radius .5s ease-out;
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
          
            &__app{
                grid-area: app;
            }

            &__category{
                grid-area: category;
            }

            &__type{
                grid-area: type;
            }

            &__redirect{
                grid-area: redirect;
                width:$medium-input;
            }

            &__request{
                grid-area: request;
                width:$medium-input;
            }
            
            &__description{
                grid-area: description;
                width:$large-input;
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


















    
</style>
