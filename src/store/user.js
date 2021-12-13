/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 10:16:11
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-03 09:13:17
 */
import { defineStore } from 'pinia'
import { login, logout } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const userStore = defineStore('userStore', {
  // state 一个函数，返回一个对象
  state: () => {
    return {
      userName: '',
    }
  },
  getters: {
    // doubleCount: (state) => state.counter * 2,
    doubleCount(state) {
      return state.counter * 2
    },
  },
  actions: {
    login(params) {
      return login(params).then((result) => {
        result.token && setToken(result.token)
        this.userName = result.userInfo.userName
      })
    },
    logout() {
      return logout().then((result) => {
        removeToken()
        this.userName = ''
      })
    },
  },
})
