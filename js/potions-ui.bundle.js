(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[18],{196:function(t,e,a){var n=a(255);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(19)(n,i);n.locals&&(t.exports=n.locals)},254:function(t,e,a){"use strict";a(196)},255:function(t,e,a){(e=a(18)(!1)).push([t.i,"\ndiv.psubs[data-v-76257b6f] {\n\t\tborder-bottom: 1px solid var(--separator-color);\n\t\tmax-height:160px;\n\t\toverflow-y: auto;\n        display: grid; grid-template-columns: repeat( auto-fit, minmax( 10rem, 0.5fr) );\n        margin: 0; padding: var(--md-gap); overflow-x: hidden; gap: var(--sm-gap);\n        width: 100%; justify-content: space-between;\n}\ndiv.potions .herbal-col[data-v-76257b6f] {\n\tdisplay:grid;\n\tgrid-template-columns: repeat( auto-fit, minmax(10rem, 0.5fr));\n\tcolumn-gap: var(--lg-gap);\n\toverflow-x:hidden;\n\twidth:100%;\n}\ndiv.potions .potion-col[data-v-76257b6f] {\n\theight:170px;\n\tdisplay:grid;\n\tgrid-template-columns: repeat( auto-fit, minmax(10rem, 0.5fr));\n\tcolumn-gap: var(--lg-gap);\n\toverflow-x:hidden;\n\twidth:100%;\n}\ndiv.flex-col .separate[data-v-76257b6f] {\n\twidth:48%;\n}\ndiv.potions[data-v-76257b6f] {\n\tpadding: 0 1rem;\n}\n\n",""]),t.exports=e},351:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"potions"},[e("div",{staticClass:"psubs"},t._l(t.elementp,(function(a){return e("div",{key:a.key,staticClass:"hidable statbar",attrs:{"data-key":a.id}},[e("span",{staticClass:"barspan"},[t._v(t._s(a.name)),e("progbar",{class:a.id,attrs:{value:t.toLarge(a.valueOf()),max:t.toLarge(a.max.value),color:a.color},nativeOn:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)}}})],1)])})),0),t._v(" "),e("div",{staticStyle:{"max-height":"170px","overflow-y":"auto","border-bottom":"1px solid var(--separator-color)"}},[e("filterbox",{attrs:{items:t.consumables,"min-items":"7"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),e("div",{staticClass:"potion-col"},t._l(t.filtered,(function(a){return e("div",{key:a.id,staticClass:"separate",staticStyle:{"align-items":"unset"},on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)}}},[e("span",{staticStyle:{"margin-top":"6px"}},[t._v(t._s(a.name.toTitleCase()))]),t._v(" "),a.buy&&!a.owned?e("button",{staticStyle:{height:"30px"},attrs:{disabled:!a.canBuy(t.game)},on:{click:function(e){return t.emit(t.BUY,a)}}},[t._v("🔒")]):e("button",{staticStyle:{height:"30px"},attrs:{disabled:!a.canUse()||!t.canequi(a)},on:{click:function(e){return t.emit("lianyao",a)}}},[t._v("调制")])])})),0)],1)])};n._withStripped=!0;var i=a(1),o=a(36),r=a(32),s=a(13),l=a(2),d={mixins:[s.a],data:()=>({filtered:null}),components:{progbar:o.a,inv:()=>a.e(14).then(a.bind(null,187)),filterbox:r.a},beforeCreate(){this.game=i.c},computed:{stamina:()=>i.c.state.getData("stamina"),elementp(){return i.c.state.element.filter(t=>!this.alocked(t))},consumables(){return i.c.state.consumables.filter(t=>!this.locked(t)&&1!=t.hide)},BUY:()=>l.J},methods:{herbals(){return i.c.state.herbal.filter(t=>!this.alocked(t))},toLarge(t){if(t>=1){const e=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let a=1;if(t<0&&(a=-1,t=-t),t<=1)return a;let n=Math.floor((Math.log10(t)-1)/3);return n<1?a*t:a*Math.round(t/Math.pow(10,3*n))+e[n]}return t},canequi:t=>!(t.equneed&&!i.c.unlockTest(t.equneed,t))}},c=(a(254),a(6)),u=Object(c.a)(d,n,[],!1,null,"76257b6f",null);e.default=u.exports}}]);