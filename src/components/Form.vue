<template>

    <h1> Form Component</h1>
    <form @submit.prevent>

    <label for="username">Username</label> &nbsp;
    <input autocomplete="username" type="text" placeholder="Username" id="username" name="" v-model="form.username">
    <br/>
    <br/>

    <label for="password">Password</label> &nbsp;&nbsp;
    <input type="password" placeholder="Password" id="password" name="" v-model="form.password">
    <br/>
    <br/>
    <label for="hobbies">Hobbies</label>&nbsp;&nbsp;

    <label for="">Hockey</label>
    <input type="checkbox" value="hockey" v-model="form.hobbies">&nbsp;&nbsp;

    <label for="">Football</label>
    <input type="checkbox" value="football" v-model="form.hobbies">&nbsp;&nbsp;

    <label for="">Cricket</label>
    <input type="checkbox" value="cricket" v-model="form.hobbies">&nbsp;&nbsp;
    <br/>
    <br/>
    
    <label for="gender"> Gender </label>&nbsp;&nbsp;
    
    <label for="">Male</label>&nbsp;
    <input type="radio" value="male" v-model="form.gender">&nbsp;&nbsp;
    
    <label for="">Female</label>&nbsp;
    <input type="radio" value="female" v-model="form.gender">&nbsp;&nbsp;
    
    <br/>
    <br/>


    <button @click="login"> Sign Up </button>
    <p>{{ form }}</p>

    </form>

</template>

<script>
export default{
    name:"FORM",
    data(){
        return{
            form:{
                username:"",
                password:"",
                hobbies:[],
                gender:"",
            }
        }
    },
    methods:{
        login(){
            console.log("Login Data", this.form)
        }
    }
}
</script>

<style scoped>
</style>