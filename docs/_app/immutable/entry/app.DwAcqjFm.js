const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CCJHYIuK.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/runtime.CNn9ltbh.js","../chunks/template.0xQ5fhDM.js","../chunks/render.Ct0_0gTE.js","../chunks/proxy.DPDXHquS.js","../chunks/store.CxCLuRw1.js","../chunks/legacy-client.BOKuigSW.js","../chunks/entry.D-KKUdQl.js","../chunks/index-client.u5OYRN2z.js","../chunks/control.CYgJF_JY.js","../chunks/stores.C8kiglt9.js","../chunks/attributes.BjPTDLJw.js","../chunks/page.D6ft1_5M.js","../assets/0.PBG_lysF.css","../nodes/1.ZjERMem1.js","../nodes/2.BhPK6FYA.js","../nodes/3.cjqnzLm-.js","../nodes/4.DONWhpyP.js","../assets/4.z_brw0eG.css","../nodes/5.fQh60LJJ.js","../assets/5.DyPXdRra.css","../nodes/6.CURv6Z_x.js","../nodes/7.d6Al9uOs.js"])))=>i.map(i=>d[i]);
import{p as A,i as L,a as U}from"../chunks/legacy-client.BOKuigSW.js";import"../chunks/disclose-version.Bg9kRutz.js";import{l as D,y as J,w as K,a4 as N,E as W,C as Y,F as z,aI as G,aJ as H,u as Q,P as X,S as Z,ai as M,a1 as $,f as y,s as tt,e as h,p as et,a as rt,aK as at,c as ot,t as st,r as nt,ac as k}from"../chunks/runtime.CNn9ltbh.js";import{e as w,b,s as it}from"../chunks/render.Ct0_0gTE.js";import{c as O,a as g,t as B,d as ct}from"../chunks/template.0xQ5fhDM.js";import{p as lt}from"../chunks/proxy.DPDXHquS.js";import{o as ut}from"../chunks/index-client.u5OYRN2z.js";function S(e,t,o){D&&J();var u=e,n,r;K(()=>{n!==(n=t())&&(r&&(z(r),r=null),n&&(r=W(()=>o(u,n))))},N),D&&(u=Y)}function V(e,t){return e===t||(e==null?void 0:e[Z])===t}function I(e={},t,o,u){return G(()=>{var n,r;return H(()=>{n=r,r=[],Q(()=>{e!==o(...r)&&(t(e,...r),n&&V(o(...n),e)&&t(null,...n))})}),()=>{X(()=>{r&&V(o(...r),e)&&t(null,...r)})}}),e}const ft="modulepreload",mt=function(e,t){return new URL(e,t).href},C={},v=function(t,o,u){let n=Promise.resolve();if(o&&o.length>0){const f=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),p=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(o.map(i=>{if(i=mt(i,u),i in C)return;C[i]=!0;const d=i.endsWith(".css"),R=d?'[rel="stylesheet"]':"";if(!!u)for(let c=f.length-1;c>=0;c--){const m=f[c];if(m.href===i&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${R}`))return;const a=document.createElement("link");if(a.rel=d?"stylesheet":ft,d||(a.as="script"),a.crossOrigin="",a.href=i,p&&a.setAttribute("nonce",p),document.head.appendChild(a),d)return new Promise((c,m)=>{a.addEventListener("load",c),a.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(f){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=f,window.dispatchEvent(s),!s.defaultPrevented)throw f}return n.then(f=>{for(const s of f||[])s.status==="rejected"&&r(s.reason);return t().catch(r)})},At={};var dt=B('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),_t=B("<!> <!>",1);function vt(e,t){rt(t,!0);let o=A(t,"components",23,()=>[]),u=A(t,"data_0",3,null),n=A(t,"data_1",3,null);M(()=>t.stores.page.set(t.page)),$(()=>{t.stores,t.page,t.constructors,o(),t.form,u(),n(),t.stores.page.notify()});let r=w(!1),f=w(!1),s=w(null);ut(()=>{const _=t.stores.page.subscribe(()=>{h(r)&&(b(f,!0),at().then(()=>{b(s,lt(document.title||"untitled page"))}))});return b(r,!0),_});const p=k(()=>t.constructors[1]);var i=_t(),d=y(i);L(d,()=>t.constructors[1],_=>{var a=O();const c=k(()=>t.constructors[0]);var m=y(a);S(m,()=>h(c),(E,T)=>{I(T(E,{get data(){return u()},get form(){return t.form},children:(l,ht)=>{var x=O(),q=y(x);S(q,()=>h(p),(F,j)=>{I(j(F,{get data(){return n()},get form(){return t.form}}),P=>o()[1]=P,()=>{var P;return(P=o())==null?void 0:P[1]})}),g(l,x)},$$slots:{default:!0}}),l=>o()[0]=l,()=>{var l;return(l=o())==null?void 0:l[0]})}),g(_,a)},_=>{var a=O();const c=k(()=>t.constructors[0]);var m=y(a);S(m,()=>h(c),(E,T)=>{I(T(E,{get data(){return u()},get form(){return t.form}}),l=>o()[0]=l,()=>{var l;return(l=o())==null?void 0:l[0]})}),g(_,a)});var R=tt(d,2);L(R,()=>h(r),_=>{var a=dt(),c=ot(a);L(c,()=>h(f),m=>{var E=ct();st(()=>it(E,h(s))),g(m,E)}),nt(a),g(_,a)}),g(e,i),et()}const Lt=U(vt),kt=[()=>v(()=>import("../nodes/0.CCJHYIuK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url),()=>v(()=>import("../nodes/1.ZjERMem1.js"),__vite__mapDeps([15,1,2,4,3,6,11,8,9,10]),import.meta.url),()=>v(()=>import("../nodes/2.BhPK6FYA.js"),__vite__mapDeps([16,10,1]),import.meta.url),()=>v(()=>import("../nodes/3.cjqnzLm-.js"),__vite__mapDeps([17,1,2,3]),import.meta.url),()=>v(()=>import("../nodes/4.DONWhpyP.js"),__vite__mapDeps([18,1,2,4,3,12,8,9,10,19]),import.meta.url),()=>v(()=>import("../nodes/5.fQh60LJJ.js"),__vite__mapDeps([20,1,2,4,3,12,13,8,9,10,5,6,21]),import.meta.url),()=>v(()=>import("../nodes/6.CURv6Z_x.js"),__vite__mapDeps([22,1,2,3]),import.meta.url),()=>v(()=>import("../nodes/7.d6Al9uOs.js"),__vite__mapDeps([23,1,3,2]),import.meta.url)],wt=[],bt={"/":[2],"/cn":[3],"/cn/songs":[4],"/cn/songs/[artist]/[song]":[5],"/en":[6],"/jp":[7]},Ot={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{bt as dictionary,Ot as hooks,At as matchers,kt as nodes,Lt as root,wt as server_loads};
