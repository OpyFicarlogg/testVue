

<template>
    <div class="container">
        <div class="navBarOptions">
            <div class=option> 
                <div class="option__text">
                    <a href="">Nos produits</a> 
                </div> 
                <div class="option__dropdrown-content">
                    <a href="#">Option1</a>
                    <a href="#">Option2</a>
                    <a href="#">Option3</a>
                </div>
                
            </div>
            <div class=option> Configurateur PC </div>
            <div class=option> Vos Consommables </div>
            <div class=option> Promotions </div>
            <div class=option> Nouveautés </div>
            <div class=option> Besoin d'aide </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: "Sandbox",
  data(){
    return{
      
    }
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
    $dark-color: hsl(212, 38%, 30%);
    $input-color: hsl(212, 38%, 75%);
    $secondary-color: hsl(212, 69%, 65%);
    $input-color: hsl(212, 38%, 75%);

    @mixin options(){
        flex: 1 0 0;
        position:relative;
        border-right: 1px solid $input-color;

        &:hover{
            background-color:$input-color;
        }
        &:hover .option__dropdrown-content{
            display:block;

        }
        &__text {
            border: none;
  cursor: pointer;
  width:200px;
  padding: 16px;
            & a {
                text-decoration:none;
                color: white;
            }
            & span{
                vertical-align: middle;
                text-align: center;
            }
        }
    }

    .container{
        margin:0px;
        padding:0px;
        max-width:100%;
        background-color:  $dark-color;

        color: white;
        font-family: Montserrat,sans-serif;
        font-size: 18px;
    }
    .navBarOptions{
        display:flex;
        align-items:center;
        flex-direction:row;
        max-width: 1400px;
        margin:0 auto;
    } 

    .option {
        @include options();
        
        &--main{
            @include options();
            background-color: $secondary-color;
        }

        &__dropdrown-content{
            display:none;
            position:absolute;
            background-color:  $secondary-color;
            min-width:160px;
            box-shadow: 0px 8px 16px 0px $dark-color;
            z-index:1;

            & a {
                color:white;
                padding:12px 16px;
                text-decoration: none;
                display:block;

                &:hover{
                    background-color:$input-color;
                }
            }
        }
    }
</style>
