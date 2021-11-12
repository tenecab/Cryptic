(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{270:function(e,t,n){},494:function(e,t,n){},495:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(67),o=n.n(s),i=(n(270),n(271),n(46)),j=n(11),a=n(249),l=n(13),b=n(507),u=n(510),d=n(97),O=n(508),h=n(506),x=n(509),p=n(1);var m=function(e){var t=e.setCurrentUser,n=r.a.useState(!1),s=Object(j.a)(n,2),o=s[0],i=s[1],a=Object(c.useState)(!1),l=Object(j.a)(a,2),b=l[0],d=l[1],m=Object(c.useState)(""),f=Object(j.a)(m,2),C=f[0],g=f[1],v=Object(c.useState)(""),y=Object(j.a)(v,2),S=y[0],k=y[1],w=Object(c.useState)(""),N=Object(j.a)(w,2),U=N[0],T=N[1];return console.log(C,S,U),Object(p.jsxs)(O.a,{onClose:function(){return i(!1)},onOpen:function(){return i(!0)},open:o,trigger:Object(p.jsx)("p",{children:" Auth "}),children:[Object(p.jsx)(O.a.Header,{children:" Please Login or Create an Account"}),Object(p.jsx)(O.a.Content,{image:!0,children:b?Object(p.jsxs)(O.a.Description,{children:[Object(p.jsx)(u.a,{children:"Sign Up"}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:function(e){return g(e.target.value)},value:C,type:"text",name:"name"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:function(e){return k(e.target.value)},value:S,type:"text",name:"password"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"confirmation",children:"Password Confirmation"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:function(e){return T(e.target.value)},value:U,type:"text",name:"confirmation"})]})]}):Object(p.jsxs)(h.a.Field,{children:[Object(p.jsx)(u.a,{children:"Log In"}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:function(e){return g(e.target.value)},type:"text",name:"name"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:function(e){return k(e.target.value)},type:"text",name:"password"})]})]})}),Object(p.jsxs)(O.a.Actions,{children:[b?Object(p.jsx)(x.a,{content:"Log In",color:"black",onClick:function(){return d(!b)}}):Object(p.jsx)(x.a,{content:"Sign Up",color:"black",onClick:function(){return d(!b)}}),b?Object(p.jsx)(x.a,{content:"Submit",icon:"checkmark",onClick:function(){fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:C,password:S,password_confirmation:U})}).then((function(e){e.ok?e.json().then((function(e){t(e),console.log(e),i(!1)})):e.json().then((function(e){console.log(e)}))}))},positive:!0}):Object(p.jsx)(x.a,{content:"Submit",icon:"checkmark",onClick:function(){fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:C,password:S})}).then((function(e){e.ok?e.json().then((function(e){console.log(e),i(!1),t(e)})):e.json().then((function(e){console.log("Bad Login")}))}))},positive:!0})]})]})};var f=function(e){var t=e.currentUser,n=e.setCurrentUser,c={paddingtop:"5px",display:"inline-block",width:"100px",padding:"5px",margin:"0 6px 6px",background:"magenta",textDecoration:"none"};return Object(p.jsx)("div",{className:"mainheader",children:Object(p.jsxs)(u.a,{children:[Object(p.jsxs)("h2",{children:[Object(p.jsx)(d.a,{id:"icon",name:"gem outline"}),"Cryptic"]}),Object(p.jsx)(u.a.Subheader,{children:"Browse currencies, and find something new."}),Object(p.jsx)("br",{}),Object(p.jsxs)("nav",{children:[Object(p.jsxs)(b.a,{secondary:!0,children:[t?Object(p.jsx)(b.a.Item,{style:c,children:Object(p.jsx)(i.b,{to:"/profile",children:"Profile"})}):null,Object(p.jsx)(b.a.Item,{style:c,children:Object(p.jsx)(i.b,{to:"/",children:" Home "})}),Object(p.jsx)(b.a.Item,{style:c,children:Object(p.jsx)(i.b,{to:"/currencies",children:"Currencies"})}),t?Object(p.jsx)(b.a.Item,{onClick:function(){n(null),console.log("Current user...",t),fetch("/logout",{method:"DELETE"}).then(console.log("Current user...",t))},style:c,children:"Log Out"}):Object(p.jsx)(b.a.Item,{style:c,children:Object(p.jsx)(m,{currentUser:t,setCurrentUser:n})})]}),Object(p.jsx)("br",{})]})]})})},C=n(511),g=n(157),v=n(254),y=n.n(v);var S=function(e){var t=e.bulletin,n=e.currentUser,r=Object(c.useState)(!1),s=Object(j.a)(r,2),o=s[0],i=s[1],a=Object(c.useState)(""),l=Object(j.a)(a,2),b=l[0],d=l[1],O=Object(c.useState)(""),m=Object(j.a)(O,2),f=m[0],g=m[1],v=Object(c.useState)(),S=Object(j.a)(v,2),k=S[0],w=S[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a,{children:Object(p.jsxs)(C.a.Content,{children:[Object(p.jsxs)(u.a,{children:[" Crypto Bulletin for ",t.crypto.data," "]}),Object(p.jsxs)(y.a,{children:[" Created by: ",t.user.name," "]}),Object(p.jsx)("br",{})," ",t.content," ",Object(p.jsx)("br",{}),n?Object(p.jsx)(C.a.Content,{extra:!0,children:Object(p.jsx)("div",{className:"ui three buttons",children:Object(p.jsx)(x.a,{onClick:function(){return i(!o)},basic:!0,color:"teal",children:" Create Bulletin "})})}):Object(p.jsx)(C.a.Content,{extra:!0,children:" Log In for Full Functionality "})]})}),Object(p.jsx)("br",{}),o?Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a,{children:Object(p.jsxs)(C.a.Content,{children:[Object(p.jsxs)(C.a.Header,{padding:"10px",children:[" ",Object(p.jsx)("h2",{children:" Bulletin Form "})," "]}),Object(p.jsxs)(h.a,{onSubmit:function(e){var t;e.preventDefault(),fetch("/crypto/".concat(f)).then((function(e){return e.json()})).then((function(e){w(e.id),console.log(e),d(""),g("")})),t={content:b,user_id:n.id,crypto_id:k},console.log(t),fetch("/bulletins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then(console.log("Added Bulletin to DB"))},children:[Object(p.jsx)("input",{name:"tickerholder",onChange:function(e){return g(e.target.value)},value:f,placeholder:"ticker?",type:"text"}),Object(p.jsx)("input",{name:"contentholder",onChange:function(e){return d(e.target.value)},value:b,placeholder:"content",type:"text"}),Object(p.jsx)("button",{className:"ui button",type:"submit",children:" Submit Bulletin "}),Object(p.jsx)("button",{className:"ui button",onClick:function(){return i(!o)},children:" Close Form "})]})]})}),Object(p.jsx)("br",{})]}):null]})};var k=function(e){var t=e.comments;return e.currentUser,console.log(t),Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a,{children:Object(p.jsxs)(C.a.Content,{children:[Object(p.jsxs)(u.a,{children:[" Comment created on: ",t.crypto.data," "]}),t.content]})}),Object(p.jsx)("br",{})]})};var w=function(e){var t=r.a.useState(!1),n=Object(j.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(!1),a=Object(j.a)(i,2),l=a[0],b=a[1],d=Object(c.useState)(!1),m=Object(j.a)(d,2),f=m[0],v=m[1],y=e.cryptoData,S=e.currentUser,k=Object(c.useState)([]),w=Object(j.a)(k,2),N=(w[0],w[1],Object(c.useState)(!1)),U=Object(j.a)(N,2),T=(U[0],U[1],Object(c.useState)("")),P=Object(j.a)(T,2),F=P[0],B=P[1],I=Object(c.useState)(!1),D=Object(j.a)(I,2),H=D[0],A=D[1],L=Object(c.useState)(!1),E=Object(j.a)(L,2),J=E[0],M=E[1],W=y.comments?y.comments.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a,{children:Object(p.jsxs)(C.a.Content,{children:[Object(p.jsxs)(u.a,{children:[" ",e.content," "]}),Object(p.jsx)(x.a,{onClick:function(){return b(!l)},color:"green",children:" Add Comment "}),Object(p.jsx)("button",{className:"ui button",onClick:function(){return v(!f)},children:" Close Form "})]})}),Object(p.jsx)("br",{})]})})):null,V=y.bulletins?y.bulletins.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a,{children:Object(p.jsxs)(C.a.Content,{children:[Object(p.jsxs)(u.a,{children:[" ",e.content," "]}),Object(p.jsx)(x.a,{onClick:function(){return b(!l)},color:"yellow",children:" Add Comment "}),Object(p.jsx)("button",{className:"ui button",onClick:function(){return A(!H)},children:" Close Form "})]})}),Object(p.jsx)("br",{})]})})):null;return Object(p.jsxs)(O.a,{onClose:function(){return o(!1)},onOpen:function(){return o(!0)},open:s,trigger:Object(p.jsx)("p",{children:" Details "}),children:[y.comments?Object(p.jsxs)(O.a.Content,{children:["Hello World ",y.data,Object(p.jsx)("br",{}),Object(p.jsx)(x.a,{onClick:function(){return v(!f)},basic:!0,color:"blue",children:" View Comments "}),Object(p.jsx)(x.a,{onClick:function(){return A(!H)},basic:!0,color:"green",children:" View Bulletins "})]}):Object(p.jsx)(O.a.Content,{children:"Not added to server!"}),f?[W]:Object(p.jsx)(C.a,{children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{children:" Add a comment..  "}),Object(p.jsx)(x.a,{onClick:function(){return b(!l)},color:"red",children:" Add Comment "})]})}),Object(p.jsx)("br",{}),H?[V]:Object(p.jsx)(C.a,{children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(u.a,{children:" Add a bulletin..  "}),Object(p.jsx)(x.a,{onClick:function(){return M(!J)},color:"blue",children:" Add Bulletin "})]})}),l?Object(p.jsx)(C.a,{children:Object(p.jsxs)(C.a.Content,{children:[Object(p.jsx)(u.a,{children:" Post New Comment "}),Object(p.jsxs)(h.a,{onSubmit:function(e){var t;t={content:F,user_id:S.id,crypto_id:y.id},console.log(t),fetch("/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then(console.log("Added Console to DB"),B(""),b(!l))},children:[Object(p.jsx)("input",{onChange:function(e){return B(e.target.value)},value:F,width:"20px",name:"contentholder",placeholder:"content...",type:"text"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"ui button",type:"submit",children:" Submit Comment "}),Object(p.jsx)("button",{className:"ui button",onClick:function(){return b(!l)},children:" Close Form "})]})]})}):null,Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})};var N=function(e){var t=e.crypto,n=e.currentUser,r=Object(c.useState)([]),s=Object(j.a)(r,2),o=s[0],i=s[1];return Object(p.jsx)("div",{className:"cards",children:Object(p.jsxs)(C.a,{children:[Object(p.jsxs)(C.a.Content,{children:[Object(p.jsx)(C.a.Header,{children:t.T}),Object(p.jsxs)(C.a.Meta,{children:["Closing Price: ",t.c]}),Object(p.jsxs)(C.a.Meta,{children:[" Trading Volume: ",t.t]}),Object(p.jsxs)(C.a.Meta,{children:[" Transaction Volume: ",t.n," "]}),Object(p.jsx)(C.a.Description,{})]}),n?Object(p.jsx)(C.a.Content,{extra:!0,children:Object(p.jsxs)("div",{className:"ui buttons",children:["// if cryptoData record exists... show button otherwise null",o?Object(p.jsx)(x.a,{basic:!0,color:"teal",onClick:function(){fetch("/crypto/".concat(t.T)).then((function(e){return e.json()})).then((function(e){i(e),console.log(e)}))},children:Object(p.jsx)(w,{currentUser:n,cryptoData:o})}):null,"// add to watchlist array and creates record of cryptoData",Object(p.jsx)(x.a,{onClick:function(){console.log(t.T),n.watchlists[0].list.push(t),console.log(n)},basic:!0,color:"red",children:"Watchlist"})]})}):Object(p.jsx)(C.a.Content,{extra:!0,children:"Log In for Full Functionality"})]})})};var U=function(e){var t=e.crypto;return console.log(t),Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a,{padding:"20px",children:Object(p.jsxs)(C.a.Content,{children:[Object(p.jsxs)(u.a,{children:[" ",t.T," "]}),Object(p.jsxs)("p",{children:[" Closing Price - ",t.c," "]}),Object(p.jsxs)("p",{children:[" 24 Hour High - ",t.h," "]}),Object(p.jsxs)("p",{children:[" 24 Hour Low - ",t.l," "]}),Object(p.jsxs)("p",{children:[" 24 Hour Starting Price - ",t.o," "]}),Object(p.jsxs)("p",{children:[" Total Volume - ",t.v," "]})]})}),Object(p.jsx)("br",{})]})};var T=function(e){var t=e.currentUser,n=t.watchlists[0].list.map((function(e){return Object(p.jsx)(U,{crypto:e})})),c=t.bulletins.map((function(e){return Object(p.jsx)(S,{bulletin:e,currentUser:t})})),r=t.comments.map((function(e){return Object(p.jsx)(k,{comments:e,currentUser:t})}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Profile "}),Object(p.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:5},children:[Object(p.jsxs)("div",{className:"column",children:[Object(p.jsxs)("h2",{children:[" ",t.name,"'s Watchlist: "]}),n]}),Object(p.jsxs)("div",{className:"column",children:[Object(p.jsx)("h2",{children:" Posted Bulletins: "}),Object(p.jsxs)("p",{children:[" ",c," "]})]}),Object(p.jsxs)("div",{className:"column",children:[Object(p.jsx)("h2",{children:" Posted Comments: "}),Object(p.jsxs)("p",{children:[" ",r," "]})]}),Object(p.jsx)("br",{})]})]})};var P=function(e){var t=e.singleCrypto,n=(e.input,e.setInput),c=e.date;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h3",{children:["Market Data as of ",c,"  "]}),Object(p.jsxs)("div",{className:"ui icon input",children:[Object(p.jsx)("i",{className:"search icon"}),Object(p.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){return n(e.target.value)}})]}),Object(p.jsx)("div",{className:"crypto",children:t})]})};var F=function(e){var t=e.currentUser,n=e.setCurrentUser,r=Object(c.useState)([]),s=Object(j.a)(r,2),o=s[0],i=s[1],b=Object(c.useState)(""),u=Object(j.a)(b,2),d=u[0],O=u[1],h=Object(c.useState)([]),x=Object(j.a)(h,2),C=x[0],g=(x[1],Object(a.restClient)("ozCbtJMUwHk31pXy7OhIeWbHzjytSflP"),"2021-11-05"),v=o.filter((function(e){return""===d||e.T.toLowerCase().includes(d.toLowerCase())}));Object(c.useEffect)((function(){fetch("https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/".concat(g,"?adjusted=true&apiKey=ozCbtJMUwHk31pXy7OhIeWbHzjytSflP")).then((function(e){return e.json()})).then((function(e){console.log(e),i(e.results)}))}),[]),Object(c.useEffect)((function(){fetch("/bulletins").then((function(e){return e.json()})).then((function(e){C.push(e)}))}),[]),t&&console.log(t);var y=v.map((function(e){return Object(p.jsx)(N,{currentUser:t,crypto:e},e.T)}));return C.map((function(e){return Object(p.jsx)(S,{bulletin:e,currentUser:t})})),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"ui menu",children:Object(p.jsx)(f,{currentUser:t,setCurrentUser:n})}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsxs)("div",{className:"main",children:[t?Object(p.jsxs)("h1",{children:[" Welcome to Cryptic, ",t.name," "]}):Object(p.jsx)("h1",{children:" Please Login for the Full Cryptic Experience "}),Object(p.jsx)("p",{children:" This weeks featured crypto is Bitcoin "}),Object(p.jsx)("br",{})]})}),Object(p.jsx)(l.a,{path:"/currencies",children:Object(p.jsx)(P,{date:g,input:d,setInput:O,singleCrypto:y})}),t?Object(p.jsx)(l.a,{path:"/profile",children:Object(p.jsx)(T,{currentUser:t})}):Object(p.jsx)(l.a,{path:"/profile",children:Object(p.jsx)(m,{})})]})]})};n(494);var B=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return r(e)}))}))}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(F,{currentUser:n,setCurrentUser:r})})};o.a.render(Object(p.jsx)(i.a,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))}},[[495,1,2]]]);
//# sourceMappingURL=main.1fc8c36e.chunk.js.map