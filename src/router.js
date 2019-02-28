import Vue from 'vue'
import Router from 'vue-router'

// / routes
import Home from './views/Home.vue'
import Explore from './views/Explore.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'

// /vue routes
import VueHome from './views/Vue/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    // / routes
    {
      path: '/',
      name: 'index',
      // redirect the / to /home
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    // /vue routes
    {
      path: '/vue/home',
      name: 'vue_home',
      component: VueHome
    }

  ]
})
