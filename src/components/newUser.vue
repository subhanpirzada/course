<template>
    <div class="UserComponent">
        <h2 class="heading"> {{data.name}} </h2>
        <h2 class="heading"> {{data.email}} </h2>
    </div>
</template>
<script>
export default{
    name:"NewUser",
    props:{
        data: Object,
    },
    data(){
        return{
        }
    },
    
}
</script>

<style scoped>
.heading{
    font-weight: 600 !important;
}
.UserComponent{
    color:brown;
    font-size: 10px;
    margin: 15px;
    background-color: antiquewhite;
    border: 1px solid black;
    border-radius: 20px;
}
</style>