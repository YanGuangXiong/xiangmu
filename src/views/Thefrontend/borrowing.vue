<template>
  <div>
    <div class="divfu">
      <div class="divtou"></div>
      <div class="divzhong">
        <div class="divli">
          <el-form ref="form" label-width="80px">
            <p style="font-size:30px">请填写借款信息</p>
            <el-form-item >
                <span style="margin-left: -85px">借款金额：</span>
              <el-input style="width:300px;margin-top: 42px"></el-input>
              <span>元</span>
             <p style="margin-left: -206px">最高可借20万</p>
            </el-form-item>
          
              <el-checkbox v-model="checked">我已阅读并同意
                  
                  <el-link href="#" class="fwxy" type="info" :underline="false">《用户服务协议》</el-link>
               <span>及</span>
                  <el-link href="#" class="fwxy" type="info" :underline="false">个人信息采集授权条款</el-link>
            </el-checkbox>
<br>
<br>
<br> 
               <el-button type="danger" style="width:400px" round>立即申请</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
   
    };
  },
};
</script>
<style scoped>
.divli {
  margin-top: 30px;
}
.divzhong {
    border-radius:30px;
  border: 1px rgb(252, 250, 250) solid;
  height: 400px;
  width: 1182px;
  margin-top: 94px;
  position: absolute;
  margin-left: 145px;
  background: rgb(252, 250, 250);
}
.divfu {
    
  background: rgb(238, 230, 230);
  width: 100%;
  height: 600px;
  margin: 0%;
}
.divtou {
  margin: 20px;
  background: rgb(0, 0, 0);
  width: 1190px;
  height: 15px;
  border: 1px solid;
  border-radius: 30px;
  margin-top: 86px;
  margin-left:  140px;
  position: absolute;
}
</style>