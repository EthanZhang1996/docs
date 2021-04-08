(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(98)),b={id:"tradeApi",title:"DODO Trade API",sidebar_label:"DODO Trade API"},l={unversionedId:"tradeApi",id:"tradeApi",isDocsHomePage:!1,title:"DODO Trade API",description:"URL",source:"@site/docs/tradeApi.md",slug:"/tradeApi",permalink:"/docs/docs/tradeApi",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/tradeApi.md",version:"current",sidebar_label:"DODO Trade API",sidebar:"someSidebar",previous:{title:"Audit",permalink:"/docs/docs/audit"},next:{title:"DODOnomics V2",permalink:"/docs/docs/dodonomics"}},i=[{value:"URL",id:"url",children:[]},{value:"Request",id:"request",children:[{value:"method",id:"method",children:[]},{value:"request params",id:"request-params",children:[]}]},{value:"Response",id:"response",children:[{value:"JSON Example",id:"json-example",children:[]},{value:"Response params",id:"response-params",children:[]}]}],c={toc:i};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"url"},"URL"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://dodo-route.dodoex.io/dodoapi/getdodoroute"},"https://dodo-route.dodoex.io/dodoapi/getdodoroute")),Object(o.b)("h2",{id:"request"},"Request"),Object(o.b)("h3",{id:"method"},"method"),Object(o.b)("p",null,"GET"),Object(o.b)("h3",{id:"request-params"},"request params"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Param"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"fromTokenAddress"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  ",Object(o.b)("em",{parentName:"td"},"ETH(BNB) = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"fromTokenDecimals"),Object(o.b)("td",{parentName:"tr",align:null},"(required)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"toTokenAddress"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  ",Object(o.b)("em",{parentName:"td"},"ETH(BNB) = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"toTokenDecimals"),Object(o.b)("td",{parentName:"tr",align:null},"(required)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"fromAmount"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  calculate with decimals\uff0cfor example 1ETH =  10**18")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"slippage"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  0 - 100   ",Object(o.b)("em",{parentName:"td"},"Unit is %"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"userAddr"),Object(o.b)("td",{parentName:"tr",align:null},"(required)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"chainId"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  1 or 56,  1 represents ethereum, 56 represents BSC")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"deadLine"),Object(o.b)("td",{parentName:"tr",align:null},"(optional)  Expired block timestamp ",Object(o.b)("em",{parentName:"td"},"Unit is second"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"source"),Object(o.b)("td",{parentName:"tr",align:null},"(optional)  'dodo' represents get price only from dodo platform")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"rpc"),Object(o.b)("td",{parentName:"tr",align:null},"(optional)  For example: ",Object(o.b)("a",{parentName:"td",href:"https://mainnet.infura.io/v3/"},"https://mainnet.infura.io/v3/"),"**, or your own rpc endpoint")))),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("h3",{id:"json-example"},"JSON Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "status": 200,\n    "data": {\n        "resAmount": 4131.964781,\n        "resPricePerToToken": 0.24201566131747518,\n        "resPricePerFromToken": 4.131964,\n        "priceImpact": 0,\n        "useSource": "0x",\n        "targetDecimals": 6,\n        "targetApproveAddr": "0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149",\n        "to": "0xa356867fDCEa8e71AEaF87805808803806231FdC",\n        "data": "",\n        "resCostGas": 0\n    }\n}\n\n')),Object(o.b)("h3",{id:"response-params"},"Response params"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Param"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"resAmount"),Object(o.b)("td",{parentName:"tr",align:null},"receive Amount")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"resPricePerToToken"),Object(o.b)("td",{parentName:"tr",align:null},"ratio of fromTokenAmount/toTokenAmount")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"resPricePerFromToken"),Object(o.b)("td",{parentName:"tr",align:null},"ratio of toTokenAmount/fromTokenAmount")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"priceImpact"),Object(o.b)("td",{parentName:"tr",align:null},"need mul 100%")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"targetApproveAddr"),Object(o.b)("td",{parentName:"tr",align:null},"User need give fromToken's authority to this contract before swaping. if fromToken equals to ETH. the param will be empty.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"to"),Object(o.b)("td",{parentName:"tr",align:null},"DODOProxy's address")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data"),Object(o.b)("td",{parentName:"tr",align:null},"Use directly")))))}d.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,s=p["".concat(b,".").concat(u)]||p[u]||m[u]||o;return r?a.a.createElement(s,l(l({ref:t},c),{},{components:r})):a.a.createElement(s,l({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,b=new Array(o);b[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var c=2;c<o;c++)b[c]=r[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);