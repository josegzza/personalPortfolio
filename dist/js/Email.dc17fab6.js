(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Email"],{"43cb":function(e,a,t){},"4fdd":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"container"},[t("h3",[e._v("Contact Me!")]),t("form",[t("label",[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Your Name"},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}}),t("label",[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Your Email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),t("label",[e._v("Message")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{name:"message",cols:"30",rows:"5",placeholder:"Message"},domProps:{value:e.message},on:{input:function(a){a.target.composing||(e.message=a.target.value)}}}),t("input",{attrs:{type:"submit",value:"Send"}})])])])},s=[],i=(t("b0c0"),{name:"ContactUs",data:function(){return{name:"",email:"",message:""}},methods:{sendEmail:function(e){try{emailjs.sendForm("service_id6ioka","template_unl08p9",e.target,"user_D0r2hreMWqCTMcZD22abf",{name:this.name,email:this.email,message:this.message})}catch(a){console.log({error:a})}this.name="",this.email="",this.message=""}}}),m=i,o=(t("9a65"),t("2877")),r=Object(o["a"])(m,n,s,!1,null,"7a1989e3",null);a["default"]=r.exports},"9a65":function(e,a,t){"use strict";t("43cb")},b0c0:function(e,a,t){var n=t("83ab"),s=t("9bf2").f,i=Function.prototype,m=i.toString,o=/^\s*function ([^ (]*)/,r="name";n&&!(r in i)&&s(i,r,{configurable:!0,get:function(){try{return m.call(this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=Email.dc17fab6.js.map