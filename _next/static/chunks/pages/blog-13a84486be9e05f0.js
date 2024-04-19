(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{5865:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(5327)}])},5327:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return m},default:function(){return x}});var o=n(5893),a=n(1379),i=n(6231),r=n(7123);n(9488);var l=n(2643),s=n(7222),d=n(609),c=n(1163),g=n(1664),u=n.n(g);function p(){let{asPath:e}=(0,c.useRouter)(),t=(function(e){let{pageMap:t}=function(e){let t=globalThis[s.eZ];if(!t)throw Error(`Nextra context not found. Please make sure you are using "${e}" of "nextra/context" on a Nextra page.`);return{pageMap:t.pageMap,route:t.route}}("getPagesUnderRoute");return function e(t,n){let o=[],a=[],i=t.find(e=>"Meta"===e.kind),r=i?.data||{};for(let i of t){if("Meta"===i.kind)continue;let t=(0,d.k0)(r[i.name]),l={...i,...Object.keys(t||{}).length>0&&{meta:t}};if("Folder"===l.kind){let t=e(l.children,n);l.children=t.items,t.activeLevelPages.length?o=t.activeLevelPages:l.route!==n||o.length||(o=l.children)}a.push(l)}let l=Object.keys(r);return a.sort((e,t)=>{let n=l.indexOf(e.name),o=l.indexOf(t.name);return -1===n&&-1===o?e.name<t.name?-1:1:-1===n?1:-1===o?-1:n-o}),{items:a,activeLevelPages:o}}(t,e).activeLevelPages})("/blog").sort((e,t)=>t.frontMatter.date-e.frontMatter.date);e.startsWith("/blog")||e.replace("/tags/","").replace(/\/$/,""),t.flatMap(e=>e.frontMatter.tags).reduce((e,t)=>(e[t]||(e[t]=0),e[t]+=1,e),{});let n=t.map(e=>(0,o.jsxs)(u(),{href:e.route,style:{display:"block",padding:16,border:"1px solid #333"},children:[(0,o.jsx)("div",{style:{fontWeight:700,fontSize:18,marginBottom:8},children:e.frontMatter.title}),(0,o.jsxs)("div",{children:["Date: ",new Date(e.frontMatter.date).toDateString()]}),(0,o.jsxs)("div",{style:{marginBottom:4},children:["Tags:",(0,o.jsx)("div",{style:{display:"inline-flex",justifyContent:"flex-start",alignItems:"center",gap:8,paddingLeft:8},children:e.frontMatter.tags.map(e=>(0,o.jsx)("span",{style:{border:"1px solid currentColor",borderRadius:4,padding:"2px 6px",fontSize:14,fontWeight:700},children:e.replaceAll("-"," ")},e))})]})]},e.route));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)("h1",{style:{fontWeight:700,fontSize:32,marginBottom:8},children:"Blog"})}),(0,o.jsx)("div",{children:n})]})}let m=[];function f(e){return(0,o.jsx)(p,{})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)},pageOpts:{filePath:"src/pages/blog.mdx",route:"/blog",timestamp:171352764e4,pageMap:[{kind:"Meta",data:{"*":{display:"hidden",theme:{sidebar:!1,toc:!1,layout:"full"}},blog:{title:"Blog",display:"normal",type:"page",theme:{layout:"default"}},docs:{title:"Documentation",display:"normal",type:"page",theme:{sidebar:!0,toc:!0,layout:"default"}},index:"Index"}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{theme:{layout:"default",typesetting:"article"}},"blog-demo":"\uD83C\uDF89 First blog post!"}},{kind:"MdxPage",name:"blog-demo",route:"/blog/blog-demo",frontMatter:{title:"\uD83C\uDF89 First blog post!",tags:["some-tag","another-tag","more-tags-for-the-god-of-tags"],date:"2024-04-18T00:00:00.000Z"}}]},{kind:"MdxPage",name:"blog",route:"/blog"},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"Introduction","markdown-demo":"Markdown Demo"}},{kind:"MdxPage",name:"index",route:"/docs",frontMatter:{title:"Introduction"}},{kind:"MdxPage",name:"markdown-demo",route:"/docs/markdown-demo",frontMatter:{title:"Markdown Demo"}}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Blog",headings:m},pageNextRoute:"/blog",nextraLayout:i.ZP,themeConfig:r.Z};var x=(0,a.j)(h)},7123:function(e,t,n){"use strict";var o=n(5893),a=n(6231),i=n(1163);let r={logo:(0,o.jsx)("span",{style:{fontSize:24,fontWeight:700},children:"Solaris"}),docsRepositoryBase:"https://github.com/solarisdb/website/tree/main",project:{},navbar:{extraContent:(0,o.jsx)(a.R5,{lite:!0,className:"[&_span]:hidden"})},search:{placeholder:"Search..."},sidebar:{},themeSwitch:{component:void 0},toc:{backToTop:!0},editLink:{component:null},banner:{key:"banner-test-101",text:"First release of Solaris is available! \uD83D\uDE0E"},footer:{text:(0,o.jsxs)("span",{style:{fontSize:12},children:["\xa9 ",new Date().getFullYear()," Solaris"]})},useNextSeoProps:()=>{let{asPath:e}=(0,i.useRouter)();return["/docs","/blog"].some(t=>e.startsWith(t))?{titleTemplate:"%s | Solaris"}:{titleTemplate:"Solaris"}},head:()=>{let{frontMatter:e}=(0,a.ZR)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#222222"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,o.jsx)("meta",{property:"og:site_name",content:"Solaris"}),e.image?(0,o.jsx)("meta",{property:"og:image",content:e.image}):null,e.video?(0,o.jsx)("meta",{property:"og:video",content:e.video}):null]})}};t.Z=r},5789:function(){}},function(e){e.O(0,[398,888,774,179],function(){return e(e.s=5865)}),_N_E=e.O()}]);