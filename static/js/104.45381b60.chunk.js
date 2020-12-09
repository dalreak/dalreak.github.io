(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[104],{1349:function(e,a,t){"use strict";var n=t(1),o=t(4),i=t(0),l=(t(3),t(2)),r=t(8),c=i.forwardRef((function(e,a){var t=e.classes,r=e.className,c=e.dividers,s=void 0!==c&&c,d=Object(o.a)(e,["classes","className","dividers"]);return i.createElement("div",Object(n.a)({className:Object(l.default)(t.root,r,s&&t.dividers),ref:a},d))}));a.a=Object(r.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(c)},1361:function(e,a,t){"use strict";var n=t(1),o=t(4),i=t(0),l=(t(3),t(2)),r=t(8),c=i.forwardRef((function(e,a){var t=e.disableSpacing,r=void 0!==t&&t,c=e.classes,s=e.className,d=Object(o.a)(e,["disableSpacing","classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.default)(c.root,s,!r&&c.spacing),ref:a},d))}));a.a=Object(r.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(c)},1393:function(e,a,t){"use strict";var n=t(1),o=t(4),i=t(0),l=(t(3),t(2)),r=t(8),c=t(196),s=i.forwardRef((function(e,a){var t=e.children,r=e.classes,s=e.className,d=e.disableTypography,m=void 0!==d&&d,p=Object(o.a)(e,["children","classes","className","disableTypography"]);return i.createElement("div",Object(n.a)({className:Object(l.default)(r.root,s),ref:a},p),m?t:i.createElement(c.a,{component:"h2",variant:"h6"},t))}));a.a=Object(r.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},1427:function(e,a,t){"use strict";var n=t(1),o=t(0),i=(t(3),t(8)),l=t(196),r=o.forwardRef((function(e,a){return o.createElement(l.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))}));a.a=Object(i.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(r)},2676:function(e,a,t){"use strict";t.r(a);var n=t(116),o=t(1252),i=t(1361),l=t(1349),r=t(1427),c=t(1393),s=t(196),d=t(0),m=t.n(d),p=t(5),u=t(279);a.default=function(e){var a=Object(p.b)();return m.a.createElement(m.a.Fragment,null,m.a.createElement(s.a,{variant:"h4",className:"mb-24"},"FuseDialog"),m.a.createElement(s.a,{className:"mb-16",component:"p"},m.a.createElement("code",null,"FuseDialog")," is a simple dialog trigger for easily showing dialog messages via redux action. It should be located in the theme layouts."),m.a.createElement(s.a,{className:"mt-32 mb-8",variant:"h5"},"Usage"),m.a.createElement(s.a,{className:"mb-16",component:"p"},"You can show dialog anywhere with dispatching the action openDialog, it is using Material-UI's dialog so you can pass the props in the object:"),m.a.createElement(n.a,{component:"pre",className:"language-jsx"},'\n                        <Button\n                            onClick={()=> dispatch(openDialog({\n                                children: (\n                                    <React.Fragment>\n                                        <DialogTitle id="alert-dialog-title">Use Google\'s location service?</DialogTitle>\n                                        <DialogContent>\n                                            <DialogContentText id="alert-dialog-description">\n                                                Let Google help apps determine location. This means sending anonymous location data to\n                                                Google, even when no apps are running.\n                                            </DialogContentText>\n                                        </DialogContent>\n                                        <DialogActions>\n                                            <Button onClick={()=> dispatch(closeDialog())} color="primary">\n                                                Disagree\n                                            </Button>\n                                            <Button onClick={()=> dispatch(closeDialog())} color="primary" autoFocus>\n                                                Agree\n                                            </Button>\n                                        </DialogActions>\n                                    </React.Fragment>\n                                     )\n                                 }))}\n                            variant="contained"\n                            color="secondary"\n                        >\n                            Open Dialog\n                        </Button>\n                        '),m.a.createElement(s.a,{className:"mt-32 mb-8",variant:"h5"},"Example"),m.a.createElement(o.a,{onClick:function(){return a(Object(u.c)({children:m.a.createElement(m.a.Fragment,null,m.a.createElement(c.a,{id:"alert-dialog-title"},"Use Google's location service?"),m.a.createElement(l.a,null,m.a.createElement(r.a,{id:"alert-dialog-description"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),m.a.createElement(i.a,null,m.a.createElement(o.a,{onClick:function(){return a(Object(u.a)())},color:"primary"},"Disagree"),m.a.createElement(o.a,{onClick:function(){return a(Object(u.a)())},color:"primary",autoFocus:!0},"Agree")))}))},variant:"contained",color:"secondary"},"Open Dialog"))}}}]);