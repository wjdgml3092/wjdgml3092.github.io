(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[640],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,a=new RegExp("^"+o.source),s=new RegExp(o.source+i.source,"gu"),c=new RegExp("\\d+"+i.source,"gu"),l=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),l=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?l(e):o(e);return e!==o(e)&&(e=((e,n,i)=>{let o=!1,a=!1,s=!1;for(let c=0;c<e.length;c++){const l=e[c];o&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),o=!1,s=a,a=!0,c++):a&&s&&r.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=a,a=!1,o=!0):(o=n(l)===l&&i(l)!==l,s=a,a=i(l)===l&&n(l)!==l)}return e})(e,o,l)),e=e.replace(a,""),e=i.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,o):o(e),i.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(c,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},4852:function(e){"use strict";e.exports=Object.assign},8032:function(e,t,r){"use strict";r.d(t,{G:function(){return N},L:function(){return m},M:function(){return x},P:function(){return T},_:function(){return s},a:function(){return a},b:function(){return u},g:function(){return p},h:function(){return c}});var n=r(7294),i=(r(3204),r(5697)),o=r.n(i);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,r){const n={};let i="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,r,n,i){return void 0===i&&(i={}),a({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:a({},i,{opacity:t?1:0})})}function p(e,t,r,n,i,o,s,c){const l={};o&&(l.backgroundColor=o,"fixed"===r?(l.width=n,l.height=i,l.backgroundColor=o,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const d=["children"],f=function(e){let{layout:t,width:r,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=s(e,d);return n.createElement(n.Fragment,null,n.createElement(f,a({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:i,alt:o="",shouldLoad:c}=e,l=s(e,g);return n.createElement("img",a({},l,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:o}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:i=!0}=e,o=s(e,h);const c=o.sizes||(null==t?void 0:t.sizes),l=n.createElement(y,a({},o,t,{sizes:c,shouldLoad:i}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return n.createElement("source",{key:t+"-"+o+"-"+r,type:o,media:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,sizes:c})})),l):l};var v;y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],T=function(e){let{fallback:t}=e,r=s(e,w);return t?n.createElement(b,a({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",a({},r))};T.displayName="Placeholder",T.propTypes={fallback:i.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const x=function(e){return n.createElement(n.Fragment,null,n.createElement(b,a({},e)),n.createElement("noscript",null,n.createElement(b,a({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],E=["style","className"],O=e=>e.replace(/\n/g,""),S=function(e,t,r){for(var n=arguments.length,i=new Array(n>3?n-3:0),a=3;a<n;a++)i[a-3]=arguments[a];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(i)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:o().object.isRequired,alt:S},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],L=new Set;let I,P;const Z=function(e){let{as:t="div",image:i,style:o,backgroundColor:u,className:p,class:d,onStartLoad:f,onLoad:m,onError:g}=e,h=s(e,k);const{width:y,height:b,layout:v}=i,w=l(y,b,v),{style:T,className:x}=w,C=s(w,j),E=(0,n.useRef)(),O=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);d&&(p=d);const S=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((()=>{I||(I=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(O);if(P&&L.has(O))return;let t,n;return I.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;E.current&&(E.current.innerHTML=r(a({isLoading:!0,isLoaded:L.has(O),image:i},h)),L.has(O)||(t=requestAnimationFrame((()=>{E.current&&(n=s(E.current,O,L,o,f,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{L.has(O)&&P&&(E.current.innerHTML=P(a({isLoading:L.has(O),isLoaded:L.has(O),image:i},h)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,n.createElement)(t,a({},C,{style:a({},T,o,{backgroundColor:u}),className:x+(p?" "+p:""),ref:E,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},N=(0,n.memo)((function(e){return e.image?(0,n.createElement)(Z,e):null}));N.propTypes=A,N.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function _(e){return function(t){let{src:r,__imageData:i,__error:o}=t,c=s(t,R);return o&&console.warn(o),i?n.createElement(e,a({image:i},c)):(console.warn("Image not loaded",r),null)}}const M=_((function(e){let{as:t="div",className:r,class:i,style:o,image:c,loading:d="lazy",imgClassName:f,imgStyle:g,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=s(e,C);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(r=i),g=a({objectFit:y,objectPosition:b,backgroundColor:h},g);const{width:w,height:S,layout:A,images:k,placeholder:j,backgroundColor:L}=c,I=l(w,S,A),{style:P,className:Z}=I,N=s(I,E),R={fallback:void 0,sources:[]};return k.fallback&&(R.fallback=a({},k.fallback,{srcSet:k.fallback.srcSet?O(k.fallback.srcSet):void 0})),k.sources&&(R.sources=k.sources.map((e=>a({},e,{srcSet:O(e.srcSet)})))),n.createElement(t,a({},N,{style:a({},P,o,{backgroundColor:h}),className:Z+(r?" "+r:"")}),n.createElement(m,{layout:A,width:w,height:S},n.createElement(T,a({},p(j,!1,A,w,S,L,y,b))),n.createElement(x,a({"data-gatsby-image-ssr":"",className:f},v,u("eager"===d,!1,R,d,g)))))})),z=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),F={src:o().string.isRequired,alt:S,width:z,height:z,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=F;const B=_(N);B.displayName="StaticImage",B.propTypes=F},4769:function(e,t,r){"use strict";var n=r(4316),i=r(917);const o=(0,n.Z)("footer",{target:"e1oae0v80"})({name:"4s4tr7",styles:"display:grid;place-items:center;font-size:15px;text-align:center;line-height:1.5;width:100%;height:50px;@media (max-width: 768px){font-size:13px;}"});t.Z=()=>(0,i.tZ)(o,null,"Jung's Blog © 2023 FrontDeveloper JungHee Kim.")},9978:function(e,t,r){"use strict";var n=r(4316),i=r(6193),o=r(2870),a=r(1883),s=r(7294),c=r(3750),l=r(917);const u=(0,n.Z)("header",{target:"e1ke0ojz1"})("border-bottom:1px solid ",i.I.headerLineGray,";position:fixed;top:0;left:0;right:0;z-index:31;background:",(e=>{let{theme:t}=e;return t.background}),";"),p=(0,n.Z)("div",{target:"e1ke0ojz0"})("width:768px;padding:15px 15px 15px 0;margin:auto;font-size:1.25rem;font-weight:700;display:flex;justify-content:space-between;@media (max-width: 768px){width:100%;}@media (max-width: 480px){padding:15px;}div{cursor:pointer;svg:hover{color:",i.I.yellow,";}}");t.Z=()=>{const{theme:e,toggleTheme:t}=(0,o.T)(),{0:r,1:n}=(0,s.useState)("undefined"!=typeof window?localStorage.getItem("theme"):e);return"undefined"!=typeof window&&console.log(localStorage.getItem("theme")),(0,l.tZ)(u,null,(0,l.tZ)(p,null,(0,l.tZ)(a.Link,{to:"/"},"Jung's Blog"),(0,l.tZ)("div",{onClick:t},"light"===r?(0,l.tZ)(c.GL8,null):(0,l.tZ)(c.UD2,null))))}},3017:function(e,t,r){"use strict";r.d(t,{Z:function(){return he}});var n,i,o,a,s=r(5907),c=r(5697),l=r.n(c),u=r(3524),p=r.n(u),d=r(9590),f=r.n(d),m=r(7294),g=r(4852),h=r.n(g),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),x="cssText",C="href",E="http-equiv",O="innerHTML",S="itemprop",A="name",k="property",j="rel",L="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Z="defaultTitle",N="defer",R="encodeSpecialCharacters",_="onChangeClientState",M="titleTemplate",z=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=Q(e,w.TITLE),r=Q(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,Z);return t||n||void 0},G=function(e){return Q(e,_)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},V=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],c=s.toLowerCase();-1===t.indexOf(c)||r===j&&"canonical"===e[r].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==O&&s!==x&&s!==S||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][l]&&(i[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],c=h()({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),X=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:r.g.cancelAnimationFrame||X,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;se(w.BODY,n),se(w.HTML,i),ae(p,d);var f={baseTag:ce(w.BASE,r),linkTags:ce(w.LINK,o),metaTags:ce(w.META,a),noscriptTags:ce(w.NOSCRIPT,s),scriptTags:ce(w.SCRIPT,l),styleTags:ce(w.STYLE,u)},m={},g={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(g[e]=f[e].oldTags)})),t&&t(),c(e,m,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(w.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(F),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===i.indexOf(c)&&i.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute(F):r.getAttribute(F)!==a.join(",")&&r.setAttribute(F,a.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+F+"]"),i=Array.prototype.slice.call(n),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(F,"true"),i.some((function(e,t){return a=t,r.isEqualNode(e)}))?i.splice(a,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[F]=!0,i=ue(r,n),[m.createElement(w.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=le(r),o=oe(t);return i?"<"+e+" "+F+'="true" '+i+">"+W(o,n)+"</"+e+">":"<"+e+" "+F+'="true">'+W(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return ue(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[F]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===O||r===x){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),m.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===O||e===x)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+" "+F+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:pe(w.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(b,i,n),link:pe(w.LINK,o,n),meta:pe(w.META,a,n),noscript:pe(w.NOSCRIPT,s,n),script:pe(w.SCRIPT,c,n),style:pe(w.STYLE,l,n),title:pe(w.TITLE,{title:p,titleAttributes:d},n)}},fe=p()((function(e){return{baseTag:K([C,I],e),bodyAttributes:J(y,e),defer:Q(e,N),encode:Q(e,R),htmlAttributes:J(b,e),linkTags:V(w.LINK,[j,C],e),metaTags:V(w.META,[A,T,E,k,S],e),noscriptTags:V(w.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:V(w.SCRIPT,[L,O],e),styleTags:V(w.STYLE,[x],e),title:Y(e),titleAttributes:J(v,e)}}),(function(e){ne&&te(ne),e.defer?ne=ee((function(){ie(e,(function(){ne=null}))})):(ie(e),ne=null)}),de)((function(){return null})),me=(i=fe,a=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case w.TITLE:return H({},i,((t={})[n.type]=a,t.titleAttributes=H({},o),t));case w.BODY:return H({},i,{bodyAttributes:H({},o)});case w.HTML:return H({},i,{htmlAttributes:H({},o)})}return H({},i,((r={})[n.type]=H({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(U(i,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.createElement(i,n)},D(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(m.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var ge=r(917);var he=e=>{let{title:t,description:r,url:n,children:i}=e;return(0,ge.tZ)("main",null,(0,ge.tZ)(me,null,(0,ge.tZ)("title",null,t),(0,ge.tZ)("meta",{name:"description",content:r}),(0,ge.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,ge.tZ)("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),(0,ge.tZ)("meta",{property:"og:type",content:"website"}),(0,ge.tZ)("meta",{property:"og:title",content:t}),(0,ge.tZ)("meta",{property:"og:description",content:r}),(0,ge.tZ)("meta",{property:"og:url",content:n}),(0,ge.tZ)("meta",{property:"og:site_name",content:t}),(0,ge.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,ge.tZ)("meta",{name:"twitter:title",content:t}),(0,ge.tZ)("meta",{name:"twitter:description",content:r}),(0,ge.tZ)("meta",{name:"twitter:site",content:"@wjdgml3092"}),(0,ge.tZ)("meta",{name:"twitter:creator",content:"@wjdgml3092"}),(0,ge.tZ)("meta",{name:"google-site-verification",content:"NXRnBj7QbFAt0AhNZegJ75v9j1mNGsBQ8fQvff9aDBA"}),(0,ge.tZ)("meta",{name:"naver-site-verification",content:"2e1bd635204729c9695cf690455946481044a616"}),(0,ge.tZ)("html",{lang:"ko"})),(0,ge.tZ)(s.Z,null),i)}},8663:function(e,t,r){"use strict";r.d(t,{J:function(){return p}});var n=r(4316),i=r(8032),o=r(5434),a=r(8193),s=r(917);const c=(0,n.Z)("div",{target:"e160b014"})({name:"rlm063",styles:"width:100%;padding-top:55px"}),l=(0,n.Z)("div",{target:"e160b013"})({name:"138uli",styles:"display:flex;align-items:center;width:768px;padding:30px 0 10px;margin:0 auto;@media (max-width: 768px){width:100%;padding:0 20px;}@media (max-width: 480px){flex-direction:column;align-items:flex-start;padding:10px 0;}"}),u=(0,n.Z)("div",{target:"e160b012"})({name:"1maxidz",styles:"display:block;margin-left:40px;h1{margin-bottom:1rem;}h3{margin-bottom:2rem;}@media (max-width: 480px){margin-left:0px;padding:0 20px 0px 15px;h1{font-size:1.25rem;margin-bottom:0.5rem;}h3{font-size:1rem;margin-bottom:1rem;}}"}),p=(0,n.Z)("div",{target:"e160b011"})("display:flex;align-items:center;margin-bottom:10px;a{",(e=>e.isFooter?"font-size: 14px;":""),";}svg{",(e=>e.isFooter?"width: 25px; height: 25px;":"width: 20px; height: 20px;")," margin-right:5px;}"),d=(0,n.Z)(i.G,{target:"e160b010"})({name:"1cr93js",styles:"width:200px;height:200px;object-fit:contain;margin-bottom:30px;border-radius:50%;@media (max-width: 480px){width:150px;height:150px;margin:10px 0 20px 15px;}"});t.Z=e=>{let{profileImage:t}=e;return(0,s.tZ)(c,null,(0,s.tZ)(l,null,(0,s.tZ)(d,{image:t,alt:"Profile Image"}),(0,s.tZ)(u,null,(0,s.tZ)("h1",null,"Welcome to Jung's Blog"),(0,s.tZ)("h3",null,"컨벤션을 중요시하는 프론트 개발자의 기록 공간입니다. "),(0,s.tZ)(p,null,(0,s.tZ)(o.F8X,null),(0,s.tZ)("a",{href:"mailto: junghee@gmail.com"},"junghee@gmail.com")),(0,s.tZ)(p,null,(0,s.tZ)(a.RrF,null),(0,s.tZ)("a",{href:"https://github.com/wjdgml3092"},"wjdgml3092")))))}},2010:function(e,t,r){"use strict";r.d(t,{V:function(){return o},z:function(){return a}});var n=r(4316),i=r(6193);const o=(0,n.Z)("div",{target:"e10e25mq1"})("display:flex;flex-wrap:wrap;margin-top:10px;margin:15px 0px;font-size:12px;align-items:center;color:",i.I.light.secondColor,";line-height:20px;span{margin-right:10px;}"),a=(0,n.Z)("div",{target:"e10e25mq0"})("margin-right:5px;padding:2px 10px;border-radius:10px;font-weight:700;background:",(e=>{let{theme:t}=e;return"dark"===t?i.I.dark.secondBackground:i.I.light.secondBackground}),";")},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!o(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,i=e.attr,o=e.size,c=e.title,l=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},3524:function(e,t,r){"use strict";var n,i=r(7294),o=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),p.canUseDOM?t(c):r&&(c=r(c))}var p=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return o.createElement(n,this.props)},i}(i.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(p,"canUseDOM",s),p}}}}]);
//# sourceMappingURL=d0dcf9c1039535d44ee74defc829dfbf62dac3c5-ea8d544b2804a31248c7.js.map