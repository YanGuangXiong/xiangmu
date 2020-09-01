<template>
  <div class="app">
    <div
      style=" height:130px;width:68%;  border: 1px rgb(223, 209, 209) solid;border-radius:30px;"
      v-for="item in newslist"
      :key="item.id"
    >
      <div style="width:200px;height:100px " class="div-float">
        <br />

        <span style="margin-left:20px;font-size:17px large">金投保[</span>
        <span style="margin-top:20px;font-size:17px large;">{{item.name}}</span>
        <span style="font-size:17px large">]</span>
        <br />
        <br />
        <p style="font-size:30px;color: red;">{{item.sun}}</p>
        <p>预期年化收益率</p>
      </div>

      <div style="width:200px;height:100px" class="div-float">
        <br />
        <br />
        <br />
        <span style="margin-top:20px;font-size:30px">{{item.zhouqi}}</span>
        <span>天</span>
        <p>期限</p>
      </div>

      <div style="width:200px;height:100px" class="div-ft">
        <br />
        <br />
        <el-button
          type="warning"
          round
          style="width:150px;margin-top:20px"
          @click="dialogVisible=true"
        >预热期</el-button>
      </div>

      <div style="width:200px;height:100px" class="div-ft">
        <br />
        <br />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="item.jindu"
          status="exception"
          style="margin-top:30px"
        ></el-progress>
        <p>投资进度</p>
      </div>

      <div style="width:200px;height:100px;margin-top: 10px" class="div-ft">
        <br />
        <br />
        <br />
        <span style="margin-top:20px;font-size:20px">{{item.jine}}</span>
        <span>元</span>
        <p>借款金额</p>
      </div>
    </div>
    <!-- 弹出层 -->

    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="69%"
      style="text-align:left;background: #eee;"
      class="dialog1"
    >
      <div style="margin-top: -40px">
        <span style="font-size:25px">金投保[</span>
        <span style="font-size:25px">1565413454</span>
        <span style="font-size:25px">]</span>
        <br />
        <br />
        <br />
        <br />

        <div style="width:200px ;height:130px; float: left;border-right:1px solid gray">
          <span style="color: red;font-size:30px;margin-left:60px">5.8</span>
          <span style="color: red;">%</span>
          <p style="margin-left:40px">预期年化收益率</p>
          <br />
          <br />
          <span style="margin-left:40px">起息日：</span>
          <span>2018-06-13</span>
        </div>
        <div style="width:200px;height:130px; float:left;border-right:1px solid gray">
          <p style="font-size:30px;margin-left:60px">365</p>
          <p style="margin-left:55px">期限（天）</p>
          <br />
          <br />
          <span style="margin-left:40px">到期日：</span>
          <span>2018-06-13</span>
        </div>

        <div
          style="width:300px;height:200px;float:right;margin-top: -58px;border-left:1px solid gray"
        >
          <span style="margin-left:40px">剩余金额：</span>
          <span>10000.00</span>
          <span>元</span>
          <br />
          <br />
          <span style="margin-left:40px">投资金额：</span>
          <input type="text" style="width:150px;height:30px" />
          <br />
          <span style="color:red; margin-left:110px">100元起投，一百元递增</span>
          <br />
          <i class="el-icon-circle-close" style="color:red;color:red; margin-left:70px"></i>
          <span style="color:red">投资金额须以100元起，100元递增</span>
          <br />
          <span style="color:red;margin-left:110px">递增递增</span>
          <br />
          <br />
          <span style="margin-left:40px">预期收益：</span>
          <span style="color:red">10000.00</span>
          <span style="color:red">元</span>

          <br />
          <br />

          <el-checkbox v-model="checked">
            我已阅读并同意
            <router-link type="warning" to="/login" style="color:red">《投资协议》</router-link>
          </el-checkbox>
          <br />
          <br />
          <el-button
            type="warning"
            round
            style="width:250px;margin-left:40px"
            @click="dialogVisible=true"
          >立即投资</el-button>
          <br />
          <br />
          <span style="margin-left:40px">距离投资结束仅剩：</span>
          <span style="color:red">2</span>
          <span>天</span>
          <span style="color:red">1</span>
          <span>小时</span>
          <span style="color:red">30</span>
          <span>分</span>
          <span style="color:red">20</span>
          <span>秒</span>
        </div>

        <div style="width:300px;height:180px;float:right;">
          <span style="margin-left:80px;font-size:30px">150,000,00</span>
          <br />
          <span style="margin-left:110px">
            借款金额（元）
            <br />
            <br />
            <br />
            <span style="margin-left:20px">汇款方式：</span>
            <span>到期一次性还本付息</span>
            <br />
            <br />
            <span style="margin-left:20px">见证机构：</span>
            <span>柳投金服</span>
          </span>
        </div>
        <div style=" width:340px">
          <span style="margin-left:38px">投资进度</span>
          <el-progress :percentage="50" stroke-width="10" style="width:240px;float:right"></el-progress>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      newslist: [
        {
          id: 1,
          name: "JIB15615123433",
          sun: "6.30%",
          jine: "1300.00",
          zhouqi: "360",
          jindu: "35",
        },
        {
          id: 1,
          name: "JIB15615123433",
          sun: "6.30%",
          jine: "1300.00",
          zhouqi: "360",
          jindu: "35",
        },
        {
          id: 1,
          name: "JIB15615123433",
          sun: "6.30%",
          jine: "1300.00",
          zhouqi: "360",
          jindu: "35",
        },
        {
          id: 1,
          name: "JIB15615123433",
          sun: "6.30%",
          jine: "1300.00",
          zhouqi: "360",
          jindu: "35",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.dialog1 {
  padding-top: 42px;
}
.div-float {
  float: left;
}
.div-ft {
  float: right;
}
.app {
  padding-left: 15%;
  padding-top: 1%;
  width: 100%;
}
</style>