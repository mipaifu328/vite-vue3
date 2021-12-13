/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-07 09:32:22
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-07 09:49:54
 */
module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 100,
      propList: ['*'], // 哪些属性需要转rem，*表示全部
      selectorBlackList: [/^html$/], // 要忽略并保留为 px 的选择器
      mediaQuery: false, // 允许在媒体查询中转换 px
      minPixelValue: 0, // 设置要替换的最小像素值。
      //   exclude: /node_modules/i, //要忽略并保留为 px 的文件路径。
    },
  },
}
