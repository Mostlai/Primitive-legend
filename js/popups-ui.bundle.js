(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[17],{192:function(t,i,n){var s=n(247);"string"==typeof s&&(s=[[t.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n(19)(s,e);s.locals&&(t.exports=s.locals)},193:function(t,i,n){var s=n(249);"string"==typeof s&&(s=[[t.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n(19)(s,e);s.locals&&(t.exports=s.locals)},246:function(t,i,n){"use strict";n(192)},247:function(t,i,n){(i=n(18)(!1)).push([t.i,"\ndiv.activities[data-v-1da8b4fa] {\n\tmin-width: 28rem;\n\twidth: fit-content;\n\tpadding-top:1em;\n\tpadding: 1.5em;\n}\ndiv.section[data-v-1da8b4fa] {\n\tmargin-top: 1em;\n\tmin-width: 100%;\n}\ndiv.task-info[data-v-1da8b4fa] {\n\tdisplay:flex;\n\twidth: 90%;\n\tmargin: var(--sm-gap) 0;\n}\nbutton.stop[data-v-1da8b4fa] {\n\tmargin: 0 var(--sm-gap);\n}\nspan.task-name[data-v-1da8b4fa] {\n\tflex-grow:1;\n\tvertical-align: center;\n}\ndiv.section header[data-v-1da8b4fa] {\n\tborder-bottom: 1px solid var(--separator-color);\n\tmargin-bottom: var(--sm-gap);\n}\n\n",""]),t.exports=i},248:function(t,i,n){"use strict";n(193)},249:function(t,i,n){(i=n(18)(!1)).push([t.i,"\n.disabled[data-v-04d8e7d3] {\n  border-color: rgba(0,0,0,0.4);\n  color: rgba(0,0,0,0.4);\n}\n.popup[data-v-04d8e7d3] {\n\tz-index: var(--md-depth);\n\tmax-width: 50vw;\n}\n.content[data-v-04d8e7d3] {\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\twidth: 100%;\n\tmin-height:5rem;\n}\n.content .items[data-v-04d8e7d3] {\n\tdisplay:flex;\n\tflex-flow: row wrap;\n\tflex-grow: 1;\n\twidth:auto;\n}\n.content .title[data-v-04d8e7d3] {\n\tfont-weight: bold;\n\ttext-align: center;\n\tmargin-bottom: var(--sm-gap);\n}\n.task-btn[data-v-04d8e7d3] {\n\n\tmax-height: 2em;\n\twidth:100%;\n}\nbutton.close-btn[data-v-04d8e7d3] {\n\tmin-height: 2em;\n\twidth: 5em;\n\tfont-size:0.9em;\n}\n\n\n",""]),t.exports=i},348:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"popup activities"},[i("div",{staticClass:"popup-close",on:{click:function(i){return t.$emit("close")}}},[t._v("X")]),t._v(" "),i("div",{key:"k"+t.activeKey,staticClass:"section"},[i("header",[t._v("活动中")]),t._v(" "),0===t.activesLen?i("div",{staticClass:"note-text"},[t._v("无")]):i("div",t._l(t.actives.values().reverse(),(function(n,s){return i("div",{key:"a"+s,staticClass:"task-info"},[i("button",{staticClass:"stop",on:{click:function(i){return t.removeActive(n)}}},[t._v("X")]),i("span",{staticClass:"task-name"},[t._v(t._s(n.name.toTitleCase()))]),t._v(" "),i("button",{attrs:{disabled:0===s},on:{click:function(i){return t.incActive(n)}}},[t._v("+")]),t._v(" "),i("button",{attrs:{disabled:s+1===t.activesLen},on:{click:function(i){return t.decActive(n)}}},[t._v("-")])])})),0)]),t._v(" "),i("div",{key:"w"+t.waitKey,staticClass:"section"},[i("header",[t._v("等待/阻挡")]),t._v(" "),0===t.waiting.length?i("div",{staticClass:"note-text"},[t._v("无")]):i("div",t._l(t.waiting,(function(n,s){return i("div",{key:"w"+s,staticClass:"task-info"},[i("button",{staticClass:"stop",on:{click:function(i){return t.removeWait(n)}}},[t._v("X")]),i("span",{staticClass:"task-name"},[t._v(t._s(n.name.toTitleCase()))]),t._v(" "),i("button",{attrs:{disabled:0===s},on:{click:function(i){return t.incWaiting(n)}}},[t._v("+")]),t._v(" "),i("button",{attrs:{disabled:s+1===t.waiting.length},on:{click:function(i){return t.decWaiting(n)}}},[t._v("-")])])})),0)]),t._v(" "),i("div",{staticClass:"section"},[i("header",[t._v("爱好")]),t._v(" "),0===t.pursuits.count?i("div",{staticClass:"note-text"},[t._v("无")]):i("div",t._l(t.pursuits.items,(function(n){return i("div",{key:n.id,staticClass:"task-info"},[i("button",{staticClass:"stop",on:{click:function(i){return t.removePursuit(n)}}},[t._v("X")]),i("span",{staticClass:"task-name"},[t._v(t._s(n.name.toTitleCase()))])])})),0)])])};s._withStripped=!0;var e=n(1),a=n(47),c={mixins:[],data:()=>({activeKey:0,waitKey:0}),mounted(){this.elm?Object(a.c)(this.$el,this.elm,0):Object(a.b)(this.$el,.2)},computed:{runner:()=>e.c.runner,actives(){return this.runner.actives},activesLen(){return this.actives.size},waiting(){return this.runner.waiting.reverse()},pursuits(){return this.runner.pursuits}},methods:{incActive(t){this.actives.inc(t),this.activeKey++},decActive(t){this.actives.dec(t),this.activeKey++},removeActive(t){this.runner.stopTask(t)},removeWait(t){this.runner.removeWait(t)},incWaiting(t){this.runner.waitingUp(t)},decWaiting(t){this.runner.waitingDown(t)},removePursuit(t){this.pursuits.remove(t)},incPursuits(t){this.runner.pursuitUp(t)},decPursuits(t){this.runner.pursuitDown(t)}}},r=(n(246),n(6)),o=Object(r.a)(c,s,[],!1,null,"1da8b4fa",null);i.default=o.exports},349:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t._self._c;return null!=t.choices&&t.choices.length>0?i("div",{staticClass:"popup"},[i("div",{staticClass:"content"},[t.title?i("span",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),i("div",{staticClass:"items"},t._l(t.choices,(function(n){return i("button",{key:t.strings?n:n.id,staticClass:"task-btn",class:t.disabled(n)&&"disabled",on:{"!mouseenter":function(i){i.stopPropagation(),!t.strings&&t.itemOver(i,n)},click:function(i){return t.choose(n)}}},[t._v(t._s(t.strings?n:n.name))])})),0),t._v(" "),i("button",{staticClass:"close-btn",on:{click:t.cancel}},[t._v("取消")])])]):t._e()};s._withStripped=!0;var e=n(1),a=n(47),c=n(12),r=(n(9),{data:()=>({title:null,list:null,elm:null,item:null,open:!1,mustPay:!1,strings:!1}),mixins:[c.a],created(){this.cb=null,this.plisten=()=>{this.add("choice",this.show,this)},this.listen("game-loaded",this.plisten)},beforeDestroy(){this.removeListener("game-loaded",this.plisten),this.plisten=null,this.cancel()},updated(){!1!==this.open&&(this.elm?Object(a.c)(this.$el,this.elm,0):Object(a.a)(this.$el))},computed:{choices:{get(){return this.list},set(t){if("string"==typeof t&&(t=e.c.state.getData(t)),t&&t.items&&(t=t.items),Array.isArray(t))if(this.strings)this.list=t;else{var i=[];for(let s=t.length-1;s>=0;s--){var n=e.c.state.findData(t[s]);n&&i.push(n)}this.list=i}else this.list=null}}},methods:{show(t,i){this.title=i.title,this.cb=i.cb,this.elm=i.elm,this.strings=i.strings,this.mustPay=i.mustPay,this.choices=t,this.open=!0},cantPay:t=>t.cost&&!e.c.canPay(t.cost),disabled(t){return!this.strings&&!this.slottable(t)||this.mustPay&&this.cantPay(t)},choose(t){if(!this.disabled(t)&&(this.open=!1,this.item=null,this.choices=null,this.elm=null,this.cb)){let i=this.cb;this.cb=null,i(t)}},cancel(){this.open=!1,this.cb=null,this.item=null,this.choices=null,this.elm=null}}}),o=(n(248),n(6)),l=Object(o.a)(r,s,[],!1,null,"04d8e7d3",null);i.default=l.exports}}]);