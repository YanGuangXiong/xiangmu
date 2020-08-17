<template>
  <div>
    <el-carousel indicator-position="outside" class="lunbo1">
      <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <img :src="img.url" width="100%" height="100%" />
      </el-carousel-item>
    </el-carousel>
    <div class="bdsf">
      <el-row :gutter="30">
     <el-col :span="6">
          <el-row :gutter="22">
            <el-col :span="10" class="tupian">
              <img src="../assets/tubiao/tubiao/tubiao (3).jpg" />
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
              <img src="../assets/tubiao/tubiao/tubiao (1).jpg" />
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
              <img src="../assets/tubiao/tubiao/tubiao (2).jpg" />
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
              <img src="../assets/tubiao/tubiao/tubiao (3).jpg" />
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
          v-for="item in 6"
          :key="item"
          style="width:510px;height:350px "
          class="dfjfnfx"
        >
          <p style=" padding-top:30px">金控保 [JIB15615123433]</p>
          <div style="  padding-top:40px">
            <el-progress type="circle" :percentage="30"></el-progress>

            <el-row :gutter="30">
              <el-col :span="12">
                <p style="font-zize:2cp">30天</p>
                <p>期限</p>
              </el-col>
              <el-col :span="12">
                <p>87,000元</p>
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
            <div style="width:80%;height:50px;border-bottom: 1px solid gold; margin:0px auto;">
              <div style="float:left;font-size:20px;font-weight:bold; line-height: 50px;">
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

    <div>
      <img src="../assets/图片6.png" class="img6" />
    </div>
    <div class="divdibu">
      <div class="divnei">关于我们 公司简介 管理团队 联系我们 | 安全保障 备案信息 审核报告 风险管理 | 帮助中心 投资指引 借款指引 常见问题</div>
    <br>
    <p>版权所有@柳州是市金控科技有限公司</p>
    <br>
    <p>Copyright(c) 2018 by Liuzhou Financial Holding Technology Co .Ltd.All rights reserved</p>
    <br>
      <img src="../assets/tubiao/tubiao/gongan.jpg" style="width:20px" > &nbsp;
      <span>桂公网安备45020202000273号 </span>&nbsp;&nbsp;&nbsp;
       
      <span class="dfdf">桂ICP备18003600号-1</span>
      <br>
      <br>
      <p>网贷有风险 ，投资需谨慎 ；预期收益不等于实际收益</p>
      <br>
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
      imgList: [
        {
          url: require("../assets/lunbo1img/jdkjfdkj (1).jpg"),
        },
        {
          url: require("../assets/lunbo1img/sfds (7).jpg"),
        },
        {
          url: require("../assets/lunbo1img/jdkjfdkj (3).jpg"),
        },
        {
          url: require("../assets/lunbo1img/jdkjfdkj (4).jpg"),
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
    };
  },
};
</script>


<style  scoped>
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
  border: 1px red solid;
  align-content: center;
  width: 70%;
  height: 350px;
  margin-left: 200px;
}
.div12 {
  border: 1px red solid;
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
  background: white;
}
.img6 {
  width: 100%;
}
.zoumadeng2 {
  background: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1282149389,1163915271&fm=26&gp=0.jpg) no-repeat  ;

background-size:100% 100%;
}

.a2 {
  margin-left: 10px;
}
.div2 {
  margin-left: 1000px;
}

.subject-matchheight-inherit {
  background: white;
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
  background: black;
}
.divnei {
  align-content: center;
}
</style>