import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Pages/Home.vue';
import RegisterUser from '../components/Pages/UserRegistration.vue';
const routes = [
  { path:'/', component: Home, name: 'Home' },
  { path:'/register', component: RegisterUser, name: 'RegisterUser' },
];
const router = createRouter({
    'history': createWebHistory(),
     routes
});
export default router;