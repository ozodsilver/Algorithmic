import { createRouter, createWebHashHistory, createWebHistory  } from "vue-router";
import Home from '../src//Problems/Home.vue'
import Problems from '../src/Problems/Problems.vue'
import Users from '../src/Problems/Users.vue'
import Courses from '../src/Problems/VideoCourses.vue'
import Login from '../src/Problems/Login.vue'
import News from '../src/News/News.vue'
import UserProfile from '../src/News/UserProfile.vue'

import coursesLinks from '../src/Problems/nestedCourses/coursesLinks.vue'
import nestedLink from '../src/Problems/nestedCourses/nestedLink.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/Problems",
    name: "problems",
    component: Problems,
  },

{
    path:'/Users',
    name:'Users',
    component:Users
},

{
    path:'/Courses',
    name:'Courses',
    component:Courses,
   
},

{
  path: '/Courses/:id',
name: 'link',
component: coursesLinks,
props: true,
children:[
  {
    path:'/Courses/:id',
    name:'nestedLink',
    component:nestedLink,
    props:true
  }
]
},

{
    path:'/Login',
    name:'Login',
    component:Login
},
{
    path:'/News',
    name:'News',
    component:News,
},

{
  path:'/profile/:id',
  name:'profile',
  component:UserProfile,
  props:true 
},

]


const router = createRouter({
  routes,
  history: createWebHashHistory(),
  history: createWebHistory(),
});

export default router;
