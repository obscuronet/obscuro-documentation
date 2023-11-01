"use strict";(self.webpackChunkobscuro_docs=self.webpackChunkobscuro_docs||[]).push([[5888],{1771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(5893),r=n(1151);const i={sidebar_position:1},o="Design",a={id:"architecture/design",title:"Design",description:"Obscuro is architected as an L2 protocol, leveraging the rollup pattern to store transaction data on the L1 chain. While most rollup implementations aim for scalability, Obscuro's primary objective is confidentiality. The rollups encapsulate the entire encrypted transaction data.",source:"@site/docs/architecture/design.md",sourceDirName:"architecture",slug:"/architecture/design",permalink:"/docs/architecture/design",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/category/architecture"},next:{title:"System Components",permalink:"/docs/architecture/system-components"}},c={},l=[{value:"L1 Network",id:"l1-network",level:2},{value:"L2 Network",id:"l2-network",level:2},{value:"Rollup Data Structure",id:"rollup-data-structure",level:2}];function d(e){const t={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"design",children:"Design"}),"\n",(0,s.jsx)(t.p,{children:"Obscuro is architected as an L2 protocol, leveraging the rollup pattern to store transaction data on the L1 chain. While most rollup implementations aim for scalability, Obscuro's primary objective is confidentiality. The rollups encapsulate the entire encrypted transaction data."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"L1-L2 Interaction",src:n(2999).Z+"",width:"2829",height:"1869"})}),"\n",(0,s.jsx)(t.h2,{id:"l1-network",children:"L1 Network"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Management Contracts"}),": On the L1 network, there are several standard Ethereum contracts, often referred to as Management Contracts. These contracts play a pivotal role in the functioning and management of the Obscuro network."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network Management"}),": This contract acts as the gatekeeper for the protocol. It manages the Secure Enclave / TEE attestation requirements, verifies attestation reports, and oversees the stake of the Aggregators."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Rollup Management"}),": This module accepts rollups submitted by L2 nodes and collaborates with the bridge to process user withdrawal requests."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Obscuro Bridge"}),": A crucial contract ensuring the security of the liquidity deposited by Ethereum end-users, mirrored in the confidential Obscuro ledger."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"l2-network",children:"L2 Network"}),"\n",(0,s.jsx)(t.p,{children:"The L2 design aims to establish a decentralized network of nodes with valid Secure Enclave / TEEs, ensuring transaction confidentiality even amidst potential Secure Enclave / TEE breaches."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"L2 Nodes"}),": There are two primary categories of nodes within the Obscuro network:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Aggregator Nodes"}),": These nodes, equipped with Secure Enclave / TEEs and the shared secret, can submit rollups to the L1. They process user transactions, roll them up, and submit them for inclusion in Ethereum blocks."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Verifier Nodes"}),": These nodes, also equipped with Secure Enclave / TEEs and the shared secret, play a significant role in consensus security. They monitor the L1 network, calculating the state based on the submitted rollups."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"rollup-data-structure",children:"Rollup Data Structure"}),"\n",(0,s.jsx)(t.p,{children:"The Management Contract implements a blockchain-like structure to store the rollups. Each rollup references a parent rollup, and multiple competing sibling rollups can exist simultaneously. It's the responsibility of individual L2 nodes to determine the validity of these siblings."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2999:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/l1-l2-interaction-c1e5b1835c5389a9beb36f7148db8d85.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);