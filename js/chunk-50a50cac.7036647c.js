(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50a50cac"],{b4fe:function(t,s,i){},d51f:function(t,s,i){t.exports=i.p+"img/播放.277bf3a7.png"},e534:function(t,s,i){"use strict";var a=i("b4fe"),e=i.n(a);e.a},ec20:function(t,s,i){t.exports=i.p+"img/tupian.1714afd4.png"},ee18:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"album"},[a("div",{staticClass:"ldt"},[a("div",{staticClass:"left"},[a("div",{staticClass:"left_top"},[a("div",{staticClass:"l_t_img"},[a("img",{attrs:{src:t.albumdetail.album.picUrl+"?param=200y200",alt:""}})]),a("div",{staticClass:"l_t_div"},[a("div",{staticClass:"l_t_div1"},[a("div",{staticClass:"gedangbq"},[t._v("专辑")]),t._v(t._s(t.albumdetail.album.name))]),a("div",{staticClass:"l_t_div2"},[t._v("2020-01-30 创建")]),a("div",{staticClass:"l_t_div3"},[t._v(" 标签: "),t._l(t.albumdetail.album.tags,(function(s,i){return a("div",{key:i,staticClass:"ltd3_1",staticStyle:{display:"inline-block"}},[a("a",{attrs:{href:""}},[t._v(t._s(s))])])})),a("p",{staticClass:"l_t_p"},[t._v("专辑介绍："+t._s(t.albumdetail.album.description))])],2)])]),a("div",{staticClass:"left_body"},[a("div",{staticClass:"right_bottom"},[a("div",{staticClass:"bot_top"},[a("h3",[t._v("歌曲列表")]),a("span",{staticClass:"bot_top_span1"},[t._v(t._s(t.albumdetail.songs.length)+"首歌")]),a("span",{staticClass:"bot_top_span2"},[t._v("播放: "),a("span",[t._v(t._s(t.albumdetail.album.mark))]),t._v("次")])]),a("ul",{staticClass:"bot_main"},[t._m(0),t._l(t.offsetmusic,(function(s,e){return a("li",{key:e},[a("div",{staticClass:"bot_main_li bot_main_li3",class:{bot_main_li2:e%2==1}},[a("span",{staticClass:"bot_main_li_span1"},[t._v(t._s(10*t.offset+e+1))]),a("img",{staticClass:"bot_main_li_img2",attrs:{src:i("d51f"),alt:""}}),a("a",{staticClass:"bot_main_li_span2",attrs:{href:"javascript:;"},on:{click:function(i){return t.pushtomusicdt(s.id)}}},[t._v(t._s(s.name))]),a("span",{staticClass:"bot_main_li_span3"},[t._v(t._s(t.gettime(s.dt)))]),a("span",{staticClass:"bot_main_li_span4"},[t._v(t._s(s.ar[0].name))])])])}))],2),a("a",{directives:[{name:"show",rawName:"v-show",value:this.offset>0,expression:"this.offset>0?true:false"}],staticClass:"but1",attrs:{href:"javascript:;"},on:{click:function(s){return t.offsetchange(-1)}}},[t._v("上一页")]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.isshow(),expression:"isshow()"}],staticClass:"but1",attrs:{href:"javascript:;"},on:{click:function(s){return t.offsetchange(1)}}},[t._v("下一页")])])]),a("div",{staticClass:"left_foot"},[a("div",{staticClass:"bot_top"},[a("h3",[t._v("精彩评论")]),a("span",{staticClass:"bot_top_span1"},[t._v(t._s(t.albumcomment.length)+"条评论")])]),a("ul",{staticClass:"l_f_ul"},t._l(t.offsetalbumcm,(function(s,i){return a("li",{key:i},[a("div",{staticClass:"l_f_li"},[a("div",{staticStyle:{display:"inline-block"}},[a("img",{attrs:{src:s.user.avatarUrl+"?param=50y50",alt:""}})]),a("div",{staticClass:"l_f_div1",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"l_f_div2"},[t._v(t._s(s.user.nickname)+":")]),a("div",{staticClass:"l_f_div3"},[t._v(t._s(s.content))])])])])})),0),a("a",{directives:[{name:"show",rawName:"v-show",value:this.offset2>0,expression:"this.offset2>0?true:false"}],staticClass:"but1",attrs:{href:"javascript:;"},on:{click:function(s){return t.offsetchange2(-1)}}},[a("div",[t._v("上一页")])]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.isshow2(),expression:"isshow2()"}],staticClass:"but1",attrs:{href:"javascript:;"},on:{click:function(s){return t.offsetchange2(1)}}},[a("div",[t._v("下一页")])])])]),a("div",{staticClass:"right"},[a("div",{staticClass:"right_bodyx"},[a("div",{staticClass:"r_t_div1"},[t._v("Ta的其他热门专辑")]),a("ul",{staticClass:"r_t_ul1"},t._l(t.hisalbum,(function(s,i){return a("li",{key:i},[a("div",{staticClass:"r_t_li1"},[a("div",{staticStyle:{display:"inline-block"}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(i){return t.to_otheralbum(s.id)}}},[a("img",{attrs:{src:s.picUrl+"?param=50y50",alt:""}})])]),a("div",{staticClass:"divxxx",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"divxxx1"},[a("a",{staticStyle:{color:"rgb(51,51,51)"},attrs:{href:"javascript:;"},on:{click:function(i){return t.to_otheralbum(s.id)}}},[t._v(t._s(s.name))])]),a("div",{staticClass:"divxxx2"},[t._v("by "+t._s(s.company))])])])])})),0)]),a("img",{staticClass:"right_img",attrs:{src:i("ec20"),alt:""}})])])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"bot_main_div"},[i("div",{staticClass:"bot_main_div1"}),i("div",{staticClass:"bot_main_div2"},[t._v("标题")]),i("div",{staticClass:"bot_main_div3"},[t._v("时长")]),i("div",{staticClass:"bot_main_div4"},[t._v("歌手")])])}],l=(i("fb6a"),i("b775"));function n(t){var s="/album?id="+t;return console.log(s),Object(l["a"])({url:s,method:"get"})}function o(t){var s="/comment/album?id="+t;return console.log(s),Object(l["a"])({url:s,method:"get"})}function c(t){var s="/artist/album?id="+t.id+"&limit="+t.limit;return console.log(s),Object(l["a"])({url:s,method:"get"})}var r={inject:["reload"],data:function(){return{offset:0,offset2:0,id:0,albumdetail:{},offsetmusic:[],subscribers:[],hisalbum:[],albumcomment:{},offsetalbumcm:{}}},created:function(){var t=this;console.log(this.$route.query.id),this.id=this.$route.query.id,n(this.id).then((function(s){return console.log(s),t.albumdetail=s.data,t.offsetmusic=t.albumdetail.songs.slice(0,10),c({id:t.albumdetail.album.artist.id,limit:5}).then((function(s){console.log(s),t.hisalbum=s.data.hotAlbums}))})),o(this.id).then((function(s){console.log(s),t.albumcomment=s.data.comments,t.offsetalbumcm=t.albumcomment.slice(0,5)}))},methods:{isshow:function(){var t=parseInt(this.albumdetail.songs.length/10);return this.offset<t},isshow2:function(){var t=parseInt(this.albumcomment.length/5);return this.offset2<t},gettime:function(t){var s=parseInt(t/6e4),i=parseInt(t/1e3)%60,a=""+s,e=""+i;return s<10&&(a="0"+s),i<10&&(e="0"+i),a+":"+e},offsetchange:function(t){1==t?this.offset++:this.offset--,this.offsetmusic=this.albumdetail.songs.slice(10*this.offset,10*this.offset+10)},offsetchange2:function(t){1==t?this.offset2++:this.offset2--,this.offsetalbumcm=this.albumcomment.slice(5*this.offset2,5*this.offset2+5)},pushtomusicdt:function(t){this.$router.push({path:"/Fx/Musicdt",query:{toid:t}})},to_otheralbum:function(t){var s=this;this.$router.push({path:"/Fx/Al",query:{id:t}}),this.$nextTick((function(){s.reload()}))}}},u=r,_=(i("e534"),i("2877")),f=Object(_["a"])(u,a,e,!1,null,"0b8161de",null);s["default"]=f.exports}}]);
//# sourceMappingURL=chunk-50a50cac.7036647c.js.map