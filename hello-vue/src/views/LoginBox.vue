<template>
  <div class="login-container">
      <div class="login-box">
          <div class="avator-box">
            <img src="../assets/明日方舟莱茵生命实验室.png" id="headImg">
          </div>
        <div class="formDiv">
          <el-form label-width="0" class="login_form" :model="form" >
            <!-- name -->
            <el-form-item  label-width="70px" label="用户名:">
              <el-input v-model="form.username" placeholder="输入用户名"></el-input>
            </el-form-item>
            <!-- password -->
           <el-form-item label="密码:" label-width="70px">
              <el-input  placeholder="输入密码" type="password" v-model="form.password" show-password ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <el-alert class="wrongTitle"
                  v-if="alert_display"
            title="账户名或密码错误"
            type="error">
        </el-alert>
        <div class="buttonDiv">
          <el-button type="primary" v-on:click="dologin()">登录</el-button>
          <el-button type="info">重置</el-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  data(){
    return{
      form:{
        username:'',
        password:''
      },
      alert_display:''
    }
  },
  methods:{
    dologin(){
      this.alert_display='';
      this.$axios.post('/api/user/login',{
        username: this.form.username,
        password: this.form.password
      }).then((res=>{
        console.log(res.data);
        if (res.data === "success"){
          this.$router.replace('/admin')
        }
        if (res.data === "wrong"){
          this.alert_display='1';
        }
      }))
      // this.$axios.get('/api/user/login?username='+this.form.username).then((res=>{
      //   console.log(111)
      //   console.log((res));
      // }))
      .catch(err=> {
        console.log(222)
        console.log(err)
      })
    }
  }
}

</script>

<style scoped>
.login-container{
  background-color:#FEEBEB ;
  height: 100%;
  width: 100%;
}
.login-box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

}
.avator-box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  /*left: 50%;*/
  /*transform: translate(-50%, -50%);*/
  margin: 0 auto;
  top: -25%;
}
#headImg {
  height: 100%;
  width: 100%;
  border-radius:50%;
  background-color: #eee;
}
.formDiv{
  width: 60%;
  position: relative;
  left: 20%;
  top: -20%;
}
.buttonDiv{
  position: relative;
  width: 40%;
  top: -24%;
  left: 36%;
}
.wrongTitle{
  width: 50%;
  position: relative;
  top: -26%;
  left: 32%;
}
</style>