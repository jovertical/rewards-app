import{d as a,o as i,c as u,t as f,r as d,a as m,u as _,F as l,b as p,e as h,f as y}from"./vendor.22f43983.js";const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};g();const L=a({props:{prize:{type:Object,required:!0}},setup(s){return(t,n)=>(i(),u("li",null,f(s.prize.name),1))}}),b=a({setup(s,{expose:t}){let n=d([]);async function c(){fetch("https://resman-rewards-api.herokuapp.com/prices").then(e=>e.json()).then(e=>{n.value=e})}return c(),t({prizes:n}),(e,r)=>(i(!0),u(l,null,m(_(n),o=>(i(),u("ul",{key:o.id},[p(L,{prize:o},null,8,["prize"])]))),128))}}),N=h("h1",null,"Prices App",-1),O=a({setup(s){return(t,n)=>(i(),u(l,null,[N,p(b)],64))}});y(O).mount("#app");
