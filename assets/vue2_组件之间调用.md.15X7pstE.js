import{_ as s,o as n,c as a,R as l}from"./chunks/framework.xiFMR0TK.js";const u=JSON.parse('{"title":"组件通讯","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/组件之间调用.md","filePath":"vue2/组件之间调用.md"}'),p={name:"vue2/组件之间调用.md"},e=l(`<h1 id="组件通讯" tabindex="-1">组件通讯 <a class="header-anchor" href="#组件通讯" aria-label="Permalink to &quot;组件通讯&quot;">​</a></h1><p><strong>在子组件中调用父组件的方法</strong></p><p>方法一:不推荐使用 不易维护 X</p><p>子组件.vue</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">		methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$parent.</span><span style="color:#B392F0;">test_father</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;NO!~&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	export default {</span></span>
<span class="line"><span style="color:#24292E;">		methods: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$parent.</span><span style="color:#6F42C1;">test_father</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;NO!~&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>父组件.vue</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">		methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">test_father</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(val)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	export default {</span></span>
<span class="line"><span style="color:#24292E;">		methods: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">test_father</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(val)</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="在父组件中调用子组件的方法" tabindex="-1">在父组件中调用子组件的方法 <a class="header-anchor" href="#在父组件中调用子组件的方法" aria-label="Permalink to &quot;在父组件中调用子组件的方法&quot;">​</a></h1><p><strong>使用ref</strong></p><p>父组件.vue</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">Button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;handleClick&quot;&gt;点击调用子组件方法&lt;/Button&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&lt;Child</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;child&quot;</span><span style="color:#E1E4E8;">/&gt;&lt;/</span><span style="color:#79B8FF;">Child</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import Child from &#39;./child&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">    methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">handleClick</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.child.</span><span style="color:#B392F0;">childClick</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;测试参数&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">Button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;handleClick&quot;&gt;点击调用子组件方法&lt;/Button&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&lt;Child</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;child&quot;</span><span style="color:#24292E;">/&gt;&lt;/</span><span style="color:#005CC5;">Child</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import Child from &#39;./child&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">    methods: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">handleClick</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.child.</span><span style="color:#6F42C1;">childClick</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;测试参数&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>子组件.vue</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">childClick</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;我是子组件的方法，接收到的参数： &#39;</span><span style="color:#E1E4E8;">,params);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">childClick</span><span style="color:#24292E;">(</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;我是子组件的方法，接收到的参数： &#39;</span><span style="color:#24292E;">,params);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,13),o=[e];function t(c,r,E,i,y,d){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
