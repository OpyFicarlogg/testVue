
<template>
    <!-- type: dropdown, input, textarea || data: source || name: application --> 

    <div class="floating-label">
        <input v-if="type != 'textarea'" :type="getType(type)" 
            :name="name.toLowerCase()" 
            v-model="localValue"
            @blur="unfocusInput()"
            @focus="focusInput()" 
            ref="input" required>
        <textarea v-if="type == 'textarea'" :name="name.toLowerCase()" v-model="localValue" required></textarea>
        <label :for="name.toLowerCase()">{{name}}</label>
        <!-- TODO: faire la rotate de l'image + fermeture --> 
        <button class="floating-label__opt" v-if="type == 'dropdown' && !inputFocus" @click="setFocus()" >
            <img :src="$getImg('arrow.svg')" >
        </button>
        <button class="floating-label__opt" v-if="inputFocus" @click="clearInput()">
            <img :src="$getImg('close.png')">
        </button>
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
                inputFocus:false,
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
            getType(type){
                return type == 'dropdown' ? 'input' : type;
            },
            setFocus(){
                var input = this.$refs.input;

                input.focus();
                var strLength = input.value.length * 2;
                input.setSelectionRange(strLength, strLength);

                console.log(document.activeElement);
            },
            focusInput(){
                this.inputFocus = true;
            },
            unfocusInput(){
                setTimeout(() => this.inputFocus = false, 200);
                
            },
            clearInput(){
                this.localValue ="";
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/css/Base/_base.scss";
    @import "@/assets/css/Composants/_inputs.scss";
   
</style>
