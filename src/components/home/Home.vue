<template>
    <div>
      <NavMenu></NavMenu>
      <router-view/>
    </div>
</template>

<script>
import NavMenu from '../component/NavMenu'

export default {
  name: 'Home',
  components: {NavMenu}
}
</script>

<style scoped>

</style>
