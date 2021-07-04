import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 导入组件
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'
import Registration from '../components/Registration'
import Home from '../components/home/Home'
import post from '../components/post'
import ArtiicleDetails from '../components/ArtiicleDetails'
import empty from '../components/home/empty'
import RetrivePassword from '../components/RetrievePassword'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex
        },
        {
          path: '/article/:article_id',
          name: 'ArticleDetails',
          component: ArtiicleDetails
        },
        {
          path: '/article',
          name: 'post',
          component: post
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/retrieve',
      name: 'retrievePassword',
      component: RetrivePassword
    },
    {
      path: '/empty',
      name: 'empty',
      component: empty
    }
  ]
})
