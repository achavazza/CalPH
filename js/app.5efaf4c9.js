(function(){"use strict";var e={5740:function(e,n,t){var r=t(9963),o=t(6252),i=t(3577);const a={id:"app"},c={id:"header",class:"hero is-primary"},s={class:"hero-body"},u={class:"container"},l=(0,o._)("h1",{class:"title is-uppercase has-text-weight-light"}," Calculín ",-1),f=(0,o._)("p",{class:"subtitle"}," Una calculadora de Papel ",-1),d={class:"tabs is-toggle is-fullwidth is-uppercase"},p=["href","onClick"],v=["href","onClick"],g={class:"container"};function h(e,n){const t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("header",c,[(0,o._)("div",s,[(0,o._)("div",u,[l,f,(0,o._)("div",d,[(0,o._)("ul",null,[(0,o.Wm)(t,{to:"/",custom:""},{default:(0,o.w5)((({href:e,navigate:n,isActive:t,isExactActive:r})=>[(0,o._)("li",{class:(0,i.C_)([t&&"router-link-active",r&&"is-active"])},[(0,o._)("a",{href:e,onClick:n},"Metros",8,p)],2)])),_:1}),(0,o.Wm)(t,{to:"/Units",custom:""},{default:(0,o.w5)((({href:e,navigate:n,isActive:t,isExactActive:r})=>[(0,o._)("li",{class:(0,i.C_)([t&&"router-link-active",r&&"is-active"])},[(0,o._)("a",{href:e,onClick:n},"Unidades",8,v)],2)])),_:1})])])])])]),(0,o._)("div",g,[(0,o.Wm)(r)])])}var m=t(3744);const b={},y=(0,m.Z)(b,[["render",h]]);var k=y,w=t(5205);(0,w.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var _=t(2201);const O=[{path:"/",name:"Home",component:()=>Promise.all([t.e(658),t.e(268)]).then(t.bind(t,2006))},{path:"/units",name:"Units",component:()=>Promise.all([t.e(658),t.e(891)]).then(t.bind(t,949))}],C=(0,_.p7)({history:(0,_.r5)(),routes:O});var j=C;const P=(0,r.ri)(k);P.config.globalProperties.unit1=0,P.config.globalProperties.unit2=6,P.config.globalProperties.appOptions=[{name:"Metros",unit:"m"},{name:"Kilos",unit:"kg"},{name:"Gramos",unit:"g"},{name:"Megabytes",unit:"Mb"},{name:"Unidades",unit:"U"},{name:"Precio",unit:"$"},{name:"Euros",unit:"€"}],P.use(j).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var u=o();void 0!==u&&(n=u)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+({268:"Home",891:"Units"}[e]||e)+"."+{268:"14e30e75",658:"d85ac3cb",891:"b873f48e"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="calculin:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=r),e[r]=[o];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),c=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};t.l(a,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],c=r[1],s=r[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(s)var l=s(t)}for(n&&n(r);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkcalculin"]=self["webpackChunkcalculin"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(5740)}));r=t.O(r)})();
//# sourceMappingURL=app.5efaf4c9.js.map