<template>



  <div >


 



    <el-carousel indicator-position="outside" class="lunbo1" style="height:600px">
      <el-carousel-item v-for="(img,index) in imgList" :key="index" style="height:600px" >
        <img :src="img.url" width="100%" style="height:600px"  />
      </el-carousel-item>
    </el-carousel>
    <br>
    <div class="bdsf">
      <el-row :gutter="30">
     <el-col :span="6">
          <el-row :gutter="22">
            <el-col :span="10" class="tupian">
              <img src="../assets/tubiao/tubiao/tubiao (1).jpg" />
            </el-col>
            <el-col :span="12" class="ddf">
              <p class="pbiaoqian">银行存管</p>
              <p class="pbiaoqian1">银行级资金安全保障</p>
              <p class="pbiaoqian1">投资借款更放心</p>
            </el-col>
          </el-row>
        </el-col>
       <el-col :span="6">
          <el-row :gutter="22">
            <el-col :span="10" class="tupian">
              <img src="../assets/tubiao/tubiao/tubiao (2).jpg" />
            </el-col>
            <el-col :span="12" class="ddf">
              <p class="pbiaoqian">灵活操作</p>
              <p class="pbiaoqian1">多种标的期限</p>
              <p class="pbiaoqian1">24小时线上操作</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row :gutter="22">
            <el-col :span="10" class="tupian">
              <img src="../assets/tubiao/tubiao/tubiao (3).jpg" />
            </el-col>
            <el-col :span="12" class="ddf">
              <p class="pbiaoqian">安全保障</p>
              <p class="pbiaoqian1">专业风控团队</p>
              <p class="pbiaoqian1">全程安全护航</p>
            </el-col>
          </el-row>
        </el-col>
       <el-col :span="6">
          <el-row :gutter="22">
            <el-col :span="10" class="tupian">
              <img src="../assets/tubiao/tubiao/tubiao (1).jpg" />
            </el-col>
            <el-col :span="12" class="ddf">
              <p class="pbiaoqian">严格审核</p>
              <p class="pbiaoqian1">严控借款人资质</p>
              <p class="pbiaoqian1">精选优质资产</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <br />
    </div>
    <div class="zoumadeng2" style="width:100%">
      <el-carousel
        :interval="6000"
        type="card"
        height="350px"
        class="dsfwfdfd"
        style="width:60%;margin-left:300px;height:450px"
      >
        <div>
          <i class="el-icon-minus" style="font-size:50px">
            <p style="font-size:30px">推荐项目</p>
          </i>
        </div>
        <el-carousel-item
          v-for="item in dfdsdf"
          :key="item.id"
          style="width:510px;height:350px "
          class="dfjfnfx"
        >
          <p style=" padding-top:30px">金控报{{item.name}}</p>
          <div style="  padding-top:40px">
            <el-progress type="circle" :percentage="item.jindu" :width="130"></el-progress>

            <el-row :gutter="30">
              <el-col :span="12">
                <p style="font-zize:2cp">{{item.tianshu}}</p>
                <p>期限</p>
              </el-col>
              <el-col :span="12">
                <p>{{item.jine}}</p>
                <p>剩余金额</p>
              </el-col>
            </el-row>
            <el-button class="button1">我要投资</el-button>
          </div>
        </el-carousel-item>
      </el-carousel>
      <br />
    </div>
    <div class="div12">
      <br />
      <div class="HolyGrail-news">
      
        <div class="more-content" >
          <div style="width:100%;">
            <div style="width:80%f;height:50px;border-bottom: 1px solid gold; margin:0px auto; width:80%">
              <div style="float:left;font-size:20px;ont-weight:bold; line-height: 50px;">
                <span>公告新闻</span>
              </div>
              <div style="float:right;font-size:13px;color:gray;line-height: 50px;">
                <span>查看更多 >></span>
              </div>
            </div>
            <div style="width:80%;height:400px ;margin:0px auto;">
              <table style="width:100%">
                <tr style="height:30px;" v-for="item in newslist" :key="item.id">
                  <td style="width:70%">
                    <span style="font-size:20px;font-weight:bold;color:red;margin-left: -162px;">·</span>
                    <span style=" padding-left:5px;color:gray;font-size:13px">{{item.name}}</span>
                  </td>
                  <td style="width:30%; text-align: right;color:gray;font-size:13px">
                    <span>{{item.datatiem}}</span>
                  </td>
                </tr>
              </table>  
            </div>
          </div>
          <div style="width:100%;">
            <div style="width:80%;height:50px; border-bottom: 1px solid gold;margin:0px auto">
              <div style="float:left;font-size:20px;font-weight:bold; line-height: 50px; ">
                <span>官网公告</span>
              </div>
              <div style="float:right;font-size:13px;color:gray;line-height: 50px;">
                <span>查看更多 >></span>
              </div>
            </div>
            <div style="width:80%;height:400px;margin:0px auto;">
              <table style="width:100%">
                <tr style="height:30px" v-for="item in announcementList" :key="item.id">
                  <td style="width:70%">
                    <span style="font-size:20px;font-weight:bold;color:red;margin-left: -162px;">·</span>
                    <span style="padding-left:5px;color:gray;font-size:13px">{{item.name}}</span>
                  </td>
                  <td style="width:30%; text-align: right;color:gray;font-size:13px">
                    <span>{{item.datatiem}}</span>
                  </td>
                </tr>
                
              </table>
            </div>
          </div>
        </div>
          <div class="HolyGrail-nav"></div>
        <div class="HolyGrail-ads"></div>
      </div>
    </div>
    <div class="appxiazai" style="widht:100%;margin-top: -37px">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1539575733,139225324&fm=26&gp=0.jpg" style="width:331px;margin-left:600px;margin-top:93px" >
    </div>          


 <div>
      <div class="hezuodiv" style="margin-left: 159px;margin-top:-123px">
        <p style="font-size:40px">合作机构</p>
        <br>
         <img src="../assets/hezuojigou/hezuojigou (1).jpg" style="width:130px" /><!-- 1 -->
        <img src="../assets/hezuojigou/hezuojigou (2).jpg" style="width:130px;margin-left: -6px;" /><!-- 2 -->
        <img src="../assets/hezuojigou/hezuojigou (3).jpg" style="width:150px;margin-left: -6px;" /><!-- 3 -->
        <img src="../assets/hezuojigou/hezuojigou (4).jpg" style="width:130px;margin-left: -27px" /><!-- 4 -->
        <!-- 5-->
        <img src="../assets/hezuojigou/hezuojigou (15).jpg" style="width:170px;margin-left: -10px" /><!-- 6 -->
        <img src="../assets/hezuojigou/hezuojigou (11).jpg" style="width:130px;margin-left: -24px" /><!-- 7 -->

        <img src="../assets/hezuojigou1/hezuojigou1 (1).jpg" style="width:150px;margin-left: -17px" /><!-- 8 -->
        <img src="../assets/hezuojigou/hezuojigou (10).jpg" style="width:130px;margin-left: -33px" /><!-- 9 -->
        <img src="../assets/hezuojigou1/hezuojigou1 (1).gif" style="width:200px;margin-left: -25px" /><!-- 10 -->
        <img src="../assets/hezuojigou/hezuojigou (16).jpg" style="width:150px" /><!-- 11 -->
        <img src="../assets/hezuojigou/hezuojigou (13).jpg" style="width:200px;margin-left: -8px" /><!-- 12 -->
        <img src="../assets/hezuojigou/hezuojigou (14).jpg" style="width:130px;margin-left: 29px" /><!-- 13 -->
        <img src="../assets/hezuojigou1/hezuojigou1 (2).png" style="width:170px;margin-left: -19px" /><!-- 14 -->
      <!-- 15 -->
     <!-- 16 -->
        <img src="../assets/hezuojigou/hezuojigou (15).jpg" style="width:130px;margin-left: -34px" /><!-- 17 -->
        <img src="../assets/hezuojigou/hezuojigou (11).jpg" style="width:130px" /><!-- 18 -->
        <img src="../assets/hezuojigou/hezuojigou (9).jpg" style="width:130px;margin-left: -1px" /><!-- 19 -->
        <img src="../assets/hezuojigou1/hezuojigou1 (3).png" style="width:200px" /><!-- 20 -->
        <img src="../assets/hezuojigou/hezuojigou (14).jpg" style="width:130px" /><!-- 21 -->
        <img src="../assets/hezuojigou/hezuojigou (15).jpg" style="width:130px" /><!-- 22 -->
        <img src="../assets/hezuojigou1/hezuojigou1 (3).jpg" style="width:150px" /><!-- 23 -->
        <img src="../assets/hezuojigou/hezuojigou (9).jpg" style="width:130px;margin-left: -25px" /><!-- 23 -->
        <img src="../assets/hezuojigou/hezuojigou (10).jpg" style="width:130px" /><!-- 24 -->
        <img src="../assets/hezuojigou1/hezuojigou1 (2).png" style="width:170px;margin-left: -21px" /><!-- 25 -->
        <img src="../assets/hezuojigou/hezuojigou (16).jpg" style="width:150px;margin-left: -38px" /><!-- 26 -->

      </div>
    </div>
   <div class="self-footer">
    <div class="self-footer-inner">
      <div class="footer-l1 clearfix">
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
    <!-- <div style="display:flex;">
      <div id="div1">d</div>
      <div id="div2" class="div2">4</div>
    </div>-->

  </div>
