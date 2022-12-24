import { createRouter, createWebHashHistory, createWebHistory  } from "vue-router";
import Home from '../src//Problems/Home.vue'
import Problems from '../src/Problems/Problems.vue'
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
}
]


const router = createRouter({
    routes,
    history: createWebHashHistory(),
    history: createWebHistory(),
})


export default router;