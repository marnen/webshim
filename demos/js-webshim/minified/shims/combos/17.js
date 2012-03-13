(function(c){if(!Modernizr.genericDOM){var d=document,i,k,o=/<([\w:]+)/,n={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};c.webshims.fixHTML5=function(c){if("string"!=typeof c||n[(o.exec(c)||["",""])[1].toLowerCase()])return c;if(!k){i=d.body;if(!i)return c;k=d.createElement("div");k.style.display="none"}var r=k.cloneNode(!1);i.appendChild(r);r.innerHTML=c;i.removeChild(r);return r.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(c,d,i,k,o){var n=d.modules,j=/\s*,\s*/,r={},l={},p={},g={},t={},s=c.fn.val,w=function(b,a,e,h,q){return q?s.call(c(b)):s.call(c(b),e)};c.fn.val=function(b){var a=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!a||1!==a.nodeType?s.call(this):c.prop(a,"value",b,"val",!0);if(c.isArray(b))return s.apply(this,arguments);var e=c.isFunction(b);return this.each(function(h){a=this;1===a.nodeType&&(e?(h=b.call(a,h,c.prop(a,"value",o,"val",
!0)),null==h&&(h=""),c.prop(a,"value",h,"val")):c.prop(a,"value",b,"val"))})};var v="_webshimsLib"+Math.round(1E3*Math.random()),u=function(b,a,e){b=b.jquery?b[0]:b;if(!b)return e||{};var h=c.data(b,v);e!==o&&(h||(h=c.data(b,v,{})),a&&(h[a]=e));return a?h&&h[a]:h};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){c.fn[b.name]=function(){return this.map(function(){var a=u(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){r[b]=c[b];c[b]=function(a,e,h,q,f){var d="val"==q,m=!d?r[b]:w;if(!a||!l[e]||1!==a.nodeType||!d&&q&&"attr"==b&&c.attrFn[e])return m(a,e,h,q,f);var z=(a.nodeName||"").toLowerCase(),j=p[z],g="attr"==b&&(!1===h||null===h)?"removeAttr":b,n,x,k;j||(j=p["*"]);j&&(j=j[e]);j&&(n=j[g]);if(n){if("value"==e)x=n.isVal,n.isVal=d;if("removeAttr"===g)return n.value.call(a);if(h===o)return n.get?n.get.call(a):n.value;n.set&&
("attr"==b&&!0===h&&(h=e),k=n.set.call(a,h));if("value"==e)n.isVal=x}else k=m(a,e,h,q,f);if((h!==o||"removeAttr"===g)&&t[z]&&t[z][e]){var i;i="removeAttr"==g?!1:"prop"==g?!!h:!0;t[z][e].forEach(function(e){if(!e.only||(e.only="prop"==b)||"attr"==e.only&&"prop"!=b)e.call(a,h,i,d?"val":g,b)})}return k};g[b]=function(a,e,h){p[a]||(p[a]={});p[a][e]||(p[a][e]={});var q=p[a][e][b],f=function(a,c,q){return c&&c[a]?c[a]:q&&q[a]?q[a]:"prop"==b&&"value"==e?function(a){return h.isVal?w(this,e,a,!1,0===arguments.length):
r[b](this,e,a)}:"prop"==b&&"value"==a&&h.value.apply?function(a){var c=r[b](this,e);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(a){return r[b](this,e,a)}};p[a][e][b]=h;if(h.value===o){if(!h.set)h.set=h.writeable?f("set",h,q):d.cfg.useStrict&&"prop"==e?function(){throw e+" is readonly on "+a;}:c.noop;if(!h.get)h.get=f("get",h,q)}["value","get","set"].forEach(function(a){h[a]&&(h["_sup"+a]=f(a,q))})}});var f=!c.browser.msie||8<parseInt(c.browser.version,10),x=function(){var b=d.getPrototypeOf(k.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(e,c,q){var n=k.createElement(e),j=d.getPrototypeOf(n);if(f&&j&&b!==j&&(!n[c]||!a.call(n,c))){var g=n[c];q._supvalue=function(){return g&&g.apply?g.apply(this,arguments):g};j[c]=q.value}else q._supvalue=function(){var a=u(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},m.extendValue(e,c,q.value);q.value._supvalue=q._supvalue}}(),m=function(){var b={};d.addReady(function(a,e){var h={},f=function(b){h[b]||(h[b]=c(a.getElementsByTagName(b)),
e[0]&&c.nodeName(e[0],b)&&(h[b]=h[b].add(e)))};c.each(b,function(a,b){f(a);!b||!b.forEach?d.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){h[a].each(b)})});h=null});var a,e=c([]),h=function(e,h){b[e]?b[e].push(h):b[e]=[h];c.isDOMReady&&(a||c(k.getElementsByTagName(e))).each(h)};return{createTmpCache:function(b){c.isDOMReady&&(a=a||c(k.getElementsByTagName(b)));return a||e},flushTmpCache:function(){a=null},content:function(a,b){h(a,function(){var a=c.attr(this,b);null!=a&&c.attr(this,
b,a)})},createElement:function(a,b){h(a,b)},extendValue:function(a,b,e){h(a,function(){c(this).each(function(){u(this,"propValue",{})[b]=this[b];this[b]=e})})}}}(),y=function(b,a){if(b.defaultValue===o)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}}};c.extend(d,{getID:function(){var b=(new Date).getTime();return function(a){var a=c(a),e=a.attr("id");e||(b++,e="ID-"+b,a.attr("id",e));return e}}(),extendUNDEFProp:function(b,
a){c.each(a,function(a,c){a in b||(b[a]=c)})},createPropDefault:y,data:u,moveToFirstEvent:function(){var b=c._data?"_data":"data";return function(a,e,h){if((a=(c[b](a,"events")||{})[e])&&1<a.length)e=a.pop(),h||(h="bind"),"bind"==h&&a.delegateCount?a.splice(a.delegateCount,0,e):a.unshift(e)}}(),addShadowDom:function(b,a,e){e=e||{};b.jquery&&(b=b[0]);a.jquery&&(a=a[0]);if(!e.shadowFocusElement)e.shadowFocusElement=a;var h=c.data(b,v)||c.data(b,v,{}),f=c.data(a,v)||c.data(a,v,{});h.hasShadow=a;f.nativeElement=
b;f.shadowData=h.shadowData={nativeElement:b,shadowElement:a,shadowFocusElement:e.shadowFocusElement};e.shadowChilds&&e.shadowChilds.each(function(){u(this,"shadowData",f.shadowData)});if(e.data)h.shadowData.data=e.data,f.shadowData.data=e.data;e=null},propTypes:{standard:function(b){y(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){y(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,
""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}}},reflectProperties:function(b,a){"string"==typeof a&&(a=a.split(j));a.forEach(function(a){d.defineNodeNamesProperty(b,a,{prop:{set:function(b){c.attr(this,a,b)},get:function(){return c.attr(this,a)||""}}})})},defineNodeNameProperty:function(b,a,e){l[a]=!0;if(e.reflect)d.propTypes[e.propType||"standard"](e);["prop","attr","removeAttr"].forEach(function(h){var f=e[h];f&&(f="prop"===h?c.extend({writeable:!0},f):c.extend({},
f,{writeable:!0}),g[h](b,a,f),"*"!=b&&d.cfg.extendNative&&"prop"==h&&f.value&&c.isFunction(f.value)&&x(b,a,f),e[h]=f)});e.initAttr&&m.content(b,a);return e},defineNodeNameProperties:function(b,a,e,c){for(var f in a)!c&&a[f].initAttr&&m.createTmpCache(b),e&&(a[f][e]?d.log("override: "+b+"["+f+"] for "+e):(a[f][e]={},["value","set","get"].forEach(function(b){b in a[f]&&(a[f][e][b]=a[f][b],delete a[f][b])}))),a[f]=d.defineNodeNameProperty(b,f,a[f]);c||m.flushTmpCache();return a},createElement:function(b,
a,e){var h;c.isFunction(a)&&(a={after:a});m.createTmpCache(b);a.before&&m.createElement(b,a.before);e&&(h=d.defineNodeNameProperties(b,e,!1,!0));a.after&&m.createElement(b,a.after);m.flushTmpCache();return h},onNodeNamesPropertyModify:function(b,a,e,h){"string"==typeof b&&(b=b.split(j));c.isFunction(e)&&(e={set:e});b.forEach(function(b){t[b]||(t[b]={});"string"==typeof a&&(a=a.split(j));e.initAttr&&m.createTmpCache(b);a.forEach(function(a){t[b][a]||(t[b][a]=[],l[a]=!0);if(e.set){if(h)e.set.only=h;
t[b][a].push(e.set)}e.initAttr&&m.content(b,a)});m.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,a,e){e||(e={});if(c.isFunction(e))e.set=e;d.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?o:a}},removeAttr:{value:function(){this.removeAttribute(a);e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(b,a,e){if(b.nodeName){if(e===
o)return e=(b.attributes[a]||{}).value,null==e?o:e;"boolean"==typeof e?e?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,e)}},activeLang:function(){var b=[],a={},e,h,f=/:\/\/|^\.*\//,j=function(a,b,e){return b&&e&&-1!==c.inArray(b,e.availabeLangs||[])?(a.loading=!0,e=e.langSrc,f.test(e)||(e=d.cfg.basePath+e),d.loader.loadScript(e+b+".js",function(){a.langObj[b]?(a.loading=!1,g(a,!0)):c(function(){a.langObj[b]&&g(a,!0);a.loading=!1})}),!0):!1},m=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},
g=function(a,b){if(a.activeLang!=e&&a.activeLang!==h){var c=n[a.module].options;if(a.langObj[e]||h&&a.langObj[h])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[h],e),m(a.module);else if(!b&&!j(a,e,c)&&!j(a,h,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),m(a.module)}};return function(f){if("string"==typeof f&&f!==e)e=f,h=e.split("-")[0],e==h&&(h=!1),c.each(b,function(a,b){g(b)});else if("object"==typeof f)if(f.register)a[f.register]||(a[f.register]=[]),a[f.register].push(f),
f.callback();else{if(!f.activeLang)f.activeLang="";b.push(f);g(f)}return e}}()});c.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){d[b]=function(b,c,f,g){"string"==typeof b&&(b=b.split(j));var m={};b.forEach(function(b){m[b]=d[a](b,c,f,g)});return m}});d.isReady("webshimLocalization",!0)});
(function(c,d){var i=c.webshims.browserVersion;if(!(c.browser.mozilla&&5<i)&&(!c.browser.msie||12>i&&7<i)){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},o=function(c,d){c.getAttribute("role")||c.setAttribute("role",d)};c.webshims.addReady(function(n,j){c.each(k,function(d,l){for(var i=c(d,n).add(j.filter(d)),k=0,p=i.length;k<p;k++)o(i[k],l)});if(n===d){var i=d.getElementsByTagName("header")[0],l=d.getElementsByTagName("footer"),p=l.length;
i&&!c(i).closest("section, article")[0]&&o(i,"banner");p&&(i=l[p-1],c(i).closest("section, article")[0]||o(i,"contentinfo"))}})}})(jQuery,document);
(function(c,d,i){var k=d.audio&&d.video,o=!1;if(k)c=document.createElement("video"),d.videoBuffered="buffered"in c,o="loop"in c,i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),d.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:d.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(c,d,i,l,p){var g=d.mediaelement,t=d.cfg.mediaelement,
s=function(b,a){var b=c(b),e={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!e.src)return e;var h=b.attr("type");if(h)e.type=h,e.container=c.trim(h.split(";")[0]);else if(a||(a=b[0].nodeName.toLowerCase(),"source"==a&&(a=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),h=g.getTypeForSrc(e.src,a))e.type=h,e.container=h,d.warn("you should always provide a proper mime-type using the source element. "+e.src+" detected as: "+h),c.nodeName(b[0],"source")&&b.attr("type",
h);if(h=b.attr("media"))e.media=h;return e},w=swfobject.hasFlashPlayerVersion("9.0.115"),v=function(){d.ready("mediaelement-swf",function(){if(!g.createSWF)d.modules["mediaelement-swf"].test=c.noop,d.reTest(["mediaelement-swf"],k)})};g.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};g.mimeTypes.source=c.extend({},g.mimeTypes.audio,g.mimeTypes.video);g.getTypeForSrc=function(b,a){if(-1!=b.indexOf("youtube.com/watch?")||-1!=b.indexOf("youtube.com/v/"))return"video/youtube";
var b=b.split("?")[0].split("."),b=b[b.length-1],e;c.each(g.mimeTypes[a],function(a,c){if(-1!==c.indexOf(b))return e=a,!1});return e};g.srces=function(b,a){b=c(b);if(a)b.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(a)||(a=[a]),a.forEach(function(a){var c=l.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var a=[],e=b[0].nodeName.toLowerCase(),
f=s(b,e);f.src?a.push(f):c("source",b).each(function(){f=s(this,e);f.src&&a.push(f)});return a}};c.fn.loadMediaSrc=function(b,a){return this.each(function(){a!==p&&(c(this).removeAttr("poster"),a&&c.attr(this,"poster",a));g.srces(this,b);c(this).mediaLoad()})};g.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
g.canSwfPlaySrces=function(b,a){var e="";w&&(b=c(b),a=a||g.srces(b),c.each(a,function(a,b){if(b.container&&b.src&&-1!=g.swfMimeTypes.indexOf(b.container))return e=b,!1}));return e};var u={};g.canNativePlaySrces=function(b,a){var e="";if(k){var b=c(b),f=(b[0].nodeName||"").toLowerCase();if(!u[f])return e;a=a||g.srces(b);c.each(a,function(a,c){if(c.type&&u[f].prop._supvalue.call(b[0],c.type))return e=c,!1})}return e};g.setError=function(b,a){a||(a="can't play sources");c(b).pause().data("mediaerror",
a);d.warn("mediaelementError: "+a);setTimeout(function(){c(b).data("mediaerror")&&c(b).trigger("mediaerror")},1)};var f=function(){var b;return function(a,c,h){d.ready("mediaelement-swf",function(){g.createSWF?g.createSWF(a,c,h):b||(b=!0,v(),f(a,c,h))})}}(),x=function(b,a,c,h,d){c||!1!==c&&a&&"flash"==a.isActive?(c=g.canSwfPlaySrces(b,h))?f(b,c,a):d?g.setError(b,!1):x(b,a,!1,h,!0):(c=g.canNativePlaySrces(b,h))?a&&"flash"==a.isActive&&g.setActive(b,"html5",a):d?(g.setError(b,!1),a&&"flash"==a.isActive&&
g.setActive(b,"html5",a)):x(b,a,!0,h,!0)},m=/^(?:embed|object|datalist)$/i,y=function(b,a){var e=d.data(b,"mediaelementBase")||d.data(b,"mediaelementBase",{}),f=g.srces(b),l=b.parentNode;clearTimeout(e.loadTimer);c.data(b,"mediaerror",!1);if(f.length&&l&&!(1!=l.nodeType||m.test(l.nodeName||"")))a=a||d.data(b,"mediaelement"),x(b,a,t.preferFlash||p,f)};c(l).bind("ended",function(b){var a=d.data(b.target,"mediaelement");(!o||a&&"html5"!=a.isActive||c.prop(b.target,"loop"))&&setTimeout(function(){!c.prop(b.target,
"paused")&&c.prop(b.target,"loop")&&c(b.target).prop("currentTime",0).play()},1)});o||d.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var a=d.defineNodeNameProperty(b,"load",{prop:{value:function(){var b=d.data(this,"mediaelement");y(this,b);k&&(!b||"html5"==b.isActive)&&a.prop._supvalue&&a.prop._supvalue.apply(this,arguments)}}});u[b]=d.defineNodeNameProperty(b,"canPlayType",{prop:{value:function(a){var f="";k&&u[b].prop._supvalue&&(f=u[b].prop._supvalue.call(this,
a),"no"==f&&(f=""));!f&&w&&(a=c.trim((a||"").split(";")[0]),-1!=g.swfMimeTypes.indexOf(a)&&(f="maybe"));return f}}})});d.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=this,a=d.data(b,"mediaelementBase")||d.data(b,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){y(b);b=null},9)}});i=function(){d.addReady(function(b,a){c("video, audio",b).add(a.filter("video, audio")).each(function(){c.browser.msie&&8<d.browserVersion&&c.prop(this,
"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():y(this);if(k){var a,b,f=this,m=function(){var a=c.prop(f,"buffered");if(a){for(var b="",e=0,h=a.length;e<h;e++)b+=a.end(e);return b}},g=function(){var a=m();a!=b&&(b=a,c(f).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==c.type&&(b=m());clearTimeout(a);a=setTimeout(g,999)}).bind("emptied stalled mediaerror abort suspend",
function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})})};k?(d.isReady("mediaelement-core",!0),i(),w&&d.ready("WINDOWLOAD mediaelement",v)):d.ready("mediaelement-swf",i)})})(jQuery,Modernizr,jQuery.webshims);
(function(c){var d=window.Modernizr,i=c.webshims;i.capturingEventPrevented=function(d){if(!d._isPolyfilled){var i=d.isDefaultPrevented,g=d.preventDefault;d.preventDefault=function(){clearTimeout(c.data(d.target,d.type+"DefaultPrevented"));c.data(d.target,d.type+"DefaultPrevented",setTimeout(function(){c.removeData(d.target,d.type+"DefaultPrevented")},30));return g.apply(this,arguments)};d.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!c.data(d.target,d.type+"DefaultPrevented"))};
d._isPolyfilled=!0}};if(d.formvalidation){var k=c('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');d.bugfreeformvalidation=d.requiredSelect=!!("required"in c("select",k)[0]);if(window.opera||c.browser.webkit||window.testGoodWithFix){var o=c("input",k).eq(0),n,j=function(l){var j=["form-extend","form-message","form-native-fix"];l&&(l.preventDefault(),l.stopImmediatePropagation());clearTimeout(n);setTimeout(function(){k&&
(k.remove(),k=o=null)},9);if(!d.bugfreeformvalidation||!d.requiredSelect)i.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),i.modules["form-extend"].test=c.noop;i.isReady("form-number-date-api")&&j.push("form-number-date-api");i.reTest(j);if(c.browser.opera||window.testGoodWithFix)i.loader.loadList(["dom-extend"]),i.ready("dom-extend",function(){var g=function(c){c.preventDefault()};["form","input","textarea","select"].forEach(function(d){var l=i.defineNodeNameProperty(d,"checkValidity",
{prop:{value:function(){i.fromSubmit||c(this).bind("invalid.checkvalidity",g);i.fromCheckValidity=!0;var d=l.prop._supvalue.apply(this,arguments);i.fromSubmit||c(this).unbind("invalid.checkvalidity",g);i.fromCheckValidity=!1;return d}}})});d.input.list&&!(c("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&i.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var g=c("select",this);if(g[0]&&g[0].options&&
g[0].options.length)d=g[0].options}return d}}})})};k.appendTo("head");if(window.opera||window.testGoodWithFix){i.bugs.validationMessage=!o.prop("validationMessage");if((d.inputtypes||{}).date){try{o.prop("valueAsNumber",0)}catch(r){}i.bugs.valueAsNumberSet="1970-01-01"!=o.prop("value")}o.prop("value","")}k.bind("submit",function(c){d.bugfreeformvalidation=!1;j(c)});n=setTimeout(function(){k&&k.triggerHandler("submit")},9);i.capturingEvents(["input"]);i.capturingEvents(["invalid"],!0);c("input, select",
k).bind("invalid",j).filter('[type="submit"]').bind("click",function(c){c.stopImmediatePropagation()}).trigger("click")}else i.capturingEvents(["input"]),i.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(c,d,i,k,o,n){var j={radio:1},r={checkbox:1,radio:1},l=c([]),p=function(f){var f=c(f),d,g;d=l;if(j[f[0].type])g=f.prop("form"),d=(d=f[0].name)?g?c(g[d]):c(k.getElementsByName(d)).filter(function(){return!c.prop(this,"form")}):f,d=d.filter('[type="radio"]');return d},g=d.getContentValidationMessage=function(f,g){var m=f.getAttribute("x-moz-errormessage")||f.getAttribute("data-errormessage")||"";if(m&&-1!=m.indexOf("{")){try{m=jQuery.parseJSON(m)}catch(i){return m}"object"==
typeof m&&(g=g||c.prop(f,"validity")||{valid:1},g.valid||c.each(g,function(b,a){if(a&&"valid"!=b&&m[b])return m=m[b],!1}));d.data(f,"contentErrorMessage",m);if("object"==typeof m)m=m.defaultMessage}return m||""},t={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};c.extend(c.expr.filters,{"valid-element":function(f){return!(!c.prop(f,"willValidate")||!(c.prop(f,"validity")||{valid:1}).valid)},"invalid-element":function(f){return!(!c.prop(f,"willValidate")||(c.prop(f,"validity")||
{valid:1}).valid)},"required-element":function(f){return!(!c.prop(f,"willValidate")||!c.prop(f,"required"))},"optional-element":function(f){return!!(c.prop(f,"willValidate")&&!1===c.prop(f,"required"))},"in-range":function(f){if(!t[c.prop(f,"type")]||!c.prop(f,"willValidate"))return!1;f=c.prop(f,"validity");return!(!f||f.rangeOverflow||f.rangeUnderflow)},"out-of-range":function(f){if(!t[c.prop(f,"type")]||!c.prop(f,"willValidate"))return!1;f=c.prop(f,"validity");return!(!f||!f.rangeOverflow&&!f.rangeUnderflow)}});
["valid","invalid","required","optional"].forEach(function(f){c.expr.filters[f]=c.expr.filters[f+"-element"]});var s=c.event.customEvent||{},w=c.prop,v={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};c.prop=function(f,d,g){var i=w.apply(this,arguments);if(f&&"form"in f&&v[d]&&g!==o&&c(f).hasClass("form-ui-invalid")&&(c.prop(f,"validity")||{valid:1}).valid)c(f).getShadowElement().removeClass("form-ui-invalid"),"checked"==d&&g&&p(f).not(f).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return i};var u=function(f,d){var g;c.each(f,function(f,b){if(b)return g="customError"==f?c.prop(d,"validationMessage"):f,!1});return g};c(k).bind("focusout change refreshvalidityui",function(f){if(f.target&&"submit"!=f.target.type&&c.prop(f.target,"willValidate")){var d=c.data(f.target,"webshimsswitchvalidityclass");d&&clearTimeout(d);c.data(f.target,"webshimsswitchvalidityclass",setTimeout(function(){var d=c(f.target).getNativeElement()[0],g=c.prop(d,"validity"),b=c(d).getShadowElement(),a,e,h,
i;g.valid?b.hasClass("form-ui-valid")||(a="form-ui-valid",e="form-ui-invalid",i="changedvaliditystate",h="changedvalid",r[d.type]&&d.checked&&p(d).not(d).removeClass(e).addClass(a).removeAttr("aria-invalid"),c.removeData(d,"webshimsinvalidcause")):(g=u(g,d),c.data(d,"webshimsinvalidcause")!=g&&(c.data(d,"webshimsinvalidcause",g),i="changedvaliditystate"),b.hasClass("form-ui-invalid")||(a="form-ui-invalid",e="form-ui-valid",r[d.type]&&!d.checked&&p(d).not(d).removeClass(e).addClass(a),h="changedinvalid"));
a&&(b.addClass(a).removeClass(e),setTimeout(function(){c(d).trigger(h)},0));i&&setTimeout(function(){c(d).trigger(i)},0);c.removeData(f.target,"webshimsswitchvalidityclass")},9))}});s.changedvaliditystate=!0;s.changedvalid=!0;s.changedinvalid=!0;s.refreshvalidityui=!0;d.triggerInlineForm=function(f,d){c(f).trigger(d)};d.modules["form-core"].getGroupElements=p;s=function(){d.scrollRoot=c.browser.webkit||"BackCompat"==k.compatMode?c(k.body):c(k.documentElement)};s();d.ready("DOM",s);d.getRelOffset=
function(f,d){var f=c(f),g=c(d).offset(),i;c.swap(c(f)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=f.offset()});g.top-=i.top;g.left-=i.left;return g};d.validityAlert=function(){var f=!c.browser.msie||7<parseInt(c.browser.version,10)?"span":"label",l,j=!1,n=!1,b,a={hideDelay:5E3,showFor:function(e,d,f,g){a._create();var e=c(e),k=c(e).getShadowElement(),p=a.getOffsetFromBody(k);a.clear();g?this.hide():(this.getMessage(e,d),this.position(k,p),l.css({fontSize:e.css("fontSize"),
fontFamily:e.css("fontFamily")}),this.show(),this.hideDelay&&(j=setTimeout(b,this.hideDelay)),c(i).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(n);n=setTimeout(function(){a.position(k)},9)}));f||this.setFocus(k,p)},getOffsetFromBody:function(a){return d.getRelOffset(l,a)},setFocus:function(a,h){var g=c(a).getShadowFocusElement(),i=d.scrollRoot.scrollTop(),j=(h||g.offset()).top-30,m;d.getID&&"label"==f&&l.attr("for",d.getID(g));i>j&&(d.scrollRoot.animate({scrollTop:j-
5},{queue:!1,duration:Math.max(Math.min(600,1.5*(i-j)),80)}),m=!0);try{g[0].focus()}catch(n){}m&&(d.scrollRoot.scrollTop(i),setTimeout(function(){d.scrollRoot.scrollTop(i)},0));setTimeout(function(){c(k).bind("focusout.validityalert",b)},10)},getMessage:function(a,b){c("span.va-box",l).text(b||g(a[0])||a.prop("validationMessage"))},position:function(b,d){d=d?c.extend({},d):a.getOffsetFromBody(b);d.top+=b.outerHeight();l.css(d)},show:function(){"none"===l.css("display")&&l.css({opacity:0}).show();
l.addClass("va-visible").fadeTo(400,1)},hide:function(){l.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(j);c(k).unbind(".validityalert");c(i).unbind(".validityalert");l.stop().removeAttr("for")},_create:function(){if(!l)l=a.errorBubble=c("<"+f+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+f+">").css({position:"absolute",display:"none"}),
d.ready("DOM",function(){l.appendTo("body");c.fn.bgIframe&&c.browser.msie&&7>parseInt(c.browser.version,10)&&l.bgIframe()})}};b=c.proxy(a,"hide");return a}();(function(){var d,g=[],i;c(k).bind("invalid",function(l){if(!l.wrongWebkitInvalid){var b=c(l.target),a=b.getShadowElement();a.hasClass("form-ui-invalid")||(a.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){c(l.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!d)d=c.Event("firstinvalid"),
d.isInvalidUIPrevented=l.isDefaultPrevented,a=c.Event("firstinvalidsystem"),c(k).triggerHandler(a,{element:l.target,form:l.target.form,isInvalidUIPrevented:l.isDefaultPrevented}),b.trigger(d);d&&d.isDefaultPrevented()&&l.preventDefault();g.push(l.target);l.extraData="fix";clearTimeout(i);i=setTimeout(function(){var a={type:"lastinvalid",cancelable:!1,invalidlist:c(g)};d=!1;g=[];c(l.target).trigger(a,a)},9);a=b=null}})})();n.replaceValidationUI&&d.ready("DOM",function(){c(k).bind("firstinvalid",function(d){d.isInvalidUIPrevented()||
(d.preventDefault(),c.webshims.validityAlert.showFor(d.target,c(d.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(c,d,i,k,o,n){var j=d.validityMessages,i=n.overrideMessages||n.customMessages?["customValidationMessage"]:[];j.en=j.en||j["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(c){j.en.valueMissing[c]="Please select an option."});["date","time","datetime-local"].forEach(function(c){j.en.rangeUnderflow[c]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(c){j.en.rangeOverflow[c]=
"Value must be at or before {%max}."});j["en-US"]=j["en-US"]||j.en;j[""]=j[""]||j["en-US"];j.de=j.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(c){j.de.valueMissing[c]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(c){j.de.rangeUnderflow[c]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(c){j.de.rangeOverflow[c]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var r=
j[""];d.createValidationMessage=function(d,i){var g=r[i];g&&"string"!==typeof g&&(g=g[c.prop(d,"type")]||g[(d.nodeName||"").toLowerCase()]||g.defaultMessage);g&&"value,min,max,title,maxlength,label".split(",").forEach(function(i){if(-1!==g.indexOf("{%"+i)){var j=("label"==i?c.trim(c('label[for="'+d.id+'"]',d.form).text()).replace(/\*$|:$/,""):c.attr(d,i))||"";g=g.replace("{%"+i+"}",j);"value"==i&&(g=g.replace("{%valueLen}",j.length))}});return g||""};(d.bugs.validationMessage||!Modernizr.formvalidation)&&
i.push("validationMessage");d.activeLang({langObj:j,module:"form-core",callback:function(c){r=c}});Modernizr.input.list&&!(c("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var i=c("select",this);if(i[0]&&i[0].options&&i[0].options.length)d=i[0].options}return d}}});i.forEach(function(i){d.defineNodeNamesProperty(["fieldset","output","button"],
i,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(j){var g=d.defineNodeNameProperty(j,i,{prop:{get:function(){var i=this,j="";if(!c.prop(i,"willValidate"))return j;var k=c.prop(i,"validity")||{valid:1};if(k.valid||(j=d.getContentValidationMessage(i,k)))return j;if(k.customError&&i.nodeName&&(j=Modernizr.formvalidation&&g.prop._supget?g.prop._supget.call(i):d.data(i,"customvalidationMessage")))return j;c.each(k,function(c,g){if("valid"!=c&&g&&(j=d.createValidationMessage(i,
c)))return!1});return j||""},writeable:!1}})})})});
