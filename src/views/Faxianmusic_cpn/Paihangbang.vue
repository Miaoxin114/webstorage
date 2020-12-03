<template>
    <div class="paihangbang">
        <div class="body">
            <div :key="left_key" class="body_left">
                <div class="left_fz">
                <h4 class="body_left_d">云音乐特色榜</h4>
                <ul class="body_left_ul">
                    <li v-for="(item,index) in offset_lists"  :key="index" :class="{ishere:nowindex==index?true:false}" class="body_left_li">
                      <a @click="isclick(index,item.id)" class="body_left_li_a" href="javascript:;">
                      <div class="body_left_li_dd">
                        <img :src="item.coverImgUrl+'?param=40y40'" alt="">
                        <h4>{{item.name}}</h4>
                        <p>{{item.updateFrequency}}</p>
                      </div>
                      </a>
                    </li>
                </ul>
                </div>
            </div>
            <div class="body_right">
                <div class="right_top">
                    <img :src="this.listdetail.coverImgUrl+'?param=150y150'" alt="">
                    <div class="top_imgright">
                        <div>
                            <h2>{{this.listdetail.name}}</h2>
                            <span>{{this.listdetail.description}}</span>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div :key="right_key" class="right_bottom">
                    <div class="bot_top">
                        <h3>歌曲列表</h3>
                        <span class="bot_top_span1">{{nowmusic.length}}首歌</span>
                        <span class="bot_top_span2">播放: <span>6562346</span>次</span>
                    </div>
                    <ul class="bot_main">
                        <div class="bot_main_div">
                            <div class="bot_main_div1"></div>
                            <div class="bot_main_div2">标题</div>
                            <div class="bot_main_div3">时长</div>
                            <div class="bot_main_div4">歌手</div>
                        </div>
                        <li v-for="(item,index) in offset_nowmus" :key="index">
                            <div class="bot_main_li" :class="{bot_main_li2:(index%2==1?true:false),bot_main_li3:((offset*24+index)>=3?true:false) }">
                                <span :class="{bot_main_li_spanx:((offset*24+index)>=3?true:false)}" class="bot_main_li_span1">{{offset*24+index+1}}</span>
                                <img v-if="(offset*24+index)<3?true:false"  class="bot_main_li_img1" :src="item.al.picUrl+'?param=50y50&quality=100'" alt="">
                                <img  class="bot_main_li_img2" src="@/assets/播放.png" alt="">
                                <a @click="tomusicdt(item.id)" href="javascript:;" class="bot_main_li_span2">{{item.name}}</a>
                                <span class="bot_main_li_span3">{{gettime(item.dt)}}</span>
                                <span class="bot_main_li_span4">{{item.ar[0].name}}</span>
                            </div>
                        </li>
                    </ul>
                    <a class="but1" v-show="this.offset>0?true:false" @click="offsetchange(-1)" href="javascript:;"><div>上一页</div></a><a class="but1" v-show="isshow()" @click="offsetchange(1)" href="javascript:;"><div>下一页</div></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getalllist } from '@/api/getalllist.js'
