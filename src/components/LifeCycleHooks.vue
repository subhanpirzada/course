<template>
    <h1> Life Cycle Hooks Component </h1>
    <h1 ref="adding">Count: {{ count }}</h1>
    <button @click="count+=1">Update Counter</button>
</template>

<script>
export default{
    name:"LifeCycleHooks",
    data(){
        console.log("Created")
        return{
            count:0,
        }
    },
    // beforeCreate(){
    //     alert("Page Loading....")
    // },
    // created(){
    //     alert("Page Loaded")
    // }
    // beforeMount(){
    //     console.log("This is beforeMount Method", this.$el)
    // },
    // mounted(){
    //     console.log("This is Mounted Method", this.$el)
    // }
    beforeUpdate(){
        console.log("beforeUpdate Method", this.$refs["adding"].textContent)
    },
    updated(){
        console.log("Updated Method", this.$refs["adding"].textContent)
    }
}
</script>

<style scoped>
h1{
    color: brown;
    font-weight: bold;
}
</style>