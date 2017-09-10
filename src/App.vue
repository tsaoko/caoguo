<template>
  <div id="app">
    <!-- 头部 -->
    <x-header></x-header>

    <!-- BODY -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 尾部 -->
    <x-footer></x-footer>
  </div>
</template>

<script>
  import header from '@/components/header/Header'
  import footer from '@/components/footer/Footer'
  export default {
    name: 'app',
    components: {
      'x-header': header,
      'x-footer': footer
    }
  }
</script>

<style lang="scss">
  @import './styles/_variables.scss';
</style>
