import{_ as s,o as a,c as l,S as n}from"./chunks/framework.bb4748ce.js";const A=JSON.parse('{"title":"Links","description":"","frontmatter":{},"headers":[],"relativePath":"usage/links.md","filePath":"usage/links.md"}'),o={name:"usage/links.md"},p=n(`<h1 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h1><p>By default, clicking on a row will select it. Most times, you want to be redirected to the edit page of a model. You can achieve this by overriding the <code>link</code> method of the Livewire Table.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">link</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Model</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F78C6C;">string</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">model.edit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">model</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="multiple-links" tabindex="-1">Multiple links <a class="header-anchor" href="#multiple-links" aria-label="Permalink to &quot;Multiple links&quot;">​</a></h2><p>If you wish to have multiple links, you could consider making a new column for this.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Make sure to call <code>clickable(false)</code> as this will prevent the default click action as described above.</p></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Actions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Model</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;a class=&quot;underline&quot; href=&quot;#&quot;&gt;...&lt;/a&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">clickable</span><span style="color:#89DDFF;">(false)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">asHtml</span><span style="color:#89DDFF;">(),</span></span></code></pre></div>`,7),e=[p];function t(c,r,i,D,F,y){return a(),l("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};