(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[2],{376:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"statbars"},t._l(t.itemList,(function(s){return a("div",{key:s.key,staticClass:"hidable statbar",attrs:{"data-key":s.id}},[a("span",{staticClass:"name"},[t._v(t._s(s.name))]),a("span",{staticClass:"barspan"},[a("progbar",{class:s.id,attrs:{value:s.valueOf(),max:s.max.value,color:s.color},nativeOn:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,s)}}})],1)])})),0)};e._withStripped=!0;var r=s(36),i=s(24),n=s(1),l=s(29),o={props:["bars"],mixins:[s(12).a,l.a],components:{progbar:r.a},data(){let t=i.a.getSubVars("bars");return t.hide||(t.hide={}),{hide:t.hide}},computed:{baseItems(){let t=[],a=this.bars;for(let e=a.length-1;e>=0;e--){var s=n.c.getData(a[e]);s&&t.push(s)}return t},itemList(){return this.baseItems.filter(t=>this.show(t))}}},u=s(6),p=Object(u.a)(o,e,[],!1,null,null,null);a.default=p.exports}}]);