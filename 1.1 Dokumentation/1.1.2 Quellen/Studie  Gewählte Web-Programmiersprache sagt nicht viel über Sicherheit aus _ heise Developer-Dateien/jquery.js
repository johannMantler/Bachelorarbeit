/*
 * jquery.socialshareprivacy.js, jquery.floodguard.js, tracking-reload.js, heise-modal.js, heise-image-scale.js, heise-tools.js, heise-collection.js, heise-fullscreen.js, heise-image-preloader.js, heise-image.js, heise-gallery.js, jquery.heise-gallery.js 
 * 12.09.2014
 * Copyright (c) 2014 Heise Zeitschriften Verlag 
 */

!function(a){"use strict";function b(a,b){var c=decodeURIComponent(a);if(c.length<=b)return a;var d=c.substring(0,b-1).lastIndexOf(" ");return c=encodeURIComponent(c.substring(0,d))+"…"}function c(b){var c=a('meta[name="'+b+'"]').attr("content");return c||""}function d(){var b=c("DC.title"),d=c("DC.creator");return b.length>0&&d.length>0?b+=" - "+d:b=a("title").text(),encodeURIComponent(b)}function e(){var b=document.location.href,c=a("link[rel=canonical]").attr("href");return c&&c.length>0&&(c.indexOf("http")<0&&(c=document.location.protocol+"//"+document.location.host+c),b=c),b}function f(a,b,c,d,e){var f=new Date;f.setTime(f.getTime()+24*c*60*60*1e3),document.cookie=a+"="+b+"; expires="+f.toUTCString()+"; path="+d+"; domain="+e}function g(a,b,c,d){var e=new Date;e.setTime(e.getTime()-100),document.cookie=a+"="+b+"; expires="+e.toUTCString()+"; path="+c+"; domain="+d}a.fn.socialSharePrivacy=function(c){function h(){var b=a.Deferred();return a.getJSON(j.lang_path+j.language+".lang",function(a){o=a,b.resolve()}).fail(function(a){"undefined"!=typeof console&&console.log("Error "+a.status+" while loading the language file ("+j.lang_path+j.language+".lang)"),b.reject()}),b.promise()}var i={services:{facebook:{status:"on",dummy_img:"socialshareprivacy/images/dummy_facebook.png",perma_option:"on",referrer_track:"",action:"recommend",layout:"button_count",sharer:{status:"off",dummy_img:"socialshareprivacy/images/dummy_facebook_share_de.png",img:"socialshareprivacy/images/dummy_facebook_share_active_de.png"}},twitter:{status:"on",dummy_img:"socialshareprivacy/images/dummy_twitter.png",perma_option:"on",referrer_track:"",tweet_text:d,count:"horizontal"},gplus:{status:"on",dummy_img:"socialshareprivacy/images/dummy_gplus.png",perma_option:"on",referrer_track:"",size:"medium"}},info_link:"http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html",cookie_path:"/",cookie_domain:document.location.host,cookie_expires:"365",css_path:"socialshareprivacy/socialshareprivacy.css",uri:e,language:"de",lang_path:"socialshareprivacy/lang/",skin:"light",alignment:"horizontal",switch_alignment:"left",perma_orientation:"down"},j=a.extend(!0,i,c),k="on"===j.services.facebook.status,l="on"===j.services.facebook.sharer.status,m="on"===j.services.twitter.status,n="on"===j.services.gplus.status;if(k||m||n){j.css_path.length>0&&"1"!=a(window).data("socialshareprivacy_css")&&(document.createStyleSheet?document.createStyleSheet(j.css_path):a("head").append('<link rel="stylesheet" type="text/css" href="'+j.css_path+'" />'),a(window).data("socialshareprivacy_css","1"));var o;return this.each(function(){var c=this;a.when(h()).then(function(){a(c).prepend('<ul class="social_share_privacy_area clearfix"></ul>');var d=a(".social_share_privacy_area",c);"dark"==j.skin&&a(d).addClass("skin-dark"),"vertical"==j.alignment&&(a(d).addClass("vertical"),"right"==j.switch_alignment&&(k&&"box_count"==j.services.facebook.layout||!k)&&(m&&"vertical"==j.services.twitter.count||!m)&&(n&&"tall"==j.services.gplus.size||!n)&&a(d).addClass("switch_right"));var e=j.uri;if("function"==typeof e&&(e=e(d)),k){var h,i,p="box_count"==j.services.facebook.layout?"61":"21",q="box_count"==j.services.facebook.layout?"90":"130",r=encodeURIComponent(e+j.services.facebook.referrer_track);l?(h='<img src="'+j.services.facebook.sharer.dummy_img+'" alt="Facebook &quot;Share&quot;-Dummy" class="fb_like_privacy_dummy" />',i='<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u='+r+"', 'facebook-share-dialog', 'width=626,height=436'); return false;\"><img src=\""+j.services.facebook.sharer.img+'" alt="" /></a>'):(h='<img src="'+j.services.facebook.dummy_img+'" alt="Facebook &quot;Like&quot;-Dummy" class="fb_like_privacy_dummy" />',i='<iframe src="//www.facebook.com/plugins/like.php?locale='+o.services.facebook.language+"&amp;href="+r+"&amp;width="+q+"&amp;layout="+j.services.facebook.layout+"&amp;action="+j.services.facebook.action+"&amp;show_faces=false&amp;share=false&amp;height="+p+"&amp;colorscheme="+j.skin+'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:'+q+"px; height:"+p+'px;" allowTransparency="true"></iframe>'),d.append('<li class="facebook help_info clearfix"><span class="info">'+o.services.facebook.txt_info+'</span><a href="#" class="switch off">'+o.services.facebook.txt_fb_off+'</a><div class="fb_like dummy_btn">'+h+"</div></li>");var s=a("li.facebook",d);a(d).on("click","li.facebook div.fb_like img.fb_like_privacy_dummy,li.facebook .switch",function(a){a.preventDefault(),s.find(".switch").hasClass("off")?(s.addClass("info_off"),s.find(".switch").addClass("on").removeClass("off").html(o.services.facebook.txt_fb_on),s.find("img.fb_like_privacy_dummy").replaceWith(i)):(s.removeClass("info_off"),s.find(".switch").addClass("off").removeClass("on").html(o.services.facebook.txt_fb_off),s.find(".fb_like").html(h))})}if(m){var t=j.services.twitter.tweet_text;"function"==typeof t&&(t=t()),t=b(t,"120");var u="horizontal"==j.services.twitter.count?"25":"62",v="horizontal"==j.services.twitter.count?"130":"83",w=encodeURIComponent(e+j.services.twitter.referrer_track),x=encodeURIComponent(e),y='<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/tweet_button.html?url='+w+"&amp;counturl="+x+"&amp;text="+t+"&amp;count="+j.services.twitter.count+"&amp;lang="+o.services.twitter.language+'&amp;dnt=true" style="width:'+v+"px; height:"+u+'px;"></iframe>',z='<img src="'+j.services.twitter.dummy_img+'" alt="&quot;Tweet this&quot;-Dummy" class="tweet_this_dummy" />';d.append('<li class="twitter help_info clearfix"><span class="info">'+o.services.twitter.txt_info+'</span><a href="#" class="switch off">'+o.services.twitter.txt_twitter_off+'</a><div class="tweet dummy_btn">'+z+"</div></li>");var A=a("li.twitter",d);a(d).on("click","li.twitter div.tweet img,li.twitter .switch",function(a){a.preventDefault(),A.find(".switch").hasClass("off")?(A.addClass("info_off"),A.find(".switch").addClass("on").removeClass("off").html(o.services.twitter.txt_twitter_on),A.find("img.tweet_this_dummy").replaceWith(y)):(A.removeClass("info_off"),A.find(".switch").addClass("off").removeClass("on").html(o.services.twitter.txt_twitter_off),A.find(".tweet").html(z))})}if(n){var B=e+j.services.gplus.referrer_track,C='<div class="g-plusone" data-size="'+j.services.gplus.size+'" data-href="'+B+'"></div><script type="text/javascript">window.___gcfg = {lang: "'+o.services.gplus.language+'"}; (function() { var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/platform.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s); })(); </script>',D='<img src="'+j.services.gplus.dummy_img+'" alt="&quot;Google+1&quot;-Dummy" class="gplus_one_dummy" />';d.append('<li class="gplus help_info clearfix"><span class="info">'+o.services.gplus.txt_info+'</span><a href="#" class="switch off">'+o.services.gplus.txt_gplus_off+'</a><div class="gplusone dummy_btn">'+D+"</div></li>");var E=a("li.gplus",d);a(d).on("click","li.gplus div.gplusone img,li.gplus .switch",function(a){a.preventDefault(),E.find(".switch").hasClass("off")?(E.addClass("info_off"),E.find(".switch").addClass("on").removeClass("off").html(o.services.gplus.txt_gplus_on),E.find("img.gplus_one_dummy").replaceWith(C)):(E.removeClass("info_off"),E.find(".switch").addClass("off").removeClass("on").html(o.services.gplus.txt_gplus_off),E.find(".gplusone").html(D))})}d.append('<li class="settings_info '+j.perma_orientation+'"><div class="settings_info_menu off perma_option_off"><a href="'+j.info_link+'"><span class="help_info icon"><span class="info">'+o.txt_help+"</span></span></a></div></li>"),a(d).on("mouseenter",".help_info:not(.info_off)",function(){var b=a(this),c=window.setTimeout(function(){a(b).addClass("display")},500);a(this).data("timeout_id",c)}),a(d).on("mouseleave",".help_info",function(){var b=a(this).data("timeout_id");window.clearTimeout(b),a(this).hasClass("display")&&a(this).removeClass("display")});var F="on"===j.services.facebook.perma_option,G="on"===j.services.twitter.perma_option,H="on"===j.services.gplus.perma_option;if(k&&F||m&&G||n&&H){for(var I=document.cookie.split(";"),J="{",K=0;K<I.length;K+=1){var L=I[K].split("=");L[0]=a.trim(L[0].replace(/"/g,"")),L[1]=a.trim(L[1].replace(/"/g,"")),J+='"'+L[0]+'":"'+L[1]+'"',K<I.length-1&&(J+=",")}J+="}",J=jQuery.parseJSON(J);var M=a("li.settings_info",d);M.find(".settings_info_menu").removeClass("perma_option_off"),M.find(".settings_info_menu").append('<a href="#" class="settings">'+o.settings+"</a><form><fieldset><legend>"+o.settings_perma+"</legend></fieldset></form>");var N="r"+Math.floor(101*Math.random()),O=' checked="checked"';if(k&&F){var P="perma_on"===J.socialSharePrivacy_facebook?O:"";M.find("form fieldset").append('<input type="checkbox" name="perma_status_facebook" id="'+N+'_perma_status_facebook"'+P+' /><label for="'+N+'_perma_status_facebook">'+o.services.facebook.perma_display_name+"</label>")}if(m&&G){var Q="perma_on"===J.socialSharePrivacy_twitter?O:"";M.find("form fieldset").append('<input type="checkbox" name="perma_status_twitter" id="'+N+'_perma_status_twitter"'+Q+' /><label for="'+N+'_perma_status_twitter">'+o.services.twitter.perma_display_name+"</label>")}if(n&&H){var R="perma_on"===J.socialSharePrivacy_gplus?O:"";M.find("form fieldset").append('<input type="checkbox" name="perma_status_gplus" id="'+N+'_perma_status_gplus"'+R+' /><label for="'+N+'_perma_status_gplus">'+o.services.gplus.perma_display_name+"</label>")}a(d).on("click","li.settings_info .settings",function(b){b.preventDefault(),"on"==a(this).data("keyb")?(a("li.settings_info",d).trigger("mouseleave"),a(this).data("keyb","off")):(a("li.settings_info .settings",d).trigger("mouseenter"),a(this).data("keyb","on"))}),a(d).on("mouseenter","li.settings_info .settings",function(){var b=window.setTimeout(function(){M.find(".settings_info_menu").removeClass("off").addClass("on")},500);a(this).data("timeout_id",b)}),a(d).on("mouseleave","li.settings_info",function(){var b=a(this).data("timeout_id");window.clearTimeout(b),M.find(".settings_info_menu").removeClass("on").addClass("off")}),a(d).on("click","li.settings_info fieldset input",function(b){var c=b.target.id,e=c.substr(c.lastIndexOf("_")+1,c.length),h="socialSharePrivacy_"+e;a("#"+b.target.id+":checked").length?(f(h,"perma_on",j.cookie_expires,j.cookie_path,j.cookie_domain),a("form fieldset label[for="+c+"]",d).addClass("checked")):(g(h,"perma_on",j.cookie_path,j.cookie_domain),a("form fieldset label[for="+c+"]",d).removeClass("checked"))}),k&&F&&"perma_on"===J.socialSharePrivacy_facebook&&a("li.facebook .switch",d).click(),m&&G&&"perma_on"===J.socialSharePrivacy_twitter&&a("li.twitter .switch",d).click(),n&&H&&"perma_on"===J.socialSharePrivacy_gplus&&a("li.gplus .switch",d).click()}})})}}}(jQuery),function(a){"use strict";var b=function(a,b){if(this.xhr=null,this.target=a,this.options=b,this.storage={},null===this.options.event)throw"Unknown event!"};b.prototype={_currentEpoch:function(){return Math.round((new Date).getTime()/1e3)},_set:function(a,b,c){this.storage[a]={value:b,expires:c}},_get:function(a){return this.storage.hasOwnProperty(a)?this.storage[a].value:[]},hasRemainingActions:function(){var b=this,c=this.options.event,d=this._get(c),e=this._currentEpoch();return d=a.grep(d,function(a){return e-a<=b.options.interval}),d.length>=this.options.countPerInterval?!1:(d.push(e),this._set(c,d,this.options.interval),!0)}},jQuery.fn.floodguard=function(c){return c=a.extend({},jQuery.fn.floodguard.defaults,c),this.each(function(){var d=a(this);if(!d.data("floodguard")){var e=new b(a(this),c);d.data("floodguard",e)}})},jQuery.fn.floodguard.defaults={event:null,interval:60,countPerInterval:10}}(jQuery),function(a,b,c){"use strict";var d,e=function(b){"undefined"!=typeof a.window.wt&&(this.wt=a.window.wt),this.options={floodguard:{event:"tracking-reload",interval:60,countPerInterval:60}},c.extend(!0,this.options,b),c("html").floodguard(this.options.floodguard)};e.prototype.setWebtrekk=function(a){this.wt=a},e.prototype._replaceRandomParam=function(a,b){var c=new RegExp("(\\?|&)"+b+"=\\d+\\.\\d+"),d=a.replace(c,"$1"+b+"="+1e5*Math.random());return a!=d?d:a.match(/\?/)?a+"&"+b+"="+1e5*Math.random():a+"?"+b+"="+1e5*Math.random()},e.prototype.reloadIvw=function(){var a=document.getElementById("ivw_pixel");a&&(a.src=this._replaceRandomParam(a.src,"d"))},e.prototype.reloadSzmng=function(){var b=this;"undefined"!=typeof iom&&"undefined"!=typeof iam_data&&a.window.iom.c(a.window.iam_data,1),c('img[src*="//de.ioam.de/"], img[src^="/avw-bin/ivw/CP/shenoise"]').each(function(){c(this).attr("src",b._replaceRandomParam(c(this).attr("src"),"d"))})},e.prototype.reloadIntern=function(a){var b,d=c("#ivw_pixel_intern");a=a||{},0!==d.length&&("undefined"==typeof d.data("orig-src")&&d.data("orig-src",d.attr("src")),b=this._replaceRandomParam(d.data("orig-src"),"d"),"undefined"!=typeof a.num&&(b=d.data("orig-src").replace(/(.*?)(\?[^/]+)?$/,"$1/"+a.num+"$2")),d.attr("src",b))},e.prototype.reloadAvw=function(){var a=document.getElementById("avw_pixel_intern");a&&(a.src=this._replaceRandomParam(a.src,"d"))},e.prototype.reloadWebtrekk=function(b){"undefined"!=typeof this.wt?this.wt.sendinfo(b):"undefined"!=typeof a.window.wt&&(this.wt=a.window.wt,this.wt.sendinfo(b))},e.prototype.reloadAll=function(a){var b=this;return a=a||{},"function"==typeof a&&(a=c.proxy(a,this)()),c("html").data("floodguard").hasRemainingActions()?void c.each(["Avw","Ivw","Szmng","Intern","Webtrekk"],function(){var d="reload"+this,e=b[d];c.proxy(e,b,a[d])()}):void console.error("denied")},b.TrackingReload=function(a){return d?d:d=new e(a)}}(this,this.Heise=this.Heise||{},jQuery),function(a,b,c){"use strict";var d=function(a){var b=this;if(this.options=c.extend({},this.defaults,a),this._callbacks={},c.each(["show","hide"],function(a,d){var e=c.Callbacks(d+".heise-modal");b._callbacks[d]=e}),this.$modal=c("."+this.options.className),this.$stage=c('<div class="stage">'),0===this.$modal.length&&(this.$modal=c('<section class="heise-modal">'),this.$modal.appendTo(this.options.parent)),this.options.styleClass&&this.$modal.addClass(this.options.styleClass),this._isActive=!1,this.installEventListeners(),this.options.transparent){var d=c('<div class="wrapper-transparent">');d.appendTo(this.$modal),d.click(c.proxy(this.hide,this))}if(this.$stage.appendTo(this.$modal),this.options.showCloseButton){var e=c('<button data-role="close">&times;</button>');e.appendTo(this.$stage),e.on("click",function(a){a.preventDefault(),b.hide()})}};d.prototype.defaults={parent:"body",showCloseButton:!0,styleClass:""},d.prototype.getCloseButton=function(){return this.$modal.find("[data-role=close]")},d.prototype.onShow=function(a){this._callbacks.show.add(a)},d.prototype.onHide=function(a){this._callbacks.hide.add(a)},d.prototype.isActive=function(){return this._isActive},d.prototype.installEventListeners=function(){var b=this;c(a).keydown(function(a){27===a.keyCode&&b.hide()})},d.prototype.toggle=function(){this.isActive()?this.hide():this.show()},d.prototype.show=function(a){this.isActive()||(c("html,body").css({overflow:"hidden"}).on("touchmove",function(a){a.preventDefault()}),this.$modal.show(),this._isActive=!0,this._callbacks.show.fire(this.$stage),"function"==typeof a&&a(this.$stage))},d.prototype.hide=function(){c("html,body").css({overflow:""}).off("touchmove"),this.$modal.hide(),this._isActive=!1,this._callbacks.hide.fire()},b.Modal=d}(this,this.Heise=this.Heise||{},jQuery),function(a,b,c){"use strict";var d=function(a){this.options=c.extend({},this.defaults,a),this.options.autoResizeUrls&&(this.registerResizeListener(),this._updateImageSrc())};d.prototype.defaults={varnishify:!0,baseUrl:"%HOST%/scale/geometry/%GEOMETRY%/q%QUALITY%%PATH%",quality:75,geometry:200,autoResizeUrls:!1},d.prototype.updateImage=function(a){var b=this._parseScaleUrl(c(a).attr("src"));if(null!==b){var d=this.getUrl(b.path,{geometry:this._getOptimalGeometry(a)});c(a).attr("src")!==d&&c(a).attr("src",d)}},d.prototype._updateImageSrc=function(){var a=this;c('img[src*="/scale/geometry/"]:visible').each(function(){a.updateImage(this)})},d.prototype._getOptimalGeometry=function(a){var b=c(a),d=b.width()/b.outerHeight(!0),e=Number(b.parent().outerWidth(!0).toFixed(0)),f=Number((e/d).toFixed(0)),g=e+"x"+f;return console.log('"optimal" computed geometry: '+g),g},d.prototype.registerResizeListener=function(){var b,d=this;c(a).resize(function(){a.clearTimeout(b),b=a.setTimeout(c.proxy(d._updateImageSrc,d),500)})},d.prototype._parseScaleUrl=function(a){var b=a.match(/(.*)\/scale\/geometry\/((\d+)(x(\d+))?)\/q(\d+)(.*)/);return null===b?null:{host:b[1],geometry:b[2],quality:b[6],path:b[7]}},d.prototype._parseGeometry=function(a){return a+="",a.match(/^\d+$/)?[a,a]:a.split("x")},d.prototype._getBaseHost=function(){var a=null!==window.location.hostname.match(/(m|www(test)?)\.heise\.de/);return this.options.varnishify&&a?"http://m.f.ix.de":""},d.prototype.getUrl=function(a,b){a=a.replace(/^http:\/\/www.(heise|techstage).de/,""),b=b||{};var c=b.geometry||this.options.geometry,d=b.quality||this.options.quality;return this.options.baseUrl.replace("%HOST%",this._getBaseHost()).replace("%GEOMETRY%",this._parseGeometry(c).join("x")).replace("%QUALITY%",d).replace("%PATH%",a)},b.ImageScale=d}(this,this.Heise=this.Heise||{},jQuery),function(a,b){"use strict";var c={ready:function(a){document.onreadystatechange=function(){"complete"===document.readyState&&a()}},getScript:function(a,b){var c=document.createElement("script");c.src=a;var d=document.querySelector("head"),e=!1;c.onload=c.onreadystatechange=function(){e||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(e=!0,b(),c.onload=c.onreadystatechange=null,d.removeChild(c))},d.appendChild(c)},each:function(a,b){[].forEach.call(a,b)},map:function(a,b){var c=[];return a.forEach(function(a){c.push(b(a))}),c},getQueryParams:function(a){a=a||window.location.toString();var c=a.match(/\?(.+)$/);if(null===c||0===c.length)return{};var d={};return b.Tools.each(c[1].substring(0).split(/[\&;]/),function(a){var b=a.split("=");d[b[0]]=decodeURIComponent(b[1]).replace("+"," ")}),d},setQueryParams:function(a,c){c=c||window.location.toString();var d=c.match(/([^?]*)(\?.+)?$/),e=d[1],f=b.Tools.getQueryParams(d[2]);for(var g in a)f[g]=a[g];return e+"?"+b.Tools.map(Object.getOwnPropertyNames(f),function(a){return a+"="+encodeURIComponent(f[a])}).join("&")},setQueryParam:function(a,b,d){var e={};return e[a]=b,c.setQueryParams(e,d)},msIEVersion:function(){var a=window.navigator.userAgent,b=a.indexOf("MSIE "),c=a.indexOf("Trident/");if(b>0)return parseInt(a.substring(b+5,a.indexOf(".",b)),10);if(c>0){var d=a.indexOf("rv:");return parseInt(a.substring(d+3,a.indexOf(".",d)),10)}return!1},browser:function(){var b=a.navigator.userAgent.toLowerCase(),c=/(chrome)[ \/]([\w.]+)/.exec(b)||/apple(webkit).* version\/([0-9]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||b.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[],d={browser:c[1]||"",version:c[2]||"0"},e={};return d.browser&&(e[d.browser]=!0,e.version=d.version),e.chrome?e.webkit=!0:e.webkit&&(e.safari=!0),e}};b.Tools=c}(this,this.Heise=this.Heise||{}),function(a,b,c){"use strict";var d=function(a,b){var d=this;a=a||[],this.options=c.extend({},this.defaults,b),this._callbacks={},c.each(["moved","added"],function(a,b){var e=c.Callbacks(b+".heise-iterator");d._callbacks[b]=e,e.add(function(a){d.d(b,a)})}),this._items=a};d.prototype={_cursor:null,_items:[],defaults:{debug:!1},d:function(){this.options.debug&&console.log.apply(console,Array.prototype.slice.call(arguments,0))},onMove:function(a){this._callbacks.moved.add(a)},each:function(a){return c.each(this._items,a)},addItems:function(a){this._items.push.apply(this._items,a),this._callbacks.added.fire({added:a,items:this.getItems()})},getCursor:function(){return this._cursor},getItems:function(){return this._items},getItem:function(a){return this.getItems()[a]},getCurrentItem:function(){return this.getItem(this._cursor)},getItemCount:function(){return this.getItems().length},moveFirst:function(){return this.move(0)},moveLast:function(){return this.move(this.getItemCount()-1)},moveNext:function(){return this.getCursor()===this.getItemCount()-1?this.moveFirst():this.move(this.getCursor()+1)},movePrev:function(){return 0===this.getCursor()?this.moveLast():this.move(this.getCursor()-1)},move:function(a){if(0>a||a>=this.getItemCount())throw"Invalid index: "+a;if(this._cursor!==a)return this._cursor=a,this._callbacks.moved.fire({index:a,item:this.getItem(a)}),this.getCurrentItem()}},b.Collection=d}(this,this.Heise=this.Heise||{},jQuery),function(a,b,c){"use strict";var d=a.document,e=function(a){var b=this;this.options=c.extend({},this.defaults,a),this._callbacks={},c.each(["changed","requested","exited"],function(a,d){var e=c.Callbacks(d+".heise-fullscreen");b._callbacks[d]=e}),c(d).on("webkitfullscreenchange MSFullscreenChange mozfullscreenchange fullscreenchange",function(){var a=b.isActive();b._fire("changed",a?"request":"exit"),b._fire(a?"requested":"exited")})};e.prototype={defaults:{},_fire:function(a,b){this._callbacks[a].fire(b)},_add:function(a,b){this._callbacks[a].add(b)},onChange:function(a){this._add("changed",a)},onExit:function(a){this._add("exited",a)},onRequest:function(a){this._add("requested",a)},request:function(){var a=d.documentElement;a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)},exit:function(){d.exitFullscreen?d.exitFullscreen():d.msExitFullscreen?d.msExitFullscreen():d.mozCancelFullScreen?d.mozCancelFullScreen():d.webkitExitFullscreen&&d.webkitExitFullscreen()},element:function(){return d.fullscreenElement||d.mozFullScreenElement||d.webkitFullscreenElement||d.msFullscreenElement},enabled:function(){return d.fullscreenEnabled||d.mozFullScreenEnabled||d.webkitFullscreenEnabled||d.msFullscreenEnabled},isActive:function(){return"undefined"!=typeof this.element()},toggle:function(){this.isActive()?this.exit():this.request()}},b.Fullscreen=e}(this,this.Heise=this.Heise||{},jQuery),function(a,b,c){"use strict";b.ImagePreloader={},b.ImagePreloader.createCache=function(a){var b={};return function(d,e){return b[d]||(b[d]=c.Deferred(function(b){a(b,d)}).promise()),b[d].done(e)}},b.ImagePreloader.loadImage=b.ImagePreloader.createCache(function(a,b){var c=new Image,d=function(){c.onload=c.onerror=null};a.then(d,d),c.onload=function(){a.resolve(b)},c.onerror=a.reject,c.src=b})}(this,this.Heise=this.Heise||{},jQuery),function(a,b,c){"use strict";var d=function(a,d){this.options=c.extend({},this.defaults,d),this.origSrc=a,this.image=new Image,this.isLoaded=!1,this._scale=new b.ImageScale({autoResizeUrls:!1}),this._preload(a)};d.prototype={defaults:{},_preload:function(a){var d=this,e=c(this.options.container),f=e.width()||this.options.boxWidth,g=e.height()||this.options.boxHeight;if("undefined"!=typeof f){var h=this._scale.getUrl(a,{geometry:f+"x"+g});b.ImagePreloader.loadImage(h).done(function(){d.image.src=h})}},refresh:function(){this._preload(this.origSrc)},clone:function(a,d){return new b.Image(this.origSrc,c.extend({},this.options,{container:a,isActiveFn:d}))},get:function(){return this.image},getSubtitle:function(){return this.options.subtitle}},b.Image=d}(this,this.Heise=this.Heise||{},jQuery),function(a,b,c){"use strict";var d=function(a,e){var f=this;this.element=a,this.options=c.extend({},this.defaults,e,c(a).data()),this._images=new b.Collection,this.getImages().onMove(function(a){var b=a.item.get(),c=f.$gallery().find(".gallery-inner figure");0===c.find("img").size()?c.append(b):c.find("img").replaceWith(b),f._updateInlineElements({subtitle:a.item.options.title,caption:a.item.options.subtitle,copyright:a.item.options.copyright})}),d.count++,this.galleryIndex=d.count,this._updateInlineElements({}),this.$gallery().addClass("color-schema-"+this.options.inlineColorSchema),this.$gallery().addClass(this.options.inlineLayout);var g=Math.ceil(this.$gallery().width()/this.getInlineRatio());g>500&&(g=500),this.$gallery().find(".gallery-inner figure").css({height:g}),c.ajax(this.options.dataUrl,{crossdomain:!0,dataType:this.options.datatype}).done(function(a){f.d("json data",a),f._imageDataReceived(a),f._images.move(f.options.imageCursor),f._callbacks.initialized.fire(f)}),this._setupCallbacks(),this._setupTracking(),this._setupHistory(),this._setupLegacyFixes()};d.count=0,d.activeIdx=1,d.prototype.defaults={imageCursor:0,inlineColorSchema:"dark",datatype:"jsonp",debug:!1,fullscreenInactivityTimeout:3e3,jsonExtractTitle:function(a){return a.hasOwnProperty("title")?a.title:null},jsonExtractImages:function(a){var d=this.$gallery().find(".gallery-inner");return a.hasOwnProperty("images")?c.map(a.images,function(a){return new b.Image(a.src,{title:a.title,subtitle:a.subtitle,copyright:a.copyright,container:d})}):[]},socialOpts:{services:{facebook:{sharer:{img:"/js/plugins/socialshareprivacy/images/facebook_share_de.png",dummy_img:"/js/plugins/socialshareprivacy/images/dummy_facebook_share_de.png",status:"on"}},twitter:{dummy_img:"/js/plugins/socialshareprivacy/images/dummy_twitter.png"},gplus:{dummy_img:"/js/plugins/socialshareprivacy/images/dummy_gplus.png"}},alignment:"vertical",cookie_domain:".heise.de",css_path:"",lang_path:"/js/plugins/socialshareprivacy/lang/",perma_orientation:"top",switch_alignment:"right"}},d.prototype._updateInlineElements=function(a){var b=this.$gallery(),d=b.find(".gallery-inner");d.parent().is("a")&&d.parent().replaceWith(d);var e=function(a,d,e){"undefined"==typeof d&&(d="");var f=c("<"+a+">").html(d);(e||0!==f.text().length)&&(b.find("> "+a).length>0?b.find("> "+a).replaceWith(f):b.append(f))},f=function(a,c){0===b.find(a).length&&b.append(c)};f(".image-num",this._createFooterPagination()),e("h2",this._title,!0),f(".gallery-inner",c('<div class="gallery-inner"><figure><span class="gallery-spinner"><i class="fa fa-inverse fa-spinner fa-spin fa-2x"></i></span></figure></div>')),b.find("> h3, > figcaption").remove(),e("h3",a.subtitle);var g="";"string"==typeof a.caption&&(g+=a.caption),"string"==typeof a.copyright&&a.copyright.length>0&&(g+=" (Bild: "+a.copyright+")"),e("figcaption",g)},d.prototype._setupLegacyFixes=function(){var a=b.Tools.msIEVersion();a&&11>a&&this.$gallery().addClass("ie"+a).addClass("ie-lt-11");var c=b.Tools.browser();c.safari&&parseInt(c.version)<7&&this.$gallery().addClass("safari"+c.version).addClass("safari-lt-7")},d.prototype.d=function(){if(this.options.debug)try{console.log.apply(console,Array.prototype.slice.call(arguments,0))}catch(a){}},d.prototype._updateHistoryState=function(){this._fullscreen.isActive()||window.history.replaceState({},"",b.Tools.setQueryParams({hg:this.galleryIndex,hgi:this._images.getCursor(),hgf:this.modal.isActive()}))},d.prototype._setupHistory=function(){var e=this,f=a.window;if("history"in f&&"replaceState"in f.history){if(b.Tools.getQueryParams().hasOwnProperty("hg")){var g=b.Tools.getQueryParams(),h=parseInt(g.hg,10),i=parseInt(g.hgi,10);d.activeIdx=h,e._callbacks.initialized.add(function(a){a.galleryIndex===h&&(i>0&&a._images.move(i),"true"===g.hgf&&a.modal.show())})}var j=c.proxy(this._updateHistoryState,this);e._callbacks.initialized.add(function(a){a._images.onMove(j)}),e._callbacks.viewToggled.add(j)}},d.prototype.getImages=function(){return this._images},d.prototype._setupCallbacks=function(){var a=this;this._callbacks={},c.each(["viewToggled","UINavClicked","initialized"],function(b,d){var e=c.Callbacks(d+".heise-gallery");a._callbacks[d]=e})},d.prototype._setupTracking=function(){var c=this;this._callbacks.UINavClicked.add(function(){c.d("RELOAD"),b.TrackingReload().reloadAll(function(){return{reloadWebtrekk:{contentId:a.wt.contentId+".bilderstrecke-"+c.options.contentId,contentGroup:a.wt.contentGroup},reloadIntern:{num:c._images.getCursor()+1}}})})},d.prototype.isActive=function(){return d.activeIdx==this.galleryIndex},d.prototype.$gallery=function(){return c(this.element)},d.prototype.getInlineRatio=function(){if("undefined"==typeof this.$gallery().data("inlineRatio")){var a=this.$gallery().find("img");return a.width()/a.height()}var b=this.options.inlineRatio+"",c=b.match(/^(\d+)[/:](\d+)$/);return null!==c?c[1]/c[2]:parseFloat(b)},d.prototype._imageDataReceived=function(a){var b=this.$gallery();this._title=this.options.jsonExtractTitle(a),this.getImages().addItems(this.options.jsonExtractImages.apply(this,[a])),this.images=b.find("li"),this._setupControls(),this._setupKeyListeners(),this._setupFullscreen(),this._setupFullscreenAPI()},d.prototype._updateNavText=function(a){var b=this,d=this.$gallery();d.find(".image-num").each(function(){c(this).show(),c(this).find(".cur-image").text(a),c(this).find(".image-count").text(b._images.getItemCount())})},d.prototype._setupKeyListeners=function(){var b=this,d=!1;c(a).on("keydown",function(a){if(!d&&!c(a.target).is(":input")){var e={87:function(){this.modal.toggle()},65:function(){this.getImages().movePrev()},83:function(){this.modal.toggle()},68:function(){this.getImages().moveNext()},37:function(){this.getImages().movePrev()},39:function(){this.getImages().moveNext()},70:function(){this.modal.isActive()&&this._fullscreen.toggle()}},f=a.keyCode+"";e.hasOwnProperty(f)&&(a.preventDefault(),b.isActive()&&(e[f].call(b),b._callbacks.UINavClicked.fire(a))),d=!0}}),c(a).on("keyup",function(){d=!1})},d.prototype._setupFullscreenAPI=function(){var a=this,c=this.modal.getCloseButton(),d="full-screen";this._fullscreen=new b.Fullscreen,this._fullscreen.onRequest(function(){a.modal.$stage.addClass(d),c.addClass(d)}),this._fullscreen.onExit(function(){a.modal.$stage.removeClass(d),c.removeClass(d),a._updateHistoryState()}),this._fullscreen.onChange(function(){a.d("Toggle Fullscreen")}),this.modal.$stage.find(".image-stage").on("click",".fullscreen-api-btn",function(){a._fullscreen.toggle()})},d.prototype._createFooterPagination=function(){return c('<span style="display:none" class="image-num">Bild <span class="cur-image"></span> von <span class="image-count"></span></span>')},d.prototype._createPagination=function(a){a.append('<a class="gallery-control slide slide-prev" data-slide="prev"><span class="fa fa-angle-left fa-4x fa-inverse"></span></a>'),a.append('<a class="gallery-control slide slide-next" data-slide="next"><span class="fa fa-angle-right fa-4x fa-inverse"></span></a>')},d.prototype._setupControls=function(){var a=this,b=this.$gallery(),e=b.find(".gallery-inner");this._createPagination(e),b.on("click","[data-slide]",function(b){b.preventDefault();var d=c(b.target);d.is("span")&&(d=d.parents("a")),"next"===d.data("slide")?a._images.moveNext():a._images.movePrev()}),b.on("click",function(){a.isActive()||(d.activeIdx=a.galleryIndex,a.d("aktiv",d.activeIdx))});var f=c('<a class="gallery-control fullscreen-btn"><span class="fa fa-expand fa-inverse"></span></a>');f.appendTo(e).click(function(){a.modal.show()}),this.getImages().onMove(function(b){a._updateNavText(b.index+1)}),b.on("click","a, button",function(b){a._callbacks.UINavClicked.fire(b)})},d.prototype._preloadFullscreenImages=function(){var a=this.modal.$stage.find(".image-stage");this.getImages().each(function(c,d){d=new b.Image(d.origSrc,{boxWidth:a.width(),boxHeight:a.height()})})},d.prototype._setupFullscreen=function(){var d=this,e=this.modal=new b.Modal({parent:this.element}),f=d.modal.$stage,g=c('<div class="gallery-modal-wrapper">'),h='<span class="gallery-spinner"><i class="fa fa-inverse fa-spinner fa-spin fa-2x"></i></span>',i='<a class="gallery-control fullscreen-api-btn"><span class="fa fa-arrows-alt fa-inverse"></span></a>',j=c('<div class="image-stage">'+h+i+"</span>");
j.appendTo(g),this._createPagination(j);var k=c("<aside>").appendTo(g),l=c("<footer>");l.appendTo(j),this._createFooterPagination().appendTo(l),g.appendTo(f);var m=function(a){j.find("img").remove();var b=a.clone(j);j.prepend(b.get()),k.empty(),a.options.hasOwnProperty("title")&&null!==a.options.title&&a.options.title.length>0&&c("<h1>").html(a.options.title).appendTo(k);var e=c("<figcaption>");try{e.html(a.options.subtitle)}catch(f){d.d(f)}try{a.options.hasOwnProperty("copyright")&&a.options.copyright.length>0&&c('<p class="copyright">').html("(Bild: "+a.options.copyright+")").appendTo(e)}catch(f){d.d(f)}e.appendTo(k);var g=c("<footer>");c('<div class="social">').socialSharePrivacy(d.options.socialOpts).appendTo(g),g.appendTo(k)};e.onShow(function(){m(d._images.getCurrentItem()),d._callbacks.viewToggled.fire("show")}),e.onHide(function(){d._callbacks.viewToggled.fire("hide")}),this.getImages().onMove(function(){d.modal.isActive()&&m(d._images.getCurrentItem())});var n=!1;e.onShow(function(){n||(d._preloadFullscreenImages(),n=!0)});var o;c(a).resize(function(){a.clearTimeout(o),o=a.setTimeout(function(){d._preloadFullscreenImages(),m(d._images.getCurrentItem())},500)});var p;j.mousemove(function(){j.find(".slide, footer, .gallery-control, fullscreen-api-btn").removeClass("force-hide"),a.clearTimeout(p),p=a.setTimeout(function(){j.find(".slide, footer, .gallery-control, fullscreen-api-btn").addClass("force-hide")},d.options.fullscreenInactivityTimeout)});var q;this.getImages().onMove(function(){l.css({opacity:1}),l.removeClass("force-hide"),a.clearTimeout(q),q=a.setTimeout(function(){l.addClass("force-hide")},d.options.fullscreenInactivityTimeout)})},b.Gallery=d}(this,this.Heise=this.Heise||{},jQuery),function(a,b,c){"use strict";c.fn.gallery=function(a){return this.each(function(){this.gallery=new b.Gallery(this,a)})},c(".gallery").gallery({debug:"undefined"!=typeof DEBUG})}(this,this.Heise=this.Heise||{},jQuery);
//# sourceMappingURL=jquery.heise-gallery.min.map