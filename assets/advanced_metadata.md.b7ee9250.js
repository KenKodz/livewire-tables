import{_ as a,o as s,c as e,S as t}from"./chunks/framework.bb4748ce.js";const _=JSON.parse('{"title":"Metadata","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/metadata.md","filePath":"advanced/metadata.md"}'),n={name:"advanced/metadata.md"},o=t(`<h1 id="metadata" tabindex="-1">Metadata <a class="header-anchor" href="#metadata" aria-label="Permalink to &quot;Metadata&quot;">​</a></h1><p>Metadata is data that can be added to you columns and filters as a key-value pair.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">setMeta</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span></code></pre></div><p>This functionality is not used by the package itself and is exclusively for customizing the views. The metadata can be accessed in the views via the <code>getMeta</code> method.</p>`,4),l=[o];function p(c,r,d,D,i,F){return s(),e("div",null,l)}const m=a(n,[["render",p]]);export{_ as __pageData,m as default};
