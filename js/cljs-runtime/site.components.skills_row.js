goog.provide('site.components.skills_row');
site.components.skills_row.gen_list_string = (function site$components$skills_row$gen_list_string(props){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(props));
});
site.components.skills_row.render = (function site$components$skills_row$render(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.skills-row","tr.skills-row",-1122699971),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skill-area","td.skill-area",-1797259727),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(props)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),site.components.skills_row.gen_list_string(props)], null)], null);
});

//# sourceMappingURL=site.components.skills_row.js.map
