import{k as se,b as fe,h as N,l as L,m as te,o as le,q as Z,H as ue,u as F,v as m,i as C,I as R,w as $,d as j,x as ve,y as O,z as _e,A as oe,B as ce,g as de,C as he,D as pe,F as ee,G as Ee,J as k,K as B,L as re,M as Ae,N as Te,O as ge,P as J,Q as P,R as Q,S as Ie,T as Ne}from"./runtime.Dui4tC2i.js";import{i as U,m as we,c as X}from"./store.CtPlCYPo.js";function De(a,e){return e}function xe(a,e,r,s){for(var f=[],v=e.length,_=0;_<v;_++)_e(e[_].e,f,!0);var c=v>0&&f.length===0&&r!==null;if(c){var A=r.parentNode;oe(A),A.append(r),s.clear(),w(a,e[0].prev,e[v-1].next)}ce(f,()=>{for(var h=0;h<v;h++){var o=e[h];c||(s.delete(o.k),w(a,o.prev,o.next)),de(o.e,!c)}})}function He(a,e,r,s,f,v=null){var _=a,c={flags:e,items:new Map,first:null},A=(e&re)!==0;if(A){var h=a;_=N?L(he(h)):h.appendChild(se())}N&&te();var o=null,x=!1;fe(()=>{var n=r(),u=le(n)?n:n==null?[]:Z(n),l=u.length;if(x&&l===0)return;x=l===0;let g=!1;if(N){var p=_.data===ue;p!==(l===0)&&(_=F(),L(_),m(!1),g=!0)}if(N){for(var E=null,T,d=0;d<l;d++){if(C.nodeType===8&&C.data===pe){_=C,g=!0,m(!1);break}var i=u[d],t=s(i,d);T=ae(C,c,E,null,i,t,d,f,e),c.items.set(t,T),E=T}l>0&&L(F())}if(!N){var S=ee;ye(u,c,_,f,e,(S.f&R)!==0,s)}v!==null&&(l===0?o?$(o):o=j(()=>v(_)):o!==null&&ve(o,()=>{o=null})),g&&m(!0),r()}),N&&(_=C)}function ye(a,e,r,s,f,v,_){var q,G,K,V;var c=(f&Ae)!==0,A=(f&(k|B))!==0,h=a.length,o=e.items,x=e.first,n=x,u,l=null,g,p=[],E=[],T,d,i,t;if(c)for(t=0;t<h;t+=1)T=a[t],d=_(T,t),i=o.get(d),i!==void 0&&((q=i.a)==null||q.measure(),(g??(g=new Set)).add(i));for(t=0;t<h;t+=1){if(T=a[t],d=_(T,t),i=o.get(d),i===void 0){var S=n?n.e.nodes_start:r;l=ae(S,e,l,l===null?e.first:l.next,T,d,t,s,f),o.set(d,l),p=[],E=[],n=l.next;continue}if(A&&Ce(i,T,t,f),i.e.f&R&&($(i.e),c&&((G=i.a)==null||G.unfix(),(g??(g=new Set)).delete(i))),i!==n){if(u!==void 0&&u.has(i)){if(p.length<E.length){var M=E[0],I;l=M.prev;var Y=p[0],D=p[p.length-1];for(I=0;I<p.length;I+=1)b(p[I],M,r);for(I=0;I<E.length;I+=1)u.delete(E[I]);w(e,Y.prev,D.next),w(e,l,Y),w(e,D,M),n=M,l=D,t-=1,p=[],E=[]}else u.delete(i),b(i,n,r),w(e,i.prev,i.next),w(e,i,l===null?e.first:l.next),w(e,l,i),l=i;continue}for(p=[],E=[];n!==null&&n.k!==d;)(v||!(n.e.f&R))&&(u??(u=new Set)).add(n),E.push(n),n=n.next;if(n===null)continue;i=n}p.push(i),l=i,n=i.next}if(n!==null||u!==void 0){for(var y=u===void 0?[]:Z(u);n!==null;)(v||!(n.e.f&R))&&y.push(n),n=n.next;var H=y.length;if(H>0){var ie=f&re&&h===0?r:null;if(c){for(t=0;t<H;t+=1)(K=y[t].a)==null||K.measure();for(t=0;t<H;t+=1)(V=y[t].a)==null||V.fix()}xe(e,y,ie,o)}}c&&Ee(()=>{var z;if(g!==void 0)for(i of g)(z=i.a)==null||z.apply()}),O.first=e.first&&e.first.e,O.last=l&&l.e}function Ce(a,e,r,s){s&k&&U(a.v,e),s&B?U(a.i,r):a.i=r}function ae(a,e,r,s,f,v,_,c,A){var h=(A&k)!==0,o=(A&Te)===0,x=h?o?we(f):X(f):f,n=A&B?X(_):_,u={i:n,v:x,k:v,a:null,e:null,prev:r,next:s};try{return u.e=j(()=>c(a,x,n),N),u.e.prev=r&&r.e,u.e.next=s&&s.e,r===null?e.first=u:(r.next=u,r.e.next=u.e),s!==null&&(s.prev=u,s.e.prev=u.e),u}finally{}}function b(a,e,r){for(var s=a.next?a.next.e.nodes_start:r,f=e?e.e.nodes_start:r,v=a.e.nodes_start;v!==s;){var _=ge(v);f.before(v),v=_}}function w(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Me(a,e,r,s){var f=a.__attributes??(a.__attributes={});N&&(f[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||f[e]!==(f[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Ie]=r),r==null?a.removeAttribute(e):typeof r!="string"&&ne(a).includes(e)?a[e]=r:a.setAttribute(e,r))}function Le(a,e,r){var s=ee,f=O;J(null),P(null);try{ne(a).includes(e)?a[e]=r:Me(a,e,r)}finally{J(s),P(f)}}var W=new Map;function ne(a){var e=W.get(a.nodeName);if(e)return e;W.set(a.nodeName,e=[]);for(var r,s=Q(a),f=Element.prototype;f!==s;){r=Ne(s);for(var v in r)r[v].set&&e.push(v);s=Q(s)}return e}export{Le as a,He as e,De as i,Me as s};
