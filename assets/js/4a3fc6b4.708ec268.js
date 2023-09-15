"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[591],{858:(e,t,i)=>{i.d(t,{S:()=>d});var n=i(7294),s=i(9979),a=i(2949);const o={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function d(e){let{src:t,packages:i=[]}=e;const d=(0,n.useRef)(),l=(0,n.useRef)(),c=["core","rxjs",...i],{colorMode:r}=(0,a.I)();return(0,n.useEffect)((()=>{const e=c.reduce(((e,t)=>(Object.assign(e,o[t]),e)),{});s.Z.embedProject(d.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:r,height:"500px"}).then((e=>{l.current=e.editor}))}),[]),(0,n.useEffect)((()=>{l.current&&l.current.setTheme(r)}),[r]),n.createElement("section",{style:{height:"500px"}},n.createElement("div",{ref:d}))}},4418:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var n=i(7462),s=(i(7294),i(3905));var a=i(858);const o={},d="Active ID(s)",l={unversionedId:"features/entities-management/active-ids",id:"features/entities-management/active-ids",title:"Active ID(s)",description:"This feature requires the withEntities to be used in the Store. It lets you hold one or more IDs indicating the entities that are currently active. It is often useful",source:"@site/docs/features/entities-management/active-ids.mdx",sourceDirName:"features/entities-management",slug:"/features/entities-management/active-ids",permalink:"/elf/docs/features/entities-management/active-ids",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/entities-management/active-ids.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"UI Entities",permalink:"/elf/docs/features/entities-management/ui-entities"},next:{title:"Entities Props Factory",permalink:"/elf/docs/features/entities-management/entities-props-factory"}},c={},r=[{value:"Active Id",id:"active-id",level:2},{value:"Queries",id:"queries",level:3},{value:"<code>selectActiveEntity</code>",id:"selectactiveentity",level:3},{value:"<code>selectActiveId</code>",id:"selectactiveid",level:3},{value:"<code>getActiveEntity</code>",id:"getactiveentity",level:3},{value:"<code>getActiveId</code>",id:"getactiveid",level:3},{value:"Mutations",id:"mutations",level:2},{value:"<code>setActiveId</code>",id:"setactiveid",level:3},{value:"<code>resetActiveId</code>",id:"resetactiveid",level:3},{value:"Active Ids",id:"active-ids-1",level:2},{value:"Queries",id:"queries-1",level:2},{value:"<code>selectActiveEntities</code>",id:"selectactiveentities",level:3},{value:"<code>selectActiveIds</code>",id:"selectactiveids",level:3},{value:"<code>getActiveEntities</code>",id:"getactiveentities",level:3},{value:"<code>getActiveIds</code>",id:"getactiveids",level:3},{value:"Mutations",id:"mutations-1",level:3},{value:"<code>setActiveIds</code>",id:"setactiveids",level:3},{value:"<code>addActiveIds</code>",id:"addactiveids",level:3},{value:"<code>toggleActiveIds</code>",id:"toggleactiveids",level:3},{value:"<code>removeActiveIds</code>",id:"removeactiveids",level:3},{value:"<code>resetActiveIds</code>",id:"resetactiveids",level:3}],v={toc:r};function p(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"active-ids"},"Active ID(s)"),(0,s.kt)("p",null,"This feature requires the ",(0,s.kt)("inlineCode",{parentName:"p"},"withEntities")," to be used in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Store"),". It lets you hold one or more IDs indicating the entities that are currently active. It is often useful\nfor monitoring which entities the user is interacting with."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This feature requires ",(0,s.kt)("inlineCode",{parentName:"p"},"@ngneat/elf-entities"))),(0,s.kt)("h2",{id:"active-id"},"Active Id"),(0,s.kt)("p",null,"To use this feature, provide the ",(0,s.kt)("inlineCode",{parentName:"p"},"withActiveId")," props factory function in the ",(0,s.kt)("inlineCode",{parentName:"p"},"createStore")," call:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\nimport { withEntities, withActiveId } from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withActiveId()\n);\n")),(0,s.kt)(a.S,{src:"import { createStore } from '@ngneat/elf';\nimport {\n  addEntities,\n  selectActiveEntity,\n  setActiveId,\n  withActiveId,\n  withEntities,\n} from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withActiveId()\n);\n\ntodosStore.pipe(selectActiveEntity()).subscribe((active) => {\n  console.log(active);\n});\n\ntodosStore.update(addEntities({ id: 1, label: 'one' }), setActiveId(1));\n",packages:["entities"],mdxType:"LiveDemo"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"This will allow you to use the following ready-made mutations and queries:"),(0,s.kt)("h3",{id:"queries"},"Queries"),(0,s.kt)("h3",{id:"selectactiveentity"},(0,s.kt)("inlineCode",{parentName:"h3"},"selectActiveEntity")),(0,s.kt)("p",null,"Select the active entity:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveEntity } from '@ngneat/elf-entities';\n\nconst active$ = todosStore.pipe(selectActiveEntity());\n")),(0,s.kt)("h3",{id:"selectactiveid"},(0,s.kt)("inlineCode",{parentName:"h3"},"selectActiveId")),(0,s.kt)("p",null,"Select the active id:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveId } from '@ngneat/elf-entities';\n\nconst activeId$ = todosStore.pipe(selectActiveId());\n")),(0,s.kt)("h3",{id:"getactiveentity"},(0,s.kt)("inlineCode",{parentName:"h3"},"getActiveEntity")),(0,s.kt)("p",null,"Get active entity:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveEntity } from '@ngneat/elf-entities';\n\nconst active = todosStore.query(getActiveEntity());\n")),(0,s.kt)("h3",{id:"getactiveid"},(0,s.kt)("inlineCode",{parentName:"h3"},"getActiveId")),(0,s.kt)("p",null,"Get the active id:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveId } from '@ngneat/elf-entities';\n\nconst activeId = todosStore.query(getActiveId);\n")),(0,s.kt)("h2",{id:"mutations"},"Mutations"),(0,s.kt)("h3",{id:"setactiveid"},(0,s.kt)("inlineCode",{parentName:"h3"},"setActiveId")),(0,s.kt)("p",null,"Set the active id:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { setActiveId } from '@ngneat/elf-entities';\n\ntodosStore.update(setActiveId(id));\n")),(0,s.kt)("h3",{id:"resetactiveid"},(0,s.kt)("inlineCode",{parentName:"h3"},"resetActiveId")),(0,s.kt)("p",null,"Reset the active id:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { resetActiveId } from '@ngneat/elf-entities';\n\ntodosStore.update(resetActiveId());\n")),(0,s.kt)("h2",{id:"active-ids-1"},"Active Ids"),(0,s.kt)("p",null,"To use this feature, provide the ",(0,s.kt)("inlineCode",{parentName:"p"},"withActiveIds")," props factory function in the ",(0,s.kt)("inlineCode",{parentName:"p"},"createStore")," call:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\nimport { withEntities, withActiveIds } from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withActiveIds()\n);\n")),(0,s.kt)("p",null,"This will allow you to use the following ready-made mutations and queries:"),(0,s.kt)("h2",{id:"queries-1"},"Queries"),(0,s.kt)("h3",{id:"selectactiveentities"},(0,s.kt)("inlineCode",{parentName:"h3"},"selectActiveEntities")),(0,s.kt)("p",null,"Select the active entities:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveEntities } from '@ngneat/elf-entities';\n\nconst actives$ = todosStore.pipe(selectActiveEntities());\n")),(0,s.kt)("h3",{id:"selectactiveids"},(0,s.kt)("inlineCode",{parentName:"h3"},"selectActiveIds")),(0,s.kt)("p",null,"Select the active ids:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveIds } from '@ngneat/elf-entities';\n\nconst activeIds$ = todosStore.pipe(selectActiveIds());\n")),(0,s.kt)("h3",{id:"getactiveentities"},(0,s.kt)("inlineCode",{parentName:"h3"},"getActiveEntities")),(0,s.kt)("p",null,"Get active entities:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveEntities } from '@ngneat/elf-entities';\n\nconst actives = todosStore.query(getActiveEntities());\n")),(0,s.kt)("h3",{id:"getactiveids"},(0,s.kt)("inlineCode",{parentName:"h3"},"getActiveIds")),(0,s.kt)("p",null,"Get active ids:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveIds } from '@ngneat/elf-entities';\n\nconst activeIds = todosStore.query(getActiveIds);\n")),(0,s.kt)("h3",{id:"mutations-1"},"Mutations"),(0,s.kt)("h3",{id:"setactiveids"},(0,s.kt)("inlineCode",{parentName:"h3"},"setActiveIds")),(0,s.kt)("p",null,"Set the active ids:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { setActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(setActiveIds([id, id]));\n")),(0,s.kt)("h3",{id:"addactiveids"},(0,s.kt)("inlineCode",{parentName:"h3"},"addActiveIds")),(0,s.kt)("p",null,"Add active ids:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { addActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(addActiveIds([id, id]));\n")),(0,s.kt)("h3",{id:"toggleactiveids"},(0,s.kt)("inlineCode",{parentName:"h3"},"toggleActiveIds")),(0,s.kt)("p",null,"Toggle active ids:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { toggleActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(toggleActiveIds([id, id]));\n")),(0,s.kt)("h3",{id:"removeactiveids"},(0,s.kt)("inlineCode",{parentName:"h3"},"removeActiveIds")),(0,s.kt)("p",null,"Remove active ids:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { removeActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(removeActiveIds([id, id]));\n")),(0,s.kt)("h3",{id:"resetactiveids"},(0,s.kt)("inlineCode",{parentName:"h3"},"resetActiveIds")),(0,s.kt)("p",null,"Reset the active ids:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { resetActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(resetActiveIds());\n")))}p.isMDXComponent=!0}}]);