!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("svelte/store")):"function"==typeof define&&define.amd?define(["exports","svelte/store"],t):t((e=e||self).svelte3Redux={},e.store)}(this,(function(e,t){var r=Symbol("OWN_KEYS"),n=function(e,t,a){if(!function(e){try{var t=Object.getPrototypeOf(e);return t===Object.prototype||t===Array.prototype}catch(e){return!1}}(e))return e;var i=a&&a.get(e);return i||((i={recordUsage:function(e){var t=this.affected.get(this.originalObj);t||(t=new Set,this.affected.set(this.originalObj,t)),t.add(e)},get:function(e,t){return this.recordUsage(t),n(e[t],this.affected,this.proxyCache)},has:function(e,t){return this.recordUsage(t),t in e},ownKeys:function(e){return this.recordUsage(r),Reflect.ownKeys(e)}}).proxy=new Proxy(function(e){return Object.isFrozen(e)?Array.isArray(e)?Array.from(e):Object.assign({},e):e}(e),i),i.originalObj=e,a&&a.set(e,i)),i.affected=t,i.proxyCache=a,i.proxy},a=function(e,t){var r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((function(e,t){return e!==n[t]}))};e.bind=function(e){return{subscribe:t.readable(e.getState(),(function(t){return e.subscribe((function(){t(e.getState())}))})).subscribe,dispatch:e.dispatch}},e.bindTracked=function(e){var i,o=new WeakMap,c=function(e){var t=new WeakMap,r=n(e,t,o);return i={state:e,affected:t,cache:new WeakMap},r},f=c(e.getState());return{subscribe:t.readable(f,(function(t){return e.subscribe((function(){var n=e.getState();i.state!==n&&function e(t,n,i,o,c){if(t===n)return!1;if("object"!=typeof t||null===t)return!0;if("object"!=typeof n||null===n)return!0;var f=i.get(t);if(!f)return!!c;if(o){var s=o.get(t);if(s&&s.nextObj===n)return s.changed;o.set(t,{nextObj:n})}var u=null,b=f,d=Array.isArray(b),l=0;for(b=d?b:b[Symbol.iterator]();;){var y;if(d){if(l>=b.length)break;y=b[l++]}else{if((l=b.next()).done)break;y=l.value}var h=y,p=h===r?a(t,n):e(t[h],n[h],i,o,!1!==c);if("boolean"==typeof p&&(u=p),u)break}return null===u&&(u=!!c),o&&o.set(t,{nextObj:n,changed:u}),u}(i.state,n,i.affected,i.cache)&&t(c(n))}))})).subscribe,dispatch:e.dispatch}}}));
//# sourceMappingURL=index.umd.js.map