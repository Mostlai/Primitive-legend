(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[10],{199:function(t,e,a){var i=a(261);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(19)(i,n);i.locals&&(t.exports=i.locals)},260:function(t,e,a){"use strict";a(199)},261:function(t,e,a){(e=a(18)(!1)).push([t.i,"\ndiv.process[data-v-1f8716b1]{\n\tborder-radius: var(--sm-gap);\n\tbackground:rgb(53, 224, 110); \n\theight:28px;\n\twidth:200px;\n\tmargin-left: -2px;\n    margin-top: -2px;\n}\ndiv.herbal-col[data-v-1f8716b1] {\n\tdisplay:grid;\n\tgrid-template-columns: repeat( auto-fit, minmax(13rem, 0.5fr));\n\tcolumn-gap: var(--lg-gap);\n\toverflow-x:hidden;\n\twidth:100%;\n}\n",""]),t.exports=e},354:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"herbal",staticStyle:{padding:"0 1rem",height:"auto","overflow-y":"auto"}},[e("div",[e("filterbox",{staticStyle:{float:"left"},attrs:{items:t.herbal,prop:t.searchIt,"min-items":"5"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),e("div",{staticStyle:{float:"left"}},[e("button",{attrs:{disabled:0==t.herbal_hide.valueOf()},on:{click:function(e){t.herbal_hide.val-=1}}},[t._v("取消隐藏")]),t._v(" "),e("button",{attrs:{disabled:1==t.herbal_hide.valueOf()},on:{click:function(e){t.herbal_hide.val+=1}}},[t._v("隐藏0存量")])])],1),t._v(" "),e("div",[e("span",{staticStyle:{"font-size":"10px"}},[t._v("可以搜索元素所对应的材料,格式为元素名X级(例子:洪水1级)或者元素名(例子:洪水)")]),t._v(" "),e("div",[e("div",{staticClass:"herbal-col"},t._l(t.filtered,(function(a){return e("div",{key:a.id,staticClass:"separate",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)}}},[e("div",{staticStyle:{float:"left"}},[e("span",[t._v(t._s(a.name.toTitleCase()))])]),t._v(" "),e("div",{staticStyle:{float:"right"}},[e("div",{staticStyle:{float:"left","border-radius":"var(--sm-gap)",position:"relative",border:"1px #CCC solid",height:"28px",width:"100px",margin:"5px auto",padding:"1px"}},[e("div",{staticClass:"process",style:{width:100*(a.val/a.max>=1?1:a.val/a.max)+"px",background:a.color}}),t._v(" "),e("strong",{staticStyle:{position:"absolute",width:"100px",top:"4px","text-align":"center",overflow:"hidden"}},[t._v(t._s(t.toLarge(Math.floor(a.val)))+" / "+t._s(t.toLarge(Math.floor(a.max))))])]),t._v(" "),e("button",{attrs:{disabled:a.val<=1||!a.canpalh(t.game)||!t.canequi(a)},on:{click:function(e){return t.emit("lianhua",a)}}},[t._v("炼化")])])])})),0)])])])};i._withStripped=!0;var n=a(1),r=a(32),l=a(12),o=a(2),s={mixins:[l.a],data:()=>({filtered:null}),components:{inv:()=>a.e(14).then(a.bind(null,187)),filterbox:r.a},beforeCreate(){this.game=n.c},computed:{herbal(){return 0===n.c.state.getData("herbal_hide").valueOf()?n.c.state.herbal.filter(t=>!this.alocked(t)):n.c.state.herbal.filter(t=>0!=t.valueOf()&&!this.alocked(t))},herbal_hide:()=>n.c.state.getData("herbal_hide"),BUY:()=>o.J},methods:{toLarge(t){if(t>=1){const e=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let a=1;if(t<0&&(a=-1,t=-t),t<=1)return a;let i=Math.floor((Math.log10(t)-1)/3);return i<1?a*t:a*Math.round(t/Math.pow(10,3*i))+e[i]}return t},searchIt(t,e){if(t.name.includes(e))return!0;if(t.tags){let a=t.tags;for(let t=a.length-1;t>=0;t--){if(a[t].toLowerCase().includes(e.toLowerCase()))return!0;let i=a[t];if(i=n.c.state.tagSets[i]||i,null!=i&&!i.hide&&i instanceof Object&&i.name&&i.name.includes(e))return!0}}if(t.ele&&"object"==typeof t.ele)for(let a in t.ele)if(game.state.getData(a)&&"object"==typeof game.state.getData(a)&&game.state.getData(a).name.includes(e))return!0;return!1},canequi:t=>!(t.equneed&&!n.c.unlockTest(t.equneed,t))}},d=(a(260),a(6)),c=Object(d.a)(s,i,[],!1,null,"1f8716b1",null);e.default=c.exports}}]);