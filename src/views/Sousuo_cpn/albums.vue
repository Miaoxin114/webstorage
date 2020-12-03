<template>
  <div>
    <div class="albums">
      <div class="all_body">
        <ul class="hot_ul">
          <li v-for="(item,index) in albums"  :key="index" class="hot_li">
            <div class="hot_b">
              <div class="border_div"></div>
              <a  @click="toalbumdetail(item.id)" href="javascript:;"><img :src="item.picUrl+'?param=130y130'" alt=""></a>
            </div>
            <p class="musicname"><a @click="toalbumdetail(item.id)" href="javascript:;">{{item.name}}</a></p>
            <p class="musicautor">{{music_artists(index)}}</p>
          </li>
        </ul>
      </div>
      <div class="btnbf" v-show="offset>0"><a @click="changepage(false)" href="javascript:;">上一页</a></div>
      <div class="btngo" v-show="isshow"><a @click="changepage(true)" href="javascript:;">下一页</a></div>
    </div>
  </div>
</template>
<script>
import { getsearch } from '@/api/getsearch.js'
export default {
  data() {
    return {
      content:'',
      type: 10,
      offset:0,
      albums:[]
    };
  },
  computed:{
        isshow(){
            if(this.albums.length>=30)
            return true
            else
            return false
        }
    },
  created() {
    if(this.$route.query.type)
      this.type=this.$route.query.type;
      this.content=this.$route.query.content;
      console.log(this.type,this.content);
      getsearch({
      keywords:this.content,
      limit:30,
      offset:0,
      type:this.type
    }).then(res=>{
      console.log(res)
      this.albums=res.data.result.albums;
    })
  },
  methods: {
      toalbumdetail(id){
        this.$router.push({path:'/Fx/Al',query:{
          id
       }})
      },
      music_artists(index){
            var s=''
            var artists 
            artists =this.albums[index].artists;
            for(var i=0;i<artists.length;i++)
            {
                s=s+artists[i].name+" "
            }
            return s
        },
      changepage(ismore){
            if(ismore)
            this.offset++;
            else
            this.offset--;
            getsearch({
              keywords:this.content,
              limit:30,
              offset:this.offset*30,
              type:this.type
            }).then(res=>{
              console.log(res)
              this.albums=res.data.result.albums;
            })
          this.reload();
        },
  }
};
</script>
<style scoped>
.hot_b{
    background-image: url(../../assets/音乐.png);
    background-size: 164px 127px;
    position: relative;
}
.hot_b img{
    position: relative;
    width: 130px;
    height: 130px;
    z-index:1
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
    margin-left: 1px;
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
.musicname a:hover{
  text-decoration: underline;
}
.all_body{
    height: 780px;
}
.btnbf{
    position: relative;
    left: 245px;
}
.btngo{
    position: relative;
    left: 540px;
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
    color: white!important;
    text-decoration: none;
}
.btnbf a:hover,.btngo a:hover{
    text-decoration: underline;
}
</style>
