<template>

  <h1>Grid</h1>
  <div class="optionContainer">
    <div class="optionItem" v-for="exemple in exemples" :key="exemple.id"> 
      <input type="button" class="btnItem" :value="'Show '+exemple.value" @click="ShowItem(exemple.id)"/>
    </div>  
  </div>

    <Cards v-if="exemples[0].state"/>

    <GridName v-if="exemples[1].state"/>
</template>

<script>

import GridName from "@/components/grid/gridName.vue";
import Cards from "@/components/grid/Cards.vue";

export default {
  name: "Grid",
  data(){
    return{
      exemples:[
        {id:1, value: "cards", state:true},
        {id:2, value: "GridName", state:false},
      ]
    }
  },
  computed: {},
  methods: {
    ShowItem(id){
      this.exemples.forEach(el=> {
        el.state= false;
      });
      var index = this.exemples.findIndex((obj => obj.id == id));
      this.exemples[index].state = true;
    }
  },
  components: {
    GridName, Cards
  },
};
</script>

<style lang="scss" scoped>
  .optionContainer{
    display:grid;
    grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
    margin:20px;
  }

  .optionItem{

    & .btnItem{
      background-color: black;     
      border-radius: 10px;
      border: none;
      color: white;
      padding: 13px 32px 13px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
  }
</style>
