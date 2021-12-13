<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 11:21:28
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-01 15:38:17
-->
<template>
  <div id="starsBox"></div>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue"
let timer = null
const star = function () {
  const cols = ["#fff", "#2D86E4", "#f4d03f", "#3399ff"]
  const stars = 300
  const startsBox = document.getElementById("starsBox")
  const documentFragment = document.createDocumentFragment()
  for (let i = 0; i <= stars; i++) {
    const span = document.createElement("span")
    const size = Math.random() * 3
    const color = cols[parseInt(Math.random() * 4)]
    span.style.width = size + "px"
    span.style.height = size + "px"
    span.style.top = Math.random() * 100 + "%"
    span.style.left = Math.random() * 100 + "%"
    span.style.background = color
    span.style.boxShadow = "0 0 " + Math.random() * 10 + "px" + color
    documentFragment.appendChild(span)
  }
  startsBox.appendChild(documentFragment)
  setTimeout(function () {
    startsBox.querySelectorAll("span").forEach((element) => {
      element.style.top = Math.random() * 100 + "%"
      element.style.left = Math.random() * 100 + "%"
    })
  }, 1)

  timer = setInterval(function () {
    startsBox.querySelectorAll("span").forEach((element) => {
      element.style.top = Math.random() * 100 + "%"
      element.style.left = Math.random() * 100 + "%"
    })
  }, 100000)
}
onMounted(() => {
  star()
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>
<style lang="less">
#starsBox {
  span {
    display: inline-block;
    width: auto;
    position: absolute;
    border-radius: 100%;
    transition: 100s linear 0s;
  }
}
</style>
