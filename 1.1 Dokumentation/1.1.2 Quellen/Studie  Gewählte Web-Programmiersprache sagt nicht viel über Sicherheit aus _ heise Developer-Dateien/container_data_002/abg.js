(function(){var g=this,aa=function(a,c){var b=a.split("."),d=g;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)b.length||void 0===c?d=d[e]?d[e]:d[e]={}:d[e]=c},ba=function(a){a.T=function(){return a.rb?a.rb:a.rb=new a}},h=function(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=
typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==c&&"undefined"==typeof a.call)return"object";return c},da=function(a,c,b){return a.call.apply(a.bind,arguments)},ea=function(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,
2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}},p=function(a,c,b){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return p.apply(null,arguments)},fa=Date.now||function(){return+new Date},s=function(a){var c=q;function b(){}b.prototype=c.prototype;a.Tb=c.prototype;a.prototype=new b;a.prototype.constructor=a;a.Sb=function(a,b,f){return c.prototype[b].apply(a,
Array.prototype.slice.call(arguments,2))}};var ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ra=function(a){if(!ka.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(la,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ma,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(na,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(oa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(pa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(qa,"&#0;"));return a},la=/&/g,ma=/</g,na=/>/g,oa=/"/g,pa=/'/g,qa=/\x00/g,ka=/[\x00&<>"']/,
sa=function(a,c){return a<c?-1:a>c?1:0},ta=function(a){return String(a).replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})},va=function(a){var c="\\s";return a.replace(new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,c,e){return c+e.toUpperCase()})};var t=function(a,c,b,d){b=p(d,b);a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent&&a.attachEvent("on"+c,b)};var v=function(a){var c=arguments.length;if(1==c&&"array"==h(arguments[0]))return v.apply(null,arguments[0]);for(var b={},d=0;d<c;d++)b[arguments[d]]=!0;return b};var wa=function(){this.u={}};ba(wa);var w;i:{var xa=g.navigator;if(xa){var ya=xa.userAgent;if(ya){w=ya;break i}}w=""}var x=function(a){return-1!=w.indexOf(a)};var za=x("Opera")||x("OPR"),y=x("Trident")||x("MSIE"),z=x("Gecko")&&-1==w.toLowerCase().indexOf("webkit")&&!(x("Trident")||x("MSIE")),Aa=-1!=w.toLowerCase().indexOf("webkit"),Da=function(){var a=g.document;return a?a.documentMode:void 0},Ea=function(){var a="",c;if(za&&g.opera)return a=g.opera.version,"function"==h(a)?a():a;z?c=/rv\:([^\);]+)(\)|;)/:y?c=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Aa&&(c=/WebKit\/(\S+)/);c&&(a=(a=c.exec(w))?a[1]:"");return y&&(c=Da(),c>parseFloat(a))?String(c):a}(),Fa={},Ga=
function(a){if(!Fa[a]){for(var c=0,b=ja(String(Ea)).split("."),d=ja(String(a)).split("."),e=Math.max(b.length,d.length),f=0;0==c&&f<e;f++){var m=b[f]||"",C=d[f]||"",Ba=RegExp("(\\d*)(\\D*)","g"),Ca=RegExp("(\\d*)(\\D*)","g");do{var D=Ba.exec(m)||["","",""],E=Ca.exec(C)||["","",""];if(0==D[0].length&&0==E[0].length)break;c=sa(0==D[1].length?0:parseInt(D[1],10),0==E[1].length?0:parseInt(E[1],10))||sa(0==D[2].length,0==E[2].length)||sa(D[2],E[2])}while(0==c)}Fa[a]=0<=c}},Ha=g.document,Ia=Ha&&y?Da()||
("CSS1Compat"==Ha.compatMode?parseInt(Ea,10):5):void 0;var Ja;if(!(Ja=!z&&!y)){var Ka;if(Ka=y)Ka=y&&9<=Ia;Ja=Ka}Ja||z&&Ga("1.9.1");y&&Ga("9");var A=function(a){var c=document;return"string"==typeof a?c.getElementById(a):a};y&&Ga(8);v("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var Ma=function(){this.Ob="";this.Nb=La},La={};var Oa=function(){this.Ea="";this.Mb=Na};Oa.prototype.ob=function(){return 1};var Na={};var Qa=function(){this.Ea="";this.Lb=Pa;this.Pb=null};Qa.prototype.ob=function(){return this.Pb};v("action","cite","data","formaction","href","manifest","poster","src");v("link","script","style");var Pa={};var Ra={},Sa={},Ta={},Ua={},Va={},q=function(){throw Error("Do not instantiate directly");};q.prototype.I=null;q.prototype.toString=function(){return this.content};var B=function(a,c,b){a.innerHTML=Wa(c(b||Xa,void 0,void 0))},Wa=function(a){var c=typeof a;if(("object"!=c||null==a)&&"function"!=c)return String(a);if(a instanceof q){if(a.o===Ra)return a.content;if(a.o===Va)return ra(a.content)}return"zSoyz"},Xa={};var Ya=function(a){if(null!=a)switch(a.I){case 1:return 1;case -1:return-1;case 0:return 0}return null},Za=function(){q.call(this)};s(Za);Za.prototype.o=Ra;var F=function(a){return null!=a&&a.o===Ra?a:a instanceof Qa?$a(a instanceof Qa&&a.constructor===Qa&&a.Lb===Pa?a.Ea:"type_error:SafeHtml",a.ob()):$a(ra(String(String(a))),Ya(a))},ab=function(){q.call(this)};s(ab);ab.prototype.o=Sa;ab.prototype.I=1;var bb=function(){q.call(this)};s(bb);bb.prototype.o=Ta;bb.prototype.I=1;var cb=function(){q.call(this)};
s(cb);cb.prototype.o={};cb.prototype.I=1;var db=function(){q.call(this)};s(db);db.prototype.o=Ua;db.prototype.I=1;var $a=function(a){function c(a){this.content=a}c.prototype=a.prototype;return function(a,d){var e=new c(String(a));void 0!==d&&(e.I=d);return e}}(Za);(function(a){function c(a){this.content=a}c.prototype=a.prototype;return function(a,d){var e=String(a);if(!e)return"";e=new c(e);void 0!==d&&(e.I=d);return e}})(Za);
var G=function(a){null!=a&&a.o===Ra?(a=String(a.content).replace(eb,"").replace(fb,"&lt;"),a=String(a).replace(gb,ib)):a=ra(String(a));return a},lb=function(a){if(null==a)return" null ";if(null!=a&&a.o===Sa)return a.content;switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(jb,kb)+"'"}},qb=function(a){null!=a&&a.o===Ta?a=String(a).replace(nb,ob):a instanceof Oa?(a=a instanceof Oa&&a.constructor===Oa&&a.Mb===Na?a.Ea:"type_error:SafeUrl",a=String(a).replace(nb,
ob)):(a=String(a),a=pb.test(a)?a.replace(nb,ob):"#zSoyz");return a},H=function(a){null!=a&&a.o===Ua?a=a.content:null==a?a="":a instanceof Ma?a=a instanceof Ma&&a.constructor===Ma&&a.Nb===La?a.Ob:"type_error:SafeStyle":(a=String(a),a=rb.test(a)?a:"zSoyz");return a},sb={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;",
"\u2028":"&#8232;","\u2029":"&#8233;"},ib=function(a){return sb[a]},ub={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b","\f":"\\f","\r":"\\r",'"':"\\x22",$:"\\x24","&":"\\x26","'":"\\x27","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e","/":"\\/",":":"\\x3a","<":"\\x3c","=":"\\x3d",">":"\\x3e","?":"\\x3f","[":"\\x5b","\\":"\\\\","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029"},kb=
function(a){return ub[a]},vb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22",
"'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0",
"\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return vb[a]},gb=/[\x00\x22\x27\x3c\x3e]/g,jb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,nb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,rb=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,pb=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
eb=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,fb=/</g;var wb=function(a){a=a||{};var c=""+(a.V?"#333":"#f1f2f2"),b=""+(a.V?"#333":"#fff"),d=""+(a.V?"#fff":"#333"),e=""+(a.V?"#ccc":"#999"),f=2<a.m/a.n,m=2<a.n/a.m,C=(60<a.n?"12":"11")+"px";return a=""+('<div id="info_container"><ul><li><div id="back_section" class="back_border" onclick="handleClick(\'backClick\', event)">'+('<img src="'+G(qb(a.J.Oa))+'" />')+'</div></li><li><div id="info_content"></div></li></ul></div><style>#info_container * {box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;}#info_container > ul {list-style-type:none; margin:0; padding:0;}'+
(m?"":"#info_container > ul > li {float:left;}")+(f?".inline {float:left;}":"")+".back_border {"+(m?"border-bottom:1px solid #ccc;":"border-right:1px solid #ccc;")+"}.opt_border {"+(f?"border-left:1px solid #ccc;border-right:1px solid #ccc;":"border-bottom:1px solid #ccc;border-top:1px solid #ccc;")+"}.opt_border_last {"+(m?"border-bottom:1px solid #ccc;":"")+"}.mn_opt {display:table;"+(f?"height:"+H(a.n)+"px;":"width:"+(m?H(a.m):H(a.m-30))+"px;")+(60>=a.n?"line-height:11px;":"")+"padding:0 5px;}.cell {display:table-cell; position:relative; width:inherit;}.conf {color:"+
H(e)+";"+(m?"padding:5px 10px;":"padding-left:20px;")+(m?"":"vertical-align:middle;")+"}.header {color:"+H(d)+"; margin:5px 0;}.fb_opt{padding:5px 0; position:relative;"+(f?"":"width:"+(m?H(a.m):H(a.m-30))+"px;")+"}.opt_tappable{position:absolute; margin:"+(f?"0 "+H("5px")+";":H("5px")+" 0;")+"bottom:0; left:0; right:0; top:0;}.center{text-align:center;}.middle{vertical-align:middle;}.athird{"+(f?"width":"height")+":"+(m?"15%":"33%")+";}#survey_page {display:table-cell;"+(f?"vertical-align:middle;":
"")+"}#info_card {font:bold "+H(C)+" Roboto; color:"+H("#39c")+"; height:"+H(a.n)+"px;"+H(a.sb)+":"+H(-a.m)+"px; position:absolute;"+H(a.tb)+":"+H(-a.n)+"px; width:"+H(a.m)+"px; z-index:9100;}#back_section{background-color:"+H(c)+"; opacity:1.0; width:"+(m?H(a.m):"30")+"px; height:"+(m?"30":H(a.n))+"px; display:table-cell; vertical-align:middle; text-align:center;}#info_container {display:-webkit-box; height:"+H(a.n)+"px; -webkit-box-orient:vertical; -webkit-box-pack:center; width:"+H(a.m)+"px;}#info_content {background-color:"+
H(b)+"; display:table; height:"+(m?H(a.n-30):H(a.n))+"px; opacity:0.97; position:relative; width:"+(m?H(a.m):H(a.m-30))+"px;}</style>")},xb=function(a){a=a||{};return'<div class="inline center athird mn_opt"><div class="cell middle"><img src="'+G(qb(a.Gb))+'" /><div class="fb_opt_txt">'+F(a.Hb)+'</div><div class="opt_tappable" onclick="handleClick(\'attributionClick\', event)"></div></div></div><div class="inline center athird mn_opt opt_border"><div class="cell middle"><img src="'+G(qb(a.J.Za))+
'" /><div class="fb_opt_txt">'+F(a.J.$a)+'</div><div class="opt_tappable" onclick="handleClick(\'pubMuteClick\', event)"></div></div></div><div class="inline center athird mn_opt opt_border_last"><div class="cell middle"><img src="'+G(qb(a.J.Xa))+'" /><div class="fb_opt_txt">'+F(a.J.Ya)+'</div><div class="opt_tappable" onclick="handleClick(\'adMuteClick\', event)"></div></div></div>'},yb=function(a){a=a||{};var c='<div id="survey_page"><div class="header center">'+F(a.Jb)+"</div>";a=a.Kb;for(var b=
a.length,d=0;d<b;d++){var e='<div class="inline athird center fb_opt '+(0!=d?"opt_border":"")+(d==b-1?"_last":"")+'"><div style="display:table;width:100%;height:100%"><div class="cell middle">',f;f=a[d].text();f=F(f);c+=e+f+'</div></div><div class="opt_tappable" onclick="handleClick(\'surveyOptionClick\', event, '+G(lb(d))+')"></div></div>'}return c+"</div>"},zb=function(a){a=a||{};return'<div class="cell conf"><div class="header">'+F(a.lb)+"</div>"+F(a.text)+"</div>"};var I=function(a,c,b){if("string"==typeof c)(c=Ab(a,c))&&(a.style[c]=b);else for(var d in c){b=a;var e=c[d],f=Ab(b,d);f&&(b.style[f]=e)}},Ab=function(a,c){var b=ta(c);if(void 0===a.style[b]){var d=(Aa?"Webkit":z?"Moz":y?"ms":za?"O":null)+va(b);if(void 0!==a.style[d])return d}return b};var Bb=function(){this.Fa={};var a=p(this.Rb,this);aa("handleClick",a)};ba(Bb);Bb.prototype.H=function(a,c){this.Fa[c]=a};Bb.prototype.Rb=function(a,c,b){"function"==h(this.Fa[a])&&this.Fa[a].apply(this,Array.prototype.slice.call(arguments,1))};var Cb=function(){this.ua=[];var a=p(this.Ca,this);aa("onLoad",a)};ba(Cb);Cb.prototype.H=function(a){this.ua.push(a)};Cb.prototype.Ca=function(){for(var a=0;a<this.ua.length;a+=1)"function"==h(this.ua[a])&&this.ua[a]()};var Db=["","moz","ms","O","webkit"];var Eb=function(){this.jb=[];this.kb=[];this.h()};Eb.prototype.i=function(a){this.h();this.g(a)};Eb.prototype.h=function(){this.jb.length=0;this.kb.length=0};Eb.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();if("ad_text"==d)for(var e=0;e<b.length;++e)this.jb.push(b[e]);if("line_rtl"==d)for(e=0;e<b.length;++e)this.kb.push(b[e])}};var J=function(){this.h()};J.prototype.height=function(){return this.B};J.prototype.width=function(){return this.C};
J.prototype.i=function(a){this.h();this.g(a)};J.prototype.h=function(){this.L="";this.C=this.B=0};J.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"image_url"==d&&(this.L=b);"height"==d&&(this.B=b);"width"==d&&(this.C=b)}};var K=function(){this.bb=[];this.ka=null;this.h()};K.prototype.name=function(){return this.D};K.prototype.va=function(){return this.w};K.prototype.i=function(a){this.h();this.g(a)};K.prototype.h=function(){this.w=this.D="";this.bb.length=0;this.ka=null};
K.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"name"==d&&(this.D=b);"icon_url"==d&&(this.w=b);if("user_reviews"==d)for(var e=0;e<b.length;++e)this.bb.push(b[e]);"screenshot_data"==d&&(null===this.ka&&(this.ka=new Fb),this.ka.g(b))}};var L=function(){this.h()};L.prototype.name=function(){return this.D};L.prototype.va=function(){return this.w};L.prototype.i=function(a){this.h();this.g(a)};L.prototype.h=function(){this.w=this.D=""};
L.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"name"==d&&(this.D=b);"icon_url"==d&&(this.w=b)}};var Gb=function(){this.eb=[];this.h()};Gb.prototype.i=function(a){this.h();this.g(a)};Gb.prototype.h=function(){this.eb.length=0};Gb.prototype.g=function(a){for(var c in a){var b=a[c];if("product"==c.toLowerCase())for(var d=0;d<b.length;++d){var e=new L;this.eb.push(e);e.g(b[d])}}};var Hb=function(){this.Q=[];this.h()};Hb.prototype.i=function(a){this.h();this.g(a)};
Hb.prototype.h=function(){this.Q.length=0};Hb.prototype.g=function(a){for(var c in a){var b=a[c];if("artists"==c.toLowerCase())for(var d=0;d<b.length;++d)this.Q.push(b[d])}};var Ib=function(){this.Q=[];this.cb=[];this.h()};Ib.prototype.i=function(a){this.h();this.g(a)};Ib.prototype.h=function(){this.Q.length=0;this.cb.length=0};
Ib.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();if("artists"==d)for(var e=0;e<b.length;++e)this.Q.push(b[e]);if("songs"==d)for(e=0;e<b.length;++e)d=new Hb,this.cb.push(d),d.g(b[e])}};var Jb=function(){this.L=[];this.ib=[];this.h()};Jb.prototype.i=function(a){this.h();this.g(a)};Jb.prototype.h=function(){this.L.length=0;this.ib.length=0};
Jb.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();if("image_url"==d)for(var e=0;e<b.length;++e)this.L.push(b[e]);if("duration"==d)for(e=0;e<b.length;++e)this.ib.push(b[e])}};var Kb=function(){this.h()};Kb.prototype.i=function(a){this.h();this.g(a)};Kb.prototype.h=function(){};Kb.prototype.g=function(a){for(var c in a);};var Lb=function(){this.h()};Lb.prototype.i=function(a){this.h();this.g(a)};Lb.prototype.h=function(){};Lb.prototype.g=function(a){for(var c in a);};
var M=function(){this.qa=null;this.h()};M.prototype.text=function(){return this.A};M.prototype.i=function(a){this.h();this.g(a)};M.prototype.h=function(){this.A=this.L="";this.qa=null};M.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"image_url"==d&&(this.L=b);"text"==d&&(this.A=b);"action_urls"==d&&(null===this.qa&&(this.qa=new Lb),this.qa.g(b))}};var N=function(){this.Wa=[];this.ba=this.da=this.aa=this.fa=this.Z=this.ja=this.ea=null;this.h()};N.prototype.Na=function(){return this.O};
N.prototype.i=function(a){this.h();this.g(a)};N.prototype.h=function(){this.O="";this.Wa.length=0;this.ba=this.da=this.aa=this.fa=this.Z=this.ja=this.ea=null};
N.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"destination_url"==d&&(this.O=b);if("buttons"==d)for(var e=0;e<b.length;++e){var f=new M;this.Wa.push(f);f.g(b[e])}"image_creative"==d&&(null===this.ea&&(this.ea=new J),this.ea.g(b));"text_creative"==d&&(null===this.ja&&(this.ja=new Eb),this.ja.g(b));"app_creative"==d&&(null===this.Z&&(this.Z=new K),this.Z.g(b));"music_creative"==d&&(null===this.fa&&(this.fa=new Ib),this.fa.g(b));"crossfade_creative"==d&&(null===this.aa&&(this.aa=
new Jb),this.aa.g(b));"iap_creative"==d&&(null===this.da&&(this.da=new Gb),this.da.g(b));"html5_template_creative"==d&&(null===this.ba&&(this.ba=new Kb),this.ba.g(b))}};N.CREATIVE_TYPE_UNKNOWN=0;N.CREATIVE_TYPE_TEXT=1;N.CREATIVE_TYPE_IMAGE=2;N.CREATIVE_TYPE_CROSSFADE_BANNER=3;N.CREATIVE_TYPE_PRODUCT=4;N.CREATIVE_TYPE_APP=5;N.CREATIVE_TYPE_MUSIC=6;N.CREATIVE_TYPE_IN_APP_PURCHASE=7;N.CREATIVE_TYPE_HTML5_TEMPLATE=8;var O=function(){this.ab=[];this.ra=null;this.u=[];this.h()};O.prototype.height=function(){return this.B};
O.prototype.width=function(){return this.C};var Q=function(a){null===a.ra&&(a.ra=new P);return a.ra};O.prototype.i=function(a){this.h();this.g(a)};O.prototype.h=function(){this.C=this.B=this.ab.length=0;this.ra=null;this.u.length=0};
O.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();if("creatives"==d)for(var e=0;e<b.length;++e){var f=new N;this.ab.push(f);f.g(b[e])}"height"==d&&(this.B=b);"width"==d&&(this.C=b);"attribution"==d&&Q(this).g(b);if("flags"==d)for(e=0;e<b.length;++e)d=new R,this.u.push(d),d.g(b[e])}};O.CREATIVE_TYPE_UNKNOWN=0;O.CREATIVE_TYPE_TEXT=1;O.CREATIVE_TYPE_IMAGE=2;O.CREATIVE_TYPE_CROSSFADE_BANNER=3;O.CREATIVE_TYPE_PRODUCT=4;O.CREATIVE_TYPE_APP=5;var S=function(){this.h()};
S.prototype.label=function(){return this.pb};S.prototype.i=function(a){this.h();this.g(a)};S.prototype.h=function(){this.Da=this.pb="";this.nb=!0};S.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"label"==d&&(this.pb=b);"label_instance"==d&&(this.Da=b);"include_close_button_token"==d&&(this.nb=b)}};var T=function(){this.ta=null;this.h()};T.prototype.text=function(){return this.A};var Mb=function(a){null===a.ta&&(a.ta=new S);return a.ta};T.prototype.i=function(a){this.h();this.g(a)};
T.prototype.h=function(){this.A="";this.ta=null};T.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"text"==d&&(this.A=b);"conversion"==d&&Mb(this).g(b)}};
var Nb=function(){this.pa=this.oa=this.na=this.ma=this.la=null;this.Y=[];this.h()},Ob=function(a){null===a.la&&(a.la=new S);return a.la},Pb=function(a){null===a.ma&&(a.ma=new S);return a.ma},Qb=function(a){null===a.na&&(a.na=new S);return a.na},Rb=function(a){null===a.oa&&(a.oa=new S);return a.oa},Sb=function(a){null===a.pa&&(a.pa=new S);return a.pa};Nb.prototype.i=function(a){this.h();this.g(a)};
Nb.prototype.h=function(){this.Ua=this.Ba=this.Va=this.Za=this.$a=this.Xa=this.Ya="";this.pa=this.oa=this.na=this.ma=this.la=null;this.Pa="";this.Y.length=0;this.Ta=this.Sa=this.Ra=this.Qa=this.Oa=""};
Nb.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"mute_text"==d&&(this.Ya=b);"mute_icon_url"==d&&(this.Xa=b);"pub_feedback_text"==d&&(this.$a=b);"pub_feedback_icon_url"==d&&(this.Za=b);"conversion_url"==d&&(this.Va=b);"encoded_cookie"==d&&(this.Ba=b);"close_button_token"==d&&(this.Ua=b);"interaction_conversion"==d&&Ob(this).g(b);"mute_conversion"==d&&Pb(this).g(b);"mute_undo_conversion"==d&&Qb(this).g(b);"pub_feedback_conversion"==d&&Rb(this).g(b);"pub_feedback_undo_conversion"==
d&&Sb(this).g(b);"survey_header"==d&&(this.Pa=b);if("survey_options"==d)for(var e=0;e<b.length;++e){var f=new T;this.Y.push(f);f.g(b[e])}"back_icon_url"==d&&(this.Oa=b);"mute_confirmation_header"==d&&(this.Qa=b);"mute_confirmation_text"==d&&(this.Ra=b);"pub_feedback_confirmation_header"==d&&(this.Sa=b);"pub_feedback_confirmation_text"==d&&(this.Ta=b)}};var P=function(){this.sa=null;this.h()};P.prototype.Na=function(){return this.O};P.prototype.va=function(){return this.w};P.prototype.text=function(){return this.A};
var Tb=function(a){null===a.sa&&(a.sa=new Nb);return a.sa};P.prototype.i=function(a){this.h();this.g(a)};P.prototype.h=function(){this.A=this.w=this.O="";this.sa=null};P.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"destination_url"==d&&(this.O=b);"icon_url"==d&&(this.w=b);"text"==d&&(this.A=b);"user_feedback_data"==d&&Tb(this).g(b)}};P.BOTTOM_LEFT=0;P.TOP_LEFT=1;P.TOP_RIGHT=2;P.BOTTOM_RIGHT=3;var R=function(){this.h()};R.prototype.name=function(){return this.D};
R.prototype.value=function(){return this.qb};R.prototype.i=function(a){this.h();this.g(a)};R.prototype.h=function(){this.qb=this.D=""};R.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"name"==d&&(this.D=b);"value"==d&&(this.qb=b)}};var Fb=function(){this.fb=[];this.h()};Fb.prototype.i=function(a){this.h();this.g(a)};Fb.prototype.h=function(){this.fb.length=0};
Fb.prototype.g=function(a){for(var c in a){var b=a[c];if("screenshots"==c.toLowerCase())for(var d=0;d<b.length;++d){var e=new U;this.fb.push(e);e.g(b[d])}}};var U=function(){this.h()};U.prototype.width=function(){return this.C};U.prototype.height=function(){return this.B};U.prototype.i=function(a){this.h();this.g(a)};U.prototype.h=function(){this.B=this.C=0};U.prototype.g=function(a){for(var c in a){var b=a[c],d=c.toLowerCase();"width"==d&&(this.C=b);"height"==d&&(this.B=b)}};var V=function(a,c,b,d,e,f,m,C){this.Ga=a;this.Ha=c;this.R=b;this.S=d;this.yb=e;this.zb=f;this.Ab=m;this.gb=!1;this.j=C;this.P=0;a=Bb.T();a.H(p(this.Db,this),"backClick");a.H(p(this.Cb,this),"attributionClick");a.H(p(this.Bb,this),"adMuteClick");a.H(p(this.Eb,this),"pubMuteClick");a.H(p(this.Fb,this),"surveyOptionClick");Cb.T().H(p(this.Ca,this))};
V.prototype.Ca=function(){for(var a=A("info_card"),c=this.R+" linear 0.2s,"+this.S+" linear 0.2s",b=0;b<Db.length;b++)I(a,Db[b]?Db[b]+"transition"[0].toUpperCase()+"ransition":"transition",c)};V.prototype.collapse=function(){var a=A("info_card");I(a,this.R,-1*this.Ha+"px");I(a,this.S,-1*this.Ga+"px")};V.prototype.expand=function(){var a=A("info_card");I(a,this.R,"0px");I(a,this.S,"0px");this.gb||(W(this,Ob(this.j)),this.gb=!0)};
var Ub=function(a){B(A("info_content"),xb,{Gb:a.yb,Hb:a.zb,J:a.j});a.P=1},Vb=function(a){B(A("info_content"),yb,{Jb:a.j.Pa,Kb:a.j.Y});a.P=2},W=function(a,c){var b=a.j.Va+"&label="+c.label();""!==c.Da&&(b+="&label_instance="+c.Da);c.nb&&(b+="&cbt="+a.j.Ua);0<a.j.Ba.length&&(b+="&cid="+a.j.Ba);(new Image).src=b};V.prototype.Db=function(){switch(this.P){case 1:this.collapse();break;case 2:Ub(this);W(this,Qb(this.j));break;case 3:Vb(this);break;case 4:Ub(this),W(this,Sb(this.j))}};V.prototype.Cb=function(){window.open(this.Ab)};
V.prototype.Bb=function(){Vb(this);W(this,Pb(this.j))};V.prototype.Fb=function(a,c){B(A("info_content"),zb,{lb:this.j.Qa,text:this.j.Ra});this.P=3;W(this,Mb(this.j.Y[c]))};V.prototype.Eb=function(){B(A("info_content"),zb,{lb:this.j.Sa,text:this.j.Ta});this.P=4;W(this,Rb(this.j))};var Z=function(a,c,b,d,e,f,m,C,Ba,Ca,D,E,dc,ec,fc,l,k,u,gc,r,ua,tb,n){this.l=a;this.q=c;this.v=b;this.p=d;this.k=e;this.Ia=f;this.M=m;this.ub=C;this.vb=Ba;this.Ka=Ca;this.wa=D;this.U=E;this.xa=dc;this.N=ec;this.ya=fc;i:for(a=this.q,c="A",b=a.childNodes,d=0;d<b.length;d++)if(e=b.item(d),"undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==c){a=e;break i}this.G=a;this.W="left"==k;this.F=this.s=null;this.Ma=!0===r;this.La=!0===ua;this.X=null;if(tb){r=new O;r.i(n);if(n.flags&&(ua=wa.T(),n=n.flags))for(ua.u=
{},a=0;a<n.length;a++)ua.u[n[a].name]=n[a].value;k=this.X=new V(r.height(),r.width(),k,this.La?"bottom":"top",Q(r).va(),Q(r).text(),Q(r).Na(),Tb(Q(r)));n=A("info_card");r=wa.T();B(n,wb,{n:k.Ga,m:k.Ha,sb:k.R,tb:k.S,V:void 0!==r.u.uses_octagon_sdk?"true"===r.u.uses_octagon_sdk||!0===r.u.uses_octagon_sdk:!1,J:k.j});Ub(k)}k="undefined"!=typeof SVGElement&&"undefined"!=typeof document.createElementNS;"img"==u&&(k=!1);k?"adchoices"==l?(this.v.appendChild(X(Wb(this),Xb("0px"))),l=this.k-this.p+"px",this.s=
Y(this.wa,5,this.ya,this.U),this.G.appendChild(X(Yb(this,this.k,this.M),Xb(l),this.s))):"adsbygoogle"==l?(l=Wb(this),u=Zb("0px"),this.v.appendChild(X(l,u)),this.W?(n=0,l=this.p+2,u=this.k-this.N-5):(k=0,l=5,u=this.k-this.N-2-k-this.p,n=this.k-this.p-k),k=Yb(this,this.k,this.M),this.s=Y(this.wa,l,this.ya,this.U),""!=this.xa&&(this.F=Y(this.xa,u,this.ya,this.N)),l=Zb(n+"px"),null!=this.G&&(l=this.F?X(k,this.s,this.F,l):X(k,this.s,l),this.G.appendChild(l))):"germany"==l?(this.v.appendChild(X(Wb(this),
Xb("0px"))),this.W?(u=this.p+2,k=3,n=0):(u=this.k-45-this.p,k=this.k-88-3,n=this.k-this.p-0),l=Yb(this,this.k,this.M),this.s=Y(this.wa,u,0,this.U),this.F=Y(this.xa,k,14,this.N),u=Xb(n+"px"),null!=this.G&&(l=X(l,this.s,this.F,u),this.G.appendChild(l))):$b(this):$b(this);this.K=null;this.Ja=0;tb?t(this.l,"click",this,p(this.X.expand,this.X)):gc?this.Aa():(t(this.l,"mouseover",this,this.Aa),t(this.l,"mouseout",this,this.xb),t(this.l,"mouseup",this,this.za),t(this.l,"touchstart",this,this.Aa),t(this.l,
"touchend",this,this.za),t(this.l,"touchcancel",this,this.za),t(this.G,"click",this,this.wb))},X=function(a){var c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("width","100%");c.setAttribute("height","100%");for(var b=0;b<arguments.length;b++)c.appendChild(arguments[b]);return c},Wb=function(a){var c=document.createElementNS("http://www.w3.org/2000/svg","rect");if(a.Ma)return c;c.setAttribute("width","100%");c.setAttribute("height","100%");c.setAttribute("fill","lightgray");
return c},Yb=function(a,c,b){var d=document.createElementNS("http://www.w3.org/2000/svg","path");if(a.Ma)return d;d.setAttribute("fill","lightgray");var e="M";a.La?(e+="0,"+b+"L"+c+","+b,e=a.W?e+("L"+c+",4s0,-4,-4,-4L0,0"):e+("L"+c+",0L4,0s-4,0,-4,4")):(e+="0,0L"+c+",0",e=a.W?e+("L"+c+","+(b-4)+"s0,4,-4,4L0,"+b):e+("L"+c+","+b+"L4,"+b+"s-4,0,-4,-4"));d.setAttribute("d",e+"z");return d},Y=function(a,c,b,d){b=11+b;var e=document.createElementNS("http://www.w3.org/2000/svg","svg"),f=document.createElementNS("http://www.w3.org/2000/svg",
"text");a=document.createTextNode(a);e.setAttribute("overflow","visible");e.setAttribute("x",c+"px");e.setAttribute("y",b+"px");e.setAttribute("width",d+"px");f.setAttribute("fill","black");f.setAttribute("font-family","Arial");f.setAttribute("font-size","100px");e.appendChild(f);f.appendChild(a);return e},ac=function(a,c){var b=a.childNodes.item(0),d=b.getComputedTextLength();0!=d&&b.setAttribute("transform","scale("+c/d+")")},Xb=function(a){var c=document.createElementNS("http://www.w3.org/2000/svg",
"svg"),b=document.createElementNS("http://www.w3.org/2000/svg","circle"),d=document.createElementNS("http://www.w3.org/2000/svg","path");c.appendChild(b);c.appendChild(d);c.setAttribute("fill","#00aecd");c.setAttribute("x",a);c.setAttribute("y","0.5px");b.setAttribute("cx","6.711px");b.setAttribute("cy","6.04px");b.setAttribute("r","0.483");d.setAttribute("d","M2.696,3.234c0-0.555,0.131-0.989,0.537-1.201c0.359-0.188,0.769-0.136,1.25,0.141l7.438,4.219c0.485,0.28,0.743,0.546,0.734,1c-0.009,0.456-0.271,0.771-0.766,1.032L7.78,10.519c-0.594,0.297-0.798,0.289-1.031,0.188C6.39,10.55,6.296,10.237,6.296,9.378l0.016-1.672c0-0.828,0.844-0.906,0.844,0l0.016,1.719C7.155,9.94,7.499,9.769,7.499,9.769L11.53,7.69c0.359-0.219,0.25-0.406,0.141-0.516c-0.024-0.024-0.188-0.12-0.25-0.156L4.233,2.987c-0.797-0.531-0.656,0.25-0.656,0.25s-0.016,7.182-0.016,7.625c0,0.797,0.094,0.672,1.062,0.156c0.95-0.506,1.156,0.422,0.516,0.75c0,0-0.869,0.473-1.297,0.641c-0.797,0.312-1.109-0.234-1.141-0.641C2.674,11.401,2.696,3.234,2.696,3.234z");
return c},$b=function(a){var c=bc(a.ub,a.Ka,a.p,a.Ia);a.v.appendChild(c);c=bc(a.vb,a.Ka,a.k,a.M);a.G.appendChild(c);c.width=a.k},bc=function(a,c,b,d){var e=document.createElement("img");e.src=a;e.alt=c;e.setAttribute("border","0");e.width=b;e.height=d;return e};
Z.prototype.Aa=function(){window.clearTimeout(this.K);this.K=null;this.q&&"block"==this.q.style.display||(this.Ja=fa(),this.k&&(this.l.style.width=this.k+"px",this.l.style.height=this.M+"px"),this.v&&this.q&&(this.v.style.display="none",this.q.style.display="block"),this.s&&ac(this.s,this.U),this.F&&ac(this.F,this.N))};Z.prototype.xb=function(){cc(this,500)};Z.prototype.za=function(){cc(this,4E3)};var cc=function(a,c){window.clearTimeout(a.K);a.K=window.setTimeout(p(a.Qb,a),c)};
Z.prototype.Qb=function(){window.clearTimeout(this.K);this.K=null;this.Ib&&(this.l.style.left=this.Ib+"px");this.p&&(this.l.style.width=this.p+"px",this.l.style.height=this.Ia+"px");this.v&&this.q&&(this.v.style.display="block",this.q.style.display="none")};Z.prototype.wb=function(a){this.q&&"block"==this.q.style.display&&500>fa()-this.Ja&&a.preventDefault()};
var Zb=function(a){var c=document.createElementNS("http://www.w3.org/2000/svg","svg"),b=document.createElementNS("http://www.w3.org/2000/svg","circle"),d=document.createElementNS("http://www.w3.org/2000/svg","circle"),e=document.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("stroke","#00aecd");c.setAttribute("fill","#00aecd");c.setAttribute("x",a);c.setAttribute("y","0px");b.setAttribute("cx","7.5px");b.setAttribute("cy","7.5px");b.setAttribute("r","5.5px");b.setAttribute("fill",
"none");b.setAttribute("stroke-width","1.1px");d.setAttribute("cx","7.5px");d.setAttribute("cy","4.75px");d.setAttribute("r","1px");d.setAttribute("stroke","none");e.setAttribute("x1","7.5px");e.setAttribute("x2","7.5px");e.setAttribute("y1","6.5px");e.setAttribute("y2","11px");e.setAttribute("fill","none");e.setAttribute("stroke-width","1.75px");c.appendChild(b);c.appendChild(d);c.appendChild(e);return c};aa("abg",Z);
if("undefined"!=typeof window.abgp){var $=window.abgp;new Z($.el,$.ael,$.iel,$.hw,$.sw,$.hh,$.sh,$.himg,$.simg,$.alt,$.t,$.tw,$.t2,$.t2w,$.tbo,$.att,$.halign,$.ff,$.fe,$.fnb,$.iba,$.uic,$.icd)};})();
