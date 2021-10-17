import{e as f,f as x,o as u,c as h,a as s,g as a,w as n,h as e,i as w,j as y,y as v,k as i,t as g}from"./vendor.eb75dad7.js";import{u as b,a as k,_ as V,F as m,b as j}from"./useForm.c3452349.js";import{u as C}from"./index.d4d7f8ca.js";const F={class:"bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8"},N={class:"sm:mx-auto sm:w-full sm:max-w-md"},S=s("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-darkest"}," Login to continue ",-1),T={class:"mt-2 text-center text-sm text-gray-dark"},B=i(" Or "+g(" ")+" "),$=i(" create your account "),E={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},O={class:"bg-white py-8 px-4 shadow-md sm:rounded sm:px-10"},A=["onSubmit"],G=s("div",{class:"flex justify-end"},[s("div",{class:"text-sm"},[s("a",{href:"javascript:void(0);",class:"font-medium text-yellow"}," Forgot your password? ")])],-1),I=i("Login"),H=f({setup(L){let c=C(),o=b({email:"",password:""}),l=k();async function p(){let d=await fetch("https://resman-rewards-api.herokuapp.com/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.values)}),t=await d.json();if(d.status!==200){l.set(t.error||t.message);return}c.authenticate(t.data.token)}return(d,t)=>{const _=x("router-link");return u(),h("div",F,[s("div",N,[S,s("p",T,[B,a(_,{to:{name:"auth.register"},class:"font-medium text-yellow hover:text-yellow-light"},{default:n(()=>[$]),_:1},8,["to"])])]),s("div",E,[s("div",O,[e(l).show.value?(u(),w(V,{key:0,variant:"error",message:e(l).message.value,class:"mb-6",onHide:t[0]||(t[0]=r=>e(l).clear())},null,8,["message"])):y("",!0),s("form",{class:"space-y-6",onSubmit:v(p,["prevent"])},[a(e(m).Group,{name:"email",label:"Email Address"},{default:n(()=>[a(e(m).TextInput,{modelValue:e(o).values.email,"onUpdate:modelValue":t[1]||(t[1]=r=>e(o).values.email=r),id:"email",name:"email",type:"email",autocomplete:"email"},null,8,["modelValue"])]),_:1}),a(e(m).Group,{name:"password",label:"Password"},{default:n(()=>[a(e(m).TextInput,{modelValue:e(o).values.password,"onUpdate:modelValue":t[2]||(t[2]=r=>e(o).values.password=r),id:"password",name:"password",type:"password",autocomplete:"current-password"},null,8,["modelValue"])]),_:1}),G,s("div",null,[a(j,{type:"submit"},{default:n(()=>[I]),_:1})])],40,A)])])])}}});export{H as default};
