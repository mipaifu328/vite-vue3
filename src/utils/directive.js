/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-02 15:40:56
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-02 17:35:56
 */
const myDirectives = (app, options) => {
  app.directive("dialogdrag", {
    // 渲染完毕
    mounted(el, binding) {
      console.log(el)
      // }
    },
  })
}

export default myDirectives
