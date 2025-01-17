<template>
    <!-- <h1>Child Component</h1> -->
    <!-- <h3>{{name}}</h3>
    <h3>Name: {{user[0].name}} <br>Email: {{user[0].email}}</h3>
    <button @click="getData"> Click Me</button> -->

    <!-- New User Component -->
     <!-- <ul>
        <li v-for="item in users" :key="item.email">
            <NewUser :data="item"/>
        </li>
     </ul> -->

     <!-- HTML Binding -->
     <!-- <div >
        <div v-html="email"></div>
        <div v-html="id"></div>
     </div> -->

     <!-- Class Binding -->
      <h1> Class Binding </h1>
      <h3 :class={yellow:color}> Dynamic Classes </h3>
      <button @click="color=!color"> Color Change </button>
</template>

<script>
// import NewUser from './newUser.vue';
export default{
    name:"Child-Component",
    components:{
        // NewUser
    },
    props:{
        name:{
            type:String,
            default:'',
        },
        user1:{
            type:Object,
        },
        getData:{
            type:Function
        }
    },
    data(){
        return{
            // users:[
            //     {
            //         name:'Jackson1',
            //         email:'jackson1@gmail.com'
            //     },
            //     {
            //         name:'Jackson2',
            //         email:'jackson2@gmail.com'
            //     },
            //     {
            //         name:'Jackson3',
            //         email:'jackson3@gmail.com'
            //     },
            // ]
            names:"Peter",
            email:"<h1>Peter123@gmail.com<h1>",
            id: "<h1>165202151<h1>",
            color:true,

        }
    },
    // methods:{
    //     colorChange(){
    //         this.color=!this.color
    //     }
    // }
}
</script>

<style>
h1{
    color:brown;
    font-weight: 600;
}
.yellow{
    color: black;
    font-weight: bolder;
    background-color: yellow;
    width: 150px;
    height: 100px;
    align-content: center;
    justify-self: center;
}
</style>