import"../chunks/disclose-version.Bg9kRutz.js";import{p as q,t as j,a as A,s as i,c as s,r as t,j as r,n as B}from"../chunks/runtime.DPnE3_ia.js";import{s as D,d as N,a as o,b as F}from"../chunks/store.D8WKKIaZ.js";import{e as z,i as O}from"../chunks/each.HIQZNDpA.js";import{a as w,t as g}from"../chunks/template.BD_IheSU.js";import{o as h,s as G}from"../chunks/page.DbR2LsSw.js";import{p as I}from"../chunks/proxy.C2CpPgnj.js";import{b as J}from"../chunks/entry.CAcKkt2d.js";async function K({fetch:v,params:e}){const a=await(await v(`/api/cn/artists/${e.artist}/songs/${e.song}`)).json();if(a.error!==void 0)throw new Error("Contact the developer. We shouldn't be here.");return a}const it=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));var L=g('<div class="line svelte-wnoy6i"><div class="primary"> </div> <div class="romanized svelte-wnoy6i"> </div> <div class="english svelte-wnoy6i"> </div></div>'),Q=g('<div class="verse svelte-wnoy6i"></div>'),R=g('<div id="options-layout" class="flex svelte-wnoy6i"><div id="main-content" class="svelte-wnoy6i"><h1 id="title" class="svelte-wnoy6i"> </h1> <h2 id="artist" class="svelte-wnoy6i"> </h2> <div id="lyrics"></div> <div id="footer" class="svelte-wnoy6i"></div></div> <div id="options-content"><div>Hello world!</div> <hr id="options-divider" class="svelte-wnoy6i"></div></div>');function ot(v,e){q(e,!0);const x=D(),a=()=>F(h,"$options",x);let n=e.data.songs[0];N(h,0),J(()=>{N(h,I(NaN))});var d=R(),l=s(d),p=s(l),S=s(p,!0);t(p);var c=i(p,2),C=s(c,!0);t(c);var b=i(c,2);z(b,21,()=>n.verses,O,(H,M)=>{var _=Q();z(_,21,()=>r(M).lines,O,(P,m)=>{var y=L(),f=s(y),T=s(f,!0);t(f);var u=i(f,2),W=s(u,!0);t(u);var $=i(u,2),k=s($,!0);t($),t(y),j(()=>{o(T,r(m).pri),o(W,r(m).rom),o(k,r(m).eng)}),w(P,y)}),t(_),w(H,_)}),t(b),B(2),t(l);var E=i(l,2);t(d),j(()=>{o(S,n.title),o(C,n.artist),G(E,`${(a()==1?"show":"")??""} svelte-wnoy6i`)}),w(v,d),A()}export{ot as component,it as universal};