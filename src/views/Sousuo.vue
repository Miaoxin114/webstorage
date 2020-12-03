<template>
  <div class="Sousuo">
    <div class="Ss">
      <div class="ss_body">
        <input :value="content" @input="valchange" class="ss_input" type="text">
        <a @click="research()" class="ss_a" href="javascript:;"><div><img src="@/assets/搜索.png" alt=""></div></a>
        <div class="ss_div">搜索“我的”，找到这些{{list[nowindex]}}</div>
        <ul class="ss_ul">
          <li class="ss_li">
            <a @click="towhich(index)" v-for="(item,index) in list.slice(0,5)" :key="index" href="javascript:;"><div :class="{isclk:(nowindex==index)}">{{item}}</div></a>
            <a href="javascript:;"><div>-</div></a>
            <a href="javascript:;"><div>-</div></a>
            <a href="javascript:;"><div>-</div></a>
          </li>
        </ul>
        <div v-show="isshow&&show2" class="hotsearch">
        <div class="hs_div">猜你想要</div>
        <ul class="hs_ul">
          <li v-for="(item,index) in searchtj" :key="index" class="hs_li">
            <div class="hs_uldiv">
            <div class="hs_div2">{{bt[index]}}</div>
            <ul class="hs_ul2">
              <div class="hs_uldiv2">
              <li v-for="(item1,index1) in item" :key="index1" class="hs_li2">
                <a @click="towhich1(item1.id,index)" href="javascript:;"><div>{{tostr(item1,index)}}</div></a>
              </li>
              </div>
            </ul>
            </div>
          </li>
        </ul>
      </div>
        <router-view  v-if="isRouteAlive"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { getsearchtj } from '@/api/getsearch.js'
