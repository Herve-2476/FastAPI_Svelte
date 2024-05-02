var he=Object.defineProperty;var pe=(e,t,n)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var F=(e,t,n)=>(pe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function N(){}function le(e){return e()}function X(){return Object.create(null)}function S(e){e.forEach(le)}function de(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ge(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function re(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function I(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function E(){return P(" ")}function _e(){return P("")}function Ie(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function O(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function me(e){return Array.from(e.childNodes)}function L(e,t){t=""+t,e.data!==t&&(e.data=t)}let D;function B(e){D=e}const A=[],M=[];let C=[];const G=[],$e=Promise.resolve();let H=!1;function be(){H||(H=!0,$e.then(ce))}function K(e){C.push(e)}function oe(e){G.push(e)}const k=new Set;let x=0;function ce(){if(x!==0)return;const e=D;do{try{for(;x<A.length;){const t=A[x];x++,B(t),we(t.$$)}}catch(t){throw A.length=0,x=0,t}for(B(null),A.length=0,x=0;M.length;)M.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];k.has(n)||(k.add(n),n())}C.length=0}while(A.length);for(;G.length;)G.pop()();H=!1,k.clear(),B(e)}function we(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}function ye(e){const t=[],n=[];C.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),C=t}const q=new Set;let y;function se(){y={r:0,c:[],p:y}}function ue(){y.r||S(y.c),y=y.p}function m(e,t){e&&e.i&&(q.delete(e),e.i(t))}function b(e,t,n,i){if(e&&e.o){if(q.has(e))return;q.add(e),y.c.push(()=>{q.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function R(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function fe(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function J(e){e&&e.c()}function V(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),K(()=>{const r=e.$$.on_mount.map(le).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...r):S(r),e.$$.on_mount=[]}),l.forEach(K)}function U(e,t){const n=e.$$;n.fragment!==null&&(ye(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(A.push(e),be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,i,l,r,d=null,s=[-1]){const o=D;B(e);const c=e.$$={fragment:null,ctx:[],props:r,update:N,not_equal:l,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:X(),dirty:s,skip_bound:!1,root:t.target||o.$$.root};d&&d(c.root);let u=!1;if(c.ctx=n?n(e,t.props||{},(g,a,...h)=>{const f=h.length?h[0]:a;return c.ctx&&l(c.ctx[g],c.ctx[g]=f)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](f),u&&ve(e,g)),a}):[],c.update(),u=!0,S(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const g=me(t.target);c.fragment&&c.fragment.l(g),g.forEach(T)}else c.fragment&&c.fragment.c();t.intro&&m(e.$$.fragment),V(e,t.target,t.anchor),ce()}B(o)}class Q{constructor(){F(this,"$$");F(this,"$$set")}$destroy(){U(this,1),this.$destroy=N}$on(t,n){if(!de(n))return N;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!ge(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xe);function Ae(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function Y(e,t=!1){const n=Ae(),i=`_${n}`;return Object.defineProperty(window,i,{value:l=>(t&&Reflect.deleteProperty(window,i),e==null?void 0:e(l)),writable:!1,configurable:!0}),n}async function Pe(e,t={}){return new Promise((n,i)=>{const l=Y(d=>{n(d),Reflect.deleteProperty(window,`_${r}`)},!0),r=Y(d=>{i(d),Reflect.deleteProperty(window,`_${l}`)},!0);window.__TAURI_IPC__({cmd:e,callback:l,error:r,...t})})}function Ce(e){let t,n,i;return{c(){t=I("div"),n=I("p"),i=P(e[0])},m(l,r){j(l,t,r),p(t,n),p(n,i)},p(l,[r]){r&1&&L(i,l[0])},i:N,o:N,d(l){l&&T(t)}}}function Ee(e,t,n){return[""]}class Oe extends Q{constructor(t){super(),Z(this,t,Ee,Ce,z,{})}}function ee(e,t,n){const i=e.slice();return i[6]=t[n],i}function Be(e){let t,n,i=R(e[0][e[1]].childIds),l=[];for(let d=0;d<i.length;d+=1)l[d]=te(ee(e,i,d));const r=d=>b(l[d],1,1,()=>{l[d]=null});return{c(){for(let d=0;d<l.length;d+=1)l[d].c();t=_e()},m(d,s){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(d,s);j(d,t,s),n=!0},p(d,s){if(s&3){i=R(d[0][d[1]].childIds);let o;for(o=0;o<i.length;o+=1){const c=ee(d,i,o);l[o]?(l[o].p(c,s),m(l[o],1)):(l[o]=te(c),l[o].c(),m(l[o],1),l[o].m(t.parentNode,t))}for(se(),o=i.length;o<l.length;o+=1)r(o);ue()}},i(d){if(!n){for(let s=0;s<i.length;s+=1)m(l[s]);n=!0}},o(d){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)b(l[s]);n=!1},d(d){d&&T(t),re(l,d)}}}function te(e){let t,n,i;function l(d){e[5](d)}let r={childId:e[6],parentId:e[1]};return e[0]!==void 0&&(r.plan=e[0]),t=new ae({props:r}),M.push(()=>fe(t,"plan",l)),{c(){J(t.$$.fragment)},m(d,s){V(t,d,s),i=!0},p(d,s){const o={};s&3&&(o.childId=d[6]),s&2&&(o.parentId=d[1]),!n&&s&1&&(n=!0,o.plan=d[0],oe(()=>n=!1)),t.$set(o)},i(d){i||(m(t.$$.fragment,d),i=!0)},o(d){b(t.$$.fragment,d),i=!1},d(d){U(t,d)}}}function Ne(e){let t,n,i,l=e[0][e[1]].title+"",r,d,s,o,c,u,g,a,h=e[4](),f,v,W,$=h&&Be(e);return{c(){t=I("div"),n=I("div"),i=I("li"),r=P(l),d=E(),s=P(e[1]),o=E(),c=P(e[2]),u=I("button"),u.textContent="Déjà fait",g=E(),a=I("ol"),$&&$.c(),O(u,"class","svelte-gghmp3"),O(n,"id",e[1])},m(_,w){j(_,t,w),p(t,n),p(n,i),p(i,r),p(i,d),p(i,s),p(i,o),p(i,c),p(i,u),p(t,g),p(t,a),$&&$.m(a,null),f=!0,v||(W=Ie(u,"click",e[3]),v=!0)},p(_,[w]){(!f||w&3)&&l!==(l=_[0][_[1]].title+"")&&L(r,l),(!f||w&2)&&L(s,_[1]),(!f||w&4)&&L(c,_[2]),(!f||w&2)&&O(n,"id",_[1]),h&&$.p(_,w)},i(_){f||(m($),f=!0)},o(_){b($),f=!1},d(_){_&&T(t),$&&$.d(),v=!1,W()}}}function Se(e,t,n){let{childId:i}=t,{parentId:l}=t,{plan:r}=t;function d(){return r[i].childIds.length>0}function s(){const c=r[l].childIds.indexOf(i);r[l].childIds.splice(c,1),n(0,r),Pe("greet",{parentId:l,id:i}).then(u=>document.getElementById("msg").textContent=u)}function o(c){r=c,n(0,r)}return e.$$set=c=>{"childId"in c&&n(1,i=c.childId),"parentId"in c&&n(2,l=c.parentId),"plan"in c&&n(0,r=c.plan)},[r,i,l,s,d,o]}class ae extends Q{constructor(t){super(),Z(this,t,Se,Ne,z,{childId:1,parentId:2,plan:0,deleteId:3})}get deleteId(){return this.$$.ctx[3]}}const Te={0:{id:"0",title:"(Root)",childIds:["1","42","46"]},1:{id:"1",title:"Terre",childIds:["2","10","19","26","34"]},2:{id:"2",title:"Afrique",childIds:["3","4","5","6","7","8","9"]},3:{id:"3",title:"Botswana",childIds:[]},4:{id:"4",title:"Egypte",childIds:[]},5:{id:"5",title:"Kenya",childIds:[]},6:{id:"6",title:"Madagascar",childIds:[]},7:{id:"7",title:"Maroc",childIds:[]},8:{id:"8",title:"Nigéria",childIds:[]},9:{id:"9",title:"Afrique du Sud",childIds:[]},10:{id:"10",title:"Amerique",childIds:["11","12","13","14","15","16","17","18"]},11:{id:"11",title:"Argentine",childIds:[]},12:{id:"12",title:"Brésil",childIds:[]},13:{id:"13",title:"Barbade",childIds:[]},14:{id:"14",title:"Canada",childIds:[]},15:{id:"15",title:"Jamaïque",childIds:[]},16:{id:"16",title:"Mexique",childIds:[]},17:{id:"17",title:"Trinité-et-Tobago",childIds:[]},18:{id:"18",title:"Venezuela",childIds:[]},19:{id:"19",title:"Asie",childIds:["20","21","22","23","24","25"]},20:{id:"20",title:"Chine",childIds:[]},21:{id:"21",title:"India",childIds:[]},22:{id:"22",title:"Singapour",childIds:[]},23:{id:"23",title:"Corée du Sud",childIds:[]},24:{id:"24",title:"Thaïlande",childIds:[]},25:{id:"25",title:"Viêt Nam",childIds:[]},26:{id:"26",title:"Europe",childIds:["27","28","29","30","31","32","33"]},27:{id:"27",title:"Croatie",childIds:[]},28:{id:"28",title:"France",childIds:[]},29:{id:"29",title:"Allemagne",childIds:[]},30:{id:"30",title:"Italie",childIds:[]},31:{id:"31",title:"Portugal",childIds:[]},32:{id:"32",title:"Spain",childIds:[]},33:{id:"33",title:"Turquie",childIds:[]},34:{id:"34",title:"Océanie",childIds:["35","36","37","38","39","40","41"]},35:{id:"35",title:"Australie",childIds:[]},36:{id:"36",title:"Bora Bora (Polynésie française)",childIds:[]},37:{id:"37",title:"Île de Pâques (Chili)",childIds:[]},38:{id:"38",title:"Fidji",childIds:[]},39:{id:"40",title:"Hawaï (USA)",childIds:[]},40:{id:"40",title:"Nouvelle-Zélande",childIds:[]},41:{id:"41",title:"Vanuatu",childIds:[]},42:{id:"42",title:"Lune",childIds:["43","44","45"]},43:{id:"43",title:"Rheita",childIds:[]},44:{id:"44",title:"Piccolomini",childIds:[]},45:{id:"45",title:"Tycho",childIds:[]},46:{id:"46",title:"Mars",childIds:["47","48"]},47:{id:"47",title:"Corn Town",childIds:[]},48:{id:"48",title:"Green Hill",childIds:[]}};function ne(e,t,n){const i=e.slice();return i[2]=t[n],i}function ie(e){let t,n,i;function l(d){e[1](d)}let r={childId:e[2],parentId:"0"};return e[0]!==void 0&&(r.plan=e[0]),t=new ae({props:r}),M.push(()=>fe(t,"plan",l)),{c(){J(t.$$.fragment)},m(d,s){V(t,d,s),i=!0},p(d,s){const o={};s&1&&(o.childId=d[2]),!n&&s&1&&(n=!0,o.plan=d[0],oe(()=>n=!1)),t.$set(o)},i(d){i||(m(t.$$.fragment,d),i=!0)},o(d){b(t.$$.fragment,d),i=!1},d(d){U(t,d)}}}function Le(e){let t,n,i,l,r,d,s,o,c=R(e[0][0].childIds),u=[];for(let a=0;a<c.length;a+=1)u[a]=ie(ne(e,c,a));const g=a=>b(u[a],1,1,()=>{u[a]=null});return s=new Oe({}),{c(){t=I("main"),n=I("h2"),n.textContent="Lieux à visiter",i=E(),l=I("ol");for(let a=0;a<u.length;a+=1)u[a].c();r=E(),d=I("div"),J(s.$$.fragment),O(d,"class","row"),O(t,"class","container svelte-8dtafy")},m(a,h){j(a,t,h),p(t,n),p(t,i),p(t,l);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(l,null);p(t,r),p(t,d),V(s,d,null),o=!0},p(a,[h]){if(h&1){c=R(a[0][0].childIds);let f;for(f=0;f<c.length;f+=1){const v=ne(a,c,f);u[f]?(u[f].p(v,h),m(u[f],1)):(u[f]=ie(v),u[f].c(),m(u[f],1),u[f].m(l,null))}for(se(),f=c.length;f<u.length;f+=1)g(f);ue()}},i(a){if(!o){for(let h=0;h<c.length;h+=1)m(u[h]);m(s.$$.fragment,a),o=!0}},o(a){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)b(u[h]);b(s.$$.fragment,a),o=!1},d(a){a&&T(t),re(u,a),U(s)}}}function qe(e,t,n){let i;function l(r){i=r,n(0,i)}return n(0,i=Te),[i,l]}class Me extends Q{constructor(t){super(),Z(this,t,qe,Le,z,{})}}new Me({target:document.getElementById("app")});