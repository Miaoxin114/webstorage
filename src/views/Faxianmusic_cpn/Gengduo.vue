<template>
    <div class="xdsj">
    <div class="xingdieshangjia">
        <div class="hot">
            <div class="hot_top">
                <div><span class="hot_title">热门新碟</span></div>
            </div>
            <div class="hot_body">
                <ul class="hot_ul">
                    <li v-for="(item,index) in hotlists"  :key="index" class="hot_li">
                    <div class="hot_b">
                        <div class="border_div"></div>
                        <a @click="toalbumdetail(item.id)" href="javascript:;"><img :src="item.picUrl+'?param=130y130'" alt=""></a>
                    </div>
                    <p class="musicname"><a @click="toalbumdetail(item.id)" href="javascript:;">{{item.name}}</a></p>
                    <p class="musicautor">{{music_artists(index,true)}}</p>
                </li>
                </ul>
            </div>
        </div>
        <div class="all">
            <div class="all_top">
                <div>
                <span class="all_title">全部新碟</span>
                <ul>
                    <li class="all_top_li" v-for="(item,index) in alltopul" :key="index"><a @click="changelist(index)" href="javascript:;">{{item}}</a><span class="line">|</span></li>
                </ul>
                </div>
            </div>
            <div class="all_body">
                <ul class="hot_ul">
                    <li v-for="(item,index) in newlists"  :key="index" class="hot_li">
                    <div class="hot_b">
                        <div class="border_div"></div>
                        <a  @click="toalbumdetail(item.id)" href="javascript:;"><img :src="item.picUrl+'?param=130y130'" alt=""></a>
                    </div>
                    <p class="musicname"><a @click="toalbumdetail(item.id)" href="javascript:;">{{item.name}}</a></p>
                    <p class="musicautor">{{music_artists(index,false)}}</p>
                    </li>
                </ul>
            </div>
            <div class="btnbf" v-show="nowpage>0"><a @click="changepage(false)" href="javascript:;">上一页</a></div>
            <div class="btngo" v-show="isshow"><a @click="changepage(true)" href="javascript:;">下一页</a></div>
        </div>
    </div>
    </div>
</template>
<script>
import { getnewlists } from '@/api/getnewlists.js'
export default {
    data(){
        return{
            nowpage:0,
            htl:[],
            nwl:[],
            hotlists:[],
            newlists:[],
            alltopul:['全部','华语','欧美','韩国','日本'],
            alltopul_area:['ALL','ZH','EA','KR','JP']
        }
    },
    computed:{
        isshow(){
            var i=parseInt(this.nwl.length/20);
            console.log(i)
            if(this.nowpage<i)
            return true
            else
            return false
        }
    },
    methods:{
        
        music_artists(index,isyou){
            var s=''
            var artists 
            if(isyou)
            artists =this.hotlists[index].artists;
            else
            artists =this.newlists[index].artists;
            for(var i=0;i<artists.length;i++)
            {
                s=s+artists[i].name+" "
            }
            return s
        },
        getdate(){
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            return {
                year,
                month
            }
        },
        changelist(index)
        {
            getnewlists({
              limit:59,
              offset:0,
              area:this.alltopul_area[index],
              type:'new',
              year:this.getdate().year,
              month:this.getdate().month
            }).then(res=>{
              console.log(res);
              this.nwl=res.data.monthData;
              this.newlists=res.data.monthData.slice(0,20);
          }).catch(err=>{
            console.log(err)
          })
          this.nowpage=0;
        },
        changepage(ismore){
            if(ismore)
            this.nowpage++;
            else
            this.nowpage--;
            this.newlists=this.nwl.slice(this.nowpage*20,this.nowpage*20+20);
        },
        toalbumdetail(id){
            this.$router.push({path:'/Fx/Al',query:{
                id
            }})
        }
    },
    created(){
        getnewlists({
        limit:10,
        offset:0,
        area:'ALL',
        type:'hot',
        year:this.getdate().year,
        month:this.getdate().month
      }).then(res=>{
        console.log(res);
        this.hotlists=res.data.monthData;
      }).catch(err=>{
        console.log(err)
      })
      getnewlists({
        limit:59,
        offset:0,
        area:'ALL',
        type:'new',
        year:this.getdate().year,
        month:this.getdate().month
      }).then(res=>{
        console.log(res);
        this.nwl=res.data.monthData;
        this.newlists=res.data.monthData.slice(0,20);
      }).catch(err=>{
        console.log(err)
      })
    }
}
</script>
<style scoped>
.xdsj{
    height: 1500px;
    background: rgb(245,245,245);
}
.xingdieshangjia{
    width: 1000px;
    height: 1400px;
    background: rgb(255, 255, 255);
    margin: auto;
    position: absolute;
    top:102px;
    left: 260px;
}

.hot{
    margin-top: 40px;
}
.hot_title,.all_title{
    font-size: 24px;
}
.hot_body{
    width: 1000px;
    height: 400px;
}
.all_top{
    width: 900px;
    height: 43px;
    line-height: 43px;
    margin-top: 10px;
    margin-left: 50px;
    border-bottom: 2px solid rgb(194,12,12);
}
.hot_top{
    width: 900px;
    height: 43px;
    line-height: 43px;
    margin-top: 30px;
    margin-left: 50px;
    border-bottom: 2px solid rgb(194,12,12);
}
.hot_b img{
    position: relative;
    width: 130px;
    height: 130px;
    z-index:1
}
.hot_b{
    background-image: url(../../assets/音乐.png);
    background-size: 164px 127px;
    position: relative;
}
.border_div{
    position: absolute;
    top: 5px;
    left: 3px;
    width: 133px;
    height: 120px;
    background: rgba(210,210,210, 0.5);
    border: 1.3px solid rgb(190,190,190);
    z-index:0
}
.hot_li{
    float: left;
    list-style-type: none;
    width: 170px;
    height: 175px;
    margin-left: 17px;
    margin-top: 16px;
    position: relative;
    left: -5px;
}
.hot_li p{
    width: 120px;
    height: 16px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 3px;
    margin-bottom: 3px;
}
.musicautor{
    color: rgb(117,117,117);
}
.musicname a{
    text-decoration: none;
    color: black;
}
.top_more a:hover,.musicname a:hover{
    text-decoration: underline;
}
.all_top *{
    float: left;
}
.all_top ul{
    list-style-type: none;
    padding-left: 7px;
    margin-top:15px;
}
.all_top_li{
    float: left;
    font-size: 13px;
    padding-left: 8px;
    line-height: 25px;
}
.line{
    margin-left: 10px;
    color: rgb(180,180,180);
}
.all_top_li a{
    color: rgb(102,102,102);
    text-decoration: none;
}
.all_top_li a:hover{
    text-decoration: underline;
}
.all_body{
    height: 780px;
}
.btnbf{
    position: relative;
    left: 340px;
}
.btngo{
    position: relative;
    left: 540px;
}
.btnbf,.btngo{
    display: inline-block;
}
.btnbf a,.btngo a{
    color: black;
    text-decoration: none;
}
.btnbf a:hover,.btngo a:hover{
    text-decoration: underline;
}
</style>