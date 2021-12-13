<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 11:21:28
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-10 13:52:26
-->
<template>
  <div class="sk-navbar">
    <div class="logo-title">
      <router-link to="/">
        <img src="@/assets/images/logo.png" class="logo-img" />
        <span>vite+vue3 Demo</span>
      </router-link>
    </div>
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
.sk-navbar {
  /*顶部导航*/
  position: fixed;
  box-sizing: border-box;
  height: 120px;
  width: 100%;
  top: 0;
  color: #fff;
  z-index: 1001;
  background: url(~"@/assets/images/login/top.png") no-repeat center;
  text-align: center;
  .logo-title {
    display: inline-block;
    line-height: 66px;
    font-size: 30px;
    margin-top: 20px;
    letter-spacing: 2px;
    margin-left: 15px;
    .logo-img {
      width: 60px;
      height: 60px;
      float: left;
      cursor: pointer;
      /*margin-right: 12px;*/
    }
    a {
      color: #fff;
      text-decoration: none;
      span {
        margin: 0 15px;
      }
    }
  }
}
</style>
