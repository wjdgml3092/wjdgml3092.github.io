"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{1972:function(e,t,r){r.r(t),r.d(t,{default:function(){return W}});var n={};r.r(n),r.d(n,{exclude:function(){return V},extract:function(){return P},parse:function(){return _},parseUrl:function(){return D},pick:function(){return K},stringify:function(){return B},stringifyUrl:function(){return T}});var o=r(7294),a=r(4316),i=r(1883),s=r(917);const l=(0,a.Z)("div",{target:"e1kn8q5k1"})({name:"7p68pd",styles:"display:flex;flex-wrap:wrap;width:768px;margin:0 auto;@media (max-width: 768px){width:100%;margin-top:50px;}@media (max-width: 480px){margin-top:10px;}"}),c=(0,a.Z)((e=>{let{active:t,...r}=e;return(0,s.tZ)(i.Link,r)}),{target:"e1kn8q5k0"})("width:20%;text-align:center;padding:5px 0;font-size:18px;span{",(e=>{let{active:t}=e;return t?"font-size: 20px; background: linear-gradient(180deg,rgba(255,255,255,0) 70%, #fff5b1 50%);":""}),";}cursor:pointer;@media (max-width: 768px){font-size:15px;span{",(e=>{let{active:t}=e;return t?"font-size: 17px; background: linear-gradient(180deg,rgba(255,255,255,0) 70%, #fff5b1 50%);":""}),";}}");var u=e=>{let{selectedCategory:t,categoryList:r}=e;return(0,s.tZ)(l,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,s.tZ)(c,{to:"/?category="+r,active:r===t,key:r},(0,s.tZ)("span",null,r))})))},p=r(8663),f=r(7462),d=r(2010);const g=(0,a.Z)(i.Link,{target:"e1eg5kak4"})({name:"lglbzj",styles:"display:flex;flex-direction:column;border-bottom:1px solid #c2c2c2;transition:0.3s box-shadow;cursor:pointer;margin-bottom:10px;&:hover{div:nth-of-type(1) span{background:linear-gradient(\n        180deg,\n        rgba(255, 255, 255, 0) 70%,\n        #fff5b1 50%\n      );}}"}),m=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"kz8l14",styles:"flex:1;display:flex;flex-direction:column;padding:15px 0px"}),y=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"uiy5ef",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:1.25rem;font-weight:700;@media (max-width: 480px){font-size:1.15rem;}"}),b=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),x=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"pbug9m",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8;margin-bottom:10px"});var k=e=>{let{title:t,date:r,category:n,tag:o,link:a,excerpt:i}=e;return(0,s.tZ)(g,{to:a},(0,s.tZ)(m,null,(0,s.tZ)(y,null,(0,s.tZ)("span",null,t)),(0,s.tZ)(b,null,r),(0,s.tZ)(d.V,null,(0,s.tZ)("span",null,n),o.map((e=>(0,s.tZ)(d.z,{key:e},e)))),(0,s.tZ)(x,null,i)))};var h=(e,t)=>{const r=(0,o.useRef)(null),n=(0,o.useRef)(null),{0:a,1:i}=(0,o.useState)(1),s=(0,o.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{category:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,o.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((()=>i(1)),[e]),(0,o.useEffect)((()=>{10*a>=s.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[a,e]),{containerRef:r,postList:s.slice(0,10*a)}};const w=(0,a.Z)("div",{target:"es8e92y0"})({name:"1aogk62",styles:"width:768px;margin:0 auto;padding:30px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:30px 15px;}"});var v=e=>{let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:o}=h(t,r);return(0,s.tZ)(w,{ref:n},o.map((e=>{let{node:{excerpt:t,id:r,fields:{slug:n},frontmatter:o}}=e;return(0,s.tZ)(k,(0,f.Z)({excerpt:t},o,{link:n,key:r}))})))};const Z="%[a-f0-9]{2}",j=new RegExp("("+Z+")|([^%]+?)","gi"),F=new RegExp("("+Z+")+","gi");function O(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],O(r),O(n))}function I(e){try{return decodeURIComponent(e)}catch{let t=e.match(j)||[];for(let r=1;r<t.length;r++)t=(e=O(t,r).join("")).match(j)||[];return e}}function S(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=F.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=I(r[0]);e!==r[0]&&(t[r[0]]=e)}r=F.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function E(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function C(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const R=e=>null==e,A=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),N=Symbol("encodeFragmentIdentifier");function $(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function U(e,t){return t.encode?t.strict?A(e):encodeURIComponent(e):e}function z(e,t){return t.decode?S(e):e}function L(e){return Array.isArray(e)?e.sort():"object"==typeof e?L(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function q(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function M(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function P(e){const t=(e=q(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function _(e,t){$((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&z(r,e).includes(e.arrayFormatSeparator);r=a?z(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>z(t,e))):null===r?r:z(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?z(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>z(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=E(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:z(i,t),r(z(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=M(r,t);else n[o]=M(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=L(r):e[t]=r,e}),Object.create(null))}function B(e,t){if(!e)return"";$((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&R(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[U(t,e),"[",o,"]"].join("")]:[...r,[U(t,e),"[",U(o,e),"]=",U(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[U(t,e),"[]"].join("")]:[...r,[U(t,e),"[]=",U(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[U(t,e),":list="].join("")]:[...r,[U(t,e),":list=",U(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[U(r,e),t,U(o,e)].join("")]:[[n,U(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,U(t,e)]:[...r,[U(t,e),"=",U(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?U(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?U(r,t)+"[]":o.reduce(n(r),[]).join("&"):U(r,t)+"="+U(o,t)})).filter((e=>e.length>0)).join("&")}function D(e,t){t={decode:!0,...t};let[r,n]=E(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:_(P(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:z(n,t)}:{}}}function T(e,t){t={encode:!0,strict:!0,[N]:!0,...t};const r=q(e.url).split("?")[0]||"";let n=B({..._(P(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[N]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function K(e,t,r){r={parseFragmentIdentifier:!0,[N]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=D(e,r);return T({url:n,query:C(o,t),fragmentIdentifier:a},r)}function V(e,t,r){return K(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var G=n,H=r(3017),J=r(9978),Q=r(4769);var W=e=>{let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:a}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:l}}}}=e;const c=G.parse(t),f="string"==typeof c.category&&c.category?c.category:"All",d=(0,o.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{category:r}}}=t;return void 0===e[r]?e[r]=1:e[r]++,e.All++,e}),{All:0})),[]);return(0,s.tZ)(o.Fragment,null,(0,s.tZ)(J.Z,null),(0,s.tZ)(H.Z,{title:r,description:n,url:a},(0,s.tZ)(p.Z,{profileImage:l}),(0,s.tZ)(u,{selectedCategory:f,categoryList:d}),(0,s.tZ)(v,{selectedCategory:f,posts:i})),(0,s.tZ)(Q.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3ea907dfd6af0136a224.js.map