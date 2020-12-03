<template>
  <div>
    <div class="musiciandetail">
        <div class="mdt">
            <div class="left">
                <div class="left_top">
                    <div class="lt_top">
                        <span class="span1">{{detail.name}}</span><span class="span2">{{detail.trans}}</span>
                    </div>
                    <div class="lt_bot">
                        <img :src="detail.picUrl+'?param=640y300'" alt="">
                        <div class="lt_body">
                        <a @click="pushto('/Fx/Md/mdt1')" href="javascript:;"><div>热门作品</div></a>
                        <a @click="pushto('/Fx/Md/mdt2')" href="javascript:;"><div>所有专辑</div></a>
                        <a @click="pushto('/Fx/Md/mdt3')" href="javascript:;"><div>艺人介绍</div></a>
                        <a href="javascript:;"><div>暂无内容</div></a>
                        </div>
                    </div>
                    
                </div>
                <div class="left_bot">
                    <router-view v-if="isRouteAlive"></router-view>
                </div>
            </div>
            <div class="right">
                <div class="right_topx">
                    <div class="r_t_div1">热门歌手</div>
                    <ul class="r_t_ul">
                        <li v-for="(item,index) in moremusicians" :key="index" class="r_t_li"><a @click="togeshou()" href="javascript:;"><img :src="item.img1v1Url+'?param=60y60'" alt=""></a></li>
                    </ul>
                </div>
                <img class="right_img" src="@/assets/tupian.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { getalbums } from '@/api/getmusiciandt.js'
import { getmore } from '@/api/getmusiciandt.js'
import { getmusicians } from '@/api/getmusicians.js'

export default {
  data() {
    return {
     id:0,
     detail:{},
     moremusicians:[],
     isRouteAlive:true
    };
  },
  provide () {
    return {
      reload: this.relord
    }
  },
  created() {
    this.id=this.$route.query.id;
    console.log(this.id)
    getalbums({
      id:this.id,
      limit:16,
      offset:0
    }).then(res=>{
      console.log(res);
      this.detail=res.data.artist
    })
    getmore(this.id).then(res=>{
        console.log(res)
    })
    getmusicians({
            offset:0,
            limit:6
        }).then(res=>{
            console.log(res);
            this.moremusicians=res.data.artists;
        })

  },
  methods: {
      pushto(topath){
          var mcid=this.id;
          this.$router.push({path:topath,query:{
              id:mcid,
              name:this.detail.name
          }})
      },
      reload () {
      this.isRouteAlive = false
      this.$nextTick (() => {
        this.isRouteAlive = true
      })},
      togeshou(){
          this.$router.push({path:'/Fx/Gs'})
      }
  }
};
</script>
<style scoped>
.musiciandetail{
    height: 1800px;
    background: rgb(245,245,245);
}
.mdt{
    width: 1000px;
    height: 1750px;
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
    height: 376px;
    margin-top: 20px;
    margin-left: 40px;
}
.left_bot{
    width: 640px;
    height: 500px;
    margin-left: 40px;
    margin-top: 10px;
}
.span1{
    font-size: 24px;
    color: #333;
    margin-left: 10px;
}
.span2{
    color: rgb(153,153,153);
}
.lt_bot{
    border: 1px solid rgb(211,211,211);
}
.lt_bot img{
    width: 640px;
    height: 300px;
    position: relative;
    left: -1px;
}
.lt_body a{
    text-decoration: none;
    color: rgb(51, 51, 51);
}
.lt_body div{
    display: inline-block;
    width: 140px;
    height: 40px;
    background: rgb(248,248,248);
    font-size: 14px;
    line-height: 40px;
    text-align: center;
}
.lt_body div:hover{
    background: rgb(253,253,253);
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
    width: 60px;
    height: 60px;
    margin-right: 6px;
    margin-top: 20px;
    float: left;
}
.right_img{
    width: 230px;
    height: 160px;
    margin-left: 20px;
    margin-top: 30px;
}
</style>