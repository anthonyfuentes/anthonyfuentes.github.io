goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37384 = arguments.length;
var i__4737__auto___37385 = (0);
while(true){
if((i__4737__auto___37385 < len__4736__auto___37384)){
args__4742__auto__.push((arguments[i__4737__auto___37385]));

var G__37386 = (i__4737__auto___37385 + (1));
i__4737__auto___37385 = G__37386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37156){
var G__37157 = cljs.core.first(seq37156);
var seq37156__$1 = cljs.core.next(seq37156);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37157,seq37156__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37159 = cljs.core.seq(sources);
var chunk__37160 = null;
var count__37161 = (0);
var i__37162 = (0);
while(true){
if((i__37162 < count__37161)){
var map__37184 = chunk__37160.cljs$core$IIndexed$_nth$arity$2(null,i__37162);
var map__37184__$1 = (((((!((map__37184 == null))))?(((((map__37184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37184):map__37184);
var src = map__37184__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37184__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37184__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37184__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37184__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37186){var e_37396 = e37186;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37396);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37396.message)].join('')));
}

var G__37397 = seq__37159;
var G__37398 = chunk__37160;
var G__37399 = count__37161;
var G__37400 = (i__37162 + (1));
seq__37159 = G__37397;
chunk__37160 = G__37398;
count__37161 = G__37399;
i__37162 = G__37400;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37159);
if(temp__5735__auto__){
var seq__37159__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37159__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37159__$1);
var G__37404 = cljs.core.chunk_rest(seq__37159__$1);
var G__37405 = c__4556__auto__;
var G__37406 = cljs.core.count(c__4556__auto__);
var G__37407 = (0);
seq__37159 = G__37404;
chunk__37160 = G__37405;
count__37161 = G__37406;
i__37162 = G__37407;
continue;
} else {
var map__37187 = cljs.core.first(seq__37159__$1);
var map__37187__$1 = (((((!((map__37187 == null))))?(((((map__37187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37187):map__37187);
var src = map__37187__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37187__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37187__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37187__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37190){var e_37410 = e37190;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37410);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37410.message)].join('')));
}

var G__37411 = cljs.core.next(seq__37159__$1);
var G__37412 = null;
var G__37413 = (0);
var G__37414 = (0);
seq__37159 = G__37411;
chunk__37160 = G__37412;
count__37161 = G__37413;
i__37162 = G__37414;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37196 = cljs.core.seq(js_requires);
var chunk__37197 = null;
var count__37198 = (0);
var i__37199 = (0);
while(true){
if((i__37199 < count__37198)){
var js_ns = chunk__37197.cljs$core$IIndexed$_nth$arity$2(null,i__37199);
var require_str_37417 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37417);


var G__37418 = seq__37196;
var G__37419 = chunk__37197;
var G__37420 = count__37198;
var G__37421 = (i__37199 + (1));
seq__37196 = G__37418;
chunk__37197 = G__37419;
count__37198 = G__37420;
i__37199 = G__37421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37196);
if(temp__5735__auto__){
var seq__37196__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37196__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37196__$1);
var G__37422 = cljs.core.chunk_rest(seq__37196__$1);
var G__37423 = c__4556__auto__;
var G__37424 = cljs.core.count(c__4556__auto__);
var G__37425 = (0);
seq__37196 = G__37422;
chunk__37197 = G__37423;
count__37198 = G__37424;
i__37199 = G__37425;
continue;
} else {
var js_ns = cljs.core.first(seq__37196__$1);
var require_str_37426 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37426);


var G__37427 = cljs.core.next(seq__37196__$1);
var G__37428 = null;
var G__37429 = (0);
var G__37430 = (0);
seq__37196 = G__37427;
chunk__37197 = G__37428;
count__37198 = G__37429;
i__37199 = G__37430;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37201){
var map__37202 = p__37201;
var map__37202__$1 = (((((!((map__37202 == null))))?(((((map__37202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37202):map__37202);
var msg = map__37202__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37204(s__37205){
return (new cljs.core.LazySeq(null,(function (){
var s__37205__$1 = s__37205;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37205__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37212 = cljs.core.first(xs__6292__auto__);
var map__37212__$1 = (((((!((map__37212 == null))))?(((((map__37212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37212):map__37212);
var src = map__37212__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37212__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37212__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37205__$1,map__37212,map__37212__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37202,map__37202__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37204_$_iter__37206(s__37207){
return (new cljs.core.LazySeq(null,((function (s__37205__$1,map__37212,map__37212__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37202,map__37202__$1,msg,info,reload_info){
return (function (){
var s__37207__$1 = s__37207;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37207__$1);
if(temp__5735__auto____$1){
var s__37207__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37207__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37207__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37209 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37208 = (0);
while(true){
if((i__37208 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37208);
cljs.core.chunk_append(b__37209,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37435 = (i__37208 + (1));
i__37208 = G__37435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37209),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37204_$_iter__37206(cljs.core.chunk_rest(s__37207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37209),null);
}
} else {
var warning = cljs.core.first(s__37207__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37204_$_iter__37206(cljs.core.rest(s__37207__$2)));
}
} else {
return null;
}
break;
}
});})(s__37205__$1,map__37212,map__37212__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37202,map__37202__$1,msg,info,reload_info))
,null,null));
});})(s__37205__$1,map__37212,map__37212__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37202,map__37202__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37204(cljs.core.rest(s__37205__$1)));
} else {
var G__37436 = cljs.core.rest(s__37205__$1);
s__37205__$1 = G__37436;
continue;
}
} else {
var G__37437 = cljs.core.rest(s__37205__$1);
s__37205__$1 = G__37437;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__37215_37438 = cljs.core.seq(warnings);
var chunk__37216_37439 = null;
var count__37217_37440 = (0);
var i__37218_37441 = (0);
while(true){
if((i__37218_37441 < count__37217_37440)){
var map__37227_37442 = chunk__37216_37439.cljs$core$IIndexed$_nth$arity$2(null,i__37218_37441);
var map__37227_37443__$1 = (((((!((map__37227_37442 == null))))?(((((map__37227_37442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37227_37442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37227_37442):map__37227_37442);
var w_37444 = map__37227_37443__$1;
var msg_37445__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227_37443__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227_37443__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227_37443__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227_37443__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37448)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37446),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37447),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37445__$1)].join(''));


var G__37449 = seq__37215_37438;
var G__37450 = chunk__37216_37439;
var G__37451 = count__37217_37440;
var G__37452 = (i__37218_37441 + (1));
seq__37215_37438 = G__37449;
chunk__37216_37439 = G__37450;
count__37217_37440 = G__37451;
i__37218_37441 = G__37452;
continue;
} else {
var temp__5735__auto___37453 = cljs.core.seq(seq__37215_37438);
if(temp__5735__auto___37453){
var seq__37215_37454__$1 = temp__5735__auto___37453;
if(cljs.core.chunked_seq_QMARK_(seq__37215_37454__$1)){
var c__4556__auto___37455 = cljs.core.chunk_first(seq__37215_37454__$1);
var G__37456 = cljs.core.chunk_rest(seq__37215_37454__$1);
var G__37457 = c__4556__auto___37455;
var G__37458 = cljs.core.count(c__4556__auto___37455);
var G__37459 = (0);
seq__37215_37438 = G__37456;
chunk__37216_37439 = G__37457;
count__37217_37440 = G__37458;
i__37218_37441 = G__37459;
continue;
} else {
var map__37231_37460 = cljs.core.first(seq__37215_37454__$1);
var map__37231_37461__$1 = (((((!((map__37231_37460 == null))))?(((((map__37231_37460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37231_37460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37231_37460):map__37231_37460);
var w_37462 = map__37231_37461__$1;
var msg_37463__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37231_37461__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37231_37461__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37231_37461__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37231_37461__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37466)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37464),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37465),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37463__$1)].join(''));


var G__37467 = cljs.core.next(seq__37215_37454__$1);
var G__37468 = null;
var G__37469 = (0);
var G__37470 = (0);
seq__37215_37438 = G__37467;
chunk__37216_37439 = G__37468;
count__37217_37440 = G__37469;
i__37218_37441 = G__37470;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37200_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37200_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37239){
var map__37240 = p__37239;
var map__37240__$1 = (((((!((map__37240 == null))))?(((((map__37240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37240):map__37240);
var msg = map__37240__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37240__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37242 = cljs.core.seq(updates);
var chunk__37244 = null;
var count__37245 = (0);
var i__37246 = (0);
while(true){
if((i__37246 < count__37245)){
var path = chunk__37244.cljs$core$IIndexed$_nth$arity$2(null,i__37246);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37290_37473 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37293_37474 = null;
var count__37294_37475 = (0);
var i__37295_37476 = (0);
while(true){
if((i__37295_37476 < count__37294_37475)){
var node_37477 = chunk__37293_37474.cljs$core$IIndexed$_nth$arity$2(null,i__37295_37476);
var path_match_37478 = shadow.cljs.devtools.client.browser.match_paths(node_37477.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37478)){
var new_link_37479 = (function (){var G__37300 = node_37477.cloneNode(true);
G__37300.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37478),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37300;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37478], 0));

goog.dom.insertSiblingAfter(new_link_37479,node_37477);

goog.dom.removeNode(node_37477);


var G__37480 = seq__37290_37473;
var G__37481 = chunk__37293_37474;
var G__37482 = count__37294_37475;
var G__37483 = (i__37295_37476 + (1));
seq__37290_37473 = G__37480;
chunk__37293_37474 = G__37481;
count__37294_37475 = G__37482;
i__37295_37476 = G__37483;
continue;
} else {
var G__37484 = seq__37290_37473;
var G__37485 = chunk__37293_37474;
var G__37486 = count__37294_37475;
var G__37487 = (i__37295_37476 + (1));
seq__37290_37473 = G__37484;
chunk__37293_37474 = G__37485;
count__37294_37475 = G__37486;
i__37295_37476 = G__37487;
continue;
}
} else {
var temp__5735__auto___37488 = cljs.core.seq(seq__37290_37473);
if(temp__5735__auto___37488){
var seq__37290_37489__$1 = temp__5735__auto___37488;
if(cljs.core.chunked_seq_QMARK_(seq__37290_37489__$1)){
var c__4556__auto___37490 = cljs.core.chunk_first(seq__37290_37489__$1);
var G__37491 = cljs.core.chunk_rest(seq__37290_37489__$1);
var G__37492 = c__4556__auto___37490;
var G__37493 = cljs.core.count(c__4556__auto___37490);
var G__37494 = (0);
seq__37290_37473 = G__37491;
chunk__37293_37474 = G__37492;
count__37294_37475 = G__37493;
i__37295_37476 = G__37494;
continue;
} else {
var node_37495 = cljs.core.first(seq__37290_37489__$1);
var path_match_37496 = shadow.cljs.devtools.client.browser.match_paths(node_37495.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37496)){
var new_link_37497 = (function (){var G__37301 = node_37495.cloneNode(true);
G__37301.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37496),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37301;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37496], 0));

goog.dom.insertSiblingAfter(new_link_37497,node_37495);

goog.dom.removeNode(node_37495);


var G__37498 = cljs.core.next(seq__37290_37489__$1);
var G__37499 = null;
var G__37500 = (0);
var G__37501 = (0);
seq__37290_37473 = G__37498;
chunk__37293_37474 = G__37499;
count__37294_37475 = G__37500;
i__37295_37476 = G__37501;
continue;
} else {
var G__37502 = cljs.core.next(seq__37290_37489__$1);
var G__37503 = null;
var G__37504 = (0);
var G__37505 = (0);
seq__37290_37473 = G__37502;
chunk__37293_37474 = G__37503;
count__37294_37475 = G__37504;
i__37295_37476 = G__37505;
continue;
}
}
} else {
}
}
break;
}


var G__37506 = seq__37242;
var G__37507 = chunk__37244;
var G__37508 = count__37245;
var G__37509 = (i__37246 + (1));
seq__37242 = G__37506;
chunk__37244 = G__37507;
count__37245 = G__37508;
i__37246 = G__37509;
continue;
} else {
var G__37510 = seq__37242;
var G__37511 = chunk__37244;
var G__37512 = count__37245;
var G__37513 = (i__37246 + (1));
seq__37242 = G__37510;
chunk__37244 = G__37511;
count__37245 = G__37512;
i__37246 = G__37513;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37242);
if(temp__5735__auto__){
var seq__37242__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37242__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37242__$1);
var G__37514 = cljs.core.chunk_rest(seq__37242__$1);
var G__37515 = c__4556__auto__;
var G__37516 = cljs.core.count(c__4556__auto__);
var G__37517 = (0);
seq__37242 = G__37514;
chunk__37244 = G__37515;
count__37245 = G__37516;
i__37246 = G__37517;
continue;
} else {
var path = cljs.core.first(seq__37242__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37302_37518 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37305_37519 = null;
var count__37306_37520 = (0);
var i__37307_37521 = (0);
while(true){
if((i__37307_37521 < count__37306_37520)){
var node_37522 = chunk__37305_37519.cljs$core$IIndexed$_nth$arity$2(null,i__37307_37521);
var path_match_37523 = shadow.cljs.devtools.client.browser.match_paths(node_37522.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37523)){
var new_link_37524 = (function (){var G__37315 = node_37522.cloneNode(true);
G__37315.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37523),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37315;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37523], 0));

goog.dom.insertSiblingAfter(new_link_37524,node_37522);

goog.dom.removeNode(node_37522);


var G__37525 = seq__37302_37518;
var G__37526 = chunk__37305_37519;
var G__37527 = count__37306_37520;
var G__37528 = (i__37307_37521 + (1));
seq__37302_37518 = G__37525;
chunk__37305_37519 = G__37526;
count__37306_37520 = G__37527;
i__37307_37521 = G__37528;
continue;
} else {
var G__37529 = seq__37302_37518;
var G__37530 = chunk__37305_37519;
var G__37531 = count__37306_37520;
var G__37532 = (i__37307_37521 + (1));
seq__37302_37518 = G__37529;
chunk__37305_37519 = G__37530;
count__37306_37520 = G__37531;
i__37307_37521 = G__37532;
continue;
}
} else {
var temp__5735__auto___37533__$1 = cljs.core.seq(seq__37302_37518);
if(temp__5735__auto___37533__$1){
var seq__37302_37534__$1 = temp__5735__auto___37533__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37302_37534__$1)){
var c__4556__auto___37535 = cljs.core.chunk_first(seq__37302_37534__$1);
var G__37536 = cljs.core.chunk_rest(seq__37302_37534__$1);
var G__37537 = c__4556__auto___37535;
var G__37538 = cljs.core.count(c__4556__auto___37535);
var G__37539 = (0);
seq__37302_37518 = G__37536;
chunk__37305_37519 = G__37537;
count__37306_37520 = G__37538;
i__37307_37521 = G__37539;
continue;
} else {
var node_37540 = cljs.core.first(seq__37302_37534__$1);
var path_match_37541 = shadow.cljs.devtools.client.browser.match_paths(node_37540.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37541)){
var new_link_37542 = (function (){var G__37316 = node_37540.cloneNode(true);
G__37316.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37541),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37316;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37541], 0));

goog.dom.insertSiblingAfter(new_link_37542,node_37540);

goog.dom.removeNode(node_37540);


var G__37543 = cljs.core.next(seq__37302_37534__$1);
var G__37544 = null;
var G__37545 = (0);
var G__37546 = (0);
seq__37302_37518 = G__37543;
chunk__37305_37519 = G__37544;
count__37306_37520 = G__37545;
i__37307_37521 = G__37546;
continue;
} else {
var G__37548 = cljs.core.next(seq__37302_37534__$1);
var G__37549 = null;
var G__37550 = (0);
var G__37551 = (0);
seq__37302_37518 = G__37548;
chunk__37305_37519 = G__37549;
count__37306_37520 = G__37550;
i__37307_37521 = G__37551;
continue;
}
}
} else {
}
}
break;
}


var G__37554 = cljs.core.next(seq__37242__$1);
var G__37555 = null;
var G__37556 = (0);
var G__37557 = (0);
seq__37242 = G__37554;
chunk__37244 = G__37555;
count__37245 = G__37556;
i__37246 = G__37557;
continue;
} else {
var G__37558 = cljs.core.next(seq__37242__$1);
var G__37559 = null;
var G__37560 = (0);
var G__37561 = (0);
seq__37242 = G__37558;
chunk__37244 = G__37559;
count__37245 = G__37560;
i__37246 = G__37561;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37317){
var map__37318 = p__37317;
var map__37318__$1 = (((((!((map__37318 == null))))?(((((map__37318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37318):map__37318);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37318__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37320){
var map__37321 = p__37320;
var map__37321__$1 = (((((!((map__37321 == null))))?(((((map__37321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37321):map__37321);
var _ = map__37321__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37321__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37323,done,error){
var map__37324 = p__37323;
var map__37324__$1 = (((((!((map__37324 == null))))?(((((map__37324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37324):map__37324);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37324__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37328,done,error){
var map__37329 = p__37328;
var map__37329__$1 = (((((!((map__37329 == null))))?(((((map__37329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37329):map__37329);
var msg = map__37329__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37335){
var map__37336 = p__37335;
var map__37336__$1 = (((((!((map__37336 == null))))?(((((map__37336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37336):map__37336);
var src = map__37336__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37336__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37338 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37338) : done.call(null,G__37338));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37339){
var map__37340 = p__37339;
var map__37340__$1 = (((((!((map__37340 == null))))?(((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37340):map__37340);
var msg__$1 = map__37340__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37345){var ex = e37345;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37349){
var map__37350 = p__37349;
var map__37350__$1 = (((((!((map__37350 == null))))?(((((map__37350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37350):map__37350);
var env = map__37350__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37356){
var map__37357 = p__37356;
var map__37357__$1 = (((((!((map__37357 == null))))?(((((map__37357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37357):map__37357);
var msg = map__37357__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37364){
var map__37365 = p__37364;
var map__37365__$1 = (((((!((map__37365 == null))))?(((((map__37365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37365):map__37365);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37365__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37365__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37372){
var map__37374 = p__37372;
var map__37374__$1 = (((((!((map__37374 == null))))?(((((map__37374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37374):map__37374);
var svc = map__37374__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37374__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
