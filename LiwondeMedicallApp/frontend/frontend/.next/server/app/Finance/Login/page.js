(()=>{var e={};e.id=5801,e.ids=[5801],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4871:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>g,tree:()=>d});var r=n(482),s=n(9108),a=n(2563),i=n.n(a),o=n(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let d=["",{children:["Finance",{children:["Login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,6560)),"/home/user/Desktop/frontend/app/Finance/Login/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,2917)),"/home/user/Desktop/frontend/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9361,23)),"next/dist/client/components/not-found-error"]}],c=["/home/user/Desktop/frontend/app/Finance/Login/page.tsx"],u="/Finance/Login/page",p={require:n,loadChunk:()=>Promise.resolve()},g=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/Finance/Login/page",pathname:"/Finance/Login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3242:(e,t,n)=>{Promise.resolve().then(n.bind(n,2683))},6785:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2583,23)),Promise.resolve().then(n.t.bind(n,6840,23)),Promise.resolve().then(n.t.bind(n,8771,23)),Promise.resolve().then(n.t.bind(n,3225,23)),Promise.resolve().then(n.t.bind(n,9295,23)),Promise.resolve().then(n.t.bind(n,3982,23))},5420:()=>{},2683:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(5344),s=n(4767),a=n(3729);n(8286);var i=n(8199),o=n(9410);function l({redirectToAdmin:e,redirectToDepartment:t}){let[n,s]=(0,a.useState)(""),[l,d]=(0,a.useState)(""),[c,u]=(0,a.useState)(!1),[p,g]=(0,a.useState)(""),m=async r=>{r.preventDefault(),u(!0),g("");try{console.log("submitting form");let r=await fetch("https://lph-backend.onrender.com/Staff/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:l})});if(r.ok){console.log("Login successiful");let n=(await r.json()).user;console.log("User data:",n),n.roles.includes("admin")?e():n.roles.includes("admin")&&n.assignedDepartment?t(n.assignedDepartment):(console.error("invalid credentials or insuffient role information"),g("invalid credentials or insuffient role information"))}}catch(e){console.error("Error during login",e),g("Login failed. please try again")}finally{u(!1)}};return r.jsx("div",{children:r.jsx("div",{className:"form",children:r.jsx("div",{className:"form-wrapper",children:(0,r.jsxs)("div",{className:"header1",children:[r.jsx("div",{className:"logo-container",children:r.jsx(o.default,{className:"center",src:i.default,alt:"talking",width:100,height:100,style:{borderRadius:"10px"}})}),r.jsx("h1",{children:"Staff Login"}),(0,r.jsxs)("form",{onSubmit:m,children:[r.jsx("label",{className:"name",children:"Username"}),r.jsx("input",{type:"text",id:"name",placeholder:"your username",value:n,onChange:e=>s(e.target.value)}),r.jsx("label",{className:"name",children:"Password"}),r.jsx("input",{type:"password",id:"name",value:l,placeholder:"*******",onChange:e=>d(e.target.value)}),r.jsx("a",{href:"Dashboard",children:r.jsx("button",{className:"button1",type:"submit",onClick:()=>{console.log("Button Clicked!",p)},children:c?"Logging in ... ":"Login"})})]})]})})})})}function d(){let e=(0,s.useRouter)();return r.jsx("div",{children:r.jsx(l,{onLoginSucess:()=>{console.log("Login Successfully"),alert("login successfully")},redirectToAdmin:()=>{e.push("/Finance/Dashboard")},redirectToDepartment:t=>{e.push(`/department/${t}`)}})})}},9410:(e,t,n)=>{"use strict";n.d(t,{default:()=>s.a});var r=n(7412),s=n.n(r)},7412:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getImageProps:function(){return o},default:function(){return l}});let r=n(9694),s=n(3855),a=n(1900),i=r._(n(4931)),o=e=>{let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},l=a.Image},6560:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>a,__esModule:()=>s,default:()=>i});let r=(0,n(6843).createProxy)(String.raw`/home/user/Desktop/frontend/app/Finance/Login/page.tsx`),{__esModule:s,$$typeof:a}=r,i=r.default},2917:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o,metadata:()=>i});var r=n(5036),s=n(8592),a=n.n(s);n(7272);let i={title:"Create Next App",description:"Generated by create next app"};function o({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:a().className,children:e})})}},8199:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});let r={src:"/_next/static/media/icon.93b5ad26.png",height:4969,width:4914,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mN4+JCTmQEI/v9nUHr92qTl1SuzFiBbhQEI7t/XBsoBwZcvDD7nztU/37Jl3cwNG9bOP3++/sXPnwz+DFCdPBcuVDwMC/9mzQAGfuwODg+dLl0uvQ2UEwQpCDp3bvZ2BiA4eDBVaNq0WksGIDh+fMryb98YIkEK7G/fnnyageE/55UrDMIrVxbbMQDBgwc9e4Fyrgwg8PlzzIGdO7cuAyoSAkpp7N27aeaXL5H7GWAAqFL048eIXXfu9Fy9f7/rDJC9BygmwQAChw4xsDIwVIszMDAIPHzIYPf4MQPICiEGhnrhY8cUWAEv7m7IBsdJZAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},8286:()=>{},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[1638,6719,1900],()=>n(4871));module.exports=r})();