import{_ as s,o as n,c as a,R as l}from"./chunks/framework.BMSw91m9.js";const b=JSON.parse('{"title":"组件通讯","description":"","frontmatter":{},"headers":[],"relativePath":"V3/vue3/组件通信与组件之间的调用.md","filePath":"V3/vue3/组件通信与组件之间的调用.md"}'),p={name:"V3/vue3/组件通信与组件之间的调用.md"},e=l(`<h1 id="组件通讯" tabindex="-1">组件通讯 <a class="header-anchor" href="#组件通讯" aria-label="Permalink to &quot;组件通讯&quot;">​</a></h1><p><strong>父传子</strong></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 父组件模块</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;父组件：123&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">BBB</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:list=&quot;list&quot;&gt;&lt;/BBB&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import {ref , reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">import BBB from &#39;./BBB.vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">const list = ref(&#39;123&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 父组件模块</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;父组件：123&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">BBB</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:list=&quot;list&quot;&gt;&lt;/BBB&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import {ref , reactive} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">import BBB from &#39;./BBB.vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">const list = ref(&#39;123&#39;)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>需要引用vue API import { defineProps } from &#39;vue&#39;;</p></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 子组件模块</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;子组件接收：{{ list }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { defineProps } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">const props = defineProps({</span></span>
<span class="line"><span style="color:#E1E4E8;">  list:String,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 子组件模块</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;子组件接收：{{ list }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { defineProps } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#24292E;">const props = defineProps({</span></span>
<span class="line"><span style="color:#24292E;">  list:String,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>子传父</strong></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//父组件模块</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;父组件：{{ list }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">BBB</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@emitClick=&quot;emitClick&quot;&gt;&lt;/BBB&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">import BBB from &#39;./BBB.vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">const list = ref(&#39;我是父组件&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">const emitClick = value =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//父组件模块</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;父组件：{{ list }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">BBB</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@emitClick=&quot;emitClick&quot;&gt;&lt;/BBB&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">import BBB from &#39;./BBB.vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">const list = ref(&#39;我是父组件&#39;)</span></span>
<span class="line"><span style="color:#24292E;">const emitClick = value =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    list.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>需要把子传父的点击事件写入 emits这个方法里</p></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 子组件模块</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;我是子组件:123&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;emitClick&quot;&gt;子组件点击事件&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref, defineEmits } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">const emits = defineEmits([&#39;emitClick&#39;])</span></span>
<span class="line"><span style="color:#E1E4E8;">const emitValue = ref(&#39;子组件传数据递给父组件&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">const emitClick = () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">emits</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;emitClick&#39;</span><span style="color:#E1E4E8;">, emitValue.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 子组件模块</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;我是子组件:123&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;emitClick&quot;&gt;子组件点击事件&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { ref, defineEmits } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#24292E;">const emits = defineEmits([&#39;emitClick&#39;])</span></span>
<span class="line"><span style="color:#24292E;">const emitValue = ref(&#39;子组件传数据递给父组件&#39;)</span></span>
<span class="line"><span style="color:#24292E;">const emitClick = () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">emits</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;emitClick&#39;</span><span style="color:#24292E;">, emitValue.value)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>父组件调用子组件的方法</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><pre><code>不推荐使用该方法不容易维护 $parent
</code></pre></div><p><strong>子组件调用父组件的方法</strong></p>`,15),t=[e];function o(c,r,i,E,y,u){return n(),a("div",null,t)}const d=s(p,[["render",o]]);export{b as __pageData,d as default};
