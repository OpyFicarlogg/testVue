<template>
    <div class="container">
        <div class="navBarOptions">
            <div class=option--main> 
                <span>Nos produits</span>  
                <div class="option__dropdrown-content">
                    <a href="#">Option1</a>
                    <a href="#">Option2</a>
                    <a href="#">Option3</a>
                </div>
                
            </div>
            <div class=option> <span>Configurateur PC</span>  </div>
            <div class=option> <span>Consommables</span>  </div>
            <div class=option> <span>Promotions</span>  </div>
            <div class=option> <span>Nouveautés</span>  </div>
            <div class=option> <span>Besoin d'aide</span>  </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: "NavBarOptions",
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

    @mixin mediaMedium(){
        @media (max-width:1050px) {
        @content
        }
    }

    @mixin options(){
        flex: 1 0 0;
        border-right: 1px solid $input-color;
        position:relative;
        
        &:hover{
            background-color:$input-color;
        }
        &:hover .option__dropdrown-content{
            display:block;
        }

        & span{
            padding:16px;
            cursor:pointer;
            display:block;
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
        flex-direction:row;

        max-width: 1400px;
        margin:0 auto;

        @include mediaMedium(){
            flex-direction:column;
        }
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
            padding:0;
            background-color:  $secondary-color;
            min-width:160px;
            width:100%;
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
            
            @include mediaMedium(){
                position:static;
            }   

        }
    }
</style>
