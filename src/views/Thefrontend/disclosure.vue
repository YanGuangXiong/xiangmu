<template>
  <div class="htm">
    <div class="qwe">
      <el-tabs :tab-position="tabPosition" type="card" style="height: 2000px;">
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
        <el-tab-pane label="经营信息">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left",

      fromBusiness: {
        Business: "1231321",
      },
    };
  },
};
</script>

<style scoped>

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