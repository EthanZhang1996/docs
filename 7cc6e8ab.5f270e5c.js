(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{124:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(2),o=(t(0),t(145));const a={id:"framework",title:"Smart Contract Framework",sidebar_label:"Framework"},c={id:"framework",isDocsHomePage:!1,title:"Smart Contract Framework",description:"Overview",source:"@site/docs/contractFramework.md",permalink:"/docs/docs/framework",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/contractFramework.md",sidebar_label:"Framework",sidebar:"someSidebar",previous:{title:"Core Concept",permalink:"/docs/docs/coreConcept"},next:{title:"Use Guide",permalink:"/docs/docs/contractUseGuide"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Core",id:"core",children:[]},{value:"Entrance",id:"entrance",children:[]},{value:"Helper",id:"helper",children:[]}],l={rightToc:i};function p({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"DODOEX \u7684\u80cc\u540e\u662f\u4e00\u6574\u5957\u667a\u80fd\u5408\u7ea6\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u8fd9\u5957\u5408\u7ea6\u7684 framework"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"./../static/img/dodo_framework.jpeg",alt:null}))),Object(o.b)("h2",{id:"core"},"Core"),Object(o.b)("p",null,"\u6bcf\u4e00\u4e2a\u4ea4\u6613\u5bf9\u90fd\u5bf9\u5e94\u4e00\u4e2a\u72ec\u7acb\u7684 DODO Proxy \u5408\u7ea6\u3002\u8fd9\u4e00\u5408\u7ea6\u662f\u900f\u660e\u4ee3\u7406\uff0c\u53ea\u8d1f\u8d23\u5b58\u50a8\u72b6\u6001\uff0c\u6240\u6709\u903b\u8f91\u90fd\u6307\u5411 DODO implementation. \u6240\u6709\u7684 DODO Proxy \u548c DODO implementation \u5305\u542b\u4e86 DODO \u7684\u5168\u90e8\u6570\u636e\u4e0e\u903b\u8f91\uff0c\u662f Core"),Object(o.b)("h2",{id:"entrance"},"Entrance"),Object(o.b)("p",null,"DODO \u7684\u5408\u7ea6\u662f\u5f00\u6e90\u7684\uff0c\u6211\u4eec\u4e0d\u53cd\u5bf9\u4efb\u4f55\u4eba fork \u5408\u7ea6\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cDODO \u7684\u8fd0\u884c\u9ad8\u5ea6\u4f9d\u8d56\u4f9d\u8d56 Oracle \u548c\u53c2\u6570\u8bbe\u7f6e\uff0c\u800c\u4e00\u4e2a fork \u540e\u4f7f\u7528\u4e0d\u5f53\u7684 DODO \u4f1a\u7ed9\u7528\u6237\u5e26\u6765\u6781\u5927\u635f\u5931\u3002\u56e0\u6b64\u6211\u4eec\u90e8\u7f72\u4e86\u4e00\u4e2a\u5165\u53e3\u5408\u7ea6\uff0c\u5728\u8fd9\u4e2a\u5408\u7ea6\u91cc\u6ce8\u518c\u7684 DODO \u90fd\u662f\u7ecf\u8fc7\u4e25\u683c\u68c0\u67e5\u540e\uff0c\u56e2\u961f\u8ba4\u4e3a\u53ef\u4ee5\u4ea4\u4ed8\u7528\u6237\u7684 DODO \u5408\u7ea6\u3002\u5bf9\u4e8e\u7528\u6237\u6216\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u8ba4\u51c6 DODO Zoo \u8fd9\u4e2a\u552f\u4e00\u7684\u5165\u53e3\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u5373\u4f7f DODO implementation \u5347\u7ea7\uff0cDODO Zoo \u4e5f\u4e0d\u4f1a\u53d8\u3002"),Object(o.b)("h2",{id:"helper"},"Helper"),Object(o.b)("p",null,"\u6709\u5f88\u591a\u7e41\u7410\u7684\u5de5\u4f5c\u53ef\u4ee5\u4f7f\u7528\u5408\u7ea6\u6253\u5305\uff0c\u4f7f\u5176\u53d8\u5f97\u6613\u7528\u4e14\u65b9\u4fbf\u7406\u89e3\u3002\u4f8b\u5982\u4e0a\u56fe\u5c55\u793a\u7684 ETH Proxy\uff0c\u5e2e\u52a9\u7528\u6237\u8f6c\u6362 ETH \u548c WETH \u5e76\u548c DODO \u4ea4\u4e92\u3002\u8fd9\u6837\u7528\u6237\u5c31\u4e0d\u9700\u8981\u7406\u89e3 WETH \u7684\u5de5\u4f5c\u539f\u7406\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 DODOEX \u4e70\u5356 ETH\u3002\u8fd9\u6837\u7684\u5408\u7ea6\u8fd8\u6709\u5f88\u591a\uff0c\u6bd4\u5982\u5957\u5229\uff0croute\uff0c\u6211\u4eec\u5c06\u5176\u7edf\u79f0\u4e3a Helper\u3002\u6211\u4eec\u671f\u5f85\u793e\u533a\u53ef\u4ee5\u5f00\u53d1\u51fa\u5404\u79cd\u5404\u6837\u7684 helper \u5408\u7ea6\uff0c\u5e76\u613f\u610f\u63d0\u4f9b\u6700\u5927\u53ef\u80fd\u7684\u5e2e\u52a9\u3002"))}p.isMDXComponent=!0},145:function(e,r,t){"use strict";t.d(r,"a",(function(){return O})),t.d(r,"b",(function(){return s}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},O=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),O=u(t),m=n,s=O["".concat(c,".").concat(m)]||O[m]||d[m]||a;return t?o.a.createElement(s,i(i({ref:r},p),{},{components:t})):o.a.createElement(s,i({ref:r},p))}));function s(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);