(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[4],{197:function(t,e,i){var n=i(259);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(20)(n,r);n.locals&&(t.exports=n.locals)},198:function(t,e,i){var n=i(261);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(20)(n,r);n.locals&&(t.exports=n.locals)},258:function(t,e,i){"use strict";var n=i(197);i.n(n).a},259:function(t,e,i){(e=i(19)(!1)).push([t.i,'\ncanvas[data-v-82591e3e] {\r\n    cursor: url(\'/images/tile.png\') 16 289, auto;;\r\n    border: 4px solid var(--task-btn-color);\r\n    border-radius: 3px;\n}\n.Map-panel[data-v-82591e3e]{    \r\n    /* display: grid; */\r\n    display: flex;\r\n    padding: 20px;\r\n    max-width: 100%;\r\n    overflow: clip;\r\n    grid-template-rows: 70% 30%;\r\n    grid-template-columns: 50% auto;\r\n    justify-content: space-evenly;\n}\n.info0[data-v-82591e3e]{\r\n    display: flex;\r\n    justify-content: center;\r\n    grid-row: 1 / span 2;\r\n    grid-column: 1 / span 1;\r\n    align-items: center;\n}\n.info1[data-v-82591e3e]{\r\n    /* grid-row: 1 / span 2;\r\n    border: 1px solid #fed33f;\r\n    border-radius: 3px;\r\n    padding: 0.75rem;\r\n    grid-column: 2 / span 1; */\n}\n.info2[data-v-82591e3e]{\r\n    /* border: 1px solid #fed33f; */\r\n    border-radius: 3px;\r\n    /* padding: 10px; */\r\n    /* grid-row: 2 / span 1; */\r\n    grid-column: 1 / span 2;\n}\n.info0[data-v-82591e3e] {\r\n  /* aspect-ratio: 1 / 1; */\r\n  padding-top: 16px;\n}\n.info_text[data-v-82591e3e]{\r\n    letter-spacing: 0.035em;\r\n    text-shadow: -9px -6px 40px currentcolor;\r\n    text-transform: uppercase;\r\n    background: rgba(255, 255, 255, 0.05);\r\n    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\r\n    border-radius: 15px;\r\n    display: flex;\r\n    height: 100%;\r\n    backdrop-filter: blur(10px);\r\n    background-position: 100% 30%;\r\n    background-color: #c8c8c8;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding: 0.35em;\r\n    border-width: 10px;\r\n    border-style: solid;\r\n    border-color: #888888;\r\n    flex-direction: column;\r\n    align-items: center;\n}\n.title[data-v-82591e3e]{\r\n    margin-left: 0.25em;\r\n    height: auto;\r\n    width: 100%;\r\n    display: flex;\r\n    color: rgb(255 255 255);\r\n    background: linear-gradient(to left,#c8c8c8 10%,#5c5c5c 50%,#c8c8c8 90%);\r\n    justify-content: center;\r\n    align-items: center;\n}\n.conquer-info2-wrapper[data-v-82591e3e] {\r\n  overflow:hidden;\r\n  line-height:1.5em\n}\n.qud-box[data-v-82591e3e] {\r\n  border:4px solid #77bfcf;\r\n  border-top:0;\r\n  border-bottom:0;\r\n  padding:0.4em 1em 0.1em 0.5em;\r\n  margin:1em 0 1em 0;\r\n  font-family:Source Code Pro,Lucida Console,Consolas;\r\n  font-size:medium;\r\n  color:#b1c9c3;\r\n  background:none;\r\n  -o-background-size:100% 4px;\r\n  -moz-background-size:100% 4px;\r\n  -webkit-background-size:100% 4px;\r\n  background-size:100% 4px\n}\n.conquer-info2-header[data-v-82591e3e] {\r\n  position:relative;\r\n  top:-1em;\r\n  padding-left:0.6em;\r\n  padding-right:0.6em;\r\n  font-size:1.2rem;\r\n  font-weight:bold;\r\n  display:inline-block\n}\n.conquer-info2-header[data-v-82591e3e]:before,\r\n.conquer-info2-header[data-v-82591e3e]:after {\r\n  content:"";\r\n  position:absolute;\r\n  height:4px;\r\n  background:#77bfcf;\r\n  top:0.5em\n}\n.conquer-info2-header[data-v-82591e3e]:before {\r\n  width:100px;\r\n  left:-100px\n}\n.conquer-info2-header[data-v-82591e3e]:after {\r\n  width:9999px;\r\n  right:-9999px\n}\n.conquer-info2-content[data-v-82591e3e] {\r\n  margin-top:-0.5em;\r\n  padding-left:0.3em;\r\n  line-height:1.5em\n}\n.conquer-info2-footer-left[data-v-82591e3e] {\r\n  position:relative;\r\n  top:0.2em;\r\n  padding-left:0.1em;\r\n  padding-right:0.1em;\r\n  font-size:1.2rem;\r\n  font-weight:bold;\r\n  color:#fff\n}\n.conquer-info2-footer-left[data-v-82591e3e]:before,\r\n.conquer-info2-footer-left[data-v-82591e3e]:after {\r\n  content:"";\r\n  position:absolute;\r\n  height:4px;\r\n  background:#77bfcf;\r\n  top:50%\n}\n.conquer-info2-footer-left[data-v-82591e3e]:before {\r\n  width:100px;\r\n  left:-98px\n}\n.conquer-info2-footer-left[data-v-82591e3e]:after {\r\n  width:9999px;\r\n  right:-9997px;\n}\n.info-box[data-v-82591e3e]{\r\n    font-family: SourceHanSerifCN-Heavy,华文中宋,Times New Roman;\r\n    color: var(--button-text-color);\r\n    display: grid;\r\n    /* grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr; */\r\n    align-items: center;\r\n    justify-items: stretch;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    text-shadow:none;\r\n    width: max-content;\n}\n.info-title[data-v-82591e3e]{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    font-size: 120%;\r\n    grid-column: span 2;\n}\n.poi[data-v-82591e3e]{\r\n    border: 4px solid green;\r\n    width: fit-content;\r\n    border-radius: 10px;\r\n    color: black;\r\n    background: green;\r\n    mix-blend-mode: hard-light;\r\n    cursor: pointer;\n}\n.poi_box[data-v-82591e3e]{\r\n    width: 100%;\r\n    /* height: 40%; */\r\n    /* left: 25%; */\r\n    /* position: relative; */\r\n    grid-template-columns: repeat(2, 1fr);\r\n    display: flex;\r\n    overflow-y: scroll;\r\n    flex-direction: column;\r\n    align-items: flex-start;\n}\r\n',""]),t.exports=e},260:function(t,e,i){"use strict";var n=i(198);i.n(n).a},261:function(t,e,i){(e=i(19)(!1)).push([t.i,"\ndiv.process[data-v-394b28c4]{\n\tbackground:#999; \n\theight:28px;\n\tmargin-left: -2px;\n    margin-top: -2px;\n}\ndiv.caa[data-v-394b28c4] {\n\tborder-bottom: 1px solid var(--separator-color);\n}\n.imgname[data-v-394b28c4]{\n    display: flex;    \n    height: 40px;\n    width: 40px;\n    justify-content: center;\n}\n.factimg[data-v-394b28c4] {\n  filter: drop-shadow(0 0 2px black);\n}\n.sec_name[data-v-394b28c4]{\n\twidth: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.sec_name[data-v-394b28c4]:hover {\n  background: linear-gradient(to right,transparent 0, #dadbda 100%);\n}\n.conquer_list .separate[data-v-394b28c4]:nth-child(2n) {\n\tbackground: var( --odd-list-color );\n}\n.conquer_unit[data-v-394b28c4]{\n\tflex-direction: column;\n}\n.conquer_name[data-v-394b28c4]{\n\tdisplay: flex;\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 100%;\n    justify-content: space-between;\n    background: linear-gradient( -25deg, rgba(147, 201, 201, 0.3), rgba(126, 125, 131, 0.3) );\n    border-top: 1px solid rgba(147, 201, 201, 1);\n    border-bottom: 1px solid rgba(147, 201, 201, 1);\n}\n.main-menu[data-v-394b28c4]{\n\tbackground: #1f1f1f63;\n    border-right: 1px solid #e5e5e5;\n    display: flex;\n    width: 60px;\n    /* height: 100vh; */\n    font-size: 20px;\n    position: sticky;\n    padding: 10px;\n    overflow: hidden;\n    overflow-y: clip;\n    flex-direction: column;\n    align-items: center;\n\tjustify-content: center;\n}\n.conquer-menu-icon[data-v-394b28c4]{\n\tmargin-top: 15px;\n\tcursor: pointer;\n}\n",""]),t.exports=e},332:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"overflow-x":"clip","overflow-y":"scroll",height:"100%"}},[i("div",{staticStyle:{display:"flex","min-height":"100%","max-height":"100%"}},[i("div",{staticClass:"main-menu"},[i("i",{staticClass:"fa-solid fa-location-crosshairs conquer-menu-icon",on:{click:function(e){t.map="location"}}}),t._v(" "),i("i",{staticClass:"fa-solid fa-map-location conquer-menu-icon",on:{click:function(e){t.map="planet"}}})]),t._v(" "),"location"==t.map?i("div",{staticStyle:{"overflow-y":"scroll","overflow-x":"clip",width:"100%"}},[i("span",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("button",{on:{click:function(e){return t.emit("openConquer")}}},[t._v("打开指示器")]),t._v(" "),i("span",[t._v("进攻需要首先满足战斗评级大于目标防御,征服上限随计算力动态变化")]),t._v(" "),i("filterbox",{attrs:{items:t.conquer,"min-items":"10"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}})],1),t._v(" "),i("div",{staticClass:"conquer_list"},t._l(t.filtered,(function(e){return i("div",{key:e.id,staticClass:"separate conquer_unit",on:{"!mouseenter":function(i){return i.stopPropagation(),t.itemOver(i,e)}}},[i("div",{staticClass:"conquer_name"},[i("span",{staticStyle:{flex:"1"}},[i("i",{staticClass:"fa-solid fa-map-location-dot"}),t._v(t._s(e.name.toTitleCase()))]),t._v(" "),i("div",{staticStyle:{flex:"1 1 0%",display:"flex",margin:"auto","justify-content":"center","align-items":"center"}},[i("i",{staticClass:"fa-solid fa-shield"}),t._v(" "),i("span",{staticStyle:{width:"15%"}},[t._v("防御:")]),t._v(" "),i("span",[t._v(t._s(Math.floor(e.power)))])]),t._v(" "),i("span",{staticStyle:{flex:"1","text-align":"right"}},[t._v("【"+t._s(e.rate>0?"⬆获取速率:":"⬇获取速率:")+t._s(Math.floor(e.rate))+"/s】")])]),t._v(" "),i("div",{staticStyle:{width:"100%"}},[i("progbar",{staticClass:"human_power",attrs:{value:Math.floor(e.val),max:Math.floor(e.max)}})],1),t._v(" "),e.buy&&!e.owned?i("button",{attrs:{disabled:!e.acanBuy(t.Game)},on:{click:function(i){return t.emit(t.BUY,e)}}},[t._v("无宣战借口")]):i("span",[i("span",{staticStyle:{float:"left","padding-top":"6px"}},[t._v("成功率:"+t._s(t.cgl(e))+"%")]),t._v(" "),i("div",{staticStyle:{float:"left"}},[i("button",{attrs:{disabled:!e.canpa(t.game)||e.val>=Math.floor(e.max)||t.f_power<e.power},on:{click:function(i){t.emit("attack",e,t.cgl_attack(e))}}},[t._v("\n\t\t\t\t\t\t\t攻击")])])])])})),0)]):t._e(),t._v(" "),"planet"==t.map?i("div",{staticStyle:{width:"100%"}},[i("div",{staticStyle:{height:"100%"}},[i("Cmap",{staticStyle:{height:"100%"}})],1)]):t._e()])])};n._withStripped=!0;var r=i(37),a=i(62),s=(i(21),i(33)),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Map-panel"},[i("div",{staticClass:"info0"},[i("canvas",{ref:"MapCanvas",attrs:{id:"gridMap"}})]),t._v(" "),i("div",{staticClass:"info1"},[i("span",{staticClass:"info_text"},[i("div",{staticClass:"info-box",staticStyle:{"border-bottom":"1px solid var(--separator-color)"}},[t.getPOI(t.playerX,t.playerY)?i("span",{staticClass:"info-title"},[t._v("-"+t._s(t.getPOI(t.playerX,t.playerY).name)+"-")]):i("span",{staticClass:"info-title"},[t._v("-"+t._s(this.getTileinfo(t.floor_map_json,t.playerX,t.playerY).name)+"-")]),t._v(" "),i("span",[t._v("坐标:("+t._s(t.playerX)+", "+t._s(t.playerY)+")")]),t._v(" "),i("span",[t._v("鼠标坐标:("+t._s(t.mouseX)+", "+t._s(t.mouseY)+")")]),t._v(" "),i("span",[t._v("移动目标:("+t._s(t.next_playerX)+", "+t._s(t.next_playerY)+")")]),t._v(" "),i("span",[t._v("移动系数:"+t._s(this.getTileinfo(t.floor_map_json,t.playerX,t.playerY).walk_speed*this.getTileinfo(t.build_map_json,t.playerX,t.playerY).walk_speed))]),t._v(" "),i("span",[t._v("移动进度:"+t._s((100*t.walk_progress).toFixed(1))+"%")]),t._v(" "),i("span",[t._v("建筑层类型:"+t._s(this.getTileinfo(t.build_map_json,t.playerX,t.playerY).name))]),t._v(" "),i("span",[t._v("地形层索引:"+t._s(t.floor_map_json[t.playerY][t.playerX]-1))]),t._v(" "),i("span",[t._v("建筑层索引:"+t._s(t.build_map_json[t.playerY][t.playerX]-1))])]),t._v(" "),i("div",{staticClass:"info-box poi_box"},t._l(t.filteredPOI,(function(e){return i("div",{key:e.id,staticStyle:{padding:"2px"}},[i("div",{staticClass:"poi",on:{click:function(i){return t.emit("openScena",e)}}},[i("span",[i("i",{staticClass:"fa-solid fa-circle-question"}),t._v(t._s(t.getAttr(e).name))])])])})),0)])])])};o._withStripped=!0;i(25);var l=i(1),p={getNeighbor:t=>[[t[0],t[1]+1],[t[0],t[1]-1],[t[0]+1,t[1]],[t[0]-1,t[1]]],cropArray(t,e,i){const n=Math.max(0,e[0]-20),r=Math.max(0,e[1]-20),a=Math.min(t.length-1,i[0]+20),s=Math.min(t[0].length-1,i[1]+20),o=[];for(let e=n;e<=a;e++){const i=[];for(let n=r;n<=s;n++)i.push({value:t[e][n],isWalked:!1});o.push(i)}return o},removeMatchingItems:(t,e)=>t.filter(t=>{if("object"==typeof t&&t.hasOwnProperty("x")&&t.hasOwnProperty("y")){let i=!1;for(let n of e)if("object"==typeof n&&n.hasOwnProperty("x")&&n.hasOwnProperty("y")&&t.x===n.x&&t.y===n.y){i=!0;break}return!i}return!0}),shortestPath(t,e,i,n){let r=i[1],a=i[0],s=n[1],o=n[0],l=[],p=[],h=a,d=r,c=[],f=[],u=[a,r];for(u.x=a,u.y=r,u.score=1/0,f.push(u);h!=o||d!=s;){let i=this.getNeighbor([h,d]);for(let n in i){let r=i[n];r.x=r[0],r.y=r[1],r.distance=Math.sqrt((r[1]-s)**2+(r[0]-o)**2);let a=t[r[1]][r[0]],p=e[r[1]][r[0]];r.walk_speed=this.getWalkSpeed(a,p),l.push(r)}l=this.removeMatchingItems(l,f);let n=this.findShorest(l);h=n.x,d=n.y,p.push(n),f.push(n),l=[]}for(let t in p){let e=p[t];c.push([e.x,e.y])}return c},findShorest(t){let e=null,i=1/0,n=-1/0;return t.forEach(t=>{let r=t.distance,a=t.walk_speed;(r<i&&0!=a||r===i&&a>n)&&(i=r,n=a,e=t)}),e},getWalkSpeed(t,e){let i=t-1,n=e-1,r=l.c.state.tile,a=1;for(let t in r)r[t].tindex.includes(i)&&(a*=r[t].walk_speed);for(let t in r)r[t].tindex.includes(n)&&(a*=r[t].walk_speed);return a},test(t){}},h=i(30),d=i(14),c=i(3),f={props:["state"],mixins:[d.a,h.a],components:{progbar:r.a,running:a.a},data:()=>({playerY:l.c.state.player.playerX,playerX:l.c.state.player.playerY,mouseX:0,mouseY:0,targetX:0,targetY:0,routeList:[],f_routeList:[],isMoving:!1,walk_progress:0,player_walk_speed:.1,next_playerY:-1,next_playerX:-1,hovering:!1,hoverStart:null,timeoutId:null,numRows:300,numCols:500,canves:[],parentWidth:0,parentHeight:0,viewportSize:15,tile_img:[],map_json:[],filtered:null}),components:{inv:()=>i.e(14).then(i.bind(null,232)),filterbox:s.a},computed:{g_c:()=>l.c.state.getData("g_c"),BUY:()=>c.J,filteredPOI(){return this.getPOI(this.playerX,this.playerY).scena?this.getPOI(this.playerX,this.playerY).scena.filter(t=>this.getAttr(t).val.value!=this.getAttr(t).max):null}},created(){window.game=l.c,this.tile_img=new Image,this.tile_img.src="./images/tile.png",this.char_img=new Image,this.char_img.src="./images/char.png",this.floor_map_json=l.c.state.getData("map_1").floor_layer,this.floor_map_json=this.parseArray(this.floor_map_json,this.numCols,this.numRows),this.build_map_json=l.c.state.getData("map_1").build_layer,this.build_map_json=this.parseArray(this.build_map_json,this.numCols,this.numRows),window.addEventListener("keydown",this.onkey)},mounted(){const t=this.$refs.MapCanvas;this.canvas_d=t;t.parentNode.offsetWidth;this.parentWidth=300;t.parentNode.offsetHeight;this.parentHeight=300,t.width=300,t.height=300,t.addEventListener("mouseout",(function(t){clearTimeout(this.timeoutId),this.hovering=!1,this.hoverStart=null,this.f_routeList=[]})),t.addEventListener("mousemove",e=>{let i=t.getBoundingClientRect(),n=e.clientX-i.left,r=e.clientY-i.top,a=t.width/this.viewportSize,s=t.height/this.viewportSize,o=Math.floor(n/a),l=Math.floor(r/s);this.mouseX=this.playerX-Math.floor(this.viewportSize/2)+o,this.mouseY=this.playerY-Math.floor(this.viewportSize/2)+l,this.hovering?(clearTimeout(this.timeoutId),this.f_routeList=[]):(this.hovering=!0,this.hoverStart=Date.now()),this.timeoutId=setTimeout(()=>{Date.now()-this.hoverStart>=1e3&&this.isMoving},1e3)}),t.addEventListener("click",t=>{if(!this.isMoving){this.targetX=this.mouseX,this.targetY=this.mouseY;let t=p.shortestPath(this.floor_map_json,this.build_map_json,[this.playerX,this.playerY],[this.targetX,this.targetY]);this.routeList=t}}),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY),setTimeout(()=>{this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)},500),setInterval(()=>{this.walk(),this.autowalk(),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)},1e3/60)},methods:{parseArray(t,e,i){let n=[];for(let r=0;r<i;r++){n.push([]);for(let i=0;i<e;i++){let a=r*e+i;n[r][i]=t[a]}}return n},autowalk(){this.routeList.length>0&&!this.isMoving?(this.next_playerX=this.routeList[0][0],this.next_playerY=this.routeList[0][1],this.isMoving=!0):this.routeList.length>0&&this.isMoving&&this.playerX==this.routeList[0][0]&&this.playerY==this.routeList[0][1]&&(this.routeList.splice(0,1),this.isMoving=!1)},walk(){if(this.isMoving){let t=this.getTileinfo(this.floor_map_json,this.playerX,this.playerY).walk_speed;this.playerX>this.next_playerX&&(this.walk_progress<1?this.walk_progress+=this.player_walk_speed*t:(this.playerX--,this.walk_progress=0,this.isMoving=!1)),this.playerX<this.next_playerX&&(this.walk_progress<1?this.walk_progress+=this.player_walk_speed*t:(this.playerX++,this.walk_progress=0,this.isMoving=!1)),this.playerY>this.next_playerY&&(this.walk_progress<1?this.walk_progress+=this.player_walk_speed*t:(this.playerY--,this.walk_progress=0,this.isMoving=!1)),this.playerY<this.next_playerY&&(this.walk_progress<1?this.walk_progress+=this.player_walk_speed*t:(this.playerY++,this.walk_progress=0,this.isMoving=!1)),l.c.state.player.playerX=this.playerY,l.c.state.player.playerY=this.playerX}},drawViewport(t,e,i,n,r,a){let s=t,o=Math.floor(e/2),l=this.parentWidth/this.viewportSize,p=r-o,h=a-o,d=s.getContext("2d");d.clearRect(0,0,s.width,s.height),d.fillStyle="black",d.fillRect(0,0,s.width,s.height);for(let t=h;t<h+e;t++)for(let s=p;s<p+e;s++)if(t>=0&&t<i&&s>=0&&s<n&&Math.pow(t-a,2)+Math.pow(s-r,2)<=Math.pow(e,2)){let e=(s-p)*l,i=(t-h)*l,n=16,r=this.floor_map_json[t][s]-1,a=r%n*16,o=16*Math.floor(r/n);d.imageSmoothingEnabled=!1,d.drawImage(this.tile_img,a,o,16,16,e,i,l,l)}for(let t=h;t<h+e;t++)for(let s=p;s<p+e;s++)if(t>=0&&t<i&&s>=0&&s<n&&Math.pow(t-a,2)+Math.pow(s-r,2)<=Math.pow(e,2)){let e=(s-p)*l,i=(t-h)*l,n=16,r=this.build_map_json[t][s]-1,a=r%n*16,o=16*Math.floor(r/n);d.imageSmoothingEnabled=!1,d.drawImage(this.tile_img,a,o,16,16,e,i,l,l)}let c=16*Math.floor(29.5),f=(this.mouseX-p)*l,u=(this.mouseY-h)*l;if(d.drawImage(this.tile_img,128,c,16,16,f,u,l,l),this.isMoving){let t=472,e=16,i=t%e*16,n=16*Math.floor(t/e),r=(this.next_playerX-p)*l,a=(this.next_playerY-h)*l;d.drawImage(this.tile_img,i,n,16,16,r,a,l,l),t=176,i=t%e*16,n=16*Math.floor(t/e),d.drawImage(this.tile_img,i,n,16,16,r+l/4,a+l/4,l/2,l/2),t=741,i=t%e*16,n=16*Math.floor(t/e);for(let t in this.routeList){let e=this.routeList[t],r=(e[0]-p)*l,a=(e[1]-h)*l;d.globalAlpha=.7,d.drawImage(this.tile_img,i,n,16,16,r,a,l,l),d.globalAlpha=1}}if(this.f_routeList.length>0){let t=743,e=t%16*16,i=16*Math.floor(t/16);for(let t in this.f_routeList){let n=this.f_routeList[t],r=(n[0]-p)*l,a=(n[1]-h)*l;d.globalAlpha=.7,d.drawImage(this.tile_img,e,i,16,16,r,a,l,l),d.globalAlpha=1,d.fillText(t,r+l/4,a+l)}}d.font="20px Arial",d.fillStyle="green";let g=(r-p)*l+l/2,m=(a-h)*l+l/2;d.beginPath(),d.moveTo(g-10,m),d.lineTo(g+10,m),d.strokeStyle="black",d.stroke(),d.beginPath(),d.moveTo(g,m-10),d.lineTo(g,m+10),d.strokeStyle="black",d.stroke()},onkey(t){87===t.keyCode&&(this.playerY-1>=0&&!this.isMoving&&(this.next_playerX=this.playerX,this.next_playerY=this.playerY-1,this.isMoving=!0),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)),65===t.keyCode&&(this.playerX-1>=0&&!this.isMoving&&(this.next_playerY=this.playerY,this.next_playerX=this.playerX-1,this.isMoving=!0),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)),83===t.keyCode&&(this.playerY+1<this.numRows&&!this.isMoving&&(this.next_playerX=this.playerX,this.next_playerY=this.playerY+1,this.isMoving=!0),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)),68===t.keyCode&&(this.playerX+1<this.numCols&&!this.isMoving&&(this.next_playerY=this.playerY,this.next_playerX=this.playerX+1,this.isMoving=!0),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY))},getTileinfo(t,e,i){let n=t[i][e]-1,r=l.c.state.tile;for(let t in r)if(r[t].tindex.includes(n))return r[t]},getPOI(t,e){let i=l.c.state.poi.filter(i=>i.x.includes(t)&&i.y.includes(e));if(0!=i.length){return i[0]}return!1},getAttr:t=>l.c.state.getData(t)}},u=(i(258),i(7)),g=Object(u.a)(f,o,[],!1,null,"82591e3e",null);g.options.__file="src/ui/sections/conquer_map.vue";var m=g.exports,_={props:["state"],mixins:[d.a,h.a],components:{progbar:r.a,running:a.a},data:()=>({game:l.c,filtered:null,map:"location"}),components:{inv:()=>i.e(14).then(i.bind(null,232)),progbar:r.a,filterbox:s.a,Cmap:m},computed:{yanzhandu:()=>l.c.state.getData("yanzhandu"),shiqi:()=>l.c.state.getData("shiqi"),zhuzhidu:()=>l.c.state.getData("zhuzhidu"),g_c:()=>l.c.state.getData("g_c"),alculation:()=>l.c.state.getData("alculation"),f_power:()=>l.c.state.getData("f_power"),f_stress:()=>l.c.state.getData("f_stress"),f_area:()=>l.c.state.getData("f_area"),human_power:()=>l.c.state.getData("human_power"),conquer(){return l.c.state.conquer.filter(t=>!this.alocked(t))},BUY:()=>c.J},methods:{fconquer(){return l.c.state.conquer.filter(t=>!this.alocked(t))},zdxn:()=>Math.round(2.5*l.c.state.getData("f_power").valueOf()+l.c.state.getData("f_power").valueOf()*(.65*l.c.state.getData("shiqi").valueOf()+.75*l.c.state.getData("zhuzhidu").valueOf()-l.c.state.getData("yanzhandu").valueOf()/l.c.state.getData("alculation").valueOf()*l.c.state.getData("yanzhandu").valueOf())/100*10)/10,cgl(t){let e=this.zdxn();return e>=6*t.power?100:Math.round(t.power>e?1e3*(e/t.power-.2):1e3*(1-t.power/2/e))/10},cgl_attack(t){let e=this.zdxn();return e>=6*t.power?100:t.power>e?e/t.power-.2:1-t.power/2/e},toLarge(t){if(t>=1){const e=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let i=1;if(t<0&&(i=-1,t=-t),t<=1)return i;let n=Math.floor((Math.log10(t)-1)/3);return n<1?i*t:i*Math.round(t/Math.pow(10,3*n))+e[n]}return t}}},v=(i(260),Object(u.a)(_,n,[],!1,null,"394b28c4",null));v.options.__file="src/ui/sections/conquer.vue";e.default=v.exports}}]);