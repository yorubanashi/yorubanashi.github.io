import{O as T,an as F,ao as X,ap as Z,aq as D,ar as Q,as as aa,h as c,at as M,a6 as ea,aj as L,al as V,au as ta,av as W,aw as ra,ax as na,ay as Y,az as H,aA as sa,am as ia,ad as ua,Y as N,Z as C,q as la,P as fa,ah as oa,k as da,v as P,w as ca,aB as _a,l as E,aC as j,X as O,B as w,x as R,C as p,M as z,aD as q,aE as k,y as ha,N as va,aF as pa,aG as ya,J as ga,z as wa,aH as Ea,E as Ta,a as ba,p as ma,a0 as Da}from"./runtime.CNn9ltbh.js";import{b as Na}from"./template.0xQ5fhDM.js";function $(a){return{f:0,v:a,reactions:null,equals:ra,version:0}}function Ia(a){return Ca($(a))}function Ya(a,e=!1){const r=$(a);return e||(r.equals=ua),r}function Ca(a){return T!==null&&T.f&F&&(D===null?na([a]):D.push(a)),a}function Ha(a,e){return T!==null&&X()&&T.f&(F|Z)&&(D===null||!D.includes(a))&&Q(),Ra(a,e)}function Ra(a,e){return a.equals(e)||(a.v=e,a.version=aa(),x(a,L),c!==null&&c.f&M&&!(c.f&ea)&&(Y!==null&&Y.includes(a)?(V(c,L),W(c)):H===null?sa([a]):H.push(a))),e}function x(a,e){var r=a.reactions;if(r!==null)for(var s=r.length,n=0;n<s;n++){var t=r[n],u=t.f;u&L||(V(t,e),u&(M|ta)&&(u&F?x(t,ia):W(t)))}}function Aa(a){var e=T,r=c;N(null),C(null);try{return a()}finally{N(e),C(r)}}const G=new Set,S=new Set;function ka(a,e,r,s){function n(t){if(s.capture||b.call(e,t),!t.cancelBubble)return Aa(()=>r.call(this,t))}return a.startsWith("pointer")||a.startsWith("touch")||a==="wheel"?fa(()=>{e.addEventListener(a,n,s)}):e.addEventListener(a,n,s),n}function Ma(a,e,r,s,n){var t={capture:s,passive:n},u=ka(a,e,r,t);(e===document.body||e===window||e===document)&&la(()=>{e.removeEventListener(a,u,t)})}function Va(a){for(var e=0;e<a.length;e++)G.add(a[e]);for(var r of S)r(a)}function b(a){var I;var e=this,r=e.ownerDocument,s=a.type,n=((I=a.composedPath)==null?void 0:I.call(a))||[],t=n[0]||a.target,u=0,y=a.__root;if(y){var _=n.indexOf(y);if(_!==-1&&(e===document||e===window)){a.__root=e;return}var h=n.indexOf(e);if(h===-1)return;_<=h&&(u=_)}if(t=n[u]||a.target,t!==e){oa(a,"currentTarget",{configurable:!0,get(){return t||r}});var A=T,o=c;N(null),C(null);try{for(var i,l=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var v=t["__"+s];if(v!==void 0&&!t.disabled)if(da(v)){var[K,...U]=v;K.apply(t,[a,...U])}else v.call(t,a)}catch(m){i?l.push(m):i=m}if(a.cancelBubble||d===e||d===null)break;t=d}if(i){for(let m of l)queueMicrotask(()=>{throw m});throw i}}finally{a.__root=e,delete a.currentTarget,N(A),C(o)}}}let f;function La(){f=void 0}function Wa(a){let e=null,r=E;var s;if(E){for(e=p,f===void 0&&(f=z(document.head));f!==null&&(f.nodeType!==8||f.data!==j);)f=O(f);f===null?w(!1):f=R(O(f))}E||(s=document.head.appendChild(P()));try{ca(()=>a(s),_a)}finally{r&&(w(!0),f=p,R(e))}}const Oa=["touchstart","touchmove"];function qa(a){return Oa.includes(a)}function Pa(a,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=r,a.nodeValue=r==null?"":r+"")}function Sa(a,e){return J(a,e)}function ja(a,e){q(),e.intro=e.intro??!1;const r=e.target,s=E,n=p;try{for(var t=z(r);t&&(t.nodeType!==8||t.data!==j);)t=O(t);if(!t)throw k;w(!0),R(t),ha();const u=J(a,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==va)throw pa(),k;return w(!1),u}catch(u){if(u===k)return e.recover===!1&&ya(),q(),ga(r),w(!1),Sa(a,e);throw u}finally{w(s),R(n),La()}}const g=new Map;function J(a,{target:e,anchor:r,props:s={},events:n,context:t,intro:u=!0}){q();var y=new Set,_=o=>{for(var i=0;i<o.length;i++){var l=o[i];if(!y.has(l)){y.add(l);var d=qa(l);e.addEventListener(l,b,{passive:d});var v=g.get(l);v===void 0?(document.addEventListener(l,b,{passive:d}),g.set(l,1)):g.set(l,v+1)}}};_(wa(G)),S.add(_);var h=void 0,A=Ea(()=>{var o=r??e.appendChild(P());return Ta(()=>{if(t){ba({});var i=Da;i.c=t}n&&(s.$$events=n),E&&Na(o,null),h=a(o,s)||{},E&&(c.nodes_end=p),t&&ma()}),()=>{var d;for(var i of y){e.removeEventListener(i,b);var l=g.get(i);--l===0?(document.removeEventListener(i,b),g.delete(i)):g.set(i,l)}S.delete(_),B.delete(h),o!==r&&((d=o.parentNode)==null||d.removeChild(o))}});return B.set(h,A),h}let B=new WeakMap;function za(a){const e=B.get(a);e&&e()}export{$ as a,Ha as b,Sa as c,Va as d,Ia as e,Ma as f,Wa as g,ja as h,Ra as i,Ya as m,Pa as s,za as u};
