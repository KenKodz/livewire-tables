import{_ as s,o as a,c as n,S as l}from"./chunks/framework.bb4748ce.js";const C=JSON.parse('{"title":"Polling","description":"","frontmatter":{},"headers":[],"relativePath":"configuration/polling.md","filePath":"configuration/polling.md"}'),o={name:"configuration/polling.md"},e=l(`<h1 id="polling" tabindex="-1">Polling <a class="header-anchor" href="#polling" aria-label="Permalink to &quot;Polling&quot;">​</a></h1><p>When records are updated frequently, it may be useful to automatically refresh the table.</p><p>By default, polling is disabled. It can easily be enabled by adding polling options to your Livewire Table.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">pollingOptions </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">None</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Every 10 seconds</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">];</span></span></code></pre></div>`,4),p=[e];function t(r,c,i,D,y,d){return a(),n("div",null,p)}const _=s(o,[["render",t]]);export{C as __pageData,_ as default};