<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar></Sidebar>
      </el-aside>
      <el-main>
      <Home></Home>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/views/Sidebar";
import Home from  "@/views/Test"
export default {
  name: "Admin",
  comments:{Sidebar,Home},
  components:{Sidebar,Home},
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  background-image: url("../assets/Garancssbkg3.png");
}

.el-aside {
  background-color: #E9EEF3;
  color: #333;
  width: 13.2%!important;
  overflow: hidden;
  /*text-align: center;*/
  /*line-height: 200px;*/
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  padding: 0;
  height:600px;
  min-width: 1246px;
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

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>