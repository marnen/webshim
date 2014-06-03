webshims.register("form-validation",function(a,b,c,d,e,f){"use strict";var g="webkitURL"in c,h=Modernizr.formvalidation&&!b.bugs.bustedValidity,i=g&&h,j=navigator.userAgent,k=i&&parseFloat((j.match(/Safari\/([\d\.]+)/)||["","999999"])[1],10),l=f.iVal;l.fieldWrapper||(l.fieldWrapper=":not(span):not(label):not(em):not(strong):not(p)");var m=l.errorClass||(l.errorClass="user-error"),n=l.successClass||(l.successClass="user-success"),o=l.errorWrapperClass||(l.errorWrapperClass="ws-invalid"),p=l.successWrapperClass||(l.successWrapperClass="ws-success"),q=l.errorBoxClass||(l.errorBoxClass="ws-errorbox"),r=l.errorMessageClass||(l.errorMessageClass="ws-errormessage"),s={checkbox:1,radio:1},t=b.loader,u=t.addModule,v=a([]),w=function(){return!a.prop(this,"form")},x=function(b){b=a(b);var c,e,f=v;return"radio"==b[0].type&&(e=b.prop("form"),c=b[0].name,f=c?e?a(e).jProp(c):a(d.getElementsByName(c)).filter(w):b,f=f.filter('[type="radio"]')),f},y=function(b,c){var d;return a.each(b,function(b,e){return e?(d=b+a.prop(c,"validationMessage"),!1):void 0}),d},z=function(a){var b;try{b=d.activeElement.name===a}catch(c){}return b},A={radio:1,checkbox:1,"select-one":1,"select-multiple":1,file:1,date:1,month:1,week:1,text:1},B={time:1,date:1,month:1,datetime:1,week:1,"datetime-local":1},C={refreshvalidityui:1,updatevalidation:1},D="."+l.errorClass+", ."+l.successClass,E=function(c){if(l.sel){var d,e,f,g;if(c.target&&(d=a(c.target).getNativeElement()[0],f=a(d).getShadowElement(),"submit"!=d.type&&a.prop(d,"willValidate")&&("change"!=c.type||!(g=f.prop("type"))||A[g]))){e=a.data(d,"webshimsswitchvalidityclass");var h=function(){if(g||(g=f.prop("type")),!(i&&("change"==c.type||537.36>k)&&B[g]&&a(c.target).is(":focus")||"focusout"==c.type&&"radio"==d.type&&z(d.name))){if(b.refreshCustomValidityRules&&"async"==b.refreshCustomValidityRules(d))return void a(d).one("updatevalidation.webshims",E);var e,h,j,l,o,p=a.prop(d,"validity");p.valid?f.hasClass(n)||(e=n,h=m,l="changedvaliditystate",j="changedvalid",s[d.type]&&d.checked&&x(d).not(d).removeClass(h).addClass(e).removeAttr("aria-invalid"),f.removeAttr("aria-invalid"),a.removeData(d,"webshimsinvalidcause")):(o=y(p,d),a.data(d,"webshimsinvalidcause")!=o&&(a.data(d,"webshimsinvalidcause",o),l="changedvaliditystate"),f.hasClass(m)||(e=m,h=n,s[d.type]&&!d.checked&&x(d).not(d).removeClass(h).addClass(e).attr("aria-invalid","true"),f.attr("aria-invalid","true"),j="changedinvalid")),e&&(f.addClass(e).removeClass(h),setTimeout(function(){a(d).trigger(j)})),l&&setTimeout(function(){a(d).trigger(l)}),a.removeData(d,"webshimsswitchvalidityclass")}};f.triggerHandler("wsallowinstantvalidation",[c])!==!1&&(e&&clearTimeout(e),C[c.type]?("refreshvalidityui"==c.type&&b.warn("refreshvalidityui was renamed to updatevalidation"),h()):a.data(d,"webshimsswitchvalidityclass",setTimeout(h)))}}},F=function(){b.errorbox.reset(this)};"validityUIEvents"in f&&(b.warn("validityUIEvents was renamed to iVal.events"),l.events=f.validityUIEvents),l.events="events"in l?l.events||"":"focusout change",l.events&&(l.events+=" "),a(d.body||"html").on(l.events+"refreshvalidityui updatevalidation.webshims invalid",E).on("reset resetvalidation.webshims resetvalui",function(c){var d,e=a(c.target);"resetvalui"==c.type&&b.warn("resetvalui was renamed to resetvalidation"),e.is("form, fieldset")&&("form"==e[0].nodeName.toLowerCase()&&(d=!e.is(l.sel)),e=e.jProp("elements")),e=e.filter(D).removeAttr("aria-invalid").removeClass(l.errorClass+" "+l.successClass).getNativeElement().each(function(){a.removeData(this,"webshimsinvalidcause")}),d||(d===!1?e.each(F):e.trigger("resetvalidityui.webshims"))});var G=function(){b.scrollRoot=a(g||"BackCompat"==d.compatMode?d.body:d.documentElement)},H=Modernizr.boxSizing||Modernizr["display-table"]||a.support.getSetAttribute||a.support.boxSizing?"minWidth":"width",I="transitionDelay"in d.documentElement.style,J={display:"inline-block",left:0,top:0,marginTop:0,marginLeft:0,marginRight:0,marginBottom:0};G(),b.ready("DOM",G);var K=/right|left/g,L=function(a){return"left"==a?"right":"left"};b.getRelOffset=function(b,c,d){var e,f;return b=a(b),a.swap(b[0],J,function(){var g;a.position&&d&&a.position.getScrollInfo?(d.of||(d.of=c),g="rtl"==a(d.of).css("direction"),d.isRtl||(d.isRtl=!1),d.isRtl!=g&&(d.my=(d.my||"center").replace(K,L),d.at=(d.at||"center").replace(K,L),d.isRtl=g),b[d.isRtl?"addClass":"removeClass"]("ws-is-rtl"),d.using=function(a,c){b.attr({"data-horizontal":c.horizontal,"data-vertical":c.vertical}),e=a},b.attr({"data-horizontal":"","data-vertical":"","data-my":d.my,"data-at":d.at}),b.position(d)):(e=a(c).offset(),f=b.offset(),e.top-=f.top,e.left-=f.left,e.top+=c.outerHeight())}),e},a.extend(b.wsPopover,{isInElement:function(b,c){a.isArray(b)||(b=[b]);var d,e,f,g=!1;for(d=0,e=b.length;e>d;d++)if(f=b[d],f&&f.jquery&&(f=f[0]),f&&(f==c||a.contains(f,c))){g=!0;break}return g},show:function(e){if(!this.isVisible){var f=a.Event("wspopoverbeforeshow");if(this.element.trigger(f),!f.isDefaultPrevented()){this.isVisible=!0,!this._shadowAdded&&b.shadowClass&&(this.element.addClass(b.shadowClass),this._shadowAdded=!0),e=a(e||this.options.prepareFor).getNativeElement();var g=this,h=function(a){!g.options.hideOnBlur||g.stopBlur||g.isInElement([g.lastElement[0],e[0],g.element[0]],a.target)||g.hide()},i=a(e).getShadowElement(),j=function(a){clearTimeout(g.timers.repos),g.timers.repos=setTimeout(function(){g.position(i)},a&&"pospopover"==a.type?4:200)};this.clear(),this.element.removeClass("ws-po-visible").css("display","none"),this.prepareFor(e,i),this.position(i),g.timers.show=setTimeout(function(){g.element.css("display",""),g.timers.show=setTimeout(function(){g.element.addClass("ws-po-visible").trigger("wspopovershow")},14)},4),a(d.body).on("focusin"+this.eventns+" mousedown"+this.eventns,h).children(":not(script), :not(iframe), :not(noscript)").on("mousedown"+this.eventns,h),this.element.off("pospopover").on("pospopover",j),a(c).on("resize"+this.eventns+" pospopover"+this.eventns,j)}}},_getAutoAppendElement:function(){var b=/^(?:span|i|label|b|p|tr|thead|tbody|table|strong|em|ul|ol|dl|html)$/i;return function(c){for(var e,f=c[0],g=d.body;(f=f[e?"offsetParent":"parentNode"])&&1==f.nodeType&&f!=g;)e||b.test(f.nodeName)||(e=f),e&&"hidden"==a.css(f,"overflow")&&"static"!=a.css(f,"position")&&(e=!1);return a(e||g)}}(),prepareFor:function(b,c){var d,e,f=this,g={},h=a.extend(!0,{},this.options,b.jProp("form").data("wspopover")||{},b.data("wspopover"));this.lastOpts=h,this.lastElement=a(b).getShadowFocusElement(),this.prepared&&this.options.prepareFor||(e="element"==h.appendTo?b.parent():"auto"==h.appendTo?this._getAutoAppendElement(b):a(h.appendTo),this.prepared&&e[0]==this.element[0].parentNode||this.element.appendTo(e)),this.element.attr({"data-class":b.prop("className"),"data-id":b.prop("id")}),g[H]=h.constrainWidth?c.outerWidth():"",this.element.css(g),h.hideOnBlur&&(d=function(a){f.stopBlur?a.stopImmediatePropagation():f.hide()},f.timers.bindBlur=setTimeout(function(){f.lastElement.off(f.eventns).on("focusout"+f.eventns+" blur"+f.eventns,d),f.lastElement.getNativeElement().off(f.eventns)},10)),this.prepared=!0},clear:function(){a(c).off(this.eventns),a(d).off(this.eventns),a(d.body).off(this.eventns).children(":not(script), :not(iframe), :not(noscript)").off(this.eventns),this.element.off("transitionend"+this.eventns),this.stopBlur=!1,this.lastOpts=!1,a.each(this.timers,function(a,b){clearTimeout(b)})},hide:function(){var b=a.Event("wspopoverbeforehide");if(this.element.trigger(b),!b.isDefaultPrevented()&&this.isVisible){this.isVisible=!1;var d=this,e=function(b){b&&"transitionend"==b.type&&(b=b.originalEvent)&&b.target==d.element[0]&&"hidden"==d.element.css("visibility")||(d.element.off("transitionend"+d.eventns).css("display","none").attr({"data-id":"","data-class":"",hidden:"hidden"}),clearTimeout(d.timers.forcehide),a(c).off("resize"+d.eventns))};this.clear(),this.element.removeClass("ws-po-visible").trigger("wspopoverhide"),a(c).on("resize"+this.eventns,e),I&&this.element.off("transitionend"+this.eventns).on("transitionend"+this.eventns,e),d.timers.forcehide=setTimeout(e,I?600:40)}},position:function(a){var c=b.getRelOffset(this.element.removeAttr("hidden"),a,(this.lastOpts||this.options).position);this.element.css(c)}}),b.validityAlert=function(){f.messagePopover.position=a.extend({},{at:"left bottom",my:"left top",collision:"none"},f.messagePopover.position||{});var c=b.objectCreate(b.wsPopover,e,f.messagePopover),d=c.hide.bind(c);return c.element.addClass("validity-alert").attr({role:"alert"}),a.extend(c,{hideDelay:5e3,showFor:function(b,c,e,f){b=a(b).getNativeElement(),this.clear(),this.hide(),f||(this.getMessage(b,c),this.show(b),this.hideDelay&&(this.timers.delayedHide=setTimeout(d,this.hideDelay))),e||this.setFocus(b)},setFocus:function(d){var e=a(d).getShadowFocusElement(),g=b.scrollRoot.scrollTop()+(f.viewportOffset||0),h=e.offset().top-(f.scrollOffset||30),i=function(){try{e[0].focus()}catch(a){}e[0].offsetWidth||e[0].offsetHeight||b.warn("invalid element seems to be hidden. Make element either visible or use disabled/readonly to bar elements from validation. With fieldset[disabled] a group of elements can be ignored! In case of select replacement see shims/form-combat.js to fix issue."),c.element.triggerHandler("pospopover")};g>h?b.scrollRoot.animate({scrollTop:h-5-(f.viewportOffset||0)},{queue:!1,duration:Math.max(Math.min(600,1.5*(g-h)),80),complete:i}):i()},getMessage:function(a,b){b||(b=a.getErrorMessage()),b?c.contentElement.html(b):this.hide()}}),c}();var M={slide:{show:"slideDown",hide:"slideUp"},fade:{show:"fadeIn",hide:"fadeOut"},no:{show:"show",hide:"hide"}};l.fx&&M[l.fx]||(l.fx="slide"),a.fn[M[l.fx].show]||(l.fx="no");var N=0;if(b.errorbox={create:function(b,c){c||(c=this.getFieldWrapper(b));var d=a("div."+q,c);return d.length||(d=a('<div class="'+q+'" hidden="hidden" style="display: none;">'),c.append(d)),d.prop("id")||(N++,d.prop("id","errorbox-"+N)),c.data("errorbox",d),d},getFieldWrapper:function(c){var d;return d="function"==typeof l.fieldWrapper?l.fieldWrapper.apply(this,arguments):a(c).parent().closest(l.fieldWrapper),d.length||b.error("could not find fieldwrapper: "+l.fieldWrapper),d},_createContentMessage:function(){var c=function(){return!c.types[this.type]};c.types={hidden:1,image:1,button:1,reset:1,submit:1};var d={},e=function(a){return"-"+a.toLowerCase()},f=function(b){var c=a(b).data("errortype");return c||a.each(d,function(d,e){return a(b).is(e)?(c=d,!1):void 0}),c||"defaultMessage"};return a.each(["customError","badInput","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","tooShort","patternMismatch","valueMissing"],function(a,b){var c=b.replace(/[A-Z]/,e);d[b]="."+c+", ."+b+", ."+b.toLowerCase()+', [data-errortype="'+b+'"]'}),function(d,e,g){var h=!1,i={};a(e).children().each(function(){var b=f(this);i[b]=a(this).html()}),a("input, select, textarea",g).filter(c).each(function(c,d){var e=a(d).data("errormessage")||{};"string"==typeof e&&(e={defaultMessage:e}),a.each(i,function(a,b){e[a]||(h=!0,e[a]=b)}),h&&a(d).data("errormessage",e),b.getOptions&&b.getOptions(d,"errormessage",!1,!0)})}}(),initIvalContentMessage:function(b){a(b).jProp("form").is(l.sel)&&this.get(b)},get:function(b,c){c||(c=this.getFieldWrapper(b));var d,e=c.data("errorbox");return"object"!=(d=typeof e)&&(e?"string"==d&&(e=a("#"+e),c.data("errorbox",e,c)):e=this.create(b,c),this._createContentMessage(b,e,c)),e},addSuccess:function(b,c){var d=a.prop(b,"type"),e=function(){var e=s[d]?a.prop(b,"checked"):a(b).val();c[e?"addClass":"removeClass"](p)},f=A[d]?"change":"blur";a(b).off(".recheckvalid").on(f+".recheckinvalid",e),e()},hideError:function(b,c){var d,e,f,g=this.getFieldWrapper(b);return g.hasClass(o)&&(a(b).filter("input").off(".recheckinvalid"),!c&&(d=a("input:invalid, select:invalid, textarea:invalid",g)[0])?a(d).trigger("updatevalidation.webshims"):(e=this.get(b,g),g.removeClass(o),e.message="",f=function(){this.id==b.getAttribute("aria-describedby")&&b.removeAttribute("aria-describedby"),a(this).attr({hidden:"hidden"})},"no"!=l.fx?e[M[l.fx].hide](f):e[M[l.fx].hide]().each(f))),c||d||this.addSuccess(b,g),g},recheckInvalidInput:function(b){if(l.recheckDelay&&l.recheckDelay>90){var c,d=function(){E({type:"input",target:b})};a(b).filter('input:not([type="checkbox"]):not([type="radio"])').off(".recheckinvalid").on("input.recheckinvalid",function(){clearTimeout(c),c=setTimeout(d,l.recheckDelay)}).on("focusout.recheckinvalid",function(){clearTimeout(c)})}},showError:function(b){var c=this.getFieldWrapper(b),d=this.get(b,c),e=a(b).getErrorMessage();return d.message!=e&&(d.stop&&d.stop(!0,!0),d.html('<p class="'+r+'">'+e+"</p>"),d.message=e,c.addClass(o).removeClass(p),this.recheckInvalidInput(b),(d.is("[hidden]")||"none"==d.css("display"))&&(b.getAttribute("aria-describedby")||b.setAttribute("aria-describedby",d.prop("id")),d.css({display:"none"}).removeAttr("hidden")[M[l.fx].show]())),c.removeClass(p),a(b).off(".recheckvalid"),c},reset:function(a){this.hideError(a,!0).removeClass(p)},toggle:function(b){a(b).is(":invalid")?this.showError(b):this.hideError(b)}},a(d.body).on({changedvaliditystate:function(c){if(l.sel){var d=a(c.target).jProp("form");d.is(l.sel)&&b.errorbox.toggle(c.target)}},"resetvalidityui.webshims":function(c){if(l.sel){var d=a(c.target).jProp("form");d.is(l.sel)&&b.errorbox.reset(c.target)}},firstinvalid:function(c){if(l.sel&&l.handleBubble){var d=a(c.target).jProp("form");d.is(l.sel)&&(c.preventDefault(),"none"!=l.handleBubble&&b.validityAlert.showFor(c.target,!1,!1,"hide"==l.handleBubble))}},submit:function(b){return l.sel&&l.submitCheck&&a(b.target).is(l.sel)&&a.prop(b.target,"noValidate")&&!a(b.target).checkValidity()?(b.stopImmediatePropagation(),!1):void 0}}),b.modules["form-core"].getGroupElements=x,/[\s\:\>\~\+]/.test(l.sel||"")&&b.error("please use a simple selector for iVal.sel: for example .validate"),f.replaceValidationUI&&a(d).on("firstinvalid",function(a){a.isDefaultPrevented()||(a.preventDefault(),setTimeout(function(){b.validityAlert.showFor(a.target)},4))}),function(){var b,c,e,f=[];a(d).on("invalid",function(d){if(!d.wrongWebkitInvalid&&!e){var g=a(d.target);b||(b=a.Event("firstinvalid"),g.addClass("first-invalid").trigger(b)),b&&b.isDefaultPrevented()&&d.preventDefault(),f.push(d.target),d.extraData="fix",clearTimeout(c),c=setTimeout(function(){var c={type:"lastinvalid",cancelable:!1,invalidlist:a(f)};f=[],e=!0,a(d.target).trigger(c,[c]),a(b.target).removeClass("first-invalid"),b=!1,e=!1},9),g=null}})}(),d.addEventListener&&Modernizr.inputtypes&&Modernizr.inputtypes.tel&&-1!=j.indexOf("Mobile")&&!/ipad|iphone/i.test(j)&&(!("inputMode"in d.createElement("input"))||"inputmode"in d.createElement("input"))){var O=function(a){a.removeEventListener("blur",P,!0)},P=function(a){setTimeout(function(){var b=a.target.value;a.target.type="text",b!=a.target.value&&(a.target.value=b)}),O(a.target)},Q=function(a){var b;if("text"==a.target.type&&"numeric"==a.target.getAttribute("inputmode")&&"[0-9]*"==a.target.getAttribute("pattern"))try{b=a.target.value,a.target.type=f.fixInputMode,O(a.target),a.target.addEventListener("blur",P,!0),b!=a.target.value&&(a.target.value=b)}catch(c){}};"string"!=typeof f.fixInputMode&&(f.fixInputMode="tel"),d.addEventListener("focus",Q,!0),d.addEventListener("touchstart",Q,!0)}u("form-fixrangechange",{test:!(!a.event.special.change&&!a.event.special.input&&Modernizr.inputtypes&&Modernizr.inputtypes.range&&f.fixRangeChange)}),u("form-combat",{d:["dom-support"],test:!(a.mobile&&(a.mobile.selectmenu||a.mobile.checkboxradio)||a.ui&&a.ui.selectmenu||a.fn.select2||a.fn.chosen||a.fn.selectpicker||a.fn.selectBoxIt)}),u("position",{src:"plugins/jquery.ui.position.js",test:!(!a.position||!a.position.getScrollInfo)}),t.loadList(["form-combat","position","form-fixrangechange"])});