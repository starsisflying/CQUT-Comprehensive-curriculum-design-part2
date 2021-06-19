<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px">
<!--        <div class="leftMenu">-->
<!--          <div class="leftButtonContainer">-->
<!--            <el-radio-group v-model="isCollapse" id="test">-->
<!--              <el-radio-button :label="false">展开</el-radio-button>-->
<!--              <el-radio-button :label="true">收起</el-radio-button>-->
<!--            </el-radio-group>-->
<!--          </div>-->
<!--          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">-->
<!--            <el-submenu index="1">-->
<!--              <template #title>-->
<!--                <i class="el-icon-location"></i>-->
<!--                <span>干员信息</span>-->
<!--              </template>-->
<!--              <el-menu-item-group>-->
<!--                <el-menu-item index="1-1" v-on:click="addAgent()">聘用干员</el-menu-item>-->
<!--                <el-menu-item index="1-2">档案录入</el-menu-item>-->
<!--              </el-menu-item-group>-->
<!--                <el-menu-item index="1-3">干员档案</el-menu-item>-->
<!--&lt;!&ndash;              <el-submenu index="1-4">&ndash;&gt;-->
<!--&lt;!&ndash;                <el-menu-item index="1-4-1">选项1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;              </el-submenu>&ndash;&gt;-->
<!--            </el-submenu>-->
<!--            <el-menu-item index="2">-->
<!--              <i class="el-icon-menu"></i>-->
<!--              <template #title>导航二</template>-->
<!--            </el-menu-item>-->
<!--            <el-menu-item index="3" >-->
<!--              <i class="el-icon-document"></i>-->
<!--              <template #title>导航三</template>-->
<!--            </el-menu-item>-->
<!--            <el-menu-item index="4">-->
<!--              <i class="el-icon-setting"></i>-->
<!--              <template #title>导航四</template>-->
<!--            </el-menu-item>-->
<!--          </el-menu>-->
<!--        </div>-->
        <Sidebar></Sidebar>
      </el-aside>
      <el-main>
<!--        Main-->
        <AddAgentList></AddAgentList>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AddAgentList from "@/views/AddAgentList";
import Sidebar from "@/views/Sidebar";

export default {
  name: "AddAgentAdmin",
  components: {AddAgentList,Sidebar},
  comments:{AddAgentList,Sidebar},
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addAgent(){

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
  min-width: 1246px;
  /*background-color: #E9EEF3;*/
  background-color: white;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  padding: 0;
  height: 600px;
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
