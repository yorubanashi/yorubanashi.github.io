const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.C481NpeS.js","../chunks/i18n.Cse-D_9J.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/runtime.Dui4tC2i.js","../chunks/template.DCfFlnGe.js","../chunks/snippet.aObKSh8t.js","../chunks/store.CtPlCYPo.js","../chunks/props.DpdKfW7w.js","../chunks/entry.BHyI09Tf.js","../chunks/index-client.Dab1z94N.js","../chunks/control.CYgJF_JY.js","../chunks/stores.DV5_2KKp.js","../chunks/attributes.DXEss9Kk.js","../chunks/page.CnF6gU_Y.js","../assets/0.DWAxQq2g.css","../nodes/1.7eL9Sfqk.js","../nodes/2.BhPK6FYA.js","../nodes/3.DDhf5PLv.js","../nodes/4.BqpY67BX.js","../chunks/Markdown.1fcEsSxA.js","../assets/Markdown.CVBYAp5c.css","../nodes/5.DJo43_I_.js","../chunks/SongList.CvixQsUU.js","../assets/SongList.z_brw0eG.css","../nodes/6.BnWVFo6l.js","../chunks/Song.hDTkK7Rv.js","../assets/Song.DJ6uT4Hx.css","../nodes/7.DBwX2pRI.js","../nodes/8.CBRkzJnM.js","../nodes/9.Yg6LWX_V.js","../nodes/10.BP7UTiJR.js","../nodes/11.DUixrJ3d.js"])))=>i.map(i=>d[i]);
var q=e=>{throw TypeError(e)};var F=(e,t,r)=>t.has(e)||q("Cannot "+r);var u=(e,t,r)=>(F(e,t,"read from private field"),r?r.call(e):t.get(e)),k=(e,t,r)=>t.has(e)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),w=(e,t,r,i)=>(F(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as G,m as Z,b as z,E as K,d as M,i as Q,x as X,aF as $,aG as tt,W as et,G as rt,Z as st,j as g,a9 as at,aH as nt,aw as ot,aI as it,V as ct,f as T,p as ut,a as lt,aJ as ft,s as mt,c as _t,t as dt,r as ht,ab as x}from"../chunks/runtime.Dui4tC2i.js";import{e as b,j as vt,k as gt,u as Et,m as yt,h as I,a as Pt}from"../chunks/store.CtPlCYPo.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as V,i as D,a as Rt}from"../chunks/props.DpdKfW7w.js";import{c as S,a as A,t as Y,d as At}from"../chunks/template.DCfFlnGe.js";import{o as Lt}from"../chunks/index-client.Dab1z94N.js";function j(e,t,r){G&&Z();var i=e,n,o;z(()=>{n!==(n=t())&&(o&&(X(o),o=null),n&&(o=M(()=>r(i,n))))},K),G&&(i=Q)}function U(e,t){return e===t||(e==null?void 0:e[st])===t}function C(e={},t,r,i){return $(()=>{var n,o;return tt(()=>{n=o,o=[],et(()=>{e!==r(...o)&&(t(e,...o),n&&U(r(...n),e)&&t(null,...n))})}),()=>{rt(()=>{o&&U(r(...o),e)&&t(null,...o)})}}),e}function Tt(e){return class extends bt{constructor(t){super({component:e,...t})}}}var E,m;class bt{constructor(t){k(this,E);k(this,m);var o;var r=new Map,i=(a,s)=>{var _=yt(s);return r.set(a,_),_};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return g(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===at?!0:(g(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,_){return b(r.get(s)??i(s,_),_),Reflect.set(a,s,_)}});w(this,m,(t.hydrate?vt:gt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&nt(),w(this,E,n.$$events);for(const a of Object.keys(u(this,m)))a==="$set"||a==="$destroy"||a==="$on"||ot(this,a,{get(){return u(this,m)[a]},set(s){u(this,m)[a]=s},enumerable:!0});u(this,m).$set=a=>{Object.assign(n,a)},u(this,m).$destroy=()=>{Et(u(this,m))}}$set(t){u(this,m).$set(t)}$on(t,r){u(this,E)[t]=u(this,E)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,E)[t].push(i),()=>{u(this,E)[t]=u(this,E)[t].filter(n=>n!==i)}}$destroy(){u(this,m).$destroy()}}E=new WeakMap,m=new WeakMap;const Ot="modulepreload",pt=function(e,t){return new URL(e,t).href},W={},f=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),_=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=pt(l,i),l in W)return;W[l]=!0;const y=l.endsWith(".css"),O=y?'[rel="stylesheet"]':"";if(!!i)for(let d=a.length-1;d>=0;d--){const v=a[d];if(v.href===l&&(!y||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${O}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":Ot,y||(c.as="script"),c.crossOrigin="",c.href=l,_&&c.setAttribute("nonce",_),document.head.appendChild(c),y)return new Promise((d,v)=>{c.addEventListener("load",d),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Ft={};var kt=Y('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),wt=Y("<!> <!>",1);function xt(e,t){lt(t,!0);let r=V(t,"components",23,()=>[]),i=V(t,"data_0",3,null),n=V(t,"data_1",3,null);it(()=>t.stores.page.set(t.page)),ct(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=I(!1),a=I(!1),s=I(null);Lt(()=>{const P=t.stores.page.subscribe(()=>{g(o)&&(b(a,!0),ft().then(()=>{b(s,Rt(document.title||"untitled page"))}))});return b(o,!0),P});const _=x(()=>t.constructors[1]);var l=wt(),y=T(l);D(y,()=>t.constructors[1],P=>{var c=S();const d=x(()=>t.constructors[0]);var v=T(c);j(v,()=>g(d),(R,p)=>{C(p(R,{get data(){return i()},get form(){return t.form},children:(h,It)=>{var B=S(),H=T(B);j(H,()=>g(_),(J,N)=>{C(N(J,{get data(){return n()},get form(){return t.form}}),L=>r()[1]=L,()=>{var L;return(L=r())==null?void 0:L[1]})}),A(h,B)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),A(P,c)},P=>{var c=S();const d=x(()=>t.constructors[0]);var v=T(c);j(v,()=>g(d),(R,p)=>{C(p(R,{get data(){return i()},get form(){return t.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),A(P,c)});var O=mt(y,2);D(O,()=>g(o),P=>{var c=kt(),d=_t(c);D(d,()=>g(a),v=>{var R=At();dt(()=>Pt(R,g(s))),A(v,R)}),ht(c),A(P,c)}),A(e,l),ut()}const Gt=Tt(xt),Ut=[()=>f(()=>import("../nodes/0.C481NpeS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url),()=>f(()=>import("../nodes/1.7eL9Sfqk.js"),__vite__mapDeps([15,2,3,6,4,11,8,9,10]),import.meta.url),()=>f(()=>import("../nodes/2.BhPK6FYA.js"),__vite__mapDeps([16,10,2]),import.meta.url),()=>f(()=>import("../nodes/3.DDhf5PLv.js"),__vite__mapDeps([17,2,3,4]),import.meta.url),()=>f(()=>import("../nodes/4.BqpY67BX.js"),__vite__mapDeps([18,2,3,4,19,5,20]),import.meta.url),()=>f(()=>import("../nodes/5.DJo43_I_.js"),__vite__mapDeps([21,2,3,22,6,4,12,8,9,10,11,1,23]),import.meta.url),()=>f(()=>import("../nodes/6.BnWVFo6l.js"),__vite__mapDeps([24,2,3,25,6,4,7,12,13,8,9,10,26]),import.meta.url),()=>f(()=>import("../nodes/7.DBwX2pRI.js"),__vite__mapDeps([27,2,3,4]),import.meta.url),()=>f(()=>import("../nodes/8.CBRkzJnM.js"),__vite__mapDeps([28,2,4,3]),import.meta.url),()=>f(()=>import("../nodes/9.Yg6LWX_V.js"),__vite__mapDeps([29,2,3,4,19,5,20]),import.meta.url),()=>f(()=>import("../nodes/10.BP7UTiJR.js"),__vite__mapDeps([30,2,3,22,6,4,12,8,9,10,11,1,23]),import.meta.url),()=>f(()=>import("../nodes/11.DUixrJ3d.js"),__vite__mapDeps([31,2,3,25,6,4,7,12,13,8,9,10,26]),import.meta.url)],Wt=[],Yt={"/":[2],"/cn":[3],"/cn/notes":[4],"/cn/songs":[5],"/cn/songs/[artist]/[song]":[6],"/en":[7],"/jp":[8],"/jp/notes":[9],"/jp/songs":[10],"/jp/songs/[artist]/[song]":[11]},Ht={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Yt as dictionary,Ht as hooks,Ft as matchers,Ut as nodes,Gt as root,Wt as server_loads};