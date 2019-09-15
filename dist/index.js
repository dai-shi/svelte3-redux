var e=require("svelte/store");exports.bind=function(t){return{subscribe:e.readable(t.getState(),(function(e){return t.subscribe((function(){e(t.getState())}))})).subscribe,dispatch:t.dispatch}};
//# sourceMappingURL=index.js.map
