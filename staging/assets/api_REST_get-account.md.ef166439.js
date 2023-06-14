import{_ as a,c as n,I as o,V as l,o as p,J as t}from"./chunks/framework.dfdac305.js";const C=JSON.parse('{"title":"/get_account","description":"","frontmatter":{"title":"/get_account","deploy":["staging","mainnet"]},"headers":[],"relativePath":"api/REST/get-account.md","lastUpdated":null}'),e={name:"api/REST/get-account.md"},c=l(`<h1 id="post-get-account" tabindex="-1">POST - /get_account <a class="header-anchor" href="#post-get-account" aria-label="Permalink to &quot;POST - /get_account&quot;">​</a></h1><p>Returns account information for a given blockchain account name.</p><p><strong>Highlights</strong></p><ul><li>core_liquid_balance - Amount of UOS Available</li><li>RAM available</li><li>Permission list</li></ul><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h3><p>Account name should be <code>., 1-5, a-z</code> and up to 12 characters long.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">account_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ultra</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -X POST -d &#39;{ &quot;account_name&quot;: &quot;ultra&quot; }&#39;  https://api.ultra.eossweden.org/v1/chain/get_account</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><details class="details custom-block"><summary>Response</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">account_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ultra</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">head_block_num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">61670882</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">head_block_time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2022-06-10T20:32:04.500</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">privileged</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">last_code_update</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2021-11-09T11:58:35.500</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">created</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2021-06-18T07:07:07.000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">core_liquid_balance</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.01100000 UOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ram_quota</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">net_weight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cpu_weight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">net_limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">used</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">available</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">max</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cpu_limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">used</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">available</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">max</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ram_usage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">2301250</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">permissions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">perm_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">parent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">owner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">required_auth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">threshold</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">keys</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">accounts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eosio.prods</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">				]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">waits</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">perm_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">owner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">parent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">required_auth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">threshold</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">keys</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">accounts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eosio.prods</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">				]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">waits</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">total_resources</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">self_delegated_bandwidth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">refund_request</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></details><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2>`,12);function F(r,D,y,u,i,q){const s=t("DemoApi");return p(),n("div",null,[c,o(s,{type:"POST",query:"/v1/chain/get_account",body:[{key:"account_name",value:"ultra"}]})])}const _=a(e,[["render",F]]);export{C as __pageData,_ as default};
