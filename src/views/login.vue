
<template>
  <div class="main-bg">

    <!-- title -->
    <h1>The login</h1>
    <div  class="divdiv">   <router-link class="rolink" type="warning" to="/Home page">返回首页</router-link></div>
           
    <!-- //title -->
    <div class="sub-main-w3">
      <div class="image-style"></div>
      <!-- vertical tabs -->
      <div class="vertical-tab">
        <div id="section1" class="section-w3ls">
          <input type="radio" name="sections" id="option1" checked />
          <label for="option1" class="icon-left-w3pvt">
            <span class="fa fa-user-circle" aria-hidden="true"></span>登陆
          </label>
          
          <article>
            <el-form action="#" method="post">
              <h3 class="legend">Login Here</h3>
              <div class="input">
                <span class="fa fa-phone" aria-hidden="t,i9ue"></span>
                <input type="text" placeholder="Phone" name="Phone" required />
              </div>
              <div class="input">
                <span class="fa fa-key" aria-hidden="true"></span>
                <input type="password" placeholder="Password" name="password" required />
              </div>
              <button type="submit" class="btn submit">登录</button>

              <a href="#" class="bottom-text-w3ls">Forgot Password?</a>
            </el-form>
          </article>
        </div>
        <div id="section2" class="section-w3ls">
          <input type="radio" name="sections" id="option2" />
          <label for="option2" class="icon-left-w3pvt">
            <span class="fa fa-pencil-square" aria-hidden="true"></span>个人注册
          </label>
          <article>
            <el-form>
              <h3 class="legend">Individual registration</h3>
              <div class="input">
                <span class="fa fa-phone" aria-hidden="true"></span>
                <input
                  type="text"
                  placeholder="请输入手机号码"
                  v-model="userInfo.Tel"
                  name="name"
                  required
                />
              </div>
              <div class="input">
                <span class="fa fa-key" aria-hidden="true"></span>

                <input
                  type="password"
                  placeholder="请设置6-20位数字和字母组合密码"
                  name="password"
                  v-model="logins.LoginPwd"
                  required
                />
              </div>
              <div class="input">
                <span class="fa fa-key" ari-hi dden="true"></span>
                <input type="password" placeholder="请再次输入密码" name="password" required />
              </div>
              <div class="input" style="width:135px;height:20px">
                <span class="fa fa-book mark" aria-hidden="true"></span>
                <input placeholder="请输入图形验证码" v-model="txyz" name="yanzhengma" required />
                <div @click="refreshCode" style="position:absolute;left: 210px ">
                  <s-identify :identifyCode="identifyCode" id="a2"></s-identify>
                </div>
              </div>
              <button type="submit" class="btn submit" @click="long1">注册</button>
            </el-form>
          </article>
        </div>
        <div id="section3" class="section-w3ls">
          <input type="radio" name="sections" id="option3" />
          <label for="option3" class="icon-left-w3pvt">
            <span class="fa fa-lock" aria-hidden="true"></span>企业注册
          </label>
          <article>
            <el-form>
              <h3 class="legend last">Enterprise registration</h3>
              <div class="input">
                <span class="fa fa-phone" aria-hidden="true"></span>
                <input
                  type="text"
                  placeholder="请输入手机号码"
                  name="name"
                  v-model="userInfo.Tel"
                  required
                />
              </div>
              <div class="input">
                <span class="fa fa-key" aria-hidden="true"></span>
                <input
                  type="password"
                  placeholder="请设置6-20位数字和字母组合密码"
                  v-model="logins.LoginPwd"
                  name="password"
                  required
                />
              </div>
              <div class="input">
                <span class="fa fa-key" aria-hidden="true"></span>
                <input type="password" placeholder="请再次输入密码" name="password" required />
              </div>
              <div class="input" style="width:135px;height:20px">
                <span class="fa fa-book mark" aria-hidden="true"></span>
                <input placeholder="请输入图形验证码" name="dfddf" required v-model="txyz" />
                <div @click="refreshCode" style="position:absolute;left: 210px ">
                  <s-identify :identifyCode="identifyCode1" id="a1"></s-identify>
                </div>
              </div>
              <button type="button" class="btn submit last-btn" @click="long2">注册</button>
            </el-form>
          </article>
        </div>
      </div>
      <!-- //vertical tabs -->
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import SIdentify from "../components/indexdf";
import { getzc } from "../network/purchases";
export default {
  components: { "s-identify": SIdentify },
  data() {
    return {
      logins: {
        LoginName: "",
        LoginPwd: "",
      },
      userInfo: {
        UserName: "",
        LoginPwd: "",
        Tel: "",
        Status: 0,
      },
      radions: 1,
      identifyCode: "",
      identifyCode1: "",
      identifyCodes: "1234567890",
      txyz: "",
    };
  },
  mounted() {
    this.identifyCode = this.makeCode(this.identifyCodes, 4);
    this.identifyCode1 = this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = this.makeCode(this.identifyCodes, 4);
      this.identifyCode1 = this.makeCode(this.identifyCodes, 4);
    },

    makeCode(o, l) {
      let Code = "";
      for (let i = 0; i < l; i++) {
        Code += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      return Code;
    },
    async long1() {
      if (this.identifyCode != this.txyz) {
        this.refreshCode();
        return this.$message.error("验证码错误！");
      }

      this.userInfo.Status = 0;
      var obj = {
        logins: this.logins,
        userInfo: this.userInfo,
      };
      const { data: res } = await getzc(obj);
    console.log(1);
      console.log(res);
    },
    async long2() {
      if (this.identifyCode1 != this.txyz) {
        this.refreshCode();
        return this.$message.error("验证码错误！");
      }
      this.userInfo.Status = 1;
      var obj = {
        logins: this.logins,
        userInfo: this.userInfo,
      };
      const { data: res } = await getzc(obj);
      
    },
  },
};
</script>
<style scoped>
.rolink{
font-size:20px;
color: aliceblue;
}
.divdiv{
  margin-left: 927px;

margin-top: -53px;
}
.main-bg{
  margin-top: -60px
}
    
</style>

<style>
</style>


