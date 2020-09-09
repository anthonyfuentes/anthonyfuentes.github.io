goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36856,p__36857){
var map__36858 = p__36856;
var map__36858__$1 = (((((!((map__36858 == null))))?(((((map__36858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36858):map__36858);
var svc = map__36858__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36858__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36858__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36858__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36859 = p__36857;
var map__36859__$1 = (((((!((map__36859 == null))))?(((((map__36859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36859):map__36859);
var msg = map__36859__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36859__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36859__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36859__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36859__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36880,p__36881){
var map__36882 = p__36880;
var map__36882__$1 = (((((!((map__36882 == null))))?(((((map__36882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36882):map__36882);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36882__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36883 = p__36881;
var map__36883__$1 = (((((!((map__36883 == null))))?(((((map__36883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36883):map__36883);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36883__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36886,p__36887){
var map__36888 = p__36886;
var map__36888__$1 = (((((!((map__36888 == null))))?(((((map__36888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36888):map__36888);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36888__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36888__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36889 = p__36887;
var map__36889__$1 = (((((!((map__36889 == null))))?(((((map__36889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36889):map__36889);
var msg = map__36889__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36889__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36892,tid){
var map__36893 = p__36892;
var map__36893__$1 = (((((!((map__36893 == null))))?(((((map__36893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36893):map__36893);
var svc = map__36893__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36915 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36916 = null;
var count__36917 = (0);
var i__36918 = (0);
while(true){
if((i__36918 < count__36917)){
var vec__36925 = chunk__36916.cljs$core$IIndexed$_nth$arity$2(null,i__36918);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36925,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36934 = seq__36915;
var G__36935 = chunk__36916;
var G__36936 = count__36917;
var G__36937 = (i__36918 + (1));
seq__36915 = G__36934;
chunk__36916 = G__36935;
count__36917 = G__36936;
i__36918 = G__36937;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36915);
if(temp__5735__auto__){
var seq__36915__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36915__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36915__$1);
var G__36938 = cljs.core.chunk_rest(seq__36915__$1);
var G__36939 = c__4556__auto__;
var G__36940 = cljs.core.count(c__4556__auto__);
var G__36941 = (0);
seq__36915 = G__36938;
chunk__36916 = G__36939;
count__36917 = G__36940;
i__36918 = G__36941;
continue;
} else {
var vec__36928 = cljs.core.first(seq__36915__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36928,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36928,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36942 = cljs.core.next(seq__36915__$1);
var G__36943 = null;
var G__36944 = (0);
var G__36945 = (0);
seq__36915 = G__36942;
chunk__36916 = G__36943;
count__36917 = G__36944;
i__36918 = G__36945;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36910_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36910_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36911_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36911_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36912_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36912_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36913_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36913_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36931){
var map__36932 = p__36931;
var map__36932__$1 = (((((!((map__36932 == null))))?(((((map__36932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36932):map__36932);
var svc = map__36932__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
