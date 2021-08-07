
<template>

    <!-- type: dropdown, input, textarea || data: source || name: application --> 

    

    <div class="floating-label">
        <input v-if="type != 'textarea'" :type="getType(type)" :name="name.toLowerCase()" v-model="searchKey" ref="input" required>
        <textarea v-if="type == 'textarea'" :name="name.toLowerCase()" required></textarea>
        <label :for="name.toLowerCase()">{{name}}</label>
        <!-- TODO: faire la rotate de l'image + fermeture --> 
        <img v-if="type == 'dropdown'" :src="getImg('arrow.svg')" @click="focusInput()">
        <div v-if="type == 'dropdown'" class="floating-label__options">
            <div @click="searchKey = option" v-for="(option,index) in optionsFilter" :key="index">
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
       options: {
           type: Array,
           required: false
       },
    },
  data(){
      return{
          searchKey:"",
      }
    
  },
  computed: {
    optionsFilter(){
    return this.options.filter((option) => {
            return option.toLowerCase().includes(this.searchKey);
    });
    },
  },
  methods: {
    // TODO: création d'un plugin pour share la méthode partout https://stackoverflow.com/questions/39373047/include-global-functions-in-vue-js
    getImg(value) {
        return require("@/assets/" + value);
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
