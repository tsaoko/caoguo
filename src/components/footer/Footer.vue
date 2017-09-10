<template>
  <footer>
    <div class="container">
      <el-row class="footer-nav">
        <el-col :span="4" justify="middle">
          <img src="../../assets/logo.png" style="width:120px">
        </el-col>
        <el-col :span="6">
          <dl class="clearfix">
            <dt>产品</dt>
            <dd>
              <a href="http://www.faxeye.com">金融眼</a> - 专业房贷P2P平台
            </dd>
            <dd>
              <a href="https://xxfin.com">加加金服</a> - 聚合支付
            </dd>
            <dd>
              <a href="http://utan.tv">有谈吐槽</a> - 互娱频道
            </dd>
            <dd>
              <router-link to="/">可臻财务</router-link> - 公司财务小帮手
            </dd>
            <dd>
              <router-link to="/">39微商</router-link> - 微商必备良器
            </dd>
          </dl>
        </el-col>
        <el-col :span="6">
          <dl class="clearfix">
            <dt>业务</dt>
            <dd>
              企业级门户网站
            </dd>
            <dd>
              O2O全网零售平台
            </dd>
            <dd>APP定制</dd>
            <dd>网站定制</dd>
          </dl>
        </el-col>

        <el-col :span="8" style="border-left:1px solid #eaeaea;padding-left: 50px;">
          <dl class="clearfix">
            <dt>客户中心</dt>
            <!--dd class="service-cell">客服电话：<br><span class="phone">400-600-xxx</span></dd-->
            <dd class="service-mail">客服邮箱：<a href="mailto:uutan@caoguo.com">uutan@caoguo.com</a></dd>

            <dd class="daike">
            </dd>
          </dl>
        </el-col>
      </el-row>
    </div>
    <div class="footer-bar">
        <div class="container">

          <el-row>
            <el-col :span="12">

              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010302000179">鄂公网安备 42010302000179 号</a>
              &nbsp; &nbsp; &nbsp; 鄂ICP证05005753号-3 &nbsp;
            </el-col>
            <el-col :span="12" justify="center" align="end">
              &copy; 武汉草果科技有限公司 2017
            </el-col>
          </el-row>

        </div>
    </div>


  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  footer{
    width:100%;
    padding: 60px 0 0px;
    background: #f7f7f7;
    box-shadow: inset 0 1px 0 0 rgba(0,0,0,.03);
    .footer-nav dt {
      font-size: 14px;
      color: #212121;
      margin-bottom: 16px;
      padding-left: 8px;
      line-height: 1;
      border-left: 2px solid #ccc;
    }
    .footer-nav dd {
      margin: 0 0 4px 10px;
      line-height: 2;
      font-size: 12px;
      a{
        color:#666;
      }
    }
    .footer-nav .service-cell {
      margin-bottom: 8px;
      .phone{
        font-size: 30px;
        line-height: 1;
      }
    }
    .footer-bar{
      font-size: 12px;
      position: relative;
      line-height: 1;
      color: #999;
      letter-spacing: 0;
      background-color: #f0f0f0;
      margin-top: 40px;
      border-top: 1px solid #e5e5e5;
      padding: 24px 0;
    }
  }

</style>
