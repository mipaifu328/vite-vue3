<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 10:23:26
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-07 10:08:03
-->
<template>
  <div class="home">
    <navbar>
      <template v-slot:user>
        <user-group />
      </template>
    </navbar>
    <div class="main-container">
      <router-view v-if="isRouterAlive" />
    </div>
    <div class="floor">
      Copyright©2021 版权归航天精一（广东）信息科技有限公司所有
    </div>
  </div>
</template>
<script>
import Navbar from '@c/layout/Navbar.vue'
import UserGroup from '@c/layout/UserGroup.vue'
export default {
  name: 'home',
  components: {
    Navbar,
    UserGroup,
  },
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  mounted() {},
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    },
  },
}
</script>

<style lang="less" scoped>
@navbarH: 66px;
@footerH: 30px;
.home {
  width: inherit;
  height: inherit;
  /*overflow: hidden;*/
  .main-container {
    width: 100%;
    position: absolute;
    margin-top: @navbarH;
    box-sizing: border-box;
    height: calc(100vh - @navbarH - @footerH);
    & > div {
      width: 100%;
      height: 100%;
    }
  }
  .floor {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #1b3a7b;
    font-size: 12px;
    text-align: center;
    color: rgb(248, 248, 248);
    height: @footerH;
    line-height: @footerH;
    z-index: 100;
  }
}
</style>
