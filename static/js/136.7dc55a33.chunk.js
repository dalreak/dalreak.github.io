(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[136],{1536:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(12),c=t(196),r=t(2),l=t(98),s=t.n(l),i=t(0),o=t.n(i);function m(e){var a=e.onComplete,t=Object(i.useState)(s.a.isMoment(e.endDate)?e.endDate:s()(e.endDate)),l=Object(n.a)(t,1)[0],m=Object(i.useState)({days:0,hours:0,minutes:0,seconds:0}),u=Object(n.a)(m,2),d=u[0],f=u[1],b=Object(i.useRef)(),p=Object(i.useCallback)((function(){window.clearInterval(b.current),a&&a()}),[a]),y=Object(i.useCallback)((function(){var e=s()(),a=l.diff(e,"seconds");if(a<0)p();else{var t=s.a.duration(a,"seconds");f({days:t.asDays().toFixed(0),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds()})}}),[p,l]);return Object(i.useEffect)((function(){return b.current=setInterval(y,1e3),function(){clearInterval(b.current)}}),[y]),o.a.createElement("div",{className:Object(r.default)("flex items-center",e.className)},o.a.createElement("div",{className:"flex flex-col items-center justify-center px-12"},o.a.createElement(c.a,{variant:"h4",className:"mb-4"},d.days),o.a.createElement(c.a,{variant:"caption",color:"textSecondary"},"days")),o.a.createElement("div",{className:"flex flex-col items-center justify-center px-12"},o.a.createElement(c.a,{variant:"h4",className:"mb-4"},d.hours),o.a.createElement(c.a,{variant:"caption",color:"textSecondary"},"hours")),o.a.createElement("div",{className:"flex flex-col items-center justify-center px-12"},o.a.createElement(c.a,{variant:"h4",className:"mb-4"},d.minutes),o.a.createElement(c.a,{variant:"caption",color:"textSecondary"},"minutes")),o.a.createElement("div",{className:"flex flex-col items-center justify-center px-12"},o.a.createElement(c.a,{variant:"h4",className:"mb-4"},d.seconds),o.a.createElement(c.a,{variant:"caption",color:"textSecondary"},"seconds")))}m.defaultProps={endDate:s()().add(15,"days")};var u=o.a.memo(m)},2774:function(e,a,t){"use strict";t.r(a);var n=t(108),c=t(1536),r=t(126),l=t(1252),s=t(1278),i=t(1279),o=t(1275),m=t(1246),u=t(79),d=t(1256),f=t(196),b=t(2),p=t(0),y=t.n(p),x=Object(m.a)((function(e){return{root:{background:"radial-gradient(".concat(Object(u.darken)(e.palette.primary.dark,.5)," 0%, ").concat(e.palette.primary.dark," 80%)"),color:e.palette.primary.contrastText}}}));a.default=function(){var e=x(),a=Object(r.c)({email:""}),t=a.form,m=a.handleChange,u=a.resetForm;return y.a.createElement("div",{className:Object(b.default)(e.root,"flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")},y.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},y.a.createElement(n.a,{animation:"transition.expandIn"},y.a.createElement(s.a,{className:"w-full max-w-384 rounded-8"},y.a.createElement(i.a,{className:"flex flex-col items-center justify-center p-32 text-center"},y.a.createElement("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),y.a.createElement(f.a,{variant:"subtitle1",className:"mb-16"},"Hey! Thank you for checking out our app."),y.a.createElement(f.a,{color:"textSecondary",className:"max-w-288"},"It\u2019s not quite ready yet, but we are working hard and it will be ready in approximately:"),y.a.createElement(c.a,{endDate:"2023-07-28",className:"my-48"}),y.a.createElement(o.a,{className:"w-48"}),y.a.createElement(f.a,{className:"font-bold my-32 w-full"},"If you would like to be notified when the app is ready, you can subscribe to our e-mail list."),y.a.createElement("form",{name:"subscribeForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:function(e){e.preventDefault(),u()}},y.a.createElement(d.a,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:t.email,onChange:m,variant:"outlined",required:!0,fullWidth:!0}),y.a.createElement(l.a,{variant:"contained",color:"primary",className:"w-224 mx-auto my-16","aria-label":"Subscribe",disabled:!(t.email.length>0),type:"submit"},"SUBSCRIBE")))))))}}}]);