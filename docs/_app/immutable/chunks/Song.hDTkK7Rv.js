import"./disclose-version.Bg9kRutz.js";import{t as p,s as d,c as e,r as t,p as V,j as i,a as W,n as B}from"./runtime.Dui4tC2i.js";import{d as X,a as r,s as Y,e as C,g as D,h as F,b as Z}from"./store.CtPlCYPo.js";import{p as $,a as j,i as G}from"./props.DpdKfW7w.js";import{a as m,e as H,i as I}from"./attributes.DXEss9Kk.js";import{a as l,t as n}from"./template.DCfFlnGe.js";import{o as R,s as tt}from"./page.CnF6gU_Y.js";import{b as et}from"./entry.BHyI09Tf.js";const st=(y,s)=>{s(!s())};var at=n('<div class="main svelte-1u4xydg"><div class="label svelte-1u4xydg"> </div>  <toggle-button><div class="toggle-container svelte-1u4xydg"><div class="toggle-bar svelte-1u4xydg"></div> <div class="toggle-button svelte-1u4xydg"></div></div></toggle-button></div>',2);function J(y,s){let u=$(s,"checked",15);var c=at(),v=e(c),g=e(v,!0);t(v);var a=d(v,2);a.__click=[st,u],m(a,"role","button"),m(a,"tabindex","0"),m(a,"class","svelte-1u4xydg"),t(c),p(()=>{r(g,s.label),m(a,"checked",u()?"":null)}),l(y,c)}X(["click"]);var it=n('<div class="romanized svelte-1dywtyp"> </div>'),vt=n('<div class="english svelte-1dywtyp"> </div>'),ot=n('<div class="line svelte-1dywtyp"><div class="primary"> </div> <!> <!></div>'),dt=n('<div class="verse svelte-1dywtyp"></div>'),rt=n('<div id="options-layout" class="flex svelte-1dywtyp"><div id="main-content" class="svelte-1dywtyp"><h1 id="title" class="svelte-1dywtyp"> </h1> <h2 id="artist" class="svelte-1dywtyp"> </h2> <div id="lyrics"></div> <div id="footer" class="svelte-1dywtyp"></div></div> <div id="options-content"><!> <!> <hr id="options-divider" class="svelte-1dywtyp"></div></div>');function mt(y,s){W(s,!0);const u=Y(),c=()=>Z(R,"$options",u);D(R,0),et(()=>{D(R,j(NaN))});let v=F(!1),g=F(!1);var a=rt(),h=e(a),x=e(h),K=e(x,!0);t(x);var b=d(x,2),L=e(b,!0);t(b);var T=d(b,2);H(T,21,()=>s.song.verses,I,(_,O)=>{var w=dt();H(w,21,()=>i(O).lines,I,(P,k)=>{var E=ot(),N=e(E),Q=e(N,!0);t(N);var A=d(N,2);G(A,()=>i(v),z=>{var o=it(),S=e(o,!0);t(o),p(()=>r(S,i(k).rom)),l(z,o)});var U=d(A,2);G(U,()=>i(g),z=>{var o=vt(),S=e(o,!0);t(o),p(()=>r(S,i(k).eng)),l(z,o)}),t(E),p(()=>r(Q,i(k).pri)),l(P,E)}),t(w),l(_,w)}),t(T),B(2),t(h);var f=d(h,2),q=e(f);J(q,{get checked(){return i(v)},set checked(_){C(v,j(_))},label:"Enable romanized lyrics"});var M=d(q,2);J(M,{get checked(){return i(g)},set checked(_){C(g,j(_))},label:"Enable English translation"}),B(2),t(f),t(a),p(()=>{r(K,s.song.title),r(L,s.song.artist),tt(f,`${(c()==1?"show":"")??""} svelte-1dywtyp`)}),l(y,a),V()}export{mt as S};