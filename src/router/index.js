import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import ProblemList from '../views/ProblemList/ProblemList.vue'
import ProblemDetail from '../views/Problem/ProblemDetail.vue'
import Status from '../views/Status/Status.vue'
import Ranking from '../views/Ranking/Ranking.vue'
import Group from '../views/Group/Group.vue'
import Contest from '../views/Contest/Contest.vue'
import Help from '../views/Help/Help.vue'
import Signup from '../views/Auth/Signup.vue'
import Login from '../views/Auth/Login.vue'
import UserProfile from '../views/User/UserProfile.vue'
import {getToken} from "../utils/auth.js";
import ProgramListManger from "../admin/componments/ProgramListManger.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/problem',
    name: 'ProblemList',
    component: ProblemList,
    meta: {requiresAuthLevel: 1}
  },
  {
    path: '/problem/:id',
    name: 'ProblemDetail',
    component: ProblemDetail
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/group',
    name: 'Group',
    component: Group
  },
  {
    path: '/contest',
    name: 'Contest',
    component: Contest
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { requiresAuthLevel: 1}
  },
  {
    path: '/ProgramListManger',
    name: 'ProgramListManger',
    component: ProgramListManger,
    meta: { requiresAuthLevel: 2}
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach( (to,from,next)=>{
  const token = getToken();
  const role = localStorage.getItem("role");
  const log = !!token;
  console.log(role)
  console.log(to.meta.requiresAuthLevel);
  if(!!to.meta.requiresAuthLevel){
    console.log('权限识别')
    if(!log){
      next('/login');
      console.log('work')
    }else if(role < to.meta.requiresAuthLevel){
      next('/login');
    }else{
      next();
    }
  }else {
    next();
  }

})


export default router
