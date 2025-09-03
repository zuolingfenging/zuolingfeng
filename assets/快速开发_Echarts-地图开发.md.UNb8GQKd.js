import{_ as s,o as n,c as a,R as l}from"./chunks/framework.BMSw91m9.js";const p="/zuolingfeng/assets/echartscity.pGuEiMJx.png",F=JSON.parse('{"title":"阿里云数据可视化","description":"","frontmatter":{},"headers":[],"relativePath":"快速开发/Echarts-地图开发.md","filePath":"快速开发/Echarts-地图开发.md"}'),o={name:"快速开发/Echarts-地图开发.md"},e=l(`<h1 id="阿里云数据可视化" tabindex="-1">阿里云数据可视化 <a class="header-anchor" href="#阿里云数据可视化" aria-label="Permalink to &quot;阿里云数据可视化&quot;">​</a></h1><p>API: <a href="https://datav.aliyun.com/portal/school/atlas/area_selector" target="_blank" rel="noreferrer">https://datav.aliyun.com/portal/school/atlas/area_selector</a></p><div class="language-HTML vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    准备API 地图数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    export default axios.get(&#39;可视化地图数据API&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    准备API 地图数据</span></span>
<span class="line"><span style="color:#24292E;">    import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#24292E;">    export default axios.get(&#39;可视化地图数据API&#39;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-HTML vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    准备容器</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width:800px;height:600px&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;chartRef&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    在把引入一些需要的依赖 如:Echarts、getMapAPI(地图数据)</span></span>
<span class="line"><span style="color:#E1E4E8;">    import * as echarts from &#39;echarts&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    import getMapAPI from &#39;./api/getMapAPI&#39;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    准备容器</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:800px;height:600px&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;chartRef&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    在把引入一些需要的依赖 如:Echarts、getMapAPI(地图数据)</span></span>
<span class="line"><span style="color:#24292E;">    import * as echarts from &#39;echarts&#39;;</span></span>
<span class="line"><span style="color:#24292E;">    import getMapAPI from &#39;./api/getMapAPI&#39;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref, onMounted, onBeforeUnmount } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">import * as echarts from &#39;echarts&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">import GetMap from &#39;../components/GetMap.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">const chartRef = ref(null)</span></span>
<span class="line"><span style="color:#E1E4E8;">// 中国主要城市坐标数据</span></span>
<span class="line"><span style="color:#E1E4E8;">const cityData = [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// name: &#39;南京&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: [</span><span style="color:#79B8FF;">118.7969</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32.0603</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    itemStyle: { color: </span><span style="color:#9ECBFF;">&#39;#FF6C66&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// name: &#39;南京&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: [</span><span style="color:#79B8FF;">119.178821</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">34.600018</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    itemStyle: { color: </span><span style="color:#9ECBFF;">&#39;pink&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">onMounted(async () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  var myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(chartRef.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 显示 loading 动画</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">showLoading</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  GetMap.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 执行接口关闭动画</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">hideLoading</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 注册地图数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    echarts.</span><span style="color:#B392F0;">registerMap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;JSS&#39;</span><span style="color:#E1E4E8;">, res.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> option </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tooltip: {},</span><span style="color:#6A737D;">// 配置提示框，有这个配置项即可</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 地理坐标系配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      geo: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 使用注册的地图名称</span></span>
<span class="line"><span style="color:#E1E4E8;">        map: </span><span style="color:#9ECBFF;">&#39;JSS&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 允许缩放和平移</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// roam: true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;江苏省&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;map&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          map: </span><span style="color:#9ECBFF;">&#39;JSS&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">// 这个是上面注册时的名字哦，registerMap（&#39;这个名字保持一致&#39;）</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 显示标签</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          data: []</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 涟漪特效系列</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;effectScatter&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用特效散点图</span></span>
<span class="line"><span style="color:#E1E4E8;">          coordinateSystem: </span><span style="color:#9ECBFF;">&#39;geo&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用地理坐标系</span></span>
<span class="line"><span style="color:#E1E4E8;">          data: cityData, </span><span style="color:#6A737D;">// 数据源</span></span>
<span class="line"><span style="color:#E1E4E8;">          symbolSize: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 点大小</span></span>
<span class="line"><span style="color:#E1E4E8;">          showEffectOn: </span><span style="color:#9ECBFF;">&#39;render&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 初始渲染时显示特效</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 涟漪特效配置</span></span>
<span class="line"><span style="color:#E1E4E8;">          rippleEffect: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            period: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 动画周期(秒)</span></span>
<span class="line"><span style="color:#E1E4E8;">            scale: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 波纹扩散范围</span></span>
<span class="line"><span style="color:#E1E4E8;">            brushType: </span><span style="color:#9ECBFF;">&#39;fill&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 填充式波纹</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 标签配置</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            formatter: </span><span style="color:#9ECBFF;">&#39;{b}&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 显示数据项名称</span></span>
<span class="line"><span style="color:#E1E4E8;">            position: </span><span style="color:#9ECBFF;">&#39;right&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 标签位置</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 点样式</span></span>
<span class="line"><span style="color:#E1E4E8;">          itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;#FF6C66&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 点颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">            shadowBlur: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 阴影模糊</span></span>
<span class="line"><span style="color:#E1E4E8;">            shadowColor: </span><span style="color:#9ECBFF;">&#39;#FF6C66&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 阴影颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 高亮状态配置</span></span>
<span class="line"><span style="color:#E1E4E8;">          emphasis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            scale: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 放大效果</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;lines&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          coordinateSystem: </span><span style="color:#9ECBFF;">&#39;geo&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 新增：指定使用地理坐标系</span></span>
<span class="line"><span style="color:#E1E4E8;">          data: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">            coords: [[</span><span style="color:#79B8FF;">118.7969</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32.0603</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],[</span><span style="color:#79B8FF;">119.178821</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">34.600018</span><span style="color:#E1E4E8;">] ]  </span><span style="color:#6A737D;">// 修正为正确的坐标对格式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          }],</span></span>
<span class="line"><span style="color:#E1E4E8;">          effect: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            period: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 箭头指向速度，值越小速度越快</span></span>
<span class="line"><span style="color:#E1E4E8;">            trailLength: </span><span style="color:#79B8FF;">0.4</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 特效尾迹长度[0,1]值越大，尾迹越长重</span></span>
<span class="line"><span style="color:#E1E4E8;">            symbol: </span><span style="color:#9ECBFF;">&#39;arrow&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 箭头图标</span></span>
<span class="line"><span style="color:#E1E4E8;">            symbolSize: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 图标大小</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;#1DE9B6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            width: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 线条宽度</span></span>
<span class="line"><span style="color:#E1E4E8;">            opacity: </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 尾迹线条透明度</span></span>
<span class="line"><span style="color:#E1E4E8;">            curveness: </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 尾迹线条曲直度</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(option)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { ref, onMounted, onBeforeUnmount } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">import * as echarts from &#39;echarts&#39;</span></span>
<span class="line"><span style="color:#24292E;">import GetMap from &#39;../components/GetMap.js&#39;</span></span>
<span class="line"><span style="color:#24292E;">const chartRef = ref(null)</span></span>
<span class="line"><span style="color:#24292E;">// 中国主要城市坐标数据</span></span>
<span class="line"><span style="color:#24292E;">const cityData = [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// name: &#39;南京&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    value: [</span><span style="color:#005CC5;">118.7969</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">32.0603</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    itemStyle: { color: </span><span style="color:#032F62;">&#39;#FF6C66&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// name: &#39;南京&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    value: [</span><span style="color:#005CC5;">119.178821</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">34.600018</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    itemStyle: { color: </span><span style="color:#032F62;">&#39;pink&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">onMounted(async () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  var myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(chartRef.value)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 显示 loading 动画</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">showLoading</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  GetMap.</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 执行接口关闭动画</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">hideLoading</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 注册地图数据</span></span>
<span class="line"><span style="color:#24292E;">    echarts.</span><span style="color:#6F42C1;">registerMap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;JSS&#39;</span><span style="color:#24292E;">, res.data)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> option </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      tooltip: {},</span><span style="color:#6A737D;">// 配置提示框，有这个配置项即可</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 地理坐标系配置</span></span>
<span class="line"><span style="color:#24292E;">      geo: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 使用注册的地图名称</span></span>
<span class="line"><span style="color:#24292E;">        map: </span><span style="color:#032F62;">&#39;JSS&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 允许缩放和平移</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// roam: true</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      series: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;江苏省&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;map&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          map: </span><span style="color:#032F62;">&#39;JSS&#39;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">// 这个是上面注册时的名字哦，registerMap（&#39;这个名字保持一致&#39;）</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 显示标签</span></span>
<span class="line"><span style="color:#24292E;">          label: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          data: []</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 涟漪特效系列</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;effectScatter&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用特效散点图</span></span>
<span class="line"><span style="color:#24292E;">          coordinateSystem: </span><span style="color:#032F62;">&#39;geo&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用地理坐标系</span></span>
<span class="line"><span style="color:#24292E;">          data: cityData, </span><span style="color:#6A737D;">// 数据源</span></span>
<span class="line"><span style="color:#24292E;">          symbolSize: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 点大小</span></span>
<span class="line"><span style="color:#24292E;">          showEffectOn: </span><span style="color:#032F62;">&#39;render&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 初始渲染时显示特效</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 涟漪特效配置</span></span>
<span class="line"><span style="color:#24292E;">          rippleEffect: {</span></span>
<span class="line"><span style="color:#24292E;">            period: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 动画周期(秒)</span></span>
<span class="line"><span style="color:#24292E;">            scale: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 波纹扩散范围</span></span>
<span class="line"><span style="color:#24292E;">            brushType: </span><span style="color:#032F62;">&#39;fill&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 填充式波纹</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 标签配置</span></span>
<span class="line"><span style="color:#24292E;">          label: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            formatter: </span><span style="color:#032F62;">&#39;{b}&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 显示数据项名称</span></span>
<span class="line"><span style="color:#24292E;">            position: </span><span style="color:#032F62;">&#39;right&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 标签位置</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 点样式</span></span>
<span class="line"><span style="color:#24292E;">          itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;#FF6C66&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 点颜色</span></span>
<span class="line"><span style="color:#24292E;">            shadowBlur: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 阴影模糊</span></span>
<span class="line"><span style="color:#24292E;">            shadowColor: </span><span style="color:#032F62;">&#39;#FF6C66&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 阴影颜色</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 高亮状态配置</span></span>
<span class="line"><span style="color:#24292E;">          emphasis: {</span></span>
<span class="line"><span style="color:#24292E;">            scale: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 放大效果</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;lines&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          coordinateSystem: </span><span style="color:#032F62;">&#39;geo&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 新增：指定使用地理坐标系</span></span>
<span class="line"><span style="color:#24292E;">          data: [{</span></span>
<span class="line"><span style="color:#24292E;">            coords: [[</span><span style="color:#005CC5;">118.7969</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">32.0603</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],[</span><span style="color:#005CC5;">119.178821</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">34.600018</span><span style="color:#24292E;">] ]  </span><span style="color:#6A737D;">// 修正为正确的坐标对格式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          }],</span></span>
<span class="line"><span style="color:#24292E;">          effect: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            period: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 箭头指向速度，值越小速度越快</span></span>
<span class="line"><span style="color:#24292E;">            trailLength: </span><span style="color:#005CC5;">0.4</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 特效尾迹长度[0,1]值越大，尾迹越长重</span></span>
<span class="line"><span style="color:#24292E;">            symbol: </span><span style="color:#032F62;">&#39;arrow&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 箭头图标</span></span>
<span class="line"><span style="color:#24292E;">            symbolSize: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 图标大小</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;#1DE9B6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            width: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 线条宽度</span></span>
<span class="line"><span style="color:#24292E;">            opacity: </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 尾迹线条透明度</span></span>
<span class="line"><span style="color:#24292E;">            curveness: </span><span style="color:#005CC5;">0.3</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 尾迹线条曲直度</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(option)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br></div></div><p><img src="`+p+'" alt="一张图片"></p>',6),c=[e];function r(t,E,y,i,b,m){return n(),a("div",null,c)}const d=s(o,[["render",r]]);export{F as __pageData,d as default};
