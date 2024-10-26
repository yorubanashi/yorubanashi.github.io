import{n as le,s as lt,t as ft,o as ut}from"./scheduler.MYzp2y7l.js";import{H as ae,S as me,R as Ve}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function dt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ht(e){return e.split("%25").map(decodeURI).join("%25")}function pt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function fe({href:e}){return e.split("#")[0]}const gt=["href","pathname","search","toString","toJSON"];function mt(e,n,t){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),r[o](i));n();const s=Reflect.get(r,o);return typeof s=="function"?s.bind(r):s}}),enumerable:!0,configurable:!0});for(const r of gt)Object.defineProperty(a,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return a}const _t="/__data.json",wt=".html__data.json";function yt(e){return e.endsWith(".html")?e.replace(/\.html$/,wt):e.replace(/\/$/,"")+_t}function vt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function bt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const Fe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(_e(e)),Fe(e,n));const M=new Map;function Et(e,n){const t=_e(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const s=a.getAttribute("data-ttl");return s&&M.set(t,{body:r,init:o,ttl:1e3*Number(s)}),a.getAttribute("data-b64")!==null&&(r=bt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function kt(e,n,t){if(M.size>0){const a=_e(e,t),r=M.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);M.delete(a)}}return window.fetch(n,t)}function _e(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${vt(...r)}"]`}return a}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${It(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ue(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ue(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=St.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?l===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ue(c)}).join("")}).join("")}/?$`),params:n}}function Rt(e){return!/^\([^)]+\)$/.test(e)}function It(e){return e.slice(1).split("/").filter(Rt)}function Lt(e,n,t){const a={},r=e.slice(1),o=r.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let l=r[i-s];if(c.chained&&c.rest&&s&&(l=r.slice(i-s,i+1).filter(u=>u).join("/"),s=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){a[c.name]=l;const u=n[i+1],h=r[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(a).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return a}function ue(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Pt({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([i,[c,l,u]])=>{const{pattern:h,params:g}=At(i),d={id:i,exec:_=>{const f=h.exec(_);if(f)return Lt(f,g,a)},errors:[1,...u||[]].map(_=>e[_]),layouts:[0,...l||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[r.has(i),e[i]]}}function qe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Pe(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}const j=[];function we(e,n=le){let t;const a=new Set;function r(i){if(lt(e,i)&&(e=i,t)){const c=!j.length;for(const l of a)l[1](),j.push(l,e);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function o(i){r(i(e))}function s(i,c=le){const l=[i,c];return a.add(l),a.size===1&&(t=n(r,o)||le),i(e),()=>{a.delete(l),a.size===0&&t&&(t(),t=null)}}return{set:r,update:o,subscribe:s}}var $e;const P=(($e=globalThis.__sveltekit_1wc7x2o)==null?void 0:$e.base)??"";var Ce;const xt=((Ce=globalThis.__sveltekit_1wc7x2o)==null?void 0:Ce.assets)??P,Tt="1729928267109",Me="sveltekit:snapshot",Ge="sveltekit:scroll",He="sveltekit:states",Ut="sveltekit:pageurl",$="sveltekit:history",H="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function Be(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ye(){return{x:pageXOffset,y:pageYOffset}}function D(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const xe={...W,"":W.hover};function Ke(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ke(e)}}function he(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!a||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===z&&e.hasAttribute("download");return{url:t,external:r,target:a,download:o}}function J(e){let n=null,t=null,a=null,r=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)a===null&&(a=D(i,"preload-code")),r===null&&(r=D(i,"preload-data")),n===null&&(n=D(i,"keepfocus")),t===null&&(t=D(i,"noscroll")),o===null&&(o=D(i,"reload")),s===null&&(s=D(i,"replacestate")),i=Ke(i);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:xe[a??"off"],preload_data:xe[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Te(e){const n=we(e);let t=!0;function a(){t=!0,n.update(s=>s)}function r(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:a,set:r,subscribe:o}}function Nt(){const{set:e,subscribe:n}=we(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${xt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==Tt;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:a}}function re(e,n){return e.origin!==z||!e.pathname.startsWith(n)}const Ot=-1,jt=-2,Dt=-3,$t=-4,Ct=-5,Vt=-6;function Ft(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,s=!1){if(o===Ot)return;if(o===Dt)return NaN;if(o===$t)return 1/0;if(o===Ct)return-1/0;if(o===Vt)return-0;if(s)throw new Error("Invalid input");if(o in a)return a[o];const i=t[o];if(!i||typeof i!="object")a[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],l=n==null?void 0:n[c];if(l)return a[o]=l(r(i[1]));switch(c){case"Date":a[o]=new Date(i[1]);break;case"Set":const u=new Set;a[o]=u;for(let d=1;d<i.length;d+=1)u.add(r(i[d]));break;case"Map":const h=new Map;a[o]=h;for(let d=1;d<i.length;d+=2)h.set(r(i[d]),r(i[d+1]));break;case"RegExp":a[o]=new RegExp(i[1],i[2]);break;case"Object":a[o]=Object(i[1]);break;case"BigInt":a[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);a[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=r(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);a[o]=c;for(let l=0;l<i.length;l+=1){const u=i[l];u!==jt&&(c[l]=r(u))}}else{const c={};a[o]=c;for(const l in i){const u=i[l];c[l]=r(u)}}return a[o]}return r(0)}const Ye=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ye];const qt=new Set([...Ye]);[...qt];function Mt(e){return e.filter(n=>n!=null)}const Gt="x-sveltekit-invalidated",Ht="x-sveltekit-trailing-slash";function X(e){return e instanceof ae||e instanceof me?e.status:500}function Bt(e){return e instanceof me?e.text:"Internal Error"}const O=qe(Ge)??{},B=qe(Me)??{},T={url:Te({}),page:Te({}),navigating:we(null),updated:Nt()};function ve(e){O[e]=ye()}function Kt(e,n){let t=e+1;for(;O[t];)delete O[t],t+=1;for(t=n+1;B[t];)delete B[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}function Ue(){}let oe,pe,Z,x,ge,F;const We=[],Q=[];let R=null;const Je=[],zt=[];let N=[],w={branch:[],error:null,url:null},be=!1,ee=!1,Ne=!0,K=!1,q=!1,Xe=!1,Ee=!1,ke,S,L,I,te;const G=new Set;async function sn(e,n,t){var r,o;document.URL!==location.href&&(location.href=location.href),F=e,oe=Pt(e),x=document.documentElement,ge=n,pe=e.nodes[0],Z=e.nodes[1],pe(),Z(),S=(r=history.state)==null?void 0:r[$],L=(o=history.state)==null?void 0:o[H],S||(S=L=Date.now(),history.replaceState({...history.state,[$]:S,[H]:L},""));const a=O[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await nn(ge,t):en(location.href,{replaceState:!0}),tn()}function Yt(){We.length=0,Ee=!1}function Ze(e){Q.some(n=>n==null?void 0:n.snapshot)&&(B[e]=Q.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Qe(e){var n;(n=B[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=Q[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function Oe(){ve(S),Pe(Ge,O),Ze(L),Pe(Me,B)}async function et(e,n,t,a){return Y({type:"goto",url:Be(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(Ee=!0)}})}async function Wt(e){if(e.id!==(R==null?void 0:R.id)){const n={};G.add(n),R={id:e.id,token:n,promise:nt({...e,preload:n}).then(t=>(G.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function de(e){const n=oe.find(t=>t.exec(at(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function tt(e,n,t){var o;w=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),I=e.props.page,ke=new F.root({target:n,props:{...e.props,stores:T,components:Q},hydrate:t}),Qe(L);const r={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};N.forEach(s=>s(r)),ee=!0}async function ne({url:e,params:n,branch:t,status:a,error:r,route:o,form:s}){let i="never";if(P&&(e.pathname===P||e.pathname===P+"/"))i="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);e.pathname=dt(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Mt(t).map(d=>d.node.component),page:I}};s!==void 0&&(c.props.form=s);let l={},u=!I,h=0;for(let d=0;d<Math.max(t.length,w.branch.length);d+=1){const _=t[d],f=w.branch[d];(_==null?void 0:_.data)!==(f==null?void 0:f.data)&&(u=!0),_&&(l={...l,..._.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==r||s!==void 0&&s!==I.form||u)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:s??null,data:u?l:I.data}),c}async function Se({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const m of f){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const _={route:new Proxy(r,{get:(f,m)=>(i&&(c.route=!0),f[m])}),params:new Proxy(a,{get:(f,m)=>(i&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:mt(t,()=>{i&&(c.url=!0)},f=>{i&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const A=new URL(b,t);return i&&d(A.href),A.origin===t.origin&&(b=A.href.slice(t.origin.length)),ee?kt(b,A.href,m):Et(b,m)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),n()},untrack(f){i=!1;try{return f()}finally{i=!0}}};s=await l.universal.load.call(null,_)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function je(e,n,t,a,r,o){if(Ee)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const s of r.search_params)if(a.has(s))return!0;for(const s of r.params)if(o[s]!==w.params[s])return!0;for(const s of r.dependencies)if(We.some(i=>i(new URL(s))))return!0;return!1}function Ae(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Jt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(s=>o.includes(s))&&o.every(s=>r.includes(s))&&t.delete(a)}return t}function De({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:I,constructors:[]}}}async function nt({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((R==null?void 0:R.id)===e)return G.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=r,l=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=w.url?e!==w.url.pathname+w.url.search:!1,g=w.route?r.id!==w.route.id:!1,d=Jt(w.url,t);let _=!1;const f=l.map((p,v)=>{var U;const E=w.branch[v],k=!!(p!=null&&p[0])&&((E==null?void 0:E.loader)!==p[1]||je(_,g,h,d,(U=E.server)==null?void 0:U.uses,a));return k&&(_=!0),k});if(f.some(Boolean)){try{u=await it(t,f)}catch(p){const v=await C(p,{url:t,params:a,route:{id:e}});return G.has(o)?De({error:v,url:t,params:a,route:r}):ie({status:X(p),error:v,url:t,route:r})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const A=l.map(async(p,v)=>{var se;if(!p)return;const E=w.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&p[1]===(E==null?void 0:E.loader)&&!je(b,g,h,d,(se=E.universal)==null?void 0:se.uses,a))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Se({loader:p[1],url:t,params:a,route:r,parent:async()=>{var Le;const Ie={};for(let ce=0;ce<v;ce+=1)Object.assign(Ie,(Le=await A[ce])==null?void 0:Le.data);return Ie},server_data_node:Ae(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?E==null?void 0:E.server:void 0)})});for(const p of A)p.catch(()=>{});const y=[];for(let p=0;p<l.length;p+=1)if(l[p])try{y.push(await A[p])}catch(v){if(v instanceof Ve)return{type:"redirect",location:v.location};if(G.has(o))return De({error:await C(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let E=X(v),k;if(m!=null&&m.includes(v))E=v.status??E,k=v.error;else if(v instanceof ae)k=v.body;else{if(await T.updated.check())return await V(t);k=await C(v,{params:a,url:t,route:{id:r.id}})}const U=await Xt(p,y,s);return U?await ne({url:t,params:a,branch:y.slice(0,U.idx).concat(U.node),status:E,error:k,route:r}):await ot(t,{id:r.id},k,E)}else y.push(void 0);return await ne({url:t,params:a,branch:y,status:200,error:null,route:r,form:n?void 0:null})}async function Xt(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:t,route:a}){const r={};let o=null;if(F.server_loads[0]===0)try{const l=await it(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==z||t.pathname!==location.pathname||be)&&await V(t)}const i=await Se({loader:pe,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Ae(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return await ne({url:t,params:r,branch:[i,c],status:e,error:n,route:null})}function Re(e,n){if(!e||re(e,P))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=at(t);for(const r of oe){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:n,route:r,params:pt(o),url:e}}}function at(e){return ht(e.slice(P.length)||"/")}function rt({url:e,type:n,intent:t,delta:a}){let r=!1;const o=ct(w,t,e,n);a!==void 0&&(o.navigation.delta=a);const s={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return K||Je.forEach(i=>i(s)),r?null:o}async function Y({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:l=Ue,block:u=Ue}){const h=Re(n,!1),g=rt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){u();return}const d=S,_=L;l(),K=!0,ee&&T.navigating.set(g.navigation),te=c;let f=h&&await nt(h);if(!f){if(re(n,P))return await V(n);f=await ot(n,{id:null},await C(new me(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,te!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(i>=20)f=await ie({status:500,error:await C(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return et(new URL(f.location,n).href,{},i+1,c),!1;else f.props.page.status>=400&&await T.updated.check()&&await V(n);if(Yt(),ve(d),Ze(_),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),s=t?t.state:s,!t){const y=o?0:1,p={[$]:S+=y,[H]:L+=y,[He]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Kt(S,L)}if(R=null,f.props.page.state=s,ee){w=f.state,f.props.page&&(f.props.page.url=n);const y=(await Promise.all(zt.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(y.length>0){let p=function(){N=N.filter(v=>!y.includes(v))};y.push(p),N.push(...y)}ke.$set(f.props),Xe=!0}else tt(f,ge,!1);const{activeElement:m}=document;await ft();const b=t?t.scroll:r?ye():null;if(Ne){const y=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):y?y.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==m&&document.activeElement!==document.body;!a&&!A&&an(),Ne=!0,f.props.page&&(I=f.props.page),K=!1,e==="popstate"&&Qe(L),g.fulfil(void 0),N.forEach(y=>y(g.navigation)),T.navigating.set(null)}async function ot(e,n,t,a){return e.origin===z&&e.pathname===location.pathname&&!be?await ie({status:a,error:t,url:e,route:n}):await V(e)}function Zt(){let e;x.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{a(s,2)},20)});function n(o){a(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(de(s.target.href),t.unobserve(s.target))},{threshold:0});function a(o,s){const i=ze(o,x);if(!i)return;const{url:c,external:l,download:u}=he(i,P);if(l||u)return;const h=J(i);if(!h.reload)if(s<=h.preload_data){const g=Re(c,!1);g&&Wt(g)}else s<=h.preload_code&&de(c.pathname)}function r(){t.disconnect();for(const o of x.querySelectorAll("a")){const{url:s,external:i,download:c}=he(o,P);if(i||c)continue;const l=J(o);l.reload||(l.preload_code===W.viewport&&t.observe(o),l.preload_code===W.eager&&de(s.pathname))}}N.push(r),r()}function C(e,n){if(e instanceof ae)return e.body;const t=X(e),a=Bt(e);return F.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function Qt(e,n){ut(()=>(e.push(n),()=>{const t=e.indexOf(n);e.splice(t,1)}))}function cn(e){Qt(N,e)}function en(e,n={}){return e=Be(e),e.origin!==z?Promise.reject(new Error("goto: invalid URL")):et(e,n,0)}function tn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Oe(),!K){const r=ct(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Je.forEach(s=>s(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(n=navigator.connection)!=null&&n.saveData||Zt(),x.addEventListener("click",t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=ze(t.composedPath()[0],x);if(!a)return;const{url:r,external:o,target:s,download:i}=he(a,P);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=J(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(o||c.reload){rt({url:r,type:"link"})?K=!0:t.preventDefault();return}const[u,h]=r.href.split("#");if(h!==void 0&&u===fe(location)){const[,d]=w.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=a.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(q=!0,ve(S),e(r),!c.replace_state)return;q=!1}t.preventDefault(),Y({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),x.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(re(s,P))return;const i=t.target,c=J(i);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(i),u=r==null?void 0:r.getAttribute("name");u&&l.append(u,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(l).toString(),Y({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[$]){const r=t.state[$];if(te={},r===S)return;const o=O[r],s=t.state[He]??{},i=new URL(t.state[Ut]??location.href),c=t.state[H],l=fe(location)===fe(w.url);if(c===L&&(Xe||l)){e(i),O[S]=ye(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},ke.$set({page:I})),S=r;return}const h=r-S;await Y({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{S=r,L=c},block:()=>{history.go(-h)},nav_token:te})}else if(!q){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[$]:++S,[H]:L},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){w.url=t,T.page.set({...I,url:t}),T.page.notify()}}async function nn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:s,form:i}){be=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Re(c,!1)||{});let l;try{const u=a.map(async(d,_)=>{const f=s[_];return f!=null&&f.uses&&(f.uses=st(f.uses)),Se({loader:F.nodes[d],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:Ae(f)})}),h=await Promise.all(u),g=oe.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}l=await ne({url:c,params:r,branch:h,status:n,error:t,form:i,route:g??null})}catch(u){if(u instanceof Ve){await V(new URL(u.location,location.href));return}l=await ie({status:X(u),error:await C(u,{url:c,params:r,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),tt(l,e,!0)}async function it(e,n){var r;const t=new URL(e);t.pathname=yt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Ht,"1"),t.searchParams.append(Gt,n.map(o=>o?"1":"0").join(""));const a=await Fe(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ae(a.status,o)}return new Promise(async o=>{var h;const s=new Map,i=a.body.getReader(),c=new TextDecoder;function l(g){return Ft(g,{Promise:d=>new Promise((_,f)=>{s.set(d,{fulfil:_,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const f=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=st(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:A}=f,y=s.get(m);s.delete(m),A?y.reject(l(A)):y.fulfil(l(b))}}}})}function st(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function an(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const s=r[o],i=a.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}a.removeAllRanges()}})}}}function ct(e,n,t,a){var c,l;let r,o;const s=new Promise((u,h)=>{r=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:a,complete:s},fulfil:r,reject:o}}export{cn as a,sn as b,en as g,T as s};