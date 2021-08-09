
<template>
    <!-- type: dropdown, input, textarea || data: source || name: application --> 

    <div class="floating-label">
        <input v-if="type != 'textarea'" :type="getType(type)" :name="name.toLowerCase()" v-model="localValue" ref="input" required>
        <textarea v-if="type == 'textarea'" :name="name.toLowerCase()" v-model="localValue" required></textarea>
        <label :for="name.toLowerCase()">{{name}}</label>
        <!-- TODO: faire la rotate de l'image + fermeture --> 
        <img v-if="type == 'dropdown'" :src="getImg('arrow.svg')" @click="focusInput()">
        <div v-if="type == 'dropdown'" class="floating-label__options">
            <div @click="localValue = option" v-for="(option,index) in optionsFilter" :key="index">
                {{option}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Input",
        props: {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            // modelValue is the default prop for v-model https://v3.vuejs.org/guide/migration/v-model.html#migration-strategy
            // https://stackoverflow.com/questions/39868963/vue-2-mutating-props-vue-warn
            // https://v3.vuejs.org/guide/component-custom-events.html#event-names
            modelValue: {  
                type: String,
                required: false,
            },
            options: {
                type: Array,
                required: false
            },
        },
        data(){
            return{
            }
        
        },
        emits: ['update:modelValue'],
        computed: {
            optionsFilter(){      
                return this.options.filter((option) => {
                    return option.toLowerCase().includes(this.valueLowercase);
                });
            },
            valueLowercase() {
                //Pourquoi undefind par defaut ??
                if (typeof this.modelValue === 'undefined') {
                    return "";
                }
                else{
                    return this.modelValue.toLowerCase();
                }
            },
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
            // TODO: création d'un plugin pour share la méthode partout https://stackoverflow.com/questions/39373047/include-global-functions-in-vue-js
            getImg(val) {
                return require("@/assets/" + val);
            },
            getType(type){
                return type == 'dropdown' ? 'input' : type;
            },
            focusInput(){
                this.$refs.input.focus();
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/css/Base/_base.scss";
    @import "@/assets/css/Composants/_inputs.scss";
   
</style>
