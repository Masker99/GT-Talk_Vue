<template>
  <div>
    <UserDynamic v-on:post="refresh"></UserDynamic>
    <ArticleBrief></ArticleBrief>
  </div>
</template>

<script>
import ArticleBrief from '../component/ArticleBrief'
import UserDynamic from '../component/UserDynamic'
export default {
  name: 'AppIndex',
  components: {ArticleBrief, UserDynamic},
  methods: {
    refresh () {
      this.$router.replace({path: '/empty'})
    }
  }
}
</script>

<style scoped>

</style>