export default {
  data() {
    return {
      content:'',
      nowindex:0,
      list:['单曲','专辑','歌手','歌单','歌词'],
      listpath:['/Ss/songs','/Ss/albums','/Ss/artists','/Ss/playlist','/Ss/lyrics'],
      type:[1,10,100,1000,1006],
      searchdt:{},
      searchtj:[[],[],[]],
      bt:['单曲','专辑','歌手'],
      show2:false,
      isRouteAlive: true,
    };
  },
  created() {
    this.content=this.$route.query.content;
    console.log(this.content);
    this.$router.push({ path:'/Ss/songs',query:{
        type:1,
        content:this.content
      }})
  },
  provide () {
    return {
      relord: this.reload
    }
  },
  computed:{
    isshow(){
      if(this.content!=''){
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    towhich(index){
      this.nowindex=index;
      this.$router.push({ path:this.listpath[index],query:{
        type:this.type[index],
        content:this.content
      }})
    },
    valchange(e){
     this.content=e.target.value;
     if(this.content!='')
     {
       getsearchtj(this.content).then(res=>{
         console.log(res)
         this.searchtj[0]=res.data.result.songs;
         this.searchtj[1]=res.data.result.albums;
         this.searchtj[2]=res.data.result.artists;
       })
     }
     this.show2=true;
   },
   research(){
     this.$router.push({ path:'/Ss/songs',query:{
        type:1,
        content:this.content
      }})
      this.reload();
      this.show2=false;
   },
   tostr(item1,index){
      if(index==0)
      {
        var ar="";
        for(var i=0;i<item1.artists.length;i++)
        ar=ar+item1.artists[i].name+" ";
        return item1.name+"-"+ar;
      }else if(index==1)
      {
        return item1.name+'-'+item1.artist.name;
      }else{
        return item1.name;
      }
    },
    towhich1(id,index){
      if(index==0)
      {
        this.$router.push({path:'/Fx/Musicdt',query:{
          toid:id
        }})
      }else if(index==1)
      {
        this.$router.push({path:'/Fx/Al',query:{
          id
        }})
      }else{
        this.$router.push({path:'/Fx/Md',query:{
          id
        }})
      }
      this.content='';
      this.reload();
    },
    reload() {
      this.isRouteAlive = false
      this.$nextTick (() => {
        this.isRouteAlive = true
      })
    },
  }
};
</script>
<style scoped>
.Sousuo{
    height: 1700px;
    background: rgb(245,245,245);
}
.Ss{
    width: 1000px;
    height: auto;
    background: rgb(255, 255, 255);
    margin-left: 240px;
    position: absolute;
    top: 71px;
    border-left: 1px solid rgb(210,210,210);
    border-right: 1px solid rgb(210,210,210);
}
.ss_body{
  width: 900px;
  height: auto;
  margin: 30px auto;
}
.ss_input{
  width: 380px;
  height: 40px;
  margin-left: 220px;
  border-radius: 5px;
  border: none;
  outline: none; 
  text-indent: 1em;
  font-size: 14px;
  background: rgb(245,245,245);
  filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);

   -moz-box-shadow: 2px 2px 10px #909090;

   -webkit-box-shadow: 2px 2px 10px #909090;

   box-shadow:2px 2px 10px #909090;
}
.ss_a div{
  display: inline-block;
  width: 50px;
  height: 41px;
  border: 1px solid rgb(190,190,190);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: rgb(230,230,230);
  position: relative;
  top: 5px;
  left: -5px;
  text-align: center;filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);

   -moz-box-shadow: 2px 2px 10px #909090;

   -webkit-box-shadow: 2px 2px 10px #909090;

   box-shadow:2px 2px 10px #909090;

}
.ss_a img{
  width: 30px;
  height: 30px;
  position: relative;
  top: 5px;
}
.ss_div{
  font-size: 13px;
  color: rgb(120,120,120);
  margin-top: 30px;
}
.ss_ul{
  list-style-type: none;
  margin: 10px 0px;
  padding: 0px;
}
.ss_li a{
  text-decoration: none;
  color: rgb(51, 51, 51);
}
.ss_li div{
  display: inline-block;
  width: 110px;
  height: 37px;
  text-align: center;
  line-height: 37px;
  border-top: 2px solid rgb(190,190,190);
  border-bottom: 1px solid rgb(190,190,190);
  border-left: 1px solid rgb(248,248,248);
  border-right: 1px solid rgb(248,248,248);
  background: rgb(248,248,248);
}
.ss_li div:hover{
  border-top: 2px solid rgb(216,30,6);
}
.isclk{
  border-top: 2px solid rgb(216,30,6)!important;
  border-bottom: 1px solid rgb(255,255,255)!important;
  border-left: 1px solid rgb(190,190,190)!important;
  border-right: 1px solid rgb(190,190,190)!important;
  background: rgb(255, 255, 255)!important;
}
.hotsearch{
  width: 457px;
  min-height: 80px;
  position: absolute;
  top: 85px;
  right: 275px;
  background: rgb(255,255,255);
  border: 1px solid rgb(190,190,190);
  z-index: 2;
  border-radius: 3px;
  filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);

   -moz-box-shadow: 2px 2px 10px #909090;

   -webkit-box-shadow: 2px 2px 10px #909090;

   box-shadow:2px 2px 10px #909090;
}
.hs_div{
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border-bottom: 1px solid rgb(190,190,190);
  font-size: 13px;
  line-height: 30px;
  color: rgb(194,12,12);
  font-weight: 600;

}
.hs_ul{
  list-style-type: none;
  margin:5px 0px;
  padding: 0px;
}
.hs_div2{
  width: 25%;
  height: 100%;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgb(51,51,51);
  vertical-align:top;
}
.hs_ul2{
  list-style-type: none;
  display: inline-block;
  margin:0px;
  padding: 0px;
}
.hs_li2 div{
  width: 330px;
  text-align: center;
  margin-top: 4px;
  padding: 1px 5px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.hs_li2 div:hover{
  background: rgb(227,229,231);
}
.hs_li2 a{
  text-decoration: none;
  color: rgb(51,51,51);
  font-size: 12px;
}
.hs_uldiv{
  width: 100%;
  height: auto;
  border-bottom: 1px solid rgb(190,190,190);
}
.hs_uldiv2{
  border-left: 1px solid rgb(190,190,190);
}
</style>