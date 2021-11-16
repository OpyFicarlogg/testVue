
<template>
    <div class="selector-container">
        <div v-for="(value,index) in values" :key="index" 
        :class="localValue == value ? 'active' :''" 
        @click="changeSelect(value)">
            {{value}}
        </div> 
    </div>
</template>

<script>
    export default {
        name: "Selector",
        props: {
            values : {
                type: Array,
                required: true
            },
            modelValue: {  
                type: String,
                required: false,
            },
        },
        data(){
            return{
                selected : false,
            }
        },
        emits: ['update:modelValue'],
        computed: {     
            localValue: {
                get: function() {
                    return this.modelValue;
                },
                set: function(val) {
                    this.$emit('update:modelValue', val);
                }
            }, 
        },
        methods: {
            changeSelect(value){
                console.log(value);
                this.localValue = value;
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/css/Base/_base.scss";
    

    @mixin selectorValue(){
        text-align: center;
        padding: 10px 20px; 
        margin: 10px;
        height: 40px;
        border-radius: 8px;
        line-height:20px;
        cursor: pointer;
    }
    .selector-container{
        display:flex;

        & .active {
            @include selectorValue();
            background-color: hsl(125%, 92%, 95%);
            color: #42B466;
           
        }

        & div {
            @include selectorValue();
            background-color: #f1f1f1;
            color: #5f6368;
        }
    }
   
</style>
