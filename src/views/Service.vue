
<template>

    <div class="main">

        <div class="container-object">
            <Object  v-for="service in services" :key="service.id" :data="service"/>
        </div>

        <div class="container-left" style="display:none;">
            <div class="elem-left" v-for="card in cards" :key="card.id">
            
            <div class="elem-left__txt"> {{card.tag}} </div>
            <div class="elem-left__img"><img :src="$getImg('account.png')" alt=""></div>
            </div>
        </div>

        <div class="container" style="display:none;">
            <div class="elem" v-for="card in cards" :key="card.id">
            <div class="elem__img"><img :src="$getImg('account.png')" alt=""></div>
            <div class="elem__txt"> {{card.tag}} </div>
            </div>
        </div>

    </div>

</template>

<script>
import Object from "@/components/Service/Object.vue";
export default {
    name: "Service",
    data(){
        return{
        cards:[
            {id:1, title: "Joe", tag:"legendary", state:true},
            {id:2, title: "Mike", tag:"common",state:false},
            {id:3, title: "Herwin", tag:"rare",state:false},
            {id:4, title: "Pascal", tag:"epic",state:false},
        ],
        services: [
            {
                id:1,
                name : "Application test", 
                app: "Application", 
                categories: ["tag1","tag2","tag3"],
                type: "public",
                redirect: "test",
                request: "http://test.com", 
                description: "c'est une description",
                apikey: true,
            },
            {
                id:2,
                name : "Application test2", 
                app: "Application", 
                categories: ["tag1","tag2","tag3"],
                type: "public",
                redirect: "test",
                request: "http://test.com", 
                description: "c'est une description",
                apikey: false,
            },
            {
                id:3,
                name : "Application test3", 
                app: "Application", 
                categories: ["tag1","tag2"],
                type: "public",
                redirect: "test",
                request: "http://test.com", 
                description: "c'est une description",
                apikey: true,
            },
            {
                id:4,
                name : "Application test4", 
                app: "Application", 
                categories: ["tag1"],
                type: "public",
                redirect: "test",
                request: "http://test.com", 
                description: "c'est une description",
                apikey: true,
            },
            {
                id:5,
                name : "Application test5", 
                app: "Application", 
                categories: ["tag1","tag2","tag3"],
                type: "public",
                redirect: "test",
                request: "http://test.com", 
                description: "c'est une description",
                apikey: true,
            }
        ],
        }
    },
    methods:{
    },
  
    components: {
        Object,
    },
};
</script>

<style lang="scss" scoped>

    .main{
        position:absolute;
        background-color:hsl(213, 29%, 85%);
        min-height:100vh;
        width:100%;
    }

    .container-object{
        display:grid;
        row-gap: 60px;
        margin-top:60px;
        height:100%;
        padding-bottom: 60px;

    }
   
</style>
