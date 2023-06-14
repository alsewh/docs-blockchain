import{_ as s,c as a,o as n,V as e}from"./chunks/framework.281622bf.js";const D=JSON.parse('{"title":"Response interface","description":"","frontmatter":{"title":"Response interface","deploy":["staging","mainnet"],"order":3,"outline":[0,4]},"headers":[],"relativePath":"guides/Wallet Extension/response-format.md","lastUpdated":1686748339000}'),o={name:"guides/Wallet Extension/response-format.md"},t=e(`<h1 id="response-interface" tabindex="-1">Response interface <a class="header-anchor" href="#response-interface" aria-label="Permalink to &quot;Response interface&quot;">​</a></h1><p>To standardize the communication between the decentralized applications and the extension, each method will respond with a Promise and this response format.</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Based on JSend a specification for a simple, no-frills,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * JSON based format for application-level communication.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * https://github.com/omniti-labs/jsend</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fail</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// &quot;success&quot;, &quot;fail&quot; or &quot;error&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Response data</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Forbiden</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Optional: end-user-readable message, explaining what went wrong.</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div>`,3),l=[t];function p(c,r,i,y,F,d){return n(),a("div",null,l)}const u=s(o,[["render",p]]);export{D as __pageData,u as default};
