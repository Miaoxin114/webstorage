<template>
    <div class="geshou">
        <div class="body_left">
            <ul class="left_ul">
                <li class="left_li">
                    <span class="left_title">推荐</span>
                    <ul class="ul2 ul11">
                        <li><div><a  @click="tohot()" href="javascript:;">热门歌手</a></div></li>
                    </ul>
                </li>
                <li v-for="(item,index) in lists" :key="index" class="left_li1">
                    <div class="left_title">{{item.name}}</div>
                    <ul class="ul2">
                        <li v-for="(item2,index2) in item.musician" :key="index2"><div><a @click="listchange(index,index2)" href="javascript:;">{{item2}}</a></div></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="body_right">
            <div class="right_top">
            </div>
            <div v-show="ishot" class="right_center">
                <div class="rc_div1" style="display:inline-block"><a @click="towhich(0)" href="javascript:;">热门</a></div>
                <a @click="towhich(index+1)" class="rc_a1" v-for="(item,index) in Zm.slice(1,27)" :key="index" href="javascript:;">{{item}}</a>
                <a @click="towhich(27)" class="rc_a2" href="javascript:;">其他</a>
            </div>
            <div class="right_bot">
                <ul class="rb_ul">
                    <li v-for="(item,index) in hotmusicians.slice(0,10)" :key="index" class="rb_li">
                        <a @click="tomusiciandt(item.id)" href="javascript:;"><img class="rb_img1" :src="item.img1v1Url+'?param=130y130'" alt=""></a>
                        <div class="rb_div"><a @click="tomusiciandt(item.id)" class="rb_div_a" href="javascript:;">{{item.name}}</a><img class="rb_img2" src="@/assets/bot2.png" alt=""></div>
                    </li>
                </ul>
            </div>
            <div class="right_bot2">
                <ul class="rb2_ul">
                    <li v-for="(item,index) in hotmusicians" :key="index" class="rb2_li"><div><a @click="tomusiciandt(item.id)" href="javascript:;">{{item.name}}</a><img src="@/assets/bot2.png" alt=""></div></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { getmusiciantype } from '@/api/getmusiciantype.js'