</template>

<script>
export default {
  data() {
    return {

     

      
           imgLists: [
       
        {
          url: require("../assets/tubiao/hezuo (1).jpg"),
        },
        {
          url: require("../assets/tubiao/hezuo (2).jpg"),
        },
        {
          url: require("../assets/tubiao/hezuo (3).jpg"),
        },
               {
          url: require("../assets/tubiao/hezuo (4).jpg"),
        },
      ],
      imgList: [
        {
          url: require("../assets/jinrongtupian/202001140951390479883.jpg"),
        },
        {
          url: require("../assets/jinrongtupian/202001131113531289940.png"),
        },
        {
          url: require("../assets/jinrongtupian/202001140951390479883.jpg"),
        },
        {
          url: require("../assets/jinrongtupian/202001141037158891798.png"),
        },
      ],
      newslist: [
        { name: "sssssssss", datatiem: "2002-02-02" },
        { name: "sssssssss", datatiem: "2002-02-02" },
        { name: "sssssssss", datatiem: "2002-02-02" },
        { name: "sssssssss", datatiem: "2002-02-02" },
        { name: "sssssssss", datatiem: "2002-02-02" },
      ],
      announcementList: [
        { name: "sssssssss", datatiem: "2002-02-02" },
        { name: "sssssssss", datatiem: "2002-02-02" },
        { name: "sssssssss", datatiem: "2002-02-02" },
        { name: "sssssssss", datatiem: "2002-02-02" },
        { name: "sssssssss", datatiem: "2002-02-02" },
      ],
   dfdsdf:[
          {name:"JIB15615123433",jindu:"15",tianshu:"360",jine:"1300.00"},
           {name:"JIB15615123433",jindu:"15",tianshu:"360",jine:"1300.00"},
            {name:"JIB15615123433",jindu:"15",tianshu:"360",jine:"1300.00"}
        ]

    };
  },
};
</script>


