(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[86],{1287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};var l=void 0,c=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(c=window);var i=t.FrameContext=o.default.createContext({document:l,window:c}),u=i.Provider,s=i.Consumer;t.FrameContextProvider=u,t.FrameContextConsumer=s},1288:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var a=n(12),r=n(116),o=n(1269),l=n(1278),c=n(1247),i=n(1281),u=n(1282),s=n(0),d=n.n(s),m=n(11),f=n(9),p=n(71),h=n(72),b=n(125),v=n(124),y=n(1200),E=n(604),g=n(1237),w=n(1268),j=n(8),O=n(388),x=n(389),C=n(1289),_=n.n(C),D=Object(y.a)({productionPrefix:"iframe-"}),M=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(O.a)(Object(f.a)(Object(f.a)({},Object(E.a)()),{},{plugins:[].concat(Object(m.a)(Object(E.a)().plugins),[Object(x.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(_.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(g.b,{jss:this.state.jss,generateClassName:D,sheetsManager:this.state.sheetsManager},d.a.createElement(w.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),P=Object(j.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(M);function k(e){var t=Object(s.useState)(e.currentTabIndex),n=Object(a.a)(t,2),m=n[0],f=n[1],p=e.component,h=e.raw,b=e.iframe,v=e.className;return d.a.createElement(l.a,{className:v},d.a.createElement(o.a,{position:"static",color:"default",elevation:0},d.a.createElement(u.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){f(t)}},p&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"remove_red_eye")}),h&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===m?"flex flex-1 max-w-full":"hidden"},p&&(b?d.a.createElement(P,null,d.a.createElement(p,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(p,null)))),d.a.createElement("div",{className:1===m?"flex flex-1":"hidden"},h&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}k.defaultProps={currentTabIndex:0};var N=k},1289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1287);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var r,o=n(1290),l=(r=o)&&r.__esModule?r:{default:r};t.default=l.default},1290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),l=d(o),c=d(n(15)),i=d(n(3)),u=n(1287),s=d(n(1291));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,r=l.default.createElement(s.default,{contentDidMount:t,contentDidUpdate:n},l.default.createElement(u.FrameContextProvider,{value:{document:e,window:a}},l.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var o=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(r,o)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,l.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(o.Component);m.propTypes={style:i.default.object,head:i.default.node,initialContent:i.default.string,mountTarget:i.default.string,contentDidMount:i.default.func,contentDidUpdate:i.default.func,children:i.default.oneOfType([i.default.element,i.default.arrayOf(i.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=(l(r),l(n(3)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);u.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},t.default=u},2253:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(12),r=n(0),o=n.n(r),l=n(1201),c=n(1246),i=Object(c.a)((function(e){return{alert:{padding:e.spacing(1),margin:e.spacing(1,0),border:"1px solid"}}}));function u(){var e=i(),t=o.a.useState(!1),n=Object(a.a)(t,2),r=n[0],c=n[1],u=o.a.useRef(null);return o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:function(){c(!r)}},r?"Unmount children":"Mount children"),o.a.createElement("div",{className:e.alert},"It looks like I will render here.",r?o.a.createElement(l.a,{container:u.current},o.a.createElement("span",null,"But I actually render here!")):null),o.a.createElement("div",{className:e.alert,ref:u}))}},2254:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Portal from '@material-ui/core/Portal';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  alert: {\n    padding: theme.spacing(1),\n    margin: theme.spacing(1, 0),\n    border: '1px solid',\n  },\n}));\n\nexport default function SimplePortal() {\n  const classes = useStyles();\n  const [show, setShow] = React.useState(false);\n  const container = React.useRef(null);\n\n  const handleClick = () => {\n    setShow(!show);\n  };\n\n  return (\n    <div>\n      <button type=\"button\" onClick={handleClick}>\n        {show ? 'Unmount children' : 'Mount children'}\n      </button>\n      <div className={classes.alert}>\n        It looks like I will render here.\n        {show ? (\n          <Portal container={container.current}>\n            <span>But I actually render here!</span>\n          </Portal>\n        ) : null}\n      </div>\n      <div className={classes.alert} ref={container} />\n    </div>\n  );\n}\n"},2720:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1288),l=(n(116),n(1252)),c=n(1247),i=n(196),u=n(1246),s=Object(u.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return s(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(l.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/portal",target:"_blank",role:"button"},r.a.createElement(c.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(i.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Portal"),r.a.createElement(i.a,{className:"description"},'The portal component renders its children into a new "subtree" outside of current DOM hierarchy.'),r.a.createElement("ul",null,r.a.createElement("li",null,"\ud83d\udce6 ",r.a.createElement("a",{href:"/size-snapshot"},"1.3 kB gzipped"))),r.a.createElement(i.a,{className:"mb-16",component:"div"},"The children of the portal component will be appended to the ",r.a.createElement("code",null,"container")," specified. The component is used internally by the ",r.a.createElement("a",{href:"/components/modal/"},r.a.createElement("code",null,"Modal"))," and ",r.a.createElement("a",{href:"/components/popper/"},r.a.createElement("code",null,"Popper"))," components."),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Example"),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2253).default,raw:n(2254)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Server-side"),r.a.createElement(i.a,{className:"mb-16",component:"div"},"React ",r.a.createElement("a",{href:"https://github.com/facebook/react/issues/13097"},"doesn't support")," the ",r.a.createElement("a",{href:"https://reactjs.org/docs/portals.html"},r.a.createElement("code",null,"createPortal()"))," API on the server. You have to wait for the client-side hydration to see the children."))}}}]);