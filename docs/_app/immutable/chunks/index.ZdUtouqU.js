var C=Object.defineProperty;var T=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(T(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,d as w,f as j,i as E,e as B,g as N,h as D,j as H,k as b,l as I,m as L,p as P}from"./scheduler.CpirZLs4.js";let $=!1;function M(){$=!0}function O(){$=!1}function R(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function q(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const a=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=a?r+1:R(1,r,_=>t[n[_]].claim_order,a))-1;i[s]=n[o]+1;const c=o+1;n[c]=s,r=Math.max(c,r)}const f=[],l=[];let u=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(f.push(t[s-1]);u>=s;u--)l.push(t[u]);u--}for(;u>=0;u--)l.push(t[u]);f.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<f.length&&l[s].claim_order>=f[a].claim_order;)a++;const o=a<f.length?f[a]:null;e.insertBefore(l[s],o)}}function z(e,t){if($){for(q(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?z(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ie(){return x(" ")}function re(){return x("")}function se(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,r=!1){G(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const u=e[l];if(t(u)){const s=n(u);return s===void 0?e.splice(l,1):e[l]=s,r||(e.claim_info.last_index=l),u}}for(let l=e.claim_info.last_index-1;l>=0;l--){const u=e[l];if(t(u)){const s=n(u);return s===void 0?e.splice(l,1):e[l]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,u}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function S(e,t,n,i){return A(e,r=>r.nodeName===t,r=>{const f=[];for(let l=0;l<r.attributes.length;l++){const u=r.attributes[l];n[u.name]||f.push(u.name)}f.forEach(l=>r.removeAttribute(l))},()=>i(t))}function fe(e,t,n){return S(e,t,n,V)}function ue(e,t,n){return S(e,t,n,W)}function J(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ce(e){return J(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function de(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function _e(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const f=r.textContent.trim();f===`HEAD_${e}_END`?(i-=1,n.push(r)):f===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function me(e,t){return new e(t)}const m=new Set;let d;function he(){d={r:0,c:[],p:d}}function $e(){d.r||h(d.c),d=d.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function pe(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ye(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function xe(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),N(()=>{const f=e.$$.on_mount.map(I).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),r.forEach(N)}function X(e,t){const n=e.$$;n.fragment!==null&&(D(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(L.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,r,f,l=null,u=[-1]){const s=H;b(e);const a=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:w(),dirty:u,skip_bound:!1,root:t.target||s.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(c,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&r(a.ctx[c],a.ctx[c]=v)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](v),o&&Y(e,c)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){M();const c=F(t.target);a.fragment&&a.fragment.l(c),c.forEach(U)}else a.fragment&&a.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),O(),j()}b(s)}class we{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!E(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{se as A,W as B,ue as C,ye as D,_e as E,we as S,F as a,J as b,fe as c,U as d,V as e,ce as f,te as g,z as h,ve as i,oe as j,le as k,re as l,pe as m,$e as n,K as o,ae as p,de as q,he as r,ie as s,x as t,me as u,xe as v,ge as w,Q as x,X as y,ne as z};
