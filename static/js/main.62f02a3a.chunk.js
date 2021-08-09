(this["webpackJsonpreact-hook-form"]=this["webpackJsonpreact-hook-form"]||[]).push([[0],{73:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);t(0);var r=t(11),o=t.n(r),s=t(25),n=t(126),c=t(125),i=t(131),l=t(132),d=t(127),m=t(129),j=t(51),b=t(117),u=t(59),x=t(120),h=t(128),O=t(39),f=t.n(O),g=t(121),p=(t(73),t(6));var v=function(){var e=Object(j.b)(),a=e.register,t=e.control,r=e.handleSubmit,o=e.formState.errors,O=Object(b.a)((function(e){return{form:{margin:"30px 10px",display:"flex",flexDirection:"column",alignItems:"center"},textField:{marginBottom:15,width:"90%",maxWidth:"400px"},btn:{marginBottom:15,width:"90%",maxWidth:"400px",padding:"15px 0"},formControl:{marginBottom:20,width:"90%",maxWidth:"400px"},error:{display:"flex",marginBottom:25}}})),v=Object(u.a)({palette:{type:"dark",background:{default:"#0e172c"}}}),y=O();return Object(p.jsxs)(x.a,{theme:v,children:[Object(p.jsx)(g.a,{}),Object(p.jsxs)("form",{onSubmit:r((function(e){return alert(JSON.stringify(e))})),className:y.form,children:[Object(p.jsx)(m.a,Object(s.a)({color:"secondary",className:y.textField,variant:"outlined",label:"First Name"},a("firstName",{required:"This field is required",pattern:{value:/^[A-Za-z]+$/i,message:"Alphabetical characters only"}}))),o.firstName&&Object(p.jsxs)("div",{className:y.error,children:[Object(p.jsx)(f.a,{color:"secondary"})," ",Object(p.jsx)(n.a,{color:"secondary",children:o.firstName.message})]}),Object(p.jsx)(m.a,Object(s.a)({color:"secondary",className:y.textField,variant:"outlined",label:"Last Name"},a("lastName",{required:"This field is required",maxLength:{value:15,message:"You exceeded the max length"}}))),o.lastName&&Object(p.jsxs)("div",{className:y.error,children:[Object(p.jsx)(f.a,{color:"secondary"})," ",Object(p.jsx)(n.a,{color:"secondary",children:o.lastName.message})]}),Object(p.jsx)(j.a,{name:"position",control:t,defaultValue:"",render:function(e){var t=e.field;return Object(p.jsxs)(c.a,{variant:"outlined",className:y.formControl,children:[Object(p.jsx)(i.a,{color:"secondary",htmlFor:"pos",children:"Your Position"}),Object(p.jsx)(h.a,Object(s.a)(Object(s.a)(Object(s.a)({},a("position",{required:"This field is required"})),{},{color:"secondary",variant:"outlined",label:"Your Position"},t),{},{children:["Frontend_Dev","Backend_Dev","FullStack_Dev"].map((function(e,a){return Object(p.jsx)(l.a,{value:e,children:e},a)}))}))]})}}),o.position&&Object(p.jsxs)("div",{className:y.error,children:[Object(p.jsx)(f.a,{color:"secondary"})," ",Object(p.jsx)(n.a,{color:"secondary",children:o.position.message})]}),Object(p.jsx)(m.a,Object(s.a)({color:"secondary",className:y.textField,variant:"outlined",label:"Age"},a("age",{required:"This field is required",min:{value:15,message:"You must be between 15 and 99 years old"},max:{value:99,message:"You must be between 15 and 99 years old"}}))),o.age&&Object(p.jsxs)("div",{className:y.error,children:[Object(p.jsx)(f.a,{color:"secondary"})," ",Object(p.jsx)(n.a,{color:"secondary",children:o.age.message})]}),Object(p.jsx)(m.a,Object(s.a)({color:"secondary",className:y.textField,variant:"outlined",label:"Phone Number"},a("phoneNumber",{pattern:{value:/^09\d{9}$/,message:"Your phone number is not valid"}}))),o.phoneNumber&&Object(p.jsxs)("div",{className:y.error,children:[Object(p.jsx)(f.a,{color:"secondary"})," ",Object(p.jsx)(n.a,{color:"secondary",children:o.phoneNumber.message})]}),Object(p.jsx)(d.a,{className:y.btn,variant:"contained",color:"secondary",type:"submit",children:"Submit"})]})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,133)).then((function(a){var t=a.getCLS,r=a.getFID,o=a.getFCP,s=a.getLCP,n=a.getTTFB;t(e),r(e),o(e),s(e),n(e)}))};o.a.render(Object(p.jsx)(v,{}),document.getElementById("root")),y()}},[[85,1,2]]]);
//# sourceMappingURL=main.62f02a3a.chunk.js.map