(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[128],{1508:function(t,e,n){"use strict";n.r(e),e.default="import MomentUtils from '@date-io/moment';\nimport '@fake-db';\nimport FuseAuthorization from '@fuse/core/FuseAuthorization';\nimport FuseLayout from '@fuse/core/FuseLayout';\nimport FuseTheme from '@fuse/core/FuseTheme';\nimport history from '@history';\nimport { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';\nimport { MuiPickersUtilsProvider } from '@material-ui/pickers';\nimport { create } from 'jss';\nimport jssExtend from 'jss-plugin-extend';\nimport rtl from 'jss-rtl';\nimport React from 'react';\nimport Provider from 'react-redux/es/components/Provider';\nimport { Router } from 'react-router-dom';\nimport AppContext from './AppContext';\nimport { Auth } from './auth';\nimport routes from './fuse-configs/routesConfig';\nimport store from './store';\n\nconst jss = create({\n\t...jssPreset(),\n\tplugins: [...jssPreset().plugins, jssExtend(), rtl()],\n\tinsertionPoint: document.getElementById('jss-insertion-point')\n});\n\nconst generateClassName = createGenerateClassName();\n\nconst App = () => {\n\treturn (\n\t\t<AppContext.Provider\n\t\t\tvalue={{\n\t\t\t\troutes\n\t\t\t}}\n\t\t>\n\t\t\t<StylesProvider jss={jss} generateClassName={generateClassName}>\n\t\t\t\t<Provider store={store}>\n\t\t\t\t\t<MuiPickersUtilsProvider utils={MomentUtils}>\n\t\t\t\t\t\t<Auth>\n\t\t\t\t\t\t\t<Router history={history}>\n\t\t\t\t\t\t\t\t<FuseAuthorization>\n\t\t\t\t\t\t\t\t\t<FuseTheme>\n\t\t\t\t\t\t\t\t\t\t<FuseLayout />\n\t\t\t\t\t\t\t\t\t</FuseTheme>\n\t\t\t\t\t\t\t\t</FuseAuthorization>\n\t\t\t\t\t\t\t</Router>\n\t\t\t\t\t\t</Auth>\n\t\t\t\t\t</MuiPickersUtilsProvider>\n\t\t\t\t</Provider>\n\t\t\t</StylesProvider>\n\t\t</AppContext.Provider>\n\t);\n};\n\nexport default App;\n"},2666:function(t,e,n){"use strict";n.r(e);var r=n(116),o=n(196),s=n(0),a=n.n(s),m=n(25);e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{variant:"h4",className:"mb-24"},"FuseTheme"),a.a.createElement(o.a,{className:"mb-16",component:"p"},a.a.createElement("code",null,"FuseTheme")," is the theming component of the Fuse React. It allows us to change predefined Material UI themes. It should wrap the ",a.a.createElement("code",null,"FuseLayout")," component."),a.a.createElement(o.a,{className:"mb-16",component:"p"},a.a.createElement("code",null,"src/app/App.js")),a.a.createElement(r.a,{component:"pre",className:"language-jsx"},n(1508)),a.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h5"},"Configuration"),a.a.createElement(o.a,{className:"mb-16",component:"p"},"Please checkout",a.a.createElement(m.a,{className:"font-medium mx-4",to:"/documentation/theming/theme-schemes"},"theming"),"at documentation."))}}}]);