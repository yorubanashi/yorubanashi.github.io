import{I as j,J as ee,K as Z,h as N,M as D,N as ae,O as re,Q as $,T as ne,U as B,V as k,W as H,X as R,Y as z,Z as F,_ as fe,$ as ie,y as J,a0 as O,a1 as K,a2 as y,a3 as le,a4 as se,a5 as ue,a6 as te,a7 as ve,a8 as de,a9 as _e,aa as ce,A as oe,ab as Q,ac as he,ad as Ee}from"./runtime.DPnE3_ia.js";function xe(l,e){return e}function pe(l,e,a,t){for(var v=[],_=e.length,u=0;u<_;u++)le(e[u].e,v,!0);var c=_>0&&v.length===0&&a!==null;if(c){var A=a.parentNode;se(A),A.append(a),t.clear(),m(l,e[0].prev,e[_-1].next)}ue(v,()=>{for(var h=0;h<_;h++){var d=e[h];c||(t.delete(d.k),m(l,d.prev,d.next)),te(d.e,!c)}})}function me(l,e,a,t,v,_=null){var u=l,c={flags:e,items:new Map,first:null},A=(e&Z)!==0;if(A){var h=l;u=N?D(ve(h)):h.appendChild(j())}N&&ae();var d=null,C=!1;ee(()=>{var r=a(),s=re(r)?r:r==null?[]:$(r),i=s.length;if(C&&i===0)return;C=i===0;let I=!1;if(N){var E=u.data===ne;E!==(i===0)&&(u=B(),D(u),k(!1),I=!0)}if(N){for(var p=null,T,o=0;o<i;o++){if(H.nodeType===8&&H.data===de){u=H,I=!0,k(!1);break}var n=s[o],f=t(n,o);T=G(H,c,p,null,n,f,o,v,e),c.items.set(f,T),p=T}i>0&&D(B())}if(!N){var S=_e;Ae(s,c,u,v,e,(S.f&R)!==0,t)}_!==null&&(i===0?d?z(d):d=F(()=>_(u)):d!==null&&fe(d,()=>{d=null})),I&&k(!0),a()}),N&&(u=H)}function Ae(l,e,a,t,v,_,u){var V,Y,U,X;var c=(v&ce)!==0,A=(v&(O|y))!==0,h=l.length,d=e.items,C=e.first,r=C,s,i=null,I,E=[],p=[],T,o,n,f;if(c)for(f=0;f<h;f+=1)T=l[f],o=u(T,f),n=d.get(o),n!==void 0&&((V=n.a)==null||V.measure(),(I??(I=new Set)).add(n));for(f=0;f<h;f+=1){if(T=l[f],o=u(T,f),n=d.get(o),n===void 0){var S=r?r.e.nodes_start:a;i=G(S,e,i,i===null?e.first:i.next,T,o,f,t,v),d.set(o,i),E=[],p=[],r=i.next;continue}if(A&&Te(n,T,f,v),n.e.f&R&&(z(n.e),c&&((Y=n.a)==null||Y.unfix(),(I??(I=new Set)).delete(n))),n!==r){if(s!==void 0&&s.has(n)){if(E.length<p.length){var M=p[0],x;i=M.prev;var L=E[0],b=E[E.length-1];for(x=0;x<E.length;x+=1)W(E[x],M,a);for(x=0;x<p.length;x+=1)s.delete(p[x]);m(e,L.prev,b.next),m(e,i,L),m(e,b,M),r=M,i=b,f-=1,E=[],p=[]}else s.delete(n),W(n,r,a),m(e,n.prev,n.next),m(e,n,i===null?e.first:i.next),m(e,i,n),i=n;continue}for(E=[],p=[];r!==null&&r.k!==o;)(_||!(r.e.f&R))&&(s??(s=new Set)).add(r),p.push(r),r=r.next;if(r===null)continue;n=r}E.push(n),i=n,r=n.next}if(r!==null||s!==void 0){for(var w=s===void 0?[]:$(s);r!==null;)(_||!(r.e.f&R))&&w.push(r),r=r.next;var g=w.length;if(g>0){var P=v&Z&&h===0?a:null;if(c){for(f=0;f<g;f+=1)(U=w[f].a)==null||U.measure();for(f=0;f<g;f+=1)(X=w[f].a)==null||X.fix()}pe(e,w,P,d)}}c&&ie(()=>{var q;if(I!==void 0)for(n of I)(q=n.a)==null||q.apply()}),J.first=e.first&&e.first.e,J.last=i&&i.e}function Te(l,e,a,t){t&O&&K(l.v,e),t&y?K(l.i,a):l.i=a}function G(l,e,a,t,v,_,u,c,A){var h=(A&O)!==0,d=(A&he)===0,C=h?d?oe(v):Q(v):v,r=A&y?Q(u):u,s={i:r,v:C,k:_,a:null,e:null,prev:a,next:t};try{return s.e=F(()=>c(l,C,r),N),s.e.prev=a&&a.e,s.e.next=t&&t.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),t!==null&&(t.prev=s,t.e.prev=s.e),s}finally{}}function W(l,e,a){for(var t=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==t;){var u=Ee(_);v.before(_),_=u}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{me as e,xe as i};