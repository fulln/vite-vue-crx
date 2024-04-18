<script setup>
// 在popup页面调试content script，仅用于开发环境，build前记得要注释掉。
// import '@/content'
import HOME from '@/popup/views/home/home.vue'
</script>

export default {
  components: {
    HOME
  }
}

<template>
  <div>
    <HOME />
  </div>
</template>

<style lang="stylus">
body
    position relative
    width: 380px
    height: 510px
</style>

