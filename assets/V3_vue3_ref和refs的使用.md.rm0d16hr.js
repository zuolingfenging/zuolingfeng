import{_ as s,o as n,c as a,R as l}from"./chunks/framework.BMSw91m9.js";const u=JSON.parse('{"title":"ref和refs的使用","description":"","frontmatter":{},"headers":[],"relativePath":"V3/vue3/ref和refs的使用.md","filePath":"V3/vue3/ref和refs的使用.md"}'),p={name:"V3/vue3/ref和refs的使用.md"},e=l(`<h1 id="ref和refs的使用" tabindex="-1">ref和refs的使用 <a class="header-anchor" href="#ref和refs的使用" aria-label="Permalink to &quot;ref和refs的使用&quot;">​</a></h1><div class="language-HTML vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">父组件</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#E1E4E8;">&gt;迪纳基是&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">ChildDiv</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;child&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const child=ref()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const btn=()=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">    child.value.get()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">父组件</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn&quot;</span><span style="color:#24292E;">&gt;迪纳基是&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">ChildDiv</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;child&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const child=ref()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const btn=()=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">    child.value.get()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-HTML vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">子组件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const get=(val)=&gt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.log(val,&#39;获取方法&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">抛出/暴露 这个方法</span></span>
<span class="line"><span style="color:#E1E4E8;">defineExpose({</span></span>
<span class="line"><span style="color:#E1E4E8;">  get</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">子组件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const get=(val)=&gt;{</span></span>
<span class="line"><span style="color:#24292E;">  console.log(val,&#39;获取方法&#39;);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">抛出/暴露 这个方法</span></span>
<span class="line"><span style="color:#24292E;">defineExpose({</span></span>
<span class="line"><span style="color:#24292E;">  get</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,3),o=[e];function c(t,r,i,E,y,b){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
