import{v as s,a1 as i,a2 as u,a3 as c,a4 as l,a5 as f,a6 as d,a7 as m,a8 as h,a9 as A,aa as g,ab as v,d as P,u as w,j as y,z as C,ac as R,ad as _,ae as b,af as E}from"./chunks/framework.BMSw91m9.js";import{t as D}from"./chunks/theme.fljbYhZR.js";const T={...D};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(T),j=P({name:"VitePressApp",setup(){const{site:e}=w();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&R(),_(),b(),o.setup&&o.setup(),()=>E(o.Layout)}});async function L(){const e=S(),a=O();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function O(){return h(j)}function S(){let e=s,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),__vite__mapDeps([]))),s&&(e=!1),r},o.NotFound)}s&&L().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{L as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}