var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire6149;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire6149=n);var i=n("2ySY5"),o=n("dARph"),l=n("kLGAr");n("fb9GJ");var c=n("25RCP"),d=n("fQ3Fn"),r=n("amyG6");const s=(0,c.initializeApp)({apiKey:"AIzaSyCI5JTbKtHIHNuS4WcbgMfz2S8WxJp_ehM",authDomain:"filmoteka-proj-7.firebaseapp.com",databaseURL:"https://filmoteka-proj-7-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"filmoteka-proj-7",storageBucket:"filmoteka-proj-7.appspot.com",messagingSenderId:"181528100082",appId:"1:181528100082:web:031dd9add36023a4e5e46b",measurementId:"G-1X27T2N03L"}),u=((0,d.getDatabase)(s),(0,d.ref)((0,d.getDatabase)())),g=(0,r.getAuth)();let m,h;const p=document.querySelector("#logout-ml"),v=document.querySelector(".welcome-ml");(0,r.onAuthStateChanged)(g,(e=>{e?(m=e.uid,h=e.email,console.log("Это обсервер my-library"),p.classList.remove("visually-hidden"),v.innerHTML=`Welcome, ${h}!`):p.classList.add("visually-hidden")}));const f=document.querySelector(".movies"),L=document.querySelector('[data-id="watched-btn"'),b=document.querySelector('[data-id="queue-btn"'),k=(document.querySelector(".header-nav__link--current-header"),new(0,l.localStorageAPI));function y(e){const t=e.target.closest("li").dataset.id;if("UL"!==e.target.nodeName)try{const e=k.getData("watched"),a=k.getData("genresList"),n=e.filter((({id:e})=>e===Number(t)))[0],{genre_ids:i}=n;let l;i&&(l=a.filter((({id:e})=>i.includes(e))).map((({name:e})=>e))),n.genres=l,k.setData("current-film",n),(0,o.modalBasicLightbox)(n,"watched"),k.addListenersToBtns()}catch(e){console.log(e.message)}}function S(e){const t=e.target.closest("li").dataset.id;if("UL"!==e.target.nodeName)try{const e=k.getData("queue"),a=k.getData("genresList"),n=e.filter((({id:e})=>e===Number(t)))[0],{genre_ids:i}=n;let l;i&&(l=a.filter((({id:e})=>i.includes(e))).map((({name:e})=>e))),n.genres=l,k.setData("current-film",n),(0,o.modalBasicLightbox)(n,"queue"),k.addListenersToBtns()}catch(e){console.log(e.message)}}L.addEventListener("click",(function(){let e="";if(f.removeEventListener("click",S),L.classList.contains("is-active"))return;(0,r.onAuthStateChanged)(g,(t=>{if(t)m=t.uid,h=t.email,(0,d.get)((0,d.child)(u,`users/${m}watched/watched`)).then((t=>{t.exists()?(getWatched=t.val(),console.log("getWatched",t.val()),e=(0,i.createMovieCards)(getWatched),f.innerHTML=e,f.addEventListener("click",y)):(console.log("No data available"),getWatched=t.val(),console.log("getWatched",t.val()),e="<div><p>ЗАГЛУШКА Watched</p></div>",f.innerHTML=e,f.addEventListener("click",y))})).catch((e=>{console.error(e)}));else{getWatched=k.getData("watched");const e=(0,i.createMovieCards)(getWatched);f.innerHTML=e,f.addEventListener("click",y)}}))})),b.addEventListener("click",(function(){if(f.removeEventListener("click",y),!L.classList.contains("is-active"))return;(0,r.onAuthStateChanged)(g,(e=>{if(e)m=e.uid,h=e.email,(0,d.get)((0,d.child)(u,`users/${m}queue/queue`)).then((e=>{if(e.exists()){getQueue=e.val(),console.log("getQueue",e.val());const t=(0,i.createMovieCards)(getQueue);f.innerHTML=t,f.addEventListener("click",S)}else console.log("No data available"),getWatched=e.val(),console.log("getWatched",e.val()),markup="<div><p>ЗАГЛУШКА Queue</p></div>",f.innerHTML=markup,f.addEventListener("click",y)})).catch((e=>{console.error(e)}));else{const e=k.getData("queue"),t=(0,i.createMovieCards)(e);f.innerHTML=t,f.addEventListener("click",S)}}))})),function(){let e=[];(0,r.onAuthStateChanged)(g,(t=>{if(t)m=t.uid,h=t.email,(0,d.get)((0,d.child)(u,`users/${m}watched/watched`)).then((t=>{if(t.exists()){e=t.val(),localStorage.setItem("watched",JSON.stringify(e)),console.log("getWatched",t.val());const a=(0,i.createMovieCards)(e);f.innerHTML=a,f.addEventListener("click",y)}else console.log("No data available"),e=t.val(),console.log("getWatched",t.val()),markup="<div><p>ЗАГЛУШКА Watched</p></div>",f.innerHTML=markup,f.addEventListener("click",y)})).catch((e=>{console.error(e)}));else{e=k.getData("watched");const t=(0,i.createMovieCards)(e);f.innerHTML=t,f.addEventListener("click",y)}}))}(),n("1VOaQ"),n("ioBS9"),n("04jNI"),n("82jod");c=n("25RCP"),d=n("fQ3Fn"),r=n("amyG6");const w=(0,c.initializeApp)({apiKey:"AIzaSyCI5JTbKtHIHNuS4WcbgMfz2S8WxJp_ehM",authDomain:"filmoteka-proj-7.firebaseapp.com",databaseURL:"https://filmoteka-proj-7-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"filmoteka-proj-7",storageBucket:"filmoteka-proj-7.appspot.com",messagingSenderId:"181528100082",appId:"1:181528100082:web:031dd9add36023a4e5e46b",measurementId:"G-1X27T2N03L"}),M=((0,d.getDatabase)(w),(0,r.getAuth)()),T=document.querySelector("#logout-ml"),W=document.querySelector(".welcome-ml");let I,q;(0,r.onAuthStateChanged)(M,(e=>{e?(I=e.uid,q=e.email,console.log("current user = ",q),T.classList.remove("visually-hidden"),W.innerHTML=`Welcome, ${q}!`):T.classList.add("visually-hidden")})),T.addEventListener("click",(function(){(0,r.signOut)(M).then((()=>{q=null,window.location.reload()})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=mylibrary.76ed5340.js.map
