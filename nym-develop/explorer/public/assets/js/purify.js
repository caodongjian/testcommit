!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DOMPurify=t()}(this,function(){"use strict";function e(e,t){y&&y(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var o=r.toLowerCase();o!==r&&(Object.isFrozen(t)||(t[n]=o),r=o)}e[r]=!0}return e}function t(e){var t={},n=void 0;for(n in e)g(h,e,[n])&&(t[n]=e[n]);return t}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O(),u=function(e){return r(e)};if(u.version="2.0.3",u.removed=[],!o||!o.document||9!==o.document.nodeType)return u.isSupported=!1,u;var h=o.document,y=!1,g=!1,v=!1,R=o.document,D=o.DocumentFragment,C=o.HTMLTemplateElement,H=o.Node,F=o.NodeFilter,z=o.NamedNodeMap,I=void 0===z?o.NamedNodeMap||o.MozNamedAttrMap:z,U=o.Text,j=o.Comment,P=o.DOMParser,W=o.TrustedTypes;if("function"==typeof C){var B=R.createElement("template");B.content&&B.content.ownerDocument&&(R=B.content.ownerDocument)}var q=N(W,h),G=q?q.createHTML(""):"",V=R,Y=V.implementation,K=V.createNodeIterator,X=V.getElementsByTagName,$=V.createDocumentFragment,J=h.importNode,Q={};u.isSupported=Y&&void 0!==Y.createHTMLDocument&&9!==R.documentMode;var Z=T,ee=b,te=A,ne=x,re=S,oe=M,ie=L,ae=null,le=e({},[].concat(n(i),n(a),n(l),n(c),n(s))),ce=null,se=e({},[].concat(n(d),n(f),n(p),n(m))),ue=null,de=null,fe=!0,pe=!0,me=!1,he=!1,ye=!1,ge=!1,ve=!1,Te=!1,be=!1,Ae=!1,xe=!1,Le=!1,Se=!0,Me=!0,Ee=!1,we={},ke=e({},["audio","colgroup","head","math","script","style","template","thead","svg","video"]),_e=e({},["audio","video","img","source","image"]),Oe=null,Ne=e({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Re=null,De=R.createElement("form"),Ce=function(r){Re&&Re===r||(r&&"object"===(void 0===r?"undefined":E(r))||(r={}),ae="ALLOWED_TAGS"in r?e({},r.ALLOWED_TAGS):le,ce="ALLOWED_ATTR"in r?e({},r.ALLOWED_ATTR):se,Oe="ADD_URI_SAFE_ATTR"in r?e(t(Ne),r.ADD_URI_SAFE_ATTR):Ne,ue="FORBID_TAGS"in r?e({},r.FORBID_TAGS):{},de="FORBID_ATTR"in r?e({},r.FORBID_ATTR):{},we="USE_PROFILES"in r&&r.USE_PROFILES,fe=!1!==r.ALLOW_ARIA_ATTR,pe=!1!==r.ALLOW_DATA_ATTR,me=r.ALLOW_UNKNOWN_PROTOCOLS||!1,he=r.SAFE_FOR_JQUERY||!1,ye=r.SAFE_FOR_TEMPLATES||!1,ge=r.WHOLE_DOCUMENT||!1,be=r.RETURN_DOM||!1,Ae=r.RETURN_DOM_FRAGMENT||!1,xe=r.RETURN_DOM_IMPORT||!1,Le=r.RETURN_TRUSTED_TYPE||!1,Te=r.FORCE_BODY||!1,Se=!1!==r.SANITIZE_DOM,Me=!1!==r.KEEP_CONTENT,Ee=r.IN_PLACE||!1,ie=r.ALLOWED_URI_REGEXP||ie,ye&&(pe=!1),Ae&&(be=!0),we&&(ae=e({},[].concat(n(s))),ce=[],!0===we.html&&(e(ae,i),e(ce,d)),!0===we.svg&&(e(ae,a),e(ce,f),e(ce,m)),!0===we.svgFilters&&(e(ae,l),e(ce,f),e(ce,m)),!0===we.mathMl&&(e(ae,c),e(ce,p),e(ce,m))),r.ADD_TAGS&&(ae===le&&(ae=t(ae)),e(ae,r.ADD_TAGS)),r.ADD_ATTR&&(ce===se&&(ce=t(ce)),e(ce,r.ADD_ATTR)),r.ADD_URI_SAFE_ATTR&&e(Oe,r.ADD_URI_SAFE_ATTR),Me&&(ae["#text"]=!0),ge&&e(ae,["html","head","body"]),ae.table&&(e(ae,["tbody"]),delete ue.tbody),_&&_(r),Re=r)},He=function(e){u.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=G}},Fe=function(e,t){try{u.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){u.removed.push({attribute:null,from:t})}t.removeAttribute(e)},ze=function(t){var n=void 0,r=void 0;if(Te)t="<remove></remove>"+t;else{var o=t.match(/^[\s]+/);(r=o&&o[0])&&(t=t.slice(r.length))}if(y)try{n=(new P).parseFromString(t,"text/html")}catch(e){}if(v&&e(ue,["title"]),!n||!n.documentElement){var i=(n=Y.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=q?q.createHTML(t):t}return r&&n.body.insertBefore(R.createTextNode(r),n.body.childNodes[0]||null),X.call(n,ge?"html":"body")[0]};u.isSupported&&(function(){try{ze('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(y=!0)}catch(e){}}(),function(){try{ze("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(v=!0)}catch(e){}}(),function(){try{ze("<svg></p></svg>").querySelector("svg p")&&(g=!0)}catch(e){}}());var Ie=function(e){return K.call(e.ownerDocument||e,e,F.SHOW_ELEMENT|F.SHOW_COMMENT|F.SHOW_TEXT,function(){return F.FILTER_ACCEPT},!1)},Ue=function(e){return!(e instanceof U||e instanceof j)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof I&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},je=function(e){return"object"===(void 0===H?"undefined":E(H))?e instanceof H:e&&"object"===(void 0===e?"undefined":E(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Pe=function(e,t,n){Q[e]&&Q[e].forEach(function(e){e.call(u,t,n,Re)})},We=function(e){var t=void 0;if(Pe("beforeSanitizeElements",e,null),Ue(e))return He(e),!0;var n=e.nodeName.toLowerCase();if(Pe("uponSanitizeElement",e,{tagName:n,allowedTags:ae}),!ae[n]||ue[n]){if(Me&&!ke[n]&&"function"==typeof e.insertAdjacentHTML)try{var r=e.innerHTML;e.insertAdjacentHTML("AfterEnd",q?q.createHTML(r):r)}catch(e){}return He(e),!0}return"noscript"===n&&e.innerHTML.match(/<\/noscript/i)?(He(e),!0):"noembed"===n&&e.innerHTML.match(/<\/noembed/i)?(He(e),!0):e.namespaceURI&&e.namespaceURI.match(/svg|math/i)&&e.textContent&&e.textContent.match(new RegExp("</"+n,"i"))?(He(e),!0):"svg"!==n&&"math"!==n||!(e.innerHTML&&e.innerHTML.match(/<template/i)||void 0===e.innerHTML&&g)?(!he||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(u.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),ye&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(Z," ")).replace(ee," "),e.textContent!==t&&(u.removed.push({element:e.cloneNode()}),e.textContent=t)),Pe("afterSanitizeElements",e,null),!1):(He(e),!0)},Be=function(e,t,n){if(Se&&("id"===t||"name"===t)&&(n in R||n in De))return!1;if(pe&&te.test(t));else if(fe&&ne.test(t));else{if(!ce[t]||de[t])return!1;if(Oe[t]);else if(ie.test(n.replace(oe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==n.indexOf("data:")||!_e[e]){if(me&&!re.test(n.replace(oe,"")));else if(n)return!1}else;}return!0},qe=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,i=void 0;Pe("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ce};for(i=a.length;i--;){var c=t=a[i],s=c.name,d=c.namespaceURI;if(n=t.value.trim(),r=s.toLowerCase(),l.attrName=r,l.attrValue=n,l.keepAttr=!0,Pe("uponSanitizeAttribute",e,l),n=l.attrValue,g&&n.match(/<\//)&&He(e),"name"===r&&"IMG"===e.nodeName&&a.id)o=a.id,a=w(k,a,[]),Fe("id",e),Fe(s,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&l.keepAttr&&(ce[r]||!de[r]))continue;"id"===s&&e.setAttribute(s,""),Fe(s,e)}if(l.keepAttr){ye&&(n=(n=n.replace(Z," ")).replace(ee," "));var f=e.nodeName.toLowerCase();if(Be(f,r,n))try{d?e.setAttributeNS(d,s,n):e.setAttribute(s,n),u.removed.pop()}catch(e){}}}Pe("afterSanitizeAttributes",e,null)}},Ge=function e(t){var n=void 0,r=Ie(t);for(Pe("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Pe("uponSanitizeShadowNode",n,null),We(n)||(n.content instanceof D&&e(n.content),qe(n));Pe("afterSanitizeShadowDOM",t,null)};return u.sanitize=function(e,t){var n=void 0,r=void 0,i=void 0,a=void 0,l=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!je(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!u.isSupported){if("object"===E(o.toStaticHTML)||"function"==typeof o.toStaticHTML){if("string"==typeof e)return o.toStaticHTML(e);if(je(e))return o.toStaticHTML(e.outerHTML)}return e}if(ve||Ce(t),u.removed=[],Ee);else if(e instanceof H)1===(r=(n=ze("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName?n=r:"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!be&&!ye&&!ge&&Le&&-1===e.indexOf("<"))return q?q.createHTML(e):e;if(!(n=ze(e)))return be?null:G}n&&Te&&He(n.firstChild);for(var c=Ie(Ee?e:n);i=c.nextNode();)3===i.nodeType&&i===a||We(i)||(i.content instanceof D&&Ge(i.content),qe(i),a=i);if(a=null,Ee)return e;if(be){if(Ae)for(l=$.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return xe&&(l=J.call(h,l,!0)),l}var s=ge?n.outerHTML:n.innerHTML;return ye&&(s=(s=s.replace(Z," ")).replace(ee," ")),q&&Le?q.createHTML(s):s},u.setConfig=function(e){Ce(e),ve=!0},u.clearConfig=function(){Re=null,ve=!1},u.isValidAttribute=function(e,t,n){Re||Ce({});var r=e.toLowerCase(),o=t.toLowerCase();return Be(r,o,n)},u.addHook=function(e,t){"function"==typeof t&&(Q[e]=Q[e]||[],Q[e].push(t))},u.removeHook=function(e){Q[e]&&Q[e].pop()},u.removeHooks=function(e){Q[e]&&(Q[e]=[])},u.removeAllHooks=function(){Q={}},u}var o=Object.freeze||function(e){return e},i=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),a=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),l=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),c=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),s=o(["#text"]),u=Object.freeze||function(e){return e},d=u(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","minlength","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),f=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),p=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),m=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),h=Object.hasOwnProperty,y=Object.setPrototypeOf,g=("undefined"!=typeof Reflect&&Reflect).apply;g||(g=function(e,t,n){return e.apply(t,n)});var v=Object.seal||function(e){return e},T=v(/\{\{[\s\S]*|[\s\S]*\}\}/gm),b=v(/<%[\s\S]*|[\s\S]*%>/gm),A=v(/^data-[\-\w.\u00B7-\uFFFF]/),x=v(/^aria-[\-\w]+$/),L=v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),S=v(/^(?:\w+script|data):/i),M=v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w=("undefined"!=typeof Reflect&&Reflect).apply,k=Array.prototype.slice,_=Object.freeze,O=function(){return"undefined"==typeof window?null:window};w||(w=function(e,t,n){return e.apply(t,n)});var N=function(e,t){if("object"!==(void 0===e?"undefined":E(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return r()});
//# sourceMappingURL=purify.min.js.map