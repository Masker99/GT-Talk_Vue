<template>
  <body id="poster">
    <div class="retrieve-password">
      <el-steps :active="step" finish-status="success" simple>
        <el-step title="验证身份"></el-step>
        <el-step title="设置密码"></el-step>
        <el-step title="设置成功"></el-step>
      </el-steps>

      <div class="first-step" v-if="step === 0">
        <el-form>
          <el-form-item label="E-mail：">
            <el-input type="text" v-model="email" ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="send">获取验证码</el-button>
          </el-form-item>

          <el-form-item label="验证码：">
            <el-input type="text" v-model="captcha"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="verify">验证</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="second-step" v-if="step === 1">
        <el-form>
          <el-form-item label="密码：">
            <el-input type="text" v-model="password"></el-input>
          </el-form-item>

          <el-form-item label="重复密码：">
            <el-input type="text" v-model="repassword"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="retrive">确认</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="third-step" v-if="step === 2">
        <el-link to="/login" type="primary">密码重新设置成功,点击连接重新登陆便可访问</el-link>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'RetrievePassword',
  data () {
    return {
      step: 0,
      email: '',
      captcha: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    send () {
      this.$axios.post('/mail/verification', {
        email: this.email
      })
    },
    verify () {
      this.$axios.post('/verifyUser', {
        email: this.email,
        captcha: this.captcha
      })
        .then(res => {
          if (res.data.code === 200) {
            this.step = 1
          }
        })
    },
    retrive () {
      this.$axios.post('/retrievePassword', {
        password: this.password,
        repassword: this.password
      })
        .then(res => {
          if (res.data.code === 200) {
            this.step = 2
          }
        })
    }
  }
}
</script>

<style scoped>
.retrieve-password{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 450px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
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
