jQuery.webshims.register("dom-extend",function(a,d,j,l,n){var s=d.modules,q=/\s*,\s*/,r={},t={},o={},v={},p={},w=a.fn.val,b=function(f,i,h,c,b){return b?w.call(a(f)):w.call(a(f),h)};a.fn.val=function(f){var i=this[0];arguments.length&&null==f&&(f="");if(!arguments.length)return!i||1!==i.nodeType?w.call(this):a.prop(i,"value",f,"val",!0);if(a.isArray(f))return w.apply(this,arguments);var h=a.isFunction(f);return this.each(function(c){i=this;1===i.nodeType&&(h?(c=f.call(i,c,a.prop(i,"value",n,"val",
!0)),null==c&&(c=""),a.prop(i,"value",c,"val")):a.prop(i,"value",f,"val"))})};var e="_webshimsLib"+Math.round(1E3*Math.random()),k=function(f,i,h){f=f.jquery?f[0]:f;if(!f)return h||{};var c=a.data(f,e);h!==n&&(c||(c=a.data(f,e,{})),i&&(c[i]=h));return i?c&&c[i]:c};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(f){a.fn[f.name]=function(){return this.map(function(){var a=k(this,
"shadowData");return a&&a[f.prop]||this})}});["removeAttr","prop","attr"].forEach(function(f){r[f]=a[f];a[f]=function(i,h,c,g,e){var k="val"==g,d=!k?r[f]:b;if(!i||!t[h]||1!==i.nodeType||!k&&g&&"attr"==f&&a.attrFn[h])return d(i,h,c,g,e);var x=(i.nodeName||"").toLowerCase(),m=o[x],u="attr"==f&&(!1===c||null===c)?"removeAttr":f,l,j,q;m||(m=o["*"]);m&&(m=m[h]);m&&(l=m[u]);if(l){if("value"==h)j=l.isVal,l.isVal=k;if("removeAttr"===u)return l.value.call(i);if(c===n)return l.get?l.get.call(i):l.value;l.set&&
("attr"==f&&!0===c&&(c=h),q=l.set.call(i,c));if("value"==h)l.isVal=j}else q=d(i,h,c,g,e);if((c!==n||"removeAttr"===u)&&p[x]&&p[x][h]){var s;s="removeAttr"==u?!1:"prop"==u?!!c:!0;p[x][h].forEach(function(a){if(!a.only||(a.only="prop"==f)||"attr"==a.only&&"prop"!=f)a.call(i,c,s,k?"val":u,f)})}return q};v[f]=function(i,c,g){o[i]||(o[i]={});o[i][c]||(o[i][c]={});var e=o[i][c][f],k=function(a,i,e){return i&&i[a]?i[a]:e&&e[a]?e[a]:"prop"==f&&"value"==c?function(a){return g.isVal?b(this,c,a,!1,0===arguments.length):
r[f](this,c,a)}:"prop"==f&&"value"==a&&g.value.apply?function(a){var i=r[f](this,c);i&&i.apply&&(i=i.apply(this,arguments));return i}:function(a){return r[f](this,c,a)}};o[i][c][f]=g;if(g.value===n){if(!g.set)g.set=g.writeable?k("set",g,e):d.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+i;}:a.noop;if(!g.get)g.get=k("get",g,e)}["value","get","set"].forEach(function(a){g[a]&&(g["_sup"+a]=k(a,e))})}});var u=!a.browser.msie||8<parseInt(a.browser.version,10),c=function(){var a=d.getPrototypeOf(l.createElement("foobar")),
c=Object.prototype.hasOwnProperty;return function(h,b,e){var m=l.createElement(h),p=d.getPrototypeOf(m);if(u&&p&&a!==p&&(!m[b]||!c.call(m,b))){var j=m[b];e._supvalue=function(){return j&&j.apply?j.apply(this,arguments):j};p[b]=e.value}else e._supvalue=function(){var a=k(this,"propValue");return a&&a[b]&&a[b].apply?a[b].apply(this,arguments):a&&a[b]},g.extendValue(h,b,e.value);e.value._supvalue=e._supvalue}}(),g=function(){var f={};d.addReady(function(c,i){var h={},b=function(f){h[f]||(h[f]=a(c.getElementsByTagName(f)),
i[0]&&a.nodeName(i[0],f)&&(h[f]=h[f].add(i)))};a.each(f,function(a,f){b(a);!f||!f.forEach?d.warn("Error: with "+a+"-property. methods: "+f):f.forEach(function(f){h[a].each(f)})});h=null});var c,h=a([]),b=function(h,b){f[h]?f[h].push(b):f[h]=[b];a.isDOMReady&&(c||a(l.getElementsByTagName(h))).each(b)};return{createTmpCache:function(f){a.isDOMReady&&(c=c||a(l.getElementsByTagName(f)));return c||h},flushTmpCache:function(){c=null},content:function(f,c){b(f,function(){var f=a.attr(this,c);null!=f&&a.attr(this,
c,f)})},createElement:function(a,f){b(a,f)},extendValue:function(f,c,i){b(f,function(){a(this).each(function(){k(this,"propValue",{})[c]=this[c];this[c]=i})})}}}(),m=function(a,c){if(a.defaultValue===n)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[c||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(d,{getID:function(){var f=(new Date).getTime();return function(c){var c=a(c),h=c.attr("id");h||(f++,h="ID-"+f,c.attr("id",h));
return h}}(),extendUNDEFProp:function(f,c){a.each(c,function(a,c){a in f||(f[a]=c)})},createPropDefault:m,data:k,moveToFirstEvent:function(){var c=a._data?"_data":"data";return function(i,h,b){if((i=(a[c](i,"events")||{})[h])&&1<i.length)h=i.pop(),b||(b="bind"),"bind"==b&&i.delegateCount?i.splice(i.delegateCount,0,h):i.unshift(h)}}(),addShadowDom:function(c,i,h){h=h||{};c.jquery&&(c=c[0]);i.jquery&&(i=i[0]);var b=a.data(c,e)||a.data(c,e,{}),g=a.data(i,e)||a.data(i,e,{}),m={};if(h.shadowFocusElement){if(h.shadowFocusElement){if(h.shadowFocusElement.jquery)h.shadowFocusElement=
h.shadowFocusElement[0];m=a.data(h.shadowFocusElement,e)||a.data(h.shadowFocusElement,e,m)}}else h.shadowFocusElement=i;b.hasShadow=i;m.nativeElement=g.nativeElement=c;m.shadowData=g.shadowData=b.shadowData={nativeElement:c,shadowElement:i,shadowFocusElement:h.shadowFocusElement};h.shadowChilds&&h.shadowChilds.each(function(){k(this,"shadowData",g.shadowData)});if(h.data)m.shadowData.data=g.shadowData.data=b.shadowData.data=h.data;h=null},propTypes:{standard:function(a){m(a);if(!a.prop)a.prop={set:function(c){a.attr.set.call(this,
""+c)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){m(a);if(!a.prop)a.prop={set:function(c){c?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},src:function(){var c=l.createElement("a");c.style.display="none";return function(i,b){m(i);if(!i.prop)i.prop={set:function(a){i.attr.set.call(this,a)},get:function(){var i=this.getAttribute(b),g;if(null==i)return"";c.setAttribute("href",i+"");if(!a.support.hrefNormalized){try{a(c).insertAfterTo(this),
g=c.getAttribute("href",4)}catch(e){g=c.getAttribute("href",4)}a(c).detach()}return g||c.href}}}}(),enumarated:function(a){m(a);if(!a.prop)a.prop={set:function(c){a.attr.set.call(this,c)},get:function(){var c=(a.attr.get.call(this)||"").toLowerCase();if(!c||-1==a.limitedTo.indexOf(c))c=a.defaultValue;return c}}}},reflectProperties:function(c,b){"string"==typeof b&&(b=b.split(q));b.forEach(function(b){d.defineNodeNamesProperty(c,b,{prop:{set:function(c){a.attr(this,b,c)},get:function(){return a.attr(this,
b)||""}}})})},defineNodeNameProperty:function(b,i,h){t[i]=!0;if(h.reflect)d.propTypes[h.propType||"standard"](h,i);["prop","attr","removeAttr"].forEach(function(g){var e=h[g];e&&(e="prop"===g?a.extend({writeable:!0},e):a.extend({},e,{writeable:!0}),v[g](b,i,e),"*"!=b&&d.cfg.extendNative&&"prop"==g&&e.value&&a.isFunction(e.value)&&c(b,i,e),h[g]=e)});h.initAttr&&g.content(b,i);return h},defineNodeNameProperties:function(a,c,b,e){for(var k in c)!e&&c[k].initAttr&&g.createTmpCache(a),b&&(c[k][b]?d.log("override: "+
a+"["+k+"] for "+b):(c[k][b]={},["value","set","get"].forEach(function(a){a in c[k]&&(c[k][b][a]=c[k][a],delete c[k][a])}))),c[k]=d.defineNodeNameProperty(a,k,c[k]);e||g.flushTmpCache();return c},createElement:function(c,b,h){var e;a.isFunction(b)&&(b={after:b});g.createTmpCache(c);b.before&&g.createElement(c,b.before);h&&(e=d.defineNodeNameProperties(c,h,!1,!0));b.after&&g.createElement(c,b.after);g.flushTmpCache();return e},onNodeNamesPropertyModify:function(c,b,h,e){"string"==typeof c&&(c=c.split(q));
a.isFunction(h)&&(h={set:h});c.forEach(function(a){p[a]||(p[a]={});"string"==typeof b&&(b=b.split(q));h.initAttr&&g.createTmpCache(a);b.forEach(function(c){p[a][c]||(p[a][c]=[],t[c]=!0);if(h.set){if(e)h.set.only=e;p[a][c].push(h.set)}h.initAttr&&g.content(a,c)});g.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,b,g){g||(g={});if(a.isFunction(g))g.set=g;d.defineNodeNamesProperty(c,b,{attr:{set:function(a){this.setAttribute(b,a);g.set&&g.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?
n:b}},removeAttr:{value:function(){this.removeAttribute(b);g.set&&g.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:g.initAttr||!1})},contentAttr:function(a,c,b){if(a.nodeName){if(b===n)return a=a.attributes[c]||{},b=a.specified?a.value:null,null==b?n:b;"boolean"==typeof b?b?a.setAttribute(c,c):a.removeAttribute(c):a.setAttribute(c,b)}},activeLang:function(){var c=[],b={},g,e,k=/:\/\/|^\.*\//,m=function(c,b,g){return b&&g&&-1!==a.inArray(b,g.availabeLangs||[])?(c.loading=!0,g=g.langSrc,
k.test(g)||(g=d.cfg.basePath+g),d.loader.loadScript(g+b+".js",function(){c.langObj[b]?(c.loading=!1,p(c,!0)):a(function(){c.langObj[b]&&p(c,!0);c.loading=!1})}),!0):!1},u=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},p=function(a,c){if(a.activeLang!=g&&a.activeLang!==e){var b=s[a.module].options;if(a.langObj[g]||e&&a.langObj[e])a.activeLang=g,a.callback(a.langObj[g]||a.langObj[e],g),u(a.module);else if(!c&&!m(a,g,b)&&!m(a,e,b)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],
g),u(a.module)}};return function(k){if("string"==typeof k&&k!==g)g=k,e=g.split("-")[0],g==e&&(e=!1),a.each(c,function(a,c){p(c)});else if("object"==typeof k)if(k.register)b[k.register]||(b[k.register]=[]),b[k.register].push(k),k.callback();else{if(!k.activeLang)k.activeLang="";c.push(k);p(k)}return g}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){d[a]=function(a,b,g,e){"string"==typeof a&&
(a=a.split(q));var f={};a.forEach(function(a){f[a]=d[c](a,b,g,e)});return f}});d.isReady("webshimLocalization",!0)});
(function(a,d){var j=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<j)&&(!a.browser.msie||12>j&&7<j)){var l={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(a,d){a.getAttribute("role")||a.setAttribute("role",d)};a.webshims.addReady(function(j,q){a.each(l,function(d,p){for(var l=a(d,j).add(q.filter(d)),b=0,e=l.length;b<e;b++)n(l[b],p)});if(j===d){var r=d.getElementsByTagName("header")[0],t=d.getElementsByTagName("footer"),o=t.length;
r&&!a(r).closest("section, article")[0]&&n(r,"banner");o&&(r=t[o-1],a(r).closest("section, article")[0]||n(r,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,d,j,l,n){d.propTypes.element=function(j){d.createPropDefault(j,"attr");if(!j.prop)j.prop={get:function(){var d=j.attr.get.call(this);d&&(d=l.getElementById(d))&&j.propNodeName&&!a.nodeName(d,j.propNodeName)&&(d=null);return d||null},writeable:!1}};(function(){var s=a.webshims.cfg.forms,q=Modernizr.input.list;if(!q||s.customDatalist){var r=0,t={submit:1,button:1,reset:1,hidden:1,range:1,date:1},o=a.browser.msie&&7>parseInt(a.browser.version,10),v=
{},p=function(a){if(!a)return[];if(v[a])return v[a];var e;try{e=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(k){}v[a]=e||[];return e||[]},w={_create:function(b){if(!t[a.prop(b.input,"type")]){var e=b.datalist,k=a.data(b.input,"datalistWidget");if(e&&k&&k.datalist!==e)k.datalist=e,k.id=b.id,k.shadowList.prop("className","datalist-polyfill "+(k.datalist.className||"")+" "+k.datalist.id+"-shadowdom"),s.positionDatalist?k.shadowList.insertAfter(b.input):k.shadowList.appendTo("body"),
a(k.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(k,"_resetListCached")),k._resetListCached();else if(e){if(!(k&&k.datalist===e)){r++;var d=this;this.hideList=a.proxy(d,"hideList");this.timedHide=function(){clearTimeout(d.hideTimer);d.hideTimer=setTimeout(d.hideList,9)};this.datalist=e;this.id=b.id;this.hasViewableData=!0;this._autocomplete=a.attr(b.input,"autocomplete");a.data(b.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill '+
(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');s.positionDatalist||a(b.input).hasClass("position-datalist")?this.shadowList.insertAfter(b.input):this.shadowList.appendTo("body");this.index=-1;this.input=b.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(c){var g=a("li:not(.hidden-item)",d.shadowList),e="mousedown"==c.type||"click"==c.type;d.markItem(g.index(c.currentTarget),e,g);"click"==
c.type&&(d.hideList(),s.customDatalist&&a(b.input).trigger("datalistselect"));return"mousedown"!=c.type}).bind("focusout",this.timedHide);b.input.setAttribute("autocomplete","off");a(b.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!d.triggeredByDatalist)d.changedValue=!1,d.showHideOptions()}).bind("keydown.datalistWidget",function(c){var g=c.keyCode,e;if(40==g&&!d.showList())return d.markItem(d.index+1,!0),!1;if(d.isListVisible){if(38==g)return d.markItem(d.index-
1,!0),!1;if(!c.shiftKey&&(33==g||36==g))return d.markItem(0,!0),!1;if(!c.shiftKey&&(34==g||35==g))return c=a("li:not(.hidden-item)",d.shadowList),d.markItem(c.length-1,!0,c),!1;if(13==g||27==g)return 13==g&&(e=a("li.active-item:not(.hidden-item)",d.shadowList),d.changeValue(a("li.active-item:not(.hidden-item)",d.shadowList))),d.hideList(),s.customDatalist&&e&&e[0]&&a(b.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&d.showList()}).bind("mousedown.datalistWidget",
function(){a(this).is(":focus")&&d.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();b.input.form&&(b.input.name||b.input.id)&&a(b.input.form).bind("submit.datalistWidget"+b.input.id,function(){if(!a(b.input).hasClass("no-datalist-cache")&&"off"!=d._autocomplete){var c=a.prop(b.input,"value"),g=(b.input.name||b.input.id)+a.prop(b.input,"type");
if(!d.storedOptions)d.storedOptions=p(g);if(c&&-1==d.storedOptions.indexOf(c)&&(d.storedOptions.push(c),c=d.storedOptions,g)){c=c||[];try{localStorage.setItem("storedDatalistOptions"+g,JSON.stringify(c))}catch(e){}}}});a(j).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){d.destroy()})}}else k&&k.destroy()}},destroy:function(){var b=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(l).unbind(".datalist"+
this.id);a(j).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");b===n?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",b)},_resetListCached:function(a){var e=this,k;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(j.QUnit||(k=a&&l.activeElement==e.input)?e.updateListOptions(k):d.ready("WINDOWLOAD",function(){e.updateTimer=
setTimeout(function(){e.updateListOptions();e=null;r=1},200+100*r)}))},updateListOptions:function(b){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.css(this.input,"fontSize"),fontFamily:a.css(this.input,"fontFamily")});this.searchStart=s.customDatalist&&a(this.input).hasClass("search-start");var e=[],d=[],j=[],c,g,m,f;for(g=a.prop(this.datalist,"options"),m=0,f=g.length;m<f;m++){c=g[m];if(c.disabled)return;c={value:a(c).val()||"",text:a.trim(a.attr(c,
"label")||c.textContent||c.innerText||a.text([c])||""),className:c.className||"",style:a.attr(c,"style")||""};c.text?c.text!=c.value&&(c.className+=" different-label-value"):c.text=c.value;d[m]=c.value;j[m]=c}if(!this.storedOptions)this.storedOptions=a(this.input).hasClass("no-datalist-cache")||"off"==this._autocomplete?[]:p((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==d.indexOf(a)&&j.push({value:a,text:a,className:"stored-suggest",style:""})});
for(m=0,f=j.length;m<f;m++)g=j[m],e[m]='<li class="'+g.className+'" style="'+g.style+'" tabindex="-1" role="listitem"><span class="option-label">'+g.text+'</span> <span class="option-value">'+g.value+"</span></li>";this.arrayOptions=j;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+e.join("\n")+"</ul></div></div>");a.fn.bgIframe&&o&&this.shadowList.bgIframe();(b||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(b){var e=a.prop(this.input,
"value").toLowerCase();if(!(e===this.lastUpdatedValue||this.lastUnfoundValue&&0===e.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=e;var d=!1,j=this.searchStart,c=a("li",this.shadowList);e?this.arrayOptions.forEach(function(b,m){var f;if(!("lowerText"in b))b.lowerText=b.text!=b.value?b.value.toLowerCase()+b.text.toLowerCase():b.text.toLowerCase();f=b.lowerText.indexOf(e);(f=j?!f:-1!==f)?(a(c[m]).removeClass("hidden-item"),d=!0):a(c[m]).addClass("hidden-item")}):c.length&&(c.removeClass("hidden-item"),
d=!0);this.hasViewableData=d;!b&&d&&this.showList();if(!d)this.lastUnfoundValue=e,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var b=s.positionDatalist?a(this.input).position():d.getRelOffset(this.shadowList,this.input);b.top+=a(this.input).outerHeight();b.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",
marginLeft:"",marginRight:"",marginBottom:""}).css(b);return b},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var b=this,e;b.setPos();b.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");a(l).unbind(".datalist"+b.id).bind("mousedown.datalist"+b.id+" focusin.datalist"+b.id,function(e){e.target===b.input||b.shadowList[0]===e.target||
a.contains(b.shadowList[0],e.target)?(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},9)):b.timedHide()});a(j).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){clearTimeout(e);e=setTimeout(function(){b.setPos()},9)});clearTimeout(e);return!0},hideList:function(){if(!this.isListVisible)return!1;var b=this,e=function(){b.changedValue&&a(b.input).trigger("change");b.changedValue=!1};b.shadowList.removeClass("datalist-visible list-item-active");
b.index=-1;b.isListVisible=!1;if(b.changedValue){b.triggeredByDatalist=!0;d.triggerInlineForm&&d.triggerInlineForm(b.input,"input");if(a(b.input).is(":focus"))a(b.input).one("blur",e);else e();b.triggeredByDatalist=!1}a(l).unbind(".datalist"+b.id);a(j).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){b.shadowList.css({top:0,left:0});a(j).unbind(".datalist"+b.id)});return!0},scrollIntoView:function(b){var e=a("ul",this.shadowList),
d=a("div.datalist-box",this.shadowList),j=b.position();j.top-=(parseInt(e.css("paddingTop"),10)||0)+(parseInt(e.css("marginTop"),10)||0)+(parseInt(e.css("borderTopWidth"),10)||0);0>j.top?d.scrollTop(d.scrollTop()+j.top-2):(j.top+=b.outerHeight(),b=d.height(),j.top>b&&d.scrollTop(d.scrollTop()+(j.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",b).text(),e=a.prop(this.input,"value");if(b!=e)a(this.input).prop("value",b).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(b,
e,d){d=d||a("li:not(.hidden-item)",this.shadowList);if(d.length)0>b?b=d.length-1:b>=d.length&&(b=0),d.removeClass("active-item"),this.shadowList.addClass("list-item-active"),d=d.filter(":eq("+b+")").addClass("active-item"),e&&(this.changeValue(d),this.scrollIntoView(d)),this.index=b}};(function(){q||d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=a("select",this);b[0]?b=b[0].options:(b=a("option",this).get(),b.length&&d.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers."));
return b}}});var b={autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var d=a.data(this,"datalistWidget");d?(d._autocomplete=b,"off"==b&&d.hideList()):"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}}};q?((a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||d.defineNodeNameProperty("datalist","options",
{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}}),b.list={attr:{get:function(){var b=d.contentAttr(this,"list");null!=b?this.removeAttribute("list"):b=a.data(this,"datalistListAttr");return null==b?n:b},set:function(b){a.data(this,"datalistListAttr",b);d.objectCreate(w,n,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):
b.list={attr:{get:function(){var a=d.contentAttr(this,"list");return null==a?n:a},set:function(b){d.contentAttr(this,"list",b);d.objectCreate(w,n,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};d.defineNodeNameProperties("input",b);if(a.event.customEvent)a.event.customEvent.updateDatalist=!0,a.event.customEvent.updateInput=!0,a.event.customEvent.datalistselect=!0;d.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
(function(a){var d=window.Modernizr,j=a.webshims,l=j.bugs,n=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),s=function(){if(n[0].querySelector)try{l.findRequired=!n[0].querySelector("select:required")}catch(a){l.findRequired=!1}};l.findRequired=!1;l.validationMessage=!1;l.valueAsNumberSet=!1;j.capturingEventPrevented=function(d){if(!d._isPolyfilled){var j=d.isDefaultPrevented,
b=d.preventDefault;d.preventDefault=function(){clearTimeout(a.data(d.target,d.type+"DefaultPrevented"));a.data(d.target,d.type+"DefaultPrevented",setTimeout(function(){a.removeData(d.target,d.type+"DefaultPrevented")},30));return b.apply(this,arguments)};d.isDefaultPrevented=function(){return!(!j.apply(this,arguments)&&!a.data(d.target,d.type+"DefaultPrevented"))};d._isPolyfilled=!0}};if(!d.formvalidation||l.bustedValidity)s();else if(j.capturingEvents(["input"]),j.capturingEvents(["invalid"],!0),
d.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var q=a("input",n).eq(0),r,t=function(a){j.loader.loadList(["dom-extend"]);j.ready("dom-extend",a)},o=function(l){var o=["form-extend","form-message","form-native-fix"];l&&(l.preventDefault(),l.stopImmediatePropagation());clearTimeout(r);setTimeout(function(){n&&(n.remove(),n=q=null)},9);if(!d.bugfreeformvalidation)j.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),j.modules["form-extend"].test=a.noop;j.isReady("form-number-date-api")&&
o.push("form-number-date-api");j.reTest(o);if(q)try{q.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&t(function(){j.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(b){!b&&this&&a.prop(this,"value",a.prop(this,"value"))}});j.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(b){if(!b&&this)b=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(b)}})})}catch(b){}(a.browser.opera||window.testGoodWithFix)&&
t(function(){var b=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(d){var l=j.defineNodeNameProperty(d,"checkValidity",{prop:{value:function(){j.fromSubmit||a(this).bind("invalid.checkvalidity",b);j.fromCheckValidity=!0;var c=l.prop._supvalue.apply(this,arguments);j.fromSubmit||a(this).unbind("invalid.checkvalidity",b);j.fromCheckValidity=!1;return c}}})})})};n.appendTo("head");if(window.opera||window.testGoodWithFix){s();l.validationMessage=!q.prop("validationMessage");
if((d.inputtypes||{}).date){try{q.prop("valueAsNumber",0)}catch(v){}l.valueAsNumberSet="1970-01-01"!=q.prop("value")}q.prop("value","")}n.bind("submit",function(a){d.bugfreeformvalidation=!1;o(a)});r=setTimeout(function(){n&&n.triggerHandler("submit")},9);a("input, select",n).bind("invalid",o).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&d.bugfreeformvalidation&&!j.bugs.bustedValidity&&function(){var d=/^(?:textarea|input)$/i,
j=!1;document.addEventListener("contextmenu",function(a){d.test(a.target.nodeName||"")&&(j=a.target.form)&&setTimeout(function(){j=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&j&&j==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,d,j,l,n,s){var q={radio:1},r={checkbox:1,radio:1},t=a([]),o=d.bugs,v=function(c){var c=a(c),b,d;b=t;if(q[c[0].type])d=c.prop("form"),b=(b=c[0].name)?d?a(d[b]):a(l.getElementsByName(b)).filter(function(){return!a.prop(this,"form")}):c,b=b.filter('[type="radio"]');return b},p=d.getContentValidationMessage=function(c,b,d){var f=a(c).data("errormessage")||c.getAttribute("x-moz-errormessage")||"";d&&f[d]&&(f=f[d]);"object"==typeof f&&(b=b||a.prop(c,"validity")||
{valid:1},b.valid||a.each(b,function(a,c){if(c&&"valid"!=a&&f[a])return f=f[a],!1}));if("object"==typeof f)f=f.defaultMessage;return f||""},w={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(c){return!(!a.prop(c,"willValidate")||!(a.prop(c,"validity")||{valid:1}).valid)},"invalid-element":function(c){return!(!a.prop(c,"willValidate")||(a.prop(c,"validity")||{valid:1}).valid)},"required-element":function(c){return!(!a.prop(c,"willValidate")||!a.prop(c,"required"))},"optional-element":function(c){return!!(a.prop(c,
"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!w[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!w[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(c){a.expr.filters[c]=a.expr.filters[c+"-element"]});a.expr.filters.focus=function(a){try{var b=
a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())}catch(d){}return!1};var b=a.event.customEvent||{};(o.bustedValidity||o.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var c=a.find,b=a.find.matchesSelector,d=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,f=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var g=arguments,g=a.call(g,1,g.length);g.unshift(b.replace(d,f));return c.apply(this,
g)},g;for(g in c)c.hasOwnProperty(g)&&(b[g]=c[g]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",l.documentElement))a.find.matchesSelector=function(a,c){c=c.replace(d,f);return b.call(this,a,c)}}();var e=a.prop,k={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(c,b,d){var f=e.apply(this,arguments);if(c&&"form"in c&&k[b]&&d!==n&&a(c).hasClass("form-ui-invalid")&&(a.prop(c,"validity")||{valid:1}).valid)a(c).getShadowElement().removeClass("form-ui-invalid"),
"checked"==b&&d&&v(c).not(c).removeClass("form-ui-invalid").removeAttr("aria-invalid");return f};var u=function(c,b){var d;a.each(c,function(c,e){if(e)return d="customError"==c?a.prop(b,"validationMessage"):c,!1});return d};a(l).bind(s.validityUIEvents||"focusout change refreshvalidityui",function(c){var b,d;if(c.target&&(b=a(c.target).getNativeElement()[0],"submit"!=b.type&&a.prop(b,"willValidate"))){d=a.data(b,"webshimsswitchvalidityclass");var f=function(){var d=a.prop(b,"validity"),f=a(b).getShadowElement(),
e,j,k,l;a(b).trigger("refreshCustomValidityRules");d.valid?f.hasClass("form-ui-valid")||(e="form-ui-valid",j="form-ui-invalid",l="changedvaliditystate",k="changedvalid",r[b.type]&&b.checked&&v(b).not(b).removeClass(j).addClass(e).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(d=u(d,b),a.data(b,"webshimsinvalidcause")!=d&&(a.data(b,"webshimsinvalidcause",d),l="changedvaliditystate"),f.hasClass("form-ui-invalid")||(e="form-ui-invalid",j="form-ui-valid",r[b.type]&&!b.checked&&v(b).not(b).removeClass(j).addClass(e),
k="changedinvalid"));e&&(f.addClass(e).removeClass(j),setTimeout(function(){a(b).trigger(k)},0));l&&setTimeout(function(){a(b).trigger(l)},0);a.removeData(c.target,"webshimsswitchvalidityclass")};d&&clearTimeout(d);"refreshvalidityui"==c.type?f():a.data(c.target,"webshimsswitchvalidityclass",setTimeout(f,9))}});b.changedvaliditystate=!0;b.refreshCustomValidityRules=!0;b.changedvalid=!0;b.changedinvalid=!0;b.refreshvalidityui=!0;d.triggerInlineForm=function(b,d){a(b).trigger(d)};d.modules["form-core"].getGroupElements=
v;o=function(){d.scrollRoot=a.browser.webkit||"BackCompat"==l.compatMode?a(l.body):a(l.documentElement)};o();d.ready("DOM",o);d.getRelOffset=function(b,d){var b=a(b),e=a(d).offset(),f;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){f=b.offset()});e.top-=f.top;e.left-=f.left;return e};d.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",g,e=!1,f=!1,i,h={hideDelay:5E3,showFor:function(b,c,d,k){h._create();var b=a(b),l=
a(b).getShadowElement(),n=h.getOffsetFromBody(l);h.clear();k?this.hide():(this.getMessage(b,c),this.position(l,n),g.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(e=setTimeout(i,this.hideDelay)),a(j).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(f);f=setTimeout(function(){h.position(l)},9)}));d||this.setFocus(l,n)},getOffsetFromBody:function(a){return d.getRelOffset(g,a)},setFocus:function(f,
e){var h=a(f).getShadowFocusElement(),j=d.scrollRoot.scrollTop(),k=(e||h.offset()).top-30,m;d.getID&&"label"==b&&g.attr("for",d.getID(h));j>k&&(d.scrollRoot.animate({scrollTop:k-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(j-k)),80)}),m=!0);try{h[0].focus()}catch(n){}m&&(d.scrollRoot.scrollTop(j),setTimeout(function(){d.scrollRoot.scrollTop(j)},0));setTimeout(function(){a(l).bind("focusout.validityalert",i)},10)},getMessage:function(b,c){c||(c=p(b[0])||b.prop("validationMessage"));c?a("span.va-box",
g).text(c):this.hide()},position:function(b,c){c=c?a.extend({},c):h.getOffsetFromBody(b);c.top+=b.outerHeight();g.css(c)},show:function(){"none"===g.css("display")&&g.css({opacity:0}).show();g.addClass("va-visible").fadeTo(400,1)},hide:function(){g.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(e);a(l).unbind(".validityalert");a(j).unbind(".validityalert");g.stop().removeAttr("for")},_create:function(){if(!g)g=h.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
b+">").css({position:"absolute",display:"none"}),d.ready("DOM",function(){g.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&g.bgIframe()})}};i=a.proxy(h,"hide");return h}();(function(){var b,d=[],e;a(l).bind("invalid",function(f){if(!f.wrongWebkitInvalid){var i=a(f.target),h=i.getShadowElement();h.hasClass("form-ui-invalid")||(h.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(f.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=f.isDefaultPrevented,h=a.Event("firstinvalidsystem"),a(l).triggerHandler(h,{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),i.trigger(b);b&&b.isDefaultPrevented()&&f.preventDefault();d.push(f.target);f.extraData="fix";clearTimeout(e);e=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(d)};b=!1;d=[];a(f.target).trigger(e,e)},9);h=i=null}})})();a.fn.getErrorMessage=function(){var b="",
d=this[0];d&&(b=p(d)||a.prop(d,"customValidationMessage")||a.prop(d,"validationMessage"));return b};s.replaceValidationUI&&d.ready("DOM forms",function(){a(l).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
