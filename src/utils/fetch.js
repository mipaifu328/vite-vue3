/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 17:09:27
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-10 16:45:58
 */
import axios from 'axios'
import config from '@/config'
import { getToken, setToken } from '@/utils/auth'

const baseUrl = config.baseUrl
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
  baseURL: baseUrl, // api 的 base_url
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 60000, // request timeout
  withCredentials: true,
  crossDomain: true,
})
const errorMsg = (status) => {
  /**
   * code为可结合自己业务进行修改
   */
  switch (status) {
    case 401:
      break
    case 403:
      break
    default:
      ElMessage({
        type: 'error',
        message: '服务异常',
      })
      break
  }
}
service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.withCredentials = true
      config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    } else {
      config.withCredentials = false
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  (response) => {
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { code, msg } = dataAxios
    if (code === undefined || code === 200 || code === '200') {
      // 如果没有 code 代表这不是项目后端开发的接口 可能是第三方接口
      return dataAxios
    } else {
      // 有 code 代表这是一个后端接口统一返回数据格式 可以进行进一步的判断
      switch (code) {
        case '1':
        case 1:
        case '201':
        case 201:
          //code === 1 代表没有错误
          if (dataAxios.total || dataAxios.data == undefined) {
            return dataAxios
          } else {
            return dataAxios.data
          }
        case '403':
        case 403:
        case 401:
          ElMessageBox.confirm(
            '获取用户信息失败，请重新登录!',
            '提示',
            {
              confirmButtonText: '重新登录',
              customClass: 'warning-modal',
              dangerouslyUseHTMLString: true,
              showCancelButton: false,
              confirmButtonClass: 'confirmBtn',
            }
          ).then(() => {
            // todo 退出登录
            // store.dispatch("fedLogOut").then(() => {
            //   let url = window.location.href
            //   let queryParam = window.location.search
            //   url = url.replace(queryParam, "")
            //   if (window != top) {
            //     top.location.href = url
            //   } else {
            //     window.location = url
            //   }
            // })
          })
          break
        case '60113':
        case 60113:
          ElMessage.closeAll()
          ElMessage({
            message: '暂无数据权限！',
            type: 'warning',
            duration: 5000,
          })
          if (dataAxios.data == undefined) {
            return dataAxios
          } else {
            return dataAxios.data
          }
          break
        default:
          throw dataAxios
      }
    }
  },
  (error) => {
    let res = error.response
    res ? errorMsg(res.status) : errorMsg(res)
    return Promise.reject(error)
  }
)

export default service
