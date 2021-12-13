<template>
  <div class="hs-navbar">
    <div class="logo-title">
      <router-link to="/">
        <img src="@/assets/images/logo.png" class="logo-img" />
        vite-vue3 Demo
      </router-link>
    </div>
    <div class="navbar-right">
      <div class="navbar-user-con">
        <slot name="user" />
      </div>
    </div>
    <div class="navbar-center">
      <ul class="menu-ul">
        <li v-for="(item, index) in menuList" :key="index">
          <router-link
            :to="item.path"
            :class="{ active: item.active }"
            @click.native="changePages(item)"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
// import config from "@/config"
// import { getToken } from "@/utils/auth"

import { reactive } from 'vue'
import { useRoute } from 'vue-router'
const menuList = reactive([
  {
    path: '/',
    name: '首页',
    active: true,
  },
  {
    path: '/home/other',
    name: '其他页面',
    active: false,
  }
])

const route = useRoute()

const getUrlName = (data) => {
  for (const item of menuList) {
    item.active = false
    if (item.name.includes(data.name)) {
      item.active = true
    }
  }
}
const changePages = (item) => {
  getUrlName(item)
}

getUrlName(route)
</script>
<style lang="less" scoped>
.hs-navbar {
  /*顶部导航*/
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 66px;
  top: 0;
  color: #fff;
  z-index: 1001;
  background-color: @boxBgColor;
  padding: 0 30px;
  min-width: 1010px;
  .logo-title {
    float: left;
    line-height: 66px;
    font-size: 22px;
    .logo-img {
      width: 50px;
      height: 50px;
      margin-top: 8px;
      float: left;
      cursor: pointer;
      margin-right: 12px;
    }
    a { 
      color: #fff;
      text-decoration: none;
    }
  }
  .navbar-right {
    float: right;
    .navbar-user-con {
      display: flex;
      height: 66px;
      align-items: center;
      font-size: 14px;
      .person-style {
        width: 20px;
        height: 20px;
        color: #ffffff;
        position: relative;
        top: 5px;
        margin-right: 10px;
      }
      .username-style {
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
  .navbar-center {
    width: 100%;
    text-align: center;
    .menu-ul {
      margin: 0;
      padding: 0;
      display: inline-block;
      list-style: none;
      height: 100%;
      line-height: 66px;
      color: #fff;
      li {
        float: left;
        cursor: pointer;
        font-size: 15px;
        margin-right: 5px;
        &:hover {
          background: #0f3f8d;
        }
        a {
          width: 100%;
          display: block;
          color: #fff;
          padding: 0 23px;
          text-decoration: none;
          &.active {
            background: #0f3f8d;
            /*border-bottom: 3px solid #39f;*/
          }
        }
      }
    }
  }
}
</style>
