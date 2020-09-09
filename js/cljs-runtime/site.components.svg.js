goog.provide('site.components.svg');
site.components.svg.file_for = (function site$components$svg$file_for(icon){
return ["images/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon),".svg"].join('');
});
site.components.svg.render = (function site$components$svg$render(props){
var file = site.components.svg.file_for(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(props));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.svg","img.svg",497245466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),file], null)], null);
});

//# sourceMappingURL=site.components.svg.js.map
