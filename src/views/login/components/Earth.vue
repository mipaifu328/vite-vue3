<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 11:21:28
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-07 16:18:30
-->
<template>
  <div class="planet-box">
    <div class="bg-img"></div>
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
@width: 610px;
@height: 580px;
.planet-box {
  display: block;
  width: @width;
  height: @height;
  position: absolute;
  left: 70px;
  top: 50%;
  margin-top: -(@height / 2);
  z-index: 4;
  text-align: center;
  .bg-img {
    // background: url(~"@/assets/images/logo.png") left top no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
  }
}
</style>
