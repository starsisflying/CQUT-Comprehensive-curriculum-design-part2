<template>
  <div id="wrap" :style="{ height: screenHeight + 'px' }">
    <div id="main" :style="{ top: nowTop + 'px' }">
      <ul id="pageUl" type="circle">
        <li id="pageUlLi1" class="pageUlLi" :class="{'active': curIndex == 1}">&nbsp;</li>
        <li id="pageUlLi2" class="pageUlLi" :class="{'active': curIndex == 2}">&nbsp;</li>
        <li id="pageUlLi3" class="pageUlLi" :class="{'active': curIndex == 3}">&nbsp;</li>
        <li id="pageUlLi4" class="pageUlLi" :class="{'active': curIndex == 4}">&nbsp;</li>
        <li id="pageUlLi5" class="pageUlLi" :class="{'active': curIndex == 5}">&nbsp;</li>
        <li id="pageUlLi6" class="pageUlLi" v-bind:class="{'active': curIndex==6}"></li>
      </ul>

      <div style="background-color: #E9EEF3" id="page1" class="page">
        <div class="block">
<!--          <span class="demonstration">默认 Hover 指示器触发</span>-->
<!--          <el-carousel height="150px">-->
<!--            <el-carousel-item v-for="item in 4" :key="item">-->
<!--              <h3 class="small">{{ item }}</h3>-->
<!--            </el-carousel-item>-->
<!--          </el-carousel>-->
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="item in imgdata" :key="item.value">
<!--              <h3 class="medium">{{ item }}</h3>-->
              <img :src="item.src" width="100%" height="100%" object-fit="cover">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div style="background-color: #E9EEF3" id="page2" class="page">
        <div class="news-block">
          <ul class="ulBOX">
            <li class="news-item">
              <div class="news-category">
                活动
              </div>
              <div class="news-date">
                202010.25
              </div>
              <div class="news-text">
                <a href="" class="news-text-a">[限定寻访·庆典]【勿忘我】限时寻访即将开启 </a>
              </div>
              <div class="news-more">
                READ MORE+
              </div>
            </li>
            <li class="news-item">
              <div class="news-category">
                公告
              </div>
              <div class="news-date">
                2020.10.25
              </div>
              <div class="news-text">
                <a href="" class="news-text-a">  [明日方舟]【公开招募】标签强制刷新通知</a>
              </div>
              <div class="news-more">
                READ MORE+
              </div>
            </li>
            <li class="news-item">
              <div class="news-category">
                活动
              </div>
              <div class="news-date">
                2020.10.25
              </div>
              <div class="news-text">
                <a href="" class="news-text-a">[活动预告]【感谢庆典】限时活动即将开启 </a>
              </div>
              <div class="news-more">
                READ MORE+
              </div>
            </li>
            <li class="news-item">
              <div class="news-category">
                新闻
              </div>
              <div class="news-date">
                2020.10.20
              </div>
              <div class="news-text">
                <a href="" class="news-text-a">《明日方舟》制作组通讯#6期</a>
              </div>
              <div class="news-more">
                READ MORE+
              </div>
            </li>
            <li class="news-item">
              <div class="news-category">
                活动
              </div>
              <div class="news-date">
                2020.10.09
              </div>
              <div class="news-text">
                <a href="#" class="news-text-a"> [活动预告]SideStory【玛利亚·临光】即将开启</a>
              </div>
              <div class="news-more">
                READ MORE+
              </div>
            </li>
            <li class="news-item">
              <div class="news-category">
                公告
              </div>
              <div class="news-date">
                2020.10.22
              </div>
              <div class="news-text">
                <a href="" class="news-text-a"> [明日方舟]10月22日16:00临时闪断更新公告</a>
              </div>
              <div class="news-more">
                READ MORE+
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div style="background-color: #E9EEF3" id="page3" class="page">

      </div>
      <div style="background-color: #E9EEF3" id="page4" class="page">

      </div>
      <div style="background-color: #E9EEF3" id="page5" class="page">

      </div>
      <div style="background-color: #E9EEF3" id="page6" class="page">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      screenWeight: 0,    // 屏幕宽度
      screenHeight: 0,    // 屏幕高度
      index: 1,        // 用于判断翻页
      curIndex: 1,      // 当前页的index
      startTime: 0,      // 翻屏起始时间
      endTime: 0,       // 上一次翻屏结束时间
      nowTop: 0,       // 翻屏后top的位置
      pageNum: 0,       // 一共有多少页
      main: Object,
      obj: Object,
      imgdata:[
      //       src:require('../assets/Login2.jpg')
      // },{
      //       src: require('../assets/Loginbackguound.jpg')
      // },{
      //       src:require('../assets/login3.gif')
      // },
      {
            src:require('../assets/no1.jpg')
      },{
            src:require('../assets/no5.png')
      },{
            src:require('../assets/no2.png')
      },{
            src:require('../assets/no3.jpg')
      }]
    }
  },
  mounted(){
    this.screenWeight = document.documentElement.clientWidth;//可见区域宽度
    // this.screenHeight=document.style.height;
    this.screenHeight = document.documentElement.clientHeight-122;// 可见区域高度

    this.main = document.getElementById("main");
    this.obj = document.getElementsByTagName("div");
    for (let i = 0; i < this.obj.length; i++) {
      if (this.obj[i].className == 'page') {
        this.obj[i].style.height = this.screenHeight + "px";
      }
    }
    this.pageNum = document.querySelectorAll(".page").length;

    // 浏览器兼容
    if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
      document.addEventListener("DOMMouseScroll", this.scrollFun, false);
    } else if (document.addEventListener) {
      document.addEventListener("mousewheel", this.scrollFun, false);
    } else if (document.attachEvent) {
      document.attachEvent("onmousewheel", this.scrollFun);
    } else {
      document.onmousewheel = this.scrollFun;
    }
  },
  methods:{
    scrollFun(event) {
      this.startTime = new Date().getTime();
      // mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
      // DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
      let delta = event.detail || (-event.wheelDelta);
      // 如果当前滚动开始时间和上次滚动结束时间的差值小于1.5s，则不执行翻页动作，这样做是为了实现类似节流的效果
      if ((this.startTime - this.endTime) > 1000) {
        if (delta > 0 && parseInt(this.main.offsetTop) >= -(this.screenHeight * (this.pageNum - 2))) {
          // 向下滚动
          this.index++;
          this.toPage(this.index);
        }else if (delta < 0 && parseInt(this.main.offsetTop) < 0) {
          // 向上滚动
          this.index--;
          this.toPage(this.index);
        }
        // 本次翻页结束，记录结束时间，用于下次判断
        this.endTime = new Date().getTime();
      }
    },
    // 翻页
    toPage(index) {
      if (index != this.curIndex) {
        let delta = index - this.curIndex;
        // console.log(this.screenHeight);
        this.nowTop = this.nowTop - delta * this.screenHeight;
        this.curIndex = index;
      }
    }
  }
}
</script>
<style >
html, body {
  height: 100%;
}
body, ul, li, a, p, div {
  /*慎删*/
  padding: 0px;
  margin: 0px;
}
#wrap {
  overflow: hidden;
  width: 100%;
}

