(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[5],{230:function(t,n,e){var a=e(325);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(19)(a,s);a.locals&&(t.exports=a.locals)},231:function(t,n,e){var a=e(327);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(19)(a,s);a.locals&&(t.exports=a.locals)},324:function(t,n,e){"use strict";e(230)},325:function(t,n,e){(n=e(18)(!1)).push([t.i,"\n.enchant-slots span[data-v-1d281733] {\n\tfont-size: 0.9em;\n}\n\n/*.item-name {\n}\n\n.enchant-name {\n\tfont-size: 0.9em;\n}*/\n\n",""]),t.exports=n},326:function(t,n,e){"use strict";e(231)},327:function(t,n,e){(n=e(18)(!1)).push([t.i,"\ndiv.enchants[data-v-3f442413] {\n\tdisplay:flex;\n\tflex-direction: column;\n\tpadding:0 1rem;\n\theight:100%;\n\tmargin-top: var(--sm-gap);\n}\ndiv.enchants .eslots[data-v-3f442413] {\n\tpadding-bottom: var(--sm-gap);\n\tborder-bottom: 1pt solid var(--separator-color);\n}\ndiv.enchants .filtered[data-v-3f442413] {\n\tpadding-top: var(--sm-gap);\n\tdisplay:flex;\n\tflex-flow: column;\n\tmargin-right: var(--md-gap);\n\tborder-right: 1px solid var(--separator-color);\n}\ndiv.enchants .enchant-list[data-v-3f442413] {\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\tflex:1;\n}\ndiv.enchants .separate[data-v-3f442413] {\n\talign-items:flex-start;\n}\ndiv.enchants .enchant-list > div.enchant[data-v-3f442413] {\n\tdisplay:flex;\n\twidth:100%;\n\tjustify-content: space-between;\n\tflex-direction: row;\n}\ndiv.enchants .enchant-list  .ench-name[data-v-3f442413] {\n\tmin-width: 5rem;\n}\n\n\n",""]),t.exports=n},350:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"enchants"},[n("div",{staticClass:"separate"},[n("div",[n("div",{on:{"!mouseenter":function(n){return n.stopPropagation(),t.itemOver(n,t.target)}}},[t._v("目标: "+t._s(t.target?t.target.name.toTitleCase():"None"))]),t._v(" "),n("div",{staticClass:"note-text"},[t._v("物品的附魔等级不能超过物品的附魔槽")])]),t._v(" "),n("span",[n("button",{attrs:{disabled:0==t.enchantSlots.count},on:{click:t.resume}},[t._v(t._s(t.runner.has(t.enchantSlots)?"暂停":"继续"))])])]),t._v(" "),n("eslots",{staticClass:"eslots",attrs:{eslots:t.enchantSlots,inv:t.inv}}),t._v(" "),n("div",{staticClass:"separate"},[n("div",{staticClass:"filtered"},[t.target?n("div",[n("button",{staticClass:"stop",on:{click:t.clearTarget}},[t._v("X")]),t._v(t._s(t.target.name.toTitleCase()))]):t._e(),t._v(" "),n("filterbox",{attrs:{items:t.enchants,"min-items":"7"},model:{value:t.filtered,callback:function(n){t.filtered=n},expression:"filtered"}}),t._v(" "),n("div",{staticClass:"enchant-list"},t._l(t.usable,(function(e){return n("div",{key:e.id,staticClass:"enchant",on:{"!mouseenter":function(n){return n.stopPropagation(),t.itemOver(n,e)}}},[n("span",{staticClass:"ench-name"},[t._v(t._s(e.name.toTitleCase()))]),t._v(" "),e.buy&&!e.owned?n("button",{attrs:{disabled:!e.canBuy(t.game)},on:{click:function(n){return t.emit("buy",e)}}},[t._v("🔒")]):n("button",{attrs:{disabled:!e.canUse()},on:{click:function(n){return t.begin(e,t.target)}}},[t._v("铭刻")])])})),0)],1),t._v(" "),n("inv",{attrs:{selecting:"true",inv:t.state.inventory,types:["armor","weapon"],"hide-space":"true"},model:{value:t.target,callback:function(n){t.target=n},expression:"target"}})],1)],1)};a._withStripped=!0;var s=e(1),i=e(3),r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"enchant-slots"},[n("span",[t._v(t._s(Math.floor(t.eslots.used))+" / "+t._s(Math.floor(t.eslots.max))+" 附魔槽使用情况 ")]),t._v(" "),t._l(t.eslots.items,(function(e){return n("div",{key:e.id,staticClass:"enchant-slot"},[n("span",{staticClass:"enchant-desc"},[n("span",[t._v("等级 "+t._s(e.item.level))]),t._v(" "),n("span",{staticClass:"item-name",on:{"!mouseenter":function(n){return n.stopPropagation(),t.itemOver(n,e.target)}}},[t._v(t._s(e.target.name.toTitleCase()))]),t._v(" "),n("span",{staticClass:"enchant-name",on:{"!mouseenter":function(n){return n.stopPropagation(),t.itemOver(n,e.item)}}},[t._v(t._s(e.item.name.toTitleCase()))])]),t._v(" "),n("span",[t._v(t._s(e.percent()+"%"))]),t._v(" "),n("button",{staticClass:"btn-take",attrs:{disabled:!t.canTake(e)},on:{click:function(n){return t.onTake(e)}}},[t._v(t._s(e.done?"拿走":"取消"))])])}))],2)};r._withStripped=!0;var o={props:["eslots","inv"],computed:{},methods:{canTake(t){return t.target&&this.inv.canAdd(t.target)},onTake(t){this.inv.canAdd(t.target)&&(this.inv.add(t.target),this.eslots.remove(t))}}},l=(e(324),e(6)),c=Object(l.a)(o,r,[],!1,null,"1d281733",null).exports,d=e(32),v={mixins:[e(12).a],components:{eslots:c,filterbox:d.a,inv:()=>e.e(14).then(e.bind(null,187))},data:()=>({filtered:null,target:null}),beforeCreate(){this.game=s.c,this.state=s.c.state,this.runner=this.state.runner,this.inv=this.state.getData("inventory"),this.enchantSlots=this.state.getData(i.h)},methods:{begin(t,n){this.emit("enchant",t,n),this.inv.remove(n),this.target=null},clearTarget(){this.target=null},resume(){s.c.toggleTask(this.enchantSlots)},canAlter(t,n){return n&&t.canAlter(n)&&this.enchantSlots.canAdd(t)}},computed:{enchants(){return this.state.filterItems(t=>"enchant"===t.type&&!this.locked(t))},usable(){let t=this.target;return t?this.filtered.filter(n=>!n.owned||this.canAlter(n,t)):this.filtered}}},u=(e(326),Object(l.a)(v,a,[],!1,null,"3f442413",null));n.default=u.exports}}]);