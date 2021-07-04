<template>
  <div class="articles">
    <el-card style="text-align: left;width: 990px;margin: 10px auto 0 auto" v-for="(article,index) in articles" :key="article.article_id">
      <div class="author.avatar" style="float: left">
        <el-avatar>user</el-avatar>
      </div>
      <div class="article-main" style="padding-left: 60px">
        <div class="article-author">
          {{article.author.author_name}}
        </div>

        <div class="article-date" style="font-size: smaller">
          {{article.date}}
        </div>

        <div v-if="Object.keys(article)[1] === 'dynamic_id'">
          {{article.content}}
        </div>

        <div v-else>
          <div class="article-title">
            <router-link :to="{name: 'ArticleDetails', params: {article_id: article.article_id} }">{{article.article_title}}</router-link>
          </div>

          <div class="article-content" v-html="article.article_content">
          </div>
        </div>
      </div>

      <div class="article-button" style="padding-top: 20px;padding-left: 60px">
        <el-button round size="mini" v-on:click="like(index)">点赞</el-button>
        <el-button round size="mini" v-on:click="collect(index)">收藏</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'ArticleBrief',
  data () {
    return {
      articles: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$axios
        .get('/content', null)
        .then(res => {
          if (res.data.code === 200) {
            this.articles = res.data.detail
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    like (index) {
      let type = Object.keys(this.articles[index])[1]
      let articleId = Object.values(this.articles[index])[1]
      let token = localStorage.getItem('token')
      if (type === 'article_id') {
        this.$axios.post('/article/enjoyment/' + articleId, null, {
          headers: {
            'Authorization': token
          }
        })
      }
    },
    collect (index) {
      let type = Object.keys(this.articles[index])[1]
      let id = Object.values(this.articles[index])[1]
      let token = localStorage.getItem('token')
      if (type === 'article_id') {
        this.$axios.post('/article/storeup/' + id, null, {
          headers: {
            'Authorization': token
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
    color: rgb(140, 197, 255);
  }
</style>
