import{h as i,a1 as c,ab as o,g as f}from"./runtime.BXlp3a7n.js";import{m as a,b as l}from"./render.ZbB6n9ue.js";function d(s,u,n){if(s==null)return u(void 0),i;const e=c(()=>s.subscribe(u,n));return e.unsubscribe?()=>e.unsubscribe():e}let r=!1;function g(s,u,n){const e=n[u]??(n[u]={store:null,source:a(void 0),unsubscribe:i});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=i;else{var t=!0;e.unsubscribe=d(s,b=>{t?e.source.v=b:l(e.source,b)}),t=!1}return f(e.source)}function v(s,u){return s.set(u),u}function m(){const s={};return o(()=>{for(var u in s)s[u].unsubscribe()}),s}function y(s){var u=r;try{return r=!1,[s(),r]}finally{r=u}}export{g as a,v as b,y as c,m as s};
