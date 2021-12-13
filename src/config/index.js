/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-03 09:27:43
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-13 10:01:19
 */
const configEnv = {
  baseUrl: {
    dev: 'http://127.0.0.1:8888/',
    // pro: 'http://www.prod.com/',
    pro: 'http://127.0.0.1:8888/'
  },
}

function proxyEnv(configEnv) {
  let config = {}
  const env = process.env.NODE_ENV === 'development' ? 'dev' : 'pro'
  // "scripts": {
  //     "dev": "vite", //本地开发运行，会把process.env.NODE_ENV设置为'development'
  //     "build": "vite build", //默认打包模式，会把process.env.NODE_ENV设置为'production'
  // },
  Object.keys(configEnv).forEach((key) => {
    if (
      configEnv[key] instanceof Object &&
      configEnv[key].hasOwnProperty(env)
    ) {
      config[key] = configEnv[key][env]
    } else {
      config[key] = configEnv[key]
    }
  })
  return config
}

export default proxyEnv(configEnv)
