<template>
  <div class="htm">
    <div class="qwe">
      <el-tabs :tab-position="tabPosition" type="card" style="height: 2000px;">
        <el-tab-pane   label="账户总览">
      
          <div class="wsx">
            
          </div>

        </el-tab-pane>
                      <hr align="center" width="300" color="#987cb9" size="1" />
        <el-tab-pane label="设置">
          <div class="wsx"></div>
        </el-tab-pane>
        <el-tab-pane label="消息">
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



</style>