(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{11:function(e,t,r){e.exports={wrapper:"Home_wrapper__3mc3c",form:"Home_form__1K5rP",form__label:"Home_form__label__3LIHQ",form__input:"Home_form__input__3wZUD",form__submit:"Home_form__submit__3PhKk"}},21:function(e,t,r){e.exports={wrapper:"Profile_wrapper__3daay"}},22:function(e,t,r){e.exports={label:"Input_label__22nS2"}},29:function(e,t,r){},30:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(13),o=r.n(a),i=(r(29),r(30),r(15)),s=r(3),l=r(10),u=r(24),b=function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},j=r(1),p=["component"],d=function(e){var t=e.component,r=Object(u.a)(e,p);return Object(j.jsx)(s.b,Object(l.a)(Object(l.a)({},r),{},{render:function(e){return r="---authentified---",sessionStorage.getItem(r)&&JSON.parse(sessionStorage.getItem(r))?Object(j.jsx)(t,Object(l.a)({},e)):Object(j.jsx)(s.a,{to:"/"});var r}}))},f=r(9),m=r(16),_=Object(m.b)({name:"profile",initialState:{value:{login:"developer21",password:"123456"}}}),O=function(e){return e.profile.value},h=_.reducer,x=r(21),v=r.n(x),g=function(e){var t=Object(f.b)(O).login;return Object(j.jsx)("div",{className:v.a.wrapper,children:Object(j.jsx)("h1",{children:t})})},w=r(11),N=r.n(w),S=r(22),k=r.n(S),y=function(e){var t=Object.assign({},e);return Object(j.jsx)("label",{htmlFor:null===t||void 0===t?void 0:t.id,className:k.a.label,children:Object(j.jsx)("input",Object(l.a)({},t))})},H=r(23),I=function(e){var t=Object(n.useState)(!1),r=Object(H.a)(t,2),c=r[0],a=r[1];return{checkFields:function(t){var r=t.target.form.elements,n=Object.keys(e).reduce((function(t,n){var c=e[n]===r[n].value;return t&&c}),!0);a((function(){return a(n)}))},fieldValid:c}},J=function(e){var t=Object(f.b)(O),r=t.password,c=t.login,a=I({login:c,password:r}),o=a.fieldValid,i=void 0!==o&&o,l=a.checkFields,u=Object(s.g)();return Object(n.useEffect)((function(){return b("---authentified---",!1),function(){}}),[]),Object(j.jsx)("div",{className:N.a.wrapper,children:Object(j.jsxs)("form",{className:N.a.form,onChange:l,onSubmit:function(e){e.preventDefault(),b("---authentified---",!0),u.push("/profile")},autoComplete:"off",children:[Object(j.jsx)(y,{type:"text",name:"login",id:"login",placeholder:"\u041b\u043e\u0433\u0438\u043d",required:!0,className:N.a.form__input}),Object(j.jsx)(y,{type:"password",name:"password",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,className:N.a.form__input}),Object(j.jsx)("button",{type:"submit",className:N.a.form__submit,disabled:!i,children:"\u0412\u043e\u0439\u0442\u0438"})]})})};var F=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{exact:!0,strict:!0,path:"/",component:J}),Object(j.jsx)(d,{component:g,path:"/profile",strict:!0,exact:!0}),"s"]})})})},P=Object(m.a)({reducer:{profile:h}});o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f.a,{store:P,children:Object(j.jsx)(F,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.072557c2.chunk.js.map