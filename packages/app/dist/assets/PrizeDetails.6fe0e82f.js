import{d as h,f as m,n as f,g as x,o,c as a,b as g,a as s,u as t,q as i,t as d}from"./vendor.94593e8d.js";import{P as v}from"./PrizeHeader.8d533926.js";import{u as y}from"./useAuth.c57b1cac.js";import"./index.d2c2843e.js";const b={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"},k={class:"py-12"},w={class:"grid grid-cols-2 gap-x-8"},j={key:0,class:"col-span-2 lg:col-span-1"},z={class:"aspect-w-3 aspect-h-4"},A=["src"],P={key:1,class:"col-span-2 lg:col-span-1 h-full px-8 py-6 bg-white rounded shadow"},q={class:"py-2.5 text-3xl font-eloquia"},B=s("div",{class:"mt-12 border-t border-b border-gray-300"},[s("div",{class:"py-8"},[s("button",{class:"px-12 py-2.5 rounded-full bg-yellow text-sm font-light"}," Redeem \xA0> ")])],-1),N={key:0,class:"mt-4"},V={class:"text-sm"},C={class:"mt-10"},D={class:"border-t border-gray-300 py-12"},H={key:0,class:"flex"},R=s("h5",{class:"text-2xl font-eloquia"},"Description",-1),$={class:"ml-20 mt-1.5 font-light"},G=h({setup(E,{expose:n}){let p=m(),l=y(),e=f(null);async function u(c){let r=await fetch(`https://resman-rewards-api.herokuapp.com/api/prizes/${c}`,{headers:{"X-Access-Token":l.token.value}});if(r.status!==200)return;let _=await r.json();e.value=_.data}return x(l.authenticated,c=>{c&&u(p.params.id)}),n({prize:e}),(c,r)=>(o(),a("div",null,[g(v),s("main",b,[s("div",k,[s("div",w,[t(e)?(o(),a("div",j,[s("div",z,[s("img",{class:"object-cover rounded",src:t(e).image_url,alt:""},null,8,A)])])):i("",!0),t(e)?(o(),a("div",P,[s("h4",q,d(t(e).name),1),B,t(e)?(o(),a("div",N,[s("span",V,d(t(e).stock)+" left in stock",1)])):i("",!0)])):i("",!0)]),s("div",C,[s("div",D,[t(e)?(o(),a("div",H,[R,s("p",$,d(t(e).description),1)])):i("",!0)])])])])]))}});export{G as default};