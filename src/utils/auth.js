/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-02 14:42:36
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-02 14:43:35
 */
const TokenKey = "token"
// const inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000); //120分钟
export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  localStorage.removeItem(TokenKey)
}
