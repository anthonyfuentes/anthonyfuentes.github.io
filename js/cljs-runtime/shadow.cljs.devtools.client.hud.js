goog.provide('shadow.cljs.devtools.client.hud');
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_progress = goog.define("shadow.cljs.devtools.client.hud.show_progress",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_warnings = goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_errors = goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.hud !== 'undefined') && (typeof shadow.cljs.devtools.client.hud.dom_available_QMARK_ !== 'undefined')){
} else {
shadow.cljs.devtools.client.hud.dom_available_QMARK_ = (!((goog.global.document == null)));
}
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__32762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_36291){
var state_val_36292 = (state_36291[(1)]);
if((state_val_36292 === (7))){
var state_36291__$1 = state_36291;
var statearr_36294_36565 = state_36291__$1;
(statearr_36294_36565[(2)] = false);

(statearr_36294_36565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (1))){
var state_36291__$1 = state_36291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36291__$1,(2),req);
} else {
if((state_val_36292 === (4))){
var inst_36255 = (state_36291[(7)]);
var inst_36261 = (inst_36255 == null);
var inst_36262 = cljs.core.not(inst_36261);
var state_36291__$1 = state_36291;
if(inst_36262){
var statearr_36299_36566 = state_36291__$1;
(statearr_36299_36566[(1)] = (6));

} else {
var statearr_36300_36567 = state_36291__$1;
(statearr_36300_36567[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (15))){
var state_36291__$1 = state_36291;
var statearr_36301_36568 = state_36291__$1;
(statearr_36301_36568[(2)] = null);

(statearr_36301_36568[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (13))){
var inst_36255 = (state_36291[(7)]);
var state_36291__$1 = state_36291;
var statearr_36303_36569 = state_36291__$1;
(statearr_36303_36569[(2)] = inst_36255);

(statearr_36303_36569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (6))){
var inst_36255 = (state_36291[(7)]);
var inst_36264 = inst_36255.cljs$lang$protocol_mask$partition0$;
var inst_36265 = (inst_36264 & (64));
var inst_36266 = inst_36255.cljs$core$ISeq$;
var inst_36267 = (cljs.core.PROTOCOL_SENTINEL === inst_36266);
var inst_36268 = ((inst_36265) || (inst_36267));
var state_36291__$1 = state_36291;
if(cljs.core.truth_(inst_36268)){
var statearr_36304_36570 = state_36291__$1;
(statearr_36304_36570[(1)] = (9));

} else {
var statearr_36306_36571 = state_36291__$1;
(statearr_36306_36571[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (17))){
var inst_36287 = (state_36291[(2)]);
var state_36291__$1 = state_36291;
var statearr_36307_36572 = state_36291__$1;
(statearr_36307_36572[(2)] = inst_36287);

(statearr_36307_36572[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (3))){
var state_36291__$1 = state_36291;
var statearr_36308_36573 = state_36291__$1;
(statearr_36308_36573[(2)] = null);

(statearr_36308_36573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (12))){
var inst_36255 = (state_36291[(7)]);
var inst_36277 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36255);
var state_36291__$1 = state_36291;
var statearr_36310_36574 = state_36291__$1;
(statearr_36310_36574[(2)] = inst_36277);

(statearr_36310_36574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (2))){
var inst_36255 = (state_36291[(7)]);
var inst_36255__$1 = (state_36291[(2)]);
var inst_36256 = (inst_36255__$1 == null);
var state_36291__$1 = (function (){var statearr_36312 = state_36291;
(statearr_36312[(7)] = inst_36255__$1);

return statearr_36312;
})();
if(cljs.core.truth_(inst_36256)){
var statearr_36313_36575 = state_36291__$1;
(statearr_36313_36575[(1)] = (3));

} else {
var statearr_36314_36576 = state_36291__$1;
(statearr_36314_36576[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (11))){
var inst_36272 = (state_36291[(2)]);
var state_36291__$1 = state_36291;
var statearr_36315_36577 = state_36291__$1;
(statearr_36315_36577[(2)] = inst_36272);

(statearr_36315_36577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (9))){
var state_36291__$1 = state_36291;
var statearr_36316_36578 = state_36291__$1;
(statearr_36316_36578[(2)] = true);

(statearr_36316_36578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (5))){
var inst_36289 = (state_36291[(2)]);
var state_36291__$1 = state_36291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36291__$1,inst_36289);
} else {
if((state_val_36292 === (14))){
var inst_36280 = (state_36291[(8)]);
var inst_36280__$1 = (state_36291[(2)]);
var inst_36281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36280__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_36282 = (inst_36281 === (0));
var state_36291__$1 = (function (){var statearr_36321 = state_36291;
(statearr_36321[(8)] = inst_36280__$1);

return statearr_36321;
})();
if(cljs.core.truth_(inst_36282)){
var statearr_36322_36579 = state_36291__$1;
(statearr_36322_36579[(1)] = (15));

} else {
var statearr_36324_36580 = state_36291__$1;
(statearr_36324_36580[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (16))){
var inst_36280 = (state_36291[(8)]);
var inst_36285 = console.warn("file open failed",inst_36280);
var state_36291__$1 = state_36291;
var statearr_36330_36581 = state_36291__$1;
(statearr_36330_36581[(2)] = inst_36285);

(statearr_36330_36581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (10))){
var state_36291__$1 = state_36291;
var statearr_36331_36582 = state_36291__$1;
(statearr_36331_36582[(2)] = false);

(statearr_36331_36582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (8))){
var inst_36275 = (state_36291[(2)]);
var state_36291__$1 = state_36291;
if(cljs.core.truth_(inst_36275)){
var statearr_36333_36583 = state_36291__$1;
(statearr_36333_36583[(1)] = (12));

} else {
var statearr_36334_36584 = state_36291__$1;
(statearr_36334_36584[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto____0 = (function (){
var statearr_36343 = [null,null,null,null,null,null,null,null,null];
(statearr_36343[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto__);

(statearr_36343[(1)] = (1));

return statearr_36343;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto____1 = (function (state_36291){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_36291);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e36345){var ex__32712__auto__ = e36345;
var statearr_36346_36585 = state_36291;
(statearr_36346_36585[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_36291[(4)]))){
var statearr_36348_36586 = state_36291;
(statearr_36348_36586[(1)] = cljs.core.first((state_36291[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36587 = state_36291;
state_36291 = G__36587;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto__ = function(state_36291){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto____1.call(this,state_36291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_36353 = f__32763__auto__();
(statearr_36353[(6)] = c__32762__auto__);

return statearr_36353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));

return c__32762__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__36358 = arguments.length;
switch (G__36358) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___36590 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___36590 == null)){
} else {
var x_36591 = temp__5739__auto___36590;
shadow.dom.remove(x_36591);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__32762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_36382){
var state_val_36383 = (state_36382[(1)]);
if((state_val_36383 === (1))){
var inst_36370 = cljs.core.async.timeout((250));
var state_36382__$1 = state_36382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36382__$1,(2),inst_36370);
} else {
if((state_val_36383 === (2))){
var inst_36372 = (state_36382[(2)]);
var inst_36373 = [el];
var inst_36374 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_36375 = [inst_36374];
var inst_36376 = cljs.core.PersistentHashMap.fromArrays(inst_36373,inst_36375);
var inst_36377 = shadow.animate.start((250),inst_36376);
var state_36382__$1 = (function (){var statearr_36399 = state_36382;
(statearr_36399[(7)] = inst_36372);

return statearr_36399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36382__$1,(3),inst_36377);
} else {
if((state_val_36383 === (3))){
var inst_36379 = (state_36382[(2)]);
var inst_36380 = shadow.dom.remove(container_el);
var state_36382__$1 = (function (){var statearr_36400 = state_36382;
(statearr_36400[(8)] = inst_36379);

return statearr_36400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36382__$1,inst_36380);
} else {
return null;
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto____0 = (function (){
var statearr_36401 = [null,null,null,null,null,null,null,null,null];
(statearr_36401[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto__);

(statearr_36401[(1)] = (1));

return statearr_36401;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto____1 = (function (state_36382){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_36382);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e36402){var ex__32712__auto__ = e36402;
var statearr_36403_36592 = state_36382;
(statearr_36403_36592[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_36382[(4)]))){
var statearr_36404_36593 = state_36382;
(statearr_36404_36593[(1)] = cljs.core.first((state_36382[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36594 = state_36382;
state_36382 = G__36594;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto__ = function(state_36382){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto____1.call(this,state_36382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_36405 = f__32763__auto__();
(statearr_36405[(6)] = c__32762__auto__);

return statearr_36405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));

return c__32762__auto__;
}
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4529__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__36429(s__36430){
return (new cljs.core.LazySeq(null,(function (){
var s__36430__$1 = s__36430;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36430__$1);
if(temp__5735__auto__){
var s__36430__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36430__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36430__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36432 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36431 = (0);
while(true){
if((i__36431 < size__4528__auto__)){
var vec__36433 = cljs.core._nth(c__4527__auto__,i__36431);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36433,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36433,(1),null);
cljs.core.chunk_append(b__36432,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),goog.string.format("%4d | %s",(((1) + idx) + start_idx),text)], null));

var G__36595 = (i__36431 + (1));
i__36431 = G__36595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36432),shadow$cljs$devtools$client$hud$source_line_html_$_iter__36429(cljs.core.chunk_rest(s__36430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36432),null);
}
} else {
var vec__36437 = cljs.core.first(s__36430__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36437,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36437,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),goog.string.format("%4d | %s",(((1) + idx) + start_idx),text)], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__36429(cljs.core.rest(s__36430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__36443 = arguments.length;
switch (G__36443) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});
return [sep(offset),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),sep((sep_len - (offset + len)))].join('');
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__36463){
var map__36465 = p__36463;
var map__36465__$1 = (((((!((map__36465 == null))))?(((((map__36465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36465):map__36465);
var warning = map__36465__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36465__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36465__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36465__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36465__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
})], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__36518){
var map__36519 = p__36518;
var map__36519__$1 = (((((!((map__36519 == null))))?(((((map__36519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36519):map__36519);
var warning = map__36519__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36519__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36519__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36519__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36519__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36519__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36519__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__36529 = source_excerpt;
var map__36529__$1 = (((((!((map__36529 == null))))?(((((map__36529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36529):map__36529);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36529__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4126__auto__ = column;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__36534){
var map__36535 = p__36534;
var map__36535__$1 = (((((!((map__36535 == null))))?(((((map__36535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36535):map__36535);
var msg = map__36535__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36535__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36535__$1,new cljs.core.Keyword(null,"info","info",-317069002));
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var map__36537 = info;
var map__36537__$1 = (((((!((map__36537 == null))))?(((((map__36537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36537):map__36537);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36537__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36533_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__36533_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__36539(s__36540){
return (new cljs.core.LazySeq(null,(function (){
var s__36540__$1 = s__36540;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36540__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36548 = cljs.core.first(xs__6292__auto__);
var map__36548__$1 = (((((!((map__36548 == null))))?(((((map__36548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36548):map__36548);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36548__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4525__auto__ = ((function (s__36540__$1,map__36548,map__36548__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__36537,map__36537__$1,sources,sources_with_warnings,map__36535,map__36535__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__36539_$_iter__36541(s__36542){
return (new cljs.core.LazySeq(null,((function (s__36540__$1,map__36548,map__36548__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__36537,map__36537__$1,sources,sources_with_warnings,map__36535,map__36535__$1,msg,type,info){
return (function (){
var s__36542__$1 = s__36542;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36542__$1);
if(temp__5735__auto____$1){
var s__36542__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36542__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36542__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36544 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36543 = (0);
while(true){
if((i__36543 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36543);
cljs.core.chunk_append(b__36544,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__36607 = (i__36543 + (1));
i__36543 = G__36607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36544),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__36539_$_iter__36541(cljs.core.chunk_rest(s__36542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36544),null);
}
} else {
var warning = cljs.core.first(s__36542__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__36539_$_iter__36541(cljs.core.rest(s__36542__$2)));
}
} else {
return null;
}
break;
}
});})(s__36540__$1,map__36548,map__36548__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__36537,map__36537__$1,sources,sources_with_warnings,map__36535,map__36535__$1,msg,type,info))
,null,null));
});})(s__36540__$1,map__36548,map__36548__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__36537,map__36537__$1,sources,sources_with_warnings,map__36535,map__36535__$1,msg,type,info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__36539(cljs.core.rest(s__36540__$1)));
} else {
var G__36608 = cljs.core.rest(s__36540__$1);
s__36540__$1 = G__36608;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__36562){
var map__36563 = p__36562;
var map__36563__$1 = (((((!((map__36563 == null))))?(((((map__36563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36563):map__36563);
var msg = map__36563__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.dom_available_QMARK_){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
