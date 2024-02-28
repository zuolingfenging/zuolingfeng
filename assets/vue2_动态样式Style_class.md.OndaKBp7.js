import{_ as s,o as a,c as n,R as l}from"./chunks/framework.BMSw91m9.js";const b=JSON.parse('{"title":"条件渲染样式 :Style","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/动态样式Style&class.md","filePath":"vue2/动态样式Style&class.md"}'),p={name:"vue2/动态样式Style&class.md"},e=l(`<h1 id="条件渲染样式-style" tabindex="-1">条件渲染样式 :Style <a class="header-anchor" href="#条件渲染样式-style" aria-label="Permalink to &quot;条件渲染样式 :Style&quot;">​</a></h1><p><strong>对象</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:style=&quot;{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;color&#39;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">(</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isActive</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;orange&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">)</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}&quot;&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:style=&quot;{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;color&#39;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">(</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isActive</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;orange&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">)</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>打印</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">        isActive未定义打印结果为red</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">        isActive未定义打印结果为red</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="条件渲染样式-class" tabindex="-1">条件渲染样式 :Class <a class="header-anchor" href="#条件渲染样式-class" aria-label="Permalink to &quot;条件渲染样式 :Class&quot;">​</a></h1><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:class=&quot;isActive</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;div_1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;div_2&#39;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">	export default {</span></span>
<span class="line"><span style="color:#9ECBFF;">		data() {</span></span>
<span class="line"><span style="color:#9ECBFF;">			return {</span></span>
<span class="line"><span style="color:#9ECBFF;">                isActive:true,</span></span>
<span class="line"><span style="color:#9ECBFF;">            }</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">    }</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">.div_1 {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">.div_2 {}</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:class=&quot;isActive</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;div_1&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;div_2&#39;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#032F62;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#032F62;">	export default {</span></span>
<span class="line"><span style="color:#032F62;">		data() {</span></span>
<span class="line"><span style="color:#032F62;">			return {</span></span>
<span class="line"><span style="color:#032F62;">                isActive:true,</span></span>
<span class="line"><span style="color:#032F62;">            }</span></span>
<span class="line"><span style="color:#032F62;">        }</span></span>
<span class="line"><span style="color:#032F62;">    }</span></span>
<span class="line"><span style="color:#032F62;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#032F62;">.div_1 {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">.div_2 {}</span></span>
<span class="line"><span style="color:#032F62;">&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>打印</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">        isActive定义打印结果为.div_1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">        isActive定义打印结果为.div_1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9),t=[e];function o(c,r,i,y,E,d){return a(),n("div",null,t)}const F=s(p,[["render",o]]);export{b as __pageData,F as default};
