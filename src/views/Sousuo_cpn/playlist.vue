<template>
  <div>
    <div class="playlist">
      <ul class="pl_ul">
        <li v-for="(item,index) in playlists" :key="index">
            <div class="bot_main_li" :class="{bot_main_li2:(index%2==1?true:false) }">
                <span class="bot_main_li_span1">{{offset*16+index+1}}</span>
                <img class="bot_main_li_img1" :src="item.coverImgUrl+'?param=50y50&quality=100'" alt="">
                <img  class="bot_main_li_img2" src="@/assets/播放.png" alt="">
                <a @click="toplaylistdt(item.id)" href="javascript:;" class="bot_main_li_span2">{{item.name}}</a>
                <span class="bot_main_li_span3">{{item.trackCount}}首</span>
                <span class="bot_main_li_span4">by {{item.creator.nickname}}</span>
            </div>
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
      type:1000,
      content:'',
      offset:0,
      playlists:[]
    };
  },
  created() {
    if(this.$route.query.type)
      this.type=this.$route.query.type;
      this.content=this.$route.query.content;
      console.log(this.type,this.content);
      getsearch({
      keywords:this.content,
      limit:16,
      offset:0,
      type:this.type
    }).then(res=>{
      console.log(res)
      this.playlists=res.data.result.playlists;
    })
  },
  methods: {
    toplaylistdt(id){
            this.$router.push({path:'/Fx/Listdt',query:{
                id:id
            }});
        },
     isshow(){
            if(this.playlists.length>=16)
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
            getsearch({
              keywords:this.content,
              limit:16,
              offset:this.offset*16,
              type:this.type
            }).then(res=>{
              console.log(res)
              this.playlists=res.data.result.playlists;
            })
        },
    
  }
};
</script>
<style scoped>
.bot_main_li{
    border-right: 1px solid rgb(212,212,212);
    font-size: 12px;
    width: 895px;
    background: rgb(247,247,247);
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
    left: 100px;
}
.bot_main_li_img2{
    width: 19px;
    height: 19px;
    position: relative;
    top: 4.4px;
}
.bot_main_li_span1{
    margin-left: 15px;
    margin-right: 160px;
    font-size: 14px;
    color: red;
    font-weight: 600;
}
.bot_main_li3 .bot_main_li_span1{
    font-size: 14px!important;
    color: rgb(102,102,102);
    font-weight: normal;
}
.bot_main_li_span3{
    position: absolute;
    left: 500px;
}
.bot_main_li_span4{
    position: absolute;
    left: 670px;
}
.bot_main_li_spanx{
    margin-right: 67px;
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
    margin-left: 200px;
}
.pl_ul{
  padding: 0px;
  margin: 0px;
  list-style-type: none;
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
