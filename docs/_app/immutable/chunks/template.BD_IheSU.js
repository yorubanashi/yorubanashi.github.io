import{I as i,a7 as u,y as f,aq as v,ar as p,h as d,W as o,M as h,N as E}from"./runtime.DPnE3_ia.js";function T(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=f;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&v)!==0,_=(t&p)!==0,a,c=!r.startsWith("<!>");return()=>{if(d)return n(o,null),o;a===void 0&&(a=T(c?r:"<!>"+r),e||(a=u(a)));var s=_?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=u(s),l=s.lastChild;n(m,l)}else n(s,s);return s}}function M(r=""){if(!d){var t=i(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),h(e)),n(e,e),e}function N(){if(d)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=i();return r.append(t,e),n(t,e),r}function x(r,t){if(d){f.nodes_end=o,E();return}r!==null&&r.before(t)}export{x as a,M as b,N as c,n as d,y as t};
