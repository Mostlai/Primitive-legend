(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[25],{206:function(t,e,a){var i=a(277);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(20)(i,r);i.locals&&(t.exports=i.locals)},207:function(t,e,a){var i=a(279);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(20)(i,r);i.locals&&(t.exports=i.locals)},276:function(t,e,a){"use strict";var i=a(206);a.n(i).a},277:function(t,e,a){(e=a(19)(!1)).push([t.i,'\n.progress[data-v-b2ad6bb4] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\n}\n.progress-desc[data-v-b2ad6bb4] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-family: "Microsoft YaHei";\r\n  font-size: 20px;\r\n  text-align: center;\n}\n.progress-bar[data-v-b2ad6bb4] {\r\n  transition: stroke-dashoffset 1s ease;\n}\r\n',""]),t.exports=e},278:function(t,e,a){"use strict";var i=a(207);a.n(i).a},279:function(t,e,a){(e=a(19)(!1)).push([t.i,"\n.progress-container[data-v-5a06164a] {\n  overflow-y: hidden;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  stroke-dashoffset: 0;\n}\n.progress-box[data-v-5a06164a] {\n  width: 25%;\n  height: 25%;\n  padding: 10px;\n}\n",""]),t.exports=e},326:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progress-container"},[a("div",{staticStyle:{width:"65%",height:"100%","border-right":"3px solid var(--separator-color)",background:"#222"}},[a("div",{staticStyle:{color:"rgb(135,255,207)",background:"#222",border:"3px solid #14796c",display:"flex"}},[a("div",{staticClass:"progress-box",staticStyle:{"border-right":"1px solid var(--separator-color)"}},[a("svg-ring",{attrs:{rate:"none"==t.techo_physic()?0:t.target_detail(t.techo_physic()).research_now_point/t.target_detail(t.techo_physic()).research_need_point,"ring-color":"#409EFF","stroke-linecap":"round","stroke-width":14}},[a("span",[a("span",[t._v(t._s(("none"==t.techo_physic()?0:t.target_detail(t.techo_physic()).research_now_point/t.target_detail(t.techo_physic()).research_need_point*100).toFixed(2)+"%"))]),a("br"),t._v(" "),a("span",{staticStyle:{"font-size":"17px"}},[t._v("物理域")])])])],1),t._v(" "),a("div",{staticStyle:{width:"100%"}},[a("div",{staticStyle:{"border-bottom-width":"1px","border-bottom-style":"dashed","border-color":"#fbaa29"}},[a("span",[t._v(t._s("none"==t.techo_physic()?"未进行研究项目":t.target_detail(t.techo_physic()).name))])]),t._v(" "),a("div",{staticStyle:{height:"45%","border-bottom-width":"1px","border-bottom-style":"dashed","border-color":"#fbaa29"}},[a("span",[t._v(t._s("none"==t.techo_physic()?"未进行研究项目":t.target_detail(t.techo_physic()).desc))])]),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{display:"flex",width:"50%","border-right-width":"1px","border-right-style":"dashed","border-color":"#fbaa29","justify-content":"space-between"}},[a("span",[t._v(t._s("none"==t.techo_physic()?"未开始任何研究":t.toLarge(t.target_detail(t.techo_physic()).research_now_point)+"/"+t.toLarge(t.target_detail(t.techo_physic()).research_need_point)))]),t._v(" "),a("span",[t._v("研究速度:"+t._s(t.toLarge(t.physic_rate()))+"/s")])]),t._v(" "),a("div",{staticStyle:{width:"50%"}},[a("button",{staticStyle:{background:"#1c1c1c",color:"#fbaa29",cursor:"pointer"},on:{click:function(e){return t.change_choice("物理域")}}},[t._v("切换研究")]),t._v(" "),a("button",{staticStyle:{background:"#1c1c1c",color:"#fbaa29",cursor:"pointer"},on:{click:function(e){return t.change_physic("none")}}},[t._v("终止研究")])])])])]),t._v(" "),a("div",{staticStyle:{color:"rgb(135,255,207)",background:"#222",border:"3px solid #14796c",display:"flex"}},[a("div",{staticClass:"progress-box",staticStyle:{"border-right":"1px solid var(--separator-color)"}},[a("svg-ring",{attrs:{rate:"none"==t.techo_social()?0:t.target_detail(t.techo_social()).research_now_point/t.target_detail(t.techo_social()).research_need_point,"ring-color":"#409EFF","stroke-linecap":"round","stroke-width":14}},[a("span",[a("span",[t._v(t._s(("none"==t.techo_social()?0:t.target_detail(t.techo_social()).research_now_point/t.target_detail(t.techo_social()).research_need_point*100).toFixed(2)+"%"))]),a("br"),t._v(" "),a("span",{staticStyle:{"font-size":"17px"}},[t._v("社会域")])])])],1),t._v(" "),a("div",{staticStyle:{width:"100%"}},[a("div",{staticStyle:{"border-bottom-width":"1px","border-bottom-style":"dashed","border-color":"#fbaa29"}},[a("span",[t._v(t._s("none"==t.techo_social()?"未进行研究项目":t.target_detail(t.techo_social()).name))])]),t._v(" "),a("div",{staticStyle:{height:"45%","border-bottom-width":"1px","border-bottom-style":"dashed","border-color":"#fbaa29"}},[a("span",[t._v(t._s("none"==t.techo_social()?"未进行研究项目":t.target_detail(t.techo_social()).desc))])]),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{display:"flex",width:"50%","border-right-width":"1px","border-right-style":"dashed","border-color":"#fbaa29","justify-content":"space-between"}},[a("span",[t._v(t._s("none"==t.techo_social()?"未开始任何研究":t.toLarge(t.target_detail(t.techo_social()).research_now_point)+"/"+t.toLarge(t.target_detail(t.techo_social()).research_need_point)))]),t._v(" "),a("span",[t._v("研究速度:"+t._s(t.toLarge(t.social_rate()))+"/s")])]),t._v(" "),a("div",{staticStyle:{width:"50%"}},[a("button",{staticStyle:{background:"#1c1c1c",color:"#fbaa29",cursor:"pointer"},on:{click:function(e){return t.change_choice("社会域")}}},[t._v("切换研究")]),t._v(" "),a("button",{staticStyle:{background:"#1c1c1c",color:"#fbaa29",cursor:"pointer"},on:{click:function(e){return t.change_social("none")}}},[t._v("终止研究")])])])])]),t._v(" "),a("div",{staticStyle:{color:"rgb(135,255,207)",background:"#222",border:"3px solid #14796c",display:"flex"}},[a("div",{staticClass:"progress-box",staticStyle:{"border-right":"1px solid var(--separator-color)"}},[a("svg-ring",{attrs:{rate:"none"==t.techo_engineer()?0:t.target_detail(t.techo_engineer()).research_now_point/t.target_detail(t.techo_engineer()).research_need_point,"ring-color":"#409EFF","stroke-linecap":"round","stroke-width":14}},[a("span",[a("span",[t._v(t._s(("none"==t.techo_engineer()?0:t.target_detail(t.techo_engineer()).research_now_point/t.target_detail(t.techo_engineer()).research_need_point*100).toFixed(2)+"%"))]),a("br"),t._v(" "),a("span",{staticStyle:{"font-size":"17px"}},[t._v("工程域")])])])],1),t._v(" "),a("div",{staticStyle:{width:"100%"}},[a("div",{staticStyle:{"border-bottom-width":"1px","border-bottom-style":"dashed","border-color":"#fbaa29"}},[a("span",[t._v(t._s("none"==t.techo_engineer()?"未进行研究项目":t.target_detail(t.techo_engineer()).name))])]),t._v(" "),a("div",{staticStyle:{height:"45%","border-bottom-width":"1px","border-bottom-style":"dashed","border-color":"#fbaa29"}},[a("span",[t._v(t._s("none"==t.techo_engineer()?"未进行研究项目":t.target_detail(t.techo_engineer()).desc))])]),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{display:"flex",width:"50%","border-right-width":"1px","border-right-style":"dashed","border-color":"#fbaa29","justify-content":"space-between"}},[a("span",[t._v(t._s("none"==t.techo_engineer()?"未开始任何研究":t.toLarge(t.target_detail(t.techo_engineer()).research_now_point)+"/"+t.toLarge(t.target_detail(t.techo_engineer()).research_need_point)))]),t._v(" "),a("span",[t._v("研究速度:"+t._s(t.toLarge(t.engineer_rate()))+"/s")])]),t._v(" "),a("div",{staticStyle:{width:"50%"}},[a("button",{staticStyle:{background:"#1c1c1c",color:"#fbaa29",cursor:"pointer"},on:{click:function(e){return t.change_choice("工程域")}}},[t._v("切换研究")]),t._v(" "),a("button",{staticStyle:{background:"#1c1c1c",color:"#fbaa29",cursor:"pointer"},on:{click:function(e){return t.change_engineer("none")}}},[t._v("终止研究")])])])])]),t._v(" "),a("div",{staticStyle:{color:"rgb(135, 255, 207)",display:"flex","flex-wrap":"wrap"}},[a("div",{staticStyle:{display:"flex","align-items":"center",width:"100%","justify-content":"space-between","padding-top":"3px","padding-bottom":"3px"}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{attrs:{img:"",src:"https://s1.ax1x.com/2022/05/30/X1Bens.png"}}),t._v(" "),a("span",{staticStyle:{"padding-left":"5px"}},[t._v("物理域研究成果:"+t._s(t.toLarge(t.physic_point().valueOf())))])]),t._v(" "),a("div",[a("span",{staticStyle:{"padding-right":"5px"}},[t._v("MAX:"+t._s(t.toLarge(t.physic_point().max)))])])]),t._v(" "),a("div",{staticStyle:{display:"flex","align-items":"center",width:"100%","justify-content":"space-between","padding-top":"3px","padding-bottom":"3px"}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{attrs:{img:"",src:"https://s1.ax1x.com/2022/05/30/X1BVXj.png"}}),t._v(" "),a("span",{staticStyle:{"padding-left":"5px"}},[t._v("社会域研究成果:"+t._s(t.toLarge(t.socia_point().valueOf())))])]),t._v(" "),a("div",[a("span",{staticStyle:{"padding-right":"5px"}},[t._v("MAX:"+t._s(t.toLarge(t.socia_point().max)))])])]),t._v(" "),a("div",{staticStyle:{display:"flex","align-items":"center",width:"100%","justify-content":"space-between","padding-top":"3px","padding-bottom":"3px"}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{attrs:{img:"",src:"https://s1.ax1x.com/2022/05/30/X1BmBn.png"}}),t._v(" "),a("span",{staticStyle:{"padding-left":"5px"}},[t._v("工程域研究成果:"+t._s(t.toLarge(t.engineer_point().valueOf())))])]),t._v(" "),a("div",[a("span",{staticStyle:{"padding-right":"5px"}},[t._v("MAX:"+t._s(t.toLarge(t.engineer_point().max)))])])]),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticStyle:{color:"rgb(135,255,207)",background:"rgb(34, 34, 34)",width:"35%"}},[a("div",{staticStyle:{"border-bottom":"1px dashed rgb(251, 170, 41)"}},[a("span",[t._v(" "+t._s(this.choice)+" ")])]),t._v(" "),a("div",{staticStyle:{"border-bottom":"1px solid rgb(251, 170, 41)",height:"50%","overflow-y":"scroll"}},t._l(t.switch_show(0),(function(e){return a("div",{key:e.id,staticClass:"separate",staticStyle:{"align-items":"unset"},on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("span",{staticStyle:{"margin-top":"6px"}},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticStyle:{"margin-top":"6px"}},[t._v(t._s(e.research_now_point)+" / "+t._s(e.research_need_point))]),t._v(" "),a("button",{staticStyle:{background:"#1c1c1c",color:"#fbaa29",cursor:"pointer"},on:{click:function(a){return t.start_reseatch(e.id)}}},[t._v("开始")])])})),0),t._v(" "),a("div",{staticStyle:{height:"auto","overflow-y":"scroll"}},t._l(t.switch_show(1),(function(e){return a("div",{key:e.id,staticClass:"separate",staticStyle:{"align-items":"unset"},on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("span",{staticStyle:{"margin-top":"6px"}},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticStyle:{"margin-top":"6px"}},[t._v("已经完成")])])})),0)])])};i._withStripped=!0;var r=a(37),o=a(61),s=a(33),n=(a(25),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progress"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 400 400"}},[a("circle",{attrs:{cx:"200",cy:"200",r:t.radius,stroke:t.bgRingColor,"stroke-width":t.strokeWidth,fill:"none"}}),t._v(" "),a("circle",{ref:"progressbar",staticClass:"progress-bar",attrs:{cx:"200",cy:"200",r:t.radius,stroke:t.ringColor,"stroke-width":t.strokeWidth,fill:"none","stroke-linecap":t.strokeLinecap,transform:"rotate(-90, 200, 200)","stroke-dasharray":t.strokeDasharray,"stroke-dashoffset":t.strokeDashoffset}})]),t._v(" "),a("div",{staticClass:"progress-desc"},[t._t("default")],2)])});n._withStripped=!0;var c={name:"Progress",props:{rate:{type:Number,default:0},bgRingColor:{type:String,default:"#ebeef5"},ringColor:{type:String,default:"#67C23A"},strokeLinecap:{type:String,default:"round"},strokeWidth:{type:Number,default:20}},computed:{radius(){return 200-this.strokeWidth/2},strokeDasharray(){return 2*Math.PI*this.radius},strokeDashoffset(){let t=0,e=this.rate;return e>1?e=1:e<0&&(e=0),t="round"===this.strokeLinecap?2*Math.PI*this.radius*(1-e)+this.strokeWidth:2*Math.PI*this.radius*(1-e),t}}},l=(a(276),a(7)),d=Object(l.a)(c,n,[],!1,null,"b2ad6bb4",null);d.options.__file="src/ui/sections/svg_cprogress.vue";var h=d.exports,_=a(1),p=a(30),g={props:["state"],mixins:[a(15).a,p.a],components:{progbar:r.a,running:o.a},data:()=>({filtered:null,choice:"物理域"}),components:{inv:()=>a.e(14).then(a.bind(null,228)),filterbox:s.a,svgRing:h},computed:{techo(){return _.c.state.techo.filter(t=>!this.alocked(t))},techo_choice(){return"物理域"==this.choice?_.c.state.techo.filter(t=>!this.alocked(t)&&t.hasTag("物理域")):"社会域"==this.choice?_.c.state.techo.filter(t=>!this.alocked(t)&&t.hasTag("社会域")):"工程域"==this.choice?_.c.state.techo.filter(t=>!this.alocked(t)&&t.hasTag("工程域")):void 0},BUY:()=>TRY_BUY},methods:{target_detail:t=>_.c.state.getData(t),change_choice(t){this.choice=t},physic_point:()=>_.c.state.getData("physic_point"),socia_point:()=>_.c.state.getData("socia_point"),engineer_point:()=>_.c.state.getData("engineer_point"),switch_show(t){if(0==t){if("物理域"==this.choice)return _.c.state.techo.filter(t=>1!=t.val&&!this.alocked(t)&&t.hasTag("物理域"));if("社会域"==this.choice)return _.c.state.techo.filter(t=>1!=t.val&&!this.alocked(t)&&t.hasTag("社会域"));if("工程域"==this.choice)return _.c.state.techo.filter(t=>1!=t.val&&!this.alocked(t)&&t.hasTag("工程域"))}else{if("物理域"==this.choice)return _.c.state.techo.filter(t=>0!=t.val&&!this.alocked(t)&&t.hasTag("物理域"));if("社会域"==this.choice)return _.c.state.techo.filter(t=>0!=t.val&&!this.alocked(t)&&t.hasTag("社会域"));if("工程域"==this.choice)return _.c.state.techo.filter(t=>0!=t.val&&!this.alocked(t)&&t.hasTag("工程域"))}},techo_physic:()=>_.c.state.getData("player_techo_stata").physic,physic_rate:()=>_.c.state.getData("physic_rate").val,change_physic(t){_.c.state.getData("player_techo_stata").physic=t},techo_social:()=>_.c.state.getData("player_techo_stata").social,social_rate:()=>_.c.state.getData("socia_rate").val,change_social(t){_.c.state.getData("player_techo_stata").social=t},techo_engineer:()=>_.c.state.getData("player_techo_stata").engineer,engineer_rate:()=>_.c.state.getData("engineer_rate").val,change_engineer(t){_.c.state.getData("player_techo_stata").engineer=t},start_reseatch(t){"物理域"==this.choice?_.c.state.getData("player_techo_stata").physic=t:"社会域"==this.choice?_.c.state.getData("player_techo_stata").social=t:"工程域"==this.choice&&(_.c.state.getData("player_techo_stata").engineer=t)},toLarge(t){var e=Math.round(10*t)/10;if(e>=1){const t=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let a=1;if(e<0&&(a=-1,e=-e),e<=1)return a;let i=Math.floor((Math.log10(e)-1)/3);return i<1?a*e:a*Math.round(e/Math.pow(10,3*i))+t[i]}return e}}},v=(a(278),Object(l.a)(g,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","align-items":"center",width:"100%","justify-content":"space-between","padding-top":"3px","padding-bottom":"3px"}},[e("div",[e("span",{staticStyle:{"padding-right":"5px"}},[this._v("需要拥有成果才可开始研究")])])])}],!1,null,"5a06164a",null));v.options.__file="src/ui/sections/techo.vue";e.default=v.exports}}]);