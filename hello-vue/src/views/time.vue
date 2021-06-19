<template>
  <div class="clock">
    <div class="scale" v-for="item in number" :vaule="number.ti" :key="item">
      {{item.ti}}
    </div>
    <div class="second"></div>
    <div class="minute"></div>
    <div class="hour"></div>
  </div>
</template>

<script>
export default {
  name: "time",
  data(){
    return{
      number:[{
        ti:'1'
      },{
        ti:'2'
      },
        {
          ti:'3'
        },
        {
          ti:'4'
        },{
          ti:'5'
        },{
          ti:'6'
        },{
          ti:'7'
        },{
          ti:'8'
        },{
          ti:'9'
        },{
          ti:'10'
        },{
          ti:'11'
        },{
          ti:'12'
        },]
    }
  }
}
</script>

<style scoped>
.clock{
  height: 500px;
  width: 500px;
  border-radius: 50%;
  border: 1px solid black;
  font-size: 30px;
  position: relative;
}
.scale{
  transform: translate(-50%,-50%);
}
.second{
  width: 2px;
  height: 200px;
  background-color: black;
  position: absolute;
  top: 50px;
  left: 249px;
  transform-origin: center 200px;
}
.minute{
  width: 4px;
  height: 150px;
  background-color: black;
  position: absolute;
  top: 100px;
  left: 248px;
  transform-origin: center 150px;
}
.hour{
  width: 4px;
  height: 110px;
  background-color: black;
  position: absolute;
  top: 140px;
  left: 247px;
  transform-origin: center 110px;
}
</style>