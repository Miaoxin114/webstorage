<template>
    <div class="listdetail">
        <div class="ldt">
            <div class="left">
                <div class="left_top">
                    <div class="l_t_img"><img :src="listdetail.coverImgUrl+'?param=200y200'" alt=""></div>
                    <div class="l_t_div">
                        <div class="l_t_div1"><div class="gedangbq">歌单</div>{{listdetail.name}}</div>
                        <div class="l_t_div2">2020-01-30 创建</div>
                        <div class="l_t_div3">
                            标签: 
                            <div v-for="(item,index) in listdetail.tags" :key="index" class="ltd3_1" style="display:inline-block"><a @click="togedang(item)" href="javascript:;">{{item}}</a></div>
                            <p class="l_t_p">介绍：{{listdetail.description}}</p>
                        </div>
                    </div>
                </div>
                <div class="left_body">
                  <div  class="right_bottom">
                      <div class="bot_top">
                          <h3>歌曲列表</h3>
                          <span class="bot_top_span1">{{listdetail.tracks.length}}首歌</span>
                          <span class="bot_top_span2">播放: <span>{{listdetail.playCount}}</span>次</span>
                      </div>
                      <ul class="bot_main">
                            <div class="bot_main_div">
                              <div class="bot_main_div1"></div>
                              <div class="bot_main_div2">标题</div>
                              <div class="bot_main_div3">时长</div>
                              <div class="bot_main_div4">歌手</div>
                            </div>
                        <li v-for="(item,index) in offsetmusic" :key="index">
                            <div class="bot_main_li bot_main_li3" :class="{bot_main_li2:(index%2==1?true:false) }">
                                <span  class="bot_main_li_span1">{{offset*24+index+1}}</span>
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
                <div class="left_foot">
                    <div class="bot_top">
                          <h3>精彩评论</h3>
                          <span class="bot_top_span1">100条评论</span>
                    </div>
                    <ul class="l_f_ul">
                        <li v-for="(item,index) in offsetlistcm" :key="index">
                            <div class="l_f_li">
                            <div style="display:inline-block"><img :src="item.user.avatarUrl+'?param=50y50'" alt=""></div>
                            <div class="l_f_div1" style="display:inline-block">
                                <div class="l_f_div2">{{item.user.nickname}}:</div>
                                <div class="l_f_div3">{{item.content}}</div>
                            </div>
                            </div>
                        </li>
                    </ul>
                    <a class="but1" v-show="this.offset2>0?true:false" @click="offsetchange2(-1)" href="javascript:;"><div>上一页</div></a><a class="but1" v-show="isshow2()" @click="offsetchange2(1)" href="javascript:;"><div>下一页</div></a>
                    
                </div>
            </div>
            <div class="right">
                <div class="right_topx">
                    <div class="r_t_div1">喜欢这个歌单的人</div>
                    <ul class="r_t_ul">
                        <li v-for="(item,index) in subscribers" :key="index" class="r_t_li"><img :src="item.avatarUrl+'?param=40y40'" alt=""></li>
                    </ul>
                </div>
                <div class="right_bodyx">
                    <div class="r_t_div1">相关推荐</div>
                    <ul class="r_t_ul1">
                        <li v-for="(item,index) in aboutlist" :key="index">
                            <div class="r_t_li1">
                                <div style="display:inline-block"><a @click="to_otherlist(item.id)" href="javascript:;"><img :src="item.coverImgUrl+'?param=50y50'" alt=""></a></div>
                                <div class="divxxx" style="display:inline-block">
                                    <div class="divxxx1"><a style="color:rgb(51,51,51)" @click="to_otherlist(item.id)" href="javascript:;">{{item.name}}</a></div>
                                    <div class="divxxx2">by {{item.creator.nickname}}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getlistdetail } from '@/api/getlistdetail.js'
