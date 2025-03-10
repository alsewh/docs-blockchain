---
title: 'fhglobalshr'
order: 35
deploy: ['experimental', 'staging', 'mainnet']
---

# fhglobalshr

Ultra configures the protocol fee for first hand token purchases

## Technical Behavior

The required authorization is the `ultra.nft.ft` account

`share` must not exceed the value specified in the `saleshrlmcfg` table under a scope of `0` (if it exists) or 1000 (10%) otherwise

`receiver` must be an existing account if a value is provided. If no value is provided the global share receiver account will remain unchanged

## Action Parameters

| Property Name | C++ Type                    | Javascript Type | Example     |
| ------------- | --------------------------- | --------------- | ----------- |
| share         | uint16_t                    | number          | 200         |
| receiver      | std::optional\<eosio::name> | string          | ultra.prtcl |

## CLI - cleos

cleos push action eosio.nft.ft fhglobalshr '[200, "ultra.prtcl"]' -p ultra.nft.ft

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'fhglobalshr',
                authorization: [{ actor: 'ultra.nft.ft', permission: 'active' }],
                data: {
                    share: 200,
                    receiver: "ultra.prtcl"
                },
            },
        ],
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
