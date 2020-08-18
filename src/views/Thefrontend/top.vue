 <template>
  <div>
    <el-row type="flex" class="row-bg">
      <el-col :span="20">
        <div style="size:10px" class="grid-content bg-purple">客服专线：0720-2541411 服务时间：工作日 8:00-16-00</div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <a href>登录</a>
          <a class="a2">注册</a>
        </div>
      </el-col>
    </el-row>
    <el-container class="subject-matchheight-inherit" id="subject-match">
      <el-row :gutter="50">
        <el-col :span="25" class="col1">
          <img src="../../assets/lunbo1img/56545.jpg" class="image1" />
        </el-col>
        <el-col :span="25">
          <el-menu
            :default-active="this.$router.path"
            router
            class="tabs1"
            @select="menuSelect"
            mode="horizontal"
          >
            <el-menu-item index="/Home page">首页</el-menu-item>
            <el-menu-item index="/disclosure">信息披露</el-menu-item>
            <el-menu-item index="/investment">我要投资</el-menu-item>
            <el-menu-item index="/borrowing">我要借款</el-menu-item>
            <el-menu-item index="/account">我的账号</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-container>
    <div class="top-div">
      <router-view :key="dateKey" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dateKey:new Data()
    };
  },
  methods: {
    menuSelect() {
      let m = this;

      m.dateKey = new Date();
    },
  },
};
</script>
<style scoped>
.row-bg {
  background: black;
  margin-top: -59px;
}
.col1 {
  margin-left: 300px;
}
.image1 {
  height: 50px;
}
.tabs1 {
  margin-left: 150px;
}
</style>