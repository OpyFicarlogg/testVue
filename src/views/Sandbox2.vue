<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <div class="dropdown">
      <div class="dropdown__elem" ref="input">
          <div v-for="(opt,index) in selectedFilter" :key="index">{{opt}}</div>
      </div>
      <!-- problème si recherche --> 
      <div class="dropdown__content">
        <input type="text" v-model="inputVal"/>
        <div @click="addToList(option, $event)" v-for="(option,index) in optionsFilter" :key="index">{{option}}</div>
        <div>heeeeey {{overflow}}</div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "Sandbox2",
  data() {
    return {
      values: ["val1abcdae","val2","val3","test","yolo","kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"],
      selected : [],
      inputVal: "",
      ov:"",

      padding : 5*2,
      margin : 15*2,

      currentSize:0,
      inputSize:0,
      isOverflow:false,
    };
  },
  mounted(){
    this.inputSize= this.$refs.input.clientWidth;
    window.addEventListener("resize", this.handleResolutionChange);
    
  },
  methods: {
    handleResolutionChange(){
      this.inputSize= this.$refs.input.clientWidth;
      this.detectInputOverflow();
    },
    detectInputOverflow(){
      this.currentSize=0;
      this.selected.forEach(element =>  this.currentSize+= (this.textSize(element))+this.padding+this.margin);
      this.isOverflow = this.inputSize < this.currentSize;
    },
    
    addToList(value,event) {

      //this.inputSize= this.$refs.input.clientWidth;

      if(this.selected.includes(value)){

        this.removeArray(this.selected, value);
        event.target.classList.remove("selected");

        this.detectInputOverflow();
        
      }
      else{
          
        //detect si le text va overflow avant l'ajout 
        this.currentSize+= (this.textSize(value))+this.padding+this.margin;
        this.isOverflow = this.inputSize < this.currentSize;

        this.selected.push(value);
        event.target.classList.add("selected");  
      }
      //https://stackoverflow.com/questions/59392865/how-to-detect-whether-an-element-inside-a-component-is-overflown-in-vue
      //https://www.codegrepper.com/code-examples/javascript/javascript+check+if+element+is+overflowing
      //permet de détecter après l'ajout de l'élément
      setTimeout(() => this.ov = this.$refs.input.clientWidth < this.$refs.input.scrollWidth, 200);
      
    },
    //https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
    removeArray(arr) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    },

    getCssStyle(element, prop) {
        return window.getComputedStyle(element, null).getPropertyValue(prop);
    },
    getCanvasFontSize(el = document.body) {
        //https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
        const fontWeight = this.getCssStyle(el, 'font-weight') || 'normal';
        const fontSize = this.getCssStyle(el, 'font-size') || '16px';
        const fontFamily = this.getCssStyle(el, 'font-family') || 'Times New Roman';
        
        return `${fontWeight} ${fontSize} ${fontFamily}`;
    },
    textSize(value,font = this.getCanvasFontSize()){
        //https://www.geeksforgeeks.org/calculate-the-width-of-the-text-in-javascript/
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        context.font = font;
        var width = context.measureText(value).width;
        var formattedWidth = (Math.ceil(width)+2);
        console.log(formattedWidth);
        return formattedWidth;

    },

  },
  computed:{
    optionsFilter(){      
        return this.values.filter((value) => {
          return value.toLowerCase().includes(this.inputVal);
        });
    },
    //Définir la taille dynamiquement 
    selectedFilter(){
      /*var length = this.selected.length;
      if(length > 3){
         var local = this.selected.slice(0,2);
         local.push("+"+(length -2));
         return local;
      }
      else{
        return this.selected;
      }*/

      if(this.isOverflow){
          var text = "{x} Catégories";
          var textSize = (this.textSize(text))+this.padding+this.margin;
          var size = 0;
          var selectedIndex =null;

          //permet de définir à partir de quel index on overflow
          this.selected.forEach((element, index) => {
            size+= (this.textSize(element))+this.padding+this.margin;
            console.log("size: "+size);
            if(selectedIndex == null){
              console.log("size :"+(size+textSize) + "  || index: "+index);
               selectedIndex = this.inputSize < (size+textSize) ? index:null;
            }
            
          })

          //Savoir combien d'éléments il reste hors ceux à afficher
          var count = this.selected.length - selectedIndex;
          console.log("selectedIndex :"+selectedIndex + " || count: "+count);
          var local = this.selected.slice(0,selectedIndex);
          local.push(text.replace( '{x}',count));
          return local;

          /*var local = [];
          local.push(this.selected.length +" Catégories");
          return local;*/
      }
      else{
          return this.selected;
      }
      
    },

    overflow(){
     
      if(this.ov != null){
        var count = this.ov.childElementCount;
        console.log("overflow: "+count);
        var isOverflowing = this.ov.clientWidth < this.ov.scrollWidth 
        || this.ov.clientHeight < this.ov.scrollHeight;
        return isOverflowing;
      }
      else{
        return false;
      }
      
      
    }
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss">
.dropdown {
  position:relative;
  width: 50%;
  
  &:hover .dropdown__content {
      display:block;
    }

  
 
  &__elem{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:grey;
    height:40px;
    overflow:hidden;
    
    
    & div {
      height:20px;
      background-color:white;
      line-height:20px;
      padding:5px;
      margin: 0px 15px;
    }
  }
  
  &__content{
    position:absolute;
    display:block;
    background-color:black;
    width:100%;
    height:fit-content;
    
    & input {
      margin: 10px;
      padding:5px;
      width:-moz-available;
      height:10px;
    }
    
    & .selected{
      height:20px;
      background-color:white;
      line-height:20px;
      padding:5px;
      margin: 5px 15px;
      text-align: center;
      vertical-align: middle;
      font-weight: bold;
    }
    & div {
      height:20px;
      background-color:white;
      line-height:20px;
      padding:5px;
      margin: 5px 15px;
      text-align: center;
      vertical-align: middle;
    }
    
  }
}
</style>