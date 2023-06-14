import{_ as a,c as t,o as s,V as n}from"./chunks/framework.281622bf.js";const m=JSON.parse('{"title":"mgrnfts","description":"","frontmatter":{"title":"mgrnfts","order":18,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/NFT Contract/NFT Actions/mgrnfts.md","lastUpdated":1686748339000}'),o={name:"contracts/NFT Contract/NFT Actions/mgrnfts.md"},e=n(`<h1 id="mgrnfts" tabindex="-1">mgrnfts <a class="header-anchor" href="#mgrnfts" aria-label="Permalink to &quot;mgrnfts&quot;">​</a></h1><p>This action can be used to migrate tokens from v0 to v1 as continuous migration.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>Owners should be an array of token owner accounts.</p><p>The number of tokens to migrate is specified as total_no, which should not be zero.</p><p><strong>Main operations</strong></p><p>Each v0 token record in token.a table is converted to v1 token record and moved to token.b table. This process continues until total_no of tokens are migrated or it reaches the end of token.a table of the last owner account of owners.</p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th></tr></thead><tbody><tr><td>owners</td><td><code>vector&lt;name&gt;</code></td><td>array of strings</td></tr><tr><td>total_no</td><td>uint64_t</td><td>number</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio.nft.ft mgrnfts &#39;{&quot;owners&quot;: [&quot;alice&quot;, &quot;bob&quot;], &quot;total_no&quot;: 10}&#39; -p ultra.nft.ft@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">await api.transact({</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      account: &quot;eosio.nft.ft&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;mgrnfts&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      authorization: [{ actor: &quot;ultra.nft.ft&quot;, permission: &quot;active&quot; }],</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        owners: [&quot;alice&quot;, &quot;bob&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        total_no: 10</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  blocksBehind: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">  expireSeconds: 30,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div>`,13),l=[e];function r(c,p,i,d,h,u){return s(),t("div",null,l)}const f=a(o,[["render",r]]);export{m as __pageData,f as default};
