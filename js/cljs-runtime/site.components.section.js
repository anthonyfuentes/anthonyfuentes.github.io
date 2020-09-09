goog.provide('site.components.section');
site.components.section.render = (function site$components$section$render(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32742 = arguments.length;
var i__4737__auto___32743 = (0);
while(true){
if((i__4737__auto___32743 < len__4736__auto___32742)){
args__4742__auto__.push((arguments[i__4737__auto___32743]));

var G__32744 = (i__4737__auto___32743 + (1));
i__4737__auto___32743 = G__32744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return site.components.section.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(site.components.section.render.cljs$core$IFn$_invoke$arity$variadic = (function (p__32739,children){
var map__32740 = p__32739;
var map__32740__$1 = (((((!((map__32740 == null))))?(((((map__32740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32740):map__32740);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32740__$1,new cljs.core.Keyword(null,"title","title",636505583));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32740__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section","section.section",-416807119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),children], null);
}));

(site.components.section.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(site.components.section.render.cljs$lang$applyTo = (function (seq32737){
var G__32738 = cljs.core.first(seq32737);
var seq32737__$1 = cljs.core.next(seq32737);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32738,seq32737__$1);
}));


//# sourceMappingURL=site.components.section.js.map
