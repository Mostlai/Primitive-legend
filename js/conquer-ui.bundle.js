(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[4],{200:function(t,e,i){var n=i(267);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(19)(n,a);n.locals&&(t.exports=n.locals)},201:function(t,e,i){var n=i(269);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(19)(n,a);n.locals&&(t.exports=n.locals)},266:function(t,e,i){"use strict";i(200)},267:function(t,e,i){(e=i(18)(!1)).push([t.i,'\ncanvas[data-v-51e712f3] {\r\n    cursor: url(\'/images/tile.png\') 16 289, auto;;\r\n    border: 4px solid var(--task-btn-color);\r\n    border-radius: 3px;\n}\n.Map-panel[data-v-51e712f3]{    \r\n    /* display: grid; */\r\n    display: flex;\r\n    padding: 20px;\r\n    max-width: 100%;\r\n    overflow: clip;\r\n    grid-template-rows: 70% 30%;\r\n    grid-template-columns: 50% auto;\r\n    justify-content: space-evenly;\n}\n.info0[data-v-51e712f3]{\r\n    display: flex;\r\n    justify-content: center;\r\n    grid-row: 1 / span 2;\r\n    grid-column: 1 / span 1;\r\n    align-items: center;\n}\n.info1[data-v-51e712f3]{\r\n    /* grid-row: 1 / span 2;\r\n    border: 1px solid #fed33f;\r\n    border-radius: 3px;\r\n    padding: 0.75rem;\r\n    grid-column: 2 / span 1; */\n}\n.info2[data-v-51e712f3]{\r\n    /* border: 1px solid #fed33f; */\r\n    border-radius: 3px;\r\n    /* padding: 10px; */\r\n    /* grid-row: 2 / span 1; */\r\n    grid-column: 1 / span 2;\n}\n.info0[data-v-51e712f3] {\r\n  /* aspect-ratio: 1 / 1; */\r\n  padding-top: 16px;\n}\n.info_text[data-v-51e712f3]{\r\n    letter-spacing: 0.035em;\r\n    text-shadow: -9px -6px 40px currentcolor;\r\n    text-transform: uppercase;\r\n    background: rgba(255, 255, 255, 0.05);\r\n    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);\r\n    border-radius: 15px;\r\n    display: flex;\r\n    height: 100%;\r\n    backdrop-filter: blur(10px);\r\n    background-position: 100% 30%;\r\n    background-color: #c8c8c8;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding: 0.35em;\r\n    border-width: 10px;\r\n    border-style: solid;\r\n    border-color: #888888;\r\n    flex-direction: column;\r\n    align-items: center;\n}\n.title[data-v-51e712f3]{\r\n    margin-left: 0.25em;\r\n    height: auto;\r\n    width: 100%;\r\n    display: flex;\r\n    color: rgb(255 255 255);\r\n    background: linear-gradient(to left,#c8c8c8 10%,#5c5c5c 50%,#c8c8c8 90%);\r\n    justify-content: center;\r\n    align-items: center;\n}\n.conquer-info2-wrapper[data-v-51e712f3] {\r\n  overflow:hidden;\r\n  line-height:1.5em\n}\n.qud-box[data-v-51e712f3] {\r\n  border:4px solid #77bfcf;\r\n  border-top:0;\r\n  border-bottom:0;\r\n  padding:0.4em 1em 0.1em 0.5em;\r\n  margin:1em 0 1em 0;\r\n  font-family:Source Code Pro,Lucida Console,Consolas;\r\n  font-size:medium;\r\n  color:#b1c9c3;\r\n  background:none;\r\n  -o-background-size:100% 4px;\r\n  -moz-background-size:100% 4px;\r\n  -webkit-background-size:100% 4px;\r\n  background-size:100% 4px\n}\n.conquer-info2-header[data-v-51e712f3] {\r\n  position:relative;\r\n  top:-1em;\r\n  padding-left:0.6em;\r\n  padding-right:0.6em;\r\n  font-size:1.2rem;\r\n  font-weight:bold;\r\n  display:inline-block\n}\n.conquer-info2-header[data-v-51e712f3]:before,\r\n.conquer-info2-header[data-v-51e712f3]:after {\r\n  content:"";\r\n  position:absolute;\r\n  height:4px;\r\n  background:#77bfcf;\r\n  top:0.5em\n}\n.conquer-info2-header[data-v-51e712f3]:before {\r\n  width:100px;\r\n  left:-100px\n}\n.conquer-info2-header[data-v-51e712f3]:after {\r\n  width:9999px;\r\n  right:-9999px\n}\n.conquer-info2-content[data-v-51e712f3] {\r\n  margin-top:-0.5em;\r\n  padding-left:0.3em;\r\n  line-height:1.5em\n}\n.conquer-info2-footer-left[data-v-51e712f3] {\r\n  position:relative;\r\n  top:0.2em;\r\n  padding-left:0.1em;\r\n  padding-right:0.1em;\r\n  font-size:1.2rem;\r\n  font-weight:bold;\r\n  color:#fff\n}\n.conquer-info2-footer-left[data-v-51e712f3]:before,\r\n.conquer-info2-footer-left[data-v-51e712f3]:after {\r\n  content:"";\r\n  position:absolute;\r\n  height:4px;\r\n  background:#77bfcf;\r\n  top:50%\n}\n.conquer-info2-footer-left[data-v-51e712f3]:before {\r\n  width:100px;\r\n  left:-98px\n}\n.conquer-info2-footer-left[data-v-51e712f3]:after {\r\n  width:9999px;\r\n  right:-9997px;\n}\n.info-box[data-v-51e712f3]{\r\n    font-family: SourceHanSerifCN-Heavy,华文中宋,Times New Roman;\r\n    color: var(--button-text-color);\r\n    display: grid;\r\n    /* grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr; */\r\n    align-items: center;\r\n    justify-items: stretch;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    text-shadow:none;\r\n    width: max-content;\n}\n.info-title[data-v-51e712f3]{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    font-size: 120%;\r\n    grid-column: span 2;\n}\n.poi[data-v-51e712f3]{\r\n    border: 4px solid green;\r\n    width: fit-content;\r\n    border-radius: 10px;\r\n    color: black;\r\n    background: green;\r\n    mix-blend-mode: hard-light;\r\n    cursor: pointer;\n}\n.poi_box[data-v-51e712f3]{\r\n    width: 100%;\r\n    /* height: 40%; */\r\n    /* left: 25%; */\r\n    /* position: relative; */\r\n    grid-template-columns: repeat(2, 1fr);\r\n    display: flex;\r\n    overflow-y: scroll;\r\n    flex-direction: column;\r\n    align-items: flex-start;\n}\r\n',""]),t.exports=e},268:function(t,e,i){"use strict";i(201)},269:function(t,e,i){(e=i(18)(!1)).push([t.i,"\ndiv.process[data-v-e00489ba]{\n\tbackground:#999; \n\theight:28px;\n\tmargin-left: -2px;\n    margin-top: -2px;\n}\ndiv.caa[data-v-e00489ba] {\n\tborder-bottom: 1px solid var(--separator-color);\n}\n.imgname[data-v-e00489ba]{\n    display: flex;    \n    height: 40px;\n    width: 40px;\n    justify-content: center;\n}\n.factimg[data-v-e00489ba] {\n  filter: drop-shadow(0 0 2px black);\n}\n.sec_name[data-v-e00489ba]{\n\twidth: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.sec_name[data-v-e00489ba]:hover {\n  background: linear-gradient(to right,transparent 0, #dadbda 100%);\n}\n.conquer_list .separate[data-v-e00489ba]:nth-child(2n) {\n\tbackground: var( --odd-list-color );\n}\n.conquer_unit[data-v-e00489ba]{\n\tflex-direction: column;\n}\n.conquer_name[data-v-e00489ba]{\n\tdisplay: flex;\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 100%;\n    justify-content: space-between;\n    background: linear-gradient( -25deg, rgba(147, 201, 201, 0.3), rgba(126, 125, 131, 0.3) );\n    border-top: 1px solid rgba(147, 201, 201, 1);\n    border-bottom: 1px solid rgba(147, 201, 201, 1);\n}\n.main-menu[data-v-e00489ba]{\n\tbackground: #1f1f1f63;\n    border-right: 1px solid #e5e5e5;\n    display: flex;\n    width: 60px;\n    /* height: 100vh; */\n    font-size: 20px;\n    position: sticky;\n    padding: 10px;\n    overflow: hidden;\n    overflow-y: clip;\n    flex-direction: column;\n    align-items: center;\n\tjustify-content: center;\n}\n.conquer-menu-icon[data-v-e00489ba]{\n\tmargin-top: 15px;\n\tcursor: pointer;\n}\n",""]),t.exports=e},352:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"overflow-x":"clip","overflow-y":"scroll",height:"100%"}},[e("div",{staticStyle:{display:"flex","min-height":"100%","max-height":"100%"}},[e("div",{staticClass:"main-menu"},[e("i",{staticClass:"fa-solid fa-location-crosshairs conquer-menu-icon",on:{click:function(e){t.map="location"}}}),t._v(" "),e("i",{staticClass:"fa-solid fa-map-location conquer-menu-icon",on:{click:function(e){t.map="planet"}}})]),t._v(" "),"location"==t.map?e("div",{staticStyle:{"overflow-y":"scroll","overflow-x":"clip",width:"100%"}},[e("span",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[e("button",{on:{click:function(e){return t.emit("openConquer")}}},[t._v("打开指示器")]),t._v(" "),e("span",[t._v("进攻需要首先满足战斗评级大于目标防御,征服上限随计算力动态变化")]),t._v(" "),e("filterbox",{attrs:{items:t.conquer,"min-items":"10"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}})],1),t._v(" "),e("div",{staticClass:"conquer_list"},t._l(t.filtered,(function(i){return e("div",{key:i.id,staticClass:"separate conquer_unit",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,i)}}},[e("div",{staticClass:"conquer_name"},[e("span",{staticStyle:{flex:"1"}},[e("i",{staticClass:"fa-solid fa-map-location-dot"}),t._v(t._s(i.name.toTitleCase()))]),t._v(" "),e("div",{staticStyle:{flex:"1 1 0%",display:"flex",margin:"auto","justify-content":"center","align-items":"center"}},[e("i",{staticClass:"fa-solid fa-shield"}),t._v(" "),e("span",{staticStyle:{width:"15%"}},[t._v("防御:")]),t._v(" "),e("span",[t._v(t._s(Math.floor(i.power)))])]),t._v(" "),e("span",{staticStyle:{flex:"1","text-align":"right"}},[t._v("【"+t._s(i.rate>0?"⬆获取速率:":"⬇获取速率:")+t._s(Math.floor(i.rate))+"/s】")])]),t._v(" "),e("div",{staticStyle:{width:"100%"}},[e("progbar",{staticClass:"human_power",attrs:{value:Math.floor(i.val),max:Math.floor(i.max)}})],1),t._v(" "),i.buy&&!i.owned?e("button",{attrs:{disabled:!i.acanBuy(t.Game)},on:{click:function(e){return t.emit(t.BUY,i)}}},[t._v("无宣战借口")]):e("span",[e("span",{staticStyle:{float:"left","padding-top":"6px"}},[t._v("成功率:"+t._s(t.cgl(i))+"%")]),t._v(" "),e("div",{staticStyle:{float:"left"}},[e("button",{attrs:{disabled:!i.canpa(t.game)||i.val>=Math.floor(i.max)||t.f_power<i.power},on:{click:function(e){t.emit("attack",i,t.cgl_attack(i))}}},[t._v("\n\t\t\t\t\t\t\t攻击")])])])])})),0)]):t._e(),t._v(" "),"planet"==t.map?e("div",{staticStyle:{width:"100%"}},[e("div",{staticStyle:{height:"100%"}},[e("Cmap",{staticStyle:{height:"100%"}})],1)]):t._e()])])};n._withStripped=!0;var a=i(36),r=i(61),s=(i(20),i(32)),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Map-panel"},[e("div",{staticClass:"info0"},[e("canvas",{ref:"MapCanvas",attrs:{id:"gridMap"}})]),t._v(" "),e("div",{staticClass:"info1"},[e("span",{staticClass:"info_text"},[e("div",{staticClass:"info-box",staticStyle:{"border-bottom":"1px solid var(--separator-color)"}},[t.getPOI(t.playerX,t.playerY)?e("span",{staticClass:"info-title"},[t._v("-"+t._s(t.getPOI(t.playerX,t.playerY).name)+"-")]):e("span",{staticClass:"info-title"},[t._v("-"+t._s(this.getTileinfo(t.floor_map_json,t.playerX,t.playerY).name)+"-")]),t._v(" "),e("span",[t._v("坐标:("+t._s(t.playerX)+", "+t._s(t.playerY)+")")]),t._v(" "),e("span",[t._v("鼠标坐标:("+t._s(t.mouseX)+", "+t._s(t.mouseY)+")")]),t._v(" "),e("span",[t._v("移动目标:("+t._s(t.next_playerX)+", "+t._s(t.next_playerY)+")")]),t._v(" "),e("span",[t._v("移动系数:"+t._s(this.getTileinfo(t.floor_map_json,t.playerX,t.playerY).walk_speed*this.getTileinfo(t.build_map_json,t.playerX,t.playerY).walk_speed))]),t._v(" "),e("span",[t._v("移动进度:"+t._s((100*t.walk_progress).toFixed(1))+"%")]),t._v(" "),e("span",[t._v("建筑层类型:"+t._s(this.getTileinfo(t.build_map_json,t.playerX,t.playerY).name))]),t._v(" "),e("span",[t._v("地形层索引:"+t._s(t.floor_map_json[t.playerY][t.playerX]-1))]),t._v(" "),e("span",[t._v("建筑层索引:"+t._s(t.build_map_json[t.playerY][t.playerX]-1))])]),t._v(" "),e("div",{staticClass:"info-box poi_box"},t._l(t.filteredPOI,(function(i){return e("div",{key:i.id,staticStyle:{padding:"2px"}},[e("div",{staticClass:"poi",on:{click:function(e){return t.emit("openScena",i)}}},[e("span",[e("i",{staticClass:"fa-solid fa-circle-question"}),t._v(t._s(t.getAttr(i).name))])])])})),0)])])])};o._withStripped=!0;i(24);var l=i(1),p={getNeighbor:t=>[[t[0],t[1]+1],[t[0],t[1]-1],[t[0]+1,t[1]],[t[0]-1,t[1]]],cropArray(t,e,i){const n=Math.max(0,e[0]-20),a=Math.max(0,e[1]-20),r=Math.min(t.length-1,i[0]+20),s=Math.min(t[0].length-1,i[1]+20),o=[];for(let e=n;e<=r;e++){const i=[];for(let n=a;n<=s;n++)i.push({value:t[e][n],isWalked:!1});o.push(i)}return o},removeMatchingItems:(t,e)=>t.filter(t=>{if("object"==typeof t&&t.hasOwnProperty("x")&&t.hasOwnProperty("y")){let i=!1;for(let n of e)if("object"==typeof n&&n.hasOwnProperty("x")&&n.hasOwnProperty("y")&&t.x===n.x&&t.y===n.y){i=!0;break}return!i}return!0}),shortestPath(t,e,i,n){let a=i[1],r=i[0],s=n[1],o=n[0],l=[],p=[],h=r,d=a,c=[],f=[],u=[r,a];for(u.x=r,u.y=a,u.score=1/0,f.push(u);h!=o||d!=s;){let i=this.getNeighbor([h,d]);for(let n in i){let a=i[n];a.x=a[0],a.y=a[1],a.distance=Math.sqrt((a[1]-s)**2+(a[0]-o)**2);let r=t[a[1]][a[0]],p=e[a[1]][a[0]];a.walk_speed=this.getWalkSpeed(r,p),l.push(a)}l=this.removeMatchingItems(l,f);let n=this.findShorest(l);h=n.x,d=n.y,p.push(n),f.push(n),l=[]}for(let t in p){let e=p[t];c.push([e.x,e.y])}return c},findShorest(t){let e=null,i=1/0,n=-1/0;return t.forEach(t=>{let a=t.distance,r=t.walk_speed;(a<i&&0!=r||a===i&&r>n)&&(i=a,n=r,e=t)}),e},getWalkSpeed(t,e){let i=t-1,n=e-1,a=l.c.state.tile,r=1;for(let t in a)a[t].tindex.includes(i)&&(r*=a[t].walk_speed);for(let t in a)a[t].tindex.includes(n)&&(r*=a[t].walk_speed);return r},test(t){}},h=i(29),d=i(12),c=i(2),f={props:["state"],mixins:[d.a,h.a],components:{progbar:a.a,running:r.a},data:()=>({playerY:l.c.state.player.playerX,playerX:l.c.state.player.playerY,mouseX:0,mouseY:0,targetX:0,targetY:0,routeList:[],f_routeList:[],isMoving:!1,walk_progress:0,player_walk_speed:.1,next_playerY:-1,next_playerX:-1,hovering:!1,hoverStart:null,timeoutId:null,numRows:300,numCols:500,canves:[],parentWidth:0,parentHeight:0,viewportSize:15,tile_img:[],map_json:[],filtered:null}),components:{inv:()=>i.e(14).then(i.bind(null,187)),filterbox:s.a},computed:{g_c:()=>l.c.state.getData("g_c"),BUY:()=>c.J,filteredPOI(){return this.getPOI(this.playerX,this.playerY).scena?this.getPOI(this.playerX,this.playerY).scena.filter(t=>this.getAttr(t).val.value!=this.getAttr(t).max):null}},created(){window.game=l.c,this.tile_img=new Image,this.tile_img.src="./images/tile.png",this.char_img=new Image,this.char_img.src="./images/char.png",this.floor_map_json=l.c.state.getData("map_1").floor_layer,this.floor_map_json=this.parseArray(this.floor_map_json,this.numCols,this.numRows),this.build_map_json=l.c.state.getData("map_1").build_layer,this.build_map_json=this.parseArray(this.build_map_json,this.numCols,this.numRows),window.addEventListener("keydown",this.onkey)},mounted(){const t=this.$refs.MapCanvas;this.canvas_d=t;t.parentNode.offsetWidth;this.parentWidth=300;t.parentNode.offsetHeight;this.parentHeight=300,t.width=300,t.height=300,t.addEventListener("mouseout",(function(t){clearTimeout(this.timeoutId),this.hovering=!1,this.hoverStart=null,this.f_routeList=[]})),t.addEventListener("mousemove",e=>{let i=t.getBoundingClientRect(),n=e.clientX-i.left,a=e.clientY-i.top,r=t.width/this.viewportSize,s=t.height/this.viewportSize,o=Math.floor(n/r),l=Math.floor(a/s);this.mouseX=this.playerX-Math.floor(this.viewportSize/2)+o,this.mouseY=this.playerY-Math.floor(this.viewportSize/2)+l,this.hovering?(clearTimeout(this.timeoutId),this.f_routeList=[]):(this.hovering=!0,this.hoverStart=Date.now()),this.timeoutId=setTimeout(()=>{Date.now()-this.hoverStart>=1e3&&this.isMoving},1e3)}),t.addEventListener("click",t=>{if(!this.isMoving){this.targetX=this.mouseX,this.targetY=this.mouseY;let t=p.shortestPath(this.floor_map_json,this.build_map_json,[this.playerX,this.playerY],[this.targetX,this.targetY]);this.routeList=t}}),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY),setTimeout(()=>{this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)},500),setInterval(()=>{this.walk(),this.autowalk(),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)},1e3/60)},methods:{parseArray(t,e,i){let n=[];for(let a=0;a<i;a++){n.push([]);for(let i=0;i<e;i++){let r=a*e+i;n[a][i]=t[r]}}return n},autowalk(){this.routeList.length>0&&!this.isMoving?(this.next_playerX=this.routeList[0][0],this.next_playerY=this.routeList[0][1],this.isMoving=!0):this.routeList.length>0&&this.isMoving&&this.playerX==this.routeList[0][0]&&this.playerY==this.routeList[0][1]&&(this.routeList.splice(0,1),this.isMoving=!1)},walk(){if(this.isMoving){let t=this.getTileinfo(this.floor_map_json,this.playerX,this.playerY).walk_speed;this.playerX>this.next_playerX&&(this.walk_progress<1?this.walk_progress+=this.player_walk_speed*t:(this.playerX--,this.walk_progress=0,this.isMoving=!1)),this.playerX<this.next_playerX&&(this.walk_progress<1?this.walk_progress+=this.player_walk_speed*t:(this.playerX++,this.walk_progress=0,this.isMoving=!1)),this.playerY>this.next_playerY&&(this.walk_progress<1?this.walk_progress+=this.player_walk_speed*t:(this.playerY--,this.walk_progress=0,this.isMoving=!1)),this.playerY<this.next_playerY&&(this.walk_progress<1?this.walk_progress+=this.player_walk_speed*t:(this.playerY++,this.walk_progress=0,this.isMoving=!1)),l.c.state.player.playerX=this.playerY,l.c.state.player.playerY=this.playerX}},drawViewport(t,e,i,n,a,r){let s=t,o=Math.floor(e/2),l=this.parentWidth/this.viewportSize,p=a-o,h=r-o,d=s.getContext("2d");d.clearRect(0,0,s.width,s.height),d.fillStyle="black",d.fillRect(0,0,s.width,s.height);for(let t=h;t<h+e;t++)for(let s=p;s<p+e;s++)if(t>=0&&t<i&&s>=0&&s<n&&Math.pow(t-r,2)+Math.pow(s-a,2)<=Math.pow(e,2)){let e=(s-p)*l,i=(t-h)*l,n=16,a=this.floor_map_json[t][s]-1,r=a%n*16,o=16*Math.floor(a/n);d.imageSmoothingEnabled=!1,d.drawImage(this.tile_img,r,o,16,16,e,i,l,l)}for(let t=h;t<h+e;t++)for(let s=p;s<p+e;s++)if(t>=0&&t<i&&s>=0&&s<n&&Math.pow(t-r,2)+Math.pow(s-a,2)<=Math.pow(e,2)){let e=(s-p)*l,i=(t-h)*l,n=16,a=this.build_map_json[t][s]-1,r=a%n*16,o=16*Math.floor(a/n);d.imageSmoothingEnabled=!1,d.drawImage(this.tile_img,r,o,16,16,e,i,l,l)}let c=16*Math.floor(29.5),f=(this.mouseX-p)*l,u=(this.mouseY-h)*l;if(d.drawImage(this.tile_img,128,c,16,16,f,u,l,l),this.isMoving){let t=472,e=16,i=t%e*16,n=16*Math.floor(t/e),a=(this.next_playerX-p)*l,r=(this.next_playerY-h)*l;d.drawImage(this.tile_img,i,n,16,16,a,r,l,l),t=176,i=t%e*16,n=16*Math.floor(t/e),d.drawImage(this.tile_img,i,n,16,16,a+l/4,r+l/4,l/2,l/2),t=741,i=t%e*16,n=16*Math.floor(t/e);for(let t in this.routeList){let e=this.routeList[t],a=(e[0]-p)*l,r=(e[1]-h)*l;d.globalAlpha=.7,d.drawImage(this.tile_img,i,n,16,16,a,r,l,l),d.globalAlpha=1}}if(this.f_routeList.length>0){let t=743,e=t%16*16,i=16*Math.floor(t/16);for(let t in this.f_routeList){let n=this.f_routeList[t],a=(n[0]-p)*l,r=(n[1]-h)*l;d.globalAlpha=.7,d.drawImage(this.tile_img,e,i,16,16,a,r,l,l),d.globalAlpha=1,d.fillText(t,a+l/4,r+l)}}d.font="20px Arial",d.fillStyle="green";let g=(a-p)*l+l/2,m=(r-h)*l+l/2;d.beginPath(),d.moveTo(g-10,m),d.lineTo(g+10,m),d.strokeStyle="black",d.stroke(),d.beginPath(),d.moveTo(g,m-10),d.lineTo(g,m+10),d.strokeStyle="black",d.stroke()},onkey(t){87===t.keyCode&&(this.playerY-1>=0&&!this.isMoving&&(this.next_playerX=this.playerX,this.next_playerY=this.playerY-1,this.isMoving=!0),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)),65===t.keyCode&&(this.playerX-1>=0&&!this.isMoving&&(this.next_playerY=this.playerY,this.next_playerX=this.playerX-1,this.isMoving=!0),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)),83===t.keyCode&&(this.playerY+1<this.numRows&&!this.isMoving&&(this.next_playerX=this.playerX,this.next_playerY=this.playerY+1,this.isMoving=!0),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY)),68===t.keyCode&&(this.playerX+1<this.numCols&&!this.isMoving&&(this.next_playerY=this.playerY,this.next_playerX=this.playerX+1,this.isMoving=!0),this.drawViewport(this.canvas_d,this.viewportSize,this.numRows,this.numCols,this.playerX,this.playerY))},getTileinfo(t,e,i){let n=t[i][e]-1,a=l.c.state.tile;for(let t in a)if(a[t].tindex.includes(n))return a[t]},getPOI(t,e){let i=l.c.state.poi.filter(i=>i.x.includes(t)&&i.y.includes(e));if(0!=i.length){return i[0]}return!1},getAttr:t=>l.c.state.getData(t)}},u=(i(266),i(6)),g=Object(u.a)(f,o,[],!1,null,"51e712f3",null).exports,m={props:["state"],mixins:[d.a,h.a],components:{progbar:a.a,running:r.a},data:()=>({game:l.c,filtered:null,map:"location"}),components:{inv:()=>i.e(14).then(i.bind(null,187)),progbar:a.a,filterbox:s.a,Cmap:g},computed:{yanzhandu:()=>l.c.state.getData("yanzhandu"),shiqi:()=>l.c.state.getData("shiqi"),zhuzhidu:()=>l.c.state.getData("zhuzhidu"),g_c:()=>l.c.state.getData("g_c"),alculation:()=>l.c.state.getData("alculation"),f_power:()=>l.c.state.getData("f_power"),f_stress:()=>l.c.state.getData("f_stress"),f_area:()=>l.c.state.getData("f_area"),human_power:()=>l.c.state.getData("human_power"),conquer(){return l.c.state.conquer.filter(t=>!this.alocked(t))},BUY:()=>c.J},methods:{fconquer(){return l.c.state.conquer.filter(t=>!this.alocked(t))},zdxn:()=>Math.round(2.5*l.c.state.getData("f_power").valueOf()+l.c.state.getData("f_power").valueOf()*(.65*l.c.state.getData("shiqi").valueOf()+.75*l.c.state.getData("zhuzhidu").valueOf()-l.c.state.getData("yanzhandu").valueOf()/l.c.state.getData("alculation").valueOf()*l.c.state.getData("yanzhandu").valueOf())/100*10)/10,cgl(t){let e=this.zdxn();return e>=6*t.power?100:Math.round(t.power>e?1e3*(e/t.power-.2):1e3*(1-t.power/2/e))/10},cgl_attack(t){let e=this.zdxn();return e>=6*t.power?100:t.power>e?e/t.power-.2:1-t.power/2/e},toLarge(t){if(t>=1){const e=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let i=1;if(t<0&&(i=-1,t=-t),t<=1)return i;let n=Math.floor((Math.log10(t)-1)/3);return n<1?i*t:i*Math.round(t/Math.pow(10,3*n))+e[n]}return t}}},_=(i(268),Object(u.a)(m,n,[],!1,null,"e00489ba",null));e.default=_.exports}}]);