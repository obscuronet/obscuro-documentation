"use strict";(self.webpackChunkobscuro_docs=self.webpackChunkobscuro_docs||[]).push([[1203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},o="Developer Quickstart",l={unversionedId:"introduction/developer-quickstart",id:"introduction/developer-quickstart",title:"Developer Quickstart",description:"Obscuro executes bytecode in the EVM no different than Ethereum (or Arbitrum), so as a developer you can use all your existing code and tooling.",source:"@site/docs/introduction/developer-quickstart.md",sourceDirName:"introduction",slug:"/introduction/developer-quickstart",permalink:"/docs/introduction/developer-quickstart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/developer-quickstart.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Technology",permalink:"/docs/introduction/technology"},next:{title:"Getting started",permalink:"/docs/category/getting-started"}},s={},u=[{value:"Step 1: Declaring a Public Variable",id:"step-1-declaring-a-public-variable",level:2},{value:"Code:",id:"code",level:3},{value:"Explanation:",id:"explanation",level:3},{value:"Step 2: Transitioning to a Private Variable with a Getter Function",id:"step-2-transitioning-to-a-private-variable-with-a-getter-function",level:2},{value:"Code:",id:"code-1",level:3},{value:"Explanation:",id:"explanation-1",level:3},{value:"Step 3: Implementing Data Access Control",id:"step-3-implementing-data-access-control",level:2},{value:"Code:",id:"code-2",level:3},{value:"Explanation:",id:"explanation-2",level:3},{value:"Step 4: Emitting Events",id:"step-4-emitting-events",level:2},{value:"Code:",id:"code-3",level:3},{value:"Explanation:",id:"explanation-3",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developer-quickstart"},"Developer Quickstart"),(0,i.kt)("p",null,"Obscuro executes bytecode in the EVM no different than Ethereum (or Arbitrum), so as a developer you can use all your existing code and tooling."),(0,i.kt)("p",null,"The difference from Ethereum (and virtually all chains) is that private variables and the internal state of the contract while\nexecuting are hidden from everyone (which includes node operators and the sequencer)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In Obscuro, the internal node database is encrypted, and the execution itself is also encrypted inside the TEE.")),(0,i.kt)("p",null,"The calls to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.alchemy.com/reference/eth-getstorageat"},"getStorageAt")," are disabled, so all data access\nwill be performed through view functions which are under the control of the smart contract developer.\nPublic variables are accessible to everyone because Solidity automatically generates a getter function for them."),(0,i.kt)("p",null,"We'll illustrate how it works by creating a simple data storage example.\nIn this dApp, users can store a number and retrieve it later."),(0,i.kt)("h2",{id:"step-1-declaring-a-public-variable"},"Step 1: Declaring a Public Variable"),(0,i.kt)("h3",{id:"code"},"Code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract StorageExample {\n    mapping(address => uint256) public storedValues;\n\n    function storeValue(uint256 value) public {\n        storedValues[tx.origin] = value;\n    }\n}\n")),(0,i.kt)("h3",{id:"explanation"},"Explanation:"),(0,i.kt)("p",null,"In this step, we've declared a public variable ",(0,i.kt)("inlineCode",{parentName:"p"},"storedValues"),".\nSolidity automatically generates a public getter view function for it, so on both Ethereum and Obscuro, you can call\nthis view function without any restrictions."),(0,i.kt)("p",null,"We also created the function that allows users to store a value against their address."),(0,i.kt)("h2",{id:"step-2-transitioning-to-a-private-variable-with-a-getter-function"},"Step 2: Transitioning to a Private Variable with a Getter Function"),(0,i.kt)("h3",{id:"code-1"},"Code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"contract StorageExample {\n    mapping(address => uint256) private _storedValues;\n\n    function storeValue(uint256 value) public {\n        _storedValues[tx.origin] = value;\n    }\n    \n    function getValue(address account) public view returns (uint256) {\n        return _storedValues[account];\n    }\n}\n")),(0,i.kt)("h3",{id:"explanation-1"},"Explanation:"),(0,i.kt)("p",null,"We've now made our data variable private, meaning it can't be accessed directly from outside the contract.\nTo fetch its value, we've provided a custom public view function ",(0,i.kt)("inlineCode",{parentName:"p"},"getValue")," where the user provides the address."),(0,i.kt)("p",null,"On both Ethereum and Obscuro, if you call this function you will retrieve the number stored by that address."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In Ethereum, the ",(0,i.kt)("inlineCode",{parentName:"p"},"_storedValues")," variable can also be accessed directly using the ",(0,i.kt)("inlineCode",{parentName:"p"},"getStorageAt")," method, but not in Obscuro.")),(0,i.kt)("h2",{id:"step-3-implementing-data-access-control"},"Step 3: Implementing Data Access Control"),(0,i.kt)("p",null,"In this step, our aim is to restrict users to only access their own value.\nThis feature can only be implemented in Obscuro, because as mentioned above, ",(0,i.kt)("inlineCode",{parentName:"p"},"_storedValues")," is not hidden in Ethereum."),(0,i.kt)("h3",{id:"code-2"},"Code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'contract StorageExample {\n    mapping(address => uint256) private _storedValues;\n\n    function storeValue(uint256 value) public {\n        _storedValues[tx.origin] = value;\n    }\n\n    function getValue(address account) public view returns (uint256) {\n        require(tx.origin == account, "Not authorized!");\n        return _storedValues[account];\n    }\n}\n')),(0,i.kt)("h3",{id:"explanation-2"},"Explanation:"),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"getValue")," is the only function which exposes the values, we can add a check like this: ",(0,i.kt)("inlineCode",{parentName:"p"},'require(tx.origin == account, "Not authorized!");'),"\nIf anyone, other than the original account, asks for the value, they will get an error."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In Ethereum, since all data is accessible anyway, there is no need to sign calls to view functions, so ",(0,i.kt)("inlineCode",{parentName:"p"},"tx.origin")," can be spoofed.")),(0,i.kt)("p",null,"In Obscuro, the platform ensures that calls to view functions are authenticated. Which means that behind the scenes,\nthere is a signature of the ",(0,i.kt)("inlineCode",{parentName:"p"},"tx.origin")," address. "),(0,i.kt)("h2",{id:"step-4-emitting-events"},"Step 4: Emitting Events"),(0,i.kt)("p",null,"Events in Ethereum are crucial for UIs to react to smart contract state changes.\nIn this step we'll emit an event when a user stores a value, and also, to show how popular our contract is,\nwe'll emit an event when certain milestones are reached."),(0,i.kt)("h3",{id:"code-3"},"Code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'contract StorageExample {\n    mapping(address => uint256) private _storedValues;\n    uint256 private totalCalls = 0;\n\n    event DataChanged(address indexed account, uint256 newValue);\n    event MilestoneReached(uint256 noStoredValues);\n\n    function storeValue(uint256 value) public {\n        _storedValues[tx.origin] = value;\n        emit DataChanged(tx.origin, _data);\n        totalCalls++;\n        if (totalCalls % 1000 == 0) {\n            emit MilestoneReached(totalCalls);\n        }\n    }\n\n    function getValue(address account) public view returns (uint256) {\n        require(tx.origin == account, "Not authorized!");\n        return _storedValues[account];\n    }\n}\n\n')),(0,i.kt)("h3",{id:"explanation-3"},"Explanation:"),(0,i.kt)("p",null,"On Ethereum, events are visible to anyone. For example, you can subscribe to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataChanged")," event, and receive notifications\nin real-time about the data of everyone else."),(0,i.kt)("p",null,"In Obscuro, we wanted to do better than that."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"DataChanged")," event is specific to an account, so it should only be received by that user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MilestoneReached"),", on the other hand, is intended for everyone, as we want to show how popular our contract is.")),(0,i.kt)("p",null,"The behaviour you desire is to restrict the visibility of ",(0,i.kt)("inlineCode",{parentName:"p"},"DataChanged"),", but not that of ",(0,i.kt)("inlineCode",{parentName:"p"},"MilestoneReached"),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," This is exactly how it works by default! ")),(0,i.kt)("p",null,"How it works:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DataChanged")," - has an address as a topic (an indexed field), which makes it relevant to that address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MilestoneReached")," - has no address topic, so it is visible to everyone.")),(0,i.kt)("p",null,"All you have to do is emit events as usual, and the platform applies common sense visibility rules."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Migrate your dApp to Obscuro today and experience enhanced encryption and privacy without compromising on the Ethereum experience."),(0,i.kt)("p",null,"Please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/for-developers/setup-dev-env#1-wallet-setup--configuration"},"setup page"),"."))}p.isMDXComponent=!0}}]);