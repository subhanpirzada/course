<template>
    <h1> Non-Props Component</h1>
    <h3> {{ info }} </h3>
    <h3> {{ $attrs }} </h3>
    <div v-bind="$attrs">
        <p> Lorem ipsum dolor sit amet.</p>
        <p> Lorem ipsum dolor sit amet.</p>
        <p> Lorem ipsum dolor sit amet.</p>
    </div>
</template>

<script>
export default{
    name:"NonProps",
    props:{
        info:String,
    },
}
</script>

<style scoped>
</style>