#main {
  position: relative;
  transition:top 1.5s;
}

.page {
  /*谨删*/
  width: 100%;
  /*height: 650px!important;*/
  margin: 0;
  /*background-image: url("../assets/bg.jpg");*/
}

#pageUl {
  position: fixed;
  right: 10px;
  bottom: 50%;
}
.active{
  color: red;
}
.block{
  width:95%;
  margin:0 auto;
  position: relative;
  top: 15%;
}
.news-block{
  width: 90%;
  height: 40%;
  /*display: flex;*/
  /*flex-direction:row;*/
  margin: 0 auto;
  position: relative;
  top: 40%;
}
.ulBOX{
  display: flex;
  flex-wrap: wrap;
}
.news-item{
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
  height:150px;
  width: 33%;
  list-style-type:none;

}
.news-category{
  color: #22BBFF;
  /*font-size: 20px;*/
  position: relative;
  top: 10%;
  left: -44%;
}
.news-date{
  color: gray;
  /*font-size: 20px;*/
  position: relative;
  float: right;
  right: 4%;
  top: -10%;
}
.news-text{
  position: relative;
  /*line-height: 70px;*/
  height: 10%;
  /*text-align: center;*/
  top: 26%;
  /*margin-left: 1%;*/
  left: 10%;
}
.news-text-a{
  text-decoration: none;
  color: white;
}
.news-text-a:hover{
  background-color: #22BBFF;
}
.news-more{
  color: black;
  background-color: #22BBFF;
  float: right;
  position: relative;
  /*top: 40%;*/
  right: -15%;
  bottom: -55%;
}
</style>