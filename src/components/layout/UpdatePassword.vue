<template>
  <el-form
    :model="passwordForm"
    label-width="80px"
    :rules="passwordRules"
    ref="pswForm"
  >
    <el-form-item prop="old" label="旧密码">
      <el-input
        type="password"
        ref="pswInput"
        v-model.trim="passwordForm.old"
      ></el-input>
    </el-form-item>
    <el-form-item prop="new" label="新密码">
      <el-input type="password" v-model.trim="passwordForm.new"></el-input>
    </el-form-item>
    <el-form-item prop="confirmNew" label="确认密码">
      <el-input
        type="password"
        v-model.trim="passwordForm.confirmNew"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { updatePsw, checkOldPsw } from '@/api/user'

const pswForm = ref()
const pswInput = ref()
const passwordForm = reactive({
  old: '',
  new: '',
  confirmNew: '',
})

const emit = defineEmits(['on-save-success'])

onMounted(() => {
  // autofocus失效 Autofocus processing was blocked because a document already has a focused element.
  pswInput.value.focus()
})

const resetForm = () => {
  pswForm.value.resetFields()
}
const submit = () => {
  //todo
  pswForm.value.validate((valid) => {
    if (valid) {
      let params = {
        oldPassword: passwordForm.old,
        newPassword: passwordForm.new,
      }
      updatePsw(params).then((res) => {
        emit('on-save-success')
      })
    }
  })
}

defineExpose({
  submit,
  resetForm,
})
// 远程校验原密码是否匹配已登录用户的密码
const oldPasswordValidator = (rule, value, callback) => {
  let params = {
    oldPassword: value,
  }
  checkOldPsw(params)
    .then((resp) => {
      if (!resp.result) {
        return callback(new Error('旧密码不正确'))
      } else {
        callback()
      }
    })
    .catch((e) => {
      ElMessage.error('校验旧密码错误：' + e.response.data.msg)
    })
}

// 校验新密码
const newPasswordValidator = (rule, value, callback) => {
  var len = 0
  if (value.match(/([a-z])+/)) {
    len++
  }

  if (value.match(/([0-9])+/)) {
    len++
  }

  if (value.match(/([A-Z])+/)) {
    len++
  }

  if (value.match(/[^a-zA-Z0-9]+/)) {
    len++
  }
  if (len < 2) {
    return callback(
      new Error('密码必须由大写字母，小写字母，数字，特殊字符中任意两个组合')
    )
  } else {
    callback()
  }
}

// 确认密码校验
const confirmPasswordValidator = (rule, value, callback) => {
  if (value !== passwordForm.new) {
    return callback(new Error('密码不一致'))
  } else {
    callback()
  }
}

const passwordRules = {
  old: [
    { required: true, message: '输入项为必输项', trigger: 'blur' },
    { whitespace: true, message: '输入项不能为空格', trigger: 'blur' },
    { validator: oldPasswordValidator, trigger: 'blur' },
  ],
  new: [
    { required: true, message: '输入项为必输项', trigger: 'blur' },
    { whitespace: true, message: '输入项不能为空格', trigger: 'blur' },
    { min: 8, message: '输入项长度最小为8位', trigger: 'blur' },
    { validator: newPasswordValidator, trigger: 'blur' },
  ],
  confirmNew: [
    { required: true, message: '输入项为必输项', trigger: 'blur' },
    { validator: confirmPasswordValidator, trigger: 'blur' },
  ],
}
</script>
<style lang="less" scoped></style>
