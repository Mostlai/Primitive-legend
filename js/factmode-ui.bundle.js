(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[7],{207:function(t,e,a){var i=a(281);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(20)(i,s);i.locals&&(t.exports=i.locals)},280:function(t,e,a){"use strict";var i=a(207);a.n(i).a},281:function(t,e,a){(e=a(19)(!1)).push([t.i,"\ndiv.top_menu[data-v-456c1a24] {\n  float: left;\n\tborder-right: 1px solid var(--separator-color);\n  overflow-y: auto;\n\theight: 100%;\n  width: 100%;\n}\ndiv.bottom_menu[data-v-456c1a24] {\n  border-top: 1px solid var(--separator-color);\n  height: 100%;\n  float: left;\n\tborder-right: 1px solid var(--separator-color);\n  overflow-y: auto;\n}\ndiv.f_grid[data-v-456c1a24]{\n    padding: 5px;\n    height: 90%;\n    display: grid;\n    grid-template-columns: repeat(4, 23%);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    overflow-y: scroll;\n    justify-content: center;\n}\n/* div.detail_block {\n\theight: 41px;\n  width: auto;\n\tborder-bottom: 1px solid var(--separator-color);\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n} */\ndiv.detail_block[data-v-456c1a24]{\n    width: 100%;\n    padding: 10px;\n    border-radius: 5px;\n    height: fit-content;\n    transition: 0.5s;\n    cursor: pointer;\n    box-shadow: inset 0 -4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.25), 0 4px rgba(0, 0, 0, 0.1);\n}\ndiv.detail_block[data-v-456c1a24]:hover {\n  background: linear-gradient(to right,transparent 0, #dadbda 100%);\n}\ndiv.detail_block_factory[data-v-456c1a24] {\n    display: flex;\n    width: 100%;\n    height: 41px;\n    border-bottom: 1px solid var(--separator-color);\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\ndiv.detail_block_factory[data-v-456c1a24]:hover {\n\tbackground: var( --odd-list-color );\n}\ndiv.title_color[data-v-456c1a24] {height:20px;background:#aeaeae;display: flex; justify-content: center;}\ndiv.info_bar[data-v-456c1a24] {\n  display: flex;\n  height: 30px;\n  justify-content: space-between;\n  align-items: center;\n}\ndiv.proc_bar[data-v-456c1a24]{\n\tfloat: left;\n  position:relative;\n  height:28px;\n  width:180px;\n  margin:5px auto;\n  padding:1px ;\n}\nstrong.proc_txt[data-v-456c1a24]{\n\tposition:absolute;\n  width:180px;\n  top:4px;\n  text-align:center;\n  overflow:hidden\n}\ndiv.process[data-v-456c1a24]{\n\tbackground:#999; \n\theight:28px;\n\twidth:20px;\n\tmargin-left: -2px;\n  margin-top: -2px;\n}\nbutton.button[data-v-456c1a24] {\n    display: inline-block;\n    text-align: center;\n    padding: 5px 7px;\n    margin: 5px;\n    background-color: #efefef;\n    border-radius: 3px;\n    box-shadow: 0 1px 2px rgb(0 0 0 / 30%);\n    cursor: pointer;\n}\n.repii[data-v-456c1a24] {\n\tborder-bottom: 1px solid var(--separator-color);\n\tdisplay: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.repii[data-v-456c1a24]:hover {\n  background: linear-gradient(to right,transparent 0, #dadbda 100%);\n}\n.imgname[data-v-456c1a24]{\n    display: flex;    \n    height: 40px;\n    width: 40px;\n    justify-content: center;\n}\n.factimg[data-v-456c1a24] {\n  filter: drop-shadow(0 0 2px black);\n}\n.config_info[data-v-456c1a24]{\n  margin-bottom: var(--sm-gap);\n  border-bottom: 1px solid var(--separator-color);\n  display: flex;\n  flex-direction: column;\n}\n.config_info_panel[data-v-456c1a24]{\n  display: flex;\n  /* background: #8c8c8c; */\n  margin: 2px;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  border: 2px solid var(--separator-color);\n}\n.dock_info[data-v-456c1a24]{\n  border-top: 2px solid var(--separator-color);\n  width: 100%;\n  margin: 2px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 7px 7px;\n}\n.dock_button[data-v-456c1a24]{\n  border: 1px solid #005baf;\n  font-weight: bold;\n  cursor: pointer;\n}\ndiv.title[data-v-456c1a24]{\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--separator-color);\n  align-items: center;font-size: large;\n  font-weight: bolder;\n}\n",""]),t.exports=e},346:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"factmode",staticStyle:{height:"100%"}},[a("div",{staticStyle:{height:"49%",display:"flex","flex-direction":"row"}},[a("div",{staticStyle:{display:"flex","flex-direction":"column",width:"50%"}},[a("div",{staticStyle:{"border-right":"1px solid var(--separator-color)","border-bottom":"1px solid var(--separator-color)",display:"flex"}},[a("filterbox",{attrs:{items:t.produ_show?t.factclass:t.factorys,"min-items":"1"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}})],1),t._v(" "),t.produ_show?a("div",{staticClass:"top_menu f_grid"},t._l(t.filtered,(function(e){return a("div",{key:e.id,staticClass:"detail_block",style:{background:t.selectItem==e.id?"rgb(242 246 138)":"NONE"},on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("div",{staticStyle:{height:"40px",display:"flex","font-size":"15px","align-items":"center","justify-content":"space-between","flex-direction":"column"},on:{click:function(a){t.selectItem=e.id,t.select_class_id=""}}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center",height:"100%"}},[a("span",[a("i",{staticClass:"fa-solid fa-screwdriver-wrench",staticStyle:{"padding-right":"8px"}}),t._v(t._s(e.name))])])]),t._v(" "),a("div",{staticStyle:{width:"100%",height:"7px","background-color":"#CCCCCC"}},[a("div",{staticStyle:{height:"7px","background-color":"#00FF00"},style:{width:e.val/e.max*100+"%"}})])])])})),0):t._e(),t._v(" "),t.produ_show?t._e():a("div",{staticClass:"top_menu",staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.filtered,(function(e){return a("div",{key:e.id,staticClass:"detail_block_factory",on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("div",{staticStyle:{height:"40px",display:"flex",width:"100%"}},[a("div",{staticStyle:{"min-width":"20%",display:"flex","align-items":"center","border-right":"1px solid var(--separator-color)"}},[a("span",{staticStyle:{width:"100%",height:"40px",display:"flex","align-items":"center","justify-content":"space-evenly","font-size":"smaller"}},[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticStyle:{"min-width":"20%",display:"flex","align-items":"center",height:"40px","border-right":"1px solid var(--separator-color)","justify-content":"center"}},[a("span",[t._v(t._s(e.val)+" /"+t._s(e.max)+" ")])]),t._v(" "),a("div",{staticStyle:{"min-width":"20%",display:"flex","align-items":"center","border-right":"1px solid var(--separator-color)"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/29/XQIuDK.png",title:"占用工业用地"}}),t._v(" "),a("span",[t._v(t._s(e.mod.industry_space))])]),t._v(" "),a("div",{staticStyle:{"min-width":"20%",display:"flex","align-items":"center","border-right":"1px solid var(--separator-color)"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/29/XQIKHO.png",title:"维护所需工业电量"}}),t._v(" "),a("span",[t._v(t._s(e.mod.industry_elect))])]),t._v(" "),a("div",{staticStyle:{"min-width":"19%",display:"flex","align-items":"center",height:"40px"}},[a("button",{attrs:{disabled:!e.canbuild(t.Game)},on:{click:function(a){return t.emit("addthread",e)}}},[t._v("建造")]),t._v(" "),a("button",{attrs:{disabled:e.val<=0},on:{click:function(t){return e.amount(-1)}}},[t._v("拆除")])])])])})),0)]),t._v(" "),a("div",{staticClass:"top_menu",staticStyle:{width:"50%"}},[a("div",{staticClass:"title"},[""!=this.select_class_id?a("i",{staticClass:"fa-solid fa-left-long",staticStyle:{cursor:"pointer"},on:{click:function(e){t.selectItem=t.previousItem,t.select_class_id=""}}}):t._e(),t._v(" "),""==this.select_class_id?a("span",{staticStyle:{display:"flex","align-items":"center"}},[t._v(t._s("NONE"!=this.selectItem?t.target_rp(this.selectItem).name:"点击产品名显示详细信息"))]):t._e(),t._v(" "),""!=this.select_class_id?a("span",{staticStyle:{display:"flex","align-items":"center"}},[t._v(t._s(t.target_rp(this.select_class_id).name))]):t._e(),t._v(" "),""!=this.select_class_id?a("span",{staticStyle:{cursor:"pointer","text-shadow":"0 0 3px green"},on:{click:function(e){t.thread_config=t.target_rp(t.select_class_id)}}},[a("i",{staticClass:"fa-sharp fa-solid fa-sliders"})]):t._e()]),t._v(" "),"NONE"!=this.selectItem?a("div",{staticClass:"recipelist"},[a("progbar",{staticClass:"human_power",staticStyle:{padding:"5px","align-items":"center"},attrs:{value:t.target_rp(this.selectItem).val,max:t.target_rp(this.selectItem).max}}),t._v(" "),a("div",[t._m(0),t._v(" "),t._l(t.factrecipe_output(t.target_rp(this.selectItem)),(function(e){return a("div",{key:e.id,staticClass:"detail_block_factory",on:{click:function(a){t.select_class_id=e.id,t.previousItem=t.selectItem,t.selectItem="NONE"}}},[a("span",[a("i",{staticClass:"fa-solid fa-gears",staticStyle:{"padding-right":"3px"}}),t._v(t._s(e.name))]),t._v(" "),a("progbar",{staticClass:"human_power",staticStyle:{width:"50%","align-items":"center"},attrs:{value:e.val,max:t.target_rp(e.thread_use).max}})],1)})),t._v(" "),t._m(1),t._v(" "),t._l(t.factrecipe_input(t.target_rp(this.selectItem)),(function(e){return a("div",{key:e.id,staticClass:"detail_block_factory",on:{click:function(a){t.select_class_id=e.id,t.previousItem=t.selectItem,t.selectItem="NONE"}}},[a("span",[a("i",{staticClass:"fa-solid fa-gears",staticStyle:{"padding-right":"3px"}}),t._v(t._s(e.name))]),t._v(" "),a("progbar",{staticClass:"human_power",staticStyle:{width:"50%","align-items":"center"},attrs:{value:e.val,max:t.target_rp(e.thread_use).max}})],1)}))],2)],1):t._e(),t._v(" "),""!=this.select_class_id?a("div",[a("div",[t._m(2),t._v(" "),a("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.recipe_desc(t.target_rp(this.select_class_id))))])]),t._v(" "),t._m(3),t._v(" "),a("div",{staticStyle:{display:"flex",width:"100%","justify-content":"space-between"}},[a("span",{staticStyle:{width:"50%"},attrs:{title:"2/2(0)表示最大支持2个线程,目前启用了2个线程,剩余0个可用。"}},[t._v("启动数量:"+t._s(t.target_rp(this.select_class_id).val)+" /"+t._s(t.target_rp(t.target_rp(this.select_class_id).thread_use).max)+"("+t._s(t.target_rp(t.target_rp(this.select_class_id).thread_use).max-t.target_rp(t.target_rp(this.select_class_id).thread_use).val)+")")]),t._v(" "),a("span",{staticStyle:{width:"50%"}},[t._v("使用:"+t._s(t.target_rp(t.target_rp(this.select_class_id).thread_use).name))])]),t._v(" "),t._m(4),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{width:"50%","border-right":"1px solid var(--separator-color)"}},[a("div",{staticStyle:{height:"40px",display:"flex","align-items":"center"}},[a("i",{staticClass:"fa-solid fa-left-right",staticStyle:{"font-size":"28px","padding-right":"10px"}}),t._v(" "),a("span",[t._v(t._s(t.toLarge(Math.floor(t.target_rp(this.select_class_id).mod.industry_space*t.target_rp(this.select_class_id).val)))+" ("+t._s(t.target_rp(this.select_class_id).mod.industry_space)+"每数量)")])]),t._v(" "),a("div",{staticStyle:{height:"40px",display:"flex","align-items":"center"}},[a("i",{staticClass:"fa-solid fa-plug",staticStyle:{"font-size":"28px","padding-right":"10px"}}),t._v(" "),a("span",[t._v(t._s(t.toLarge(Math.floor(t.target_rp(this.select_class_id).mod.industry_elect.value*t.target_rp(this.select_class_id).val)))+" ("+t._s(t.target_rp(this.select_class_id).mod.industry_elect.value)+"每数量)")])])]),t._v(" "),a("div",{staticStyle:{width:"50%"}},[a("div",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.target_rp_info)}}},[a("button",{staticClass:"button",attrs:{disabled:!t.target_rp(this.select_class_id).canpay(t.Game)},on:{click:function(e){return t.emit("addthread",t.target_rp_info)}}},[t._v("增加线程")])]),t._v(" "),a("div",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.target_rp_info)}}},[a("button",{staticClass:"button",attrs:{disabled:t.target_rp(this.select_class_id).val<=0},on:{click:function(e){return t.target_rp_info.amount(-1)}}},[t._v("减少线程")])])])])]):t._e()])]),t._v(" "),a("div",{staticStyle:{height:"50%"}},[a("div",{staticClass:"bottom_menu",staticStyle:{width:"30%","overflow-x":"hidden"}},[t._m(5),t._v(" "),a("div",[a("div",{staticClass:"info_bar",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.industry_space)}}},[a("span",{staticStyle:{float:"left",width:"140px"}},[t._v("工业用地:")]),a("span",{staticStyle:{float:"right"}},[a("div",{staticClass:"proc_bar"},[a("progbar",{staticClass:"nature",attrs:{value:t.toLarge(Math.floor(t.industry_space.val)),max:t.toLarge(Math.floor(t.industry_space.max))}})],1)])]),t._v(" "),a("div",{staticClass:"info_bar",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.industry_elect)}}},[a("span",{staticStyle:{float:"left",width:"140px"}},[t._v("工业电量:")]),a("span",{staticStyle:{float:"right"}},[a("div",{staticClass:"proc_bar"},[a("progbar",{staticClass:"water",attrs:{value:t.toLarge(Math.floor(t.industry_elect.val)),max:t.toLarge(Math.floor(t.industry_elect.max))}})],1)])]),t._v(" "),a("div",{staticClass:"info_bar",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.industry_thread)}}},[a("span",{staticStyle:{float:"left",width:"140px"}},[t._v("工业线程:")]),a("span",{staticStyle:{float:"right"}},[a("div",{staticClass:"proc_bar"},[a("progbar",{staticClass:"air",attrs:{value:t.toLarge(Math.floor(t.industry_thread.val)),max:t.toLarge(Math.floor(t.industry_thread.max))}})],1)])]),t._v(" "),a("div",{staticClass:"info_bar",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.industry_open)}}},[a("span",{staticStyle:{float:"left",width:"140px"}},[t._v("物流通畅:")]),a("span",{staticStyle:{float:"right"}},[a("div",{staticClass:"proc_bar"},[a("progbar",{staticClass:"breath",attrs:{value:t.toLarge(Math.floor(t.industry_open.val)),max:t.toLarge(Math.floor(t.industry_open.max))}})],1)])])]),t._v(" "),a("div",{staticClass:"f_grid",staticStyle:{"grid-template-columns":"repeat(2, 45%)",gap:"4px 6px",height:"50%",overflow:"hidden"}},[a("div",{staticClass:"detail_block",on:{click:function(e){t.produ_show=!1}}},[a("i",{staticClass:"fa-solid fa-industry"}),t._v("生产设备")]),t._v(" "),a("div",{staticClass:"detail_block",on:{click:function(e){t.produ_show=!0}}},[a("i",{staticClass:"fa-solid fa-object-group"}),t._v("所有物品")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])]),t._v(" "),"false"==t.thread_config?a("div",{staticClass:"bottom_menu",staticStyle:{width:"70%"}},[a("div",{staticStyle:{height:"auto"}},[a("filterbox",{staticStyle:{"border-bottom":"1px solid var(--separator-color)"},attrs:{items:t.factrep,"min-items":"1"},model:{value:t.repfiltered,callback:function(e){t.repfiltered=e},expression:"repfiltered"}}),t._v(" "),a("div",t._l(t.repfiltered,(function(e){return a("div",{key:e.id,staticClass:"repii",on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("div",{staticStyle:{display:"flex","align-items":"center",width:"70%"}},[a("span",{staticStyle:{width:"30%"}},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticStyle:{width:"45%"},attrs:{title:"2/2(0)表示最大支持2个线程,目前启用了2个线程,剩余0个可用。"}},[a("span",[a("span",{staticStyle:{cursor:"pointer","margin-right":"2px"},on:{click:function(t){e.working=!e.working}}},[t._v(t._s(1==e.working?"⏸":"▶"))]),t._v(" "),a("span",{staticStyle:{cursor:"pointer","text-shadow":"0 0 3px green"},on:{click:function(a){t.thread_config=e}}},[a("i",{staticClass:"fa-sharp fa-solid fa-sliders"})])]),t._v("\n                  "+t._s(e.val)+" / "+t._s(t.target_rp(e.thread_use).max)+"("+t._s(t.target_rp(e.thread_use).max-t.target_rp(e.thread_use).val)+")\n                ")]),t._v(" "),a("span",{staticStyle:{width:"20%"}},[t._v(t._s(t.toLarge(Math.floor(e.val*e.mod.industry_space)))+"地")]),t._v(" "),a("span",{staticStyle:{width:"20%"}},[t._v(t._s(t.toLarge(Math.floor(e.val*e.mod.industry_elect.value)))+"电")]),t._v(" "),a("span",{staticStyle:{width:"20%"}},[t._v(t._s(t.target_rp(e.thread_use).name))])]),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("button",{attrs:{disabled:!e.canpay(t.Game)},on:{click:function(a){return t.emit("addthread",e)}}},[t._v("增加线程")]),t._v(" "),a("button",{attrs:{disabled:e.val<=0},on:{click:function(t){return e.amount(-1)}}},[t._v("减少线程")])])])})),0)],1)]):t._e(),t._v(" "),"false"!=t.thread_config?a("div",{staticClass:"bottom_menu",staticStyle:{width:"70%"}},[a("div",{staticStyle:{"border-bottom":"1px solid var(--separator-color)","text-align":"center"}},[a("span",{staticStyle:{cursor:"pointer",float:"left"},on:{click:function(e){t.thread_config="false"}}},[t._v("◀")]),t._v(" "),a("span",[t._v(t._s(t.thread_config.name)+"-线程配置")])]),t._v(" "),a("div",[a("div",{staticClass:"config_info"},[a("span",{staticStyle:{cursor:"pointer","margin-right":"2px"},on:{click:function(e){t.thread_config.working=!t.thread_config.working}}},[t._v("输入开关(点击切换到):"+t._s(1==t.thread_config.working?"暂停":"运行"))]),t._v(" "),a("span",{staticStyle:{width:"100%","text-align":"center"}},[t._v("输入情况")]),t._v(" "),t._l(t.target_rp(t.thread_config.id).inpval,(function(e){return a("div",{key:e.id,staticClass:"config_info_panel"},[a("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"},on:{"!mouseenter":function(a){a.stopPropagation(),t.itemOver(a,t.target_rp(e.id))}}},[a("div",{staticStyle:{width:"50%",display:"flex","align-items":"center"}},[a("div",{staticClass:"imgname"},[a("img",{staticClass:"factimg",attrs:{src:t.getimg(e.id)}})]),t._v(" "),a("span",[t._v(t._s(t.target_rp(e.id).name))])]),t._v(" "),a("progbar",{staticClass:"human_power",attrs:{value:Math.floor(e.now_val),max:Math.floor(e.base_val*t.thread_config.val)}})],1),t._v(" "),a("div",{staticClass:"dock_info"},[a("span",[t._v("物品类别:"+t._s(t.getKind(t.target_rp(e.id))))]),t._v(" "),a("span",[t._v("装卸速度:"+t._s(t.getRate(t.target_rp(e.id)))+"+"+t._s(""!=e.dock_id?Math.round(t.getrate(t.target_rp(e.dock_id))*e.dock_val*10)/10:0))]),t._v(" "),a("div",[a("span",[t._v("装卸单元:"+t._s(""!=e.dock_id?t.getname(t.target_rp(e.dock_id)):"无")+"["+t._s(e.dock_val)+"/"+t._s(t.thread_config.val)+"]")]),t._v(" "),a("button",{staticClass:"dock_button",attrs:{disabled:t.target_rp_val(e.dock_id)<1||e.dock_val>=t.thread_config.val},on:{click:function(a){return t.addDock(e)}}},[t._v("增加")]),t._v(" "),a("button",{staticClass:"dock_button",attrs:{disabled:e.dock_val<=0},on:{click:function(a){return t.removeDock(e)}}},[t._v("减少")])]),t._v(" "),a("div",[a("button",{staticClass:"dock_button",on:{click:function(a){return t.setdock(e,t.thread_config)}}},[t._v("应用")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectDockEnd,expression:"selectDockEnd"}],staticStyle:{height:"90%"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectDockEnd=e.target.multiple?a:a[0]},function(e){return t.selectDock(e)}]}},t._l(t.dock_unit,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name)+"-("+t._s(e.val)+")-速度:"+t._s(t.getrate(e)))])})),0)])])])}))],2),t._v(" "),a("div",{staticClass:"config_info"},[a("span",{staticStyle:{width:"100%","text-align":"center"}},[t._v("输出情况")]),t._v(" "),t._l(t.target_rp(t.thread_config.id).outpval,(function(e){return a("div",{key:e.id,staticClass:"config_info_panel"},[a("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"},on:{"!mouseenter":function(a){a.stopPropagation(),t.itemOver(a,t.target_rp(e.id))}}},[a("div",{staticStyle:{width:"50%",display:"flex","align-items":"center"}},[a("div",{staticClass:"imgname"},[a("img",{staticClass:"factimg",attrs:{src:t.getimg(e.id)}})]),t._v(" "),a("span",[t._v(t._s(t.target_rp(e.id).name))])]),t._v(" "),a("progbar",{staticClass:"human_power",attrs:{value:Math.floor(e.now_val),max:Math.floor(e.base_val*t.thread_config.val)}})],1),t._v(" "),a("div",{staticClass:"dock_info"},[a("span",[t._v("物品类别:"+t._s(t.getKind(t.target_rp(e.id))))]),t._v(" "),a("span",[t._v("装卸速度:"+t._s(t.getRate(t.target_rp(e.id)))+"+"+t._s(""!=e.dock_id?Math.round(t.getrate(t.target_rp(e.dock_id))*e.dock_val*10)/10:0))]),t._v(" "),a("div",[a("span",[t._v("装卸单元:"+t._s(""!=e.dock_id?t.getname(t.target_rp(e.dock_id)):"无")+"["+t._s(e.dock_val)+"/"+t._s(t.thread_config.val)+"]")]),t._v(" "),a("button",{staticClass:"dock_button",attrs:{disabled:t.target_rp_val(e.dock_id)<1||e.dock_val>=t.thread_config.val},on:{click:function(a){return t.addDock(e)}}},[t._v("增加")]),t._v(" "),a("button",{staticClass:"dock_button",attrs:{disabled:e.dock_val<=0},on:{click:function(a){return t.removeDock(e)}}},[t._v("减少")])]),t._v(" "),a("div",[a("button",{staticClass:"dock_button",on:{click:function(a){return t.setdock(e,t.thread_config)}}},[t._v("应用")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectDockEnd,expression:"selectDockEnd"}],staticStyle:{height:"90%"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectDockEnd=e.target.multiple?a:a[0]},function(e){return t.selectDock(e)}]}},t._l(t.dock_unit,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name)+"-("+t._s(e.val)+")-速度:"+t._s(t.getrate(e)))])})),0)])])])}))],2)])]):t._e()])])};i._withStripped=!0;var s=a(37),r=a(61),n=(a(21),a(33)),o=(a(25),a(1)),l=a(30),c={props:["state"],mixins:[a(14).a,l.a],components:{progbar:s.a,running:r.a},data:()=>({Game:o.c,filtered:null,repfiltered:null,produ_show:!0,thread_config:"false",selectItem:"NONE",selectClassEnd:"NONE",selectDockEnd:"NONE",select_class_id:"",previousItem:"NONE",select_dock_id:"",true_dock_id:""}),components:{progbar:s.a,inv:()=>a.e(14).then(a.bind(null,230)),filterbox:n.a},computed:{factclass(){return o.c.state.factclass.filter(t=>!this.alocked(t))},factorys(){return o.c.state.factory.filter(t=>!this.alocked(t))},factrep(){return o.c.state.factrecipe.filter(t=>0!=t.val&&!this.alocked(t)&&null!=t.thread_use)},dock_unit(){return o.c.state.factclass.filter(t=>!this.alocked(t)&&t.hasTag("装卸单元"))},industry_space:()=>o.c.state.getData("industry_space"),industry_elect:()=>o.c.state.getData("industry_elect"),industry_thread:()=>o.c.state.getData("industry_thread"),industry_open:()=>o.c.state.getData("industry_open"),target_rp_info(){return o.c.state.getData(this.select_class_id)},BUY:()=>TRY_BUY},methods:{factrecipe_input(t){return o.c.state.factrecipe.filter(e=>this.inInput(e,t)&&!this.alocked(e))},factrecipe_output(t){return o.c.state.factrecipe.filter(e=>this.inOutput(e,t)&&!this.alocked(e))},getimg(t){let e=o.c.state.getData(t);return null!=e.img?e.img:o.c.state.getData("g_c").f_n_img},target_dock_info(){return o.c.state.getData(this.select_dock_id)},target_rp:t=>o.c.state.getData(t),target_rp_val:t=>""!=t?o.c.state.getData(t):0,change_color(t,e){let a="";return a=t>0?"green":t<0?"red":"",e<=0&&(a=""),a},change_color_id(t){if(!t.rp_target)return"black";{let e=o.c.state.getData(t.rp_target),a=1;if(e.stop_follow||e.max_follow){if(e.stop_follow)for(let t=e.stop_follow.length-1;t>=0;t--)o.c.state.getData(e.stop_follow[t]).val<=1&&(a=0);if(e.max_follow)for(let t=e.max_follow.length-1;t>=0;t--)o.c.state.getData(e.max_follow[t]).val>=o.c.state.getData(e.max_follow[t]).max&&(a=0);return 1==a?"#0fcb0f":"red"}}},selectClass(t){this.select_class_id=t.target.value},selectDock(t){this.select_dock_id=t.target.value},toLarge(t){if(t>=1){const e=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let a=1;if(t<0&&(a=-1,t=-t),t<=1)return a;let i=Math.floor((Math.log10(t)-1)/3);return i<1?a*t:a*Math.round(t/Math.pow(10,3*i))+e[i]}return t},getKind:t=>t.hasTag("固体")?"固体":t.hasTag("液体")?"液体":t.hasTag("气体")?"气体":"固体",getRate:t=>t.hasTag("液体")?8:t.hasTag("气体")?20:1,setdock(t){this.true_dock_id=this.select_dock_id,t.dock_id=this.true_dock_id,t.dock_val=0},addDock(t){this.target_rp(t.dock_id).amount(-1),t.dock_val+=1},removeDock(t){this.target_rp(t.dock_id).amount(1),t.dock_val-=1},getrate:t=>null!=t?t.d_rate:0,getname:t=>null!=t?t.name:"无",recipe_desc(t){let e="输入:",a="\n输出:";for(let a in t.inp)e+=this.target_rp(t.inp[a].id).name+t.inp[a].base_val+"单位  ";for(let e in t.outp)a+=this.target_rp(t.outp[e].id).name+t.outp[e].base_val+"单位  ";return e+a}}},d=(a(280),a(7)),_=Object(d.a)(c,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title_color"},[e("span",[this._v("被下类配方所生产")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title_color"},[e("span",[this._v("被下类配方所消耗")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title_color"},[e("span",[this._v("模式描述")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"title_color"},[e("span",[this._v("模式线程")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"title_color"},[e("span",[this._v("模式修正")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[e("i",{staticClass:"fa-solid fa-tv"}),this._v("当前模型信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail_block"},[e("i",{staticClass:"fa-solid fa-screwdriver-wrench"}),this._v("制成品")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail_block"},[e("i",{staticClass:"fa-solid fa-cubes-stacked"}),this._v("中间产品")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail_block"},[e("i",{staticClass:"fa-brands fa-pagelines"}),this._v("原材料")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail_block"},[e("i",{staticClass:"fa-solid fa-oil-well"}),this._v("矿脉资源")])}],!1,null,"456c1a24",null);_.options.__file="src/ui/sections/factmode.vue";e.default=_.exports}}]);