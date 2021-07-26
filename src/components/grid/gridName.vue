<template>
  <div class="wrapper">
  <header class="header">Header</header>
  <article class="main">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
  </article>
  <aside class="aside aside-1">Aside 1</aside>
  <aside class="aside aside-2">Aside 2</aside>
  <footer class="footer">Footer</footer>
</div>
</template>

<script>

export default {
  name: "GridName",
  data(){
    return{
      
    }
  },
  computed: {},
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  .wrapper{
    display:grid;
    grid-template-columns:  repeat(4, [col-start] 1fr [col-end]);
    grid-template-rows: auto;
    grid-template-areas: 
    "header header header header"
    "sidebar main main sidebar2"
    "side1 side1 side2 side2"
    "sidemin sidemin sidemin sidemin"
    "footer footer footer footer";
    & > * {
      padding: 20px;
    }
    /*display:grid;
    grid-template-columns: [col1] 200px [col2] 1fr [col3] 200px;
    grid-template-rows: [row1] 200px [row2] 1fr [row3] 200px;*/
  }
  
    @media (min-width:600px) {
      .header{
        grid-area:header;
        background-color:red;
      }

      .main{
        grid-area:main;
        background-color:blue;
      }

      .footer{
        grid-area:footer;
        background-color:green;
      }
    }
  
    @media (max-width:600px) {
      .header{
        grid-area:header;
        background-color:red;
      }

      .main{
        /* grid-column: 1 / 4 span;
        grid-row: 2, 1 span; */
        /* grid-column: sidebar / sidebar2; */
        grid-column: col-start / col-end 4;
        /* grid-column: col-start / span 4; */
        background-color:blue;
      }

      .aside-1{
        grid-area: side1;
        @media (max-width:300px){
          grid-column: side1 / side2;
        }
      }
      .aside-2{
        grid-area: side2;
        /* grid-column: col-start 3 / col-end 4; */
        @media (max-width:300px){
          grid-area:sidemin;
        }
      }



      .footer{
        grid-area:footer;
        background-color:green;
      }
    }



</style>
