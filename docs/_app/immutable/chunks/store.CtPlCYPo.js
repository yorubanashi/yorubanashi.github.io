import{F as w,af as L,ag as x,ah as ee,ai as A,aj as ae,ak as ne,y as v,al as M,a5 as re,am as k,an as P,ao as se,ap as W,aq as te,ar as ie,as as B,at as H,au as ue,av as fe,ac as oe,aw as le,P as V,Q as j,o as de,k as U,b as ce,ax as _e,h as E,ay as $,O,v as g,l as C,i as p,C as z,az as S,aA as R,m as he,D as ve,aB as pe,aC as be,A as ye,q as ge,aD as Ee,d as we,a as me,p as Te,U as De,e as q,W as Ae,aE as Ce,j as Ne}from"./runtime.Dui4tC2i.js";import{b as Re}from"./template.DCfFlnGe.js";function K(e){return{f:0,v:e,reactions:null,equals:te,version:0}}function je(e){return Oe(K(e))}function ke(e,a=!1){const r=K(e);return a||(r.equals=oe),r}function Oe(e){return w!==null&&w.f&L&&(A===null?ie([e]):A.push(e)),e}function Se(e,a){return w!==null&&x()&&w.f&(L|ee)&&(A===null||!A.includes(e))&&ae(),qe(e,a)}function qe(e,a){return e.equals(a)||(e.v=a,e.version=ne(),Q(e,k),v!==null&&v.f&M&&!(v.f&re)&&(B!==null&&B.includes(e)?(P(v,k),W(v)):H===null?ue([e]):H.push(e))),a}function Q(e,a){var r=e.reactions;if(r!==null)for(var s=r.length,t=0;t<s;t++){var n=r[t],f=n.f;f&k||(P(n,a),f&(M|se)&&(f&L?Q(n,fe):W(n)))}}const G=new Set,F=new Set;function Me(e){for(var a=0;a<e.length;a++)G.add(e[a]);for(var r of F)r(e)}function T(e){var Y;var a=this,r=a.ownerDocument,s=e.type,t=((Y=e.composedPath)==null?void 0:Y.call(e))||[],n=t[0]||e.target,f=0,b=e.__root;if(b){var c=t.indexOf(b);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var _=t.indexOf(a);if(_===-1)return;c<=_&&(f=c)}if(n=t[f]||e.target,n!==a){le(e,"currentTarget",{configurable:!0,get(){return n||r}});var N=w,l=v;V(null),j(null);try{for(var i,u=[];n!==null;){var d=n.assignedSlot||n.parentNode||n.host||null;try{var h=n["__"+s];if(h!==void 0&&!n.disabled)if(de(h)){var[X,...Z]=h;X.apply(n,[e,...Z])}else h.call(n,e)}catch(m){i?u.push(m):i=m}if(e.cancelBubble||d===a||d===null)break;n=d}if(i){for(let m of u)queueMicrotask(()=>{throw m});throw i}}finally{e.__root=a,delete e.currentTarget,V(N),j(l)}}}let o;function Fe(){o=void 0}function Pe(e){let a=null,r=E;var s;if(E){for(a=p,o===void 0&&(o=z(document.head));o!==null&&(o.nodeType!==8||o.data!==$);)o=O(o);o===null?g(!1):o=C(O(o))}E||(s=document.head.appendChild(U()));try{ce(()=>e(s),_e)}finally{r&&(g(!0),o=p,C(a))}}const Ie=["touchstart","touchmove"];function Le(e){return Ie.includes(e)}function We(e,a){var r=a==null?"":typeof a=="object"?a+"":a;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Ye(e,a){return J(e,a)}function Ue(e,a){S(),a.intro=a.intro??!1;const r=a.target,s=E,t=p;try{for(var n=z(r);n&&(n.nodeType!==8||n.data!==$);)n=O(n);if(!n)throw R;g(!0),C(n),he();const f=J(e,{...a,anchor:n});if(p===null||p.nodeType!==8||p.data!==ve)throw pe(),R;return g(!1),f}catch(f){if(f===R)return a.recover===!1&&be(),S(),ye(r),g(!1),Ye(e,a);throw f}finally{g(s),C(t),Fe()}}const y=new Map;function J(e,{target:a,anchor:r,props:s={},events:t,context:n,intro:f=!0}){S();var b=new Set,c=l=>{for(var i=0;i<l.length;i++){var u=l[i];if(!b.has(u)){b.add(u);var d=Le(u);a.addEventListener(u,T,{passive:d});var h=y.get(u);h===void 0?(document.addEventListener(u,T,{passive:d}),y.set(u,1)):y.set(u,h+1)}}};c(ge(G)),F.add(c);var _=void 0,N=Ee(()=>{var l=r??a.appendChild(U());return we(()=>{if(n){me({});var i=De;i.c=n}t&&(s.$$events=t),E&&Re(l,null),_=e(l,s)||{},E&&(v.nodes_end=p),n&&Te()}),()=>{var d;for(var i of b){a.removeEventListener(i,T);var u=y.get(i);--u===0?(document.removeEventListener(i,T),y.delete(i)):y.set(i,u)}F.delete(c),I.delete(_),l!==r&&((d=l.parentNode)==null||d.removeChild(l))}});return I.set(_,N),_}let I=new WeakMap;function $e(e){const a=I.get(e);a&&a()}function Be(e,a,r){if(e==null)return a(void 0),q;const s=Ae(()=>e.subscribe(a,r));return s.unsubscribe?()=>s.unsubscribe():s}let D=!1;function ze(e,a,r){const s=r[a]??(r[a]={store:null,source:ke(void 0),unsubscribe:q});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=q;else{var t=!0;s.unsubscribe=Be(e,n=>{t?s.source.v=n:Se(s.source,n)}),t=!1}return Ne(s.source)}function Ke(e,a){return e.set(a),a}function Qe(){const e={};return Ce(()=>{for(var a in e)e[a].unsubscribe()}),e}function Ge(e){var a=D;try{return D=!1,[e(),D]}finally{D=a}}export{We as a,ze as b,K as c,Me as d,Se as e,Ge as f,Ke as g,je as h,qe as i,Ue as j,Ye as k,Pe as l,ke as m,Qe as s,$e as u};