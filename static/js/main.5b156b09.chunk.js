(this.webpackJsonpina=this.webpackJsonpina||[]).push([[0],{108:function(e,n,t){},109:function(e,n,t){},115:function(e,n){},117:function(e,n){},244:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o,s,l,d=t(0),u=t.n(d),j=t(94),b=t.n(j),p=(t(108),t(109),t(29)),x=t(4),h=t(2),f=t(12),g=t(62),O=t(103),m=t(3),v=t(1),w=["setIndex"],y=function(e){var n,t,a=e.milestones,r=e.curIndex,i=e.setIndex;if(!a.length)return null;var c=Object(d.useRef)(a.map((function(){return Object(d.createRef)()})));return Object(v.jsxs)(L,{children:[a.map((function(e,n){var t=e.label;return Object(v.jsx)(I,{label:t,ref:c.current[n],active:n===r,passed:n<r,setIndex:function(){return i(n)}},n)})),Object(v.jsx)(k,{position:null!==(n=null===(t=c.current[r].current)||void 0===t?void 0:t.offsetLeft)&&void 0!==n?n:0})]})},k=function(e){var n=e.position;return Object(v.jsx)(F,{children:Object(v.jsx)(C,{progress:n})})},F=m.a.div(a||(a=Object(h.a)(["\n  width: 100%;\n  height: 10%;\n  position: absolute;\n  z-index: 0;\n  top: 45%;\n  margin-left: 0.25em;\n"]))),C=m.a.div(r||(r=Object(h.a)(["\n  width: ","px;\n  transition: width 0.25s linear;\n  background-color: #f29a31;\n  height: 100%;\n"])),(function(e){return e.progress})),I=u.a.forwardRef((function(e,n){var t=e.setIndex,a=Object(O.a)(e,w);return Object(v.jsx)(T,Object(g.a)(Object(g.a)({},a),{},{onClick:t,ref:n}))})),T=m.a.div(i||(i=Object(h.a)(["\n  background: #fff;\n  border: 0.35rem solid\n    ",";\n  border-radius: 50%;\n  margin: 1rem 0;\n  min-width: 0.7rem;\n  min-height: 0.7rem;\n  padding: 5px;\n  z-index: 2;\n"])),(function(e){var n=e.active,t=e.passed;return n?"#F29A31":t?"#E1D9EF":"#564F68"})),L=m.a.div(c||(c=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  //position: relative;\n  background: #666666;\n  padding: 0 1em;\n  position: relative;\n  overflow: hidden;\n"]))),M=t(98);function S(e){var n=e.event;return Object(v.jsx)(Q,{media:n.media,children:Object(v.jsx)("span",{children:n.label})})}function A(e){var n=e.media,t=e.setActive;return Object(v.jsx)(V,{preview:n,onClick:t})}function E(e){var n=e.media,t=e.setActive;return Object(v.jsx)(V,{preview:n,onClick:t})}var N,R,z,B,D,H,J,P,W,_,U,X,Y,Z,q,G,K=m.a.div(o||(o=Object(h.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n"]))),Q=m.a.div(s||(s=Object(h.a)(["\n  background: url(",") center;\n\n  flex: 5;\n"])),(function(e){return e.media})),V=m.a.div(l||(l=Object(h.a)(["\n  background: url(",") center;\n  flex: 1;\n"])),(function(e){return e.preview})),$=function(e){var n=e.milestones,t=Object(d.useRef)(0),a=Object(d.useState)(0),r=Object(f.a)(a,2),i=r[0],c=r[1],o=0===i,s=i===n.length-1,l=function(e){var a=e.deltaY,r=t.current;r+=a/100*20,r=Math.max(0,r),r=Math.min(r,100*(n.length-1)),Math.floor(r/100)===i&&r||c(Math.floor(r/100)),t.current=r},u=function(e){t.current=100*e,c(e)};return Object(d.useEffect)((function(){var e=Object(M.throttle)(l,50);return window.addEventListener("mousewheel",e),function(){window.removeEventListener("mousewheel",e)}}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(K,{children:[!o&&Object(v.jsx)(E,{media:n[i-1].media,setActive:function(){return u(i-1)}}),Object(v.jsx)(S,{event:n[i]}),!s&&Object(v.jsx)(A,{media:n[i+1].media,setActive:function(){return u(i+1)}})]}),Object(v.jsx)(y,{milestones:n,curIndex:i,setIndex:u,progress:t.current})]})},ee=t(10),ne=t.n(ee),te=t(23),ae=t(99),re=t(101),ie=t.n(re),ce=m.a.img(N||(N=Object(h.a)(["\n    width: 80px;\n    filter: drop-shadow(2px 2px 1px darkgray);\n    opacity: 1;\n    vertical-align: bottom;\n"]))),oe=function(e){var n=e.id;return Object(v.jsx)(ce,{alt:"tako-icon-".concat(n),src:"".concat("/Ina-aniniversary-project","/icon/W").concat(n,".png")})},se=m.a.div(R||(R=Object(h.a)(["\n    margin :10px;\n    width: 450px;\n"]))),le=m.a.div(z||(z=Object(h.a)(["\n  position: relative;\n  font-family: sans-serif;\n  font-size: 18px;\n  line-height: 24px;\n  padding: 15px;\n  border: 3px solid var(--inai-purple);\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 3px solid #A198B3;\n  border-radius: 15px;\n  opacity: 1;\n  \n"]))),de=m.a.div(B||(B=Object(h.a)(["\n    display: inline;\n    color: var(--ina-orange);\n    text-align: left;\n    font: normal normal 600 37px/45px Montserrat;\n    letter-spacing: 0px;\n    opacity: 1;\n"]))),ue=m.a.div(D||(D=Object(h.a)(["\n    padding-top: 5px;\n    overflow-wrap: break-word;\n    color: var(--ika-purple);\n    text-align: left;\n    font: normal normal 300 20px/25px Mulish;\n    letter-spacing: 0px;\n    opacity: 1;\n"]))),je=m.a.img(H||(H=Object(h.a)(["\n    border: 2px solid var(--inai-purple);\n    border: 2px solid #A198B3;\n    border-radius: 23px;\n    opacity: 1;  \n"]))),be=function(e){var n=e.submissions,t=e.isToggledOnlyImg,a=e.isToggledTextOnly;return t&&(n=n.filter((function(e){return e.image}))),Object(v.jsx)(ie.a,{options:{gutter:40,columnWidth:450,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:n.map((function(e,n){var r=e.message,i=e.user,c=e.icon,o=e.image;return Object(v.jsx)(se,{children:Object(v.jsxs)(le,{children:[Object(v.jsxs)(de,{children:[Object(v.jsx)(oe,{id:c}),""!=i?i:"Anonymous Tako",":"]}),Object(v.jsx)("hr",{}),!a&&o&&Object(v.jsx)(je,{src:"https://pbs.twimg.com/profile_images/1339283318848716801/_zU72OLZ_400x400.jpg"}),!t&&Object(v.jsx)(ue,{children:r})]})},n)}))})},pe=t(102),xe=m.a.img(J||(J=Object(h.a)(["\n    width: 150px;\n"]))),he=function(){return Object(v.jsx)(xe,{alt:"tako-loading-gif",src:"".concat("/Ina-aniniversary-project","/takoJiggleProject.gif")})},fe=m.a.div(P||(P=Object(h.a)(["\n    display: inline-box;\n    margin-right: auto;\n    margin-left: auto;\n"]))),ge=m.a.input(W||(W=Object(h.a)(["\n  height: 0;\n  width: 0;\n  visibility: hidden;\n"]))),Oe=m.a.label(_||(_=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  width: 50px;\n  height: 30px;\n  border-radius: 100px;\n  border: 2px solid gray;\n  position: relative;\n  transition: background-color 0.2s;\n"]))),me=m.a.span(U||(U=Object(h.a)(['\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 25px;\n  height: 26px;\n  border-radius: 45px;\n  transition: 0.2s;\n  background: grey;\n  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);\n  ',":checked + "," & {\n    left: calc(100% - 2px);\n    transform: translateX(-100%);\n  }\n\n  ",":active & {\n    width: 45px;\n  }\n"])),ge,Oe,Oe),ve=m.a.div(X||(X=Object(h.a)(["\n  color: var(--ika-purple);\n  font: normal normal 300 25px/30px Montserrat;\n  letter-spacing: 0px;\n  color: #564F68;\n  opacity: 1;\n  margin: auto;\n  margin-left: 5px;\n"]))),we=function(e){var n=e.id,t=e.label,a=e.toggled,r=e.onChange;return Object(v.jsxs)(fe,{children:[Object(v.jsx)(ge,{className:"switch-checkbox",id:n,type:"checkbox",checked:a,onChange:r}),Object(v.jsx)(Oe,{className:"switch-label",htmlFor:n,children:Object(v.jsx)(me,{className:"switch-button"})}),Object(v.jsx)(ve,{children:t})]})},ye=m.a.div(Y||(Y=Object(h.a)([" \n    width: 90%;\n    margin-right: auto;\n    margin-left: auto;\n"]))),ke=m.a.div(Z||(Z=Object(h.a)(["\n    margin: auto;\n"]))),Fe=m.a.div(q||(q=Object(h.a)(["\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n"]))),Ce=m.a.input(G||(G=Object(h.a)(["\n    display: block;    \n    width: 100%;\n    background-color: transparent;\n    border: 0;\n    border-bottom: 2px solid;\n    margin-bottom: 20px;\n    outline: none;\n\n    color: var(--ika-purple);\n    text-align: left;\n    font: normal normal normal 30px/37px Montserrat;\n    letter-spacing: 0px;\n    color: #564F68;\n    opacity: 1;\n    \n    .switchs-container: {\n        \n        width: 40px;\n    }\n"]))),Ie=10,Te=function(){var e=Object(d.useState)([]),n=Object(f.a)(e,2),t=n[0],a=n[1],r=Object(d.useState)([]),i=Object(f.a)(r,2),c=i[0],o=i[1],s=Object(d.useState)(0),l=Object(f.a)(s,2),u=l[0],j=l[1],b=Object(d.useState)(!0),p=Object(f.a)(b,2),x=p[0],h=p[1],g=Object(d.useState)(!1),O=Object(f.a)(g,2),m=O[0],w=O[1],y=Object(d.useState)(!1),k=Object(f.a)(y,2),F=k[0],C=k[1];Object(d.useEffect)((function(){(function(){var e=Object(te.a)(ne.a.mark((function e(){var n,t,r,i,c,s,l,d;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/Ina-aniniversary-project","/data/inadata.csv"));case 2:return n=e.sent,t=n.body.getReader(),e.next=6,t.read();case 6:return r=e.sent,i=new TextDecoder("utf-8"),e.next=10,i.decode(r.value);case 10:c=e.sent,s=Object(ae.a)(c,{header:!0}),l=s.data,a(l),d=l.slice(u,Ie),o(d),j(Ie+u);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=function(){var e=Object(te.a)(ne.a.mark((function e(){var n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0!==c.length&&(0===(n=t.slice(u,Ie+u)).length&&h(!1),o(c.concat(n)),j(Ie+u));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(te.a)(ne.a.mark((function e(n){var a,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!=n.target.value?(a=t.filter((function(e){return e.user.toLowerCase().includes(n.target.value.toLowerCase())||e.message.toLowerCase().includes(n.target.value.toLowerCase())})),h(!1),o(a),j(0)):(r=t.slice(u,Ie),h(!0),o(r),j(u+Ie));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=function(){var e=Object(te.a)(ne.a.mark((function e(n){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.target.checked?(w(!0),C(!1)):w(!1);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),M=function(){var e=Object(te.a)(ne.a.mark((function e(n){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.target.checked?(C(!0),w(!1)):C(!1);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(v.jsxs)(ye,{children:[Object(v.jsxs)(ke,{children:[Object(v.jsx)(Ce,{onChange:T,placeholder:"Search..."}),Object(v.jsx)(we,{id:"image-switch",label:"Only Images",toggled:m,onChange:L}),Object(v.jsx)(we,{id:"text-switch",label:"Only messages",toggled:F,onChange:M})]}),Object(v.jsx)(pe.a,{style:{overflow:"hidden"},scrollThreshold:"100%",dataLength:c.length,next:I,hasMore:x,loader:Object(v.jsx)(Fe,{children:Object(v.jsx)(he,{})}),children:Object(v.jsx)(be,{submissions:c,isToggledOnlyImg:m,isToggledTextOnly:F})})]})},Le=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h2",{children:"Home"})})},Me=[{label:"debut",media:"https://via.placeholder.com/1920x1080/0F0"},{label:"1",media:"https://via.placeholder.com/1920x1080/F00"},{label:"2",media:"https://via.placeholder.com/1920x1080/00F"},{label:"3",media:"https://via.placeholder.com/1920x1080/F00"},{label:"4",media:"https://via.placeholder.com/1920x1080/00F"},{label:"5",media:"https://via.placeholder.com/1920x1080/F00"},{label:"6",media:"https://via.placeholder.com/1920x1080/00F"}],Se=function(){return Object(v.jsx)(p.a,{children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("nav",{className:"Header",children:[Object(v.jsx)(p.b,{exact:!0,to:"/",children:"Home"}),Object(v.jsx)(p.b,{to:"/messages",children:"Messages"}),Object(v.jsx)(p.b,{to:"/timeline",children:"Timeline"})]}),Object(v.jsx)("div",{className:"Content",children:Object(v.jsxs)(x.c,{children:[Object(v.jsx)(x.a,{exact:!0,path:"/",children:Object(v.jsx)(Le,{})}),Object(v.jsx)(x.a,{path:"/messages",children:Object(v.jsx)(Te,{})}),Object(v.jsx)(x.a,{path:"/timeline",children:Object(v.jsx)($,{milestones:Me})})]})})]})})},Ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,245)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),i(e),c(e)}))};b.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(Se,{})}),document.getElementById("root")),Ae()}},[[244,1,2]]]);
//# sourceMappingURL=main.5b156b09.chunk.js.map