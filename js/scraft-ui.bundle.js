(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[22],{183:function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return c})),s.d(e,"c",(function(){return o}));var a=s(1),i=s(72);const n=(t,e,s)=>{if(!a.c.state.exists(e))return;let i=t[e];t[e]=i?i+s:s},l=t=>{let e=t.level,s={gold:100*Math.ceil(Math.pow(e,1.7))};return t.kind&&r(t.kind,s,e),t.biome&&r(t.biome,s,e),t.regen&&n(s,"bloodgem",5*Object(i.c)(e)),s},r=(t,e={},s=1)=>{if(t){t=Object(i.b)(t);let a=Object(i.d)(t,s);n(e,a,s-Object(i.f)(s)+1)}else if(Array.isArray(t))for(let a=t.length-1;a>=0;a--)t[a]&&r(t[a],e,s);return e},c=t=>{var e={};for(let a=t.length-1;a>=0;a--){var s=t[a];e.money=(e.money||0)+200*s.level,e.alculation=(e.alculation||0)+100*s.level,e.lxue=(e.lxue||0)+1*s.level,e.life_crystal=(e.life_crystal||0)+.6*s.level,e.heli=(e.heli||0)+5*s.level}return e},o=t=>{var e={};for(let s=t.length-1;s>=0;s--){t[s];e.money=(e.money||0)+2e3}return e}},236:function(t,e,s){var a=s(339);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(19)(a,i);a.locals&&(t.exports=a.locals)},237:function(t,e,s){var a=s(341);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(19)(a,i);a.locals&&(t.exports=a.locals)},338:function(t,e,s){"use strict";s(236)},339:function(t,e,s){(e=s(18)(!1)).push([t.i,"\ndiv.spellcraft[data-v-6c2883aa] {\n\tdisplay:flex;\n\tflex-direction: column;\n}\ndiv.spellcraft .userspells[data-v-6c2883aa] {\n\tdisplay:flex;\n\tflex-direction: column;\n\tpadding: var(--md-gap);\n\tborder-bottom: 1pt solid var( --separator-color );\n}\ndiv.userspells .spells[data-v-6c2883aa] {\n\tdisplay:flex;\n\tflex-flow: row wrap;\n}\ndiv.spells .custom[data-v-6c2883aa] {\n\tmargin-right:1.2rem;\n}\n.crafting .options[data-v-6c2883aa] {\n\tpadding-bottom: var(--tiny-gap);\n}\ndiv.spellcraft .bottom[data-v-6c2883aa] {\n\tdisplay:flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tpadding-top:var(--md-gap);\n\tpadding-left:var(--md-gap);\n}\ndiv.spellcraft .crafting[data-v-6c2883aa], div.spellcraft .allspells[data-v-6c2883aa] {\n\tdisplay:flex;\n\tflex-direction: column;\n}\n\n",""]),t.exports=e},340:function(t,e,s){"use strict";s(237)},341:function(t,e,s){(e=s(18)(!1)).push([t.i,"\n.now_vehicle[data-v-c3e177c2]{\n    border: 1px solid var(--separator-color);\n    margin: 2px;\n    border-radius: 5px;\n    box-shadow: 0 0 10px;\n}\n.now_vehicle_grid[data-v-c3e177c2]{\n\tdisplay: grid;\n    grid: 30px 30px 30px / auto auto auto;\n}\n.now_vehicle_grid div[data-v-c3e177c2]{\n\tdisplay: flex;\n    border: 1px solid var(--separator-color);\n}\n.now_vehicle_info[data-v-c3e177c2]{\n\tdisplay: flex;\n    background-color: #767676;\n    width: 50%;\n    border-right: 1px solid var(--separator-color);\n    align-items: center;\n    justify-content: center;\n}\n.now_vehicle_context[data-v-c3e177c2]{\n\tdisplay: flex;\n\twidth: 50%;\n    align-items: center;\n    justify-content: center;\n}\n.nv_input[data-v-c3e177c2]{\n\tcolor: var(--button-text-color );\n\tborder: none;\n    background: inherit;\n    text-align: -webkit-center;\n    display: block;\n    width: 100%;\n    font-size: 1rem;\n}\n.vehicle[data-v-c3e177c2]{\n\theight: 35vh;\n\tdisplay: flex;\n\twidth: 100%;\n}\n\n",""]),t.exports=e},373:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"spellcraft"},[e("div",{staticClass:"userspells"},[e("div",[t._v("\n\t\t自制法术上限: "+t._s(Math.floor(t.userSpells.used)+" / "+Math.floor(t.userSpells.max.value))+"\n\t")]),t._v(" "),e("div",{staticClass:"spells"},t._l(t.userSpells.items,(function(s){return e("div",{key:s.id,staticClass:"custom",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,s)}}},[e("span",{staticClass:"text-entry"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"c.name"}],staticClass:"fld-name",attrs:{type:"text"},domProps:{value:s.name},on:{input:function(e){e.target.composing||t.$set(s,"name",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"stop",on:{click:function(e){return t.removeSpell(s)}}},[t._v("X")])])})),0)]),t._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"crafting"},[e("div",{staticClass:"options"},[t.craft.level>=t.maxLevels?e("span",{staticClass:"warn-text"},[t._v("已经达到力量上限")]):t._e(),t._v(" "),e("div",{staticClass:"text-entry"},[e("label",{attrs:{for:t.elmId("spName")}},[t._v("法术")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.craft.name,expression:"craft.name"}],staticClass:"fld-name",attrs:{id:t.elmId("spName"),type:"text"},domProps:{value:t.craft.name},on:{input:function(e){e.target.composing||t.$set(t.craft,"name",e.target.value)}}})]),t._v(" "),e("span",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.craft)}}},[e("span",[t._v("力量: "+t._s(t.craft.level+" / "+Math.floor(t.maxLevels)))]),t._v(" "),e("button",{attrs:{disabled:!t.canCraft},on:{click:t.create}},[t._v("完成")])])]),t._v(" "),t._l(t.list,(function(s,a){return e("div",{key:a,staticClass:"separate",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,s)}}},[e("span",[t._v(t._s(s.name.toTitleCase()))]),e("button",{staticClass:"remove",on:{click:function(e){return t.removeAt(a)}}},[t._v("X")])])}))],2),t._v(" "),e("div",{staticClass:"allspells"},t._l(t.spells,(function(s){return e("div",{key:s.id,staticClass:"separate",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,s)}}},[e("span",[t._v(t._s(s.name.toTitleCase()))]),e("button",{staticClass:"add",attrs:{disabled:!t.canAdd(s)},on:{click:function(e){return t.add(s)}}},[t._v("+")])])})),0)])])};a._withStripped=!0;var i=s(12),n=s(183),l=s(1),r=s(23),c={mixins:[i.a],data:()=>({userSpells:l.c.state.userSpells,list:[],craft:{name:"自制法术",level:0,buy:null}}),methods:{removeSpell(t){this.userSpells.remove(t)},canAdd(t){return t.level+this.craft.level<=this.maxLevels},create(){this.list&&0!==this.list.length&&(l.c.payCost(this.craft.buy),this.userSpells.create(this.list,l.c.state,this.craft.name),this.list=[],this.craft.level=0,this.craft.buy=null)},add(t){this.list.push(t),this.craft.level+=t.level,this.craft.buy=Object(n.b)(this.list)},removeAt(t){let e=this.list[t];e&&(this.craft.level-=e.level),this.list.splice(t,1),this.craft.buy=Object(n.b)(this.list)}},computed:{canCraft(){return!this.userSpells.full()&&this.list.length>0&&l.c.canPay(this.craft.buy)},spells(){return l.c.state.filterItems(t=>"spell"===t.type&&!this.locked(t)&&t.owned&&"bloodshot"!=t.id).sort(r.a)},scraft:()=>l.c.state.getData("scraft"),maxLevels(){return Math.floor(this.scraft.valueOf())}}},o=(s(338),s(6)),v=Object(o.a)(c,a,[],!1,null,"6c2883aa",null);e.default=v.exports},374:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"spellcraft"},[e("div",{staticClass:"now_vehicle",staticStyle:{height:"30vh"}},[e("div",{staticClass:"now_vehicle_grid"},[e("div",[e("span",{staticClass:"now_vehicle_info"},[t._v("名称🖊")]),e("span",{staticClass:"now_vehicle_context"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.craft.name,expression:"craft.name"}],staticClass:"nv_input",attrs:{id:t.elmId("spName"),type:"text"},domProps:{value:t.craft.name},on:{input:function(e){e.target.composing||t.$set(t.craft,"name",e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),e("div")]),t._v(" "),t._m(11)])};a._withStripped=!0;var i=s(12),n=s(183),l=s(1),r=s(23),c={mixins:[i.a],data:()=>({userVehicle:l.c.state.userVehicle,list:[],craft:{name:"自定义载具",level:0,buy:null}}),methods:{removeSpell(t){this.userVehicle.remove(t)},canAdd(t){return t.level+this.craft.level<=this.maxLevels},create(){this.list&&0!==this.list.length&&(l.c.payCost(this.craft.buy),this.userVehicle.create(this.list,l.c.state,this.craft.name),this.list=[],this.craft.level=0,this.craft.buy=null)},add(t){this.list.push(t),this.craft.level+=t.level,this.craft.buy=Object(n.c)(this.list)},removeAt(t){let e=this.list[t];e&&(this.craft.level-=e.level),this.list.splice(t,1),this.craft.buy=Object(n.c)(this.list)}},computed:{canCraft(){return!this.userVehicle.full()&&this.list.length>0&&l.c.canPay(this.craft.buy)},spells(){return l.c.state.filterItems(t=>"spell"===t.type&&!this.locked(t)&&t.owned&&"bloodshot"!=t.id).sort(r.a)},scraft:()=>l.c.state.getData("scraft"),maxLevels(){return Math.floor(this.scraft.valueOf())}}},o=(s(340),s(6)),v=Object(o.a)(c,a,[function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("质量")]),t("span",{staticClass:"now_vehicle_context"},[this._v("2145T")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("空间")]),t("span",{staticClass:"now_vehicle_context"},[this._v("2400㎡")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("载货量")]),t("span",{staticClass:"now_vehicle_context"},[this._v("5000")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("护甲")]),t("span",{staticClass:"now_vehicle_context"},[this._v("34")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("火力")]),t("span",{staticClass:"now_vehicle_context"},[this._v("45")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("机动")]),t("span",{staticClass:"now_vehicle_context"},[this._v("21")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("散热性能")]),t("span",{staticClass:"now_vehicle_context"},[this._v("40GW(40%)")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("功率")]),t("span",{staticClass:"now_vehicle_context"},[this._v("75GW")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("通讯半径")]),t("span",{staticClass:"now_vehicle_context"},[this._v("255GM")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"now_vehicle_info"},[this._v("ΔV")]),t("span",{staticClass:"now_vehicle_context"},[this._v("21450m/s")])])},function(){var t=this._self._c;return t("div",{staticStyle:{background:"rgb(0 0 0 / 15%)",width:"100%",display:"flex","align-items":"center","justify-content":"center","border-bottom":"1px solid var(--separator-color)"}},[t("span",[this._v("---------------装备情况---------------")])])},function(){var t=this._self._c;return t("div",{staticClass:"vehicle"},[t("div",{staticStyle:{height:"100%",width:"100%","border-right":"1px solid var(--separator-color)"}}),this._v(" "),t("div",{staticStyle:{height:"100%",width:"100%"}})])}],!1,null,"c3e177c2",null);e.default=v.exports}}]);