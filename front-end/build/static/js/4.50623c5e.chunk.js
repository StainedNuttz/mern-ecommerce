(this["webpackJsonpmern-ecommerce"]=this["webpackJsonpmern-ecommerce"]||[]).push([[4],{57:function(e,t,n){"use strict";n(0);var r=n(10),c=n.n(r),a=n(7),s=n(31),i=n(1);t.a=function(e){return c.a.createPortal(Object(i.jsx)(s.a,{children:Object(i.jsxs)("div",{className:"bg-white p-4 rounded-md",children:[e.children,Object(i.jsxs)("div",{className:"flex justify-center space-x-2 mt-3",children:[Object(i.jsx)(a.a,{className:"p-1 px-5",onClick:e.yes,children:"Yes"}),Object(i.jsx)(a.a,{danger:!0,className:"p-1 px-5",onClick:e.no,children:"No"})]})]})}),document.getElementById("modal-hook"))}},64:function(e,t,n){"use strict";n.r(t);var r=n(18),c=n.n(r),a=n(34);function s(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}var i=n(19),o=n(2),l=n(0),u=n(20),d=n(17),f=n(57),j=n(7),m=n(30),b=n(1),h=function(e){var t=e.data;return Object(b.jsxs)(m.a,{className:"p-3 py-3 flex justify-between items-center",children:[Object(b.jsx)("div",{className:"flex justify-between",children:Object(b.jsx)("h2",{className:"",children:t.name})}),Object(b.jsxs)("div",{className:"flex space-x-10",children:[Object(b.jsxs)("div",{className:"flex space-x-4 items-center",children:[Object(b.jsx)("p",{className:"font-bold",children:"\xa3".concat(t.price)}),Object(b.jsx)("input",{value:t.inCart,readOnly:!0,className:"w-10 border border-gray-300 rounded-sm text-center p-1 font-light"})]}),Object(b.jsx)("div",{className:"flex justify-center items-center",children:Object(b.jsx)(j.a,{danger:!0,onClick:e.onDelete,className:"p-1",children:Object(b.jsx)("i",{className:"fa fa-fw fa-times text-white"})})})]})]})};t.default=function(e){var t=Object(l.useState)(JSON.parse(localStorage.getItem("LOCAL_CART"))||[]),n=Object(o.a)(t,2),r=n[0],a=n[1],m=Object(l.useState)(!1),x=Object(o.a)(m,2),p=x[0],O=x[1],v=Object(u.a)(),y=Object(o.a)(v,4),N=y[0],g=(y[1],y[2],y[3]);return Object(l.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,i,o,l,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(r),0!==(t=r.map((function(e){return e.id}))).length){e.next=4;break}return e.abrupt("return");case 4:return n="ids[]="+t[0],t.forEach((function(e,t){0!==t&&(n+="&ids[]="+e)})),e.prev=6,e.next=9,g("/api/products?".concat(n),"GET");case 9:i=e.sent,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(6);case 14:o=[],l=s(r);try{for(d=function(){var e=u.value,t=i.products[i.products.findIndex((function(t){return t.id===e.id}))];o.push({id:t.id,inCart:e.inCart,name:t.name,price:t.price,stock:t.stock})},l.s();!(u=l.n()).done;)d()}catch(c){l.e(c)}finally{l.f()}localStorage.setItem("LOCAL_CART",JSON.stringify(o)),a(o);case 19:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)(b.Fragment,{children:[N&&Object(b.jsx)("div",{className:"flex justify-center",children:Object(b.jsx)(d.a,{})}),!N&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ul",{className:"space-y-1",children:r.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{onDelete:function(){return O(!0)},data:e}),p&&Object(b.jsx)(f.a,{yes:function(){O(!1),function(e){var t=JSON.parse(localStorage.getItem("LOCAL_CART")).filter((function(t){return t.id!==e}));localStorage.setItem("LOCAL_CART",JSON.stringify(t)),a(t)}(e.id)},no:function(){return O(!1)},children:"Remove item from cart?"})]},e.id)}))}),Object(b.jsx)("div",{className:"flex justify-end mr-1 mt-4",children:Object(b.jsx)(j.a,{className:"p-2",to:"/checkout",children:"Proceed to checkout"})})]})]})}}}]);
//# sourceMappingURL=4.50623c5e.chunk.js.map