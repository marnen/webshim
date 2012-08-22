jQuery.webshims.register("form-extend",function(a,b,f,i,k,m){f=f.Modernizr;k=f.inputtypes;if(f.formvalidation&&!b.bugs.bustedValidity){var g=b.inputTypes,q={};b.addInputType=function(a,c){g[a]=c};b.addValidityRule=function(a,c){q[a]=c};b.addValidityRule("typeMismatch",function(a,c,e,b){if(""===c)return!1;b=b.typeMismatch;if(!("type"in e))e.type=(a[0].getAttribute("type")||"").toLowerCase();g[e.type]&&g[e.type].mismatch&&(b=g[e.type].mismatch(c,a));return b});var d=m.overrideMessages,o=!k.number||
!k.time||!k.range||d,r="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),m=d?["value","checked"]:["value"],h=[],n=function(j,c){if(j){var e=(j.getAttribute&&j.getAttribute("type")||j.type||"").toLowerCase();if(d||g[e])d&&!c&&"radio"==e&&j.name?a(i.getElementsByName(j.name)).each(function(){a.prop(this,"validity")}):a.prop(j,"validity")}},p={};["input","textarea","select"].forEach(function(j){var c=b.defineNodeNameProperty(j,
"setCustomValidity",{prop:{value:function(e){var e=e+"",h="input"==j?a(this).getNativeElement()[0]:this;c.prop._supvalue.call(h,e);b.bugs.validationMessage&&b.data(h,"customvalidationMessage",e);o&&(b.data(h,"hasCustomError",!!e),n(h))}}});p[j]=c.prop._supvalue});if(o||d)m.push("min"),m.push("max"),m.push("step"),h.push("input");d&&(m.push("required"),m.push("pattern"),h.push("select"),h.push("textarea"));if(o){var s;h.forEach(function(j){var c=b.defineNodeNameProperty(j,"validity",{prop:{get:function(){if(!s){var e=
"input"==j?a(this).getNativeElement()[0]:this,h=c.prop._supget.call(e);if(!h)return h;var l={};r.forEach(function(a){l[a]=h[a]});if(!a.prop(e,"willValidate"))return l;s=!0;var v=a(e),f={type:(e.getAttribute&&e.getAttribute("type")||"").toLowerCase(),nodeName:(e.nodeName||"").toLowerCase()},n=v.val(),i=!!b.data(e,"hasCustomError"),k;s=!1;l.customError=i;if(l.valid&&l.customError)l.valid=!1;else if(!l.valid){var m=!0;a.each(l,function(a,j){if(j)return m=!1});if(m)l.valid=!0}a.each(q,function(a,c){l[a]=
c(v,n,f,l);if(l[a]&&(l.valid||!k)&&(d||g[f.type]&&g[f.type].mismatch))p[j].call(e,b.createValidationMessage(e,a)),l.valid=!1,k=!0});l.valid?(p[j].call(e,""),b.data(e,"hasCustomError",!1)):d&&!k&&!i&&a.each(l,function(a,c){if("valid"!==a&&c)return p[j].call(e,b.createValidationMessage(e,a)),!1});return l}},writeable:!1}})});m.forEach(function(a){b.onNodeNamesPropertyModify(h,a,function(){n(this)})});if(i.addEventListener){var t,u=function(c){if("form"in c.target){var b=c.target.form;clearTimeout(t);
n(c.target);b&&d&&a("input",b).each(function(){"password"==this.type&&n(this)})}};i.addEventListener("change",u,!0);d&&(i.addEventListener("blur",u,!0),i.addEventListener("keydown",function(a){13==a.keyCode&&u(a)},!0));i.addEventListener("input",function(a){clearTimeout(t);t=setTimeout(function(){n(a.target)},290)},!0)}var c=h.join(",");b.addReady(function(j,b){a(c,j).add(b.filter(c)).each(function(){a.prop(this,"validity")})});d&&b.ready("DOM form-message",function(){b.activeLang({register:"form-core",
callback:function(){a("input, select, textarea").getNativeElement().each(function(){if(!b.data(this,"hasCustomError")){var c=this,h=a.prop(c,"validity")||{valid:!0},e;h.valid||(e=(c.nodeName||"").toLowerCase(),a.each(h,function(a,h){if("valid"!==a&&h)return p[e].call(c,b.createValidationMessage(c,a)),!1}))}})}})})}b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}})}});
(function(a){var b=window.Modernizr,f=a.webshims,i=f.bugs,k=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),m=function(){if(k[0].querySelector)try{i.findRequired=!k[0].querySelector("select:required")}catch(a){i.findRequired=!1}};i.findRequired=!1;i.validationMessage=!1;i.valueAsNumberSet=!1;f.capturingEventPrevented=function(b){if(!b._isPolyfilled){var d=b.isDefaultPrevented,
g=b.preventDefault;b.preventDefault=function(){clearTimeout(a.data(b.target,b.type+"DefaultPrevented"));a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30));return g.apply(this,arguments)};b.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))};b._isPolyfilled=!0}};if(!b.formvalidation||i.bustedValidity)m();else if(f.capturingEvents(["input"]),f.capturingEvents(["invalid"],!0),
b.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var g=a("input",k).eq(0),q,d=function(a){f.loader.loadList(["dom-extend"]);f.ready("dom-extend",a)},o=function(h){var i=["form-extend","form-message","form-native-fix"];h&&(h.preventDefault(),h.stopImmediatePropagation());clearTimeout(q);setTimeout(function(){k&&(k.remove(),k=g=null)},9);if(!b.bugfreeformvalidation)f.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),f.modules["form-extend"].test=a.noop;f.isReady("form-number-date-api")&&
i.push("form-number-date-api");f.reTest(i);if(g)try{g.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&d(function(){f.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(b){!b&&this&&a.prop(this,"value",a.prop(this,"value"))}});f.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(b){if(!b&&this)b=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(b)}})})}catch(p){}(a.browser.opera||window.testGoodWithFix)&&
d(function(){var b=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(h){var d=f.defineNodeNameProperty(h,"checkValidity",{prop:{value:function(){f.fromSubmit||a(this).bind("invalid.checkvalidity",b);f.fromCheckValidity=!0;var c=d.prop._supvalue.apply(this,arguments);f.fromSubmit||a(this).unbind("invalid.checkvalidity",b);f.fromCheckValidity=!1;return c}}})})})};k.appendTo("head");if(window.opera||window.testGoodWithFix){m();i.validationMessage=!g.prop("validationMessage");
if((b.inputtypes||{}).date){try{g.prop("valueAsNumber",0)}catch(r){}i.valueAsNumberSet="1970-01-01"!=g.prop("value")}g.prop("value","")}k.bind("submit",function(a){b.bugfreeformvalidation=!1;o(a)});q=setTimeout(function(){k&&k.triggerHandler("submit")},9);a("input, select",k).bind("invalid",o).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&b.bugfreeformvalidation&&!f.bugs.bustedValidity&&function(){var b=/^(?:textarea|input)$/i,
d=!1;document.addEventListener("contextmenu",function(a){b.test(a.target.nodeName||"")&&(d=a.target.form)&&setTimeout(function(){d=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&d&&d==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,b,f,i,k,m){var g={radio:1},q={checkbox:1,radio:1},d=a([]),o=b.bugs,r=function(c){var c=a(c),j,b;j=d;if(g[c[0].type])b=c.prop("form"),j=(j=c[0].name)?b?a(b[j]):a(i.getElementsByName(j)).filter(function(){return!a.prop(this,"form")}):c,j=j.filter('[type="radio"]');return j},h=b.getContentValidationMessage=function(c,b,d){var e=a(c).data("errormessage")||c.getAttribute("x-moz-errormessage")||"";d&&e[d]&&(e=e[d]);"object"==typeof e&&(b=b||a.prop(c,"validity")||
{valid:1},b.valid||a.each(b,function(a,c){if(c&&"valid"!=a&&e[a])return e=e[a],!1}));if("object"==typeof e)e=e.defaultMessage;return e||""},n={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(c){return!(!a.prop(c,"willValidate")||!(a.prop(c,"validity")||{valid:1}).valid)},"invalid-element":function(c){return!(!a.prop(c,"willValidate")||(a.prop(c,"validity")||{valid:1}).valid)},"required-element":function(c){return!(!a.prop(c,"willValidate")||!a.prop(c,"required"))},"optional-element":function(c){return!!(a.prop(c,
"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!n[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!n[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(c){a.expr.filters[c]=a.expr.filters[c+"-element"]});a.expr.filters.focus=function(a){try{var b=
a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())}catch(d){}return!1};var p=a.event.customEvent||{};(o.bustedValidity||o.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var c=a.find,b=a.find.matchesSelector,d=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,e=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var j=arguments,j=a.call(j,1,j.length);j.unshift(b.replace(d,e));return c.apply(this,
j)},j;for(j in c)c.hasOwnProperty(j)&&(b[j]=c[j]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",i.documentElement))a.find.matchesSelector=function(a,c){c=c.replace(d,e);return b.call(this,a,c)}}();var s=a.prop,t={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(c,b,d){var e=s.apply(this,arguments);if(c&&"form"in c&&t[b]&&d!==k&&a(c).hasClass("form-ui-invalid")&&(a.prop(c,"validity")||{valid:1}).valid)a(c).getShadowElement().removeClass("form-ui-invalid"),
"checked"==b&&d&&r(c).not(c).removeClass("form-ui-invalid").removeAttr("aria-invalid");return e};var u=function(c,b){var d;a.each(c,function(c,h){if(h)return d="customError"==c?a.prop(b,"validationMessage"):c,!1});return d};a(i).bind(m.validityUIEvents||"focusout change refreshvalidityui",function(c){var b,d;if(c.target&&(b=a(c.target).getNativeElement()[0],"submit"!=b.type&&a.prop(b,"willValidate"))){d=a.data(b,"webshimsswitchvalidityclass");var e=function(){var e=a.prop(b,"validity"),d=a(b).getShadowElement(),
h,g,f,i;a(b).trigger("refreshCustomValidityRules");e.valid?d.hasClass("form-ui-valid")||(h="form-ui-valid",g="form-ui-invalid",i="changedvaliditystate",f="changedvalid",q[b.type]&&b.checked&&r(b).not(b).removeClass(g).addClass(h).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(e=u(e,b),a.data(b,"webshimsinvalidcause")!=e&&(a.data(b,"webshimsinvalidcause",e),i="changedvaliditystate"),d.hasClass("form-ui-invalid")||(h="form-ui-invalid",g="form-ui-valid",q[b.type]&&!b.checked&&r(b).not(b).removeClass(g).addClass(h),
f="changedinvalid"));h&&(d.addClass(h).removeClass(g),setTimeout(function(){a(b).trigger(f)},0));i&&setTimeout(function(){a(b).trigger(i)},0);a.removeData(c.target,"webshimsswitchvalidityclass")};d&&clearTimeout(d);"refreshvalidityui"==c.type?e():a.data(c.target,"webshimsswitchvalidityclass",setTimeout(e,9))}});p.changedvaliditystate=!0;p.refreshCustomValidityRules=!0;p.changedvalid=!0;p.changedinvalid=!0;p.refreshvalidityui=!0;b.triggerInlineForm=function(b,d){a(b).trigger(d)};b.modules["form-core"].getGroupElements=
r;o=function(){b.scrollRoot=a.browser.webkit||"BackCompat"==i.compatMode?a(i.body):a(i.documentElement)};o();b.ready("DOM",o);b.getRelOffset=function(b,d){var b=a(b),h=a(d).offset(),e;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){e=b.offset()});h.top-=e.top;h.left-=e.left;return h};b.validityAlert=function(){var c=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",d,g=!1,e=!1,r,l={hideDelay:5E3,showFor:function(b,c,h,i){l._create();var b=a(b),k=
a(b).getShadowElement(),n=l.getOffsetFromBody(k);l.clear();i?this.hide():(this.getMessage(b,c),this.position(k,n),d.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(g=setTimeout(r,this.hideDelay)),a(f).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(e);e=setTimeout(function(){l.position(k)},9)}));h||this.setFocus(k,n)},getOffsetFromBody:function(a){return b.getRelOffset(d,a)},setFocus:function(e,
h){var g=a(e).getShadowFocusElement(),f=b.scrollRoot.scrollTop(),l=(h||g.offset()).top-30,k;b.getID&&"label"==c&&d.attr("for",b.getID(g));f>l&&(b.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(f-l)),80)}),k=!0);try{g[0].focus()}catch(n){}k&&(b.scrollRoot.scrollTop(f),setTimeout(function(){b.scrollRoot.scrollTop(f)},0));setTimeout(function(){a(i).bind("focusout.validityalert",r)},10)},getMessage:function(b,c){c||(c=h(b[0])||b.prop("validationMessage"));c?a("span.va-box",
d).text(c):this.hide()},position:function(b,c){c=c?a.extend({},c):l.getOffsetFromBody(b);c.top+=b.outerHeight();d.css(c)},show:function(){"none"===d.css("display")&&d.css({opacity:0}).show();d.addClass("va-visible").fadeTo(400,1)},hide:function(){d.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(g);a(i).unbind(".validityalert");a(f).unbind(".validityalert");d.stop().removeAttr("for")},_create:function(){if(!d)d=l.errorBubble=a("<"+c+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
c+">").css({position:"absolute",display:"none"}),b.ready("DOM",function(){d.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&d.bgIframe()})}};r=a.proxy(l,"hide");return l}();(function(){var b,d=[],h;a(i).bind("invalid",function(e){if(!e.wrongWebkitInvalid){var g=a(e.target),f=g.getShadowElement();f.hasClass("form-ui-invalid")||(f.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(e.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=e.isDefaultPrevented,f=a.Event("firstinvalidsystem"),a(i).triggerHandler(f,{element:e.target,form:e.target.form,isInvalidUIPrevented:e.isDefaultPrevented}),g.trigger(b);b&&b.isDefaultPrevented()&&e.preventDefault();d.push(e.target);e.extraData="fix";clearTimeout(h);h=setTimeout(function(){var h={type:"lastinvalid",cancelable:!1,invalidlist:a(d)};b=!1;d=[];a(e.target).trigger(h,h)},9);f=g=null}})})();a.fn.getErrorMessage=function(){var b="",
d=this[0];d&&(b=h(d)||a.prop(d,"customValidationMessage")||a.prop(d,"validationMessage"));return b};m.replaceValidationUI&&b.ready("DOM forms",function(){a(i).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,b,f,i,k,m){var g=b.validityMessages,f=m.overrideMessages||m.customMessages?["customValidationMessage"]:[];g.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},g.en||g["en-US"]||{});["select","radio"].forEach(function(a){g.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){g.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){g.en.rangeOverflow[a]="Value must be at or before {%max}."});g["en-US"]=g["en-US"]||g.en;g[""]=g[""]||g["en-US"];g.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},g.de||{});["select","radio"].forEach(function(a){g.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){g.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){g.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var q=g[""];b.createValidationMessage=function(b,g){var f=q[g];f&&"string"!==typeof f&&(f=f[a.prop(b,"type")]||f[(b.nodeName||"").toLowerCase()]||f.defaultMessage);f&&"value,min,max,title,maxlength,label".split(",").forEach(function(h){if(-1!==f.indexOf("{%"+h)){var g=("label"==h?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,h))||"";f=f.replace("{%"+h+"}",g);"value"==h&&(f=f.replace("{%valueLen}",g.length))}});return f||""};(b.bugs.validationMessage||!Modernizr.formvalidation||
b.bugs.bustedValidity)&&f.push("validationMessage");b.activeLang({langObj:g,module:"form-core",callback:function(a){q=a}});f.forEach(function(d){b.defineNodeNamesProperty(["fieldset","output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(f){var g=b.defineNodeNameProperty(f,d,{prop:{get:function(){var d=this,f="";if(!a.prop(d,"willValidate"))return f;var i=a.prop(d,"validity")||{valid:1};if(i.valid||(f=b.getContentValidationMessage(d,i)))return f;if(i.customError&&
d.nodeName&&(f=Modernizr.formvalidation&&!b.bugs.bustedValidity&&g.prop._supget?g.prop._supget.call(d):b.data(d,"customvalidationMessage")))return f;a.each(i,function(a,g){if("valid"!=a&&g&&(f=b.createValidationMessage(d,a)))return!1});return f||""},writeable:!1}})})})});
