(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{30:function(e,t,n){},49:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r,a,c,i,s,o,d,u,b=n(0),l=n.n(b),j=n(39),p=n.n(j),h=(n(49),n(40)),x=n(21),m=n(9),O=n(10),f=n(11),g=n(12),v=n(24),k=n.n(v),y=n(8),S=n(2),B=n(13),F=n(1),C=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(F.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(b.Component),w=C,D=n(14),N=D.a.div(r||(r=Object(B.a)(["\n  background: linear-gradient(lightGreen, white);\n"]))),U=D.a.h1(a||(a=Object(B.a)(["\n  padding: 10px;\n  text-align: center;\n  color: black;\n  font-size: 50px;\n  letter-spacing: 1px;\n"]))),I=D.a.a(c||(c=Object(B.a)(["\n  font-family: monospace;\n  font-size: 20px;\n  display: inline-block;\n  border-radius: 10px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 12rem;\n  background: transparent;\n  color: black;\n  border: 2px solid black;\n  letter-spacing: 0.1px;\n"]))),L=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(F.jsxs)(N,{children:[Object(F.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(F.jsx)(U,{children:"Bank of React"}),Object(F.jsx)(I,{href:"Assignment-4-Bank-of-React/userProfile",children:"User Profile"}),Object(F.jsx)("br",{}),Object(F.jsx)(I,{href:"/login",children:"Login"}),Object(F.jsx)("br",{}),Object(F.jsx)(I,{href:"/credits",children:"Credits"}),Object(F.jsx)("br",{}),Object(F.jsx)(I,{href:"/debits",children:"Debits"}),Object(F.jsx)("br",{}),Object(F.jsx)(w,{accountBalance:this.props.accountBalance})]})}}]),n}(b.Component),P=L,z=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"User Profile"}),Object(F.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(F.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(F.jsx)(y.b,{to:"/",children:"Return to Home"})]})}}]),n}(b.Component),A=z,q=D.a.div(i||(i=Object(B.a)(["\n  background: linear-gradient(lightGreen, white);\n"]))),R=D.a.div(s||(s=Object(B.a)(["\n  font-size: 18px;\n"]))),E=D.a.h1(o||(o=Object(B.a)(["\n  padding: 5px;\n  text-align: center;\n  color: black;\n  font-size: 30px;\n"]))),H=D.a.input(d||(d=Object(B.a)(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n"]))),J=D.a.a(u||(u=Object(B.a)(["\n  font-family: monospace;\n  font-size: 15px;\n  display: inline-block;\n  border-radius: 10px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 6rem;\n  background: transparent;\n  color: black;\n  border: 2px solid black;\n  letter-spacing: 0.1px;\n"]))),M=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(x.a)({},e.state.user),r=t.target.name,a=t.target.value;n[r]=a,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(O.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(F.jsx)(S.a,{to:"/userProfile"}):Object(F.jsxs)(q,{children:[Object(F.jsx)(E,{children:"Login"}),Object(F.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(F.jsxs)("div",{children:[Object(F.jsx)(R,{htmlFor:"userName",children:"User Name"}),Object(F.jsx)(H,{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)(R,{htmlFor:"password",children:"Password"}),Object(F.jsx)(H,{type:"password",name:"password"})]}),Object(F.jsx)(J,{children:"Log In"})]})]})}}]),n}(b.Component),G=(n(30),function(e){var t=e.addDebit,n=e.balance,r=e.debits;return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Debits"}),Object(F.jsxs)("h4",{children:["Balance: ",n]}),null===r||void 0===r?void 0:r.map((function(e,t){var n=e.date.slice(0,10);return Object(F.jsxs)("li",{class:"transaction",children:[e.amount," ","|"," ",e.description," ","|"," ",n]},t)})),Object(F.jsxs)("form",{onSubmit:t,children:[Object(F.jsx)("label",{id:"description",children:" Description: "}),Object(F.jsx)("input",{type:"text",name:"description",required:!0}),Object(F.jsx)("label",{id:"amount",children:" Amount: "}),Object(F.jsx)("input",{type:"number",name:"amount",step:"0.01",required:!0}),Object(F.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(F.jsx)("div",{class:"home-button",children:Object(F.jsx)(y.b,{to:"/",children:"Home"})})]})}),T=function(e){var t=e.addCredit,n=e.balance,r=e.credits;return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Credit"}),Object(F.jsxs)("h4",{children:["Balance: ",n]}),null===r||void 0===r?void 0:r.map((function(e,t){var n=e.date.slice(0,10);return Object(F.jsxs)("li",{class:"transaction",children:[e.amount," ","|"," ",e.description," ","|"," ",n]},t)})),Object(F.jsxs)("form",{onSubmit:t,children:[Object(F.jsx)("label",{id:"description",children:" Description: "}),Object(F.jsx)("input",{type:"text",name:"description",required:!0}),Object(F.jsx)("label",{id:"amount",children:" Amount: "}),Object(F.jsx)("input",{type:"number",name:"amount",step:"0.01",required:!0}),Object(F.jsx)("button",{type:"submit",children:"Add Credits"})]}),Object(F.jsx)("div",{class:"home-button",children:Object(F.jsx)(y.b,{to:"/",children:"Home"})})]})},K=n(27),Q=n.n(K),V=n(80),W=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).balance=function(){return e.state.accountBalance},e.updatedBalance=function(){e.setState((function(e){var t=e.credits,n=e.debits,r=t.reduce((function(e,t){return e+t.amount}),0),a=n.reduce((function(e,t){return e+t.amount}),0);return console.log(parseFloat(r.toFixed(2))-parseFloat(a.toFixed(2))),parseFloat(r.toFixed(2))-parseFloat(a.toFixed(2))===0?{accountBalance:(r-a).toFixed(2).substring(1)}:{accountBalance:(r-a).toFixed(2)}}))},e.addCredit=function(t){t.preventDefault(),e.setState({credits:e.state.credits.concat([{id:Object(V.a)(),amount:parseFloat(t.target.elements.amount.value),description:t.target.elements.description.value,date:(new Date).toISOString()}])}),e.updatedBalance()},e.addDebit=function(t){t.preventDefault(),e.setState({debits:e.state.debits.concat([{id:Object(V.a)(),amount:parseFloat(t.target.elements.amount.value),description:t.target.elements.description.value,date:(new Date).toISOString()}])}),e.updatedBalance()},e.mockLogIn=function(t){var n=Object(x.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.state={accountBalance:1234567.89,currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(k.a.mark((function e(){var t,n,r,a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get("https://moj-api.herokuapp.com/debits");case 2:return e.next=4,e.sent.data;case 4:return t=e.sent,e.next=7,Q.a.get("https://moj-api.herokuapp.com/credits");case 7:return e.next=9,e.sent.data;case 9:n=e.sent,r=0,a=0,t.forEach((function(e){r+=e.amount})),n.forEach((function(e){a+=e.amount})),c=(a-r).toFixed(2),this.setState({debits:t,credits:n,accountBalance:c});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(F.jsx)("div",{children:Object(F.jsxs)(y.a,{basename:"/Assignment-4-Bank-of-React",children:[Object(F.jsx)(S.b,{exact:!0,path:"/",render:function(){return Object(F.jsx)(P,{accountBalance:e.state.accountBalance})}}),Object(F.jsx)(S.b,{exact:!0,path:"/userProfile",render:function(){return Object(F.jsx)(A,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(F.jsx)(S.b,{exact:!0,path:"/login",render:function(){return Object(F.jsx)(M,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(F.jsx)(S.b,{exact:!0,path:"/credits",render:function(){return Object(F.jsx)(T,{balance:e.state.accountBalance,addCredit:e.addCredit,credits:e.state.credits})}}),Object(F.jsx)(S.b,{exact:!0,path:"/debits",render:function(){return Object(F.jsx)(G,{balance:e.state.accountBalance,addDebit:e.addDebit,debits:e.state.debits})}})]})})}}]),n}(b.Component),X=W,Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};p.a.render(Object(F.jsx)(l.a.StrictMode,{children:Object(F.jsx)(X,{})}),document.getElementById("root")),Y()}},[[78,1,2]]]);
//# sourceMappingURL=main.97ec1293.chunk.js.map