!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=n.parcelRequire6149;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},n.parcelRequire6149=r),r.register("4smAb",(function(e,t){document.body.onload=function(){setTimeout((function(){document.querySelector(".preloader").classList.toggle("done")}),500)}})),r.register("j1lrD",(function(e,t){document.querySelector("main")})),r.register("4Hwvb",(function(e,t){var n=document.body,o=document.querySelector(".toggle-input"),a="true"==localStorage.getItem("toggleState");function r(){o.checked?n.classList.add("dark__theme"):n.classList.remove("dark__theme")}o.checked=a,r(),o.addEventListener("change",r),o.addEventListener("change",(function(){localStorage.setItem("toggleState",o.checked)}))})),r.register("dsadE",(function(t,n){var o=r("dyT35"),a=r("ayIuB"),i=r("1PuHP"),c=r("casz0"),l=i.teamInfo.map((function(t){var n=t.name,o=t.img,a=t.socialLink,r=t.teamRole;return'\n    <li class="team-card">\n      <img src=\''.concat(o,"' alt='").concat(n,'\' class="team-image">\n      <p class="team-name">').concat(n,'</p>\n      <p class="team-role">').concat(r,"</p>\n      <a href='").concat(a,'\' target="_blank" class="team-git">\n       <svg class="logo__icon" width="24" height="24">\n        <use href="').concat(e(c),'#github"></use>\n       </svg></a>\n    </li>')})).join(""),s='<ul class="team-wrapper">\n    '.concat(l,"\n  </ul>");document.querySelector(".footer-btn").addEventListener("click",(function(e){e.preventDefault(),d.show(),(0,a.default)(),u.style.overflow="hidden",window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(d.close(),window.removeEventListener("keydown",e))}))}));var u=document.querySelector("body"),d=o.create(s)})),r.register("ayIuB",(function(e,n){t(e.exports,"default",(function(){return a}));var o=r("19eBY");function a(){o.default.create(document.getElementById("canvas"),{resize:!0,useWorker:!0})({particleCount:3e3,spread:600,startVelocity:80,zIndex:2022})}})),r.register("19eBY",(function(e,n){t(e.exports,"default",(function(){return a}));var o={};!function e(t,n,o,a){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function i(){}function c(e){var o=n.exports.Promise,a=void 0!==o?o:t.Promise;return"function"==typeof a?new a(e):(e(i,i),null)}var l,s,u,d,f,g,m,h,p,v=(u=Math.floor(1e3/60),d={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(l=function(e){var t=Math.random();return d[t]=requestAnimationFrame((function n(o){f===o||f+u-1<o?(f=o,delete d[t],e()):d[t]=requestAnimationFrame(n)})),t},s=function(e){d[e]&&cancelAnimationFrame(d[e])}):(l=function(e){return setTimeout(e,u)},s=function(e){return clearTimeout(e)}),{frame:l,cancel:s}),b=(h={},function(){if(g)return g;if(!o&&r){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{g=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,o,a){if(m)return t(n,null),m;var r=Math.random().toString(36).slice(2);return m=c((function(o){function i(t){t.data.callback===r&&(delete h[r],e.removeEventListener("message",i),m=null,a(),o())}e.addEventListener("message",i),t(n,r),h[r]=i.bind(null,{data:{callback:r}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),h)h[t](),delete h[t]}}(g)}return g}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:y[t],n)}function k(e){return e<0?0:Math.floor(e)}function E(e){return parseInt(e,16)}function R(e){return e.map(M)}function M(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:E(t.substring(0,2)),g:E(t.substring(2,4)),b:E(t.substring(4,6))}}function x(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function S(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function H(e,t,n,r,i){var l,s,u=t.slice(),d=e.getContext("2d"),f=c((function(t){function c(){l=s=null,d.clearRect(0,0,r.width,r.height),i(),t()}l=v.frame((function t(){!o||r.width===a.width&&r.height===a.height||(r.width=e.width=a.width,r.height=e.height=a.height),r.width||r.height||(n(e),r.width=e.width,r.height=e.height),d.clearRect(0,0,r.width,r.height),u=u.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,o=t.x+t.random*t.tiltCos,a=t.y+t.random*t.tiltSin,r=t.wobbleX+t.random*t.tiltCos,i=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(r-o)*t.ovalScalar,Math.abs(i-a)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,o,a,r,i,c,l){e.save(),e.translate(t,n),e.rotate(r),e.scale(o,a),e.arc(0,0,1,i,c,l),e.restore()}(e,t.x,t.y,Math.abs(r-o)*t.ovalScalar,Math.abs(i-a)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(a)),e.lineTo(Math.floor(r),Math.floor(i)),e.lineTo(Math.floor(o),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(d,e)})),u.length?l=v.frame(t):c()})),s=c}));return{addFettis:function(e){return u=u.concat(e),f},canvas:e,promise:f,reset:function(){l&&v.cancel(l),s&&s()}}}function L(e,n){var o,a=!e,i=!!w(n||{},"resize"),l=w(n,"disableForReducedMotion",Boolean),s=r&&!!w(n||{},"useWorker")?b():null,u=a?x:S,d=!(!e||!s)&&!!e.__confetti_initialized,f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function g(t,n,a){for(var r,i,c,l,s,d=w(t,"particleCount",k),f=w(t,"angle",Number),g=w(t,"spread",Number),m=w(t,"startVelocity",Number),h=w(t,"decay",Number),p=w(t,"gravity",Number),v=w(t,"drift",Number),b=w(t,"colors",R),y=w(t,"ticks",Number),E=w(t,"shapes"),M=w(t,"scalar"),x=function(e){var t=w(e,"origin",Object);return t.x=w(t,"x",Number),t.y=w(t,"y",Number),t}(t),S=d,L=[],_=e.width*x.x,C=e.height*x.y;S--;)L.push((r={x:_,y:C,angle:f,spread:g,startVelocity:m,color:b[S%b.length],shape:E[(l=0,s=E.length,Math.floor(Math.random()*(s-l))+l)],ticks:y,decay:h,gravity:p,drift:v,scalar:M},i=void 0,c=void 0,i=r.angle*(Math.PI/180),c=r.spread*(Math.PI/180),{x:r.x,y:r.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*r.startVelocity+Math.random()*r.startVelocity,angle2D:-i+(.5*c-Math.random()*c),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*r.gravity,ovalScalar:.6,scalar:r.scalar}));return o?o.addFettis(L):(o=H(e,L,u,n,a)).promise}function m(n){var r=l||w(n,"disableForReducedMotion",Boolean),m=w(n,"zIndex",Number);if(r&&f)return c((function(e){e()}));a&&o?e=o.canvas:a&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(m),document.body.appendChild(e)),i&&!d&&u(e);var h={width:e.width,height:e.height};function p(){if(s){var t={getBoundingClientRect:function(){if(!a)return e.getBoundingClientRect()}};return u(t),void s.postMessage({resize:{width:t.width,height:t.height}})}h.width=h.height=null}function v(){o=null,i&&t.removeEventListener("resize",p),a&&e&&(document.body.removeChild(e),e=null,d=!1)}return s&&!d&&s.init(e),d=!0,s&&(e.__confetti_initialized=!0),i&&t.addEventListener("resize",p,!1),s?s.fire(n,h,v):g(n,h,v)}return m.reset=function(){s&&s.reset(),o&&o.reset()},m}function _(){return p||(p=L(null,{useWorker:!0,resize:!0})),p}n.exports=function(){return _().apply(this,arguments)},n.exports.reset=function(){_().reset()},n.exports.create=L}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),o,!1);var a=o.exports;o.exports.create})),r.register("1PuHP",(function(n,o){t(n.exports,"teamInfo",(function(){return p}));var a=r("5nIqP"),i=r("5NbBY"),c=r("4IYpq"),l=r("buTFU"),s=r("78Wxy"),u=r("7r3rX"),d=r("1mTBm"),f=r("6R4u1"),g=r("iWl4v"),m=r("ix8zu"),h=r("kEdRQ"),p=[{name:"Aleksandr Kadulin",img:"".concat(e(a)),socialLink:"https://github.com/NilKad",teamRole:"Team Lead"},{name:"Oksana Kuzich",img:"".concat(e(i)),socialLink:"https://github.com/OksanaKuzich",teamRole:"Scrum Master"},{name:"Aleksei Baliuk",img:"".concat(e(c)),socialLink:"https://github.com/AlekseiBaliukveloper",teamRole:"Developer"},{name:"Dmytro Kobeza",img:"".concat(e(l)),socialLink:"https://github.com/kobeza1",teamRole:"Developer"},{name:"Yulia Sukhonenko",img:"".concat(e(s)),socialLink:"https://github.com/Yulia0907",teamRole:"Developer"},{name:"Anton Ostapienko",img:"".concat(e(u)),socialLink:"https://github.com/AntonyUser",teamRole:"Developer"},{name:"Maksim Siomak",img:"".concat(e(d)),socialLink:"https://github.com/Pleomax07",teamRole:"Developer"},{name:"Evgeniy Zyuskin",img:"".concat(e(f)),socialLink:"https://github.com/Yevhenns",teamRole:"Developer"},{name:"Yelyzaveta Demchenko",img:"".concat(e(g)),socialLink:"https://github.com/yelyzaveta05",teamRole:"Developer"},{name:"Artem Borzov",img:"".concat(e(m)),socialLink:"https://github.com/Artem-Borzov",teamRole:"Developer"},{name:"Yurii Shulga",img:"".concat(e(h)),socialLink:"https://github.com/Yurkes2020",teamRole:"Developer"}]})),r.register("5nIqP",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("cZGKX")})),r.register("5NbBY",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("3w1do")})),r.register("4IYpq",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("hHmKE")})),r.register("buTFU",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("43tRB")})),r.register("78Wxy",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("iMsfK")})),r.register("7r3rX",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("13d51")})),r.register("1mTBm",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("gJTnf")})),r.register("6R4u1",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("7mSLB")})),r.register("iWl4v",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("1YPt6")})),r.register("ix8zu",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("hoUkr")})),r.register("kEdRQ",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("aOQh9")})),r.register("casz0",(function(e,t){e.exports=r("aNJCr").getBundleURL("5ZwWc")+r("iE7OH").resolve("3qpTs")})),r("iE7OH").register(JSON.parse('{"5ZwWc":"index.4b1dffab.js","5UbS1":"index.267f0fc6.css","cZGKX":"aleksandr-k.0face9c2.jpg","3w1do":"Oksana.75e9795f.jpg","hHmKE":"Aleksei.4ff0f5bc.jpg","43tRB":"Dmytro.749b80ef.jpg","iMsfK":"Yulia.b93c1edf.jpg","13d51":"Anton.aee20f42.jpg","gJTnf":"Maksim.1af132b6.jpg","7mSLB":"Evgeniy.bd2e2384.jpg","1YPt6":"Yelyzaveta.ef8b2c61.jpg","hoUkr":"Artem.701c7726.jpg","aOQh9":"Yurii.7fd2c432.jpg","3qpTs":"sprite.2db19e08.svg"}'))}();
//# sourceMappingURL=index.4b1dffab.js.map
