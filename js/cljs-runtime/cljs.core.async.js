goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32830 = arguments.length;
switch (G__32830) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32831 = (function (f,blockable,meta32832){
this.f = f;
this.blockable = blockable;
this.meta32832 = meta32832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32833,meta32832__$1){
var self__ = this;
var _32833__$1 = this;
return (new cljs.core.async.t_cljs$core$async32831(self__.f,self__.blockable,meta32832__$1));
}));

(cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32833){
var self__ = this;
var _32833__$1 = this;
return self__.meta32832;
}));

(cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32832","meta32832",-709029909,null)], null);
}));

(cljs.core.async.t_cljs$core$async32831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32831");

(cljs.core.async.t_cljs$core$async32831.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32831.
 */
cljs.core.async.__GT_t_cljs$core$async32831 = (function cljs$core$async$__GT_t_cljs$core$async32831(f__$1,blockable__$1,meta32832){
return (new cljs.core.async.t_cljs$core$async32831(f__$1,blockable__$1,meta32832));
});

}

return (new cljs.core.async.t_cljs$core$async32831(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32843 = arguments.length;
switch (G__32843) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32849 = arguments.length;
switch (G__32849) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32853 = arguments.length;
switch (G__32853) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34516 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34516) : fn1.call(null,val_34516));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34516) : fn1.call(null,val_34516));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32858 = arguments.length;
switch (G__32858) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___34524 = n;
var x_34525 = (0);
while(true){
if((x_34525 < n__4613__auto___34524)){
(a[x_34525] = x_34525);

var G__34528 = (x_34525 + (1));
x_34525 = G__34528;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32886 = (function (flag,meta32887){
this.flag = flag;
this.meta32887 = meta32887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32888,meta32887__$1){
var self__ = this;
var _32888__$1 = this;
return (new cljs.core.async.t_cljs$core$async32886(self__.flag,meta32887__$1));
}));

(cljs.core.async.t_cljs$core$async32886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32888){
var self__ = this;
var _32888__$1 = this;
return self__.meta32887;
}));

(cljs.core.async.t_cljs$core$async32886.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32887","meta32887",-482770315,null)], null);
}));

(cljs.core.async.t_cljs$core$async32886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32886");

(cljs.core.async.t_cljs$core$async32886.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32886.
 */
cljs.core.async.__GT_t_cljs$core$async32886 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32886(flag__$1,meta32887){
return (new cljs.core.async.t_cljs$core$async32886(flag__$1,meta32887));
});

}

return (new cljs.core.async.t_cljs$core$async32886(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32894 = (function (flag,cb,meta32895){
this.flag = flag;
this.cb = cb;
this.meta32895 = meta32895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32896,meta32895__$1){
var self__ = this;
var _32896__$1 = this;
return (new cljs.core.async.t_cljs$core$async32894(self__.flag,self__.cb,meta32895__$1));
}));

(cljs.core.async.t_cljs$core$async32894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32896){
var self__ = this;
var _32896__$1 = this;
return self__.meta32895;
}));

(cljs.core.async.t_cljs$core$async32894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32895","meta32895",674256428,null)], null);
}));

(cljs.core.async.t_cljs$core$async32894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32894");

(cljs.core.async.t_cljs$core$async32894.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32894.
 */
cljs.core.async.__GT_t_cljs$core$async32894 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32894(flag__$1,cb__$1,meta32895){
return (new cljs.core.async.t_cljs$core$async32894(flag__$1,cb__$1,meta32895));
});

}

