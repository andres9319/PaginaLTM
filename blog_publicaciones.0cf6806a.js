!function n(o,r,a){function s(t,e){if(!r[t]){if(!o[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(l)return l(t,!0);throw(i=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",i}i=r[t]={exports:{}},o[t][0].call(i.exports,function(e){return s(o[t][1][e]||e)},i,i.exports,n,o,r,a)}return r[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,i){"use strict";function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function r(e,t){for(var i,n=0;n<t.length;n++)(i=t[n]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var s,l,u,d=(s=c,(l=[{key:"registerWindowEvent",value:function(){}},{key:"unregisterWindowEvent",value:function(){var e;"undefined"==typeof window||!window._zoomUpdateEvents||0<=(e=window._zoomUpdateEvents.indexOf(this.triggerWindowEvent))&&window._zoomUpdateEvents.splice(e,1)}},{key:"dispose",value:function(){this.recheckMode=null,this.unregisterWindowEvent()}},{key:"afterRender",value:function(e,t){var i,n,o=this;!t.parentElement||((n=(i=t.parentElement.parentElement).querySelectorAll("li"))||n.length)&&(this.builderApi.isInOnboarding()?i.classList.add("kv-ee-no-animation"):i.classList.remove("kv-ee-no-animation"),this.settings.isCarouselSection?setTimeout(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},300):!this.builderApi.isInOnboarding()||t.offsetHeight?(this.checkMobileMode(i),this.setHeaderHeight(e,t),window.addEventListener("resize",function(){o.__resizeTimeout&&window.clearTimeout(o.__resizeTimeout),o.__resizeTimeout=window.setTimeout(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},o.resizeWaitTimeout)}),this.recheckMode=this.builderApi.debounce(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},300)):setTimeout(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},2e3))}},{key:"setSectionPadding",value:function(e,t){e.nextElementSibling.querySelector(".kv-background").style.top=-t+"px"}},{key:"setHeaderHeightInternal",value:function(e,t){var i="navigation"===this.builderApi.controller.parentController.model.category&&this.isRuntimeSite;if(0<e.offsetHeight||i){i=this.builderApi.controller.parentController.model.layout.section.id;if("dubemo66"===i)return n=e.querySelector("header"),void(t.style.height=n.offsetHeight+"px");var n=(n=e.querySelector(".kv-ee-navigation")||e.querySelector("header")).offsetHeight,e=this.isPreviewOrPublishedWebsite&&"navigation-1"===i&&!this.settings.model._toggle["global.logo"]?Math.ceil(n+e.offsetHeight):Math.max(n,e.offsetHeight);t.style.height=e+"px",document.documentElement.style.setProperty("--navigation-height",e+"px")}}},{key:"setHeaderHeight",value:function(e,r){var a=this,e=e.model.isFloatingSection||!1===e.model.cover&&!0===e.model.fixedNavigation;r.parentElement&&e&&!this.settings.isCarouselSection&&function(){for(var e=r.parentElement.parentElement,t=r.querySelectorAll("img"),i=0;i<t.length;i++){var n=t[i].src,o=new window.Image;o.onload=function(){setTimeout(function(){a.setHeaderHeightInternal(r,e)})},o.src=n}a.setHeaderHeightInternal(r,e),setTimeout(function(){r.classList.contains("kv-scrolled")||a.setHeaderHeightInternal(r,e)},1e3)}()}},{key:"getNavigationWidth",value:function(e){var t=0;return e.forEach(function(e){t+=e.offsetWidth}),t+40}},{key:"determineContainerWidth",value:function(e,t){var i=e.querySelector("nav")||e,n=e.querySelector('[data-dynamic-navigation-element="logo"]'),o=e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]'),o=o?o.offsetWidth:0,n=n?n.offsetWidth:0,i=i.offsetWidth-o;return{containerSize:i,logoWidth:n,ctaWidth:o,headerWith:e.offsetWidth,navigationToWide:t+n+o>=e.offsetWidth-20,headerToWide:i+n>=e.offsetWidth}}},{key:"shouldMinimizeMenu",value:function(e){if(((null==e?void 0:e.clientWidth)||window.innerWidth)<this.mobileBreakpoint)return!0;var t=e.querySelectorAll(".kv-ee-menu-item-wrapper > li");this.currentElementWidth=this.getNavigationWidth(t);var i=this.determineContainerWidth(e,this.currentElementWidth),t=i.containerSize,e=i.headerToWide,i=i.navigationToWide;return t<100&&!this.builderApi.controller.getSiteController().hasSectionBasedNavigation()||e||i}},{key:"checkMobileMode",value:function(e){var t=(t=e.querySelector(".kv-ee-check-mobile"))||e;window.innerWidth<this.mobileBreakpoint?t.classList.contains("kv-ee-mobile")||t.classList.add("kv-ee-mobile"):(t.classList.remove("kv-ee-mobile"),e=this.shouldMinimizeMenu(e),t=t.classList,e&&t.add("kv-ee-mobile"),e||t.remove("kv-ee-mobile"))}},{key:"updateProperty",value:function(e,t,i){var n;"layout.section.id"!==t||(t=o((n=document.querySelector(".kv-page-content")).classList).find(function(e){return e.includes("with-navigation")}))&&(n.classList.remove(t),n.classList.add("kv-ee-with-"+i))}}])&&r(s.prototype,l),u&&r(s,u),c);function c(e,t){var i=this;(function(e){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")})(this),a(this,"getRenderModel",function(){return{}}),a(this,"triggerWindowEvent",function(){i.recheckMode&&i.recheckMode()}),this.isRuntimeSite=t.isRuntimeSite,this.builderApi=e,this.currentElementWidth=0,this.checkTimeout=0,this.settings=t;e=!this.editor&&window.self!==window.top;this.isPreviewOrPublishedWebsite=t.isRuntimeSite,this.mobileBreakpoint=991,this.resizeWaitTimeout=e?0:300,"undefined"!=typeof window&&(window._zoomUpdateEvents=window._zoomUpdateEvents||[],window._zoomUpdateEvents.push(this.triggerWindowEvent))}window.__features=window.__features||{},window.__features.navigation=d},{}]},{},[1]);;!function n(o,i,a){function s(t,e){if(!i[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=i[t]={exports:{}},o[t][0].call(r.exports,function(e){return s(o[t][1][e]||e)},r,r.exports,n,o,i,a)}return i[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,r){"use strict";function o(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function i(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){for(var r,n=0;n<t.length;n++)(r=t[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l,u,c,d="AM_BLOG",p=(l=f,(u=[{key:"createEditButtons",value:function(e){var n=this,t=e.querySelector(".kv-ee-blog-post-first"),e=Array.from(e.querySelectorAll(".kv-ee-blog-post")),e=[t].concat(i(e)).filter(function(e){return e});0<e.length&&(this.blogpostElements=e).forEach(function(e){var t=e.querySelector(".kv-ee-action-buttons");t&&e.removeChild(t);var r=document.createElement("div");r.classList.add("kv-ee-action-buttons");t=document.createElement("button");t.style.borderRadius="4px",t.style.boxShadow="none",t.innerHTML='<i class="material-icons">edit</i>',t.addEventListener("click",n.onEditPost),r.appendChild(t),e.appendChild(r)})}},{key:"createAddPostButton",value:function(e,t){var r,n=e.querySelector(".kv-ee-blog--add-post--button");n&&((r=n.querySelector(".add-post-button-container"))&&n.removeChild(r),e=document.createElement("div"),r=document.createElement("button"),e.classList.add("kv-ee-add-post-button-container"),r.classList.add("kv-ee-add-post-button"),r.classList.add("kv-add-item-btn"),r.classList.add("kv-editor-button"),r.classList.add("kv-ee-large"),t||r.classList.add("kv-ee-blog-no-posts"),r.innerHTML="<span>".concat(this.builderApi.localize("editorTemplates.features.blog.addPost"),"</span>"),r.addEventListener("click",this.onAddPost),e.appendChild(r),n.appendChild(e),this.addPostButtonContainer=e)}},{key:"removeEditButtons",value:function(){var r=this;this.blogpostElements&&this.blogpostElements.forEach(function(e){var t=e.querySelector(".kv-ee-action-buttons");e.querySelector("button").removeEventListener("click",r.onEditPost),t.parentElement.removeChild(t)})}},{key:"removeAddPostButton",value:function(){this.addPostButtonContainer&&(this.addPostButtonContainer.querySelector(".kv-ee-add-post-button").removeEventListener("click",this.onAddPost),this.addPostButtonContainer.parentElement.removeChild(this.addPostButtonContainer),this.addPostButtonContainer=null)}},{key:"requestAppmarketApp",value:function(){var n=this;return new Promise(function(t,r){var e;n.app?t(n.app):(e=n.builderApi.resolveAppmarketApp(d),n.blogInitializingPromise=e.then(function(e){e?(n.instanceJwt=e&&e.instance_jwt,n.instanceId=e&&e.instance_id,e.base_url=e.url.split("?")[0],n.app=e,t(e)):r(new Error("Could not resolve a valid app."))}))})}},{key:"openDashboard",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.builderApi.editor.showDashboard(d,{onClose:e.onClose,fullscreen:!0,showHeader:!1})}},{key:"diffFetchedWithCachedPosts",value:function(e){return e}},{key:"proxyImages",value:function(e,t,r){var n=this,o=document.createElement("div");return o.innerHTML=e,Array.from(o.querySelectorAll("img")).forEach(function(e){e.src=e.src?n.isPreviewMode()?e.src:n.proxyImage(e.src,t,r):null}),o.innerHTML}},{key:"proxyImage",value:function(e,t,r){t=new this.builderApi.ImageProxyHelper(this.builderApi.ImageProxyHelper.stripProxyUrl(e),t);return t.resizeToWidth(r.size),t.result()}},{key:"sanitizePost",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!e)return{};var r=function(t){for(var r,e=1;e<arguments.length;e++)r=null==arguments[e]?{}:arguments[e],e%2?o(Object(r),!0).forEach(function(e){s(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))});return t}({},e);r.leader=this.sanitizeString(e.leader,!0),r.title=this.sanitizeString(e.title,!0);var n=!this.config.isRuntimeSite||this.isHostedBrand()||document.location.host.includes("app-gateway")?"cloudflare":"cloudflareHosted";return r.leader_image=r.leader_image?this.isPreviewMode()?r.leader_image:this.proxyImage(r.leader_image,n,t):null,e.content&&(r.content=e.content.replace(/<br\/>/gim,"<br>").replace(/&lt;br\/&gt;/gim,"<br>").replace(/<hr\/>/gim,"<hr>").replace(/&lt;hr\/&gt;/gim,"<hr>").replace(/<p> <\/p>/gim,"<br>").replace(/<p><\/p>/gim,"<br>").replace(/&#x29;/gim,"(").replace(/&#x30;/gim,")"),r.content=this.proxyImages(this.sanitizeString(r.content),n,t),(t=document.createElement("textarea")).innerHTML=r.content,r.content=t.value),r}},{key:"sanitizeString",value:function(e,t){return t?this.xssHelper.htmlEncode(e):this.xssHelper.sanitizeStyleAttribute(this.xssHelper.sanitizeAllButStyling(e))}},{key:"isHostedBrand",value:function(){var e=window._site&&window._site.partnerId||0,t=window._site&&window._site.useHostingApi||!1;return 100<=e||t}},{key:"isPreviewMode",value:function(){try{return window.self!==window.top}catch(e){return!1}}}])&&a(l.prototype,u),c&&a(l,c),f);function f(e,t){var r=this;(function(e){if(!(e instanceof f))throw new TypeError("Cannot call a class as a function")})(this),s(this,"onEditPost",function(e){e=(e.target.closest(".kv-ee-blog-post")||e.target.closest(".kv-ee-blog-post-first")||e.target.closest(".kv-ee-post")||e.target.closest(".kv-ee-post-first")).dataset.id||-1;-1!==e&&r.builderApi.editor.showDashboard(d,{route:"blog/manage/create/".concat(e),fullscreen:!0,showHeader:!1})}),s(this,"onAddPost",function(){r.builderApi.editor.showDashboard(d,{route:"create",fullscreen:!0,showHeader:!1})}),this.builderApi=e,this.config=t,this.blogpostElements=null,this.addPostButtonContainer=null,this.xssHelper=e.xssHelper}window.__features=window.__features||{},window.__features["blog-core"]=p},{}]},{},[1]);;!function a(i,n,o){function s(e,t){if(!n[e]){if(!i[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(d)return d(e,!0);throw(r=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",r}r=n[e]={exports:{}},i[e][0].call(r.exports,function(t){return s(i[e][1][t]||t)},r,r.exports,a,i,n,o)}return n[e].exports}for(var d="function"==typeof require&&require,t=0;t<o.length;t++)s(o[t]);return s}({1:[function(t,e,r){"use strict";function a(e,t){var r,a=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)),a}function i(e){for(var r,t=1;t<arguments.length;t++)r=null==arguments[t]?{}:arguments[t],t%2?a(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))});return e}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var a,i,n=[],o=!0,s=!1;try{for(r=r.call(t);!(o=(a=r.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){s=!0,i=t}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function s(t,e){for(var r,a=0;a<e.length;a++)(r=e[a]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l,u,c,h=(l=f,(u=[{key:"getRenderModel",value:function(){var t=window.innerWidth<1920?window.innerWidth:1920;return i(i({},this.data),{},{detail:this.blogCore.sanitizePost(this.data.detail,{size:t}),backUrl:"/"+this.builderApi.getPageUri("blog-overview/blog-overview").replace("/","")})}},{key:"afterRender",value:function(){var t,e;this.config.isRuntimeSite&&(t=this.data.detail&&this.data.detail.seo_title||this.data.detail&&this.data.detail.title,e=this.data.detail&&this.data.detail.seo_description||this.data.detail&&this.data.detail.leader,t&&(this.setMetaTag("title",this.blogCore.sanitizeString(t)),this.setTitle(this.blogCore.sanitizeString(t,!0),this.blogCore.sanitizeString(this.siteTitle,!0))),e&&this.setMetaTag("description",this.blogCore.sanitizeString(e,!0)))}},{key:"setMetaTag",value:function(t,e){var r=document.querySelector('meta[name="'.concat(t,'"]'));return r?void r.setAttribute("content",e):((r=document.createElement("meta")).setAttribute("name",t),r.setAttribute("content",e),void document.head.appendChild(r))}},{key:"setTitle",value:function(t,e){t&&e&&(document.title="".concat(t," - ").concat(e))}},{key:"rerender",value:function(){this.view.requestRender()}},{key:"onPageChanged",value:function(){document.title=""}},{key:"onOpenPageType",value:function(t,e,r,a){var i,r=r[0];if(this.data.routeParam=+r,this.pageFeatures=a,""===r||0===r)return this.config.isThumbnail||(this.data.error=!1),"undefined"!=typeof Storage&&(i=window.localStorage.getItem(this.builderApi.getSiteId()+"blog-detail-latest"))&&(this.usedLocalStorage=!0,this.data.detail=JSON.parse(i),this.rerender()),void this.getLatestPost();Number.isInteger(this.data.routeParam)?("undefined"==typeof Storage||(i=window.localStorage.getItem(this.builderApi.getSiteId()+"/blog-detail-"+this.data.routeParam))&&(this.usedLocalStorage=!0,this.data.detail=JSON.parse(i),this.rerender()),this.getPost()):(delete this.data.is_traditional,this.data.is_video=!0,this.data.detail={video_id:r},this.rerender())}},{key:"formatDate",value:function(t){t=new Date(t);return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds()).toLocaleDateString(window.navigator.language,{year:"numeric",month:"long",day:"numeric"})}}])&&s(l.prototype,u),c&&s(l,c),f);function f(t,e,r){var i=this;(function(t){if(!(t instanceof f))throw new TypeError("Cannot call a class as a function")})(this),d(this,"getPost",function(){i.usedLocalStorage||(i.data.hasLoadedItem=!1,i.data.error=!1,i.rerender()),i.blogCore.requestAppmarketApp().then(function(t){t="".concat(t.base_url,"/v1.0/").concat(t.instance_id,"/blog/posts/").concat(i.data.routeParam);i.builderApi.fetch(t).then(function(r){return new Promise(function(e,t){204===r.status?e([r.status,null]):r.json().then(function(t){return e([r.status,t])}).catch(t)})}).then(function(t){var e=n(t,2),r=(e[0],e[1]),a=r.featured,t=r.created_on,e=r.scheduled_date_time,t=a?e:t;delete i.data.is_video,i.data.is_traditional=!0,i.data.detail=r,i.data.hasLoadedItem=!0,i.data.hasItem=!0,r.scheduled_date_time&&(r.formattedDate=i.formatDate(new Date(t))),"undefined"!=typeof Storage&&window.localStorage.setItem(i.builderApi.getSiteId()+"/blog-detail-"+i.data.routeParam,JSON.stringify(i.data.detail)),i.rerender()}).catch(function(t){i.data.hasLoadedItem=!0,i.data.hasItem=!1,i.data.error=t.message,i.rerender()})})}),d(this,"getLatestPost",function(){var t=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0];i.usedLocalStorage||t||(i.data.hasLoadedItem=!1,i.data.error=!1,i.rerender()),i.blogCore.requestAppmarketApp().then(function(t){t="".concat(t.base_url,"/v1.0/").concat(t.instance_id,"/blog/posts/latest");i.builderApi.fetch(t).then(function(r){return new Promise(function(e,t){204===r.status?e([r.status,null]):r.json().then(function(t){return e([r.status,t])}).catch(t)})}).then(function(t){var e=n(t,2),r=e[0],a=e[1];if(204===r)i.data.hasItem=!1,i.data.hasLoadedItem=!0,i.data.error=!1,i.rerender();else{if(200!==r)throw new Error("Internal server error.");t=a.featured,e=a.created_on,r=a.scheduled_date_time,e=t?r:e;e&&(a.formattedDate=i.formatDate(e)),i.data.is_traditional=!0,i.data.detail=a,i.data.hasItem=!0,i.data.hasLoadedItem=!0,i.data.error=!1,JSON.stringify(a)!==JSON.stringify(i.data.detail)&&"undefined"!=typeof Storage&&window.localStorage.setItem(window.location.href+"/blog-detail-latest",JSON.stringify(i.data.detail)),i.rerender()}}).catch(function(t){i.data.error=t.message,i.data.hasItem=!1,i.data.hasLoadedItem=!0,i.rerender()})})}),d(this,"openManageBlog",function(){return i.blogCore.openDashboard()}),d(this,"afterCloseDashboard",function(){i.getLatestPost(!0)}),this.builderApi=t,this.config=e,this.urlHelper=t.urlHelper,this.blogCore=r["blog-core"],this.view=e.view,this.usedLocalStorage=!1,this.siteTitle="",this.pageFeatures={},this.data={error:!1,hasItem:!1,hasLoadedItem:!1,backUrl:this.builderApi.getPageUri("blog-overview/blog-overview")},""===this.siteTitle&&(e=t.controller.getPageController().model.title,t=-1!==document.title.indexOf(" - ")?" - "+e:e,this.siteTitle=e?document.title.replace(t,""):document.title)}window.__features=window.__features||{},window.__features["blog-detail"]=h},{}]},{},[1]);; window._featureSettings={"navigation":{"settings":{}},"blog-core":{"settings":{}},"translations":{"editorTemplates.features.blog.blogManagement":"Administración del blog","editorTemplates.features.blogDetail.backToAllPosts":"Volver a Todas las publicaciones","editorTemplates.features.blogDetail.postTitle":"Demostración de publicación de blog","editorTemplates.features.blogDetail.postDate":"9/may/2019","editorTemplates.features.blogDetail.postLeader":"Ésta es una breve introducción demostrativa de un ejemplo de publicación de blog. Haga su primera publicación en el blog y vea cómo queda.","editorTemplates.features.blogDetail.postContent":"El contenido aparece en este espacio y puede contener texto, imágenes y videos. ¡Vamos! Haga una prueba. Seleccione \"Administrar blog\" en la barra lateral para crear su primera historia."},"blog-detail":{"settings":{"dependingGlobalFeatures":["blog-core"]}}};