<template>
  <div class="right-box">
    <el-dialog
      width="500px"
      title="修改密码"
      :close-on-click-modal="false"
      v-model="showEditPassword"
      @close="resetForm"
    >
      <update-password
        ref="updatePassword"
        @on-save-success="passwordSaveSuccess"
      ></update-password>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" type="danger" @click="showEditPassword = false"
          >取消</el-button
        >
        <el-button size="small" type="primary" @click="savePassword"
          >确定</el-button
        >
      </div>
    </el-dialog>
    <div class="user-info">
      <el-dropdown trigger="click">
        <a href="javascript:void(0)">
          <user-icon class="person-style" />
          <span class="username-style">{{ userName }}</span>
          <down-icon class="el-icon--right" />
        </a>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="editPassword">
              <edit-icon class="el-icon--left"/> 修改密码
            </el-dropdown-item>
            <el-dropdown-item @click="loginOut">
              <logout-icon class="el-icon--left"/> 注销
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import UpdatePassword from './UpdatePassword.vue'
import userIcon from '@icons/user.svg'
import downIcon from '@icons/down.svg'
import editIcon from '@icons/edit.svg'
import logoutIcon from '@icons/logout.svg'
import { ref, computed } from 'vue'
import { userStore } from '../../store/user'

const router = useRouter()
const showEditPassword = ref(false)
const store = userStore()
const updatePassword = ref()
const userName = computed(() => store.userName)

const editPassword = () => {
  showEditPassword.value = true
}
// 保存修改密码
const savePassword = () => {
  updatePassword.value.submit()
}
// 密码保存成功回调
const passwordSaveSuccess = () => {
  ElMessage.success('密码修改成功')
  showEditPassword.value = false
}
const loginOut = () => {
  ElMessageBox.confirm(
    '<i class="el-icon-question"></i>用户注销后，所有应用都将退出，是否确认注销？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      customClass: 'warning-modal',
      dangerouslyUseHTMLString: true,
    }
  )
    .then(() => {
      store.logout().then((result) => {
        router.push('/login')
      })
    })
    .catch(() => {})
}

const resetForm = () => {
  updatePassword.value.resetForm()
}
</script>
<style lang="less">
@headerHeight: 60px;
.right-box {
  float: right;
  .user-info {
    height: @headerHeight;
    line-height: @headerHeight;
    .person-style {
      width: 20px;
      height: 20px;
      color: #ffffff;
      position: relative;
      margin-right: 10px;
    }
    .username-style {
      color: #ffffff;
      font-size: 14px;
    }
    span {
      color: #ffffff;
    }
  }
  .dialog-footer {
    text-align: center;
  }
}
</style>
