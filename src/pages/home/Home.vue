<template>
  <div class="home ">
    <div class="block">
      <el-carousel height="600px">
        <el-carousel-item>
          <div class="container">

            <h1 class="price-title">软件定义一切，技术改变世界！</h1>
            <div class="price-sub-title text-center"><span class="sub-title-text">
          https://caoguo.com</span></div>
            <h2 class="price-title-exp">
              我们是一支小而美的数字技术团队。将你的想法实得实现，使用技术和想法去改变世界。</h2>


          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="container">
            <h1 class="price-title">++Fin 加加金服</h1>
            <div class="price-sub-title text-center">
              <span class="sub-title-text">
                https://xxfin.om
              </span>
            </div>
            <h2 class="price-title-exp">专业的聚合支付技术提供商，为你支付保驾护行。微信支付、支付宝随意切。</h2>


          </div>
        </el-carousel-item>
      </el-carousel>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        active: 0
      }
    },
    methods: {
      next () {
        if (this.active++ > 2) {
          this.active = 0
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #d3dce6;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    background: #d3dce6 url(../../assets/card-bg.jpg) no-repeat;
  }
  h1.price-title {
    font-size: 50px;
    color: #333;
    text-align: center;
    line-height: 1;
    margin-top: 88px;
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


</style>
