(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[96],{1298:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var r=a(28),n=a(32),c=a(1246),o=a(2),i=a(0),l=a.n(i),s=a(41),d=a(1268),u=a(29),p=a(5);var m=function(e){var t=Object(s.a)(),a=Object(p.c)(Object(u.c)(t.palette.primary.main));return l.a.createElement("div",{className:e.classes.header},e.header&&l.a.createElement(d.a,{theme:a},e.header))},f=a(12),b=a(1239),g=a(1259);var h=function(e){var t=Object(s.a)(),a=Object(p.c)(Object(u.c)(t.palette.primary.main)),r=e.classes;return l.a.createElement(l.a.Fragment,null,e.header&&l.a.createElement(d.a,{theme:a},l.a.createElement("div",{className:Object(o.default)(r.sidebarHeader,e.variant)},e.header)),e.content&&l.a.createElement(n.a,{className:r.sidebarContent,enable:e.innerScroll},e.content))};var x=l.a.forwardRef((function(e,t){var a=Object(i.useState)(!1),r=Object(f.a)(a,2),n=r[0],c=r[1],s=e.classes;Object(i.useImperativeHandle)(t,(function(){return{toggleSidebar:d}}));var d=function(){c(!n)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{lgUp:"permanent"===e.variant},l.a.createElement(b.a,{variant:"temporary",anchor:e.position,open:n,onClose:function(e){return d()},classes:{root:Object(o.default)(s.sidebarWrapper,e.variant),paper:Object(o.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},l.a.createElement(h,e))),"permanent"===e.variant&&l.a.createElement(g.a,{mdDown:!0},l.a.createElement(b.a,{variant:"permanent",className:Object(o.default)(s.sidebarWrapper,e.variant),open:n,classes:{paper:Object(o.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},l.a.createElement(h,e))))})),v=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to left, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),O=l.a.forwardRef((function(e,t){var a=Object(i.useRef)(null),r=Object(i.useRef)(null),c=Object(i.useRef)(null),s=v(e),d=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return l.a.useImperativeHandle(t,(function(){return{rootRef:c,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),l.a.createElement("div",{className:Object(o.default)(s.root,e.innerScroll&&s.innerScroll),ref:c},l.a.createElement("div",{className:s.topBg}),l.a.createElement("div",{className:"flex container w-full"},u&&l.a.createElement(x,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:c}),l.a.createElement("div",{className:Object(o.default)(s.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},l.a.createElement(m,{header:e.header,classes:s}),l.a.createElement("div",{className:Object(o.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&l.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&l.a.createElement(n.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&l.a.createElement(x,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:c})))}));O.defaultProps={};var E=l.a.memo(O)},1366:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return b}));var r=a(28),n=a(24),c=a.n(n),o=a(43),i=a(20),l=a(47),s=a.n(l),d=Object(i.b)("eCommerceApp/orders/getOrders",Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/e-commerce-app/orders");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),u=Object(i.c)({}),p=u.getSelectors((function(e){return e.eCommerceApp.orders})),m=p.selectAll,f=(p.selectById,Object(i.d)({name:"eCommerceApp/orders",initialState:u.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:Object(r.a)({},d.fulfilled,u.setAll)})),b=f.actions.setOrdersSearchText;t.a=f.reducer},1367:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return b}));var r=a(28),n=a(24),c=a.n(n),o=a(43),i=a(20),l=a(47),s=a.n(l),d=Object(i.b)("eCommerceApp/products/getProducts",Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/e-commerce-app/products");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),u=Object(i.c)({}),p=u.getSelectors((function(e){return e.eCommerceApp.products})),m=p.selectAll,f=(p.selectById,Object(i.d)({name:"eCommerceApp/products",initialState:u.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:Object(r.a)({},d.fulfilled,u.setAll)})),b=f.actions.setProductsSearchText;t.a=f.reducer},1375:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"d",(function(){return m})),a.d(t,"c",(function(){return b}));var r,n=a(28),c=a(24),o=a.n(c),i=a(43),l=a(20),s=a(47),d=a.n(s),u=a(26),p=Object(l.b)("eCommerceApp/product/getProduct",function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/product",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(l.b)("eCommerceApp/product/saveProduct",function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/e-commerce-app/product/save",t);case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(l.d)({name:"eCommerceApp/product",initialState:null,reducers:{newProduct:{reducer:function(e,t){return t.payload},prepare:function(e){return{payload:{id:u.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(r={},Object(n.a)(r,p.fulfilled,(function(e,t){return t.payload})),Object(n.a)(r,m.fulfilled,(function(e,t){return t.payload})),r)}),b=f.actions.newProduct;t.a=f.reducer},1376:function(e,t,a){"use strict";a.d(t,"b",(function(){return u}));var r,n=a(28),c=a(24),o=a.n(c),i=a(43),l=a(20),s=a(47),d=a.n(s),u=Object(l.b)("eCommerceApp/order/getOrder",function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/order",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(l.b)("eCommerceApp/order/saveOrder",function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/e-commerce-app/order/save",t);case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(l.d)({name:"eCommerceApp/order",initialState:null,reducers:{},extraReducers:(r={},Object(n.a)(r,u.fulfilled,(function(e,t){return t.payload})),Object(n.a)(r,p.fulfilled,(function(e,t){return t.payload})),r)});t.a=m.reducer},1392:function(e,t,a){"use strict";var r=a(102),n=a(1376),c=a(1366),o=a(1375),i=a(1367),l=Object(r.c)({products:i.a,product:o.a,orders:c.a,order:n.a});t.a=l},2823:function(e,t,a){"use strict";a.r(t);var r=a(1298),n=a(227),c=a(0),o=a.n(c),i=a(1392),l=a(108),s=a(1252),d=a(1247),u=a(545),p=a(194),m=a(1268),f=a(196),b=a(5),g=a(25),h=a(29),x=a(1367);var v=function(e){var t=Object(b.b)(),a=Object(b.c)((function(e){return e.eCommerceApp.products.searchText})),r=Object(b.c)(h.e);return o.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement(l.a,{animation:"transition.expandIn",delay:300},o.a.createElement(d.a,{className:"text-32"},"shopping_basket")),o.a.createElement(l.a,{animation:"transition.slideLeftIn",delay:300},o.a.createElement(f.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Products"))),o.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},o.a.createElement(m.a,{theme:r},o.a.createElement(l.a,{animation:"transition.slideDownIn",delay:300},o.a.createElement(p.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},o.a.createElement(d.a,{color:"action"},"search"),o.a.createElement(u.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t(Object(x.d)(e))}}))))),o.a.createElement(l.a,{animation:"transition.slideRightIn",delay:300},o.a.createElement(s.a,{component:g.a,to:"/apps/e-commerce/products/new",className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary"},o.a.createElement("span",{className:"hidden sm:flex"},"Add New Product"),o.a.createElement("span",{className:"flex sm:hidden"},"New"))))},O=a(12),E=a(32),j=a(7),w=a(1258),S=a(1362),y=a(1365),k=a(1352),C=a(1537),N=a(1364),P=a(2),I=a(42),T=a(626),A=a(1276),R=a(1255),H=a(411),B=a(1249),W=a(1207),q=a(1246),D=a(1363),z=a(1628),V=a(1253),L=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"categories",align:"left",disablePadding:!1,label:"Category",sort:!0},{id:"priceTaxIncl",align:"right",disablePadding:!1,label:"Price",sort:!0},{id:"quantity",align:"right",disablePadding:!1,label:"Quantity",sort:!0},{id:"active",align:"right",disablePadding:!1,label:"Active",sort:!0}],M=Object(q.a)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}));var _=function(e){var t=M(e),a=Object(c.useState)(null),r=Object(O.a)(a,2),n=r[0],i=r[1];function l(){i(null)}return o.a.createElement(D.a,null,o.a.createElement(N.a,{className:"h-64"},o.a.createElement(k.a,{padding:"none",className:"w-40 md:w-64 text-center z-99"},o.a.createElement(w.a,{indeterminate:e.numSelected>0&&e.numSelected<e.rowCount,checked:e.numSelected===e.rowCount,onChange:e.onSelectAllClick}),e.numSelected>0&&o.a.createElement("div",{className:Object(P.default)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",t.actionsButtonWrapper)},o.a.createElement(T.a,{"aria-owns":n?"selectedProductsMenu":null,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},o.a.createElement(d.a,null,"more_horiz")),o.a.createElement(H.a,{id:"selectedProductsMenu",anchorEl:n,open:Boolean(n),onClose:l},o.a.createElement(W.a,null,o.a.createElement(B.a,{onClick:function(){l()}},o.a.createElement(A.a,{className:"min-w-40"},o.a.createElement(d.a,null,"delete")),o.a.createElement(R.a,{primary:"Remove"})))))),L.map((function(t){return o.a.createElement(k.a,{className:"p-4 md:p-16",key:t.id,align:t.align,padding:t.disablePadding?"none":"default",sortDirection:e.order.id===t.id&&e.order.direction},t.sort&&o.a.createElement(V.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300},o.a.createElement(z.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(a=t.id,function(t){e.onRequestSort(t,a)})},t.label)));var a}),this)))};var F=Object(I.j)((function(e){var t=Object(b.b)(),a=Object(b.c)(x.c),r=Object(b.c)((function(e){return e.eCommerceApp.products.searchText})),n=Object(c.useState)([]),i=Object(O.a)(n,2),l=i[0],s=i[1],u=Object(c.useState)(a),p=Object(O.a)(u,2),m=p[0],f=p[1],g=Object(c.useState)(0),h=Object(O.a)(g,2),v=h[0],I=h[1],T=Object(c.useState)(10),A=Object(O.a)(T,2),R=A[0],H=A[1],B=Object(c.useState)({direction:"asc",id:null}),W=Object(O.a)(B,2),q=W[0],D=W[1];return Object(c.useEffect)((function(){t(Object(x.b)())}),[t]),Object(c.useEffect)((function(){0!==r.length?(f(j.a.filter(a,(function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))),I(0)):f(a)}),[a,r]),o.a.createElement("div",{className:"w-full flex flex-col"},o.a.createElement(E.a,{className:"flex-grow overflow-x-auto"},o.a.createElement(S.a,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle"},o.a.createElement(_,{numSelected:l.length,order:q,onSelectAllClick:function(e){e.target.checked?s(m.map((function(e){return e.id}))):s([])},onRequestSort:function(e,t){var a=t,r="desc";q.id===t&&"desc"===q.direction&&(r="asc"),D({direction:r,id:a})},rowCount:m.length}),o.a.createElement(y.a,null,j.a.orderBy(m,[function(e){switch(q.id){case"categories":return e.categories[0];default:return e[q.id]}}],[q.direction]).slice(v*R,v*R+R).map((function(t){var a=-1!==l.indexOf(t.id);return o.a.createElement(N.a,{className:"h-64 cursor-pointer",hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,key:t.id,selected:a,onClick:function(a){return r=t,void e.history.push("/apps/e-commerce/products/".concat(r.id,"/").concat(r.handle));var r}},o.a.createElement(k.a,{className:"w-40 md:w-64 text-center",padding:"none"},o.a.createElement(w.a,{checked:a,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var a=l.indexOf(t),r=[];-1===a?r=r.concat(l,t):0===a?r=r.concat(l.slice(1)):a===l.length-1?r=r.concat(l.slice(0,-1)):a>0&&(r=r.concat(l.slice(0,a),l.slice(a+1))),s(r)}(0,t.id)}})),o.a.createElement(k.a,{className:"w-52 px-4 md:px-0",component:"th",scope:"row",padding:"none"},t.images.length>0&&t.featuredImageId?o.a.createElement("img",{className:"w-full block rounded",src:j.a.find(t.images,{id:t.featuredImageId}).url,alt:t.name}):o.a.createElement("img",{className:"w-full block rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:t.name})),o.a.createElement(k.a,{className:"p-4 md:p-16",component:"th",scope:"row"},t.name),o.a.createElement(k.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row"},t.categories.join(", ")),o.a.createElement(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right"},o.a.createElement("span",null,"$"),t.priceTaxIncl),o.a.createElement(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right"},t.quantity,o.a.createElement("i",{className:Object(P.default)("inline-block w-8 h-8 rounded mx-8",t.quantity<=5&&"bg-red",t.quantity>5&&t.quantity<=25&&"bg-orange",t.quantity>25&&"bg-green")})),o.a.createElement(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right"},t.active?o.a.createElement(d.a,{className:"text-green text-20"},"check_circle"):o.a.createElement(d.a,{className:"text-red text-20"},"remove_circle")))}))))),o.a.createElement(C.a,{className:"flex-shrink-0 border-t-1",component:"div",count:m.length,rowsPerPage:R,page:v,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){I(t)},onChangeRowsPerPage:function(e){H(e.target.value)}}))}));t.default=Object(n.a)("eCommerceApp",i.a)((function(){return o.a.createElement(r.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:o.a.createElement(v,null),content:o.a.createElement(F,null),innerScroll:!0})}))}}]);