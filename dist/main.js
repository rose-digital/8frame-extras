(()=>{var e={705:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},738:e=>{"use strict";e.exports=function(e){return e[1]}},174:e=>{"use strict";e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),n.hash&&(e+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},48:e=>{e.exports=AFRAME.registerComponent("loading-skinner",{schema:{primaryColor:{default:""},secondaryColor:{default:""},backgroundColor:{default:""},primaryButtonColor:{default:""},secondaryButtonColor:{default:""},textColor:{default:""},fontFamily:{default:""},cameraIcon:{default:""},loadingIcon:{default:""},poweredByIcon:{default:""},loadingIconAnimation:{default:""},promptText:{default:""},primaryButtonText:{default:""},secondaryButtonText:{default:""}},init:function(){var e=this.data,n=e.primaryColor,t=e.secondaryColor,r=e.backgroundColor,o=e.primaryButtonColor,a=e.secondaryButtonColor,c=e.textColor,s=e.fontFamily,i=e.cameraIcon,l=e.loadingIcon,d=e.loadingIconAnimation,u=e.poweredByIcon,p=e.promptText,m=e.primaryButtonText,f=e.secondaryButtonText,h="";if(n&&(h=h.concat("\n        #requestingCameraPermissions {\n          background-color: ".concat(n,";\n        }\n      "))),t&&(h=h.concat("\n        .prompt-box-8w {\n          background-color: ".concat(t,";\n        }\n      "))),r&&(h=h.concat("\n        #loadBackground {\n          background-color: ".concat(r,";\n        }\n      "))),o&&(h=h.concat("\n        .button-primary-8w {\n          background-color: ".concat(o,";\n        }\n      "))),a&&(h=h.concat("\n        .prompt-button-8w {\n          background-color: ".concat(a,";\n        }\n      "))),c&&(h=h.concat("\n        #loadingContainer * {\n          color: ".concat(c,";\n        }\n      "))),s&&(h=h.concat("\n        #loadingContainer * {\n          font-family: ".concat(s,";\n        }\n      "))),i&&(document.getElementById("requestingCameraIcon").src=i),l&&(document.getElementById("loadImage").src=l),l&&(document.getElementById("loadImage").src=l),d){var y=document.getElementById("loadImage");y.classList.remove("spin"),"none"!==d&&y.classList.add(d)}if(u&&(document.querySelector(".poweredby-img").src=u),p||m||f){var g=!1,b=new MutationObserver((function(){document.querySelector(".prompt-box-8w")?(g||(p&&(document.querySelector(".prompt-box-8w p").innerHTML=p),m&&(document.querySelector(".button-primary-8w").innerHTML=m),f&&(document.querySelector(".prompt-button-8w").innerHTML=f)),g=!0):g&&(g=!1,b.disconnect())}));b.observe(document.body,{childList:!0})}var v=document.createElement("style");v.innerText=h,document.head.appendChild(v)}})},558:(e,n,t)=>{t(348);var r=t(121).Z;e.exports=AFRAME.registerComponent("splash-screen",{schema:{backgroundImage:{type:"selector",default:null},title:{default:""},body:{default:""},cta:{default:"Enter AR"}},init:function(){var e=this.data,n=e.backgroundImage,t=e.title,o=e.body,a=e.cta;document.body.insertAdjacentHTML("beforeend",r),n&&(document.getElementById("splash-background").src=n),t&&(document.getElementById("splash-title").innerHTML=t),o&&(document.getElementById("splash-body").innerHTML=o),a&&(document.getElementById("splash-cta").innerHTML=a),this.el.sceneEl.addEventListener("realityready",(function(){document.getElementById("splash-content").classList.add("fade-in"),document.getElementById("splash-cta").addEventListener("click",(function(){var e=document.getElementById("splash");e.classList.add("fade-out"),setTimeout((function(){e.parentNode.removeChild(e)}),1500)}))}))}})},408:(e,n,t)=>{t(124),e.exports=AFRAME.registerComponent("ui-carousel",{schema:{selected:{default:0}},init:function(){var e=this.el;e.setAttribute("id","carousel"),Array.from(e.children).forEach((function(e){return e.classList.add("carousel-cell")}));var n=document.createElement("script");n.type="text/javascript",n.onload=function(){var n=this;this.flickity=new Flickity(e,{friction:.6,pageDots:!1,prevNextButtons:!1,selectedAttraction:.25,on:{select:function(n){e.setAttribute("ui-carousel",{selected:n})},staticClick:function(e,t,r,o){n.flickity.select(o)}}})},n.src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js",document.querySelector("head").appendChild(n)},update:function(e){var n=this.el,t=this.data.selected;if(this.flickity&&e.selected!==t){var r=n.querySelectorAll(".carousel-cell");"number"==typeof e.selected&&r[e.selected].classList.remove("carousel-selected"),r[t].classList.add("carousel-selected"),this.el.sceneEl.emit("carouselchanged",{newIndex:t})}}})},96:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(738),o=t.n(r),a=t(705),c=t.n(a)()(o());c.push([e.id,"@keyframes fade-in {\r\n  0% {opacity: 0;}\r\n  100% {opacity: 1;}\r\n}\r\n\r\n.fade-in {animation: fade-in 1.5s ease-out;}\r\n\r\n#splash {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  z-index: 799;\r\n}\r\n\r\n#splash-background {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: black;\r\n  z-index: 0;\r\n}\r\n\r\n#splash-content {\r\n  width: 80vw;\r\n  margin-bottom: 3rem;\r\n  z-index: 1;\r\n}\r\n\r\n#splash-content > * {\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n#splash-title {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n}\r\n\r\n#splash-body {\r\n  line-height: 1.4;\r\n}\r\n\r\n#splash-cta {\r\n  border: none;\r\n  background-color: white;\r\n  color: black;\r\n  text-transform: uppercase;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  height: 4rem;\r\n  box-sizing: border-box;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  margin: 2.4rem 0 0;\r\n}\r\n\r\n#splash-cta:active {\r\n  background-color: #c9c9c9;\r\n  transform: scale(0.99);\r\n}\r\n\r\n#splash-footer {\r\n  position: absolute;\r\n  bottom: 3rem;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n#splash-logo {\r\n  height: 1rem;\r\n}\r\n",""]);const s=c},354:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(738),o=t.n(r),a=t(705),c=t.n(a)()(o());c.push([e.id,"#carousel {\r\n  position: absolute;\r\n  bottom: 28vmin;\r\n  width: 100%;\r\n  z-index: 798;\r\n}\r\n\r\n.carousel-cell {\r\n  font-size: 1rem;\r\n  border-radius: 500px;\r\n  border: 1px solid black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5rem 1.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.carousel-cell.is-selected {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n",""]);const s=c},121:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var r=t(174),o=t.n(r),a=new URL(t(904),t.b);const c='<div id="splash"> <img id="splash-background"/> <div id="splash-content"> <div id="splash-title"></div> <div id="splash-body"></div> <button id="splash-cta"></button> </div> <p id="splash-footer"> built by <img id="splash-logo" src="'+o()(a)+'"> </p> </div> '},348:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),a=t(795),c=t.n(a),s=t(569),i=t.n(s),l=t(565),d=t.n(l),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(96),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=i().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),o()(h.Z,y);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},124:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),a=t(795),c=t.n(a),s=t(569),i=t.n(s),l=t(565),d=t.n(l),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(354),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=i().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),o()(h.Z,y);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],l=r.base?i[0]+r.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=t(a[c]);n[s].references--}for(var i=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=i}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},904:e=>{"use strict";e.exports="data:image/png;base64,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"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.b=document.baseURI||self.location.href,t(48),t(558),t(408)})();