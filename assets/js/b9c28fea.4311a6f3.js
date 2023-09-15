"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="Hooks",l={unversionedId:"miscellaneous/hooks",id:"miscellaneous/hooks",title:"Hooks",description:"Elf allows customizing some of the behavior via elfHooks",source:"@site/docs/miscellaneous/hooks.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/hooks",permalink:"/elf/docs/miscellaneous/hooks",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/miscellaneous/hooks.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Registry",permalink:"/elf/docs/miscellaneous/registry"},next:{title:"Batching",permalink:"/elf/docs/miscellaneous/batching"}},s={},u=[{value:"registerPreStoreUpdate",id:"registerprestoreupdate",level:2},{value:"registerPreStateInit",id:"registerprestateinit",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"Elf allows customizing some of the behavior via ",(0,o.kt)("inlineCode",{parentName:"p"},"elfHooks")),(0,o.kt)("h2",{id:"registerprestoreupdate"},"registerPreStoreUpdate"),(0,o.kt)("p",null,"Provide a function to modify the store value after reducers has run."),(0,o.kt)("p",null,"The callback function takes three arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currentState")," - state before reducers has run"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nextState")," - state after reducers has run"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storeName")," - the name of the store")),(0,o.kt)("p",null,"One scenario when this functionality could be useful is when a developer wants to prevent bugs associated with mutability by freezing the store value during the development:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { elfHooks, deepFreeze } from '@ngneat/elf';\n\nif (!environment.production) {\n  elfHooks.registerPreStoreUpdate((currentState, nextState, storeName) => {\n    return deepFreeze(nextState);\n  });\n}\n")),(0,o.kt)("h2",{id:"registerprestateinit"},"registerPreStateInit"),(0,o.kt)("p",null,"Provide a function to modify initial state of the store."),(0,o.kt)("p",null,"The callback function takes two arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initialState")," - the initial state of the store"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storeName")," - the name of the store")),(0,o.kt)("p",null,"It could be useful is when a developer wants to prevents bugs associated with mutability by freezing initial state value during the development:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { elfHooks, deepFreeze } from '@ngneat/elf';\n\nif (!environment.production) {\n  elfHooks.registerPreStateInit((initialState, storeName) => {\n    return deepFreeze(initialState);\n  });\n}\n")))}p.isMDXComponent=!0}}]);