return (new cljs.core.async.t_cljs$core$async32894(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32902_SHARP_){
var G__32905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32902_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32905) : fret.call(null,G__32905));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32903_SHARP_){
var G__32907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32903_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32907) : fret.call(null,G__32907));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34533 = (i + (1));
i = G__34533;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34534 = arguments.length;
var i__4737__auto___34535 = (0);
while(true){
if((i__4737__auto___34535 < len__4736__auto___34534)){
args__4742__auto__.push((arguments[i__4737__auto___34535]));

var G__34536 = (i__4737__auto___34535 + (1));
i__4737__auto___34535 = G__34536;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32911){
var map__32912 = p__32911;
var map__32912__$1 = (((((!((map__32912 == null))))?(((((map__32912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32912):map__32912);
var opts = map__32912__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32909){
var G__32910 = cljs.core.first(seq32909);
var seq32909__$1 = cljs.core.next(seq32909);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32910,seq32909__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32919 = arguments.length;
switch (G__32919) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32762__auto___34540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_32959){
var state_val_32960 = (state_32959[(1)]);
if((state_val_32960 === (7))){
var inst_32946 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
var statearr_32967_34541 = state_32959__$1;
(statearr_32967_34541[(2)] = inst_32946);

(statearr_32967_34541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (1))){
var state_32959__$1 = state_32959;
var statearr_32968_34542 = state_32959__$1;
(statearr_32968_34542[(2)] = null);

(statearr_32968_34542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (4))){
var inst_32925 = (state_32959[(7)]);
var inst_32925__$1 = (state_32959[(2)]);
var inst_32930 = (inst_32925__$1 == null);
var state_32959__$1 = (function (){var statearr_32972 = state_32959;
(statearr_32972[(7)] = inst_32925__$1);

return statearr_32972;
})();
if(cljs.core.truth_(inst_32930)){
var statearr_32973_34543 = state_32959__$1;
(statearr_32973_34543[(1)] = (5));

} else {
var statearr_32974_34544 = state_32959__$1;
(statearr_32974_34544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (13))){
var state_32959__$1 = state_32959;
var statearr_32975_34545 = state_32959__$1;
(statearr_32975_34545[(2)] = null);

(statearr_32975_34545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (6))){
var inst_32925 = (state_32959[(7)]);
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32959__$1,(11),to,inst_32925);
} else {
if((state_val_32960 === (3))){
var inst_32948 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32959__$1,inst_32948);
} else {
if((state_val_32960 === (12))){
var state_32959__$1 = state_32959;
var statearr_32976_34546 = state_32959__$1;
(statearr_32976_34546[(2)] = null);

(statearr_32976_34546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (2))){
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32959__$1,(4),from);
} else {
if((state_val_32960 === (11))){
var inst_32939 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
if(cljs.core.truth_(inst_32939)){
var statearr_32979_34547 = state_32959__$1;
(statearr_32979_34547[(1)] = (12));

} else {
var statearr_32980_34548 = state_32959__$1;
(statearr_32980_34548[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (9))){
var state_32959__$1 = state_32959;
var statearr_32981_34549 = state_32959__$1;
(statearr_32981_34549[(2)] = null);

(statearr_32981_34549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (5))){
var state_32959__$1 = state_32959;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32982_34550 = state_32959__$1;
(statearr_32982_34550[(1)] = (8));

} else {
var statearr_32983_34551 = state_32959__$1;
(statearr_32983_34551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (14))){
var inst_32944 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
var statearr_32986_34552 = state_32959__$1;
(statearr_32986_34552[(2)] = inst_32944);

(statearr_32986_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (10))){
var inst_32936 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
var statearr_32988_34553 = state_32959__$1;
(statearr_32988_34553[(2)] = inst_32936);

(statearr_32988_34553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (8))){
var inst_32933 = cljs.core.async.close_BANG_(to);
var state_32959__$1 = state_32959;
var statearr_32989_34554 = state_32959__$1;
(statearr_32989_34554[(2)] = inst_32933);

(statearr_32989_34554[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_32990 = [null,null,null,null,null,null,null,null];
(statearr_32990[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_32990[(1)] = (1));

return statearr_32990;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_32959){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_32959);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e32991){var ex__32712__auto__ = e32991;
var statearr_32992_34556 = state_32959;
(statearr_32992_34556[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_32959[(4)]))){
var statearr_32995_34557 = state_32959;
(statearr_32995_34557[(1)] = cljs.core.first((state_32959[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34558 = state_32959;
state_32959 = G__34558;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_32959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_32959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_32996 = f__32763__auto__();
(statearr_32996[(6)] = c__32762__auto___34540);

return statearr_32996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32997){
var vec__32998 = p__32997;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32998,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32998,(1),null);
var job = vec__32998;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32762__auto___34561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33005){
var state_val_33006 = (state_33005[(1)]);
if((state_val_33006 === (1))){
var state_33005__$1 = state_33005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33005__$1,(2),res,v);
} else {
if((state_val_33006 === (2))){
var inst_33002 = (state_33005[(2)]);
var inst_33003 = cljs.core.async.close_BANG_(res);
var state_33005__$1 = (function (){var statearr_33008 = state_33005;
(statearr_33008[(7)] = inst_33002);

return statearr_33008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33005__$1,inst_33003);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0 = (function (){
var statearr_33009 = [null,null,null,null,null,null,null,null];
(statearr_33009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__);

(statearr_33009[(1)] = (1));

return statearr_33009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1 = (function (state_33005){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33005);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33010){var ex__32712__auto__ = e33010;
var statearr_33011_34562 = state_33005;
(statearr_33011_34562[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33005[(4)]))){
var statearr_33012_34564 = state_33005;
(statearr_33012_34564[(1)] = cljs.core.first((state_33005[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34566 = state_33005;
state_33005 = G__34566;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = function(state_33005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1.call(this,state_33005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33013 = f__32763__auto__();
(statearr_33013[(6)] = c__32762__auto___34561);

return statearr_33013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33014){
var vec__33015 = p__33014;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33015,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33015,(1),null);
var job = vec__33015;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___34567 = n;
var __34568 = (0);
while(true){
if((__34568 < n__4613__auto___34567)){
var G__33018_34569 = type;
var G__33018_34570__$1 = (((G__33018_34569 instanceof cljs.core.Keyword))?G__33018_34569.fqn:null);
switch (G__33018_34570__$1) {
case "compute":
var c__32762__auto___34572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34568,c__32762__auto___34572,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async){
return (function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = ((function (__34568,c__32762__auto___34572,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async){
return (function (state_33031){
var state_val_33032 = (state_33031[(1)]);
if((state_val_33032 === (1))){
var state_33031__$1 = state_33031;
var statearr_33033_34575 = state_33031__$1;
(statearr_33033_34575[(2)] = null);

(statearr_33033_34575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (2))){
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33031__$1,(4),jobs);
} else {
if((state_val_33032 === (3))){
var inst_33029 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33031__$1,inst_33029);
} else {
if((state_val_33032 === (4))){
var inst_33021 = (state_33031[(2)]);
var inst_33022 = process(inst_33021);
var state_33031__$1 = state_33031;
if(cljs.core.truth_(inst_33022)){
var statearr_33034_34576 = state_33031__$1;
(statearr_33034_34576[(1)] = (5));

} else {
var statearr_33035_34577 = state_33031__$1;
(statearr_33035_34577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (5))){
var state_33031__$1 = state_33031;
var statearr_33036_34578 = state_33031__$1;
(statearr_33036_34578[(2)] = null);

(statearr_33036_34578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (6))){
var state_33031__$1 = state_33031;
var statearr_33037_34579 = state_33031__$1;
(statearr_33037_34579[(2)] = null);

(statearr_33037_34579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (7))){
var inst_33027 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33038_34580 = state_33031__$1;
(statearr_33038_34580[(2)] = inst_33027);

(statearr_33038_34580[(1)] = (3));


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
});})(__34568,c__32762__auto___34572,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async))
;
return ((function (__34568,switch__32708__auto__,c__32762__auto___34572,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0 = (function (){
var statearr_33043 = [null,null,null,null,null,null,null];
(statearr_33043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__);

(statearr_33043[(1)] = (1));

return statearr_33043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1 = (function (state_33031){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33031);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33044){var ex__32712__auto__ = e33044;
var statearr_33045_34583 = state_33031;
(statearr_33045_34583[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33031[(4)]))){
var statearr_33046_34584 = state_33031;
(statearr_33046_34584[(1)] = cljs.core.first((state_33031[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34585 = state_33031;
state_33031 = G__34585;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = function(state_33031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1.call(this,state_33031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__;
})()
;})(__34568,switch__32708__auto__,c__32762__auto___34572,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async))
})();
var state__32764__auto__ = (function (){var statearr_33047 = f__32763__auto__();
(statearr_33047[(6)] = c__32762__auto___34572);

return statearr_33047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
});})(__34568,c__32762__auto___34572,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async))
);


break;
case "async":
var c__32762__auto___34586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34568,c__32762__auto___34586,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async){
return (function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = ((function (__34568,c__32762__auto___34586,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async){
return (function (state_33060){
var state_val_33061 = (state_33060[(1)]);
if((state_val_33061 === (1))){
var state_33060__$1 = state_33060;
var statearr_33063_34587 = state_33060__$1;
(statearr_33063_34587[(2)] = null);

(statearr_33063_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (2))){
var state_33060__$1 = state_33060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33060__$1,(4),jobs);
} else {
if((state_val_33061 === (3))){
var inst_33058 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33060__$1,inst_33058);
} else {
if((state_val_33061 === (4))){
var inst_33050 = (state_33060[(2)]);
var inst_33051 = async(inst_33050);
var state_33060__$1 = state_33060;
if(cljs.core.truth_(inst_33051)){
var statearr_33080_34588 = state_33060__$1;
(statearr_33080_34588[(1)] = (5));

} else {
var statearr_33081_34589 = state_33060__$1;
(statearr_33081_34589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (5))){
var state_33060__$1 = state_33060;
var statearr_33089_34590 = state_33060__$1;
(statearr_33089_34590[(2)] = null);

(statearr_33089_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (6))){
var state_33060__$1 = state_33060;
var statearr_33095_34591 = state_33060__$1;
(statearr_33095_34591[(2)] = null);

(statearr_33095_34591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (7))){
var inst_33056 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33109_34593 = state_33060__$1;
(statearr_33109_34593[(2)] = inst_33056);

(statearr_33109_34593[(1)] = (3));


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
});})(__34568,c__32762__auto___34586,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async))
;
return ((function (__34568,switch__32708__auto__,c__32762__auto___34586,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0 = (function (){
var statearr_33111 = [null,null,null,null,null,null,null];
(statearr_33111[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__);

(statearr_33111[(1)] = (1));

return statearr_33111;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1 = (function (state_33060){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33060);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33112){var ex__32712__auto__ = e33112;
var statearr_33113_34595 = state_33060;
(statearr_33113_34595[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33060[(4)]))){
var statearr_33114_34596 = state_33060;
(statearr_33114_34596[(1)] = cljs.core.first((state_33060[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34597 = state_33060;
state_33060 = G__34597;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = function(state_33060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1.call(this,state_33060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__;
})()
;})(__34568,switch__32708__auto__,c__32762__auto___34586,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async))
})();
var state__32764__auto__ = (function (){var statearr_33115 = f__32763__auto__();
(statearr_33115[(6)] = c__32762__auto___34586);

return statearr_33115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
});})(__34568,c__32762__auto___34586,G__33018_34569,G__33018_34570__$1,n__4613__auto___34567,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33018_34570__$1)].join('')));

}

var G__34598 = (__34568 + (1));
__34568 = G__34598;
continue;
} else {
}
break;
}

var c__32762__auto___34599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33138){
var state_val_33139 = (state_33138[(1)]);
if((state_val_33139 === (7))){
var inst_33134 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33185_34600 = state_33138__$1;
(statearr_33185_34600[(2)] = inst_33134);

(statearr_33185_34600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (1))){
var state_33138__$1 = state_33138;
var statearr_33186_34601 = state_33138__$1;
(statearr_33186_34601[(2)] = null);

(statearr_33186_34601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (4))){
var inst_33118 = (state_33138[(7)]);
var inst_33118__$1 = (state_33138[(2)]);
var inst_33119 = (inst_33118__$1 == null);
var state_33138__$1 = (function (){var statearr_33187 = state_33138;
(statearr_33187[(7)] = inst_33118__$1);

return statearr_33187;
})();
if(cljs.core.truth_(inst_33119)){
var statearr_33188_34602 = state_33138__$1;
(statearr_33188_34602[(1)] = (5));

} else {
var statearr_33189_34603 = state_33138__$1;
(statearr_33189_34603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (6))){
var inst_33124 = (state_33138[(8)]);
var inst_33118 = (state_33138[(7)]);
var inst_33124__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33125 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33126 = [inst_33118,inst_33124__$1];
var inst_33127 = (new cljs.core.PersistentVector(null,2,(5),inst_33125,inst_33126,null));
var state_33138__$1 = (function (){var statearr_33190 = state_33138;
(statearr_33190[(8)] = inst_33124__$1);

return statearr_33190;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33138__$1,(8),jobs,inst_33127);
} else {
if((state_val_33139 === (3))){
var inst_33136 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33138__$1,inst_33136);
} else {
if((state_val_33139 === (2))){
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33138__$1,(4),from);
} else {
if((state_val_33139 === (9))){
var inst_33131 = (state_33138[(2)]);
var state_33138__$1 = (function (){var statearr_33191 = state_33138;
(statearr_33191[(9)] = inst_33131);

return statearr_33191;
})();
var statearr_33192_34604 = state_33138__$1;
(statearr_33192_34604[(2)] = null);

(statearr_33192_34604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (5))){
var inst_33122 = cljs.core.async.close_BANG_(jobs);
var state_33138__$1 = state_33138;
var statearr_33193_34605 = state_33138__$1;
(statearr_33193_34605[(2)] = inst_33122);

(statearr_33193_34605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (8))){
var inst_33124 = (state_33138[(8)]);
var inst_33129 = (state_33138[(2)]);
var state_33138__$1 = (function (){var statearr_33194 = state_33138;
(statearr_33194[(10)] = inst_33129);

return statearr_33194;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33138__$1,(9),results,inst_33124);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0 = (function (){
var statearr_33195 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__);

(statearr_33195[(1)] = (1));

return statearr_33195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1 = (function (state_33138){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33138);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33196){var ex__32712__auto__ = e33196;
var statearr_33197_34606 = state_33138;
(statearr_33197_34606[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33138[(4)]))){
var statearr_33198_34607 = state_33138;
(statearr_33198_34607[(1)] = cljs.core.first((state_33138[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34608 = state_33138;
state_33138 = G__34608;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = function(state_33138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1.call(this,state_33138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33199 = f__32763__auto__();
(statearr_33199[(6)] = c__32762__auto___34599);

return statearr_33199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


var c__32762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33237){
var state_val_33238 = (state_33237[(1)]);
if((state_val_33238 === (7))){
var inst_33233 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33239_34609 = state_33237__$1;
(statearr_33239_34609[(2)] = inst_33233);

(statearr_33239_34609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (20))){
var state_33237__$1 = state_33237;
var statearr_33240_34610 = state_33237__$1;
(statearr_33240_34610[(2)] = null);

(statearr_33240_34610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (1))){
var state_33237__$1 = state_33237;
var statearr_33241_34611 = state_33237__$1;
(statearr_33241_34611[(2)] = null);

(statearr_33241_34611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (4))){
var inst_33202 = (state_33237[(7)]);
var inst_33202__$1 = (state_33237[(2)]);
var inst_33203 = (inst_33202__$1 == null);
var state_33237__$1 = (function (){var statearr_33242 = state_33237;
(statearr_33242[(7)] = inst_33202__$1);

return statearr_33242;
})();
if(cljs.core.truth_(inst_33203)){
var statearr_33245_34612 = state_33237__$1;
(statearr_33245_34612[(1)] = (5));

} else {
var statearr_33246_34613 = state_33237__$1;
(statearr_33246_34613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (15))){
var inst_33215 = (state_33237[(8)]);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33237__$1,(18),to,inst_33215);
} else {
if((state_val_33238 === (21))){
var inst_33228 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33247_34614 = state_33237__$1;
(statearr_33247_34614[(2)] = inst_33228);

(statearr_33247_34614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (13))){
var inst_33230 = (state_33237[(2)]);
var state_33237__$1 = (function (){var statearr_33248 = state_33237;
(statearr_33248[(9)] = inst_33230);

return statearr_33248;
})();
var statearr_33249_34615 = state_33237__$1;
(statearr_33249_34615[(2)] = null);

(statearr_33249_34615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (6))){
var inst_33202 = (state_33237[(7)]);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33237__$1,(11),inst_33202);
} else {
if((state_val_33238 === (17))){
var inst_33223 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
if(cljs.core.truth_(inst_33223)){
var statearr_33250_34616 = state_33237__$1;
(statearr_33250_34616[(1)] = (19));

} else {
var statearr_33251_34617 = state_33237__$1;
(statearr_33251_34617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (3))){
var inst_33235 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33237__$1,inst_33235);
} else {
if((state_val_33238 === (12))){
var inst_33212 = (state_33237[(10)]);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33237__$1,(14),inst_33212);
} else {
if((state_val_33238 === (2))){
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33237__$1,(4),results);
} else {
if((state_val_33238 === (19))){
var state_33237__$1 = state_33237;
var statearr_33262_34618 = state_33237__$1;
(statearr_33262_34618[(2)] = null);

(statearr_33262_34618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (11))){
var inst_33212 = (state_33237[(2)]);
var state_33237__$1 = (function (){var statearr_33263 = state_33237;
(statearr_33263[(10)] = inst_33212);

return statearr_33263;
})();
var statearr_33264_34619 = state_33237__$1;
(statearr_33264_34619[(2)] = null);

(statearr_33264_34619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (9))){
var state_33237__$1 = state_33237;
var statearr_33265_34620 = state_33237__$1;
(statearr_33265_34620[(2)] = null);

(statearr_33265_34620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (5))){
var state_33237__$1 = state_33237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33266_34621 = state_33237__$1;
(statearr_33266_34621[(1)] = (8));

} else {
var statearr_33267_34622 = state_33237__$1;
(statearr_33267_34622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (14))){
var inst_33215 = (state_33237[(8)]);
var inst_33215__$1 = (state_33237[(2)]);
var inst_33216 = (inst_33215__$1 == null);
var inst_33217 = cljs.core.not(inst_33216);
var state_33237__$1 = (function (){var statearr_33268 = state_33237;
(statearr_33268[(8)] = inst_33215__$1);

return statearr_33268;
})();
if(inst_33217){
var statearr_33269_34623 = state_33237__$1;
(statearr_33269_34623[(1)] = (15));

} else {
var statearr_33270_34624 = state_33237__$1;
(statearr_33270_34624[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (16))){
var state_33237__$1 = state_33237;
var statearr_33271_34625 = state_33237__$1;
(statearr_33271_34625[(2)] = false);

(statearr_33271_34625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (10))){
var inst_33209 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33272_34626 = state_33237__$1;
(statearr_33272_34626[(2)] = inst_33209);

(statearr_33272_34626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (18))){
var inst_33220 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33273_34629 = state_33237__$1;
(statearr_33273_34629[(2)] = inst_33220);

(statearr_33273_34629[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (8))){
var inst_33206 = cljs.core.async.close_BANG_(to);
var state_33237__$1 = state_33237;
var statearr_33274_34630 = state_33237__$1;
(statearr_33274_34630[(2)] = inst_33206);

(statearr_33274_34630[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0 = (function (){
var statearr_33275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__);

(statearr_33275[(1)] = (1));

return statearr_33275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1 = (function (state_33237){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33237);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33276){var ex__32712__auto__ = e33276;
var statearr_33277_34636 = state_33237;
(statearr_33277_34636[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33237[(4)]))){
var statearr_33278_34637 = state_33237;
(statearr_33278_34637[(1)] = cljs.core.first((state_33237[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34638 = state_33237;
state_33237 = G__34638;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__ = function(state_33237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1.call(this,state_33237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33279 = f__32763__auto__();
(statearr_33279[(6)] = c__32762__auto__);

return statearr_33279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));

return c__32762__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33281 = arguments.length;
switch (G__33281) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33287 = arguments.length;
switch (G__33287) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33292 = arguments.length;
switch (G__33292) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32762__auto___34642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33319){
var state_val_33320 = (state_33319[(1)]);
if((state_val_33320 === (7))){
var inst_33315 = (state_33319[(2)]);
var state_33319__$1 = state_33319;
var statearr_33321_34643 = state_33319__$1;
(statearr_33321_34643[(2)] = inst_33315);

(statearr_33321_34643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (1))){
var state_33319__$1 = state_33319;
var statearr_33322_34644 = state_33319__$1;
(statearr_33322_34644[(2)] = null);

(statearr_33322_34644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (4))){
var inst_33296 = (state_33319[(7)]);
var inst_33296__$1 = (state_33319[(2)]);
var inst_33297 = (inst_33296__$1 == null);
var state_33319__$1 = (function (){var statearr_33323 = state_33319;
(statearr_33323[(7)] = inst_33296__$1);

return statearr_33323;
})();
if(cljs.core.truth_(inst_33297)){
var statearr_33324_34645 = state_33319__$1;
(statearr_33324_34645[(1)] = (5));

} else {
var statearr_33325_34646 = state_33319__$1;
(statearr_33325_34646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (13))){
var state_33319__$1 = state_33319;
var statearr_33326_34647 = state_33319__$1;
(statearr_33326_34647[(2)] = null);

(statearr_33326_34647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (6))){
var inst_33296 = (state_33319[(7)]);
var inst_33302 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33296) : p.call(null,inst_33296));
var state_33319__$1 = state_33319;
if(cljs.core.truth_(inst_33302)){
var statearr_33327_34648 = state_33319__$1;
(statearr_33327_34648[(1)] = (9));

} else {
var statearr_33328_34649 = state_33319__$1;
(statearr_33328_34649[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (3))){
var inst_33317 = (state_33319[(2)]);
var state_33319__$1 = state_33319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33319__$1,inst_33317);
} else {
if((state_val_33320 === (12))){
var state_33319__$1 = state_33319;
var statearr_33329_34652 = state_33319__$1;
(statearr_33329_34652[(2)] = null);

(statearr_33329_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (2))){
var state_33319__$1 = state_33319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33319__$1,(4),ch);
} else {
if((state_val_33320 === (11))){
var inst_33296 = (state_33319[(7)]);
var inst_33306 = (state_33319[(2)]);
var state_33319__$1 = state_33319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33319__$1,(8),inst_33306,inst_33296);
} else {
if((state_val_33320 === (9))){
var state_33319__$1 = state_33319;
var statearr_33330_34653 = state_33319__$1;
(statearr_33330_34653[(2)] = tc);

(statearr_33330_34653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (5))){
var inst_33299 = cljs.core.async.close_BANG_(tc);
var inst_33300 = cljs.core.async.close_BANG_(fc);
var state_33319__$1 = (function (){var statearr_33331 = state_33319;
(statearr_33331[(8)] = inst_33299);

return statearr_33331;
})();
var statearr_33334_34654 = state_33319__$1;
(statearr_33334_34654[(2)] = inst_33300);

(statearr_33334_34654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (14))){
var inst_33313 = (state_33319[(2)]);
var state_33319__$1 = state_33319;
var statearr_33336_34655 = state_33319__$1;
(statearr_33336_34655[(2)] = inst_33313);

(statearr_33336_34655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (10))){
var state_33319__$1 = state_33319;
var statearr_33337_34656 = state_33319__$1;
(statearr_33337_34656[(2)] = fc);

(statearr_33337_34656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33320 === (8))){
var inst_33308 = (state_33319[(2)]);
var state_33319__$1 = state_33319;
if(cljs.core.truth_(inst_33308)){
var statearr_33338_34657 = state_33319__$1;
(statearr_33338_34657[(1)] = (12));

} else {
var statearr_33339_34658 = state_33319__$1;
(statearr_33339_34658[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_33340 = [null,null,null,null,null,null,null,null,null];
(statearr_33340[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_33340[(1)] = (1));

return statearr_33340;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_33319){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33319);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33341){var ex__32712__auto__ = e33341;
var statearr_33342_34659 = state_33319;
(statearr_33342_34659[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33319[(4)]))){
var statearr_33343_34660 = state_33319;
(statearr_33343_34660[(1)] = cljs.core.first((state_33319[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34661 = state_33319;
state_33319 = G__34661;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_33319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_33319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33344 = f__32763__auto__();
(statearr_33344[(6)] = c__32762__auto___34642);

return statearr_33344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33366){
var state_val_33367 = (state_33366[(1)]);
if((state_val_33367 === (7))){
var inst_33362 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
var statearr_33368_34662 = state_33366__$1;
(statearr_33368_34662[(2)] = inst_33362);

(statearr_33368_34662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (1))){
var inst_33345 = init;
var inst_33346 = inst_33345;
var state_33366__$1 = (function (){var statearr_33369 = state_33366;
(statearr_33369[(7)] = inst_33346);

return statearr_33369;
})();
var statearr_33370_34663 = state_33366__$1;
(statearr_33370_34663[(2)] = null);

(statearr_33370_34663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (4))){
var inst_33349 = (state_33366[(8)]);
var inst_33349__$1 = (state_33366[(2)]);
var inst_33350 = (inst_33349__$1 == null);
var state_33366__$1 = (function (){var statearr_33371 = state_33366;
(statearr_33371[(8)] = inst_33349__$1);

return statearr_33371;
})();
if(cljs.core.truth_(inst_33350)){
var statearr_33372_34664 = state_33366__$1;
(statearr_33372_34664[(1)] = (5));

} else {
var statearr_33373_34665 = state_33366__$1;
(statearr_33373_34665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (6))){
var inst_33353 = (state_33366[(9)]);
var inst_33346 = (state_33366[(7)]);
var inst_33349 = (state_33366[(8)]);
var inst_33353__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33346,inst_33349) : f.call(null,inst_33346,inst_33349));
var inst_33354 = cljs.core.reduced_QMARK_(inst_33353__$1);
var state_33366__$1 = (function (){var statearr_33374 = state_33366;
(statearr_33374[(9)] = inst_33353__$1);

return statearr_33374;
})();
if(inst_33354){
var statearr_33375_34666 = state_33366__$1;
(statearr_33375_34666[(1)] = (8));

} else {
var statearr_33376_34667 = state_33366__$1;
(statearr_33376_34667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (3))){
var inst_33364 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33366__$1,inst_33364);
} else {
if((state_val_33367 === (2))){
var state_33366__$1 = state_33366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33366__$1,(4),ch);
} else {
if((state_val_33367 === (9))){
var inst_33353 = (state_33366[(9)]);
var inst_33346 = inst_33353;
var state_33366__$1 = (function (){var statearr_33377 = state_33366;
(statearr_33377[(7)] = inst_33346);

return statearr_33377;
})();
var statearr_33378_34668 = state_33366__$1;
(statearr_33378_34668[(2)] = null);

(statearr_33378_34668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (5))){
var inst_33346 = (state_33366[(7)]);
var state_33366__$1 = state_33366;
var statearr_33379_34669 = state_33366__$1;
(statearr_33379_34669[(2)] = inst_33346);

(statearr_33379_34669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (10))){
var inst_33360 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
var statearr_33380_34670 = state_33366__$1;
(statearr_33380_34670[(2)] = inst_33360);

(statearr_33380_34670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (8))){
var inst_33353 = (state_33366[(9)]);
var inst_33356 = cljs.core.deref(inst_33353);
var state_33366__$1 = state_33366;
var statearr_33381_34671 = state_33366__$1;
(statearr_33381_34671[(2)] = inst_33356);

(statearr_33381_34671[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32709__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32709__auto____0 = (function (){
var statearr_33382 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33382[(0)] = cljs$core$async$reduce_$_state_machine__32709__auto__);

(statearr_33382[(1)] = (1));

return statearr_33382;
});
var cljs$core$async$reduce_$_state_machine__32709__auto____1 = (function (state_33366){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33366);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33383){var ex__32712__auto__ = e33383;
var statearr_33384_34672 = state_33366;
(statearr_33384_34672[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33366[(4)]))){
var statearr_33385_34673 = state_33366;
(statearr_33385_34673[(1)] = cljs.core.first((state_33366[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34674 = state_33366;
state_33366 = G__34674;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32709__auto__ = function(state_33366){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32709__auto____1.call(this,state_33366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32709__auto____0;
cljs$core$async$reduce_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32709__auto____1;
return cljs$core$async$reduce_$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33386 = f__32763__auto__();
(statearr_33386[(6)] = c__32762__auto__);

return statearr_33386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));

return c__32762__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33392){
var state_val_33393 = (state_33392[(1)]);
if((state_val_33393 === (1))){
var inst_33387 = cljs.core.async.reduce(f__$1,init,ch);
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33392__$1,(2),inst_33387);
} else {
if((state_val_33393 === (2))){
var inst_33389 = (state_33392[(2)]);
var inst_33390 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33389) : f__$1.call(null,inst_33389));
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33392__$1,inst_33390);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32709__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32709__auto____0 = (function (){
var statearr_33394 = [null,null,null,null,null,null,null];
(statearr_33394[(0)] = cljs$core$async$transduce_$_state_machine__32709__auto__);

(statearr_33394[(1)] = (1));

return statearr_33394;
});
var cljs$core$async$transduce_$_state_machine__32709__auto____1 = (function (state_33392){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33392);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33395){var ex__32712__auto__ = e33395;
var statearr_33396_34691 = state_33392;
(statearr_33396_34691[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33392[(4)]))){
var statearr_33397_34692 = state_33392;
(statearr_33397_34692[(1)] = cljs.core.first((state_33392[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34693 = state_33392;
state_33392 = G__34693;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32709__auto__ = function(state_33392){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32709__auto____1.call(this,state_33392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32709__auto____0;
cljs$core$async$transduce_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32709__auto____1;
return cljs$core$async$transduce_$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33398 = f__32763__auto__();
(statearr_33398[(6)] = c__32762__auto__);

return statearr_33398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));

return c__32762__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33400 = arguments.length;
switch (G__33400) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33425){
var state_val_33426 = (state_33425[(1)]);
if((state_val_33426 === (7))){
var inst_33407 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33427_34702 = state_33425__$1;
(statearr_33427_34702[(2)] = inst_33407);

(statearr_33427_34702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (1))){
var inst_33401 = cljs.core.seq(coll);
var inst_33402 = inst_33401;
var state_33425__$1 = (function (){var statearr_33428 = state_33425;
(statearr_33428[(7)] = inst_33402);

return statearr_33428;
})();
var statearr_33429_34706 = state_33425__$1;
(statearr_33429_34706[(2)] = null);

(statearr_33429_34706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (4))){
var inst_33402 = (state_33425[(7)]);
var inst_33405 = cljs.core.first(inst_33402);
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33425__$1,(7),ch,inst_33405);
} else {
if((state_val_33426 === (13))){
var inst_33419 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33430_34710 = state_33425__$1;
(statearr_33430_34710[(2)] = inst_33419);

(statearr_33430_34710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (6))){
var inst_33410 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
if(cljs.core.truth_(inst_33410)){
var statearr_33431_34711 = state_33425__$1;
(statearr_33431_34711[(1)] = (8));

} else {
var statearr_33432_34712 = state_33425__$1;
(statearr_33432_34712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (3))){
var inst_33423 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33425__$1,inst_33423);
} else {
if((state_val_33426 === (12))){
var state_33425__$1 = state_33425;
var statearr_33433_34716 = state_33425__$1;
(statearr_33433_34716[(2)] = null);

(statearr_33433_34716[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (2))){
var inst_33402 = (state_33425[(7)]);
var state_33425__$1 = state_33425;
if(cljs.core.truth_(inst_33402)){
var statearr_33434_34717 = state_33425__$1;
(statearr_33434_34717[(1)] = (4));

} else {
var statearr_33435_34718 = state_33425__$1;
(statearr_33435_34718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (11))){
var inst_33416 = cljs.core.async.close_BANG_(ch);
var state_33425__$1 = state_33425;
var statearr_33436_34720 = state_33425__$1;
(statearr_33436_34720[(2)] = inst_33416);

(statearr_33436_34720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (9))){
var state_33425__$1 = state_33425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33437_34721 = state_33425__$1;
(statearr_33437_34721[(1)] = (11));

} else {
var statearr_33438_34722 = state_33425__$1;
(statearr_33438_34722[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (5))){
var inst_33402 = (state_33425[(7)]);
var state_33425__$1 = state_33425;
var statearr_33439_34723 = state_33425__$1;
(statearr_33439_34723[(2)] = inst_33402);

(statearr_33439_34723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (10))){
var inst_33421 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33440_34724 = state_33425__$1;
(statearr_33440_34724[(2)] = inst_33421);

(statearr_33440_34724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (8))){
var inst_33402 = (state_33425[(7)]);
var inst_33412 = cljs.core.next(inst_33402);
var inst_33402__$1 = inst_33412;
var state_33425__$1 = (function (){var statearr_33441 = state_33425;
(statearr_33441[(7)] = inst_33402__$1);

return statearr_33441;
})();
var statearr_33442_34725 = state_33425__$1;
(statearr_33442_34725[(2)] = null);

(statearr_33442_34725[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_33443 = [null,null,null,null,null,null,null,null];
(statearr_33443[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_33443[(1)] = (1));

return statearr_33443;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_33425){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33425);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33444){var ex__32712__auto__ = e33444;
var statearr_33445_34726 = state_33425;
(statearr_33445_34726[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33425[(4)]))){
var statearr_33446_34727 = state_33425;
(statearr_33446_34727[(1)] = cljs.core.first((state_33425[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34728 = state_33425;
state_33425 = G__34728;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_33425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_33425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33447 = f__32763__auto__();
(statearr_33447[(6)] = c__32762__auto__);

return statearr_33447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));

return c__32762__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33449 = arguments.length;
switch (G__33449) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34730 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34730(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34731 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34731(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34732 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34732(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34736 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34736(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33450 = (function (ch,cs,meta33451){
this.ch = ch;
this.cs = cs;
this.meta33451 = meta33451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33452,meta33451__$1){
var self__ = this;
var _33452__$1 = this;
return (new cljs.core.async.t_cljs$core$async33450(self__.ch,self__.cs,meta33451__$1));
}));

(cljs.core.async.t_cljs$core$async33450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33452){
var self__ = this;
var _33452__$1 = this;
return self__.meta33451;
}));

(cljs.core.async.t_cljs$core$async33450.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33450.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33450.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33450.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33450.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33451","meta33451",-1155227681,null)], null);
}));

(cljs.core.async.t_cljs$core$async33450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33450");

(cljs.core.async.t_cljs$core$async33450.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33450.
 */
cljs.core.async.__GT_t_cljs$core$async33450 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33450(ch__$1,cs__$1,meta33451){
return (new cljs.core.async.t_cljs$core$async33450(ch__$1,cs__$1,meta33451));
});

}

return (new cljs.core.async.t_cljs$core$async33450(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32762__auto___34743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33585){
var state_val_33586 = (state_33585[(1)]);
if((state_val_33586 === (7))){
var inst_33581 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33587_34744 = state_33585__$1;
(statearr_33587_34744[(2)] = inst_33581);

(statearr_33587_34744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (20))){
var inst_33486 = (state_33585[(7)]);
var inst_33498 = cljs.core.first(inst_33486);
var inst_33499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33498,(0),null);
var inst_33500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33498,(1),null);
var state_33585__$1 = (function (){var statearr_33588 = state_33585;
(statearr_33588[(8)] = inst_33499);

return statearr_33588;
})();
if(cljs.core.truth_(inst_33500)){
var statearr_33589_34749 = state_33585__$1;
(statearr_33589_34749[(1)] = (22));

} else {
var statearr_33590_34750 = state_33585__$1;
(statearr_33590_34750[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (27))){
var inst_33455 = (state_33585[(9)]);
var inst_33535 = (state_33585[(10)]);
var inst_33528 = (state_33585[(11)]);
var inst_33530 = (state_33585[(12)]);
var inst_33535__$1 = cljs.core._nth(inst_33528,inst_33530);
var inst_33536 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33535__$1,inst_33455,done);
var state_33585__$1 = (function (){var statearr_33591 = state_33585;
(statearr_33591[(10)] = inst_33535__$1);

return statearr_33591;
})();
if(cljs.core.truth_(inst_33536)){
var statearr_33592_34753 = state_33585__$1;
(statearr_33592_34753[(1)] = (30));

} else {
var statearr_33593_34756 = state_33585__$1;
(statearr_33593_34756[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (1))){
var state_33585__$1 = state_33585;
var statearr_33594_34757 = state_33585__$1;
(statearr_33594_34757[(2)] = null);

(statearr_33594_34757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (24))){
var inst_33486 = (state_33585[(7)]);
var inst_33505 = (state_33585[(2)]);
var inst_33506 = cljs.core.next(inst_33486);
var inst_33464 = inst_33506;
var inst_33465 = null;
var inst_33466 = (0);
var inst_33467 = (0);
var state_33585__$1 = (function (){var statearr_33595 = state_33585;
(statearr_33595[(13)] = inst_33466);

(statearr_33595[(14)] = inst_33465);

(statearr_33595[(15)] = inst_33467);

(statearr_33595[(16)] = inst_33505);

(statearr_33595[(17)] = inst_33464);

return statearr_33595;
})();
var statearr_33596_34761 = state_33585__$1;
(statearr_33596_34761[(2)] = null);

(statearr_33596_34761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (39))){
var state_33585__$1 = state_33585;
var statearr_33600_34762 = state_33585__$1;
(statearr_33600_34762[(2)] = null);

(statearr_33600_34762[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (4))){
var inst_33455 = (state_33585[(9)]);
var inst_33455__$1 = (state_33585[(2)]);
var inst_33456 = (inst_33455__$1 == null);
var state_33585__$1 = (function (){var statearr_33601 = state_33585;
(statearr_33601[(9)] = inst_33455__$1);

return statearr_33601;
})();
if(cljs.core.truth_(inst_33456)){
var statearr_33602_34773 = state_33585__$1;
(statearr_33602_34773[(1)] = (5));

} else {
var statearr_33603_34774 = state_33585__$1;
(statearr_33603_34774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (15))){
var inst_33466 = (state_33585[(13)]);
var inst_33465 = (state_33585[(14)]);
var inst_33467 = (state_33585[(15)]);
var inst_33464 = (state_33585[(17)]);
var inst_33482 = (state_33585[(2)]);
var inst_33483 = (inst_33467 + (1));
var tmp33597 = inst_33466;
var tmp33598 = inst_33465;
var tmp33599 = inst_33464;
var inst_33464__$1 = tmp33599;
var inst_33465__$1 = tmp33598;
var inst_33466__$1 = tmp33597;
var inst_33467__$1 = inst_33483;
var state_33585__$1 = (function (){var statearr_33604 = state_33585;
(statearr_33604[(13)] = inst_33466__$1);

(statearr_33604[(14)] = inst_33465__$1);

(statearr_33604[(15)] = inst_33467__$1);

(statearr_33604[(18)] = inst_33482);

(statearr_33604[(17)] = inst_33464__$1);

return statearr_33604;
})();
var statearr_33605_34775 = state_33585__$1;
(statearr_33605_34775[(2)] = null);

(statearr_33605_34775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (21))){
var inst_33509 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33609_34776 = state_33585__$1;
(statearr_33609_34776[(2)] = inst_33509);

(statearr_33609_34776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (31))){
var inst_33535 = (state_33585[(10)]);
var inst_33539 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33535);
var state_33585__$1 = state_33585;
var statearr_33610_34783 = state_33585__$1;
(statearr_33610_34783[(2)] = inst_33539);

(statearr_33610_34783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (32))){
var inst_33527 = (state_33585[(19)]);
var inst_33528 = (state_33585[(11)]);
var inst_33529 = (state_33585[(20)]);
var inst_33530 = (state_33585[(12)]);
var inst_33541 = (state_33585[(2)]);
var inst_33542 = (inst_33530 + (1));
var tmp33606 = inst_33527;
var tmp33607 = inst_33528;
var tmp33608 = inst_33529;
var inst_33527__$1 = tmp33606;
var inst_33528__$1 = tmp33607;
var inst_33529__$1 = tmp33608;
var inst_33530__$1 = inst_33542;
var state_33585__$1 = (function (){var statearr_33611 = state_33585;
(statearr_33611[(19)] = inst_33527__$1);

(statearr_33611[(21)] = inst_33541);

(statearr_33611[(11)] = inst_33528__$1);

(statearr_33611[(20)] = inst_33529__$1);

(statearr_33611[(12)] = inst_33530__$1);

return statearr_33611;
})();
var statearr_33612_34784 = state_33585__$1;
(statearr_33612_34784[(2)] = null);

(statearr_33612_34784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (40))){
var inst_33554 = (state_33585[(22)]);
var inst_33558 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33554);
var state_33585__$1 = state_33585;
var statearr_33613_34785 = state_33585__$1;
(statearr_33613_34785[(2)] = inst_33558);

(statearr_33613_34785[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (33))){
var inst_33545 = (state_33585[(23)]);
var inst_33547 = cljs.core.chunked_seq_QMARK_(inst_33545);
var state_33585__$1 = state_33585;
if(inst_33547){
var statearr_33614_34786 = state_33585__$1;
(statearr_33614_34786[(1)] = (36));

} else {
var statearr_33615_34787 = state_33585__$1;
(statearr_33615_34787[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (13))){
var inst_33476 = (state_33585[(24)]);
var inst_33479 = cljs.core.async.close_BANG_(inst_33476);
var state_33585__$1 = state_33585;
var statearr_33616_34794 = state_33585__$1;
(statearr_33616_34794[(2)] = inst_33479);

(statearr_33616_34794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (22))){
var inst_33499 = (state_33585[(8)]);
var inst_33502 = cljs.core.async.close_BANG_(inst_33499);
var state_33585__$1 = state_33585;
var statearr_33617_34795 = state_33585__$1;
(statearr_33617_34795[(2)] = inst_33502);

(statearr_33617_34795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (36))){
var inst_33545 = (state_33585[(23)]);
var inst_33549 = cljs.core.chunk_first(inst_33545);
var inst_33550 = cljs.core.chunk_rest(inst_33545);
var inst_33551 = cljs.core.count(inst_33549);
var inst_33527 = inst_33550;
var inst_33528 = inst_33549;
var inst_33529 = inst_33551;
var inst_33530 = (0);
var state_33585__$1 = (function (){var statearr_33618 = state_33585;
(statearr_33618[(19)] = inst_33527);

(statearr_33618[(11)] = inst_33528);

(statearr_33618[(20)] = inst_33529);

(statearr_33618[(12)] = inst_33530);

return statearr_33618;
})();
var statearr_33619_34796 = state_33585__$1;
(statearr_33619_34796[(2)] = null);

(statearr_33619_34796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (41))){
var inst_33545 = (state_33585[(23)]);
var inst_33560 = (state_33585[(2)]);
var inst_33561 = cljs.core.next(inst_33545);
var inst_33527 = inst_33561;
var inst_33528 = null;
var inst_33529 = (0);
var inst_33530 = (0);
var state_33585__$1 = (function (){var statearr_33620 = state_33585;
(statearr_33620[(19)] = inst_33527);

(statearr_33620[(11)] = inst_33528);

(statearr_33620[(20)] = inst_33529);

(statearr_33620[(25)] = inst_33560);

(statearr_33620[(12)] = inst_33530);

return statearr_33620;
})();
var statearr_33621_34803 = state_33585__$1;
(statearr_33621_34803[(2)] = null);

(statearr_33621_34803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (43))){
var state_33585__$1 = state_33585;
var statearr_33622_34804 = state_33585__$1;
(statearr_33622_34804[(2)] = null);

(statearr_33622_34804[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (29))){
var inst_33569 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33623_34805 = state_33585__$1;
(statearr_33623_34805[(2)] = inst_33569);

(statearr_33623_34805[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (44))){
var inst_33578 = (state_33585[(2)]);
var state_33585__$1 = (function (){var statearr_33624 = state_33585;
(statearr_33624[(26)] = inst_33578);

return statearr_33624;
})();
var statearr_33625_34806 = state_33585__$1;
(statearr_33625_34806[(2)] = null);

(statearr_33625_34806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (6))){
var inst_33519 = (state_33585[(27)]);
var inst_33518 = cljs.core.deref(cs);
var inst_33519__$1 = cljs.core.keys(inst_33518);
var inst_33520 = cljs.core.count(inst_33519__$1);
var inst_33521 = cljs.core.reset_BANG_(dctr,inst_33520);
var inst_33526 = cljs.core.seq(inst_33519__$1);
var inst_33527 = inst_33526;
var inst_33528 = null;
var inst_33529 = (0);
var inst_33530 = (0);
var state_33585__$1 = (function (){var statearr_33626 = state_33585;
(statearr_33626[(27)] = inst_33519__$1);

(statearr_33626[(19)] = inst_33527);

(statearr_33626[(11)] = inst_33528);

(statearr_33626[(20)] = inst_33529);

(statearr_33626[(28)] = inst_33521);

(statearr_33626[(12)] = inst_33530);

return statearr_33626;
})();
var statearr_33627_34807 = state_33585__$1;
(statearr_33627_34807[(2)] = null);

(statearr_33627_34807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (28))){
var inst_33545 = (state_33585[(23)]);
var inst_33527 = (state_33585[(19)]);
var inst_33545__$1 = cljs.core.seq(inst_33527);
var state_33585__$1 = (function (){var statearr_33628 = state_33585;
(statearr_33628[(23)] = inst_33545__$1);

return statearr_33628;
})();
if(inst_33545__$1){
var statearr_33629_34808 = state_33585__$1;
(statearr_33629_34808[(1)] = (33));

} else {
var statearr_33630_34809 = state_33585__$1;
(statearr_33630_34809[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (25))){
var inst_33529 = (state_33585[(20)]);
var inst_33530 = (state_33585[(12)]);
var inst_33532 = (inst_33530 < inst_33529);
var inst_33533 = inst_33532;
var state_33585__$1 = state_33585;
if(cljs.core.truth_(inst_33533)){
var statearr_33631_34810 = state_33585__$1;
(statearr_33631_34810[(1)] = (27));

} else {
var statearr_33632_34811 = state_33585__$1;
(statearr_33632_34811[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (34))){
var state_33585__$1 = state_33585;
var statearr_33633_34812 = state_33585__$1;
(statearr_33633_34812[(2)] = null);

(statearr_33633_34812[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (17))){
var state_33585__$1 = state_33585;
var statearr_33634_34813 = state_33585__$1;
(statearr_33634_34813[(2)] = null);

(statearr_33634_34813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (3))){
var inst_33583 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33585__$1,inst_33583);
} else {
if((state_val_33586 === (12))){
var inst_33514 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33635_34815 = state_33585__$1;
(statearr_33635_34815[(2)] = inst_33514);

(statearr_33635_34815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (2))){
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33585__$1,(4),ch);
} else {
if((state_val_33586 === (23))){
var state_33585__$1 = state_33585;
var statearr_33636_34822 = state_33585__$1;
(statearr_33636_34822[(2)] = null);

(statearr_33636_34822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (35))){
var inst_33567 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33637_34823 = state_33585__$1;
(statearr_33637_34823[(2)] = inst_33567);

(statearr_33637_34823[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (19))){
var inst_33486 = (state_33585[(7)]);
var inst_33490 = cljs.core.chunk_first(inst_33486);
var inst_33491 = cljs.core.chunk_rest(inst_33486);
var inst_33492 = cljs.core.count(inst_33490);
var inst_33464 = inst_33491;
var inst_33465 = inst_33490;
var inst_33466 = inst_33492;
var inst_33467 = (0);
var state_33585__$1 = (function (){var statearr_33638 = state_33585;
(statearr_33638[(13)] = inst_33466);

(statearr_33638[(14)] = inst_33465);

(statearr_33638[(15)] = inst_33467);

(statearr_33638[(17)] = inst_33464);

return statearr_33638;
})();
var statearr_33639_34824 = state_33585__$1;
(statearr_33639_34824[(2)] = null);

(statearr_33639_34824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (11))){
var inst_33486 = (state_33585[(7)]);
var inst_33464 = (state_33585[(17)]);
var inst_33486__$1 = cljs.core.seq(inst_33464);
var state_33585__$1 = (function (){var statearr_33640 = state_33585;
(statearr_33640[(7)] = inst_33486__$1);

return statearr_33640;
})();
if(inst_33486__$1){
var statearr_33641_34825 = state_33585__$1;
(statearr_33641_34825[(1)] = (16));

} else {
var statearr_33642_34826 = state_33585__$1;
(statearr_33642_34826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (9))){
var inst_33516 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33643_34827 = state_33585__$1;
(statearr_33643_34827[(2)] = inst_33516);

(statearr_33643_34827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (5))){
var inst_33462 = cljs.core.deref(cs);
var inst_33463 = cljs.core.seq(inst_33462);
var inst_33464 = inst_33463;
var inst_33465 = null;
var inst_33466 = (0);
var inst_33467 = (0);
var state_33585__$1 = (function (){var statearr_33644 = state_33585;
(statearr_33644[(13)] = inst_33466);

(statearr_33644[(14)] = inst_33465);

(statearr_33644[(15)] = inst_33467);

(statearr_33644[(17)] = inst_33464);

return statearr_33644;
})();
var statearr_33645_34828 = state_33585__$1;
(statearr_33645_34828[(2)] = null);

(statearr_33645_34828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (14))){
var state_33585__$1 = state_33585;
var statearr_33646_34830 = state_33585__$1;
(statearr_33646_34830[(2)] = null);

(statearr_33646_34830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (45))){
var inst_33575 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33647_34832 = state_33585__$1;
(statearr_33647_34832[(2)] = inst_33575);

(statearr_33647_34832[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (26))){
var inst_33519 = (state_33585[(27)]);
var inst_33571 = (state_33585[(2)]);
var inst_33572 = cljs.core.seq(inst_33519);
var state_33585__$1 = (function (){var statearr_33648 = state_33585;
(statearr_33648[(29)] = inst_33571);

return statearr_33648;
})();
if(inst_33572){
var statearr_33649_34833 = state_33585__$1;
(statearr_33649_34833[(1)] = (42));

} else {
var statearr_33650_34834 = state_33585__$1;
(statearr_33650_34834[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (16))){
var inst_33486 = (state_33585[(7)]);
var inst_33488 = cljs.core.chunked_seq_QMARK_(inst_33486);
var state_33585__$1 = state_33585;
if(inst_33488){
var statearr_33651_34835 = state_33585__$1;
(statearr_33651_34835[(1)] = (19));

} else {
var statearr_33652_34836 = state_33585__$1;
(statearr_33652_34836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (38))){
var inst_33564 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33653_34839 = state_33585__$1;
(statearr_33653_34839[(2)] = inst_33564);

(statearr_33653_34839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (30))){
var state_33585__$1 = state_33585;
var statearr_33654_34840 = state_33585__$1;
(statearr_33654_34840[(2)] = null);

(statearr_33654_34840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (10))){
var inst_33465 = (state_33585[(14)]);
var inst_33467 = (state_33585[(15)]);
var inst_33475 = cljs.core._nth(inst_33465,inst_33467);
var inst_33476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33475,(0),null);
var inst_33477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33475,(1),null);
var state_33585__$1 = (function (){var statearr_33655 = state_33585;
(statearr_33655[(24)] = inst_33476);

return statearr_33655;
})();
if(cljs.core.truth_(inst_33477)){
var statearr_33656_34841 = state_33585__$1;
(statearr_33656_34841[(1)] = (13));

} else {
var statearr_33657_34842 = state_33585__$1;
(statearr_33657_34842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (18))){
var inst_33512 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33658_34843 = state_33585__$1;
(statearr_33658_34843[(2)] = inst_33512);

(statearr_33658_34843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (42))){
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33585__$1,(45),dchan);
} else {
if((state_val_33586 === (37))){
var inst_33545 = (state_33585[(23)]);
var inst_33455 = (state_33585[(9)]);
var inst_33554 = (state_33585[(22)]);
var inst_33554__$1 = cljs.core.first(inst_33545);
var inst_33555 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33554__$1,inst_33455,done);
var state_33585__$1 = (function (){var statearr_33659 = state_33585;
(statearr_33659[(22)] = inst_33554__$1);

return statearr_33659;
})();
if(cljs.core.truth_(inst_33555)){
var statearr_33660_34844 = state_33585__$1;
(statearr_33660_34844[(1)] = (39));

} else {
var statearr_33661_34845 = state_33585__$1;
(statearr_33661_34845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (8))){
var inst_33466 = (state_33585[(13)]);
var inst_33467 = (state_33585[(15)]);
var inst_33469 = (inst_33467 < inst_33466);
var inst_33470 = inst_33469;
var state_33585__$1 = state_33585;
if(cljs.core.truth_(inst_33470)){
var statearr_33662_34846 = state_33585__$1;
(statearr_33662_34846[(1)] = (10));

} else {
var statearr_33663_34847 = state_33585__$1;
(statearr_33663_34847[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32709__auto__ = null;
var cljs$core$async$mult_$_state_machine__32709__auto____0 = (function (){
var statearr_33664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33664[(0)] = cljs$core$async$mult_$_state_machine__32709__auto__);

(statearr_33664[(1)] = (1));

return statearr_33664;
});
var cljs$core$async$mult_$_state_machine__32709__auto____1 = (function (state_33585){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33585);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33665){var ex__32712__auto__ = e33665;
var statearr_33666_34849 = state_33585;
(statearr_33666_34849[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33585[(4)]))){
var statearr_33667_34850 = state_33585;
(statearr_33667_34850[(1)] = cljs.core.first((state_33585[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34851 = state_33585;
state_33585 = G__34851;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32709__auto__ = function(state_33585){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32709__auto____1.call(this,state_33585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32709__auto____0;
cljs$core$async$mult_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32709__auto____1;
return cljs$core$async$mult_$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33668 = f__32763__auto__();
(statearr_33668[(6)] = c__32762__auto___34743);

return statearr_33668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33670 = arguments.length;
switch (G__33670) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34857 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34857(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34858 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34858(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34859 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34859(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34880 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34880(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34881 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34881(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34884 = arguments.length;
var i__4737__auto___34885 = (0);
while(true){
if((i__4737__auto___34885 < len__4736__auto___34884)){
args__4742__auto__.push((arguments[i__4737__auto___34885]));

var G__34886 = (i__4737__auto___34885 + (1));
i__4737__auto___34885 = G__34886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33675){
var map__33676 = p__33675;
var map__33676__$1 = (((((!((map__33676 == null))))?(((((map__33676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33676):map__33676);
var opts = map__33676__$1;
var statearr_33678_34887 = state;
(statearr_33678_34887[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33679_34888 = state;
(statearr_33679_34888[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33680_34889 = state;
(statearr_33680_34889[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33671){
var G__33672 = cljs.core.first(seq33671);
var seq33671__$1 = cljs.core.next(seq33671);
var G__33673 = cljs.core.first(seq33671__$1);
var seq33671__$2 = cljs.core.next(seq33671__$1);
var G__33674 = cljs.core.first(seq33671__$2);
var seq33671__$3 = cljs.core.next(seq33671__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33672,G__33673,G__33674,seq33671__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33681 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33682){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33682 = meta33682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33683,meta33682__$1){
var self__ = this;
var _33683__$1 = this;
return (new cljs.core.async.t_cljs$core$async33681(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33682__$1));
}));

(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33683){
var self__ = this;
var _33683__$1 = this;
return self__.meta33682;
}));

(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33682","meta33682",-499138777,null)], null);
}));

(cljs.core.async.t_cljs$core$async33681.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33681");

(cljs.core.async.t_cljs$core$async33681.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33681");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33681.
 */
cljs.core.async.__GT_t_cljs$core$async33681 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33681(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33682){
return (new cljs.core.async.t_cljs$core$async33681(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33682));
});

}

return (new cljs.core.async.t_cljs$core$async33681(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32762__auto___34898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33785){
var state_val_33786 = (state_33785[(1)]);
if((state_val_33786 === (7))){
var inst_33700 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
var statearr_33787_34900 = state_33785__$1;
(statearr_33787_34900[(2)] = inst_33700);

(statearr_33787_34900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (20))){
var inst_33712 = (state_33785[(7)]);
var state_33785__$1 = state_33785;
var statearr_33788_34901 = state_33785__$1;
(statearr_33788_34901[(2)] = inst_33712);

(statearr_33788_34901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (27))){
var state_33785__$1 = state_33785;
var statearr_33789_34902 = state_33785__$1;
(statearr_33789_34902[(2)] = null);

(statearr_33789_34902[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (1))){
var inst_33687 = (state_33785[(8)]);
var inst_33687__$1 = calc_state();
var inst_33689 = (inst_33687__$1 == null);
var inst_33690 = cljs.core.not(inst_33689);
var state_33785__$1 = (function (){var statearr_33790 = state_33785;
(statearr_33790[(8)] = inst_33687__$1);

return statearr_33790;
})();
if(inst_33690){
var statearr_33791_34903 = state_33785__$1;
(statearr_33791_34903[(1)] = (2));

} else {
var statearr_33792_34904 = state_33785__$1;
(statearr_33792_34904[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (24))){
var inst_33745 = (state_33785[(9)]);
var inst_33759 = (state_33785[(10)]);
var inst_33736 = (state_33785[(11)]);
var inst_33759__$1 = (inst_33736.cljs$core$IFn$_invoke$arity$1 ? inst_33736.cljs$core$IFn$_invoke$arity$1(inst_33745) : inst_33736.call(null,inst_33745));
var state_33785__$1 = (function (){var statearr_33793 = state_33785;
(statearr_33793[(10)] = inst_33759__$1);

return statearr_33793;
})();
if(cljs.core.truth_(inst_33759__$1)){
var statearr_33794_34905 = state_33785__$1;
(statearr_33794_34905[(1)] = (29));

} else {
var statearr_33795_34906 = state_33785__$1;
(statearr_33795_34906[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (4))){
var inst_33703 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
if(cljs.core.truth_(inst_33703)){
var statearr_33796_34907 = state_33785__$1;
(statearr_33796_34907[(1)] = (8));

} else {
var statearr_33797_34908 = state_33785__$1;
(statearr_33797_34908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (15))){
var inst_33730 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
if(cljs.core.truth_(inst_33730)){
var statearr_33798_34910 = state_33785__$1;
(statearr_33798_34910[(1)] = (19));

} else {
var statearr_33799_34911 = state_33785__$1;
(statearr_33799_34911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (21))){
var inst_33735 = (state_33785[(12)]);
var inst_33735__$1 = (state_33785[(2)]);
var inst_33736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33735__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33735__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33735__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33785__$1 = (function (){var statearr_33800 = state_33785;
(statearr_33800[(11)] = inst_33736);

(statearr_33800[(13)] = inst_33737);

(statearr_33800[(12)] = inst_33735__$1);

return statearr_33800;
})();
return cljs.core.async.ioc_alts_BANG_(state_33785__$1,(22),inst_33738);
} else {
if((state_val_33786 === (31))){
var inst_33767 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
if(cljs.core.truth_(inst_33767)){
var statearr_33801_34916 = state_33785__$1;
(statearr_33801_34916[(1)] = (32));

} else {
var statearr_33802_34917 = state_33785__$1;
(statearr_33802_34917[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (32))){
var inst_33744 = (state_33785[(14)]);
var state_33785__$1 = state_33785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33785__$1,(35),out,inst_33744);
} else {
if((state_val_33786 === (33))){
var inst_33735 = (state_33785[(12)]);
var inst_33712 = inst_33735;
var state_33785__$1 = (function (){var statearr_33803 = state_33785;
(statearr_33803[(7)] = inst_33712);

return statearr_33803;
})();
var statearr_33804_34918 = state_33785__$1;
(statearr_33804_34918[(2)] = null);

(statearr_33804_34918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (13))){
var inst_33712 = (state_33785[(7)]);
var inst_33719 = inst_33712.cljs$lang$protocol_mask$partition0$;
var inst_33720 = (inst_33719 & (64));
var inst_33721 = inst_33712.cljs$core$ISeq$;
var inst_33722 = (cljs.core.PROTOCOL_SENTINEL === inst_33721);
var inst_33723 = ((inst_33720) || (inst_33722));
var state_33785__$1 = state_33785;
if(cljs.core.truth_(inst_33723)){
var statearr_33805_34919 = state_33785__$1;
(statearr_33805_34919[(1)] = (16));

} else {
var statearr_33806_34920 = state_33785__$1;
(statearr_33806_34920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (22))){
var inst_33745 = (state_33785[(9)]);
var inst_33744 = (state_33785[(14)]);
var inst_33743 = (state_33785[(2)]);
var inst_33744__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33743,(0),null);
var inst_33745__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33743,(1),null);
var inst_33746 = (inst_33744__$1 == null);
var inst_33747 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33745__$1,change);
var inst_33748 = ((inst_33746) || (inst_33747));
var state_33785__$1 = (function (){var statearr_33807 = state_33785;
(statearr_33807[(9)] = inst_33745__$1);

(statearr_33807[(14)] = inst_33744__$1);

return statearr_33807;
})();
if(cljs.core.truth_(inst_33748)){
var statearr_33808_34921 = state_33785__$1;
(statearr_33808_34921[(1)] = (23));

} else {
var statearr_33809_34922 = state_33785__$1;
(statearr_33809_34922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (36))){
var inst_33735 = (state_33785[(12)]);
var inst_33712 = inst_33735;
var state_33785__$1 = (function (){var statearr_33810 = state_33785;
(statearr_33810[(7)] = inst_33712);

return statearr_33810;
})();
var statearr_33811_34923 = state_33785__$1;
(statearr_33811_34923[(2)] = null);

(statearr_33811_34923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (29))){
var inst_33759 = (state_33785[(10)]);
var state_33785__$1 = state_33785;
var statearr_33812_34924 = state_33785__$1;
(statearr_33812_34924[(2)] = inst_33759);

(statearr_33812_34924[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (6))){
var state_33785__$1 = state_33785;
var statearr_33813_34925 = state_33785__$1;
(statearr_33813_34925[(2)] = false);

(statearr_33813_34925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (28))){
var inst_33755 = (state_33785[(2)]);
var inst_33756 = calc_state();
var inst_33712 = inst_33756;
var state_33785__$1 = (function (){var statearr_33814 = state_33785;
(statearr_33814[(7)] = inst_33712);

(statearr_33814[(15)] = inst_33755);

return statearr_33814;
})();
var statearr_33815_34929 = state_33785__$1;
(statearr_33815_34929[(2)] = null);

(statearr_33815_34929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (25))){
var inst_33781 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
var statearr_33816_34930 = state_33785__$1;
(statearr_33816_34930[(2)] = inst_33781);

(statearr_33816_34930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (34))){
var inst_33779 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
var statearr_33817_34931 = state_33785__$1;
(statearr_33817_34931[(2)] = inst_33779);

(statearr_33817_34931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (17))){
var state_33785__$1 = state_33785;
var statearr_33818_34932 = state_33785__$1;
(statearr_33818_34932[(2)] = false);

(statearr_33818_34932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (3))){
var state_33785__$1 = state_33785;
var statearr_33819_34933 = state_33785__$1;
(statearr_33819_34933[(2)] = false);

(statearr_33819_34933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (12))){
var inst_33783 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33785__$1,inst_33783);
} else {
if((state_val_33786 === (2))){
var inst_33687 = (state_33785[(8)]);
var inst_33692 = inst_33687.cljs$lang$protocol_mask$partition0$;
var inst_33693 = (inst_33692 & (64));
var inst_33694 = inst_33687.cljs$core$ISeq$;
var inst_33695 = (cljs.core.PROTOCOL_SENTINEL === inst_33694);
var inst_33696 = ((inst_33693) || (inst_33695));
var state_33785__$1 = state_33785;
if(cljs.core.truth_(inst_33696)){
var statearr_33820_34934 = state_33785__$1;
(statearr_33820_34934[(1)] = (5));

} else {
var statearr_33821_34935 = state_33785__$1;
(statearr_33821_34935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (23))){
var inst_33744 = (state_33785[(14)]);
var inst_33750 = (inst_33744 == null);
var state_33785__$1 = state_33785;
if(cljs.core.truth_(inst_33750)){
var statearr_33822_34936 = state_33785__$1;
(statearr_33822_34936[(1)] = (26));

} else {
var statearr_33823_34937 = state_33785__$1;
(statearr_33823_34937[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (35))){
var inst_33770 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
if(cljs.core.truth_(inst_33770)){
var statearr_33824_34938 = state_33785__$1;
(statearr_33824_34938[(1)] = (36));

} else {
var statearr_33825_34939 = state_33785__$1;
(statearr_33825_34939[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (19))){
var inst_33712 = (state_33785[(7)]);
var inst_33732 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33712);
var state_33785__$1 = state_33785;
var statearr_33826_34940 = state_33785__$1;
(statearr_33826_34940[(2)] = inst_33732);

(statearr_33826_34940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (11))){
var inst_33712 = (state_33785[(7)]);
var inst_33716 = (inst_33712 == null);
var inst_33717 = cljs.core.not(inst_33716);
var state_33785__$1 = state_33785;
if(inst_33717){
var statearr_33827_34941 = state_33785__$1;
(statearr_33827_34941[(1)] = (13));

} else {
var statearr_33828_34942 = state_33785__$1;
(statearr_33828_34942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (9))){
var inst_33687 = (state_33785[(8)]);
var state_33785__$1 = state_33785;
var statearr_33829_34943 = state_33785__$1;
(statearr_33829_34943[(2)] = inst_33687);

(statearr_33829_34943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (5))){
var state_33785__$1 = state_33785;
var statearr_33830_34945 = state_33785__$1;
(statearr_33830_34945[(2)] = true);

(statearr_33830_34945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (14))){
var state_33785__$1 = state_33785;
var statearr_33831_34946 = state_33785__$1;
(statearr_33831_34946[(2)] = false);

(statearr_33831_34946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (26))){
var inst_33745 = (state_33785[(9)]);
var inst_33752 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33745);
var state_33785__$1 = state_33785;
var statearr_33832_34947 = state_33785__$1;
(statearr_33832_34947[(2)] = inst_33752);

(statearr_33832_34947[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (16))){
var state_33785__$1 = state_33785;
var statearr_33833_34948 = state_33785__$1;
(statearr_33833_34948[(2)] = true);

(statearr_33833_34948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (38))){
var inst_33775 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
var statearr_33834_34949 = state_33785__$1;
(statearr_33834_34949[(2)] = inst_33775);

(statearr_33834_34949[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (30))){
var inst_33745 = (state_33785[(9)]);
var inst_33736 = (state_33785[(11)]);
var inst_33737 = (state_33785[(13)]);
var inst_33762 = cljs.core.empty_QMARK_(inst_33736);
var inst_33763 = (inst_33737.cljs$core$IFn$_invoke$arity$1 ? inst_33737.cljs$core$IFn$_invoke$arity$1(inst_33745) : inst_33737.call(null,inst_33745));
var inst_33764 = cljs.core.not(inst_33763);
var inst_33765 = ((inst_33762) && (inst_33764));
var state_33785__$1 = state_33785;
var statearr_33835_34954 = state_33785__$1;
(statearr_33835_34954[(2)] = inst_33765);

(statearr_33835_34954[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (10))){
var inst_33687 = (state_33785[(8)]);
var inst_33708 = (state_33785[(2)]);
var inst_33709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33708,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33708,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33708,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33712 = inst_33687;
var state_33785__$1 = (function (){var statearr_33836 = state_33785;
(statearr_33836[(16)] = inst_33709);

(statearr_33836[(17)] = inst_33710);

(statearr_33836[(7)] = inst_33712);

(statearr_33836[(18)] = inst_33711);

return statearr_33836;
})();
var statearr_33837_34956 = state_33785__$1;
(statearr_33837_34956[(2)] = null);

(statearr_33837_34956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (18))){
var inst_33727 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
var statearr_33838_34957 = state_33785__$1;
(statearr_33838_34957[(2)] = inst_33727);

(statearr_33838_34957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (37))){
var state_33785__$1 = state_33785;
var statearr_33839_34958 = state_33785__$1;
(statearr_33839_34958[(2)] = null);

(statearr_33839_34958[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (8))){
var inst_33687 = (state_33785[(8)]);
var inst_33705 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33687);
var state_33785__$1 = state_33785;
var statearr_33840_34959 = state_33785__$1;
(statearr_33840_34959[(2)] = inst_33705);

(statearr_33840_34959[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32709__auto__ = null;
var cljs$core$async$mix_$_state_machine__32709__auto____0 = (function (){
var statearr_33841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33841[(0)] = cljs$core$async$mix_$_state_machine__32709__auto__);

(statearr_33841[(1)] = (1));

return statearr_33841;
});
var cljs$core$async$mix_$_state_machine__32709__auto____1 = (function (state_33785){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33785);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33842){var ex__32712__auto__ = e33842;
var statearr_33843_34961 = state_33785;
(statearr_33843_34961[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33785[(4)]))){
var statearr_33844_34962 = state_33785;
(statearr_33844_34962[(1)] = cljs.core.first((state_33785[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34964 = state_33785;
state_33785 = G__34964;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32709__auto__ = function(state_33785){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32709__auto____1.call(this,state_33785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32709__auto____0;
cljs$core$async$mix_$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32709__auto____1;
return cljs$core$async$mix_$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33845 = f__32763__auto__();
(statearr_33845[(6)] = c__32762__auto___34898);

return statearr_33845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34968 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34968(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34969 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34969(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34970 = (function() {
var G__34971 = null;
var G__34971__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34971__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34971 = function(p,v){
switch(arguments.length){
case 1:
return G__34971__1.call(this,p);
case 2:
return G__34971__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34971.cljs$core$IFn$_invoke$arity$1 = G__34971__1;
G__34971.cljs$core$IFn$_invoke$arity$2 = G__34971__2;
return G__34971;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33847 = arguments.length;
switch (G__33847) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34970(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34970(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33850 = arguments.length;
switch (G__33850) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33848_SHARP_){
if(cljs.core.truth_((p1__33848_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33848_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33848_SHARP_.call(null,topic)))){
return p1__33848_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33848_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33851 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33852){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33852 = meta33852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33853,meta33852__$1){
var self__ = this;
var _33853__$1 = this;
return (new cljs.core.async.t_cljs$core$async33851(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33852__$1));
}));

(cljs.core.async.t_cljs$core$async33851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33853){
var self__ = this;
var _33853__$1 = this;
return self__.meta33852;
}));

(cljs.core.async.t_cljs$core$async33851.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33851.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33851.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33851.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33851.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33851.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33852","meta33852",782361492,null)], null);
}));

(cljs.core.async.t_cljs$core$async33851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33851");

(cljs.core.async.t_cljs$core$async33851.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33851.
 */
cljs.core.async.__GT_t_cljs$core$async33851 = (function cljs$core$async$__GT_t_cljs$core$async33851(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33852){
return (new cljs.core.async.t_cljs$core$async33851(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33852));
});

}

return (new cljs.core.async.t_cljs$core$async33851(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32762__auto___34978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_33925){
var state_val_33926 = (state_33925[(1)]);
if((state_val_33926 === (7))){
var inst_33921 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
var statearr_33927_34979 = state_33925__$1;
(statearr_33927_34979[(2)] = inst_33921);

(statearr_33927_34979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (20))){
var state_33925__$1 = state_33925;
var statearr_33928_34980 = state_33925__$1;
(statearr_33928_34980[(2)] = null);

(statearr_33928_34980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (1))){
var state_33925__$1 = state_33925;
var statearr_33929_34981 = state_33925__$1;
(statearr_33929_34981[(2)] = null);

(statearr_33929_34981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (24))){
var inst_33904 = (state_33925[(7)]);
var inst_33913 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33904);
var state_33925__$1 = state_33925;
var statearr_33930_34982 = state_33925__$1;
(statearr_33930_34982[(2)] = inst_33913);

(statearr_33930_34982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (4))){
var inst_33856 = (state_33925[(8)]);
var inst_33856__$1 = (state_33925[(2)]);
var inst_33857 = (inst_33856__$1 == null);
var state_33925__$1 = (function (){var statearr_33931 = state_33925;
(statearr_33931[(8)] = inst_33856__$1);

return statearr_33931;
})();
if(cljs.core.truth_(inst_33857)){
var statearr_33932_34983 = state_33925__$1;
(statearr_33932_34983[(1)] = (5));

} else {
var statearr_33933_34984 = state_33925__$1;
(statearr_33933_34984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (15))){
var inst_33898 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
var statearr_33934_34985 = state_33925__$1;
(statearr_33934_34985[(2)] = inst_33898);

(statearr_33934_34985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (21))){
var inst_33918 = (state_33925[(2)]);
var state_33925__$1 = (function (){var statearr_33935 = state_33925;
(statearr_33935[(9)] = inst_33918);

return statearr_33935;
})();
var statearr_33936_34986 = state_33925__$1;
(statearr_33936_34986[(2)] = null);

(statearr_33936_34986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (13))){
var inst_33880 = (state_33925[(10)]);
var inst_33882 = cljs.core.chunked_seq_QMARK_(inst_33880);
var state_33925__$1 = state_33925;
if(inst_33882){
var statearr_33937_34987 = state_33925__$1;
(statearr_33937_34987[(1)] = (16));

} else {
var statearr_33938_34988 = state_33925__$1;
(statearr_33938_34988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (22))){
var inst_33910 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
if(cljs.core.truth_(inst_33910)){
var statearr_33939_34989 = state_33925__$1;
(statearr_33939_34989[(1)] = (23));

} else {
var statearr_33940_34990 = state_33925__$1;
(statearr_33940_34990[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (6))){
var inst_33856 = (state_33925[(8)]);
var inst_33904 = (state_33925[(7)]);
var inst_33906 = (state_33925[(11)]);
var inst_33904__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33856) : topic_fn.call(null,inst_33856));
var inst_33905 = cljs.core.deref(mults);
var inst_33906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33905,inst_33904__$1);
var state_33925__$1 = (function (){var statearr_33941 = state_33925;
(statearr_33941[(7)] = inst_33904__$1);

(statearr_33941[(11)] = inst_33906__$1);

return statearr_33941;
})();
if(cljs.core.truth_(inst_33906__$1)){
var statearr_33942_34991 = state_33925__$1;
(statearr_33942_34991[(1)] = (19));

} else {
var statearr_33943_34992 = state_33925__$1;
(statearr_33943_34992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (25))){
var inst_33915 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
var statearr_33944_34993 = state_33925__$1;
(statearr_33944_34993[(2)] = inst_33915);

(statearr_33944_34993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (17))){
var inst_33880 = (state_33925[(10)]);
var inst_33889 = cljs.core.first(inst_33880);
var inst_33890 = cljs.core.async.muxch_STAR_(inst_33889);
var inst_33891 = cljs.core.async.close_BANG_(inst_33890);
var inst_33892 = cljs.core.next(inst_33880);
var inst_33866 = inst_33892;
var inst_33867 = null;
var inst_33868 = (0);
var inst_33869 = (0);
var state_33925__$1 = (function (){var statearr_33945 = state_33925;
(statearr_33945[(12)] = inst_33869);

(statearr_33945[(13)] = inst_33866);

(statearr_33945[(14)] = inst_33891);

(statearr_33945[(15)] = inst_33868);

(statearr_33945[(16)] = inst_33867);

return statearr_33945;
})();
var statearr_33946_34994 = state_33925__$1;
(statearr_33946_34994[(2)] = null);

(statearr_33946_34994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (3))){
var inst_33923 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33925__$1,inst_33923);
} else {
if((state_val_33926 === (12))){
var inst_33900 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
var statearr_33947_34995 = state_33925__$1;
(statearr_33947_34995[(2)] = inst_33900);

(statearr_33947_34995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (2))){
var state_33925__$1 = state_33925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33925__$1,(4),ch);
} else {
if((state_val_33926 === (23))){
var state_33925__$1 = state_33925;
var statearr_33948_34996 = state_33925__$1;
(statearr_33948_34996[(2)] = null);

(statearr_33948_34996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (19))){
var inst_33856 = (state_33925[(8)]);
var inst_33906 = (state_33925[(11)]);
var inst_33908 = cljs.core.async.muxch_STAR_(inst_33906);
var state_33925__$1 = state_33925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33925__$1,(22),inst_33908,inst_33856);
} else {
if((state_val_33926 === (11))){
var inst_33880 = (state_33925[(10)]);
var inst_33866 = (state_33925[(13)]);
var inst_33880__$1 = cljs.core.seq(inst_33866);
var state_33925__$1 = (function (){var statearr_33949 = state_33925;
(statearr_33949[(10)] = inst_33880__$1);

return statearr_33949;
})();
if(inst_33880__$1){
var statearr_33950_35007 = state_33925__$1;
(statearr_33950_35007[(1)] = (13));

} else {
var statearr_33951_35008 = state_33925__$1;
(statearr_33951_35008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (9))){
var inst_33902 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
var statearr_33952_35009 = state_33925__$1;
(statearr_33952_35009[(2)] = inst_33902);

(statearr_33952_35009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (5))){
var inst_33863 = cljs.core.deref(mults);
var inst_33864 = cljs.core.vals(inst_33863);
var inst_33865 = cljs.core.seq(inst_33864);
var inst_33866 = inst_33865;
var inst_33867 = null;
var inst_33868 = (0);
var inst_33869 = (0);
var state_33925__$1 = (function (){var statearr_33953 = state_33925;
(statearr_33953[(12)] = inst_33869);

(statearr_33953[(13)] = inst_33866);

(statearr_33953[(15)] = inst_33868);

(statearr_33953[(16)] = inst_33867);

return statearr_33953;
})();
var statearr_33954_35010 = state_33925__$1;
(statearr_33954_35010[(2)] = null);

(statearr_33954_35010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (14))){
var state_33925__$1 = state_33925;
var statearr_33958_35011 = state_33925__$1;
(statearr_33958_35011[(2)] = null);

(statearr_33958_35011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (16))){
var inst_33880 = (state_33925[(10)]);
var inst_33884 = cljs.core.chunk_first(inst_33880);
var inst_33885 = cljs.core.chunk_rest(inst_33880);
var inst_33886 = cljs.core.count(inst_33884);
var inst_33866 = inst_33885;
var inst_33867 = inst_33884;
var inst_33868 = inst_33886;
var inst_33869 = (0);
var state_33925__$1 = (function (){var statearr_33959 = state_33925;
(statearr_33959[(12)] = inst_33869);

(statearr_33959[(13)] = inst_33866);

(statearr_33959[(15)] = inst_33868);

(statearr_33959[(16)] = inst_33867);

return statearr_33959;
})();
var statearr_33960_35012 = state_33925__$1;
(statearr_33960_35012[(2)] = null);

(statearr_33960_35012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (10))){
var inst_33869 = (state_33925[(12)]);
var inst_33866 = (state_33925[(13)]);
var inst_33868 = (state_33925[(15)]);
var inst_33867 = (state_33925[(16)]);
var inst_33874 = cljs.core._nth(inst_33867,inst_33869);
var inst_33875 = cljs.core.async.muxch_STAR_(inst_33874);
var inst_33876 = cljs.core.async.close_BANG_(inst_33875);
var inst_33877 = (inst_33869 + (1));
var tmp33955 = inst_33866;
var tmp33956 = inst_33868;
var tmp33957 = inst_33867;
var inst_33866__$1 = tmp33955;
var inst_33867__$1 = tmp33957;
var inst_33868__$1 = tmp33956;
var inst_33869__$1 = inst_33877;
var state_33925__$1 = (function (){var statearr_33961 = state_33925;
(statearr_33961[(12)] = inst_33869__$1);

(statearr_33961[(17)] = inst_33876);

(statearr_33961[(13)] = inst_33866__$1);

(statearr_33961[(15)] = inst_33868__$1);

(statearr_33961[(16)] = inst_33867__$1);

return statearr_33961;
})();
var statearr_33962_35013 = state_33925__$1;
(statearr_33962_35013[(2)] = null);

(statearr_33962_35013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (18))){
var inst_33895 = (state_33925[(2)]);
var state_33925__$1 = state_33925;
var statearr_33963_35014 = state_33925__$1;
(statearr_33963_35014[(2)] = inst_33895);

(statearr_33963_35014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33926 === (8))){
var inst_33869 = (state_33925[(12)]);
var inst_33868 = (state_33925[(15)]);
var inst_33871 = (inst_33869 < inst_33868);
var inst_33872 = inst_33871;
var state_33925__$1 = state_33925;
if(cljs.core.truth_(inst_33872)){
var statearr_33964_35015 = state_33925__$1;
(statearr_33964_35015[(1)] = (10));

} else {
var statearr_33965_35016 = state_33925__$1;
(statearr_33965_35016[(1)] = (11));

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
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_33966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33966[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_33966[(1)] = (1));

return statearr_33966;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_33925){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_33925);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e33967){var ex__32712__auto__ = e33967;
var statearr_33968_35017 = state_33925;
(statearr_33968_35017[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_33925[(4)]))){
var statearr_33969_35018 = state_33925;
(statearr_33969_35018[(1)] = cljs.core.first((state_33925[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35019 = state_33925;
state_33925 = G__35019;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_33925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_33925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_33970 = f__32763__auto__();
(statearr_33970[(6)] = c__32762__auto___34978);

return statearr_33970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33972 = arguments.length;
switch (G__33972) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33974 = arguments.length;
switch (G__33974) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33976 = arguments.length;
switch (G__33976) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32762__auto___35023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_34019){
var state_val_34020 = (state_34019[(1)]);
if((state_val_34020 === (7))){
var state_34019__$1 = state_34019;
var statearr_34021_35024 = state_34019__$1;
(statearr_34021_35024[(2)] = null);

(statearr_34021_35024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (1))){
var state_34019__$1 = state_34019;
var statearr_34022_35025 = state_34019__$1;
(statearr_34022_35025[(2)] = null);

(statearr_34022_35025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (4))){
var inst_33980 = (state_34019[(7)]);
var inst_33979 = (state_34019[(8)]);
var inst_33982 = (inst_33980 < inst_33979);
var state_34019__$1 = state_34019;
if(cljs.core.truth_(inst_33982)){
var statearr_34023_35026 = state_34019__$1;
(statearr_34023_35026[(1)] = (6));

} else {
var statearr_34024_35027 = state_34019__$1;
(statearr_34024_35027[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (15))){
var inst_34005 = (state_34019[(9)]);
var inst_34010 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34005);
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34019__$1,(17),out,inst_34010);
} else {
if((state_val_34020 === (13))){
var inst_34005 = (state_34019[(9)]);
var inst_34005__$1 = (state_34019[(2)]);
var inst_34006 = cljs.core.some(cljs.core.nil_QMARK_,inst_34005__$1);
var state_34019__$1 = (function (){var statearr_34025 = state_34019;
(statearr_34025[(9)] = inst_34005__$1);

return statearr_34025;
})();
if(cljs.core.truth_(inst_34006)){
var statearr_34026_35031 = state_34019__$1;
(statearr_34026_35031[(1)] = (14));

} else {
var statearr_34027_35032 = state_34019__$1;
(statearr_34027_35032[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (6))){
var state_34019__$1 = state_34019;
var statearr_34028_35033 = state_34019__$1;
(statearr_34028_35033[(2)] = null);

(statearr_34028_35033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (17))){
var inst_34012 = (state_34019[(2)]);
var state_34019__$1 = (function (){var statearr_34030 = state_34019;
(statearr_34030[(10)] = inst_34012);

return statearr_34030;
})();
var statearr_34031_35038 = state_34019__$1;
(statearr_34031_35038[(2)] = null);

(statearr_34031_35038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (3))){
var inst_34017 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34019__$1,inst_34017);
} else {
if((state_val_34020 === (12))){
var _ = (function (){var statearr_34032 = state_34019;
(statearr_34032[(4)] = cljs.core.rest((state_34019[(4)])));

return statearr_34032;
})();
var state_34019__$1 = state_34019;
var ex34029 = (state_34019__$1[(2)]);
var statearr_34033_35042 = state_34019__$1;
(statearr_34033_35042[(5)] = ex34029);


if((ex34029 instanceof Object)){
var statearr_34034_35043 = state_34019__$1;
(statearr_34034_35043[(1)] = (11));

(statearr_34034_35043[(5)] = null);

} else {
throw ex34029;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (2))){
var inst_33978 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33979 = cnt;
var inst_33980 = (0);
var state_34019__$1 = (function (){var statearr_34035 = state_34019;
(statearr_34035[(7)] = inst_33980);

(statearr_34035[(11)] = inst_33978);

(statearr_34035[(8)] = inst_33979);

return statearr_34035;
})();
var statearr_34036_35047 = state_34019__$1;
(statearr_34036_35047[(2)] = null);

(statearr_34036_35047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (11))){
var inst_33984 = (state_34019[(2)]);
var inst_33985 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34019__$1 = (function (){var statearr_34037 = state_34019;
(statearr_34037[(12)] = inst_33984);

return statearr_34037;
})();
var statearr_34038_35048 = state_34019__$1;
(statearr_34038_35048[(2)] = inst_33985);

(statearr_34038_35048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (9))){
var inst_33980 = (state_34019[(7)]);
var _ = (function (){var statearr_34039 = state_34019;
(statearr_34039[(4)] = cljs.core.cons((12),(state_34019[(4)])));

return statearr_34039;
})();
var inst_33991 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33980) : chs__$1.call(null,inst_33980));
var inst_33992 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33980) : done.call(null,inst_33980));
var inst_33993 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33991,inst_33992);
var ___$1 = (function (){var statearr_34040 = state_34019;
(statearr_34040[(4)] = cljs.core.rest((state_34019[(4)])));

return statearr_34040;
})();
var state_34019__$1 = state_34019;
var statearr_34041_35052 = state_34019__$1;
(statearr_34041_35052[(2)] = inst_33993);

(statearr_34041_35052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (5))){
var inst_34003 = (state_34019[(2)]);
var state_34019__$1 = (function (){var statearr_34042 = state_34019;
(statearr_34042[(13)] = inst_34003);

return statearr_34042;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34019__$1,(13),dchan);
} else {
if((state_val_34020 === (14))){
var inst_34008 = cljs.core.async.close_BANG_(out);
var state_34019__$1 = state_34019;
var statearr_34043_35053 = state_34019__$1;
(statearr_34043_35053[(2)] = inst_34008);

(statearr_34043_35053[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (16))){
var inst_34015 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34044_35054 = state_34019__$1;
(statearr_34044_35054[(2)] = inst_34015);

(statearr_34044_35054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (10))){
var inst_33980 = (state_34019[(7)]);
var inst_33996 = (state_34019[(2)]);
var inst_33997 = (inst_33980 + (1));
var inst_33980__$1 = inst_33997;
var state_34019__$1 = (function (){var statearr_34045 = state_34019;
(statearr_34045[(14)] = inst_33996);

(statearr_34045[(7)] = inst_33980__$1);

return statearr_34045;
})();
var statearr_34046_35058 = state_34019__$1;
(statearr_34046_35058[(2)] = null);

(statearr_34046_35058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (8))){
var inst_34001 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34047_35059 = state_34019__$1;
(statearr_34047_35059[(2)] = inst_34001);

(statearr_34047_35059[(1)] = (5));


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
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_34048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34048[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_34048[(1)] = (1));

return statearr_34048;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_34019){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_34019);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e34049){var ex__32712__auto__ = e34049;
var statearr_34050_35061 = state_34019;
(statearr_34050_35061[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_34019[(4)]))){
var statearr_34051_35062 = state_34019;
(statearr_34051_35062[(1)] = cljs.core.first((state_34019[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35063 = state_34019;
state_34019 = G__35063;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_34019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_34019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_34052 = f__32763__auto__();
(statearr_34052[(6)] = c__32762__auto___35023);

return statearr_34052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34055 = arguments.length;
switch (G__34055) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32762__auto___35074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_34087){
var state_val_34088 = (state_34087[(1)]);
if((state_val_34088 === (7))){
var inst_34066 = (state_34087[(7)]);
var inst_34067 = (state_34087[(8)]);
var inst_34066__$1 = (state_34087[(2)]);
var inst_34067__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34066__$1,(0),null);
var inst_34068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34066__$1,(1),null);
var inst_34069 = (inst_34067__$1 == null);
var state_34087__$1 = (function (){var statearr_34089 = state_34087;
(statearr_34089[(9)] = inst_34068);

(statearr_34089[(7)] = inst_34066__$1);

(statearr_34089[(8)] = inst_34067__$1);

return statearr_34089;
})();
if(cljs.core.truth_(inst_34069)){
var statearr_34090_35075 = state_34087__$1;
(statearr_34090_35075[(1)] = (8));

} else {
var statearr_34091_35076 = state_34087__$1;
(statearr_34091_35076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (1))){
var inst_34056 = cljs.core.vec(chs);
var inst_34057 = inst_34056;
var state_34087__$1 = (function (){var statearr_34092 = state_34087;
(statearr_34092[(10)] = inst_34057);

return statearr_34092;
})();
var statearr_34093_35077 = state_34087__$1;
(statearr_34093_35077[(2)] = null);

(statearr_34093_35077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (4))){
var inst_34057 = (state_34087[(10)]);
var state_34087__$1 = state_34087;
return cljs.core.async.ioc_alts_BANG_(state_34087__$1,(7),inst_34057);
} else {
if((state_val_34088 === (6))){
var inst_34083 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34094_35084 = state_34087__$1;
(statearr_34094_35084[(2)] = inst_34083);

(statearr_34094_35084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (3))){
var inst_34085 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34087__$1,inst_34085);
} else {
if((state_val_34088 === (2))){
var inst_34057 = (state_34087[(10)]);
var inst_34059 = cljs.core.count(inst_34057);
var inst_34060 = (inst_34059 > (0));
var state_34087__$1 = state_34087;
if(cljs.core.truth_(inst_34060)){
var statearr_34096_35085 = state_34087__$1;
(statearr_34096_35085[(1)] = (4));

} else {
var statearr_34097_35086 = state_34087__$1;
(statearr_34097_35086[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (11))){
var inst_34057 = (state_34087[(10)]);
var inst_34076 = (state_34087[(2)]);
var tmp34095 = inst_34057;
var inst_34057__$1 = tmp34095;
var state_34087__$1 = (function (){var statearr_34098 = state_34087;
(statearr_34098[(11)] = inst_34076);

(statearr_34098[(10)] = inst_34057__$1);

return statearr_34098;
})();
var statearr_34099_35087 = state_34087__$1;
(statearr_34099_35087[(2)] = null);

(statearr_34099_35087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (9))){
var inst_34067 = (state_34087[(8)]);
var state_34087__$1 = state_34087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34087__$1,(11),out,inst_34067);
} else {
if((state_val_34088 === (5))){
var inst_34081 = cljs.core.async.close_BANG_(out);
var state_34087__$1 = state_34087;
var statearr_34100_35088 = state_34087__$1;
(statearr_34100_35088[(2)] = inst_34081);

(statearr_34100_35088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (10))){
var inst_34079 = (state_34087[(2)]);
var state_34087__$1 = state_34087;
var statearr_34101_35089 = state_34087__$1;
(statearr_34101_35089[(2)] = inst_34079);

(statearr_34101_35089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34088 === (8))){
var inst_34068 = (state_34087[(9)]);
var inst_34066 = (state_34087[(7)]);
var inst_34057 = (state_34087[(10)]);
var inst_34067 = (state_34087[(8)]);
var inst_34071 = (function (){var cs = inst_34057;
var vec__34062 = inst_34066;
var v = inst_34067;
var c = inst_34068;
return (function (p1__34053_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34053_SHARP_);
});
})();
var inst_34072 = cljs.core.filterv(inst_34071,inst_34057);
var inst_34057__$1 = inst_34072;
var state_34087__$1 = (function (){var statearr_34102 = state_34087;
(statearr_34102[(10)] = inst_34057__$1);

return statearr_34102;
})();
var statearr_34103_35096 = state_34087__$1;
(statearr_34103_35096[(2)] = null);

(statearr_34103_35096[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_34104 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34104[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_34104[(1)] = (1));

return statearr_34104;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_34087){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_34087);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e34105){var ex__32712__auto__ = e34105;
var statearr_34106_35097 = state_34087;
(statearr_34106_35097[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_34087[(4)]))){
var statearr_34107_35098 = state_34087;
(statearr_34107_35098[(1)] = cljs.core.first((state_34087[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35099 = state_34087;
state_34087 = G__35099;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_34087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_34087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_34108 = f__32763__auto__();
(statearr_34108[(6)] = c__32762__auto___35074);

return statearr_34108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34110 = arguments.length;
switch (G__34110) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32762__auto___35113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_34134){
var state_val_34135 = (state_34134[(1)]);
if((state_val_34135 === (7))){
var inst_34116 = (state_34134[(7)]);
var inst_34116__$1 = (state_34134[(2)]);
var inst_34117 = (inst_34116__$1 == null);
var inst_34118 = cljs.core.not(inst_34117);
var state_34134__$1 = (function (){var statearr_34136 = state_34134;
(statearr_34136[(7)] = inst_34116__$1);

return statearr_34136;
})();
if(inst_34118){
var statearr_34137_35116 = state_34134__$1;
(statearr_34137_35116[(1)] = (8));

} else {
var statearr_34138_35117 = state_34134__$1;
(statearr_34138_35117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34135 === (1))){
var inst_34111 = (0);
var state_34134__$1 = (function (){var statearr_34139 = state_34134;
(statearr_34139[(8)] = inst_34111);

return statearr_34139;
})();
var statearr_34140_35118 = state_34134__$1;
(statearr_34140_35118[(2)] = null);

(statearr_34140_35118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34135 === (4))){
var state_34134__$1 = state_34134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34134__$1,(7),ch);
} else {
if((state_val_34135 === (6))){
var inst_34129 = (state_34134[(2)]);
var state_34134__$1 = state_34134;
var statearr_34141_35119 = state_34134__$1;
(statearr_34141_35119[(2)] = inst_34129);

(statearr_34141_35119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34135 === (3))){
var inst_34131 = (state_34134[(2)]);
var inst_34132 = cljs.core.async.close_BANG_(out);
var state_34134__$1 = (function (){var statearr_34142 = state_34134;
(statearr_34142[(9)] = inst_34131);

return statearr_34142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34134__$1,inst_34132);
} else {
if((state_val_34135 === (2))){
var inst_34111 = (state_34134[(8)]);
var inst_34113 = (inst_34111 < n);
var state_34134__$1 = state_34134;
if(cljs.core.truth_(inst_34113)){
var statearr_34143_35120 = state_34134__$1;
(statearr_34143_35120[(1)] = (4));

} else {
var statearr_34144_35121 = state_34134__$1;
(statearr_34144_35121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34135 === (11))){
var inst_34111 = (state_34134[(8)]);
var inst_34121 = (state_34134[(2)]);
var inst_34122 = (inst_34111 + (1));
var inst_34111__$1 = inst_34122;
var state_34134__$1 = (function (){var statearr_34145 = state_34134;
(statearr_34145[(8)] = inst_34111__$1);

(statearr_34145[(10)] = inst_34121);

return statearr_34145;
})();
var statearr_34146_35122 = state_34134__$1;
(statearr_34146_35122[(2)] = null);

(statearr_34146_35122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34135 === (9))){
var state_34134__$1 = state_34134;
var statearr_34147_35123 = state_34134__$1;
(statearr_34147_35123[(2)] = null);

(statearr_34147_35123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34135 === (5))){
var state_34134__$1 = state_34134;
var statearr_34148_35124 = state_34134__$1;
(statearr_34148_35124[(2)] = null);

(statearr_34148_35124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34135 === (10))){
var inst_34126 = (state_34134[(2)]);
var state_34134__$1 = state_34134;
var statearr_34149_35126 = state_34134__$1;
(statearr_34149_35126[(2)] = inst_34126);

(statearr_34149_35126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34135 === (8))){
var inst_34116 = (state_34134[(7)]);
var state_34134__$1 = state_34134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34134__$1,(11),out,inst_34116);
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
});
return (function() {
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_34150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34150[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_34150[(1)] = (1));

return statearr_34150;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_34134){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_34134);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e34151){var ex__32712__auto__ = e34151;
var statearr_34152_35140 = state_34134;
(statearr_34152_35140[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_34134[(4)]))){
var statearr_34153_35141 = state_34134;
(statearr_34153_35141[(1)] = cljs.core.first((state_34134[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35142 = state_34134;
state_34134 = G__35142;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_34134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_34134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_34154 = f__32763__auto__();
(statearr_34154[(6)] = c__32762__auto___35113);

return statearr_34154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34156 = (function (f,ch,meta34157){
this.f = f;
this.ch = ch;
this.meta34157 = meta34157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34158,meta34157__$1){
var self__ = this;
var _34158__$1 = this;
return (new cljs.core.async.t_cljs$core$async34156(self__.f,self__.ch,meta34157__$1));
}));

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34158){
var self__ = this;
var _34158__$1 = this;
return self__.meta34157;
}));

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34159 = (function (f,ch,meta34157,_,fn1,meta34160){
this.f = f;
this.ch = ch;
this.meta34157 = meta34157;
this._ = _;
this.fn1 = fn1;
this.meta34160 = meta34160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34161,meta34160__$1){
var self__ = this;
var _34161__$1 = this;
return (new cljs.core.async.t_cljs$core$async34159(self__.f,self__.ch,self__.meta34157,self__._,self__.fn1,meta34160__$1));
}));

(cljs.core.async.t_cljs$core$async34159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34161){
var self__ = this;
var _34161__$1 = this;
return self__.meta34160;
}));

(cljs.core.async.t_cljs$core$async34159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34155_SHARP_){
var G__34162 = (((p1__34155_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34155_SHARP_) : self__.f.call(null,p1__34155_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34162) : f1.call(null,G__34162));
});
}));

(cljs.core.async.t_cljs$core$async34159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34157","meta34157",-833338239,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34156","cljs.core.async/t_cljs$core$async34156",-1972148967,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34160","meta34160",-834039720,null)], null);
}));

(cljs.core.async.t_cljs$core$async34159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34159");

(cljs.core.async.t_cljs$core$async34159.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34159.
 */
cljs.core.async.__GT_t_cljs$core$async34159 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34159(f__$1,ch__$1,meta34157__$1,___$2,fn1__$1,meta34160){
return (new cljs.core.async.t_cljs$core$async34159(f__$1,ch__$1,meta34157__$1,___$2,fn1__$1,meta34160));
});

}

return (new cljs.core.async.t_cljs$core$async34159(self__.f,self__.ch,self__.meta34157,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34163 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34163) : self__.f.call(null,G__34163));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34157","meta34157",-833338239,null)], null);
}));

(cljs.core.async.t_cljs$core$async34156.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34156");

(cljs.core.async.t_cljs$core$async34156.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34156");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34156.
 */
cljs.core.async.__GT_t_cljs$core$async34156 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34156(f__$1,ch__$1,meta34157){
return (new cljs.core.async.t_cljs$core$async34156(f__$1,ch__$1,meta34157));
});

}

return (new cljs.core.async.t_cljs$core$async34156(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34164 = (function (f,ch,meta34165){
this.f = f;
this.ch = ch;
this.meta34165 = meta34165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34166,meta34165__$1){
var self__ = this;
var _34166__$1 = this;
return (new cljs.core.async.t_cljs$core$async34164(self__.f,self__.ch,meta34165__$1));
}));

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34166){
var self__ = this;
var _34166__$1 = this;
return self__.meta34165;
}));

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34165","meta34165",647466310,null)], null);
}));

(cljs.core.async.t_cljs$core$async34164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34164");

(cljs.core.async.t_cljs$core$async34164.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34164.
 */
cljs.core.async.__GT_t_cljs$core$async34164 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34164(f__$1,ch__$1,meta34165){
return (new cljs.core.async.t_cljs$core$async34164(f__$1,ch__$1,meta34165));
});

}

return (new cljs.core.async.t_cljs$core$async34164(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34167 = (function (p,ch,meta34168){
this.p = p;
this.ch = ch;
this.meta34168 = meta34168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34169,meta34168__$1){
var self__ = this;
var _34169__$1 = this;
return (new cljs.core.async.t_cljs$core$async34167(self__.p,self__.ch,meta34168__$1));
}));

(cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34169){
var self__ = this;
var _34169__$1 = this;
return self__.meta34168;
}));

(cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34168","meta34168",1782388085,null)], null);
}));

(cljs.core.async.t_cljs$core$async34167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34167");

(cljs.core.async.t_cljs$core$async34167.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34167.
 */
cljs.core.async.__GT_t_cljs$core$async34167 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34167(p__$1,ch__$1,meta34168){
return (new cljs.core.async.t_cljs$core$async34167(p__$1,ch__$1,meta34168));
});

}

return (new cljs.core.async.t_cljs$core$async34167(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34171 = arguments.length;
switch (G__34171) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32762__auto___35151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_34192){
var state_val_34193 = (state_34192[(1)]);
if((state_val_34193 === (7))){
var inst_34188 = (state_34192[(2)]);
var state_34192__$1 = state_34192;
var statearr_34194_35153 = state_34192__$1;
(statearr_34194_35153[(2)] = inst_34188);

(statearr_34194_35153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (1))){
var state_34192__$1 = state_34192;
var statearr_34195_35154 = state_34192__$1;
(statearr_34195_35154[(2)] = null);

(statearr_34195_35154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (4))){
var inst_34174 = (state_34192[(7)]);
var inst_34174__$1 = (state_34192[(2)]);
var inst_34175 = (inst_34174__$1 == null);
var state_34192__$1 = (function (){var statearr_34196 = state_34192;
(statearr_34196[(7)] = inst_34174__$1);

return statearr_34196;
})();
if(cljs.core.truth_(inst_34175)){
var statearr_34197_35155 = state_34192__$1;
(statearr_34197_35155[(1)] = (5));

} else {
var statearr_34198_35156 = state_34192__$1;
(statearr_34198_35156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (6))){
var inst_34174 = (state_34192[(7)]);
var inst_34179 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34174) : p.call(null,inst_34174));
var state_34192__$1 = state_34192;
if(cljs.core.truth_(inst_34179)){
var statearr_34199_35157 = state_34192__$1;
(statearr_34199_35157[(1)] = (8));

} else {
var statearr_34200_35158 = state_34192__$1;
(statearr_34200_35158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (3))){
var inst_34190 = (state_34192[(2)]);
var state_34192__$1 = state_34192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34192__$1,inst_34190);
} else {
if((state_val_34193 === (2))){
var state_34192__$1 = state_34192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34192__$1,(4),ch);
} else {
if((state_val_34193 === (11))){
var inst_34182 = (state_34192[(2)]);
var state_34192__$1 = state_34192;
var statearr_34201_35164 = state_34192__$1;
(statearr_34201_35164[(2)] = inst_34182);

(statearr_34201_35164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (9))){
var state_34192__$1 = state_34192;
var statearr_34202_35165 = state_34192__$1;
(statearr_34202_35165[(2)] = null);

(statearr_34202_35165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (5))){
var inst_34177 = cljs.core.async.close_BANG_(out);
var state_34192__$1 = state_34192;
var statearr_34203_35171 = state_34192__$1;
(statearr_34203_35171[(2)] = inst_34177);

(statearr_34203_35171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (10))){
var inst_34185 = (state_34192[(2)]);
var state_34192__$1 = (function (){var statearr_34204 = state_34192;
(statearr_34204[(8)] = inst_34185);

return statearr_34204;
})();
var statearr_34205_35176 = state_34192__$1;
(statearr_34205_35176[(2)] = null);

(statearr_34205_35176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34193 === (8))){
var inst_34174 = (state_34192[(7)]);
var state_34192__$1 = state_34192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34192__$1,(11),out,inst_34174);
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
});
return (function() {
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_34206 = [null,null,null,null,null,null,null,null,null];
(statearr_34206[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_34206[(1)] = (1));

return statearr_34206;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_34192){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_34192);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e34207){var ex__32712__auto__ = e34207;
var statearr_34208_35178 = state_34192;
(statearr_34208_35178[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_34192[(4)]))){
var statearr_34209_35179 = state_34192;
(statearr_34209_35179[(1)] = cljs.core.first((state_34192[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35180 = state_34192;
state_34192 = G__35180;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_34192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_34192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_34210 = f__32763__auto__();
(statearr_34210[(6)] = c__32762__auto___35151);

return statearr_34210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34212 = arguments.length;
switch (G__34212) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32762__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_34274){
var state_val_34275 = (state_34274[(1)]);
if((state_val_34275 === (7))){
var inst_34270 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34276_35202 = state_34274__$1;
(statearr_34276_35202[(2)] = inst_34270);

(statearr_34276_35202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (20))){
var inst_34240 = (state_34274[(7)]);
var inst_34251 = (state_34274[(2)]);
var inst_34252 = cljs.core.next(inst_34240);
var inst_34226 = inst_34252;
var inst_34227 = null;
var inst_34228 = (0);
var inst_34229 = (0);
var state_34274__$1 = (function (){var statearr_34277 = state_34274;
(statearr_34277[(8)] = inst_34227);

(statearr_34277[(9)] = inst_34229);

(statearr_34277[(10)] = inst_34251);

(statearr_34277[(11)] = inst_34226);

(statearr_34277[(12)] = inst_34228);

return statearr_34277;
})();
var statearr_34278_35210 = state_34274__$1;
(statearr_34278_35210[(2)] = null);

(statearr_34278_35210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (1))){
var state_34274__$1 = state_34274;
var statearr_34279_35211 = state_34274__$1;
(statearr_34279_35211[(2)] = null);

(statearr_34279_35211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (4))){
var inst_34215 = (state_34274[(13)]);
var inst_34215__$1 = (state_34274[(2)]);
var inst_34216 = (inst_34215__$1 == null);
var state_34274__$1 = (function (){var statearr_34280 = state_34274;
(statearr_34280[(13)] = inst_34215__$1);

return statearr_34280;
})();
if(cljs.core.truth_(inst_34216)){
var statearr_34281_35212 = state_34274__$1;
(statearr_34281_35212[(1)] = (5));

} else {
var statearr_34282_35213 = state_34274__$1;
(statearr_34282_35213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (15))){
var state_34274__$1 = state_34274;
var statearr_34286_35215 = state_34274__$1;
(statearr_34286_35215[(2)] = null);

(statearr_34286_35215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (21))){
var state_34274__$1 = state_34274;
var statearr_34287_35216 = state_34274__$1;
(statearr_34287_35216[(2)] = null);

(statearr_34287_35216[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (13))){
var inst_34227 = (state_34274[(8)]);
var inst_34229 = (state_34274[(9)]);
var inst_34226 = (state_34274[(11)]);
var inst_34228 = (state_34274[(12)]);
var inst_34236 = (state_34274[(2)]);
var inst_34237 = (inst_34229 + (1));
var tmp34283 = inst_34227;
var tmp34284 = inst_34226;
var tmp34285 = inst_34228;
var inst_34226__$1 = tmp34284;
var inst_34227__$1 = tmp34283;
var inst_34228__$1 = tmp34285;
var inst_34229__$1 = inst_34237;
var state_34274__$1 = (function (){var statearr_34288 = state_34274;
(statearr_34288[(8)] = inst_34227__$1);

(statearr_34288[(9)] = inst_34229__$1);

(statearr_34288[(14)] = inst_34236);

(statearr_34288[(11)] = inst_34226__$1);

(statearr_34288[(12)] = inst_34228__$1);

return statearr_34288;
})();
var statearr_34289_35217 = state_34274__$1;
(statearr_34289_35217[(2)] = null);

(statearr_34289_35217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (22))){
var state_34274__$1 = state_34274;
var statearr_34290_35218 = state_34274__$1;
(statearr_34290_35218[(2)] = null);

(statearr_34290_35218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (6))){
var inst_34215 = (state_34274[(13)]);
var inst_34224 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34215) : f.call(null,inst_34215));
var inst_34225 = cljs.core.seq(inst_34224);
var inst_34226 = inst_34225;
var inst_34227 = null;
var inst_34228 = (0);
var inst_34229 = (0);
var state_34274__$1 = (function (){var statearr_34291 = state_34274;
(statearr_34291[(8)] = inst_34227);

(statearr_34291[(9)] = inst_34229);

(statearr_34291[(11)] = inst_34226);

(statearr_34291[(12)] = inst_34228);

return statearr_34291;
})();
var statearr_34292_35219 = state_34274__$1;
(statearr_34292_35219[(2)] = null);

(statearr_34292_35219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (17))){
var inst_34240 = (state_34274[(7)]);
var inst_34244 = cljs.core.chunk_first(inst_34240);
var inst_34245 = cljs.core.chunk_rest(inst_34240);
var inst_34246 = cljs.core.count(inst_34244);
var inst_34226 = inst_34245;
var inst_34227 = inst_34244;
var inst_34228 = inst_34246;
var inst_34229 = (0);
var state_34274__$1 = (function (){var statearr_34293 = state_34274;
(statearr_34293[(8)] = inst_34227);

(statearr_34293[(9)] = inst_34229);

(statearr_34293[(11)] = inst_34226);

(statearr_34293[(12)] = inst_34228);

return statearr_34293;
})();
var statearr_34294_35221 = state_34274__$1;
(statearr_34294_35221[(2)] = null);

(statearr_34294_35221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (3))){
var inst_34272 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34274__$1,inst_34272);
} else {
if((state_val_34275 === (12))){
var inst_34260 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34295_35222 = state_34274__$1;
(statearr_34295_35222[(2)] = inst_34260);

(statearr_34295_35222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (2))){
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34274__$1,(4),in$);
} else {
if((state_val_34275 === (23))){
var inst_34268 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34296_35223 = state_34274__$1;
(statearr_34296_35223[(2)] = inst_34268);

(statearr_34296_35223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (19))){
var inst_34255 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34297_35224 = state_34274__$1;
(statearr_34297_35224[(2)] = inst_34255);

(statearr_34297_35224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (11))){
var inst_34240 = (state_34274[(7)]);
var inst_34226 = (state_34274[(11)]);
var inst_34240__$1 = cljs.core.seq(inst_34226);
var state_34274__$1 = (function (){var statearr_34298 = state_34274;
(statearr_34298[(7)] = inst_34240__$1);

return statearr_34298;
})();
if(inst_34240__$1){
var statearr_34299_35225 = state_34274__$1;
(statearr_34299_35225[(1)] = (14));

} else {
var statearr_34300_35226 = state_34274__$1;
(statearr_34300_35226[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (9))){
var inst_34262 = (state_34274[(2)]);
var inst_34263 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34274__$1 = (function (){var statearr_34301 = state_34274;
(statearr_34301[(15)] = inst_34262);

return statearr_34301;
})();
if(cljs.core.truth_(inst_34263)){
var statearr_34302_35231 = state_34274__$1;
(statearr_34302_35231[(1)] = (21));

} else {
var statearr_34303_35233 = state_34274__$1;
(statearr_34303_35233[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (5))){
var inst_34218 = cljs.core.async.close_BANG_(out);
var state_34274__$1 = state_34274;
var statearr_34304_35239 = state_34274__$1;
(statearr_34304_35239[(2)] = inst_34218);

(statearr_34304_35239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (14))){
var inst_34240 = (state_34274[(7)]);
var inst_34242 = cljs.core.chunked_seq_QMARK_(inst_34240);
var state_34274__$1 = state_34274;
if(inst_34242){
var statearr_34305_35245 = state_34274__$1;
(statearr_34305_35245[(1)] = (17));

} else {
var statearr_34306_35250 = state_34274__$1;
(statearr_34306_35250[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (16))){
var inst_34258 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34307_35253 = state_34274__$1;
(statearr_34307_35253[(2)] = inst_34258);

(statearr_34307_35253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (10))){
var inst_34227 = (state_34274[(8)]);
var inst_34229 = (state_34274[(9)]);
var inst_34234 = cljs.core._nth(inst_34227,inst_34229);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34274__$1,(13),out,inst_34234);
} else {
if((state_val_34275 === (18))){
var inst_34240 = (state_34274[(7)]);
var inst_34249 = cljs.core.first(inst_34240);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34274__$1,(20),out,inst_34249);
} else {
if((state_val_34275 === (8))){
var inst_34229 = (state_34274[(9)]);
var inst_34228 = (state_34274[(12)]);
var inst_34231 = (inst_34229 < inst_34228);
var inst_34232 = inst_34231;
var state_34274__$1 = state_34274;
if(cljs.core.truth_(inst_34232)){
var statearr_34308_35314 = state_34274__$1;
(statearr_34308_35314[(1)] = (10));

} else {
var statearr_34309_35315 = state_34274__$1;
(statearr_34309_35315[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32709__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32709__auto____0 = (function (){
var statearr_34310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34310[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32709__auto__);

(statearr_34310[(1)] = (1));

return statearr_34310;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32709__auto____1 = (function (state_34274){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_34274);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e34311){var ex__32712__auto__ = e34311;
var statearr_34312_35328 = state_34274;
(statearr_34312_35328[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_34274[(4)]))){
var statearr_34313_35330 = state_34274;
(statearr_34313_35330[(1)] = cljs.core.first((state_34274[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35331 = state_34274;
state_34274 = G__35331;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32709__auto__ = function(state_34274){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32709__auto____1.call(this,state_34274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32709__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32709__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_34314 = f__32763__auto__();
(statearr_34314[(6)] = c__32762__auto__);

return statearr_34314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));

return c__32762__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34316 = arguments.length;
switch (G__34316) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34318 = arguments.length;
switch (G__34318) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34320 = arguments.length;
switch (G__34320) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32762__auto___35337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_34344){
var state_val_34345 = (state_34344[(1)]);
if((state_val_34345 === (7))){
var inst_34339 = (state_34344[(2)]);
var state_34344__$1 = state_34344;
var statearr_34346_35340 = state_34344__$1;
(statearr_34346_35340[(2)] = inst_34339);

(statearr_34346_35340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (1))){
var inst_34321 = null;
var state_34344__$1 = (function (){var statearr_34347 = state_34344;
(statearr_34347[(7)] = inst_34321);

return statearr_34347;
})();
var statearr_34348_35342 = state_34344__$1;
(statearr_34348_35342[(2)] = null);

(statearr_34348_35342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (4))){
var inst_34324 = (state_34344[(8)]);
var inst_34324__$1 = (state_34344[(2)]);
var inst_34325 = (inst_34324__$1 == null);
var inst_34326 = cljs.core.not(inst_34325);
var state_34344__$1 = (function (){var statearr_34349 = state_34344;
(statearr_34349[(8)] = inst_34324__$1);

return statearr_34349;
})();
if(inst_34326){
var statearr_34350_35352 = state_34344__$1;
(statearr_34350_35352[(1)] = (5));

} else {
var statearr_34351_35354 = state_34344__$1;
(statearr_34351_35354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (6))){
var state_34344__$1 = state_34344;
var statearr_34352_35361 = state_34344__$1;
(statearr_34352_35361[(2)] = null);

(statearr_34352_35361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (3))){
var inst_34341 = (state_34344[(2)]);
var inst_34342 = cljs.core.async.close_BANG_(out);
var state_34344__$1 = (function (){var statearr_34353 = state_34344;
(statearr_34353[(9)] = inst_34341);

return statearr_34353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34344__$1,inst_34342);
} else {
if((state_val_34345 === (2))){
var state_34344__$1 = state_34344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34344__$1,(4),ch);
} else {
if((state_val_34345 === (11))){
var inst_34324 = (state_34344[(8)]);
var inst_34333 = (state_34344[(2)]);
var inst_34321 = inst_34324;
var state_34344__$1 = (function (){var statearr_34354 = state_34344;
(statearr_34354[(7)] = inst_34321);

(statearr_34354[(10)] = inst_34333);

return statearr_34354;
})();
var statearr_34355_35375 = state_34344__$1;
(statearr_34355_35375[(2)] = null);

(statearr_34355_35375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (9))){
var inst_34324 = (state_34344[(8)]);
var state_34344__$1 = state_34344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34344__$1,(11),out,inst_34324);
} else {
if((state_val_34345 === (5))){
var inst_34324 = (state_34344[(8)]);
var inst_34321 = (state_34344[(7)]);
var inst_34328 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34324,inst_34321);
var state_34344__$1 = state_34344;
if(inst_34328){
var statearr_34357_35390 = state_34344__$1;
(statearr_34357_35390[(1)] = (8));

} else {
var statearr_34358_35391 = state_34344__$1;
(statearr_34358_35391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (10))){
var inst_34336 = (state_34344[(2)]);
var state_34344__$1 = state_34344;
var statearr_34359_35396 = state_34344__$1;
(statearr_34359_35396[(2)] = inst_34336);

(statearr_34359_35396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34345 === (8))){
var inst_34321 = (state_34344[(7)]);
var tmp34356 = inst_34321;
var inst_34321__$1 = tmp34356;
var state_34344__$1 = (function (){var statearr_34360 = state_34344;
(statearr_34360[(7)] = inst_34321__$1);

return statearr_34360;
})();
var statearr_34361_35397 = state_34344__$1;
(statearr_34361_35397[(2)] = null);

(statearr_34361_35397[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_34362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34362[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_34362[(1)] = (1));

return statearr_34362;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_34344){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_34344);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e34363){var ex__32712__auto__ = e34363;
var statearr_34364_35399 = state_34344;
(statearr_34364_35399[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_34344[(4)]))){
var statearr_34365_35400 = state_34344;
(statearr_34365_35400[(1)] = cljs.core.first((state_34344[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35401 = state_34344;
state_34344 = G__35401;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_34344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_34344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_34366 = f__32763__auto__();
(statearr_34366[(6)] = c__32762__auto___35337);

return statearr_34366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34368 = arguments.length;
switch (G__34368) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32762__auto___35408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_34406){
var state_val_34407 = (state_34406[(1)]);
if((state_val_34407 === (7))){
var inst_34402 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
var statearr_34408_35413 = state_34406__$1;
(statearr_34408_35413[(2)] = inst_34402);

(statearr_34408_35413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (1))){
var inst_34369 = (new Array(n));
var inst_34370 = inst_34369;
var inst_34371 = (0);
var state_34406__$1 = (function (){var statearr_34409 = state_34406;
(statearr_34409[(7)] = inst_34370);

(statearr_34409[(8)] = inst_34371);

return statearr_34409;
})();
var statearr_34410_35418 = state_34406__$1;
(statearr_34410_35418[(2)] = null);

(statearr_34410_35418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (4))){
var inst_34374 = (state_34406[(9)]);
var inst_34374__$1 = (state_34406[(2)]);
var inst_34375 = (inst_34374__$1 == null);
var inst_34376 = cljs.core.not(inst_34375);
var state_34406__$1 = (function (){var statearr_34411 = state_34406;
(statearr_34411[(9)] = inst_34374__$1);

return statearr_34411;
})();
if(inst_34376){
var statearr_34412_35419 = state_34406__$1;
(statearr_34412_35419[(1)] = (5));

} else {
var statearr_34413_35420 = state_34406__$1;
(statearr_34413_35420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (15))){
var inst_34396 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
var statearr_34414_35422 = state_34406__$1;
(statearr_34414_35422[(2)] = inst_34396);

(statearr_34414_35422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (13))){
var state_34406__$1 = state_34406;
var statearr_34415_35423 = state_34406__$1;
(statearr_34415_35423[(2)] = null);

(statearr_34415_35423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (6))){
var inst_34371 = (state_34406[(8)]);
var inst_34392 = (inst_34371 > (0));
var state_34406__$1 = state_34406;
if(cljs.core.truth_(inst_34392)){
var statearr_34416_35424 = state_34406__$1;
(statearr_34416_35424[(1)] = (12));

} else {
var statearr_34417_35425 = state_34406__$1;
(statearr_34417_35425[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (3))){
var inst_34404 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34406__$1,inst_34404);
} else {
if((state_val_34407 === (12))){
var inst_34370 = (state_34406[(7)]);
var inst_34394 = cljs.core.vec(inst_34370);
var state_34406__$1 = state_34406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34406__$1,(15),out,inst_34394);
} else {
if((state_val_34407 === (2))){
var state_34406__$1 = state_34406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34406__$1,(4),ch);
} else {
if((state_val_34407 === (11))){
var inst_34386 = (state_34406[(2)]);
var inst_34387 = (new Array(n));
var inst_34370 = inst_34387;
var inst_34371 = (0);
var state_34406__$1 = (function (){var statearr_34418 = state_34406;
(statearr_34418[(7)] = inst_34370);

(statearr_34418[(10)] = inst_34386);

(statearr_34418[(8)] = inst_34371);

return statearr_34418;
})();
var statearr_34419_35426 = state_34406__$1;
(statearr_34419_35426[(2)] = null);

(statearr_34419_35426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (9))){
var inst_34370 = (state_34406[(7)]);
var inst_34384 = cljs.core.vec(inst_34370);
var state_34406__$1 = state_34406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34406__$1,(11),out,inst_34384);
} else {
if((state_val_34407 === (5))){
var inst_34374 = (state_34406[(9)]);
var inst_34379 = (state_34406[(11)]);
var inst_34370 = (state_34406[(7)]);
var inst_34371 = (state_34406[(8)]);
var inst_34378 = (inst_34370[inst_34371] = inst_34374);
var inst_34379__$1 = (inst_34371 + (1));
var inst_34380 = (inst_34379__$1 < n);
var state_34406__$1 = (function (){var statearr_34420 = state_34406;
(statearr_34420[(11)] = inst_34379__$1);

(statearr_34420[(12)] = inst_34378);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34380)){
var statearr_34421_35427 = state_34406__$1;
(statearr_34421_35427[(1)] = (8));

} else {
var statearr_34422_35428 = state_34406__$1;
(statearr_34422_35428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (14))){
var inst_34399 = (state_34406[(2)]);
var inst_34400 = cljs.core.async.close_BANG_(out);
var state_34406__$1 = (function (){var statearr_34424 = state_34406;
(statearr_34424[(13)] = inst_34399);

return statearr_34424;
})();
var statearr_34425_35429 = state_34406__$1;
(statearr_34425_35429[(2)] = inst_34400);

(statearr_34425_35429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (10))){
var inst_34390 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
var statearr_34426_35430 = state_34406__$1;
(statearr_34426_35430[(2)] = inst_34390);

(statearr_34426_35430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (8))){
var inst_34379 = (state_34406[(11)]);
var inst_34370 = (state_34406[(7)]);
var tmp34423 = inst_34370;
var inst_34370__$1 = tmp34423;
var inst_34371 = inst_34379;
var state_34406__$1 = (function (){var statearr_34427 = state_34406;
(statearr_34427[(7)] = inst_34370__$1);

(statearr_34427[(8)] = inst_34371);

return statearr_34427;
})();
var statearr_34428_35431 = state_34406__$1;
(statearr_34428_35431[(2)] = null);

(statearr_34428_35431[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_34429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34429[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_34429[(1)] = (1));

return statearr_34429;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_34406){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_34406);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e34430){var ex__32712__auto__ = e34430;
var statearr_34431_35432 = state_34406;
(statearr_34431_35432[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_34406[(4)]))){
var statearr_34432_35433 = state_34406;
(statearr_34432_35433[(1)] = cljs.core.first((state_34406[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35434 = state_34406;
state_34406 = G__35434;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_34406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_34406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_34433 = f__32763__auto__();
(statearr_34433[(6)] = c__32762__auto___35408);

return statearr_34433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34435 = arguments.length;
switch (G__34435) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32762__auto___35437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32763__auto__ = (function (){var switch__32708__auto__ = (function (state_34477){
var state_val_34478 = (state_34477[(1)]);
if((state_val_34478 === (7))){
var inst_34473 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
var statearr_34479_35438 = state_34477__$1;
(statearr_34479_35438[(2)] = inst_34473);

(statearr_34479_35438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (1))){
var inst_34436 = [];
var inst_34437 = inst_34436;
var inst_34438 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34477__$1 = (function (){var statearr_34480 = state_34477;
(statearr_34480[(7)] = inst_34438);

(statearr_34480[(8)] = inst_34437);

return statearr_34480;
})();
var statearr_34481_35439 = state_34477__$1;
(statearr_34481_35439[(2)] = null);

(statearr_34481_35439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (4))){
var inst_34441 = (state_34477[(9)]);
var inst_34441__$1 = (state_34477[(2)]);
var inst_34442 = (inst_34441__$1 == null);
var inst_34443 = cljs.core.not(inst_34442);
var state_34477__$1 = (function (){var statearr_34482 = state_34477;
(statearr_34482[(9)] = inst_34441__$1);

return statearr_34482;
})();
if(inst_34443){
var statearr_34483_35440 = state_34477__$1;
(statearr_34483_35440[(1)] = (5));

} else {
var statearr_34484_35441 = state_34477__$1;
(statearr_34484_35441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (15))){
var inst_34467 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
var statearr_34485_35442 = state_34477__$1;
(statearr_34485_35442[(2)] = inst_34467);

(statearr_34485_35442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (13))){
var state_34477__$1 = state_34477;
var statearr_34486_35443 = state_34477__$1;
(statearr_34486_35443[(2)] = null);

(statearr_34486_35443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (6))){
var inst_34437 = (state_34477[(8)]);
var inst_34462 = inst_34437.length;
var inst_34463 = (inst_34462 > (0));
var state_34477__$1 = state_34477;
if(cljs.core.truth_(inst_34463)){
var statearr_34487_35445 = state_34477__$1;
(statearr_34487_35445[(1)] = (12));

} else {
var statearr_34488_35446 = state_34477__$1;
(statearr_34488_35446[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (3))){
var inst_34475 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34477__$1,inst_34475);
} else {
if((state_val_34478 === (12))){
var inst_34437 = (state_34477[(8)]);
var inst_34465 = cljs.core.vec(inst_34437);
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34477__$1,(15),out,inst_34465);
} else {
if((state_val_34478 === (2))){
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34477__$1,(4),ch);
} else {
if((state_val_34478 === (11))){
var inst_34441 = (state_34477[(9)]);
var inst_34445 = (state_34477[(10)]);
var inst_34455 = (state_34477[(2)]);
var inst_34456 = [];
var inst_34457 = inst_34456.push(inst_34441);
var inst_34437 = inst_34456;
var inst_34438 = inst_34445;
var state_34477__$1 = (function (){var statearr_34489 = state_34477;
(statearr_34489[(11)] = inst_34457);

(statearr_34489[(12)] = inst_34455);

(statearr_34489[(7)] = inst_34438);

(statearr_34489[(8)] = inst_34437);

return statearr_34489;
})();
var statearr_34490_35448 = state_34477__$1;
(statearr_34490_35448[(2)] = null);

(statearr_34490_35448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (9))){
var inst_34437 = (state_34477[(8)]);
var inst_34453 = cljs.core.vec(inst_34437);
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34477__$1,(11),out,inst_34453);
} else {
if((state_val_34478 === (5))){
var inst_34438 = (state_34477[(7)]);
var inst_34441 = (state_34477[(9)]);
var inst_34445 = (state_34477[(10)]);
var inst_34445__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34441) : f.call(null,inst_34441));
var inst_34446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34445__$1,inst_34438);
var inst_34447 = cljs.core.keyword_identical_QMARK_(inst_34438,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34448 = ((inst_34446) || (inst_34447));
var state_34477__$1 = (function (){var statearr_34491 = state_34477;
(statearr_34491[(10)] = inst_34445__$1);

return statearr_34491;
})();
if(cljs.core.truth_(inst_34448)){
var statearr_34492_35451 = state_34477__$1;
(statearr_34492_35451[(1)] = (8));

} else {
var statearr_34493_35452 = state_34477__$1;
(statearr_34493_35452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (14))){
var inst_34470 = (state_34477[(2)]);
var inst_34471 = cljs.core.async.close_BANG_(out);
var state_34477__$1 = (function (){var statearr_34495 = state_34477;
(statearr_34495[(13)] = inst_34470);

return statearr_34495;
})();
var statearr_34496_35453 = state_34477__$1;
(statearr_34496_35453[(2)] = inst_34471);

(statearr_34496_35453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (10))){
var inst_34460 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
var statearr_34497_35454 = state_34477__$1;
(statearr_34497_35454[(2)] = inst_34460);

(statearr_34497_35454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (8))){
var inst_34441 = (state_34477[(9)]);
var inst_34445 = (state_34477[(10)]);
var inst_34437 = (state_34477[(8)]);
var inst_34450 = inst_34437.push(inst_34441);
var tmp34494 = inst_34437;
var inst_34437__$1 = tmp34494;
var inst_34438 = inst_34445;
var state_34477__$1 = (function (){var statearr_34498 = state_34477;
(statearr_34498[(7)] = inst_34438);

(statearr_34498[(14)] = inst_34450);

(statearr_34498[(8)] = inst_34437__$1);

return statearr_34498;
})();
var statearr_34499_35455 = state_34477__$1;
(statearr_34499_35455[(2)] = null);

(statearr_34499_35455[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32709__auto__ = null;
var cljs$core$async$state_machine__32709__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34500[(0)] = cljs$core$async$state_machine__32709__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
});
var cljs$core$async$state_machine__32709__auto____1 = (function (state_34477){
while(true){
var ret_value__32710__auto__ = (function (){try{while(true){
var result__32711__auto__ = switch__32708__auto__(state_34477);
if(cljs.core.keyword_identical_QMARK_(result__32711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32711__auto__;
}
break;
}
}catch (e34501){var ex__32712__auto__ = e34501;
var statearr_34502_35458 = state_34477;
(statearr_34502_35458[(2)] = ex__32712__auto__);


if(cljs.core.seq((state_34477[(4)]))){
var statearr_34503_35459 = state_34477;
(statearr_34503_35459[(1)] = cljs.core.first((state_34477[(4)])));

} else {
throw ex__32712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35461 = state_34477;
state_34477 = G__35461;
continue;
} else {
return ret_value__32710__auto__;
}
break;
}
});
cljs$core$async$state_machine__32709__auto__ = function(state_34477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32709__auto____1.call(this,state_34477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32709__auto____0;
cljs$core$async$state_machine__32709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32709__auto____1;
return cljs$core$async$state_machine__32709__auto__;
})()
})();
var state__32764__auto__ = (function (){var statearr_34504 = f__32763__auto__();
(statearr_34504[(6)] = c__32762__auto___35437);

return statearr_34504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32764__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
