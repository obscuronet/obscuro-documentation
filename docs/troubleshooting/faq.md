---
sidebar_position: 1
---
# FAQs

## For Developers 

### How do I access the Ten RPC Endpoint?
You will need to obtain an account-specific, unique RPC link using [Ten Hosted Gateway](https://docs.obscu.ro/docs/tools-infrastructure/hosted-gateway) and authenticate your account to access the Viewing Key and be able to use the RPC endpoints listed in the [API References](https://docs.obscu.ro/docs/api-reference/JSON-RPC-API).

Keep in mind that you will not be able to query data on accounts that have not been authenticated to a specific userID.

### How can I port my dApp from other networks to Ten? 
You need to follow the following steps:

1. Change the functions of your smart contracts according to the instructions given [here.](https://docs.obscu.ro/docs/getting-started/for-developers/explore-contracts-in-obscuro).
2. Integrate Ten Gateway into your dApp using the instructions provided [here.](https://docs.obscu.ro/docs/tools-infrastructure/gateway-widget)
3. Deploy your SCs into Ten using [compatible tools](https://docs.obscu.ro/docs/tools-infrastructure/compatible-tools) (e.g. Truffle Suite).
4. Invite your users to learn more about encryption!

### 

## For Users

### Do I have to add an account through Ten Gateway each time to use the network?
No, you just need to [add your account](https://docs.obscu.ro/docs/getting-started/for-users/setup-you-wallet) once and the RPC will be available until you revoke access. 

### How do I connect to Ten from multiple devices?
Choose your preferred and most convenient method from those listed below:

1. Use one RPC link you once received on all your devices.
2. Use a different link for each individual device, reconnecting as described above.

Ten supports using multiple VKs for each individual wallet, which means reconnecting from a different device won't make your previous connection obsolete, as long as you do not use the revoke function in Ten Gateway.

### Ten is only available in Metamask? 
No, Ten is available in any non-custodial EVM wallet that supports custom RPCs and networks, and allows you to sign transactions using the `eth_sign` function

### How do I get test tokens?
The only way to get test tokens in Ten — through the faucet on our [Discord server](https://discord.gg/tVnNrQ35Ke).

### Can I share my RPC link with other users?
You should refrain from publishing your link because if you do, it will be compromised and anyone using it will be able to access your decrypted transaction data. 

:::warning
Compromising your userID obtained from Ten Gateway will result in a breach of your data privacy. 

In case your userID has been compromised, you need to revoke it using either the OG Widget or Ten Hosted Gateway.
:::
