<template>
  <div class="messageContainer">
    <div class="imageContainer">
      <div class="demo-image">
        <span class="demonstration">{{fit}}</span>
        <el-image v-if="url" :src="url" :imgstring="imgstring" style="width: 100%;height: 100%" fit="fill"></el-image>
        <el-image v-else :src="imageUrl" style="width: 100%;height: 100%" fit="fill"></el-image>
      </div>
    </div>
    <div class="messageEntering">
      <el-card>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="干员代号">
            <el-input v-model="formLabelAlign.name"></el-input>
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
      <el-card class="box-card">
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
    <div class="updateHead">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>点击"+"上传头像</span>
          </div>
        </template>
        <div  class="text item">
          <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :before-upload="beforeAvatarUpload"
              :on-success="handleAvatarSuccess"
              :http-request="handleChange"
              :on-change="handleX"
          >
            <i  class="el-icon-plus avatar-uploader-icon" ></i>
          </el-upload>
        </div>
      </el-card>
    </div>
    <div class="buttonBox">
      <el-button type="primary" round class="submitButton" v-on:click="submitAgent">聘用干员</el-button>
    </div>
  </div>

</template>

<script>
import jpg1 from '@/assets/Login2.jpg'
export default {
  name: "AddAgentList",
  data() {
    return {
      url:jpg1,
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        age: '',
        occupation: '',
        marriage:'',
      },
      labelPositionRight: 'right',
      formLabelRight:{
        gender:'',
        race:'',
        nativePlace:'',
        education:''
      },
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
      imageUrl: '',//头像url
      imgstring:'',
    }
  },
  methods: {
    handleChange(file){
      const formData=new FormData();
      formData.append('file',file.file);
      console.log(file);
      this.$axios.post('/api/user/upA',formData).then(res=>{
        this.url=this.imageUrl;
        this.imgstring=res.data;
        console.log(this.imgstring);
        console.log(111)
        console.log(this.url)
      }).catch(res=>{
        console.log(res);
        console.log(222)
      })
    },
    handleX(file){
      this.imageUrl = URL.createObjectURL(file.raw);
      this.url=this.imageUrl;
      console.log("xxxxx");
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitAgent(){
      this.$axios.post('/api/user2/entering',{
        name:this.formLabelAlign.name,
        age:this.formLabelAlign.age,
        occupation:this.formLabelAlign.occupation,
        marriage:this.formLabelAlign.marriage,
        gender:this.formLabelRight.gender,
        race:this.formLabelRight.race,
        nativePlace:this.formLabelRight.nativePlace,
        education:this.formLabelRight.education,
        department:this.department,
        avatar:this.imgstring,
      }).then((res=>{
        console.log(11)
        console.log(res)
      })).catch((res=>{
        console.log(22)
        console.log(res)
      }))
    }
  }
}
</script>

<style scoped>
.messageContainer{
  width: 100%;
  height: 100%;
}
.imageContainer{
  position: relative;
  width: 30%;
  height: 40%;
  left: 1%;
  top: 1%;
}
.messageEntering{
  position: relative;
  left: 32%;
  width: 22%;
  height: 30%;
  top: -38%;
}
.messageEnteringRight{
  position: relative;
  width: 22%;
  height: 30%;
  top:-68%;
  left: 55%;
}
.demo-image{
  width: 100%;
  height: 125%;
}
.messageEnteringFinal{
  width: 20%;
  height: 30%;
  position: relative;
  left: 79%;
  top: -98%;
}
.updateHead{
  width: 13%;
  height: 10%;
  position: relative;
  top: -99.3%;
  left: 79%;
  background-color:white ;
}
.avatar-uploader{
  position: relative;
  left: 0%;
}
.buttonBox{
  width: 10%;
  height: 20%;
  position: relative;
  top: -85%;
  left: 45%;
  background-color: white;
}
.submitButton{
  position: relative;
  top: 35%;
}
</style>