<template>
    <h1 id="pages2">For Loop</h1>

    <ul>
        <li v-for="program in technology" :key="program"> {{ program }}</li>
    </ul>
    <br>
    <ul v-for="data in user" :key="data.email">
        <li>Name is: {{ data.name }} </li>
        <li>Email is: {{ data.email }}</li>
        <li>Contact is: {{ data.contact }}</li>                    
    </ul>
    <child name="Tony Stark" :user1="user" :getData="getData"/>
</template>
<script>
import child from './child.vue';

export default{
    name:"ForLoop",
    components:{
        child,
    },
    data(){
        return{
            technology:["HP", "JavaScript", "C++", "Python"],
            user:[
                {
                    name:"Jack",
                    email: "abc@gmail.com",
                    contact: +92322787887,

                },
            ],
        }
    },
    // data(){
    //     return{
    //         user:{
    //             name:"Tony",
    //             email:"abc@gmail.com",
    //         },
    //     }
    // },
    methods:{
        getData(){
            alert("Methods Called")
        }
    }
}
</script>

<style scoped>
#pages2{
    color:blueviolet;
}
</style>