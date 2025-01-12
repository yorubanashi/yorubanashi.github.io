import"../chunks/disclose-version.Bg9kRutz.js";import{i as ve,a4 as oe,x as de,b as F,D as ue,h as ce,v as fe,t as L,p as R,g as i,s as g,c as s,a as W,ac as I,r,f as q,n as ge,aK as _e}from"../chunks/runtime.mPexNlzh.js";import{a as d,t as y,c as A}from"../chunks/template.cXPIgI8Y.js";import{d as ee,c as C,a as T,s as B,f as he}from"../chunks/render.DPt6e58I.js";import{a as O,i as S,p as me}from"../chunks/props.BB2w7jFQ.js";import{s as H,a as J,b as pe}from"../chunks/store.BU4wUaiw.js";import{a as te}from"../chunks/entry.C9wjLjfJ.js";import{p as ae}from"../chunks/stores.D_HV7I2L.js";import{e as X,i as Y,s as Z}from"../chunks/attributes.CEQE4s10.js";import{s as K,o as se}from"../chunks/page.DMCJhBrD.js";function Q(v,e,...u){var c=v,a=F,t;ve(()=>{a!==(a=e())&&(t&&(ue(t),t=null),t=de(()=>a(c,...u)))},oe),ce&&(c=fe)}const G=[{apiPrefix:"cn",linkPrefix:"/cn",name:"中文"},{apiPrefix:"jp",linkPrefix:"/jp",name:"日本語"},{apiPrefix:"en",linkPrefix:"/",name:"English"}],ke=!0;async function be({fetch:v,url:e}){const u=(()=>{for(let t of G)if(e.pathname.includes(t.linkPrefix))return t.apiPrefix;return"en"})(),a=await(await v(`/api/svelte/${u}`)).json();if(a.error!==void 0)throw new Error("Contact the developer. We shouldn't be here.");return a}const Ge=Object.freeze(Object.defineProperty({__proto__:null,load:be,prerender:ke},Symbol.toStringTag,{value:"Module"})),xe=(v,e)=>{T(e,!i(e))};var ye=y("<div>▾</div>"),je=y("<div>▸</div>"),Pe=y('<li class="svelte-1fkv6lu"><a class="svelte-1fkv6lu"> </a></li>'),we=y('<li class="svelte-1fkv6lu"><a class="svelte-1fkv6lu"> </a></li>'),$e=y('<aside id="menu"><div id="menu-content" class="svelte-1fkv6lu"><h2 id="menu-title" class="svelte-1fkv6lu">夜の思索</h2> <div><input type="text" placeholder="[WIP] Search" class="svelte-1fkv6lu"></div> <div><ul id="translate-list" class="svelte-1fkv6lu"><li class="svelte-1fkv6lu"><a href="javascript:void(0)" class="flex justify-between svelte-1fkv6lu"><div class="flex align-center"><svg id="translate-icon" viewBox="0 0 24 24" class="svelte-1fkv6lu"><use href="/translate.svg#translate"></use></svg> <div> </div></div> <!></a></li> <!></ul></div> <div><ul class="svelte-1fkv6lu"><!></ul></div></div></aside>');function Me(v,e){W(e,!0);const u=H(),c=()=>J(ae,"$page",u);let a=C(!1);const t=()=>{T(a,!1);let l=null,o=[];return G.forEach(w=>{c().url.pathname.includes(w.linkPrefix)&&l===null?l=w:o.push(w)}),l===null&&(l=G[2]),[l,o]};let j=I(()=>l=>`${i(h).linkPrefix}/${l}`),_=C(O(t())),h=I(()=>i(_)[0]),k=I(()=>i(_)[1]);te(()=>{T(_,O(t()))});var b=$e(),n=s(b),m=g(s(n),4),f=s(m),p=s(f),E=s(p);E.__click=[xe,a];var P=s(E),x=g(s(P),2),re=s(x,!0);r(x),r(P);var ie=g(P,2);S(ie,()=>i(a),l=>{var o=ye();d(l,o)},l=>{var o=je();d(l,o)}),r(E),r(p);var ne=g(p,2);S(ne,()=>i(a),l=>{var o=A(),w=q(o);X(w,17,()=>i(k),Y,(z,N)=>{var $=Pe(),M=s($),D=s(M,!0);r(M),r($),L(()=>{Z(M,"href",i(N).linkPrefix),B(D,i(N).name)}),d(z,$)}),d(l,o)}),r(f),r(m);var U=g(m,2),V=s(U),le=s(V);S(le,()=>i(h)!==void 0&&e.dir.dirs!==void 0,l=>{var o=A(),w=q(o);X(w,17,()=>Object.entries(e.dir.dirs),Y,(z,N)=>{var $=we(),M=s($);L(()=>Z(M,"href",i(j)(i(N)[1].link.addr)));var D=s(M,!0);r(M),r($),L(()=>B(D,i(N)[1].link.name)),d(z,$)}),d(l,o)}),r(V),r(U),r(n),r(b),L(()=>{K(b,`${(e.show?"show":"")??""} svelte-1fkv6lu`),B(re,i(h).name)}),d(v,b),R()}ee(["click"]);const Te=(v,e)=>{pe(se,O(e()==0?1:0))};var Ee=y('<button id="burger-button" aria-label="settings-toggle" class="svelte-14jy2k8"><svg id="settings-icon" viewBox="0 0 24 24" class="svelte-14jy2k8"><use href="/settings.svg#settings"></use></svg></button>'),Le=(v,e)=>{e(!1)},Ne=y('<div id="page"><header id="page-header" class="svelte-14jy2k8"><div class="left svelte-14jy2k8"><button id="burger-button" aria-label="menu-toggle" class="svelte-14jy2k8"><svg id="burger-icon" viewBox="0 0 24 24" class="svelte-14jy2k8"><use href="/menu.svg#top"></use><use href="/menu.svg#mid"></use><use href="/menu.svg#bot"></use></svg></button></div> <div class="center"> </div> <div class="right svelte-14jy2k8"><!></div> <div></div></header> <div id="page-content" class="svelte-14jy2k8"><!></div> <div aria-label="menu-control"></div></div>');function Oe(v,e){W(e,!0);const u=H(),c=()=>J(se,"$options",u);let a=me(e,"showMenu",15);var t=Ne(),j=s(t),_=s(j),h=s(_);h.__click=function(...P){var x;(x=e.toggleMenu)==null||x.apply(this,P)},r(_);var k=g(_,2),b=s(k,!0);r(k);var n=g(k,2),m=s(n);S(m,()=>!Number.isNaN(c()),P=>{var x=Ee();x.__click=[Te,c],d(P,x)}),r(n),ge(2),r(j);var f=g(j,2),p=s(f);Q(p,()=>e.children??F),r(f);var E=g(f,2);E.__click=[Le,a],r(t),L(()=>{K(t,`${(a()?"opaque":"")??""} svelte-14jy2k8`),B(b,e.pageTitle),K(E,`${(a()?"cover":"hidden cover")??""} svelte-14jy2k8`)}),d(v,t),R()}ee(["click"]);var Be=y('<div id="blog" class="svelte-1xocqw3"><!> <!></div>');function Se(v,e){W(e,!0);const u=H(),c=()=>J(ae,"$page",u);let a=C(""),t=C(!1);const j=()=>{T(t,!i(t))},_=n=>{if(n.link===void 0)return"夜噺";if(n.dirs===void 0)return n.link.name;const m=Object.entries(n.dirs).filter(([f,p])=>c().url.pathname.includes(p.link.addr));return m.length>0?m[0][1].link.name:n.link.name};te(()=>{T(a,O(_(e.dir))),T(t,!1)});var h=Be();he(n=>{L(()=>_e.title=`
		${i(a)??""}
	`)});var k=s(h);Me(k,{get dir(){return e.dir},get show(){return i(t)}});var b=g(k,2);Oe(b,{get showMenu(){return i(t)},set showMenu(n){T(t,O(n))},get pageTitle(){return i(a)},toggleMenu:j,children:(n,m)=>{var f=A(),p=q(f);Q(p,()=>e.children??F),d(n,f)},$$slots:{default:!0}}),r(h),d(v,h),R()}function He(v,e){W(e,!0),Se(v,{get dir(){return e.data.dir},children:(u,c)=>{var a=A(),t=q(a);Q(t,()=>e.children??F),d(u,a)},$$slots:{default:!0}}),R()}export{He as component,Ge as universal};
