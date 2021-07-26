<template>
    <Header/>
    <Body/>
    <div class="cookie" v-if="cookie">
        <img :src="getImg('cookie.png')" alt="">
        <span>Merci d'accepter les cookies</span>
        <button @click="accepter" class="btn-accept"> Accepter</button>
    </div>
</template>

<script>


import Header from "@/components/Topachat/Header/Header.vue";
import Body from "@/components/Topachat/Body/Body.vue";

export default {
  name: "TopAchat",
  data(){
    return{
      cookie:true,
    }
  },
  computed: {},
  methods: {
    getImg(value) {
        return require("@/assets/topAchat/img/" + value);
    },
    accepter(){
        this.cookie=false;
    }
  },
  components: {
    Header,
    Body,
  },
};
</script>

<style lang="scss" scoped>
    $input-color: hsl(212, 38%, 75%);
    $dark-color: hsl(212, 38%, 30%);
    $secondary-color: hsl(212, 69%, 65%);

    .cookie{
        color: $input-color;
        font-weight: bold;
        width:300px;
        background-color:$dark-color;
        border-radius:10px 10px 0px 0px;
        padding: 10px 10px 10px 5px;

        /*https://www.w3schools.com/css/css_positioning.asp*/
        position:fixed;
        bottom:0;
        right:20px;

        & img {
            padding: 5px;
        }
        & .btn-accept{
            background-color: $secondary-color;     
            border-radius:5px 5px 5px 5px;
            border: none;
            color: white;
            padding: 13px 32px 10px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
        }
    }
    

</style>
