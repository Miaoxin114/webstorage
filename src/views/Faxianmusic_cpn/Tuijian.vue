<template>
  <div class="body">
    <Lunboimg></Lunboimg>
    <div class="main">
      <div class="main_left">
        <div class="rmtj">
          <div class="rmtj_top">
            <ul class="rmtj_top_ulli">
              <li id="rmtj_l"><img class="rmtj_top_img" src="@/assets/rmtj.png" alt=""><a @click="getnewmusiclist(0)" id="rmtj_bigger" href="javascript:;">热门推荐</a></li>
              <li><a @click="getnewmusiclist(1)" href="javascript:;">华语</a><span class="line">|</span></li>
              <li><a @click="getnewmusiclist(2)" href="javascript:;">流行</a><span class="line">|</span></li>
              <li><a @click="getnewmusiclist(3)" href="javascript:;">摇滚</a><span class="line">|</span></li>
              <li><a @click="getnewmusiclist(4)" href="javascript:;">民谣</a><span class="line">|</span></li>
              <li><a @click="getnewmusiclist(5)" href="javascript:;">电子</a><span class="line">|</span></li>
            </ul>
          </div>
          <div class="rmtj_body">
            <ul class="rmbd_ul">
              <li v-for="item in nowmusiclist" :key="item.id">
                <div class="li_img">
                  <a @click="tolistdetail(item.id)" href="javascript:;">
                    <img class="li_img" :src="item.coverImgUrl+'?param=140y140'" alt="">
                  </a>
                  <div class="li_num"><img class="little_logo" src="@/assets/little_logo.png" alt="">{{item.playCount}}</div>
                </div>
                <p class="li_p"><a @click="tolistdetail(item.id)"  href="javascript:;">{{item.name}}</a></p>
              </li>
            </ul>
          </div>
        </div>
        <newmusictj></newmusictj>
        <rankinglist></rankinglist>
      </div>
      <div class="main_right">
        <hotmusician></hotmusician>
      </div>
    </div>
  </div>
</template>
<script>
import Lunboimg from '@/views/Faxianmusic_cpn/components/Lunboimg.vue'
import { getmusiclist } from '@/api/getmusiclist.js'
import newmusictj from '@/views/Faxianmusic_cpn/components/newmusictj.vue'
import  rankinglist from '@/views/Faxianmusic_cpn/components/rankinglist.vue'
import hotmusician from '@/views/Faxianmusic_cpn/components/hotmusician.vue'
export default {
    components:{
        Lunboimg,
        newmusictj,
        rankinglist,
        hotmusician
    },
    data(){
        return{
          nowmusiclist:[],
          nowindex:0,
          rmtj_list:['全部','华语','流行','摇滚','民谣','电子']
        }
    },
    methods:{
      
      getnewmusiclist(toindex)
      {
        if(toindex!=this.nowindex)
        {
          getmusiclist({
            cat:this.rmtj_list[toindex],
            limit:8,
            before:0
          }).then(res=>{
            console.log(res);
            this.nowmusiclist=res.data.playlists;
          }).catch(err=>{
          console.log(err)
          })
        this.nowindex=toindex
        }else{
          console.log('所在部分未发生变化，无需重新获取数据！')
        }
      },
      tolistdetail(id){
        this.$router.push({path:'/Fx/Listdt',query:{
          id
        }});
      }
    },
    created(){
      getmusiclist({
        cat:"全部",
        limit:8,
        before:0
      }).then(res=>{
        console.log(res);
        this.nowmusiclist=res.data.playlists;
      }).catch(err=>{
        console.log(err)
      })
    }
}
</script>
<style scoped>
.body{
    background: rgb(245,245,245);
    height: 2400px;
}
.main{
    width: 1000px;
    height: 76%;
    border: 1px solid rgb(220,220,220);
    background: rgb(255,255,255);
    margin-left: 241px;

}
.main_left{
    width: 750px;
    height: 99.3%;
    border: 1px solid rgb(220,220,220);
}
.rmtj{
  height: 520px;
}
.rmtj_top{
  border-bottom: 2px solid #C10D0C;
  width: 92%;
  height: 35px;
  margin-left: 28px;
}
.rmtj_top_img{
    width: 30px;
    height: 30px;
}
.rmtj_bigger{
    font-size: 20px;
    font-weight: normal;
}
.rmtj_top_ulli li{
    float: left;
    list-style-type: none;
    font-size: 12px;
    position: relative;
    left: -20px;
    line-height: 37px;
}
.rmtj_top_ulli li a{
    text-decoration:none;
    color: rgb(102,102,102);
}
#rmtj_bigger{
  font-size: 20px;
  font-weight: normal;
  color: rgb(51,51,51);
  position: relative;
  top: -7px;
}
#rmtj_l{
  margin-right: 20px;
}
.line{
  margin: 0 15px;
  color: #ccc;
}
.rmbd_ul{
  list-style-type: none;
}
.rmbd_ul li{
  float: left;
  margin: 10px 13px;
}
.li_img{
  width: 140px;
  height: 140px;
}
.li_p{
  margin: 8px 0 3px;
  font-size: 14px;
  width: 140px;
  height: 39px;
  overflow: hidden;
  text-overflow:ellipsis;
}
.li_p a{
  width: 140px;
  text-decoration: none;
  color: black;
}
.rmtj_body{
  width: 100%;
  height: 35px;
  margin-left: 0px;
}
.li_num{
  height: 25px;
  position: relative;
  top: -31px;
  text-decoration: none;
  color: #ccc;
  font-size: 12px;
  background: rgba(36,36,36,0.7);
  border-top: 3px solid rgba(80,80,80,0.4);
}
.little_logo{
  position: relative;
  top: 3px;
  margin-right: 5px;
  margin-left: 7px;
}
.rmtj_top_ulli li a:hover{
  text-decoration: underline;
  text-decoration-color: rgb(102,102,102);
}
.li_p a:hover{
  text-decoration: underline;
}
#rmtj_l a:hover{
  text-decoration: none!important;
}
.main_left,.main_right{
  float: left;
}
.main_right{
  width: 210px;
  margin-left: 17px;
  height: 700px;
}
</style>