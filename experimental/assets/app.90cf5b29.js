import{u as y,d as f,A as w,V as h,v as c,b as u,B as b,q as N,a5 as j,l as M,a6 as V,c as E,C as G,O as P,N as _,M as q,E as L,a as D,F as s,X as v,x as d,y as x,a7 as F,a8 as z,e as I,f as $,_ as A,z as O,J as H,j as J,S as k,s as U,K as C,a9 as Z,H as Q,aa as W,ab as X,ac as K,ad as Y,ae as ee,af as te,ag as ne,ah as ae,ai as oe,aj as se,ak as ie,al as le}from"./chunks/framework.a49639fc.js";import{V as re,t as R}from"./chunks/theme.73b0c199.js";const ce=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],ue=y({__name:"Giscus",props:{id:null,host:null,repo:null,repoId:null,category:null,categoryId:null,mapping:null,term:null,theme:null,strict:null,reactionsEnabled:null,emitMetadata:null,inputPosition:null,lang:null,loading:null},setup(e){const t=f(!1);return w(()=>{t.value=!0,h(()=>import("./chunks/giscus-a53917f0.fbc3188d.js"),[])}),(n,a)=>t.value?(c(),u("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,ce)):b("",!0)}}),T=(e={},t)=>{var i;const n={id:"comment",host:"https://giscus.app",category:"General",mapping:"pathname",term:"Welcome to giscus!",reactionsEnabled:"1",inputPosition:"top",lang:"zh-CN",loading:"lazy",repo:"xxx/xxx",repoId:""};let a=document.getElementById("giscus");if(a&&a.parentNode.removeChild(a),t!=null&&t.value&&(t==null?void 0:t.value.comment)!==void 0&&!(t!=null&&t.value.comment)||!location.pathname||location.pathname==="/")return;const r=!!((i=document.querySelector("html"))!=null&&i.className),l=document.getElementsByClassName("content-container")[0];if(l){const o=document.createElement("div");o.setAttribute("id","giscus"),o.style.height="auto",o.style.marginTop="40px",o.style.borderTop="1px solid var(--vp-c-divider)",o.style.paddingTop="20px",l.append(o),j({render:()=>V(ue,{...n,theme:r?"transparent_dark":"light",...e})}).mount("#giscus")}},de=()=>{const e=document.querySelector("html");new MutationObserver(n=>{n.forEach(a=>{if(a.type=="attributes"){let r=document.getElementById("comment");r==null||r.setAttribute("theme",e.className.indexOf("dark")!==-1?"transparent_dark":"light")}})}).observe(e,{attributeFilter:["class"]})},pe=(e,t)=>{w(()=>{T(e,t.frontmatter),de()}),N(()=>t.route.path,()=>M(()=>{T(e,t.frontmatter)}))};const _e=y({__name:"CustomLayout",setup(e){const{Layout:t}=R,{page:n}=E(),a={mainnet:"/",staging:"/staging/",experimental:"/experimental/"};function r(o){return o==="mainnet"?window.location.origin+"/"+n.value.relativePath.replace(".md",".html"):window.location.origin+a[o]+n.value.relativePath.replace(".md",".html")}function l(o){!o||!o.target||!o.target.classList.contains("VPLink")||window.location.reload()}function i(){return[{text:"Mainnet",link:r("mainnet"),target:"_parent",rel:"noreferrer"},{text:"Staging",link:r("staging"),target:"_parent",rel:"noreferrer"},{text:"Experimental",link:r("experimental"),target:"_parent",rel:"noreferrer"}]}return(o,m)=>{const B=q("ClientOnly");return c(),G(_(t),null,{"nav-bar-content-after":P(()=>[L(B,null,{default:P(()=>[L(re,{class:D({VPNavBarMenuGroup:!1,active:!1}),button:"Version",items:i(),onClick:l},null,8,["items"])]),_:1})]),_:1})}}});const p=e=>(I("data-v-fcd5a4b8"),e=e(),$(),e),me=p(()=>s("api-title",null,"Query",-1)),ge={class:"api-container"},ye={class:"api-split"},he=p(()=>s("span",{class:"no-select"},"Endpoint",-1)),ve={id:"api",class:"input-mock"},fe=p(()=>s("br",null,null,-1)),be=p(()=>s("api-title",null,"Parameters",-1)),we={class:"api-container"},ke={class:"api-split"},xe={class:"no-select"},Ce=["onUpdate:modelValue"],Ee=p(()=>s("br",null,null,-1)),Ae=p(()=>s("br",null,null,-1)),Pe=p(()=>s("br",null,null,-1)),Le=p(()=>s("api-title",null,"Response",-1)),Te={class:"response"},Ve=y({__name:"DemoApi",props:{query:{},body:{},type:{}},setup(e){const t=e;let n=f({json:!0}),a=f();async function r(){const l={method:t.type,headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)};t.type==="GET"&&delete l.body;const i=await fetch(`https://api.mainnet.ultra.io${t.query}`,l).catch(m=>(console.log(m),m));if(!i||!i.ok){a.value=i.toString();return}const o=await i.json();a.value=`
`+JSON.stringify(o,null,2)}return w(()=>{if(t.body)for(let l of t.body)n.value[l.key]=l.value}),(l,i)=>(c(),u(d,null,[me,s("div",ge,[s("div",ye,[he,s("div",ve,v(t.query),1)])]),fe,t.body&&t.body.length>=1?(c(),u(d,{key:0},[be,s("div",we,[(c(!0),u(d,null,x(t.body,o=>(c(),u("div",ke,[s("span",xe,v(o.key),1),F(s("input",{class:"input-mock",id:"api","onUpdate:modelValue":m=>_(n)[o.key]=m},null,8,Ce),[[z,_(n)[o.key]]])]))),256))]),Ee],64)):b("",!0),s("button",{title:"execute",onClick:r},"Execute"),Ae,Pe,_(a)?(c(),u(d,{key:1},[Le,s("pre",Te,"            "+v(_(a))+`
        `,1)],64)):b("",!0)],64))}});const De=A(Ve,[["__scopeId","data-v-fcd5a4b8"]]),Ie=e=>(I("data-v-2e6d04a6"),e=e(),$(),e),$e=Ie(()=>s("div",{class:"spacer"},null,-1)),Oe=y({__name:"Button",props:{align:{}},emits:["onClick"],setup(e,{emit:t}){const n=e;return(a,r)=>(c(),u(d,null,[s("button",{onClick:r[0]||(r[0]=l=>t("onClick")),style:H([`float: ${n.align}`])},[O(a.$slots,"default",{},void 0,!0)],4),$e],64))}});const Re=A(Oe,[["__scopeId","data-v-2e6d04a6"]]),Se={class:"tabs"},Be=["onClick"],Ne={key:0,class:"tab-content"},je=y({__name:"Tabs",props:{titles:{}},setup(e){const t=e;let n=f(0);return(a,r)=>(c(),u(d,null,[s("div",Se,[(c(!0),u(d,null,x(t.titles,(l,i)=>(c(),u("div",{class:D(["tab",_(n)===i?["active"]:[]]),key:i,onClick:o=>J(n)?n.value=i:n=i},v(l),11,Be))),128))]),(c(!0),u(d,null,x(t.titles,(l,i)=>(c(),u(d,null,[i===_(n)?(c(),u("div",Ne,[O(a.$slots,l,{},void 0,!0)])):b("",!0)],64))),256))],64))}});const Me=A(je,[["__scopeId","data-v-722adab1"]]),Ge=e=>{if(window.dataLayer&&window.gtag)return;const t=document.createElement("script");t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,t.async=!0,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",e)},qe=({id:e})=>{e&&typeof window<"u"&&Ge(e)},Fe={...R,Layout:_e,async enhanceApp({app:e,router:t,siteData:n}){e.component("DemoApi",De),e.component("Button",Re),e.component("Tabs",Me),e.component("Mainnet",await k(()=>h(()=>import("./chunks/Mainnet.0717fc33.js"),["assets/chunks/Mainnet.0717fc33.js","assets/chunks/framework.a49639fc.js"]))),e.component("Staging",await k(()=>h(()=>import("./chunks/Staging.08e2af2e.js"),["assets/chunks/Staging.08e2af2e.js","assets/chunks/framework.a49639fc.js"]))),e.component("Experimental",await k(()=>h(()=>import("./chunks/Experimental.b672d467.js"),["assets/chunks/Experimental.b672d467.js","assets/chunks/framework.a49639fc.js"]))),qe({id:"G-904T1HX43E"})},setup(){const{frontmatter:e}=E(),t=U();pe({repo:"ultraio/docs-blockchain",repoId:"R_kgDOJZVdMQ",category:"Comments",categoryId:"DIC_kwDOJZVdMc4CV7Lb",mapping:"pathname",term:"Leave a comment!",reactionsEnabled:"1",lang:"en"},{frontmatter:e,route:t})}};function S(e){if(e.extends){const t=S(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const g=S(Fe),ze=y({name:"VitePressApp",setup(){const{site:e}=E();return w(()=>{Q(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),W(),X(),K(),g.setup&&g.setup(),()=>V(g.Layout)}});async function He(){const e=Ue(),t=Je();t.provide(Y,e);const n=ee(e.route);return t.provide(te,n),t.component("Content",ne),t.component("ClientOnly",ae),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),g.enhanceApp&&await g.enhanceApp({app:t,router:e,siteData:oe}),{app:t,router:e,data:n}}function Je(){return se(ze)}function Ue(){let e=C,t;return ie(n=>{let a=le(n);return a?(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),C&&(e=!1),h(()=>import(a),[])):null},g.NotFound)}C&&He().then(({app:e,router:t,data:n})=>{t.go().then(()=>{Z(t.route,n.site),e.mount("#app")})});export{He as createApp};
