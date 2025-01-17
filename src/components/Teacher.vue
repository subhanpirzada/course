<template>
    <h1> Teacher Component: {{ name }} </h1>
    <button @click="getUser(userName)"> Get the Name </button>
</template>

<script>
export default{
    name:"TEACHER",
    props:{
        name:String,
        getUser:Function,
    },
    data(){
        return{
            userName:"Clark",
        }
    },
}
</script>

<style scoped>
</style>