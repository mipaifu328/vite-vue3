<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 10:23:16
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-07 16:32:09
-->
<template>
  <div class="sk-login">
    <div class="sk-login-style sk-login-bg">
      <Stars />
    </div>
    <navbar />
    <div class="sk-login-details">
      <!--地球-->
      <earth />
      <!--登陆面板-->
      <keep-alive>
        <login />
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Stars from './components/Stars.vue'
import Earth from './components/Earth.vue'
import Login from './components/Login.vue'
</script>

<style lang="less">
.sk-login {
  &-style {
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  &-bg {
    background: url(~"@/assets/images/login/login_bg.jpg") no-repeat center center;
    background-size: cover;
  }
  &-details {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80%;
    margin: 0 auto;
    min-width: 1366px;
    min-height: 800px;
  }
}
</style>
