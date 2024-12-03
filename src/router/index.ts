import { createRouter, createWebHistory } from 'vue-router'
import { onMounted } from 'vue';
import { userStore } from '@/stores/user';
import { ROLE } from '@/types/User';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta:{permission: ROLE.Visitor, },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta:{permission: ROLE.Visitor, },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta:{permission: ROLE.Visitor, },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue'),
      meta:{permission: ROLE.Visitor, },
    },
    {
      path:'/user/:id',
      name:'user',
      component: () => import('../views/user/UserSpace.vue'),
      meta:{permission: ROLE.Visitor, },
    },
    // {
    //   path:'admin',
    //   name:'admin',
    //   component: () => import('../views/AdminView.vue'),
    //   meta:{permission: ROLE.Admin },
    // }
  ],
})

router.beforeEach(async (to: any, from: any, next) => {
  const {info}=userStore();
  const permission = info.value?.role ?? -1;
  if (to.meta.permission > permission) {
    next("/403");
  }

  next();
});

export default router
