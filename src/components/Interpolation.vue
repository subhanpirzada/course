<template>
    <h1> Email:  {{ email }}</h1>
    <h1> Phone: {{ mobile = 555 }}</h1>
    <h1> Name: {{ getName1("Kamran") }}</h1>
</template>

<script>
export default{
    name: "INTERPOLATION",
    data(){
        return{
            email:"abc@gmail.com",
            mobile: 5555,
            getName1: function(name){
                return name;
            },
        };
    },
}
</script>

<style scoped>
h1{
    color: red;
}
</style>