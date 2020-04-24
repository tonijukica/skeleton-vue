import Router from "vue-router";
import Vue from "vue";
import store from '@/store';
import Home from '@/components/Home';
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Profile from '@/components/Profile'
import Layout from '@/components/layout/Layout'

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Layout,
    children: [{
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: 'profile',
      name: 'profile',
      component: Profile,
      meta: { protected: true }
    }
  ]
  }, {
    path: '/login',
    name: 'login',
    component: Login,
  }, {
    path: '/register',
    name: 'register',
    component: Register,
  },
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(it => it.meta.protected) && !store.state.auth.user)
    next({ name: 'login' });
  else if((to.name === 'login' || to.name === 'register') && store.state.auth.user)
    next({ name: 'home'})
  else
    next();
})

export default router;
