"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{1972:function(e,t,r){r.r(t),r.d(t,{default:function(){return ne}});var n={};r.r(n),r.d(n,{exclude:function(){return X},extract:function(){return K},parse:function(){return V},parseUrl:function(){return J},pick:function(){return W},stringify:function(){return H},stringifyUrl:function(){return Q}});var o=r(7294),a=r(4316),i=r(1883),l=r(2870),c=r(6193),s=r(917);const u=(0,a.Z)("div",{target:"e1kn8q5k1"})({name:"7p68pd",styles:"display:flex;flex-wrap:wrap;width:768px;margin:0 auto;@media (max-width: 768px){width:100%;margin-top:50px;}@media (max-width: 480px){margin-top:10px;}"}),p=(0,a.Z)((e=>{let{active:t,theme:r,...n}=e;return(0,s.tZ)(i.Link,n)}),{target:"e1kn8q5k0"})("width:20%;text-align:center;padding:5px 0;font-size:18px;span{",(e=>{let{active:t,theme:r}=e;return t?"font-size: 20px; background: linear-gradient(180deg,rgba(255,255,255,0) 70%, \n       "+("dark"===r?c.I.dark.highlight:c.I.light.highlight)+" 50%);":""}),";}cursor:pointer;@media (max-width: 768px){font-size:15px;span{",(e=>{let{active:t,theme:r}=e;return t?"font-size: 17px; background: linear-gradient(180deg,rgba(255,255,255,0) 70%, \n          "+("dark"===r?c.I.dark.highlight:c.I.light.highlight)+" 50%);":""}),";}}");var d=e=>{let{selectedCategory:t,categoryList:r}=e;const{theme:n}=(0,l.T)();return console.log("category: ",n),(0,s.tZ)(u,null,Object.entries(r).map((e=>{let[r,o]=e;return(0,s.tZ)(p,{to:"/?category="+r,active:r===t,key:r,theme:n},(0,s.tZ)("span",null,r))})))},g=r(8663),f=r(7462),m=r(2010);const y=(0,a.Z)(i.Link,{target:"e1eg5kak4"})("display:flex;flex-direction:column;border-bottom:1px solid ",c.I.borderGray,";transition:0.3s box-shadow;cursor:pointer;margin-bottom:10px;&:hover{div:nth-of-type(1) span{background:linear-gradient(\n        180deg,\n        rgba(255, 255, 255, 0) 70%,\n        ",(e=>"dark"===e.theme?c.I.dark.highlight:c.I.light.highlight),"\n          50%\n      );}}"),h=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"kz8l14",styles:"flex:1;display:flex;flex-direction:column;padding:15px 0px"}),k=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"uiy5ef",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:1.25rem;font-weight:700;@media (max-width: 480px){font-size:1.15rem;}"}),b=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),x=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"pbug9m",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8;margin-bottom:10px"});var w=e=>{let{title:t,date:r,category:n,tag:o,link:a,excerpt:i,selectedLink:c}=e;const{theme:u}=(0,l.T)();return(0,s.tZ)(y,{to:a,onClick:()=>{sessionStorage.setItem("selected_link",c)},theme:u},(0,s.tZ)(h,null,(0,s.tZ)(k,null,(0,s.tZ)("span",null,t)),(0,s.tZ)(b,null,r),(0,s.tZ)(m.V,null,(0,s.tZ)("span",null,n),o.map((e=>(0,s.tZ)(m.z,{key:e,theme:u},e)))),(0,s.tZ)(x,null,i)))};var v=(e,t,r)=>{const n=(0,o.useRef)(null),a=(0,o.useRef)(null),{0:i,1:l}=(0,o.useState)(1),c=(0,o.useMemo)((()=>r.filter((r=>{let{node:{frontmatter:{category:n,tag:o}}}=r;const a="All"===t||n.includes(t),i="All"===e||o.includes(e);return a&&i}))),[t,e]);return(0,o.useEffect)((()=>{a.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(l((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((()=>l(1)),[t]),(0,o.useEffect)((()=>{10*i>=c.length||null===n.current||0===n.current.children.length||null===a.current||a.current.observe(n.current.children[n.current.children.length-1])}),[i,t]),{containerRef:n,postList:c.slice(0,10*i)}};const Z=(0,a.Z)("div",{target:"es8e92y4"})({name:"9pd6cr",styles:"display:flex;width:768px;margin:0 auto;padding:30px 0 100px;column-gap:20px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:30px 15px;column-gap:0px;}"}),I=(0,a.Z)("div",{target:"es8e92y3"})("width:20%;p{border-bottom:1px solid ",c.I.light.secondBackground,";padding-bottom:10px;}@media (max-width: 768px){display:none;}"),j=(0,a.Z)("div",{target:"es8e92y2"})({name:"ky5onj",styles:"width:100%;display:flex;flex-wrap:wrap;column-gap:5px;margin-top:10px"}),F=(0,a.Z)("div",{target:"es8e92y1"})({name:"cn3xcj",styles:"margin-bottom:12px"}),C=(0,a.Z)((e=>{let{active:t,theme:r,...n}=e;return(0,s.tZ)(i.Link,n)}),{target:"es8e92y0"})("text-align:center;padding:5px;font-size:12px;color:",c.I.light.secondColor,";background:",(e=>{let{theme:t}=e;return"dark"===t?c.I.dark.secondBackground:c.I.light.secondBackground}),";cursor:pointer;border-radius:10px;",(e=>{let{active:t,theme:r}=e;return t?"dark"===r?"background-color: "+c.I.black+";":"background-color: "+c.I.black+"; color: "+c.I.white+";":""})," cursor:pointer;&:hover{",(e=>{let{active:t,theme:r}=e;return t?"background-color: "+c.I.black+"; color: "+c.I.white+";":"dark"===r?"background-color: "+c.I.dark.highlight+"; color: "+c.I.dark.defaultColor+";":"background-color: "+c.I.light.highlight+"; color: "+c.I.light.secondColor}),";}span{background:inherit;}");var O=e=>{let{selectedCategory:t,posts:r,location:n}=e;const a=n.split("=")[2],{theme:i}=(0,l.T)(),{0:c,1:u}=(0,o.useState)(a||"All");(0,o.useEffect)((()=>{u(a||"All")}),[a]);const{containerRef:p,postList:d}=v(c,t,r),g=(0,o.useMemo)((()=>r.reduce(((e,r)=>{let{node:{frontmatter:{tag:n,category:o}}}=r;return("All"===t||o===t)&&(n.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++),e}),{All:0})),[t,c]);return(0,s.tZ)(Z,null,(0,s.tZ)("div",{ref:p},d.map((e=>{let{node:{excerpt:r,id:n,fields:{slug:o},frontmatter:a}}=e;return(0,s.tZ)(w,(0,f.Z)({excerpt:r},a,{link:o,key:n,selectedLink:"/?category="+t+"&tag="+c}))}))),(0,s.tZ)(I,null,(0,s.tZ)("p",null,"Tag"),(0,s.tZ)(j,null,Object.entries(g).map((e=>{let[r,n]=e;return(0,s.tZ)(F,{onClick:()=>{u(r)},key:r},(0,s.tZ)(C,{to:"/?category="+t+"&tag="+r,active:r===c,key:r,theme:i},(0,s.tZ)("span",null,r,"(",n,")")))})))))};const A="%[a-f0-9]{2}",S=new RegExp("("+A+")|([^%]+?)","gi"),E=new RegExp("("+A+")+","gi");function R(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],R(r),R(n))}function N(e){try{return decodeURIComponent(e)}catch{let t=e.match(S)||[];for(let r=1;r<t.length;r++)t=(e=R(t,r).join("")).match(S)||[];return e}}function $(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=E.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=N(r[0]);e!==r[0]&&(t[r[0]]=e)}r=E.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function L(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function z(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const U=e=>null==e,T=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),q=Symbol("encodeFragmentIdentifier");function B(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function M(e,t){return t.encode?t.strict?T(e):encodeURIComponent(e):e}function _(e,t){return t.decode?$(e):e}function P(e){return Array.isArray(e)?e.sort():"object"==typeof e?P(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function D(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function G(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function K(e){const t=(e=D(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function V(e,t){B((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&_(r,e).includes(e.arrayFormatSeparator);r=a?_(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>_(t,e))):null===r?r:_(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?_(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>_(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=L(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:_(i,t),r(_(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=G(r,t);else n[o]=G(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=P(r):e[t]=r,e}),Object.create(null))}function H(e,t){if(!e)return"";B((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&U(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[M(t,e),"[",o,"]"].join("")]:[...r,[M(t,e),"[",M(o,e),"]=",M(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[M(t,e),"[]"].join("")]:[...r,[M(t,e),"[]=",M(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[M(t,e),":list="].join("")]:[...r,[M(t,e),":list=",M(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[M(r,e),t,M(o,e)].join("")]:[[n,M(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,M(t,e)]:[...r,[M(t,e),"=",M(n,e)].join("")]}}(t),o={};for(const[i,l]of Object.entries(e))r(i)||(o[i]=l);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?M(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?M(r,t)+"[]":o.reduce(n(r),[]).join("&"):M(r,t)+"="+M(o,t)})).filter((e=>e.length>0)).join("&")}function J(e,t){t={decode:!0,...t};let[r,n]=L(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:V(K(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:_(n,t)}:{}}}function Q(e,t){t={encode:!0,strict:!0,[q]:!0,...t};const r=D(e.url).split("?")[0]||"";let n=H({...V(K(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[q]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function W(e,t,r){r={parseFragmentIdentifier:!0,[q]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=J(e,r);return Q({url:n,query:z(o,t),fragmentIdentifier:a},r)}function X(e,t,r){return W(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var Y=n,ee=r(3017),te=r(9978),re=r(4769);var ne=e=>{let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:a}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:c}}}}=e;const u=Y.parse(t),p="string"==typeof u.category&&u.category?u.category:"All",f=(0,o.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{category:r}}}=t;return void 0===e[r]?e[r]=1:e[r]++,e.All++,e}),{All:0})),[]);return(0,s.tZ)(o.Fragment,null,(0,s.tZ)(l.z,null,(0,s.tZ)(te.Z,null),(0,s.tZ)(ee.Z,{title:r,description:n,url:a},(0,s.tZ)(g.Z,{profileImage:c}),(0,s.tZ)(d,{selectedCategory:p,categoryList:f}),(0,s.tZ)(O,{selectedCategory:p,posts:i,location:t})),(0,s.tZ)(re.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8bff133c4c81ae327883.js.map