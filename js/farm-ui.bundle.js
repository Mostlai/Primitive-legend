(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[8,14],{182:function(t,e,a){var r=a(185);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(19)(r,i);r.locals&&(t.exports=r.locals)},184:function(t,e,a){"use strict";a(182)},185:function(t,e,a){(e=a(18)(!1)).push([t.i,"\n.inventory[data-v-3af533c2] {\n\tdisplay:flex;\n\tflex-direction: column;\n\twidth:100%;\n\theight:100%;\n\tmin-height: 0;\n}\n.top[data-v-3af533c2] {\n\tpadding: var(--tiny-gap);\n\tpadding-top: var(--sm-gap);\n}\n.filter-box[data-v-3af533c2] {\n\tdisplay:inline;\n\tfont-size: 0.9rem;\n}\n\n/*.table-div {\n\tdisplay: grid; grid-template-columns: 1fr 1fr;\n\tflex-grow: 1;\n\theight:100%;\n}*/\n.item-table[data-v-3af533c2] {\n\tflex-grow: 1;\n\tflex-shrink: 1;\n\toverflow-y: auto;\n\tmin-height: 0;\n\tmargin: 0;\n\tpadding:0;\n\tdisplay: grid;\n\tgrid-template-columns: repeat( 2, minmax( 12rem, 1fr ));\n\tgrid-auto-rows: min-content;\n}\n.item-name[data-v-3af533c2] {\n\tflex-grow: 1;\n}\n.item-table .item[data-v-3af533c2] {\n\tmargin: var(--sm-gap);\n        padding: var(--sm-gap); align-items: center;\n}\n.item .item-action[data-v-3af533c2] { margin: var(--tiny-gap);\n}\n\n\n",""]),t.exports=e},187:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inventory"},[e("span",{staticClass:"top"},[t.nosearch?t._e():e("filterbox",{ref:"filter",attrs:{items:t.baseItems,"min-items":"7"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),t.selecting?t._e():e("span",[t.inv.max>0?e("span",[t._v(t._s(t.inv.items.length+" / "+Math.floor(t.inv.max.value)+" 被占用"))]):t._e(),t._v(" "),t.inv.count>0?e("button",{on:{click:t.sellAll}},[t._v("全部卖掉")]):t._e()])],1),t._v(" "),e("div",{staticClass:"item-table"},t._l(t.nosearch?t.baseItems:t.filtered,(function(a){return e("div",{key:a.id,staticClass:"item separate"},[e("span",{staticClass:"item-name",style:{color:a.color},on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)}}},[t._v(t._s(a.name)+t._s(a.u_time?"+"+a.u_time:"")+t._s(t.count(a)))]),t._v(" "),t.selecting?[e("button",{staticClass:"item-action",on:{click:function(e){return t.$emit("input",a)}}},[t._v("选择")])]:[e("button",{style:{color:"true"==a.favorite?"sandybrown":""},on:{click:function(e){return t.setFav(a)}}},[t._v(t._s("true"==a.favorite?"已收藏":"收藏"))]),t._v(" "),a.equippable?e("button",{staticClass:"item-action",attrs:{disabled:!t.canequi(a)},on:{click:function(e){return t.emit("equip",a,t.inv)}}},[t._v("装备")]):t._e(),t._v(" "),a.use?e("button",{staticClass:"item-action",attrs:{disabled:!t.candrink(a)},on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)},click:function(e){return t.emit(t.USE,a,t.inv)}}},[t._v("使用")]):t._e(),t._v(" "),t.take&&t.canAdd(a)?e("button",{staticClass:"item-action",on:{click:function(e){return t.onTake(a)}}},[t._v("拿去")]):t._e(),t._v(" "),"true"!=a.favorite?e("button",{staticClass:"item-action",on:{click:function(e){return t.emit("sell",a,t.inv)},"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)}}},[t._v("卖掉")]):t._e(),t._v(" "),a.value>1?e("button",{staticClass:"item-action",on:{click:function(e){return t.emit("sell",a,t.inv,a.value)},"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)}}},[t._v("全部卖掉")]):t._e()]],2)})),0),t._v(" "),t.playerFull?e("div",{staticClass:"warn-text"},[t._v("物品栏已满")]):t._e()])};r._withStripped=!0;var i=a(1),n=(a(9),a(32)),l=a(13),s=a(2),o={mixins:[l.a],props:["inv","take","value","selecting","nosearch","types"],data:()=>({filtered:null}),created(){this.USE=s.L},components:{filterbox:n.a},methods:{sellAll(){let t=this.filtered;for(let e=t.length-1;e>=0;e--)"true"!=t[e].favorite&&this.emit("sell",t[e],this.inv,t[e].value)},count:t=>t.count>1?" ("+Math.floor(t.count)+")":"",drop(t){this.inv.remove(t)},canAdd:t=>i.c.state.inventory.canAdd(t),onTake(t){this.emit("take",t),this.inv.remove(t)},canequi:t=>!(t.equneed&&!i.c.unlockTest(t.equneed,t)),candrink:t=>!(i.c.state.getData("drug_resist").valueOf()>=i.c.state.getData("drug_resist").max.valueOf()||i.c.state.getData("drug_resist").valueOf()+t.dr>i.c.state.getData("drug_resist").max.valueOf()),setFav(t){"false"==t.favorite?t.favorite="true":"true"==t.favorite&&(t.favorite="false")}},computed:{baseItems(){this.types;return this.types?this.inv.items.filter(t=>this.types.includes(t.type)):this.inv.items},playerInv(){return this.inv===i.c.state.inventory},playerFull:()=>i.c.state.inventory.full()}},p=(a(184),a(6)),c=Object(p.a)(o,r,[],!1,null,"3af533c2",null);e.default=c.exports},229:function(t,e,a){var r=a(320);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(19)(r,i);r.locals&&(t.exports=r.locals)},319:function(t,e,a){"use strict";a(229)},320:function(t,e,a){(e=a(18)(!1)).push([t.i,"\ndiv.farm[data-v-1e7a61ca]{\n\tmax-height: 100%;\n    display: flex;\n    min-height: 100%;\n    flex-direction: column;\n}\ndiv.unFarm[data-v-1e7a61ca]{\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n    min-height: 100%;\n    justify-content: center;\n}\ndiv.allFarm[data-v-1e7a61ca]{\n\tline-height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\ndiv.process[data-v-1e7a61ca]{\n\tbackground:rgb(49, 245, 0); \n\theight:28px;\n\twidth:200px;\n\tmargin-left: -2px;\n    margin-top: -2px;\n}\ndiv.info_panel[data-v-1e7a61ca]{\n\tdisplay: grid;\n    margin: 15px;\n    width: 40%;\n    flex: 30%;\n    border: 5px solid var(--list-header-border);\n    border-radius: 5px;\n    padding: 5px;\n    overflow-y: scroll;\n    grid-template-columns: repeat(2, 1fr);\n    align-items: center;\n}\ndiv.info_panel span[data-v-1e7a61ca]:first-child {\n\tgrid-column: span 2;\n    font-weight: bolder;\n    text-align: center;\n}\ndiv.seed_panel[data-v-1e7a61ca]{\n\tdisplay: flex;\n    text-align: center;\n    flex-direction: column;\n    align-items: flex-start;\n\tmargin: 15px;\n\tflex: 30%;\n\twidth: -webkit-fill-available;\n\tborder: 5px solid rgb(0, 191, 255);\n    border-radius: 5px;\n    padding: 5px;\n}\ni.fa-solid[data-v-1e7a61ca]{\n\tpadding-right: 20px;\n\twidth: 16px;\n\theight: 16px;\n}\n.seed_background[data-v-1e7a61ca]{\n\topacity: 0.05;\n    text-align: center;\n    position: relative;\n    left: 45%;\n    top: 45%;\n    transform: scale(5);\n    overflow: clip;\n}\n.farm_field[data-v-1e7a61ca]{\n\t/* margin: 15px;\n\tborder: 5px solid rgb(41, 214, 29);;\n    border-radius: 5px; */\n    padding: 5px;\n\tflex: 70%;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n}\n.grid-container[data-v-1e7a61ca] {\n  \tdisplay: grid;\n  \tgrid-template-columns: repeat(5, 1fr);\n  \tgrid-gap: 10px;\n  \tpadding: 10px;\n}\n.grid-item[data-v-1e7a61ca]{\n\t/* background: var(--task-button-text-color); */\n\ttext-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    transition: 0.5s;\n  \t/* padding: 10px; */\n\tmargin: 3px;\n  \tfont-size: 20px;\n\tborder-color: #646464;\n  \ttext-align: center;\n\tborder: 1px solid #0006;\n\tdisplay: flex;\n    overflow: clip;\n\tflex-direction: column;\n}\n",""]),t.exports=e},356:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"farm"},[0==t.fShow?e("div",{staticClass:"unFarm"},[e("h1",[t._v("此处未建造田地")]),t._v(" "),e("h3",[t._v("消耗"+t._s(t.Game.state.getData("farm_license").name)+t._s(t.getLicenseNum())+"在此建立新的田地?"),e("button",{on:{click:function(e){return t.createFarm()}}},[t._v("确认")])]),t._v(" "),e("div",{staticClass:"allFarm"},[e("span",[t._v("你在以下坐标拥有田地")]),t._v(" "),e("span",[t._v(t._s(t.getAllFarm()))])])]):e("div",[e("div",{staticStyle:{display:"flex","min-height":"28vh","max-height":"28vh"}},[e("div",{staticClass:"info_panel"},[e("span",[t._v("下一个生长节点发生在"+t._s(t.DCycle.toFixed(0))+"秒之后")]),t._v(" "),e("span",[e("i",{staticClass:"fa-solid fa-sign-hanging"}),t._v("名称:"+t._s(t.getFarmAttr("name")))]),t._v(" "),e("span",[e("i",{staticClass:"fa-solid fa-location-dot"}),t._v("坐标:("+t._s(t.playerX)+", "+t._s(t.playerY)+")")]),t._v(" "),e("span",[e("i",{staticClass:"fa-solid fa-leaf"}),t._v("地形:"+t._s(this.getTileinfo(t.floor_map_json,t.playerX,t.playerY).name)+"(i"+t._s(t.floor_map_json[t.playerY][t.playerX]-1)+")")]),t._v(" "),e("span",[e("i",{staticClass:"fa-solid fa-fire-flame-simple"}),t._v("肥沃度:("+t._s(t.getFertility())+")"+t._s(t.getFarmAttr("fertility")))]),t._v(" "),e("span",[e("i",{staticClass:"fa-solid fa-droplet"}),t._v("湿润度:"+t._s(t.getWaterPercent()?t.getWaterPercent().toFixed(1):0)),e("button",{staticStyle:{cursor:"pointer",padding:"0",margin:"0"},on:{click:function(e){return t.water()}}},[e("i",{staticClass:"fa-solid fa-hand-holding-droplet"}),t._v("浇水")])]),t._v(" "),e("span",[e("i",{staticClass:"fa-solid fa-temperature-low"}),t._v("气温:"+t._s(t.getFarmAttr("temperature")))]),t._v(" "),e("span",[e("i",{staticClass:"fa-solid fa-border-all"}),t._v("尺寸:"+t._s(t.getFarmAttr("size")))]),t._v(" "),e("div",{staticStyle:{"grid-column":"span 2","text-align":"center"}},[e("span",[t._v("为此田地重命名")]),t._v(" "),e("input",{staticClass:"nv_input",attrs:{id:t.elmId("farmName"),type:"text"},on:{input:function(e){return t.changeFarmName(e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"seed_panel"},[e("div",{staticStyle:{height:"100%",width:"100%","overflow-y":"scroll"}},t._l(t.baseItems,(function(a){return e("div",{key:a.id,staticClass:"item separate"},[e("span",{staticClass:"item-name",style:{color:a.color},on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)}}},[t._v(t._s(a.name)+t._s(a.u_time?"+"+a.u_time:"")+t._s(t.count(a)))]),t._v(" "),e("button",{staticStyle:{height:"30px"},attrs:{disabled:!a.canUse()},on:{click:function(e){return t.emit("plant",a)}}},[t._v("种植")])])})),0)])]),t._v(" "),e("div",{staticClass:"farm_field"},[e("div",{staticClass:"grid-container"},t._l(t.getFarmAttr("size"),(function(a){return e("div",{key:a,staticClass:"grid-item"},[e("div",[e("div",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"center"}},[e("span",{staticStyle:{display:"flex","text-align":"center"}},[t._v(t._s(t.getSlotPlant(a-1)))])]),t._v(" "),t.getSlotPlant(a-1)?e("div",[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("i",{staticClass:"fa-solid fa-bars-staggered",staticStyle:{transform:"scale(0.5)"}}),t._v(" "),e("div",{staticStyle:{width:"100%",height:"7px","background-color":"#CCCCCC"}},[e("div",{staticStyle:{height:"7px","background-color":"#16c926","margin-bottom":"2px",transition:"0.5s"},style:{width:100*t.getGrowPercent(a-1)+"%"}})]),t._v(" "),e("span",{staticStyle:{"font-size":"small","padding-left":"2px"}},[t._v(t._s(100*t.getGrowPercent(a-1).toFixed(1)+"%"))])])]):t._e()]),t._v(" "),t.getSlotPlant(a-1)?e("div",{staticStyle:{display:"flex","font-size":"15px","align-items":"center",width:"100%",position:"relative","justify-content":"space-between"}},[1==t.getGrowPercent(a-1)?e("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.harvest(a-1)}}},[t._m(0,!0)]):t._e(),t._v(" "),t.getGrowPercent(a-1)>=0?e("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.shovel(a-1)}}},[t._m(1,!0)]):t._e()]):t._e()])})),0)])])])};r._withStripped=!0;var i=a(36),n=a(61),l=(a(20),a(32)),s=a(187),o=(a(24),a(1)),p=a(29),c=a(13),d=a(28),v=a(3),m={props:["state"],mixins:[c.a,p.a],components:{progbar:i.a,running:n.a},data:()=>({Game:o.c,Inventory:d.c,inv:o.c.state.inventory,playerY:o.c.state.player.playerX,playerX:o.c.state.player.playerY,numRows:300,numCols:500,filtered:null,fShow:!1,floor_map_json:o.c.state.getData("map_1").floor_layer}),components:{inv:()=>Promise.resolve().then(a.bind(null,187)),invp:s.default,filterbox:l.a},computed:{seed(){return o.c.state.seed.filter(t=>!this.alocked(t))},DCycle:()=>o.c.state.player.growthCycle-o.c.state.player.nowCycle,BUY:()=>TRY_BUY,baseItems(){this.types;return this.types?this.inv.items.filter(t=>this.types.includes(t.type)):this.inv.items.filter(t=>1==t.seed)}},created(){this.floor_map_json=o.c.state.getData("map_1").floor_layer,this.floor_map_json=this.parseArray(this.floor_map_json,this.numCols,this.numRows),this.farmShow()},methods:{parseArray(t,e,a){let r=[];for(let i=0;i<a;i++){r.push([]);for(let a=0;a<e;a++){let n=i*e+a;r[i][a]=t[n]}}return r},getTileinfo(t,e,a){let r=t[a][e]-1,i=o.c.state.tile;for(let t in i)if(i[t].tindex.includes(r))return i[t]},count:t=>t.count>1?" ("+Math.floor(t.count)+")":"",farmShow(){let t=o.c.player.playerFarm;return t.overworld?t.overworld[this.playerX]&&t.overworld[this.playerX][this.playerY]&&(this.fShow=!0):this.fShow=!1,this.fShow},getAllFarm(){let t=o.c.player.playerFarm,e="";for(let a in t){e=a+":";for(let r in t[a])for(let i in t[a][r])e+="("+r+","+i+")"}return e},getSlotPlant(t){let e=o.c.player.playerFarm,a=0;return e.overworld?e.overworld[this.playerX]&&e.overworld[this.playerX][this.playerY]&&(a=e.overworld[this.playerX][this.playerY].plant[t],a||(this.$set(e.overworld[this.playerX][this.playerY].plant,t,{}),a=e.overworld[this.playerX][this.playerY].plant[t])):(this.$set(e,"overworld",{}),this.$set(e.overworld,this.playerX,{}),this.$set(e.overworld[this.playerX],this.playerY,{})),a.recipe?a.u_time?o.c.state.getData(a.recipe).name.replace("种子","")+"+"+a.u_time:o.c.state.getData(a.recipe).name.replace("种子",""):null},getFertility(){let t=o.c.player.playerFarm,e=0;for(let a in t.overworld[this.playerX][this.playerY].plant)if(t.overworld[this.playerX][this.playerY].plant[a]&&t.overworld[this.playerX][this.playerY].plant[a].recipe){e+=t.overworld[this.playerX][this.playerY].plant[a].plant_info.fertility}return this.getFarmAttr("fertility")-e},getGrowPercent(t){let e=o.c.player.playerFarm.overworld[this.playerX][this.playerY].plant[t];return e.g_d/e.plant_info.mature},getWaterPercent(){return o.c.player.playerFarm.overworld[this.playerX][this.playerY].w},water(){let t=0,e=o.c.player.playerFarm.overworld[this.playerX][this.playerY];e.w||(e.w=0),t=e.w;t+.1<1?e.w+=.1:e.w=1},harvest(t){let e=o.c.player.playerFarm,a=e.overworld[this.playerX][this.playerY].plant[t],r=a.plant_info.harvest,i=r,n=a.plant_info.root,l=a.plant_info.max_harvest,s=randomIntFromInterval(1,l);a.seed_mod.id&&(i=o.c.instance(r),i.u_time=a.u_time,i.seed_mod.id=a.seed_mod.id),this.mutation(t),o.c.create(i,!0,s),n?e.overworld[this.playerX][this.playerY].plant[t].g_d=0:e.overworld[this.playerX][this.playerY].plant[t]=null},shovel(t){o.c.player.playerFarm.overworld[this.playerX][this.playerY].plant[t]=null},weightedRandom(t){const e=t.reduce((t,e)=>t+e.weight,0),a=Math.random()*e;let r=0;for(const e of t)if(r+=e.weight,r>=a)return e},mutation_pool(){return this.weightedRandom(v.t)},mutation(t){let e=o.c.player.playerFarm,a=e.overworld[this.playerX][this.playerY].plant[t],r=o.c.state.getData(e.overworld[this.playerX][this.playerY].plant[t].recipe),i=o.c.instance(r);if(0==a.seed_mod||null==a.seed_mod.length){i.seed_mod=[];let t=this.mutation_pool();i.u_time=1,i.seed_mod.id=t.id,o.c.create(i)}else a.u_time>0&&(i.u_time=a.u_time+1,i.seed_mod=a.seed_mod,o.c.create(i))},randomIntFromInterval:(t,e)=>Math.floor(Math.random()*(e-t+1)+t),createFarm(){let t=0,e={};for(let a in o.c.state.inventory.items)"farm_license"==o.c.state.inventory.items[a].template.id&&(t=1,e=o.c.state.inventory.items[a]);if(t){let t=o.c.player.playerFarm;t.overworld||(t.overworld={}),t.overworld[this.playerX]||(t.overworld[this.playerX]={}),t.overworld[this.playerX][this.playerY]||(t.overworld[this.playerX][this.playerY]={});let a=o.c.state.tile,r=0,i=0,n=0;for(let t in a)if(a[t].tindex.includes(this.floor_map_json[this.playerY][this.playerX]-1)){r=a[t].size,i=a[t].fertility,n=a[t].temperature;break}r=Math.max(0,r+this.randomIntFromInterval(-3,3)),i=Math.max(0,i+this.randomIntFromInterval(-10,10)),n+=this.randomIntFromInterval(-3,3),t.overworld[this.playerX][this.playerY].w=0,t.overworld[this.playerX][this.playerY].name=this.playerX+","+this.playerY+"种植地",t.overworld[this.playerX][this.playerY].size=r,t.overworld[this.playerX][this.playerY].fertility=i,t.overworld[this.playerX][this.playerY].temperature=n,t.overworld[this.playerX][this.playerY].building=[],t.overworld[this.playerX][this.playerY].plant=[],o.c.state.inventory.removeCount(e,1),this.farmShow()}},getLicenseNum(){let t=0;for(let e in o.c.state.inventory.items)o.c.state.inventory.items[e].template&&"farm_license"==o.c.state.inventory.items[e].template.id&&(t=o.c.state.inventory.items[e]);if(t._count>0)return"("+t._count+")"},getFarmAttr(t){return o.c.player.playerFarm.overworld[this.playerX][this.playerY][t]},changeFarmName(t){o.c.player.playerFarm.overworld[this.playerX][this.playerY].name=t}}},f=(a(319),a(6)),u=Object(f.a)(m,r,[function(){var t=this._self._c;return t("span",[t("i",{staticClass:"fa-brands fa-get-pocket"}),this._v("收割")])},function(){var t=this._self._c;return t("span",[t("i",{staticClass:"fa-solid fa-trash"}),this._v("铲除")])}],!1,null,"1e7a61ca",null);e.default=u.exports}}]);