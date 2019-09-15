import{readable as t}from"svelte/store";var e=function(e){return{subscribe:t(e.getState(),(function(t){return e.subscribe((function(){t(e.getState())}))})).subscribe,dispatch:e.dispatch}};export{e as bind};
//# sourceMappingURL=index.esm.js.map
