import{s as x,n as g}from"./scheduler.CtbWrGNo.js";import{S as D,i as V,e as u,c as v,a as m,d as h,q as f,g as I,h as d,r as q,t as y,s as L,b as N,f as S,j}from"./index.BZQdBqZP.js";import{e as k}from"./each.D6YF6ztN.js";function E(o,t,i){const a=o.slice();return a[1]=t[i],a}function b(o){let t,i,a,n=o[1].label+"",l,s,c;return{c(){t=u("li"),i=u("a"),a=u("div"),l=y(n),s=L(),this.h()},l(e){t=v(e,"LI",{class:!0});var r=m(t);i=v(r,"A",{href:!0,class:!0});var _=m(i);a=v(_,"DIV",{});var p=m(a);l=N(p,n),s=S(p),p.forEach(h),_.forEach(h),r.forEach(h),this.h()},h(){f(i,"href",c=o[1].link),f(i,"class","svelte-1l43f6s"),f(t,"class","svelte-1l43f6s")},m(e,r){I(e,t,r),d(t,i),d(i,a),d(a,l),d(a,s)},p(e,r){r&1&&n!==(n=e[1].label+"")&&j(l,n),r&1&&c!==(c=e[1].link)&&f(i,"href",c)},d(e){e&&h(t)}}}function A(o){let t,i,a,n=k(o[0]),l=[];for(let s=0;s<n.length;s+=1)l[s]=b(E(o,n,s));return{c(){t=u("div"),i=u("div"),a=u("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){t=v(s,"DIV",{id:!0,class:!0});var c=m(t);i=v(c,"DIV",{});var e=m(i);a=v(e,"UL",{class:!0});var r=m(a);for(let _=0;_<l.length;_+=1)l[_].l(r);r.forEach(h),e.forEach(h),c.forEach(h),this.h()},h(){f(a,"class","svelte-1l43f6s"),f(t,"id","container"),f(t,"class","svelte-1l43f6s")},m(s,c){I(s,t,c),d(t,i),d(i,a);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(a,null)},p(s,[c]){if(c&1){n=k(s[0]);let e;for(e=0;e<n.length;e+=1){const r=E(s,n,e);l[e]?l[e].p(r,c):(l[e]=b(r),l[e].c(),l[e].m(a,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=n.length}},i:g,o:g,d(s){s&&h(t),q(l,s)}}}function C(o,t,i){let{links:a}=t;return o.$$set=n=>{"links"in n&&i(0,a=n.links)},[a]}class B extends D{constructor(t){super(),V(this,t,C,A,x,{links:0})}}export{B as N};
