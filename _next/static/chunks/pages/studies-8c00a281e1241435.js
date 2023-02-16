(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{304:function(e,t,r){"use strict";r.d(t,{t:function(){return u}});var n=r(4455),o=r(7441),i=r(6521),s=r(5944);var a=(0,n.Z)("span",{target:"e1ngfwlx0"})({name:"1gt2cgk",styles:"line-height:24px"}),c=function(){var e=(0,o.i)().NEXT_PUBLIC_ADMIN_EMAIL,t=e?i.ZP:a;return(0,s.tZ)(t,{href:"mailto:".concat(e),children:"Portal administrator"})},u=function(){return(0,s.BX)("span",{children:["Please try again. If the problem persists, please contact the ",(0,s.tZ)(c,{})," for help troubleshooting the issue."]})};t.Z=c},7244:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return st}});var n,o=r(29),i=r(7794),s=r.n(i),a=r(7294),c=r(1116),u=r(9499),d=r(917),l=r(7441),p=r(5175),f=r(4078),b=r.n(f);function m(e){return"string"===typeof e&&Object.values(n).includes(e)}function y(e){var t=e&&e.success||!1;if(t)return{success:t,data:e.data};var r=e.error,o=r.type,i=r.studyId,s=r.submitters;return{success:t,error:{type:m(o)?o:n.UNKNOWN,studyId:i||"",submitters:s||[]}}}!function(e){e.UNKNOWN="UNKNOWN",e.STUDY_NOT_FOUND="STUDY_NOT_FOUND",e.SUBMITTERS_NOT_FOUND="SUBMITTERS_NOT_FOUND",e.STUDY_ALREADY_EXISTS="STUDY_ALREADY_EXISTS",e.SUBMITTERS_ALREADY_IN_STUDY="SUBMITTER_ALREADY_IN_STUDY",e.SUBMITTER_NOT_IN_STUDY="SUBMITTER_NOT_IN_STUDY",e.FAILED_TO_CREATE_STUDY="FAILED_TO_CREATE_STUDY",e.FAILED_TO_REMOVE_SUBMITTER_FROM_STUDY="FAILED_TO_REMOVE_SUBMITTER_FROM_STUDY",e.FAILED_TO_ADD_SUBMITTERS_TO_STUDY="FAILED_TO_ADD_SUBMITTERS_TO_STUDY"}(n||(n={}));var h={"Content-Type":"application/json"},g=function(){var e=(0,l.i)().NEXT_PUBLIC_STUDIES_SVC_URL,t=(0,p.Z)().fetchWithAuth,r=(0,a.useState)(!1),o=r[0],i=r[1],s=function(e){return i(!0),e.then((function(e){return e.json()})).then((function(e){return i(!1),y(e)})).catch((function(e){return i(!1),y({success:!1,error:{type:n.UNKNOWN}})}))};return{awaitingResponse:o,fetchStudies:function(){var r=t(b()(e,"/studies"),{method:"GET"});return s(r)},createStudy:function(r){console.log(r);var n=t(b()(e,"/studies"),{method:"POST",headers:h,body:JSON.stringify(r)});return s(n)},addSubmitterToStudy:function(r){var n=t(b()(e,"/studies/submitters"),{method:"POST",headers:h,body:JSON.stringify(r)});return s(n)},removeSubmitterFromStudy:function(r){var n=b()(e,"/studies/submitters?studyId=".concat(r.studyId,"&submitter=").concat(r.submitter)),o=t(n,{method:"DELETE"});return s(o)}}},v=r(1226),x=r(5360),S=r(4455),O=r(3935),Z=r(978),D=r(4067),T=r(5861),w=r(5944);var E=function(e){var t=e.children,r=e.width,n=e.height;return(0,w.tZ)("div",{css:(0,d.iv)("position:absolute;top:0;left:0;width:",r,";height:",n,";display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.5);z-index:9999;",""),children:t})},_=(0,S.Z)("div",{target:"e11fkixe2"})("display:flex;flex-direction:column;background:",x.Z.colors.white,";border-radius:15px;padding:15px;"),B={name:"46td4f",styles:"font-size:25px;cursor:pointer"},I={name:"u3bf01",styles:"display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;margin-bottom:10px"},j=function(e){var t=(0,S.Z)("div",{target:"e11fkixe1"})("margin-top:10px;margin-left:5px;",x.Z.typography.heading,";");return(0,w.BX)("div",{css:I,children:["string"===typeof e.title?(0,w.tZ)(t,{children:e.title}):e.title,(0,w.tZ)("div",{css:B,onClick:e.onCloseClick,children:(0,w.tZ)(Z.Z,{height:15,width:15,fill:x.Z.colors.black})})]})},C=(0,S.Z)("div",{target:"e11fkixe0"})({name:"1knsioa",styles:"display:flex;margin-left:15px;margin-right:15px"}),k=function(e){return(0,w.BX)("div",{css:(0,d.iv)("margin-top:15px;padding:8px 0px;border-top:solid 1px ",x.Z.colors.grey_4,";display:flex;flex-direction:row;justify-content:flex-end;",""),children:[e.showActionButton&&(0,w.tZ)(v.ZP,{onClick:e.onActionClick,disabled:e.disableActionButton,children:e.actionText}),(0,w.tZ)(v.v0,{css:(0,d.iv)(null===x.Z||void 0===x.Z?void 0:x.Z.typography.subheading2,";background-color:",x.Z.colors.white,";color:",x.Z.colors.primary,";border:none;padding:6px 15px;",""),onClick:e.onCloseClick,children:e.closeText})]})},P="110vw",A=function(e){var t=e.children,r=void 0===t?null:t,n=e.title,o=void 0===n?"":n,i=e.showActionButton,s=void 0!==i&&i,c=e.disableActionButton,u=void 0===c||c,d=e.actionText,l=void 0===d?"Action":d,p=e.closeText,f=void 0===p?"Close":p,b=e.onActionClick,m=void 0===b?function(){}:b,y=e.onCloseClick,h=void 0===y?function(){}:y,g=T.X.current,v=(0,a.useState)(g?"".concat(g.clientWidth,"px"):P),x=v[0],S=v[1],Z=(0,a.useState)("".concat(window.innerHeight,"px")),B=Z[0],I=Z[1],A=D.s.current,U=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return(0,a.useEffect)((function(){r(!0)}),[]),t}();(0,a.useEffect)((function(){window.addEventListener("resize",(function(){S(g?"".concat(g.clientWidth,"px"):P),I("".concat(window.innerHeight,"px"))}))}),[]);var N=(0,w.tZ)(E,{width:x,height:B,children:(0,w.BX)(_,{children:[(0,w.tZ)(j,{title:o,onCloseClick:h}),(0,w.tZ)(C,{children:r}),(0,w.tZ)(k,{showActionButton:s,disableActionButton:u,closeText:f,actionText:l,onCloseClick:h,onActionClick:m})]})});return A&&U?O.createPortal(N,A):null},U=r(5551),N=r(7258),M="${label} is a required field.";N.setLocale({mixed:{required:M,oneOf:M},string:{email:"Please enter a valid email address.",url:"Please enter a valid url.",min:"${label} must be at least ${min} characters."},number:{lessThan:"${label} must be less than ${less}",moreThan:"${label} must be greater than ${more}",min:"${label} may be at least ${min}",max:"${label} may be at most ${max}"}});var R=N,F=function(e){return R.object().shape({studyId:R.string().required().trim().label("Study ID").max(15).oneOf(e.map((function(e){return e.studyId})).concat(""),"Study ID does not exist.").defined(),submitters:R.array().of(R.string().trim().label("Email Address").required().email()).defined()}).defined()},X=r(4730),z=r(6486),Y=r(2553),q=["key","label","required","errorMessage","options"],L=["key","label","required","errorMessage"],H=["key","label","required","errorMessage"],W=["label","required","errorMessage","showBin","onBinClick"];function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=(0,d.iv)(x.Z.typography.baseFont," font-size:16px;border-radius:5px;border:solid 1px ",x.Z.colors.grey_5,";",""),J=(0,S.Z)("div",{target:"eo4maeo0"})("display:flex;width:100%;justify-content:space-between;font-size:16px;line-height:24px;",x.Z.typography.baseFont,";"),G=function(e){var t=e.text,r=e.color,n=void 0===r?"black":r,o=e.bold,i=void 0!==o&&o,s=e.font,a=void 0===s?16:s;return(0,w.tZ)("div",{css:(0,d.iv)(x.Z.typography.baseFont," color:",n,";font-size:",a,"px;line-height:24px;font-weight:",i?"bold":"normal",";white-space:pre;",""),children:t})},Q={name:"s5xdrg",styles:"display:flex;align-items:center"},ee=function(e){var t=e.key,r=e.label,n=e.required,o=e.errorMessage,i=e.inputElement;return(0,w.BX)(Y.X2,{justify:"between",nogutter:!0,children:[(0,w.BX)(Y.X2,{nogutter:!0,children:[(0,w.tZ)(G,{text:r,bold:!0}),n&&(0,w.tZ)(G,{color:"red",text:"  *",bold:!0})]}),(0,w.tZ)("div",{css:Q,children:(0,w.BX)("div",{children:[i,(0,w.tZ)(G,{text:o||" ",color:x.Z.colors.error,font:11})]})})]},t)},te=function(e){var t=e.key,r=void 0===t?"":t,n=e.label,o=e.required,i=e.errorMessage,s=e.options,a=(0,X.Z)(e,q),c=(0,w.BX)("div",{children:[(0,w.tZ)("input",V({css:(0,d.iv)(K," padding:6px 10px;",""),list:"".concat(r,"-options")},a)),(0,w.tZ)("datalist",{id:"".concat(r,"-options"),children:s.map((function(e,t){return(0,w.tZ)("option",{value:e},"".concat(r,"-options-").concat(t,"]"))}))})]});return(0,w.tZ)(ee,{label:n,required:o,errorMessage:i,inputElement:c},r)},re=function(e){var t=e.key,r=e.label,n=e.required,o=e.errorMessage,i=(0,X.Z)(e,L),s=(0,w.tZ)("input",V({css:(0,d.iv)(K," padding:6px 10px;",""),type:"text"},i));return(0,w.tZ)(ee,{label:r,required:n,errorMessage:o,inputElement:s},t)},ne=function(e){var t=e.key,r=e.label,n=e.required,o=e.errorMessage,i=(0,X.Z)(e,H),s=(0,w.tZ)("textarea",V({css:(0,d.iv)(K," resize:vertical;padding:6px 10px;","")},i));return(0,w.tZ)(ee,{label:r,required:n,errorMessage:o,inputElement:s},t)},oe=function(e){var t=e.label,r=e.required,n=e.errorMessage,o=e.showBin,i=e.onBinClick,s=(0,X.Z)(e,W),a=(0,w.BX)(Y.X2,{nogutter:!0,children:[(0,w.tZ)("input",V({css:(0,d.iv)(K," padding:6px 10px;",""),type:"text"},s)),(0,w.tZ)("div",{onClick:i,css:(0,d.iv)("visibility:",o?"unset":"hidden",";padding:6px 10px;margin-left:8px;cursor:pointer;",""),children:(0,w.tZ)(U.Dl,{})})]});return(0,w.tZ)(ee,{label:t,required:r,errorMessage:n,inputElement:a})};function ie(e,t){var r=(0,a.useState)(V({},e)),n=r[0],o=r[1],i=(0,a.useState)({}),s=i[0],c=i[1],u=(0,z.isEmpty)(s);return{isFormValid:u,isFormInvalid:!u,formData:n,formErrors:s,setFormData:o,validateForm:function(){var e={};return t.validate(n,{abortEarly:!1,stripUnknown:!0}).then((function(){return c(e),!0})).catch((function(t){return t.inner.forEach((function(t){var r=t.message,n=t.path;e[n]=r})),c(e),console.log(t),!1}))},validateField:function(e){var r=V({},s);return void 0===(0,z.get)(n,e)&&(delete r[e],c(r)),t.validateAt(e,n,{abortEarly:!1,stripUnknown:!0}).then((function(){return delete r[e],c(r),!0})).catch((function(e){return e.inner.forEach((function(e){var t=e.message,n=e.path;r[n]=t})),c(r),!1}))},clearAllErrors:function(){c({})},clearFieldError:function(e){var t=V({},s);t[e]&&delete t[e],c(t)}}}function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce={name:"1693thf",styles:"margin-right:5px"},ue=function(e){var t=e.onClick,r=e.disabled;return(0,w.BX)(v.v0,{disabled:r,css:(0,d.iv)("cursor:",r?"alias":void 0,";color:",r?x.Z.colors.grey_5:x.Z.colors.primary,";background-color:",r?x.Z.colors.grey_2:x.Z.colors.white,";font-size:13px;font-weight:bold;font-stretch:normal;font-style:normal;border-radius:5px;border:1px solid ",r?x.Z.colors.grey_3:null===x.Z||void 0===x.Z?void 0:x.Z.colors.primary,";padding:6px 10px;",""),onClick:t,children:[(0,w.tZ)(U.pO,{style:ce,fill:r?x.Z.colors.grey_5:void 0}),"Add Another"]})},de=Object.freeze({studyId:"",submitters:[""]}),le={name:"g46w8s",styles:"margin-bottom:30px"},pe={name:"1i7b7z8",styles:"margin-top:15px;margin-bottom:25px"},fe={name:"1i7b7z8",styles:"margin-top:15px;margin-bottom:25px"},be={name:"1dw0611",styles:"display:flex;flex-direction:column;width:630px;justify-content:space-evenly;padding-right:20px"},me=function(e){var t=e.studies,r=e.onClose,n=e.submitData,i=ie((0,z.cloneDeep)(de),F(t)),a=i.formData,c=i.formErrors,u=i.setFormData,d=i.validateForm,l=i.validateField,p=i.clearFieldError,f=function(e){return function(){p("submitters[".concat(e,"]"));var t=ae({},a);t.submitters.splice(e,1),u(t)}},b=function(){var e=(0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:if(!e.sent){e.next=7;break}return e.next=6,n(a);case 6:u((0,z.cloneDeep)(de));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(e){return function(){return l(e)}},y=""===a.studyId||""===a.submitters[0],h=void 0===a.submitters[0]||""===a.submitters[0];return(0,w.tZ)(A,{title:"Add Data Submitters",showActionButton:!0,disableActionButton:y,actionText:"Add Data Submitters",closeText:"Cancel",onCloseClick:r,onActionClick:b,children:(0,w.BX)("div",{css:be,children:[(0,w.tZ)(J,{css:fe,children:"Which study would you like to add data submitter(s) to?"}),(0,w.tZ)(te,{required:!0,label:"Study ID",onChange:function(e){var t;e.preventDefault();var r=e.target;u(ae(ae({},a),{},{studyId:(null===(t=r.value)||void 0===t?void 0:t.toString())||""})),p("studyId")},onBlur:m("studyId"),errorMessage:c.studyId,value:a.studyId,size:50,options:t.map((function(e){return e.studyId}))}),(0,w.tZ)(J,{css:pe,children:"What email addresses would you like to add for the data submitter(s)? Note: the email address must already be registered in the VirusSeq Data Portal before you can add them."}),(0,w.BX)("div",{css:le,children:[a.submitters.map((function(e,t){return(0,w.tZ)(oe,{required:!0,label:"Email Address",value:e,size:44,onChange:(r=t,function(e){var t;e.preventDefault();var n=ae({},a),o=(null===(t=e.target.value)||void 0===t?void 0:t.toString())||"";n.submitters[r]=o,u(n),p("submitters[".concat(r,"]"))}),onBlur:m("submitters[".concat(t,"]")),onBinClick:f(t),showBin:0!==t,errorMessage:c["submitters[".concat(t,"]")]},t);var r})),(0,w.tZ)(ue,{onClick:function(){var e=ae({},a);e.submitters.push(""),u(e)},disabled:h})]})]})})},ye=R.object().shape({studyId:R.string().trim().label("Study ID").required().max(15),organization:R.string().trim().label("Organization").required(),name:R.string().trim().label("Study Name").required(),description:R.string().trim().label("Description")}).defined();function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve=Object.freeze({studyId:"",organization:"",name:"",description:""}),xe={name:"1fzwr88",styles:"display:flex;flex-direction:column;row-gap:5px;width:630px;justify-content:space-evenly;margin-top:10px;padding-right:10px"},Se=function(e){var t=e.onClose,r=e.submitData,n=ie(ve,ye),i=n.isFormInvalid,a=n.formData,c=n.formErrors,d=n.setFormData,l=n.validateForm,p=n.validateField,f=n.clearFieldError,b=function(e){return function(t){t.preventDefault();var r=t.target;d(ge(ge({},a),{},(0,u.Z)({},e,r.value||""))),f(e)}},m=function(e){return function(){return p(e)}},y=""===a.studyId||""===a.name||""===a.organization;return(0,w.tZ)(A,{title:"Create a Study",showActionButton:!0,disableActionButton:i||y,actionText:"Create Study",closeText:"Cancel",onCloseClick:t,onActionClick:function(){l().then((function(e){if(!e)throw Error("Form data is not valid, refuse to submit!")})).then((0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(a);case 2:d(ge({},ve));case 3:case"end":return e.stop()}}),e)})))).catch((function(e){return console.error(e)}))},children:(0,w.BX)("div",{css:xe,children:[(0,w.tZ)(re,{required:!0,label:"Study ID",onChange:b("studyId"),onBlur:m("studyId"),errorMessage:c.studyId,value:a.studyId,size:50}),(0,w.tZ)(re,{required:!0,label:"Organization",onChange:b("organization"),onBlur:m("organization"),errorMessage:c.organization,value:a.organization,size:50}),(0,w.tZ)(re,{required:!0,label:"Study Name",onChange:b("name"),onBlur:m("name"),errorMessage:c.name,value:a.name,size:50}),(0,w.tZ)(ne,{required:!1,label:"Description",onChange:b("description"),onBlur:m("description"),errorMessage:c.description,value:a.description,cols:52,rows:8})]},"CreateForm")},"CreateForm")},Oe=function(e){var t=e.onClose,r=e.onSubmit,n=e.submitter,o=e.studyId;return(0,w.tZ)(A,{showActionButton:!0,disableActionButton:!1,onCloseClick:t,onActionClick:r,actionText:"Remove",closeText:"Cancel",title:"Remove Confirmation",children:(0,w.BX)("p",{css:(0,d.iv)("padding-right:7px;padding-left:7px;",x.Z.typography.baseFont,";",""),children:["Are you sure you want to remove ",(0,w.tZ)("b",{children:n})," from ",(0,w.tZ)("b",{children:o}),"?"]})})},Ze=r(7812);var De=function(e){var t=(0,w.tZ)("b",{children:e.studyId}),r=e.submitters?e.submitters.join(", "):"";return e.type===ke.STUDY_CREATED?{message:(0,w.BX)("div",{children:["You can now add submitters to ",t]}),title:"Study was successfully created",success:!0}:e.type===ke.SUBMITTERS_ADDED?{message:(0,w.BX)("div",{children:["Added to ",t,": ",r]}),title:"Data submitter(s) successfully added",success:!0}:e.type===ke.SUBMITTERS_REMOVED?{message:(0,w.BX)("div",{children:["Removed from ",t,": ",r]}),title:"Data submitter(s) successfully removed",success:!0}:e.type===ke.SUBMITTERS_NOT_FOUND?{message:(0,w.BX)("div",{children:["Submitter(s) could not be found: [",r,"]. Submtters need to be registered before adding them to a study."]}),title:"Submtter(s) not found",success:!1}:e.type===ke.STUDY_NOT_FOUND?{message:(0,w.BX)("div",{children:["Study ",t," could not be found. Has it been created?"]}),title:"Study not found",success:!1}:e.type===ke.STUDY_ALREADY_EXISTS?{message:(0,w.BX)("div",{children:[t," already exists as a study ID. All studies require a unique study ID."]}),title:"Your study could not be created",success:!1}:e.type===ke.SUBMITTERS_ALREADY_IN_STUDY?{message:(0,w.BX)("div",{children:["These submitters are already in ",t,": ",r]}),title:"Submitter(s) could not be added",success:!1}:e.type===ke.SUBMITTER_NOT_IN_STUDY?{message:(0,w.BX)("div",{children:["Submitter ",r," is not a part of ",t,". Can only remove submitters from study they are a part of."]}),title:"Submitter could not be removed",success:!1}:e.type===ke.FAILED_TO_CREATE_STUDY?{message:(0,w.BX)("div",{children:[t," could not be created due to an unknown error."]}),title:"Your study could not be created",success:!1}:e.type===ke.FAILED_TO_REMOVE_SUBMITTER_FROM_STUDY?{message:(0,w.BX)("div",{children:[r," could not be removed from ",t," due to an unknown error."]}),title:"Submitter(s) could not be removed",success:!1}:e.type===ke.FAILED_TO_ADD_SUBMITTERS_TO_STUDY?{message:(0,w.BX)("div",{children:[r," could not be added to ",t," due to an unknown error."]}),title:"Submitter(s) could not be added",success:!1}:{message:(0,w.tZ)("div",{children:"Unexpected behavior has occured."}),title:"Unexpected behavior has occured.",success:!1}};var Te,we=(0,w.tZ)("div",{css:(0,d.iv)("padding:6px 6px 2px 6px;border-radius:50%;background-color:",x.Z.colors.success_dark,";",""),children:(0,w.tZ)(U.MC,{size:20,fill:x.Z.colors.white})}),Ee=(0,w.tZ)(U.jj,{size:40}),_e={name:"e0dnmk",styles:"cursor:pointer"},Be={name:"1igvucd",styles:"display:flex;flex-direction:column;justify-content:flex-start;width:100%;margin-left:15px"},Ie=function(e){var t=e.success,r=e.message,n=e.title,o=e.onDismiss;return(0,w.BX)("div",{css:(0,d.iv)("display:flex;justify-content:space-between;align-items:flex-start;flex-direction:row;padding:15px 15px 20px 15px;border-radius:8px;margin-top:20px;margin-bottom:20px;background-color:",t?x.Z.colors.success_light:x.Z.colors.error_1,";",""),children:[t?we:Ee,(0,w.BX)("div",{css:Be,children:[(0,w.tZ)("div",{css:(0,d.iv)(x.Z.typography.heading,";",""),children:n}),(0,w.tZ)("div",{css:(0,d.iv)(x.Z.typography.regular," margin-top:3px;",""),children:r})]}),(0,w.tZ)("div",{css:_e,onClick:o,children:(0,w.tZ)(Z.Z,{height:15,width:15,fill:x.Z.colors.black})})]})};function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e.STUDY_CREATED="STUDY_CREATED",e.SUBMITTERS_ADDED="SUBMITTERS_ADDED",e.SUBMITTERS_REMOVED="SUBMITTERS_REMOVED"}(Te||(Te={}));var ke=Ce(Ce({},n),Te),Pe=function(){var e=(0,a.useState)([]),t=e[0],r=e[1],n=function(e){return function(){var n=(0,Ze.Z)(t);n.splice(e,1),r(n)}};return{addNotification:function(e){var n=[e].concat((0,Ze.Z)(t));r(n)},NotificationsDiv:(0,w.tZ)("div",{children:t.map((function(e,t){var r=De(e),o=r.message,i=r.success,s=r.title;return(0,w.tZ)(Ie,{message:o,title:s,success:i,onDismiss:n(t)},t)}))})}},Ae=r(9521),Ue=r(3663),Ne=r(4184),Me=r.n(Ne);function Re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Xe=function(e){var t=e.caption,r=e.columns,n=e.data,o=e.onSortsChange,i=e.options,s=e.pageable,c=e.sortable,u=e.style,l=(0,Ue.a)(),p=(0,a.useMemo)((function(){return r}),[]),f=(0,a.useMemo)((function(){return"boolean"!==typeof c&&null!==c&&void 0!==c&&c.defaultSortBy?{sortBy:c.defaultSortBy}:{}}),[]),b=(0,Ae.useTable)(Fe({autoResetSortBy:!1,columns:p,data:n,defaultCanSort:!!c,disableSortBy:!c,disableSortRemove:!0,initialState:Fe({},f),manualSortBy:"function"===typeof o},i),Ae.useSortBy),m=b.getTableProps,y=b.getTableBodyProps,h=b.headerGroups,g=b.rows,v=b.prepareRow,x=b.state;return(0,a.useEffect)((function(){"function"===typeof o&&o(x.sortBy)}),[x.sortBy]),(0,w.BX)("table",Fe(Fe({},m()),{},{className:Me()(!!c&&"sortable",!!s&&"pageable"),css:(0,d.iv)("border:1px solid ",l.colors.grey_4,";border-spacing:0;width:100%;caption{display:none;}th{border-width:3px 0;height:30px;user-select:none;&.sorted{border-color:transparent;border-style:solid;&.asc{border-top-color:grey;}&.desc{border-bottom-color:grey;}}}td,th{box-sizing:border-box;font-size:13px;padding:3px 10px;text-align:left;white-space:nowrap;&:not(:first-of-type){border-left:1px solid ",l.colors.grey_4,"!important;}}tbody{tr:first-of-type td{border-top:1px solid ",l.colors.grey_4,";}tr:nth-of-type(even){background:",l.colors.grey_1,";}}",u,";",""),children:[t&&(0,w.tZ)("caption",{children:t}),(0,w.tZ)("thead",{children:h.map((function(e){return(0,w.tZ)("tr",Fe(Fe({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,w.tZ)("th",Fe(Fe({className:Me()("tableColumnHeader-".concat(e.id),e.isSorted&&["sorted",e.isSortedDesc?"desc":"asc"])},e.getHeaderProps(e.getSortByToggleProps())),{},{children:e.render("Header")}))}))}))}))}),(0,w.tZ)("tbody",Fe(Fe({},y()),{},{children:g.map((function(e){return v(e),(0,w.tZ)("tr",Fe(Fe({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,w.tZ)("td",Fe(Fe({},e.getCellProps()),{},{className:"tableBodyCell-".concat(e.column.id),children:e.render("Cell")}))}))}))}))}))]}))};var ze=function(e){return(0,d.iv)("& tbody{tr td{vertical-align:top;text-align:left;border-top:1px solid ",e.colors.accent,";}}","")},Ye={name:"1p8txxp",styles:"margin-top:5px;margin-bottom:5px;margin-right:15px"},qe={name:"jmdz0p",styles:"margin-top:5px;margin-bottom:5px;margin-left:15px"},Le=function(e){var t=e.hasBottomBorder,r=e.submitter,n=e.onDeleteClick;return(0,w.BX)("div",{css:(0,d.iv)("display:flex;justify-content:space-between;",t?"border-bottom: solid 1px ".concat(x.Z.colors.grey_4,";"):"",";",""),children:[(0,w.tZ)("div",{css:qe,children:r}),(0,w.tZ)(v.v0,{onClick:n,css:Ye,children:(0,w.tZ)(U.Dl,{})})]})},He={name:"1x0bve0",styles:"margin-left:-10px;margin-right:-10px"},We=function(e){var t,r=e.tableDeleteButtonFunc,n=e.tableData;return(0,w.tZ)(Xe,{style:ze(x.Z),columns:(t=r,[{accessor:"studyId",Header:"Study ID"},{accessor:"organization",Header:"Organization"},{accessor:"name",Header:"Study Name"},{accessor:"description",Header:"Description"},{accessor:function(e){var t,r=e.studyId;return null===(t=e.submitters)||void 0===t?void 0:t.map((function(e){return{studyId:r,submitter:e}}))},Header:"Data Submitters",Cell:function(e){var r=e.value;return Array.isArray(r)?(0,w.tZ)("div",{css:He,children:r.map((function(e,n){return(0,w.tZ)(Le,{submitter:e.submitter,onDeleteClick:t(e),hasBottomBorder:n<r.length-1},n)}))}):null}}]),data:n,sortable:{defaultSortBy:[{id:"studyId"}]}})},$e=r(273);function Ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Je=Object.freeze({studyId:"",submitter:""}),Ge={name:"r5hahk",styles:"margin-right:20px"},Qe={name:"1bmiisj",styles:"font-size:26px;line-height:1.38;color:#28519d"},et=function(){var e=(0,a.useState)([]),t=e[0],r=e[1],n=(0,a.useState)(!1),i=n[0],c=n[1],u=(0,a.useState)(!1),l=u[0],p=u[1],f=(0,a.useState)(Ke({},Je)),b=f[0],m=f[1],y=""!==b.studyId&&""!==b.submitter,h=Pe(),S=g(),O=S.awaitingResponse,Z=S.fetchStudies,D=S.createStudy,T=S.addSubmitterToStudy,E=S.removeSubmitterFromStudy,_=function(){var e=(0,o.Z)(s().mark((function e(){var t,n,o,i,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:(t=e.sent).success?r(t.data||[]):(n=t.error||{},o=n.type,i=n.studyId,a=n.submitters,h.addNotification({success:!1,type:o||ke.UNKNOWN,studyId:i,submitters:a}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){_()}),[]);var B=function(){c(!1),p(!1),m(Ke({},Je))};function I(e){var t=e||{type:ke.UNKNOWN},r=t.type,n=t.studyId,o=t.submitters;h.addNotification({success:!1,type:r,studyId:n,submitters:o})}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];_(),h.addNotification({success:!0,studyId:t,submitters:r,type:e})}var C=function(){var e=(0,o.Z)(s().mark((function e(t){var r,n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(),e.next=3,D(t);case 3:r=e.sent,n=r.success,o=r.error,n?j(ke.STUDY_CREATED,t.studyId):I(o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=(0,o.Z)(s().mark((function e(t){var r,n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(),e.next=3,T(t);case 3:r=e.sent,n=r.success,o=r.error,n?j(ke.SUBMITTERS_ADDED,t.studyId,t.submitters):I(o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,o.Z)(s().mark((function e(){var t,r,n,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(),e.next=3,E(b);case 3:t=e.sent,r=t.success,n=t.error,r?(o=b.studyId,i=b.submitter,j(ke.SUBMITTERS_REMOVED,o,[i])):I(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,w.BX)("div",{css:(0,d.iv)("display:flex;flex-direction:column;padding-top:10px;padding-left:60px;padding-right:60px;padding-bottom:",x.Z.dimensions.footer.height+60,"px;overflow:auto;",""),children:[i&&(0,w.tZ)(Se,{onClose:B,submitData:C}),l&&(0,w.tZ)(me,{studies:t,onClose:B,submitData:k}),y&&(0,w.tZ)(Oe,{submitter:b.submitter,studyId:b.studyId,onClose:B,onSubmit:P}),h.NotificationsDiv,(0,w.BX)("div",{css:(0,d.iv)("display:flex;justify-content:space-between;width:100%;margin-bottom:30px;padding:20px 0px;border-bottom:solid 1px ",x.Z.colors.grey_4,";",""),children:[(0,w.tZ)("div",{css:Qe,children:"Manage Studies"}),(0,w.BX)("div",{children:[(0,w.tZ)(v.ZP,{disabled:O,css:Ge,onClick:function(){return c(!0)},children:"Create a Study"}),(0,w.tZ)(v.ZP,{disabled:O,onClick:function(){return p(!0)},children:"Add Data Submitters"})]})]}),O?(0,w.tZ)($e.ZP,{}):(0,w.tZ)(We,{tableDeleteButtonFunc:function(e){return function(){m(e)}},tableData:t})]})},tt=function(){return(0,w.tZ)(c.Z,{subtitle:"Manage Studies",children:(0,w.tZ)(et,{})})},rt=r(6716),nt=r(304),ot=function(){return(0,w.BX)(c.u,{errorTitle:"401: Unauthorized",subtitle:"Error 401 - Unauthorized",children:["You are currently not authorized to view the page you requested. If the problem persists, please contact the ",(0,w.tZ)(nt.Z,{})," for help."]})},it=(0,rt.D)({getInitialProps:function(){var e=(0,o.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.egoJwt,e.abrupt("return",{query:r,egoJwt:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),isPublic:!1})((function(){return(0,p.Z)().userHasAccessToStudySvc?(0,w.tZ)(tt,{}):(0,w.tZ)(ot,{})})),st=it},1361:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/studies",function(){return r(7244)}])}},function(e){e.O(0,[73,517,413,273,774,888,179],(function(){return t=1361,e(e.s=t);var t}));var t=e.O();_N_E=t}]);