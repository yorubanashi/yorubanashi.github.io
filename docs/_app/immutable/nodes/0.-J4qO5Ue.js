import"../chunks/disclose-version.Bg9kRutz.js";import{J as oe,aj as ve,Z as de,aF as A,a6 as ue,h as ce,W as fe,p as C,au as F,t as L,a as R,k as w,j as i,s as _,c as s,w as I,r,f as W,n as ge,aG as _e}from"../chunks/runtime.DPnE3_ia.js";import{a as d,t as P,c as q}from"../chunks/template.BD_IheSU.js";import{f as ee,s as D,b as H,a as B,d as he,g as me}from"../chunks/store.D8WKKIaZ.js";import{p as N}from"../chunks/proxy.C2CpPgnj.js";import{i as S,r as pe}from"../chunks/legacy-client.CA-vwwH4.js";import{a as te}from"../chunks/entry.CAcKkt2d.js";import{p as ae}from"../chunks/stores.rIRc9zQT.js";import{e as V,i as X}from"../chunks/each.HIQZNDpA.js";import{s as Y}from"../chunks/attributes.BKR4u4MR.js";import{s as J,o as se}from"../chunks/page.DbR2LsSw.js";import{p as be}from"../chunks/props.MoBkZBGO.js";function K(o,e,...u){var c=o,a=A,t;oe(()=>{a!==(a=e())&&(t&&(ue(t),t=null),t=de(()=>a(c,...u)))},ve),ce&&(c=fe)}const Z=[{apiPrefix:"cn",linkPrefix:"/cn",name:"中文"},{apiPrefix:"jp",linkPrefix:"/jp",name:"日本語"},{apiPrefix:"en",linkPrefix:"/",name:"English"}],ke=!0;async function xe({fetch:o,url:e}){const u=(()=>{for(let t of Z)if(e.pathname.includes(t.linkPrefix))return t.apiPrefix;return"en"})(),a=await(await o(`/api/svelte/${u}`)).json();if(a.error!==void 0)throw new Error("Contact the developer. We shouldn't be here.");return a}const Ke=Object.freeze(Object.defineProperty({__proto__:null,load:xe,prerender:ke},Symbol.toStringTag,{value:"Module"})),we=(o,e)=>{w(e,!i(e))};var Pe=P("<div>▾</div>"),ye=P("<div>▸</div>"),je=P('<li class="svelte-1fkv6lu"><a class="svelte-1fkv6lu"> </a></li>'),Me=P('<li class="svelte-1fkv6lu"><a class="svelte-1fkv6lu"> </a></li>'),Te=P('<aside id="menu"><div id="menu-content" class="svelte-1fkv6lu"><h2 id="menu-title" class="svelte-1fkv6lu">夜の思索</h2> <div><input type="text" placeholder="[WIP] Search" class="svelte-1fkv6lu"></div> <div><ul id="translate-list" class="svelte-1fkv6lu"><li class="svelte-1fkv6lu"><a href="javascript:void(0)" class="flex justify-between svelte-1fkv6lu"><div class="flex align-center"><svg id="translate-icon" viewBox="0 0 24 24" class="svelte-1fkv6lu"><use href="/translate.svg#translate"></use></svg> <div> </div></div> <!></a></li> <!></ul></div> <div><ul class="svelte-1fkv6lu"><!></ul></div></div></aside>');function $e(o,e){C(e,!0);const u=D(),c=()=>H(ae,"$page",u);let a=F(!1);const t=()=>{w(a,!1);let l=null,v=[];return Z.forEach(M=>{c().url.pathname.includes(M.linkPrefix)&&l===null?l=M:v.push(M)}),l===null&&(l=Z[2]),[l,v]};let y=I(()=>l=>`${i(h).linkPrefix}/${l}`),f=F(N(t())),h=I(()=>i(f)[0]),b=I(()=>i(f)[1]);te(()=>{w(f,N(t()))});var k=Te(),n=s(k),m=_(s(n),4),g=s(m),p=s(g),E=s(p);E.__click=[we,a];var j=s(E),x=_(s(j),2),re=s(x,!0);r(x),r(j);var ie=_(j,2);S(ie,()=>i(a),l=>{var v=Pe();d(l,v)},l=>{var v=ye();d(l,v)}),r(E),r(p);var ne=_(p,2);S(ne,()=>i(a),l=>{var v=q(),M=W(v);V(M,17,()=>i(b),X,(z,O)=>{var T=je(),$=s(T),G=s($,!0);r($),r(T),L(()=>{Y($,"href",i(O).linkPrefix),B(G,i(O).name)}),d(z,T)}),d(l,v)}),r(g),r(m);var Q=_(m,2),U=s(Q),le=s(U);S(le,()=>i(h)!==void 0&&e.dir.dirs!==void 0,l=>{var v=q(),M=W(v);V(M,17,()=>Object.entries(e.dir.dirs),X,(z,O)=>{var T=Me(),$=s(T);L(()=>Y($,"href",i(y)(i(O)[1].link.addr)));var G=s($,!0);r($),r(T),L(()=>B(G,i(O)[1].link.name)),d(z,T)}),d(l,v)}),r(U),r(Q),r(n),r(k),L(()=>{J(k,`${(e.show?"show":"")??""} svelte-1fkv6lu`),B(re,i(h).name)}),d(o,k),R()}ee(["click"]);const Ee=(o,e)=>{he(se,N(e()==0?1:0))};var Le=P('<button id="burger-button" aria-label="settings-toggle" class="svelte-g4bco4"><svg id="settings-icon" viewBox="0 0 24 24" class="svelte-g4bco4"><use href="/settings.svg#settings"></use></svg></button>'),Ne=(o,e)=>{e(!1)},Oe=P('<div id="page"><header id="page-header" class="svelte-g4bco4"><div class="left svelte-g4bco4"><button id="burger-button" aria-label="menu-toggle" class="svelte-g4bco4"><svg id="burger-icon" viewBox="0 0 24 24" class="svelte-g4bco4"><use href="/menu.svg#top"></use><use href="/menu.svg#mid"></use><use href="/menu.svg#bot"></use></svg></button></div> <div class="center"> </div> <div class="right svelte-g4bco4"><!></div> <div></div></header> <div id="page-content" class="svelte-g4bco4"><!></div> <div aria-label="menu-control"></div></div>');function Be(o,e){C(e,!0);const u=D(),c=()=>H(se,"$options",u);let a=be(e,"showMenu",15);var t=Oe(),y=s(t),f=s(y),h=s(f);h.__click=function(...j){var x;(x=e.toggleMenu)==null||x.apply(this,j)},r(f);var b=_(f,2),k=s(b,!0);r(b);var n=_(b,2),m=s(n);S(m,()=>!Number.isNaN(c()),j=>{var x=Le();x.__click=[Ee,c],d(j,x)}),r(n),ge(2),r(y);var g=_(y,2),p=s(g);K(p,()=>e.children??A),r(g);var E=_(g,2);E.__click=[Ne,a],r(t),L(()=>{J(t,`${(a()?"opaque":"")??""} svelte-g4bco4`),B(k,e.pageTitle),J(E,`${(a()?"cover":"hidden cover")??""} svelte-g4bco4`)}),d(o,t),R()}ee(["click"]);var Se=P('<div id="blog" class="svelte-1xocqw3"><!> <!></div>');function Fe(o,e){C(e,!0);const u=D(),c=()=>H(ae,"$page",u);let a=F(""),t=F(!1);const y=()=>{w(t,!i(t))},f=n=>{if(n.link===void 0)return"夜噺";if(n.dirs===void 0)return n.link.name;const m=Object.entries(n.dirs).filter(([g,p])=>c().url.pathname.includes(p.link.addr));return m.length>0?m[0][1].link.name:n.link.name};te(()=>{w(a,N(f(e.dir))),w(t,!1)}),pe(()=>{w(a,N(f(e.dir)))});var h=Se();me(n=>{L(()=>_e.title=`
		${i(a)??""}
	`)});var b=s(h);$e(b,{get dir(){return e.dir},get show(){return i(t)}});var k=_(b,2);Be(k,{get showMenu(){return i(t)},set showMenu(n){w(t,N(n))},get pageTitle(){return i(a)},toggleMenu:y,children:(n,m)=>{var g=q(),p=W(g);K(p,()=>e.children??A),d(n,g)},$$slots:{default:!0}}),r(h),d(o,h),R()}function Qe(o,e){C(e,!0),Fe(o,{get dir(){return e.data.dir},children:(u,c)=>{var a=q(),t=W(a);K(t,()=>e.children??A),d(u,a)},$$slots:{default:!0}}),R()}export{Qe as component,Ke as universal};
