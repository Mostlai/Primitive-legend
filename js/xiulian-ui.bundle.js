(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[27],{193:function(n,e,a){var i=a(252);"string"==typeof i&&(i=[[n.i,i,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};a(20)(i,t);i.locals&&(n.exports=i.locals)},251:function(n,e,a){"use strict";var i=a(193);a.n(i).a},252:function(n,e,a){(e=a(19)(!1)).push([n.i,'\ndiv.xiulian_box[data-v-3af7ccff] {\r\n    display: flex;\r\n\tfont-family: Arial, Helvetica, Verdana;\r\n    width: 30rem;\r\n    height: 250px;\r\n    padding: 5px 5px 0;\r\n    /* background: #333; */\r\n    background: var(--background-box-color);\r\n    margin: 10px;\r\n    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    transition: 0.5s;\r\n    box-shadow: inset 0 -4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.25), 0 4px rgba(0,0,0,0.1);\n}\ndiv.xiulian_grid[data-v-3af7ccff] {\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    padding: 6px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, auto);\r\n    grid-template-rows: 0.1fr 0.2fr 0.3fr;\r\n    justify-items: center;\n}\n.sideinfo[data-v-3af7ccff]{\r\n    display: block;\r\n    margin: 0 0 5px;\r\n    padding: 0;\r\n    float: right;\r\n    width: 100%;\n}\n.sidebox[data-v-3af7ccff]{\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    border: 1px solid #fdc679;\r\n    margin: 0;\r\n    padding: 0;\r\n    opacity: 1;\r\n    /* background: #333; */\r\n    background: var(--background-color);\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    transition: 0.5s;\r\n    box-shadow: inset 0 -4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.25), 0 4px rgba(0,0,0,0.1);\r\n    height: 50px;\n}\n.sidebox[data-v-3af7ccff]:hover {\r\n\tbackground: #525252;\n}\n.largeimg[data-v-3af7ccff] {\r\n    /* display: flex;\r\n    width: 100%;\r\n    background-size: 100%;\r\n    height: 170px;\r\n    border-radius: 4px; */\r\n    display: flex;\r\n    width: 100%;\r\n    background-size: 100%;\r\n    overflow-y: hidden;\r\n    height: 240px;\r\n    border-radius: 4px;\r\n    position: relative;\n}\n.largeimg[data-v-3af7ccff]::after{    \r\n    content: "";\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 4px;\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(51 51 51 / 70%));\n}\n.h2title[data-v-3af7ccff] {\r\n    font-size: 28px;\r\n    margin-top: -45px;\r\n    margin-left: 6px;\r\n    z-index: 4;\r\n    position: relative;\n}\n.h3desc[data-v-3af7ccff] {\r\n    font-size: 15px;\r\n    height: 30px;\r\n    font-weight: normal;\r\n    overflow-y: hidden;\r\n    font-style: normal;\r\n    padding: 0;\r\n    margin-top: -10px;\r\n    margin-left: 2px;\n}\n.xiulian_name[data-v-3af7ccff]{\r\n    font-size: 11px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    display: flex;\r\n    justify-content: center;\n}\n.timewarp[data-v-3af7ccff] {\r\n    display: flex;\r\n    height: 30px;\r\n    justify-content: space-between;\r\n    padding: 4px 10px;\r\n    margin: 8px 7px 0px 7px;\r\n    border-bottom: 1px solid #CCC;\r\n    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    transition: 0.5s;\r\n    box-shadow: inset 0 -4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.25), 0 4px rgba(0,0,0,0.1);\n}\n.timewarp_box[data-v-3af7ccff]:hover {\r\n\tbackground: #525252;\n}\n.timewarp_box[data-v-3af7ccff]{\r\n    display: flex;\r\n    border: 1px solid #fdc679;\r\n    width: 20%;\r\n    border-radius: 5px;\r\n    transition: 0.5s;\r\n    box-shadow: inset 0 -4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.25), 0 4px rgba(0,0,0,0.1);\r\n    justify-content: center;\r\n    align-items: center;\n}\r\n',""]),n.exports=e},343:function(n,e,a){"use strict";a.r(e);var i=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",[n.getOfflineEnergy().max>3e3?a("span",{staticClass:"timewarp"},[a("div",[a("i",{staticClass:"fa-regular fa-clock"}),n._v("时间能量:"+n._s(n.getOfflineEnergy().val)+"/"+n._s(n.getOfflineEnergy().max))]),n._v(" "),a("div",{staticClass:"timewarp_box",style:{background:2==n.getOfflineSpeed()?"rgb(46, 211, 13)":""},on:{click:function(e){return n.setSpeed(2)}}},[n._v("2x流速")]),n._v(" "),a("div",{staticClass:"timewarp_box",style:{background:4==n.getOfflineSpeed()?"rgb(46, 211, 13)":""},on:{click:function(e){return n.setSpeed(4)}}},[n._v("4x流速")]),n._v(" "),a("div",{staticClass:"timewarp_box",style:{background:6==n.getOfflineSpeed()?"rgb(46, 211, 13)":""},on:{click:function(e){return n.setSpeed(6)}}},[n._v("6x流速")])]):n._e(),n._v(" "),a("div",{staticClass:"xiulian_grid"},n._l(this.category,(function(e,i){return a("div",{key:i,staticClass:"sideinfo"},[a("div",{staticClass:"xiulian_box"},[a("div",{staticStyle:{margin:"0",padding:"0",width:"400px",float:"left"}},[a("div",[a("span",{staticClass:"largeimg",style:{background:"url("+e.img+") 0 0"}}),n._v(" "),a("h2",{staticClass:"h2title"},[n._v(n._s(i))]),n._v(" "),a("h3",{staticClass:"h3desc"},[n._v(n._s(e.desc))])])]),n._v(" "),a("div",{staticStyle:{float:"right",margin:"0",padding:"0",width:"193px","overflow-y":"scroll",height:"100%"}},[a("ul",{staticStyle:{"margin-top":"-2px"}},n._l(n.filterbytag(i),(function(e){return a("li",{key:e.id,staticClass:"sideinfo"},[a("div",{staticClass:"sidebox",on:{"!mouseenter":function(a){return a.stopPropagation(),n.itemOver(a,e)}}},[a("div",{staticClass:"xiulian_name"},[a("span",{style:{color:2==e.max?"red":""}},[n._v(n._s(e.name))])]),n._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"center"}},[e.buy&&!e.owned?a("button",{staticStyle:{border:"none","font-size":"16px","margin-top":"-5px",background:"transparent"},attrs:{disabled:!e.canBuy(n.game)},on:{click:function(a){return n.emit(n.BUY,e)}}},[n._v("封锁")]):2==e.max?a("button",{staticStyle:{border:"none","font-size":"16px","margin-top":"-5px",background:"transparent"},attrs:{disabled:!e.canUse()},on:{click:function(a){n.emit("xiulian",e),e.max=1}}},[n._v("修炼")]):a("span",{staticStyle:{color:"#009c08"}},[n._v("已修炼")])])])])})),0)])])])})),0)])};i._withStripped=!0;var t=a(37),r=a(61),s=a(33),l=a(1),o=a(30),g=a(14),d=a(3),c={props:["state"],mixins:[g.a,o.a],components:{progbar:t.a,running:r.a},data:()=>({filtered:null,category:{"路径":{img:"./images/xl_bgs/xbg1.png",desc:""},"立足":{img:"./images/xl_bgs/xbg2.png",desc:""},"通天阶梯":{img:"./images/xl_bgs/xbg3.png",desc:""},"永生之望":{img:"./images/xl_bgs/xbg4.png",desc:""},"观测之术":{img:"./images/xl_bgs/xbg5.png",desc:""},"物体结构":{img:"./images/xl_bgs/xbg6.png",desc:""},"能量物理":{img:"./images/xl_bgs/xbg7.png",desc:""},"形态变化":{img:"./images/xl_bgs/xbg8.png",desc:""},"信息海":{img:"./images/xl_bgs/xbg9.png",desc:""},"几何":{img:"./images/xl_bgs/xbg10.png",desc:""},"多元程式":{img:"./images/xl_bgs/xbg11.png",desc:""},"空间系":{img:"./images/xl_bgs/xbg12.png",desc:""},"思维":{img:"./images/xl_bgs/xbg13.png",desc:""},"生命构造":{img:"./images/xl_bgs/xbg14.png",desc:""},"死亡":{img:"./images/xl_bgs/xbg15.png",desc:""},"能量解构":{img:"./images/xl_bgs/xbg16.png",desc:""},"元素工程":{img:"./images/xl_bgs/xbg17.png",desc:""}}}),components:{inv:()=>a.e(14).then(a.bind(null,231)),filterbox:s.a},computed:{xiulian_hide:()=>l.c.state.getData("xiulian_hide"),xiulian(){return l.c.state.xiulian.filter(n=>!this.alocked(n))},BUY:()=>d.J,available(){return this.hideMaxed?l.c.state.xiulian.filter(n=>1===!n.max&&!this.locked(v)):l.c.state.xiulian.filter(n=>!this.locked(n))}},methods:{toLarge(n){if(n>=1){const e=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let a=1;if(n<0&&(a=-1,n=-n),n<=1)return a;let i=Math.floor((Math.log10(n)-1)/3);return i<1?a*n:a*Math.round(n/Math.pow(10,3*i))+e[i]}return n},filterbytag(n){let e=[];for(let a in l.c.state.xiulian)l.c.state.xiulian[a].hasTag(n)&&e.push(l.c.state.xiulian[a]);Object.entries({a:e})[0][1].sort((n,e)=>e._max._value-n._max._value);return e.filter(n=>!this.alocked(n))},getunlock(n){let e=0,a=[];for(let e in l.c.state.xiulian)l.c.state.xiulian[e].hasTag(n)&&a.push(l.c.state.xiulian[e]);for(let n in a)l.c.unlockTest(a[n].require,a[n])&&(e=1);return e},getOfflineEnergy:()=>l.c.state.player.offlinefarm_energy,getOfflineSpeed:()=>l.c.state.player.offlinefarm_speed.val,setSpeed(n){l.c.state.player.offlinefarm_speed.val!=n?l.c.state.player.offlinefarm_speed.val=n:l.c.state.player.offlinefarm_speed.val=1}}},p=(a(251),a(7)),x=Object(p.a)(c,i,[],!1,null,"3af7ccff",null);x.options.__file="src/ui/sections/xiulian.vue";e.default=x.exports}}]);