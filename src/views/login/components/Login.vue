<template>
  <div class="login">
    <div class="login-panel">
      <div class="pki-acc-change">用户登录</div>
      <div>
        <el-form autoComplete="on" :model="loginForm" label-position="left">
          <el-form-item prop="username" class="login-form-group">
            <el-input
              placeholder="用户名"
              autofocus
              v-model.trim="loginForm.username"
              @keyup.enter.native="loginPanelBtnLogin"
            >
              <template #prefix>
                <user-icon class="login-icon"/>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-form-group">
            <el-input
              placeholder="密码"
              type="password"
              v-model.trim="loginForm.password"
              @keyup.enter.native="loginPanelBtnLogin"
            >
              <template #prefix>
                <psw-icon class="login-icon"/>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="btnLogin"
              :loading="logining"
              @click.native.prevent="loginPanelBtnLogin"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { userStore } from '@/store/user'
import pswIcon from '@icons/password.svg'
import userIcon from '@icons/username.svg'
const loginForm = reactive({
  username: '',
  password: '',
})
const logining = ref(false)
const router = useRouter()
const store = userStore()
const loginPanelBtnLogin = () => {
  store.login({ ...loginForm }).then(() => {
    router.push('/')
  })
}
</script>

<style lang="less">
.login {
  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px #fff inset !important;
    -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
    -webkit-text-fill-color: #333 !important;
  }
  padding: 16px;
  background: rgba(2, 48, 98, 0.6);
  border: 1px solid #6ea1fb;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4);
  overflow: hidden;
  position: absolute;
  right: 100px;
  top: 0;
  bottom: 0;
  width: 480px;
  height: 476px;
  margin: auto;
  border-radius: 8px;
  /*登录面板*/
  .login-panel {
    /*background-color: #fff;*/
    z-index: 5;
    width: 100%;
    height: 100%;
    padding: 20px 40px;
    box-sizing: border-box;
    color: #fff;
    transition: all 0.2s ease;
    /*box-shadow: 0 3px 7px 0 rgba(0,0,0,.3);*/
    border-radius: 8px;
    .pki-acc-change {
      margin: 0 auto 50px;
      font-weight: bold;
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      text-align: center;
      color: #3edde5;
    }
    .login-form-group {
      margin-top: 20px;
      .login-icon{
        width: 50px;
        height: 30px;
        color: #69abfe;
        border-right: 1px solid #69abfe;
        margin-top: 10px;
        line-height: 30px;
      }
      .el-input .el-input__inner {
        background-color: rgba(9, 37, 87, 0.6);
        height: 50px;
        border-radius: 4px;
        padding-left: 70px;
        line-height: 50px;
        border: 1px solid #6ea1fb;
        font-size: 15px;
        color: #6ea1fb;
        margin-bottom: 20px;
      }
      .el-input__inner:focus {
        border: 1px solid #2d85e2;
      }
      .el-input__prefix {
        left: 0;
      }
    }
    .el-button {
      margin-top: 40px;
      font-size: 18px;
      width: 100%;
      height: 50px;
      border: 0;
      font-weight: bold;
      letter-spacing: 3px;
      margin-left: 0;
    }
    .btnLogin {
      background-color: #3edde5;
      color: #333;
    }
  }
}
</style>
