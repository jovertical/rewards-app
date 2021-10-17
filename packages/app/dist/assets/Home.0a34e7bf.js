import{P as _}from"./PrizeHeader.93a4c051.js";import{d as n,r as u,o as a,c as o,a as e,t as m,b as c,w as h,m as x,n as f,F as g,p as v,u as w,h as y}from"./vendor.94593e8d.js";import"./index.d288ba6b.js";const z={class:"bg-white rounded shadow-md"},b={class:"aspect-w-3 aspect-h-2"},$=["src"],k={class:"py-8 text-center"},j={class:"py-2.5 text-xl font-eloquia"},B={class:"inline-flex mt-10"},P=x(" Details "),C=n({props:{prize:{type:Object,required:!0}},setup(t){return(r,s)=>{const i=u("router-link");return a(),o("div",z,[e("div",b,[e("img",{class:"object-cover rounded-t",src:t.prize.image_url,alt:""},null,8,$)]),e("div",k,[e("h4",j,m(t.prize.name),1),e("div",B,[c(i,{class:"px-12 py-2.5 rounded-full bg-yellow text-sm font-light",to:{name:"prize-details",params:{id:t.prize._id}}},{default:h(()=>[P]),_:1},8,["to"])])])])}}}),H={class:"pb-8"},N={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},V=n({setup(t,{expose:r}){let s=f([]);async function i(){let l=await(await fetch("https://resman-rewards-api.herokuapp.com/api/prizes")).json();s.value=l.data}return i(),r({prizes:s}),(p,l)=>(a(),o("div",H,[e("div",N,[(a(!0),o(g,null,v(w(s),d=>(a(),y(C,{key:d._id,prize:d},null,8,["prize"]))),128))])]))}}),q={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},D=e("div",{class:"mt-4 py-12"},[e("h2",{class:"text-center text-xl font-light"}," Here is the full list of prizes that you can win. ")],-1),F={class:"mt-8"},S=n({setup(t){return(r,s)=>(a(),o("div",null,[c(_),e("main",q,[D,e("div",F,[c(V)])])]))}});export{S as default};
