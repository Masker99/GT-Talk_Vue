<template>
  <el-card style="width: 990px;margin: 35px auto 0 auto">
    <div class="article-detail">
      <div class="article-title">
        <h3>{{article.article_title}}</h3>
      </div>
      <div class="article-content" v-html="article.article_content"></div>
    </div>
    <div class="article-button">
      <el-button round size="mini" v-on:click="like">点赞</el-button>
      <el-button round size="mini" v-on:click="collect">收藏</el-button>
    </div>
  </el-card>
</template>

<script>
import NavMenu from './component/NavMenu'
export default {
  name: 'ArticleDetails',
  components: {NavMenu},
  data () {
    return {
      article: {}
    }
  },
  created () {
    const blogId = this.$route.params.article_id
    this.$axios.get('/article/' + blogId, null)
      .then(response => {
        if (response.data.code === 200) {
          this.article = response.data.detail
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    like () {
      let id = this.$route.params.article_id
      let token = localStorage.getItem('token')
      this.$axios.post('/article/storeup/' + id, null, {
        headers: {
          'Authorization': token
        }
      })
    },
    collect () {
      let id = this.$route.params.article_id
      let token = localStorage.getItem('token')
      this.$axios.post('/article/storeup/' + id, null, {
        headers: {
          'Authorization': token
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
