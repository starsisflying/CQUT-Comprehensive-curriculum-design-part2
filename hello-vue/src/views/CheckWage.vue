<template>
  <el-container class="bg">
    <el-header></el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar></Sidebar>
      </el-aside>
      <el-main>
        <div class="bigBox">
          <div class="selectBox">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>通过代号搜索</span>
                </div>
              </template>
              <el-input v-model="input" placeholder="请输入代号" ></el-input>
              <el-button class="button" type="text" id="button1" v-on:click="checkWageWithid">搜索</el-button>
            </el-card>
          </div>
          <div class="table">
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
              <el-table-column
                  prop="name"
                  label="代号"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="salary"
                  label="工资"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="bonus"
                  label="奖金">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/views/Sidebar";
export default {
  name: "CheckWage",
  components:{Sidebar},
  comments:{Sidebar},
  data() {
    return {
      tableData: [{
        salary: '',
        name: '',
        bonus: ''
      }],
      input:'',
    }
  },
  methods:{
    checkWageWithid(){
      this.$axios.post('/api/user2/checkWageWithid',{
        name:this.input
      }).then(res=>{
        this.$set(this.tableData,0, {name:res.data[0],salary:res.data[1],bonus:res.data[2]})
      })
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  /*line-height: 80px;*/
  /*background-image: url("../assets/Garanheadright.png");*/
  background-image: url("../assets/Garancssbkg3.png");
}

.el-aside {
  background-color: #E9EEF3;
  color: #333;
  width: 13.2%!important;
  overflow: hidden;
}

.el-main {
  background-color: white;
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
.bigBox{
  width: 100%;
  height: 100%;
}
.selectBox{
  width: 20%;
  /*margin: 0 auto;*/
}
.bg{
  background-image: url("../assets/Garancssbkg3.png");
}
</style>