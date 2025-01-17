import { createWebHistory, createRouter } from "vue-router";

import HomeSection from "./components/HomeSection.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import PageNotFound from "./components/PageNotFound.vue";

const routes=[
    {
        name:'HomeSection',
        path:'/',
        component:HomeSection,
    },
    {
        name:'Login',
        path:'/login/:name',
        component:Login,
    },
    {
        name:'SignUp',
        path:'/signup/:name',
        component:SignUp,
    },
    {
        name:'PageNotFound',
        path:'/:pathMatch(.*)*',
        component:PageNotFound,
    },
];

const router= createRouter({
    history:createWebHistory(),
    routes,
});
export default router