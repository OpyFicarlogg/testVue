<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <div class="dropdown">
      <div class="dropdown__elem" ref="input">
          
          <div v-for="opt in selectedFilter" :key="opt.id">{{opt.value}}</div>
      </div>
      <!-- problème si recherche --> 
      <div class="dropdown__content">
        <input type="text" v-model="inputVal"/>
        <!-- sous composant avec un click ou autre pour faire une action de selection-->
        <div :class="selected.includes(option) ? 'selected' :''" @click="addToList(option)" v-for="(option) in optionsFilter" :key="option.id">{{option.value}}</div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "Sandbox2",
  data() {
    return {
      values: [{id:1,value:"val1abcdae"},{id:2,value:"val2"},{id:3,value:"val3"},{id:4,value:"test"},{id:5,value:"yolo"},{id:6,value:"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"}],
      selected : [],
      inputVal: "",
      ov:"",

      padding : 10*2,
      margin : 10*2,

      field: "Catégorie",
      currentSize:0,
      inputSize:0,
      isOverflow:false,
    };
  },
  mounted(){
    //Set initial value of input size
    this.inputSize= this.$refs.input.clientWidth;
    //Change input size on resize 
    window.addEventListener("resize", this.handleResolutionChange);
    
  },
  methods: {
    handleResolutionChange(){
      this.inputSize= this.$refs.input.clientWidth;
      this.detectInputOverflow();
    },
    detectInputOverflow(){
      this.currentSize=0;
      this.selected.forEach(element =>  this.currentSize+= (this.textSize(element.value))+this.padding+this.margin);
      this.isOverflow = this.inputSize < this.currentSize;
    },
    
    addToList(value) {

      if(this.selected.includes(value)){

        this.removeArray(this.selected, value);
        //event.target.classList.remove("selected");

        this.detectInputOverflow();
        
      }
      else{
          
        //detect si le text va overflow avant l'ajout 
        this.currentSize+= (this.textSize(value))+this.padding+this.margin;
        this.isOverflow = this.inputSize < this.currentSize;

        this.selected.push(value);
        //event.target.classList.add("selected");  
      }
      //https://stackoverflow.com/questions/59392865/how-to-detect-whether-an-element-inside-a-component-is-overflown-in-vue
      //https://www.codegrepper.com/code-examples/javascript/javascript+check+if+element+is+overflowing
      //permet de détecter après l'ajout de l'élément NOT USED
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
    //computed property for search 
    optionsFilter(){      
        return this.values.filter((value) => {
          return value.value.toLowerCase().includes(this.inputVal);
        });
    },
    //Définir la taille dynamiquement et le nombre d'éléments affiché
    selectedFilter(){

      if(this.isOverflow){
          var text = "{x} "+this.field;
          var textSize = (this.textSize(text))+this.padding+this.margin;
          var size = 0;
          var selectedIndex =null;

          //permet de définir à partir de quel index on overflow
          this.selected.forEach((element, index) => {
            size+= (this.textSize(element.value))+this.padding+this.margin;
            if(selectedIndex == null){
               selectedIndex = this.inputSize < (size+textSize) ? index:null;
            }
            
          })

          //Savoir combien d'éléments il reste hors ceux à afficher
          var count = this.selected.length - selectedIndex;
          var local = this.selected.slice(0,selectedIndex);
          local.push({id:null, value: text.replace( '{x}',count)});
          return local;

          //Display toujours le nombre d'éléments
          /*var local = [];
          local.push(this.selected.length +" Catégories");
          return local;*/
      }
      else{
          return this.selected;
      }
      
    },      
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
      background-color:#42B466;
      border-radius: 8px;
      color:white;
      line-height:20px;
      padding:0px 10px 0px 10px;
      margin: 0px 10px;
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