(function(e){function t(t){for(var n,a,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({Certificates:"Certificates",Projects:"Projects",about:"about"}[e]||e)+"."+{Certificates:"416f2bbe",Projects:"eed7bc99",about:"150bdd52"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={Certificates:1,Projects:1,about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({Certificates:"Certificates",Projects:"Projects",about:"about"}[e]||e)+"."+{Certificates:"c0ff0ee9",Projects:"51daca56",about:"7a5310c1"}[e]+".css",o=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],p.parentNode.removeChild(p),r(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/josegzza.github.io/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3609:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",[r("b-navbar",{staticClass:"navbar navbar-dark",staticStyle:{"background-color":"#282D37"}},[r("b-navbar-nav",[r("b-navbar-brand",[e._v("José González")]),r("b-nav-item",{attrs:{to:{name:"Home"},exact:""}},[e._v("Home")]),r("b-nav-item",{attrs:{to:{name:"About"}}},[e._v("About")]),r("b-nav-item",{attrs:{to:{name:"Projects"}}},[e._v("Projects")]),r("b-nav-item",{attrs:{to:{name:"Certificates"}}},[e._v("Certificates")]),r("b-nav-item-dropdown",{attrs:{text:"Contact",right:""}},[r("b-dropdown-item",{attrs:{href:"https://www.linkedin.com/in/pepegzza/",target:"_blank"}},[e._v("Linkedin")]),r("b-dropdown-item",{attrs:{href:"https://github.com/josegzza",target:"_blank"}},[e._v("Github")]),r("b-dropdown-item",{attrs:{href:"https://www.kaggle.com/josegzza",target:"_blank"}},[e._v("Kaggle")])],1)],1)],1)],1),r("router-view")],1)},o=[],i=r("2877"),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),c=u.exports,l=(r("d3b7"),r("8c4f"));r("bb51");n["default"].use(l["a"]);var f=[{path:"/",name:"Home",component:function(){return r.e("about").then(r.bind(null,"bb51"))}},{path:"/About",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/Projects",name:"Projects",component:function(){return r.e("Projects").then(r.bind(null,"acca"))}},{path:"/Certificates",name:"Certificates",component:function(){return r.e("Certificates").then(r.bind(null,"41f3"))}}],p=new l["a"]({mode:"history",base:"/josegzza.github.io/",routes:f}),d=p,b=r("2f62");n["default"].use(b["a"]);var m=new b["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=r("5f5b");r("f9e3"),r("2dd8");n["default"].use(h["a"]),n["default"].config.productionTip=!1,new n["default"]({router:d,store:m,render:function(e){return e(c)}}).$mount("#app")},ac50:function(e,t,r){"use strict";r("3609")},bb51:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"flex-column"},[r("typical",{staticClass:"vt-title",attrs:{steps:["Hi, I am José González! :-) 👋",500],wrapper:"h1"}}),r("typical",{staticClass:"vt-subTitle",attrs:{steps:["I am",1e3,"I am Data Engineer. ⛏",1e3,"I am Software Engineer. 🖥",1e3,"I am Philosophy lover. 🕉️",1e3,"I am self-Learner. 📚",1e3,"I am chess student. ♟️",1e3,"I am Proud music geek. 🎵",1e3,"I am Coffee addict. 🍵",1e3],loop:1/0,wrapper:"h3"}})],1),e._m(0)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footerContainer"},[r("p",[e._v("Copyright © José Gzz")])])}],o=r("4140"),i=r.n(o),s={name:"app",data:function(){return{msg:"vue typical"}},components:{typical:i.a}},u=s,c=(r("ac50"),r("2877")),l=Object(c["a"])(u,n,a,!1,null,"7281efbb",null);t["default"]=l.exports}});
//# sourceMappingURL=app.bf32f224.js.map