import { getlistmusic } from '@/api/getlistmusic.js'
export default {
    data(){
        return{
            offset:0,
            listdetail:null,
            lists:[],
            offset_lists:[],
            nowindex:0,
            nowid:19723756,
            nowmusic:[],
            offset_nowmus:[],
            right_key:0,
            left_key:0
        }
    },
    methods:{
        isshow(){
            var i=parseInt(this.nowmusic.length/24);
            if(this.offset<i)
            return true
            else
            return false
        },
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
        isclick(index,id){
            console.log("id:"+id)
            this.nowindex=index;
            this.nowid=id;
            getlistmusic(id).then(res=>{
            console.log(res);
            this.listdetail=res.data.playlist;
            this.nowmusic=res.data.playlist.tracks;
            this.offset_nowmus=res.data.playlist.tracks.slice(0,24);
            this.offset=0;
            this.key+=1;
            })
        },
        offsetchange(bt)
        {
            if(bt==1)
            this.offset++;
            else
            this.offset--;
            this.offset_nowmus=this.nowmusic.slice(this.offset*24,this.offset*24+24);
        },
        tomusicdt(id){
            this.$router.push({path:'/Fx/Musicdt',query:{
                toid:id
            }});
        }
    },
    created(){
        var i=this.$route.query.toindex;
        var id=this.$route.query.toid;
        
        if(i+1)
        {
            this.nowindex=i;
            this.nowid=id;
        }
        getalllist().then(res=>{
            console.log(res)
            this.lists=res.data.list;
            this.offset_lists=res.data.list.slice(0,18);
            this.left_key+=1;
        }).catch(err=>{
        console.log(err)
      })

        getlistmusic(this.nowid).then(res=>{
            console.log(res);
            this.listdetail=res.data.playlist;
            this.nowmusic=res.data.playlist.tracks;
            this.offset_nowmus=res.data.playlist.tracks.slice(0,24);
            this.right_key+=1;
        }).catch(err=>{
        console.log(err)
      })
    },
    mounted(){
    }
}
</script>
<style scoped>
.paihangbang{
    height: 1300px;
    background: rgb(245,245,245);
}
.body{
    width: 980px;
    height: 1230px;
    background: rgb(255,255,255);
    margin-left: 260px;
    border: 1px solid rgb(211,211,211);
    position: relative;
}
.body_left{
    width: 240px;
    height: 1200px;
    background: rgb(249,249,249);
    border: 1px solid rgb(211,211,211);
    position: relative;
}
.left_fz{
    position: absolute;
    top: 0px;
}
.body_right{
    width: 540px;
    position: absolute;
    top: 0px;
    left: 240px;
}
.ishere{
    background: rgb(200,200,200)!important;
}
.right_top{
    width: 660px;
    height: 160px;
    padding: 40px;
    border: 1px solid rgb(211,211,211);
}
.right_top img,.top_imgright{
    float: left;
}
.top_imgright{
    margin-left: 26px;
    width: 450px;
}
.top_imgright h2{
    line-height: 24px;
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 3px;
}
.top_imgright span{
    color: #666;
    font-size: 12px;
    width: 450px;
    max-width: 450px;
    overflow:hidden;
    text-overflow:ellipsis;
}
.right_bottom{
    width: 570px;
    height: 800px;
    padding-inline: 30px;
} 
.right_top img{
    width: 150px;
    height: 150px;
}

.body_left_li{
    background:rgb(244,244,244)
}
.body_left_li:hover{
    background: rgb(211,211,211);
}
.body_left_li img{
    width: 40px;
    height: 40px;
    margin-top: 12px;
    margin-left: 17px;
}
.body_left_ul{
    list-style-type: none;
    margin: 0px 0px;
    padding-left: 0px;
}
.body_left_li_a div{
    height: 62px;
}
.body_left_li_a div *{
    float: left;
}
.body_left_li_a h4{
    margin-top: 10px;
    margin-left: 16px;
    margin-bottom: 0px;
    color: black;
    font-weight: bold;
    font-size: 14px;
    width: 110px;
    max-width: 110px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.body_left_li_a p{
    font-size: 12px;
    margin-top: 8px;
    color: rgb(153,153,153);
    margin-bottom: 0px;
    margin-left: 18px;
}
.body_left_d{
    padding:10px 10px 10px 15px;
    font-size: 14px;
    color: #000;
    margin-bottom: 0px;
    font-family: simsun,\5b8b\4f53;
}
.body_left_li_a h4{
    font-size: 13px;
    font-weight: normal;
    margin-right: 50px;
}
.bot_top{
    width: 690px;
    height: 45px;
    border-bottom: 2px solid rgb(194,12,12);
    margin-left: 22px;
}
.bot_top h3{
    float: left;
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 0px;
}
.bot_top_span1{
    font-size: 12px;
    margin-left: 10px;
    color: rgb(102,102,102);
    position: relative;
    top: 22px;
}
.bot_top_span2{
    float: right;
    font-size: 12px;
    color:rgb(102,102,102);
    margin-top: 22px;
}
.bot_top_span2 span{
    color: rgb(194,12,12);
    font-weight: bold;
}
.bot_main{
    padding-left: 0px;
    margin-left: 22px;
    list-style-type: none;
    margin-top: 0px;
    height: auto;
    border: 1.5px solid rgb(212,212,212);
    width: 688px;
;
}
.bot_main_div{
    width: 690px;
    height: 35px;
    margin-bottom: 3px;
}
.bot_main_div *{
    float: left;
    border: 1px solid rgb(212,212,212);
    background: rgb(240,240,240);
    height: 35px;
    font-size: 12px;
    line-height: 35px;
    color: rgb(102,102,102);
    padding-left: 7px;
}
.bot_main_div1{
    width: 78px;
}
.bot_main_div2{
    width: 330px;
}
.bot_main_div3{
    width: 78px;
}
.bot_main_div4{
    width: 168px;
}
.bot_main_li{
    border-right: 1px solid rgb(212,212,212);
    font-size: 12px;
    width: 689px;
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
    margin-right: 122px;
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
    left: 433px;
}
.bot_main_li_span4{
    position: absolute;
    left: 520px;
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