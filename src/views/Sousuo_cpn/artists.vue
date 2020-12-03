<template>
  <div>
    <div class="artists">
      <ul class="rb_ul">
        <li v-for="(item,index) in artists" :key="index" class="rb_li">
          <a @click="tomusiciandt(item.id)" href="javascript:;"><img class="rb_img1" :src="item.img1v1Url+'?param=130y130'" alt=""></a>
          <div class="rb_div"><a @click="tomusiciandt(item.id)" class="rb_div_a" href="javascript:;">{{item.name}}</a><img class="rb_img2" src="@/assets/bot2.png" alt=""></div>
        </li>
      </ul>
         <a class="but1" v-show="this.offset>0?true:false" @click="offsetchange(-1)" href="javascript:;"><div>上一页</div></a><a class="but1" v-show="isshow()" @click="offsetchange(1)" href="javascript:;"><div>下一页</div></a>
    </div>
  </div>
</template>
<script>
import { getsearch } from '@/api/getsearch.js'
export default {
  data() {
    return {
      type:100,
      content:'',
      artists:[],
      offset:0
    };
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
      this.artists=res.data.result.artists;
    })
  },
  methods: {
    tomusiciandt(id){
            this.$router.push({path:'/Fx/Md', query:{
                id
            }})
        },
    isshow(){
            if(this.artists.length<30)
            return false
            else
            return true
        },
        offsetchange(bt)
        {
            if(bt==1)
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
              this.artists=res.data.result.artists;
            })
        },
  }
};
</script>
<style scoped>
.n {
  width: 200px;
  height: 100px;
  background: green;
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
    margin-right: 40px;
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
.rb_ul a{
    color: black;
    text-decoration: none;
    font-size: 12px;
}
.rb_ul a:hover{
    text-decoration: underline;
}
.but1{
    color: black;
    text-decoration: none;
}
.but1:hover{
    text-decoration: underline;
}
.but1{
    font-size: 15px;
    margin-left: 245px;
}
.but1 div{
     width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    background: rgb(194,12,12);
    border-radius: 3px;
    display: inline-block;
}
</style>
