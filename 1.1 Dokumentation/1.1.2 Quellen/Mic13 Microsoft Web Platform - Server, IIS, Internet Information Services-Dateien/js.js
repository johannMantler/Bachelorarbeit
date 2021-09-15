Type.registerNamespace('WebPlatform');
WebPlatform.OffsiteContentService=function() {
WebPlatform.OffsiteContentService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
WebPlatform.OffsiteContentService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return WebPlatform.OffsiteContentService._staticInstance.get_path();},
CommentCreate:function(path,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'CommentCreate',false,{path:path},succeededCallback,failedCallback,userContext); }}
WebPlatform.OffsiteContentService.registerClass('WebPlatform.OffsiteContentService',Sys.Net.WebServiceProxy);
WebPlatform.OffsiteContentService._staticInstance = new WebPlatform.OffsiteContentService();
WebPlatform.OffsiteContentService.set_path = function(value) { WebPlatform.OffsiteContentService._staticInstance.set_path(value); }
WebPlatform.OffsiteContentService.get_path = function() { return WebPlatform.OffsiteContentService._staticInstance.get_path(); }
WebPlatform.OffsiteContentService.set_timeout = function(value) { WebPlatform.OffsiteContentService._staticInstance.set_timeout(value); }
WebPlatform.OffsiteContentService.get_timeout = function() { return WebPlatform.OffsiteContentService._staticInstance.get_timeout(); }
WebPlatform.OffsiteContentService.set_defaultUserContext = function(value) { WebPlatform.OffsiteContentService._staticInstance.set_defaultUserContext(value); }
WebPlatform.OffsiteContentService.get_defaultUserContext = function() { return WebPlatform.OffsiteContentService._staticInstance.get_defaultUserContext(); }
WebPlatform.OffsiteContentService.set_defaultSucceededCallback = function(value) { WebPlatform.OffsiteContentService._staticInstance.set_defaultSucceededCallback(value); }
WebPlatform.OffsiteContentService.get_defaultSucceededCallback = function() { return WebPlatform.OffsiteContentService._staticInstance.get_defaultSucceededCallback(); }
WebPlatform.OffsiteContentService.set_defaultFailedCallback = function(value) { WebPlatform.OffsiteContentService._staticInstance.set_defaultFailedCallback(value); }
WebPlatform.OffsiteContentService.get_defaultFailedCallback = function() { return WebPlatform.OffsiteContentService._staticInstance.get_defaultFailedCallback(); }
WebPlatform.OffsiteContentService.set_enableJsonp = function(value) { WebPlatform.OffsiteContentService._staticInstance.set_enableJsonp(value); }
WebPlatform.OffsiteContentService.get_enableJsonp = function() { return WebPlatform.OffsiteContentService._staticInstance.get_enableJsonp(); }
WebPlatform.OffsiteContentService.set_jsonpCallbackParameter = function(value) { WebPlatform.OffsiteContentService._staticInstance.set_jsonpCallbackParameter(value); }
WebPlatform.OffsiteContentService.get_jsonpCallbackParameter = function() { return WebPlatform.OffsiteContentService._staticInstance.get_jsonpCallbackParameter(); }
WebPlatform.OffsiteContentService.set_path("/web/services/offsitecontent.asmx");
WebPlatform.OffsiteContentService.CommentCreate= function(path,onSuccess,onFailed,userContext) {WebPlatform.OffsiteContentService._staticInstance.CommentCreate(path,onSuccess,onFailed,userContext); }