import { getmusicians } from '@/api/getmusicians.js'
export default {
    data(){
        return{
            lists:[{
                name:'华语',
                musician:['华语男歌手','华语女歌手','华语组合/乐队']
            },{
                name:'欧美',
                musician:['欧美男歌手','欧美女歌手','欧美组合/乐队']
            },{
                name:'日本',
                musician:['日本男歌手','日本女歌手','日本组合/乐队']
            },{
                name:'韩国',
                musician:['韩国男歌手','韩国女歌手','韩国组合/乐队']
            },{
                name:'其他',
                musician:['其他男歌手','其他女歌手','其他组合/乐队']
            },],
            hotmusicians:[],
            nowlist:'热门歌手',
            Zm:[-1,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','s','y','z',0],
            nowtype:-1,
            nowarea:-1,
            ishot:false
        }
    },
    created(){
        getmusicians({
            offset:0,
            limit:75
        }).then(res=>{
            console.log(res);
            this.hotmusicians=res.data.artists;
        })

    },
    methods:{
        listchange(index,index2)
        {
            var type = -1;
            var area = -1;
            switch(index)
            {
                case 0:
                    area=7;
                    console.log('华语')
                    break;
                case 1:
                    area=96;
                    console.log('欧美')
                    break;
                case 2:
                    area=8;
                    console.log('日本')
                    break;
                case 3:
                    area=16;
                    console.log('韩国')
                    break;
                case 4:
                    area=0;
                    console.log('其他')
                    break;
                default:
                    break;
            }
            type=index2+1;
            this.nowtype=type;
            this.nowarea=area;
            getmusiciantype({
                type,
                area,
                initial:-1,
                limit:75
            }).then(res=>{
                console.log(res)
                this.hotmusicians=res.data.artists;
            })
            this.ishot=true
            this.nowlist=this.lists[index].musician[index2]
        },
        tohot(){
            getmusicians({
            offset:0,
            limit:75
         }).then(res=>{
            console.log(res);
            this.hotmusicians=res.data.artists;
            this.ishot=false
         })
         this.nowlist='热门歌手'
        },
        towhich(index){
            getmusiciantype({
                type:this.nowtype,
                area:this.nowarea,
                initial:this.Zm[index],
                limit:75
            }).then(res=>{
                console.log(res)
                this.hotmusicians=res.data.artists;
            })
        },
        tomusiciandt(id){
            this.$router.push({path:'/Fx/Md', query:{
                id
            }})
        }
        
    }
}
</script>
<style scoped>

.geshou{
    width: 1000px;
    height: 960px;
    background: rgb(255, 255, 255);
    margin: auto;
    position: relative;
}
.body_left{
    width: 180px;
    height: 800px;
    background:rgb(249,249,249);
    border: 1px solid rgb(215,215,215);
}
.left_ul{
    list-style-type: none;
    margin-top: 20px;
    padding-left: 20px;
}
.left_li{
    position:absolute;
    top: 45px;
    border-bottom: 1.5px solid rgb(211,211,211);
}
.left_li ul,.left_li1 ul{
    padding-left: 0px;
    list-style-type: none;
    }
.left_title{
    font-weight: bold;
}
.ul11 a,.ul2 a{
    color: rgb(51,51,51);
    text-decoration: none;
    font-size: 12px;
}
.ul11 a:hover,.ul2 a:hover{
    text-decoration: underline;
    color: rgb(194,12,12);
}
.ul11 div,.ul2 div{
    border-radius: 5px;
    border: 1px solid rgb(249,249,249);
}
.ul11 div:hover,.ul2 div:hover{
    border: 1px solid rgb(190,190,190);
}
.ul2 div{
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin-left: 21px;
    padding-left: 3px;
}
.left_li1{
    border-bottom: 1.5px solid rgb(211,211,211);
    margin-bottom: 6px;
    width: 142px;
}
.body_right{
    width: 820px;
    height: 800px;
    position: absolute;
    top: 0px;
    left: 181px;
}
.right_top{
    width: 740px;
    height: 43px;
    line-height: 43px;
    margin-top: 30px;
    margin-left: 30px;
    border-bottom: 2px solid rgb(194,12,12);
}
.right_bot{
    width: 800px;
    height: 360px;
    border-bottom: 1px dotted rgb(102,102,102);
}
.rt_title{
    font-size: 24px;
}
.right_top a{
    float: right;
    text-decoration: none;
    color: rgb(102,102,102);
    font-size: 14px;
}
.rb_ul{
    list-style-type: none;
}
.rb_div_a{
    max-width: 95px;
    display:inline-block;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.rb_li{
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
}
.rb_img1{
    width: 130px;
    height: 130px;
}
.rb_img2{
    width: 17px;
    height: 18px;
    position: absolute;
    right: 2px;
}
.rb_div{
    width: 130px;
    position: relative;
}
.rb_ul a,.rb2_li a{
    color: black;
    text-decoration: none;
    font-size: 12px;
}
.rb_ul a:hover,.rb2_li a:hover{
    text-decoration: underline;
}
.right_bot2{
    width: 740px;
    margin-left: 35px;
    height: 500px;
}
.rb2_ul{
    list-style-type: none;
    padding: 0px;
}
.rb2_li{
    float: left;
    width:146px;
}
.rb2_li div{
    width: 100px;
    height: 30px;
    padding-left: 17px;
}
.rb2_li img{
    width: 16px;
    height: 16px;
}
.rb2_li a{
    max-width: 80px;
    font-size: 14px;
    display:inline-block;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.right_center{
    margin-top: 20px;
    margin-left: 31px;
}
.right_center a{
    text-decoration: none;
    color: black;
    font-size: 14px;
}
.right_center a:hover{
    text-decoration: underline;
}
.rc_div1{
    width: 50px;
    height: 24px;
    text-align: center;
    background: rgb(194,12,12) ;
    border-radius: 2px;
    margin-right: 17px;
}
.rc_a1{
    margin-right: 17px;
}
</style>