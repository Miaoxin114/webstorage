import Vue from "vue";
import VueRouter from "vue-router";
import Faxianmusic from "../views/Faxianmusic";
import T from '@/views/Faxianmusic_cpn/Tuijian.vue';
Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:"/Fx"
  },
  {
    path: "/Fx",
    name: "Fx",
    component: Faxianmusic,
    children:[
      {
        path:"",
        redirect:"Tj"
      },
      {
        path: "Tj",
        name: "Tuijian",
        component: T
      },
      {
        path: "Phb",
        name: "Paihangbang",
        component: ()=>import('@/views/Faxianmusic_cpn/Paihangbang.vue')
      },
      {
        path: "Gd",
        name: "Gedang",
        component: ()=>import('@/views/Faxianmusic_cpn/Gedang.vue')
      },
      {
        path: "Gs",
        name: "Geshou",
        component: ()=>import('@/views/Faxianmusic_cpn/Geshou.vue')
      },
      {
        path: "Gdd",
        name: "Gengduo",
        component: ()=>import('@/views/Faxianmusic_cpn/Gengduo.vue')
      },
      {
        path: "Listdt",
        name: "Listdetail",
        component: ()=>import('@/views/Listdetail.vue')
      },
      {
        path: "Al",
        name: "Album",
        component: ()=>import('@/views/Album.vue')
      },
      {
        path: "Musicdt",
        name: "Musicdetail",
        component: ()=>import('@/views/Musicdetail.vue')
      },
      {
        path: "Md",
        name: "Musiciandetail",
        component: ()=>import('@/views/Musiciandetail.vue'),
        children:[
          {
            path:"",
            redirect:"mdt1"
          },
          {
            path: "mdt1",
            name: "musiciandetail1",
            component: ()=>import('@/views/Faxianmusic_cpn/components/mdt1.vue')
          },
          {
            path: "mdt2",
            name: "musiciandetail2",
            component: ()=>import('@/views/Faxianmusic_cpn/components/mdt2.vue')
          },
          {
            path: "mdt3",
            name: "musiciandetail3",
            component: ()=>import('@/views/Faxianmusic_cpn/components/mdt3.vue')
          },
        ]
      }
    ]
  },
  {
    path:"/Mym",
    name:"Mym",
    component:()=>import('@/views/Mymusic.vue')
  },
  {
    path:"/Lm",
    name:"Listenmusic",
    component: ()=>import('@/views/listenmusic.vue')
  },
  {
    path:"/Ss",
    name:"Sousuo",
    component:()=>import('@/views/Sousuo.vue'),
    children:[
      {
        path:"",
        redirect:"songs"
      },
      {
        path: "songs",
        name: "songs",
        component: ()=>import('@/views/Sousuo_cpn/songs.vue')
      },
      {
        path: "albums",
        name: "albums",
        component: ()=>import('@/views/Sousuo_cpn/albums.vue')
      },
      {
        path: "artists",
        name: "artists",
        component: ()=>import('@/views/Sousuo_cpn/artists.vue')
      },
      {
        path: "playlist",
        name: "playlist",
        component: ()=>import('@/views/Sousuo_cpn/playlist.vue')
      },
      {
        path: "lyrics",
        name: "lyrics",
        component: ()=>import('@/views/Sousuo_cpn/lyrics.vue')
      }
    ]
  },
];

const router = new VueRouter({
  mode:'hash',
  routes
});
router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0
  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
 next()
})
export default router;
