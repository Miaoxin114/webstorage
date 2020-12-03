<template>
  <div class="rankinglist">
    <div class="top">
      <img class="top_img" src="@/assets/yuandian.png" alt="">
      <a id="top_bigger" href="javascript:;">榜单</a>
      <div class="top_more">
        <a @click="torank(0,19723756)" href="javascript:;">更多</a>
        <img src="@/assets/更多.png" alt="">
      </div>
    </div>
      <div :key="rank_key">
      <div  v-for="(item,index) in ranklists" :key="index" class="body">
        <div class="body_top">
          <a @click="torank(index,item.id)" href="javascript:;"><img :src="item.coverImgUrl+'?param=100y100'" alt=""></a>
          <div class="top_right">
            <div><a @click="torank(index,item.id)" href="javascript:;">{{item.name}}</a></div>
            <p>{{item.updateFrequency}}</p>
          </div>
        </div>
        <ul class="body_ul">
          <li class="body_li"  v-for="(item2,index2) in item.tracks.slice(0,10)"  :key="index2">
            <div :class="{body_li_b2:isb2[index2%2]}" class="body_li_b">
            <span>{{index2+1}}</span>
            <a @click="tomusicdt(item2.id)" href="javascript:;">{{item2.name}}</a>
            </div>
          </li>
        </ul>
        <div class="seeall">
          <a @click="torank(index,item.id)" href="javascript:;">查看全部>></a>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import { getlistmusic }  from '@/api/getlistmusic.js'
export default {
    data(){
        return{
            rank_key:0,
            list_index:0,
            isb2:[true,false],
            list_id:[19723756,3779629,2884035],
            ranklists:[{},{},{}],
        }
    },
    computed:{
    },
    created(){ 
       axios.all([getlistmusic(this.list_id[0]),getlistmusic(this.list_id[1]),getlistmusic(this.list_id[2])]).then(axios.spread((acct, acct2, acct3) => {
        //此时三个请求已经完成，三个参数分别存放三个请求返回的结果
        this.ranklists[0]=acct.data.playlist;
        this.ranklists[1]=acct2.data.playlist;
        this.ranklists[2]=acct3.data.playlist;
        console.log(this.ranklists)
        this.rank_key+=1;
      })).catch(err=>{
        console.log(err)
      })
      
    },
    methods:{
        torank(index,id)
        {
            this.$router.push({path:'/Fx/phb',query:{
                toindex:index,
                toid:id
            }});
        },
        tomusicdt(id){
            this.$router.push({path:'/Fx/Musicdt',query:{
                toid:id
            }});
        }
    }
}
</script>
<style scoped>
.top_img{
    width: 20px;
    height: 20px;
    margin-left: 25px;
    margin-right: 2px;
    position: relative;
    top: 3px;
}
.top_more{
    float: right;
}
.top_more a{
    text-decoration: none;
    color: black;
    font-weight: normal;
}
.top_more img{
    width: 20px;
    height: 20px;
    position: relative;
    top: 4.5px;
}
.top{
    border-bottom: 2px solid #C10D0C;
    width: 98%;
    height: 35px;
}
#top_bigger{
    font-size: 20px;
    font-weight: normal;
    color: rgb(51,51,51);
    text-decoration: none;
}
.rankinglist{
    width: 706px;
    height: 590px;
    margin-left: 29px;
    margin-top: 40px;
}
.body{
    width: 230px;
    height: 470px;
    background: rgb(244,244,244);
    margin-top: 20px;
    border: 1px solid rgb(206,206,206);
    float: left;
}
.body_top{
    width: 210px;
    height: 100px;
    padding-left: 19px;
    padding-top: 20px;
    border-bottom: 1px solid rgb(210,210,210);;
}
.body_ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
}
.body_top img{
    width: 80px;
    height: 80px;
}
.body_top img,.top_right{
    float: left;
}
.top_right div a{
    font-weight: bold;
    text-decoration: none;
    color: black;
}
.top_right div{
    margin-left: 8px;
    margin-top: 12px;
}
.body_li_b{
    width: 230px;
    height: 34.9px;
    line-height: 34.9px;
    background: rgb(244,244,244);
}
.body_li a{
    display:inline-block;
    overflow:hidden;
    width: 180px;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-decoration: none;
    color: black;
    font-size: 12px;
}
.body_li span{
    margin-left: 15px;
    position: relative;
    margin-right: 7px;
    top: -10px;
    color: rgb(193,13,12);
}
/* .body_li_b1{
    background: rgb(220,220,220);
} */
.body_li_b2{
    background: rgb(232,232,232)!important;
}
.seeall{
    width: 230px;
    height: 34.9px;
    background: rgb(232,232,232);
    border: 1px solid rgb(206, 206, 206);
    line-height: 34.9px;
    position: relative;
    left: -1px;
}
.seeall a{
    text-decoration: none;
    float: right;
    font-size: 12px;
    color: black;
    margin-right: 11px;
}
.seeall a:hover,.body_li a:hover,.top_right div a:hover,.top_more a:hover{
    text-decoration:underline
}
</style>