<style  scoped>
.hezuodiv {
  width: 80%;
  margin-left: 142px;
}
.HolyGrail-nav,
.HolyGrail-ads {
  /* 两个边栏的宽度设为12em */
  flex: 0 0 20em;
}
.dfdf{
  padding-left: 30px;
}
.HolyGrail-nav {
  /* 导航放到最左边 */
  order: -1;
}
.HolyGrail-news {
  display: flex;
  height: 450px;
}
.more-content{
  flex: 1;
  display: flex;
}
.div13 {

  align-content: center;
  width: 70%;
  height: 350px;
  margin-left: 200px;
}
.div12 {

  width: 100%;
  height: 261px;
  
}
.dfjfnfx {
  top: 100px;
}
.button1 {
  margin-top: 30px;
  width: 190px;
  font-size: red;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 100px;
  margin: 2px;
}
.el-carousel__item:nth-child(2n) {
  background-color: white;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
body {
  text-align: center;
}
.divtuijian {
  width: 100%;
  height: 100px;

  background: seashell;
}
.pbiaoqian {
  font-size: 20px;
}
.pbiaoqian1 {
  font-size: 12px;
}
p {
  margin: 0px;
}
.ddf {
  text-align: left;
}

.bdsf {
  width: 80%;
  text-align: center;
  margin: 0 auto;
}
.col10 {
  margin-right: 30px;
}
.lunbo1 {
  background: #eee;
}
.img6 {
  width: 100%;
}
/* https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1282149389,1163915271&fm=26&gp=0.jpg */
.zoumadeng2 {
  background: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=243390278,2658906263&fm=26&gp=0.jpg) no-repeat  ;

background-size:100% 100%;
}
.appxiazai{
  background: url(https://file11info.ppdai.com/3e09ea1026974d9ca06d96583c430759.jpg) no-repeat ;
  background-size:100% 100%;
 
  height: 800px;
}

.a2 {
  margin-left: 10px;
}
.div2 {
  margin-left: 1000px;
}

.subject-matchheight-inherit {
  background: #eee;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.img2 {
  height: 310px;
}

.divdibu {
  background: #333333;
    color: #eee;
}
.divnei {
  align-content: center;

}
.self-footer .footer-l2 .footer-l2-inner .footer-l2-rights a {
    color: #ffffff;
    cursor: pointer;
    font-family: Source-Regular;
    font-size: 12px;
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
</style>