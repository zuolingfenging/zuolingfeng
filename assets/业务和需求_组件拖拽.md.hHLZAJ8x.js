import{_ as s,o as n,c as a,R as l}from"./chunks/framework.BMSw91m9.js";const m=JSON.parse('{"title":"组件拖拽","description":"","frontmatter":{},"headers":[],"relativePath":"业务和需求/组件拖拽.md","filePath":"业务和需求/组件拖拽.md"}'),p={name:"业务和需求/组件拖拽.md"},o=l(`<h1 id="组件拖拽" tabindex="-1">组件拖拽 <a class="header-anchor" href="#组件拖拽" aria-label="Permalink to &quot;组件拖拽&quot;">​</a></h1><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">el-dialog</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;dialogVisible&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">@mousedown=&quot;startDrag&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">width</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;30%&quot;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;draggableDialog&quot;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">:style=&quot;dialogStyle&quot;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">title</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Tips&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">:before-close=&quot;handleClose&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;This is a message&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">#footer&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">&lt;span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;dialog-footer&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;dialogVisible</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">false&quot;&gt;Cancel&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&lt;el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;dialogVisible</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">false&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &gt;Confirm&lt;/el-button</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#79B8FF;">el-dialog</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref, onMounted, onUnmounted , computed} from &#39;vue&#39;;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const dialogVisible = ref(true);  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const dialogRef = ref(null);  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const dragging = ref(false);  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const startX = ref(0);  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const startY = ref(0);  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const dialogX = ref(0);  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const dialogY = ref(0);  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const updateDialogPosition = () =&gt; {  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (dragging.value) {  </span></span>
<span class="line"><span style="color:#E1E4E8;">        const x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.clientX </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startX.value;  </span></span>
<span class="line"><span style="color:#E1E4E8;">        const y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.clientY </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startY.value;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 这里可以添加边界检查  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">        dialogX.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x;  </span></span>
<span class="line"><span style="color:#E1E4E8;">        dialogY.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> y;  </span></span>
<span class="line"><span style="color:#E1E4E8;">      }  </span></span>
<span class="line"><span style="color:#E1E4E8;">    };  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const dialogStyle = computed(() =&gt; ({  </span></span>
<span class="line"><span style="color:#E1E4E8;">      position: </span><span style="color:#9ECBFF;">&#39;fixed&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 或者 &#39;absolute&#39;，取决于你的布局需求  </span></span>
<span class="line"><span style="color:#E1E4E8;">      top: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">dialogY</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">,  </span></span>
<span class="line"><span style="color:#E1E4E8;">      left: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">dialogX</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">,  </span></span>
<span class="line"><span style="color:#E1E4E8;">    }));  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    const startDrag = (event) =&gt; {  </span></span>
<span class="line"><span style="color:#E1E4E8;">      dragging.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;  </span></span>
<span class="line"><span style="color:#E1E4E8;">      startX.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.clientX </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> dialogX.value;  </span></span>
<span class="line"><span style="color:#E1E4E8;">      startY.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event.clientY </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> dialogY.value;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mousemove&#39;</span><span style="color:#E1E4E8;">, updateDialogPosition);  </span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseup&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {  </span></span>
<span class="line"><span style="color:#E1E4E8;">        dragging.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;  </span></span>
<span class="line"><span style="color:#E1E4E8;">        document.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mousemove&#39;</span><span style="color:#E1E4E8;">, updateDialogPosition);  </span></span>
<span class="line"><span style="color:#E1E4E8;">      });  </span></span>
<span class="line"><span style="color:#E1E4E8;">    };  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    onMounted(() =&gt; {  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 可以在这里获取对话框的初始位置，并设置到 dialogX 和 dialogY  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 但由于 Element Plus 的 dialog 默认是居中的，你可能需要一些额外的逻辑  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 来确定初始位置，或者让用户通过拖拽来定位  </span></span>
<span class="line"><span style="color:#E1E4E8;">    });  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    onUnmounted(() =&gt; {  </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 清理事件监听器  </span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mousemove&#39;</span><span style="color:#E1E4E8;">, updateDialogPosition);  </span></span>
<span class="line"><span style="color:#E1E4E8;">    });  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">el-dialog</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;dialogVisible&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">@mousedown=&quot;startDrag&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">width</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;30%&quot;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;draggableDialog&quot;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">:style=&quot;dialogStyle&quot;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">title</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Tips&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">:before-close=&quot;handleClose&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;This is a message&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">#footer&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">&lt;span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;dialog-footer&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">el-button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;dialogVisible</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">false&quot;&gt;Cancel&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&lt;el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;dialogVisible</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">false&quot;</span></span>
<span class="line"><span style="color:#24292E;">          &gt;Confirm&lt;/el-button</span></span>
<span class="line"><span style="color:#24292E;">        &gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#005CC5;">el-dialog</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">import { ref, onMounted, onUnmounted , computed} from &#39;vue&#39;;  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    const dialogVisible = ref(true);  </span></span>
<span class="line"><span style="color:#24292E;">    const dialogRef = ref(null);  </span></span>
<span class="line"><span style="color:#24292E;">    const dragging = ref(false);  </span></span>
<span class="line"><span style="color:#24292E;">    const startX = ref(0);  </span></span>
<span class="line"><span style="color:#24292E;">    const startY = ref(0);  </span></span>
<span class="line"><span style="color:#24292E;">    const dialogX = ref(0);  </span></span>
<span class="line"><span style="color:#24292E;">    const dialogY = ref(0);  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    const updateDialogPosition = () =&gt; {  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (dragging.value) {  </span></span>
<span class="line"><span style="color:#24292E;">        const x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event.clientX </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> startX.value;  </span></span>
<span class="line"><span style="color:#24292E;">        const y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event.clientY </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> startY.value;  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 这里可以添加边界检查  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">        dialogX.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x;  </span></span>
<span class="line"><span style="color:#24292E;">        dialogY.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> y;  </span></span>
<span class="line"><span style="color:#24292E;">      }  </span></span>
<span class="line"><span style="color:#24292E;">    };  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    const dialogStyle = computed(() =&gt; ({  </span></span>
<span class="line"><span style="color:#24292E;">      position: </span><span style="color:#032F62;">&#39;fixed&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 或者 &#39;absolute&#39;，取决于你的布局需求  </span></span>
<span class="line"><span style="color:#24292E;">      top: </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">dialogY</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;">}px\`</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">      left: </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">dialogX</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;">}px\`</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">    }));  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    const startDrag = (event) =&gt; {  </span></span>
<span class="line"><span style="color:#24292E;">      dragging.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;  </span></span>
<span class="line"><span style="color:#24292E;">      startX.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event.clientX </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> dialogX.value;  </span></span>
<span class="line"><span style="color:#24292E;">      startY.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event.clientY </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> dialogY.value;  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">      document.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mousemove&#39;</span><span style="color:#24292E;">, updateDialogPosition);  </span></span>
<span class="line"><span style="color:#24292E;">      document.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mouseup&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {  </span></span>
<span class="line"><span style="color:#24292E;">        dragging.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;  </span></span>
<span class="line"><span style="color:#24292E;">        document.</span><span style="color:#6F42C1;">removeEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mousemove&#39;</span><span style="color:#24292E;">, updateDialogPosition);  </span></span>
<span class="line"><span style="color:#24292E;">      });  </span></span>
<span class="line"><span style="color:#24292E;">    };  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    onMounted(() =&gt; {  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 可以在这里获取对话框的初始位置，并设置到 dialogX 和 dialogY  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 但由于 Element Plus 的 dialog 默认是居中的，你可能需要一些额外的逻辑  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 来确定初始位置，或者让用户通过拖拽来定位  </span></span>
<span class="line"><span style="color:#24292E;">    });  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    onUnmounted(() =&gt; {  </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 清理事件监听器  </span></span>
<span class="line"><span style="color:#24292E;">      document.</span><span style="color:#6F42C1;">removeEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mousemove&#39;</span><span style="color:#24292E;">, updateDialogPosition);  </span></span>
<span class="line"><span style="color:#24292E;">    });  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">   </span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div>`,2),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{m as __pageData,g as default};
