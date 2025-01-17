<template>
    <h1> Props Component </h1>
    <NonProps info="Hello World" id="name" data-test="123" style="color:red"/>
</template>

<script>
import NonProps from './nonProps.vue';
export default{
    name:"PROPS",
    props:{
        info:String,
    },
    components:{
        NonProps,
    }
}
</script>

<style scoped>
</style>