import{_ as s,v as a,b as n,R as o}from"./chunks/framework.99ac92c4.js";const D=JSON.parse('{"title":"Factory Purchase Options Examples","description":"","frontmatter":{"title":"Factory Purchase Options Examples","deploy":["staging","mainnet"],"order":2},"headers":[],"relativePath":"guides/Uniq Factory Management/factory-purchase-options-examples.md","filePath":"guides/Uniq Factory Management/factory-purchase-options-examples.md","lastUpdated":null}'),l={name:"guides/Uniq Factory Management/factory-purchase-options-examples.md"},p=o(`<h1 id="factory-purchase-options-examples" tabindex="-1">Factory Purchase Options Examples <a class="header-anchor" href="#factory-purchase-options-examples" aria-label="Permalink to &quot;Factory Purchase Options Examples&quot;">​</a></h1><p>Here, we provide some example <code>cleos</code> commands to set purchase options and to purchase using created options. JSON data from provided <code>cleos</code> commands can be copied and utilized as a payload for the transaction for your API library of choice.</p><ul><li><a href="./../../contracts/NFT Contract/NFT Actions/setprchsreq.a.html">setprchsreq.a - set purchase requirement</a></li><li><a href="./../../contracts/NFT Contract/NFT Actions/purchase.a.html">purchase.a - purchase a token</a></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Please keep in mind that the factory IDs, token IDs, user group IDs, and account names used throughout this page are not real and must be replaced with the actual data you are interested in.</p></div><h2 id="simple-uos-usd-pricing" tabindex="-1">Simple UOS/USD pricing <a class="header-anchor" href="#simple-uos-usd-pricing" aria-label="Permalink to &quot;Simple UOS/USD pricing&quot;">​</a></h2><p>This example utilizes the <code>price</code> field to set the price to 50 UOS</p><details class="details custom-block"><summary>setprchsreq.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setprchsreq.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;price&quot;: &quot;50.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_limit&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_basis_point&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_option_with_uniqs&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;sale_shares&quot;: [],</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;group_restriction&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">factory.manager</span></span></code></pre></div></details><p>To be able to purchase from such factory you utilize <code>purchase.a</code> action</p><details class="details custom-block"><summary>purchase.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">purchase.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;max_price&quot;: &quot;100.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;buyer&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;receiver&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_id&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;user_uniqs&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alice</span></span></code></pre></div></details><p>This example utilizes the <code>price</code> field to set the price to 5 USD</p><details class="details custom-block"><summary>setprchsreq.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setprchsreq.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 1,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;price&quot;: &quot;5.00000000 USD&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_limit&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_basis_point&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_option_with_uniqs&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;sale_shares&quot;: [],</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;group_restriction&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">factory.manager</span></span></code></pre></div></details><p>When purchasing using the option that has USD pricing you still provide <code>max_price</code> in UOS. The conversion from the USD price into appropriate UOS price will be done automatically.</p><details class="details custom-block"><summary>purchase.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">purchase.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 1,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;max_price&quot;: &quot;100.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;buyer&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;receiver&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_id&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;user_uniqs&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alice</span></span></code></pre></div></details><h2 id="limited-purchase-quantity" tabindex="-1">Limited purchase quantity <a class="header-anchor" href="#limited-purchase-quantity" aria-label="Permalink to &quot;Limited purchase quantity&quot;">​</a></h2><p>Setting <code>purchase_limit</code> is optional, and it allows to restrict the total number of tokens that can be purchased using this option. The limit applies to the single option itself and not the accounts that purchase from your factory. So if you set the <code>purchase_limit</code> to 10 it means that one account can purchase 10 tokens or five accounts can purchase 2 tokens or ten accounts can purchase 1 token and anything in between.</p><p>After exceeding the <code>purchase_limit</code>, no one will be able to use this specific purchase option and you either need to create a new purchase option or update an existing one to increase the <code>purchase_limit</code> (history for the number of Uniqs purchased is preserved).</p><details class="details custom-block"><summary>setprchsreq.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setprchsreq.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;price&quot;: &quot;50.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_limit&quot;: 10,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_basis_point&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_option_with_uniqs&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;sale_shares&quot;: [],</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;group_restriction&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">factory.manager</span></span></code></pre></div></details><h2 id="exclusive-access-to-purchase-option-via-uniq-ownership" tabindex="-1">Exclusive access to purchase option via Uniq ownership <a class="header-anchor" href="#exclusive-access-to-purchase-option-via-uniq-ownership" aria-label="Permalink to &quot;Exclusive access to purchase option via Uniq ownership&quot;">​</a></h2><p><code>purchase_option_with_uniqs</code> is a more advanced use case where you are able to link the purchase option to other factories. The example below requires the user to own 1 Uniq from factory with ID 42. If the user owns it then he will be able to use this purchase option, the token from factory 42 will be left untouched. Note how <code>strategy</code> is set to 0 (<a href="./../../contracts/NFT Contract/NFT Actions/purchase.a.html#supplying-uniqs-for-purchases">0 means &quot;check&quot;</a>).</p><details class="details custom-block"><summary>setprchsreq.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setprchsreq.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;price&quot;: &quot;50.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_limit&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_basis_point&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_option_with_uniqs&quot;: {</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;transfer_tokens_receiver_account&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;factories&quot;: [{</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;token_factory_id&quot;: 42,</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;count&quot;: 1,</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;strategy&quot;: 0</span></span>
<span class="line"><span style="color:#C3E88D;">        }]</span></span>
<span class="line"><span style="color:#C3E88D;">    },</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;sale_shares&quot;: [],</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;group_restriction&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">factory.manager</span></span></code></pre></div></details><p>When purchasing, the transaction needs to specify which token exactly the user shows as a proof of satisfying condition of ownership for the token from factory 42. In this case, assume token 77 was minted from factory 42.</p><details class="details custom-block"><summary>purchase.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">purchase.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;max_price&quot;: &quot;100.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;buyer&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;receiver&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_id&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;user_uniqs&quot;: {</span></span>
<span class="line"><span style="color:#C3E88D;">      &quot;tokens&quot;: [{</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;token_id&quot;: 77,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;strategy&quot;: 0</span></span>
<span class="line"><span style="color:#C3E88D;">      }]</span></span>
<span class="line"><span style="color:#C3E88D;">    },</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alice</span></span></code></pre></div></details><h2 id="exclusive-access-to-purchase-option-via-user-groups" tabindex="-1">Exclusive access to purchase option via user groups <a class="header-anchor" href="#exclusive-access-to-purchase-option-via-user-groups" aria-label="Permalink to &quot;Exclusive access to purchase option via user groups&quot;">​</a></h2><p>Alternative condition for allowing direct purchases from the factory can be the usage of user groups (<a href="./../../contracts/User Group Contract/overview.html">covered here</a>). In this case user must belong to certain group(s) or not be a part of a specific group(s).</p><p>Example below covers the simplest case where a user must belong to the user groups with IDs 11 and 12 at the same time. For more advanced usage, reference the action documentation: <a href="./../../contracts/NFT Contract/NFT Actions/setprchsreq.a.html#example-usage-of-the-parameter-group-restriction">setprchsreq.a user groups support</a></p><details class="details custom-block"><summary>setprchsreq.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setprchsreq.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;price&quot;: &quot;50.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_limit&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_basis_point&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_option_with_uniqs&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;sale_shares&quot;: [],</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;group_restriction&quot;: [11, 12],</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">factory.manager</span></span></code></pre></div></details><p>When purchasing no extra input is required from the user, the verification of group&#39;s membership will be verified by the smart contract automatically</p><details class="details custom-block"><summary>purchase.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">purchase.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;max_price&quot;: &quot;100.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;buyer&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;receiver&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_id&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;user_uniqs&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alice</span></span></code></pre></div></details><h2 id="using-purchase-option-for-swapping" tabindex="-1">Using purchase option for swapping <a class="header-anchor" href="#using-purchase-option-for-swapping" aria-label="Permalink to &quot;Using purchase option for swapping&quot;">​</a></h2><p>&quot;Swapping&quot; in this case implies the process where the user loses ownership of his Uniq, the Uniq gets destroyed in the process and the user gets a new Uniq from the factory instead. The example below requires the user to give up two Uniqs: one from factory 43 and one from factory 44, no additional UOS payment needed. Note how <code>strategy</code> is set to 1 (<a href="./../../contracts/NFT Contract/NFT Actions/purchase.a.html#supplying-uniqs-for-purchases">1 means &quot;burn&quot;</a>).</p><details class="details custom-block"><summary>setprchsreq.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setprchsreq.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;price&quot;: &quot;0.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_limit&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_basis_point&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_option_with_uniqs&quot;: {</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;transfer_tokens_receiver_account&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;factories&quot;: [{</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;token_factory_id&quot;: 43,</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;count&quot;: 1,</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;strategy&quot;: 1</span></span>
<span class="line"><span style="color:#C3E88D;">        },{</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;token_factory_id&quot;: 44,</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;count&quot;: 1,</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;strategy&quot;: 1</span></span>
<span class="line"><span style="color:#C3E88D;">        }]</span></span>
<span class="line"><span style="color:#C3E88D;">    },</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;sale_shares&quot;: [],</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;group_restriction&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">factory.manager</span></span></code></pre></div></details><p>Purchasing from such a purchase option requires the user to specify which Uniqs the user is willing to be given up. Here, assumes token 123 is from factory 43 and token 124 is from factory 44. Note how the <code>strategy</code> matches the value of the purchase option.</p><details class="details custom-block"><summary>purchase.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">purchase.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;max_price&quot;: &quot;0.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;buyer&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;receiver&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_id&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;user_uniqs&quot;: {</span></span>
<span class="line"><span style="color:#C3E88D;">      &quot;tokens&quot;: [{</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;token_id&quot;: 123,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;strategy&quot;: 1</span></span>
<span class="line"><span style="color:#C3E88D;">      },{</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;token_id&quot;: 124,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;strategy&quot;: 1</span></span>
<span class="line"><span style="color:#C3E88D;">      }]</span></span>
<span class="line"><span style="color:#C3E88D;">    },</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alice</span></span></code></pre></div></details><h2 id="using-purchase-option-for-exchange" tabindex="-1">Using purchase option for exchange <a class="header-anchor" href="#using-purchase-option-for-exchange" aria-label="Permalink to &quot;Using purchase option for exchange&quot;">​</a></h2><p>Exchanging a Uniq is similar to swapping it but this time instead of a user losing access to his Uniq and burning a Uniq it will simply be transferred to a dedicated account. This may be useful in case Uniqs have valuable metadata attached to them, and you will later utilize those Uniqs in some other scenario. The example below configures the receiver of transferred Uniqs as <code>1aa2aa3aa4aa</code> account, and it also must be a Uniq from factory 45 to be able to use this purchase option. Specifying <code>transfer_tokens_receiver_account</code> is mandatory in such scenario. Note how <code>strategy</code> is set to 2 (<a href="./../../contracts/NFT Contract/NFT Actions/purchase.a.html#supplying-uniqs-for-purchases">2 means &quot;transfer&quot;</a>).</p><details class="details custom-block"><summary>setprchsreq.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setprchsreq.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;price&quot;: &quot;0.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_limit&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_basis_point&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_option_with_uniqs&quot;: {</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;transfer_tokens_receiver_account&quot;: &quot;1aa2aa3aa4aa&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;factories&quot;: [{</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;token_factory_id&quot;: 45,</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;count&quot;: 1,</span></span>
<span class="line"><span style="color:#C3E88D;">            &quot;strategy&quot;: 2</span></span>
<span class="line"><span style="color:#C3E88D;">        }]</span></span>
<span class="line"><span style="color:#C3E88D;">    },</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;sale_shares&quot;: [],</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;group_restriction&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;purchase_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">factory.manager</span></span></code></pre></div></details><p>Purchasing using the above option is similar to previous examples. User needs to specify which Uniq will be used during the purchase and this Uniq will be transferred to <code>1aa2aa3aa4aa</code> at the end. The <code>strategy</code>, again, should match the <code>strategy</code> specified in the purchase option itself.</p><details class="details custom-block"><summary>purchase.a</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">purchase.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">  {</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;index&quot;: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;max_price&quot;: &quot;0.00000000 UOS&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;buyer&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;receiver&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;promoter_id&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;user_uniqs&quot;: {</span></span>
<span class="line"><span style="color:#C3E88D;">      &quot;tokens&quot;: [{</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;token_id&quot;: 125,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;strategy&quot;: 2</span></span>
<span class="line"><span style="color:#C3E88D;">      }]</span></span>
<span class="line"><span style="color:#C3E88D;">    },</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alice</span></span></code></pre></div></details>`,38),e=[p];function t(c,r,i,u,y,C){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{D as __pageData,h as default};
