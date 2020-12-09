(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[131],{2601:function(t,n,a){"use strict";a.r(n),n.default="import { fuseDark, skyBlue } from '@fuse/colors';\nimport { lightBlue, red } from '@material-ui/core/colors';\n\nconst themesConfig = {\n\tdefault: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: fuseDark,\n\t\t\tsecondary: {\n\t\t\t\tlight: skyBlue[100],\n\t\t\t\tmain: skyBlue[500],\n\t\t\t\tdark: skyBlue[900]\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#f6f7f9'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdefaultDark: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: fuseDark,\n\t\t\tsecondary: {\n\t\t\t\tlight: skyBlue[100],\n\t\t\t\tmain: skyBlue[500],\n\t\t\t\tdark: skyBlue[900]\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#1E2125',\n\t\t\t\tdefault: '#121212'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlegacy: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: fuseDark,\n\t\t\tsecondary: {\n\t\t\t\tlight: lightBlue[400],\n\t\t\t\tmain: lightBlue[600],\n\t\t\t\tdark: lightBlue[700]\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#F7F7F7'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight1: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#b3d1d1',\n\t\t\t\tmain: '#006565',\n\t\t\t\tdark: '#003737'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#ffecc0',\n\t\t\t\tmain: '#FFBE2C',\n\t\t\t\tdark: '#ff9910',\n\t\t\t\tcontrastText: '#272727'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#F0F7F7'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight2: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#fdf3da',\n\t\t\t\tmain: '#f8d683',\n\t\t\t\tdark: '#f3bc53',\n\t\t\t\tcontrastText: '#252525'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#FADCB3',\n\t\t\t\tmain: '#F3B25F',\n\t\t\t\tdark: '#ec9339',\n\t\t\t\tcontrastText: '#252525'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FAFBFD',\n\t\t\t\tdefault: '#FFFFFF'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight3: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#D9C8CE',\n\t\t\t\tmain: '#80485B',\n\t\t\t\tdark: '#50212F'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#FFE3BF',\n\t\t\t\tmain: '#FFB049',\n\t\t\t\tdark: '#FF8619',\n\t\t\t\tcontrastText: '#252525'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFF0DF',\n\t\t\t\tdefault: '#FAFAFE'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight4: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#CDCCE8',\n\t\t\t\tmain: '#5854B1',\n\t\t\t\tdark: '#2D2988'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#F8EBF2',\n\t\t\t\tmain: '#E7BDD3',\n\t\t\t\tdark: '#D798B7',\n\t\t\t\tcontrastText: '#1E1F23'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#F6F7FB'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight5: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#C2C7F1',\n\t\t\t\tmain: '#3543D0',\n\t\t\t\tdark: '#161EB3'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#B3F1FE',\n\t\t\t\tmain: '#00CFFD',\n\t\t\t\tdark: '#00B2FC',\n\t\t\t\tcontrastText: '#1E1F23'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#F7FAFF'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight6: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#BBE2DA',\n\t\t\t\tmain: '#1B9E85',\n\t\t\t\tdark: '#087055'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#FFD0C1',\n\t\t\t\tmain: '#FF6231',\n\t\t\t\tdark: '#FF3413',\n\t\t\t\tcontrastText: '#FFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#F2F8F1'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight7: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#BFC4E6',\n\t\t\t\tmain: '#2A3BAB',\n\t\t\t\tdark: '#0F1980'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#C2ECF0',\n\t\t\t\tmain: '#33C1CD',\n\t\t\t\tdark: '#149EAE',\n\t\t\t\tcontrastText: '#1E1F23'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#EDF0F6'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight8: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#D2EFF2',\n\t\t\t\tmain: '#68C8D5',\n\t\t\t\tdark: '#3AA7BA'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#FFF2C6',\n\t\t\t\tmain: '#FED441',\n\t\t\t\tdark: '#FDB91C',\n\t\t\t\tcontrastText: '#1E1F23'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FAF6F3',\n\t\t\t\tdefault: '#FFFFFF'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight9: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#D3C0CD',\n\t\t\t\tmain: '#6B2C57',\n\t\t\t\tdark: '#3C102C'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#FDEAC9',\n\t\t\t\tmain: '#F9B84B',\n\t\t\t\tdark: '#F59123',\n\t\t\t\tcontrastText: '#1E1F23'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#FAFAFE'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight10: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#C6C9CD',\n\t\t\t\tmain: '#404B57',\n\t\t\t\tdark: '#1C232C'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#FEEDC7',\n\t\t\t\tmain: '#FCC344',\n\t\t\t\tdark: '#FAA11F',\n\t\t\t\tcontrastText: '#1E1F23'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#F5F4F6'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tlight11: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#C4C4C4',\n\t\t\t\tmain: '#3A3A3A',\n\t\t\t\tdark: '#181818'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#EFEFED',\n\t\t\t\tmain: '#CBCAC3',\n\t\t\t\tdark: '#ACABA1',\n\t\t\t\tcontrastText: '#1E1F23'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#EFEEE7',\n\t\t\t\tdefault: '#FAF8F2'\n\t\t\t},\n\t\t\terror: {\n\t\t\t\tlight: '#F7EAEA',\n\t\t\t\tmain: '#EBCECE',\n\t\t\t\tdark: '#E3B9B9'\n\t\t\t}\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'yellow'\n\t\t}\n\t},\n\tlight12: {\n\t\tpalette: {\n\t\t\ttype: 'light',\n\t\t\tprimary: {\n\t\t\t\tlight: '#FFFAF6',\n\t\t\t\tmain: '#FFEDE2',\n\t\t\t\tdark: '#FFE0CF'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#DBD8F7',\n\t\t\t\tmain: '#887CE3',\n\t\t\t\tdark: '#584CD0',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#FFFFFF',\n\t\t\t\tdefault: '#FCF8F5'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark1: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#C2C2C3',\n\t\t\t\tmain: '#323338',\n\t\t\t\tdark: '#131417'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#B8E1D9',\n\t\t\t\tmain: '#129B7F',\n\t\t\t\tdark: '#056D4F',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#262526',\n\t\t\t\tdefault: '#1E1D1E'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark2: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#C9CACE',\n\t\t\t\tmain: '#4B4F5A',\n\t\t\t\tdark: '#23262E'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#F8F5F2',\n\t\t\t\tmain: '#E6DED5',\n\t\t\t\tdark: '#D5C8BA',\n\t\t\t\tcontrastText: '#23262E'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#31343E',\n\t\t\t\tdefault: '#2A2D35'\n\t\t\t},\n\t\t\terror: {\n\t\t\t\tlight: '#F7EAEA',\n\t\t\t\tmain: '#EBCECE',\n\t\t\t\tdark: '#E3B9B9'\n\t\t\t}\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark3: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#C2C8D2',\n\t\t\t\tmain: '#354968',\n\t\t\t\tdark: '#16213A'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#F4CFCA',\n\t\t\t\tmain: '#D55847',\n\t\t\t\tdark: '#C03325',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#23354E',\n\t\t\t\tdefault: '#1B2A3F'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark4: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#CECADF',\n\t\t\t\tmain: '#5A4E93',\n\t\t\t\tdark: '#2E2564'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#B3EBD6',\n\t\t\t\tmain: '#00BC77',\n\t\t\t\tdark: '#009747',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#22184B',\n\t\t\t\tdefault: '#180F3D'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark5: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#CCD7E2',\n\t\t\t\tmain: '#56789D',\n\t\t\t\tdark: '#2B486F'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#D7D3ED',\n\t\t\t\tmain: '#796CC4',\n\t\t\t\tdark: '#493DA2',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#465261',\n\t\t\t\tdefault: '#232931'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark6: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#FFC7CE',\n\t\t\t\tmain: '#FF445D',\n\t\t\t\tdark: '#FF1F30'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#B4E3FB',\n\t\t\t\tmain: '#05A2F3',\n\t\t\t\tdark: '#0175EA',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#2F3438',\n\t\t\t\tdefault: '#25292E'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark7: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: 'FFECC5',\n\t\t\t\tmain: '#FEBE3E',\n\t\t\t\tdark: '#FD991B'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#FFC8C7',\n\t\t\t\tmain: '#FE4644',\n\t\t\t\tdark: '#FD201F',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#2A2E32',\n\t\t\t\tdefault: '#212529'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark8: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#BEBFC8',\n\t\t\t\tmain: '#252949',\n\t\t\t\tdark: '#0D0F21'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#CBD7FE',\n\t\t\t\tmain: '#5079FC',\n\t\t\t\tdark: '#2749FA',\n\t\t\t\tcontrastText: '#1A1E22'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#2D3159',\n\t\t\t\tdefault: '#202441'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark9: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#BCC8CD',\n\t\t\t\tmain: '#204657',\n\t\t\t\tdark: '#0B202C'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#B3EBC5',\n\t\t\t\tmain: '#00BD3E',\n\t\t\t\tdark: '#00981B',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#1C1E27',\n\t\t\t\tdefault: '#15171E'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark10: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#C3C2D2',\n\t\t\t\tmain: '#36336A',\n\t\t\t\tdark: '#16143C'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#D6CEFC',\n\t\t\t\tmain: '#765CF5',\n\t\t\t\tdark: '#4630EE',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#2D2A5D',\n\t\t\t\tdefault: '#26244E'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark11: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#BFB7BF',\n\t\t\t\tmain: '#2A0F29',\n\t\t\t\tdark: '#0F040F'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#D9B9C3',\n\t\t\t\tmain: '#801737',\n\t\t\t\tdark: '#500716',\n\t\t\t\tcontrastText: '#FFFFFF'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#200D1F',\n\t\t\t\tdefault: '#2D132C'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t},\n\tdark12: {\n\t\tpalette: {\n\t\t\ttype: 'dark',\n\t\t\tprimary: {\n\t\t\t\tlight: '#CCC3C8',\n\t\t\t\tmain: '#543847',\n\t\t\t\tdark: '#291720'\n\t\t\t},\n\t\t\tsecondary: {\n\t\t\t\tlight: '#DFB8BD',\n\t\t\t\tmain: '#BE717A',\n\t\t\t\tdark: '#99424A',\n\t\t\t\tcontrastText: '#1a161c'\n\t\t\t},\n\t\t\tbackground: {\n\t\t\t\tpaper: '#4D4351',\n\t\t\t\tdefault: '#27141F'\n\t\t\t},\n\t\t\terror: red\n\t\t},\n\t\tstatus: {\n\t\t\tdanger: 'orange'\n\t\t}\n\t}\n};\n\nexport default themesConfig;\n"},2748:function(t,n,a){"use strict";a.r(n);var r=a(116),e=a(196),F=a(0),d=a.n(F);n.default=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(e.a,{variant:"h4",className:"mb-24"},"Theme Schemes"),d.a.createElement(e.a,{className:"mb-16",component:"p"},"The Fuse React uses material-ui's theming by default. You can create theme color schemes with defining theme configuration objects."),d.a.createElement(e.a,{className:"mb-8",variant:"h5"},"Configuration"),d.a.createElement(e.a,{className:"mb-16",component:"p"},"For the configuration options checkout"," ",d.a.createElement("a",{href:"https://material-ui-next.com/customization/themes/",target:"_blank",rel:"noopener noreferrer"},"Material UI's theme configuration options.")),d.a.createElement(e.a,{className:"mb-16",component:"p"},"Theme configurations are located at ",d.a.createElement("code",null,"src/app/fuse-configs/themesConfig.js")," file."),d.a.createElement(r.a,{component:"pre",className:"language-jsx"},a(2601)))}}}]);