(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-416bc21b"],{"032a":function(e,t,n){},"0f8a":function(e,t,n){"use strict";var o=n("7a23"),c=n("b65f");const s=["onClick"];var a=Object(o["defineComponent"])({__name:"index",setup(e){const t=[{name:"pen",icon:"icon-pen1"},{name:"eraser",icon:"icon-eraser"}],n=e=>{c["c"].mode=e};return(e,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t,(e,t)=>Object(o["createElementVNode"])("span",{key:t,class:Object(o["normalizeClass"])(["iconfont",e.name===Object(o["unref"])(c["c"]).mode?"is-active "+e.icon:e.icon]),onClick:t=>n(e.name)},null,10,s)),64))}});const i=a;var r=i;const l=e=>(Object(o["pushScopeId"])("data-v-3d8d9118"),e=e(),Object(o["popScopeId"])(),e),d={class:"panel"},h=l(()=>Object(o["createElementVNode"])("div",{class:"panel-header"}," 粗细 ",-1)),u={class:"panel-body"},p={class:"size-wrap flex"},m=["onClick"],b={class:"panel-body"};var f=Object(o["defineComponent"])({__name:"index",setup(e){const t=[1,5,10,15,20,25],n=Object(o["ref"])("pen"===c["c"].mode?c["c"].pen.size:c["c"].eraser.size),s=e=>{n.value=e,"pen"===c["c"].mode?c["c"].pen.size=e:c["c"].eraser.size=e};return(e,c)=>{const a=Object(o["resolveComponent"])("el-slider");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",d,[h,Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("div",p,[(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t,e=>Object(o["createElementVNode"])("span",{class:"size",key:e,onClick:t=>s(e)},[Object(o["createElementVNode"])("span",{class:"size-inner",style:Object(o["normalizeStyle"])({width:e+"px",height:e+"px"})},null,4)],8,m)),64))])]),Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(a,{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=e=>n.value=e),onChange:s,min:1,max:50},null,8,["modelValue"])])])}}}),v=(n("5e32"),n("6b0d")),j=n.n(v);const O=j()(f,[["__scopeId","data-v-3d8d9118"]]);var g=O;const x=e=>(Object(o["pushScopeId"])("data-v-201e08b8"),e=e(),Object(o["popScopeId"])(),e),w=x(()=>Object(o["createElementVNode"])("span",{class:"sizeicon"},null,-1)),y=[w];var k=Object(o["defineComponent"])({__name:"index",setup(e){const t=Object(o["inject"])("openDrawer");return(e,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{class:"iconfont",onClick:n[0]||(n[0]=e=>Object(o["unref"])(t)(g))},y))}});n("44a5");const C=j()(k,[["__scopeId","data-v-201e08b8"]]);var E=C,V=Object(o["defineComponent"])({__name:"index",setup(e){const t=Object(o["ref"])([]),n=e=>{null===e&&(e=c["c"].pen.color="rgba(0, 0, 0, 1)"),t.value.includes(e)||t.value.unshift(e)},s=e=>{if(e.touches.length>1)return;let t=e.touches[0].pageX,n=e.touches[0].pageY;const o=e=>{t=e.touches[0].pageX,n=e.touches[0].pageY},s=()=>{window.removeEventListener("touchend",s),window.removeEventListener("touchmove",o),document.elementFromPoint(t,n)===c["a"].dom&&c["a"].emit("drop",{x:t,y:n})};window.addEventListener("touchmove",o),window.addEventListener("touchend",s)};return(e,a)=>{const i=Object(o["resolveComponent"])("el-color-picker");return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{onTouchstart:s},[Object(o["createVNode"])(i,{class:"color-picker",modelValue:Object(o["unref"])(c["c"]).pen.color,"onUpdate:modelValue":a[0]||(a[0]=e=>Object(o["unref"])(c["c"]).pen.color=e),onChange:n,"show-alpha":"",predefine:t.value},null,8,["modelValue","predefine"])],32)}}});const _=V;var B=_,N=Object(o["defineComponent"])({__name:"index",setup(e){const t=()=>c["b"].undo();return(e,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{class:"iconfont icon-Undo",onClick:t}))}});const I=N;var z=I,M=Object(o["defineComponent"])({__name:"index",setup(e){const t=()=>c["b"].redo();return(e,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{class:"iconfont icon-Redo",onClick:t}))}});const P=M;var R=P;const S=Object(o["createElementVNode"])("span",{class:"iconfont icon-delete"},null,-1),D=Object(o["createTextVNode"])(" 清除屏幕 "),F=[S,D];var L=Object(o["defineComponent"])({__name:"index",setup(e){const t=()=>{c["a"].layers=[],c["b"].reset(),c["a"].refreshImage()};return(e,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{style:{color:"red"},onClick:t},F))}});const T=L;var X=T;const Y=e=>(Object(o["pushScopeId"])("data-v-7f8b0450"),e=e(),Object(o["popScopeId"])(),e),U=Y(()=>Object(o["createElementVNode"])("div",null,"长按保存图片",-1)),q={class:"img-wrap"},$=["src"];var J=Object(o["defineComponent"])({__name:"index",setup(e){const t=Object(o["inject"])("cvs"),n=t.dom.toDataURL();return(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[U,Object(o["createElementVNode"])("div",q,[Object(o["createElementVNode"])("img",{src:Object(o["unref"])(n)},null,8,$)])],64))}});n("da50");const W=j()(J,[["__scopeId","data-v-7f8b0450"]]);var A=W;const H=Object(o["createElementVNode"])("span",{class:"iconfont icon-download"},null,-1),G=Object(o["createTextVNode"])("导出图片 "),K=[H,G];var Q=Object(o["defineComponent"])({__name:"index",setup(e){const t=Object(o["inject"])("openDrawer");return(e,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{onClick:n[0]||(n[0]=e=>Object(o["unref"])(t)(A))},K))}});const Z=Q;var ee=Z;const te=Object(o["createElementVNode"])("span",{class:"iconfont icon-marquee"},null,-1),ne=Object(o["createTextVNode"])("重置视口 "),oe=[te,ne];var ce=Object(o["defineComponent"])({__name:"index",setup(e){const t=()=>{c["a"].x=0,c["a"].y=0,c["a"].scale=1,c["a"].rotation=0};return(e,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{onClick:t},oe))}});const se=ce;var ae=se;const ie=e=>(Object(o["pushScopeId"])("data-v-2d6942a2"),e=e(),Object(o["popScopeId"])(),e),re=ie(()=>Object(o["createElementVNode"])("span",{class:"iconfont icon-menu"},null,-1)),le=ie(()=>Object(o["createElementVNode"])("span",{class:"iconfont icon-background-f"},null,-1)),de=Object(o["createTextVNode"])(" 背景颜色 "),he={class:"picker"};var ue=Object(o["defineComponent"])({__name:"index",setup(e){const t=Object(o["ref"])([]),n=e=>{null===e&&(e=c["a"].backgroundColor="rgba(255,255,255, 1)"),t.value.includes(e)||t.value.unshift(e)},s=Object(o["ref"])(),a=()=>{setTimeout(()=>{s.value.show()},200)};return(e,i)=>{const r=Object(o["resolveComponent"])("el-dropdown-item"),l=Object(o["resolveComponent"])("el-dropdown-menu"),d=Object(o["resolveComponent"])("el-dropdown"),h=Object(o["resolveComponent"])("el-color-picker");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(d,{placement:"top"},{dropdown:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{onClick:a},{default:Object(o["withCtx"])(()=>[le,de]),_:1}),Object(o["createVNode"])(r,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(ae)]),_:1}),Object(o["createVNode"])(r,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(ee)]),_:1}),Object(o["createVNode"])(r,{divided:""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(X)]),_:1})]),_:1})]),default:Object(o["withCtx"])(()=>[re]),_:1}),Object(o["createElementVNode"])("span",he,[Object(o["createVNode"])(h,{class:"color-picker",ref_key:"background",ref:s,onChange:n,modelValue:Object(o["unref"])(c["a"]).backgroundColor,"onUpdate:modelValue":i[0]||(i[0]=e=>Object(o["unref"])(c["a"]).backgroundColor=e),predefine:t.value,"show-alpha":""},null,8,["modelValue","predefine"])])],64)}}});n("4a5f");const pe=j()(ue,[["__scopeId","data-v-2d6942a2"]]);var me=pe;const be={class:"menu"};var fe=Object(o["defineComponent"])({__name:"index",props:["tools"],setup(e){const t={Pen:r,Size:E,Color:B,Undo:z,Redo:R,MoreOptions:me};return(n,c)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",be,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.tools,(e,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(t[e]),{key:n}))),128))]))}});n("e832"),n("799d");const ve=j()(fe,[["__scopeId","data-v-5b95560c"]]);var je=ve,Oe=n("32d7");let ge,xe,we,ye;var ke=function(e){e.on("touchstart",e=>{const t=e;2===t.touches.length&&(ge=t.touches[0].pageX,we=t.touches[0].pageY,xe=t.touches[1].pageX,ye=t.touches[1].pageY)}),e.on("touchmove",t=>{const n=t;if(2===n.touches.length){const t=n.touches[0].pageX,o=n.touches[0].pageY,c=n.touches[1].pageX,s=n.touches[1].pageY,a=new Oe["a"](xe-ge,ye-we),i=new Oe["a"](c-t,s-o),r=a.angle(i.x,i.y),l=a.cross(i.x,i.y)>0?r:-r,d=i.norm()/a.norm(),h=e.getRelativeCoord((ge+xe)/2,(we+ye)/2);e.rotation+=l,e.scale*=d,h.rotate(e.rotation).scale(e.scale,e.scale);const u=new Oe["a"]((t+c)/2,(o+s)/2).move(-h.x,-h.y);e.x=u.x,e.y=u.y,ge=t,xe=c,we=o,ye=s}})},Ce=n("7c0e");let Ee=null,Ve=!1;const _e=45;var Be=function(e){e.on("touchstart",t=>{const n=t;if(1===n.touches.length){const t="pen"===c["c"].mode?{type:"pen",...c["c"].pen}:{type:"eraser",...c["c"].eraser},o=e.getRelativeCoord(n.touches[0].pageX,n.touches[0].pageY-_e);Ee=new Ce["c"](t),Ee.data.push(o.x,o.y)}}),e.on("touchmove",t=>{const n=t;if(1===n.touches.length&&Ee){const t=e.getRelativeCoord(n.touches[0].pageX,n.touches[0].pageY-_e);Ee.data.push(t.x,t.y),Ve||(e.activePath=Ee,Ve=!0)}}),e.on("touchend",()=>{Ve&&c["b"].add(Ee),Ve=!1,e.activePath=null,Ee=null})};function Ne(e,t,n,o=80){const c=(e,t,n)=>{let o=0;for(let c=0;c<4;c++)if(o+=Math.abs(e[c]-t[c]),o>n)return!1;return!0},s=e.data,a=e.width,i=e.height,r=new Set,l=[[t,n]],d=4*(n*a+t),h=[s[d],s[d+1],s[d+2],s[d+3]],u=(e,t)=>{if(r.has(`${e},${t}`))return;r.add(`${e},${t}`);const n=4*(t*a+e);c(h,[s[n],s[n+1],s[n+2],s[n+3]],o)&&l.push([e,t])};let p=0;while(p<l.length){const[e,t]=l[p];t>0&&u(e,t-1),e>0&&u(e-1,t),e<a-1&&u(e+1,t),t<i-1&&u(e,t+1),p++}return l}var Ie=n("874d");class ze extends Ie["a"]{constructor(e,t,n,o,c,s){super(),this.type="Rasterized",this.x=0,this.y=0,this.width=100,this.height=100,this.rotation=0,this.img=e,this.x=t,this.y=n,this.width=o,this.height=c,this.rotation=s}get boundingBox(){const{x:e,y:t,width:n,height:o,rotation:c}=this,s=[[n,0],[n,o],[0,o]];let a=0,i=0,r=0,l=0;return s.forEach(e=>{const{x:t,y:n}=new Oe["a"](e[0],e[1]).rotate(c);t<a&&(a=t),t>r&&(r=t),n<i&&(i=n),n>l&&(l=n)}),{x:a+e,y:i+t,w:r-a,h:l-i}}draw(e){e.translate(this.x,this.y),e.rotate(this.rotation),e.drawImage(this.img,0,0,this.width,this.height)}}let Me,Pe;const Re=45;var Se=function(e){e.on("drop",t=>{const n=t;Me=Math.floor(n.x),Pe=Math.floor(n.y-Re);const o=e.ctx.getImageData(0,0,e.width,e.height),s=Ne(o,Me,Pe,0);let a=s[0][0],i=a,r=s[0][1],l=r;s.forEach(([e,t])=>{(void 0===a||e<a)&&(a=e),(void 0===r||t<r)&&(r=t),(void 0===i||e>i)&&(i=e),(void 0===l||t>l)&&(l=t)});const d=document.createElement("canvas");d.width=i-a+1,d.height=l-r+1;const h=d.getContext("2d");h.fillStyle=c["c"].pen.color,s.forEach(([e,t])=>h.fillRect(e-a,t-r,1,1));const u=e.getRelativeCoord(a,r),p=Math.round((i-a)/e.scale),m=Math.round((l-r)/e.scale),b=new ze(d,u.x,u.y,p,m,-e.rotation);c["b"].add(b)})},De=function(e){Be(e),ke(e),Se(e)};const Fe={class:"page-wrap flex-v"},Le={key:0},Te={class:"drawer-wrap"};var Xe=Object(o["defineComponent"])({__name:"canvas",props:["tools"],setup(e){const t=Object(o["ref"])(),n=Object(o["ref"])(),s=()=>{n.value=null};let a=null;const i=()=>{c["a"].drawFrame(),a=window.requestAnimationFrame(i)};return Object(o["provide"])("openDrawer",e=>n.value=Object(o["markRaw"])(e)),Object(o["provide"])("closeDrawer",s),Object(o["provide"])("cvs",c["a"]),Object(o["provide"])("setting",c["c"]),Object(o["provide"])("memo",c["b"]),Object(o["onMounted"])(()=>{c["a"].mount(t.value),De(c["a"]),i()}),Object(o["onBeforeMount"])(()=>{a&&window.cancelAnimationFrame(a),c["a"].layers=[],c["b"].reset()}),(c,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",Fe,[Object(o["createVNode"])(je,{tools:e.tools},null,8,["tools"]),Object(o["createElementVNode"])("div",{ref_key:"cvsWrap",ref:t,class:"flex-main"},null,512)]),Object(o["createVNode"])(o["Transition"],{name:"drawer"},{default:Object(o["withCtx"])(()=>[n.value?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Le,[Object(o["createElementVNode"])("div",{class:"modal",onClick:s}),Object(o["createElementVNode"])("div",Te,[Object(o["createElementVNode"])("span",{class:"closeicon iconfont icon-halfscreen",onClick:s}),(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(n.value)))])])):Object(o["createCommentVNode"])("",!0)]),_:1})],64))}});n("27a0"),n("b5d4");const Ye=j()(Xe,[["__scopeId","data-v-977f0288"]]);t["a"]=Ye},"1d23":function(e,t,n){},"27a0":function(e,t,n){"use strict";n("032a")},"32d7":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));class o{constructor(e,t){this.x=e,this.y=t}matrix(e,t,n,o,c,s){const a=this.x,i=this.y;return this.x=e*a+t*i+n,this.y=o*a+c*i+s,this}translate(e,t){return this.x+=e,this.y+=t,this}move(e,t){return this.translate(e,t)}rotate(e){const t=Math.cos(e),n=Math.sin(e);return this.matrix(t,-n,0,n,t,0),this}scale(e,t){return this.x*=e,this.y*=t,this}skewX(e){e=e/180*Math.PI;const t=Math.tan(e);return this.matrix(1,t,0,0,1,0)}skewY(e){e=e/180*Math.PI;const t=Math.tan(e);return this.matrix(1,0,0,t,1,0)}norm(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalVector(){const e=this.norm();return 0===e?this:new o(this.y/e,-this.x/e)}unit(){const e=this.norm();return 0===e?this:new o(this.x/e,this.y/e)}angle(e=1,t=0){const n=this.norm(),o=Math.sqrt(e*e+t*t);if(n*o===0)return 0;const c=this.dot(e,t),s=Math.max(-1,Math.min(1,c/n/o));return Math.acos(s)}dot(e,t){return this.x*e+this.y*t}cross(e,t){return this.x*t-this.y*e}flip(e,t,n,o){const{x:c,y:s}=this,[a,i]=[c-e,s-t],[r,l]=[n-e,o-t];if(0!==r||0!==l){const n=r*r+l*l;this.x=(a*(r*r-l*l)+2*i*r*l)/n+e,this.y=(i*(l*l-r*r)+2*a*r*l)/n+t}return this}}},"371e":function(e,t,n){},"44a5":function(e,t,n){"use strict";n("bd90")},"4a5f":function(e,t,n){"use strict";n("1d23")},5340:function(e,t,n){},"5e32":function(e,t,n){"use strict";n("5340")},"6f92":function(e,t,n){},"799d":function(e,t,n){"use strict";n("ccdf")},"7c0e":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return d}));var o=n("874d"),c=function(e,t,n){const{size:o,color:c}=n;if(2===e.length)t.beginPath(),t.arc(e[0],e[1],o/2,0,2*Math.PI),t.closePath(),t.fillStyle=c,t.fill();else{t.beginPath(),t.moveTo(e[0],e[1]);for(let n=2;n<e.length;n+=2)t.lineTo(e[n],e[n+1]);t.strokeStyle=c,t.lineWidth=o,t.lineCap="round",t.lineJoin="round",t.stroke(),t.closePath()}},s=function(e,t,n){if(e.length<4)return;const{size:o,force:c}=n;t.globalCompositeOperation="destination-out",t.beginPath(),t.moveTo(e[0],e[1]);for(let s=2;s<e.length;s+=2)t.lineTo(e[s],e[s+1]);t.strokeStyle=`rgba(255, 255, 255, ${c})`,t.lineWidth=o,t.lineCap="round",t.lineJoin="round",t.stroke(),t.closePath()};class a extends o["a"]{constructor(e){super(),this.type="Path",this.data=[],this.painter=e}get boundingBox(){if(this._boundingBox)return this._boundingBox;const e=this.painter.size;let t=this.data[0],n=this.data[1],o=this.data[0],c=this.data[1];for(let s=2;s<this.data.length;s+=2){const e=this.data[s],a=this.data[s+1];e<t&&(t=e),e>o&&(o=e),a<n&&(n=a),a>c&&(c=a)}return this._boundingBox={x:t-e,y:n-e,w:o-t+2*e,h:c-n+2*e},this._boundingBox}draw(e){const{type:t,size:n,color:o,force:a}=this.painter;if("pen"===t){const t=o;c(this.data,e,{size:n,color:t})}else{const t=a;s(this.data,e,{size:n,force:t})}}}class i{constructor(e){this.data=[],this.index=-1,this.cvs=e}get head(){return this.data.slice(0,this.index+1)}reset(){this.data=[],this.index=-1}undo(){-1!==this.index&&(this.index--,this.cvs.layers=[...this.head],this.cvs.refreshImage())}redo(){this.index!==this.data.length-1&&(this.index++,this.cvs.layers=[...this.head],this.cvs.refreshImage())}add(e){this.data.splice(this.index+1),this.data.push(e),this.cvs.layers.push(e),this.cvs.refreshImage(),this.index++}}var r=function(e){const t=t=>{t.preventDefault(),e.emit("touchstart",t)},n=t=>{t.preventDefault(),e.emit("touchmove",t)},o=t=>{t.preventDefault(),e.emit("touchend",t)};e.dom.addEventListener("touchstart",t),e.dom.addEventListener("touchmove",n),e.dom.addEventListener("touchend",o)},l=n("32d7");class d{constructor(){this.x=0,this.y=0,this.scale=1,this.rotation=0,this.mode="default",this.backgroundColor="rgba(255, 255, 255, 1)",this.width=400,this.height=300,this.layers=[],this.activePath=null,this.img=null,this.handlers={},this.dom=this.initDom(),this.ctx=this.dom.getContext("2d",{willReadFrequently:!0}),this.activeCanvas=document.createElement("canvas"),this.activeCanvas.width=this.width,this.activeCanvas.height=this.height,this.activeCtx=this.activeCanvas.getContext("2d"),r(this)}initDom(){const e=document.createElement("canvas");return e.width=this.width,e.height=this.height,Object.assign(e.style,{width:this.width+"px",height:this.height+"px",verticalAlign:"middle"}),e}mount(e){e.appendChild(this.dom);const t=e.offsetWidth,n=e.offsetHeight;this.resize(t,n)}resize(e,t){this.width=e,this.height=t,this.dom.width=e,this.dom.height=t,this.dom.style.width=e+"px",this.dom.style.height=t+"px",this.activeCanvas.width=e,this.activeCanvas.height=t,this.activeCanvas.style.width=e+"px",this.activeCanvas.style.height=t+"px"}refreshImage(){const{x:e,y:t,w:n,h:o}=this.getBoundingBox();if(0===n||0===o)return void(this.img=null);const c=document.createElement("canvas");c.width=n,c.height=o;const s=c.getContext("2d");s.translate(-e,-t),this.layers.forEach(e=>{s.save(),e.draw(s),s.restore()}),this.img={x:e,y:t,w:n,h:o,img:c}}getBoundingBox(){if(0===this.layers.length)return{x:0,y:0,w:0,h:0};{let e=1;const t=this.layers.map(t=>{var n;const o=(null===t||void 0===t||null===(n=t.painter)||void 0===n?void 0:n.size)||0;return o>e&&(e=o),t.boundingBox});let{x:n,y:o}=t[0];const{w:c,h:s}=t[0];let a=n+c,i=o+s;for(let r=1;r<t.length;r++){const{x:e,y:c,w:s,h:l}=t[r];e<n&&(n=e),c<o&&(o=c),e+s>a&&(a=e+s),c+l>i&&(i=c+l)}return{x:n-e,y:o-e,w:a-n+e,h:i-o+e}}}drawFrame(){const{x:e,y:t,scale:n,width:o,height:c,activeCtx:s,rotation:a,backgroundColor:i,img:r}=this;s.clearRect(0,0,o,c),s.save(),s.translate(e,t),s.scale(n,n),s.rotate(a),this.emit("beforeRender",s),this.layers.forEach(e=>{s.save(),e.draw(s),s.restore()}),this.activePath&&this.activePath.draw(s),s.restore(),this.ctx.clearRect(0,0,o,c),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,o,c),this.ctx.drawImage(this.activeCanvas,0,0,o,c)}getRelativeCoord(e,t){return new l["a"](e,t).translate(-this.x,-this.y).scale(1/this.scale,1/this.scale).rotate(-this.rotation)}on(e,t){this.handlers[e]||(this.handlers[e]=[]);const n=this.handlers[e];n.push(t)}off(e,t){if(!this.handlers[e])return;if(!t)return void(this.handlers[e]=[]);const n=this.handlers[e],o=n.indexOf(t);o>-1&&n.splice(o,1)}emit(e,...t){const n=this.handlers[e];n&&0!==n.length&&n.forEach(e=>e(...t))}}},"874d":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));class o{}},b5d4:function(e,t,n){"use strict";n("d707")},b65f:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i}));var o=n("7a23"),c=n("7c0e");const s=new c["a"],a=new c["b"](s),i=Object(o["reactive"])({mode:"pen",buket:!1,pen:{color:"#000",size:1},eraser:{size:1,force:1}})},bd90:function(e,t,n){},ccdf:function(e,t,n){},d707:function(e,t,n){},da50:function(e,t,n){"use strict";n("6f92")},e832:function(e,t,n){"use strict";n("371e")}}]);
//# sourceMappingURL=chunk-416bc21b.82763f6c.js.map