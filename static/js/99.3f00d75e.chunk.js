(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[99],{1287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var l=void 0,i=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(i=window);var c=t.FrameContext=r.default.createContext({document:l,window:i}),s=c.Provider,u=c.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1288:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(12),o=n(116),r=n(1269),l=n(1278),i=n(1247),c=n(1281),s=n(1282),u=n(0),d=n.n(u),m=n(11),f=n(9),p=n(71),h=n(72),b=n(125),y=n(124),g=n(1200),v=n(604),E=n(1237),x=n(1268),w=n(8),C=n(388),j=n(389),O=n(1289),M=n.n(O),_=Object(g.a)({productionPrefix:"iframe-"}),D=function(e){Object(b.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(C.a)(Object(f.a)(Object(f.a)({},Object(v.a)()),{},{plugins:[].concat(Object(m.a)(Object(v.a)().plugins),[Object(j.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(M.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(E.b,{jss:this.state.jss,generateClassName:_,sheetsManager:this.state.sheetsManager},d.a.createElement(x.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),N=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(D);function P(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(a.a)(t,2),m=n[0],f=n[1],p=e.component,h=e.raw,b=e.iframe,y=e.className;return d.a.createElement(l.a,{className:y},d.a.createElement(r.a,{position:"static",color:"default",elevation:0},d.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){f(t)}},p&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(i.a,null,"remove_red_eye")}),h&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(i.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===m?"flex flex-1 max-w-full":"hidden"},p&&(b?d.a.createElement(N,null,d.a.createElement(p,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(p,null)))),d.a.createElement("div",{className:1===m?"flex flex-1":"hidden"},h&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}P.defaultProps={currentTabIndex:0};var T=P},1289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1287);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1290),l=(o=r)&&o.__esModule?o:{default:o};t.default=l.default},1290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=d(r),i=d(n(15)),c=d(n(3)),s=n(1287),u=d(n(1291));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=l.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},l.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},l.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[i.default.createPortal(this.props.head,this.getDoc().head),i.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,l.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);m.propTypes={style:c.default.object,head:c.default.node,initialContent:c.default.string,mountTarget:c.default.string,contentDidMount:c.default.func,contentDidUpdate:c.default.func,children:c.default.oneOfType([c.default.element,c.default.arrayOf(c.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(l(o),l(n(3)));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);s.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=s},2701:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=(n(1288),n(116)),l=n(1252),i=n(1247),c=n(196),s=n(1246),u=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return u(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(l.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/css-baseline",target:"_blank",role:"button"},o.a.createElement(i.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"CSS Baseline"),o.a.createElement(c.a,{className:"description"},"Material-UI provides a CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Global reset"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"You might be familiar with ",o.a.createElement("a",{href:"https://github.com/necolas/normalize.css"},"normalize.css"),", a collection of HTML element and attribute style-normalizations."),o.a.createElement(r.a,{component:"pre",className:"language-jsx"}," \nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nexport default function MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n"),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Scoping on children"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"However, you might be progressively migrating a website to Material-UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the ",o.a.createElement("code",null,"ScopedCssBaseline")," component."),o.a.createElement(r.a,{component:"pre",className:"language-jsx"}," \nimport React from 'react';\nimport ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';\nimport MyApp from './MyApp';\n\nexport default function MyApp() {\n  return (\n    <ScopedCssBaseline>\n      {/* The rest of your application */}\n      <MyApp />\n    </ScopedCssBaseline>\n  );\n}\n"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f Make sure you import ",o.a.createElement("code",null,"ScopedCssBaseline")," first to avoid box-sizing conflicts as in the above example."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Approach"),o.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Page"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("code",null,"<html>")," and ",o.a.createElement("code",null,"<body>")," elements are updated to provide better page-wide defaults. More specifically:"),o.a.createElement("ul",null,o.a.createElement("li",null,"The margin in all browsers is removed."),o.a.createElement("li",null,"The default Material Design background color is applied. It's using ",o.a.createElement("a",{href:"/customization/default-theme/?expand-path=$.palette.background"},o.a.createElement("code",null,"theme.palette.background.default"))," for standard devices and a white background for print devices.")),o.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Layout"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("code",null,"box-sizing")," is set globally on the ",o.a.createElement("code",null,"<html>")," element to ",o.a.createElement("code",null,"border-box"),". Every element\u2014including ",o.a.createElement("code",null,"*::before")," and ",o.a.createElement("code",null,"*::after")," are declared to inherit this property, which ensures that the declared width of the element is never exceeded due to padding or border.")),o.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Typography"),o.a.createElement("ul",null,o.a.createElement("li",null,"No base font-size is declared on the ",o.a.createElement("code",null,"<html>"),", but 16px is assumed (the browser default). You can learn more about the implications of changing the ",o.a.createElement("code",null,"<html>")," default font size in ",o.a.createElement("a",{href:"/customization/typography/#typography-html-font-size"},"the theme documentation")," page."),o.a.createElement("li",null,"Set the ",o.a.createElement("code",null,"theme.typography.body2")," style on the ",o.a.createElement("code",null,"<body>")," element."),o.a.createElement("li",null,"Set the font-weight to ",o.a.createElement("code",null,"theme.typography.fontWeightBold")," for the ",o.a.createElement("code",null,"<b>")," and ",o.a.createElement("code",null,"<strong>")," elements."),o.a.createElement("li",null,"Custom font-smoothing is enabled for better display of the Roboto font.")),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customization"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Head to the ",o.a.createElement("a",{href:"/customization/globals/#global-css"},"global customization")," section of the documentation to change the output of these components."))}}}]);