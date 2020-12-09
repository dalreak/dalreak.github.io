(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[168],{2752:function(t,e,a){"use strict";a.r(e);var n=a(116),l=a(196),s=a(0),m=a.n(s);e.default=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(l.a,{variant:"h4",className:"mb-24"},"Changing default font"),m.a.createElement(l.a,{className:"mb-16",component:"p"},"There is two way to inject font-family."),m.a.createElement("ul",{className:"list-decimal ml-16"},m.a.createElement("li",null,m.a.createElement(l.a,{className:"mb-24"},"You can add the font link inside head of the public/index.html."),m.a.createElement(n.a,{component:"pre",className:"language-html mb-24"},'\n                          <link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=vietnamese" rel="stylesheet">\n                        ')),m.a.createElement("li",null,m.a.createElement(l.a,{className:"mb-24"},"You can install typeface font package and import like we do at src/index.js"),m.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},"\n                            import 'typeface-roboto';\n                        "))),m.a.createElement(l.a,{className:"mt-16 mb-8",component:"p"},"You need to add ",m.a.createElement("code",null,"typography.fontFamily")," values into the desired theme config at"," ",m.a.createElement("code",null,"src/app/fuse-configs/themesConfig")),m.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},"\n\t\t\t\t\tdefault    : {\n\t\t\t\t\t  typography: {\n\t\t\t\t\t\tfontFamily: [\n\t\t\t\t\t\t\t'Roboto',\n\t\t\t\t\t\t\t'\"Helvetica\"',\n\t\t\t\t\t\t\t'Arial',\n\t\t\t\t\t\t\t'sans-serif'\n\t\t\t\t\t\t].join(','),\n\t\t\t\t"),m.a.createElement(l.a,{className:"mt-16 mb-8",component:"p"},"There is also font-family assignment at ",m.a.createElement("code",null,"src/styles/index.css")),m.a.createElement(n.a,{component:"pre",className:"language-css mb-24"},"\n\t\t\t\t\thtml {\n\t\t\t\t\t\tfont-size: 62.5%;\n\t\t\t\t\t\tfont-family: Roboto, Helvetica Neue, Arial, sans-serif;\n\t\t\t\t\t\tbackground-color: #121212;\n\t\t\t\t\t}\n\t\t\t\t"))}}}]);