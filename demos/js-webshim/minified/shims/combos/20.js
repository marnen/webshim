(function(c,d,j){var n=d.audio&&d.video,v=!1,l=j.cfg.mediaelement,p=j.bugs,q;if(n){var t=document.createElement("video");d.videoBuffered="buffered"in t;v="loop"in t;j.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));d.videoBuffered||(j.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:d.videoBuffered,d:["dom-support"]}),j.reTest("mediaelement-native-fix"))}if(n&&!l.preferFlash){var u=function(o){var d=o.target.parentNode;
!l.preferFlash&&(c(o.target).is("audio, video")||d&&c("source:last",d)[0]==o.target)&&j.ready("mediaelement-swf",function(){setTimeout(function(){q&&!l.preferFlash&&!c(o.target).closest("audio, video").is(".nonnative-api-active")?(l.preferFlash=!0,document.removeEventListener("error",u,!0),c("audio, video").mediaLoad(),j.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+o.target.src)):q||document.removeEventListener("error",u,!0)},20)})};document.addEventListener("error",
u,!0);c("audio, video").each(function(){this.error&&u({target:this})})}p.track=!1;d.track&&function(){p.track="number"!=typeof c("<track />")[0].readyState||!c("<video />")[0].addTextTrack;var o=j.cfg.track,d=function(o){c(o.target).filter("track").each(l)},l=function(){if(p.track||!o.override&&3==c.prop(this,"readyState"))o.override=!0,j.reTest("track"),document.removeEventListener("error",d,!0),this&&c.nodeName(this,"track")?j.error("track support was overwritten. Please check your vtt mime-type"):
j.info("track support was overwritten.")},n=function(){document.addEventListener("error",d,!0);p.track?l():c("track").each(l)};o.override||(j.isReady("track")?n():c(n))}();j.register("mediaelement-core",function(c,g,j,t,u){q=swfobject.hasFlashPlayerVersion("9.0.115");var h=g.mediaelement,s=function(f,e){var f=c(f),d={src:f.attr("src")||"",elem:f,srcProp:f.prop("src")};if(!d.src)return d;var i=f.attr("type");if(i)d.type=i,d.container=c.trim(i.split(";")[0]);else if(e||(e=f[0].nodeName.toLowerCase(),
"source"==e&&(e=(f.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i=h.getTypeForSrc(d.src,e))d.type=i,d.container=i;if(i=f.attr("media"))d.media=i;return d},k=!q&&"postMessage"in j&&n,E=function(){g.ready("mediaelement-swf",function(){if(!h.createSWF)g.modules["mediaelement-swf"].test=c.noop,g.reTest(["mediaelement-swf"],n)})},z=function(){var f;return function(){!f&&k&&(f=!0,g.loader.loadScript("https://www.youtube.com/player_api"),c(function(){g.polyfill("mediaelement-yt")}))}}(),
x=function(){q?E():z();c(function(){g.loader.loadList(["track-ui"])})};g.addPolyfill("mediaelement-yt",{test:!k,d:["dom-support"]});h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg",
"mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=c.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(f,e){if(-1!=f.indexOf("youtube.com/watch?")||-1!=f.indexOf("youtube.com/v/"))return"video/youtube";var f=f.split("?")[0].split("."),f=f[f.length-
1],d;c.each(h.mimeTypes[e],function(c,e){if(-1!==e.indexOf(f))return d=c,!1});return d};h.srces=function(f,e){f=c(f);if(e)f.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(e)||(e=[e]),e.forEach(function(c){var e=t.createElement("source");"string"==typeof c&&(c={src:c});e.setAttribute("src",c.src);c.type&&e.setAttribute("type",c.type);c.media&&e.setAttribute("media",c.media);f.append(e)});else{var e=[],d=f[0].nodeName.toLowerCase(),i=s(f,d);i.src?e.push(i):c("source",f).each(function(){i=
s(this,d);i.src&&e.push(i)});return e}};c.fn.loadMediaSrc=function(f,e){return this.each(function(){e!==u&&(c(this).removeAttr("poster"),e&&c.attr(this,"poster",e));h.srces(this,f);c(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");h.canThirdPlaySrces=function(f,e){var d="";
if(q||k)f=c(f),e=e||h.srces(f),c.each(e,function(c,f){if(f.container&&f.src&&(q&&-1!=h.swfMimeTypes.indexOf(f.container)||k&&"video/youtube"==f.container))return d=f,!1});return d};var m={};h.canNativePlaySrces=function(f,e){var d="";if(n){var f=c(f),i=(f[0].nodeName||"").toLowerCase();if(!m[i])return d;e=e||h.srces(f);c.each(e,function(c,e){if(e.type&&m[i].prop._supvalue.call(f[0],e.type))return d=e,!1})}return d};h.setError=function(f,e){e||(e="can't play sources");c(f).pause().data("mediaerror",
e);g.warn("mediaelementError: "+e);setTimeout(function(){c(f).data("mediaerror")&&c(f).trigger("mediaerror")},1)};var C=function(){var c;return function(e,d,i){g.ready(q?"mediaelement-swf":"mediaelement-yt",function(){h.createSWF?h.createSWF(e,d,i):c||(c=!0,x(),C(e,d,i))});!c&&k&&!h.createSWF&&z()}}(),A=function(c,e,d,i,g){d||!1!==d&&e&&"third"==e.isActive?(d=h.canThirdPlaySrces(c,i))?C(c,d,e):g?h.setError(c,!1):A(c,e,!1,i,!0):(d=h.canNativePlaySrces(c,i))?e&&"third"==e.isActive&&h.setActive(c,"html5",
e):g?(h.setError(c,!1),e&&"third"==e.isActive&&h.setActive(c,"html5",e)):A(c,e,!0,i,!0)},D=/^(?:embed|object|datalist)$/i,B=function(f,d){var k=g.data(f,"mediaelementBase")||g.data(f,"mediaelementBase",{}),i=h.srces(f),j=f.parentNode;clearTimeout(k.loadTimer);c.data(f,"mediaerror",!1);if(i.length&&j&&!(1!=j.nodeType||D.test(j.nodeName||"")))d=d||g.data(f,"mediaelement"),A(f,d,l.preferFlash||u,i)};c(t).bind("ended",function(d){var e=g.data(d.target,"mediaelement");(!v||e&&"html5"!=e.isActive||c.prop(d.target,
"loop"))&&setTimeout(function(){!c.prop(d.target,"paused")&&c.prop(d.target,"loop")&&c(d.target).prop("currentTime",0).play()},1)});v||g.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(d){var e=g.defineNodeNameProperty(d,"load",{prop:{value:function(){var c=g.data(this,"mediaelement");B(this,c);n&&(!c||"html5"==c.isActive)&&e.prop._supvalue&&e.prop._supvalue.apply(this,arguments)}}});m[d]=g.defineNodeNameProperty(d,"canPlayType",{prop:{value:function(e){var i=
"";n&&m[d].prop._supvalue&&(i=m[d].prop._supvalue.call(this,e),"no"==i&&(i=""));!i&&q&&(e=c.trim((e||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(e)&&(i="maybe"));return i}}})});g.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var c=this,d=g.data(c,"mediaelementBase")||g.data(c,"mediaelementBase",{});clearTimeout(d.loadTimer);d.loadTimer=setTimeout(function(){B(c);c=null},9)}});j=function(){g.addReady(function(d,e){c("video, audio",d).add(e.filter("video, audio")).each(function(){c.browser.msie&&
8<g.browserVersion&&c.prop(this,"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():B(this);if(n){var d,e,f=this,h=function(){var d=c.prop(f,"buffered");if(d){for(var e="",h=0,i=d.length;h<i;h++)e+=d.end(h);return e}},j=function(){var d=h();d!=e&&(e=d,c(f).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==c.type&&(e=h());clearTimeout(d);d=setTimeout(j,999)}).bind("emptied stalled mediaerror abort suspend",
function(c){"emptied"==c.type&&(e=!1);clearTimeout(d)})}})})};d.track&&!p.track?(g.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),c(function(){g.polyfill("track")})):c(function(){g.loader.loadList(["track-ui"])});n?(g.isReady("mediaelement-core",!0),j(),g.ready("WINDOWLOAD mediaelement",x)):g.ready("mediaelement-swf",j)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(c,d,j,n,v,l){var p=d.mediaelement,q=j.swfobject,t=Modernizr.audio&&Modernizr.video,u=q.hasFlashPlayerVersion("9.0.115"),o=0,j={paused:!0,ended:!1,currentSrc:"",duration:j.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)d.error("buffered index size error");else return 0},end:function(a){if(a)d.error("buffered index size error");else return 0},length:0}},g=Object.keys(j),H={currentTime:0,volume:1,
muted:!1};Object.keys(H);var I=c.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:v},j,H),G=/^jwplayer-/,h=function(a){if(a=n.getElementById(a.replace(G,"")))return a=d.data(a,"mediaelement"),"third"==a.isActive?a:null},s=function(a){return(a=d.data(a,"mediaelement"))&&"third"==a.isActive?a:null},k=function(a,b){b=c.Event(b);b.preventDefault();c.event.trigger(b,v,a)},E=l.playerPath||d.cfg.basePath+
"jwplayer/"+(l.playerName||"player.swf"),z=l.pluginPath||d.cfg.basePath+"swf/jwwebshims.swf";d.extendUNDEFProp(l.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});d.extendUNDEFProp(l.jwVars,{screencolor:"ffffffff"});d.extendUNDEFProp(l.jwAttrs,{bgcolor:"#000000"});var x=function(a,b){var d=a.duration;if(!(d&&0<a._durationCalcs)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||0>=a.duration||a.duration===a._lastDuration)a.duration=d}catch(e){}a.duration&&
a.duration!=a._lastDuration?(k(a._elem,"durationchange"),("audio"==a._elemNodeName||a._callMeta)&&p.jwEvents.Model.META(c.extend({duration:a.duration},b),a),a._durationCalcs--):a._durationCalcs++}},m=function(a,b){3>a&&clearTimeout(b._canplaythroughTimer);if(3<=a&&3>b.readyState)b.readyState=a,k(b._elem,"canplay"),clearTimeout(b._canplaythroughTimer),b._canplaythroughTimer=setTimeout(function(){m(4,b)},4E3);if(4<=a&&4>b.readyState)b.readyState=a,k(b._elem,"canplaythrough");b.readyState=a};p.jwEvents=
{View:{PLAY:function(a){var b=h(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;k(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(a){var b=h(a.id);if(b&&"percentage"in a&&b._bufferedEnd!=a.percentage){b.networkState=100==a.percentage?1:2;(isNaN(b.duration)||5<a.percentage&&25>a.percentage||100===a.percentage)&&x(b,a);if(b.ended)b.ended=!1;if(b.duration){2<a.percentage&&20>a.percentage?m(3,b):20<a.percentage&&m(4,b);if(b._bufferedEnd&&
b._bufferedEnd>a.percentage)b._bufferedStart=b.currentTime||0;b._bufferedEnd=a.percentage;b.buffered.length=1;if(100==a.percentage)b.networkState=1,m(4,b);c.event.trigger("progress",v,b._elem,!0)}}},META:function(a,b){if(b=b&&b.networkState?b:h(a.id))if("duration"in a){if(!b._metadata||!((!a.height||b.videoHeight==a.height)&&a.duration===b.duration)){b._metadata=!0;var c=b.duration;if(a.duration)b.duration=a.duration;b._lastDuration=b.duration;if(a.height||a.width)b.videoHeight=a.height||0,b.videoWidth=
a.width||0;if(!b.networkState)b.networkState=2;1>b.readyState&&m(1,b);b.duration&&c!==b.duration&&k(b._elem,"durationchange");k(b._elem,"loadedmetadata")}}else b._callMeta=!0},TIME:function(a){var b=h(a.id);if(b&&b.currentTime!==a.position){b.currentTime=a.position;b.duration&&b.duration<b.currentTime&&x(b,a);2>b.readyState&&m(2,b);if(b.ended)b.ended=!1;k(b._elem,"timeupdate")}},STATE:function(a){var b=h(a.id);if(b)switch(a.newstate){case "BUFFERING":if(b.ended)b.ended=!1;m(1,b);k(b._elem,"waiting");
break;case "PLAYING":b.paused=!1;b._ppFlag=!0;b.duration||x(b,a);3>b.readyState&&m(3,b);if(b.ended)b.ended=!1;k(b._elem,"playing");break;case "PAUSED":if(!b.paused&&!b.stopPlayPause)b.paused=!0,b._ppFlag=!0,k(b._elem,"pause");break;case "COMPLETED":4>b.readyState&&m(4,b),b.ended=!0,k(b._elem,"ended")}}},Controller:{ERROR:function(a){var b=h(a.id);b&&p.setError(b._elem,a.message)},SEEK:function(a){var b=h(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play","false")}catch(c){}if(b.currentTime!=
a.position)b.currentTime=a.position,k(b._elem,"timeupdate")}},VOLUME:function(a){var b=h(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,k(b._elem,"volumechange")},MUTE:function(a){if(!a.state){var b=h(a.id);if(b&&b.muted!=a.state)b.muted=a.state,k(b._elem,"volumechange")}}}};var C=function(a){var b=!0;c.each(p.jwEvents,function(d,e){c.each(e,function(c){try{a.jwapi["add"+d+"Listener"](c,"jQuery.webshims.mediaelement.jwEvents."+d+"."+c)}catch(e){return b=!1}})});return b},A=function(a){var b=
a.actionQueue.length,c=0,d;if(b&&"third"==a.isActive)for(;a.actionQueue.length&&b>c;)c++,d=a.actionQueue.shift(),a.jwapi[d.fn].apply(a.jwapi,d.args);if(a.actionQueue.length)a.actionQueue=[]},D=function(a){a&&(a._ppFlag===v&&c.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if("third"==a.isActive&&(a._ppFlag===v||!a.paused))try{c(a._elem).play()}catch(b){}},1)},B=function(a){if(a&&"video"==a._elemNodeName){var b,d,e,f,w,r,h,i,g=function(g,j){if(j&&g&&!(1>j||1>g||"third"!=a.isActive))if(b&&
(b.remove(),b=!1),f=g,w=j,clearTimeout(h),d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e){r=r||c(a._elem).getShadowElement();var k;d&&!e?(k=r.height(),g*=k/j,j=k):!d&&e&&(k=r.width(),j*=k/g,g=k);i=!0;setTimeout(function(){i=!1},9);r.css({width:g,height:j})}},j=function(){if(!("third"!=a.isActive||c.prop(a._elem,"readyState")&&c.prop(this,"videoWidth"))){var f=c.prop(a._elem,"poster");if(f&&(d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e))b&&(b.remove(),b=!1),
b=c('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),b.bind("load error alreadycomplete",function(){clearTimeout(h);var a=this,d=a.naturalWidth||a.width||a.offsetWidth,e=a.naturalHeight||a.height||a.offsetHeight;e&&d?(g(d,e),a=null):setTimeout(function(){d=a.naturalWidth||a.width||a.offsetWidth;e=a.naturalHeight||a.height||a.offsetHeight;g(d,e);b&&(b.remove(),b=!1);a=null},9);c(this).unbind()}).prop("src",f).appendTo("body").each(function(){this.complete||
this.error?c(this).triggerHandler("alreadycomplete"):(clearTimeout(h),h=setTimeout(function(){c(a._elem).triggerHandler("error")},9999))})}};c(a._elem).bind("loadedmetadata",function(){g(c.prop(this,"videoWidth"),c.prop(this,"videoHeight"))}).bind("emptied",j).bind("swfstageresize updatemediaelementdimensions",function(){i||g(f,w)}).bind("emptied",function(){f=void 0;w=void 0}).triggerHandler("swfstageresize");j();c.prop(a._elem,"readyState")&&g(c.prop(a._elem,"videoWidth"),c.prop(a._elem,"videoHeight"))}};
p.playerResize=function(a){a&&(a=n.getElementById(a.replace(G,"")))&&c(a).triggerHandler("swfstageresize")};c(n).bind("emptied",function(a){a=s(a.target);D(a)});var f;p.jwPlayerReady=function(a){var b=h(a.id),e=0,g=function(){if(!(9<e))if(e++,C(b)){if(b.wasSwfReady)c(b._elem).mediaLoad();else{var f=parseFloat(a.version,10);(5.6>f||6<=f)&&d.warn("mediaelement-swf is only testet with jwplayer 5.6+")}b.wasSwfReady=!0;b.tryedReframeing=0;A(b);D(b)}else clearTimeout(b.reframeTimer),b.reframeTimer=setTimeout(g,
9*e),2<e&&9>b.tryedReframeing&&(b.tryedReframeing++,b.shadowElem.css({overflow:"visible"}),setTimeout(function(){b.shadowElem.css({overflow:"hidden"})},16))};if(b&&b.jwapi){if(!b.tryedReframeing)b.tryedReframeing=0;clearTimeout(f);b.jwData=a;b.shadowElem.removeClass("flashblocker-assumed");c.prop(b._elem,"volume",b.volume);c.prop(b._elem,"muted",b.muted);g()}};var e=c.noop;if(t){var K={play:1,playing:1},i="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),
J=i.map(function(a){return a+".webshimspolyfill"}).join(" "),L=function(a){var b=d.data(a.target,"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==("third"==b.activating)&&(a.stopImmediatePropagation(),K[a.type]&&b.isActive!=b.activating&&c(a.target).pause())},e=function(a){c(a).unbind(J).bind(J,L);i.forEach(function(b){d.moveToFirstEvent(a,b)})};e(n)}p.setActive=function(a,b,e){e||(e=d.data(a,"mediaelement"));if(e&&e.isActive!=b){"html5"!=b&&"third"!=b&&d.warn("wrong type for mediaelement activating: "+
b);var f=d.data(a,"shadowData");e.activating=b;c(a).pause();e.isActive=b;"third"==b?(f.shadowElement=f.shadowFocusElement=e.shadowElem[0],c(a).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(c(a).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),f.shadowElement=f.shadowFocusElement=!1);c(a).trigger("mediaelementapichange")}};var O=function(){var a="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),
b=a.length;return function(c){if(c){var d=b,e=c.networkState;for(m(0,c);--d;)delete c[a[d]];c.actionQueue=[];c.buffered.length=0;e&&k(c._elem,"emptied")}}}(),F=function(a,b){var d=a._elem,e=a.shadowElem;c(d)[b?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!b?e.css({width:0,height:0}):e.css({width:d.style.width||c(d).width(),height:d.style.height||c(d).height()})};p.createSWF=function(a,b,g){if(u){1>o?o=1:o++;var h=c.extend({},l.jwVars,{image:c.prop(a,"poster")||"",file:b.srcProp}),
i=c(a).data("jwvars")||{};g||(g=d.data(a,"mediaelement"));if(g&&g.swfCreated)p.setActive(a,"third",g),O(g),g.currentSrc=b.srcProp,c.extend(h,i),l.changeJW(h,a,b,g,"load"),y(a,"sendEvent",["LOAD",h]);else{var w=c.prop(a,"controls"),r="jwplayer-"+d.getID(a),j=c.extend({},l.jwParams,c(a).data("jwparams")),k=a.nodeName.toLowerCase(),n=c.extend({},l.jwAttrs,{name:r,id:r},c(a).data("jwattrs")),m=c('<div class="polyfill-'+k+' polyfill-mediaelement" id="wrapper-'+r+'"><div id="'+r+'"></div>').css({position:"relative",
overflow:"hidden"}),g=d.data(a,"mediaelement",d.objectCreate(I,{actionQueue:{value:[]},shadowElem:{value:m},_elemNodeName:{value:k},_elem:{value:a},currentSrc:{value:b.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=g.buffered.length)d.error("buffered index size error");else return 0},end:function(a){if(a>=g.buffered.length)d.error("buffered index size error");else return(g.duration-g._bufferedStart)*g._bufferedEnd/100+g._bufferedStart},length:0}}}));F(g,w);m.insertBefore(a);
t&&c.extend(g,{volume:c.prop(a,"volume"),muted:c.prop(a,"muted")});c.extend(h,{id:r,controlbar:w?l.jwVars.controlbar||("video"==k?"over":"bottom"):"video"==k?"none":"bottom",icons:""+(w&&"video"==k)},i,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});h.plugins=h.plugins?h.plugins+(","+z):z;d.addShadowDom(a,m);e(a);p.setActive(a,"third",g);l.changeJW(h,a,b,g,"embed");c(a).bind("updatemediaelementdimensions",function(){F(g,c.prop(a,"controls"))});B(g);q.embedSWF(E,r,"100%","100%","9.0.0",
!1,h,j,n,function(b){if(b.success)g.jwapi=b.ref,w||c(b.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!b.ref.parentNode&&m[0].parentNode||"none"==b.ref.style.display)m.addClass("flashblocker-assumed"),c(a).trigger("flashblocker"),d.warn("flashblocker assumed");c(b.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),f||(clearTimeout(f),f=setTimeout(function(){var a=c(b.ref);1<a[0].offsetWidth&&1<a[0].offsetHeight&&0===location.protocol.indexOf("file:")?d.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):
(2>a[0].offsetWidth||2>a[0].offsetHeight)&&d.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){c(a).mediaLoad()},1)};var y=function(a,b,c,d){return(d=d||s(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},e,f=function(c){"audio"==a&&
("videoHeight"==c||"videoWidth"==c)||(b[c]={get:function(){var a=s(this);return a?a[c]:t&&e[c].prop._supget?e[c].prop._supget.apply(this):I[c]},writeable:!1})},h=function(a,c){f(a);delete b[a].writeable;b[a].set=c};h("volume",function(a){var b=s(this);if(b){if(a*=100,!isNaN(a)){var c=b.muted;(0>a||100<a)&&d.error("volume greater or less than allowed "+a/100);y(this,"sendEvent",["VOLUME",a],b);if(c)try{b.jwapi.sendEvent("mute","true")}catch(f){}a/=100;if(!(b.volume==a||"third"!=b.isActive))b.volume=
a,k(b._elem,"volumechange")}}else if(e.volume.prop._supset)return e.volume.prop._supset.apply(this,arguments)});h("muted",function(a){var b=s(this);if(b){if(a=!!a,y(this,"sendEvent",["mute",""+a],b),!(b.muted==a||"third"!=b.isActive))b.muted=a,k(b._elem,"volumechange")}else if(e.muted.prop._supset)return e.muted.prop._supset.apply(this,arguments)});h("currentTime",function(a){var b=s(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=
!0;b.stopPlayPause=!1},50);y(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,k(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(e.currentTime.prop._supset)return e.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=s(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),y(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("third"==b.isActive&&(b._ppFlag=
!0,b.paused!=("play"!=a)))b.paused="play"!=a,k(b._elem,a)},1);else if(e[a].prop._supvalue)return e[a].prop._supvalue.apply(this,arguments)}}});g.forEach(f);d.onNodeNamesPropertyModify(a,"controls",function(b,e){var f=s(this);c(this)[e?"addClass":"removeClass"]("webshims-controls");if(f){try{y(this,e?"showControls":"hideControls",[a],f)}catch(g){d.warn("you need to generate a crossdomain.xml")}"audio"==a&&F(f,e);c(f.jwapi).attr("tabindex",e?"0":"-1")}});e=d.defineNodeNameProperties(a,b,"prop")});if(u){var M=
c.cleanData,N=c.browser.msie&&9>d.browserVersion,P={object:1,OBJECT:1};c.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&o)for(b=0;b<c;b++)if(P[a[b].nodeName]){if("sendEvent"in a[b]){o--;try{a[b].sendEvent("play",!1)}catch(e){}}if(N)try{for(d in a[b])"function"==typeof a[b][d]&&(a[b][d]=null)}catch(f){}}return M.apply(this,arguments)}}t||(["poster","src"].forEach(function(a){d.defineNodeNameProperty("src"==a?["audio","video","source"]:["video"],a,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(a){d.defineNodeNamesBooleanProperty(["audio",
"video"],a)}),d.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});
