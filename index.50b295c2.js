function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire6149;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire6149=r);var s,a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,m=d||f||Function("return this")(),g=Object.prototype.toString,h=Math.max,v=Math.min,p=function(){return m.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var o=i.test(e);return o||c.test(e)?u(e.slice(2),o?2:8):l.test(e)?NaN:+e}s=function(e,t,o){var n,r,s,a,l,i,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var o=n,s=r;return n=r=void 0,c=t,a=e.apply(s,o)}function g(e){return c=e,l=setTimeout(w,t),u?m(e):a}function S(e){var o=e-i;return void 0===i||o>=t||o<0||d&&e-c>=s}function w(){var e=p();if(S(e))return L(e);l=setTimeout(w,function(e){var o=t-(e-i);return d?v(o,s-(e-c)):o}(e))}function L(e){return l=void 0,f&&n?m(e):(n=r=void 0,a)}function N(){var e=p(),o=S(e);if(n=arguments,r=this,i=e,o){if(void 0===l)return g(i);if(d)return l=setTimeout(w,t),m(i)}return void 0===l&&(l=setTimeout(w,t)),a}return t=b(t)||0,y(o)&&(u=!!o.leading,s=(d="maxWait"in o)?h(b(o.maxWait)||0,t):s,f="trailing"in o?!!o.trailing:f),N.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=i=r=l=void 0},N.flush=function(){return void 0===l?a:L(p())},N};var S=r("cqGDw");function w(e){console.log("------markupFormListSearch------"),console.log("input data: ",e);const t=L(e);return console.log("new Item: ",t),N(t)}const L=e=>{console.log("------preapreArray------");const t=e.map((e=>{let{title:t="",vote_average:o="",release_date:n="",id:r=""}=e;return n.length>0&&(n=n.slice(0,4)),{title:t,vote_average:o,release_date:n,id:r}}));return console.log("newArr: ",t),t},N=e=>e.map(M).join(""),M=({title:e,release_date:t,id:o},n,r)=>`\n      <div class="search-result__item " tadindex="0" data-index=${n} data-id=${o}>\n        <p class="search-result__title">${e}</p>\n        <span class="search-result__date"> (${t})</span>\n      </div>\n      `;S=r("cqGDw");var _=r("2ySY5");function T(e,t=0){return{totalItems:e,itemsPerPage:20,visiblePages:3,centerAlign:!0,firstItemClassName:"pagination-first-child",lastItemClassName:"pagination-last-child",usageStatistics:!0}}var E=r("dARph"),j=r("kLGAr"),A=r("fb9GJ");r("ffjl9");const k=document.querySelector(".movies"),I=document.querySelector(".hero-home__form"),F=document.querySelector(".fail-search"),q=new(0,j.localStorageAPI);async function x(e){O(await(0,S.fetchMoviesByName)(e),e)}async function D(e){const t=await(0,S.fetchMovieById)(e);console.log("---galleryFetchAndRenderByID---: ",t);const o={};o.results=[{...t}],o.total_results=1,O(o)}function O(t,o){if(0===t.results.length)return F.classList.remove("is-hidden"),setTimeout((()=>F.classList.add("is-hidden")),5e3),void I.reset();k.innerHTML=(0,_.createMovieCards)(t.results);new(e(A))("pagination",T(t.total_results)).on("afterMove",(({page:e})=>{(0,S.fetchMoviesByName)(o,e).then((e=>{k.innerHTML=(0,_.createMovieCards)(e.results),window.scrollTo({top:0,behavior:"smooth"})})).catch((e=>{console.log(e)}))}))}k.addEventListener("click",(async function(e){const t=e.target.closest("li").dataset.id;if(console.log("targetFilm: ",t),"UL"===e.target.nodeName)return;const o=q.getData("movies");console.log("movies: ",o);const n=q.getData("genresList"),r=o.filter((({id:e})=>e===Number(t)))[0];console.log("film: ",r);const{genre_ids:s}=r;let a;s&&(a=n.filter((({id:e})=>s.includes(e))).map((({name:e})=>e)));r.genres=a,q.setData("current-film",r),(0,E.modalBasicLightbox)(r,"movies"),q.addListenersToBtns()}));const B=document.querySelector(".search-result"),C=document.querySelector(".hero-home__form"),G=document.querySelector(".form_input");let H=[],P="",R=0,$="";let W=0;async function J(e){console.log("------fetchMoviesByNameGetAllNext------"),console.log("nameSearch: ",e,"   lastDownPage: ",R,"  totalFoundPages: ",W);const t=R+4;for(;t>R&&W>R;){const t=await(0,S.fetchMoviesByNameQuickSearch)(e,R+=1);console.log("respWhile ----- ",t),R=t.page,H=0===H.length?[...t.results]:[...H,...t.results]}return console.log("dataForRender:   ",H),H}async function Q(e){e=e.toLowerCase(),console.log("------quickSearchFetchAndRender------");let t=[],o=!1;if($!=e)o=!0,console.log("-----   lastNameSearch === nameSearch  ------"),console.log("//* получаю в response готовый массив объектов.   fetchMoviesByNameGetAll"),t=await async function(e){console.log("------fetchMoviesByNameGetAll------"),H=[],R=0;const t=await(0,S.fetchMoviesByNameQuickSearch)(e,R+=1);return console.log("lastNameSearch  in getAll do: ",$),$=e,console.log("lastNameSearch  in getAll posle: ",$),H=[...t.results],console.log("return fetchMoviesByName then JSON:  ",t),W=t.total_pages,R=t.page,J(e)}(e),console.log("!!!return first objects: === ",t);else{if(console.log("* получаю в response продолжение, если есть.   fetchMoviesByNameGetAllNext"),R===W)return;t=await J(e),console.log("!!!return NEXT objects from FETCH: === ",t)}const n=w(t);return console.log("----markupFormListSearch OK----"),o?U(n):z(n),H=[],"ok"}const U=e=>{console.log("------renderAddedSearch------"),B.innerHTML=e,document.body.addEventListener("click",K)},z=e=>{console.log("------renderAddedSearch------"),B.insertAdjacentHTML("beforeend",e),document.body.removeEventListener("click",K),document.body.addEventListener("click",K)},K=e=>{e.target.closest(".hero-home__form")||(X(),document.body.removeEventListener("click",K)),console.log("evt:  ",e);let t=e.target.closest(".search-result__item");const o=t.dataset.id,n=t.firstElementChild.textContent;console.log("searchID: ",o),console.log("searchName: ",n),X(),D(o)};C.addEventListener("submit",(function(e){e.preventDefault();const t=C.elements.searchQuery.value.trim();return""===t?console.log("Empty search query"):(X(),void x(t))}));const X=()=>{U("")};G.addEventListener("input",e(s)((async function(e){if(P=e.target.value.trim(),0===P.length)return X(),void(R=0);console.log("------onInputChange------"),R=0,H=[];const t=await Q(P);console.log(t),console.log("lastNameSearch: ",$)}),500)),B.addEventListener("scroll",e(s)((e=>{const{offsetHeight:t,scrollHeight:o,scrollTop:n}=e.target;if(.3*o>o-t-n)return console.log("fetchNext"),console.log("------scrollSearch------"),H=[],console.log("----call quickSearchFetchAndRender"),void Q(P)}),100)),r("6pjkE");var Y=r("25RCP"),V=r("fQ3Fn"),Z=r("amyG6"),ee=r("6pjkE");const te=(0,Y.initializeApp)({apiKey:"AIzaSyCI5JTbKtHIHNuS4WcbgMfz2S8WxJp_ehM",authDomain:"filmoteka-proj-7.firebaseapp.com",databaseURL:"https://filmoteka-proj-7-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"filmoteka-proj-7",storageBucket:"filmoteka-proj-7.appspot.com",messagingSenderId:"181528100082",appId:"1:181528100082:web:031dd9add36023a4e5e46b",measurementId:"G-1X27T2N03L"}),oe=((0,V.getDatabase)(te),(0,Z.getAuth)()),ne=document.querySelector(".logout");let re,se;const ae=document.querySelector(".welcome"),le=document.querySelector(".login");(0,Z.onAuthStateChanged)(oe,(e=>{e&&(re=e.uid,se=e.email,ne.classList.remove("visually-hidden"),le.classList.add("visually-hidden"),console.log("current user = ",se),ae.innerHTML=`Welcome, ${se}!`)})),ee.registrationFormSubmit.addEventListener("click",(function(e){e.preventDefault();const t=ee.registrationFormEmail.value;console.log(t);const o=ee.registrationFormPassword.value;console.log(o),(0,Z.createUserWithEmailAndPassword)(oe,t,o).then((e=>{e.user})).catch((e=>{const t=e.code,o=e.message;console.log(t),console.log(o)})),ee.registrationForm.reset(),(0,ee.closeOnSubmit)()})),ee.loginForm.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("watched"),localStorage.removeItem("queue");const t=ee.loginFormEmail.value,o=ee.loginFormPassword.value;(0,Z.signInWithEmailAndPassword)(oe,t,o).then((e=>{e.user;window.location.reload()})).catch((e=>{e.code,e.message})),ee.loginForm.reset(),(0,ee.closeOnSubmit)()})),ne.addEventListener("click",(function(){(0,Z.signOut)(oe).then((()=>{se=null,ne.classList.add("visually-hidden"),le.classList.remove("visually-hidden"),localStorage.clear()})).catch((e=>{})),window.location.reload()}));S=r("cqGDw"),_=r("2ySY5"),A=r("fb9GJ");const ie=document.querySelector(".movies");!async function(){const t=await(0,S.fetchTrendingMovies)();ie.innerHTML=(0,_.createMovieCards)(t.results),console.log("res: ",t),new(e(A))("pagination",T(t.total_results)).on("afterMove",(({page:e})=>{(0,S.fetchTrendingMovies)(e).then((e=>{ie.innerHTML=(0,_.createMovieCards)(e.results),window.scrollTo({top:0,behavior:"smooth"})}))}))}(),r("ioBS9"),r("04jNI"),r("82jod"),r("1VOaQ");
//# sourceMappingURL=index.50b295c2.js.map