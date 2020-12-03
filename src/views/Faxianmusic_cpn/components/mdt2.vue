
<template>
  <div>
    <div class="mdt2">
      <ul class="hot_ul">
        <li v-for="(item,index) in albums"  :key="index" class="hot_li">
          <div class="hot_b">
            <div class="border_div"></div>
            <a  @click="toalbumdetail(item.id)" href="javascript:;"><img :src="item.picUrl+'?param=130y130'" alt=""></a>
          </div>
          <p class="musicname"><a @click="toalbumdetail(item.id)" href="javascript:;">{{item.name}}</a></p>
          <p class="musicautor">{{music_artists(index,false)}}</p>
        </li>
      </ul>
      <div class="btnbf" v-show="offset>0"><a @click="changepage(false)" href="javascript:;">上一页</a></div>
      <div class="btngo" v-show="isshow()"><a @click="changepage(true)" href="javascript:;">下一页</a></div>
    </div>
  </div>
</template>
<script>
import { getalbums } from '@/api/getmusiciandt.js'
export default {
  data() {
    return {
      id:0,
      offset:0,
      albums:[],
      albumssize:0
    };
  },
  created() {
    this.id=this.$route.query.id;
    getalbums({
      id:this.id,
      limit:16,
      offset:0
    }).then(res=>{
      console.log(res);
      this.albums=res.data.hotAlbums;
      this.albumssize=res.data.artist.albumSize;
      console.log(this.albumssize)
    })
  },
  methods: {
    toalbumdetail(id){
            this.$router.push({path:'/Fx/Al',query:{
                id
            }})
        },
        music_artists(index,isyou){
            var s=''
            var artists 
            if(isyou)
            artists =this.albums[index].artists;
            else
            artists =this.albums[index].artists;
            for(var i=0;i<artists.length;i++)
            {
                s=s+artists[i].name+" "
            }
            return s
        },
        isshow(){
            var i=parseInt(this.albumssize/16);
            console.log(i)
            if(this.offset<i)
            return true
            else
            return false
        },
        changepage(ismore){
            if(ismore)
            this.offset++;
            else
            this.offset--;
            getalbums({
             id:this.id,
             limit:16,
             offset:this.offset*16
            }).then(res=>{
               console.log(res);
               this.albums=res.data.hotAlbums;
    })
        }
  }
};
</script>
<style scoped>
.mdt2 {
  width: 640px;
  height: 760px;
  position: relative;
}
.hot_ul{
  padding-left: 0px;
}
.hot_b img{
    position: relative;
    width: 120px;
    height: 120px;
    z-index:1
}
.hot_b{
    background-image: url(../../../assets/音乐.png);
    background-size: 151px 120px;
    position: relative;
}
.border_div{
    position: absolute;
    top: 5px;
    left: 3px;
    width: 122px;
    height: 106px;
    background: rgba(210,210,210, 0.5);
    border: 1.3px solid rgb(190,190,190);
    z-index:0
}
.hot_li{
    float: left;
    list-style-type: none;
    width: 148px;
    height: 160px;
    margin-left: 10px;
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
.btnbf{
    position: absolute;
    left: 200px;
    top: 713px;
}
.btngo{
    position: absolute;;
    left: 340px;
    top: 713px;
}
.btnbf,.btngo{
    display: inline-block;
     width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: rgb(194,12,12);
    border-radius: 3px;
    display: inline-block;
}
.btnbf a,.btngo a{
    color: white;
    text-decoration: none;
}
.btnbf a:hover,.btngo a:hover{
    text-decoration: underline;
}
</style>