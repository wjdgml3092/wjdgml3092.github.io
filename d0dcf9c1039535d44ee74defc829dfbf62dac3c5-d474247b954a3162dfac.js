(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[640],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,a=new RegExp("^"+o.source),s=new RegExp(o.source+i.source,"gu"),c=new RegExp("\\d+"+i.source,"gu"),l=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),l=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?l(e):o(e);return e!==o(e)&&(e=((e,n,i)=>{let o=!1,a=!1,s=!1;for(let c=0;c<e.length;c++){const l=e[c];o&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),o=!1,s=a,a=!0,c++):a&&s&&r.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=a,a=!1,o=!0):(o=n(l)===l&&i(l)!==l,s=a,a=i(l)===l&&n(l)!==l)}return e})(e,o,l)),e=e.replace(a,""),e=i.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,o):o(e),i.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(c,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},4852:function(e){"use strict";e.exports=Object.assign},8032:function(e,t,r){"use strict";r.d(t,{G:function(){return N},L:function(){return m},M:function(){return x},P:function(){return T},_:function(){return s},a:function(){return a},b:function(){return u},g:function(){return p},h:function(){return c}});var n=r(7294),i=(r(3204),r(5697)),o=r.n(i);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,r){const n={};let i="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,r,n,i){return void 0===i&&(i={}),a({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:a({},i,{opacity:t?1:0})})}function p(e,t,r,n,i,o,s,c){const l={};o&&(l.backgroundColor=o,"fixed"===r?(l.width=n,l.height=i,l.backgroundColor=o,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const d=["children"],f=function(e){let{layout:t,width:r,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=s(e,d);return n.createElement(n.Fragment,null,n.createElement(f,a({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:i,alt:o="",shouldLoad:c}=e,l=s(e,g);return n.createElement("img",a({},l,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:o}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:i=!0}=e,o=s(e,h);const c=o.sizes||(null==t?void 0:t.sizes),l=n.createElement(y,a({},o,t,{sizes:c,shouldLoad:i}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return n.createElement("source",{key:t+"-"+o+"-"+r,type:o,media:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,sizes:c})})),l):l};var v;y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],T=function(e){let{fallback:t}=e,r=s(e,w);return t?n.createElement(b,a({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",a({},r))};T.displayName="Placeholder",T.propTypes={fallback:i.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const x=function(e){return n.createElement(n.Fragment,null,n.createElement(b,a({},e)),n.createElement("noscript",null,n.createElement(b,a({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),O=function(e,t,r){for(var n=arguments.length,i=new Array(n>3?n-3:0),a=3;a<n;a++)i[a-3]=arguments[a];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(i)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:o().object.isRequired,alt:O},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],L=new Set;let I,P;const Z=function(e){let{as:t="div",image:i,style:o,backgroundColor:u,className:p,class:d,onStartLoad:f,onLoad:m,onError:g}=e,h=s(e,k);const{width:y,height:b,layout:v}=i,w=l(y,b,v),{style:T,className:x}=w,E=s(w,j),C=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);d&&(p=d);const O=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((()=>{I||(I=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(S);if(P&&L.has(S))return;let t,n;return I.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=r(a({isLoading:!0,isLoaded:L.has(S),image:i},h)),L.has(S)||(t=requestAnimationFrame((()=>{C.current&&(n=s(C.current,S,L,o,f,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{L.has(S)&&P&&(C.current.innerHTML=P(a({isLoading:L.has(S),isLoaded:L.has(S),image:i},h)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,n.createElement)(t,a({},E,{style:a({},T,o,{backgroundColor:u}),className:x+(p?" "+p:""),ref:C,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},N=(0,n.memo)((function(e){return e.image?(0,n.createElement)(Z,e):null}));N.propTypes=A,N.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:r,__imageData:i,__error:o}=t,c=s(t,R);return o&&console.warn(o),i?n.createElement(e,a({image:i},c)):(console.warn("Image not loaded",r),null)}}const _=M((function(e){let{as:t="div",className:r,class:i,style:o,image:c,loading:d="lazy",imgClassName:f,imgStyle:g,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=s(e,E);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(r=i),g=a({objectFit:y,objectPosition:b,backgroundColor:h},g);const{width:w,height:O,layout:A,images:k,placeholder:j,backgroundColor:L}=c,I=l(w,O,A),{style:P,className:Z}=I,N=s(I,C),R={fallback:void 0,sources:[]};return k.fallback&&(R.fallback=a({},k.fallback,{srcSet:k.fallback.srcSet?S(k.fallback.srcSet):void 0})),k.sources&&(R.sources=k.sources.map((e=>a({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,a({},N,{style:a({},P,o,{backgroundColor:h}),className:Z+(r?" "+r:"")}),n.createElement(m,{layout:A,width:w,height:O},n.createElement(T,a({},p(j,!1,A,w,O,L,y,b))),n.createElement(x,a({"data-gatsby-image-ssr":"",className:f},v,u("eager"===d,!1,R,d,g)))))})),q=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),z={src:o().string.isRequired,alt:O,width:q,height:q,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};_.displayName="StaticImage",_.propTypes=z;const H=M(N);H.displayName="StaticImage",H.propTypes=z},3017:function(e,t,r){"use strict";r.d(t,{Z:function(){return ge}});var n,i,o,a,s=r(5697),c=r.n(s),l=r(3524),u=r.n(l),p=r(9590),d=r.n(p),f=r(7294),m=r(4852),g=r.n(m),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",x="href",E="http-equiv",C="innerHTML",S="itemprop",O="name",A="property",k="rel",j="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",Z="defer",N="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",_=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),q=[v.NOSCRIPT,v.SCRIPT,v.STYLE],F="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,v.TITLE),r=J(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,P);return t||n||void 0},Y=function(e){return J(e,R)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],c=s.toLowerCase();-1===t.indexOf(c)||r===k&&"canonical"===e[r].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==C&&s!==T&&s!==S||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][l]&&(i[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],c=g()({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),$=function(e){return clearTimeout(e)},X="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||$:r.g.cancelAnimationFrame||$,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ne=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;ae(v.BODY,n),ae(v.HTML,i),oe(p,d);var f={baseTag:se(v.BASE,r),linkTags:se(v.LINK,o),metaTags:se(v.META,a),noscriptTags:se(v.NOSCRIPT,s),scriptTags:se(v.SCRIPT,l),styleTags:se(v.STYLE,u)},m={},g={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(g[e]=f[e].oldTags)})),t&&t(),c(e,m,g)},ie=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ae(v.TITLE,t)},ae=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(F),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===i.indexOf(c)&&i.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute(F):r.getAttribute(F)!==a.join(",")&&r.setAttribute(F,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+F+"]"),i=Array.prototype.slice.call(n),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(F,"true"),i.some((function(e,t){return a=t,r.isEqualNode(e)}))?i.splice(a,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},ce=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},ue=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[F]=!0,i=le(r,n),[f.createElement(v.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=ce(r),o=ie(t);return i?"<"+e+" "+F+'="true" '+i+">"+U(o,n)+"</"+e+">":"<"+e+" "+F+'="true">'+U(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case y:return{toComponent:function(){return le(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[F]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===C||r===T){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),f.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+" "+F+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:ue(v.BASE,t,n),bodyAttributes:ue(h,r,n),htmlAttributes:ue(y,i,n),link:ue(v.LINK,o,n),meta:ue(v.META,a,n),noscript:ue(v.NOSCRIPT,s,n),script:ue(v.SCRIPT,c,n),style:ue(v.STYLE,l,n),title:ue(v.TITLE,{title:p,titleAttributes:d},n)}},de=u()((function(e){return{baseTag:K([x,L],e),bodyAttributes:V(h,e),defer:J(e,Z),encode:J(e,N),htmlAttributes:V(y,e),linkTags:G(v.LINK,[k,x],e),metaTags:G(v.META,[O,w,E,A,S],e),noscriptTags:G(v.NOSCRIPT,[C],e),onChangeClientState:Y(e),scriptTags:G(v.SCRIPT,[j,C],e),styleTags:G(v.STYLE,[T],e),title:W(e),titleAttributes:V(b,e)}}),(function(e){re&&ee(re),e.defer?re=X((function(){ne(e,(function(){re=null}))})):(ne(e),re=null)}),pe)((function(){return null})),fe=(i=de,a=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return B({},i,((t={})[n.type]=a,t.titleAttributes=B({},o),t));case v.BODY:return B({},i,{bodyAttributes:B({},o)});case v.HTML:return B({},i,{htmlAttributes:B({},o)})}return B({},i,((r={})[n.type]=B({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return f.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(D(i,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=D(e,["children"]),n=B({},r);return t&&(n=this.mapChildrenToProps(t,n)),f.createElement(i,n)},H(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(f.Component),o.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);fe.renderStatic=fe.rewind;var me=r(917);var ge=e=>{let{title:t,description:r,url:n,children:i}=e;return(0,me.tZ)("main",null,(0,me.tZ)(fe,null,(0,me.tZ)("title",null,t),(0,me.tZ)("meta",{name:"description",content:r}),(0,me.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,me.tZ)("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),(0,me.tZ)("meta",{property:"og:type",content:"website"}),(0,me.tZ)("meta",{property:"og:title",content:t}),(0,me.tZ)("meta",{property:"og:description",content:r}),(0,me.tZ)("meta",{property:"og:url",content:n}),(0,me.tZ)("meta",{property:"og:site_name",content:t}),(0,me.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,me.tZ)("meta",{name:"twitter:title",content:t}),(0,me.tZ)("meta",{name:"twitter:description",content:r}),(0,me.tZ)("meta",{name:"twitter:site",content:"@wjdgml3092"}),(0,me.tZ)("meta",{name:"twitter:creator",content:"@wjdgml3092"}),(0,me.tZ)("meta",{name:"google-site-verification",content:"NXRnBj7QbFAt0AhNZegJ75v9j1mNGsBQ8fQvff9aDBA"}),(0,me.tZ)("meta",{name:"naver-site-verification",content:"2e1bd635204729c9695cf690455946481044a616"}),(0,me.tZ)("html",{lang:"ko"})),i)}},1389:function(e,t,r){"use strict";var n=r(4316),i=r(7294),o=r(3750),a=r(917);const s=(0,n.Z)("button",{target:"e85k52g0"})({name:"12dd4j2",styles:"position:fixed;right:0;bottom:5%;display:flex;column-gap:10px;align-items:center;background-color:var(--primary-bg);border:none;cursor:pointer;span{font-size:12px;font-weight:bold;border-left:10px solid var(--highlight);padding:10px;color:var(--second-color);}svg{width:8px;height:8px;margin-left:10px;}"});t.Z=()=>{const{0:e,1:t}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=()=>{window.scrollY>500?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,a.tZ)(i.Fragment,null,e&&(0,a.tZ)(s,{onClick:()=>{window.scroll({top:0,behavior:"smooth"})}},(0,a.tZ)("span",null,"TOP",(0,a.tZ)(o.jcE,null))))}},8663:function(e,t,r){"use strict";r.d(t,{J:function(){return p}});var n=r(4316),i=r(8032),o=r(5434),a=r(8193),s=r(917);const c=(0,n.Z)("div",{target:"e160b014"})({name:"rlm063",styles:"width:100%;padding-top:55px"}),l=(0,n.Z)("div",{target:"e160b013"})({name:"138uli",styles:"display:flex;align-items:center;width:768px;padding:30px 0 10px;margin:0 auto;@media (max-width: 768px){width:100%;padding:0 20px;}@media (max-width: 480px){flex-direction:column;align-items:flex-start;padding:10px 0;}"}),u=(0,n.Z)("div",{target:"e160b012"})({name:"1maxidz",styles:"display:block;margin-left:40px;h1{margin-bottom:1rem;}h3{margin-bottom:2rem;}@media (max-width: 480px){margin-left:0px;padding:0 20px 0px 15px;h1{font-size:1.25rem;margin-bottom:0.5rem;}h3{font-size:1rem;margin-bottom:1rem;}}"}),p=(0,n.Z)("div",{target:"e160b011"})("display:flex;align-items:center;margin-bottom:10px;a{",(e=>e.isFooter?"font-size: 14px;":""),";}svg{",(e=>e.isFooter?"width: 25px; height: 25px;":"width: 20px; height: 20px;")," margin-right:5px;}"),d=(0,n.Z)(i.G,{target:"e160b010"})({name:"1cr93js",styles:"width:200px;height:200px;object-fit:contain;margin-bottom:30px;border-radius:50%;@media (max-width: 480px){width:150px;height:150px;margin:10px 0 20px 15px;}"});t.Z=e=>{let{profileImage:t}=e;return(0,s.tZ)(c,null,(0,s.tZ)(l,null,(0,s.tZ)(d,{image:t,alt:"Profile Image"}),(0,s.tZ)(u,null,(0,s.tZ)("h1",null,"Welcome to Jung's Blog"),(0,s.tZ)("h4",{style:{marginBottom:"2rem"}},"코드 한줄에 바뀌는 화면이 신기해서 ",(0,s.tZ)("br",null)," 꿈을 키우게 된 프론트 개발자의 기록 공간입니다."),(0,s.tZ)(p,null,(0,s.tZ)(o.F8X,null),(0,s.tZ)("a",{href:"mailto: junghee@gmail.com"},"junghee@gmail.com")),(0,s.tZ)(p,null,(0,s.tZ)(a.RrF,null),(0,s.tZ)("a",{href:"https://github.com/wjdgml3092"},"wjdgml3092")))))}},2010:function(e,t,r){"use strict";r.d(t,{V:function(){return i},z:function(){return o}});var n=r(4316);const i=(0,n.Z)("div",{target:"e10e25mq1"})({name:"h5db4z",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:15px 0px;font-size:12px;align-items:center;line-height:20px;span{margin-right:10px;}"}),o=(0,n.Z)("div",{target:"e10e25mq0"})({name:"p4wdcy",styles:"margin-right:5px;padding:2px 10px;border-radius:10px;font-weight:700;background:var(--second-bg);color:var(--tag-color)"})},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!o(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},3524:function(e,t,r){"use strict";var n,i=r(7294),o=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),p.canUseDOM?t(c):r&&(c=r(c))}var p=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return o.createElement(n,this.props)},i}(i.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(p,"canUseDOM",s),p}}}}]);
//# sourceMappingURL=d0dcf9c1039535d44ee74defc829dfbf62dac3c5-d474247b954a3162dfac.js.map