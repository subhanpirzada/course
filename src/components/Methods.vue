<template>
    <h1> Email:  {{ email }}</h1>
    <h1> Phone: {{ mobile  }}</h1>
    <h1> Name 1: {{ getName("Trump") }}</h1>
    <h1> Name 2: {{ getName("Joe") }}</h1>
    <h1> Data: {{ getData().email }}</h1>
    <h1> Data: {{ getData().Phone }}</h1>
</template>

<script>
export default{
    name: "METHODS",
    data(){
        return{
            email:"abc@gmail.com",
            mobile: 5555,
        };
    },
    methods:{
        getName(name){
            return name;
        },
        getData(){
            return{
                email: this.email,
                Phone: this.mobile,
            };
        },
    },
}
</script>

<style scoped>
h1{
    color: red;
}
</style>