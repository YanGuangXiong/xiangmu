<template>
  <div class="htm">
    <div class="qwe">
      <el-tabs :tab-position="tabPosition" type="card" style="height: 1600px;">
        <el-tab-pane label="账户总览">
          <div class="wsx">
            <div style="border:1px  solid;height:100px;width:90%;margin-left:50px">
              <div style="float:left;width:50%;height:90px">
                <br />
                <span style="margin-left:20px">尊敬的</span>
                <span>王**</span>
                <span>,您好</span>
                <br />
                <br />
                <span style="margin-left:20px">上次登录时间：</span>
                <span>2018-07-15 18:28:30</span>
              </div>

              <div style="float:right;width:49%;height:90px">
                <br />
                <br />
                <span style="margin-left:100px">总资产（元）：</span>
                <span style="font-size:20px;color:red">35,100.09</span>
              </div>
            </div>
            <br />
            <el-tabs
              v-model="activeName"
              type="card"
              @tab-click="handleClick"
              style="width:90%;margin-left:50px"
            >
              <el-tab-pane label="投资用户" name="first">
                <div
                  style="margin-left:40px;width:90%;border:1px solid;height:100px; background: lightyellow;"
                >
                    <br />

                  <span style="margin-left:200px">投资账户总资产（元）：</span>
                  <span style="color:red;font-size:30px;">1500022.00</span>
                  <br />
                  <br />
                  <i class="el-icon-warning" style="color: rgb(161, 118, 48);margin-left:180px"></i>
                  <span style="color: rgb(161, 118, 48);">请尽快绑定银行卡完成实名，以避免影响正常使用</span>
                </div>
                
                <br />
                <div style="margin-left:40px;width:90%;border:1px  solid;height:100px">
                  <div style="border-right:1px  solid;height:100px;width:33%;float:left">
                    <br />
                    <span style="margin-left:90px">15,000.00</span>
                    <br />
                    <span style="margin-left:80px">累计收益（元）</span>
                  </div>    
                       <div style="height:100px;width:32%;float:right">
                    <br />
                    <span style="margin-left:80px">15,000.00</span>
                    <br />
                    <span style="margin-left:70px">可用余额（元）</span>
                  </div>
                  <div style="border-right:1px  solid;height:100px;width:32%;float:right">
                    <br />
                    <span style="margin-left:70px">15,000.00</span>
                    <br />
                    <span style="margin-left:60px">代收收益（元）</span>
                  </div>
                </div>
                <br />

                <div style="margin-left:40px;width:90%;border:1px red solid;height:100px;">
                  <br />
                  <br />
                  <i class="el-icon-lock" style="color:red;margin-left:80px;font-size:30px"></i>
                  <router-link type="warning" to="/login">支付密码</router-link>

                  <i class="el-icon-postcard" style="color:red;margin-left:100px;font-size:30px"></i>
                  <router-link type="warning" to="/login">银行卡</router-link>

                  <i class="el-icon-s-finance" style="color:red;margin-left:100px;font-size:30px"></i>
                  <router-link type="warning" to="/login">提现</router-link>

                  <i class="el-icon-wallet" style="color:red;margin-left:100px;font-size:30px"></i>
                  <router-link type="warning" to="/login">充值</router-link>
                </div>

                <div>
                  <br />
                  <span style="color:red;margin-left:40px;font-size:25px">|</span>&nbsp;
                  <span>投资记录</span>
                  <br />
                  <br />
                  <!-- 表格 -->
                  <el-table :data="tableData" border style="width: 90%;margin-left:40px">
                    <el-table-column fixed prop="date" label="项目名称" width="100"></el-table-column>
                    <el-table-column prop="name" label="投资日期" width="120"></el-table-column>
                    <el-table-column prop="province" label="到期日" width="120"></el-table-column>
                    <el-table-column prop="city" label="投资金额(元)" width="120"></el-table-column>
                    <el-table-column prop="address" label="预期收益(元)" width="300"></el-table-column>
                    <el-table-column prop="zip" label="投资状态" width="120"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                      <template >
                        <el-button @click="handleClick" type="text" size="small">查看详情</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
                <div>
                  <br />
                  <br />
                  <span style="color:red;margin-left:40px;font-size:25px">|</span>&nbsp;
                  <span>资金明细</span>
                  <br />

                  <el-table :data="tableData" stripe style="width: 90%;margin-left:40px">
                    <el-table-column prop="date" label="明细类型" width="180"></el-table-column>
                    <el-table-column prop="name" label="交易时间" width="180"></el-table-column>
                    <el-table-column prop="name" label="交易金额(元)" width="180"></el-table-column>
                    <el-table-column prop="name" label="备注" width="180"></el-table-column>
                  </el-table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="借款用户" name="second">配置管理</el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
        <hr align="center" width="300" color="#987cb9" size="1" />
        <el-tab-pane label="设置">
          <div class="shezhi">
            <div style="margin-left:70px ">
              <el-divider></el-divider>
              <span>真实姓名：</span>
              <span style="margin-left:50px">王**</span>

              <br />
              <br />
              <el-divider></el-divider>
              <span>证件号：</span>
              <span style="margin-left:63px">360***********8000</span>

              <br />
              <br />
              <el-divider></el-divider>
              <span>绑定手机号：</span>
              <span style="margin-left:33px">170****4822</span>
              <el-button style="margin-left:100px" type="primary" icon="el-icon-edit" circle></el-button>

              <br />
              <br />
              <el-divider></el-divider>
              <span>登录密码：</span>
              <span style="margin-left:50px">已设置</span>
              <el-button style="margin-left:135px" type="primary" icon="el-icon-edit" circle></el-button>
              <el-divider></el-divider>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="消息">
          <div class="xiaoxi">角色222222222222222222222222管理</div>
        </el-tab-pane>
      </el-tabs>
    </div>

       <div class="self-footer">
    <div class="self-footer-inner">
      <div class="footer-l1 clearfix" style="margin-top: 300px">
        <div class="footer-l1-inner clearfix">
          <div class="footer-sitemap">
            <div class="footer-sitemap-split">
              <p class="sitemap-title">关于我们</p>
              <a href="//www.ppdai.com/help/aboutus" target="_blank">
                <p class="sitemap-item">公司简介</p>
              </a>
              <a href="//tz.ppdai.com/compliance/leader" target="_blank">
                <p class="sitemap-item">管理团队</p>
              </a>
              <a href="//www.ppdai.com/help/mediaReports" target="_blank">
                <p class="sitemap-item">公司新闻</p>
              </a>
            </div>
            <div class="footer-sitemap-split">
              <p class="sitemap-title">安全保障</p>
              <a href="//tz.ppdai.com/compliance/laws" target="_blank">
                <p class="sitemap-item">法律法规</p>
              </a>
              <a href="//www.ppdai.com/help/principalprotection" target="_blank">
                <p class="sitemap-item">安全保障</p>
              </a>
              <a href="//landing.ppdaicdn.com/againstcheat.html" target="_blank">
                <p class="sitemap-item">反舞弊专线</p>
              </a>
              <a href="//www.ppdaicdn.com/2019/pdf/privacy_policy.pdf" target="_blank">
                <p class="sitemap-item">用户隐私政策</p>
              </a>
              <a href="//www.ppdaicdn.com/2020/PC_Terms.html" target="_blank">
                <p class="sitemap-item">用户服务协议</p>
              </a>
            </div>
          </div>
          <div class="footer-qrcode">
            <div class="footer-qrcode-title">关注我们</div>
            <div class="footer-qrcode-split" style="margin-right: 28px;">
              <img src="//www.ppdaicdn.com/2020/qrcode3.png" />
              <p>拍拍贷</p>
            </div>
            <div class="footer-qrcode-split">
              <img src="//www.ppdaicdn.com/2020/qrcode4.png" />
              <p>上海拍拍贷</p>
            </div>
          </div>
          <div class="footer-contact">
            <p class="contact-title">联系我们</p>
            <p class="service-call">952228</p>
            <p class="service-time">服务时间: 08:00-20:00</p>
            <p class="complain-wrap">
              投诉热线
              <span class="complain-line">400-1080-190（9:00-18:00）</span>
            </p>
            <p class="contact-contents">
              <a href="//help.ppdai.com/" target="_blank">
                <span class="contact-contents-item">
                  <i class="contact-item-img service-icon"></i>在线客服
                </span>
              </a>
              <a href="//weibo.com/ppdai07" target="_blank">
                <span class="contact-contents-item">
                  <i class="contact-item-img weibo-icon"></i>新浪微博
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="footer-l2 clearfix">
        <div class="footer-l2-inner clearfix">
          <div>
            <div class="footer-l2-imgs">
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502000216"
                target="_blank"
              >
                <i class="footer-l2-icon icon-1"></i>
              </a>
              <a
                href="https://218.242.124.22:8082/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020160602102817000000881686-SAIC_SHOW_310000-2013112011475599500&amp;signData=MEUCIQDJzR3k72iO8bSAiXvkeoUqgcgW7byABuLcKRjjFcGs6QIgcP10r2vGY8ic2MUs+WXsukArYioWyRiFWHd2BbzQd0A="
                target="_blank"
              >
                <i class="footer-l2-icon icon-2"></i>
              </a>
              <a
                href="https://trustsealinfo.websecurity.norhrefn.com/splash?form_file=fdf/splash.fdf&amp;dn=ac.ppdai.com&amp;lang=zh_cn"
                target="_blank"
              >
                <i class="footer-l2-icon icon-3"></i>
              </a>
              <a href="http://www.shjbzx.cn/" target="_blank">
                <i class="footer-l2-icon icon-4"></i>
              </a>
            </div>
            <p class="footer-l2-rights">
              Copyright Reserved 2007-2020©拍拍贷 |
              <a
                href="http://www.beian.miit.gov.cn/"
              >沪ICP备05063398号</a>
              | 上海拍拍贷金融信息服务有限公司
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
      tabPosition: "left",

      fromBusiness: {
        Business: "1231321",
      },
    };
  },
};
</script>

