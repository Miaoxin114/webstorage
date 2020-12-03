<template>
    <div class="body">
        <div class="body_top">
            <ul>
                <li><a class="rl_fx" href="javascript:;" @click="push_to_tuijian"><div class="t1_list_fx ">推荐</div></a></li>
                <li><a class="rl_fx" href="javascript:;" @click="push_to_phb"><div class="t1_list_fx ">排行榜</div></a></li>
                <li><a class="rl_fx" href="javascript:;" @click="push_to_gedang"><div class="t1_list_fx ">歌单</div></a></li>
                <li><a class="rl_fx" href="javascript:;" @click="push_to_geshou"><div class="t1_list_fx ">歌手</div></a></li>
                <li><a class="rl_fx" href="javascript:;" @click="push_to_gengduo"><div class="t1_list_fx ">新碟上架</div></a></li>
            </ul>
        </div>
        <keep-alive include="Tuijian">
        <router-view v-if="isRouterAlive"></router-view>
        </keep-alive>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isRouterAlive: true
        }
    },
    created(){
        console.log("“推荐”被创建");
    },
    provide () {
      return {
        reload: this.reload
      }
    },
    methods:{
        push_to_tuijian(){
            this.$router.push({path:'/Fx/Tj'});
        },
        push_to_phb(){
            this.$router.push({path:'/Fx/Phb'});
        },
        push_to_gedang(){
            this.$router.push({path:'/Fx/Gd'});
        },
        push_to_geshou(){
            this.$router.push({path:'/Fx/Gs'});
        },
        push_to_gengduo(){
            this.$router.push({path:'/Fx/Gdd'});
        },
         reload () {
          this.isRouterAlive = false
          this.$nextTick(() => {
          this.isRouterAlive = true
      })
    }
    }
}
</script>
<style scoped>
.body{
    width: 100%;
    height: 1000px;
    background: rgb(245,245,245);
}
.body_top{
    width: 100%;
    height: 30px;
    background: rgb(194,12,12);
    line-height: 32px;
}
.body_top ul li{
    float: left;
}
.body_top ul{
    list-style-type: none;
    height: 100%;
    margin:0px 0px;
    text-align: center;
    padding-left: 0px;
}
.rl_fx{
    color: white;
    text-decoration:none;
    font-size: 10px;
}
.t1_list_fx{
    width:95px;
    height: 100%;
    font-size: 10px;
}
</style>