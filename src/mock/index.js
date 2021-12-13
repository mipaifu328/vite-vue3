/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-02 11:22:18
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-06 09:56:23
 */
export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 1,
        message: 'ok',
        data: {
          userInfo: {
            userId: 1,
            userName: 'admin',
            loginId: 'admin',
          },
          token: 'sdkfo2314lll555',
          menus: [{}],
        },
      }
    },
  },
  {
    url: '/api/logout',
    method: 'post',
    response: () => {
      return {
        code: 1,
        message: 'ok',
      }
    },
  },
  {
    url: '/api/updatePsw',
    method: 'post',
    response: () => {
      return {
        code: 1,
        message: 'ok',
      }
    },
  },
  {
    url: '/api/checkOldPsw',
    method: 'post',
    response: () => {
      return {
        code: 1,
        result: true,
      }
    },
  },
]
