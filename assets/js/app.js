$(function(){$(".pl-sub-pattern-markup").each(function(){$(this).before('<div class="pl-sub-pattern-sample"><div class="pl-sub-pattern-sample-toggle-controls"><span class="show">&#43; Show</span><span class="hide">&#45; Hide</span> HTML</div><div class="pl-sub-pattern-sample-toggle-target"><pre class="language-markup"><code><script type="prism-html-markup">'+$(this).html()+"</script></code></pre></div></div>")}),$(".pl-sub-pattern").on("click",".pl-sub-pattern-sample-toggle-controls",function(){$(this).parent(".pl-sub-pattern-sample").toggleClass("visible")})});
self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var s in a)a.hasOwnProperty(s)&&(i[s]=a[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);l[o]=i[o]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var s,l,o=a;o&&!e.test(o.className);)o=o.parentNode;if(o&&(s=(o.className.match(e)||[,""])[1],l=t.languages[s]),l){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var u=a.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var g={element:a,language:s,grammar:l,code:u};if(t.hooks.run("before-highlight",g),r&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){g.highlightedCode=n.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(g.element),t.hooks.run("after-highlight",g)},c.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",g)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var s in i)n[s]=i[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var l=n[s];l="Array"===t.util.type(l)?l:[l];for(var o=0;o<l.length;++o){var u=l[o],g=u.inside,c=!!u.lookbehind,f=0,p=u.alias;u=u.pattern||u;for(var h=0;h<r.length;h++){var d=r[h];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,w=y+v,k=d.slice(0,y+1),b=d.slice(w+1),O=[h,1];k&&O.push(k);var P=new a(s,g?t.tokenize(m,g):m,p);O.push(P),b&&O.push(b),Array.prototype.splice.apply(r,O)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}t.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+l+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});
$(".filter-button-js").click(function(){$(this).toggleClass("open"),$(".tabs-menu-list").hasClass("open")&&($(".tabs-menu-button-js").toggleClass("open"),$(".tabs-menu-list").removeClass("open")),$(this).parent().siblings(".filters-container").toggleClass("open")}),$(".filters-container a").click(function(t){t.preventDefault()}),$(".filters-container .tabs .tabs-menu ul li").click(function(){var t=$(this).find("a").attr("href");$(this).closest(".tabs").find("div.tab-content.active").removeClass("active"),$(t).addClass("active")});

$(function(){$(".remove-rtl").click(function(){return $(this).parent().addClass("hidden"),$(this).parent().siblings("li").removeClass("hidden"),$("body").removeClass("rtl"),!1})}),$(function(){$(".add-rtl").click(function(){return $(this).parent().addClass("hidden"),$(this).parent().siblings("li").removeClass("hidden"),$("body").addClass("rtl"),!1})});
function setActiveStyleSheet(e){var t,i;for(t=0;i=document.getElementsByTagName("link")[t];t++)-1!=i.getAttribute("rel").indexOf("style")&&i.getAttribute("title")&&(i.disabled=!0,i.getAttribute("title")==e&&(i.disabled=!1))}function getActiveStyleSheet(){var e,t;for(e=0;t=document.getElementsByTagName("link")[e];e++)if(-1!=t.getAttribute("rel").indexOf("style")&&t.getAttribute("title")&&!t.disabled)return t.getAttribute("title");return null}function getPreferredStyleSheet(){var e,t;for(e=0;t=document.getElementsByTagName("link")[e];e++)if(-1!=t.getAttribute("rel").indexOf("style")&&-1==t.getAttribute("rel").indexOf("alt")&&t.getAttribute("title"))return t.getAttribute("title");return null}function createCookie(e,t,i){if(i){var r=new Date;r.setTime(r.getTime()+24*i*60*60*1e3);var n="; expires="+r.toGMTString()}else n="";document.cookie=e+"="+t+n+"; path=/"}function readCookie(e){for(var t=e+"=",i=document.cookie.split(";"),r=0;r<i.length;r++){for(var n=i[r];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}window.onload=function(){var e=readCookie("style"),t=e?e:getPreferredStyleSheet();setActiveStyleSheet(t)},window.onunload=function(){var e=getActiveStyleSheet();createCookie("style",e,365)};var cookie=readCookie("style"),title=cookie?cookie:getPreferredStyleSheet();setActiveStyleSheet(title);
$(window).scroll(function(){var l=$(window).scrollTop();l>=130?($(".pl-jump-nav").addClass("pl-fixed"),$(".pl").addClass("sticky-nav")):($(".pl-jump-nav").removeClass("pl-fixed"),$(".pl").removeClass("sticky-nav"))});
$(".tabs-menu ul li").click(function(){$(this).parent().find("li.active").removeClass("active"),$(this).addClass("active")}),$(".tabs-menu-button-js").click(function(){$(this).toggleClass("open"),$(".filters-container").hasClass("open")&&($(".filter-button-js").toggleClass("open"),$(".filters-container").removeClass("open")),$(this).siblings(".tabs-menu-list").toggleClass("open")}),$("ul.tabs-menu-list li").click(function(){$(this).parent().prev("#tabs-menu-selection").html($(this).text()),$(this).parent().toggleClass("open"),$(this).parent().siblings(".tabs-menu-button-js").toggleClass("open")});