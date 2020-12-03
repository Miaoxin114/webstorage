<template>
  <div id="app">
    <div class="top">
      <div class="top_1">
        <img class="fl img" src="@/assets/wangyiyunyinle.png" alt="">
        <ul class="fl ul_typ">
          <li class="fl"><a class="rl" href="javascript:;" @click="push_to_home"><div class="t1_list ">发现音乐</div></a></li>
          <li class="fl"><a class="rl" href="javascript:;" @click="push_to_phb"><div class="t1_list">我的音乐</div></a></li>
          <li class="fl"><a class="rl" href="javascript:;" @click="push_to_phb"><div class="t1_list">联系我们</div></a></li>
          <li class="fl"><a class="rl" href="javascript:;" @click="push_to_phb"><div class="t1_list">更多</div></a></li>
          <li class="fl"><a class="rl" href="javascript:;" @click="push_to_phb"><div class="t1_list">暂无内容</div></a></li>
          <li class="fl"><a class="rl" href="javascript:;" @click="push_to_phb"><div class="t1_list">暂无内容</div></a></li>
        </ul>
        <input :value="content" @input="valchange" type="text">
        <a @click="tosousuo()" class="sousuo" href="javascript:;"><div class="sousuodiv">搜索</div></a>
      </div>
      <div v-show="isshow" class="hotsearch">
        <div class="hs_div">猜你想要</div>
        <ul class="hs_ul">
          <li v-for="(item,index) in searchtj" :key="index" class="hs_li">
            <div class="hs_uldiv">
            <div class="hs_div2">{{bt[index]}}</div>
            <ul class="hs_ul2">
              <div class="hs_uldiv2">
              <li v-for="(item1,index1) in item" :key="index1" class="hs_li2">
                <a @click="towhich(item1.id,index)" href="javascript:;"><div>{{tostr(item1,index)}}</div></a>
              </li>
              </div>
            </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <router-view v-if="isRouteAlive" class="body"></router-view>
    </div>
  </div>
</template>
<script>
import { getsearchtj } from '@/api/getsearch.js'
export default {
  data(){
    return{
      content:'',
      isRouteAlive: true,
      searchtj:[[],[],[]],
      bt:['单曲','专辑','歌手']
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
  provide () {
    return {
      reload: this.relord
    }
  },
  methods:{
    push_to_home(){
      this.$router.push({path:'/Fx'});
   },
   push_to_phb(){
      this.$router.push({path:'/Mym'});
   },
   tosousuo(){
     if(this.content!=''){
       this.$router.push({path:'/Ss',query:{
       content:this.content
     }});
     this.content='';
     this.reload();
     }
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
   },
   reload() {
      this.isRouteAlive = false
      this.$nextTick (() => {
        this.isRouteAlive = true
      })
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
    towhich(id,index){
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
    }
  }
}
</script>
<style scoped>
.top{
  width: 100%;
}
.top_1{
  width: 100%;
  height: 62px;
  background: rgb(36,36,36);
  color: rgb(204,204,204);
  line-height: 64px;
}
.img{
  position: relative;
  top: -65px;
  margin-left: 280px;
}
.t1_list{
  width: 90px;
  height: 100%;
  font-size: 13px;
}
.rl{
  color: rgb(204,204,204);
  text-decoration:none;
}
.fl{
  float: left;
}
.ul_typ{
  list-style-type: none;
  height: 100%;
  margin:0px 0px;
  text-align: center;
  padding-left: 0px;

}
.top_1 input{
  width: 160px;
  height: 27px;
  border-radius: 20px;
  border: none;
  outline: none; 
  text-indent: 1em;
  margin-left: 20px;
  font-size: 13px;
}
.sousuo {
  color: white;
  text-decoration: none;
}
.sousuodiv{
  width: 40px;
  height: 30px;
  background: rgb(194,12,12);
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  margin-left: 5px;
}
.hotsearch{
  width: 230px;
  min-height: 80px;
  position: absolute;
  top: 64px;
  right: 240px;
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
  width: 160px;
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
