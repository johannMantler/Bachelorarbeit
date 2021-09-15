/*
Copyright (c) 2014, comScore Inc. All rights reserved.
version: 5.0.3
*/
COMSCORE.SiteRecruit.Broker.config = {
	version: "5.0.3",
	//TODO:Karl extend cookie enhancements to ie userdata
	testMode: false,
	// START 5.1.3
	cddsDomains: 'microsoftstore.com|xbox.com|windowsphone.com',
	cddsInProgress: 'cddsinprogress',
	domainSwitch: 'tracking3p',
	domainMatch: '^(https?:\/\/)?([\\da-z\.-]+)\.([a-z\.]{2,6})',
	delay: 0,
	// END 5.1.3
	
	// cookie settings
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.microsoft.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	thirdPartyOptOutCookieEnabled : false,
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",
	
	//events
	Events: {
		beforeRecruit: function() {
					}
	},
	
		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	 {m: '//[\\w\\.-]+/learning/en-us/(?!((SyndicationPage)|(offers/virtualization-secampaign\\.aspx)))', c: 'inv_c_MSLearning42.js', f: 0.35, p: 0 	}
	,{m: '//[\\w\\.-]+/licensing/(?!(servicecenter|licensewise/|mla/))', c: 'inv_c_3331mt43.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/pl-pl/download', c: 'inv_c_p162095591-DLC-PL-PL.js', f: 0.1761, p: 1 	}
	,{m: '//(?!privacy)[\\w\\.-]+/pt-br/(default\\.aspx)?$', c: 'inv_c_p162091074-PT-BR.js', f: 0.4156, p: 1 	}
	,{m: '//[\\w\\.-]+/pt-br/business/', c: 'inv_c_p257501361-PT-BR.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/pt-br/download', c: 'inv_c_p162095591-DLC-PT-BR.js', f: 0.0754, p: 1 	}
	,{m: '//[\\w\\.-]+/pt-br/windows/compatibility/CompatCenter/.*', c: 'inv_c_p176052898-PT-BR.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/publicsector/en-us/international-organizations', c: 'inv_c_p233386094-2350.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/publicsector/ww/international-organizations', c: 'inv_c_p233386094-2349.js', f: 0.5, p: 0 	}
	,{m: '//(?!privacy)[\\w\\.-]+/ru-ru/(default\\.aspx)?$', c: 'inv_c_p162091074-RU-RU.js', f: 0.2998, p: 1 	}
	,{m: '//[\\w\\.-]+/ru-ru/business/', c: 'inv_c_p257501361-RU-RU.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/ru-ru/download', c: 'inv_c_p162095591-DLC-RU-RU.js', f: 0.0389, p: 1 	}
	,{m: '//[\\w\\.-]+/ru-ru/windows/compatibility/CompatCenter/.*', c: 'inv_c_p176052898-RU-RU.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/security', c: 'inv_c_3331mt49.js', f: 0.0245, p: 0 	}
	,{m: '//[\\w\\.-]+/surface/en-.*.*/support', c: 'inv_c_p177004014-MS-Surface.js', f: 0.1171, p: 0 	}
	,{m: '//[\\w\\.-]+/windows/buy/(tr-tr|en-ca|en-gb|en-au|ja-jp|de-de|fr-fr|ru-ru|es-es|it-it|nl-nl)', c: 'inv_c_blank.js', f: 0, p: 5  ,halt: true 	}
	,{m: '//[\\w\\.-]+/windows/enterprise/', c: 'inv_c_p38361073-DDS.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/en-us/xp/default\\.aspx', c: 'inv_c_p263527294-2589.js', f: 0.43, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/en-us/xp/PCs-and-offers\\.aspx', c: 'inv_c_p263527294-2590.js', f: 0.43, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/en-us/xp/top-questions\\.aspx', c: 'inv_c_p263527294-2591.js', f: 0.43, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/internet-explorer/(?!welcome\\.aspx)', c: 'inv_c_blank.js', f: 0, p: 1  ,halt: true 	}
	,{m: '//[\\w\\.-]+/windowsembedded/en-us/', c: 'inv_c_p250749567-2403.js', f: 0.8, p: 1 	}
	,{m: '//[\\w\\.-]+/windowsphone/(cs-cz|de-at|de-ch|el-gr|en-hk|en-ie|en-in|en-sg|es-es|es-mx|fi-fi|fr-ch|fr-be|fr-ch|hu-hu|it-it|nb-no|nl-nl|pl-pl|pt-pt|sv-se|tr-tr|zh-hk|zh-tw)', c: 'inv_c_blank.js', f: 0, p: 0  ,halt: true 	}
	,{m: '//[\\w\\.-]+/windowsphone/de-de', c: 'inv_c_p127227702-DE-DE.js', f: 0.087, p: 4 	}
	,{m: '//[\\w\\.-]+/windowsphone/en-gb/(?!(welcome\\.aspx|cmpn/(att\\.aspx|bogo\\.aspx|t-mobile\\.aspx)))', c: 'inv_c_p127227702-EN-GB.js', f: 0.066, p: 4 	}
	,{m: '//[\\w\\.-]+/windowsphone/en-us/(?!(welcome\\.aspx|cmpn/(att\\.aspx|bogo\\.aspx|t-mobile\\.aspx)))', c: 'inv_c_p127227702-EN-US-P131919559.js', f: 0.0471, p: 4 	}
	,{m: '//[\\w\\.-]+/windowsphone/fr-fr', c: 'inv_c_p127227702-FR-FR.js', f: 0.14, p: 4 	}
	,{m: '//[\\w\\.-]+/zh-cn/business/', c: 'inv_c_p257501361-ZH-CN.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/zh-cn/(default\\.aspx|$)', c: 'inv_c_p162091074-ZH-CN-HP.js', f: 0.193, p: 1 	}
	,{m: '//[\\w\\.-]+/zh-cn/download', c: 'inv_c_p162095591-DLC-ZH.js', f: 0.0211, p: 1 	}
	,{m: '//[\\w\\.-]+/zh-cn/windows/compatibility/CompatCenter/.*', c: 'inv_c_p176052898-ZH-CN.js', f: 0.3665, p: 4 	}
	,{m: '(//[\\w\\.-]+/sql/experience/(Default\\.aspx\\?loc=en)|(html/Default\\.aspx\\?loc=en)|(html/Events\\.aspx\\?loc=en)|(LearnSQL\\.aspx\\?h=t&loc=en)|(LearnSQL\\.aspx\\?loc=en)|(Events\\.aspx\\?loc=en)|(.*\\.wmv))|(/learning/en/us/(s|S)yndication(p|P)age\\.aspx)', c: 'inv_c_blank.js', f: 0, p: 3  ,halt: true 	}
]
};

