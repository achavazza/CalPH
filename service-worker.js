(function(){"use strict";var e={913:function(){try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}!function(){s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s},t=e;class n extends Error{constructor(e,s){const n=t(e,s);super(n),this.name=e,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},r=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>{for(const t of Object.keys(a))e(t)},c={updateDetails:e=>{i((t=>{"string"===typeof e[t]&&(a[t]=e[t])}))},getGoogleAnalyticsName:e=>e||r(a.googleAnalytics),getPrecacheName:e=>e||r(a.precache),getPrefix:()=>a.prefix,getRuntimeName:e=>e||r(a.runtime),getSuffix:()=>a.suffix};function o(e,t){const s=t();return e.waitUntil(s),s}s(977);const h="__WB_REVISION__";function l(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set(h,t),{cacheKey:a.href,url:r.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null===t||void 0===t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let d;function p(){if(void 0===d){const t=new Response("");if("body"in t)try{new Response(t.body),d=!0}catch(e){d=!1}d=!1}return d}async function g(e,t){let s=null;if(e.url){const t=new URL(e.url);s=t.origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=t?t(r):r,c=p()?a.body:await a.blob();return new Response(c,i)}const y=e=>{const t=new URL(String(e),location.href);return t.href.replace(new RegExp(`^${location.origin}`),"")};function w(e,t){const s=new URL(e);for(const n of t)s.searchParams.delete(n);return s.href}async function m(e,t,s,n){const a=w(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const c of i){const t=w(c.url,s);if(a===t)return e.match(c,n)}}class _{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const v=new Set;async function R(){for(const e of v)await e()}function C(e){return new Promise((t=>setTimeout(t,e)))}s(873);function b(e){return"string"===typeof e?new Request(e):e}class U{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new _,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=b(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(i){if(i instanceof Error)throw new n("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(c){throw a&&await this.runCallbacks("fetchDidFail",{error:c,event:t,originalRequest:a.clone(),request:r.clone()}),c}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=b(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=b(e);await C(0);const a=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:y(a.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:i,matchOptions:c}=this._strategy,o=await self.caches.open(i),h=this.hasCallback("cacheDidUpdate"),l=h?await m(o,a.clone(),["__WB_REVISION__"],c):null;try{await o.put(a,h?r.clone():r)}catch(u){if(u instanceof Error)throw"QuotaExceededError"===u.name&&await R(),u}for(const n of this.iterateCallbacks("cacheDidUpdate"))await n({cacheName:i,oldResponse:l,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=b(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"===typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;while(e=this._extendLifetimePromises.shift())await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class q{constructor(e={}){this.cacheName=c.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"===typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new U(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t),i=this._awaitComplete(r,a,s,t);return[r,i]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(r){if(r instanceof Error)for(const n of e.iterateCallbacks("handlerDidError"))if(a=await n({error:r,event:s,request:t}),a)break;if(!a)throw r}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class L extends q{constructor(e={}){e.cacheName=c.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(L.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const n=a.integrity,r=e.integrity,i=!r||r===n;if(s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||n:void 0})),n&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e),a=await t.cachePut(e,s.clone());if(!a)throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==L.copyRedirectedCacheableResponsesPlugin&&(n===L.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(L.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}L.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},L.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await g(e):e}};class k{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new L({cacheName:c.getPrecacheName(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"===typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=l(s),r="string"!==typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!==typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return o(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[a,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(a),n=new Request(a,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return o(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){const e=await self.caches.open(this.strategy.cacheName);return e.match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let x;const K=()=>(x||(x=new k),x);s(80);const T="GET",P=e=>e&&"object"===typeof e?e:{handle:e};class N{constructor(e,t,s=T){this.handler=P(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=P(e)}}class E extends N{constructor(e,t,s){const n=({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)};super(n,t,s)}}class M{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"===typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(l){o=Promise.reject(l)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:a})}catch(r){r instanceof Error&&(n=r)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"===typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t=T){this._defaultHandlerMap.set(t,P(e))}setCatchHandler(e){this._catchHandler=P(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new n("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new n("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let O;const W=()=>(O||(O=new M,O.addFetchListener(),O.addCacheListener()),O);function A(e,t,s){let a;if("string"===typeof e){const n=new URL(e,location.href);0;const r=({url:e})=>e.href===n.href;a=new N(r,t,s)}else if(e instanceof RegExp)a=new E(e,t,s);else if("function"===typeof e)a=new N(e,t,s);else{if(!(e instanceof N))throw new n("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}const r=W();return r.registerRoute(a),a}function I(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}function*j(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=I(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}class H extends N{constructor(e,t){const s=({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of j(s.url,t)){const t=n.get(a);if(t){const s=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:s}}}};super(s,e.strategy)}}function S(e){const t=K(),s=new H(t,e);A(s)}function D(e){const t=K();return t.createHandlerBoundToURL(e)}function F(e){const t=K();t.precache(e)}function B(e,t){F(e),S(t)}class $ extends N{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super((e=>this._match(e)),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const n of this._denylist)if(n.test(s))return!1;return!!this._allowlist.some((e=>e.test(s)))}}const G={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class V extends q{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(G)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(s);let a,r=await t.cacheMatch(e);if(r)0;else{0;try{r=await s}catch(i){i instanceof Error&&(a=i)}}if(!r)throw new n("no-response",{url:e.url,error:a});return r}}B([{'revision':null,'url':'css/app.e75d3bae.css'},{'revision':'e9f2bb08cd5d24e993e7efab2d998ff8','url':'css/style.css'},{'revision':'9573b4fc1a16ab83efc9799f015c1d79','url':'img/favicon.svg'},{'revision':'72b5fcc0cc568f243a9bc373b61e844b','url':'index.html'},{'revision':null,'url':'js/658.d85ac3cb.js'},{'revision':null,'url':'js/Home.14e30e75.js'},{'revision':null,'url':'js/Units.b873f48e.js'},{'revision':null,'url':'js/app.b72d4a81.js'},{'revision':null,'url':'js/chunk-vendors.b1adfa57.js'},{'revision':'f7223fd1698efe5d268495088afa7b93','url':'manifest.json'},{'revision':'980ba5d20d4483f6a2efdbf118454442','url':'offline.html'},{'revision':'b6216d61c03e6ce0c9aea6ca7808f7ca','url':'robots.txt'}]);const J=D("./index.html"),Q=new $(J);A(Q),A((({url:e})=>e.pathname.includes("/units")),new V),A((({url:e})=>e.pathname.includes("/home")),new V);const z="v1_cache_calculin",X=["./","./?umt_source=web_app_manifest","./index.html","./offline.html","./img/icons/favicon.svg","./img/icons/favicon.png","./img/icons/icon-32.png","./img/icons/icon-64.png","./img/icons/icon-128.png","./img/icons/icon-192.png","./img/icons/icon-256.png","./img/icons/icon-1024.png","./img/icons/maskable.png","./img/icons/apple-touch-icon-152x152.png","//unpkg.com/vue@next","//unpkg.com/vue-router@4","./App.vue","./views/Home.vue","./views/Units.vue","//fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap","//cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css","//fonts.googleapis.com/icon?family=Material+Icons","./css/style.css","./manifest.json"];self.addEventListener("install",(e=>{e.waitUntil(caches.open(z).then((e=>e.addAll(X))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if(e!==z)return caches.delete(e)}))))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request).then((t=>{if(!t||200!==t.status||"basic"!==t.type)return t;const s=t.clone();return caches.open(z).then((t=>{t.put(e.request,s)})),t})))).catch((()=>caches.match("/offline.html"))))}))}()})();
//# sourceMappingURL=service-worker.js.map