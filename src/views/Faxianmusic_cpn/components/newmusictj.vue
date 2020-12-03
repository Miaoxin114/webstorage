<template>
    <div class="newmusictj">
        <div class="top">
            <img class="top_img" src="@/assets/yuandian.png" alt="">
            <a id="top_bigger" href="javascript:;">新碟上架</a>
            <div class="top_more">
                <a @click="togdd()" href="javascript:;">更多</a>
                <img src="@/assets/更多.png" alt="">
            </div>
        </div>
        <div :key="newmusic_key" class="body">
            <ul class="body_ul">
                <li v-for="(item,index) in newmusics"  :key='index'  class="bodyli">
                    <div class="body_b">
                        <div class="border_div"></div>
                        <a @click="toalbum(item.id)" href="javascript:;"><img :src="item.picUrl+'?param=100y100'" alt=""></a>
                    </div>
                    <p class="musicname"><a @click="toalbum(item.id)" href="javascript:;">{{item.name}}</a></p>
                    <p class="musicautor">{{music_artists(index)}}</p>
                </li>
            </ul>
            <div></div>
        </div>
    </div>
</template>
<script>
import { getnewlists } from '@/api/getnewlists.js'
export default {
    data(){
        return {
            newmusic_key:0,
            newmusics:[]
        }
    },
    methods:{
        music_artists(index){
            var s=''
            var artists =this.newmusics[index].artists;
            
            for(var i=0;i<artists.length;i++)
            {
                s=s+artists[i].name+" "
            }
            return s
        },
        togdd(){
            this.$router.push({path:'/Fx/Gdd'});
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
        toalbum(id){
            this.$router.push({path:'/Fx/Al',query:{
                id
            }})  
            }
    },
    created(){
        getnewlists({
        limit:5,
        offset:0,
        area:'ALL',
        type:'hot',
        year:this.getdate().year,
        month:this.getdate().month
      }).then(res=>{
        console.log(res);
        this.newmusics=res.data.monthData;
      }).catch(err=>{
        console.log(err)
      })
      
    }
}
</script>
<style scoped>
.main{
    margin-left: 0px;
}
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
    width: 92%;
    height: 35px;
    margin-left: 28px;
}
#top_bigger{
    font-size: 20px;
    font-weight: normal;
    color: rgb(51,51,51);
    text-decoration: none;
}
.body{
    width: 94%;
    height: 200px;
    margin-left: 28px;
    margin-top: 17px;
    background: rgb(245,245,245);
    border: 1px solid rgb(220,220,220);
    border-radius:2px;
}
.body_b img{
    position: relative;
    width: 100px;
    height: 100px;
    z-index:1
}
.body_b{
    background-image: url(../../../assets/音乐.png);
    background-size: 125px 100px;
    position: relative;
}
.border_div{
    position: absolute;
    top: 5px;
    left: 3px;
    width: 100px;
    height: 88px;
    background: rgba(210,210,210, 0.5);
    border: 1.3px solid rgb(190,190,190);
    z-index:0
}
.bodyli{
    float: left;
    list-style-type: none;
    width: 120px;
    height: 150px;
    margin-right: 10px;
    margin-top: 16px;
    position: relative;
    left: -6px;
}
.bodyli p{
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
</style>