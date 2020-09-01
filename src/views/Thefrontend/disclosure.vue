<template>
  <div class="htm">
    <div class="qwe">
      <el-tabs :tab-position="tabPosition" type="card"  v-model="activeName" >
        <el-tab-pane class="e"  label="备案信息">
          <div class="wsx">nethhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
        </el-tab-pane>
        <hr align="center" width="300" color="#987cb9" size="1" />
        <el-tab-pane label="审核信息">
          <div class="wsx"></div>
        </el-tab-pane>
        <el-tab-pane label="组织信息">
          <div class="wsx">角色222222222222222222222222管理</div>
        </el-tab-pane>
        <el-tab-pane label="经营信息" name="jinying">
          <el-form :model="fromBusiness">
            <div class="wsx">
              <div style=" background-color: red; float:left"></div>
              <div style="margin:10px; ">交易信息</div>
              <div class="t">
                <div>
                  <el-form-item class="t1" prop="Business">
                    <span v-html="fromBusiness.Business"></span>
                    <div class="ppp">
                      <span>积累交易金额（万）</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t2" prop="Business">
                    <span>525.2222</span>
                    <div class="ppp">
                      <span>积累交易笔数（笔）</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t3" prop="Business">
                    <span>85885.5555</span>
                    <div class="ppp">
                      <span>借款金额（万元）</span>
                    </div>
                  </el-form-item>
                </div>
              </div>
              <div style="margin:10px;">用户信息</div>
              <div class="t">
                <div>
                  <el-form-item class="t1" prop="Business">
                    <span>4444.4444</span>
                    <div class="ppp">
                      <span>积累借款人数量</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t2" prop="Business">
                    <span>4555.7577</span>
                    <div class="ppp">
                      <span>积累投资人数量</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t3" prop="Business">
                    <span>5855.744545</span>
                    <div class="ppp">
                      <span>当前借款人数量）</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t4" prop="Business">
                    <span>77575.4245</span>
                    <div class="ppp">
                      <span>当前投资人数量</span>
                    </div>
                  </el-form-item>
                </div>
              </div>
              <div style="margin:10px; ">借款信息</div>
              <div class="t">
                <div>
                  <el-form-item class="t1" prop="Business">
                    <span>8212.000</span>
                    <div class="ppp">
                      <span>前是大人借款人待还金</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t2" prop="Business">
                    <span>51411.1000</span>
                    <div class="ppp">
                      <span>最大一单借款人待还</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t3" prop="Business">
                    <span>6424.4444</span>
                    <div class="ppp">
                      <span>关联关系借款金额</span>
                    </div>
                  </el-form-item>
                </div>
              </div>
              <div style="margin:10px;">逾期信息</div>
              <div class="t">
                <div>
                  <el-form-item class="t1" prop="Business">
                    <span>005555</span>
                    <div class="ppp">
                      <span>逾期金额（万元）</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t2" prop="Business">
                    <span>44444.44444</span>
                    <div class="ppp">
                      <span>逾期笔数（笔）</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t3" prop="Business">
                    <span>25.555555</span>
                    <div class="ppp">
                      <span>逾期90天以上金额</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t4" prop="Business">
                    <span>555555.55555</span>
                    <div class="ppp">
                      <span>逾期90天以上笔数</span>
                    </div>
                  </el-form-item>
                </div>
              </div>
              <div style="margin:10px;">代偿信息</div>
              <div class="t">
                <div>
                  <el-form-item class="t1" prop="Business">
                    <span></span>
                    <div class="ppp">
                      <span>代偿金额（万）</span>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item class="t2" prop="Business">
                    <span></span>
                    <div class="ppp">
                      <span>代偿笔数（笔）</span>
                    </div>
                  </el-form-item>
                </div>
              </div>
              <div style="margin:10px;">收费标准</div>
              <div class="w">
                <spen>投资人和借款人选择柳投金服平台提供的网络借贷信息中介服务，将根据相关协议项下条</spen>
              </div>
              <div class="s">
                <spen>款约定，支付服务费等收费，具体收费标准以交易是展现是所展示内容为准</spen>
              </div>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="风险管理">
          <div class="wsx">角色222222222222222222222222管理</div>
        </el-tab-pane>
      </el-tabs>
    </div>
     <div class="self-footer">
    <div class="self-footer-inner">
      <div class="footer-l1 clearfix" style="margin-top: -259px">
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
      activeName:"jinying",
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
  height: 580px;
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
  background-color: khaki;
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
.el-tabs__nav-scroll {
  widows: 96px !important;
  height: 500px !important;
  background-color: rgb(246, 247, 252) !important;
}
.el-tabs--left .el-tabs__header.is-left,
.el-tabs--left .el-tabs__header.is-right,
.el-tabs--left .el-tabs__nav-scroll,
.el-tabs--left .el-tabs__nav-wrap.is-left,
.el-tabs--left .el-tabs__nav-wrap.is-right,
.el-tabs--right .el-tabs__header.is-left,
.el-tabs--right .el-tabs__header.is-right,
.el-tabs--right .el-tabs__nav-scroll,
.el-tabs--right .el-tabs__nav-wrap.is-left,
.el-tabs--right .el-tabs__nav-wrap.is-right {
  height: 500px !important;
  widows: 96px !important;
  background-color: rgb(246, 247, 252) !important;
}
.e {
  height: 500px !important;
  box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.1) !important;
}
</style>