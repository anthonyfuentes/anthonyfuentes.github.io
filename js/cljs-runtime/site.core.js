goog.provide('site.core');
site.core.debug_QMARK_ = goog.DEBUG;
site.core.dev_setup = (function site$core$dev_setup(){
if(site.core.debug_QMARK_){
devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
site.core.start = (function site$core$start(){
return site.app.init_BANG_();
});
site.core.main_BANG_ = (function site$core$main_BANG_(){
site.core.dev_setup();

return document.addEventListener("DOMContentLoaded",site.app.init_BANG_);
});

//# sourceMappingURL=site.core.js.map
