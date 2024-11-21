import{s as ee,q as R,n as Ee,c as je,u as de,i as Oe,v as he,w as _e,x as ve,r as Se,b as qe,y as ye}from"../chunks/scheduler.CpirZLs4.js";import{S as te,i as le,e as _,s as V,B as Me,t as se,c as v,a as k,k as Q,f as C,C as Ie,d,b as ne,p as u,g as S,h as f,A as ie,j as ae,l as $,z as Ae,o as F,m as G,D as Ne,v as re,E as Ue,w as oe,x as ue,y as fe}from"../chunks/index.ZdUtouqU.js";import{a as Be}from"../chunks/entry.ZdPbE1Ue.js";import{p as He}from"../chunks/stores.BUk-HUEy.js";import{e as x}from"../chunks/each.D6YF6ztN.js";const ce=[{apiPrefix:"cn",linkPrefix:"/cn",name:"中文"},{apiPrefix:"jp",linkPrefix:"/jp",name:"日本語"},{apiPrefix:"en",linkPrefix:"/",name:"English"}],ze=!0;async function We({fetch:a,url:t}){const s=(()=>{for(let i of ce)if(t.pathname.includes(i.linkPrefix))return i.apiPrefix;return"en"})(),l=await(await a(`/api/svelte/${s}`)).json();if(l.error!==void 0)throw new Error("Contact the developer. We shouldn't be here.");return l}const ut=Object.freeze(Object.defineProperty({__proto__:null,load:We,prerender:ze},Symbol.toStringTag,{value:"Module"}));function De(a,t,s){const e=a.slice();return e[9]=t[s],e}function Le(a,t,s){const e=a.slice();return e[12]=t[s],e}function Re(a){let t,s="▸";return{c(){t=_("div"),t.textContent=s},l(e){t=v(e,"DIV",{"data-svelte-h":!0}),Q(t)!=="svelte-1u425oy"&&(t.textContent=s)},m(e,l){S(e,t,l)},d(e){e&&d(t)}}}function Fe(a){let t,s="▾";return{c(){t=_("div"),t.textContent=s},l(e){t=v(e,"DIV",{"data-svelte-h":!0}),Q(t)!=="svelte-1t3rtho"&&(t.textContent=s)},m(e,l){S(e,t,l)},d(e){e&&d(t)}}}function Pe(a){let t,s=x(a[3]),e=[];for(let l=0;l<s.length;l+=1)e[l]=Ve(Le(a,s,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=$()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=$()},m(l,i){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,i);S(l,t,i)},p(l,i){if(i&8){s=x(l[3]);let n;for(n=0;n<s.length;n+=1){const o=Le(l,s,n);e[n]?e[n].p(o,i):(e[n]=Ve(o),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},d(l){l&&d(t),Ae(e,l)}}}function Ve(a){let t,s,e=a[12].name+"",l,i;return{c(){t=_("li"),s=_("a"),l=se(e),this.h()},l(n){t=v(n,"LI",{class:!0});var o=k(t);s=v(o,"A",{href:!0,class:!0});var h=k(s);l=ne(h,e),h.forEach(d),o.forEach(d),this.h()},h(){u(s,"href",i=a[12].linkPrefix),u(s,"class","svelte-1fkv6lu"),u(t,"class","svelte-1fkv6lu")},m(n,o){S(n,t,o),f(t,s),f(s,l)},p(n,o){o&8&&e!==(e=n[12].name+"")&&ae(l,e),o&8&&i!==(i=n[12].linkPrefix)&&u(s,"href",i)},d(n){n&&d(t)}}}function Ce(a){let t,s=x(Object.entries(a[0].dirs)),e=[];for(let l=0;l<s.length;l+=1)e[l]=Te(De(a,s,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=$()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=$()},m(l,i){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,i);S(l,t,i)},p(l,i){if(i&33){s=x(Object.entries(l[0].dirs));let n;for(n=0;n<s.length;n+=1){const o=De(l,s,n);e[n]?e[n].p(o,i):(e[n]=Te(o),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},d(l){l&&d(t),Ae(e,l)}}}function Te(a){let t,s,e=a[9][1].link.name+"",l,i;return{c(){t=_("li"),s=_("a"),l=se(e),this.h()},l(n){t=v(n,"LI",{class:!0});var o=k(t);s=v(o,"A",{href:!0,class:!0});var h=k(s);l=ne(h,e),h.forEach(d),o.forEach(d),this.h()},h(){u(s,"href",i=a[5](a[9][1].link.addr)),u(s,"class","svelte-1fkv6lu"),u(t,"class","svelte-1fkv6lu")},m(n,o){S(n,t,o),f(t,s),f(s,l)},p(n,o){o&1&&e!==(e=n[9][1].link.name+"")&&ae(l,e),o&33&&i!==(i=n[5](n[9][1].link.addr))&&u(s,"href",i)},d(n){n&&d(t)}}}function Ge(a){let t,s,e,l="夜の思索",i,n,o='<input type="text" placeholder="[WIP] Search" class="svelte-1fkv6lu"/>',h,g,b,c,r,m,p,A,T,B,H=a[2].name+"",P,N,W,U,E,w,M,j,J;function K(I,O){return I[4]?Fe:Re}let z=K(a),q=z(a),D=a[4]&&Pe(a),L=a[2]!==void 0&&a[0].dirs!==void 0&&Ce(a);return{c(){t=_("aside"),s=_("div"),e=_("h2"),e.textContent=l,i=V(),n=_("div"),n.innerHTML=o,h=V(),g=_("div"),b=_("ul"),c=_("li"),r=_("a"),m=_("div"),p=Me("svg"),A=Me("use"),T=V(),B=_("div"),P=se(H),N=V(),q.c(),W=V(),D&&D.c(),U=V(),E=_("div"),w=_("ul"),L&&L.c(),this.h()},l(I){t=v(I,"ASIDE",{id:!0,class:!0});var O=k(t);s=v(O,"DIV",{id:!0,class:!0});var y=k(s);e=v(y,"H2",{id:!0,class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-lhes17"&&(e.textContent=l),i=C(y),n=v(y,"DIV",{"data-svelte-h":!0}),Q(n)!=="svelte-29oosk"&&(n.innerHTML=o),h=C(y),g=v(y,"DIV",{});var ge=k(g);b=v(ge,"UL",{id:!0,class:!0});var X=k(b);c=v(X,"LI",{class:!0});var me=k(c);r=v(me,"A",{href:!0,class:!0});var Y=k(r);m=v(Y,"DIV",{class:!0});var Z=k(m);p=Ie(Z,"svg",{id:!0,viewBox:!0,class:!0});var pe=k(p);A=Ie(pe,"use",{href:!0}),k(A).forEach(d),pe.forEach(d),T=C(Z),B=v(Z,"DIV",{});var ke=k(B);P=ne(ke,H),ke.forEach(d),Z.forEach(d),N=C(Y),q.l(Y),Y.forEach(d),me.forEach(d),W=C(X),D&&D.l(X),X.forEach(d),ge.forEach(d),U=C(y),E=v(y,"DIV",{});var be=k(E);w=v(be,"UL",{class:!0});var we=k(w);L&&L.l(we),we.forEach(d),be.forEach(d),y.forEach(d),O.forEach(d),this.h()},h(){u(e,"id","menu-title"),u(e,"class","svelte-1fkv6lu"),u(A,"href","/translate.svg#translate"),u(p,"id","translate-icon"),u(p,"viewBox","0 0 24 24"),u(p,"class","svelte-1fkv6lu"),u(m,"class","flex align-center"),u(r,"href","javascript:void(0)"),u(r,"class","flex justify-between svelte-1fkv6lu"),u(c,"class","svelte-1fkv6lu"),u(b,"id","translate-list"),u(b,"class","svelte-1fkv6lu"),u(w,"class","svelte-1fkv6lu"),u(s,"id","menu-content"),u(s,"class","svelte-1fkv6lu"),u(t,"id","menu"),u(t,"class",M=R(a[1]?"show":"")+" svelte-1fkv6lu")},m(I,O){S(I,t,O),f(t,s),f(s,e),f(s,i),f(s,n),f(s,h),f(s,g),f(g,b),f(b,c),f(c,r),f(r,m),f(m,p),f(p,A),f(m,T),f(m,B),f(B,P),f(r,N),q.m(r,null),f(b,W),D&&D.m(b,null),f(s,U),f(s,E),f(E,w),L&&L.m(w,null),j||(J=ie(r,"click",a[6]),j=!0)},p(I,[O]){O&4&&H!==(H=I[2].name+"")&&ae(P,H),z!==(z=K(I))&&(q.d(1),q=z(I),q&&(q.c(),q.m(r,null))),I[4]?D?D.p(I,O):(D=Pe(I),D.c(),D.m(b,null)):D&&(D.d(1),D=null),I[2]!==void 0&&I[0].dirs!==void 0?L?L.p(I,O):(L=Ce(I),L.c(),L.m(w,null)):L&&(L.d(1),L=null),O&2&&M!==(M=R(I[1]?"show":"")+" svelte-1fkv6lu")&&u(t,"class",M)},i:Ee,o:Ee,d(I){I&&d(t),q.d(),D&&D.d(),L&&L.d(),j=!1,J()}}}function Je(a,t,s){let e,l;je(a,He,r=>s(7,l=r));let{dir:i}=t,{show:n}=t,o,h,g=!1;const b=()=>{s(4,g=!g)},c=()=>{s(4,g=!1);let r=null,m=[];return ce.forEach(p=>{l.url.pathname.includes(p.linkPrefix)&&r===null?r=p:m.push(p)}),r===null&&(r=ce[2]),[r,m]};return[o,h]=c(),Be(()=>{s(2,[o,h]=c(),o,s(3,h))}),a.$$set=r=>{"dir"in r&&s(0,i=r.dir),"show"in r&&s(1,n=r.show)},a.$$.update=()=>{a.$$.dirty&4&&s(5,e=r=>`${o.linkPrefix}/${r}`)},[i,n,o,h,g,e,b]}class Ke extends te{constructor(t){super(),le(this,t,Je,Ge,ee,{dir:0,show:1})}}function Qe(a){let t,s,e,l,i='<svg id="burger-icon" viewBox="0 0 24 24" class="svelte-1596c0a"><use href="/menu.svg#menu-one"></use><use href="/menu.svg#menu-two"></use><use href="/menu.svg#menu-three"></use></svg>',n,o,h,g,b,c,r,m,p,A,T,B,H,P,N,W;const U=a[4].default,E=de(U,a,a[3],null);return{c(){t=_("div"),s=_("header"),e=_("div"),l=_("button"),l.innerHTML=i,n=V(),o=_("div"),h=se(a[1]),g=V(),b=_("div"),c=V(),r=_("div"),m=V(),p=_("div"),E&&E.c(),A=V(),T=_("div"),this.h()},l(w){t=v(w,"DIV",{id:!0,class:!0});var M=k(t);s=v(M,"HEADER",{id:!0,class:!0});var j=k(s);e=v(j,"DIV",{class:!0});var J=k(e);l=v(J,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Q(l)!=="svelte-9wlea7"&&(l.innerHTML=i),J.forEach(d),n=C(j),o=v(j,"DIV",{class:!0});var K=k(o);h=ne(K,a[1]),K.forEach(d),g=C(j),b=v(j,"DIV",{class:!0}),k(b).forEach(d),c=C(j),r=v(j,"DIV",{}),k(r).forEach(d),j.forEach(d),m=C(M),p=v(M,"DIV",{id:!0,class:!0});var z=k(p);E&&E.l(z),z.forEach(d),A=C(M),T=v(M,"DIV",{class:!0,"aria-label":!0}),k(T).forEach(d),M.forEach(d),this.h()},h(){u(l,"id","burger-button"),u(l,"class","svelte-1596c0a"),u(e,"class","left svelte-1596c0a"),u(o,"class","center"),u(b,"class","right svelte-1596c0a"),u(s,"id","page-header"),u(s,"class","svelte-1596c0a"),u(p,"id","page-content"),u(p,"class","svelte-1596c0a"),u(T,"class",B=R(a[0]?"cover":"hidden cover")+" svelte-1596c0a"),u(T,"aria-label","menu-control"),u(t,"id","page"),u(t,"class",H=R(a[0]?"opaque":"")+" svelte-1596c0a")},m(w,M){S(w,t,M),f(t,s),f(s,e),f(e,l),f(s,n),f(s,o),f(o,h),f(s,g),f(s,b),f(s,c),f(s,r),f(t,m),f(t,p),E&&E.m(p,null),f(t,A),f(t,T),P=!0,N||(W=[ie(l,"click",function(){Oe(a[2])&&a[2].apply(this,arguments)}),ie(T,"click",a[5])],N=!0)},p(w,[M]){a=w,(!P||M&2)&&ae(h,a[1]),E&&E.p&&(!P||M&8)&&he(E,U,a,a[3],P?ve(U,a[3],M,null):_e(a[3]),null),(!P||M&1&&B!==(B=R(a[0]?"cover":"hidden cover")+" svelte-1596c0a"))&&u(T,"class",B),(!P||M&1&&H!==(H=R(a[0]?"opaque":"")+" svelte-1596c0a"))&&u(t,"class",H)},i(w){P||(F(E,w),P=!0)},o(w){G(E,w),P=!1},d(w){w&&d(t),E&&E.d(w),N=!1,Se(W)}}}function Xe(a,t,s){let{$$slots:e={},$$scope:l}=t,{showMenu:i}=t,{pageTitle:n}=t,{toggleMenu:o}=t;const h=()=>{s(0,i=!1)};return a.$$set=g=>{"showMenu"in g&&s(0,i=g.showMenu),"pageTitle"in g&&s(1,n=g.pageTitle),"toggleMenu"in g&&s(2,o=g.toggleMenu),"$$scope"in g&&s(3,l=g.$$scope)},[i,n,o,l,e,h]}class Ye extends te{constructor(t){super(),le(this,t,Xe,Qe,ee,{showMenu:0,pageTitle:1,toggleMenu:2})}}function Ze(a){let t;const s=a[4].default,e=de(s,a,a[6],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,i){e&&e.m(l,i),t=!0},p(l,i){e&&e.p&&(!t||i&64)&&he(e,s,l,l[6],t?ve(s,l[6],i,null):_e(l[6]),null)},i(l){t||(F(e,l),t=!0)},o(l){G(e,l),t=!1},d(l){e&&e.d(l)}}}function $e(a){let t,s,e,l,i,n,o,h;document.title=t=`
		`+a[1]+`
	`,l=new Ke({props:{dir:a[0],show:a[2]}});function g(c){a[5](c)}let b={pageTitle:a[1],toggleMenu:a[3],$$slots:{default:[Ze]},$$scope:{ctx:a}};return a[2]!==void 0&&(b.showMenu=a[2]),n=new Ye({props:b}),qe.push(()=>Ne(n,"showMenu",g)),{c(){s=V(),e=_("div"),re(l.$$.fragment),i=V(),re(n.$$.fragment),this.h()},l(c){Ue("svelte-1jv0d3i",document.head).forEach(d),s=C(c),e=v(c,"DIV",{id:!0,class:!0});var m=k(e);oe(l.$$.fragment,m),i=C(m),oe(n.$$.fragment,m),m.forEach(d),this.h()},h(){u(e,"id","blog"),u(e,"class","svelte-1ygi8ug")},m(c,r){S(c,s,r),S(c,e,r),ue(l,e,null),f(e,i),ue(n,e,null),h=!0},p(c,[r]){(!h||r&2)&&t!==(t=`
		`+c[1]+`
	`)&&(document.title=t);const m={};r&1&&(m.dir=c[0]),r&4&&(m.show=c[2]),l.$set(m);const p={};r&2&&(p.pageTitle=c[1]),r&64&&(p.$$scope={dirty:r,ctx:c}),!o&&r&4&&(o=!0,p.showMenu=c[2],ye(()=>o=!1)),n.$set(p)},i(c){h||(F(l.$$.fragment,c),F(n.$$.fragment,c),h=!0)},o(c){G(l.$$.fragment,c),G(n.$$.fragment,c),h=!1},d(c){c&&(d(s),d(e)),fe(l),fe(n)}}}function xe(a,t,s){let e;je(a,He,r=>s(7,e=r));let{$$slots:l={},$$scope:i}=t,{dir:n}=t,o,h=!1;const g=()=>{s(2,h=!h)},b=r=>{if(r.link===void 0)return"夜噺";if(r.dirs===void 0)return r.link.name;const m=Object.entries(r.dirs).filter(([p,A])=>e.url.pathname.includes(A.link.addr));return m.length>0?m[0][1].link.name:r.link.name};Be(()=>{s(1,o=b(n)),s(2,h=!1)});function c(r){h=r,s(2,h)}return a.$$set=r=>{"dir"in r&&s(0,n=r.dir),"$$scope"in r&&s(6,i=r.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&s(1,o=b(n))},[n,o,h,g,l,c,i]}class et extends te{constructor(t){super(),le(this,t,xe,$e,ee,{dir:0})}}function tt(a){let t;const s=a[1].default,e=de(s,a,a[2],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,i){e&&e.m(l,i),t=!0},p(l,i){e&&e.p&&(!t||i&4)&&he(e,s,l,l[2],t?ve(s,l[2],i,null):_e(l[2]),null)},i(l){t||(F(e,l),t=!0)},o(l){G(e,l),t=!1},d(l){e&&e.d(l)}}}function lt(a){let t,s;return t=new et({props:{dir:a[0].dir,$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){re(t.$$.fragment)},l(e){oe(t.$$.fragment,e)},m(e,l){ue(t,e,l),s=!0},p(e,[l]){const i={};l&1&&(i.dir=e[0].dir),l&4&&(i.$$scope={dirty:l,ctx:e}),t.$set(i)},i(e){s||(F(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){fe(t,e)}}}function st(a,t,s){let{$$slots:e={},$$scope:l}=t,{data:i}=t;return a.$$set=n=>{"data"in n&&s(0,i=n.data),"$$scope"in n&&s(2,l=n.$$scope)},[i,e,l]}class ft extends te{constructor(t){super(),le(this,t,st,lt,ee,{data:0})}}export{ft as component,ut as universal};
