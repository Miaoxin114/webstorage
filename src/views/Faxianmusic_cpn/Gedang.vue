<template>
    <div class="gedang">
        <div class="gd">
          <div class="top">
              <a id="top_bigger" href="javascript:;">{{this.nowlist}}</a>
              <a @click="isshow()" class="top_a" href="javascript:;"><div style="display:inline-block">选择分类V</div></a>
              <div class="top_more">
                  <a @click="listchange('全部')" href="javascript:;"><div>全部</div></a>
              </div>
          </div>
          <div class="body">
              <ul class="rmbd_ul">
              <li v-for="(item,index) in allmusic" :key="index">
                <div class="li_img">
                  <a @click="tolistdetail(item.id)"  href="javascript:;">
                    <img class="li_img" :src="item.coverImgUrl+'?param=140y140'" alt="">
                  </a>
                  <div class="li_num"><img class="little_logo" src="@/assets/little_logo.png" alt="">{{item.playCount}}</div>
                </div>
                <p class="li_p"><a @click="tolistdetail(item.id)"  href="javascript:;">{{item.name}}</a></p>
                <p style="color:rgb(102,102,102)" class="li_p">by {{item.creator.nickname}}</p>
              </li>
            </ul>
          </div>
            <button  :disabled="offset<=0?true:false" @click="offsetchange(-1)" class="but1">上一页</button>
            <button  :disabled="isdisable()" @click="offsetchange(1)" class="but2">下一页</button>
          <div v-show="floatshow"  class="floatdiv">
            <div class="fldtop"><button @click="listchange('全部')">全部风格</button></div>
            <div style="display:inline-block"  class="fldbody">
              <div class="fldbodyl">
                <ul>
                  <li><div><img src="@/assets/网络2.png" alt="">语种</div></li>
                  <li id="lix"><div><img src="@/assets/喜欢.png" alt="">风格</div></li>
                  <li><div><img src="@/assets/Smile.png" alt="">场景</div></li>
                  <li><div><img src="@/assets/咖啡.png" alt="">情感</div></li>
                  <li><div><img src="@/assets/song.png" alt="">主题</div></li>
                </ul>
              </div>
              <div class="fldbodyr">
                <ul>
                  <li v-for="(item,index) in listtype" :key="index">
                    <span v-for="(item1,index1) in item" :key="index1"><a @click="listchange(item1)" href="javascript:;">{{item1}}</a>|</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import { getmusiclist } from '@/api/getmusiclist.js'
