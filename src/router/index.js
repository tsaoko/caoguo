import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import NotFound from '@/pages/common/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: {path: '/404'}
    }
  ],
  mode: 'hash'
})
