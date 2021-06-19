<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside >
        <div id="theImage"></div>

      </el-aside>
      <el-main>
        <LoginBox></LoginBox>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LoginBox from "@/views/LoginBox";
export default {
  name: "Login",
  components: {LoginBox},
  data(){
    return{
      form:{
        username:'',
        password:''
      }
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  background-image: url("../assets/Garanheadright.png");
}

.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  /*line-height: 200px;*/
  height: auto;
  width: 65% !important;
}
#theImage{
  width: 100%;
  height:560px;
  position: relative;
  margin: 0 auto;
  background-image: url("../assets/login3.gif");
  /*background-image: url("../assets/Login2.jpg");*/
  background-size:100% 100%;
  background-repeat: no-repeat;
}
.el-main {
  padding: 0;
  background-color: white;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  height: 560px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>