<template xmlns:el-col="http://www.w3.org/1999/html">
<div class="showContainer">
  <div class="cardBox">
    <el-col :span="6" v-for="(item,index) in nameID "  :key="item">
      <el-card :body-style="{ padding: '0px' }" v-if="item!=null">
<!--        <el-image :src="require('C:\\\\Users\\\\18209\\\\Desktop\\\\1.jpg')"></el-image>-->
<!--        <el-image :src="iurl" ></el-image>-->

        <el-image v-if="url" :src="'data:image/png;base64,'+imageUrl[index]" style="width: 125px;height: 125px" fit="contain" ></el-image>
<!--        <el-image v-else :src="url" style="width: 100%;height: 100%" fit="fill"></el-image>-->
          <div style="padding: 14px;">
            <span :nameID="nameID">{{ nameID[index] }}</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" v-on:click="viewDetails(index)" >查看详情</el-button>
            </div>
          </div>
        </el-card>
    </el-col>
  </div>
</div>

</template>

<script>
import evebtVue from "@/views/evebtVue";
import jpg1 from '@/assets/Login2.jpg'
// import evebtVue2 from "@/views/evebtVue2";

export default {
  name: "ShowCheck",
  props:{
    data : String
  },
  data(){
    return{
      currentDate: "",
      nameID:[null],
       url:jpg1,
       imageUrl:[null],
      name:[null],
      age:[null],
      occupation:[null],
      marriage: [null],
      gender:[null],
      race:[null],
      nativePlace:[null],
      education:[null],
      department:[null],
      avatar:[null],
    }
  },
  created:function (){
    this.bbtn();
  },
  methods:{
    viewDetails(index){
      // console.log(this.name[index])
      this.$router.push({
        path:'/checkagentmessage',
        query:{
          name:this.name[index],
          age:this.age[index],
          occupation:this.occupation[index],
          marriage:this.marriage[index],
          gender:this.gender[index],
          race:this.race[index],
          nativePlace:this.nativePlace[index],
          education:this.education[index],
          department:this.department[index],
          avatar:this.avatar[index],
        }
      })
    },
    bbtn:function (){
      let j=0;
      evebtVue.$on("myfun",(message)=>{
        console.log(message[0])
        // console.log(this.imageUrl[0])
        console.log(message[1])
        console.log(message[10])
        console.log(message[11])
        for (let i=0; i<50; i++){
          this.nameID[i]=undefined;
          this.imageUrl[i]=undefined;
          // this.agent[i]=undefined;
          this.name[i]=undefined;
          this.age[i]=undefined;
          this.occupation[i]=undefined;
          this.marriage[i]=undefined;
          this.gender[i]=undefined;
          this.race[i]=undefined;
          this.nativePlace[i]=undefined;
          this.education[i]=undefined;
          this.department[i]=undefined;
          this.avatar[i]=undefined
        }
        j=0;
        this.$forceUpdate()
        for (let i=0; i<message.length; i=i+10){
          this.nameID[j]=message[i];
          this.name[j]=message[i];
          j++;
        }
        j=0;
        for (let i=9;i<message.length;i=i+10){
          this.imageUrl[j]=message[i];
          this.avatar[j]=message[i];
          j++;
        }
        j=0;
        for (let i=1;i<message.length;i=i+10){
          this.age[j]=message[i];
          this.occupation[j]=message[i+1];
          this.marriage[j]=message[i+2];
          this.gender[j]=message[i+3];
          this.race[j]=message[i+4];
          this.nativePlace[j]=message[i+5];
          this.education[j]=message[i+6];
          this.department[j]=message[i+7];
          this.avatar[j]=message[i+8];
          j++;
        }
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style scoped>
.showContainer{
  background-color: #E9EEF3;
  width: 100%;
  height: 100%;
}
.cardBox{
  display: flex;
  flex-wrap: wrap;
}

</style>