<template>
    <h1> Home Component </h1>
    
    <!-- Dynamic Rendering Of Components -->
    <button @click="active='First'"> First </button>&nbsp;&nbsp;
    <button @click="active='Second'"> Second </button>&nbsp;&nbsp;
    <button @click="active='Third'"> Third </button>&nbsp;&nbsp;
    <button @click="active='Watchers'"> Watchers </button>&nbsp;&nbsp;

    <!-- <First/>
    <Second/>
    <Third/> -->
    <component :is="active" />
    
    <!-- Teleportation of Component to different DOM element -->
    <teleport to="#header">
        <Header/>    
    </teleport>
    
</template>

<script>
import First from './first.vue';
import Header from './header.vue';
import Second from './second.vue';
import Third from './third.vue';
import Watchers from './watchers.vue';

export default{
    name:"HOME",
    components:{
        First,
        Second,
        Third,
        Watchers,
        Header,
    },
    data(){
        return{
            active:"",
        }
    }
}
</script>

<style scoped>
</style>