import{g,v as F,x as I,u as O,s as P,n as w,y as T,z as W}from"./vendor.94593e8d.js";function A(e){return F()?(I(e),!0):!1}const h=typeof window!="undefined",L=e=>typeof e=="string",v=()=>{};function R(e,n){function r(...t){e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})}return r}const $=e=>e();var S=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,C=(e,n)=>{var r={};for(var t in e)z.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&S)for(var t of S(e))n.indexOf(t)<0&&x.call(e,t)&&(r[t]=e[t]);return r};function k(e,n,r={}){const t=r,{eventFilter:a=$}=t,o=C(t,["eventFilter"]);return g(e,R(a,n),o)}const m=h?window:void 0;h&&window.document;h&&window.navigator;function G(...e){let n,r,t,a;if(L(e[0])?([r,t,a]=e,n=m):[n,r,t,a]=e,!n)return v;let o=v;const s=g(()=>O(n),c=>{o(),!!c&&(c.addEventListener(r,t,a),o=()=>{c.removeEventListener(r,t,a),o=v})},{immediate:!0,flush:"post"}),u=()=>{s(),o()};return A(u),u}const H={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)}};function J(e,n,r=(a=>(a=m)==null?void 0:a.localStorage)(),t={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:u=!0,window:c=m,eventFilter:j,shallow:E,onError:y=l=>{console.error(l)}}=t,i=O(n),_=i==null?"any":typeof i=="boolean"?"boolean":typeof i=="string"?"string":typeof i=="object"||Array.isArray(i)?"object":Number.isNaN(i)?"any":"number",f=(E?P:w)(n),d=(a=t.serializer)!=null?a:H[_];function b(l){if(!(!r||l&&l.key!==e))try{const p=l?l.newValue:r.getItem(e);p==null?(f.value=i,i!==null&&r.setItem(e,d.write(i))):f.value=d.read(p)}catch(p){y(p)}}return b(),c&&u&&G(c,"storage",b),r&&k(f,()=>{try{f.value==null?r.removeItem(e):r.setItem(e,d.write(f.value))}catch(l){y(l)}},{flush:o,deep:s,eventFilter:j}),f}var N;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(N||(N={}));function D(){let e=T(),n=J("auth_token",""),r=w(!1),t=w(null);async function a(){let s=await fetch("https://resman-rewards-api.herokuapp.com/api/me",{headers:{"X-Access-Token":n.value}});if(s.status!==200){e.push({name:"auth.login"});return}let u=await s.json();r.value=!0,t.value=u.data}async function o(s){n.value=s,await a(),e.push({name:"home"})}return W(()=>{a()}),{authenticated:r,token:n,user:t,authenticate:o}}export{D as u};
