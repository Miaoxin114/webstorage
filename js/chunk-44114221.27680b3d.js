(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44114221"],{"72c6":function(t,a,s){},a295:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"xdsj"},[s("div",{staticClass:"xingdieshangjia"},[s("div",{staticClass:"hot"},[t._m(0),s("div",{staticClass:"hot_body"},[s("ul",{staticClass:"hot_ul"},t._l(t.hotlists,(function(a,i){return s("li",{key:i,staticClass:"hot_li"},[s("div",{staticClass:"hot_b"},[s("div",{staticClass:"border_div"}),s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.toalbumdetail(a.id)}}},[s("img",{attrs:{src:a.picUrl+"?param=130y130",alt:""}})])]),s("p",{staticClass:"musicname"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.toalbumdetail(a.id)}}},[t._v(t._s(a.name))])]),s("p",{staticClass:"musicautor"},[t._v(t._s(t.music_artists(i,!0)))])])})),0)])]),s("div",{staticClass:"all"},[s("div",{staticClass:"all_top"},[s("div",[s("span",{staticClass:"all_title"},[t._v("全部新碟")]),s("ul",t._l(t.alltopul,(function(a,i){return s("li",{key:i,staticClass:"all_top_li"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.changelist(i)}}},[t._v(t._s(a))]),s("span",{staticClass:"line"},[t._v("|")])])})),0)])]),s("div",{staticClass:"all_body"},[s("ul",{staticClass:"hot_ul"},t._l(t.newlists,(function(a,i){return s("li",{key:i,staticClass:"hot_li"},[s("div",{staticClass:"hot_b"},[s("div",{staticClass:"border_div"}),s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.toalbumdetail(a.id)}}},[s("img",{attrs:{src:a.picUrl+"?param=130y130",alt:""}})])]),s("p",{staticClass:"musicname"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.toalbumdetail(a.id)}}},[t._v(t._s(a.name))])]),s("p",{staticClass:"musicautor"},[t._v(t._s(t.music_artists(i,!1)))])])})),0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.nowpage>0,expression:"nowpage>0"}],staticClass:"btnbf"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.changepage(!1)}}},[s("div",[t._v("上一页")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"btngo"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.changepage(!0)}}},[s("div",[t._v("下一页")])])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hot_top"},[s("div",[s("span",{staticClass:"hot_title"},[t._v("热门新碟")])])])}],n=(s("fb6a"),s("b0c0"),s("5798")),l={data:function(){return{nowpage:0,htl:[],nwl:[],hotlists:[],newlists:[],alltopul:["全部","华语","欧美","韩国","日本"],alltopul_area:["ALL","ZH","EA","KR","JP"]}},computed:{isshow:function(){var t=parseInt(this.nwl.length/20);return console.log(t),this.nowpage<t}},methods:{music_artists:function(t,a){var s,i="";s=a?this.hotlists[t].artists:this.newlists[t].artists;for(var e=0;e<s.length;e++)i=i+s[e].name+" ";return i},getdate:function(){var t=new Date,a=t.getFullYear(),s=t.getMonth()+1;return{year:a,month:s}},changelist:function(t){var a=this;Object(n["a"])({limit:59,offset:0,area:this.alltopul_area[t],type:"new",year:this.getdate().year,month:this.getdate().month}).then((function(t){console.log(t),t.data.monthData.length>0?(a.nwl=t.data.monthData,a.newlists=t.data.monthData.slice(0,20)):(a.nwl=t.data.weekData,a.newlists=t.data.weekData.slice(0,20))})).catch((function(t){console.log(t)})),this.nowpage=0},changepage:function(t){t?this.nowpage++:this.nowpage--,this.newlists=this.nwl.slice(20*this.nowpage,20*this.nowpage+20)},toalbumdetail:function(t){this.$router.push({path:"/Fx/Al",query:{id:t}})}},created:function(){var t=this;Object(n["a"])({limit:10,offset:0,area:"ALL",type:"hot",year:this.getdate().year,month:this.getdate().month}).then((function(a){console.log(a),t.hotlists=a.data.weekData.slice(0,10)})).catch((function(t){console.log(t)})),Object(n["a"])({limit:59,offset:0,area:"ALL",type:"new",year:this.getdate().year,month:this.getdate().month}).then((function(a){console.log(a),t.nwl=a.data.weekData,t.newlists=a.data.weekData.slice(0,20)})).catch((function(t){console.log(t)}))}},c=l,o=(s("e1fc"),s("2877")),r=Object(o["a"])(c,i,e,!1,null,"0be20b25",null);a["default"]=r.exports},e1fc:function(t,a,s){"use strict";var i=s("72c6"),e=s.n(i);e.a}}]);
//# sourceMappingURL=chunk-44114221.27680b3d.js.map