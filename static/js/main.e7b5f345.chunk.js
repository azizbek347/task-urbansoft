(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{11:function(e,t,n){e.exports={wrapper:"Home_wrapper__3mc3c",form:"Home_form__1K5rP",form__label:"Home_form__label__3LIHQ",form__input:"Home_form__input__3wZUD",form__submit:"Home_form__submit__3PhKk"}},21:function(e,t,n){e.exports={wrapper:"Profile_wrapper__3daay"}},22:function(e,t,n){e.exports={label:"Input_label__22nS2"}},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(13),o=n.n(a),i=(n(29),n(30),n(15)),s=n(3),l=n(10),u=n(24),j=function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},b=n(1),p=["component"],d=function(e){var t=e.component,n=Object(u.a)(e,p);return Object(b.jsx)(s.b,Object(l.a)(Object(l.a)({},n),{},{render:function(e){return n="---authentified---",sessionStorage.getItem(n)&&JSON.parse(sessionStorage.getItem(n))?Object(b.jsx)(t,Object(l.a)({},e)):Object(b.jsx)(s.a,{to:"./"});var n}}))},f=n(9),m=n(16),_=Object(m.b)({name:"profile",initialState:{value:{login:"developer21",password:"123456"}}}),O=function(e){return e.profile.value},h=_.reducer,x=n(21),v=n.n(x),g=function(e){var t=Object(f.b)(O).login;return Object(b.jsx)("div",{className:v.a.wrapper,children:Object(b.jsx)("h1",{children:t})})},w=n(11),N=n.n(w),S=n(22),k=n.n(S),y=function(e){var t=Object.assign({},e);return Object(b.jsx)("label",{htmlFor:null===t||void 0===t?void 0:t.id,className:k.a.label,children:Object(b.jsx)("input",Object(l.a)({},t))})},H=n(23),I=function(e){var t=Object(r.useState)(!1),n=Object(H.a)(t,2),c=n[0],a=n[1];return{checkFields:function(t){var n=t.target.form.elements,r=Object.keys(e).reduce((function(t,r){var c=e[r]===n[r].value;return t&&c}),!0);a((function(){return a(r)}))},fieldValid:c}},J=function(e){var t=Object(f.b)(O),n=t.password,c=t.login,a=I({login:c,password:n}),o=a.fieldValid,i=void 0!==o&&o,l=a.checkFields,u=Object(s.g)();return Object(r.useEffect)((function(){return j("---authentified---",!1),function(){}}),[]),Object(b.jsx)("div",{className:N.a.wrapper,children:Object(b.jsxs)("form",{className:N.a.form,onChange:l,onSubmit:function(e){e.preventDefault(),j("---authentified---",!0),u.push("./profile")},autoComplete:"off",children:[Object(b.jsx)(y,{type:"text",name:"login",id:"login",placeholder:"\u041b\u043e\u0433\u0438\u043d",required:!0,className:N.a.form__input}),Object(b.jsx)(y,{type:"password",name:"password",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,className:N.a.form__input}),Object(b.jsx)("button",{type:"submit",className:N.a.form__submit,disabled:!i,children:"\u0412\u043e\u0439\u0442\u0438"})]})})};var F=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{exact:!0,strict:!0,path:"./",component:J}),Object(b.jsx)(d,{component:g,path:"./profile",strict:!0,exact:!0}),Object(b.jsx)(d,{component:J})]})})})},P=Object(m.a)({reducer:{profile:h}});o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f.a,{store:P,children:Object(b.jsx)(F,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e7b5f345.chunk.js.map