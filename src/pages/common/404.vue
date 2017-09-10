<template>
  <div class="xx-customer">

    <div id="warp">
      <div class="container">

        <h1 class="price-title">404</h1>
        <div class="price-sub-title text-center"><span class="sub-title-text">NotFound</span></div>
        <h2 class="price-title-exp">抱歉，您要查看的数据不存在或已被删除。</h2>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'notFound'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #warp{
    background: url(./price-bg.svg) center bottom no-repeat #f5f5f5;
    background-size: contain;
    padding-bottom: 200px;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    h1.price-title {
      font-size: 50px;
      color: #333;
      text-align: center;
      line-height: 1;
      margin-top: 128px;
    }
    h1.price-title, .price-title-exp {
      text-align: center;
      font-weight: 300;
    }
    .price-sub-title {
      padding-top: 10px;
      font-size: 16px;
      color: #999;
      line-height: 1;
    }
    .sub-title-text {
      display: inline-block;
      padding-bottom: 20px;
      border-bottom: 1px dashed #e5e5e5;
    }
    .price-title-exp {
      font-size: 16px;
      color: #818181;
      margin-top: 20px;
      line-height: 1;
      letter-spacing: 2px;
    }
  }
</style>
