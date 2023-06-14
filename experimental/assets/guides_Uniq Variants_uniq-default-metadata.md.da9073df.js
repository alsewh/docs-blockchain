import{_ as a,c as s,o as n,V as e}from"./chunks/framework.281622bf.js";const u=JSON.parse('{"title":"Uniq Default Metadata","description":"","frontmatter":{"title":"Uniq Default Metadata","deploy":["staging","mainnet"],"order":-99994},"headers":[],"relativePath":"guides/Uniq Variants/uniq-default-metadata.md","lastUpdated":1686748339000}'),t={name:"guides/Uniq Variants/uniq-default-metadata.md"},o=e(`<h1 id="uniq-default-metadata" tabindex="-1">Uniq default metadata <a class="header-anchor" href="#uniq-default-metadata" aria-label="Permalink to &quot;Uniq default metadata&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Uniq default metadata is utilized whenever any token is reference that does not have a dedicated metadata URI. This can happen either intentionally if the tokens minted from the factory are identical (so there is no need for anything except default metadata) or accidentally in case due to some issue the tokens are minted without a dedicated metadata URI. In any case the default metadata functions identically to individual Uniq metadata with only exceptions that it is utilized when there is no override and the URI for this metadata is placed in the dedicated field of the factory on-chain data <code>default_token_uri</code>.</p><h2 id="supported-dynamic-values" tabindex="-1">Supported dynamic values <a class="header-anchor" href="#supported-dynamic-values" aria-label="Permalink to &quot;Supported dynamic values&quot;">​</a></h2><p>Default token URI supports special <code>dynamic</code> values that can be used to modify the URI based on different context values which are different between different tokens/factories. If none of those values are specified the the URI is considered to be <code>static</code> (meaning that it is not context dependant). Followind <code>dynamic</code> values are supported:</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>factory_id</td><td>ID of the token factory from which the token was minted</td></tr><tr><td>token_id</td><td>ID of the token</td></tr><tr><td>token_hash</td><td>Hash of the token</td></tr><tr><td>token_serial_number</td><td>Serial number of the token</td></tr></tbody></table><p>To specify a <code>dynamic</code> values within a URI you must enclose it in <code>{}</code> like so: <code>https://example.io/{token_id}.json</code> which should evaluate to <code>https://example.io/42.json</code> for the token with serial number of 42 whenever Ultra or any other integrator will be reading this default token metadata.</p><h2 id="metadata-fields" tabindex="-1">Metadata fields <a class="header-anchor" href="#metadata-fields" aria-label="Permalink to &quot;Metadata fields&quot;">​</a></h2><p>Identical to <a href="./uniq-metadata.html#metadata-fields">Uniq metadata fields</a></p><h2 id="minimalistic-example" tabindex="-1">Minimalistic example <a class="header-anchor" href="#minimalistic-example" aria-label="Permalink to &quot;Minimalistic example&quot;">​</a></h2><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">specVersion</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Uniq default variant</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">defaultLocale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en-US</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">media</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">product</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">contentType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image/png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">integrity</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SHA256</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">hash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">uris</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://example.io/default/76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">square</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">contentType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image/png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">integrity</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SHA256</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">hash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">uris</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://example.io/default/f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="json-schema" tabindex="-1">JSON schema <a class="header-anchor" href="#json-schema" aria-label="Permalink to &quot;JSON schema&quot;">​</a></h2><p>Identical to <a href="./uniq-metadata.html#json-schema">Uniq metadata schema</a></p>`,13),l=[o];function p(c,r,D,i,d,F){return n(),s("div",null,l)}const h=a(t,[["render",p]]);export{u as __pageData,h as default};