<style scoped>
.self-footer .footer-l1 {
  width: 100%;
  background: #5e687e;
  height: 400px;
}
.self-footer
  .footer-l1
  .footer-l1-inner
  .footer-sitemap
  > div.footer-sitemap-split
  .sitemap-title {
  color: #ffffff;
  font-family: Source-Medium;
  font-size: 18px;
  line-height: initial;
  color: #ffffff;
  letter-spacing: 0;
  margin-bottom: 31px;
  margin-right: 65px;
}
.self-footer
  .footer-l1
  .footer-l1-inner
  .footer-contact
  .contact-contents
  .contact-contents-item {
  cursor: pointer;
  font-family: Source-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #ffffff;
}
.self-footer
  .footer-l1
  .footer-l1-inner
  .footer-contact
  .contact-contents
  .contact-contents-item {
  cursor: pointer;
  font-family: Source-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #ffffff;
}
.self-footer .footer-l1 .footer-l1-inner .footer-contact {
  text-align: left;
}
.clearfix {
  display: block;
}
.self-footer .footer-l1 .footer-l1-inner {
  width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 120px;
}
.self-footer .footer-l1 .footer-l1-inner .footer-sitemap {
  width: 420px;
  float: left;
}
.self-footer .footer-l1 .footer-l1-inner .footer-qrcode {
  float: left;
  margin-right: 170px;
}
.self-footer .footer-l1 .footer-l1-inner .footer-contact {
  float: left;
  text-align: left;
}
.self-footer
  .footer-l1
  .footer-l1-inner
  .footer-sitemap
  > div.footer-sitemap-split {
  float: left;
  width: 33.3%;
}
.self-footer
  .footer-l1
  .footer-l1-inner
  .footer-sitemap
  > div.footer-sitemap-split {
  float: left;
  width: 33.3%;
}
.self-footer .footer-l1 .footer-l1-inner .footer-qrcode .footer-qrcode-title {
  color: #ffffff;
  font-family: Source-Medium;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  margin-bottom: 31px;
}
.self-footer .footer-l1 .footer-l1-inner .footer-qrcode .footer-qrcode-split {
  display: inline-block;
  text-align: center;
  width: 140px;
}
.self-footer .footer-l1 .footer-l1-inner .footer-contact .contact-title {
  color: #ffffff;
  font-family: Source-Medium;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  margin-bottom: 31px;
  line-height: 18px;
}
.self-footer .footer-l1 .footer-l1-inner .footer-contact .service-call {
  font-family: Source-Medium;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 0px;
  color: #ffffff;
  margin-bottom: 8px;
}
.self-footer .footer-l1 .footer-l1-inner .footer-contact .service-time {
  font-family: Source-Regular;
  font-size: 12px;
  letter-spacing: 0px;
  color: #ffffff;
}
.self-footer .footer-l1 .footer-l1-inner .footer-contact .complain-wrap {
  margin-top: 28px;
  min-height: 79px;
  cursor: pointer;
  font-family: Source-Regular;
  font-size: 14px;
  color: #ffffff;
}
.self-footer
  .footer-l1
  .footer-l1-inner
  .footer-sitemap
  > div.footer-sitemap-split {
  float: left;
  width: 33.3%;
}
a {
  text-decoration: none;
}
a {
  text-decoration: none;
  color: #666;
  cursor: pointer;
}

