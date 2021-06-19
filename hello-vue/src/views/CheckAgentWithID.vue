<template>
  <div class="bg">
  <div class="serchContainer">
    <div class="byID">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>通过代号搜索</span>
          </div>
        </template>
        <el-input v-model="input" placeholder="请输入代号" ></el-input>
        <el-button class="button" type="text" id="button1" v-on:click="checkWithid">搜索</el-button>
      </el-card>
    </div>
    <div class="byOcc">
      <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>通过职业搜索</span>
        </div>
      </template>
        <el-select v-model="occupation" placeholder="请选择职业">
          <el-option
              v-for="item in occupationoption"
              :key="item.occupation"
              :label="item.occupation"
              :value="item.occupation">
          </el-option>
        </el-select>
      <el-button class="button" type="text" style="float: right" v-on:click="checkWithOcc()">搜索</el-button>
      </el-card>
    </div>
    <div class="byDepartment">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>通过部门搜索</span>
          </div>
        </template>
<!--        <el-input v-model="input" placeholder="请输入部门"></el-input>-->
        <el-select v-model="department" placeholder="请选择部门">
          <el-option
              v-for="item in options"
              :key="item.department"
              :label="item.department"
              :value="item.department">
          </el-option>
        </el-select>
        <el-button class="button" type="text" v-on:click="checkWithDepartment()" >搜索</el-button>
      </el-card>
    </div>
    <div class="byMarraige">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>通过婚姻状况搜索</span>
          </div>
        </template>
        <!--        <el-input v-model="input" placeholder="请输入部门"></el-input>-->
        <el-select v-model="marriage" placeholder="请选择婚姻状况">
          <el-option
              v-for="item in marriageoptions"
              :key="item.marriage"
              :label="item.marriage"
              :value="item.marriage">
          </el-option>
        </el-select>
        <el-button class="button" type="text" v-on:click="checkWithMarriage()">搜索</el-button>
      </el-card>
    </div>
  </div>
  </div>
</template>

<script>
import evebtVue from "@/views/evebtVue";
export default {
  name: "CheckAgentWithID",
  data(){
    return{
      input:'',
      options: [{
        department: '医疗部',
        label: '医疗部'
      }, {
        department: '安保部',
        label: '安保部'
      }, {
        department: '执行部',
        label: '执行部'
      }, {
        department: '后勤部',
        label: '后勤部'
      }, {
        department: '闲逛部',
        label: '闲逛部'
      }],
      department: '',
      occupationoption: [{
        occupation: '近卫',
        label: '近卫'
      }, {
        occupation: '狙击',
        label: '狙击'
      }, {
        occupation: '术士',
        label: '术士'
      }, {
        occupation: '辅助',
        label: '辅助'
      }, {
        occupation: '重装',
        label: '重装'
      }, {
        occupation: '特种',
        label: '特种'
      }, {
        occupation: '医疗',
        label: '医疗'
      }],
      occupation: '',
      marriageoptions: [{
        marriage: '已婚',
        label: '已婚'
      }, {
        marriage: '未婚',
        label: '未婚'
      }],
      marriage: '',
    }
  },
  methods:{
    checkWithDepartment(){
      this.$axios.post('/api/user2/checkWithDepartment',{
        department:this.department
      }).then(res=>{
        evebtVue.$emit("myfun",res.data)
      })
    },
    checkWithid(){
      console.log(this.input)
      this.$axios.post('/api/user2/checkWithid',{
        name:this.input
      }).then(res=>{
        evebtVue.$emit("myfun",res.data)
      })
    },
    checkWithOcc(){
      this.$axios.post('/api/user2/checkWithOc',{
        occupation:this.occupation
      }).then(res=>{
        evebtVue.$emit("myfun",res.data)
      })
    },
    checkWithMarriage(){
      this.$axios.post('/api/user2/checkWithMa',{
        marriage:this.marriage
      }).then(res=>{
        evebtVue.$emit("myfun",res.data)
      })
    }
  }
}
</script>

<style scoped>
.serchContainer{
  width: 100%;
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  top: 15%;
  background-color: #E9EEF3;
  /*background-image: url("../assets/Garancssbkg3.png");*/
}
.byID{
  /*width: 33%;*/
  /*height: 100%;*/
}
.box-card{
  height: 90%;

}
#button1{
  /*position: relative;*/
  /*left: 50%;*/
}
.bg{
  background-image: url("../assets/Garancssbkg3.png");
  z-index: -9999;
}
</style>