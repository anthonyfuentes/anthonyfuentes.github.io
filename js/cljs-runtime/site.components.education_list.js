goog.provide('site.components.education_list');
site.components.education_list.render_items = (function site$components$education_list$render_items(studies){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [site.components.education_item.render,studies], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"organization","organization",-1639375379).cljs$core$IFn$_invoke$arity$1(studies)], null));
});
site.components.education_list.render = (function site$components$education_list$render(p__28578){
var map__28579 = p__28578;
var map__28579__$1 = (((((!((map__28579 == null))))?(((((map__28579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28579):map__28579);
var education = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28579__$1,new cljs.core.Keyword(null,"education","education",-1951097960));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.education-list","ol.education-list",-1258972026),cljs.core.map.cljs$core$IFn$_invoke$arity$2(site.components.education_list.render_items,education)], null);
});

//# sourceMappingURL=site.components.education_list.js.map
