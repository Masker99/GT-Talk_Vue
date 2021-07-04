<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item>首页</el-menu-item>
      <el-menu-item>吐槽天地</el-menu-item>
      <el-menu-item>学术交流</el-menu-item>
      <el-menu-item>娱乐社区</el-menu-item>

      <span style="position: absolute;padding-top: 20px;right: 55%;font-size: 20px;font-weight: bold">GK-Talk</span>

      <el-input placeholder="关键字搜索"
                size="small"
                suffix-icon="el-icon-search"
                style="width: 300px;position:absolute;margin-top: 12px;right: 18%"></el-input>

      <el-avatar size="large"
                 style="position: absolute;right: 10%;padding-top: 12px;"/>

      <el-submenu style="position: absolute;right: 1%" index="">
        <template slot="title">个人中心</template>
        <el-menu-item>用户设置</el-menu-item>
        <el-menu-item>收藏</el-menu-item>
        <el-menu-item>动态</el-menu-item>
        <el-menu-item><router-link :to="{name:'post'}">发布</router-link></el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style scoped>

</style>
