(this["webpackJsonpit-social"]=this["webpackJsonpit-social"]||[]).push([[3],{306:function(e,s,a){"use strict";var t=a(2),i=(a(1),a(13)),o=a(8),c=a(15),n=a(0),r=function(e){return{isLoggedIn:Object(c.d)(e)}},g={};s.a=function(e){return Object(o.b)(r,g)((function(s){return s.isLoggedIn?Object(n.jsx)(e,Object(t.a)({},s)):Object(n.jsx)(i.a,{to:"/login"})}))}},309:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__etPsl",messages__inner:"Dialogs_messages__inner__1-dbS"}},310:function(e,s,a){e.exports={message:"Message_message__TUbjs",outgoing:"Message_outgoing__3e6a5",userPhoto:"Message_userPhoto__2IJ7h",message__data:"Message_message__data__F1XXE",message__author:"Message_message__author__1Qj2E",message__text:"Message_message__text__2SPNz",message__date:"Message_message__date__BILWO"}},311:function(e,s,a){e.exports={message__container:"MessageList_message__container__TjAMP"}},312:function(e,s,a){e.exports={dialogs__inner:"AddresseeList_dialogs__inner__1-orJ"}},313:function(e,s,a){e.exports={dialogsitem__title:"Addressee_dialogsitem__title__3Onpr",checked:"Addressee_checked__1qkC7"}},320:function(e,s,a){"use strict";a.r(s);var t=a(309),i=a.n(t),o=a(135),c=a(8),n=a(15),r=a(310),g=a.n(r),l=a(69),d=a(17),_=a(0),u=function(e){return e.fromCurrentUser?Object(_.jsxs)("div",{className:g.a.message+" "+g.a.outgoing,children:[Object(_.jsx)("div",{className:g.a.message__date+" "+g.a.outgoing,children:e.date}),Object(_.jsxs)("div",{className:g.a.message__data+" "+g.a.outgoing,children:[Object(_.jsx)(d.b,{to:"/profile/"+e.loginUser,className:g.a.message__author+" "+g.a.outgoing,children:e.fullName}),Object(_.jsx)("div",{className:g.a.message__text+" "+g.a.outgoing,children:e.message})]}),Object(_.jsx)("div",{className:g.a.userPhoto+" "+g.a.outgoing,children:Object(_.jsx)(l.a,{avatar:e.userPhoto,userid:e.loginUser})})]}):Object(_.jsxs)("div",{className:g.a.message,children:[Object(_.jsx)("div",{className:g.a.userPhoto,children:Object(_.jsx)(l.a,{avatar:e.userPhoto,userid:e.checkedDialog})}),Object(_.jsxs)("div",{className:g.a.message__data,children:[Object(_.jsx)(d.b,{to:"/profile/"+e.checkedDialog,className:g.a.message__author+" "+g.a.outgoing,children:e.fullName}),Object(_.jsx)("div",{className:g.a.message__text,children:e.message})]}),Object(_.jsx)("div",{className:g.a.message__date,children:e.date})]})},m=a(311),j=a.n(m),h=function(e){return Object(_.jsx)("div",{className:j.a.message__container,children:e.messagesData.map((function(s){return Object(_.jsx)(u,{userPhoto:s.userPhoto,fullName:s.fullName,fromCurrentUser:s.fromCurrentUser,message:s.message,date:s.date,loginUser:e.loginUser,checkedDialog:e.checkedDialog},"Message"+s.messageId)}))})},b=Object(c.b)((function(e){var s;return{messagesData:(null===(s=e.dialogsPage.dialogs[e.dialogsPage.checkedDialog])||void 0===s?void 0:s.messagesData)||[],checkedDialog:e.dialogsPage.checkedDialog,loginUser:Object(n.a)(e)}}),{})(h),x=a(312),O=a.n(x),f=a(313),N=a.n(f),v=function(e){return Object(_.jsx)(d.b,{to:"/dialogs/"+e.userId,onClick:e.setCheckedDialog,userid:e.userId,className:N.a.dialogsitem__title,activeClassName:N.a.checked,exact:!0,children:e.fullName})},k=function(e){return Object(_.jsx)("div",{className:O.a.dialogs__inner,children:Object.keys(e.users).map((function(s){return Object(_.jsx)(v,{fullName:e.users[s].fullName,userId:s,setCheckedDialog:e.setCheckedDialog},"Addressee"+s)}))})},P=a(12),p={setCheckedDialog:P.k},D=Object(c.b)((function(e){return{users:Object(n.e)(e)}}),p)(k),M=function(e){return Object(_.jsxs)("div",{className:"content__wrapper "+i.a.dialogs,children:[Object(_.jsx)(D,{}),Object(_.jsxs)("div",{className:i.a.messages__inner,children:[Object(_.jsx)(b,{}),Object(_.jsx)(o.a,{placeholderText:"Enter your message..",getText:e.getText,setText:e.setDialogValueText,addBlock:e.addMessage,userPhoto:e.userPhoto,fullName:e.fullName,userid:e.userId})]})]})},C=a(306),I=a(9),T=function(e){return e.dialogsPage.dialogValueText},U={setDialogValueText:P.l,addMessage:P.a};s.default=Object(I.d)(Object(c.b)((function(e){return{getText:T(e),userPhoto:Object(n.b)(e),userId:Object(n.a)(e),fullName:e.loginPage.loginUser.name}}),U),C.a)(M)}}]);
//# sourceMappingURL=3.8750bdb8.chunk.js.map