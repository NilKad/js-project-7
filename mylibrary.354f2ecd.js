!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire6149;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire6149=n);var i=n("aTzrc"),o=n("g2YN6"),r=n("6fJbC");n("1VFfL");var c,l,d=n("6Urw1"),s=n("6Nu6u"),u=n("3SEMc"),f=(0,d.initializeApp)({apiKey:"AIzaSyCI5JTbKtHIHNuS4WcbgMfz2S8WxJp_ehM",authDomain:"filmoteka-proj-7.firebaseapp.com",databaseURL:"https://filmoteka-proj-7-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"filmoteka-proj-7",storageBucket:"filmoteka-proj-7.appspot.com",messagingSenderId:"181528100082",appId:"1:181528100082:web:031dd9add36023a4e5e46b",measurementId:"G-1X27T2N03L"}),g=((0,s.getDatabase)(f),(0,s.ref)((0,s.getDatabase)())),v=(0,u.getAuth)(),m=[],p=[],h=document.querySelector("#logout-ml"),L=document.querySelector(".welcome-ml");(0,u.onAuthStateChanged)(v,(function(e){e?(c=e.uid,l=e.email,console.log("Это обсервер my-library"),h.classList.remove("visually-hidden"),L.innerHTML="Welcome, ".concat(l,"!")):h.classList.add("visually-hidden")}));var b,k=document.querySelector(".movies"),w=document.querySelector('[data-id="watched-btn"'),S=document.querySelector('[data-id="queue-btn"'),y=(document.querySelector(".header-nav__link--current-header"),new(0,r.localStorageAPI));function M(e){var t=e.target.closest("li").dataset.id;if("UL"!==e.target.nodeName)try{var a,n=y.getData("watched"),i=y.getData("genresList"),r=n.filter((function(e){return e.id===Number(t)}))[0],c=r.genre_ids;c&&(a=i.filter((function(e){var t=e.id;return c.includes(t)})).map((function(e){return e.name}))),r.genres=a,y.setData("current-film",r),(0,o.modalBasicLightbox)(r,"watched"),y.addListenersToBtns()}catch(e){console.log(e.message)}}function T(e){var t=e.target.closest("li").dataset.id;if("UL"!==e.target.nodeName)try{var a,n=y.getData("queue"),i=y.getData("genresList"),r=n.filter((function(e){return e.id===Number(t)}))[0],c=r.genre_ids;c&&(a=i.filter((function(e){var t=e.id;return c.includes(t)})).map((function(e){return e.name}))),r.genres=a,y.setData("current-film",r),(0,o.modalBasicLightbox)(r,"queue"),y.addListenersToBtns()}catch(e){console.log(e.message)}}w.addEventListener("click",(function(){var e="";if(k.removeEventListener("click",T),w.classList.contains("is-active"))return;(0,u.onAuthStateChanged)(v,(function(t){if(t)c=t.uid,l=t.email,(0,s.get)((0,s.child)(g,"users/".concat(c,"watched/watched"))).then((function(t){t.exists()?(m=t.val(),console.log("getWatched",t.val()),e=(0,i.createMovieCards)(m),k.innerHTML=e,k.addEventListener("click",M)):(console.log("No data available"),m=t.val(),console.log("getWatched",t.val()),e="<div><p>ЗАГЛУШКА Watched</p></div>",k.innerHTML=e,k.addEventListener("click",M))})).catch((function(e){console.error(e)}));else{m=y.getData("watched");var a=(0,i.createMovieCards)(m);k.innerHTML=a,k.addEventListener("click",M)}}))})),S.addEventListener("click",(function(){if(k.removeEventListener("click",M),!w.classList.contains("is-active"))return;(0,u.onAuthStateChanged)(v,(function(e){if(e)c=e.uid,l=e.email,(0,s.get)((0,s.child)(g,"users/".concat(c,"queue/queue"))).then((function(e){if(e.exists()){p=e.val(),console.log("getQueue",e.val());var t=(0,i.createMovieCards)(p);k.innerHTML=t,k.addEventListener("click",T)}else console.log("No data available"),m=e.val(),console.log("getWatched",e.val()),markup="<div><p>ЗАГЛУШКА Queue</p></div>",k.innerHTML=markup,k.addEventListener("click",M)})).catch((function(e){console.error(e)}));else{var t=y.getData("queue"),a=(0,i.createMovieCards)(t);k.innerHTML=a,k.addEventListener("click",T)}}))})),b=[],(0,u.onAuthStateChanged)(v,(function(e){if(e)c=e.uid,l=e.email,(0,s.get)((0,s.child)(g,"users/".concat(c,"watched/watched"))).then((function(e){if(e.exists()){b=e.val(),localStorage.setItem("watched",JSON.stringify(b)),console.log("getWatched",e.val());var t=(0,i.createMovieCards)(b);k.innerHTML=t,k.addEventListener("click",M)}else console.log("No data available"),b=e.val(),console.log("getWatched",e.val()),markup="<div><p>ЗАГЛУШКА Watched</p></div>",k.innerHTML=markup,k.addEventListener("click",M)})).catch((function(e){console.error(e)}));else{b=y.getData("watched");var t=(0,i.createMovieCards)(b);k.innerHTML=t,k.addEventListener("click",M)}})),n("dsadE"),n("4smAb"),n("j1lrD"),n("4Hwvb");d=n("6Urw1"),s=n("6Nu6u"),u=n("3SEMc");var E,D=(0,d.initializeApp)({apiKey:"AIzaSyCI5JTbKtHIHNuS4WcbgMfz2S8WxJp_ehM",authDomain:"filmoteka-proj-7.firebaseapp.com",databaseURL:"https://filmoteka-proj-7-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"filmoteka-proj-7",storageBucket:"filmoteka-proj-7.appspot.com",messagingSenderId:"181528100082",appId:"1:181528100082:web:031dd9add36023a4e5e46b",measurementId:"G-1X27T2N03L"}),N=((0,s.getDatabase)(D),(0,u.getAuth)()),q=document.querySelector("#logout-ml"),H=document.querySelector(".welcome-ml");(0,u.onAuthStateChanged)(N,(function(e){e?(e.uid,E=e.email,console.log("current user = ",E),q.classList.remove("visually-hidden"),H.innerHTML="Welcome, ".concat(E,"!")):q.classList.add("visually-hidden")})),q.addEventListener("click",(function(){(0,u.signOut)(N).then((function(){E=null,window.location.reload()})).catch((function(e){console.log(e)}))}))}();
//# sourceMappingURL=mylibrary.354f2ecd.js.map
