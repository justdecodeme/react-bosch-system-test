(this["webpackJsonpreact-bosch-system-test"]=this["webpackJsonpreact-bosch-system-test"]||[]).push([[0],{21:function(e,t,a){},41:function(e,t,a){e.exports=a(78)},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),c=a.n(l),i=(a(46),a(7)),m=a(3),u=(a(47),a(8)),s=a(9);a(52);var o=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/",exact:!0},r.a.createElement(u.a,{icon:s.f}),r.a.createElement("span",null,"Brand"))),r.a.createElement("p",null,"User Name"))};a(55);var E=function(){return r.a.createElement("nav",{className:"Navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/admin"},r.a.createElement(u.a,{icon:s.e}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/features"},r.a.createElement(u.a,{icon:s.g}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about-us"},r.a.createElement(u.a,{icon:s.d}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/contact-us"},r.a.createElement(u.a,{icon:s.a})))))};a(56);var f=Object(m.f)((function(e){var t,a=e.location.pathname;return a=a.substring(1,a.length).replace("-"," "),(a=(t=a).charAt(0).toUpperCase()+t.slice(1)).includes("profile")&&(a="User Profile"),"Admin"===a&&(a="Home"),r.a.createElement("nav",{className:"Breadcrumb"},r.a.createElement("ul",null,"Home"!==a?r.a.createElement("li",null,"Home",r.a.createElement("span",null," > ")):null,r.a.createElement("li",null,a)))})),p=(a(57),a(4)),v=a.n(p),b=a(2),d=a(14),h=a(5),N=a(38),g=a.n(N).a.create({baseURL:"https://reqres.in/api"});a(75);var j=Object(m.f)((function(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),l=a[0],c=a[1],i=function(){var e=Object(d.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/users",{});case 2:t=e.sent,a=Object(b.a)(t.data.data).sort((function(e,t){return e.first_name>t.first_name?1:-1})),c(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){i()}),[]);var m=function(e,t){var a=Object(b.a)(l);e.target.classList.contains("Active")?e.target.classList.contains("Up")?(e.target.classList.remove("Up"),e.target.classList.add("Down"),a.sort((function(e,a){return e[t]>a[t]?1:-1}))):(a.sort((function(e,a){return e[t]<a[t]?1:-1})),e.target.classList.add("Up"),e.target.classList.remove("Down")):(document.querySelector(".Fixed .Active").classList.remove("Active"),e.target.classList.add("Active"),e.target.classList.contains("Up")?a.sort((function(e,a){return e[t]<a[t]?1:-1})):a.sort((function(e,a){return e[t]>a[t]?1:-1}))),c(a)};return r.a.createElement("div",{className:"UserList"},r.a.createElement("ul",{className:"Fixed"},r.a.createElement("li",null,"Avatar"),r.a.createElement("li",{className:"Active Down",onClick:function(e){return m(e,"first_name")}},"First Name ",r.a.createElement(u.a,{icon:s.b})," ",r.a.createElement(u.a,{icon:s.c})),r.a.createElement("li",{className:"Down",onClick:function(e){return m(e,"last_name")}},"Last Name ",r.a.createElement(u.a,{icon:s.b})," ",r.a.createElement(u.a,{icon:s.c})),r.a.createElement("li",{className:"Down",onClick:function(e){return m(e,"email")}},"Email ",r.a.createElement(u.a,{icon:s.b})," ",r.a.createElement(u.a,{icon:s.c}))),r.a.createElement("ul",{className:"Scroll"},r.a.createElement("li",null,function(){if(l)return l.map((function(t){return r.a.createElement("ul",{onClick:function(){return a=t.id,void e.history.push("/admin/user-profile/"+a);var a},key:t.id},r.a.createElement("li",null,r.a.createElement("img",{src:t.avatar,alt:t.first_name})),r.a.createElement("li",null,t.first_name),r.a.createElement("li",null,t.last_name),r.a.createElement("li",null,t.email))}))}())))})),O=a(39),L=a(40);a(76);var x=Object(m.f)((function(e){var t=Object(L.a)(),a=t.register,l=t.handleSubmit,c=t.errors,i=e.match.params.id,m=Object(n.useState)([]),u=Object(h.a)(m,2),s=u[0],o=u[1],E=Object(n.useState)(!1),f=Object(h.a)(E,2),p=f[0],b=f[1],N=Object(n.useState)(!1),j=Object(h.a)(N,2),x=j[0],y=j[1],C=Object(n.useState)(""),w=Object(h.a)(C,2),A=w[0],S=w[1],U=Object(n.useState)(""),_=Object(h.a)(U,2),k=_[0],F=_[1],D=Object(n.useState)(""),P=Object(h.a)(D,2),q=P[0],H=P[1],B=function(){var e=Object(d.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/users/"+i,{});case 2:t=e.sent,o(Object(O.a)({},t.data.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){B()}),[]);var Z=r.a.createElement("form",{onSubmit:l((function(e){y(!0),b(!1)}))},c.firstName&&r.a.createElement("p",{className:"error"},"First Name length should be between 4 & 16."),c.lastName&&r.a.createElement("p",{className:"error"},"Last Name length should be between 4 & 16."),c.email&&r.a.createElement("p",{className:"error"},"Email is invalid."),r.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name",value:A,ref:a({required:!0,minLength:3,maxLength:15}),onChange:function(e){return S(e.target.value)}}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name",value:k,ref:a({required:!0,minLength:3,maxLength:15}),onChange:function(e){return F(e.target.value)}}),r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:q,ref:a({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}}),onChange:function(e){return H(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Submit"})),I=r.a.createElement("div",{className:"Info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{src:s.avatar,alt:s.first_name})),r.a.createElement("li",null,r.a.createElement("b",null,"First Name:")," ",s.first_name),r.a.createElement("li",null,r.a.createElement("b",null,"Last Name:")," ",s.last_name),r.a.createElement("li",null,r.a.createElement("b",null,"Email:")," ",s.email)),r.a.createElement("input",{type:"submit",value:"Edit",onClick:function(e){return function(e){e.preventDefault(),b(!0),S(s.first_name),F(s.last_name),H(s.email)}(e)}}));return r.a.createElement("div",{className:"UserProfile"},!s||p||x?null:I,p?Z:null,x?r.a.createElement("h3",{style:{color:"yellow",textAlign:"center"}},"Form Submitted Successfully!"):null)}));a(77);var y=function(e){return r.a.createElement("div",{className:"Tabs"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/admin",exact:!0},"User List")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/admin/user-profile",onClick:function(e){e.preventDefault()}},"User Profile"))))};var C=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(y,null),r.a.createElement("div",{className:"List"},r.a.createElement(m.b,{path:"/admin",exact:!0,component:j}),r.a.createElement(m.b,{path:"/admin/user-profile/:id",exact:!0,component:x})))};a(21);var w=function(){return r.a.createElement("div",{className:"NoContent"},r.a.createElement("h1",null,"About Us Page"))};var A=function(){return r.a.createElement("div",{className:"NoContent"},r.a.createElement("h1",null,"Contact Us Page"))};var S=function(){return r.a.createElement("div",{className:"NoContent"},r.a.createElement("h1",null,"Features Page"))};var U=function(e){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Nav"},r.a.createElement(E,null)),r.a.createElement("div",{className:"Content"},r.a.createElement(o,null),r.a.createElement(f,null),r.a.createElement(m.b,{path:"/about-us",exact:!0,component:w}),r.a.createElement(m.b,{path:"/contact-us",exact:!0,component:A}),r.a.createElement(m.b,{path:"/features",exact:!0,component:S}),r.a.createElement(m.b,{path:"/admin",render:function(){return r.a.createElement(C,null)}}),r.a.createElement(m.a,{from:"/",to:"/admin"}))))};c.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7122e913.chunk.js.map