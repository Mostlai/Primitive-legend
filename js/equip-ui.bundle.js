(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[6],{195:function(t,n,e){var i=e(255);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(19)(i,s);i.locals&&(t.exports=i.locals)},254:function(t,n,e){"use strict";e(195)},255:function(t,n,e){(n=e(18)(!1)).push([t.i,"\n.equip[data-v-53d8027c] {\n    overflow-y: auto;\n    display: grid; grid-template-columns: repeat( auto-fill, minmax(11rem,1fr)); grid-gap: var(--sm-gap); padding: var(--tiny-gap);\n}\n.equip .equip-slot[data-v-53d8027c] {\n     display: flex;height: unset; flex-flow: column; margin: 0; padding: var(--sm-gap);\n}\n.equip .equip-slot .slot-item[data-v-53d8027c] {\n    display:flex;\n}\n.equip-slot .subslots[data-v-53d8027c] {\n\tdisplay: flex; flex-flow: column; text-indent: 1em;\n}\n.equip-slot[data-v-53d8027c] {\n\tdisplay:flex;\n\tmargin: var(--tiny-gap) 0;\n}\n.equip-slot button[data-v-53d8027c] {\n\tmargin-left: var(--sm-gap);\n\tpadding: 0.4em;\n}\ntd.slot-name[data-v-53d8027c] {\n\tfont-weight: bold;\n}\n\n",""]),t.exports=n},356:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"equip"},t._l(t.equip.slots,(function(e,i){return n("div",{key:i,staticClass:"equip-slot"},[n("td",{staticClass:"slot-name"},[t._v(t._s(e.name+":"))]),t._v(" "),e.empty()?n("td",{staticClass:"slot-item"}):e.multi?n("td",{staticClass:"sub-slots"},t._l(e.item,(function(i){return n("div",{key:i.id,staticClass:"slot-item",on:{"!mouseenter":function(n){return n.stopPropagation(),t.itemOver(n,i)}}},[n("button",{staticClass:"remove",on:{click:function(n){return t.emit("unequip",e,i)}}},[t._v("X")]),n("span",{staticClass:"item-name",style:{color:i.color}},[t._v(t._s(i.name.toTitleCase()))])])})),0):n("td",{staticClass:"slot-item"},[n("div",{on:{"!mouseenter":function(n){return n.stopPropagation(),t.itemOver(n,e.item)}}},[n("button",{staticClass:"remove",on:{click:function(n){return t.emit("unequip",e,e.item)}}},[t._v("X")]),n("span",{staticClass:"item-name",style:{color:e.item.color}},[t._v(t._s(e.item.name.toTitleCase()))])])])])})),0)};i._withStripped=!0;var s={props:["equip"]},a=(e(254),e(6)),o=Object(a.a)(s,i,[],!1,null,"53d8027c",null);n.default=o.exports}}]);