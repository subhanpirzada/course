<template>
    <!-- <h1> Two Way Binding </h1>
    <input type="text" placeholder="Add The Number" v-model="count"/>
    <h3> {{ count }}</h3> -->

    <h1 id="pages"> Two Way Binding in multiple input boxes </h1>
    <label for=""> Cricket </label>
    <input type="checkbox" value="Cricket" v-model="sports" id="">
    &nbsp;
    <label for=""> Football </label>
    <input type="checkbox" value="Football" v-model="sports" id="">
    &nbsp;
    <label for=""> Hockey </label>
    <input type="checkbox" value="Hockey" v-model="sports" id="">
    &nbsp;
    <br/>

    <label for="name"> Player Name </label>
    &nbsp; &nbsp;

    <label for="smith"> Smith </label>
    &nbsp;
    <input type="radio" value="Smith" name="player" v-model="player" id="name1">

    <label for="finch"> Finch </label>
    &nbsp;
    <input type="radio" value="Finch" name="player" v-model="player" id="name2">



    <h3> Selected Sports {{ sports }} </h3>
    <h3> Selected Player {{ player }} </h3>
</template>


<script>
export default{
    name:"TWOWAYBINDING",
    data(){
        return{
            count:0,
            sports:[],
            player:'',
        }
    }

}
</script>

<style>
h1{
    color: green;
}
</style>