div,
ul,
.index-header *,
.self-footer *,
.menu-breadcrumb *,
.side-bar-wrapper * {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.self-footer
  .footer-l1
  .footer-l1-inner
  .footer-sitemap
  > div.footer-sitemap-split
  .sitemap-item {
  font-family: Source-Regular;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
  line-height: 14px;
  margin-bottom: 18px;
}
.self-footer .footer-l2 .footer-l2-inner {
  width: 1200px;
  height: 66px;
  margin: 0 auto;
}
.clearfix {
  display: block;
}
.self-footer .footer-l2 .footer-l2-inner .footer-l2-rights {
  padding-top: 23px;
  font-family: Source-Regular;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
  display: inline-block;
}
.self-footer .footer-l2 .footer-l2-inner .footer-l2-imgs {
  float: right;
  margin-top: 23px;
}
.self-footer
  .footer-l1
  .footer-l1-inner
  .footer-qrcode
  .footer-qrcode-split
  > p {
  font-family: Source-Regular;
  font-size: 14px;
  line-height: 14px;
  margin-top: 20px;
  letter-spacing: 0px;
  color: #ffffff;
}
.clearfix {
    display: block;
  
}

.self-footer .footer-l2 {
    width: 100%;
    background: #494F5D;
}
html {
  height: 1000px;
  margin: 0px;
  padding: 0px;
  /* background-color: #c0c4cc; */
  background-color: rgb(246, 247, 252);
}
.htm {
  width: 100%;
  height: 900px;
  text-align: left;
}
.qwe {
  width: 100%;
  height: 900px;
  margin-left: 200px;
  background-color: #fff;
}
.wsx {
  width: 950px;
  height: 1200px;
  background-color: #fff;
  box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.1);
}
.jy {
  width: 100%;
  height: 80px;

  background-color: khaki;  
}
.yh {
  width: 100%;
  height: 80px;
  background-color: khaki;
}
.jk {
  width: 100%;
  height: 80px;
  background-color: kh,aki;
}
.yq {
  width: 100%;
  height: 80px;
  background-color: khaki;
}
.dc {
  width: 100%;
  height: 80px;
  background-color: khaki;
}
.sf {
  width: 100%;
  height: 80px;
  background-color: khaki;
}
.j1 {
  width: 30px;
  background-color: red;
}
.ppp {
  width: 140px;
}
.t {
  width: 950px;
  background-color: khaki;
  height: 70px;
  float: left;
}
.t1 {
  width: 200px;
  height: 70px;
  margin-left: 30px;
  border-right: 1px solid #f00;
  float: left;
}

.t2 {
  width: 200px;
  margin-left: 30px;
  height: 70px;
  float: left;
  border-right: 1px solid #f00;
}
.t3 {
  width: 200px;
  margin-left: 30px;
  height: 70px;
  float: left;
  border-right: 1px solid #f00;
}
.t4 {
  width: 200px;
  margin-left: 30px;
  height: 70px;
  float: left;
}
/* .shu {
  height: 50px;
  width: 10px;
  float: left;
  margin: 20px;
} */
.w {
  margin-left: 50px;
  float: left;
}
.s {
  margin-left: 50px;
  float: left;
}
</style>