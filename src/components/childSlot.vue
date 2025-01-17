<template>
    <div id="price-card">
    <header> <slot name="header"></slot></header>
    <section> <slot name="section"></slot></section>
    <main> <slot name="main"></slot></main>
    <footer> <slot name="footer"></slot></footer>
    </div>
</template>

<script>
export default{
    name:"ChildSlot",
}
</script>

<style scoped>
#price-card{
    width: 400px;
    padding: 20px;
    margin: 20px;
    text-align: center;
    border:5px solid green;
    background-color: antiquewhite;
    justify-self: center;
}
</style>