// START 5.1.3
function _set_SessionCookie(_name, _val) {
	if (_name == COMSCORE.SiteRecruit.Broker.config.domainSwitch) {
		var r = new RegExp(COMSCORE.SiteRecruit.Broker.config.domainMatch,'i');
		if (r.test(_val)) {
			_val = RegExp.$1 + RegExp.$2;
			var c = _name + '=' + _val + '; path=/' + '; domain=' + COMSCORE.SiteRecruit.Broker.config.cookie.domain;
			document.cookie = c;
		}
	}
}
// END 5.1.3

// START 5.1.3
var allLinks = document.getElementsByTagName("a");
for (var i = 0, n = allLinks.length; i < n;i++) {
	var r = new RegExp(COMSCORE.SiteRecruit.Broker.config.cddsDomains,'i');

	if (r.test(allLinks[i].href)) {
		if (allLinks[i].addEventListener) {
			allLinks[i].addEventListener('click', function(event) {
				if (r.test(this.href)) {
					_set_SessionCookie(COMSCORE.SiteRecruit.Broker.config.domainSwitch, this.href);
				}
			}, false);
		}
		else {
			hrefURL = allLinks[i].href;
			allLinks[i].attachEvent('onclick', function() {
				_set_SessionCookie(COMSCORE.SiteRecruit.Broker.config.domainSwitch, hrefURL);
			});
		}
	}
}
// END 5.1.3

if(/windows\/en-us\/xp\/(top-questions|pcs-and-offers|end-of-xp-support)/i.test(document.referrer)) {
	COMSCORE.SiteRecruit._halt = true;
}
if(/[\w\.]+\/surface/i.test(SR_url)) {
	var allLinks = document.getElementsByTagName("a");
  function  checkLink(){
   for (var i = 0; i < allLinks.length; i++) {
  if(/https:\/\/(login|accountservices|myservice)\.(live|passport|surface)\.(com|net)/i.test(allLinks[i].href)){
    	if(allLinks[i].addEventListener){  		
    		hrefURL = allLinks[i].href;
      	allLinks[i].addEventListener('click',function(event){      
        	_set_SessionCookie("captlinks", this.href);
          _set_SessionCookie("graceIncr", 1); 
        },false);
      }else{ 
        allLinks[i].attachEvent('onclick',function(){ 
         	_set_SessionCookie("graceIncr", 1);
         	_set_SessionCookie("captlinks", this.href);
        });
      }
    }
   }
}
setTimeout("checkLink();", 3000);
}

var gIdelay = 0;
if (COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue("graceIncr") == 1) {
	gIdelay = 5000;
}
setTimeout(function(){_set_SessionCookie("graceIncr", 0)},gIdelay);
//_set_SessionCookie("graceIncr", 0);

// START 5.1.3
	function crossDomainCheck() {
		if (intervalMax > 0) {
			intervalMax --;
			
			var cookieName = COMSCORE.SiteRecruit.Broker.config.cddsInProgress;
			
			if (COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(cookieName) != false ) {
				COMSCORE.SiteRecruit.DDKeepAlive.setDDTrackerCookie();
				COMSCORE.SiteRecruit._halt = true;
				clearCrossDomainCheck();
			}
		}
		else {
			clearCrossDomainCheck();
		}
	}

	function clearCrossDomainCheck() {
		window.clearInterval(crossDomainInterval);
	}

	var intervalMax = 10;
	
	var crossDomainInterval = window.setInterval('crossDomainCheck()', '1000');
//END CROSS_DOMAIN DEPARTURE FUNCTIONALITY

//CUSTOM - ADD 5 SECOND DELAY ON CALLING BROKER.RUN()
if (COMSCORE.SiteRecruit.Broker.delayConfig == true)  {
	COMSCORE.SiteRecruit.Broker.config.delay = 5000;
}

//CUSTOM - ADD 20 SECOND DELAY ON CALLING BROKER.RUN() FOR SMB SITES
if(/www\.microsoft\.com\/((en-(ca|in|us)|fr-ca|fr-fr|pt-br|ru-ru|zh-cn)\/business|(en-gb|ja-jp|de-de)\/smb)/i.test(window.location.toString())){
	COMSCORE.SiteRecruit.Broker.config.delay = 20000;
}
window.setTimeout('COMSCORE.SiteRecruit.Broker.run()', COMSCORE.SiteRecruit.Broker.config.delay);