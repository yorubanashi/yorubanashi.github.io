import{j as i,k as b,m as o,g as f}from"./runtime.Bfwhtjjl.js";import{a,s as l}from"./render.BQmCiP98.js";function d(s,u,n){if(s==null)return u(void 0),i;const e=b(()=>s.subscribe(u,n));return e.unsubscribe?()=>e.unsubscribe():e}let r=!1;function g(s,u,n){const e=n[u]??(n[u]={store:null,source:a(void 0),unsubscribe:i});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=i;else{var t=!0;e.unsubscribe=d(s,c=>{t?e.source.v=c:l(e.source,c)}),t=!1}return f(e.source)}function v(s,u){return s.set(u),u}function m(){const s={};return o(()=>{for(var u in s)s[u].unsubscribe()}),s}function y(s){var u=r;try{return r=!1,[s(),r]}finally{r=u}}export{g as a,v as b,y as c,m as s};
