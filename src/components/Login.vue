<template>
  <body id="poster">
    <el-form class="login-container" label-position="right" label-width="auto" :model="LoginForm" :rules="rules" ref="LoginForm">
      <h3 class="login_title">登录账号</h3>
      <el-form-item label="用户名:" prop="username">
        <el-input type="text" v-model="LoginForm.username" auto-complete="on" placeholder="2~16位（字母、数字）"></el-input>
      </el-form-item>

      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="LoginForm.password" auto-complete="off" placeholder="5~19位（字母，数字、下划线）"></el-input>
      </el-form-item>

      <el-form-item label="验证码:">
        <el-input type="text" v-model="LoginForm.verifyCode" auto-complete="off" style="width: 150px"></el-input>
        <a v-on:click="changeCode" title="点击更换验证码">
          <el-image src="http://localhost:8080/verifyCode" id="captcha" style="vertical-align:middle;"></el-image>
        </a>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" v-on:click="login">登录</el-button>
      </el-form-item>
      <router-link to="/register">注册账号</router-link>
      <router-link to="/retrieve">找回密码</router-link>
    </el-form>
  </body>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      LoginForm: {
        username: '',
        password: '',
        verifyCode: ''
      },
      ResponseResult: [],
      rules: {
        username: [
          {required: true, trigger: 'blur', message: '用户名不能为空'},
          {pattern: /^[A-Za-z][A-Za-z0-9]{1,15}$/, message: '请输入正确格式的用户名'}
        ],
        password: [
          {required: true, trigger: 'blur', message: '密码不能为空'},
          {pattern: /^[A-Za-z]\w{5,19}$/, message: '请输入正确格式的密码'}
        ]
      }
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          username: this.LoginForm.username,
          password: this.LoginForm.password,
          verifyCode: this.LoginForm.verifyCode
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            console.log(successResponse)
            const token = successResponse.data.detail
            localStorage.setItem('token', token)
            this.$router.replace({path: '/index'})
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeCode () {
      document.getElementById('captcha').src = 'http://localhost:8080/verifyCode?' + Math.random()
    }
  }
}
</script>

<style scoped>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
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
  a{
    text-decoration: none;
    color: rgb(140, 197, 255);
  }
</style>
