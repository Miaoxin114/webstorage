(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6162a514"],{1497:function(t,s,i){"use strict";var n=i("39e8"),e=i.n(n);e.a},"1dde":function(t,s,i){var n=i("d039"),e=i("b622"),r=i("2d00"),o=e("species");t.exports=function(t){return r>=51||!n((function(){var s=[],i=s.constructor={};return i[o]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},3832:function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("div",{staticClass:"mdt1"},[n("ul",{staticClass:"ull"},[t._l(t.offsetmusics,(function(s,e){return n("li",{key:e},[n("div",{staticClass:"bot_main_li bot_main_li3",class:{bot_main_li2:e%2==1}},[n("span",{staticClass:"bot_main_li_span1"},[t._v(t._s(24*t.offset+e+1))]),n("img",{staticClass:"bot_main_li_img2",attrs:{src:i("d51f"),alt:""}}),n("a",{staticClass:"bot_main_li_span2",attrs:{href:"javascript:;"},on:{click:function(i){return t.pushtomusicdt(s.id)}}},[t._v(t._s(s.name))]),n("span",{staticClass:"bot_main_li_span3"},[t._v(t._s(t.gettime(s.dt)))]),n("span",{staticClass:"bot_main_li_span4"},[t._v(t._s(s.ar[0].name))])])])})),n("a",{directives:[{name:"show",rawName:"v-show",value:this.offset>0,expression:"this.offset>0?true:false"}],staticClass:"but1",attrs:{href:"javascript:;"},on:{click:function(s){return t.offsetchange(-1)}}},[n("div",[t._v("上一页")])]),n("a",{directives:[{name:"show",rawName:"v-show",value:t.isshow(),expression:"isshow()"}],staticClass:"but1",attrs:{href:"javascript:;"},on:{click:function(s){return t.offsetchange(1)}}},[n("div",[t._v("下一页")])])],2)])])},e=[],r=(i("fb6a"),i("4c94")),o={data:function(){return{offset:0,id:0,musics:[],offsetmusics:[]}},created:function(){var t=this;this.id=this.$route.query.id,Object(r["d"])(this.id).then((function(s){console.log(s),t.musics=s.data.songs,t.offsetmusics=t.musics.slice(0,24)}))},methods:{gettime:function(t){var s=parseInt(t/6e4),i=parseInt(t/1e3)%60,n=""+s,e=""+i;return s<10&&(n="0"+s),i<10&&(e="0"+i),n+":"+e},isshow:function(){var t=parseInt(this.musics.length/24);return this.offset<t},offsetchange:function(t){1==t?this.offset++:this.offset--,this.offsetmusics=this.musics.slice(24*this.offset,24*this.offset+24)},pushtomusicdt:function(t){this.$router.push({path:"/Fx/Musicdt",query:{toid:t}})}}},a=o,c=(i("1497"),i("2877")),u=Object(c["a"])(a,n,e,!1,null,"1b8f97e3",null);s["default"]=u.exports},"39e8":function(t,s,i){},"4c94":function(t,s,i){"use strict";i.d(s,"d",(function(){return e})),i.d(s,"b",(function(){return r})),i.d(s,"a",(function(){return o})),i.d(s,"c",(function(){return a}));var n=i("b775");function e(t){var s="/artist/top/song?id="+t;return console.log(s),Object(n["a"])({url:s,method:"get"})}function r(t){var s="/artist/desc?id="+t;return console.log(s),Object(n["a"])({url:s,method:"get"})}function o(t){var s="/artist/album?id="+t.id+"&limit="+t.limit+"&offset="+t.offset;return console.log(s),Object(n["a"])({url:s,method:"get"})}function a(t){var s="/simi/artist?id="+t;return console.log(s),Object(n["a"])({url:s,method:"get"})}},8418:function(t,s,i){"use strict";var n=i("c04e"),e=i("9bf2"),r=i("5c6c");t.exports=function(t,s,i){var o=n(s);o in t?e.f(t,o,r(0,i)):t[o]=i}},ae40:function(t,s,i){var n=i("83ab"),e=i("d039"),r=i("5135"),o=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,s){if(r(a,t))return a[t];s||(s={});var i=[][t],u=!!r(s,"ACCESSORS")&&s.ACCESSORS,f=r(s,0)?s[0]:c,l=r(s,1)?s[1]:void 0;return a[t]=!!i&&!e((function(){if(u&&!n)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:c}):t[1]=1,i.call(t,f,l)}))}},d51f:function(t,s,i){t.exports=i.p+"img/播放.277bf3a7.png"},e8b5:function(t,s,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,s,i){"use strict";var n=i("23e7"),e=i("861d"),r=i("e8b5"),o=i("23cb"),a=i("50c4"),c=i("fc6a"),u=i("8418"),f=i("b622"),l=i("1dde"),d=i("ae40"),h=l("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),m=f("species"),p=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!h||!v},{slice:function(t,s){var i,n,f,l=c(this),d=a(l.length),h=o(t,d),v=o(void 0===s?d:s,d);if(r(l)&&(i=l.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)?e(i)&&(i=i[m],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return p.call(l,h,v);for(n=new(void 0===i?Array:i)(b(v-h,0)),f=0;h<v;h++,f++)h in l&&u(n,f,l[h]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-6162a514.25bb92b0.js.map