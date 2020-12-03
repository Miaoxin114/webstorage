<template>
    <div class="listdetail">
        <div class="ldt">
            <div class="left">
                <div class="left_top">
                    <div class="l_t_img">
                    <img :src="musicdt.al.picUrl+'?param=200y200'" alt="">
                    <a v-show="canuse" @click="tolisten(musicdt.id)" class="start" href="javascript:;"><div>播放</div></a>
                    <div class="canlisten">{{(canuse?'(歌曲可播放)':'(这首歌未获得版权，无法播放。)')}}</div>
                    </div>
                    <div class="l_t_div">
                        <div class="l_t_div1"><div class="gedangbq">单曲</div>{{musicdt.name}}</div>
                        <div class="l_t_div3">
                            <p>歌手：<a @click="tomusiciandt(musicdt.ar[0].id)"  href="javascript:;">{{musicdt.ar[0].name}}</a></p>
                            <p>所属专辑：<a @click="toalbumdt(musicdt.al.id)" href="javascript:;">{{musicdt.al.name}}</a></p>
                            <p class="l_t_p" v-html="'歌词：'+gechi"></p>
                        </div>
                    </div>
                </div>
                <div class="left_foot">
                    <div class="bot_top">
                          <h3>精彩评论</h3>
                          <span class="bot_top_span1">{{comments.length}}条评论</span>
                    </div>
                    <ul class="l_f_ul">
                        <li v-for="(item,index) in offsetcm" :key="index">
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
                <div class="right_bodyx">
                    <div class="r_t_div1">包含这首歌的专辑</div>
                    <ul class="r_t_ul1">
                        <li>
                            <div class="r_t_li1">
                                <div style="display:inline-block"><a @click="to_list(aboutlist.id)" href="javascript:;"><img :src="aboutlist.picUrl+'?param=50y50'" alt=""></a></div>
                                <div class="divxxx" style="display:inline-block">
                                    <div class="divxxx1"><a style="color:rgb(51,51,51)" @click="to_list(aboutlist.id)" href="javascript:;">{{aboutlist.name}}</a></div>
                                    <div class="divxxx2">by {{musicdt.ar[0].name}}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="right_topx">
                    <div class="r_t_div1">相似歌曲</div>
                    <ul class="r_t_ul">
                        <li v-for="(item,index) in moremusic" :key="index" class="r_t_li">
                            <div class="r_t_li_d">
                                <div class="li_div"><a @click="toother(item.id,item)" href="javascript:;">{{item.name}}</a></div>
                                <div class="li_div">{{item.artists[0].name}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getgechi } from '@/api/getgechi.js'
import { getmoremusic } from '@/api/getmusicdt.js'
import { getcomments } from '@/api/getmusicdt.js'
import { getmusicdt } from '@/api/getmusicdt.js'
import { musiccanuse } from '@/api/getmusicdt.js'
export default {
    inject:["reload"],
    data(){
        return{
            i:0,
            offset:0,
            offset2:0,
            id:0,
            musicdt:{},
            gechi:'',
            comments:[],
            offsetcm:[],
            aboutlist:{},
            moremusic:[],
            canuse:true
        }
    },
    created(){
        console.log(this.$route.query.toid);
        this.id=this.$route.query.toid;
        getmusicdt(this.id).then(res=>{
            console.log(res)
            this.musicdt=res.data.songs[0];
            this.aboutlist=this.musicdt.al;
        })
        getgechi(this.id).then(res=>{
            console.log(res)
            var str=res.data.lrc.lyric;
            this.gechi=str.replace(/\n/g,"<br>");
        })
        musiccanuse(this.id).then(res=>{
            console.log('歌曲是否可用',res.data.success)
            this.canuse=res.data.success;
        })
        getcomments({
            id:this.id,
            limit:50
        }).then(res=>{
            console.log(res);
            this.comments=res.data.comments;
            this.offsetcm=this.comments.slice(0,8);
        })
        getmoremusic(this.id).then(res=>{
            console.log(res)
            this.moremusic=res.data.songs.slice(0,5);
        })
        console.log(this.aboutlist)
    },
    methods:{
        isshow2(){
            var i=parseInt(this.comments.length/8);
            if(this.offset2<i)
            return true
            else
            return false
        },
        offsetchange2(bt)
        {
            if(bt==1)
            this.offset2++;
            else
            this.offset2--;
            this.offsetcm=this.comments.slice(this.offset2*8,this.offset2*8+8);
        },
        toother(id){
        this.$router.push({path:'/Fx/Musicdt',query:{
                toid:id
            }})
        this.reload();
        },
        tomusiciandt(id){
            this.$router.push({path:'/Fx/Md',query:{
                id
            }})
        },
        toalbumdt(id){
            this.$router.push({path:'/Fx/Al',query:{
                id
            }})
        },
        tolisten(id){
            this.$router.push({path:'/Lm',query:{
                id
            }})
        },
        to_list(id)
        {
            this.$router.push({path:'/Fx/Al',query:{
                id:id
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
    height: 50px;
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
.l_t_div3 a{
    color: #0c73c2;
    text-decoration: none;
}
.l_t_div3 a:hover{
    text-decoration: underline;
}
.l_t_p{
    height: 167px;
    overflow-y: scroll;
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

.right_topx{
    width: 200px;
    height: 150px;
    margin: 50px auto;
   
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
    width: 200px;
    height: 55px;
    color: #999;
    font-size: 14px;
}
.r_t_li_d{
    margin: 5px 0px;
    border-bottom: 1px dotted rgb(119,119,119);
    padding-bottom: 10px;
}
.r_t_li a{
    text-decoration: none;
    color: black;
}
.r_t_li a:hover{
    text-decoration: underline;
}
.li_div{
    margin-top: 10px;
    margin-bottom: 3px;
    width: 200px;
    height: 20px;
    overflow: hidden;
    text-overflow:ellipsis;
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
.start{
    text-decoration: none;
    color:white;
}
.start div{
    width: 60px;
    height: 40px;
    border-radius: 3px;
    text-align: center;
    line-height: 40px;
    background: rgb(194,12,12);
    margin-top: 5px;
    margin-left: 13px;

}
.canlisten{
    color: rgb(102,102,102);
    font-size: 13px;
    position: relative;
    top: -38px;
    left: 80px;
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