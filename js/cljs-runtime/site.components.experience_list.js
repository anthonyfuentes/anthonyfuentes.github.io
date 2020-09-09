goog.provide('site.components.experience_list');
site.components.experience_list.render_items = (function site$components$experience_list$render_items(p__28547){
var map__28548 = p__28547;
var map__28548__$1 = (((((!((map__28548 == null))))?(((((map__28548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28548):map__28548);
var role = map__28548__$1;
var org = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28548__$1,new cljs.core.Keyword(null,"org","org",1495985));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28548__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [site.components.experience_item.render,role], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(org),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')], null));
});
site.components.experience_list.render = (function site$components$experience_list$render(p__28550){
var map__28560 = p__28550;
var map__28560__$1 = (((((!((map__28560 == null))))?(((((map__28560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28560):map__28560);
var experience = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28560__$1,new cljs.core.Keyword(null,"experience","experience",1091946507));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.experience-list","ol.experience-list",-2079472080),cljs.core.map.cljs$core$IFn$_invoke$arity$2(site.components.experience_list.render_items,experience)], null);
});

//# sourceMappingURL=site.components.experience_list.js.map
