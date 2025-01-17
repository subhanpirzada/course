<template>
    <h1> Watchers Property Component</h1>
    <h3>{{ counter }}</h3>
    <button @click="counter+=1">+</button>
    <button @click="counter-=1">-</button>
    <!-- <ChildSlot>
        <h1>MetaBrains.org</h1>
        <button>Click Here</button>&nbsp;&nbsp;
        <a href="#"> Youtube.com </a>
        <img src="https://fastly.picsum.photos/id/445/200/200.jpg?hmac=IJGybzd6hRYuiwyBiBXZ_3cOjM0MrrTpARBSFzypGNI" alt="" />
    </ChildSlot> -->
    <ChildSlot>
        <template v-slot:header>
            <h1> Header Data </h1>
        </template>
        <template v-slot:section>
            <h1> Product Name </h1>
        </template>
        <template v-slot:main>
            <h1> Pricing </h1>
        </template>
        <template v-slot:footer>
            <button> Buy Now </button>
        </template>
    </ChildSlot>
    <ChildSlot>
        <template v-slot:header>
            <h1> Brand </h1>
        </template>
        <template v-slot:section>
            <h1> Product Name </h1>
        </template>
        <template v-slot:main>
            <h1> Pricing </h1>
        </template>
        <template v-slot:footer>
            <button> Buy Now </button>
        </template>
    </ChildSlot>
</template>

<script>
import ChildSlot from './childSlot.vue';

export default{
    name:"WATCHERS",
    components:{
        ChildSlot,
    },
    data(){
        return{
            counter:0,
        }
    },
    watch:{
        counter(num,last){
            if(num>10&&num>last){
                alert("Maximum Limit Reached")
                this.counter=0
            }
        }
    }
}
</script>

<style scoped>
</style>