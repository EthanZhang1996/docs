(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),c=r(7),a=(r(0),r(98)),o={id:"audit",title:"\u5408\u7ea6\u5ba1\u8ba1",sidebar_label:"\u5408\u7ea6\u5ba1\u8ba1"},i={unversionedId:"audit",id:"audit",isDocsHomePage:!1,title:"\u5408\u7ea6\u5ba1\u8ba1",description:"DODO V2 \u667a\u80fd\u5408\u7ea6\u5df2\u7ecf\u901a\u8fc7\u4e86 PeckShield \u7684\u5ba1\u8ba1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/audit.md",slug:"/audit",permalink:"/docs/zh/docs/audit",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/audit.md",version:"current",sidebar_label:"\u5408\u7ea6\u5ba1\u8ba1",sidebar:"someSidebar",previous:{title:"\u6f0f\u6d1e\u53cd\u9988\u5956\u52b1 \ud83d\udcb0",permalink:"/docs/zh/docs/bugBounty"},next:{title:"DODO Trade API",permalink:"/docs/zh/docs/tradeApi"}},p=[],u={toc:p};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"DODO V2 \u667a\u80fd\u5408\u7ea6\u5df2\u7ecf\u901a\u8fc7\u4e86 ",Object(a.b)("a",{parentName:"p",href:"https://peckshield.cn/zh"},"PeckShield")," \u7684\u5ba1\u8ba1\u3002 "),Object(a.b)("p",null,"PeckShield\u300c\u6d3e\u76fe\u300d \u4f5c\u4e3a\u65e9\u671f\u4e13\u6ce8\u4e8e\u533a\u5757\u94fe\u751f\u6001\u7684\u5934\u90e8\u5b89\u5168\u516c\u53f8\uff0c\u57fa\u4e8e\u5b89\u5168\u56e2\u961f\u4e8c\u5341\u5e74\u6765\u5728\u4ee3\u7801\u5206\u6790\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001 \u2f24\u6570\u636e\u7b49\u5b89\u5168\u4e1a\u52a1\u9886\u57df\u7684\u79ef\u7d2f\uff0c\u63d0\u51fa\u4e86\u4e00\u6574\u5957\u6e17\u900f\u6d4b\u8bd5\u3001\u4ee3\u7801\u5ba1\u8ba1\u3001\u5e94\u6025\u54cd\u5e94\u3001\u94fe\u4e0a\u6570\u636e\u76d1\u6d4b\uff0c AML \u53cd\u6d17\u94b1\u7b49\u5b89\u5168\u4e0e\u6570\u636e\u7efc\u5408\u89e3\u51b3\u65b9\u6848\uff0c\u4e1a\u52a1\u8986\u76d6\u533a\u5757\u94fe\u751f\u6001\u5b89\u5168\u7684\u5404\u4e2a\u73af\u8282\u3002 PeckShield \u56e2\u961f\u56e0\u591a\u4e2a\u5173\u952e\u5b89\u5168\u6f0f\u6d1e\u53d1\u73b0\u800c\u5e7f\u53d7\u4e1a\u5185\u5173\u6ce8\uff0c\u88ab etherscan.io \u7eb3\u5165\u667a\u80fd\u5408\u7ea6\u5b89\u5168\u5ba1\u8ba1\u63a8\u8350\u540d\u5355\uff0c\u540c\u65f6\u8dfb\u8eab\u300c\u4ee5\u592a\u574a\u8d4f\u91d1\u730e\u4eba\u300d\u5168\u7403\u6392\u540d Top 3\u3002"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/DODOEX/contractV2/blob/main/audit/PeckShield-Audit-DODOV2-v1.0.pdf"},"\u70b9\u51fb\u67e5\u770b")," PeckShield \u4e8e 2020 \u5e74 12 \u6708 17 \u65e5\u51fa\u5177\u7684\u5ba1\u8ba1\u62a5\u544a\u3002"),Object(a.b)("hr",null),Object(a.b)("p",null,"DODO V2 \u4e2d\u7684contracts/CrowdPooling, contracts/DODOVendingMachine \u667a\u80fd\u5408\u7ea6\u901a\u8fc7\u4e86 ",Object(a.b)("a",{parentName:"p",href:"https://www.lianantech.com/#/"},"Beosin")," \u7684\u5ba1\u8ba1\u3002"),Object(a.b)("p",null,"\u5168\u7403\u9996\u6279\u5c06\u5f62\u5f0f\u5316\u9a8c\u8bc1\u6280\u672f\u5e94\u7528\u5230\u533a\u5757\u94fe\u5b89\u5168\u9886\u57df\u7684\u56e2\u961f,\u63d0\u4f9b\u5b89\u5168\u54a8\u8be2\u3001\u5b89\u5168\u5ba1\u8ba1\uff08\u667a\u80fd\u5408\u7ea6\u3001\u94fe\u5e73\u53f0\u3001\u6570\u5b57\u91d1\u878d\u4f01\u4e1a\u3001\u533a\u5757\u94fe\u5e94\u7528\u7cfb\u7edf\u3001DApp\u7b49\uff09\u3001\u5a01\u80c1\u60c5\u62a5\u3001\u5b89\u5168\u9632\u62a4\u3001\u8d44\u91d1\u6eaf\u6e90\u8ffd\u8e2a\u3001\u53cd\u6d17\u94b1\u7b49\u5168\u65b9\u4f4d\u7684\u533a\u5757\u94fe\u5b89\u5168\u670d\u52a1\u548c\u5b89\u5168\u4ea7\u54c1\u3002"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/DODOEX/contractV2/blob/main/audit/Smart%20contract%20security%20audit%20report-DODO.pdf"},"\u70b9\u51fb\u67e5\u770b"),"  Beosin \u4e8e 2021\u5e74 3 \u6708 16 \u65e5\u51fa\u5177\u7684\u5ba1\u8ba1\u62a5\u544a\u3002"),Object(a.b)("hr",null),Object(a.b)("p",null,"vDODO \u5408\u7ea6\u901a\u8fc7\u4e86 ",Object(a.b)("a",{parentName:"p",href:"https://www.trailofbits.com/"},"Credit")," \u7684\u5ba1\u8ba1\u3002"),Object(a.b)("p",null,"CertiK\u662f\u4e16\u754c\u9886\u5148\u7684\u533a\u5757\u94fe\u7f51\u7edc\u5b89\u5168\u516c\u53f8\uff0c\u5229\u7528\u5148\u8fdb\u7684\u5f62\u5f0f\u5316\u9a8c\u8bc1\u6280\u672f\uff0c\u7528\u6570\u5b66\u65b9\u6cd5\u8bc1\u660e\u667a\u80fd\u5408\u7ea6\u548c\u533a\u5757\u94fe\u751f\u6001\u7cfb\u7edf\u5b89\u5168\u65e0\u6f0f\u6d1e\u5e76\u53ef\u62b5\u5fa1\u9ed1\u5ba2\u5165\u4fb5\u3002"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/DODOEX/contractV2/blob/main/audit/vDODO-final-report.pdf"},"\u70b9\u51fb\u67e5\u770b"),". CertiK \u4e8e 2021 \u5e74 2 \u6708 18 \u65e5\u51fa\u5177\u7684\u5ba1\u8ba1\u62a5\u544a\u3002"))}l.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(r),s=n,O=b["".concat(o,".").concat(s)]||b[s]||d[s]||a;return r?c.a.createElement(O,i(i({ref:t},u),{},{components:r})):c.a.createElement(O,i({ref:t},u))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);