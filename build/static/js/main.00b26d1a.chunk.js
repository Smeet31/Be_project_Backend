(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{45:function(e,n){},532:function(e,n,t){},552:function(e,n,t){},553:function(e,n,t){},554:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(83),o=t.n(i),s=(t(93),t(6)),l=t(84),a=t.n(l),r=t(87),d=t.n(r),j=(t(532),t(564)),u=t(22),b=t.n(u),f=t(3),h=new d.a.S3({region:"ap-south-1",accessKeyId:"AKIAXRZUVW5AZI45IBX6",secretAccessKey:"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",signatureVersion:"v4",params:{Bucket:"laveshnews3"}}),p=function(){var e=Object(c.useState)(null),n=Object(s.a)(e,2),t=n[0],i=n[1],o=Object(c.useState)({}),l=Object(s.a)(o,2),r=l[0],d=l[1],u=function(e){console.log(e),h.putObject({Key:"video.mp4",Body:e,ContentType:"video/mp4",ACL:"public-read"},(function(e){e?console.log(e):console.log("video uploaded")}))};Object(c.useEffect)((function(){b.a.get("http://ec2-3-110-170-255.ap-south-1.compute.amazonaws.com:8000/").then((function(e){d(e.data)}))}));return Object(f.jsxs)("div",{className:"main_container",children:[Object(f.jsxs)("nav",{className:"navbar",children:[Object(f.jsx)("h1",{children:"ASTRA"}),Object(f.jsx)("button",{className:"white_btn",onClick:function(){localStorage.removeItem("token"),window.location.reload()},children:"Logout"})]}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",margin:"20px",alignItems:"center"},children:[Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",margin:"20px",alignItems:"center",gap:"10px"},children:[Object(f.jsx)("div",{style:{width:"500px",height:"500px"},children:Object(f.jsx)(a.a,{onRecordingComplete:function(e){u(e)}})}),Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(f.jsx)("input",{type:"file",name:"file",onChange:function(e){i(e.target.files[0])}}),Object(f.jsx)(j.a,{variant:"contained",style:{backgroundColor:"#fff",color:"#000"},onClick:function(){return u(t)},component:"span",children:"Upload video file"})]})})]}),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"emotions",children:[Object(f.jsx)("h2",{children:"Predictions"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:["Normal = ",r.Normal]}),Object(f.jsx)("br",{}),Object(f.jsxs)("span",{children:["Unlawful = ",r.Unlawful]})]})]})})]})]})},x=(t(23),t(36),t(5),t(24),t(17));t(552),t(4),t(553);var O=function(){return Object(f.jsx)(p,{})};o.a.render(Object(f.jsx)(x.a,{children:Object(f.jsx)(O,{})}),document.getElementById("root"))},93:function(e,n,t){}},[[554,1,2]]]);
//# sourceMappingURL=main.00b26d1a.chunk.js.map