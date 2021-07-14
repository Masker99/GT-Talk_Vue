<template>
    <body id="poster">
      <el-form class="registration-container" label-position="right" label-width="auto" :model="RegistrationForm" :rules="rules" ref="RegistrationForm">
        <h3 class="registration-title">注册账号</h3>
        <el-form-item label="用户名:" prop="username">
          <el-input type="text" v-model="RegistrationForm.username" placeholder="2~16位（字母、数字）"></el-input>
        </el-form-item>

        <el-form-item label="注册邮箱" prop="email">
          <el-input type="text" v-model="RegistrationForm.email" placeholder="输出注册邮箱"></el-input>
        </el-form-item>

        <el-form-item label="密码:" prop="password">
          <el-input type="password" v-model="RegistrationForm.password" placeholder="5~19位（首位为字母，数字、下划线）"></el-input>
        </el-form-item>

        <el-form-item label="重复密码:" prop="repassword">
          <el-input type="password" v-model="RegistrationForm.repassword" placeholder="再次输入密码"></el-input>
        </el-form-item>

        <el-form-item label="验证码:">
          <el-input type="text" v-model="RegistrationForm.verifyCode" style="width: 150px"></el-input>
          <a v-on:click="changeCode" title="点击更换验证码">
            <el-image src="http://localhost:8080/verifyCode" id="captcha" style="vertical-align:middle;"></el-image>
          </a>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </body>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    let validatePassword = (rule, value, callback) => {
      if (value !== this.RegistrationForm.password) {
        callback(new Error('输入密码不一致!'))
      }
    }
    return {
      RegistrationForm: {
        username: '',
        email: '',
        password: '',
        repassword: '',
        verifyCode: ''
      },
      ResponseResult: [],
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {pattern: /^[A-Za-z][A-Za-z0-9]{1,15}$/, message: '输入正确格式的用户名'}
        ],
        email: [
          {required: true, trigger: 'blur', pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, message: '请输入正确的邮箱'}
        ],
        password: [
          {required: true, trigger: 'blur', pattern: /^[A-Za-z]\w{5,19}$/, message: '请输入正确的密码'}
        ],
        repassword: [
          {required: true, trigger: 'blur', validator: validatePassword}
        ]
      }
    }
  },
  methods: {
    changeCode () {
      document.getElementById('captcha').src = 'http://localhost:8080/verifyCode?' + Math.random()
    }
  }
}
</script>

<style scoped>
  .registration-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .registration-title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .el-button {
    width: 80%;
    margin-left: -50px;
  }

  #poster {
    background: url("../assets/login.jpg") no-repeat center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
</style>
