import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Tools from '../views/Tools.vue'
import Admin from '../views/Admin.vue'
import { CurrentUser } from '../models/Users'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
    meta: {isSecret: true},
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {isAdmin: true},
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach( (to, from, next) => {
  if(to.meta.isSecret && !CurrentUser) next('/');
  else next();
});

router.beforeEach( (to, from, next) => {
  if(to.meta.isAdmin && ((!CurrentUser || (CurrentUser.Email != 'a@ft.com')))) next('/');
  else next();
});

export default router