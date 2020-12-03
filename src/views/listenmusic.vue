<template>
  <div>
    <div class="listenmusic">
      <div class="ltm">
        <div class="title">{{title}}</div>
        <div class="music_img">
        <img ref="musicimg" :src="song.al.picUrl+'?param=240y240'" alt="">
        </div>
        <span class="playtime">{{gettime}}</span><span class="musicsize">/{{getsize()}}</span>
        <div id="bbody" style="width: 505px;" >
          <div id="allprogress" style="width: 500px;">
              <div id="nowprogress" style="width: 0px;" >
                  <div id="btn"></div>
              </div>
          </div>
          <audio :src="musicurl.url" ref="audio"></audio>
        </div>
        <div class="contrel">
          <a ref="replay" href="javascript:;"><img class="relisten" src="@/assets/重播.png" alt=""></a>
          <a ref="play" href="javascript:;"><img class="bofang" :src="isplay?require('../assets/暂停.png'):require('../assets/播放.png')" alt=""></a>
          <a ref="shengying" href="javascript:;"><img class="shengying" src="@/assets/shengying.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getmusicdt } from '@/api/getmusicdt.js'
import { getmusicurl } from '@/api/getmusicdt.js'

export default {
  data() {
    return {
      id:0,
      song:{},
      bfq:{
        offsetx:0,
        minlength:0,
        maxlength:500,
        nowlength:0
      },
      title:'',
      musicurl:{},
      isplay:false,
      time:0,
      jiaodu:0
    };
  },
  computed:{
    gettime()
        {
            var hour=parseInt(this.time/60);
            var min=this.time%60;
            var hours=""+hour;
            var mins=""+min;
            if(hour<10)
            {
                hours="0"+hour;
            }
            if(min<10)
            {
                mins="0"+min;
            }
            return hours+":"+mins;
        }
  },
  created() {
    this.id=this.$route.query.id;
    console.log("musicid:"+this.id)
    getmusicdt(this.id).then(res=>{
      console.log(res)
      this.song=res.data.songs[0];
      var artists='';
      for(var i=0;i<this.song.ar.length;i++)
      artists=artists+'-'+this.song.ar[i].name;
      this.title=this.song.name+"-"+artists;
      this.time=0;
    })
    getmusicurl(this.id).then(res=>{
      console.log(res)
      this.musicurl=res.data.data[0];
    })
  },
  mounted() {
    setTimeout(() => {
      var changetime;
      var runimg;
      var musicimg=this.$refs.musicimg;
      var nowprogress=document.getElementById('nowprogress');
    var allprogress=document.getElementById('allprogress');
    var buttondiv=document.getElementById('btn');
    var audio=this.$refs.audio;
    var play=this.$refs.play;
    var replay=this.$refs.replay;
    console.log(nowprogress,allprogress,buttondiv,"xx")
    var t=this;
    this.bfq.offsetx=486.5;
    this.bfq.minlength=0;
    this.bfq.maxlength=allprogress.offsetWidth;
    this.bfq.nowlength=nowprogress.offsetWidth;
    console.log(this.bfq.minlength,this.bfq.maxlength,this.bfq.nowlength);
    var settime=function(){
      var p=t.bfq.nowlength/t.bfq.maxlength;
      var time0=parseInt(t.song.dt/1000);
      var time1=parseInt(time0*p);
      t.time=time1;
      // console.log(time1);
      audio.currentTime=time1;
    }
    var changewidth=function(){
      var time=audio.currentTime;
      var p=time/(t.song.dt/1000);
      var width=parseInt(t.bfq.maxlength*p);
      // console.log('width:'+width)
      t.bfq.nowlength=width;
      nowprogress.style.width=width+'px';
    }
             var move=function(e2){
                    if(t.isplay)
                    audio.pause();
                    console.log(e2)
                    if(e2.clientX-t.bfq.offsetx<0)
                    {
                        t.bfq.nowlength=0;
                    }else if(e2.clientX-t.bfq.offsetx>t.bfq.maxlength){

                        t.bfq.nowlength=500;
                    }else{
                        t.bfq.nowlength=e2.clientX-t.bfq.offsetx;
                        // console.log(3)
                    }
                    nowprogress.style.width=t.bfq.nowlength+'px';
                    console.log(t.bfq.nowlength)
                    settime();
                }
    buttondiv.addEventListener("mousedown",function(e1){
                // console.log(e1)
                e1.preventDefault();
                document.addEventListener("mousemove",move)
            })
            document.addEventListener("mouseup",function(){
                console.log("up")
                document.removeEventListener("mousemove",move)
                if(t.isplay)
                audio.play();
                
            })
    play.addEventListener('click',function(){
      if(!t.isplay)
      {
         t.isplay=true;
        changetime=setInterval(() => {
          t.time=parseInt(audio.currentTime); 
          changewidth();
          if(t.bfq.nowlength==t.bfq.maxlength)
          {
            audio.pause();
            t.isplay=false;
            clearInterval(changetime);
            clearInterval(runimg);
            t.jiaodu=0;
            musicimg.style.transform = 'rotate('+t.jiaodu+'deg)'
            audio.currentTime=0;
            nowprogress.style.width=0;
            t.bfq.nowlength=0;
            t.time=0;
          }
        }, 500);
        audio.play();
       runimg=setInterval(() => {
         musicimg.style.transform = 'rotate('+t.jiaodu+'deg)'
         t.jiaodu+=0.5;
         if(t.jiaodu>360)
         t.jiaodu=0;
       }, 100);
      }
      else
      {
        audio.pause();
        t.isplay=false;
       clearInterval(changetime);
       clearInterval(runimg);
       t.jiaodu=0;
       musicimg.style.transform = 'rotate('+t.jiaodu+'deg)'
      }
    })
    replay.addEventListener('click',function(){
      if(t.bfq.nowlength>0)
      {
        t.bfq.nowlength=0;
        audio.currentTime=0;
        t.time=0;
        nowprogress.style.width=t.bfq.nowlength+'px';
      }
    })
    }, 200);
        }
  ,
  methods: {
    getsize()
        {
            var time=this.song.dt;
            var hour=parseInt(time/60000);
            var min=parseInt(time/1000)%60;
            var hours=""+hour;
            var mins=""+min;
            if(hour<10)
            {
                hours="0"+hour;
            }
            if(min<10)
            {
                mins="0"+min;
            }
            return hours+":"+mins;
        }
  }
};
</script>
<style scoped>
.listenmusic{
  width: 100%;
  height: 655px;
  background-image: url(../assets/listenmusicbg2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.ltm{
  width: 760px;
  height: 610px;
  margin-left: 364px;
  background: rgba(60,60,60,0.6);
  position: relative;
  top: 20px;
  border: 2px solid rgba(100,100,100,0.2);
  border-radius: 4px;
   filter:progid:DXImageTransform.Microsoft.Shadow(color=rgb(60,60,60),direction=120,strength=4);

   -moz-box-shadow: 2px 2px 10px rgb(60,60,60);

   -webkit-box-shadow: 2px 2px 10px rgb(60,60,60);

   box-shadow:2px 2px 10px rgb(60,60,60);
}
.contrel{
  margin-left: 240px;
  position: absolute;
  bottom: 10px;

}
.music_img{
  width: 370px;
  height: 370px;
  margin: auto;
  background-image: url(../assets/mx.png);
  background-size: 100% 100%;
}
.music_img img{
  border-radius: 150px;
  margin-top: 66px;
  margin-left: 65px;
}
.bofang{
  width: 120px;
  height: 120px;
  margin-left: 50px;
  margin-right: 50px;
}
#bbody{
    height: 4px;
    background: rgba(10,10,10,0.4);
    border-radius: 2px;
    margin-left: 120px;
}
#allprogress{  
    height: 4px;
    margin: 0px 2.5px;
    border-radius: 2px;
    position: relative;
}
#nowprogress{
    height: 4px;
    background: rgb(194,12,12);
}
#btn{
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background:rgb(194,12,12);
    border: 4px solid black;
    float: right;
    position: relative;
    top: -6px;
    left: 7px;
}
audio{
    position: absolute;
    top: 100px;
    left: 450px;
}
.title{
  width: 350px;
  margin: auto;
  font-size: 18px;
  text-align: center;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  text-overflow:ellipsis;
  position: relative;
  left: -55px;
  margin-top: 20px;
  border-radius: 6px;
  background: rgba(10,10,10,0.4);
  padding-left: 10px;
  padding-right: 10px;
  color: rgb(212,215,210);
  filter:progid:DXImageTransform.Microsoft.Shadow(color=rgb(60,60,60),direction=120,strength=4);

   -moz-box-shadow: 2px 2px 10px rgb(60,60,60);

   -webkit-box-shadow: 2px 2px 10px rgb(60,60,60);

   box-shadow:2px 2px 10px rgb(60,60,60);
}
.playtime{
  margin-left: 130px;
}
.playtime,.musicsize{
  position: relative;
  top: -3px;
}
</style>
