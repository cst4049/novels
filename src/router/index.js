import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Novel from '@/components/Novel'
import Vchapter from '@/components/Vchapter'
import Contents from '@/components/Contents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/novel/japan'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/novel/japan',
        component: Novel,
        name: '日漫小说'
    }]
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/volume',
        component: Vchapter,
        name: '章节目录'
    }]
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/content',
        component: Contents,
        name: '章节内容'
    }]
    },
  ]
})
