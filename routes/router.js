import { createRouter, createWebHashHistory, createWebHistory  } from "vue-router";
import Home from '../src//Problems/Home.vue'
import Problems from '../src/Problems/Problems.vue'
import Users from '../src/Problems/Users.vue'
const routes = [
{
    path:'/',
    name:'home',
    component:Home
},

{
    path:'/Problems',
    name:'problems',
    component:Problems
},

{
    path:'/Users',
    name:'Users',
    component:Users
}

]


const router = createRouter({
    routes,
    history: createWebHashHistory(),
    history: createWebHistory(),
})


export default router;