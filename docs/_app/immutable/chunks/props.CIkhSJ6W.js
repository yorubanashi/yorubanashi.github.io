import{a7 as N,a8 as j,a9 as K,X as y,aa as $,a0 as g,ab as D,ac as v,l as b,K as x,ad as G,g as Z,y as z,ae as H,af as V,ag as W,ah as X,i as q,ai as J,aj as Q,ak as F,al as k,am as p,an as ee,$ as re,o as M,ao as ae,ap as ne,W as te}from"./runtime.B9Y48AsJ.js";import{c as ie}from"./store.BrKQmhto.js";import{l as fe}from"./index.BFqC5wTN.js";function E(t,l=null,o){if(typeof t!="object"||t===null||N in t)return t;const P=Z(t);if(P!==j&&P!==K)return t;var f=new Map,c=z(t),m=y(0);c&&f.set("length",y(t.length));var w;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&$();var n=f.get(e);return n===void 0?(n=y(r.value),f.set(e,n)):g(n,E(r.value,w)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(v));else{if(c&&typeof e=="string"){var n=f.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&g(n,a)}g(r,v),U(m)}return!0},get(i,e,r){var _;if(e===N)return t;var n=f.get(e),a=e in i;if(n===void 0&&(!a||(_=D(i,e))!=null&&_.writable)&&(n=y(E(a?i[e]:v,w)),f.set(e,n)),n!==void 0){var u=b(n);return u===v?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var n=f.get(e);n&&(r.value=b(n))}else if(r===void 0){var a=f.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==v)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===N)return!0;var r=f.get(e),n=r!==void 0&&r.v!==v||Reflect.has(i,e);if(r!==void 0||x!==null&&(!n||(u=D(i,e))!=null&&u.writable)){r===void 0&&(r=y(n?E(i[e],w):v),f.set(e,r));var a=b(r);if(a===v)return!1}return n},set(i,e,r,n){var h;var a=f.get(e),u=e in i;if(c&&e==="length")for(var _=r;_<a.v;_+=1){var I=f.get(_+"");I!==void 0?g(I,v):_ in i&&(I=y(v),f.set(_+"",I))}a===void 0?(!u||(h=D(i,e))!=null&&h.writable)&&(a=y(void 0),g(a,E(r,w)),f.set(e,a)):(u=a.v!==v,g(a,E(r,w)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(n,r),!u){if(c&&typeof e=="string"){var O=f.get("length"),S=Number(e);Number.isInteger(S)&&S>=O.v&&g(O,S+1)}U(m)}return!0},ownKeys(i){b(m);var e=Reflect.ownKeys(i).filter(a=>{var u=f.get(a);return u===void 0||u.v!==v});for(var[r,n]of f)n.v!==v&&!(r in i)&&e.push(r);return e},setPrototypeOf(){G()}})}function U(t,l=1){g(t,t.v+l)}function Y(t){for(var l=x,o=x;l!==null&&!(l.f&(J|Q));)l=l.parent;try{return F(l),t()}finally{F(o)}}function ve(t,l,o,P){var C;var f=(o&k)!==0,c=!fe||(o&p)!==0,m=(o&ee)!==0,w=(o&ne)!==0,i=!1,e;m?[e,i]=ie(()=>t[l]):e=t[l];var r=N in t||re in t,n=((C=D(t,l))==null?void 0:C.set)??(r&&m&&l in t?s=>t[l]=s:void 0),a=P,u=!0,_=!1,I=()=>(_=!0,u&&(u=!1,w?a=q(P):a=P),a);e===void 0&&P!==void 0&&(n&&c&&H(),e=I(),n&&n(e));var d;if(c)d=()=>{var s=t[l];return s===void 0?I():(u=!0,_=!1,s)};else{var O=Y(()=>(f?M:ae)(()=>t[l]));O.f|=V,d=()=>{var s=b(O);return s!==void 0&&(a=void 0),s===void 0?a:s}}if(!(o&W))return d;if(n){var S=t.$$legacy;return function(s,R){return arguments.length>0?((!c||!R||S||i)&&n(R?d():s),s):d()}}var h=!1,B=!1,T=te(e),A=Y(()=>M(()=>{var s=d(),R=b(T);return h?(h=!1,B=!0,R):(B=!1,T.v=s)}));return f||(A.equals=X),function(s,R){if(arguments.length>0){const L=R?b(A):c&&m?E(s):s;return A.equals(L)||(h=!0,g(T,L),_&&a!==void 0&&(a=L),q(()=>b(A))),s}return b(A)}}export{E as a,ve as p};
