!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire6149;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire6149=o);var a,i=o("bpxeT"),s=o("8nrFW"),c=o("2TvXO"),l=o("l5bVx"),u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,h=m||g||Function("return this")(),b=Object.prototype.toString,y=Math.max,w=Math.min,x=function(){return h.Date.now()};function S(t){var n=void 0===t?"undefined":e(l)(t);return!!t&&("object"==n||"function"==n)}function L(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(S(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=S(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=f.test(t);return r||p.test(t)?v(t.slice(2),r?2:8):d.test(t)?NaN:+t}a=function(e,t,n){var r,o,a,i,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function v(e){return l=e,s=setTimeout(g,t),u?p(e):i}function m(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function g(){var e=x();if(m(e))return h(e);s=setTimeout(g,function(e){var n=t-(e-c);return d?w(n,a-(e-l)):n}(e))}function h(e){return s=void 0,f&&r?p(e):(r=o=void 0,i)}function b(){var e=x(),n=m(e);if(r=arguments,o=this,c=e,n){if(void 0===s)return v(c);if(d)return s=setTimeout(g,t),p(c)}return void 0===s&&(s=setTimeout(g,t)),i}return t=L(t)||0,S(n)&&(u=!!n.leading,a=(d="maxWait"in n)?y(L(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=o=s=void 0},b.flush=function(){return void 0===s?i:h(x())},b};var T=o("lbRHt");function N(e){console.log("------markupFormListSearch------"),console.log("input data: ",e);var t=k(e);return console.log("new Item: ",t),M(t)}var k=function(e){console.log("------preapreArray------");var t=e.map((function(e){var t=e.title,n=void 0===t?"":t,r=e.vote_average,o=void 0===r?"":r,a=e.release_date,i=void 0===a?"":a,s=e.id,c=void 0===s?"":s;return i.length>0&&(i=i.slice(0,4)),{title:n,vote_average:o,release_date:i,id:c}}));return console.log("newArr: ",t),t},M=function(e){return e.map(_).join("")},_=function(e,t,n){var r=e.title,o=e.release_date,a=e.id;return'\n      <div class="search-result__item " tadindex="0" data-index='.concat(t," data-id=").concat(a,'>\n        <p class="search-result__title">').concat(r,'</p>\n        <span class="search-result__date"> (').concat(o,")</span>\n      </div>\n      ")},E=(i=o("bpxeT"),o("dDDEV")),A=(c=o("2TvXO"),T=o("lbRHt"),o("aTzrc"));function F(e){return{totalItems:e,itemsPerPage:20,visiblePages:3,centerAlign:!0,firstItemClassName:"pagination-first-child",lastItemClassName:"pagination-last-child",usageStatistics:!1,template:{}}}var j=o("g2YN6"),I=o("6fJbC"),D=o("1VFfL");o("2xDiJ");var O=document.querySelector(".movies"),q=document.querySelector(".hero-home__form"),H=document.querySelector(".fail-search"),C=new(0,I.localStorageAPI);function B(){return(B=e(i)(e(c).mark((function t(n){var r,o,a,i,s,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.target.closest("li").dataset.id,"UL"!==n.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:try{o=C.getData("movies"),a=C.getData("genresList"),i=o.filter((function(e){return e.id===Number(r)}))[0],(s=i.genre_ids)&&(l=a.filter((function(e){var t=e.id;return s.includes(t)})).map((function(e){return e.name}))),i.genres=l,C.setData("current-film",i),(0,j.modalBasicLightbox)(i,"movies"),C.addListenersToBtns()}catch(e){console.log(e.message)}case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function W(e){return P.apply(this,arguments)}function P(){return(P=e(i)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,T.fetchMoviesByName)(n);case 2:z(e.sent);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function R(e){return U.apply(this,arguments)}function U(){return(U=e(i)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.fetchMovieById)(n);case 2:r=t.sent,console.log("---galleryFetchAndRenderByID---: ",r),(o={}).results=[e(E)({},r)],o.total_results=1,z(o);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(t){if(0===t.results.length)return H.classList.remove("is-hidden"),setTimeout((function(){return H.classList.add("is-hidden")}),5e3),void q.reset();O.innerHTML=(0,A.createMovieCards)(t.results),new(e(D))("pagination",F(t.total_results)).on("afterMove",(function(e){var t=e.page;(0,T.fetchMoviesByName)(movieName,t).then((function(e){O.innerHTML=(0,A.createMovieCards)(e.results),window.scrollTo({top:0,behavior:"smooth"})})).catch((function(e){console.log(e)}))}))}O.addEventListener("click",(function(e){return B.apply(this,arguments)}));var G=document.querySelector(".search-result"),J=document.querySelector(".hero-home__form"),X=document.querySelector(".form_input"),V=[],$="",K=0,Q="",Y=0;function Z(){return(Z=e(i)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==($=n.target.value.trim()).length){e.next=5;break}return le(),K=0,e.abrupt("return");case 5:return console.log("------onInputChange------"),K=0,V=[],e.next=10,oe($);case 10:return r=e.sent,console.log(r),console.log("lastNameSearch: ",Q),e.abrupt("return");case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=e(i)(e(c).mark((function t(n){var r;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("------fetchMoviesByNameGetAll------"),V=[],K=0,t.next=5,(0,T.fetchMoviesByName)(n,K+=1);case 5:return r=t.sent,console.log("lastNameSearch  in getAll do: ",Q),Q=n,console.log("lastNameSearch  in getAll posle: ",Q),V=e(s)(r.results),console.log("return fetchMoviesByName then JSON:  ",r),Y=r.total_pages,K=r.page,t.abrupt("return",ne(n));case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ne(e){return re.apply(this,arguments)}function re(){return(re=e(i)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("------fetchMoviesByNameGetAllNext------"),console.log("nameSearch: ",n,"   lastDownPage: ",K,"  totalFoundPages: ",Y),r=K+4,[];case 4:if(!(r>K&&Y>K)){t.next=13;break}return t.next=7,(0,T.fetchMoviesByName)(n,K+=1);case 7:o=t.sent,console.log("respWhile ----- ",o),K=o.page,V=0===V.length?e(s)(o.results):e(s)(V).concat(e(s)(o.results)),t.next=4;break;case 13:return console.log("dataForRender:   ",V),t.abrupt("return",V);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function oe(e){return ae.apply(this,arguments)}function ae(){return(ae=e(i)(e(c).mark((function t(n){var r,o,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=n.toLowerCase(),console.log("------quickSearchFetchAndRender------"),r=[],o=!1,Q==n){e.next=14;break}return o=!0,console.log("-----   lastNameSearch === nameSearch  ------"),console.log("//* получаю в response готовый массив объектов.   fetchMoviesByNameGetAll"),e.next=10,ee(n);case 10:r=e.sent,console.log("!!!return first objects: === ",r),e.next=21;break;case 14:if(console.log("* получаю в response продолжение, если есть.   fetchMoviesByNameGetAllNext"),K!==Y){e.next=17;break}return e.abrupt("return");case 17:return e.next=19,ne(n);case 19:r=e.sent,console.log("!!!return NEXT objects from FETCH: === ",r);case 21:return a=N(r),console.log("----markupFormListSearch OK----"),o?ie(a):se(a),V=[],e.abrupt("return","ok");case 26:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ie=function(e){console.log("------renderAddedSearch------"),G.innerHTML=e,document.body.addEventListener("click",ce)},se=function(e){console.log("------renderAddedSearch------"),G.insertAdjacentHTML("beforeend",e),document.body.removeEventListener("click",ce),document.body.addEventListener("click",ce)},ce=function(e){e.target.closest(".hero-home__form")||(le(),document.body.removeEventListener("click",ce)),console.log("evt:  ",e);var t=e.target.closest(".search-result__item"),n=t.dataset.id,r=t.firstElementChild.textContent;console.log("searchID: ",n),console.log("searchName: ",r),le(),R(n)};J.addEventListener("submit",(function(e){e.preventDefault();var t=J.elements.searchQuery.value.trim();return""===t?console.log("Empty search query"):(le(),void W(t))}));var le=function(){ie("")};X.addEventListener("input",e(a)((function(e){return Z.apply(this,arguments)}),500)),G.addEventListener("scroll",e(a)((function(e){var t=e.target,n=t.offsetHeight,r=t.scrollHeight;if(.3*r>r-n-t.scrollTop)return console.log("fetchNext"),console.log("------scrollSearch------"),V=[],console.log("----call quickSearchFetchAndRender"),void oe($)}),100)),o("8uW00");var ue,de=o("6Urw1"),fe=o("6Nu6u"),pe=o("3SEMc"),ve=o("8uW00"),me=(0,de.initializeApp)({apiKey:"AIzaSyCI5JTbKtHIHNuS4WcbgMfz2S8WxJp_ehM",authDomain:"filmoteka-proj-7.firebaseapp.com",databaseURL:"https://filmoteka-proj-7-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"filmoteka-proj-7",storageBucket:"filmoteka-proj-7.appspot.com",messagingSenderId:"181528100082",appId:"1:181528100082:web:031dd9add36023a4e5e46b",measurementId:"G-1X27T2N03L"}),ge=((0,fe.getDatabase)(me),(0,pe.getAuth)()),he=document.querySelector(".logout"),be=document.querySelector(".welcome"),ye=document.querySelector(".login");(0,pe.onAuthStateChanged)(ge,(function(e){e&&(e.uid,ue=e.email,he.classList.remove("visually-hidden"),ye.classList.add("visually-hidden"),console.log("current user = ",ue),be.innerHTML="Welcome, ".concat(ue,"!"))})),ve.registrationFormSubmit.addEventListener("click",(function(e){e.preventDefault();var t=ve.registrationFormEmail.value;console.log(t);var n=ve.registrationFormPassword.value;console.log(n),(0,pe.createUserWithEmailAndPassword)(ge,t,n).then((function(e){e.user})).catch((function(e){var t=e.code,n=e.message;console.log(t),console.log(n)})),ve.registrationForm.reset(),(0,ve.closeOnSubmit)()})),ve.loginForm.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("watched"),localStorage.removeItem("queue");var t=ve.loginFormEmail.value,n=ve.loginFormPassword.value;(0,pe.signInWithEmailAndPassword)(ge,t,n).then((function(e){e.user;window.location.reload()})).catch((function(e){e.code,e.message})),ve.loginForm.reset(),(0,ve.closeOnSubmit)()})),he.addEventListener("click",(function(){(0,pe.signOut)(ge).then((function(){ue=null,he.classList.add("visually-hidden"),ye.classList.remove("visually-hidden"),localStorage.clear()})).catch((function(e){})),window.location.reload()}));i=o("bpxeT"),c=o("2TvXO"),T=o("lbRHt"),A=o("aTzrc"),D=o("1VFfL");var we=document.querySelector(".movies");function xe(){return(xe=e(i)(e(c).mark((function t(){var n;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.fetchTrendingMovies)();case 2:n=t.sent,we.innerHTML=(0,A.createMovieCards)(n.results),console.log("res: ",n),new(e(D))("pagination",F(n.total_results)).on("afterMove",(function(e){var t=e.page;(0,T.fetchTrendingMovies)(t).then((function(e){we.innerHTML=(0,A.createMovieCards)(e.results),window.scrollTo({top:0,behavior:"smooth"})}))}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){xe.apply(this,arguments)}(),o("4smAb"),o("j1lrD"),o("4Hwvb"),o("dsadE")}();
//# sourceMappingURL=index.a195cb63.js.map
