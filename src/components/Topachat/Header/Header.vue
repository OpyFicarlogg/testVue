<template>
  <NavBar @menu="BurgerClick"/>
  <NavBarOptions v-if="resolutionWidth > 1050 || menu"/>
</template>

<script>


import NavBar from "@/components/Topachat/Header/NavBar.vue";
import NavBarOptions from "@/components/Topachat/Header/NavBarOptions.vue";

export default {
  name: "Header",
  data(){
    return{
      resolutionWidth:0,
      menu:true,
    }
  },
  computed: {},
  methods: {
    handleResolutionChange(){
      const width =window.innerWidth;
      this.resolutionWidth =width;
      this.menu = false;
    },
    BurgerClick(){
      this.menu = this.menu ? false :true;
    },
  },
  components: {
    NavBar,
    NavBarOptions,
  },
   mounted() {
    window.addEventListener("resize", this.handleResolutionChange); //https://stackoverflow.com/questions/49380830/vue-js-how-to-get-window-size-whenever-it-changes
  },
  unmounted() {
    window.addEventListener("orientationchange",this.handleOrientationChange);
  },
};

</script>

<style lang="scss" scoped>

</style>
