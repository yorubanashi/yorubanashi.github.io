import"../chunks/disclose-version.Bg9kRutz.js";import{s as i,f as C,p as g,c as e,a as b,r as t,t as S,e as r}from"../chunks/runtime.CNn9ltbh.js";import{f as k,s as m}from"../chunks/render.Ct0_0gTE.js";import{e as M,i as O,a as B}from"../chunks/attributes.BjPTDLJw.js";import{a as u,t as _}from"../chunks/template.0xQ5fhDM.js";import{g as E}from"../chunks/entry.D-KKUdQl.js";async function L({fetch:l}){const v=await(await l("/api/cn/songs")).json();if(v.error!==void 0)throw new Error("Contact the developer. We shouldn't be here.");return v}const H=Object.freeze(Object.defineProperty({__proto__:null,load:L},Symbol.toStringTag,{value:"Module"}));var P=_('<tr class="song svelte-1yw696v"><td class="svelte-1yw696v"><a class="invisible svelte-1yw696v" aria-label="song-link"></a> <span> </span></td><td class="svelte-1yw696v"> </td></tr>'),T=_('<h1 class="svelte-1yw696v">歌单</h1> <div id="middle" class="svelte-1yw696v"><div class="search-bar svelte-1yw696v"><input type="text" class="search-input svelte-1yw696v" placeholder="搜索（没准备好）"> <svg class="search-icon svelte-1yw696v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg></div> <div id="listContainer" class="svelte-1yw696v"><table class="svelte-1yw696v"><thead><tr><th class="title-col svelte-1yw696v">标题</th><th class="svelte-1yw696v">歌手</th></tr></thead><tbody class="svelte-1yw696v"></tbody></table></div></div>',1);function W(l,s){b(s,!0);var v=T(),c=i(C(v),2),d=i(e(c),2),p=e(d),h=i(e(p));M(h,21,()=>s.songs,O,(x,a)=>{var o=P(),n=e(o),w=e(n),y=i(w,2),j=e(y,!0);t(y),t(n);var f=i(n),z=e(f,!0);t(f),t(o),S(()=>{B(w,"href",`/cn/songs/${r(a).artist}/${r(a).title}`),m(j,r(a).title),m(z,r(a).artist)}),k("click",o,()=>{E(`/cn/songs/${r(a).artist}/${r(a).title}`)}),u(x,o)}),t(h),t(p),t(d),t(c),u(l,v),g()}function I(l,s){b(s,!0),W(l,{get songs(){return s.data.songs}}),g()}export{I as component,H as universal};