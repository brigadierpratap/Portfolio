(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{43:function(e,s,a){},44:function(e,s,a){},47:function(e,s,a){},58:function(e,s,a){"use strict";a.r(s);var t=a(0),r=a(2),c=a.n(r),i=(a(38),a(39),a(11)),l=a.n(i),n=(a(43),a(44),a(59)),j=a(60),d=a(61),o=a(29),m=a.n(o);function b(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(m.a,{options:{strings:["An Undergrad Student","A Web Developer.","A Javaphile.","A Linux Enthusiast."],autoStart:!0,loop:!0}})})}var h=a.p+"static/media/photo2.196ed352.jpg";var x=function(){return Object(t.jsx)(n.a,{fluid:!0,style:{fontSize:"1.3rem"},children:Object(t.jsxs)(j.a,{children:[Object(t.jsx)(d.a,{md:!0,style:{display:"inline-flex",justifyContent:"center"},children:Object(t.jsx)("img",{className:"img-fluid",style:{borderRadius:"50%",objectFit:"cover",maxHeight:"70%",alignSelf:"center"},src:h,alt:"pawan"})}),Object(t.jsx)(d.a,{md:!0,style:{verticalAlign:"middle",display:"flex",justifyContent:"center",marginBottom:"5rem"},children:Object(t.jsxs)("div",{className:"my-auto text-light",children:["Hello, I'm Pawan Singh!",Object(t.jsx)(b,{})]})})]})})},O=a(4),g=a(12),p=a(19),u=a(30),f=a(31),v=a(13),y=a(35),N=a(34),w=function(e){Object(y.a)(a,e);var s=Object(N.a)(a);function a(e){var t;return Object(u.a)(this,a),(t=s.call(this,e)).handleChange=function(e){if("email"===e.target.name){/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(e.target.value)?t.setState({emailVal:!0}):t.setState({emailVal:!1})}t.setState((function(s){return{formData:Object(p.a)(Object(p.a)({},s.formData),{},Object(g.a)({},e.target.name,e.target.value))}}))},t.state={status:"",emailVal:"true",formData:{firstName:"",lastName:"",email:"",message:""}},t.submitForm=t.submitForm.bind(Object(v.a)(t)),t}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.status;return Object(t.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/mwkwzzjl",method:"POST",children:[Object(t.jsxs)("div",{class:"form-row w-75 mx-auto my-2",children:[Object(t.jsx)("div",{class:"col",children:Object(t.jsx)("input",{type:"text",class:"form-control",placeholder:"First name",name:"firstName",onChange:this.handleChange,required:!0})}),Object(t.jsx)("div",{class:"col",children:Object(t.jsx)("input",{type:"text",class:"form-control",placeholder:"Last name",name:"lastName",onChange:this.handleChange})})]}),Object(t.jsx)("div",{class:"form-row w-75 mx-auto my-2",children:Object(t.jsx)("div",{class:"col",children:Object(t.jsx)("input",{type:"text",class:"form-control ".concat(this.state.emailVal?"":"border-danger"),placeholder:"Your Email",name:"email",onChange:this.handleChange,required:!0})})}),Object(t.jsx)("div",{class:"form-row w-75 mx-auto my-2",children:Object(t.jsx)("div",{class:"col",children:Object(t.jsx)("textarea",{class:"form-control",rows:"3",placeholder:"Type Your Message here..",name:"message",onChange:this.handleChange})})}),"SUCCESS"===e?Object(t.jsx)("p",{children:"Thanks!"}):Object(t.jsx)("button",{className:"btn btn-danger",type:"submit",children:"Submit"}),"ERROR"===e&&Object(t.jsx)("p",{children:"Ooops! There was an error."})]})}},{key:"submitForm",value:function(e){var s=this;e.preventDefault();var a=e.target,t=this.state.formData;console.log(t),fetch(a.action,{method:a.method,body:JSON.stringify({firstName:t.firstName,lastName:t.lastName,email:t.email,message:t.message}),headers:{"Content-type":"application/json",Accept:"*/*"}}).then((function(e){a.reset(),s.setState({status:"SUCCESS"})})).catch((function(e){return s.setState({status:"ERROR"})}))}}]),a}(c.a.Component);var S=function(){return Object(t.jsx)("div",{className:"py-4 my-4 ",children:Object(t.jsxs)("div",{className:"container text-light border  mb-3 pb-5 mb-5",style:{borderRadius:"2%"},children:[Object(t.jsx)("h4",{className:"pt-3",children:"Contact me"}),Object(t.jsx)("hr",{style:{backgroundColor:"white",width:"50%"}}),Object(t.jsx)(w,{}),Object(t.jsx)("hr",{style:{backgroundColor:"white",width:"50%"}}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-6 mx-auto",children:Object(t.jsxs)("address",{children:[Object(t.jsx)("strong",{children:"Pawan Singh"}),Object(t.jsx)("br",{}),"National Institute of Technology Patna",Object(t.jsx)("br",{}),"Ashok Rajpath, Patna",Object(t.jsx)("br",{}),"BIHAR IN.",Object(t.jsx)("br",{}),Object(t.jsx)("strong",{children:"Phone :"}),Object(t.jsx)("a",{href:"tel:+918707880499",style:{color:"inherit"},children:"+91 87077880499"}),Object(t.jsx)("br",{}),Object(t.jsx)("strong",{children:"Email :"}),Object(t.jsx)("a",{href:"mailto:pawans.ug19.ec@nitp.ac.in",style:{color:"inherit"},children:"pawans.ug19.ec@nitp.ac.in"})]})})})]})})};a(47);var C=function(){return Object(t.jsxs)("center",{style:{marginBottom:"4rem"},children:[Object(t.jsxs)("div",{class:"row container-fluid mt-2 mb-2",children:[Object(t.jsxs)(d.a,{md:"12",children:[Object(t.jsx)("hr",{style:{backgroundColor:"white"}}),Object(t.jsxs)("center",{children:[" ",Object(t.jsx)("h1",{className:"text-light",children:"My Skills"})," "]}),Object(t.jsx)("hr",{style:{backgroundColor:"white"}})]}),Object(t.jsx)(d.a,{xl:"3",md:"4",sm:"6",className:"my-2",children:Object(t.jsxs)(j.a,{className:"my-2",children:[Object(t.jsx)(d.a,{xl:"3",md:"3",sm:"3",xs:"3",children:Object(t.jsx)("span",{className:"fa fa-linux fa-3x text-light"})}),Object(t.jsxs)(d.a,{children:[Object(t.jsx)("div",{class:"progress my-2 ",style:{height:"1.8rem",borderRadius:"1rem"},children:Object(t.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"75%",fontSize:"1.1rem",backgroundColor:"#e5bb12"},children:"75%"})}),Object(t.jsx)("div",{className:"my-2 text-light",children:Object(t.jsx)("h3",{children:"Linux Os"})})]})]})}),Object(t.jsx)(d.a,{xl:"3",md:"4",sm:"6",className:"my-2",children:Object(t.jsxs)(j.a,{className:"my-2",children:[Object(t.jsx)(d.a,{xl:"3",md:"3",sm:"3",xs:"3",children:Object(t.jsx)("span",{className:"fa fa-html5 fa-3x text-light"})}),Object(t.jsxs)(d.a,{children:[Object(t.jsx)("div",{class:"progress my-2",style:{height:"1.8rem",borderRadius:"1rem"},children:Object(t.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100",style:{width:"95%",fontSize:"1.1rem",backgroundColor:"#e97e2e"},children:"95%"})}),Object(t.jsx)("div",{className:"my-2 text-light",children:Object(t.jsx)("h3",{children:"HTML 5"})})]})]})}),Object(t.jsx)(d.a,{xl:"3",md:"4",sm:"6",className:"my-2",children:Object(t.jsxs)(j.a,{className:"my-2",children:[Object(t.jsx)(d.a,{xl:"3",md:"3",sm:"3",xs:"3",children:Object(t.jsx)("span",{className:"fa fa-css3 fa-3x text-light"})}),Object(t.jsxs)(d.a,{children:[Object(t.jsx)("div",{class:"progress my-2",style:{height:"1.8rem",borderRadius:"1rem"},children:Object(t.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100",style:{width:"85%",fontSize:"1.1rem",backgroundColor:"#59a090"},children:"85%"})}),Object(t.jsx)("div",{className:"my-2 text-light",children:Object(t.jsx)("h3",{children:"CSS 3"})})]})]})}),Object(t.jsx)(d.a,{xl:"3",md:"4",sm:"6",className:"my-2",children:Object(t.jsxs)(j.a,{className:"my-2",children:[Object(t.jsx)(d.a,{xl:"3",md:"3",sm:"3",xs:"3",children:Object(t.jsx)("span",{className:"fab fa-bootstrap fa-3x text-light"})}),Object(t.jsxs)(d.a,{children:[Object(t.jsx)("div",{class:"progress my-2",style:{height:"1.8rem",borderRadius:"1rem"},children:Object(t.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100",style:{width:"95%",fontSize:"1.1rem",backgroundColor:"#7c37cc"},children:"95%"})}),Object(t.jsx)("div",{className:"my-2 text-light",children:Object(t.jsx)("h3",{children:"Bootstrap"})})]})]})}),Object(t.jsx)(d.a,{xl:"3",md:"4",sm:"6",className:"my-2",children:Object(t.jsxs)(j.a,{className:"my-2",children:[Object(t.jsx)(d.a,{xl:"3",md:"3",sm:"3",xs:"3",children:Object(t.jsx)("span",{className:"fab fa-react fa-3x text-light"})}),Object(t.jsxs)(d.a,{children:[Object(t.jsx)("div",{class:"progress my-2",style:{height:"1.8rem",borderRadius:"1rem"},children:Object(t.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100",style:{width:"95%",fontSize:"1.1rem",backgroundColor:"#08a4b2"},children:"95%"})}),Object(t.jsx)("div",{className:"my-2 text-light",children:Object(t.jsx)("h3",{children:"React.js"})})]})]})}),Object(t.jsx)(d.a,{xl:"3",md:"4",sm:"6",className:"my-2",children:Object(t.jsxs)(j.a,{className:"my-2",children:[Object(t.jsx)(d.a,{xl:"3",md:"3",sm:"3",xs:"3",children:Object(t.jsx)("span",{className:"fab fa-node fa-3x text-light"})}),Object(t.jsxs)(d.a,{children:[Object(t.jsx)("div",{class:"progress my-2",style:{height:"1.8rem",borderRadius:"1rem"},children:Object(t.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100",style:{width:"95%",fontSize:"1.1rem",backgroundColor:"#99e54e"},children:"95%"})}),Object(t.jsx)("div",{className:"my-2 text-light",children:Object(t.jsx)("h3",{children:"Node.js"})})]})]})}),Object(t.jsx)(d.a,{xl:"3",md:"4",sm:"6",className:"my-2",children:Object(t.jsxs)(j.a,{className:"my-2",children:[Object(t.jsx)(d.a,{xl:"3",md:"3",sm:"3",xs:"3",children:Object(t.jsx)("span",{className:"fab fa-java fa-3x text-light"})}),Object(t.jsxs)(d.a,{children:[Object(t.jsx)("div",{class:"progress my-2",style:{height:"1.8rem",borderRadius:"1rem"},children:Object(t.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100",style:{width:"95%",fontSize:"1.1rem",backgroundColor:"#cc3d3d"},children:"95%"})}),Object(t.jsx)("div",{className:"my-2 text-light",children:Object(t.jsx)("h3",{children:"Java"})})]})]})}),Object(t.jsx)(d.a,{xl:"3",md:"4",sm:"6",className:"my-2",children:Object(t.jsxs)(j.a,{className:"my-2",children:[Object(t.jsx)(d.a,{xl:"3",md:"3",sm:"3",xs:"3",children:Object(t.jsx)("span",{className:"fab fa-envira fa-3x text-light"})}),Object(t.jsxs)(d.a,{children:[Object(t.jsx)("div",{class:"progress my-2",style:{height:"1.8rem",borderRadius:"1rem"},children:Object(t.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:{width:"90%",fontSize:"1.1rem",backgroundColor:"#2e8c68"},children:"90%"})}),Object(t.jsx)("div",{className:"my-2 text-light",children:Object(t.jsx)("h3",{children:"MongoDB"})})]})]})}),Object(t.jsx)(d.a,{xl:"3",md:"4",sm:"6",className:"my-2 mx-auto",children:Object(t.jsxs)(j.a,{className:"my-2",children:[Object(t.jsx)(d.a,{xl:"3",md:"3",sm:"3",xs:"3",children:Object(t.jsx)("span",{className:"fab fa-cuttlefish fa-3x text-light"})}),Object(t.jsxs)(d.a,{children:[Object(t.jsx)("div",{class:"progress my-2",style:{height:"1.8rem",borderRadius:"1rem"},children:Object(t.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"98","aria-valuemin":"0","aria-valuemax":"100",style:{width:"98%",fontSize:"1.1rem",backgroundColor:"#556d96"},children:"98%"})}),Object(t.jsx)("div",{className:"my-2 text-light",children:Object(t.jsx)("h3",{children:"C Programming"})})]})]})})]}),Object(t.jsx)("hr",{style:{backgroundColor:"white"}}),Object(t.jsx)("div",{class:"row container-fluid",children:Object(t.jsxs)("div",{class:"col-12",children:[Object(t.jsxs)("center",{children:[" ",Object(t.jsx)("h1",{className:"text-light",children:"Academia"})," "]}),Object(t.jsx)("hr",{style:{backgroundColor:"white"}}),Object(t.jsx)("div",{class:"row",children:Object(t.jsx)("div",{class:"col-md-12",children:Object(t.jsxs)("div",{class:"main-timeline5",children:[Object(t.jsxs)("div",{class:"timeline",children:[Object(t.jsx)("div",{class:"timeline-icon",children:Object(t.jsx)("span",{class:"year",children:"UG"})}),Object(t.jsxs)("div",{class:"timeline-content",children:[Object(t.jsx)("h2",{class:"title",children:"National Institute of Technology Patna"}),Object(t.jsxs)("p",{class:"description",style:{fontSize:"1.1rem"},children:["I am pursuing B.tech in Electronics and Communication Engineering.",Object(t.jsx)("br",{}),"Batch -: 2019-23"]})]})]}),Object(t.jsxs)("div",{class:"timeline",children:[Object(t.jsx)("div",{class:"timeline-icon",children:Object(t.jsx)("span",{class:"year",children:"HSC"})}),Object(t.jsxs)("div",{class:"timeline-content",children:[Object(t.jsx)("h2",{class:"title",children:"Saint John's Academy, Prayagraj"}),Object(t.jsxs)("p",{class:"description",style:{fontSize:"1.1rem"},children:["I have earned Higher Secondary Certificate from Saint John's Academy with 88% in PCM(Physics, Chemistry, Maths) and Computer Science.",Object(t.jsx)("br",{}),"Year of Passing -: 2017"]})]})]}),Object(t.jsxs)("div",{class:"timeline",children:[Object(t.jsx)("div",{class:"timeline-icon",children:Object(t.jsx)("span",{class:"year",children:"SSC"})}),Object(t.jsxs)("div",{class:"timeline-content",children:[Object(t.jsx)("h3",{class:"title",children:"Saint John's Academy, Prayagraj"}),Object(t.jsxs)("p",{class:"description",style:{fontSize:"1.1rem"},children:["I have earned my Senior Secondary Certificate from Saint John's Academy with 95% aggregate marks.",Object(t.jsx)("br",{}),"Year of Passing -: 2015"]})]})]})]})})})]})})]})};var k=function(){return Object(t.jsx)("footer",{id:"sticky-footer",className:"footer fixed-bottom bg-dark text-light",style:{bottom:"0",height:"2.8rem",paddingTop:"0.5rem",paddingBottom:"1.5rem",fontSize:"1.3rem",background:"transparent"},children:Object(t.jsx)("div",{className:"container text-center",children:Object(t.jsx)("small",{children:"Copyright \xa9 Pawan Singh"})})})},P=a(33),R=a(62),A=a(63),z=a(64),F=a(68),B=a(65),E=a(66),I=a(67),T=a(10);var J=function(){var e=Object(r.useState)(!1),s=Object(P.a)(e,2),a=s[0],c=s[1];return Object(t.jsx)("div",{style:{fontSize:"1.3rem"},children:Object(t.jsxs)(R.a,{color:"dark",dark:!0,expand:"md",children:[Object(t.jsx)(A.a,{to:"/",children:"Portfolio"}),Object(t.jsx)(z.a,{onClick:function(){return c(!a)}}),Object(t.jsxs)(F.a,{isOpen:a,navbar:!0,children:[Object(t.jsxs)(B.a,{className:"mx-auto",navbar:!0,children:[Object(t.jsx)(E.a,{children:Object(t.jsx)(T.b,{className:"nav-link",to:"/",children:"Home"})}),Object(t.jsx)(E.a,{children:Object(t.jsx)(T.b,{className:"nav-link",to:"/about",children:"About"})}),Object(t.jsx)(E.a,{children:Object(t.jsx)(T.b,{className:"nav-link",to:"/projects",children:"Projects"})}),Object(t.jsx)(E.a,{children:Object(t.jsx)(T.b,{className:"nav-link",to:"/contact",children:"Contact"})})]}),Object(t.jsxs)(B.a,{className:"ml-auto mr-2",navbar:!0,children:[Object(t.jsx)(E.a,{children:Object(t.jsx)(I.a,{className:"nav-link",href:"https://github.com/brigadierpratap",children:Object(t.jsx)("span",{className:"fa fa-github fa-lg"})})}),Object(t.jsx)(E.a,{children:Object(t.jsx)(I.a,{className:"nav-link",href:"https://www.linkedin.com/in/pawan-singh-4b3b8618b/",children:Object(t.jsx)("span",{className:"fa fa-linkedin fa-lg"})})}),Object(t.jsx)(E.a,{children:Object(t.jsx)(I.a,{className:"nav-link",href:"https://www.instagram.com/brigadier_pratap",children:Object(t.jsx)("span",{className:"fa fa-instagram fa-lg"})})}),Object(t.jsx)(E.a,{children:Object(t.jsx)(I.a,{className:"nav-link",href:"mailto:pawans.ug19.ec@nitp.ac.in",children:Object(t.jsx)("span",{className:"fas fa-envelope fa-lg"})})}),Object(t.jsx)(E.a,{children:Object(t.jsx)(I.a,{className:"nav-link",href:"https://www.twitter.com/iampks99",children:Object(t.jsx)("span",{className:"fa fa-twitter fa-lg"})})})]})]})]})})};var D=function(){return Object(t.jsx)("div",{children:"Projects"})};var H=function(){return Object(t.jsxs)("div",{className:"App",style:{fontFamily:"times"},children:[Object(t.jsx)(J,{}),Object(t.jsxs)(O.d,{children:[Object(t.jsx)(O.b,{exact:!0,path:"/",component:x}),Object(t.jsx)(O.b,{path:"/contact",component:S}),Object(t.jsx)(O.b,{path:"/about",component:C}),Object(t.jsx)(O.b,{path:"/projects",component:D}),Object(t.jsx)(O.a,{to:"/"})]}),Object(t.jsx)(k,{})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(s){var a=s.getCLS,t=s.getFID,r=s.getFCP,c=s.getLCP,i=s.getTTFB;a(e),t(e),r(e),c(e),i(e)}))};l.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(T.a,{children:Object(t.jsx)(H,{})})}),document.getElementById("root")),M()}},[[58,1,2]]]);
//# sourceMappingURL=main.81c5e8b5.chunk.js.map