(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f40527bc"],{"14c3":function(t,n,e){var r=e("c6b6"),i=e("9263");t.exports=function(t,n){var e=t.exec;if("function"===typeof e){var a=e.call(t,n);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},5319:function(t,n,e){"use strict";var r=e("d784"),i=e("825a"),a=e("7b0b"),s=e("50c4"),c=e("a691"),o=e("1d80"),l=e("8aa5"),u=e("14c3"),f=Math.max,d=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,n,e,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=r.REPLACE_KEEPS_$0,b=x?"$":"$0";return[function(e,r){var i=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,r):n.call(String(i),e,r)},function(t,r){if(!x&&_||"string"===typeof r&&-1===r.indexOf(b)){var a=e(n,t,this,r);if(a.done)return a.value}var o=i(t),p=String(this),h="function"===typeof r;h||(r=String(r));var v=o.global;if(v){var m=o.unicode;o.lastIndex=0}var y=[];while(1){var C=u(o,p);if(null===C)break;if(y.push(C),!v)break;var R=String(C[0]);""===R&&(o.lastIndex=l(p,s(o.lastIndex),m))}for(var w="",I=0,S=0;S<y.length;S++){C=y[S];for(var $=String(C[0]),k=f(d(c(C.index),p.length),0),A=[],P=1;P<C.length;P++)A.push(g(C[P]));var T=C.groups;if(h){var U=[$].concat(A,k,p);void 0!==T&&U.push(T);var N=String(r.apply(void 0,U))}else N=E($,p,k,A,T,r);k>=I&&(w+=p.slice(I,k)+N,I=k+$.length)}return w+p.slice(I)}];function E(t,e,r,i,s,c){var o=r+t.length,l=i.length,u=v;return void 0!==s&&(s=a(s),u=h),n.call(c,u,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(o);case"<":c=s[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>l){var f=p(u/10);return 0===f?n:f<=l?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):n}c=i[u-1]}return void 0===c?"":c}))}}))},6547:function(t,n,e){var r=e("a691"),i=e("1d80"),a=function(t){return function(n,e){var a,s,c=String(i(n)),o=r(e),l=c.length;return o<0||o>=l?t?"":void 0:(a=c.charCodeAt(o),a<55296||a>56319||o+1===l||(s=c.charCodeAt(o+1))<56320||s>57343?t?c.charAt(o):a:t?c.slice(o,o+2):s-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65b1":function(t,n,e){"use strict";var r=e("f68c"),i=e.n(r);i.a},"8aa5":function(t,n,e){"use strict";var r=e("6547").charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},9263:function(t,n,e){"use strict";var r=e("ad6d"),i=e("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,o=function(){var t=/a/,n=/b*/g;return a.call(t,"a"),a.call(n,"a"),0!==t.lastIndex||0!==n.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||l;f&&(c=function(t){var n,e,i,c,f=this,d=l&&f.sticky,p=r.call(f),h=f.source,v=0,g=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),e=new RegExp("^(?:"+h+")",p)),u&&(e=new RegExp("^"+h+"$(?!\\s)",p)),o&&(n=f.lastIndex),i=a.call(d?e:f,g),d?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:o&&i&&(f.lastIndex=f.global?i.index+i[0].length:n),u&&i&&i.length>1&&s.call(i[0],e,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,n,e){"use strict";var r=e("d039");function i(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,n,e){"use strict";var r=e("23e7"),i=e("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},b8ed:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",{staticClass:"lyrics"},[r("ul",{staticClass:"bot_main"},t._l(t.songs,(function(n,i){return r("li",{key:i},[r("div",{staticClass:"bot_main_li bot_main_li3",class:{bot_main_li2:i%2==1}},[r("span",{staticClass:"bot_main_li_span1"},[t._v(t._s(6*t.offset+i+1))]),r("img",{staticClass:"bot_main_li_img2",attrs:{src:e("d51f"),alt:""}}),r("a",{staticClass:"bot_main_li_span2",attrs:{href:"javascript:;"},on:{click:function(e){return t.tomusicdt(n.id)}}},[r("div",[t._v(t._s(n.name))])]),r("span",{staticClass:"bot_main_li_span3"},[t._v(t._s(n.artists[0].name))]),r("span",{staticClass:"bot_main_li_span4"},[t._v(t._s(n.album.name))]),r("span",{staticClass:"bot_main_li_span5"},[t._v(t._s(t.gettime(n.duration)))])]),r("div",{staticClass:"lyrics_txt",class:{zhangkai:t.isall&&i==t.allindex},domProps:{innerHTML:t._s(t.trans(n.lyrics.txt))}}),r("a",{staticClass:"zs_btn",attrs:{href:"javascript:;"},on:{click:function(n){return t.isclick(i)}}},[t._v(t._s(t.isall&&i==t.allindex?"收起":"展开"))])])})),0),r("a",{directives:[{name:"show",rawName:"v-show",value:this.offset>0,expression:"this.offset>0?true:false"}],staticClass:"but1",attrs:{href:"javascript:;"},on:{click:function(n){return t.offsetchange(-1)}}},[r("div",[t._v("上一页")])]),r("a",{directives:[{name:"show",rawName:"v-show",value:t.isshow(),expression:"isshow()"}],staticClass:"but1",attrs:{href:"javascript:;"},on:{click:function(n){return t.offsetchange(1)}}},[r("div",[t._v("下一页")])])])])},i=[],a=(e("ac1f"),e("5319"),e("d94a")),s={data:function(){return{type:1006,content:"",songs:[],offset:0,isall:!1}},created:function(){var t=this;this.$route.query.type&&(this.type=this.$route.query.type),this.content=this.$route.query.content,console.log(this.type,this.content),Object(a["a"])({keywords:this.content,limit:6,offset:0,type:this.type,allindex:-1}).then((function(n){console.log(n),t.songs=n.data.result.songs}))},computed:{},methods:{gettime:function(t){var n=parseInt(t/6e4),e=parseInt(t/1e3)%60,r=""+n,i=""+e;return n<10&&(r="0"+n),e<10&&(i="0"+e),r+":"+i},tomusicdt:function(t){this.$router.push({path:"/Fx/Musicdt",query:{toid:t}})},isshow:function(){return!(this.songs.length<6)},offsetchange:function(t){var n=this;1==t?this.offset++:this.offset--,Object(a["a"])({keywords:this.content,limit:6,offset:6*this.offset,type:this.type}).then((function(t){console.log(t),n.songs=t.data.result.songs})),this.isall=!1,this.allindex=-1},trans:function(t){var n=t.replace(/\n/g,"<br>");return n},isclick:function(t){this.isall=!this.isall,this.allindex=t}}},c=s,o=(e("65b1"),e("2877")),l=Object(o["a"])(c,r,i,!1,null,"070a0f44",null);n["default"]=l.exports},d51f:function(t,n,e){t.exports=e.p+"img/播放.277bf3a7.png"},d784:function(t,n,e){"use strict";e("ac1f");var r=e("6eeb"),i=e("d039"),a=e("b622"),s=e("9263"),c=e("9112"),o=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,f){var h=a(t),v=!i((function(){var n={};return n[h]=function(){return 7},7!=""[t](n)})),g=v&&!i((function(){var n=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[o]=function(){return e},e.flags="",e[h]=/./[h]),e.exec=function(){return n=!0,null},e[h](""),!n}));if(!v||!g||"replace"===t&&(!l||!u||d)||"split"===t&&!p){var x=/./[h],_=e(h,""[t],(function(t,n,e,r,i){return n.exec===s?v&&!i?{done:!0,value:x.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=_[0],E=_[1];r(String.prototype,t,b),r(RegExp.prototype,h,2==n?function(t,n){return E.call(t,this,n)}:function(t){return E.call(t,this)})}f&&c(RegExp.prototype[h],"sham",!0)}},f68c:function(t,n,e){}}]);
//# sourceMappingURL=chunk-f40527bc.f9ba729b.js.map