<template>
    <div class="hotmusician">
        <div class="top">
            <span>热门歌手</span>
            <a @click="tomusician()" href="javascript:;">查看全部>></a>
        </div>
        <div>
            <ul class="body_ul">
                <li v-for="(item,index) in musicians" :key="index" class="body_li">
                    <a @click="tomusiciandt(item.id)" class="body_li_a" href="javascript:;">
                    <div>
                        <img :src="item.picUrl+'?param=130y130'" alt="">
                        <h4>{{item.name}}</h4>
                        <p>单曲数量:{{item.musicSize}}</p>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { getmusicians } from '@/api/getmusicians.js'
export default {
    data(){
        return {
            musicians:[]
        }
    },
    created(){
        getmusicians({
            offset:0,
            limit:15
        }).then(res=>{
            console.log(res)
            this.musicians=res.data.artists
        }).catch(err=>{
        console.log(err)
      })
       
    },
    methods:{
        tomusician(){
            this.$router.push({path:'/Fx/Gs'});
        },
        tomusiciandt(id){
            this.$router.push({path:'/Fx/Md',query:{
                id
            }});
        }
    }
}
</script>
<style scoped>
.top{
    margin-top: 10px;
    width: 100%;
    height: 26px;
    border-bottom: 1.5px solid rgb(210,210,210);
}
.top span{
    font-weight: bold;
    font-size: 12.3px;
}
.top a{
    text-decoration: none;
    color: rgb(102,102,102);
    font-size: 12.3px;
    float: right;
    margin-top: 4px;
}
.top a:hover{
    text-decoration: underline;
}
.body_li{
    background: rgb(244,244,244);
    margin-top: 14px;
    border: 1px solid rgb(220,220,220);
}
.body_li img{
    width: 62px;
    height: 62px;
}
.body_ul{
    list-style-type: none;
    margin: 0px 0px;
    padding-left: 0px;
}
.body_li_a div{
    height: 62px;
}
.body_li_a div *{
    float: left;
}
.body_li_a h4{
    margin-top: 10px;
    margin-left: 16px;
    margin-right: 20px;
    margin-bottom: 0px;
    color: black;
    font-weight: bold;
    font-size: 14px;
}
.body_li_a p{
    font-size: 12px;
    margin-top: 8px;
    color: rgb(102,102,102);
    margin-bottom: 0px;
    margin-left: 18px;
}
</style>