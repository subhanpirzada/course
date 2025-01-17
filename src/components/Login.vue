<template>
    <h1> Login Component</h1>
    <h3>Name: {{ login }} </h3>
</template>

<script>
import { useRoute } from 'vue-router';

export default{
    name:"LOGIN",
    data(){
        return{
            login:"",
        }
    },
    mounted(){
        const route=useRoute();
        // console.table("Name",route.params.name);
        this.login=route.params.name
    }
}
</script>

<style scoped>
</style>