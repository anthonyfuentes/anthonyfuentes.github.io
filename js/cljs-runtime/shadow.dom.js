goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35143 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35143(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35144 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35144(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34537 = coll;
var G__34538 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34537,G__34538) : shadow.dom.lazy_native_coll_seq.call(null,G__34537,G__34538));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34560 = arguments.length;
switch (G__34560) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34565 = arguments.length;
switch (G__34565) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34574 = arguments.length;
switch (G__34574) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34582 = arguments.length;
switch (G__34582) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34594 = arguments.length;
switch (G__34594) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34628 = arguments.length;
switch (G__34628) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34631){if((e34631 instanceof Object)){
var e = e34631;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34631;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34632 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34633 = null;
var count__34634 = (0);
var i__34635 = (0);
while(true){
if((i__34635 < count__34634)){
var el = chunk__34633.cljs$core$IIndexed$_nth$arity$2(null,i__34635);
var handler_35159__$1 = ((function (seq__34632,chunk__34633,count__34634,i__34635,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34632,chunk__34633,count__34634,i__34635,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35159__$1);


var G__35160 = seq__34632;
var G__35161 = chunk__34633;
var G__35162 = count__34634;
var G__35163 = (i__34635 + (1));
seq__34632 = G__35160;
chunk__34633 = G__35161;
count__34634 = G__35162;
i__34635 = G__35163;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34632);
if(temp__5735__auto__){
var seq__34632__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34632__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34632__$1);
var G__35166 = cljs.core.chunk_rest(seq__34632__$1);
var G__35167 = c__4556__auto__;
var G__35168 = cljs.core.count(c__4556__auto__);
var G__35169 = (0);
seq__34632 = G__35166;
chunk__34633 = G__35167;
count__34634 = G__35168;
i__34635 = G__35169;
continue;
} else {
var el = cljs.core.first(seq__34632__$1);
var handler_35170__$1 = ((function (seq__34632,chunk__34633,count__34634,i__34635,el,seq__34632__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34632,chunk__34633,count__34634,i__34635,el,seq__34632__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35170__$1);


var G__35172 = cljs.core.next(seq__34632__$1);
var G__35173 = null;
var G__35174 = (0);
var G__35175 = (0);
seq__34632 = G__35172;
chunk__34633 = G__35173;
count__34634 = G__35174;
i__34635 = G__35175;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34651 = arguments.length;
switch (G__34651) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34675 = cljs.core.seq(events);
var chunk__34676 = null;
var count__34677 = (0);
var i__34678 = (0);
while(true){
if((i__34678 < count__34677)){
var vec__34685 = chunk__34676.cljs$core$IIndexed$_nth$arity$2(null,i__34678);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34685,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34685,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35182 = seq__34675;
var G__35183 = chunk__34676;
var G__35184 = count__34677;
var G__35185 = (i__34678 + (1));
seq__34675 = G__35182;
chunk__34676 = G__35183;
count__34677 = G__35184;
i__34678 = G__35185;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34675);
if(temp__5735__auto__){
var seq__34675__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34675__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34675__$1);
var G__35186 = cljs.core.chunk_rest(seq__34675__$1);
var G__35187 = c__4556__auto__;
var G__35188 = cljs.core.count(c__4556__auto__);
var G__35189 = (0);
seq__34675 = G__35186;
chunk__34676 = G__35187;
count__34677 = G__35188;
i__34678 = G__35189;
continue;
} else {
var vec__34688 = cljs.core.first(seq__34675__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34688,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34688,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35190 = cljs.core.next(seq__34675__$1);
var G__35191 = null;
var G__35192 = (0);
var G__35193 = (0);
seq__34675 = G__35190;
chunk__34676 = G__35191;
count__34677 = G__35192;
i__34678 = G__35193;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34694 = cljs.core.seq(styles);
var chunk__34695 = null;
var count__34696 = (0);
var i__34697 = (0);
while(true){
if((i__34697 < count__34696)){
var vec__34707 = chunk__34695.cljs$core$IIndexed$_nth$arity$2(null,i__34697);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34707,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34707,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35194 = seq__34694;
var G__35195 = chunk__34695;
var G__35196 = count__34696;
var G__35197 = (i__34697 + (1));
seq__34694 = G__35194;
chunk__34695 = G__35195;
count__34696 = G__35196;
i__34697 = G__35197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34694);
if(temp__5735__auto__){
var seq__34694__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34694__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34694__$1);
var G__35198 = cljs.core.chunk_rest(seq__34694__$1);
var G__35199 = c__4556__auto__;
var G__35200 = cljs.core.count(c__4556__auto__);
var G__35201 = (0);
seq__34694 = G__35198;
chunk__34695 = G__35199;
count__34696 = G__35200;
i__34697 = G__35201;
continue;
} else {
var vec__34713 = cljs.core.first(seq__34694__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34713,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35203 = cljs.core.next(seq__34694__$1);
var G__35204 = null;
var G__35205 = (0);
var G__35206 = (0);
seq__34694 = G__35203;
chunk__34695 = G__35204;
count__34696 = G__35205;
i__34697 = G__35206;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34719_35207 = key;
var G__34719_35208__$1 = (((G__34719_35207 instanceof cljs.core.Keyword))?G__34719_35207.fqn:null);
switch (G__34719_35208__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35214 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35214,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35214,"aria-");
}
})())){
el.setAttribute(ks_35214,value);
} else {
(el[ks_35214] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34733){
var map__34734 = p__34733;
var map__34734__$1 = (((((!((map__34734 == null))))?(((((map__34734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34734):map__34734);
var props = map__34734__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34734__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34737 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34737,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34737,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34737,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34740 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34740,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34740;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34742 = arguments.length;
switch (G__34742) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34745){
var vec__34746 = p__34745;
var seq__34747 = cljs.core.seq(vec__34746);
var first__34748 = cljs.core.first(seq__34747);
var seq__34747__$1 = cljs.core.next(seq__34747);
var nn = first__34748;
var first__34748__$1 = cljs.core.first(seq__34747__$1);
var seq__34747__$2 = cljs.core.next(seq__34747__$1);
var np = first__34748__$1;
var nc = seq__34747__$2;
var node = vec__34746;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34751 = nn;
var G__34752 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34751,G__34752) : create_fn.call(null,G__34751,G__34752));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34754 = nn;
var G__34755 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34754,G__34755) : create_fn.call(null,G__34754,G__34755));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34758 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(1),null);
var seq__34763_35227 = cljs.core.seq(node_children);
var chunk__34764_35228 = null;
var count__34765_35229 = (0);
var i__34766_35230 = (0);
while(true){
if((i__34766_35230 < count__34765_35229)){
var child_struct_35232 = chunk__34764_35228.cljs$core$IIndexed$_nth$arity$2(null,i__34766_35230);
var children_35234 = shadow.dom.dom_node(child_struct_35232);
if(cljs.core.seq_QMARK_(children_35234)){
var seq__34788_35235 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35234));
var chunk__34790_35236 = null;
var count__34791_35237 = (0);
var i__34792_35238 = (0);
while(true){
if((i__34792_35238 < count__34791_35237)){
var child_35240 = chunk__34790_35236.cljs$core$IIndexed$_nth$arity$2(null,i__34792_35238);
if(cljs.core.truth_(child_35240)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35240);


var G__35241 = seq__34788_35235;
var G__35242 = chunk__34790_35236;
var G__35243 = count__34791_35237;
var G__35244 = (i__34792_35238 + (1));
seq__34788_35235 = G__35241;
chunk__34790_35236 = G__35242;
count__34791_35237 = G__35243;
i__34792_35238 = G__35244;
continue;
} else {
var G__35246 = seq__34788_35235;
var G__35247 = chunk__34790_35236;
var G__35248 = count__34791_35237;
var G__35249 = (i__34792_35238 + (1));
seq__34788_35235 = G__35246;
chunk__34790_35236 = G__35247;
count__34791_35237 = G__35248;
i__34792_35238 = G__35249;
continue;
}
} else {
var temp__5735__auto___35251 = cljs.core.seq(seq__34788_35235);
if(temp__5735__auto___35251){
var seq__34788_35252__$1 = temp__5735__auto___35251;
if(cljs.core.chunked_seq_QMARK_(seq__34788_35252__$1)){
var c__4556__auto___35254 = cljs.core.chunk_first(seq__34788_35252__$1);
var G__35255 = cljs.core.chunk_rest(seq__34788_35252__$1);
var G__35256 = c__4556__auto___35254;
var G__35257 = cljs.core.count(c__4556__auto___35254);
var G__35258 = (0);
seq__34788_35235 = G__35255;
chunk__34790_35236 = G__35256;
count__34791_35237 = G__35257;
i__34792_35238 = G__35258;
continue;
} else {
var child_35259 = cljs.core.first(seq__34788_35252__$1);
if(cljs.core.truth_(child_35259)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35259);


var G__35260 = cljs.core.next(seq__34788_35252__$1);
var G__35261 = null;
var G__35262 = (0);
var G__35263 = (0);
seq__34788_35235 = G__35260;
chunk__34790_35236 = G__35261;
count__34791_35237 = G__35262;
i__34792_35238 = G__35263;
continue;
} else {
var G__35264 = cljs.core.next(seq__34788_35252__$1);
var G__35265 = null;
var G__35266 = (0);
var G__35267 = (0);
seq__34788_35235 = G__35264;
chunk__34790_35236 = G__35265;
count__34791_35237 = G__35266;
i__34792_35238 = G__35267;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35234);
}


var G__35268 = seq__34763_35227;
var G__35269 = chunk__34764_35228;
var G__35270 = count__34765_35229;
var G__35271 = (i__34766_35230 + (1));
seq__34763_35227 = G__35268;
chunk__34764_35228 = G__35269;
count__34765_35229 = G__35270;
i__34766_35230 = G__35271;
continue;
} else {
var temp__5735__auto___35272 = cljs.core.seq(seq__34763_35227);
if(temp__5735__auto___35272){
var seq__34763_35273__$1 = temp__5735__auto___35272;
if(cljs.core.chunked_seq_QMARK_(seq__34763_35273__$1)){
var c__4556__auto___35274 = cljs.core.chunk_first(seq__34763_35273__$1);
var G__35275 = cljs.core.chunk_rest(seq__34763_35273__$1);
var G__35276 = c__4556__auto___35274;
var G__35277 = cljs.core.count(c__4556__auto___35274);
var G__35278 = (0);
seq__34763_35227 = G__35275;
chunk__34764_35228 = G__35276;
count__34765_35229 = G__35277;
i__34766_35230 = G__35278;
continue;
} else {
var child_struct_35279 = cljs.core.first(seq__34763_35273__$1);
var children_35280 = shadow.dom.dom_node(child_struct_35279);
if(cljs.core.seq_QMARK_(children_35280)){
var seq__34797_35281 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35280));
var chunk__34799_35282 = null;
var count__34800_35283 = (0);
var i__34801_35284 = (0);
while(true){
if((i__34801_35284 < count__34800_35283)){
var child_35285 = chunk__34799_35282.cljs$core$IIndexed$_nth$arity$2(null,i__34801_35284);
if(cljs.core.truth_(child_35285)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35285);


var G__35286 = seq__34797_35281;
var G__35287 = chunk__34799_35282;
var G__35288 = count__34800_35283;
var G__35289 = (i__34801_35284 + (1));
seq__34797_35281 = G__35286;
chunk__34799_35282 = G__35287;
count__34800_35283 = G__35288;
i__34801_35284 = G__35289;
continue;
} else {
var G__35290 = seq__34797_35281;
var G__35291 = chunk__34799_35282;
var G__35292 = count__34800_35283;
var G__35293 = (i__34801_35284 + (1));
seq__34797_35281 = G__35290;
chunk__34799_35282 = G__35291;
count__34800_35283 = G__35292;
i__34801_35284 = G__35293;
continue;
}
} else {
var temp__5735__auto___35294__$1 = cljs.core.seq(seq__34797_35281);
if(temp__5735__auto___35294__$1){
var seq__34797_35295__$1 = temp__5735__auto___35294__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34797_35295__$1)){
var c__4556__auto___35296 = cljs.core.chunk_first(seq__34797_35295__$1);
var G__35297 = cljs.core.chunk_rest(seq__34797_35295__$1);
var G__35298 = c__4556__auto___35296;
var G__35299 = cljs.core.count(c__4556__auto___35296);
var G__35300 = (0);
seq__34797_35281 = G__35297;
chunk__34799_35282 = G__35298;
count__34800_35283 = G__35299;
i__34801_35284 = G__35300;
continue;
} else {
var child_35301 = cljs.core.first(seq__34797_35295__$1);
if(cljs.core.truth_(child_35301)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35301);


var G__35302 = cljs.core.next(seq__34797_35295__$1);
var G__35303 = null;
var G__35304 = (0);
var G__35305 = (0);
seq__34797_35281 = G__35302;
chunk__34799_35282 = G__35303;
count__34800_35283 = G__35304;
i__34801_35284 = G__35305;
continue;
} else {
var G__35306 = cljs.core.next(seq__34797_35295__$1);
var G__35307 = null;
var G__35308 = (0);
var G__35309 = (0);
seq__34797_35281 = G__35306;
chunk__34799_35282 = G__35307;
count__34800_35283 = G__35308;
i__34801_35284 = G__35309;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35280);
}


var G__35310 = cljs.core.next(seq__34763_35273__$1);
var G__35311 = null;
var G__35312 = (0);
var G__35313 = (0);
seq__34763_35227 = G__35310;
chunk__34764_35228 = G__35311;
count__34765_35229 = G__35312;
i__34766_35230 = G__35313;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34816 = cljs.core.seq(node);
var chunk__34817 = null;
var count__34818 = (0);
var i__34819 = (0);
while(true){
if((i__34819 < count__34818)){
var n = chunk__34817.cljs$core$IIndexed$_nth$arity$2(null,i__34819);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35316 = seq__34816;
var G__35317 = chunk__34817;
var G__35318 = count__34818;
var G__35319 = (i__34819 + (1));
seq__34816 = G__35316;
chunk__34817 = G__35317;
count__34818 = G__35318;
i__34819 = G__35319;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34816);
if(temp__5735__auto__){
var seq__34816__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34816__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34816__$1);
var G__35320 = cljs.core.chunk_rest(seq__34816__$1);
var G__35321 = c__4556__auto__;
var G__35322 = cljs.core.count(c__4556__auto__);
var G__35323 = (0);
seq__34816 = G__35320;
chunk__34817 = G__35321;
count__34818 = G__35322;
i__34819 = G__35323;
continue;
} else {
var n = cljs.core.first(seq__34816__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35324 = cljs.core.next(seq__34816__$1);
var G__35325 = null;
var G__35326 = (0);
var G__35327 = (0);
seq__34816 = G__35324;
chunk__34817 = G__35325;
count__34818 = G__35326;
i__34819 = G__35327;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34821 = arguments.length;
switch (G__34821) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34831 = arguments.length;
switch (G__34831) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34838 = arguments.length;
switch (G__34838) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35338 = arguments.length;
var i__4737__auto___35339 = (0);
while(true){
if((i__4737__auto___35339 < len__4736__auto___35338)){
args__4742__auto__.push((arguments[i__4737__auto___35339]));

var G__35341 = (i__4737__auto___35339 + (1));
i__4737__auto___35339 = G__35341;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34853_35343 = cljs.core.seq(nodes);
var chunk__34854_35344 = null;
var count__34855_35345 = (0);
var i__34856_35346 = (0);
while(true){
if((i__34856_35346 < count__34855_35345)){
var node_35347 = chunk__34854_35344.cljs$core$IIndexed$_nth$arity$2(null,i__34856_35346);
fragment.appendChild(shadow.dom._to_dom(node_35347));


var G__35348 = seq__34853_35343;
var G__35349 = chunk__34854_35344;
var G__35350 = count__34855_35345;
var G__35351 = (i__34856_35346 + (1));
seq__34853_35343 = G__35348;
chunk__34854_35344 = G__35349;
count__34855_35345 = G__35350;
i__34856_35346 = G__35351;
continue;
} else {
var temp__5735__auto___35353 = cljs.core.seq(seq__34853_35343);
if(temp__5735__auto___35353){
var seq__34853_35355__$1 = temp__5735__auto___35353;
if(cljs.core.chunked_seq_QMARK_(seq__34853_35355__$1)){
var c__4556__auto___35356 = cljs.core.chunk_first(seq__34853_35355__$1);
var G__35357 = cljs.core.chunk_rest(seq__34853_35355__$1);
var G__35358 = c__4556__auto___35356;
var G__35359 = cljs.core.count(c__4556__auto___35356);
var G__35360 = (0);
seq__34853_35343 = G__35357;
chunk__34854_35344 = G__35358;
count__34855_35345 = G__35359;
i__34856_35346 = G__35360;
continue;
} else {
var node_35362 = cljs.core.first(seq__34853_35355__$1);
fragment.appendChild(shadow.dom._to_dom(node_35362));


var G__35363 = cljs.core.next(seq__34853_35355__$1);
var G__35364 = null;
var G__35365 = (0);
var G__35366 = (0);
seq__34853_35343 = G__35363;
chunk__34854_35344 = G__35364;
count__34855_35345 = G__35365;
i__34856_35346 = G__35366;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34848){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34848));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34860_35368 = cljs.core.seq(scripts);
var chunk__34861_35369 = null;
var count__34862_35370 = (0);
var i__34863_35371 = (0);
while(true){
if((i__34863_35371 < count__34862_35370)){
var vec__34870_35372 = chunk__34861_35369.cljs$core$IIndexed$_nth$arity$2(null,i__34863_35371);
var script_tag_35373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34870_35372,(0),null);
var script_body_35374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34870_35372,(1),null);
eval(script_body_35374);


var G__35376 = seq__34860_35368;
var G__35377 = chunk__34861_35369;
var G__35378 = count__34862_35370;
var G__35379 = (i__34863_35371 + (1));
seq__34860_35368 = G__35376;
chunk__34861_35369 = G__35377;
count__34862_35370 = G__35378;
i__34863_35371 = G__35379;
continue;
} else {
var temp__5735__auto___35380 = cljs.core.seq(seq__34860_35368);
if(temp__5735__auto___35380){
var seq__34860_35381__$1 = temp__5735__auto___35380;
if(cljs.core.chunked_seq_QMARK_(seq__34860_35381__$1)){
var c__4556__auto___35382 = cljs.core.chunk_first(seq__34860_35381__$1);
var G__35383 = cljs.core.chunk_rest(seq__34860_35381__$1);
var G__35384 = c__4556__auto___35382;
var G__35385 = cljs.core.count(c__4556__auto___35382);
var G__35386 = (0);
seq__34860_35368 = G__35383;
chunk__34861_35369 = G__35384;
count__34862_35370 = G__35385;
i__34863_35371 = G__35386;
continue;
} else {
var vec__34873_35387 = cljs.core.first(seq__34860_35381__$1);
var script_tag_35388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34873_35387,(0),null);
var script_body_35389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34873_35387,(1),null);
eval(script_body_35389);


var G__35392 = cljs.core.next(seq__34860_35381__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__34860_35368 = G__35392;
chunk__34861_35369 = G__35393;
count__34862_35370 = G__35394;
i__34863_35371 = G__35395;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34876){
var vec__34877 = p__34876;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34877,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34877,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34883 = arguments.length;
switch (G__34883) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34890 = cljs.core.seq(style_keys);
var chunk__34891 = null;
var count__34892 = (0);
var i__34893 = (0);
while(true){
if((i__34893 < count__34892)){
var it = chunk__34891.cljs$core$IIndexed$_nth$arity$2(null,i__34893);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35404 = seq__34890;
var G__35405 = chunk__34891;
var G__35406 = count__34892;
var G__35407 = (i__34893 + (1));
seq__34890 = G__35404;
chunk__34891 = G__35405;
count__34892 = G__35406;
i__34893 = G__35407;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34890);
if(temp__5735__auto__){
var seq__34890__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34890__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34890__$1);
var G__35409 = cljs.core.chunk_rest(seq__34890__$1);
var G__35410 = c__4556__auto__;
var G__35411 = cljs.core.count(c__4556__auto__);
var G__35412 = (0);
seq__34890 = G__35409;
chunk__34891 = G__35410;
count__34892 = G__35411;
i__34893 = G__35412;
continue;
} else {
var it = cljs.core.first(seq__34890__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35414 = cljs.core.next(seq__34890__$1);
var G__35415 = null;
var G__35416 = (0);
var G__35417 = (0);
seq__34890 = G__35414;
chunk__34891 = G__35415;
count__34892 = G__35416;
i__34893 = G__35417;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34895,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34909 = k34895;
var G__34909__$1 = (((G__34909 instanceof cljs.core.Keyword))?G__34909.fqn:null);
switch (G__34909__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34895,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34912){
var vec__34913 = p__34912;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34913,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34913,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34894){
var self__ = this;
var G__34894__$1 = this;
return (new cljs.core.RecordIter((0),G__34894__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34896,other34897){
var self__ = this;
var this34896__$1 = this;
return (((!((other34897 == null)))) && ((this34896__$1.constructor === other34897.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34896__$1.x,other34897.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34896__$1.y,other34897.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34896__$1.__extmap,other34897.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34894){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34926 = cljs.core.keyword_identical_QMARK_;
var expr__34927 = k__4388__auto__;
if(cljs.core.truth_((pred__34926.cljs$core$IFn$_invoke$arity$2 ? pred__34926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34927) : pred__34926.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34927)))){
return (new shadow.dom.Coordinate(G__34894,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34926.cljs$core$IFn$_invoke$arity$2 ? pred__34926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34927) : pred__34926.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34927)))){
return (new shadow.dom.Coordinate(self__.x,G__34894,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34894),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34894){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34894,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34899){
var extmap__4419__auto__ = (function (){var G__34944 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34899,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34899)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34944);
} else {
return G__34944;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34899),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34899),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34951,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34960 = k34951;
var G__34960__$1 = (((G__34960 instanceof cljs.core.Keyword))?G__34960.fqn:null);
switch (G__34960__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34951,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34963){
var vec__34965 = p__34963;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34950){
var self__ = this;
var G__34950__$1 = this;
return (new cljs.core.RecordIter((0),G__34950__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34952,other34953){
var self__ = this;
var this34952__$1 = this;
return (((!((other34953 == null)))) && ((this34952__$1.constructor === other34953.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34952__$1.w,other34953.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34952__$1.h,other34953.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34952__$1.__extmap,other34953.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34950){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34972 = cljs.core.keyword_identical_QMARK_;
var expr__34973 = k__4388__auto__;
if(cljs.core.truth_((pred__34972.cljs$core$IFn$_invoke$arity$2 ? pred__34972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34973) : pred__34972.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34973)))){
return (new shadow.dom.Size(G__34950,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34972.cljs$core$IFn$_invoke$arity$2 ? pred__34972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34973) : pred__34972.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34973)))){
return (new shadow.dom.Size(self__.w,G__34950,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34950),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34950){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34950,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34955){
var extmap__4419__auto__ = (function (){var G__34977 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34955,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34955)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34977);
} else {
return G__34977;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34955),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34955),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35456 = (i + (1));
var G__35457 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35456;
ret = G__35457;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35001){
var vec__35002 = p__35001;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35002,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35006 = arguments.length;
switch (G__35006) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35466 = ps;
var G__35467 = (i + (1));
el__$1 = G__35466;
i = G__35467;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35028 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35028,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35028,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35028,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35034_35468 = cljs.core.seq(props);
var chunk__35035_35469 = null;
var count__35036_35470 = (0);
var i__35037_35471 = (0);
while(true){
if((i__35037_35471 < count__35036_35470)){
var vec__35049_35472 = chunk__35035_35469.cljs$core$IIndexed$_nth$arity$2(null,i__35037_35471);
var k_35473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35472,(0),null);
var v_35474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35049_35472,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35473);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35473),v_35474);


var G__35475 = seq__35034_35468;
var G__35476 = chunk__35035_35469;
var G__35477 = count__35036_35470;
var G__35478 = (i__35037_35471 + (1));
seq__35034_35468 = G__35475;
chunk__35035_35469 = G__35476;
count__35036_35470 = G__35477;
i__35037_35471 = G__35478;
continue;
} else {
var temp__5735__auto___35479 = cljs.core.seq(seq__35034_35468);
if(temp__5735__auto___35479){
var seq__35034_35480__$1 = temp__5735__auto___35479;
if(cljs.core.chunked_seq_QMARK_(seq__35034_35480__$1)){
var c__4556__auto___35481 = cljs.core.chunk_first(seq__35034_35480__$1);
var G__35482 = cljs.core.chunk_rest(seq__35034_35480__$1);
var G__35483 = c__4556__auto___35481;
var G__35484 = cljs.core.count(c__4556__auto___35481);
var G__35485 = (0);
seq__35034_35468 = G__35482;
chunk__35035_35469 = G__35483;
count__35036_35470 = G__35484;
i__35037_35471 = G__35485;
continue;
} else {
var vec__35055_35486 = cljs.core.first(seq__35034_35480__$1);
var k_35487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35486,(0),null);
var v_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35055_35486,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35487);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35487),v_35488);


var G__35489 = cljs.core.next(seq__35034_35480__$1);
var G__35490 = null;
var G__35491 = (0);
var G__35492 = (0);
seq__35034_35468 = G__35489;
chunk__35035_35469 = G__35490;
count__35036_35470 = G__35491;
i__35037_35471 = G__35492;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35065 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35065,(1),null);
var seq__35068_35493 = cljs.core.seq(node_children);
var chunk__35070_35494 = null;
var count__35071_35495 = (0);
var i__35072_35496 = (0);
while(true){
if((i__35072_35496 < count__35071_35495)){
var child_struct_35497 = chunk__35070_35494.cljs$core$IIndexed$_nth$arity$2(null,i__35072_35496);
if((!((child_struct_35497 == null)))){
if(typeof child_struct_35497 === 'string'){
var text_35498 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35498),child_struct_35497].join(''));
} else {
var children_35499 = shadow.dom.svg_node(child_struct_35497);
if(cljs.core.seq_QMARK_(children_35499)){
var seq__35101_35500 = cljs.core.seq(children_35499);
var chunk__35103_35501 = null;
var count__35104_35502 = (0);
var i__35105_35503 = (0);
while(true){
if((i__35105_35503 < count__35104_35502)){
var child_35504 = chunk__35103_35501.cljs$core$IIndexed$_nth$arity$2(null,i__35105_35503);
if(cljs.core.truth_(child_35504)){
node.appendChild(child_35504);


var G__35505 = seq__35101_35500;
var G__35506 = chunk__35103_35501;
var G__35507 = count__35104_35502;
var G__35508 = (i__35105_35503 + (1));
seq__35101_35500 = G__35505;
chunk__35103_35501 = G__35506;
count__35104_35502 = G__35507;
i__35105_35503 = G__35508;
continue;
} else {
var G__35509 = seq__35101_35500;
var G__35510 = chunk__35103_35501;
var G__35511 = count__35104_35502;
var G__35512 = (i__35105_35503 + (1));
seq__35101_35500 = G__35509;
chunk__35103_35501 = G__35510;
count__35104_35502 = G__35511;
i__35105_35503 = G__35512;
continue;
}
} else {
var temp__5735__auto___35513 = cljs.core.seq(seq__35101_35500);
if(temp__5735__auto___35513){
var seq__35101_35514__$1 = temp__5735__auto___35513;
if(cljs.core.chunked_seq_QMARK_(seq__35101_35514__$1)){
var c__4556__auto___35515 = cljs.core.chunk_first(seq__35101_35514__$1);
var G__35516 = cljs.core.chunk_rest(seq__35101_35514__$1);
var G__35517 = c__4556__auto___35515;
var G__35518 = cljs.core.count(c__4556__auto___35515);
var G__35519 = (0);
seq__35101_35500 = G__35516;
chunk__35103_35501 = G__35517;
count__35104_35502 = G__35518;
i__35105_35503 = G__35519;
continue;
} else {
var child_35520 = cljs.core.first(seq__35101_35514__$1);
if(cljs.core.truth_(child_35520)){
node.appendChild(child_35520);


var G__35521 = cljs.core.next(seq__35101_35514__$1);
var G__35522 = null;
var G__35523 = (0);
var G__35524 = (0);
seq__35101_35500 = G__35521;
chunk__35103_35501 = G__35522;
count__35104_35502 = G__35523;
i__35105_35503 = G__35524;
continue;
} else {
var G__35525 = cljs.core.next(seq__35101_35514__$1);
var G__35526 = null;
var G__35527 = (0);
var G__35528 = (0);
seq__35101_35500 = G__35525;
chunk__35103_35501 = G__35526;
count__35104_35502 = G__35527;
i__35105_35503 = G__35528;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35499);
}
}


var G__35529 = seq__35068_35493;
var G__35530 = chunk__35070_35494;
var G__35531 = count__35071_35495;
var G__35532 = (i__35072_35496 + (1));
seq__35068_35493 = G__35529;
chunk__35070_35494 = G__35530;
count__35071_35495 = G__35531;
i__35072_35496 = G__35532;
continue;
} else {
var G__35533 = seq__35068_35493;
var G__35534 = chunk__35070_35494;
var G__35535 = count__35071_35495;
var G__35536 = (i__35072_35496 + (1));
seq__35068_35493 = G__35533;
chunk__35070_35494 = G__35534;
count__35071_35495 = G__35535;
i__35072_35496 = G__35536;
continue;
}
} else {
var temp__5735__auto___35537 = cljs.core.seq(seq__35068_35493);
if(temp__5735__auto___35537){
var seq__35068_35538__$1 = temp__5735__auto___35537;
if(cljs.core.chunked_seq_QMARK_(seq__35068_35538__$1)){
var c__4556__auto___35539 = cljs.core.chunk_first(seq__35068_35538__$1);
var G__35540 = cljs.core.chunk_rest(seq__35068_35538__$1);
var G__35541 = c__4556__auto___35539;
var G__35542 = cljs.core.count(c__4556__auto___35539);
var G__35543 = (0);
seq__35068_35493 = G__35540;
chunk__35070_35494 = G__35541;
count__35071_35495 = G__35542;
i__35072_35496 = G__35543;
continue;
} else {
var child_struct_35544 = cljs.core.first(seq__35068_35538__$1);
if((!((child_struct_35544 == null)))){
if(typeof child_struct_35544 === 'string'){
var text_35545 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35545),child_struct_35544].join(''));
} else {
var children_35546 = shadow.dom.svg_node(child_struct_35544);
if(cljs.core.seq_QMARK_(children_35546)){
var seq__35107_35547 = cljs.core.seq(children_35546);
var chunk__35109_35548 = null;
var count__35110_35549 = (0);
var i__35111_35550 = (0);
while(true){
if((i__35111_35550 < count__35110_35549)){
var child_35551 = chunk__35109_35548.cljs$core$IIndexed$_nth$arity$2(null,i__35111_35550);
if(cljs.core.truth_(child_35551)){
node.appendChild(child_35551);


var G__35552 = seq__35107_35547;
var G__35553 = chunk__35109_35548;
var G__35554 = count__35110_35549;
var G__35555 = (i__35111_35550 + (1));
seq__35107_35547 = G__35552;
chunk__35109_35548 = G__35553;
count__35110_35549 = G__35554;
i__35111_35550 = G__35555;
continue;
} else {
var G__35556 = seq__35107_35547;
var G__35557 = chunk__35109_35548;
var G__35558 = count__35110_35549;
var G__35559 = (i__35111_35550 + (1));
seq__35107_35547 = G__35556;
chunk__35109_35548 = G__35557;
count__35110_35549 = G__35558;
i__35111_35550 = G__35559;
continue;
}
} else {
var temp__5735__auto___35560__$1 = cljs.core.seq(seq__35107_35547);
if(temp__5735__auto___35560__$1){
var seq__35107_35561__$1 = temp__5735__auto___35560__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35107_35561__$1)){
var c__4556__auto___35562 = cljs.core.chunk_first(seq__35107_35561__$1);
var G__35563 = cljs.core.chunk_rest(seq__35107_35561__$1);
var G__35564 = c__4556__auto___35562;
var G__35565 = cljs.core.count(c__4556__auto___35562);
var G__35566 = (0);
seq__35107_35547 = G__35563;
chunk__35109_35548 = G__35564;
count__35110_35549 = G__35565;
i__35111_35550 = G__35566;
continue;
} else {
var child_35567 = cljs.core.first(seq__35107_35561__$1);
if(cljs.core.truth_(child_35567)){
node.appendChild(child_35567);


var G__35568 = cljs.core.next(seq__35107_35561__$1);
var G__35569 = null;
var G__35570 = (0);
var G__35571 = (0);
seq__35107_35547 = G__35568;
chunk__35109_35548 = G__35569;
count__35110_35549 = G__35570;
i__35111_35550 = G__35571;
continue;
} else {
var G__35572 = cljs.core.next(seq__35107_35561__$1);
var G__35573 = null;
var G__35574 = (0);
var G__35575 = (0);
seq__35107_35547 = G__35572;
chunk__35109_35548 = G__35573;
count__35110_35549 = G__35574;
i__35111_35550 = G__35575;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35546);
}
}


var G__35576 = cljs.core.next(seq__35068_35538__$1);
var G__35577 = null;
var G__35578 = (0);
var G__35579 = (0);
seq__35068_35493 = G__35576;
chunk__35070_35494 = G__35577;
count__35071_35495 = G__35578;
i__35072_35496 = G__35579;
continue;
} else {
var G__35580 = cljs.core.next(seq__35068_35538__$1);
var G__35581 = null;
var G__35582 = (0);
var G__35583 = (0);
seq__35068_35493 = G__35580;
chunk__35070_35494 = G__35581;
count__35071_35495 = G__35582;
i__35072_35496 = G__35583;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35584 = arguments.length;
var i__4737__auto___35585 = (0);
while(true){
if((i__4737__auto___35585 < len__4736__auto___35584)){
args__4742__auto__.push((arguments[i__4737__auto___35585]));

var G__35586 = (i__4737__auto___35585 + (1));
i__4737__auto___35585 = G__35586;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35114){
var G__35115 = cljs.core.first(seq35114);
var seq35114__$1 = cljs.core.next(seq35114);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35115,seq35114__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35127 = arguments.length;
switch (G__35127) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__32762__auto___35594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_35132){
var state_val_35133 = (state_35132[(1)]);
if((state_val_35133 === (1))){
var state_35132__$1 = state_35132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35132__$1,(2),once_or_cleanup);
} else {
if((state_val_35133 === (2))){
var inst_35129 = (state_35132[(2)]);
var inst_35130 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35132__$1 = (function (){var statearr_35134 = state_35132;
(statearr_35134[(7)] = inst_35129);

return statearr_35134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35132__$1,inst_35130);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32709__auto__ = null;
var shadow$dom$state_machine__32709__auto____0 = (function (){
var statearr_35135 = [null,null,null,null,null,null,null,null];
(statearr_35135[(0)] = shadow$dom$state_machine__32709__auto__);

(statearr_35135[(1)] = (1));

return statearr_35135;
});
var shadow$dom$state_machine__32709__auto____1 = (function (state_35132){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_35132);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e35136){var ex__32712__auto__ = e35136;
var statearr_35137_35595 = state_35132;
(statearr_35137_35595[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_35132[(4)]))){
var statearr_35138_35596 = state_35132;
(statearr_35138_35596[(1)] = cljs.core.first((state_35132[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35597 = state_35132;
state_35132 = G__35597;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
shadow$dom$state_machine__32709__auto__ = function(state_35132){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32709__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32709__auto____1.call(this,state_35132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32709__auto____0;
shadow$dom$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32709__auto____1;
return shadow$dom$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_35139 = f__32763__auto__();
(statearr_35139[(6)] = c__32762__auto___35594);

return statearr_35139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
