"use strict";(self.webpackChunkobscuro_docs=self.webpackChunkobscuro_docs||[]).push([[2488],{7248:(e,s,c)=>{c.r(s),c.d(s,{default:()=>o});var t=c(7294),n=c(5893);const o=function(){const[e,s]=(0,t.useState)([]);return(0,t.useEffect)((()=>{fetch("https://api.github.com/repos/ten-protocol/go-ten/releases").then((e=>e.json())).then((e=>s(e)))}),[]),(0,n.jsx)("section",{className:"release-notes",children:e.map((e=>(0,n.jsxs)("article",{className:"release",children:[(0,n.jsx)("h3",{children:e.name}),(0,n.jsx)("ul",{children:e.body.split("\n").map(((e,s)=>(0,n.jsx)("li",{children:e},s)))})]},e.id)))})}}}]);