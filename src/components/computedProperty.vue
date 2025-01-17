<template>
    <h1> Computed Property Component</h1>
    <h2> {{calculate}}</h2>
</template>

<script>
export default{
    name:"ComputedProperty",
    data(){
        return{
            cashInHand:200,
            balance:200,
            discount: 300,
        }
    },
    computed:{
        calculate(){
            return (this.cashInHand*this.balance)-this.discount
        }
    }
}
</script>

<style scoped>
</style>