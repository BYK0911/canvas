(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"10bf":function(e,t,n){},1429:function(e,t,n){"use strict";n("1789")},1789:function(e,t,n){},"1fbd":function(e,t,n){"use strict";n("3a6d")},"264d":function(e,t,n){"use strict";n("568d")},"3a6d":function(e,t,n){},"440a":function(e,t,n){},"4bbd":function(e,t,n){},"4cb7":function(e,t,n){},"4eaf":function(e,t,n){},"568d":function(e,t,n){},"5e5d":function(e,t,n){"use strict";n("6815")},6815:function(e,t,n){},"71e3":function(e,t,n){"use strict";n("4bbd")},"7abe":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o=(e,t)=>{t.preventDefault(),e.emit("touchstart",t)},a=(e,t)=>{t.preventDefault(),e.emit("touchmove",t)},s=(e,t)=>{t.preventDefault(),e.emit("touchend",t)};function r(e){e.dom.addEventListener("touchstart",o.bind(e.dom,e)),e.dom.addEventListener("touchmove",a.bind(e.dom,e)),e.dom.addEventListener("touchend",s.bind(e.dom,e))}function l(e){e.dom.removeEventListener("touchstart",o.bind(e.dom,e)),e.dom.removeEventListener("touchmove",a.bind(e.dom,e)),e.dom.removeEventListener("touchend",s.bind(e.dom,e))}class i{constructor(e,t){this.x=e,this.y=t}matrix(e,t,n,c,o,a){const s=this.x,r=this.y;return this.x=e*s+t*r+n,this.y=c*s+o*r+a,this}translate(e,t){return this.x+=e,this.y+=t,this}move(e,t){return this.translate(e,t)}rotate(e){const t=e/180*Math.PI,n=Math.cos(t),c=Math.sin(t);return this.matrix(n,-c,0,c,n,0),this}scale(e,t){return this.x*=e,this.y*=t,this}skewX(e){e=e/180*Math.PI;const t=Math.tan(e);return this.matrix(1,t,0,0,1,0)}skewY(e){e=e/180*Math.PI;const t=Math.tan(e);return this.matrix(1,0,0,t,1,0)}norm(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalVector(){const e=this.norm();return 0===e?this:new i(this.y/e,-this.x/e)}unit(){const e=this.norm();return 0===e?this:new i(this.x/e,this.y/e)}angle(e=1,t=0){const n=this.norm(),c=Math.sqrt(e*e+t*t);if(n*c===0)return 0;const o=this.dot(e,t),a=Math.max(-1,Math.min(1,o/n/c));return Math.acos(a)}dot(e,t){return this.x*e+this.y*t}cross(e,t){return this.x*t-this.y*e}flip(e,t,n,c){const{x:o,y:a}=this,[s,r]=[o-e,a-t],[l,i]=[n-e,c-t];if(0!==l||0!==i){const n=l*l+i*i;this.x=(s*(l*l-i*i)+2*r*l*i)/n+e,this.y=(r*(i*i-l*l)+2*s*l*i)/n+t}return this}}var d=function(e,t){const n=document.createElement("canvas");return n.width=e,n.height=t,{canvas:n,ctx:n.getContext("2d")}};class u{constructor(){this.x=0,this.y=0,this.scale=1,this.rotation=0,this.mode="default",this.backgroundColor="rgba(255, 255, 255, 0)",this.width=400,this.height=300,this.layers=[],this.offScreenCanvas=null,this.handlers={},this.dom=this.initDom(),this.ctx=this.dom.getContext("2d"),r(this)}initDom(){const e=document.createElement("canvas");return e.width=this.width,e.height=this.height,Object.assign(e.style,{width:this.width+"px",height:this.height+"px",background:"#f0f0f0",verticalAlign:"middle"}),e}mount(e){e.appendChild(this.dom);const t=e.offsetWidth,n=e.offsetHeight;this.offScreenCanvas=d(t,n),this.resize(t,n)}resize(e,t){this.width=e,this.height=t,this.dom.width=e,this.dom.height=t,this.dom.style.width=e+"px",this.dom.style.height=t+"px"}drawFrame(){const{x:e,y:t,scale:n,width:c,height:o,layers:a,ctx:s,backgroundColor:r,rotation:l}=this;if(s.clearRect(0,0,c,o),s.fillStyle=r,s.fillRect(0,0,c,o),this.offScreenCanvas){const r=this.offScreenCanvas.ctx;r.clearRect(0,0,c,o),r.save(),r.translate(e,t),r.scale(n,n),r.rotate(l/180*Math.PI),a.forEach(e=>{r.save(),e.draw(r),r.restore()}),r.restore(),s.drawImage(this.offScreenCanvas.canvas,0,0,c,o)}}getRelativeCoord(e,t){return new i(e,t).translate(-this.x,-this.y).scale(1/this.scale,1/this.scale).rotate(-this.rotation)}on(e,t){this.handlers[e]||(this.handlers[e]=[]);const n=this.handlers[e];n.push(t)}off(e,t){if(!this.handlers[e])return;if(!t)return void(this.handlers[e]=[]);const n=this.handlers[e],c=n.indexOf(t);c>-1&&n.splice(c,1)}emit(e,t){const n=this.handlers[e];n&&0!==n.length&&n.forEach(e=>e(t))}destroy(){l(this)}}const b=["onClick"];var h=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("setting"),n=[{name:"Pen",icon:"icon-pen1"},{name:"MarkPen",icon:"icon-mark-pen-fill"},{name:"SoftPen",icon:"icon-Brush-"},{name:"Eraser",icon:"icon-eraser"}],o=e=>{t.painter=e};return(e,a)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n,e=>Object(c["createElementVNode"])("span",{class:Object(c["normalizeClass"])(["iconfont penicon",e.name===Object(c["unref"])(t).painter?"is-active "+e.icon:e.icon]),key:e.name,onClick:t=>o(e.name)},null,10,b)),64))}}),j=(n("f223"),n("6b0d")),p=n.n(j);const m=p()(h,[["__scopeId","data-v-616e081f"]]);var O=m;const f=e=>(Object(c["pushScopeId"])("data-v-858982ae"),e=e(),Object(c["popScopeId"])(),e),v={class:"panel"},k=f(()=>Object(c["createElementVNode"])("div",{class:"panel-header"}," 粗细 ",-1)),g={class:"panel-body"},x={class:"size-wrap flex"},C=["onClick"],w={class:"panel-body"};var y=Object(c["defineComponent"])({__name:"index",setup(e){const t=[1,5,10,15,20,25],n=Object(c["inject"])("setting");return(e,o)=>{const a=Object(c["resolveComponent"])("el-slider");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",v,[k,Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("div",x,[(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t,e=>Object(c["createElementVNode"])("span",{class:"size",key:e,onClick:t=>Object(c["unref"])(n).painterSize=e},[Object(c["createElementVNode"])("span",{class:"size-inner",style:Object(c["normalizeStyle"])({width:e+"px",height:e+"px"})},null,4)],8,C)),64))])]),Object(c["createElementVNode"])("div",w,[Object(c["createVNode"])(a,{modelValue:Object(c["unref"])(n).painterSize,"onUpdate:modelValue":o[0]||(o[0]=e=>Object(c["unref"])(n).painterSize=e),min:1,max:50},null,8,["modelValue"])])])}}});n("1fbd");const E=p()(y,[["__scopeId","data-v-858982ae"]]);var V=E;const _=e=>(Object(c["pushScopeId"])("data-v-6941fa26"),e=e(),Object(c["popScopeId"])(),e),N=_(()=>Object(c["createElementVNode"])("span",{class:"sizeicon"},null,-1)),B=[N];var S=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("openDrawer");return(e,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{class:"iconfont",onClick:n[0]||(n[0]=e=>Object(c["unref"])(t)(V))},B))}});n("f440");const P=p()(S,[["__scopeId","data-v-6941fa26"]]);var M=P;const U=e=>(Object(c["pushScopeId"])("data-v-29340ca2"),e=e(),Object(c["popScopeId"])(),e),z={class:"panel"},I=U(()=>Object(c["createElementVNode"])("div",{class:"panel-header"}," 最近使用 ",-1)),T={class:"panel-body"},D={class:"color-panel"},F=["onClick"],L={class:"panel"},R=U(()=>Object(c["createElementVNode"])("div",{class:"panel-header"}," 常用颜色 ",-1)),X={class:"panel-body"},Y={class:"color-panel"},J=["onClick"],W={class:"panel"},$=U(()=>Object(c["createElementVNode"])("div",{class:"panel-header"}," 全部颜色 ",-1)),q={class:"panel-body"};var A=Object(c["defineComponent"])({__name:"color",props:["color","colorUsed"],emits:["update:color","update:colorUsed"],setup(e,{emit:t}){const n=e,o=Object(c["ref"])(n.color),a=Object(c["ref"])(n.colorUsed),s=Object(c["inject"])("closeDrawer");let r=[];const l=e=>{const t=e.toString(16);return t.length<2?`${t}${t}`:t},i=64;for(let c=0;c<=255;c+=i)for(let e=0;e<=255;e+=i)for(let t=0;t<=255;t+=i)r.push(`#${l(c)}${l(e)}${l(t)}`);return Object(c["watch"])(o,e=>{if(a.value.includes(e)){const t=a.value.indexOf(e);a.value.splice(t,1)}else 10===a.value.length&&a.value.pop();a.value.unshift(e),t("update:color",e),t("update:colorUsed",a.value),s()}),(e,t)=>{const n=Object(c["resolveComponent"])("el-color-picker");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",z,[I,Object(c["createElementVNode"])("div",T,[Object(c["createElementVNode"])("div",D,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.value,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["color-grid",{"is-active":e===o.value}]),key:e,style:Object(c["normalizeStyle"])({backgroundColor:e}),onClick:t=>o.value=e},null,14,F))),128))])])]),Object(c["createElementVNode"])("div",L,[R,Object(c["createElementVNode"])("div",X,[Object(c["createElementVNode"])("div",Y,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(r),e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["color-grid",{"is-active":e===o.value}]),key:e,style:Object(c["normalizeStyle"])({backgroundColor:e}),onClick:t=>o.value=e},null,14,J))),128))])])]),Object(c["createElementVNode"])("div",W,[$,Object(c["createElementVNode"])("div",q,[Object(c["createVNode"])(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),"show-alpha":""},null,8,["modelValue"])])])],64)}}});n("982f");const G=p()(A,[["__scopeId","data-v-29340ca2"]]);var H=G,K=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("setting");return(e,n)=>(Object(c["openBlock"])(),Object(c["createBlock"])(H,{color:Object(c["unref"])(t).color,"onUpdate:color":n[0]||(n[0]=e=>Object(c["unref"])(t).color=e),colorUsed:Object(c["unref"])(t).colorUsed,"onUpdate:colorUsed":n[1]||(n[1]=e=>Object(c["unref"])(t).colorUsed=e)},null,8,["color","colorUsed"]))}});const Q=K;var Z=Q,ee=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("openDrawer");return(e,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{class:"iconfont icon-color-filling",onClick:n[0]||(n[0]=e=>Object(c["unref"])(t)(Object(c["unref"])(Z)))}))}});const te=ee;var ne=te;const ce={class:"menu-bottom menu"};var oe=Object(c["defineComponent"])({__name:"BottomMenu",setup(e){return(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",ce,[Object(c["createVNode"])(O),Object(c["createVNode"])(ne),Object(c["createVNode"])(M)]))}});n("1429"),n("5e5d");const ae=p()(oe,[["__scopeId","data-v-3c86787e"]]);var se=ae,re=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("cvs"),n=Object(c["inject"])("setting"),o=()=>{n.index<0||(t.layers=n.his.slice(0,n.index),n.index--)};return(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{class:"iconfont icon-Undo",onClick:o}))}});const le=re;var ie=le,de=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("cvs"),n=Object(c["inject"])("setting"),o=()=>{n.index!==n.his.length-1&&(n.index++,t.layers=n.his.slice(0,n.index+1))};return(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{class:"iconfont icon-Redo",onClick:o}))}});const ue=de;var be=ue;const he=Object(c["createElementVNode"])("span",{class:"iconfont icon-delete"},null,-1),je=Object(c["createTextVNode"])(" 清除屏幕 "),pe=[he,je];var me=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("cvs"),n=Object(c["inject"])("setting"),o=()=>{t.layers=[],n.his=[],n.index=-1};return(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{style:{color:"red"},onClick:o},pe))}});const Oe=me;var fe=Oe;const ve=e=>(Object(c["pushScopeId"])("data-v-1de6035a"),e=e(),Object(c["popScopeId"])(),e),ke=ve(()=>Object(c["createElementVNode"])("div",null,"长按保存图片",-1)),ge={class:"img-wrap"},xe=["src"];var Ce=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("cvs"),n=t.dom.toDataURL();return(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[ke,Object(c["createElementVNode"])("div",ge,[Object(c["createElementVNode"])("img",{src:Object(c["unref"])(n)},null,8,xe)])],64))}});n("264d");const we=p()(Ce,[["__scopeId","data-v-1de6035a"]]);var ye=we;const Ee=Object(c["createElementVNode"])("span",{class:"iconfont icon-download"},null,-1),Ve=Object(c["createTextVNode"])(" 导出图片 "),_e=[Ee,Ve];var Ne=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("openDrawer");return(e,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{onClick:n[0]||(n[0]=e=>Object(c["unref"])(t)(ye))},_e))}});const Be=Ne;var Se=Be,Pe=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("setting"),n=Object(c["inject"])("cvs");return(e,o)=>(Object(c["openBlock"])(),Object(c["createBlock"])(H,{color:Object(c["unref"])(n).backgroundColor,"onUpdate:color":o[0]||(o[0]=e=>Object(c["unref"])(n).backgroundColor=e),colorUsed:Object(c["unref"])(t).backgroundColorUsed,"onUpdate:colorUsed":o[1]||(o[1]=e=>Object(c["unref"])(t).backgroundColorUsed=e)},null,8,["color","colorUsed"]))}});const Me=Pe;var Ue=Me;const ze=Object(c["createElementVNode"])("span",{class:"iconfont icon-background-f"},null,-1),Ie=Object(c["createTextVNode"])(" 背景颜色 "),Te=[ze,Ie];var De=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("openDrawer");return(e,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{onClick:n[0]||(n[0]=e=>Object(c["unref"])(t)(Ue))},Te))}});const Fe=De;var Le=Fe;const Re=Object(c["createElementVNode"])("span",{class:"iconfont icon-marquee"},null,-1),Xe=Object(c["createTextVNode"])(" 重置视口 "),Ye=[Re,Xe];var Je=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["inject"])("cvs"),n=()=>{t.x=0,t.y=0,t.scale=1,t.rotation=0};return(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{onClick:n},Ye))}});const We=Je;var $e=We;const qe=Object(c["createElementVNode"])("span",{class:"iconfont icon-menu"},null,-1);var Ae=Object(c["defineComponent"])({__name:"index",setup(e){return(e,t)=>{const n=Object(c["resolveComponent"])("el-dropdown-item"),o=Object(c["resolveComponent"])("el-dropdown-menu"),a=Object(c["resolveComponent"])("el-dropdown");return Object(c["openBlock"])(),Object(c["createBlock"])(a,{placement:"left"},{dropdown:Object(c["withCtx"])(()=>[Object(c["createVNode"])(o,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Le)]),_:1}),Object(c["createVNode"])(n,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])($e)]),_:1}),Object(c["createVNode"])(n,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Se)]),_:1}),Object(c["createVNode"])(n,{divided:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(fe)]),_:1})]),_:1})]),default:Object(c["withCtx"])(()=>[qe]),_:1})}}});const Ge=Ae;var He=Ge;const Ke={class:"menu-right menu"};var Qe=Object(c["defineComponent"])({__name:"RightMenu",setup(e){return(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Ke,[Object(c["createVNode"])(ie),Object(c["createVNode"])(be),Object(c["createVNode"])(He)]))}});n("9e1c"),n("71e3");const Ze=p()(Qe,[["__scopeId","data-v-5f2d72e6"]]);var et=Ze;const tt=Object(c["ref"])([]);class nt{}var ct=function(e,t,n){if(!(e.length<4)){t.beginPath(),t.moveTo(e[0],e[1]);for(let n=2;n<e.length;n+=2)t.lineTo(e[n],e[n+1]);t.strokeStyle=n.color,t.lineWidth=n.size,t.lineCap="round",t.lineJoin="round",t.stroke(),t.closePath()}},ot=function(e,t,n){if(!(e.length<4)){t.beginPath(),t.moveTo(e[0],e[1]);for(let n=2;n<e.length;n+=2)t.lineTo(e[n],e[n+1]);t.strokeStyle=n.color,t.lineWidth=n.size,t.lineCap="round",t.lineJoin="round",t.stroke(),t.closePath()}},at=function(e,t,n){if(!(e.length<4)){t.beginPath(),t.moveTo(e[0],e[1]);for(let n=2;n<e.length;n+=2)t.lineTo(e[n],e[n+1]);t.strokeStyle=n.color,t.lineWidth=n.size,t.lineCap="butt",t.lineJoin="round",t.stroke(),t.closePath()}},st=function(e,t,n){if(!(e.length<4)){t.globalCompositeOperation="destination-out",t.beginPath(),t.moveTo(e[0],e[1]);for(let n=2;n<e.length;n+=2)t.lineTo(e[n],e[n+1]);t.strokeStyle=n.color,t.lineWidth=n.size,t.lineCap="round",t.lineJoin="round",t.stroke(),t.closePath()}},rt=function(e,t,n){if(e.length<4)return;t.fillStyle=n.color,t.strokeStyle=n.color;const c=n.scale,o=n.size;let a=o/8;for(let s=0;s<e.length-2;s+=2){let n=e[s],r=e[s+1];const l=e[s+2],d=e[s+3],u=new i(l-n,d-r).norm()/c;if(u<=1)t.beginPath(),t.moveTo(n,r),t.lineTo(l,d),t.stroke(),t.closePath();else{const e=Math.min(5*o/u,o/2,1.3*a),c=(e-a)/u,s=(l-n)/u,i=(d-r)/u;for(let o=0;o<u;o+=1)a>0&&(t.beginPath(),t.arc(n,r,a,0,2*Math.PI),t.closePath(),t.fill()),n+=s,r+=i,a+=c}}},lt=function(e,t,n){switch(n.type){case"MarkPen":return at(e,t,n);case"Pencil":return ot(e,t,n);case"Eraser":return st(e,t,n);case"SoftPen":return rt(e,t,n);default:return ct(e,t,n)}};class it extends nt{constructor(e){super(),this.type="Path",this.data=[],this.painter=e}draw(e){lt(this.data,e,this.painter)}}const dt=Object(c["reactive"])({mode:"default",backgroundColor:"#f0f0f0",color:"#000",painter:"Pen",painterSize:10,his:[],index:-1,colorUsed:["#000000","#ff0000","#ffffff"],backgroundColorUsed:["#000000","#ff0000","#ffffff"]});var ut=dt;let bt,ht,jt,pt,mt=null,Ot=!1;var ft=function(e){e.on("touchstart",t=>{const n=t;if(Ot=!1,"default"===ut.mode)if(1===n.touches.length){const t={type:ut.painter,size:ut.painterSize,color:ut.color};"SoftPen"===ut.painter&&(t.scale=e.scale),mt=new it(t);const c=e.getRelativeCoord(n.touches[0].pageX,n.touches[0].pageY);mt.data.push(c.x,c.y)}else n.touches.length>1&&(bt=n.touches[0].pageX,jt=n.touches[0].pageY,ht=n.touches[1].pageX,pt=n.touches[1].pageY)}),e.on("touchmove",t=>{const n=t;if(1===n.touches.length){if(mt){const t=e.getRelativeCoord(n.touches[0].pageX,n.touches[0].pageY);mt.data.push(t.x,t.y),Ot||(Ot=!0,e.layers.push(mt),ut.his=[...e.layers],ut.index++)}}else if(n.touches.length>1){const t=n.touches[0].pageX,c=n.touches[0].pageY,o=n.touches[1].pageX,a=n.touches[1].pageY,s=new i(ht-bt,pt-jt),r=new i(o-t,a-c),l=s.angle(r.x,r.y),d=s.cross(r.x,r.y)>0?l:-l,u=r.norm()/s.norm(),b=e.getRelativeCoord((bt+ht)/2,(jt+pt)/2);e.rotation+=d/Math.PI*180,e.scale*=u,b.rotate(e.rotation).scale(e.scale,e.scale);const h=new i((t+o)/2,(c+a)/2).move(-b.x,-b.y);e.x=h.x,e.y=h.y,bt=t,ht=o,jt=c,pt=a}}),e.on("touchend",()=>{mt&&(mt=null,Ot=!1)})};const vt={key:0},kt={class:"drawer-wrap"};var gt=Object(c["defineComponent"])({__name:"index",setup(e){const t=Object(c["ref"])(),n=Object(c["ref"])(),o=Object(c["ref"])(),a=()=>{o.value=null},s=new u,r=Object(c["ref"])(!0);let l=null;const i=()=>{s.drawFrame(),l=window.requestAnimationFrame(i)};return Object(c["provide"])("openDrawer",e=>{o.value=Object(c["markRaw"])(e)}),Object(c["provide"])("closeDrawer",a),Object(c["provide"])("cvs",s),Object(c["provide"])("setting",ut),Object(c["onMounted"])(()=>{s.mount(t.value),ft(s),i()}),Object(c["onBeforeMount"])(()=>{l&&window.cancelAnimationFrame(l)}),Object(c["watch"])([tt.value,r],()=>{Object(c["nextTick"])(()=>{n.value.scrollTop=9999999})}),(e,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",{ref_key:"cvsWrap",ref:t,class:"cvs-wrap"},null,512),Object(c["createVNode"])(se,{onGesturestart:n[0]||(n[0]=Object(c["withModifiers"])(()=>{},["prevent"]))}),Object(c["createVNode"])(et,{onGesturestart:n[1]||(n[1]=Object(c["withModifiers"])(()=>{},["prevent"]))}),Object(c["createVNode"])(c["Transition"],{name:"drawer"},{default:Object(c["withCtx"])(()=>[o.value?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",vt,[Object(c["createElementVNode"])("div",{class:"modal",onClick:a}),Object(c["createElementVNode"])("div",kt,[Object(c["createElementVNode"])("span",{class:"closeicon iconfont icon-halfscreen",onClick:a}),(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(o.value)))])])):Object(c["createCommentVNode"])("",!0)]),_:1})],64))}});n("9d1c"),n("7dc3");const xt=p()(gt,[["__scopeId","data-v-1459da63"]]);t["default"]=xt},"7dc3":function(e,t,n){"use strict";n("d37e")},"982f":function(e,t,n){"use strict";n("4eaf")},"9d1c":function(e,t,n){"use strict";n("d022")},"9e1c":function(e,t,n){"use strict";n("440a")},d022:function(e,t,n){},d37e:function(e,t,n){},f223:function(e,t,n){"use strict";n("10bf")},f440:function(e,t,n){"use strict";n("4cb7")}}]);
//# sourceMappingURL=home.86514fb7.js.map