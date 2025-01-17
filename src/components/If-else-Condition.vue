<template>
    <h1 id="pages2" v-if="display"> If Conditon </h1>
    <h1 id="pages2" v-else> Else Conditon </h1>
    <button @click="display=!display"> Click Here</button>
</template>
<script>
export default{
    name:"IfElseCondition",
    data(){
        return{
            display:false,
        }
    }
}
</script>

<style scoped>
#pages2{
    color:orange;
}
</style>