(this["webpackJsonpmern-ecommerce"]=this["webpackJsonpmern-ecommerce"]||[]).push([[0],[,,,,,,,function(e,t,n){"use strict";n(0);var c=n(11),a=n(1);t.a=function(e){var t="\n  ".concat(e.danger?"bg-red-600 hover:bg-red-500 disabled:bg-red-500":"","\n  ").concat(e.secondary?"bg-yellow-600 hover:bg-yellow-500 disabled:bg-yellow-500":"","\n  ").concat(!e.danger&&!e.secondary&&"bg-blue-600 hover:bg-blue-500 disabled:bg-blue-500","\n  text-white text-base text-center disabled:cursor-not-allowed disabled:opacity-50 ").concat(e.className);return e.to?Object(a.jsx)(c.b,{to:e.to,className:t,children:e.children}):Object(a.jsx)("button",{className:"".concat(t," p-2 px-3"),onClick:e.onClick,disabled:e.disabled,children:e.children})}},,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),a=Object(c.createContext)({isLoggedIn:!1,userData:null,token:null,login:function(){},logout:function(){},isAdmin:!1,setIsAdmin:function(){}})},,function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return l}));var c="REQUIRED",a="EMAIL",s="MIN",i="MAX",r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l=function(e,t){var n={};for(var l in t)switch(l){case c:n[l]=e.length>0;break;case a:n[l]=r.test(e);break;case i:n[l]=e.length<=(t[l].params||16);break;case s:n[l]=e.length>=(t[l].params||16)}return n}},,function(e,t,n){"use strict";n(0);var c=n(1);t.a=function(e){var t="".concat(e.className," inset-0 justify-center items-center");return e.overlay&&(t+="absolute bg-opacity-40 bg-white flex"),Object(c.jsx)("div",{className:t,children:Object(c.jsxs)("svg",{className:"animate-spin h-10 w-10 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(c.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(c.jsx)("path",{className:"opacity-100",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(18),a=n.n(c),s=n(5),i=n(19),r=n(2),l=n(0),o=function(){var e=Object(l.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(l.useState)(null),u=Object(r.a)(o,2),d=u[0],j=u[1],b=Object(l.useState)(null),x=Object(r.a)(b,2),m=x[0],h=x[1],O=Object(l.useRef)([]),f=Object(l.useCallback)(function(){var e=Object(i.a)(a.a.mark((function e(t){var n,i,r,l,o,u,d=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:"GET",i=d.length>2&&void 0!==d[2]?d[2]:null,r=d.length>3&&void 0!==d[3]?d[3]:{},j(null),c(!0),l=new AbortController,O.current.push(l),"POST"!==n&&"PATCH"!==n||(r=Object(s.a)(Object(s.a)({},r),{},{"Content-Type":"application/json"})),e.prev=8,e.next=11,fetch("http://192.168.1.99:5000"+t,{method:n,headers:r,body:i,signal:l.signal});case 11:return o=e.sent,e.next=14,o.json();case 14:if(u=e.sent,O.current=O.current.filter((function(e){return e!==l})),!o.ok){e.next=22;break}return c(!1),h(u.message),e.abrupt("return",u);case 22:throw new Error(u.message);case 23:e.next=30;break;case 25:throw e.prev=25,e.t0=e.catch(8),c(!1),j(e.t0.message),e.t0;case 30:case"end":return e.stop()}}),e,null,[[8,25]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(l.useEffect)((function(){return function(){O.current.forEach((function(e){return e.abort()}))}}),[]),[n,d,m,f]}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(2),a=n(0),s=function(e){e*=1e3;var t=Object(a.useState)(!1),n=Object(c.a)(t,2),s=n[0],i=n[1],r=function(){return i(!1)};return[s,function(){s||(i(!0),setTimeout(r,e))},r]}},function(e,t,n){"use strict";var c=n(5),a=(n(0),n(10)),s=n.n(a),i=n(1),r=function(e){var t=Object(i.jsxs)("div",{id:e.id,className:"border border-blue-300 bg-blue-100 text-blue-700 rounded-md p-3 font-normal relative w-screen md:w-96",children:[Object(i.jsx)("div",{className:"mr-12",children:e.children}),Object(i.jsx)("button",{onClick:e.close,className:"absolute top-1 right-2",children:Object(i.jsx)("i",{className:"fas fa-times text-blue-600"})})]});return s.a.createPortal(t,document.getElementById("alert-hook"))};t.a=function(e){return Object(i.jsx)(i.Fragment,{children:e.show&&!document.getElementById(e.id)&&Object(i.jsx)(r,Object(c.a)({},e))})}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(2),a=n(14),s=n(5),i=n(0),r=n(15),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0,c=!0,i=e.inputs[t.id],l=Object(r.e)(t.value,i.validityRules);for(var o in l)if(!l[o]){c=!1;break}if(c)for(var u in e.inputs)u!==t.id&&(n=n&&e.inputs[u].isValid);else n=!1;return Object(s.a)(Object(s.a)({},e),{},{isValid:n,submittedSuccess:!e.submittedSuccess&&e.submittedSuccess,inputs:Object(s.a)(Object(s.a)({},e.inputs),{},Object(a.a)({},t.id,Object(s.a)(Object(s.a)({},e.inputs[t.id]),{},{value:t.value,isValid:c,validity:l})))});case"SUBMIT":if(e.isValid)return t.onSubmit(),Object(s.a)(Object(s.a)({},e),{},{submittedSuccess:!0});if(e.submittedSuccess)return Object(s.a)(Object(s.a)({},e),{},{submitted:!0,submittedSuccess:!1});if(!e.isValid)return Object(s.a)(Object(s.a)({},e),{},{submitted:!0});case"RESET":var d=Object(s.a)({},e.inputs);return(t.inputsToReset||Object.keys(e.inputs)).forEach((function(e){d[e]=Object(s.a)(Object(s.a)({},d[e]),{},{value:"",isValid:!1,validity:Object(r.e)("",d[e].validityRules)})})),{inputs:d,submitted:!1,isValid:!1,submittedSuccess:!0}}},o=function(e,t,n){var a={};e.forEach((function(e){var t=e.data.value||"";a[e.id]={value:t,isValid:e.data.isValid||0===Object.entries(e.data.validityRules).length,validityRules:e.data.validityRules||{},validity:Object(r.e)(t,e.data.validityRules)}}));var s={submitted:!1,submittedSuccess:!1,isValid:t.isValid||!1,inputs:a},o=Object(i.useReducer)(l,s),u=Object(c.a)(o,2),d=u[0],j=u[1];return[d,function(e,t){t=t.toString(),j({type:"INPUT_CHANGE",id:e,value:t})},function(e){e.preventDefault(),j({type:"SUBMIT",onSubmit:n})},function(e){j({type:"RESET",inputsToReset:e})}]}},function(e,t,n){"use strict";var c=n(0),a=n(7),s=n(2),i=n(1),r=" focus:border-blue-400 border-gray-300",l=" focus:border-red-500 border-red-500",o=function(e){var t,n=Object(c.useState)(!1),a=Object(s.a)(n,2),o=(a[0],a[1]),u=e.id,d=e.type,j=e.placeholder,b=e.validityRules,x=(e.successText,e.onChange),m=e.formState,h=m.inputs[u],O=h.validity,f=Object(i.jsx)("div",{children:Object.keys(O).map((function(e){return!1===O[e]&&m.submitted&&Object(i.jsx)("p",{className:"text-sm mt-1 text-red-600",children:b[e].errorMsg})}))}),p="resize-none w-full focus:ring-0 text-gray-700 px-2 text-sm";switch(m.submitted&&!h.isValid?p+=l:(m.submittedSuccess,p+=r),e.type){case"textarea":t=Object(i.jsx)("textarea",{id:u,disabled:e.disabled,className:"".concat(p," text-sm"),placeholder:j,onBlur:function(){return o(!0)},onChange:x,value:h.value});break;default:t=Object(i.jsx)("input",{id:u,disabled:e.disabled,type:d,className:p,placeholder:j,onBlur:function(){return o(!0)},onChange:x,value:h.value})}return Object(i.jsxs)("div",{className:e.className,children:[t,f]})},u=n(17);t.a=function(e){var t=e.formState,n=e.changeHandler,c=e.submitHandler;return Object(i.jsxs)("form",{autoComplete:"off",children:[e.isLoading&&Object(i.jsx)("div",{className:"my-2 flex justify-center",children:Object(i.jsx)(u.a,{})}),Object(i.jsx)("div",{className:"grid gap-y-2 ".concat(e.className," grid-cols-").concat(e.cols," ").concat(e.gap),children:e.inputs.map((function(c){var a=c.data.validityRules;for(var s in a)if("string"===typeof a[s]){var r=a[s];a[s]={},a[s].errorMsg=r}return Object(i.jsx)(o,{className:c.data.layout,id:c.id,disabled:e.isLoading,type:c.data.type,placeholder:c.data.placeholder,validityRules:a,successText:c.data.successText,onChange:function(e){e.preventDefault(),n(c.id,e.target.value)},formState:t})}))}),Object(i.jsxs)("div",{className:"mt-1 md:mt-4 flex items-center",children:[e.button,!e.button&&Object(i.jsx)(a.a,{onClick:c,children:e.btnText||"Submit"}),e.success&&t.submittedSuccess&&Object(i.jsx)("p",{className:"text-green-500 font-bold text-base ml-3",children:e.success}),e.error&&Object(i.jsx)("p",{className:"text-red-500 text-base ml-3",children:e.error})]})]})}},function(e,t,n){"use strict";var c=n(0),a=n(1),s=Object(c.forwardRef)((function(e,t){return Object(a.jsx)("div",{ref:t,id:e.id,className:"".concat(e.className," rounded-lg shadow-lg bg-white"),children:e.children})}));t.a=s},function(e,t,n){"use strict";var c=n(0),a=n(10),s=n.n(a),i=n(1);t.a=function(e){document.body.className;return Object(c.useEffect)((function(){})),s.a.createPortal(Object(i.jsx)("div",{onClick:e.onClick,className:"h-screen w-full bg-black bg-opacity-50 fixed top-0 left-0 z-20 flex justify-center items-center",children:e.children}),document.getElementById("backdrop-hook"))}},function(e,t,n){"use strict";t.a=n.p+"static/media/beer.5d11e12f.jpg"},function(e,t,n){"use strict";var c=n(2),a=(n(0),n(24)),s=n(7),i=n(25),r=n(1);t.a=function(e){var t=e.data,n=Object(a.a)(5),l=Object(c.a)(n,3),o=l[0],u=l[1],d=l[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{disabled:0===t.stock,className:"mt-2 p-2",onClick:function(){u(),function(){var e=JSON.parse(localStorage.getItem("LOCAL_CART"))||[],n=e.findIndex((function(e){return e.id===t.id}));-1!==n?e[n].inCart++:e.push({id:t.id,name:t.name,price:t.price,inCart:1}),localStorage.setItem("LOCAL_CART",JSON.stringify(e))}()},children:"Add to cart"}),Object(r.jsxs)(i.a,{id:t.id,close:d,show:o,children:["Added ",t.name," to cart!"]})]})}},,,,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,a=n(0),s=n.n(a),i=n(10),r=n.n(i),l=n(2),o=n(3),u=n(11),d=n(21),j=n(13),b=n(1),x=function(e){return Object(b.jsxs)("li",{className:"list-none",children:[e.link&&Object(b.jsx)(u.c,{onClick:e.onClick,exact:!0,activeClassName:"".concat(!e.nounderline&&"underline"),className:"".concat(!e.nounderline&&"hover:underline"," ").concat(e.className," text-base tracking-wide"),to:e.link,children:e.text}),!e.link&&e.onClick&&Object(b.jsx)("button",{onClick:e.onClick,className:"hover:underline",children:e.text}),!e.link&&!e.onClick&&Object(b.jsxs)("p",{className:"font-bold tracking-wide flex items-center",children:[Object(b.jsx)("div",{className:"border-2 border-black bg-white rounded-full w-[40px] h-[40px] mr-2"}),Object(b.jsx)("span",{className:"mb-1",children:e.text})]})]})},m=function(e){var t=Object(a.useContext)(j.a);return Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{className:"flex items-center ".concat(e.className),children:e.links.map((function(n){return(n.admin&&t.isAdmin||null===n.auth||!0===n.auth&&t.isLoggedIn||!1===n.auth&&!t.isLoggedIn)&&Object(b.jsx)(x,{onClick:e.onClick||n.onClick,text:n.text,link:n.link,nounderline:n.nounderline},Math.random())}))})})},h=function(e){return Object(b.jsx)("h1",{className:"hover:text-blue-100 font-bold text-2xl sm:text-3xl text-left ".concat(e.className),children:"eCommerce!"})},O=function(e){return Object(b.jsx)(m,{className:"space-x-6 text-lg",onClick:e.onClick,links:[{auth:null,text:Object(b.jsx)(h,{className:"no-underline"}),link:"/",nounderline:!0},{auth:null,text:"Featured",link:"/"},{auth:null,text:"Explore",link:"/explore"}]})},f=function(e){var t=Object(a.useContext)(j.a);return Object(b.jsx)(m,{className:"space-x-6 text-lg",onClick:e.onClick,links:[{admin:!0,text:"Admin",link:"/admin"},{auth:!1,text:"Sign up",link:"/signup"},{auth:!1,text:"Log in",link:"/login"},{auth:!0,text:"Logout",onClick:t.logout},{auth:!0,text:t.userData&&t.userData.username,onClick:null},{auth:null,text:Object(b.jsx)(d.b,{className:"text-white w-7 mt-1 hover:text-blue-100"}),link:"/cart"}]})},p=function(e){return Object(b.jsx)("div",{onClick:e.onClick,className:"",children:Object(b.jsxs)("button",{className:"flex flex-col space-y-2",children:[Object(b.jsx)("div",{className:"border-b-2 border-white w-8"}),Object(b.jsx)("div",{className:"border-b-2 border-white w-8"}),Object(b.jsx)("div",{className:"border-b-2 border-white w-8"})]})})},v=n(55),g=(n(49),function(e){var t=Object(a.useContext)(j.a);return Object(b.jsx)(s.a.Fragment,{children:Object(b.jsx)(v.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(b.jsx)("div",{className:"bg-blue-700 text-white text-center text-xl font-light top-0 left-0 absolute z-30 h-screen w-1/2 py-4 flex flex-col space-y-3",children:Object(b.jsx)(m,{className:"flex-col space-y-8",onClick:e.onClick,links:[{auth:null,text:Object(b.jsx)(h,{className:"text-center"}),link:"/",nounderline:!0},{auth:null,text:"Featured",link:"/"},{auth:null,text:"Explore",link:"/explore"},{auth:!0,text:"Logout",onClick:t.logout},{auth:!1,text:"Sign up",link:"/signup"},{auth:!1,text:"Log in",link:"/login"}]})})})})}),y=n(31),k=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1],r=function(){return i(!1)},o=function(){window.innerWidth>=640&&c&&r()};return window.addEventListener("resize",o),window.addEventListener("orientationchange",o),Object(b.jsxs)(s.a.Fragment,{children:[c&&Object(b.jsx)(y.a,{onClick:r}),Object(b.jsx)(g,{onClick:r,show:c}),Object(b.jsx)("header",{className:"text-white bg-blue-700 ".concat(e.className," relative z-10"),children:Object(b.jsxs)("div",{className:"lg:container mx-auto py-5 px-2",children:[Object(b.jsxs)("div",{className:"flex sm:hidden justify-between items-center px-3",children:[Object(b.jsx)(p,{onClick:function(){return i(!0)}}),Object(b.jsx)(m,{links:[{text:Object(b.jsx)(d.b,{className:"text-white w-7 mt-1 hover:text-blue-100"}),link:"/cart"}]})]}),Object(b.jsxs)("div",{className:"hidden sm:flex sm:items-center sm:justify-between",children:[Object(b.jsx)(O,{}),Object(b.jsx)(f,{})]})]})})]})},N=function(e){return Object(b.jsx)("footer",{className:"bg-blue-700 py-5 text-white font-light text-lg text-center",children:Object(b.jsx)("div",{children:"Copyright \xa9 2021 eCommerce!"})})},w=n(18),C=n.n(w),S=n(19),E=n(32),R=(n(24),n(7)),I=n(30),T=(n(25),n(33)),A=function(e){var t;t=e.stock>0?Object(b.jsx)("span",{className:"text-green-600",children:"".concat(e.stock," in stock")}):Object(b.jsx)("span",{className:"text-red-600",children:"Out of stock"});var n="p/".concat(e.id);return Object(b.jsxs)(I.a,{className:"grid grid-cols-5 grid-rows-1 xl:grid-cols-1",children:[Object(b.jsx)(u.b,{to:n,className:"px-2 xl:py-4 col-span-2 flex items-center justify-center",children:Object(b.jsx)("img",{className:"max-h-48",src:e.image,alt:e.name})}),Object(b.jsxs)("div",{className:"col-span-3 flex flex-col justify-between p-3",children:[Object(b.jsxs)("div",{className:"h-20",children:[Object(b.jsxs)("div",{className:"text-yellow-600 text-xs",children:[Object(b.jsxs)("span",{className:"",children:[e.rating," / 5"]})," ",Object(b.jsx)(u.b,{to:"".concat(n,"#reviews"),children:Object(b.jsxs)("span",{className:"text-black hover:text-blue-800",children:["(",e.reviews," reviews)"]})})]}),Object(b.jsx)(u.b,{to:n,className:"mt-2 text-xs text-gray-700 hover:text-blue-600",children:e.brand}),Object(b.jsx)(u.b,{id:"name",className:"text-gray-800 leading-6 text-lg hover:text-blue-600",to:n,children:Object(b.jsx)("p",{className:"",children:e.name})})]}),Object(b.jsxs)("div",{className:"flex flex-col mt-8",children:[Object(b.jsx)("h3",{className:"text-2xl font-semibold text-gray-900",children:e.price}),t,Object(b.jsx)(T.a,{data:{id:e.id,name:e.name,price:e.price}})]})]})]})},D=function(e){return Object(b.jsx)("ul",{className:"grid grid-cols-1 gap-y-2 sm:gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5",children:e.products.map((function(e){return Object(b.jsx)(A,{id:e.id,image:E.a,brand:e.brand,name:e.name,price:"\xa3".concat(e.price.toFixed(2)),stock:e.stock,reviews:e.reviews.length,rating:e.rating},e.id)}))})},L=n(20),M=n(17),P=function(e){var t=Object(L.a)(),n=Object(l.a)(t,4),c=n[0],s=(n[1],n[2],n[3]),i=Object(a.useState)(null),r=Object(l.a)(i,2),o=r[0],u=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/products","GET");case 3:t=e.sent,u(t.products),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(b.jsxs)(b.Fragment,{children:[c&&Object(b.jsx)("div",{className:"flex justify-center",children:Object(b.jsx)(M.a,{})}),!c&&(!o||0===o.length)&&Object(b.jsx)("h2",{children:"No products found"}),!c&&o&&Object(b.jsx)(D,{products:o})]})},z=n(14),V=(n(51),n(28)),B=n(15),F=n(29),H=[{id:"name",data:{type:"text",placeholder:"Recipient name or company name",validityRules:Object(z.a)({},B.d,"Please enter in a name"),layout:"col-span-2 mb-4"}}],J=function(e){var t=Object(l.a)(e.formStuff,4),n=t[0],c=t[1],a=t[2],s=(t[3],Object(L.a)()),i=Object(l.a)(s,4),r=i[0],o=i[1],u=(i[2],i[3],Object(b.jsx)("div",{className:"flex w-full justify-end",children:Object(b.jsx)(R.a,{onClick:a,children:"Next"})}));return Object(b.jsx)("div",{className:"",children:Object(b.jsx)(F.a,{button:u,className:"w-[32rem]",cols:"2",gap:"gap-2",btnText:"Next",isLoading:r,error:o,formState:n,submitHandler:a,changeHandler:c,inputs:H})})},U=function(e){return Object(b.jsxs)("div",{children:[!e.paymentMethod&&Object(b.jsx)("p",{children:"ERROR"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",checked:!0,onChange:function(){return e.setPaymentMethod("paypal")},name:"pay"}),Object(b.jsx)("label",{className:"ml-2",children:"PayPal"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",onChange:function(){return e.setPaymentMethod("card")},name:"pay"}),Object(b.jsx)("label",{className:"ml-2",children:"Card"})]}),Object(b.jsxs)("div",{className:"mt-5 flex w-full justify-between",children:[Object(b.jsx)(R.a,{onClick:function(){return e.step(1)},children:"Back"}),Object(b.jsx)(R.a,{onClick:function(){null!==e.paymentMethod&&e.step(3)},children:"Next"})]})]})},G=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"flex w-full justify-between",children:[Object(b.jsx)("p",{children:e.paymentMethod}),Object(b.jsx)(R.a,{onClick:function(){return e.step(2)},children:"Back"})]})})},_=function(e){var t=Object(a.useState)(1),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)("paypal"),r=Object(l.a)(i,2),o=r[0],u=r[1],d="text-gray-300",j="text-blue-300",x="text-blue-500",m=[{id:"name",data:{type:"text",placeholder:"Recipient name or company name",validityRules:Object(z.a)({},B.d,"Please enter in a name"),layout:"col-span-2 mb-4"}}],h=Object(V.a)(m,{isValid:!1},(function(){return s(2)})),O=Object(l.a)(h,4),f=O[0],p=O[1],v=O[2],g=O[3];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("ul",{className:"flex text-sm space-x-12 justify-center my-6",children:[Object(b.jsx)("li",{className:1===c?x:c>1?j:d,children:"Shipping"}),Object(b.jsx)("li",{className:2===c?x:c>2?j:d,children:"Payment"}),Object(b.jsx)("li",{className:3===c?x:c>3?j:d,children:"Confirm & Pay"})]}),Object(b.jsx)("div",{className:"flex justify-center",children:Object(b.jsxs)("div",{className:"my-4",children:[Object(b.jsx)("h2",{className:"text-3xl mb-6",children:{1:"Enter your shipping details",2:"Choose a payment method",3:"Confirm details"}[c]}),1===c&&Object(b.jsx)(J,{formStuff:[f,p,v,g],step:s}),2===c&&Object(b.jsx)(U,{paymentMethod:o,setPaymentMethod:u,step:s}),3===c&&Object(b.jsx)(G,{paymentMethod:o,setPaymentMethod:u,step:s})]})})]})},W=s.a.lazy((function(){return n.e(6).then(n.bind(null,57))})),Z=s.a.lazy((function(){return n.e(5).then(n.bind(null,58))})),Q=s.a.lazy((function(){return n.e(8).then(n.bind(null,59))})),X=s.a.lazy((function(){return n.e(7).then(n.bind(null,62))})),$=s.a.lazy((function(){return n.e(3).then(n.bind(null,61))})),q=s.a.lazy((function(){return n.e(4).then(n.bind(null,60))}));var K=function(){var e,t=Object(a.useState)(null),n=Object(l.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(null),d=Object(l.a)(r,2),x=d[0],m=d[1],h=Object(a.useState)(null),O=Object(l.a)(h,2),f=O[0],p=O[1],v=Object(a.useCallback)((function(e,t,n){p(e),i(t);var c=n||new Date(Date.now()+36e5).toISOString();m(c),localStorage.setItem("userData",JSON.stringify({userData:e,token:t,tokenExpiry:c}))}),[]),g=Object(a.useCallback)((function(){p(null),i(null),m(null),localStorage.removeItem("userData")}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.tokenExpiry).getTime()>Date.now()&&v(e.userData,e.token,e.tokenExpiry)}),[v]),Object(a.useEffect)((function(){if(s&&x){var e=new Date(x).getTime()-Date.now();c=setTimeout(g,e)}else clearTimeout(c)}),[s,g,x]),e=s?Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",exact:!0,children:Object(b.jsx)(P,{})}),Object(b.jsx)(o.b,{path:"/explore",exact:!0,children:Object(b.jsx)(Q,{})}),Object(b.jsx)(o.b,{path:"/cart",exact:!0,children:Object(b.jsx)(X,{})}),Object(b.jsx)(o.b,{path:"/checkout",exact:!0,children:Object(b.jsx)(_,{})}),f&&f.isAdmin&&Object(b.jsx)(o.b,{path:"/admin",exact:!0,children:Object(b.jsx)(q,{})}),Object(b.jsx)(o.b,{path:"/p/:productId",exact:!0,children:Object(b.jsx)($,{})}),Object(b.jsx)(o.a,{to:"/"})]}):Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",exact:!0,children:Object(b.jsx)(P,{})}),Object(b.jsx)(o.b,{path:"/explore",exact:!0,children:Object(b.jsx)(Q,{})}),Object(b.jsx)(o.b,{path:"/cart",exact:!0,children:Object(b.jsx)(X,{})}),Object(b.jsx)(o.b,{path:"/checkout",exact:!0,children:Object(b.jsx)(_,{})}),Object(b.jsx)(o.b,{path:"/signup",exact:!0,children:Object(b.jsx)(W,{})}),Object(b.jsx)(o.b,{path:"/login",exact:!0,children:Object(b.jsx)(Z,{})}),f&&f.isAdmin&&Object(b.jsx)(o.b,{path:"/admin",exact:!0,children:Object(b.jsx)(q,{})}),Object(b.jsx)(o.b,{path:"/p/:productId",exact:!0,children:Object(b.jsx)($,{})}),Object(b.jsx)(o.a,{to:"/"})]}),Object(b.jsx)(j.a.Provider,{value:{isLoggedIn:!!s,userData:f,token:s,login:v,logout:g},children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(k,{}),Object(b.jsx)("main",{className:"lg:container mx-auto px-2 my-3 relative",children:Object(b.jsx)(a.Suspense,{fallback:Object(b.jsx)("div",{className:"flex justify-center",children:Object(b.jsx)(M.a,{})}),children:e})}),Object(b.jsx)(N,{})]})})};n(52);r.a.render(Object(b.jsx)(K,{}),document.getElementById("root"))}],[[53,1,2]]]);
//# sourceMappingURL=main.d77c7363.chunk.js.map