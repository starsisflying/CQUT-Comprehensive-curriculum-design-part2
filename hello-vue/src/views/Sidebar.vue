<template>
  <div class="leftMenu">
    <div class="leftButtonContainer">
      <el-radio-group v-model="isCollapse" >
        <el-radio-button :label="false" fill="red" >展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
<!--      <div class="backToAdmin">-->
<!--        <i class="el-icon-monitor" v-on:click="backToAdmin()"></i>-->
<!--      </div>-->
    </div>
    <el-menu :uniqueOpened="true" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#E9EEF3" >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-user"></i>
          <span>干员信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" v-on:click="addAgent()"><i class="el-icon-user-solid"></i>聘用干员</el-menu-item>
          <el-menu-item index="1-2" v-on:click="checkWage()"><i class="el-icon-money"></i>工资查询</el-menu-item>
          <el-menu-item index="1-3" v-on:click="checkAgent()"><i class="el-icon-s-check"></i>干员查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
<!--      <el-menu-item index="2">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <template #title>导航二</template>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="3" >-->
<!--        <i class="el-icon-document"></i>-->
<!--        <template #title>导航三</template>-->
<!--      </el-menu-item>-->
      <el-submenu index="2">
        <template #title >
          <i class="el-icon-setting"></i>
          <span>导航</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" v-on:click="backToAdmin"><i class="el-icon-location"></i>回到首页</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapse: false
    };
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addAgent(){
      this.$router.replace('/addagentadmin')
    },
    backToAdmin(){
      this.$router.replace('/admin')
    },
    checkAgent(){
      this.$router.replace('/checkagent')
    },
    checkWage(){
      this.$router.replace('/checkwage')
    }
  }
}


</script>

<style scoped>
.backToAdmin{
  font-size: 30px;
  /*position: relative;*/
  /*left: 7%;*/
}
.leftButtonContainer{
  background-color:#E9EEF3 ;
}
</style>