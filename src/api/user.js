/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-02 13:53:37
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-06 10:35:13
 */
import request from '@/utils/fetch'

const login = (params) => {
  return request({
    url: '/api/login',
    data: params,
    method: 'post',
  })
}

const logout = () => {
  return request({
    url: '/api/logout',
    method: 'post',
  })
}

const updatePsw = (params) => {
  return request({
    url: '/api/updatePsw',
    data: params,
    method: 'post',
  })
}

const checkOldPsw = (params) => {
  return request({
    url: '/api/checkOldPsw',
    data: params,
    method: 'post',
  })
}

export { login, logout, updatePsw, checkOldPsw }
