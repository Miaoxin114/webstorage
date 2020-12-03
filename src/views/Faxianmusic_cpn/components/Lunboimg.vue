<template>
  <div id="imgchangediv">
    <div ref="imgdiv" id="imgdiv">
      <img class="img1" src="@/assets/img2.jpg" style="display: block;"/>
      <img class="img1" src="@/assets/img1.jpg" style="display: none;"/>
      <img class="img1" src="@/assets/img3.jpg" style="display: none;"/>
      <img class="img1" src="@/assets/img4.jpg" style="display: none;"/>
      <img class="img1" src="@/assets/img5.jpg" style="display: none;"/>
      <img class="img1" src="@/assets/img6.jpg" style="display: none;"/>
      <img class="img1" src="@/assets/img7.jpg" style="display: none;"/>
      <img class="img1" src="@/assets/img8.jpg" style="display: none;"/>
    </div>
    <div id="imgyuan">
      <font class="font1"></font>
      <font class="font1"></font>
      <font class="font1"></font>
      <font class="font1"></font>
      <font class="font1"></font>
      <font class="font1"></font>
      <font class="font1"></font>
      <font class="font1"></font>
    </div>
    <div id="back" class="go_back">
      <a ref="backbtn" href="javascript:;"><img src="@/assets/back.png" alt=""></a>
    </div>
    <div id="go" class="go_back go">
      <a ref="gobtn" href="javascript:;"><img src="@/assets/go.png" alt=""></a>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      start:null
    }
  },
  created(){
    this.$nextTick(()=>{
      setTimeout(() => {
        var index = 0;
    var t=this;
    t.start = setInterval(nextimg, 4000);
    var imgdiv =this.$refs.imgdiv;
    var backbtn=this.$refs.backbtn;
    var gobtn=this.$refs.gobtn;
    imgdiv.addEventListener("mouseover",function(){
      clearInterval(t.start);
      if(!t.start)
      console.log('定时器已删除')
    })
    imgdiv.addEventListener("mouseout",function(){
      t.start = setInterval(nextimg, 4000);
    })
    backbtn.addEventListener('click',backimg);
    gobtn.addEventListener('click',goimg);
    function nextimg(){
      index++;
      if(index>7)
      {
        index = 0;
      }
      changeimg(index);
    }
    function backimg(){
      console.log("点击back");
      index--;
      if(index<0)
      {
        index=7;
      }
      changeimg(index);
    }
    function goimg(){
      console.log("点击go");
      index++;
      if(index>7)
      {
        index=0;
      }
      changeimg(index);
    }
    function changeimg(index){
      console.log(index)
    var list=document.getElementsByClassName('img1');
    var list1=document.getElementsByClassName('font1');
    // console.log(list);
    // console.log(list1);
    for(var i=0;i<list.length;i++){
        list[i].style.display="none";
        list1[i].style.backgroundColor='rgb(188,180,176)';
    }
    list[index].style.display='block';
    list1[index].style.backgroundColor='red';
    }
      }, 100);
    })
    
  },
  methods:{

  },
  beforeDestroy(){
    clearInterval(this.start)
    if(!this.start)
      console.log('定时器已删除')
  }
  }
</script>
<style scoped>
#imgchangediv{
  width: 100%;
  height: 330px;
  text-align: center;
  background-image: url(../../../assets/backg1.jpg);
  background-size: 100% 100%;
  position: relative;
}
#imgdiv{
  height: 100%;
  width:1001px;
  margin-left: 300px;
  position: relative;
  left: -86px;
  }
  #imgdiv img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0px;
    left: 27px;
  }
#imgyuan{
    width: 350px;
    height: 20px;
    margin: 0 auto;
    position: relative;
    top: -40px;
}
/*
 *每一个小圆点
 * */
#imgyuan font{
  width: 6px; 
  height: 6px;
  border-radius: 50%;
  margin-right: 35px;
  margin-top: 4px;
  display: block;
  float: left;
  background-color: rgb(188,180,176);
}
.go_back{
  width: 40px;
  height: 80px;
  border-radius: 5%;
}
.go_back:hover{
  background: rgba(36,36,36,0.4);
}
.go_back img{
  width: 100%;
  height: 100%;
}
#back{
  position: absolute;
  top: 115px;
  left: 260px;
}
#go{
  position: absolute;
  top: 115px;
  right: 280px;
}
</style>