(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2ef97d8"],{"386b":function(t,e,x){var n=x("5ca1"),i=x("79e5"),a=x("be13"),r=/"/g,s=function(t,e,x,n){var i=String(a(t)),s="<"+e;return""!==x&&(s+=" "+x+'="'+String(n).replace(r,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var x={};x[t]=e(s),n(n.P+n.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",x)}},"3bdd":function(t,e,x){"use strict";x.r(e);var n=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{staticClass:"list-content content"},[x("div",{staticClass:"area"},[x("h2",[t._v("Transparent Background")]),x("p",[t._v("To get an image with a transparent background,")]),x("p",[t._v("upload a png which has a transparent background,")]),x("p",[t._v('set clipper component\'s "bgColor" to transparent color.')]),x("clipper-fixed",{ref:"clipper",staticClass:"sample",attrs:{src:t.src,bgColor:"rgba(0,0,0,0)"}}),x("button",{on:{click:t.clipToURL}},[t._v("clip to see the result.")]),x("p",[t._v("clip result will be put above here, you can see this is a transparent image.")]),x("div",{staticClass:"imgCon"},[t._m(0),x("img",{staticClass:"imgResult",attrs:{src:t.clipResult}})])],1)])},i=[function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{staticClass:"text"},[x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")])])}],a=x("ab2a"),r={extends:{mixins:[a["a"]]},data:function(){return{src:"icon/smile.png",clipResult:""}},methods:{}},s=r,c=(x("695e"),x("2877")),l=Object(c["a"])(s,n,i,!1,null,"62099365",null);e["default"]=l.exports},"695e":function(t,e,x){"use strict";var n=x("8834"),i=x.n(n);i.a},8834:function(t,e,x){},ab2a:function(t,e,x){"use strict";x("b54a");var n=x("795b"),i=x.n(n);e["a"]={methods:{clipToURL:function(){var t=this;return new i.a(function(e,x){var n=t.$refs.clipper.clip();n.toBlob?n.toBlob(function(x){t.clipResult&&URL.revokeObjectURL(t.clipResult),t.clipResult=URL.createObjectURL(x),t.link=t.clipResult,t.resultDone(),e()},"image/png",1):(t.clipResult=n.toDataURL("image/png",1),t.link=t.clipResult,t.resultDone(),e())})},resultDone:function(){this.done=!0}}}},b54a:function(t,e,x){"use strict";x("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})}}]);
//# sourceMappingURL=chunk-f2ef97d8.e47ebea8.js.map