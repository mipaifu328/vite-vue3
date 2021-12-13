/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 10:11:36
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-13 11:39:53
 */

import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner: false})

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: () => import('../views/home/Home.vue'),
    children: [
      {
        name: '首页',
        path: '/home/index',
        component: () => import('../views/index/Index.vue'),
      },
      {
        name: '其他页面',
        path: '/home/other',
        component: () => import('../views/other/Other.vue'),
      }
    ],
  },
  {
    name: '登录页面',
    path: '/login',
    component: () => import('../views/login/Login.vue'),
  },
  {
    name: '找不到页面',
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  next()
})

router.afterEach(() => {
  // finish progress bar

  setTimeout(() => {
    NProgress.done()
  }, 3000)
})

export default router
