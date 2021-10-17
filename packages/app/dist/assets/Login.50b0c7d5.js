var L=Object.defineProperty,j=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(e,t,s)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_=(e,t)=>{for(var s in t||(t={}))z.call(t,s)&&y(e,s,t[s]);if(x)for(var s of x(t))N.call(t,s)&&y(e,s,t[s]);return e},b=(e,t)=>j(e,B(t));import{A as k,B as T,d as u,o as n,c as i,a as o,q as m,C as f,t as v,D as $,E as V,r as M,b as d,w as g,u as r,h as A,G as E,m as w,e as G}from"./vendor.94593e8d.js";import{u as I}from"./useAuth.c57b1cac.js";function O(){let e=k({message:"",show:!1});function t(l){e.message=l,e.show=!0}function s(){e.message="",e.show=!1}return b(_({},T(e)),{set:t,clear:s})}function q(e){return{values:k(e)}}const D={class:"flex"},F={class:"flex-shrink-0"},P={key:0,class:"h-5 w-5 text-green",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},R=o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),U=[R],H={key:1,class:"h-5 w-5 text-red",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},J=o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"},null,-1),K=[J],Q={class:"ml-3"},W={class:"ml-auto pl-3"},X={class:"-mx-1.5 -my-1.5"},Y=o("span",{class:"sr-only"},"Dismiss",-1),Z=o("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ee=[Y,Z],te=u({props:{variant:{type:String,default:"error"},message:{type:String,required:!0}},emits:["hide"],setup(e){return(t,s)=>(n(),i("div",{class:f(["rounded p-4",{"bg-green-lightest":e.variant==="success","bg-red-lightest":e.variant==="error"}])},[o("div",D,[o("div",F,[e.variant==="success"?(n(),i("svg",P,U)):m("",!0),e.variant==="error"?(n(),i("svg",H,K)):m("",!0)]),o("div",Q,[o("p",{class:f(["text-sm font-medium",{"text-green-darker":e.variant==="success","text-red-darker":e.variant==="error"}])},v(e.message),3)]),o("div",W,[o("div",X,[o("button",{type:"button",class:f(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2",{"bg-green-lightest hover:bg-green-lightest text-green focus:ring-offset-green-lightest focus:ring-green-dark":e.variant==="success","bg-red-lightest hover:bg-red-lightest text-red focus:ring-offset-red-lightest focus:ring-red-dark":e.variant==="error"}]),onClick:s[0]||(s[0]=l=>t.$emit("hide"))},ee,2)])])])],2))}}),se=u({props:{loading:{type:Boolean,default:!1}},setup(e){return(t,s)=>(n(),i("button",V({class:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-dark hover:bg-yellow-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow"},t.$attrs),[$(t.$slots,"default")],16))}}),oe=["for"],re=u({props:{name:{type:String,required:!0},label:{type:String,default:""}},setup(e){return(t,s)=>(n(),i("div",null,[e.label?(n(),i("label",{key:0,for:e.name,class:"block text-sm font-medium text-gray-dark"},v(e.label),9,oe)):m("",!0),o("div",{class:f({"mt-1":!!e.label})},[$(t.$slots,"default")],2)]))}}),ae=["value"],le=u({props:{modelValue:{type:[String,Number],default:""}},emits:["update:modelValue"],setup(e){return(t,s)=>(n(),i("input",V({class:"appearance-none block w-full px-3 py-2 border border-gray-lighter rounded-md shadow-sm placeholder-gray focus:outline-none focus:ring-yellow focus:border-yellow sm:text-sm",value:e.modelValue},t.$attrs,{onInput:s[0]||(s[0]=l=>t.$emit("update:modelValue",l.target.value))}),null,16,ae))}});var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Group:re,TextInput:le});const ne={class:"bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8"},ie={class:"sm:mx-auto sm:w-full sm:max-w-md"},de=o("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-darkest"}," Login to continue ",-1),ue={class:"mt-2 text-center text-sm text-gray-dark"},ce=w(" Or "+v(" ")+" "),me=w(" create your account "),fe={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},ge={class:"bg-white py-8 px-4 shadow-md sm:rounded sm:px-10"},he=["onSubmit"],pe=G('<div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-yellow-dark focus:text-yellow border-gray-light rounded"><label for="remember-me" class="ml-2 block text-sm text-gray-darkest"> Remember me </label></div><div class="text-sm"><a href="javascript:void(0);" class="font-medium text-yellow"> Forgot your password? </a></div></div>',1),ve=w("Login"),_e=u({setup(e){let t=I(),s=q({email:"",password:""}),l=O();async function S(){let p=await fetch("https://resman-rewards-api.herokuapp.com/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.values)}),a=await p.json();if(p.status!==200){l.set(a.error||a.message);return}t.authenticate(a.data.token)}return(p,a)=>{const C=M("router-link");return n(),i("div",ne,[o("div",ie,[de,o("p",ue,[ce,d(C,{to:{name:"auth.register"},class:"font-medium text-yellow hover:text-yellow-light"},{default:g(()=>[me]),_:1},8,["to"])])]),o("div",fe,[o("div",ge,[r(l).show.value?(n(),A(te,{key:0,variant:"error",message:r(l).message.value,class:"mb-6",onHide:a[0]||(a[0]=c=>r(l).clear())},null,8,["message"])):m("",!0),o("form",{class:"space-y-6",onSubmit:E(S,["prevent"])},[d(r(h).Group,{name:"email",label:"Email Address"},{default:g(()=>[d(r(h).TextInput,{modelValue:r(s).values.email,"onUpdate:modelValue":a[1]||(a[1]=c=>r(s).values.email=c),id:"email",name:"email",type:"email",autocomplete:"email"},null,8,["modelValue"])]),_:1}),d(r(h).Group,{name:"password",label:"Password"},{default:g(()=>[d(r(h).TextInput,{modelValue:r(s).values.password,"onUpdate:modelValue":a[2]||(a[2]=c=>r(s).values.password=c),id:"password",name:"password",type:"password",autocomplete:"current-password"},null,8,["modelValue"])]),_:1}),pe,o("div",null,[d(se,{type:"submit"},{default:g(()=>[ve]),_:1})])],40,he)])])])}}});export{_e as default};