export default {
    data(){
        return{
            nowlist:'全部',
            allmusic:[],
            musiclength:0,
            offset:0,
            floatshow:false,
            listtype:[
              ['华语','欧美','日语','韩语','粤语'],
              ['流行','摇滚','民谣','电子','舞曲','说唱','轻音乐','爵士','乡村','R&B/Soul','古典','民族','英伦','金属','朋克','蓝调','魔鬼','世界音乐','拉丁','New Age','古风','后摇','Bossa Nova'],
              ['清晨','学习','夜晚','工作','午休','下午茶','地铁','驾车','运动','旅行','散步','酒吧'],
              ['怀旧','清新','浪漫','伤感','治愈','放松','孤独','感动','兴奋','快乐','安静','怀念'],
              ['综艺','影视原声','ACG','儿童','校园','游戏','70后','80后','90后','网络歌曲','KTV','经典','翻唱','吉他','钢琴','器乐','榜单','00后']]
        }
    },
    created(){
      if(this.$route.query.nowlist)
      {
        this.nowlist=this.$route.query.nowlist;
      }
      getmusiclist({
        cat:this.nowlist,
        limit:35,
        before:(this.offset<=0?0:this.allmusic[34].updateTime)
      }).then(res=>{
        console.log(res)
        this.allmusic=res.data.playlists;
        this.musiclength=res.data.total;
        console.log(this.musiclength)
      })
    },
    methods:{
      offsetchange(bt)
        {
            if(bt==1)
            this.offset++;
            else
            this.offset--;
            getmusiclist({
            cat:this.nowlist,
            limit:35,
            before:(this.offset<=0?0:this.allmusic[34].updateTime)
         }).then(res=>{
            console.log(res)
            this.allmusic=res.data.playlists;
         })
        },
        listchange(changeto){
          this.nowlist=changeto;
          this.offset=0;
          if(this.floatshow){
            this.floatshow=false
          }
          getmusiclist({
            cat:this.nowlist,
            limit:35,
            before:(this.offset<=0?0:this.allmusic[34].updateTime)
         }).then(res=>{
            console.log(res)
            this.allmusic=res.data.playlists;
            this.musiclength=res.data.total;
         })
        },
        isdisable(){
            var i=parseInt(this.musiclength/35);
            if(this.offset<i)
            return false
            else
            return true
        },
        isshow(){
          if(this.floatshow)
          this.floatshow=false
          else
          this.floatshow=true
          console.log(this.floatshow)
        },
        tolistdetail(id){
          this.$router.push({path:'/Fx/Listdt',query:{
            id
          }})
        }
    }

}
</script>
<style scoped>
.gedang{
    height: 1600px;
    background: rgb(245,245,245);
}
.gd{
    width: 1000px;
    height: 1550px;
    background: rgb(255, 255, 255);
    margin: auto;
    position: absolute;
    top:102px;
    left: 260px;
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
    margin-top: 50px;
}
#top_bigger{
    font-size: 24px;
    font-weight: normal;
    color: rgb(51,51,51);
    text-decoration: none;
    margin-left: 10px;
}
.top_a{
    text-decoration: none;
    font-size: 13px;
    color: rgb(34,109,176);
}
.top_a div{
    width: 90px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1.5px solid rgb(206,206,206);
    border-radius: 4px;
    margin-left: 10px;
    position: relative;
    top: -10px;
    background: rgb(250,250,250);
}
.top_a div:hover{
    background: rgb(253,253,253);
}
.top_more div{
    width: 44px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    background: rgb(194,12,12);
    border-radius: 4px;
    font-size: 12px;
    color: white;
    border: 1px solid rgb(171,14,14);

}
.rmbd_ul{
  list-style-type: none;
}
.rmbd_ul li{
  float: left;
  margin: 10px 35px 0px 5px
}
.body{
  width: 1000px;
  height: 1350px;
}
.li_img{
  width: 140px;
  height: 140px;
}
.li_p{
  margin: 1px  3px;
  font-size: 14px;
  width: 140px;
  height: 20px;
  overflow: hidden;
  text-overflow:ellipsis;
}
.li_p a{
  width: 140px;
  text-decoration: none;
  color: black;
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
.li_p a:hover{
  text-decoration: underline;
}
.but1{
 
  margin-left: 370px;
  margin-top: 20px;
}
.but2{
  margin-left: 100px;
}
.but1,.but2{
   width: 60px;
  height: 30px;
}
.floatdiv{
  width: 720px;
  height: 400px;
  border: 2px solid rgb(195,195,195);
  position: absolute;
  top: 95px;
  left: 10px;
  background: rgb(255,255,255);
  border-radius: 5px;
  filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);

   -moz-box-shadow: 2px 2px 10px #909090;

   -webkit-box-shadow: 2px 2px 10px #909090;

   box-shadow:2px 2px 10px #909090;
}
.fldtop{
  width: 718px;
  height: 50px;
  border-bottom: 1px solid rgb(195,195,195);
  line-height: 50px;
}
.fldtop button{
  margin-left: 20px;
}
.fldbody{
  width: 718px;
  height: 330px;
}
.fldbodyl{
  width: 110px;
  border-right: 1px solid rgb(195,195,195);
  height: 330px;
}
.fldbodyl ul{
  list-style-type: none;
  margin-top: 0px;
} 
.fldbodyl  li{
  height: 60px;
  line-height: 64px;
}
#lix{
  height: 80px;
}
.fldbodyl img{
  width: 23px;
  height: 23px;
  position: relative;
  top: 5px;
  margin-right: 5px;
}
.fldbodyr{
  width: 580px;
}
.fldbodyr ul{
  padding-left: 10px;
  list-style-type: none;
  margin-top: 18px;
}
.fldbodyr li{
  margin-bottom: 40px;
}
.fldbodyr,.fldbodyl{
  float: left;
}
.fldbodyr li span{
  color: rgb(215,215,215);
}
.fldbodyr li a{
  color: rgb(51,51,51);
  text-decoration: none;
  font-size: 12px;
  padding: 0px 7px;
}
.fldbodyr li a:hover{
  text-decoration: underline;
}
</style>