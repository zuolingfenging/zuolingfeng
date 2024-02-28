import{_ as s,o as a,c as n,R as l}from"./chunks/framework.BMSw91m9.js";const m=JSON.parse('{"title":"watch监听属性","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/watch监听属性.md","filePath":"vue2/watch监听属性.md"}'),p={name:"vue2/watch监听属性.md"},e=l(`<h1 id="watch监听属性" tabindex="-1">watch监听属性 <a class="header-anchor" href="#watch监听属性" aria-label="Permalink to &quot;watch监听属性&quot;">​</a></h1><p>深度监听</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        DataName: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name:</span><span style="color:#9ECBFF;">&#39;谈畅&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            age:</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        DataName: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newVal</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">oldVal</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            deep: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 深度侦听开启</span></span>
<span class="line"><span style="color:#E1E4E8;">            immediate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 立即执行，进入页面时直接触发一次</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    data: {</span></span>
<span class="line"><span style="color:#24292E;">        DataName: {</span></span>
<span class="line"><span style="color:#24292E;">            name:</span><span style="color:#032F62;">&#39;谈畅&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            age:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    watch: {</span></span>
<span class="line"><span style="color:#24292E;">        DataName: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newVal</span><span style="color:#24292E;">,</span><span style="color:#E36209;">oldVal</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            deep: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 深度侦听开启</span></span>
<span class="line"><span style="color:#24292E;">            immediate: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 立即执行，进入页面时直接触发一次</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,3),o=[e];function c(r,t,E,i,y,d){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{m as __pageData,u as default};
