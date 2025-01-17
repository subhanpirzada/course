<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Meta Brains.org"/> -->


  <!-- Interpolation Concepts -->
  <!-- <INTERPOLATION/> -->

  <!-- Methods Concepts -->
  <!-- <METHODS/> -->
  
  <!-- Events Concepts -->
  <!-- <EVENTS/> -->
  
  <!-- Two-Way Binding Concepts -->
  <!-- <TWOWAYBINDING/> -->
  
  <!-- If-Else-Condition Concepts -->
  <!-- <IfElseCondition/> -->

  <!-- For-Loop Concepts -->
  <!-- <ForLoop/> -->

  <!-- Passing Data from Parent to Child Concepts -->
  <!-- To understand this concept go-to ForLoop Component in that component child.vue is being accessed -->

  <!-- Props Concept From Parent to Multiple Child -->
  <!-- School(Parent Component) passing props to Teacher and Student(Child Components)  -->
  <!-- Teacher (Child Compoenent)  passing data to School(Parent Component) -->
  <!-- <School/>   -->
  
  <!-- Complete Form  -->
  <!-- <Form/> -->
  
  <!-- Props and Non Props(Defined Inside Props Component as a child component) -->
  <!-- <Props/> -->

  <!-- Computed Property  -->
  <!-- <ComputedProperty/> -->

  <!-- Watchers Property  (Slot Concept also used in it by the name of childSlot)-->
  <!-- <Watchers/> -->

  <!-- Dyanmic Components Rendering and Teleporation Concepts-->
  <!-- <Home/> -->

  <!-- Life Cycle Hooks -->
  <!-- <LifeCycleHooks/> -->

  <!-- Routes -->
  <br>
  <RouterLink to="/"> Home Section </RouterLink><br>
  <RouterLink to="/login/stark"> Login1 </RouterLink><br>
  <RouterLink to="/login/stark2"> Login2 </RouterLink><br>
  <RouterLink to="/login/stark3"> Login3 </RouterLink><br>
  <RouterLink to="/login/stark4"> Login4 </RouterLink><br>
  <RouterLink to="/signup/user-3"> SignUp </RouterLink><br>
  <RouterView></RouterView>
  <br>
  <br>
  <h1> Call API </h1>
  <!-- <h3 v-for="items in info" :key="items.id"> 
  {{ items.id }} | {{ items.first_name }} | {{ items.last_name }}| {{ items.email }}
  </h3> -->

  <table style="justify-self: center;">
    <tr>
      <th> Item ID</th>
      <th> First Name</th>
      <th> Last Name</th>
      <th> Email</th>
      <th> Picture </th>
    </tr>
    <tr v-for="items in info" :key="items.id">
    <td>{{ items.id }}</td>
    <td>{{ items.first_name }}</td>
    <td>{{ items.last_name }}</td>
    <td>{{ items.email }}</td>
    <td><img :src="items.avatar" alt=""></td>
    </tr>
  </table>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import INTERPOLATION from './components/Interpolation.vue'
// import METHODS from './components/Methods.vue'
// import EVENTS from './components/Events.vue'
// import TWOWAYBINDING from './components/TwoWayBinding.vue'
// import IfElseCondition from './components/If-else-Condition.vue'
// import ForLoop from './components/for-loop.vue';
// import School from './components/school.vue';
// import Form from './components/Form.vue';
// import Props from './components/props.vue';
// import ComputedProperty from './components/computedProperty.vue';
// import Watchers from './components/watchers.vue';
// import Home from './components/home.vue';
// import LifeCycleHooks from './components/LifeCycleHooks.vue';
import axios from 'axios'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // INTERPOLATION,
    // METHODS,
    // EVENTS,
    // TWOWAYBINDING,
    // IfElseCondition,
    // ForLoop,
    // School,
    // Form,
    // Props,
    // ComputedProperty,
    // Watchers,
    // Home,
    // LifeCycleHooks,
  },
  data(){
    return{
      info:[],
    }
  },
  async mounted() {
    let information= await axios.get("https://reqres.in/api/users?page=2");
    console.log("Api-data", information.data.data);
    this.info=information.data.data
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table{
  font-family: arial,sans-serif;
  text-align: left;
  padding: 8px;
}
td,th{
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
tr:nth-child(even){
  background-color: #dddddd;
}
</style>
