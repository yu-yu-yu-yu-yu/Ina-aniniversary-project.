(this.webpackJsonpina=this.webpackJsonpina||[]).push([[0],{107:function(n,e,t){},108:function(n,e,t){},118:function(n,e){},120:function(n,e){},250:function(n,e,t){"use strict";t.r(e);var a,r,i,c,o,s,l,d=t(0),p=t.n(d),b=t(93),x=t.n(b),j=(t(107),t(2)),u=(t(108),t(28)),h=t(4),g=t(12),m=t(64),f=t(102),O=t(3),v=t(1),w=["setIndex"],y=function(n){var e,t,a=n.milestones,r=n.curIndex,i=n.setIndex;if(!a.length)return null;var c=Object(d.useRef)(a.map((function(){return Object(d.createRef)()})));return Object(v.jsxs)(T,{children:[a.map((function(n,e){var t=n.label;return Object(v.jsx)(C,{label:t,ref:c.current[e],active:e===r,passed:e<r,setIndex:function(){return i(e)}},e)})),Object(v.jsx)(F,{position:null!==(e=null===(t=c.current[r].current)||void 0===t?void 0:t.offsetLeft)&&void 0!==e?e:0})]})},F=function(n){var e=n.position;return Object(v.jsx)(k,{children:Object(v.jsx)(I,{progress:e})})},k=O.a.div(a||(a=Object(j.a)(["\n  width: 100%;\n  height: 10%;\n  position: absolute;\n  z-index: 0;\n  top: 45%;\n  margin-left: 0.25em;\n"]))),I=O.a.div(r||(r=Object(j.a)(["\n  width: ","px;\n  transition: width 0.25s linear;\n  background-color: #f29a31;\n  height: 100%;\n"])),(function(n){return n.progress})),C=p.a.forwardRef((function(n,e){var t=n.setIndex,a=Object(f.a)(n,w);return Object(v.jsx)(A,Object(m.a)(Object(m.a)({},a),{},{onClick:t,ref:e}))})),A=O.a.div(i||(i=Object(j.a)(["\n  background: #fff;\n  border: 0.35rem solid\n    ",";\n  border-radius: 50%;\n  margin: 1rem 0;\n  min-width: 0.7rem;\n  min-height: 0.7rem;\n  padding: 5px;\n  z-index: 2;\n"])),(function(n){var e=n.active,t=n.passed;return e?"#F29A31":t?"#E1D9EF":"#564F68"})),T=O.a.div(c||(c=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  //position: relative;\n  background: #666666;\n  padding: 0 1em;\n  position: relative;\n  overflow: hidden;\n"]))),M=t(97);function E(n){var e=n.event;return Object(v.jsx)(xn,{media:e.media,children:Object(v.jsx)("span",{children:e.label})})}function L(n){var e=n.media,t=n.setActive;return Object(v.jsx)(jn,{preview:e,onClick:t})}function N(n){var e=n.media,t=n.setActive;return Object(v.jsx)(jn,{preview:e,onClick:t})}var S,B,R,D,W,z,H,P,J,Y,_,V,U,X,Z,q,G,K,Q,$,nn,en,tn,an,rn,cn,on,sn,ln,dn,pn,bn=O.a.div(o||(o=Object(j.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n"]))),xn=O.a.div(s||(s=Object(j.a)(["\n  background: url(",") center;\n\n  flex: 5;\n"])),(function(n){return n.media})),jn=O.a.div(l||(l=Object(j.a)(["\n  background: url(",") center;\n  flex: 1;\n"])),(function(n){return n.preview})),un=function(n){var e=n.milestones,t=Object(d.useRef)(0),a=Object(d.useState)(0),r=Object(g.a)(a,2),i=r[0],c=r[1],o=0===i,s=i===e.length-1,l=function(n){var a=n.deltaY,r=t.current;r+=a/100*20,r=Math.max(0,r),r=Math.min(r,100*(e.length-1)),Math.floor(r/100)===i&&r||c(Math.floor(r/100)),t.current=r},p=function(n){t.current=100*n,c(n)};return Object(d.useEffect)((function(){var n=Object(M.throttle)(l,50);return window.addEventListener("mousewheel",n),function(){window.removeEventListener("mousewheel",n)}}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(bn,{children:[!o&&Object(v.jsx)(N,{media:e[i-1].media,setActive:function(){return p(i-1)}}),Object(v.jsx)(E,{event:e[i]}),!s&&Object(v.jsx)(L,{media:e[i+1].media,setActive:function(){return p(i+1)}})]}),Object(v.jsx)(y,{milestones:e,curIndex:i,setIndex:p,progress:t.current})]})},hn=t(10),gn=t.n(hn),mn=t(23),fn=t(98),On=t(100),vn=t.n(On),wn=O.a.img(S||(S=Object(j.a)(["\n    width: 80px;\n    filter: drop-shadow(2px 2px 1px darkgray);\n    opacity: 1;\n"]))),yn=function(n){var e=n.id;return Object(v.jsx)(wn,{alt:"tako-icon-".concat(e),src:"".concat("/Ina-aniniversary-project","/icon/W").concat(e,".png")})},Fn=O.a.div(B||(B=Object(j.a)(["\n    margin :10px;\n    width: 450px;\n    @media only screen and (max-width: 768px) {\n        margin-left: 0px;\n        width: 100%;\n    }\n\n"]))),kn=O.a.div(R||(R=Object(j.a)(["\n  position: relative;\n  font-family: sans-serif;\n  font-size: 18px;\n  line-height: 24px;\n  padding: 15px;\n  border: 3px solid var(--inai-purple);\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 3px solid #A198B3;\n  border-radius: 15px;\n  opacity: 1;\n  \n"]))),In=O.a.div(D||(D=Object(j.a)(["\n    padding-top: 5px;\n    overflow-wrap: break-word;\n    color: var(--ika-purple);\n    text-align: left;\n    font: normal normal 300 20px/25px Mulish;\n    letter-spacing: 0px;\n    opacity: 1;\n"]))),Cn=O.a.img(W||(W=Object(j.a)(["\n    border: 2px solid var(--inai-purple);\n    border: 2px solid #A198B3;\n    border-radius: 23px;\n    opacity: 1;  \n    @media only screen and (max-width: 768px) {\n        width: 100%;\n    }\n"]))),An=O.a.div(z||(z=Object(j.a)(["\n    color: var(--ina-orange);\n    text-align: left;\n\n    \n    font: normal normal 600 37px/45px Montserrat;\n\n    @media only screen and (max-width: 768px) {\n        font: normal normal 600 24px/30px Montserrat;    \n    }\n    \n    letter-spacing: 0px;\n    opacity: 1;\n    display: flex;\n    width: 100%;\n    align-items: center;\n"]))),Tn=O.a.div(H||(H=Object(j.a)(["\n    overflow-wrap: break-word;\n\n"]))),Mn=O.a.div(P||(P=Object(j.a)(["\n    display: flex;\n"]))),En=O.a.iframe(J||(J=Object(j.a)(["\nborder: 2px solid var(--inai-purple);\nborder: 2px solid #A198B3;\nborder-radius: 23px;\nopacity: 1;  \n"]))),Ln=function(n){var e=n.submissions,t=n.isToggledOnlyImg,a=n.isToggledTextOnly;return Object(d.useLayoutEffect)((function(){window.scrollTo(0,0)}),[]),t&&(e=e.filter((function(n){return n.image}))),Object(v.jsx)(vn.a,{options:{gutter:40,columnWidth:1,fitWidth:!0,transitionDuration:0},style:{margin:"0 auto"},children:e.map((function(n,e){var r=n.message,i=n.user,c=n.icon,o=n.image;return Object(v.jsx)(Fn,{children:Object(v.jsxs)(kn,{children:[Object(v.jsxs)(An,{children:[Object(v.jsx)(Mn,{children:Object(v.jsx)(yn,{id:c})}),Object(v.jsxs)(Tn,{children:[""!=i?i:"Anonymous Tako",":"]})]}),Object(v.jsx)("hr",{}),!a&&o&&(o.includes("youtube")?Object(v.jsx)(En,{width:"100%",height:"315",src:o,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):Object(v.jsx)(Cn,{src:"https://pbs.twimg.com/profile_images/1339283318848716801/_zU72OLZ_400x400.jpg"})),!t&&Object(v.jsx)(In,{children:r})]})},e)}))})},Nn=t(101),Sn=O.a.img(Y||(Y=Object(j.a)(["\n    width: 150px;\n"]))),Bn=function(){return Object(v.jsx)(Sn,{alt:"tako-loading-gif",src:"".concat("/Ina-aniniversary-project","/takoJiggleProject.gif")})},Rn=O.a.div(_||(_=Object(j.a)(["\n    display: inline-box;\n    margin-right: auto;\n    margin-left: auto;\n"]))),Dn=O.a.input(V||(V=Object(j.a)(["\n  height: 0;\n  width: 0;\n  visibility: hidden;\n"]))),Wn=O.a.label(U||(U=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  width: 50px;\n  height: 30px;\n  border-radius: 100px;\n  border: 2px solid gray;\n  position: relative;\n  transition: background-color 0.2s;\n"]))),zn=O.a.span(X||(X=Object(j.a)(['\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 25px;\n  height: 26px;\n  border-radius: 45px;\n  transition: 0.2s;\n  background: grey;\n  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);\n  ',":checked + "," & {\n    left: calc(100% - 2px);\n    transform: translateX(-100%);\n  }\n\n  ",":active & {\n    width: 45px;\n  }\n"])),Dn,Wn,Wn),Hn=O.a.div(Z||(Z=Object(j.a)(["\n  color: var(--ika-purple);\n  font: normal normal 300 25px/30px Montserrat;\n  letter-spacing: 0px;\n  color: #564F68;\n  opacity: 1;\n  margin: auto;\n  margin-left: 5px;\n"]))),Pn=function(n){var e=n.id,t=n.label,a=n.toggled,r=n.onChange;return Object(v.jsxs)(Rn,{children:[Object(v.jsx)(Dn,{className:"switch-checkbox",id:e,type:"checkbox",checked:a,onChange:r}),Object(v.jsx)(Wn,{className:"switch-label",htmlFor:e,children:Object(v.jsx)(zn,{className:"switch-button"})}),Object(v.jsx)(Hn,{children:t})]})},Jn=O.a.div(q||(q=Object(j.a)([" \n    width: 90%;\n    margin-right: auto;\n    margin-left: auto;\n"]))),Yn=O.a.div(G||(G=Object(j.a)(["\n    margin: auto;\n    margin-bottom: 35px;\n"]))),_n=O.a.div(K||(K=Object(j.a)(["\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n"]))),Vn=O.a.input(Q||(Q=Object(j.a)(["\n    display: block;    \n    width: 100%;\n    background-color: transparent;\n    border: 0;\n    border-bottom: 2px solid;\n    margin-bottom: 20px;\n    outline: none;\n\n    color: var(--ika-purple);\n    text-align: left;\n    font: normal normal normal 30px/37px Montserrat;\n    letter-spacing: 0px;\n    color: #564F68;\n    opacity: 1;\n    \n    .switchs-container: {\n        \n        width: 40px;\n    }\n"]))),Un=10,Xn=function(){var n=Object(d.useState)([]),e=Object(g.a)(n,2),t=e[0],a=e[1],r=Object(d.useState)([]),i=Object(g.a)(r,2),c=i[0],o=i[1],s=Object(d.useState)(0),l=Object(g.a)(s,2),p=l[0],b=l[1],x=Object(d.useState)(!0),j=Object(g.a)(x,2),u=j[0],h=j[1],m=Object(d.useState)(!1),f=Object(g.a)(m,2),O=f[0],w=f[1],y=Object(d.useState)(!1),F=Object(g.a)(y,2),k=F[0],I=F[1];Object(d.useEffect)((function(){(function(){var n=Object(mn.a)(gn.a.mark((function n(){var e,t,r,i,c,s,l,d;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("/Ina-aniniversary-project","/data/inadata.csv"));case 2:return e=n.sent,t=e.body.getReader(),n.next=6,t.read();case 6:return r=n.sent,i=new TextDecoder("utf-8"),n.next=10,i.decode(r.value);case 10:c=n.sent,s=Object(fn.a)(c,{header:!0}),l=s.data,a(l),d=l.slice(p,Un),o(d),b(Un+p);case 16:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var C=function(){var n=Object(mn.a)(gn.a.mark((function n(){var e;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:0!==c.length&&(0===(e=t.slice(p,Un+p)).length&&h(!1),o(c.concat(e)),b(Un+p));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),A=function(){var n=Object(mn.a)(gn.a.mark((function n(e){var a,r;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:""!=e.target.value?(a=t.filter((function(n){return n.user.toLowerCase().includes(e.target.value.toLowerCase())||n.message.toLowerCase().includes(e.target.value.toLowerCase())})),h(!1),o(a),b(0)):(r=t.slice(p,Un),h(!0),o(r),b(p+Un));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),T=function(){var n=Object(mn.a)(gn.a.mark((function n(e){return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.target.checked?(w(!0),I(!1)):w(!1);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),M=function(){var n=Object(mn.a)(gn.a.mark((function n(e){return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.target.checked?(I(!0),w(!1)):I(!1);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(v.jsxs)(Jn,{children:[Object(v.jsxs)(Yn,{children:[Object(v.jsx)(Vn,{onChange:A,placeholder:"Search..."}),Object(v.jsx)(Pn,{id:"image-switch",label:"Only Images",toggled:O,onChange:T}),Object(v.jsx)(Pn,{id:"text-switch",label:"Only messages",toggled:k,onChange:M})]}),Object(v.jsx)(Nn.a,{style:{overflow:"hidden"},scrollThreshold:"90%",dataLength:c.length,next:C,hasMore:u,loader:Object(v.jsx)(_n,{children:Object(v.jsx)(Bn,{})}),children:Object(v.jsx)(Ln,{submissions:c,isToggledOnlyImg:O,isToggledTextOnly:k})})]})},Zn=O.a.div($||($=Object(j.a)(["\n    // background: transparent linear-gradient(180deg, #F29A31 0%, #F29C35EF 5%, #F6B76C00 86%, #FFFFFF0A 100%) 0% 0% no-repeat padding-box;\n    text-align: center;\n    height: 100vh;\n"]))),qn=O.a.img(nn||(nn=Object(j.a)(["\n    opacity: 1;\n    width: 600px;\n    margin-left:auto;\n    margin-right:auto;\n"]))),Gn=(O.a.div(en||(en=Object(j.a)(["\n    \n    height: 100%;\n    opacity: 0.6;\n"]))),O.a.h1(tn||(tn=Object(j.a)(["\n    color: var(--ika-purple);\n    text-align: center;\n    font: normal normal bold 84px/102px Montserrat;\n    letter-spacing: 4.2px;\n    color: #564F68;\n    text-transform: uppercase;\n    opacity: 1;\n    position: relative;\n"])))),Kn=O.a.div(an||(an=Object(j.a)(["\n    background: transparent linear-gradient(180deg, #C4BDD2 0%, #D3CCE1 100%) 0% 0% no-repeat padding-box;\n    text-align: center;\n"]))),Qn=O.a.img(rn||(rn=Object(j.a)(["\n    margin: 20px 20px 20px 20px;\n    display: inline-block;\n    width: 300px;\n"]))),$n=O.a.div(cn||(cn=Object(j.a)(["\n    text-align: left;\n    font: normal normal normal 40px/51px Roboto;\n    letter-spacing: 2.5px;\n    color: #FFFFFF;\n    display: inline-block;\n    margin-left: 40px;\n"]))),ne=O.a.div(on||(on=Object(j.a)(["\n    \n    text-align: center;\n"]))),ee=O.a.div(sn||(sn=Object(j.a)(["\n    z-index: 1;\n    position: absolute;\n    left: 190px;\n\n    .lore-text {\n\n        padding: 2px 25px;\n        margin-top: 60px;\n        width: 600px;\n        background: #564F68 0% 0% no-repeat padding-box;\n        border-radius: 32px;\n        opacity: 1;\n\n        color: var(--unnamed-color-f3edff);\n        text-align: left;\n        font: normal normal 300 28px/37px Mulish;\n        letter-spacing: 0px;\n        color: #F3EDFF;\n    }\n    \n    .bio-button {\n\n        background: var(--inai-purple) 0% 0% no-repeat padding-box;\n        background: #A198B3 0% 0% no-repeat padding-box;\n        border: 0px;\n        border-radius: 32px;\n        opacity: 1;\n        text-align: left;\n        font: normal normal bold 40px/61px Roboto;\n        letter-spacing: 2.5px;\n        color: #FFFFFF;\n        opacity: 1;\n\n        padding: 10px 40px;\n        margin: 10px;\n    }\n\n"]))),te=O.a.video(ln||(ln=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    margin-left: 35%;\n"]))),ae=O.a.div(dn||(dn=Object(j.a)(["\n    display: inline-block;\n    overflow: hidden;\n"]))),re=function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)(Zn,{children:[Object(v.jsx)(qn,{alt:"ina-logo",src:"".concat("/Ina-aniniversary-project","/InaLogo.png")}),Object(v.jsx)(Gn,{children:"ANNIVERSARY FAN PROJECT"})]}),Object(v.jsxs)(Kn,{children:[Object(v.jsx)(Qn,{src:"".concat("/Ina-aniniversary-project","/InaInaIna.png")}),Object(v.jsxs)($n,{children:[Object(v.jsx)("img",{alt:"WAH",src:"".concat("/Ina-aniniversary-project","/WAH.png"),style:{borderBottom:"solid 3px",paddingBottom:"40px",width:"300px"}}),Object(v.jsx)("br",{}),"Ninomae Ina'nis",Object(v.jsx)("br",{}),"2020 09 13"]})]}),Object(v.jsxs)(ne,{children:[Object(v.jsxs)(ee,{children:[Object(v.jsxs)("div",{className:"lore-text",children:[Object(v.jsx)("p",{children:"One day, Ina'nis picked up a strange book and then started to gain the power of controlling tentacles. To her, tentacles are just a part in her ordinary life; it has never been a big deal for her. However, her girly mind does want to get them dressed up and stay pretty."}),Object(v.jsx)("p",{children:"After gaining power, she started hearing Ancient Whispers and Revelations. Hence, she began her VTuber activities to deliver random sanity checks on humanity, as an ordinary girl."})]}),Object(v.jsxs)("div",{style:{marginTop:"50px"},children:[Object(v.jsx)(u.b,{to:"/messages",role:"button",className:"bio-button",children:"Messages"}),Object(v.jsx)(u.b,{to:"/timeline",role:"button",className:"bio-button",children:"Timeline"})]})]}),Object(v.jsx)(ae,{children:Object(v.jsx)(te,{autoPlay:!0,loop:!0,poster:"".concat("/Ina-aniniversary-project","/InaHoodie.png")})})]})]})},ie=O.a.footer(pn||(pn=Object(j.a)(["\n\n  background: #FBA147 0% 0% no-repeat padding-box;\n  opacity: 1;\n\n  \n\n  .footer-img{\n    \n    margin: auto;\n  }\n\n"]))),ce=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(re,{})})},oe=[{label:"debut",media:"https://via.placeholder.com/1920x1080/0F0"},{label:"1",media:"https://via.placeholder.com/1920x1080/F00"},{label:"2",media:"https://via.placeholder.com/1920x1080/00F"},{label:"3",media:"https://via.placeholder.com/1920x1080/F00"},{label:"4",media:"https://via.placeholder.com/1920x1080/00F"},{label:"5",media:"https://via.placeholder.com/1920x1080/F00"},{label:"6",media:"https://via.placeholder.com/1920x1080/00F"}],se=function(){return Object(v.jsxs)(u.a,{children:[Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("div",{className:"Content",children:Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{exact:!0,path:"/",children:Object(v.jsx)(ce,{})}),Object(v.jsx)(h.a,{path:"/messages",children:Object(v.jsx)(Xn,{})}),Object(v.jsx)(h.a,{path:"/timeline",children:Object(v.jsx)(un,{milestones:oe})})]})})}),Object(v.jsx)(ie,{children:Object(v.jsx)("img",{alt:"mini-ina",className:"footer-img",src:"".concat("/Ina-aniniversary-project","/MiniIna.png")})})]})},le=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,251)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),a(n),r(n),i(n),c(n)}))};x.a.render(Object(v.jsx)(p.a.StrictMode,{children:Object(v.jsx)(se,{})}),document.getElementById("root")),le()}},[[250,1,2]]]);
//# sourceMappingURL=main.6a7aeea8.chunk.js.map