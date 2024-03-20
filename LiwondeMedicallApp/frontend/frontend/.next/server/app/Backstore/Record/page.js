(()=>{var e={};e.id=1845,e.ids=[1845],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9067:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>o,routeModule:()=>x,tree:()=>c});var s=r(482),a=r(9108),n=r(2563),l=r.n(n),i=r(8300),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let c=["",{children:["Backstore",{children:["Record",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9591)),"/home/user/Desktop/frontend/app/Backstore/Record/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2917)),"/home/user/Desktop/frontend/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],o=["/home/user/Desktop/frontend/app/Backstore/Record/page.tsx"],u="/Backstore/Record/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/Backstore/Record/page",pathname:"/Backstore/Record",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9571:(e,t,r)=>{Promise.resolve().then(r.bind(r,254))},6785:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},5420:()=>{},254:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(5344),a=r(3729);r(7558);var n=r(9410),l=r(8199);function i(){let[e,t]=(0,a.useState)([{DrugId:1,DrugName:"",DrugType:"",Quantity:"",Datecreated:"",ExpiryDate:""}]),r=e=>{t(t=>t.filter((t,r)=>r!==e))},i=(r,s)=>{let a=[...e];a[r]={...a[r],...s},t(a)};return s.jsx("div",{children:(0,s.jsxs)("div",{id:"table",children:[s.jsx(n.default,{src:l.default,alt:"",width:100,height:100}),s.jsx("div",{children:s.jsx("h1",{id:"pharma-head",children:"Drug Store"})}),(0,s.jsxs)("div",{className:"table-box",children:[(0,s.jsxs)("div",{className:"table-row",children:[s.jsx("div",{className:"table-cell",children:s.jsx("p",{children:"DrugID"})}),s.jsx("div",{className:"table-cell",children:s.jsx("p",{children:"DrugName"})}),s.jsx("div",{className:"table-cell",children:s.jsx("p",{children:"DrugType"})}),s.jsx("div",{className:"table-cell",children:s.jsx("p",{children:"Quantity"})}),s.jsx("div",{className:"table-cell",children:s.jsx("p",{children:"DateCreated"})}),s.jsx("div",{className:"table-cell",children:s.jsx("p",{children:"ExpiryDate"})}),s.jsx("div",{className:"table-cell",children:s.jsx("p",{children:"Action"})}),s.jsx("div",{className:"table-cell",children:s.jsx("p",{children:"Action"})})]}),e.map((e,t)=>(0,s.jsxs)("div",{className:"table-row",children:[s.jsx("div",{className:"table-cell",children:s.jsx("input",{id:"type",type:"number"})}),s.jsx("div",{className:"table-cell",children:s.jsx("input",{id:"type",type:"text",value:e.DrugName,onChange:r=>i(t,{...e,DrugName:r.target.value})})}),s.jsx("div",{className:"table-cell",children:(0,s.jsxs)("select",{name:"",id:"type",required:!0,children:[s.jsx("option",{children:"Tablets"}),s.jsx("option",{children:"Injections"}),s.jsx("option",{children:"Syrup"}),s.jsx("option",{children:"Suspensions"}),s.jsx("option",{children:"Capsules"}),s.jsx("option",{children:"Drops"}),s.jsx("option",{children:"Oitments"})]})}),s.jsx("div",{className:"table-cell",children:s.jsx("input",{id:"type",type:"text",value:e.Quantity,onChange:r=>i(t,{...e,Quantity:r.target.value})})}),s.jsx("div",{className:"table-cell",children:s.jsx("input",{id:"type",type:"date",value:e.Datecreated,onChange:r=>i(t,{...e,DateCreated:r.target.value})})}),s.jsx("div",{className:"table-cell",children:s.jsx("input",{id:"type",type:"date",value:e.ExpiryDate,onChange:r=>i(t,{...e,ExpiryDate:r.target.value})})}),s.jsx("div",{className:"table-cell",children:s.jsx("button",{className:"delete1",onClick:()=>i(t,e),children:"Update"})}),s.jsx("div",{className:"table-cell",children:s.jsx("button",{className:"delete",onClick:()=>r(t),children:"Delete"})})]},t))]}),s.jsx("button",{onClick:()=>{e.length},className:"button",children:"Add Row"}),s.jsx("button",{className:"button1",children:"Save"})]})})}},9410:(e,t,r)=>{"use strict";r.d(t,{default:()=>a.a});var s=r(7412),a=r.n(s)},7412:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return i},default:function(){return d}});let s=r(9694),a=r(3855),n=r(1900),l=s._(r(4931)),i=e=>{let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},d=n.Image},9591:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>l});let s=(0,r(6843).createProxy)(String.raw`/home/user/Desktop/frontend/app/Backstore/Record/page.tsx`),{__esModule:a,$$typeof:n}=s,l=s.default},2917:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>l});var s=r(5036),a=r(8592),n=r.n(a);r(7272);let l={title:"Create Next App",description:"Generated by create next app"};function i({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:n().className,children:e})})}},8199:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s={src:"/_next/static/media/icon.93b5ad26.png",height:4969,width:4914,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mN4+JCTmQEI/v9nUHr92qTl1SuzFiBbhQEI7t/XBsoBwZcvDD7nztU/37Jl3cwNG9bOP3++/sXPnwz+DFCdPBcuVDwMC/9mzQAGfuwODg+dLl0uvQ2UEwQpCDp3bvZ2BiA4eDBVaNq0WksGIDh+fMryb98YIkEK7G/fnnyageE/55UrDMIrVxbbMQDBgwc9e4Fyrgwg8PlzzIGdO7cuAyoSAkpp7N27aeaXL5H7GWAAqFL048eIXXfu9Fy9f7/rDJC9BygmwQAChw4xsDIwVIszMDAIPHzIYPf4MQPICiEGhnrhY8cUWAEv7m7IBsdJZAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},7558:()=>{},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,6719,1900],()=>r(9067));module.exports=s})();