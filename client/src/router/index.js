import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Tools from '../views/Tools.vue'
import Admin from '../views/Admin.vue'
import Dashboard from '../views/Dashboard.vue'
import MyProfile from '../views/MyProfile.vue'
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {isSecret: true},
  },
  {
    path: '/myprofile',
    name: 'MyProfile',
    component: MyProfile,
    meta: {isSecret: true},
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {isAdmin: true},
  },
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