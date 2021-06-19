<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar></Sidebar>
      </el-aside>
      <el-main>
        <div class="imageContainer">
          <div class="demo-image">
            <span class="demonstration">{{fit}}</span>
            <el-image v-if="'data:image/png;base64,'+imageUrl" :src="'data:image/png;base64,'+imageUrl"  style="width: 100%;height: 100%" fit="fill"></el-image>
<!--            <el-image v-else :src="url" style="width: 100%;height: 100%" fit="fill"></el-image>-->
          </div>
        </div>
        <div class="messageEntering" >
          <el-card shadow="hover">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="干员代号">
                <el-input v-model="formLabelAlign.name" ></el-input>
              </el-form-item>
              <el-form-item label="年 龄">
                <el-input v-model="formLabelAlign.age"></el-input>
              </el-form-item>
              <el-form-item label="职 业">
                <el-input v-model="formLabelAlign.occupation"></el-input>
              </el-form-item>
              <el-form-item label="婚姻状况">
                <el-input v-model="formLabelAlign.marriage"></el-input>
              </el-form-item>

            </el-form>
          </el-card>
        </div>
        <div class="messageEnteringRight">
          <el-card shadow="hover" style="width: 300px;">
            <el-form :label-position="labelPosition" label-width="60px" :model="formLabelRight">
              <el-form-item label="性 别">
                <el-input v-model="formLabelRight.gender"></el-input>
              </el-form-item>
              <el-form-item label="种 族">
                <el-input v-model="formLabelRight.race"></el-input>
              </el-form-item>
              <el-form-item label="籍 贯">
                <el-input v-model="formLabelRight.nativePlace"></el-input>
              </el-form-item>
              <el-form-item label="学 历">
                <el-input v-model="formLabelRight.education"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
        <div class="messageEnteringFinal">
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <span>选择部门</span>
              </div>
            </template>
            <el-select v-model="department" placeholder="请选择">
              <el-option
                  v-for="item in options"
                  :key="item.department"
                  :label="item.label"
                  :value="item.department" >
              </el-option>
            </el-select>
          </el-card>
        </div>
        <div class="buttonBox">
          <el-button type="warning" round class="submitButton" v-on:click="submitAgent">修改信息</el-button>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import Sidebar from "@/views/Sidebar";
import jpg1 from '@/assets/Login2.jpg'
export default {
  name: "CheckAgentMessage",
  components:{Sidebar},
  comments:{Sidebar},
  data(){
    return{
      url:jpg1,
      imageUrl:this.$route.query.avatar,
      labelPosition: 'left',
      formLabelAlign: {
        name: this.$route.query.name,
        age: this.$route.query.age,
        occupation: this.$route.query.occupation,
        marriage:this.$route.query.marriage,
      },
      formLabelRight: {
        gender: this.$route.query.gender,
        race: this.$route.query.race,
        nativePlace: this.$route.query.nativePlace,
        education:this.$route.query.education,
      },
      department:this.$route.query.department,
      test:[],
      TestData:[],
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
    }
  },
  methods:{
      submitAgent(){
        console.log(this.formLabelAlign.name)
        this.$axios.post('/api/user2/changeAgent',{
          name:this.formLabelAlign.name,
          age:this.formLabelAlign.age,
          occupation:this.formLabelAlign.occupation,
          marriage:this.formLabelAlign.marriage,
          gender:this.formLabelRight.gender,
          race:this.formLabelRight.race,
          nativePlace:this.formLabelRight.nativePlace,
          education:this.formLabelRight.education,
          department:this.department
        }).then(res=>{
          console.log(res)
        })
      }
    },

  }
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #E9EEF3;
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
.imageContainer{
  position: relative;
  width: 30%;
  height: 40%;
  left: 1%;
  top: 1%;
}
.demo-image{
  width: 80%;
  height: 125%;
}
.messageEntering{
  position: relative;
  left: 25.5%;
  width: 22%;
  height: 30%;
  top: -38%;
}
.messageEnteringRight{
  position: relative;
  width: 22%;
  height: 30%;
  top:-68%;
  left: 48%;
}
.messageEnteringFinal{
  width: 20%;
  height: 30%;
  position: relative;
  left: 71.5%;
  top: -98%;
  background-color: #E9EEF3;
}
.buttonBox{
  width: 10%;
  height: 20%;
  position: relative;
  top: -103%;
  left: 71.5%;
  background-color: #E9EEF3;
}
.submitButton{
  position: relative;
  top: 35%;
  /*left: 50%;*/
}
</style>