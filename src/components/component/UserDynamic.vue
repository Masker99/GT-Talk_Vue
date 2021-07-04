<template>
    <el-card style="width: 990px;margin: 35px auto 0 auto">
      <el-input type="textarea" :row="5" placeholder="有什么想和大家分享的？" v-model="userDynamic.content" style="width: 920px"></el-input>
      <el-button size="mini" round v-on:click="post()">发布</el-button>
    </el-card>
</template>

<script>
export default {
  name: 'UserDynamic',
  data () {
    return {
      userDynamic: {
        content: ''
      }
    }
  },
  methods: {
    post () {
      const token = localStorage.getItem('token')
      this.$axios.post('/dynamic/', {
        content: this.userDynamic.content
      }, {
        headers: {
          'Authorization': token
        }
      })
        .then(response => {
          if (response.data.code === 200) {
            console.log('sun')
            this.$emit('post')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
