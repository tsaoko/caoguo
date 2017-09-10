<template>
  <header class="xx-header">
    <el-row class="container" id="top" type="flex"  align="middle">
      <el-col :span="6" id="logo">
        <router-link to="/">
        <img src="../../assets/logo.png" alt="" style="width:150px;">
        </router-link>
      </el-col>
      <el-col>
        <el-row type="flex" align="end" justify="center">
          <el-menu mode="horizontal" @select="handleSelect" :router="true">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/404">您有合作需求请发送至：uutan@caoguo.com</el-menu-item>
          </el-menu>
        </el-row>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .xx-header{
    box-shadow: 0 2px 4px #efefef;
    -webkit-box-shadow: 0 2px 4px #efefef;
    -moz-box-shadow: 0 2px 4px #efefef;
    z-index: 9999;
  }
  #top{
    margin: 0 auto;
  }
  .el-menu{
    background:white;
  }
</style>
