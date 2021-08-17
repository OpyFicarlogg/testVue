
<template>
    <div class="btn-container" v-outside="() => showMore = false">
        <button :class="[isValues ? 'isOption' : '', 'btn-container__main']" @click="EmitOption(name)" >{{name}}</button>
        <button :class="['btn-container__more']" v-if="isValues" @click="setShowMore"> 
            <img :src="$getImg('arrow.svg')"/>
        </button>
        <div  ref="button" class="btn-container__options" v-if="showMore" >
            <button @click="EmitOption(value)" v-for="(value,index) in values" :key="index" >{{value}}</button>   
        </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonSubmit",
        props: {
            name : {
                type: String,
                required: true
            },
            values: {
                default: () => [],
                type: Array,
                required: false
            },
        },
        data(){
            return{
                showMore : false,
            }
        },
        emits: ['update:modelValue'],
        computed: {     
            isValues(){
                if (typeof this.values === 'undefined') {
                    return false;
                }
                else if(this.values.length > 0) {
                    return true;
                }
                else{
                    return false;
                }
            }      
        },
        methods: {
            setShowMore(){
                console.log(this.showMore);
                this.showMore = this.showMore ? false : true;
            },
            EmitOption(name){
                this.showMore = false;
                this.$emit('clicked', name);
            },
        },
        directives: {
            outside: {
                beforeMount: (el, binding) => {
                    el.clickOutsideEvent = event => {
                    // here I check that click was outside the el and his children
                    if (!(el == event.target || el.contains(event.target))) {
                        // and if it did, call method provided in attribute value
                        if (typeof binding.value === 'function') {
                            binding.value.call();
                        } 
                        else{
                            console.log("Input must be a function");
                        }              
                    }
                    };
                    document.addEventListener("click", el.clickOutsideEvent);
                },
                unmounted: el => {
                    document.removeEventListener("click", el.clickOutsideEvent);
                },
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/css/Base/_base.scss";
    
    .btn-container{
        position:relative;
        grid-area: submit;
        height:40px;

        &__main {   
            width:110px;
            height:100%;
            border:none;
            border-radius:9px;
            background-color:#42B466;
            color:#FFFFFF;

            &:hover { 
                background-color: darken(#42B466,10%);
            }
            &.isOption {
                border-radius:9px 0px 0px 9px;
            }
        }

        &__more {
            width: 25px;
            height:100%;
            border:none;
            border-radius: 0px 9px 9px 0px;
            background-color:#42B466;

            &:hover { 
                background-color: darken(#42B466,10%);
            }

            & img {
                width:15px;
                transform: rotate(270deg);
                filter: invert(100%) sepia(49%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(106%);
            }
        }
        
        &__options{
            position:absolute;
            width:100px;
            transform: translate3d(137px, -42px, 0px);
            background-color:#ffffff;
            border-radius: 9px;
            border: 1px solid darken(#ffffff,10%);

            button {
                display:block;
                width:100%;
                border:none;
                background-color:transparent;
                color: #42B466;
                padding: 5px;

                &:hover{
                    background-color: darken(#ffffff,5%);
                }    
            }
        }
    }

    
    
   
</style>
