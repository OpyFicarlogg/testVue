
<template>
    <div class="btn-container" @mouseleave="showMore = false">
        <button :class="[isValues ? 'isOption' : '', 'btn-container__main']" @click="EmitOption(name)" >{{name}}</button>
        <button class="btn-container__more" v-if="isValues" @click="setShowMore"> 
            <img :src="getImg('arrow.svg')"/>
        </button>
        <div  ref="button" class="btn-container__options" v-if="showMore" >
            <div @click="EmitOption(value)" v-for="(value,index) in values" :key="index" >{{value}}</div>   
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
            getImg(val) {
                return require("@/assets/" + val);
            },
            focusInput(){
                console.log("focus ! ");
                this.$refs.button.focus();
            },
            setShowMore(){
                this.showMore = this.showMore ? false : true;
            },
            EmitOption(name){
                this.showMore = false;
                console.log(name);
            }
        },
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
        }

        &__more {
            width: 25px;
            height:100%;
            border:none;
            border-radius: 0px 9px 9px 0px;
            border-left: 2px solid #5BC87C;
            background-color:#42B466;

            & img {
                width:15px;
                filter: invert(100%) sepia(49%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(106%);
            }
        }
        
        &__options{
            position:absolute;
            width:100%;

            div {
                background-color:aquamarine;
            }

            &:focus {
                display:block;
            }
        }
    }

    .isOption {
        border-radius:9px 0px 0px 9px;
    }
    
   
</style>
