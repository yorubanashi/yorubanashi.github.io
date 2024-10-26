import{s as Ye,q as Ze,u as K,v as $e,w as xe,x as et,r as nt,c as at}from"../chunks/scheduler.MYzp2y7l.js";import{S as tt,i as lt,s as D,e as d,B as We,t as fe,C as rt,d as f,f as C,c as _,a as v,k as $,D as Re,b as ce,p as o,g as S,h as i,A as we,j as he,o as Pe,m as Ve,l as de,z as st,v as it,w as ot,x as ut,y as ft}from"../chunks/index.D9KJvVxI.js";import{e as _e}from"../chunks/each.D6YF6ztN.js";import{a as ct}from"../chunks/entry.RwOWFcEC.js";import{p as ht}from"../chunks/stores.BuENve0G.js";const Le=[{apiPrefix:"cn",linkPrefix:"/cn",name:"中文"},{apiPrefix:"jp",linkPrefix:"/jp",name:"日本語"},{apiPrefix:"en",linkPrefix:"/",name:"English"}],dt=!0;async function _t({fetch:r,url:l}){const s=(()=>{for(let a of Le)if(l.pathname.includes(a.linkPrefix))return a.apiPrefix;return"en"})(),t=await(await r(`/api/svelte/${s}`)).json();if(t.error!==void 0)throw new Error("Contact the developer. We shouldn't be here.");return t}const Vt=Object.freeze(Object.defineProperty({__proto__:null,load:_t,prerender:dt},Symbol.toStringTag,{value:"Module"}));function Fe(r,l,s){const e=r.slice();return e[14]=l[s],e}function Ge(r,l,s){const e=r.slice();return e[17]=l[s],e}function vt(r){let l,s="▸";return{c(){l=d("div"),l.textContent=s},l(e){l=_(e,"DIV",{"data-svelte-h":!0}),$(l)!=="svelte-1u425oy"&&(l.textContent=s)},m(e,t){S(e,l,t)},d(e){e&&f(l)}}}function mt(r){let l,s="▾";return{c(){l=d("div"),l.textContent=s},l(e){l=_(e,"DIV",{"data-svelte-h":!0}),$(l)!=="svelte-1t3rtho"&&(l.textContent=s)},m(e,t){S(e,l,t)},d(e){e&&f(l)}}}function Je(r){let l,s=_e(r[2]),e=[];for(let t=0;t<s.length;t+=1)e[t]=Ke(Ge(r,s,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=de()},l(t){for(let a=0;a<e.length;a+=1)e[a].l(t);l=de()},m(t,a){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,a);S(t,l,a)},p(t,a){if(a&4){s=_e(t[2]);let n;for(n=0;n<s.length;n+=1){const h=Ge(t,s,n);e[n]?e[n].p(h,a):(e[n]=Ke(h),e[n].c(),e[n].m(l.parentNode,l))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},d(t){t&&f(l),st(e,t)}}}function Ke(r){let l,s,e=r[17].name+"",t,a;return{c(){l=d("li"),s=d("a"),t=fe(e),this.h()},l(n){l=_(n,"LI",{class:!0});var h=v(l);s=_(h,"A",{href:!0,class:!0});var g=v(s);t=ce(g,e),g.forEach(f),h.forEach(f),this.h()},h(){o(s,"href",a=r[17].linkPrefix),o(s,"class","svelte-lhnnqh"),o(l,"class","svelte-lhnnqh")},m(n,h){S(n,l,h),i(l,s),i(s,t)},p(n,h){h&4&&e!==(e=n[17].name+"")&&he(t,e),h&4&&a!==(a=n[17].linkPrefix)&&o(s,"href",a)},d(n){n&&f(l)}}}function Qe(r){let l,s=_e(Object.entries(r[0].dirs)),e=[];for(let t=0;t<s.length;t+=1)e[t]=Xe(Fe(r,s,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=de()},l(t){for(let a=0;a<e.length;a+=1)e[a].l(t);l=de()},m(t,a){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,a);S(t,l,a)},p(t,a){if(a&65){s=_e(Object.entries(t[0].dirs));let n;for(n=0;n<s.length;n+=1){const h=Fe(t,s,n);e[n]?e[n].p(h,a):(e[n]=Xe(h),e[n].c(),e[n].m(l.parentNode,l))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},d(t){t&&f(l),st(e,t)}}}function Xe(r){let l,s,e=r[14][1].link.name+"",t,a;return{c(){l=d("li"),s=d("a"),t=fe(e),this.h()},l(n){l=_(n,"LI",{class:!0});var h=v(l);s=_(h,"A",{href:!0,class:!0});var g=v(s);t=ce(g,e),g.forEach(f),h.forEach(f),this.h()},h(){o(s,"href",a=r[6](r[14][1].link.addr)),o(s,"class","svelte-lhnnqh"),o(l,"class","svelte-lhnnqh")},m(n,h){S(n,l,h),i(l,s),i(s,t)},p(n,h){h&1&&e!==(e=n[14][1].link.name+"")&&he(t,e),h&65&&a!==(a=n[6](n[14][1].link.addr))&&o(s,"href",a)},d(n){n&&f(l)}}}function pt(r){let l,s,e,t,a,n,h="Title",g,V,N='<input type="text" placeholder="[WIP] Search" class="svelte-lhnnqh"/>',R,U,b,w,E,T,c,j,H,z,Q=r[1].name+"",x,ve,me,pe,X,W,ee,ge,L,q,F,y,je='<svg id="burger-icon" viewBox="0 0 24 24" class="svelte-lhnnqh"><use href="/menu.svg#menu-one"></use><use href="/menu.svg#menu-two"></use><use href="/menu.svg#menu-three"></use></svg>',ke,G,Y=r[5](r[0])+"",te,be,Z,Ee,le,qe,Ie,M,se,ne,P,De,Te;document.title=l=`
		`+r[5](r[0])+`
	`;function ye(u,k){return u[3]?mt:vt}let ae=ye(r),A=ae(r),m=r[3]&&Je(r),p=r[1]!==void 0&&r[0].dirs!==void 0&&Qe(r);const Ce=r[11].default,I=Ze(Ce,r,r[10],null);return{c(){s=D(),e=d("div"),t=d("aside"),a=d("div"),n=d("h2"),n.textContent=h,g=D(),V=d("div"),V.innerHTML=N,R=D(),U=d("div"),b=d("ul"),w=d("li"),E=d("a"),T=d("div"),c=We("svg"),j=We("use"),H=D(),z=d("div"),x=fe(Q),ve=D(),A.c(),me=D(),m&&m.c(),pe=D(),X=d("div"),W=d("ul"),p&&p.c(),ge=D(),L=d("div"),q=d("header"),F=d("div"),y=d("button"),y.innerHTML=je,ke=D(),G=d("div"),te=fe(Y),be=D(),Z=d("div"),Ee=D(),le=d("div"),qe=D(),I&&I.c(),Ie=D(),M=d("div"),this.h()},l(u){rt("svelte-tjqjyd",document.head).forEach(f),s=C(u),e=_(u,"DIV",{id:!0,class:!0});var re=v(e);t=_(re,"ASIDE",{id:!0,class:!0});var Ae=v(t);a=_(Ae,"DIV",{id:!0,class:!0});var B=v(a);n=_(B,"H2",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-x3if5s"&&(n.textContent=h),g=C(B),V=_(B,"DIV",{"data-svelte-h":!0}),$(V)!=="svelte-pi9avq"&&(V.innerHTML=N),R=C(B),U=_(B,"DIV",{});var He=v(U);b=_(He,"UL",{id:!0,class:!0});var ie=v(b);w=_(ie,"LI",{class:!0});var Me=v(w);E=_(Me,"A",{href:!0,class:!0});var oe=v(E);T=_(oe,"DIV",{class:!0});var ue=v(T);c=Re(ue,"svg",{id:!0,viewBox:!0,class:!0});var Be=v(c);j=Re(Be,"use",{href:!0}),v(j).forEach(f),Be.forEach(f),H=C(ue),z=_(ue,"DIV",{});var Oe=v(z);x=ce(Oe,Q),Oe.forEach(f),ue.forEach(f),ve=C(oe),A.l(oe),oe.forEach(f),Me.forEach(f),me=C(ie),m&&m.l(ie),ie.forEach(f),He.forEach(f),pe=C(B),X=_(B,"DIV",{});var Se=v(X);W=_(Se,"UL",{class:!0});var Ne=v(W);p&&p.l(Ne),Ne.forEach(f),Se.forEach(f),B.forEach(f),Ae.forEach(f),ge=C(re),L=_(re,"DIV",{id:!0,class:!0});var J=v(L);q=_(J,"HEADER",{id:!0,class:!0});var O=v(q);F=_(O,"DIV",{class:!0});var Ue=v(F);y=_(Ue,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),$(y)!=="svelte-e1ulto"&&(y.innerHTML=je),Ue.forEach(f),ke=C(O),G=_(O,"DIV",{class:!0});var ze=v(G);te=ce(ze,Y),ze.forEach(f),be=C(O),Z=_(O,"DIV",{class:!0}),v(Z).forEach(f),Ee=C(O),le=_(O,"DIV",{}),v(le).forEach(f),O.forEach(f),qe=C(J),I&&I.l(J),Ie=C(J),M=_(J,"DIV",{class:!0,"aria-label":!0}),v(M).forEach(f),J.forEach(f),re.forEach(f),this.h()},h(){o(n,"class","svelte-lhnnqh"),o(j,"href","/translate.svg#translate"),o(c,"id","translate-icon"),o(c,"viewBox","0 0 24 24"),o(c,"class","svelte-lhnnqh"),o(T,"class","flex align-center"),o(E,"href",gt),o(E,"class","flex justify-between svelte-lhnnqh"),o(w,"class","svelte-lhnnqh"),o(b,"id","translate-list"),o(b,"class","svelte-lhnnqh"),o(W,"class","svelte-lhnnqh"),o(a,"id","menu-content"),o(a,"class","svelte-lhnnqh"),o(t,"id","menu"),o(t,"class",ee=K(r[4]?"show":"")+" svelte-lhnnqh"),o(y,"id","burger-wrapper"),o(y,"class","svelte-lhnnqh"),o(F,"class","left svelte-lhnnqh"),o(G,"class","center"),o(Z,"class","right svelte-lhnnqh"),o(q,"id","page-header"),o(q,"class","svelte-lhnnqh"),o(M,"class",se=K(r[4]?"cover":"hidden cover")+" svelte-lhnnqh"),o(M,"aria-label","menu-control"),o(L,"id","page"),o(L,"class",ne=K(r[4]?"opaque":"")+" svelte-lhnnqh"),o(e,"id","blog"),o(e,"class","svelte-lhnnqh")},m(u,k){S(u,s,k),S(u,e,k),i(e,t),i(t,a),i(a,n),i(a,g),i(a,V),i(a,R),i(a,U),i(U,b),i(b,w),i(w,E),i(E,T),i(T,c),i(c,j),i(T,H),i(T,z),i(z,x),i(E,ve),A.m(E,null),i(b,me),m&&m.m(b,null),i(a,pe),i(a,X),i(X,W),p&&p.m(W,null),i(e,ge),i(e,L),i(L,q),i(q,F),i(F,y),i(q,ke),i(q,G),i(G,te),i(q,be),i(q,Z),i(q,Ee),i(q,le),i(L,qe),I&&I.m(L,null),i(L,Ie),i(L,M),P=!0,De||(Te=[we(E,"click",r[7]),we(y,"click",r[8]),we(M,"click",r[12])],De=!0)},p(u,[k]){(!P||k&33)&&l!==(l=`
		`+u[5](u[0])+`
	`)&&(document.title=l),(!P||k&2)&&Q!==(Q=u[1].name+"")&&he(x,Q),ae!==(ae=ye(u))&&(A.d(1),A=ae(u),A&&(A.c(),A.m(E,null))),u[3]?m?m.p(u,k):(m=Je(u),m.c(),m.m(b,null)):m&&(m.d(1),m=null),u[1]!==void 0&&u[0].dirs!==void 0?p?p.p(u,k):(p=Qe(u),p.c(),p.m(W,null)):p&&(p.d(1),p=null),(!P||k&16&&ee!==(ee=K(u[4]?"show":"")+" svelte-lhnnqh"))&&o(t,"class",ee),(!P||k&33)&&Y!==(Y=u[5](u[0])+"")&&he(te,Y),I&&I.p&&(!P||k&1024)&&$e(I,Ce,u,u[10],P?et(Ce,u[10],k,null):xe(u[10]),null),(!P||k&16&&se!==(se=K(u[4]?"cover":"hidden cover")+" svelte-lhnnqh"))&&o(M,"class",se),(!P||k&16&&ne!==(ne=K(u[4]?"opaque":"")+" svelte-lhnnqh"))&&o(L,"class",ne)},i(u){P||(Pe(I,u),P=!0)},o(u){Ve(I,u),P=!1},d(u){u&&(f(s),f(e)),A.d(),m&&m.d(),p&&p.d(),I&&I.d(u),De=!1,nt(Te)}}}const gt="javascript:void(0)";function kt(r,l,s){let e,t,a;at(r,ht,c=>s(9,a=c));let{$$slots:n={},$$scope:h}=l,g,V,N=!1;const R=()=>{s(3,N=!1);let c=null,j=[];return Le.forEach(H=>{a.url.pathname.includes(H.linkPrefix)&&c===null?c=H:j.push(H)}),c===null&&(c=Le[2]),[c,j]};[g,V]=R(),ct(()=>{s(1,[g,V]=R(),g,s(2,V)),s(4,w=!1)});const U=()=>{s(3,N=!N)};let{dir:b}=l,w=!1;const E=()=>{s(4,w=!w)},T=()=>{s(4,w=!1)};return r.$$set=c=>{"dir"in c&&s(0,b=c.dir),"$$scope"in c&&s(10,h=c.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&s(6,e=c=>`${g.linkPrefix}/${c}`),r.$$.dirty&512&&s(5,t=c=>{if(c.link===void 0)return"夜噺";if(c.dirs===void 0)return c.link.name;const j=Object.entries(c.dirs).filter(([H,z])=>a.url.pathname.includes(z.link.addr));return j.length>0?j[0][1].link.name:c.link.name})},[b,g,V,N,w,t,e,U,E,a,h,n,T]}class bt extends tt{constructor(l){super(),lt(this,l,kt,pt,Ye,{dir:0})}}function Et(r){let l;const s=r[1].default,e=Ze(s,r,r[2],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,a){e&&e.m(t,a),l=!0},p(t,a){e&&e.p&&(!l||a&4)&&$e(e,s,t,t[2],l?et(s,t[2],a,null):xe(t[2]),null)},i(t){l||(Pe(e,t),l=!0)},o(t){Ve(e,t),l=!1},d(t){e&&e.d(t)}}}function qt(r){let l,s;return l=new bt({props:{dir:r[0].dir,$$slots:{default:[Et]},$$scope:{ctx:r}}}),{c(){it(l.$$.fragment)},l(e){ot(l.$$.fragment,e)},m(e,t){ut(l,e,t),s=!0},p(e,[t]){const a={};t&1&&(a.dir=e[0].dir),t&4&&(a.$$scope={dirty:t,ctx:e}),l.$set(a)},i(e){s||(Pe(l.$$.fragment,e),s=!0)},o(e){Ve(l.$$.fragment,e),s=!1},d(e){ft(l,e)}}}function It(r,l,s){let{$$slots:e={},$$scope:t}=l,{data:a}=l;return r.$$set=n=>{"data"in n&&s(0,a=n.data),"$$scope"in n&&s(2,t=n.$$scope)},[a,e,t]}class jt extends tt{constructor(l){super(),lt(this,l,It,qt,Ye,{data:0})}}export{jt as component,Vt as universal};
