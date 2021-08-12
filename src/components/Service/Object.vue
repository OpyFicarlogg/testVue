
<template>
    <div class="object">
        <div :class=" active == index ? 'object__grid active' : 'object__grid'" @click="active != index ? active=index : active = -1">
            <div class="object__grid__img">
                <img  src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg" alt="">
            </div>
            <div class="object__grid__app">{{data.app}}</div>
            <div class="object__grid__tags" >
                <div v-for="(categorie,index) in data.categories" :key="index" >{{categorie}}</div>
                <div>{{data.type}} </div>
            </div>
            <div class="object__grid__wsname">{{data.name}}</div>
            <div class="object__grid__dropdown">
                <img  :class="active==index ? 'svg-rotate' : '' "  :src="$getImg('arrow.svg')" alt="">
            </div>
        </div>
        <transition name="fade">
            <div class="object__dropdown" v-if="active == index">

                <CustomInput class="object__dropdown__app" type="dropdown" name="Application" :options="options" v-model="dataNew.app"/>

                <CustomInput class="object__dropdown__category" type="dropdown" name="Catégorie" :options="options" v-model="dataNew.category"/>

                <CustomInput class="object__dropdown__type" type="dropdown" name="Type" :options="options" v-model="dataNew.type"/>

                <CustomInput class="object__dropdown__redirect" type="input" name="Redirect" v-model="dataNew.redirect"/>

                <CustomInput class="object__dropdown__request" type="input" name="Request" v-model="dataNew.request"/>

                <CustomInput class="object__dropdown__description" type="textarea" name="Description" v-model="dataNew.description"/>
                
                <!--<button class="object__dropdown__submit" @click="test()">Valider</button>-->
                <ButtonSubmit name="Valider" :values="buttonValues"/>
                <!-- <ButtonSubmit name="Valider" :values="buttonValues"/> --> 

                <label  class="object__dropdown__opt" >
                    <input type="checkbox" style="margin-right:10px;" :checked="dataNew.apikey"> 
                    <span>Autoriser la connexion sans Api-Key</span>
                </label>

            </div>
        </transition>
    </div>

</template>

<script>
import CustomInput from "@/components/Service/Input.vue";
import ButtonSubmit from "@/components/Service/ButtonSubmit.vue";

export default {
    name: "Object",
    props: {
       data: {
           type: Object,
           required: true
       },
    },
    data(){
        return{
            options:["a","Ab","abc","adb","bad","ba","b"],
            buttonValues: ["Annuler","Supprimer", "Close"],
            searchKey:"",
            active:-1,
            index : "",
            show: true,
            //https://stackoverflow.com/questions/54078421/how-to-clone-props-object-and-make-it-non-reactive
            dataNew : Object.assign({}, this.data),
        }
    },
    computed: {
    },
    methods: {
        dropdownInputValue(event,value){
            var input = event.currentTarget.parentElement.parentElement.getElementsByTagName("input")[0];
            input.value = value;
            
        },    
    },
    components: {
        CustomInput,
        ButtonSubmit,
    },
};
</script>

<style lang="scss" scoped>

    @import "@/assets/css/Base/_base.scss";
    @import "@/assets/css/Layout/_menu.scss";
    @import "@/assets/css/Utils/_mixins.scss";

    
    
    .object{
        
        width:1000px;
        max-width:1000px;
        margin: 0 auto;
        &__grid{
            height:120px;
            background-color:hsl(0, 0%, 100%);
            border-radius:8px;
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

            /*&__submit{
                grid-area: submit;
                width:110px;
                border:none;
                height:40px;
                border-radius:9px;
                background-color:#42B466;
                color:#FFFFFF;
            }*/

            &__opt{
                grid-area: opt;
                font-size: 12px;
                height:100%;
                color: #b3b1b1;
                
                display: flex;
                justify-self: start;
                align-items:center;
                
            }
        }

        
    }




.fade-enter-active, .fade-leave-active {
  transition:  .7s;
  overflow:hidden;
 }
.fade-enter-from, .fade-leave-to {
  height:0px;
  padding: 0px 60px;
}
    
</style>
