(function(t){function e(e){for(var r,a,s=e[0],u=e[1],l=e[2],c=0,d=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({AboutMe:"AboutMe",Email:"Email",about:"about"}[t]||t)+"."+{AboutMe:"79248e7c",Email:"d4fd3580",about:"ae9eb646"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={Email:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({AboutMe:"AboutMe",Email:"Email",about:"about"}[t]||t)+"."+{AboutMe:"31d6cfe0",Email:"3f97af10",about:"31d6cfe0"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===r||c===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(t);var d=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/josegzza.github.io/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("b-navbar",{attrs:{type:"dark",variant:"dark"}},[n("b-navbar-nav",[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("José González")]),n("b-nav-item",{attrs:{to:{name:"Home"},exact:""}},[t._v("Home")]),n("b-nav-item",{attrs:{to:{name:"About"}}},[t._v("About")]),n("b-nav-item",{attrs:{to:{name:"Projects"}}},[t._v("Projects")]),n("b-nav-item",{attrs:{to:{name:"Resume"}}},[t._v("Resume")]),n("b-nav-item-dropdown",{attrs:{text:"Contact",right:""}},[n("b-dropdown-item",{attrs:{to:{name:"Email"}}},[t._v("Email")]),n("b-dropdown-item",{attrs:{href:"https://www.linkedin.com/in/jos%C3%A9-alberto-gonz%C3%A1lez-arteaga-1117b7153/",target:"_blank"}},[t._v("Linkedin")]),n("b-dropdown-item",{attrs:{href:"https://github.com/josegzza",target:"_blank"}},[t._v("Github")]),n("b-dropdown-item",{attrs:{href:"https://twitter.com/josegzza",target:"_blank"}},[t._v("Twitter")])],1)],1)],1)],1),n("router-view")],1)},o=[],i=n("2877"),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),l=u.exports,c=(n("d3b7"),n("8c4f")),d=n("bb51");r["default"].use(c["a"]);var f=[{path:"/",name:"Home",component:d["default"]},{path:"/About",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/AboutMe",name:"AboutMe",component:function(){return n.e("AboutMe").then(n.bind(null,"59e7"))}},{path:"/Email",name:"Email",component:function(){return n.e("Email").then(n.bind(null,"4fdd"))}}],p=new c["a"]({mode:"history",base:"/josegzza.github.io/",routes:f}),h=p,m=n("2f62");r["default"].use(m["a"]);var b=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(v["a"]),r["default"].config.productionTip=!1,new r["default"]({router:h,store:b,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},"7ad4":function(t,e,n){"use strict";var r=n("9cae"),a=n.n(r);e["default"]=a.a},"9cae":function(t,e){var n=function(t,e,n){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};n.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,r=200-100*Math.random();this.isDeleting&&(r/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,r=500):(r=this.period,this.isDeleting=!0),setTimeout((function(){n.tick()}),r)},window.onload=function(){for(var t=document.getElementsByClassName("typewrite"),e=0;e<t.length;e++){var r=t[e].getAttribute("data-type"),a=t[e].getAttribute("data-period");r&&new n(t[e],JSON.parse(r),a)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".typewrite > .wrap { border-right: 0.08em solid white }",document.body.appendChild(o)}},bb51:function(t,e,n){"use strict";var r=n("c779"),a=n("7ad4"),o=(n("cccb"),n("2877")),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},c779:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("div",{staticClass:"header"},[n("div",{staticClass:"container py-4"},[n("h1",{staticClass:"typewrite",attrs:{href:"","data-period":"2000","data-type":'[ \n              "Hi, I am José González.", \n              "I am Data Science Enthusiast.", \n              "Computer Science Student.",\n              "I am self-Learner." \n              ]'}},[n("span",{staticClass:"wrap"})])])]),n("footer",{staticClass:"footerContainer"},[n("p",{staticClass:"footer"},[t._v("Copyright © José Gzz")])])])}]},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.dc72b0e7.js.map