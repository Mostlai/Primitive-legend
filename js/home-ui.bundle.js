(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[11],{209:function(e,t,a){var s=a(282);"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(20)(s,o);s.locals&&(e.exports=s.locals)},230:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return!e.hideEmpty||e.avail.length>0?a("div",[e.title?a("span",[e._v(e._s(e.title)+":")]):e._e(),e._v(" "),e.avail.length>0?a("button",{staticClass:"task-btn",on:{"!mouseenter":function(t){return t.stopPropagation(),e.itemOver(t,e.cur)},click:e.select}},[e._v(e._s(e.cur?e.cur.name:"None"))]):e._e()]):e._e()};s._withStripped=!0;var o=a(1),n=a(15),i=a(3),c={props:["pick","title","choices","pickEvent","hideEmpty","mustPay"],mixins:[n.a],data(){return{pEvent:this.pickEvent||i.C,cur:o.c.state.getSlot(this.pick)}},methods:{toggleChange(){this.changing=!this.changing},select(){this.emit("choice",this.avail,{cb:e=>{e&&(this.emit(this.pEvent,e),this.cur=o.c.state.getSlot(this.pick))},elm:this.$el,title:this.title||this.pick,mustPay:this.mustPay})}},computed:{avail(){return this.choices?this.choices:o.c.state.filterItems(e=>e.slot===this.pick&&!e.disabled&&!e.locks&&!e.locked&&(e.owned||!e.buy))}}},h=a(7),r=Object(h.a)(c,s,[],!1,null,null,null);r.options.__file="src/ui/components/slotpick.vue";t.a=r.exports},281:function(e,t,a){"use strict";var s=a(209);a.n(s).a},282:function(e,t,a){(t=a(19)(!1)).push([e.i,"\nspan.space[data-v-1cd7013e] {\n\ttext-align: center;\n\tmargin: 0px var(--lg-gap);\n}\nspan.sm[data-v-1cd7013e] {\n\tmargin: var(--sm-gap);\n}\ndiv.home-view[data-v-1cd7013e] {\n\tdisplay: flex;\n\theight:100%;\n\tflex-flow: column nowrap;\n\tpadding-left:1rem;\n\tpadding-right:1rem;\n}\ndiv.home-view .content[data-v-1cd7013e] {\n\tdisplay: flex;\n\toverflow-y: hidden;\n\theight:100%;\n\tflex-direction: row;\n\twidth: 100%;\n\tpadding-top: var(--tiny-gap);\n}\ndiv.pick-slots[data-v-1cd7013e] {\n\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\n\tmargin-top:0.9em;\n\tmargin-right: 1rem;\n\tflex-basis: 5rem;\n}\ndiv.pick-obstacles[data-v-1cd7013e] {\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\tmargin-right: 1rem;\n}\ndiv.nospace[data-v-1cd7013e] {\n\tcolor: red;\n}\ndiv.furniture[data-v-1cd7013e] {\n\twidth: auto;\n\toverflow-y: auto;\n\theight:100%;\n\tmargin-bottom:var(--md-gap);\n}\ndiv.home-view .furniture table[data-v-1cd7013e] {\n\t text-transform: capitalize;\n\t flex-grow: 1;\n\t border-spacing: 0;\n     flex: 1; min-height: 0; width: 100%; max-width: 20rem;\n     display: flex; flex-direction: column;\n}\ndiv.home-view .furniture table tr[data-v-1cd7013e] { display: flex; padding: var(--sm-gap); align-items: center;}\ndiv.home-view .furniture table tr[data-v-1cd7013e]:first-child {\n        position: sticky; top: 0; background: var(--header-background-color); z-index: 1;\n}\ndiv.home-view .furniture table tr > *[data-v-1cd7013e]:nth-child(1) { flex-basis: 20%;\n}\ndiv.home-view .furniture table tr > *[data-v-1cd7013e]:nth-child(2) { flex-basis: 40%;\n}\ndiv.home-view .furniture table tr > *[data-v-1cd7013e]:nth-child(3) { flex-basis: 20%;\n}\ndiv.home-view .furniture table tr button[data-v-1cd7013e] { margin: 0; font-size: 0.75em;\n}\ntable .count[data-v-1cd7013e], table .space[data-v-1cd7013e] {\n\ttext-align: center;\n}\ntable .name[data-v-1cd7013e] {\n\tpadding: 0 var(--md-gap) 0 0.9rem;\n\tmin-width:10em;\n\ttext-align: left;\n}\ntable tr[data-v-1cd7013e]:nth-child(2n) {\n\tbackground: var( --odd-list-color );\n}\n\n",""]),e.exports=t},342:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-view"},[a("div",{staticClass:"top separate"},[a("span",[a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowMax,expression:"chkShowMax"}],attrs:{id:e.elmId("showMax"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowMax)?e._i(e.chkShowMax,null)>-1:e.chkShowMax},on:{change:function(t){var a=e.chkShowMax,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowMax=a.concat([null])):n>-1&&(e.chkShowMax=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowMax=o}}}),a("label",{attrs:{for:e.elmId("showMax")}},[e._v("达上限")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowOwned,expression:"chkShowOwned"}],attrs:{id:e.elmId("showOwn"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowOwned)?e._i(e.chkShowOwned,null)>-1:e.chkShowOwned},on:{change:function(t){var a=e.chkShowOwned,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowOwned=a.concat([null])):n>-1&&(e.chkShowOwned=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowOwned=o}}}),a("label",{attrs:{for:e.elmId("showOwn")}},[e._v("已拥有")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowUnowned,expression:"chkShowUnowned"}],attrs:{id:e.elmId("showUnowned"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowUnowned)?e._i(e.chkShowUnowned,null)>-1:e.chkShowUnowned},on:{change:function(t){var a=e.chkShowUnowned,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowUnowned=a.concat([null])):n>-1&&(e.chkShowUnowned=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowUnowned=o}}}),a("label",{attrs:{for:e.elmId("showUnowned")}},[e._v("未拥有")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowBlocked,expression:"chkShowBlocked"}],attrs:{id:e.elmId("showBlock"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowBlocked)?e._i(e.chkShowBlocked,null)>-1:e.chkShowBlocked},on:{change:function(t){var a=e.chkShowBlocked,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowBlocked=a.concat([null])):n>-1&&(e.chkShowBlocked=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowBlocked=o}}}),a("label",{attrs:{for:e.elmId("showBlock")}},[e._v("未满足")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowVance,expression:"chkShowVance"}],attrs:{id:e.elmId("showVanced"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowVance)?e._i(e.chkShowVance,null)>-1:e.chkShowVance},on:{change:function(t){var a=e.chkShowVance,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowVance=a.concat([null])):n>-1&&(e.chkShowVance=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowVance=o}}}),a("label",{attrs:{for:e.elmId("showVanced")}},[e._v("高级筛选")])])]),e._v(" "),a("filterbox",{staticClass:"inline",attrs:{prop:e.searchIt,items:e.viewable},model:{value:e.filtered,callback:function(t){e.filtered=t},expression:"filtered"}}),e._v(" "),a("span",{staticClass:"space"},[e._v("空间: "+e._s(Math.floor(e.space.free()))+" / "+e._s(Math.floor(e.space.max.value)))])],1),e._v(" "),e.showVance?a("div",{staticClass:"top separate"},[a("span",[a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowHided,expression:"chkShowHided"}],attrs:{id:e.elmId("showHide"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowHided)?e._i(e.chkShowHided,null)>-1:e.chkShowHided},on:{change:function(t){var a=e.chkShowHided,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowHided=a.concat([null])):n>-1&&(e.chkShowHided=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowHided=o}}}),a("label",{attrs:{for:e.elmId("showHide")}},[e._v("显示隐藏")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowMaxedeo,expression:"chkShowMaxedeo"}],attrs:{id:e.elmId("showMaxeo"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowMaxedeo)?e._i(e.chkShowMaxedeo,null)>-1:e.chkShowMaxedeo},on:{change:function(t){var a=e.chkShowMaxedeo,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowMaxedeo=a.concat([null])):n>-1&&(e.chkShowMaxedeo=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowMaxedeo=o}}}),a("label",{attrs:{for:e.elmId("showMaxeo")}},[e._v("上限为1")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowTfurniture,expression:"chkShowTfurniture"}],attrs:{id:e.elmId("showTF"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowTfurniture)?e._i(e.chkShowTfurniture,null)>-1:e.chkShowTfurniture},on:{change:function(t){var a=e.chkShowTfurniture,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowTfurniture=a.concat([null])):n>-1&&(e.chkShowTfurniture=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowTfurniture=o}}}),a("label",{attrs:{for:e.elmId("showTF")}},[e._v("设施支持")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowCE,expression:"chkShowCE"}],attrs:{id:e.elmId("showCE"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowCE)?e._i(e.chkShowCE,null)>-1:e.chkShowCE},on:{change:function(t){var a=e.chkShowCE,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowCE=a.concat([null])):n>-1&&(e.chkShowCE=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowCE=o}}}),a("label",{attrs:{for:e.elmId("showCE")}},[e._v("消耗电能")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowPE,expression:"chkShowPE"}],attrs:{id:e.elmId("showPE"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowPE)?e._i(e.chkShowPE,null)>-1:e.chkShowPE},on:{change:function(t){var a=e.chkShowPE,s=t.target,o=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.chkShowPE=a.concat([null])):n>-1&&(e.chkShowPE=a.slice(0,n).concat(a.slice(n+1)))}else e.chkShowPE=o}}}),a("label",{attrs:{for:e.elmId("showPE")}},[e._v("产生电能")])])])]):e._e(),e._v(" "),a("div",{staticClass:"content"},[e.hallOpen?a("hall",{on:{close:e.closeHall}}):e._e(),e._v(" "),a("div",{staticClass:"pick-slots"},[e.hallUnlocked?a("button",{staticClass:"task-btn",on:{click:e.openHall}},[e._v(e._s(e.hallName))]):e._e(),e._v(" "),a("slotpick",{attrs:{title:"居所",pick:"home","must-pay":"true"}}),e._v(" "),a("slotpick",{attrs:{title:"阵法","hide-empty":"true",pick:"front"}}),e._v(" "),a("slotpick",{attrs:{title:"位面","hide-empty":"true",pick:"werry"}}),e._v(" "),a("slotpick",{attrs:{title:"封地","hide-empty":"true",pick:"fief"}}),e._v(" "),e._m(0)],1),e._v(" "),a("div",{staticClass:"furniture"},[e.state.items.space.empty()?a("div",{staticClass:"warn-text",staticStyle:{"text-align":"center"}},[e._v("没有多余的空间(如果是刚刚更换房子,尝试刷新一下)\n\t\t"),e.homesAvail.length>0?a("span"):e._e()]):e._e(),e._v(" "),a("table",{staticClass:"furniture"},[e._m(1),e._v(" "),e._l(e.filtered,(function(t){return a("tr",{directives:[{name:"show",rawName:"v-show",value:!t.hide,expression:"!it.hide"}],key:t.id,on:{"!mouseenter":function(a){return a.stopPropagation(),e.itemOver(a,t)}}},[a("td",{staticClass:"space"},[e._v(e._s(t.cost.space||t.mod.space))]),e._v(" "),void 0!==t.max?[a("td",{staticClass:"name"},[e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"count"},[e._v(e._s(Math.round(10*t.value.valueOf())/10)+"/"+e._s(t.max.valueOf()))])]:1==t.repeat?[a("td",{staticClass:"name"},[e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"count"},[e._v(e._s(Math.round(10*t.value.valueOf())/10))])]:[a("td",{staticClass:"name"},[e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"count"},[e._v(e._s(Math.round(10*t.value.valueOf())/10)+"/1")])],e._v(" "),t.packed?e._e():a("td",[t.maxed()?a("span",{staticClass:"sm"},[e._v("Max")]):a("button",{staticClass:"buy-btn",attrs:{type:"button",disabled:!t.canUse()},on:{click:function(a){return e.emit("upgrade",t)}}},[e._v("建造")])]),e._v(" "),a("td",[a("button",{staticClass:"sell-btn",attrs:{type:"button",disabled:t.value<=0},on:{click:function(a){return e.emit("sell",t)}}},[e._v("售卖")])]),e._v(" "),a("td",{staticStyle:{display:"flex","justify-content":"center","max-width":"30px","align-items":"center"}},[a("span",{staticStyle:{cursor:"pointer"},style:{color:"true"==t.fhide?"green":""},on:{click:function(a){return e.fhideb(t)}}},[a("i",{staticClass:"fa-solid fa-square-minus"})])])],2)}))],2)]),e._v(" "),a("div",{staticClass:"pick-obstacles"},[a("div",{staticClass:"furniture"},[a("table",{staticClass:"furniture"},[a("tr",{on:{"!mouseenter":function(t){return t.stopPropagation(),e.itemOver(t,e.obstacles_info)}}},[a("th",[e._v("占地")]),e._v(" "),a("th",{staticClass:"name"},[e._v("障碍")]),e._v(" "),a("th",[e._v("数量")]),e._v(" "),a("th"),a("th")]),e._v(" "),e._l(e.obstacles,(function(t){return a("tr",{directives:[{name:"show",rawName:"v-show",value:!t.hide,expression:"!it.hide"}],key:t.id,on:{"!mouseenter":function(a){return a.stopPropagation(),e.itemOver(a,t)}}},[a("td",{staticClass:"space"},[e._v(e._s(Math.abs(t.mod.space.max)))]),e._v(" "),[a("td",{staticClass:"name"},[e._v(e._s(t.name)+"("+e._s(e.useam(t.clean_need))+")")]),e._v(" "),a("td",{staticClass:"count"},[e._v(e._s(Math.round(10*t.value.valueOf())/10))])],e._v(" "),a("td",[a("button",{staticClass:"sell-btn",attrs:{type:"button",disabled:!t.canclean()||t.value.valueOf()<1},on:{click:function(a){return e.emit("cleanobs",t)}}},[e._v("清理")])])],2)}))],2)])])],1)])};s._withStripped=!0;var o=a(1),n=a(25),i=a(24),c=a(22),h=a(15),r=a(30),l=a(230),d=a(33),u=a(4),w={props:["state"],mixins:[h.a,r.a],components:{slotpick:l.a,filterbox:d.a,hall:()=>a.e(9).then(a.bind(null,330))},data(){let e=n.a.getSubVars(u.l),t=n.a.getSubVars("furniture");return t.hide||(t.hide={}),{hide:t.hide,hallOpen:!1,showMaxed:!e.hasOwnProperty("showMaxed")||e.showMaxed,showMaxedeo:!!e.hasOwnProperty("showMaxedeo")&&e.showMaxedeo,showOwned:!e.hasOwnProperty("showOwned")||e.showOwned,showUnowned:!e.hasOwnProperty("showUnowned")||e.showUnowned,showBlocked:!e.hasOwnProperty("showBlocked")||e.showBlocked,showHided:!e.hasOwnProperty("showHided")||e.showHided,showVance:!!e.hasOwnProperty("showVance")&&e.showVance,ShowTfurniture:!!e.hasOwnProperty("ShowTfurniture")&&e.ShowTfurniture,ShowCE:!!e.hasOwnProperty("ShowCE")&&e.ShowCE,ShowPE:!!e.hasOwnProperty("ShowPE")&&e.ShowPE,filtered:null}},methods:{openHall(){this.hallOpen=!0},closeHall(){this.hallOpen=!1},useam:e=>Math.round(10*game.state.getData(e).valueOf())/10,searchIt(e,t){if(e.name.includes(t))return!0;if(e.tags){let a=e.tags;for(let e=a.length-1;e>=0;e--){if(a[e].toLowerCase().includes(t.toLowerCase()))return!0;let s=a[e];if(s=o.c.state.tagSets[s]||s,null!=s&&!s.hide&&s instanceof Object&&s.name&&s.name.includes(t))return!0}}if(e.mod&&"object"==typeof e.mod)for(let a in e.mod)if(game.state.getData(a)&&"object"==typeof game.state.getData(a)&&game.state.getData(a).name.includes(t))return!0;return!1},fhideb(e){"true"!=e.fhide?e.fhide="true":e.fhide="false"}},computed:{obstacles(){return o.c.state.obstacles.filter(e=>!this.alocked(e))},obstacles_info:()=>o.c.state.getData("obstacles_info"),hallUnlocked:()=>o.c.state.getData("evt_hall")>0,hallName:()=>c.a.hall.name,chkShowMax:{get(){return this.showMaxed},set(e){this.showMaxed=n.a.setSubVar(u.l,"showMaxed",e)}},chkShowMaxedeo:{get(){return this.showMaxedeo},set(e){this.showMaxedeo=n.a.setSubVar(u.l,"showMaxedeo",e)}},chkShowOwned:{get(){return this.showOwned},set(e){this.showOwned=n.a.setSubVar(u.l,"showOwned",e)}},chkShowUnowned:{get(){return this.showUnowned},set(e){this.showUnowned=n.a.setSubVar(u.l,"showUnowned",e)}},chkShowBlocked:{get(){return this.showBlocked},set(e){this.showBlocked=n.a.setSubVar(u.l,"showBlocked",e)}},chkShowHided:{get(){return this.showHided},set(e){this.showHided=n.a.setSubVar(u.l,"showHided",e)}},chkShowVance:{get(){return this.showVance},set(e){this.showVance=n.a.setSubVar(u.l,"showVance",e)}},chkShowTfurniture:{get(){return this.ShowTfurniture},set(e){this.ShowTfurniture=n.a.setSubVar(u.l,"ShowTfurniture",e)}},chkShowCE:{get(){return this.ShowCE},set(e){this.ShowCE=n.a.setSubVar(u.l,"ShowCE",e)}},chkShowPE:{get(){return this.ShowPE},set(e){this.ShowPE=n.a.setSubVar(u.l,"ShowPE",e)}},space(){return this.state.getData("space")},homesAvail(){return this.state.homes.filter(e=>!this.locked(e))},furniture(){let e=this.state;return e.filterItems(t=>"furniture"===t.type||e.typeCost(t.cost,"space")>0||e.typeCost(t.mod,"space")>0).sort(i.a)},viewable(){let e=this.showOwned,t=this.showUnowned,a=this.showBlocked,s=this.showMaxed,n=this.showMaxedeo,i=this.showHided,c=this.ShowTfurniture,h=this.ShowCE,r=this.ShowPE;return this.furniture.filter(l=>!this.reslocked(l)&&(!l.packed||l.value>0)&&(e||0==l.value)&&(a||l.canUse(o.c))&&(s||!l.maxed())&&(!n||1==l.max)&&(!c||l.hasTags_T_furniture())&&(!h||1==l.isConsumeElect())&&(!r||2==l.isConsumeElect())&&(t||l.value>0)&&(i||"true"!=l.fhide))}}},v=(a(281),a(7)),p=Object(v.a)(w,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticStyle:{"font-size":"10px"}},[t("i",{staticClass:"fa-solid fa-bell"}),this._v("搜索框可输入tag,结果,名字")])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",[this._v("空间")]),this._v(" "),t("th",{staticClass:"name"},[this._v("设施")]),this._v(" "),t("th",[this._v("已拥有")]),this._v(" "),t("th"),t("th")])}],!1,null,"1cd7013e",null);p.options.__file="src/ui/sections/home.vue";t.default=p.exports}}]);