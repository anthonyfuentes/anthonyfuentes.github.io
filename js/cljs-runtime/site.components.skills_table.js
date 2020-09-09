goog.provide('site.components.skills_table');
site.components.skills_table.render = (function site$components$skills_table$render(p__30319){
var map__30320 = p__30319;
var map__30320__$1 = (((((!((map__30320 == null))))?(((((map__30320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30320):map__30320);
var skills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30320__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.skills-table","table.skills-table",744155353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,skill_area){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [site.components.skills_row.render,skill_area], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),skills)], null)], null);
});

//# sourceMappingURL=site.components.skills_table.js.map
