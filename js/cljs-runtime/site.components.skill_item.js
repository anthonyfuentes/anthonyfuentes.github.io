goog.provide('site.components.skill_item');
site.components.skill_item.gen_list_string = (function site$components$skill_item$gen_list_string(props){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(props));
});
site.components.skill_item.render = (function site$components$skill_item$render(props){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.skill-item","tr.skill-item",-882551457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skill-area","td.skill-area",-1797259727),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(props)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),site.components.skill_item.gen_list_string(props)], null)], null);
});

//# sourceMappingURL=site.components.skill_item.js.map
