<template>
  <div class="m-container">
    <div class="m-content">
      <el-form ref="" :model="article" label-width="80px">
        <el-form-item label="标题：">
          <el-input v-model="article.title"></el-input>
        </el-form-item>

        <el-form-item label="正文：">
          <mavon-editor v-model="article.content"></mavon-editor>
        </el-form-item>

        <el-form-item>
          <el-button v-on:click="post()">发布</el-button>
          <el-button v-on:click="store()">存为草稿</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default{
  name: 'post',
  components: {},
  data () {
    return {
      article: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    post () {
      this.$axios
        .post('/article', {
          article_title: this.article.title,
          article_content: this.article.content
        }, {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        })
        .then(response => {
          if (response.data.code === 200) {
            this.$router.replace({path: '/index'})
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    store () {
      this.$axios
        .post('/', {
          article_title: this.article.title,
          article_content: this.article.content
        }, {
          'Authorization': localStorage.getItem('token')
        })
        .then(response => {
          if (response.data.code === 200) {
            this.$router.replace({path: ''})
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
