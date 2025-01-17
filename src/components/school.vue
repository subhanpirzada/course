<template>
    <h1> {{childUser}} </h1>
    <Teacher name="Bruce" :getUser="getUserName"/>
    <Student name="Jack"/>
    
</template>

<script>
import Teacher from './Teacher.vue';
import Student from './student.vue';

export default{
    name:"SCHOOL",
    components:{
        Teacher,
        Student,
    },
    methods:{
        getUserName(name){
            this.childUser=name
        }
    },
    data(){
        return{
            childUser:"",
        }
    }
}
</script>

<style scoped>
</style>