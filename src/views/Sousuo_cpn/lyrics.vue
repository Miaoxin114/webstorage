<template>
  <div>
    <div class="lyrics">
      <ul class="bot_main">
        <li v-for="(item,index) in songs" :key="index">
          <div class="bot_main_li bot_main_li3" :class="{bot_main_li2:(index%2==1?true:false) }">
            <span  class="bot_main_li_span1">{{offset*6+index+1}}</span>
            <img  class="bot_main_li_img2" src="@/assets/播放.png" alt="">
            <a @click="tomusicdt(item.id)" href="javascript:;" class="bot_main_li_span2"><div>{{item.name}}</div></a>
            <span class="bot_main_li_span3">{{item.artists[0].name}}</span>
            <span class="bot_main_li_span4">{{item.album.name}}</span>
            <span class="bot_main_li_span5">{{gettime(item.duration)}}</span>
          </div>
          <div :class="{zhangkai:isall&&index==allindex}" v-html="trans(item.lyrics.txt)" class="lyrics_txt"></div> 
          <a class="zs_btn" @click="isclick(index)" href="javascript:;">{{(isall&&index==allindex)?'收起':'展开'}}</a>
        </li>
      </ul>
      <a class="but1" v-show="this.offset>0?true:false" @click="offsetchange(-1)" href="javascript:;"><div>上一页</div></a><a class="but1" v-show="isshow()" @click="offsetchange(1)" href="javascript:;"><div>下一页</div></a>
    </div>
  </div>
</template>
<script>
import { getsearch } from '@/api/getsearch.js'
export default {
  data() {
    return {
      type:1006,
      content:'',
      songs:[],
      offset:0,
      isall:false
    };
  },
  created() {
    if(this.$route.query.type)
      this.type=this.$route.query.type;
      this.content=this.$route.query.content;
      console.log(this.type,this.content);
      getsearch({
      keywords:this.content,
      limit:6,
      offset:0,
      type:this.type,
      allindex:-1
    }).then(res=>{
      console.log(res)
      this.songs=res.data.result.songs;
    })
  },
  computed:{
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
        tomusicdt(id){
            this.$router.push({path:'/Fx/Musicdt',query:{
                toid:id
            }})
        },
        isshow(){
            if(this.songs.length<6)
            return false
            else
            return true
        },
        offsetchange(bt)
        {
            if(bt==1)
            this.offset++;
            else
            this.offset--;
            getsearch({
              keywords:this.content,
              limit:6,
              offset:this.offset*6,
              type:this.type
            }).then(res=>{
             console.log(res)
              this.songs=res.data.result.songs;
            })
            this.isall=false;
            this.allindex=-1;
        },
    trans(txt)
    {
      var txt1=txt.replace(/\n/g,"<br>")
      return txt1;
    },
    isclick(index){
      this.isall=!this.isall;
      this.allindex=index;
    }
  }
};
</script>
<style scoped>
.bot_main{
    padding-left: 0px;
    margin-left: 0px;
    list-style-type: none;
    margin-top: 0px;
    height: auto;
    border: 1.5px solid rgb(212,212,212);
    width: 897px;
}
.bot_main_li{
    border-right: 1px solid rgb(212,212,212);
    font-size: 12px;
    width: 896px;
    background: rgb(248,248,248);
    color: rgb(51,51,51);
    position: relative;
    line-height: 70px;
    height: 70px;
}
.bot_main_li3:hover{
    background: rgb(230,230,230)!important;
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
    margin-right:100px;
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
    left: 385px;
}
.bot_main_li_span4{
    position: absolute;
    left: 560px;
}
.bot_main_li_span5{
    position: absolute;
    left: 805px;
}
.bot_main_li_spanx{
    margin-right: 67px;
}
.bot_main_li_span2{
    color: rgb(51,51,51);
    text-decoration: none;
}
.bot_main_li_span2 div{
    display: inline-block;
    width: 270px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    height: 20px;
}
.bot_main_li_span2:hover{
    text-decoration: underline;
}
.but1,.bot_main_li_span2{
    color: black;
    text-decoration: none;
}
.but1:hover{
    text-decoration: underline;
}
.but1{
    font-size: 14px;
    margin-left: 245px;
}
.lyrics_txt{
  width: 840px;
  margin-left: 55px;
  margin-top: 10px;
  height: 130px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 12px;
  color: rgb(102,102,102)
}
.zhangkai{
  height: auto!important;
  overflow: visible!important;
  white-space: normal!important;
}
.zs_btn{
  margin-left: 55px;
  color: #0c73c2;
  text-decoration: none;
  font-size: 12px;
}
.zs_btn:hover{
  text-decoration: underline;
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
