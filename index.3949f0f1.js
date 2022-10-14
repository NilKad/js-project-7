!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire6149;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire6149=i),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.3949f0f1.js","cZGKX":"aleksandr-k.0face9c2.jpg","3w1do":"Oksana.75e9795f.jpg","hHmKE":"Aleksei.4ff0f5bc.jpg","43tRB":"Dmytro.749b80ef.jpg","iMsfK":"Yulia.b93c1edf.jpg","13d51":"Anton.aee20f42.jpg","gJTnf":"Maksim.1af132b6.jpg","7mSLB":"Evgeniy.bd2e2384.jpg","1YPt6":"Yelyzaveta.ef8b2c61.jpg","hoUkr":"Artem.701c7726.jpg","aOQh9":"Yurii.7fd2c432.jpg","3qpTs":"sprite.2db19e08.svg","5UbS1":"index.2fe141de.css","GP9W6":"index.9d773c7d.js"}'));var a=i("bpxeT"),o=i("2TvXO"),s=i("lbRHt"),u=i("aTzrc"),c=0,l=window.matchMedia("(max-width: 768px)"),h=window.matchMedia("(min-width: 769px) and (max-width: 1279px)"),d=window.matchMedia("(min-width: 1280px)");function f(e){return options={totalItems:e,itemsPerPage:20,visiblePages:c,centerAlign:!1}}l.matches&&(c=3),h.matches&&(c=5),d.matches&&(c=6);var v=i("g2YN6"),p=i("6fJbC"),m=i("1VFfL"),y=document.querySelector(".movies"),g=document.querySelector(".hero-home__form"),_=document.querySelector(".fail-search"),k=new(0,p.localStorageAPI);function b(){return(b=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.target.closest("li").dataset.id,"UL"!==n.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:try{i=k.getData("movies"),a=k.getData("genresList"),s=i.filter((function(e){return e.id===Number(r)}))[0],(u=s.genre_ids)&&(c=a.filter((function(e){var t=e.id;return u.includes(t)})).map((function(e){return e.name}))),s.genres=c,k.setData("current-film",s),(0,v.modalBasicLightbox)(s),k.addListenersToBtns()}catch(e){console.log(e.message)}case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(e){return I.apply(this,arguments)}function I(){return(I=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.fetchMoviesByName)(n);case 2:if(0!==(r=t.sent).results.length){t.next=8;break}return _.classList.remove("is-hidden"),setTimeout((function(){return _.classList.add("is-hidden")}),5e3),g.reset(),t.abrupt("return");case 8:y.innerHTML=(0,u.createMovieCards)(r.results),new(e(m))("pagination",f(r.total_results)).on("afterMove",(function(e){var t=e.page;(0,s.fetchMoviesByName)(n,t).then((function(e){y.innerHTML=(0,u.createMovieCards)(e.results),window.scrollTo({top:0,behavior:"smooth"})})).catch((function(e){console.log(e)}))}));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}y.addEventListener("click",(function(e){return b.apply(this,arguments)}));var T,C=i("l5bVx"),x=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,R=/^0o[0-7]+$/i,N=parseInt,P="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,A=P||O||Function("return this")(),D=Object.prototype.toString,M=Math.max,L=Math.min,F=function(){return A.Date.now()};function U(t){var n=void 0===t?"undefined":e(C)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(C)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==D.call(t)}(t))return NaN;if(U(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=U(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(x,"");var r=S.test(t);return r||R.test(t)?N(t.slice(2),r?2:8):E.test(t)?NaN:+t}T=function(e,t,n){var r,i,a,o,s,u,c=0,l=!1,h=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function v(e){return c=e,s=setTimeout(m,t),l?f(e):o}function p(e){var n=e-u;return void 0===u||n>=t||n<0||h&&e-c>=a}function m(){var e=F();if(p(e))return y(e);s=setTimeout(m,function(e){var n=t-(e-u);return h?L(n,a-(e-c)):n}(e))}function y(e){return s=void 0,d&&r?f(e):(r=i=void 0,o)}function g(){var e=F(),n=p(e);if(r=arguments,i=this,u=e,n){if(void 0===s)return v(u);if(h)return s=setTimeout(m,t),f(u)}return void 0===s&&(s=setTimeout(m,t)),o}return t=j(t)||0,U(n)&&(l=!!n.leading,a=(h="maxWait"in n)?M(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=u=i=s=void 0},g.flush=function(){return void 0===s?o:y(F())},g};s=i("lbRHt");var q=function(e){console.log(e);var t=e.map((function(e){var t=e.title,n=e.vote_average,r=e.release_date,i=e.id;return r.length>0&&(r=r.slice(0,4)),{title:t,vote_average:n,release_date:r,id:i}}));return console.log("newArr: ",t),t},H=function(e){return e.map(W).join("")},W=function(e,t,n){var r=e.title,i=e.release_date,a=e.id;return'\n      <div class="search-result__item" tadindex="0" data-index='.concat(t," data-id=").concat(a,'>\n        <p class="search-result__title">').concat(r,'</p>\n        <spam class="search-result__date"> (').concat(i,")</spam>\n\n      </div>\n      ")},z=document.querySelector(".search-result"),V=document.querySelector(".hero-home__form"),B=document.querySelector(".form_input"),K=null,G=function(e){console.log("fetchData.results: ",e);var t,n,r=(t=e.results,n=q(t),console.log("new Item: ",n),H(n));J(r)},J=function(e){z.innerHTML=e,document.body.addEventListener("click",Y)},Y=function(e){e.target.closest(".hero-home__form")||(J(""),document.body.removeEventListener("click",Y)),console.log("evt:  ",e);var t=e.target.closest(".search-result__item");console.log("elementOfClick:   ",t);var n=t.dataset.id,r=t.firstElementChild.textContent;console.log("searchID: ",n),console.log("searchName: ",r),J(""),w(r)};V.addEventListener("submit",(function(e){e.preventDefault();var t=V.elements.searchQuery.value.trim();return""===t?console.log("Empty search query"):(J(""),void w(t))}));B.addEventListener("input",e(T)((function(e){0!==(K=e.target.value.trim()).length?(0,s.fetchMoviesByName)(K).then((function(e){console.log("fetchMoviesByName data.results: ",e.results),G(e)})):J("")}),500));var Q=i("dyT35"),X=document.querySelector("#signup-btn"),$=document.querySelector("#login-btn"),Z=document.querySelector(".close-singup-btn"),ee=document.querySelector(".close-login-btn");document.querySelector(".open-modal-svg").addEventListener("click",(function(e){e.preventDefault(),te.show(),window.addEventListener("keydown",(function(e){"Escape"===e.code&&te.close()}))}));var te=Q.create(document.querySelector("#modal-welcome"),{className:"modal-registr"});X.addEventListener("click",(function(e){e.preventDefault(),ne.show(),window.addEventListener("keydown",(function(e){"Escape"===e.code&&ne.close()})),te.close()})),$.addEventListener("click",(function(e){e.preventDefault(),te.show(),ne.close()})),Z.addEventListener("click",re),ee.addEventListener("click",re);var ne=Q.create(document.querySelector("#modal-singup"));function re(e){e.preventDefault(),te.close(),ne.close()}document.getElementById("#user-password"),document.querySelector("#user-verify-password");document.querySelector("#signup-submit"),document.querySelector(".modal-registr-btn-sbmt");function ie(){te.close(),ne.close()}var ae=ne.element().querySelector("#registration-form"),oe=ne.element().querySelector("#registration-form-email"),se=ne.element().querySelector("#registration-form-password"),ue=te.element().querySelector("#login-form"),ce=(te.element().querySelector("#login-form-name"),te.element().querySelector("#login-form-email")),le=te.element().querySelector("#login-form-password"),he=(a=i("bpxeT"),i("8MBJY")),de=i("a2hTj"),fe=i("hKHmD"),ve={};Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=function(e){return pe.default(e)||me.default(e)||ge.default(e)||ye.default()};var pe=_e(i("kMC0W")),me=_e(i("7AJDX")),ye=_e(i("8CtQK")),ge=_e(i("auk6i"));function _e(e){return e&&e.__esModule?e:{default:e}}o=i("2TvXO"),a=i("bpxeT"),he=i("8MBJY"),de=i("a2hTj");var ke={};Object.defineProperty(ke,"__esModule",{value:!0}),ke.default=function(e,t){return be.default(e)||we.default(e,t)||Te.default(e,t)||Ie.default()};var be=Ce(i("8slrw")),we=Ce(i("7AJDX")),Ie=Ce(i("ifqQW")),Te=Ce(i("auk6i"));function Ce(e){return e&&e.__esModule?e:{default:e}}o=i("2TvXO");var xe=i("ds8z5"),Ee=(he=i("8MBJY"),de=i("a2hTj"),i("eYQtU")),Se={};Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=function(e){return De(e)};var Re=Ae(i("ge8co")),Ne=Ae(i("cZGw3")),Pe=Ae(i("fVNic")),Oe=Ae(i("gD1JV"));function Ae(e){return e&&e.__esModule?e:{default:e}}function De(e){var t="function"==typeof Map?new Map:void 0;return De=function(e){if(null===e||!Ne.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Re.default(e,arguments,Pe.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Oe.default(n,e)},De(e)}var Me=i("2MbLg"),Le=i("6qd2L"),Fe=!1,Ue=!1,je="${JSCORE_VERSION}",qe=function(e,t){if(!e)throw He(t)},He=function(e){return new Error("Firebase Database ("+je+") INTERNAL ASSERT FAILED: "+e)},We=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ze={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,f=63&c;u||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(We(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ve=function(e){var t=We(e);return ze.encodeByteArray(t,!0)},Be=function(e){return Ve(e).replace(/\./g,"")},Ke=function(e){try{return ze.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(e){return Je(void 0,e)}function Je(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Je(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Qe(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Xe(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function $e(){return!0===Fe||!0===Ue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ze=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},et=function(){return Ze()||function(){if(void 0!==Le);}()||function(){if("undefined"!=typeof document){var e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),t=e&&Ke(e[1]);return t&&JSON.parse(t)}}()},tt=function(e){var t,n;return null===(n=null===(t=et())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},nt=function(){var e;return null===(e=et())||void 0===e?void 0:e.config},rt=function(e){var t;return null===(t=et())||void 0===t?void 0:t["_".concat(e)]},it=function(){"use strict";function t(){var n=this;e(he)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(de)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Be(JSON.stringify({alg:"none",type:"JWT"})),Be(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t,i,a){var o;return e(he)(this,r),(o=n.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(xe)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(xe)(o),st.prototype.create),o}return r}(e(Se)(Error)),st=function(){"use strict";function t(n,r,i){e(he)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(de)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?ut(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ot(a,u,i);return c}}]),t}();function ut(e,t){return e.replace(ct,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ct=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){return JSON.parse(e)}function ht(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=lt(Ke(a[0])||""),n=lt(Ke(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},ft=function(e){var t=dt(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function pt(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function mt(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function yt(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function gt(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(_t(l)&&_t(h)){if(!gt(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,f=!1,v=void 0;try{for(var p,m=r[Symbol.iterator]();!(d=(p=m.next()).done);d=!0){var y=p.value;if(!n.includes(y))return!1}}catch(e){f=!0,v=e}finally{try{d||null==m.return||m.return()}finally{if(f)throw v}}return!0}function _t(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kt(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(ke)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function bt(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(ke)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function wt(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It=function(){"use strict";function t(){e(he)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(de)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],d=this.chain_[3],f=this.chain_[4],v=0;v<80;v++){v<40?v<20?(s=d^l&(h^d),u=1518500249):(s=l^h^d,u=1859775393):v<60?(s=l&h|d&(l|h),u=2400959708):(s=l^h^d,u=3395469782);var p=(c<<5|c>>>27)+s+f+u+n[v]&4294967295;f=d,d=h,h=4294967295&(l<<30|l>>>2),l=c,c=p}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),t}();var Tt=function(){"use strict";function t(n,r){var i=this;e(he)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(de)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Ct),void 0===r.error&&(r.error=Ct),void 0===r.complete&&(r.complete=Ct);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Ct(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Et=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,qe(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},St=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(e){return e&&e._delegate?e._delegate:e}var Nt=function(){"use strict";function t(n,r,i){e(he)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(de)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Pt="[DEFAULT]",Ot=function(){"use strict";function t(n,r){e(he)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(de)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new it;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(ke)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(ve)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(ve)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(ke)(c.value,2),d=h[0],f=h[1],v=this.normalizeInstanceIdentifier(d);i===v&&f.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Pt?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt;return this.component?this.component.multipleInstances?e:Pt:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,Dt,Mt=function(){"use strict";function t(n){e(he)(this,t),this.name=n,this.providers=new Map}return e(de)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ot(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Lt=(he=i("8MBJY"),de=i("a2hTj"),fe=i("hKHmD"),[]);(Dt=At||(At={}))[Dt.DEBUG=0]="DEBUG",Dt[Dt.VERBOSE=1]="VERBOSE",Dt[Dt.INFO=2]="INFO",Dt[Dt.WARN=3]="WARN",Dt[Dt.ERROR=4]="ERROR",Dt[Dt.SILENT=5]="SILENT";var Ft,Ut={debug:At.DEBUG,verbose:At.VERBOSE,info:At.INFO,warn:At.WARN,error:At.ERROR,silent:At.SILENT},jt=At.INFO,qt=(Ft={},e(fe)(Ft,At.DEBUG,"log"),e(fe)(Ft,At.VERBOSE,"log"),e(fe)(Ft,At.INFO,"info"),e(fe)(Ft,At.WARN,"warn"),e(fe)(Ft,At.ERROR,"error"),Ft),Ht=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=qt[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(ve)(i)))}},Wt=function(){"use strict";function t(n){e(he)(this,t),this.name=n,this._logLevel=jt,this._logHandler=Ht,this._userLogHandler=null,Lt.push(this)}return e(de)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in At))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Ut[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,At.DEBUG].concat(e(ve)(n))),this._logHandler.apply(this,[this,At.DEBUG].concat(e(ve)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,At.VERBOSE].concat(e(ve)(n))),this._logHandler.apply(this,[this,At.VERBOSE].concat(e(ve)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,At.INFO].concat(e(ve)(n))),this._logHandler.apply(this,[this,At.INFO].concat(e(ve)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,At.WARN].concat(e(ve)(n))),this._logHandler.apply(this,[this,At.WARN].concat(e(ve)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,At.ERROR].concat(e(ve)(n))),this._logHandler.apply(this,[this,At.ERROR].concat(e(ve)(n)))}}]),t}();a=i("bpxeT");var zt={};Object.defineProperty(zt,"__esModule",{value:!0}),zt.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Bt.default(e,t,n[t])}))}return e};var Vt,Bt=(Vt=i("hKHmD"))&&Vt.__esModule?Vt:{default:Vt};var Kt,Gt;o=i("2TvXO");var Jt=new WeakMap,Yt=new WeakMap,Qt=new WeakMap,Xt=new WeakMap,$t=new WeakMap;var Zt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Yt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Qt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function en(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Gt||(Gt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(rn(this),n),nn(Jt.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return nn(t.apply(rn(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[rn(this),n].concat(e(ve)(i)));return Qt.set(s,n.sort?n.sort():[n]),nn(s)}}function tn(e){return"function"==typeof e?en(e):(e instanceof IDBTransaction&&function(e){if(!Yt.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Yt.set(e,t)}}(e),t=e,(Kt||(Kt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Zt):e);var t}function nn(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(nn(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Jt.set(e,t)})).catch((function(){})),$t.set(n,t),n;var t,n;if(Xt.has(e))return Xt.get(e);var r=tn(e);return r!==e&&(Xt.set(e,r),$t.set(r,e)),r}var rn=function(e){return $t.get(e)};function an(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=nn(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(nn(s.result),e.oldVersion,e.newVersion,nn(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var on=["get","getKey","getAll","getAllKeys","count"],sn=["put","add","delete","clear"],un=new Map;function cn(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(un.get(n))return un.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,s=sn.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(s||on.includes(r))){var u,c=(u=e(a)(e(o).mark((function t(n){var a,u,c,l,h,d,f=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=f.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=f[c];return h=this.transaction(n,s?"readwrite":"readonly"),d=h.store,i&&(d=d.index(u.shift())),t.next=7,Promise.all([(l=d)[r].apply(l,e(ve)(u)),s&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return un.set(n,c),c}}}Zt=function(t){return e(zt)({},t,{get:function(e,n,r){return cn(e,n)||t.get(e,n,r)},has:function(e,n){return!!cn(e,n)||t.has(e,n)}})}(Zt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ln=function(){"use strict";function t(n){e(he)(this,t),this.container=n}return e(de)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var hn,dn,fn="@firebase/app",vn="0.8.0",pn=new Wt("@firebase/app"),mn="[DEFAULT]",yn=(hn={},e(fe)(hn,fn,"fire-core"),e(fe)(hn,"@firebase/app-compat","fire-core-compat"),e(fe)(hn,"@firebase/analytics","fire-analytics"),e(fe)(hn,"@firebase/analytics-compat","fire-analytics-compat"),e(fe)(hn,"@firebase/app-check","fire-app-check"),e(fe)(hn,"@firebase/app-check-compat","fire-app-check-compat"),e(fe)(hn,"@firebase/auth","fire-auth"),e(fe)(hn,"@firebase/auth-compat","fire-auth-compat"),e(fe)(hn,"@firebase/database","fire-rtdb"),e(fe)(hn,"@firebase/database-compat","fire-rtdb-compat"),e(fe)(hn,"@firebase/functions","fire-fn"),e(fe)(hn,"@firebase/functions-compat","fire-fn-compat"),e(fe)(hn,"@firebase/installations","fire-iid"),e(fe)(hn,"@firebase/installations-compat","fire-iid-compat"),e(fe)(hn,"@firebase/messaging","fire-fcm"),e(fe)(hn,"@firebase/messaging-compat","fire-fcm-compat"),e(fe)(hn,"@firebase/performance","fire-perf"),e(fe)(hn,"@firebase/performance-compat","fire-perf-compat"),e(fe)(hn,"@firebase/remote-config","fire-rc"),e(fe)(hn,"@firebase/remote-config-compat","fire-rc-compat"),e(fe)(hn,"@firebase/storage","fire-gcs"),e(fe)(hn,"@firebase/storage-compat","fire-gcs-compat"),e(fe)(hn,"@firebase/firestore","fire-fst"),e(fe)(hn,"@firebase/firestore-compat","fire-fst-compat"),e(fe)(hn,"fire-js","fire-js"),e(fe)(hn,"firebase","fire-js-all"),hn),gn=new Map,_n=new Map;function kn(e,t){try{e.container.addComponent(t)}catch(n){pn.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function bn(e){var t=e.name;if(_n.has(t))return pn.debug("There were multiple attempts to register component ".concat(t,".")),!1;_n.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=gn.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){kn(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function wn(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var In=(dn={},e(fe)(dn,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(fe)(dn,"bad-app-name","Illegal App name: '{$appName}"),e(fe)(dn,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(fe)(dn,"app-deleted","Firebase App named '{$appName}' already deleted"),e(fe)(dn,"no-options","Need to provide options, when not being deployed to hosting via source."),e(fe)(dn,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(fe)(dn,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(fe)(dn,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(fe)(dn,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(fe)(dn,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(fe)(dn,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),dn),Tn=new st("app","Firebase",In),Cn=function(){"use strict";function t(n,r,i){var a=this;e(he)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Nt("app",(function(){return a}),"PUBLIC"))}return e(de)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}]),t}(),xn="9.11.0";function En(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:mn,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Tn.create("bad-app-name",{appName:String(a)});if(n||(n=nt()),!n)throw Tn.create("no-options");var o=gn.get(a);if(o){if(gt(n,o.options)&&gt(i,o.config))return o;throw Tn.create("duplicate-app",{appName:a})}var s=new Mt(a),u=!0,c=!1,l=void 0;try{for(var h,d=_n.values()[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;s.addComponent(f)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var v=new Cn(n,i,s);return gn.set(a,v),v}function Sn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mn,t=gn.get(e);if(!t&&e===mn)return En();if(!t)throw Tn.create("no-app",{appName:e});return t}function Rn(e,t,n){var r,i=null!==(r=yn[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void pn.warn(s.join(" "))}bn(new Nt("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nn="firebase-heartbeat-store",Pn=null;function On(){return Pn||(Pn=an("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Nn)}}).catch((function(e){throw Tn.create("idb-open",{originalErrorMessage:e.message})}))),Pn}function An(e){return Dn.apply(this,arguments)}function Dn(){return(Dn=e(a)(e(o).mark((function t(n){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,On();case 4:return i=e.sent,e.abrupt("return",i.transaction(Nn).objectStore(Nn).get(Fn(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof ot?pn.warn(e.t0.message):(a=Tn.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),pn.warn(a.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Mn(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,On();case 4:return a=e.sent,s=a.transaction(Nn,"readwrite"),u=s.objectStore(Nn),e.next=9,u.put(r,Fn(n));case 9:return e.abrupt("return",s.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof ot?pn.warn(e.t0.message):(c=Tn.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),pn.warn(c.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Fn(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Un=function(){"use strict";function t(n){var r=this;e(he)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Wn(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(de)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=jn(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=jn(),i=qn(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,s=i.unsentEntries,u=Be(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function jn(){return(new Date).toISOString().substring(0,10)}function qn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),zn(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),zn(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Hn,Wn=function(){"use strict";function t(n){e(he)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(de)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,An(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",Mn(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",Mn(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(ve)(a.heartbeats).concat(e(ve)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function zn(e){return Be(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn="",bn(new Nt("platform-logger",(function(e){return new ln(e)}),"PRIVATE")),bn(new Nt("heartbeat",(function(e){return new Un(e)}),"PRIVATE")),Rn(fn,vn,Hn),Rn(fn,vn,"esm2017"),Rn("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Rn("firebase","9.11.0","app");xe=i("ds8z5"),a=i("bpxeT"),he=i("8MBJY"),de=i("a2hTj"),Ee=i("eYQtU"),C=i("l5bVx"),Me=i("2MbLg"),o=i("2TvXO"),Le=i("6qd2L");var Vn="@firebase/database",Bn="0.13.7",Kn="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gn,Jn=function(){"use strict";function t(n){e(he)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(de)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ht(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:lt(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),Yn=function(){"use strict";function t(){e(he)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(de)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return vt(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),Qn=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Jn(t)}}catch(e){}return new Yn},Xn=Qn("localStorage"),$n=Qn("sessionStorage"),Zn=new Wt("@firebase/database"),er=(Gn=1,function(){return Gn++}),tr=function(e){var t=Et(e),n=new It;n.update(t);var r=n.digest();return ze.encodeByteArray(r)},nr=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=nr.apply(null,a):r+="object"==typeof a?ht(a):a,r+=" "}return r},rr=null,ir=!0,ar=function(e,t){qe(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Zn.logLevel=At.VERBOSE,rr=Zn.log.bind(Zn),t&&$n.set("logging_enabled",!0)):"function"==typeof e?rr=e:(rr=null,$n.remove("logging_enabled"))},or=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===ir&&(ir=!1,null===rr&&!0===$n.get("logging_enabled")&&ar(!0)),rr){var r=nr.apply(null,t);rr(r)}},sr=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];or.apply(void 0,[t].concat(e(ve)(r)))}},ur=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+nr.apply(void 0,e(ve)(n));Zn.error(i)},cr=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(nr.apply(void 0,e(ve)(n)));throw Zn.error(i),new Error(i)},lr=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+nr.apply(void 0,e(ve)(n));Zn.warn(i)},hr=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},dr="[MIN_NAME]",fr="[MAX_NAME]",vr=function(e,t){if(e===t)return 0;if(e===dr||t===fr)return-1;if(t===dr||e===fr)return 1;var n=Tr(e),r=Tr(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},pr=function(e,t){return e===t?0:e<t?-1:1},mr=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ht(t))},yr=function(e){if("object"!=typeof e||null===e)return ht(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=ht(t[i]),r+=":",r+=yr(e[t[i]]);return r+="}"},gr=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var kr=function(e){qe(!hr(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var br=new RegExp("^-?(0*)\\d{1,10}$"),wr=-2147483648,Ir=2147483647,Tr=function(e){if(br.test(e)){var t=Number(e);if(t>=wr&&t<=Ir)return t}return null},Cr=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw lr("Exception was thrown by user callback.",t),e}),Math.floor(0))}},xr=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},Er=function(){"use strict";function t(n,r){var i=this;e(he)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(de)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){lr('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),Sr=function(){"use strict";function t(n,r,i){var a=this;e(he)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return e(de)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(or("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lr(e)}}]),t}(),Rr=function(){"use strict";function t(n){e(he)(this,t),this.accessToken=n}return e(de)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();Rr.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nr="5",Pr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Or="websocket",Ar="long_polling",Dr=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e(he)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+n)||this._host}return e(de)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function Mr(e,t,n){var r;if(qe("string"==typeof t,"typeof type must == string"),qe("object"==typeof n,"typeof params must == object"),t===Or)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Ar)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return _r(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr=function(){"use strict";function t(){e(he)(this,t),this.counters_={}}return e(de)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return Ge(this.counters_)}}]),t}(),Fr={},Ur={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e){var t=e.toString();return Fr[t]||(Fr[t]=new Lr),Fr[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var qr=function(){"use strict";function t(n){e(he)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(de)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Cr((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),Hr="start",Wr="close",zr=function(){"use strict";function t(n,r,i,a,o,s,u){var c=this;e(he)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sr(n),this.stats_=jr(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),Mr(r,Ar,e)}}return e(de)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qr(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if($e()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new Vr((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(ke)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,o===Hr)t.id=s,t.password=u;else{if(o!==Wr)throw new Error("Unrecognized command received: "+o);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(ke)(r,2),o=a[0],s=a[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(o,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=Nr,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&Pr.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=ht(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=Ve(t),r=gr(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!$e()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=ht(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!$e()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),Vr=function(){"use strict";function t(n,r,i,a){if(e(he)(this,t),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,$e())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=er(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))o='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){or("frame writing exception"),e.stack&&or(e.stack),or(e)}}}return e(de)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;$e()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){or("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||or("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),Br=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"undefined"!=typeof MozWebSocket?Br=MozWebSocket:"undefined"!=typeof WebSocket&&(Br=WebSocket);var Kr=function(){"use strict";function t(n,r,i,a,o,s,u){e(he)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sr(this.connId),this.stats_=jr(r),this.connURL=t.connectionURL_(r,s,u,a,i),this.nodeAdmin=r.nodeAdmin}return e(de)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{var r;if($e()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(Nr,"/").concat(Kn,"/").concat(Le.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(r.proxy={origin:o})}this.mySock=new Br(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){Xn.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=lt(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(qe(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=ht(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=gr(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=Nr,!$e()&&"undefined"!=typeof location&&location.hostname&&Pr.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),Mr(e,Or,a)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Br&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return Xn.isInMemoryStorage||!0===Xn.get("previous_websocket_failure")}}]),t}();Kr.responsesRequiredToBeHealthy=2,Kr.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gr=function(){"use strict";function t(n){e(he)(this,t),this.initTransports_(n)}return e(de)(t,[{key:"initTransports_",value:function(e){var n=Kr&&Kr.isAvailable(),r=n&&!Kr.previouslyFailed();if(e.webSocketOnly&&(n||lr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kr];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[zr,Kr]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();Gr.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jr=function(){"use strict";function t(n,r,i,a,o,s,u,c,l,h){e(he)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sr("c:"+this.id+":"),this.transportManager_=new Gr(r),this.log_("Connection created"),this.start_()}return e(de)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=xr((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=mr("t",e),n=mr("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=mr("t",e),n=mr("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=mr("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ur("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ur("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Nr!==n&&lr("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),xr((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xr((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),Yr=function(){"use strict";function t(){e(he)(this,t)}return e(de)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),Qr=function(){"use strict";function t(n){e(he)(this,t),this.allowedEvents_=n,this.listeners_={},qe(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(de)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var a=e(ve)(this.listeners_[t]),o=0;o<a.length;o++)a[o].callback.apply(a[o].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){qe(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),Xr=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){var t;return e(he)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Qe()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(de)(r,[{key:"getInitialEvent",value:function(e){return qe("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(Qr),$r=function(){"use strict";function t(n,r){if(e(he)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(de)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function Zr(){return new $r("")}function ei(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ti(e){return e.pieces_.length-e.pieceNum_}function ni(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new $r(e.pieces_,t)}function ri(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ii(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function ai(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new $r(t,0)}function oi(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof $r)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new $r(n,0)}function si(e){return e.pieceNum_>=e.pieces_.length}function ui(e,t){var n=ei(e),r=ei(t);if(null===n)return t;if(n===r)return ui(ni(e),ni(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ci(e,t){if(ti(e)!==ti(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function li(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(ti(e)>ti(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var hi=function t(n,r){"use strict";e(he)(this,t),this.errorPrefix_=r,this.parts_=ii(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=St(this.parts_[i]);di(this)};function di(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+fi(e))}function fi(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){var t,i,a;return e(he)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,a&&document.addEventListener(a,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(de)(r,[{key:"getInitialEvent",value:function(e){return qe("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(Qr),pi=1e3,mi=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t,i,a,o,s,u,c,l){var h;if(e(he)(this,r),(h=n.call(this)).repoInfo_=t,h.applicationId_=i,h.onDataUpdate_=a,h.onConnectStatus_=o,h.onServerInfoUpdate_=s,h.authTokenProvider_=u,h.appCheckTokenProvider_=c,h.authOverride_=l,h.id=r.nextPersistentConnectionId_++,h.log_=sr("p:"+h.id+":"),h.interruptReasons_={},h.listens=new Map,h.outstandingPuts_=[],h.outstandingGets_=[],h.outstandingPutCount_=0,h.outstandingGetCount_=0,h.onDisconnectRequestQueue_=[],h.connected_=!1,h.reconnectDelay_=pi,h.maxReconnectDelay_=3e5,h.securityDebugCallback_=null,h.lastSessionId=null,h.establishConnectionTimer_=null,h.visible_=!1,h.requestCBHash_={},h.requestNumber_=0,h.realtime_=null,h.authToken_=null,h.appCheckToken_=null,h.forceTokenRefresh_=!1,h.invalidAuthTokenCount_=0,h.invalidAppCheckTokenCount_=0,h.firstConnection_=!0,h.lastConnectionAttemptTime_=null,h.lastConnectionEstablishedTime_=null,l&&!$e())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return vi.getInstance().on("visible",h.onVisible_,e(xe)(h)),-1===t.host.indexOf("fblocal")&&Xr.getInstance().on("online",h.onOnline_,e(xe)(h)),h}return e(de)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ht(i)),qe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new it,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),qe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),qe(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=dt(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=ft(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),qe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+ht(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ur("Unrecognized action received from server: "+ht(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;qe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=pi),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(a)(e(o).mark((function n(){var i,a,s,u,c,l,h,d,f,v,p,m,y;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),a=t.onReady_.bind(t),s=t.onRealtimeDisconnect_.bind(t),u=t.id+":"+r.nextConnectionId_++,c=t.lastSessionId,l=!1,h=null,d=function(){h?h.close():(l=!0,s())},f=function(e){qe(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},t.realtime_={close:d,sendRequest:f},v=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(ke),n.next=20,Promise.all([t.authTokenProvider_.getToken(v),t.appCheckTokenProvider_.getToken(v)]);case 20:n.t1=n.sent,p=(0,n.t0)(n.t1,2),m=p[0],y=p[1],l?or("getToken() completed but was canceled"):(or("getToken() completed. Creating connection."),t.authToken_=m&&m.accessToken,t.appCheckToken_=y&&y.token,h=new Jr(u,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,a,s,(function(e){lr(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),c)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),l||(t.repoInfo_.nodeAdmin&&lr(n.t2),d());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){or("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){or("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mt(this.interruptReasons_)&&(this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return yr(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new $r(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){or("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){or("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var d=0;d<this.outstandingPuts_.length;d++)this.outstandingPuts_[d]&&this.sendPut_(d);for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}for(var v=0;v<this.outstandingGets_.length;v++)this.outstandingGets_[v]&&this.sendGet_(v)}},{key:"sendConnectStats_",value:function(){var e={},t="js";$e()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Kn.replace(/\./g,"-")]=1,Qe()?e["framework.cordova"]=1:Xe()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=Xr.getInstance().currentlyOnline();return mt(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&vt(e,"w")){var n=pt(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();lr("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(Yr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mi.nextPersistentConnectionId_=0,mi.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yi,gi=function(){"use strict";function t(n,r){e(he)(this,t),this.name=n,this.node=r}return e(de)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),_i=function(){"use strict";function t(){e(he)(this,t)}return e(de)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new gi(dr,e),r=new gi(dr,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return gi.MIN}}]),t}(),ki=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){return e(he)(this,r),n.apply(this,arguments)}return e(de)(r,[{key:"compare",value:function(e,t){return vr(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw He("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return gi.MIN}},{key:"maxPost",value:function(){return new gi(fr,yi)}},{key:"makePost",value:function(e,t){return qe("string"==typeof e,"KeyIndex indexValue must always be a string."),new gi(e,yi)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return yi},set:function(e){yi=e}}]),r}(_i),bi=new ki,wi=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(he)(this,t),this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,a&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(de)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),Ii=function(){"use strict";function t(n,r,i,a,o){e(he)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:xi.EMPTY_NODE,this.right=null!=o?o:xi.EMPTY_NODE}return e(de)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return xi.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return xi.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ii.RED=!0,Ii.BLACK=!1;var Ti,Ci=function(){"use strict";function t(){e(he)(this,t)}return e(de)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Ii(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),xi=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(he)(this,t),this.comparator_=n,this.root_=r}return e(de)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ii.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ii.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new wi(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new wi(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new wi(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new wi(this.root_,null,this.comparator_,!0,e)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ei(e,t){return vr(e.name,t.name)}function Si(e,t){return vr(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi.EMPTY_NODE=new Ci;var Ri,Ni,Pi,Oi=function(e){return"number"==typeof e?"number:"+kr(e):"string:"+e},Ai=function(e){if(e.isLeafNode()){var t=e.val();qe("string"==typeof t||"number"==typeof t||"object"==typeof t&&vt(t,".sv"),"Priority must be a string or number.")}else qe(e===Ti||e.isEmpty(),"priority of unexpected type.");qe(e===Ti||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},Di=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(he)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,qe(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ai(this.priorityNode_)}return e(de)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return si(e)?this:".priority"===ei(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=ei(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(qe(".priority"!==r||1===ti(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(ni(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Oi(this.priorityNode_.val())+":");var n=e(C)(this.value_);t+=n+":",t+="number"===n?kr(this.value_):this.value_,this.lazyHash_=tr(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(qe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(C)(n.value_),i=e(C)(this.value_),a=t.VALUE_TYPE_ORDER.indexOf(r),o=t.VALUE_TYPE_ORDER.indexOf(i);return qe(a>=0,"Unknown leaf type: "+r),qe(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Ri},set:function(e){Ri=e}}]),t}();Di.VALUE_TYPE_ORDER=["object","boolean","number","string"];var Mi,Li,Fi=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){return e(he)(this,r),n.apply(this,arguments)}return e(de)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?vr(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return gi.MIN}},{key:"maxPost",value:function(){return new gi(fr,new Di("[PRIORITY-POST]",Pi))}},{key:"makePost",value:function(e,t){var n=Ni(e);return new gi(t,new Di("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(_i),Ui=new Fi,ji=Math.log(2),qi=function(){"use strict";function t(n){e(he)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/ji,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return e(de)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),Hi=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new Ii(o,a.node,Ii.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new Ii(o,a.node,Ii.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],h=n?n(l):l;u(new Ii(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Ii.BLACK):(s(h,Ii.BLACK),s(h,Ii.RED))}return a}(new qi(e.length));return new xi(r||t,a)},Wi={},zi=function(){"use strict";function t(n,r){e(he)(this,t),this.indexes_=n,this.indexSet_=r}return e(de)(t,[{key:"get",value:function(e){var t=pt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof xi?t:null}},{key:"hasIndex",value:function(e){return vt(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){qe(e!==bi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(gi.Wrap),s=o.getNext();s;)a=a||e.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?Hi(i,e.getCompare()):Wi;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(yt(this.indexes_,(function(t,i){var a=pt(r.indexSet_,i);if(qe(a,"Missing index implementation for "+i),t===Wi){if(a.isDefinedOn(e.node)){for(var o=[],s=n.getIterator(gi.Wrap),u=s.getNext();u;)u.name!==e.name&&o.push(u),u=s.getNext();return o.push(e),Hi(o,a.getCompare())}return Wi}var c=n.get(e.name),l=t;return c&&(l=l.remove(new gi(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(yt(this.indexes_,(function(t){if(t===Wi)return t;var r=n.get(e.name);return r?t.remove(new gi(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return qe(Wi&&Ui,"ChildrenNode.ts has not been loaded"),Mi=Mi||new t({".priority":Wi},{".priority":Ui})}}]),t}(),Vi=function(){"use strict";function t(n,r,i){e(he)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ai(this.priorityNode_),this.children_.isEmpty()&&qe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(de)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||Li}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?Li:t}},{key:"getChild",value:function(e){var t=ei(e);return null===t?this:this.getImmediateChild(t).getChild(ni(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(qe(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,a=new gi(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?Li:this.priorityNode_;return new t(r,o,i)}},{key:"updateChild",value:function(e,t){var n=ei(e);if(null===n)return t;qe(".priority"!==ei(e)||1===ti(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(ni(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(Ui,(function(o,s){n[o]=s.val(e),r++,a&&t.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!e&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Oi(this.getPriority().val())+":"),this.forEachChild(Ui,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":tr(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new gi(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new gi(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new gi(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,gi.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,gi.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bi?-1:0}},{key:"withIndex",value:function(e){if(e===bi||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===bi||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(Ui),r=t.getIterator(Ui),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===bi?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return Li||(Li=new t(new xi(Si),null,zi.Default))}}]),t}();Vi.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Bi=new(function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){return e(he)(this,r),n.call(this,new xi(Si),Vi.EMPTY_NODE,zi.Default)}return e(de)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return Vi.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(Vi));Object.defineProperties(gi,{MIN:{value:new gi(dr,Vi.EMPTY_NODE)},MAX:{value:new gi(fr,Bi)}}),ki.__EMPTY_NODE=Vi.EMPTY_NODE,Di.__childrenNodeConstructor=Vi,Ti=Bi,function(e){Pi=e}(Bi);function Ki(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return Vi.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),qe(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(C)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new Di(r,Ki(n))}if(t instanceof Array){var i=Vi.EMPTY_NODE;return _r(t,(function(e,n){if(vt(t,e)&&"."!==e.substring(0,1)){var r=Ki(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(Ki(n))}var a=[],o=!1,s=t;if(_r(s,(function(e,t){if("."!==e.substring(0,1)){var n=Ki(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new gi(e,n)))}})),0===a.length)return Vi.EMPTY_NODE;var u=Hi(a,Ei,(function(e){return e.name}),Si);if(o){var c=Hi(a,Ui.getCompare());return new Vi(u,Ki(n),new zi({".priority":c},{".priority":Ui}))}return new Vi(u,Ki(n),zi.Default)}!function(e){Ni=e}(Ki);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gi,Ji,Yi=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t){var i;return e(he)(this,r),(i=n.call(this)).indexPath_=t,qe(!si(t)&&".priority"!==ei(t),"Can't create PathIndex with empty path or .priority key"),i}return e(de)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?vr(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=Ki(e),r=Vi.EMPTY_NODE.updateChild(this.indexPath_,n);return new gi(t,r)}},{key:"maxPost",value:function(){var e=Vi.EMPTY_NODE.updateChild(this.indexPath_,Bi);return new gi(fr,e)}},{key:"toString",value:function(){return ii(this.indexPath_,0).join("/")}}]),r}(_i),Qi=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){return e(he)(this,r),n.apply(this,arguments)}return e(de)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?vr(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return gi.MIN}},{key:"maxPost",value:function(){return gi.MAX}},{key:"makePost",value:function(e,t){var n=Ki(e);return new gi(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(_i),Xi=new Qi,$i="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gi=0,Ji=[];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zi(e){return{type:"value",snapshotNode:e}}function ea(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ta(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function na(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ra=function(){"use strict";function t(){e(he)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ui}return e(de)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return qe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return qe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:dr}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return qe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return qe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fr}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return qe(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===Ui}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e){var t,n={};return e.isDefault()||(e.index_===Ui?t="$priority":e.index_===Xi?t="$value":e.index_===bi?t="$key":(qe(e.index_ instanceof Yi,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=ht(t),e.startSet_&&(n.startAt=ht(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+ht(e.indexStartName_))),e.endSet_&&(n.endAt=ht(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+ht(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function aa(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ui&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oa=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t,i,a,o){var s;return e(he)(this,r),(s=n.call(this)).repoInfo_=t,s.onDataUpdate_=i,s.authTokenProvider_=a,s.appCheckTokenProvider_=o,s.log_=sr("p:rest:"),s.listens_={},s}return e(de)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=ia(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),pt(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=ia(e._queryParams),r=e._path.toString(),i=new it;return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=e(ke)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+kt(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=lt(h.responseText)}catch(e){lr("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&lr("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(qe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(Yr),sa=function(){"use strict";function t(){e(he)(this,t),this.rootNode_=Vi.EMPTY_NODE}return e(de)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ua(){return{value:null,children:new Map}}function ca(e,t,n){if(si(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=ei(t);e.children.has(r)||e.children.set(r,ua()),ca(e.children.get(r),t=ni(t),n)}}function la(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(function(e,r){la(r,new $r(t.toString()+"/"+e),n)}))}var ha,da,fa=function(){"use strict";function t(n){e(he)(this,t),this.collection_=n,this.last_=null}return e(de)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&_r(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),va=function(){"use strict";function t(n,r){e(he)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new fa(n);var i=1e4+2e4*Math.random();xr(this.reportStats_.bind(this),Math.floor(i))}return e(de)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;_r(t,(function(t,i){i>0&&vt(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),xr(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(da=ha||(ha={}))[da.OVERWRITE=0]="OVERWRITE",da[da.MERGE=1]="MERGE",da[da.ACK_USER_WRITE=2]="ACK_USER_WRITE",da[da.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var ma,ya=function(){"use strict";function t(n,r,i){e(he)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=ha.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(de)(t,[{key:"operationForChild",value:function(e){if(si(this.path)){if(null!=this.affectedTree.value)return qe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new $r(e));return new t(Zr(),n,this.revert)}return qe(ei(this.path)===e,"operationForChild called for unrelated child."),new t(ni(this.path),this.affectedTree,this.revert)}}]),t}(),ga=function(){"use strict";function t(n,r,i){e(he)(this,t),this.source=n,this.path=r,this.snap=i,this.type=ha.OVERWRITE}return e(de)(t,[{key:"operationForChild",value:function(e){return si(this.path)?new t(this.source,Zr(),this.snap.getImmediateChild(e)):new t(this.source,ni(this.path),this.snap)}}]),t}(),_a=function(){"use strict";function t(n,r,i){e(he)(this,t),this.source=n,this.path=r,this.children=i,this.type=ha.MERGE}return e(de)(t,[{key:"operationForChild",value:function(e){if(si(this.path)){var n=this.children.subtree(new $r(e));return n.isEmpty()?null:n.value?new ga(this.source,Zr(),n.value):new t(this.source,Zr(),n)}return qe(ei(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,ni(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),ka=function(){"use strict";function t(n,r,i){e(he)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(de)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(si(e))return this.isFullyInitialized()&&!this.filtered_;var t=ei(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw He("Should only compare child_ events.");var r=new gi(t.childName,t.snapshotNode),i=new gi(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function wa(e,t){return{eventCache:e,serverCache:t}}function Ia(e,t,n,r){return wa(new ka(t,n,r),e.serverCache)}function Ta(e,t,n,r){return wa(e.eventCache,new ka(t,n,r))}function Ca(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function xa(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ea=function(){return ma||(ma=new xi(pr)),ma},Sa=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ea();e(he)(this,t),this.value=n,this.children=r}return e(de)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:Zr(),value:this.value};if(si(e))return null;var n=ei(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(ni(e),t);return null!=i?{path:oi(new $r(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(si(e))return this;var n=ei(e),r=this.children.get(n);return null!==r?r.subtree(ni(e)):new t(null)}},{key:"set",value:function(e,n){if(si(e))return new t(n,this.children);var r=ei(e),i=(this.children.get(r)||new t(null)).set(ni(e),n),a=this.children.insert(r,i);return new t(this.value,a)}},{key:"remove",value:function(e){if(si(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=ei(e),r=this.children.get(n);if(r){var i,a=r.remove(ni(e));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(si(e))return this.value;var t=ei(e),n=this.children.get(t);return n?n.get(ni(e)):null}},{key:"setTree",value:function(e,n){if(si(e))return n;var r,i=ei(e),a=(this.children.get(i)||new t(null)).setTree(ni(e),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(Zr(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(oi(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,Zr(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(si(e))return null;var i=ei(e),a=this.children.get(i);return a?a.findOnPath_(ni(e),oi(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,Zr(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(si(e))return this;this.value&&r(n,this.value);var i=ei(e),a=this.children.get(i);return a?a.foreachOnPath_(ni(e),oi(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(Zr(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(oi(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return _r(e,(function(e,t){n=n.set(new $r(e),t)})),n}}]),t}(),Ra=function(){"use strict";function t(n){e(he)(this,t),this.writeTree_=n}return e(de)(t,null,[{key:"empty",value:function(){return new t(new Sa(null))}}]),t}();function Na(e,t,n){if(si(t))return new Ra(new Sa(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=ui(i,t);return a=a.updateChild(o,n),new Ra(e.writeTree_.set(i,a))}var s=new Sa(n),u=e.writeTree_.setTree(t,s);return new Ra(u)}function Pa(e,t,n){var r=e;return _r(n,(function(e,n){r=Na(r,oi(t,e),n)})),r}function Oa(e,t){if(si(t))return Ra.empty();var n=e.writeTree_.setTree(t,new Sa(null));return new Ra(n)}function Aa(e,t){return null!=Da(e,t)}function Da(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ui(n.path,t)):null}function Ma(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ui,(function(e,n){t.push(new gi(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new gi(e,n.value))})),t}function La(e,t){if(si(t))return e;var n=Da(e,t);return new Ra(null!=n?new Sa(n):e.writeTree_.subtree(t))}function Fa(e){return e.writeTree_.isEmpty()}function Ua(e,t){return ja(Zr(),e.writeTree_,t)}function ja(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(qe(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=ja(oi(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(oi(e,".priority"),r)),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(e,t){return eo(t,e)}function Ha(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Wa(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));qe(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&za(s,r.path)?i=!1:li(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=Ba(e.allWrites,Va,Zr()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=Oa(e.visibleWrites,r.path):_r(r.children,(function(t){e.visibleWrites=Oa(e.visibleWrites,oi(r.path,t))}));return!0}return!1}function za(e,t){if(e.snap)return li(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&li(oi(e.path,n),t))return!0;return!1}function Va(e){return e.visible}function Ba(e,t,n){for(var r=Ra.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)li(n,o)?r=Na(r,s=ui(n,o),a.snap):li(o,n)&&(s=ui(o,n),r=Na(r,Zr(),a.snap.getChild(s)));else{if(!a.children)throw He("WriteRecord should have .snap or .children");if(li(n,o))r=Pa(r,s=ui(n,o),a.children);else if(li(o,n))if(si(s=ui(o,n)))r=Pa(r,Zr(),a.children);else{var u=pt(a.children,ei(s));if(u){var c=u.getChild(ni(s));r=Na(r,Zr(),c)}}}}}return r}function Ka(e,t,n,r,i){if(r||i){var a=La(e.visibleWrites,t);if(!i&&Fa(a))return n;if(i||null!=n||Aa(a,Zr())){return Ua(Ba(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(li(e.path,t)||li(t,e.path))}),t),n||Vi.EMPTY_NODE)}return null}var o=Da(e.visibleWrites,t);if(null!=o)return o;var s=La(e.visibleWrites,t);return Fa(s)?n:null!=n||Aa(s,Zr())?Ua(s,n||Vi.EMPTY_NODE):null}function Ga(e,t,n,r){return Ka(e.writeTree,e.treePath,t,n,r)}function Ja(e,t){return function(e,t,n){var r=Vi.EMPTY_NODE,i=Da(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ui,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=La(e.visibleWrites,t);return n.forEachChild(Ui,(function(e,t){var n=Ua(La(a,new $r(e)),t);r=r.updateImmediateChild(e,n)})),Ma(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return Ma(La(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Ya(e,t,n,r){return function(e,t,n,r,i){qe(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=oi(t,n);if(Aa(e.visibleWrites,a))return null;var o=La(e.visibleWrites,a);return Fa(o)?i.getChild(n):Ua(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function Qa(e,t){return function(e,t){return Da(e.visibleWrites,t)}(e.writeTree,oi(e.treePath,t))}function Xa(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=La(e.visibleWrites,t),c=Da(u,Zr());if(null!=c)s=c;else{if(null==n)return[];s=Ua(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=o.getCompare(),d=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),f=d.getNext();f&&l.length<i;)0!==h(f,r)&&l.push(f),f=d.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function $a(e,t,n){return function(e,t,n,r){var i=oi(t,n),a=Da(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?Ua(La(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Za(e,t){return eo(oi(e.treePath,t),e.writeTree)}function eo(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var to=function(){"use strict";function t(){e(he)(this,t),this.changeMap=new Map}return e(de)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;qe("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),qe(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,na(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,ta(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,ea(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw He("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,na(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),no=new(function(){"use strict";function t(){e(he)(this,t)}return e(de)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),ro=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(he)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(de)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new ka(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $a(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:xa(this.viewCache_),i=Xa(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(e,t,n,r,i){var a,o,s=new to;if(n.type===ha.OVERWRITE){var u=n;u.source.fromUser?a=so(e,t,u.path,u.snap,r,i,s):(qe(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!si(u.path),a=oo(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===ha.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=oi(n,r);uo(t,ei(c))&&(s=so(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=oi(n,r);uo(t,ei(c))||(s=so(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):(qe(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=lo(e,t,c.path,c.children,r,i,o,s))}else if(n.type===ha.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=Qa(r,n))return t;var s,u=new ro(r,t,i),c=t.eventCache.getNode();if(si(n)||".priority"===ei(n)){var l;if(t.serverCache.isFullyInitialized())l=Ga(r,xa(t));else{var h=t.serverCache.getNode();qe(h instanceof Vi,"serverChildren would be complete if leaf node"),l=Ja(r,h)}s=e.filter.updateFullNode(c,l,a)}else{var d=ei(n),f=$a(r,d,t.serverCache);null==f&&t.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),(s=null!=f?e.filter.updateChild(c,d,f,ni(n),u,a):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(c,d,Vi.EMPTY_NODE,ni(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ga(r,xa(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=Qa(r,Zr()),Ia(t,s,o,e.filter.filtersNodes())}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=Qa(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(si(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return oo(e,t,n,u.getNode().getChild(n),i,a,s,o);if(si(n)){var c=new Sa(null);return u.getNode().forEachChild(bi,(function(e,t){c=c.set(new $r(e),t)})),lo(e,t,n,c,i,a,s,o)}return t}var l=new Sa(null);return r.foreach((function(e,t){var r=oi(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),lo(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==ha.LISTEN_COMPLETE)throw He("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=Ta(t,a.getNode(),a.isFullyInitialized()||si(n),a.isFiltered());return ao(e,o,n,r,no,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Ca(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(Zi(Ca(t)))}}(t,a,h),{viewCache:a,changes:h}}function ao(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=Qa(r,n))return t;if(si(n))if(qe(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=xa(t),l=Ja(r,c instanceof Vi?c:Vi.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var h=Ga(r,xa(t));o=e.filter.updateFullNode(t.eventCache.getNode(),h,a)}else{var d=ei(n);if(".priority"===d){qe(1===ti(n),"Can't have a priority with additional path components");var f=u.getNode(),v=Ya(r,n,f,s=t.serverCache.getNode());o=null!=v?e.filter.updatePriority(f,v):u.getNode()}else{var p,m=ni(n);if(u.isCompleteForChild(d)){s=t.serverCache.getNode();var y=Ya(r,n,u.getNode(),s);p=null!=y?u.getNode().getImmediateChild(d).updateChild(m,y):u.getNode().getImmediateChild(d)}else p=$a(r,d,t.serverCache);o=null!=p?e.filter.updateChild(u.getNode(),d,p,m,i,a):u.getNode()}}return Ia(t,o,u.isFullyInitialized()||si(n),e.filter.filtersNodes())}function oo(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(si(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var d=ei(n);if(!c.isCompleteForPath(n)&&ti(n)>1)return t;var f=ni(n),v=c.getNode().getImmediateChild(d).updateChild(f,r);u=".priority"===d?l.updatePriority(c.getNode(),v):l.updateChild(c.getNode(),d,v,f,no,null)}var p=Ta(t,u,c.isFullyInitialized()||si(n),l.filtersNodes());return ao(e,p,n,i,new ro(i,p,a),s)}function so(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new ro(i,t,a);if(si(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=Ia(t,u,!0,e.filter.filtersNodes());else{var h=ei(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Ia(t,u,c.isFullyInitialized(),c.isFiltered());else{var d,f=ni(n),v=c.getNode().getImmediateChild(h);if(si(f))d=r;else{var p=l.getCompleteChild(h);d=null!=p?".priority"===ri(f)&&p.getChild(ai(f)).isEmpty()?p:p.updateChild(f,r):Vi.EMPTY_NODE}if(v.equals(d))s=t;else s=Ia(t,e.filter.updateChild(c.getNode(),h,d,f,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function uo(e,t){return e.eventCache.isCompleteForChild(t)}function co(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function lo(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=si(n)?r:new Sa(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=co(0,t.serverCache.getNode().getImmediateChild(n),r);c=oo(e,c,new $r(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=co(0,t.serverCache.getNode().getImmediateChild(n),r);c=oo(e,c,new $r(n),h,i,a,o,s)}})),c}var ho;function fo(e,t){var n=xa(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!si(t)&&!n.getImmediateChild(ei(t)).isEmpty())?n.getChild(t):null}function vo(e,t,n,r){t.type===ha.MERGE&&null!==t.source.queryId&&(qe(xa(e.viewCache_),"We should always have a full cache before handling merges"),qe(Ca(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=io(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,qe(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),qe(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),qe(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,po(e,s.changes,s.viewCache.eventCache.getNode(),null)}function po(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),ba(e,i,"child_removed",t,r,n),ba(e,i,"child_added",t,r,n),ba(e,i,"child_moved",a,r,n),ba(e,i,"child_changed",t,r,n),ba(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mo;function yo(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return qe(null!=a,"SyncTree gave us an op for an invalid query."),vo(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;o=o.concat(vo(d,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return o}function go(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||fo(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}var _o=function t(n){"use strict";e(he)(this,t),this.listenProvider_=n,this.syncPointTree_=new Sa(null),this.pendingWriteTree_={visibleWrites:Ra.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function ko(e,t,n,r,i){return function(e,t,n,r,i){qe(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Na(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Co(e,new ga({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function bo(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Ha(e.pendingWriteTree_,t),i=Wa(e.pendingWriteTree_,t);if(i){var a=new Sa(null);return null!=r.snap?a=a.set(Zr(),!0):_r(r.children,(function(e){a=a.set(new $r(e),!0)})),Co(e,new ya(r.path,a,n))}return[]}function wo(e,t,n){return Co(e,new ga({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Io(e,t,n,r){var i=So(e,r);if(null!=i){var a=Ro(i),o=a.path,s=a.queryId,u=ui(o,t);return No(e,o,new ga(pa(s),u,n))}return[]}function To(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=go(n,ui(e,t));if(r)return r}));return Ka(r,t,i,n,!0)}function Co(e,t){return xo(t,e.syncPointTree_,null,qa(e.pendingWriteTree_,Zr()))}function xo(e,t,n,r){if(si(e.path))return Eo(e,t,n,r);var i=t.get(Zr());null==n&&null!=i&&(n=go(i,Zr()));var a=[],o=ei(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=Za(r,o);a=a.concat(xo(s,u,c,l))}return i&&(a=a.concat(yo(i,e,r,n))),a}function Eo(e,t,n,r){var i=t.get(Zr());null==n&&null!=i&&(n=go(i,Zr()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=Za(r,t),u=e.operationForChild(t);u&&(a=a.concat(Eo(u,i,o,s)))})),i&&(a=a.concat(yo(i,e,r,n))),a}function So(e,t){return e.tagToQueryMap.get(t)}function Ro(e){var t=e.indexOf("$");return qe(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new $r(e.substr(0,t))}}function No(e,t,n){var r=e.syncPointTree_.get(t);return qe(r,"Missing sync point for query tag that we're tracking"),yo(r,n,qa(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Po=function(){"use strict";function t(n){e(he)(this,t),this.node_=n}return e(de)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),Oo=function(){"use strict";function t(n,r){e(he)(this,t),this.syncTree_=n,this.path_=r}return e(de)(t,[{key:"getImmediateChild",value:function(e){var n=oi(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return To(this.syncTree_,this.path_)}}]),t}(),Ao=function(e,t,n){return e&&"object"==typeof e?(qe(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Do(e[".sv"],t,n):"object"==typeof e[".sv"]?Mo(e[".sv"],t):void qe(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Do=function(e,t,n){if("timestamp"===e)return n.timestamp;qe(!1,"Unexpected server value: "+e)},Mo=function(e,t,n){e.hasOwnProperty("increment")||qe(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&qe(!1,"Unexpected increment value: "+r);var i=t.node();if(qe(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},Lo=function(e,t,n,r){return Uo(t,new Oo(n,e),r)},Fo=function(e,t,n){return Uo(e,new Po(t),n)};function Uo(e,t,n){var r,i=e.getPriority().val(),a=Ao(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=Ao(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new Di(s,Ki(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new Di(a))),u.forEachChild(Ui,(function(e,i){var a=Uo(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jo=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(he)(this,t),this.name=n,this.parent=r,this.node=i};function qo(e,t){for(var n=t instanceof $r?t:new $r(t),r=e,i=ei(n);null!==i;){var a=pt(r.node.children,i)||{children:{},childCount:0};r=new jo(i,r,a),i=ei(n=ni(n))}return r}function Ho(e){return e.node.value}function Wo(e,t){e.node.value=t,Go(e)}function zo(e){return e.node.childCount>0}function Vo(e,t){_r(e.node.children,(function(n,r){t(new jo(n,e,r))}))}function Bo(e,t,n,r){n&&!r&&t(e),Vo(e,(function(e){Bo(e,t,!0,r)})),n&&r&&t(e)}function Ko(e){return new $r(null===e.parent?e.name:Ko(e.parent)+"/"+e.name)}function Go(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Ho(e)&&!zo(e)}(n),i=vt(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Go(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Go(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}var Jo=/[\[\].#$\/\u0000-\u001F\u007F]/,Yo=/[\[\].#$\u0000-\u001F\u007F]/,Qo=10485760,Xo=function(e){return"string"==typeof e&&0!==e.length&&!Jo.test(e)},$o=function(e){return"string"==typeof e&&0!==e.length&&!Yo.test(e)},Zo=function(e,t,n){var r=n instanceof $r?new hi(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+fi(r));if("function"==typeof t)throw new Error(e+"contains a function "+fi(r)+" with contents = "+t.toString());if(hr(t))throw new Error(e+"contains "+t.toString()+" "+fi(r));if("string"==typeof t&&t.length>3495253.3333333335&&St(t)>Qo)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+fi(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(_r(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!Xo(t)))throw new Error(e+" contains an invalid key ("+t+") "+fi(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=St(s),di(o),Zo(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=St(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+fi(r)+" in addition to actual children.")}},es=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Xo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),$o(e)}(n))throw new Error(xt(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},ts=function t(){"use strict";e(he)(this,t),this.eventLists_=[],this.recursionDepth_=0};function ns(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||ci(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function rs(e,t,n){ns(e,n),is(e,(function(e){return li(e,t)||li(t,e)}))}function is(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(as(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function as(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();rr&&or("event: "+n.toString()),Cr(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var os="repo_interrupt",ss=function(){"use strict";function t(n,r,i,a){e(he)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ts,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ua(),this.transactionQueueTree_=new jo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(de)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function us(e,t,n){if(e.stats_=jr(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new oa(e.repoInfo_,(function(t,n,r,i){hs(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return ds(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ht(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new mi(e.repoInfo_,t,(function(t,n,r,i){hs(e,t,n,r,i)}),(function(t){ds(e,t)}),(function(t){!function(e,t){_r(t,(function(t,n){fs(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new va(e.stats_,e.server_)},a=r.toString(),Ur[a]||(Ur[a]=i()),Ur[a]),e.infoData_=new sa,e.infoSyncTree_=new _o({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=wo(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),fs(e,"connected",!1),e.serverSyncTree_=new _o({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);rs(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function cs(e){var t=e.infoData_.getNode(new $r(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ls(e){return(t=(t={timestamp:cs(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function hs(e,t,n,r,i){e.dataUpdateCount++;var a=new $r(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=yt(n,(function(e){return Ki(e)}));o=function(e,t,n,r){var i=So(e,r);if(i){var a=Ro(i),o=a.path,s=a.queryId,u=ui(o,t),c=Sa.fromObject(n);return No(e,o,new _a(pa(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=Ki(n);o=Io(e.serverSyncTree_,a,u,i)}else if(r){var c=yt(n,(function(e){return Ki(e)}));o=function(e,t,n){var r=Sa.fromObject(n);return Co(e,new _a({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=Ki(n);o=wo(e.serverSyncTree_,a,l)}var h=a;o.length>0&&(h=ks(e,a)),rs(e.eventQueue_,h,o)}function ds(e,t){fs(e,"connected",t),!1===t&&function(e){ms(e,"onDisconnectEvents");var t=ls(e),n=ua();la(e.onDisconnect_,Zr(),(function(r,i){var a=Lo(r,i,e.serverSyncTree_,t);ca(n,r,a)}));var r=[];la(n,Zr(),(function(t,n){r=r.concat(wo(e.serverSyncTree_,t,n));var i=Cs(e,t);ks(e,i)})),e.onDisconnect_=ua(),rs(e.eventQueue_,Zr(),r)}(e)}function fs(e,t,n){var r=new $r("/.info/"+t),i=Ki(n);e.infoData_.updateSnapshot(r,i);var a=wo(e.infoSyncTree_,r,i);rs(e.eventQueue_,r,a)}function vs(e){return e.nextWriteId_++}function ps(e){e.persistentConnection_&&e.persistentConnection_.interrupt(os)}function ms(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";t.persistentConnection_&&(a=t.persistentConnection_.id+":"),or.apply(void 0,[a].concat(e(ve)(r)))}function ys(e,t,n){return To(e.serverSyncTree_,t,n)||Vi.EMPTY_NODE}function gs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Ts(e,t),Ho(t)){var n=ws(e,t);qe(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&_s(e,Ko(t),n)}else zo(t)&&Vo(t,(function(t){gs(e,t)}))}function _s(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=ys(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];qe(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=ui(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){ms(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(bo(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);Ts(e,qo(e.transactionQueueTree_,t)),gs(e,e.transactionQueueTree_),rs(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)Cr(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{lr("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}ks(e,t)}}),o)}function ks(e,t){var n=bs(e,t),r=Ko(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=ui(n,u.path),l=!1,h=void 0;if(qe(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,a=a.concat(bo(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",a=a.concat(bo(e.serverSyncTree_,u.currentWriteId,!0));else{var d=ys(e,u.path,o);u.currentInputSnapshot=d;var f=t[r].update(d.val());if(void 0!==f){Zo("transaction failed: Data returned ",f,u.path);var v=Ki(f);"object"==typeof f&&null!=f&&vt(f,".priority")||(v=v.updatePriority(d.getPriority()));var p=u.currentWriteId,m=ls(e),y=Fo(v,d,m);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=y,u.currentWriteId=vs(e),o.splice(o.indexOf(p),1),a=(a=a.concat(ko(e.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally))).concat(bo(e.serverSyncTree_,p,!0))}else l=!0,h="nodata",a=a.concat(bo(e.serverSyncTree_,u.currentWriteId,!0))}rs(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Ts(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Cr(i[u]);gs(e,e.transactionQueueTree_)}(e,ws(e,n),r),r}function bs(e,t){var n,r=e.transactionQueueTree_;for(n=ei(t);null!==n&&void 0===Ho(r);)r=qo(r,n),n=ei(t=ni(t));return r}function ws(e,t){var n=[];return Is(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Is(e,t,n){var r=Ho(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Vo(t,(function(t){Is(e,t,n)}))}function Ts(e,t){var n=Ho(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Wo(t,n.length>0?n:void 0)}Vo(t,(function(t){Ts(e,t)}))}function Cs(e,t){var n=Ko(bs(e,t)),r=qo(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){xs(e,t)})),xs(e,r),Bo(r,(function(t){xs(e,t)})),n}function xs(e,t){var n=Ho(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(qe(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):(qe(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bo(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?Wo(t,void 0):n.length=a+1,rs(e.eventQueue_,Ko(t),i);for(var s=0;s<r.length;s++)Cr(r[s])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Es=function(e,t){var n=Ss(e),r=n.namespace;"firebase.com"===n.domain&&cr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||cr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&lr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Dr(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new $r(n.pathString)}},Ss=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var d=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):lr("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{var v=t.indexOf(".");r=t.substring(0,v).toLowerCase(),n=t.substring(v+1),a=r}"ns"in d&&(a=d.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Rs=function(){"use strict";function t(n,r,i,a){e(he)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return e(de)(t,[{key:"key",get:function(){return si(this._path)?null:ri(this._path)}},{key:"ref",get:function(){return new Ns(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=aa(this._queryParams),t=yr(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return aa(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=Rt(e))instanceof t))return!1;var n=this._repo===e._repo,r=ci(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var Ns=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t,i){return e(he)(this,r),n.call(this,t,i,new ra,!1)}return e(de)(r,[{key:"parent",get:function(){var e=ai(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Rs);!function(e){qe(!ho,"__referenceConstructor has already been defined"),ho=e}(Ns),function(e){qe(!mo,"__referenceConstructor has already been defined"),mo=e}(Ns);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ps={},Os=!1;function As(e,t,n,r){e.repoInfo_=new Dr("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function Ds(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||cr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),or("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=Es(a,i),u=s.repoInfo,c=void 0;void 0!==Le&&Le.env&&(c=Le.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(o=!0,a="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Es(a,i)).repoInfo):o=!s.repoInfo.secure;var l=i&&o?new Rr(Rr.OWNER):new Sr(e.name,e.options,t);es("Invalid Firebase Database URL",s),si(s.path)||cr("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=Ps[t.name];i||(i={},Ps[t.name]=i);var a=i[e.toURLString()];a&&cr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new ss(e,Os,n,r),i[e.toURLString()]=a,a}(u,e,l,new Er(e.name,n));return new Ms(h,e)}var Ms=function(){"use strict";function t(n,r){e(he)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(de)(t,[{key:"_repo",get:function(){return this._instanceStarted||(us(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Ns(this._repo,Zr())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Ps[t])&&n[e.key]===e||cr("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),ps(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&cr("Cannot call "+e+" on a deleted database.")}}]),t}();function Ls(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=Rt(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&cr("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,a=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&cr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Rr(Rr.OWNER);else if(r.mockUserToken){var o="string"==typeof r.mockUserToken?r.mockUserToken:at(r.mockUserToken,e.app.options.projectId);a=new Rr(o)}As(i,t,n,a)}mi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},mi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Kn=xn,bn(new Nt("database",(function(e,t){var n=t.instanceIdentifier;return Ds(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Rn(Vn,Bn,e),Rn(Vn,Bn,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();xe=i("ds8z5"),a=i("bpxeT"),he=i("8MBJY"),de=i("a2hTj"),fe=i("hKHmD");var Fs={};Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.default=function(e,t,n){return js(e,t,n)};var Us=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function js(e,t,n){return(js="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Us.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var qs=i("fVNic");Ee=i("eYQtU"),Me=i("2MbLg"),o=i("2TvXO");function Hs(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ws(){return e(fe)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var zs=Ws,Vs=new st("auth","Firebase",Ws()),Bs=new Wt("@firebase/auth");function Ks(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;Bs.logLevel<=At.ERROR&&(a=Bs).error.apply(a,["Auth (".concat(xn,"): ").concat(t)].concat(e(ve)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Qs.apply(void 0,[t].concat(e(ve)(r)))}function Js(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Qs.apply(void 0,[t].concat(e(ve)(r)))}function Ys(t,n,r){var i=Object.assign(Object.assign({},zs()),e(fe)({},n,r));return new st("auth","Firebase",i).create(n,{appName:t.name})}function Qs(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(ve)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(ve)(u)))}return(a=Vs).create.apply(a,[t].concat(e(ve)(r)))}function Xs(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw Qs.apply(void 0,[n].concat(e(ve)(i)))}function $s(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Ks(t),new Error(t)}function Zs(e,t){e||$s(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eu=new Map;function tu(e){Zs(e instanceof Function,"Expected a class definition");var t=eu.get(e);return t?(Zs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,eu.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e,t){var n=wn(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(gt(n.getOptions(),null!=t?t:{}))return r;Gs(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ru(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function iu(){return"http:"===au()||"https:"===au()}function au(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!iu()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var su=function(){"use strict";function t(n,r){e(he)(this,t),this.shortDelay=n,this.longDelay=r,Zs(r>n,"Short delay should be less than long delay!"),this.isMobile=Qe()||Xe()}return e(de)(t,[{key:"get",value:function(){return ou()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(e,t){Zs(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cu,lu=function(){"use strict";function t(){e(he)(this,t)}return e(de)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void $s("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void $s("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void $s("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),hu=(cu={},e(fe)(cu,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(fe)(cu,"MISSING_CUSTOM_TOKEN","internal-error"),e(fe)(cu,"INVALID_IDENTIFIER","invalid-email"),e(fe)(cu,"MISSING_CONTINUE_URI","internal-error"),e(fe)(cu,"INVALID_PASSWORD","wrong-password"),e(fe)(cu,"MISSING_PASSWORD","internal-error"),e(fe)(cu,"EMAIL_EXISTS","email-already-in-use"),e(fe)(cu,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(fe)(cu,"INVALID_IDP_RESPONSE","invalid-credential"),e(fe)(cu,"INVALID_PENDING_TOKEN","invalid-credential"),e(fe)(cu,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(fe)(cu,"MISSING_REQ_TYPE","internal-error"),e(fe)(cu,"EMAIL_NOT_FOUND","user-not-found"),e(fe)(cu,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(fe)(cu,"EXPIRED_OOB_CODE","expired-action-code"),e(fe)(cu,"INVALID_OOB_CODE","invalid-action-code"),e(fe)(cu,"MISSING_OOB_CODE","internal-error"),e(fe)(cu,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(fe)(cu,"INVALID_ID_TOKEN","invalid-user-token"),e(fe)(cu,"TOKEN_EXPIRED","user-token-expired"),e(fe)(cu,"USER_NOT_FOUND","user-token-expired"),e(fe)(cu,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(fe)(cu,"INVALID_CODE","invalid-verification-code"),e(fe)(cu,"INVALID_SESSION_INFO","invalid-verification-id"),e(fe)(cu,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(fe)(cu,"MISSING_SESSION_INFO","missing-verification-id"),e(fe)(cu,"SESSION_EXPIRED","code-expired"),e(fe)(cu,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(fe)(cu,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(fe)(cu,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(fe)(cu,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(fe)(cu,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(fe)(cu,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(fe)(cu,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(fe)(cu,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(fe)(cu,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(fe)(cu,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(fe)(cu,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),cu),du=new su(3e4,6e4);function fu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function vu(e,t,n,r){return pu.apply(this,arguments)}function pu(){return pu=e(a)(e(o).mark((function t(n,r,i,s){var u,c=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",mu(n,u,e(a)(e(o).mark((function t(){var a,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},s&&("GET"===r?u=s:a={body:JSON.stringify(s)}),c=kt(Object.assign({key:n.config.apiKey},u)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",lu.fetch()(ku(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),pu.apply(this,arguments)}function mu(e,t,n){return yu.apply(this,arguments)}function yu(){return(yu=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,d,f,v;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},hu),r),t.prev=2,s=new bu(n),t.next=6,Promise.race([i(),s.promise]);case 6:return u=t.sent,s.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw wu(n,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,h=e(ke)(l.split(" : "),2),d=h[0],f=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw wu(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw wu(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw wu(n,"user-disabled",c);case 29:if(v=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!f){t.next=34;break}throw Ys(n,v,f);case 34:Gs(n,v);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof ot)){t.next=41;break}throw t.t0;case 41:Gs(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function gu(e,t,n,r){return _u.apply(this,arguments)}function _u(){return _u=e(a)(e(o).mark((function t(n,r,i,a){var s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,vu(n,r,i,a,s);case 3:return"mfaPendingCredential"in(u=e.sent)&&Gs(n,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),_u.apply(this,arguments)}function ku(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?uu(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var bu=function(){"use strict";function t(n){var r=this;e(he)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Js(n.auth,"network-request-failed"))}),du.get())}))}return e(de)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function wu(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Js(e,t,r);return i.customData._tokenResponse=n,i}function Iu(e,t){return Tu.apply(this,arguments)}function Tu(){return(Tu=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",vu(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cu(e,t){return xu.apply(this,arguments)}function xu(){return(xu=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",vu(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(){return Su=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=Rt(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,Xs((s=Nu(a))&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"),u="object"==typeof s.firebase?s.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:s,token:a,authTime:Eu(Ru(s.auth_time)),issuedAtTime:Eu(Ru(s.iat)),expirationTime:Eu(Ru(s.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Su.apply(this,arguments)}function Ru(e){return 1e3*Number(e)}function Nu(t){var n,r=e(ke)(t.split("."),3),i=r[0],a=r[1],o=r[2];if(void 0===i||void 0===a||void 0===o)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{var s=Ke(a);return s?JSON.parse(s):(Ks("Failed to decode base64 JWT payload"),null)}catch(e){return Ks("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function Pu(e,t){return Ou.apply(this,arguments)}function Ou(){return Ou=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ot&&Au(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Ou.apply(this,arguments)}function Au(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Du=function(){"use strict";function t(n){e(he)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(de)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(r=e.t0)||void 0===r?void 0:r.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}}]),t}(),Mu=function(){"use strict";function t(n,r){e(he)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(de)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Eu(this.lastLoginAt),this.creationTime=Eu(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(e){return Fu.apply(this,arguments)}function Fu(){return(Fu=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l,h,d,f,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,Pu(n,Cu(i,{idToken:a}));case 7:Xs(null==(s=e.sent)?void 0:s.users.length,i,"internal-error"),u=s.users[0],n._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?qu(u.providerUserInfo):[],l=ju(n.providerData,c),h=n.isAnonymous,d=!(n.email&&u.passwordHash||(null==l?void 0:l.length)),f=!!h&&d,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new Mu(u.createdAt,u.lastLoginAt),isAnonymous:f},Object.assign(n,v);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Uu(){return(Uu=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Rt(n),e.next=3,Lu(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ju(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(ve)(r).concat(e(ve)(n))}function qu(e){return e.map((function(e){var t=e.providerId,n=Hs(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Hu(e,t){return Wu.apply(this,arguments)}function Wu(){return(Wu=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,mu(n,{},e(a)(e(o).mark((function t(){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=kt({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,s=a.tokenApiHost,u=a.apiKey,c=ku(n,s,"/v1/token","key=".concat(u)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",lu.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zu=function(){"use strict";function t(){e(he)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(de)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Xs(e.idToken,"internal-error"),Xs(void 0!==e.idToken,"internal-error"),Xs(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Xs(n=Nu(t),"internal-error"),Xs(void 0!==n.exp,"internal-error"),Xs(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Xs(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Hu(t,n);case 2:a=e.sent,s=a.accessToken,u=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(s,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return $s("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(Xs("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(Xs("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(Xs("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e,t){Xs("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Bu=function(){"use strict";function t(n){e(he)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=Hs(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Du(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(ve)(o.providerData):[],this.metadata=new Mu(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(de)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pu(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(Xs(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Su.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Uu.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Xs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){Xs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Lu(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,Pu(t,Iu(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;Xs(_&&I,e,"internal-error");var T=zu.fromJSON(this.name,I);Xs("string"==typeof _,e,"internal-error"),Vu(h,e.name),Vu(d,e.name),Xs("boolean"==typeof k,e,"internal-error"),Xs("boolean"==typeof b,e,"internal-error"),Vu(f,e.name),Vu(v,e.name),Vu(p,e.name),Vu(m,e.name),Vu(y,e.name),Vu(g,e.name);var C=new t({uid:_,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:y,lastLoginAt:g});return w&&Array.isArray(w)&&(C.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(C._redirectEventId=m),C}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(o).mark((function a(){var s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new zu).updateFromServerResponse(r),u=new t({uid:r.localId,auth:n,stsTokenManager:s,isAnonymous:i}),e.next=5,Lu(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Ku=function(){"use strict";function t(){e(he)(this,t),this.type="NONE",this.storage={}}return e(de)(t,[{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ku.type="NONE";var Gu=Ku;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Yu=function(){"use strict";function t(n,r,i){e(he)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=Ju(this.userKey,o.apiKey,s),this.fullPersistenceKey=Ju("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(de)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Bu._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(o).mark((function s(){var u,c,l,h,d,f,v,p,m,y,g,_,k;return e(o).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.length){s.next=2;break}return s.abrupt("return",new t(tu(Gu),n,i));case 2:return s.next=4,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=s.sent.filter((function(e){return e})),c=u[0]||tu(Gu),l=Ju(i,n.config.apiKey,n.name),h=null,d=!0,f=!1,v=void 0,s.prev=9,p=r[Symbol.iterator]();case 11:if(d=(m=p.next()).done){s.next=29;break}return y=m.value,s.prev=13,s.next=16,y._get(l);case 16:if(!(g=s.sent)){s.next=22;break}return _=Bu._fromJSON(n,g),y!==c&&(h=_),c=y,s.abrupt("break",29);case 22:s.next=26;break;case 24:s.prev=24,s.t0=s.catch(13);case 26:d=!0,s.next=11;break;case 29:s.next=35;break;case 31:s.prev=31,s.t1=s.catch(9),f=!0,v=s.t1;case 35:s.prev=35,s.prev=36,d||null==p.return||p.return();case 38:if(s.prev=38,!f){s.next=41;break}throw v;case 41:return s.finish(38);case 42:return s.finish(35);case 43:if(k=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){s.next=46;break}return s.abrupt("return",new t(c,n,i));case 46:if(c=k[0],!h){s.next=50;break}return s.next=50,c._set(l,h.toJSON());case 50:return s.next=52,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return s.abrupt("return",new t(c,n,i));case 53:case"end":return s.stop()}}),s,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ec(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nc(t))return"Blackberry";if(rc(t))return"Webos";if($u(t))return"Safari";if((t.includes("chrome/")||Zu(t))&&!t.includes("edge/"))return"Chrome";if(tc(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Xu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye();return/firefox\//i.test(e)}function $u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Zu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye();return/crios\//i.test(e)}function ec(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye();return/iemobile/i.test(e)}function tc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye();return/android/i.test(e)}function nc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye();return/blackberry/i.test(e)}function rc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye();return/webos/i.test(e)}function ic(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ac(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye();return ic(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function oc(){return((e=Ye()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function sc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye();return ic(e)||tc(e)||rc(e)||nc(e)||/windows phone/i.test(e)||ec(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uc(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Qu(Ye());break;case"Worker":t="".concat(Qu(Ye()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(xn,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cc=function(){"use strict";function t(n){e(he)(this,t),this.auth=n,this.queue=[]}return e(de)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h,d,f,v,p,m,y,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,s=!0,u=!1,c=void 0,e.prev=6,l=n.queue[Symbol.iterator]();case 8:if(s=(h=l.next()).done){e.next=16;break}return d=h.value,e.next=12,d(t);case 12:d.onAbort&&a.push(d.onAbort);case 13:s=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),u=!0,c=e.t0;case 22:e.prev=22,e.prev=23,s||null==l.return||l.return();case 25:if(e.prev=25,!u){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),f=!0,v=!1,p=void 0,e.prev=36,m=a[Symbol.iterator]();!(f=(y=m.next()).done);f=!0){g=y.value;try{g()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),v=!0,p=e.t2;case 44:e.prev=44,e.prev=45,f||null==m.return||m.return();case 47:if(e.prev=47,!v){e.next=50;break}throw p;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),lc=function(){"use strict";function t(n,r,i){e(he)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new cc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vs,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(de)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=tu(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Yu.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(s=r.currentUser)||void 0===s?void 0:s.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,s=a,u=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,c&&c!==l||!(null==h?void 0:h.user)||(s=h.user,u=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return Xs(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(s));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Lu(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 10:return e.abrupt("return",n.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Rt(t):null)&&Xs(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&Xs(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(tu(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new st("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return Xs(i=t&&tu(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Yu.create(n,[tu(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(s=n.redirectUser)||void 0===s?void 0:s._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Xs(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Xs(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uc(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(fe)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e){return Rt(e)}var dc=function(){"use strict";function t(n){var r,i,a=this;e(he)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new Tt((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(de)(t,[{key:"next",get:function(){return Xs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function fc(t,n,r){var i=hc(t);Xs(i._canInitEmulator,i,"emulator-config-failed"),Xs(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=vc(n),s=function(t){var n=vc(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:pc(i.substr(o.length+1))}}var s=e(ke)(i.split(":"),2);return{host:s[0],port:pc(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function vc(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function pc(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var mc=function(){"use strict";function t(n,r){e(he)(this,t),this.providerId=n,this.signInMethod=r}return e(de)(t,[{key:"toJSON",value:function(){return $s("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return $s("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return $s("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return $s("not implemented")}}]),t}();function yc(e,t){return gc.apply(this,arguments)}function gc(){return(gc=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",vu(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _c(e,t){return kc.apply(this,arguments)}function kc(){return(kc=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gu(n,"POST","/v1/accounts:signInWithPassword",fu(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bc(e,t){return wc.apply(this,arguments)}function wc(){return(wc=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gu(n,"POST","/v1/accounts:signInWithEmailLink",fu(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ic(e,t){return Tc.apply(this,arguments)}function Tc(){return(Tc=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gu(n,"POST","/v1/accounts:signInWithEmailLink",fu(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cc=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(he)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(de)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",_c(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",bc(t,{email:n._email,oobCode:n._password}));case 5:Gs(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",yc(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Ic(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Gs(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(mc);function xc(e,t){return Ec.apply(this,arguments)}function Ec(){return(Ec=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gu(n,"POST","/v1/accounts:signInWithIdp",fu(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sc=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){var t;return e(he)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(de)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return xc(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,xc(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,xc(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=kt(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gs("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=Hs(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(mc);function Rc(e,t){return Nc.apply(this,arguments)}function Nc(){return(Nc=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",vu(n,"POST","/v1/accounts:sendVerificationCode",fu(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Pc(){return(Pc=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gu(n,"POST","/v1/accounts:signInWithPhoneNumber",fu(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Oc(){return(Oc=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gu(n,"POST","/v1/accounts:signInWithPhoneNumber",fu(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw wu(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Ac=e(fe)({},"USER_NOT_FOUND","user-not-found");function Dc(){return(Dc=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",gu(n,"POST","/v1/accounts:signInWithPhoneNumber",fu(n,i),Ac));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mc=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t){var i;return e(he)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(de)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Pc.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Oc.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Dc.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(mc);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lc=function(){"use strict";function t(n){var r,i,a,o,s,u;e(he)(this,t);var c=bt(wt(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);Xs(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(de)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=bt(wt(e)).link,n=t?bt(wt(t)).deep_link_id:null,r=bt(wt(e)).deep_link_id;return(r?bt(wt(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fc=function(){"use strict";function t(){e(he)(this,t),this.providerId=t.PROVIDER_ID}return e(de)(t,null,[{key:"credential",value:function(e,t){return Cc._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Lc.parseLink(t);return Xs(n,"argument-error"),Cc._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Fc.PROVIDER_ID="password",Fc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Fc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Uc=function(){"use strict";function t(n){e(he)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(de)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),jc=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){var t;return e(he)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(de)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(ve)(this.scopes)}}]),r}(Uc),qc=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){return e(he)(this,r),n.call(this,"facebook.com")}return e(de)(r,null,[{key:"credential",value:function(e){return Sc._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(jc);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qc.FACEBOOK_SIGN_IN_METHOD="facebook.com",qc.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hc=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){var t;return e(he)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(de)(r,null,[{key:"credential",value:function(e,t){return Sc._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(jc);Hc.GOOGLE_SIGN_IN_METHOD="google.com",Hc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wc=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){return e(he)(this,r),n.call(this,"github.com")}return e(de)(r,null,[{key:"credential",value:function(e){return Sc._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(jc);Wc.GITHUB_SIGN_IN_METHOD="github.com",Wc.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zc=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){return e(he)(this,r),n.call(this,"twitter.com")}return e(de)(r,null,[{key:"credential",value:function(e,t){return Sc._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(jc);function Vc(e,t){return Bc.apply(this,arguments)}function Bc(){return(Bc=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gu(n,"POST","/v1/accounts:signUp",fu(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zc.TWITTER_SIGN_IN_METHOD="twitter.com",zc.PROVIDER_ID="twitter.com";var Kc=function(){"use strict";function t(n){e(he)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(de)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(o).mark((function a(){var u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Bu._fromIdTokenResponse(n,i,s);case 2:return u=e.sent,c=Gc(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return s=Gc(i),e.abrupt("return",new t({user:n,providerId:s,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Gc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jc=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t,i,a,o){var s,u;return e(he)(this,r),(s=n.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(xe)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(de)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ot);function Yc(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Jc._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e,t){return Xc.apply(this,arguments)}function Xc(){return Xc=e(a)(e(o).mark((function t(n,r){var i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>2&&void 0!==s[2]&&s[2],e.t0=Pu,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Kc._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Xc.apply(this,arguments)}function $c(e,t){return Zc.apply(this,arguments)}function Zc(){return Zc=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h,d=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>2&&void 0!==d[2]&&d[2],s=n.auth,u="reauthenticate",e.prev=4,e.next=7,Pu(n,Yc(s,u,r,n),i);case 7:return Xs((c=e.sent).idToken,s,"internal-error"),Xs(l=Nu(c.idToken),s,"internal-error"),h=l.sub,Xs(n.uid===h,s,"user-mismatch"),e.abrupt("return",Kc._forOperation(n,u,c));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&Gs(s,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),Zc.apply(this,arguments)}function el(e,t){return tl.apply(this,arguments)}function tl(){return tl=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,Yc(n,a,r);case 4:return s=e.sent,e.next=7,Kc._fromIdTokenResponse(n,a,s);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),tl.apply(this,arguments)}function nl(e,t){return rl.apply(this,arguments)}function rl(){return(rl=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",el(hc(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function il(e,t,n){return al.apply(this,arguments)}function al(){return(al=e(a)(e(o).mark((function t(n,r,i){var a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=hc(n),e.next=3,Vc(a,{returnSecureToken:!0,email:r,password:i});case 3:return s=e.sent,e.next=6,Kc._fromIdTokenResponse(a,"signIn",s);case 6:return u=e.sent,e.next=9,a._updateCurrentUser(u.user);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ol(e,t,n){return nl(Rt(e),Fc.credential(t,n))}function sl(e,t,n,r){return Rt(e).onIdTokenChanged(t,n,r)}function ul(e,t,n){return Rt(e).beforeAuthStateChanged(t,n)}function cl(e){return Rt(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ll(e,t){return vu(e,"POST","/v2/accounts/mfaEnrollment:start",fu(e,t))}new WeakMap;var hl="__sak",dl=function(){"use strict";function t(n,r){e(he)(this,t),this.storageRetriever=n,this.type=r}return e(de)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(hl,"1"),this.storage.removeItem(hl),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fl=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){var t,i;return e(he)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=($u(i=Ye())||ic(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=sc(),t._shouldAllowMigration=!0,t}return e(de)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);oc()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Fs)(e(qs)(r.prototype),"_set",i).call(s,t,n);case 2:s.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Fs)(e(qs)(r.prototype),"_get",n).call(i,t);case 2:return s=a.sent,i.localCache[t]=JSON.stringify(s),a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Fs)(e(qs)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(dl);fl.type="LOCAL";var vl=fl,pl=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(){return e(he)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(de)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(dl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pl.type="SESSION";var ml=pl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){return Promise.all(t.map((n=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gl=function(){"use strict";function t(n){e(he)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(de)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s,u,c,l,h,d,f;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=(i=t).data,u=s.eventId,c=s.eventType,l=s.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),d=Array.from(h).map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,yl(d);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _l(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gl.receivers=[];var kl=function(){"use strict";function t(n){e(he)(this,t),this.target=n,this.handlers=new Set}return e(de)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(o).mark((function a(){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var o=_l("",20);s.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:s,onMessage:function(t){var n=t;if(n.data.eventId===o)switch(n.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(n.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),s.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:o,data:n},[s.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wl(){return void 0!==bl().WorkerGlobalScope&&"function"==typeof bl().importScripts}function Il(){return Tl.apply(this,arguments)}function Tl(){return(Tl=e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cl="firebaseLocalStorageDb",xl="firebaseLocalStorage",El="fbase_key",Sl=function(){"use strict";function t(n){e(he)(this,t),this.request=n}return e(de)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Rl(e,t){return e.transaction([xl],t?"readwrite":"readonly").objectStore(xl)}function Nl(){var e=indexedDB.deleteDatabase(Cl);return new Sl(e).toPromise()}function Pl(){var t=indexedDB.open(Cl,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(xl,{keyPath:El})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(xl)){e.next=12;break}return i.close(),e.next=5,Nl();case 5:return e.t0=n,e.next=8,Pl();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Ol(e,t,n){return Al.apply(this,arguments)}function Al(){return(Al=e(a)(e(o).mark((function t(n,r,i){var a,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=Rl(n,!0).put((a={},e(fe)(a,El,r),e(fe)(a,"value",i),a)),t.abrupt("return",new Sl(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Dl(e,t){return Ml.apply(this,arguments)}function Ml(){return(Ml=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Rl(n,!1).get(r),e.next=3,new Sl(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ll(e,t){var n=Rl(e,!0).delete(t);return new Sl(n).toPromise()}var Fl=function(){"use strict";function t(){e(he)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(de)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Pl();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",wl()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=gl._getInstance(wl()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(o).mark((function n(r,i){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Il();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new kl(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Pl();case 5:return n=e.sent,e.next=8,Ol(n,hl,"1");case 8:return e.next=10,Ll(n,hl);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Ol(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Dl(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ll(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u,c,l,h,d,f,v,p,m,y,g,_,k;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Rl(e,!1).getAll();return new Sl(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,s=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(s=(h=l.next()).done);s=!0)d=h.value,f=d.fbase_key,v=d.value,a.add(f),JSON.stringify(t.localCache[f])!==JSON.stringify(v)&&(t.notifyListeners(f,v),i.push(f));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(p=!0,m=!1,y=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(p=(_=g.next()).done);p=!0)k=_.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,y=e.t1;case 35:e.prev=35,e.prev=36,p||null==g.return||g.return();case 38:if(e.prev=38,!m){e.next=41;break}throw y;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Fl.type="LOCAL";var Ul=Fl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(e,t){return vu(e,"POST","/v2/accounts/mfaSignIn:start",fu(e,t))}function ql(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Js("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Hl(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Hl("rcb"),new su(3e4,6e4);var Wl="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(e,t,n){return Vl.apply(this,arguments)}function Vl(){return(Vl=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,d,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(s=e.sent,e.prev=4,Xs("string"==typeof s,n,"argument-error"),Xs(i.type===Wl,n,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return Xs("enroll"===c.type,n,"internal-error"),e.next=15,ll(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return Xs("signin"===c.type,n,"internal-error"),Xs(h=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,jl(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:s}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Rc(n,{phoneNumber:u.phoneNumber,recaptchaToken:s});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bl=function(){"use strict";function t(n){e(he)(this,t),this.providerId=t.PROVIDER_ID,this.auth=hc(n)}return e(de)(t,[{key:"verifyPhoneNumber",value:function(e,t){return zl(this.auth,e,Rt(t))}}],[{key:"credential",value:function(e,t){return Mc._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Mc._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kl(e,t){return t?tu(t):(Xs(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bl.PROVIDER_ID="phone",Bl.PHONE_SIGN_IN_METHOD="phone";var Gl=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t){var i;return e(he)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(de)(r,[{key:"_getIdTokenResponse",value:function(e){return xc(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return xc(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return xc(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(mc);function Jl(e){return el(e.auth,new Gl(e),e.bypassAuthState)}function Yl(e){var t=e.auth,n=e.user;return Xs(n,t,"internal-error"),$c(n,new Gl(e),e.bypassAuthState)}function Ql(e){return Xl.apply(this,arguments)}function Xl(){return(Xl=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,Xs(i=n.user,r,"internal-error"),e.abrupt("return",Qc(i,new Gl(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $l=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(he)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(de)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(a)(e(o).mark((function t(r,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,s=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:s||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jl;case"linkViaPopup":case"linkViaRedirect":return Ql;case"reauthViaPopup":case"reauthViaRedirect":return Yl;default:Gs(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Zl=new su(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eh=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t,i,a,o,s){var u;return e(he)(this,r),(u=n.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(xe)(u),u}return e(de)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return Xs(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Zs(1===t.filter.length,"Popup operations only handle one event"),r=_l(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Js(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Js(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Js(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Zl.get())};t()}}]),r}($l);eh.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var th=new Map,nh=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(he)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(de)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=th.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,rh(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Fs)(e(qs)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:s=i.t0,a=function(){return Promise.resolve(s)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:th.set(n.auth._key(),a);case 21:return n.bypassAuthState||th.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,s=function(){return e(Fs)(e(qs)(r.prototype),"onAuthEvent",n)};return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",s().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",s().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}($l);function rh(e,t){return ih.apply(this,arguments)}function ih(){return(ih=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=sh(r),a=oh(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ah(e,t){th.set(e._key(),t)}function oh(e){return tu(e._redirectPersistence)}function sh(e){return Ju("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(e,t){return ch.apply(this,arguments)}function ch(){return ch=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=hc(n),s=Kl(a,r),u=new nh(a,s,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),ch.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var lh=function(){"use strict";function t(n){e(he)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(de)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dh(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!dh(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Js(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(hh(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(hh(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function hh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function dh(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function fh(e){return vh.apply(this,arguments)}function vh(){return vh=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",vu(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),vh.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ph=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mh=/^https?/;function yh(){return(yh=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fh(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,s=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!gh(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,s=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Gs(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function gh(e){var t=ru(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!mh.test(r))return!1;if(ph.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _h=new su(3e4,6e4);function kh(){var t=bl().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(ve)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var bh=null;function wh(e){return bh=bh||function(e){return new Promise((function(t,n){var r,i,a;function o(){kh(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){kh(),n(Js(e,"network-request-failed"))},timeout:_h.get()})}if(null===(i=null===(r=bl().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=bl().gapi)||void 0===a?void 0:a.load)){var s=Hl("iframefcb");return bl()[s]=function(){gapi.load?o():n(Js(e,"network-request-failed"))},ql("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw bh=null,e}))}(e),bh}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ih=new su(5e3,15e3),Th={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ch=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xh(e){var t=e.config;Xs(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?uu(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:xn},i=Ch.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(kt(r).slice(1))}function Eh(e){return Sh.apply(this,arguments)}function Sh(){return Sh=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wh(n);case 2:return r=t.sent,Xs(i=bl().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:xh(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Th,dontclear:!0},(function(t){return new Promise((r=e(a)(e(o).mark((function r(i,a){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){bl().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=Js(n,"network-request-failed"),u=bl().setTimeout((function(){a(s)}),Ih.get()),t.ping(c).then(c,(function(){a(s)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Sh.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nh="_blank",Ph="http://localhost",Oh=function(){"use strict";function t(n){e(he)(this,t),this.window=n,this.associatedEvent=null}return e(de)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Ah(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Rh),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Ye().toLowerCase();r&&(u=Zu(l)?Nh:r),Xu(l)&&(n=n||Ph,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(ke)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(ac(l)&&"_self"!==u)return Dh(n||"",u),new Oh(null);var d=window.open(n||"",u,h);Xs(d,t,"popup-blocked");try{d.focus()}catch(e){}return new Oh(d)}function Dh(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mh="__/auth/handler",Lh="emulator/auth/handler";function Fh(t,n,r,i,a,o){Xs(t.config.authDomain,t,"auth-domain-config-required"),Xs(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:xn,eventId:a};if(n instanceof Uc){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",mt(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,d=Object.entries(o||{})[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=e(ke)(h.value,2),v=f[0],p=f[1];s[v]=p}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(n instanceof jc){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var y,g,_=s,k=!0,b=!1,w=void 0;try{for(var I,T=Object.keys(_)[Symbol.iterator]();!(k=(I=T.next()).done);k=!0){var C=I.value;void 0===_[C]&&delete _[C]}}catch(e){b=!0,w=e}finally{try{k||null==T.return||T.return()}finally{if(b)throw w}}return"".concat((y=t,g=y.config,g.emulator?uu(g,Lh):"https://".concat(g.authDomain,"/").concat(Mh)),"?").concat(kt(_).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Uh="webStorageSupport",jh=function(){"use strict";function t(){e(he)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ml,this._completeRedirectFn=uh,this._overrideRedirectResult=ah}return e(de)(t,[{key:"_openPopup",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Zs(null===(u=s.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Fh(t,n,r,ru(),i),e.abrupt("return",Ah(t,c,_l()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s._originValidation(t);case 2:return a=Fh(t,n,r,ru(),i),bl().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(Zs(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Eh(t);case 2:return i=e.sent,a=new lh(t),i.register("authEvent",(function(e){return Xs(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Uh,{type:Uh},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Gs(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return yh.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return sc()||$u()||ic()}}]),t}(),qh=jh,Hh=function(){"use strict";function t(n){e(he)(this,t),this.factorId=n}return e(de)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return $s("unexpected MultiFactorSessionType")}}}]),t}(),Wh=function(t){"use strict";e(Ee)(r,t);var n=e(Me)(r);function r(t){var i;return e(he)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(de)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return vu(e,"POST","/v2/accounts/mfaEnrollment:finalize",fu(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return vu(e,"POST","/v2/accounts/mfaSignIn:finalize",fu(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Hh);(function(){"use strict";function t(){e(he)(this,t)}return e(de)(t,null,[{key:"assertion",value:function(e){return Wh._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var zh="@firebase/auth",Vh="0.20.8",Bh=function(){"use strict";function t(n){e(he)(this,t),this.auth=n,this.internalListeners=new Map}return e(de)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Xs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kh,Gh=rt("authIdTokenMaxAge")||300,Jh=null,Yh=function(t){return n=e(a)(e(o).mark((function n(r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Gh)){e.next=9;break}return e.abrupt("return");case 9:if(s=null==i?void 0:i.token,Jh!==s){e.next=12;break}return e.abrupt("return");case 12:return Jh=s,e.next=15,fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};Kh="Browser",bn(new Nt("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){Xs(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Xs(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Kh,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uc(Kh)},i=new lc(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tu);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),bn(new Nt("auth-internal",(function(e){var t=hc(e.getProvider("auth").getImmediate());return new Bh(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(zh,Vh,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Kh)),Rn(zh,Vh,"esm2017");!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sn(),n=arguments.length>1?arguments[1]:void 0,r=wn(t,"database").getImmediate({identifier:n}),i=tt("database");if(i){var a=e(ke)(i.split(":"),2),o=a[0],s=a[1];Ls(r,o,parseInt(s,10))}}(En({apiKey:"AIzaSyCI5JTbKtHIHNuS4WcbgMfz2S8WxJp_ehM",authDomain:"filmoteka-proj-7.firebaseapp.com",databaseURL:"https://filmoteka-proj-7-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"filmoteka-proj-7",storageBucket:"filmoteka-proj-7.appspot.com",messagingSenderId:"181528100082",appId:"1:181528100082:web:031dd9add36023a4e5e46b",measurementId:"G-1X27T2N03L"}));var Qh,Xh,$h,Zh,ed=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sn(),t=wn(e,"auth");if(t.isInitialized())return t.getImmediate();var n=nu(e,{popupRedirectResolver:qh,persistence:[Ul,vl,ml]}),r=rt("authTokenSyncURL");if(r){var i=Yh(r);ul(n,i,(function(){return i(n.currentUser)})),sl(n,(function(e){return i(e)}))}var a=tt("auth");return a&&fc(n,"http://".concat(a)),n}(),td=document.querySelector("#logout"),nd=document.querySelector(".welcome"),rd=document.querySelector("#login");Xh=function(e){e&&(e.uid,Qh=e.email,td.classList.remove("visually-hidden"),rd.classList.add("visually-hidden"),console.log("current user = ",Qh),nd.innerHTML="Welcome, ".concat(Qh,"!"))},Rt(ed).onAuthStateChanged(Xh,$h,Zh),ae.addEventListener("submit",(function(e){e.preventDefault();var t=oe.value;console.log(t);var n=se.value;console.log(n),il(ed,t,n).then((function(e){e.user})).catch((function(e){var t=e.code,n=e.message;console.log(t),console.log(n)})),ae.reset(),ie()})),ue.addEventListener("submit",(function(e){e.preventDefault();var t=ce.value,n=le.value;ol(ed,t,n).then((function(e){e.user})).catch((function(e){e.code,e.message})),ue.reset(),ie()})),td.addEventListener("click",(function(){cl(ed).then((function(){Qh=null,td.classList.add("visually-hidden"),rd.classList.remove("visually-hidden")})).catch((function(e){})),window.location.reload()}));a=i("bpxeT"),o=i("2TvXO"),s=i("lbRHt"),u=i("aTzrc"),m=i("1VFfL");var id=document.querySelector(".movies"),ad=function(e){return f};function od(){return(od=e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.fetchTrendingMovies)();case 2:n=t.sent,id.innerHTML=(0,u.createMovieCards)(n.results),new(e(m))("pagination",ad).on("afterMove",(function(e){var t=e.page;(0,s.fetchTrendingMovies)(t).then((function(e){id.innerHTML=(0,u.createMovieCards)(e.results),window.scrollTo({top:0,behavior:"smooth"})}))}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){od.apply(this,arguments)}();Q=i("dyT35");var sd={};!function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function o(){}function s(e){var r=n.exports.Promise,i=void 0!==r?r:t.Promise;return"function"==typeof i?new i(e):(e(o,o),null)}var u,c,l,h,d,f,v,p,m,y=(l=Math.floor(1e3/60),h={},d=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(u=function(e){var t=Math.random();return h[t]=requestAnimationFrame((function n(r){d===r||d+l-1<r?(d=r,delete h[t],e()):h[t]=requestAnimationFrame(n)})),t},c=function(e){h[e]&&cancelAnimationFrame(h[e])}):(u=function(e){return setTimeout(e,l)},c=function(e){return clearTimeout(e)}),{frame:u,cancel:c}),g=(p={},function(){if(f)return f;if(!r&&a){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{f=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,r,i){if(v)return t(n,null),v;var a=Math.random().toString(36).slice(2);return v=s((function(r){function o(t){t.data.callback===a&&(delete p[a],e.removeEventListener("message",o),v=null,i(),r())}e.addEventListener("message",o),t(n,a),p[a]=o.bind(null,{data:{callback:a}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),p)p[t](),delete p[t]}}(f)}return f}),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function k(e,t,n){return function(e,t){return t?t(e):e}(e&&function(e){return!(null==e)}(e[t])?e[t]:_[t],n)}function b(e){return e<0?0:Math.floor(e)}function w(e){return parseInt(e,16)}function I(e){return e.map(T)}function T(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:w(t.substring(0,2)),g:w(t.substring(2,4)),b:w(t.substring(4,6))}}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function x(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function E(e,t,n,a,o){var u,c,l=t.slice(),h=e.getContext("2d"),d=s((function(t){function s(){u=c=null,h.clearRect(0,0,a.width,a.height),o(),t()}u=y.frame((function t(){!r||a.width===i.width&&a.height===i.height||(a.width=e.width=i.width,a.height=e.height=i.height),a.width||a.height||(n(e),a.width=e.width,a.height=e.height),h.clearRect(0,0,a.width,a.height),l=l.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,o=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,i,a,o,s,u){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,u),e.restore()}(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(o)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(h,e)})),l.length?u=y.frame(t):s()})),c=s}));return{addFettis:function(e){return l=l.concat(e),d},canvas:e,promise:d,reset:function(){u&&y.cancel(u),c&&c()}}}function S(e,n){var r,i=!e,o=!!k(n||{},"resize"),u=k(n,"disableForReducedMotion",Boolean),c=a&&!!k(n||{},"useWorker")?g():null,l=i?C:x,h=!(!e||!c)&&!!e.__confetti_initialized,d="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(t,n,i){for(var a,o,s,u,c,h=k(t,"particleCount",b),d=k(t,"angle",Number),f=k(t,"spread",Number),v=k(t,"startVelocity",Number),p=k(t,"decay",Number),m=k(t,"gravity",Number),y=k(t,"drift",Number),g=k(t,"colors",I),_=k(t,"ticks",Number),w=k(t,"shapes"),T=k(t,"scalar"),C=function(e){var t=k(e,"origin",Object);return t.x=k(t,"x",Number),t.y=k(t,"y",Number),t}(t),x=h,S=[],R=e.width*C.x,N=e.height*C.y;x--;)S.push((a={x:R,y:N,angle:d,spread:f,startVelocity:v,color:g[x%g.length],shape:w[(u=0,c=w.length,Math.floor(Math.random()*(c-u))+u)],ticks:_,decay:p,gravity:m,drift:y,scalar:T},o=void 0,s=void 0,o=a.angle*(Math.PI/180),s=a.spread*(Math.PI/180),{x:a.x,y:a.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*a.startVelocity+Math.random()*a.startVelocity,angle2D:-o+(.5*s-Math.random()*s),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*a.gravity,ovalScalar:.6,scalar:a.scalar}));return r?r.addFettis(S):(r=E(e,S,l,n,i)).promise}function v(n){var a=u||k(n,"disableForReducedMotion",Boolean),v=k(n,"zIndex",Number);if(a&&d)return s((function(e){e()}));i&&r?e=r.canvas:i&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(v),document.body.appendChild(e)),o&&!h&&l(e);var p={width:e.width,height:e.height};function m(){if(c){var t={getBoundingClientRect:function(){if(!i)return e.getBoundingClientRect()}};return l(t),void c.postMessage({resize:{width:t.width,height:t.height}})}p.width=p.height=null}function y(){r=null,o&&t.removeEventListener("resize",m),i&&e&&(document.body.removeChild(e),e=null,h=!1)}return c&&!h&&c.init(e),h=!0,c&&(e.__confetti_initialized=!0),o&&t.addEventListener("resize",m,!1),c?c.fire(n,p,y):f(n,p,y)}return v.reset=function(){c&&c.reset(),r&&r.reset()},v}function R(){return m||(m=S(null,{useWorker:!0,resize:!0})),m}n.exports=function(){return R().apply(this,arguments)},n.exports.reset=function(){R().reset()},n.exports.create=S}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),sd,!1);var ud=sd.exports;sd.exports.create;var cd;cd=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("cZGKX");var ld;ld=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("3w1do");var hd;hd=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("hHmKE");var dd;dd=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("43tRB");var fd;fd=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("iMsfK");var vd;vd=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("13d51");var pd;pd=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("gJTnf");var md;md=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("7mSLB");var yd;yd=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("1YPt6");var gd;gd=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("hoUkr");var _d;_d=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("aOQh9");var kd,bd=[{name:"Aleksandr Kadulin",img:"".concat(e(cd)),socialLink:"https://github.com/NilKad",teamRole:"Team Lead"},{name:"Oksana Kuzich",img:"".concat(e(ld)),socialLink:"https://github.com/OksanaKuzich",teamRole:"Scrum Master"},{name:"Aleksei Baliuk",img:"".concat(e(hd)),socialLink:"https://github.com/AlekseiBaliukveloper",teamRole:"Developer"},{name:"Dmytro Kobeza",img:"".concat(e(dd)),socialLink:"https://github.com/kobeza1",teamRole:"Developer"},{name:"Yulia Sukhonenko",img:"".concat(e(fd)),socialLink:"https://github.com/Yulia0907",teamRole:"Developer"},{name:"Anton Ostapienko",img:"".concat(e(vd)),socialLink:"https://github.com/AntonyUser",teamRole:"Developer"},{name:"Maksim Siomak",img:"".concat(e(pd)),socialLink:"https://github.com/Pleomax07",teamRole:"Developer"},{name:"Evgeniy Zyuskin",img:"".concat(e(md)),socialLink:"https://github.com/Yevhenns",teamRole:"Developer"},{name:"Yelyzaveta Demchenko",img:"".concat(e(yd)),socialLink:"https://github.com/yelyzaveta05",teamRole:"Developer"},{name:"Artem Borzov",img:"".concat(e(gd)),socialLink:"https://github.com/Artem-Borzov",teamRole:"Developer"},{name:"Yurii Shulga",img:"".concat(e(_d)),socialLink:"https://github.com/Yurkes2020",teamRole:"Developer"}];kd=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("3qpTs");var wd=bd.map((function(t){var n=t.name,r=t.img,i=t.socialLink,a=t.teamRole;return'\n    <li class="team-card">\n      <img src=\''.concat(r,"' alt='").concat(n,'\' class="team-image">\n      <p class="team-name">').concat(n,'</p>\n      <p class="team-role">').concat(a,"</p>\n      <a href='").concat(i,'\' target="_blank" class="team-git">\n       <svg class="logo__icon" width="24" height="24">\n        <use href="').concat(e(kd),'#github"></use>\n       </svg></a>\n    </li>')})).join(""),Id='<ul class="team-wrapper">\n    '.concat(wd,"\n  </ul>");document.querySelector(".footer-btn").addEventListener("click",(function(e){e.preventDefault(),Cd.show(),ud.create(document.getElementById("canvas"),{resize:!0,useWorker:!0})({particleCount:3e3,spread:600,startVelocity:80,zIndex:2022}),Td.style.overflow="hidden",window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(Cd.close(),window.removeEventListener("keydown",e))}))}));var Td=document.querySelector("body"),Cd=Q.create(Id)}();
//# sourceMappingURL=index.3949f0f1.js.map
