
<template>
  <div>
    <div class="mdt1">
        <ul class="ull">
        <li v-for="(item,index) in offsetmusics" :key="index">
            <div class="bot_main_li bot_main_li3" :class="{bot_main_li2:(index%2==1?true:false) }">
                <span  class="bot_main_li_span1">{{offset*24+index+1}}</span>
                <img  class="bot_main_li_img2" src="@/assets/播放.png" alt="">
                <a @click="pushtomusicdt(item.id)" href="javascript:;" class="bot_main_li_span2">{{item.name}}</a>
                <span class="bot_main_li_span3">{{gettime(item.dt)}}</span>
                <span class="bot_main_li_span4">{{item.ar[0].name}}</span>
            </div>
        </li>
         <a class="but1" v-show="this.offset>0?true:false" @click="offsetchange(-1)" href="javascript:;"><div>上一页</div></a><a class="but1" v-show="isshow()" @click="offsetchange(1)" href="javascript:;"><div>下一页</div></a>
        </ul>
    </div>
  </div>
</template>
<script>
import { getsongs } from '@/api/getmusiciandt.js'
export default {
  data() {
    return {
      offset:0,
      id:0,
      musics:[],
      offsetmusics:[]
    };
  },
  created() {
    this.id=this.$route.query.id;
    getsongs(this.id).then(res=>{
        console.log(res)
        this.musics=res.data.songs;
        this.offsetmusics=this.musics.slice(0,24);
    })
  },
  methods: {
      gettime(time)
        {
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
        },
         isshow(){
            var i=parseInt(this.musics.length/24);
            if(this.offset<i)
            return true
            else
            return false
        },
        offsetchange(bt)
        {
            if(bt==1)
            this.offset++;
            else
            this.offset--;
            this.offsetmusics=this.musics.slice(this.offset*24,this.offset*24+24);
        },
        pushtomusicdt(id){
            this.$router.push({path:'/Fx/Musicdt',query:{
                toid:id
            }})
        },
  }
};
</script>
<style scoped>
.mdt1 {
  width: 640px;
  height: 500px;
}
.bot_main_li{
    border-right: 1px solid rgb(212,212,212);
    font-size: 12px;
    width: 638px;
    background: rgb(248,248,248);
    color: rgb(51,51,51);
    position: relative;
    line-height: 70px;
    height: 70px;
}
.bot_main_li2{
    background: rgb(255,255,255)!important;
}
.bot_main_li3{
    height: 30px!important;
    line-height: 30px!important;
}
.bot_main_li_img1{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10px;
    left: 90px;
}
.bot_main_li_img2{
    width: 19px;
    height: 19px;
    position: relative;
    top: 4.4px;
}
.bot_main_li_span1{
    margin-left: 15px;
    margin-right: 58px;
    font-size: 14px;
    font-weight: 600;
}
.bot_main_li3 .bot_main_li_span1{
    font-size: 14px!important;
    color: rgb(102,102,102);
    font-weight: normal;
}
.bot_main_li_span3{
    position: absolute;
    left: 380px;
}
.bot_main_li_span4{
    position: absolute;
    left: 470px;
}
.bot_main_li_spanx{
    margin-right: 67px;
}
.bot_main_li_span2{
    color: rgb(51,51,51);
    text-decoration: none;
}
.bot_main_li_span2:hover{
    text-decoration: underline;
}
.ull{
    list-style-type: none;
    padding: 0px;
}
.but1,.bot_main_li_span2{
    color: black;
    text-decoration: none;
}
.but1:hover,.bot_main_li_span2:hover{
    text-decoration: underline;
}
.but1{
    font-size: 14px;
    margin-left: 168px;
}
.but1 div{
     width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    background: rgb(194,12,12);
    border-radius: 3px;
    display: inline-block;
}
</style>