<template>
  <div ref="appRef">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<!-- <script setup>
import { ref, onMounted, onUnmounted } from "vue"
import _ from "lodash"
// * 指向最外层容器
const appRef = ref()
// * 默认缩放值
const scale = {
  width: "1",
  height: "1",
}
// * 设计稿尺寸（px）
const baseWidth = 1920
const baseHeight = 1080

// * 需保持的比例（默认1.77778）
const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))
const calcRate = () => {
  // 当前宽高比
  const currentRate = parseFloat(
    (window.innerWidth / window.innerHeight).toFixed(5)
  )
  if (appRef.value) {
    if (currentRate > baseProportion) {
      // 表示更宽
      scale.width = ((window.innerHeight * baseProportion) / baseWidth).toFixed(
        5
      )
      scale.height = (window.innerHeight / baseHeight).toFixed(5)
      appRef.value.style.transform = `scale(${scale.width}, ${scale.height})`
    } else {
      // 表示更高
      scale.height = (window.innerWidth / baseProportion / baseHeight).toFixed(
        5
      )
      scale.width = (window.innerWidth / baseWidth).toFixed(5)
      appRef.value.style.transform = `scale(${scale.width}, ${scale.height})`
    }
  }
}

const resize = _.debounce(calcRate, 200) // 防抖

onMounted(() => {
  window.addEventListener("resize", resize)
})
onUnmounted(() => {
  window.removeEventListener("resize", resize)
})
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
