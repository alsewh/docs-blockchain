import{_ as e,c as t,o,V as a}from"./chunks/framework.965d1348.js";const b=JSON.parse('{"title":"Token Contract Overview","description":"","frontmatter":{"title":"Token Contract Overview","order":-99,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/Token Contract/overview.md","lastUpdated":null}'),n={name:"contracts/Token Contract/overview.md"},r=a('<h1 id="token-contract" tabindex="-1">Token Contract <a class="header-anchor" href="#token-contract" aria-label="Permalink to &quot;Token Contract&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p><code>eosio.token</code> contract defines the tables and actions that allow users to create, issue and manage tokens on EOSIO based blockchains.</p><p>For Ultra, core token <code>UOS</code> are issued under account <code>eosio.token</code> using this contract.</p><h2 id="contract-features" tabindex="-1">Contract features <a class="header-anchor" href="#contract-features" aria-label="Permalink to &quot;Contract features&quot;">​</a></h2><h3 id="_1-create-and-issue-token" tabindex="-1">1 - Create and Issue token <a class="header-anchor" href="#_1-create-and-issue-token" aria-label="Permalink to &quot;1 - Create and Issue token&quot;">​</a></h3><ul><li>Only the contract owner, or the account owner where the contract is deployed, can create or issue tokens with this contract.</li><li>When creating a new token, you must define the maximum supply as well as the token symbol.</li><li>Once created, issuer can issue any amount to himself, however the amount of issued tokens cannot exceed maximum supply. Token balance will be opened for the issuer if it does not exist and <code>eosio.token</code> will pay for that RAM usage.</li></ul><h3 id="_2-send-and-receive-token" tabindex="-1">2 - Send and Receive token <a class="header-anchor" href="#_2-send-and-receive-token" aria-label="Permalink to &quot;2 - Send and Receive token&quot;">​</a></h3><ul><li>Users can receive tokens from the account, if the user doesn&#39;t have token balance, it will be opened once transfer action from sender is successful. By default, <code>eosio.token</code> will pay the RAM usage for opening a new token balance.</li><li>To transfer, you will be required to have some tokens and a target account, not your account, which you want to transfer tokens to. Your transferred tokens need to not exceed the amount of tokens you currently hold.</li></ul><h3 id="_3-retire-token-and-close-account-balance" tabindex="-1">3 - Retire token and close account balance <a class="header-anchor" href="#_3-retire-token-and-close-account-balance" aria-label="Permalink to &quot;3 - Retire token and close account balance&quot;">​</a></h3><ul><li>If you are a token issuer, you can retire any amount of tokens you already issued from your available supply.</li><li>For other users, once you open a token balance, you can close the balance as long as you have zero tokens in your account.</li></ul><h3 id="_4-system-token-uos" tabindex="-1">4 - System token UOS <a class="header-anchor" href="#_4-system-token-uos" aria-label="Permalink to &quot;4 - System token UOS&quot;">​</a></h3><ul><li>UOS is the Ultra system token, it was created through the boot-up process during our network&#39;s genesis.</li><li>1 Billion Ultra UOS were issued at genesis to support swapping with ERC20 UOS and we will use inflation to pay Block Producers.</li><li>The UOS token is used to transfer value in the network, and as a way to gain access to required network resources like RAM or POWER.</li></ul><h3 id="_5-other-fungible-token" tabindex="-1">5 - Other Fungible Token <a class="header-anchor" href="#_5-other-fungible-token" aria-label="Permalink to &quot;5 - Other Fungible Token&quot;">​</a></h3><ul><li>We currently accept request for creating new Fungible Token on out Public Testnet. Please follow this <a href="./../../guides/Ultra Specific/request-fungible-token.html">guide</a>.</li></ul>',15),s=[r];function i(c,l,u,d,h,k){return o(),t("div",null,s)}const m=e(n,[["render",i]]);export{b as __pageData,m as default};
