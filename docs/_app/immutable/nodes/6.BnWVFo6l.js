import"../chunks/disclose-version.Bg9kRutz.js";import{p as r,a as s}from"../chunks/runtime.Dui4tC2i.js";import{S as a}from"../chunks/Song.hDTkK7Rv.js";async function i({fetch:e,params:o}){const n=await(await e(`/api/cn/artists/${o.artist}/songs/${o.song}`)).json();if(n.error!==void 0)throw new Error("Contact the developer. We shouldn't be here.");return n}const u=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));function g(e,o){s(o,!0);let t=o.data.songs[0];a(e,{song:t}),r()}export{g as component,u as universal};