import { getaboutlist } from '@/api/getaboutlist.js'
import { getlistcomment } from '@/api/getlistcomment.js'
export default {
    inject:["reload"],
    data(){
        return{
            i:0,
            offset:0,
            offset2:0,
            id:0,
            listdetail:{},
            offsetmusic:[],
            subscribers:[],
            aboutlist:[],
            listcomment:{},
            offsetlistcm:{}
        }
    },
    created(){
        console.log(this.$route.query.id);
        this.id=this.$route.query.id;
        getlistdetail(this.id).then(res=>{
            console.log(res);
            this.listdetail=res.data.playlist;
            this.offsetmusic=this.listdetail.tracks.slice(0,24);
            this.subscribers=this.listdetail.subscribers
        })
        getaboutlist(this.id).then(res=>{
            console.log(res);
            this.aboutlist=res.data.playlists;
        })
        getlistcomment(this.id).then(res=>{
            console.log(res)
            this.listcomment=res.data.comments;
            this.offsetlistcm=this.listcomment.slice(0,5);
        })
    },
    methods:{
        isshow(){
            var i=parseInt(this.listdetail.tracks.length/24);
            if(this.offset<i)
            return true
            else
            return false
        },
        isshow2(){
            var i=parseInt(this.listcomment.length/5);
            if(this.offset2<i)
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
        offsetchange(bt)
        {
            if(bt==1)
            this.offset++;
            else
            this.offset--;
            this.offsetmusic=this.listdetail.tracks.slice(this.offset*24,this.offset*24+24);
        },
        offsetchange2(bt)
        {
            if(bt==1)
            this.offset2++;
            else
            this.offset2--;
            this.offsetlistcm=this.listcomment.slice(this.offset2*5,this.offset2*5+5);
        },
        to_otherlist(id){
            this.$router.push({path:'/Fx/Listdt',query:{
                id
            }})
            this.reload();
        },
        togedang(nowlist){
            this.$router.push({path:'/Fx/Gd',query:{
                nowlist
            }})
        },
        tomusicdt(id){
            this.$router.push({path:'/Fx/Musicdt',query:{
                toid:id
            }})
        }
        
    }
}
</script>
<style scoped>
.listdetail{
    height: 1500px;
    background: rgb(245,245,245);
}
.ldt{
    width: 1000px;
    height: 1400px;
    background: rgb(255, 255, 255);
    margin: auto;
    position: absolute;
    top:102px;
    left: 260px;
}
.left{
    width: 71%;
    height: 1400px;
    float: left;
    border: 1px solid rgb(211,211,211);
}
.right{
    width: 28%;
    height: 1500px;
    float: left;
}
.left_top{
    width: 640px;
    height: 300px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 20px;
}
.left_body{
    width: 640px;
    height: 430px;
    margin: auto;
}
.left_foot{
    width: 640px;
    height: 300px;
    margin: auto;
    margin-top: 20px;
}
.right_top{
    width: 220px;
    height: 150px;
    margin: auto;
    margin-top: 10px;
}
.right_body{
    width: 220px;
    height: 450px;
    margin: auto;
    margin-top: 30px;
}
.l_t_img{
    width: 200px;
    height: 200px;
    float: left;
    margin-left: 13px;
    border: 1px solid rgb(119,119,119);
}
.l_t_div1{
    width: 400px;
    height: 60px;
    font-size: 20px;
}
.l_t_div{
    width: 400px;
    height: 300px;
    float: left;
    margin-left: 20px;
}
.ltd3_1{
    width: 60px;
    height: 20px;
    background: rgb(242,242,242);
    border: 1px solid rgb(209,209,209);
    border-radius: 15px;
    line-height: 20px;
    text-align: center;
    margin-right: 5px;
}
.ltd3_1:hover{
    background: rgb(251,251,251);
}
.ltd3_1 a{
    color: rgb(119,119,119);
    text-decoration: none;
}
.ltd3_1 a:hover{
    text-decoration: underline;
}
.gedangbq{
    background: rgb(210,26,26);
    border-radius: 2px;
    width:50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    font-size: 14px;
    display: inline-block;
    margin-right: 10px;
}
.l_t_div2{
    font-size: 12px;
    color: rgb(102,102,102);
    margin-bottom: 10px;
}
.l_t_div3,.l_t_p{
    font-size: 12.5px;
    color: rgb(102,102,102);
}
.l_t_p{
    height: 167px;
    overflow:hidden;
    text-overflow:ellipsis;
}
.right_bottom{
    width: 570px;
    height: 800px;
    padding-inline: 30px;
} 
.bot_top{
    width: 636px;
    height: 45px;
    border-bottom: 2px solid rgb(194,12,12);
    margin-left: 5px;
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
    margin-left: 0px;
    list-style-type: none;
    margin-top: 0px;
    height: auto;
    border: 1.5px solid rgb(212,212,212);
    width: 638px;
}
.bot_main_div{
    width: 690px;
    height: 33px;
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
    width: 68px;
}
.bot_main_div2{
    width: 289px;
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
.right_topx{
    width: 200px;
    height: 150px;
    margin: 20px auto;
   
}
.r_t_div1{
    width: 200px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border-bottom: 1px solid rgb(204,204,204);
    padding-bottom: 7px;
}
.r_t_ul,.r_t_ul1{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0px;
}
.r_t_li{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    margin-top: 20px;
    float: left;
}
.right_bodyx{
    width: 200px;
    margin: 20px auto;
}
.r_t_li1{
    width: 200px;
    height: 50px;
    margin: 10px 0px;
}
.r_t_li1 img{
    width: 50px;
    height: 50px;
}
.divxxx{
    position: relative;
    top: -10px;
    margin-left: 9px;
    font-size: 15px;
}
.divxxx1{
    width: 120px;
    max-width: 120px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.divxxx1 a{
    text-decoration: none;
}
.divxxx1 a:hover{
    text-decoration: underline;
}
.divxxx2{
    color: rgb(102,102,102);
    font-size: 13px;
    max-width: 80px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.l_f_ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0px;
}

.l_f_li{
    width: 640px;
    height: 80px;
    padding-bottom: 7px;
    border-bottom: 1px dotted rgb(102,102,102);
    margin: 10px 0px;
}
.l_f_li1 img{
    width: 50px;
    height: 50px;
}
.l_f_div1{
    position: relative;
    top: -10px;
    margin-left: 9px;
    font-size: 15px;
}
.l_f_div2{
    color: rgb(12,115,194);
    font-size: 12px;
}
.l_f_div3{
    width: 500px;
    max-width: 500px;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 12px;
    margin-left: 20px;
    max-height: 31px;
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