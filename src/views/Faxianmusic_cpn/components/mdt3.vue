
<template>
  <div>
    <div class="mdt3">
      <div class="top">
        <h4>{{name}}简介</h4>
        <p>{{musiciandetail.briefDesc}}</p>
      </div>
      <div v-for="(item,index) in musiciandetail.introduction" :key="index" class="top">
        <h4>{{item.ti}}</h4>
        <p :class="{p2:(index==1?true:false)}" v-html="trans(item.txt)"></p>
      </div>
    </div>
  </div>
</template>
<script>
import { getdetail } from '@/api/getmusiciandt.js'
export default {
  data() {
    return {
      id:0,
      name:'未知错误',
      musiciandetail:{},
      ry:''
    };
  },
  created() {
    this.id=this.$route.query.id;
    this.name=this.$route.query.name;
    getdetail(this.id).then(res=>{
      console.log(res)
      this.musiciandetail=res.data;
    })
  },
  methods: {
    trans(txt)
    {
      var txt1=txt.replace(/\n/g,"<br>")
      return txt1;
    }
  }
};
</script>
<style scoped>
.mdt3 {
  width: 640px;
  height: 950px;
  overflow-y:scroll;
  overflow-x:hidden;
  display: block;
  padding-right: 20px;
}
.top{
  width: 640px;
}
.top h4{
  border-left: 6px solid rgb(194,12,12);
  padding-left: 5px;
}
.top p{
  text-indent: 2em;
  color: rgb(102,102,102);
  font-size: 13px;
}
.p2{
  text-indent: 0em!important;
}
</style>