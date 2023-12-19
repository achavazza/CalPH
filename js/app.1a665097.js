(function(){"use strict";var e={5740:function(e,n,t){var o=t(9963),r=t(6252),i=t(3577);const a={id:"app"},c={id:"header",class:"hero is-primary"},s={class:"hero-body"},u={class:"container"},l=(0,r._)("h1",{class:"title is-uppercase has-text-weight-light"}," Calculín ",-1),f=(0,r._)("p",{class:"subtitle"}," Una calculadora de Papel ",-1),d={class:"tabs is-toggle is-fullwidth is-uppercase"},p=["href","onClick"],v=["href","onClick"],g={class:"container"};function h(e,n){const t=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("header",c,[(0,r._)("div",s,[(0,r._)("div",u,[l,f,(0,r._)("div",d,[(0,r._)("ul",null,[(0,r.Wm)(t,{to:"/",custom:""},{default:(0,r.w5)((({href:e,navigate:n,isActive:t,isExactActive:o})=>[(0,r._)("li",{class:(0,i.C_)([t&&"router-link-active",o&&"is-active"])},[(0,r._)("a",{href:e,onClick:n},"Metros",8,p)],2)])),_:1}),(0,r.Wm)(t,{to:"/Units",custom:""},{default:(0,r.w5)((({href:e,navigate:n,isActive:t,isExactActive:o})=>[(0,r._)("li",{class:(0,i.C_)([t&&"router-link-active",o&&"is-active"])},[(0,r._)("a",{href:e,onClick:n},"Unidades",8,v)],2)])),_:1})])])])])]),(0,r._)("div",g,[(0,r.Wm)(o)])])}var m=t(3744);const b={},w=(0,m.Z)(b,[["render",h]]);var y=w,k=t(5205);(0,k.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var _=t(2201);const O=[{path:"/",name:"Home",component:()=>Promise.all([t.e(658),t.e(268)]).then(t.bind(t,2006))},{path:"/units",name:"Units",component:()=>Promise.all([t.e(658),t.e(891)]).then(t.bind(t,949))}],C=(0,_.p7)({history:(0,_.r5)(),routes:O});var j=C;const P=(0,o.ri)(y);P.config.globalProperties.unit1=0,P.config.globalProperties.unit2=6,P.config.globalProperties.appOptions=[{name:"Metros",unit:"m"},{name:"Kilos",unit:"kg"},{name:"Gramos",unit:"g"},{name:"Megabytes",unit:"Mb"},{name:"Unidades",unit:"U"},{name:"Precio",unit:"$"},{name:"Euros",unit:"€"}],P.use(j).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+({268:"Home",891:"Units"}[e]||e)+"."+{268:"14e30e75",658:"d85ac3cb",891:"b873f48e"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="calculin:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+i){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),c=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};t.l(a,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],s=o[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(s)var l=s(t)}for(n&&n(o);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkcalculin"]=self["webpackChunkcalculin"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(5740)}));o=t.O(o)})();
//# sourceMappingURL=app.1a665097.js.map