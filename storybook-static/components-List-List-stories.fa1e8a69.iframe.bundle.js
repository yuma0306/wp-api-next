"use strict";(self.webpackChunknext=self.webpackChunknext||[]).push([[749],{"./src/components/List/List.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>List_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const fetchImg=async imgID=>{const res=await fetch(`http://localhost/wp-json/wp/v2/media/${imgID}/`),data=await res.json();return{file:data.media_details.file,width:data.media_details.width,height:data.media_details.height,alt:data.alt_text}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),WpImg_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/WpImg/WpImg.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(WpImg_module.A,options);const WpImg_WpImg_module=WpImg_module.A&&WpImg_module.A.locals?WpImg_module.A.locals:void 0;function WpImg({imgID}){const[imageFile,setImageFile]=(0,react.useState)(null),[imageFileName,setImageFileName]=(0,react.useState)(null),[imageDimensions,setImageDimensions]=(0,react.useState)(null),[altText,setAltText]=(0,react.useState)("");return(0,react.useEffect)((()=>{(async()=>{const mediaDetails=await fetchImg(imgID);setImageFile(mediaDetails.file),setImageFileName(mediaDetails.file.split("/").pop()),setImageDimensions({width:mediaDetails.width,height:mediaDetails.height}),setAltText(mediaDetails.alt)})()}),[imgID]),imageFile&&imageDimensions?(0,jsx_runtime.jsx)("picture",{className:`${WpImg_WpImg_module.wpImg}`,children:(0,jsx_runtime.jsx)(next_image.A,{src:`/img/${imageFileName}`,alt:altText,width:imageDimensions.width,height:imageDimensions.height})}):null}WpImg.__docgenInfo={description:"Export default",methods:[],displayName:"WpImg",props:{imgID:{required:!0,tsType:{name:"number"},description:""}}};var WpEditor_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/WpEditor/WpEditor.module.scss"),WpEditor_module_options={};WpEditor_module_options.styleTagTransform=styleTagTransform_default(),WpEditor_module_options.setAttributes=setAttributesWithoutAttributes_default(),WpEditor_module_options.insert=insertBySelector_default().bind(null,"head"),WpEditor_module_options.domAPI=styleDomAPI_default(),WpEditor_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(WpEditor_module.A,WpEditor_module_options);const WpEditor_WpEditor_module=WpEditor_module.A&&WpEditor_module.A.locals?WpEditor_module.A.locals:void 0;function WpEditor({children,addClass}){return(0,jsx_runtime.jsx)("div",{className:`${WpEditor_WpEditor_module.wpEditor} ${addClass||""}`,dangerouslySetInnerHTML:{__html:`${children}`||""}})}WpEditor.__docgenInfo={description:"",methods:[],displayName:"WpEditor",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}};var List_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/List/List.module.scss"),List_module_options={};List_module_options.styleTagTransform=styleTagTransform_default(),List_module_options.setAttributes=setAttributesWithoutAttributes_default(),List_module_options.insert=insertBySelector_default().bind(null,"head"),List_module_options.domAPI=styleDomAPI_default(),List_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(List_module.A,List_module_options);const List_List_module=List_module.A&&List_module.A.locals?List_module.A.locals:void 0;function List({list}){return(0,jsx_runtime.jsx)("ul",{className:List_List_module.list,children:list.map(((item,index)=>(0,jsx_runtime.jsxs)("li",{className:`${List_List_module.list__item}`,children:[(0,jsx_runtime.jsx)("div",{className:List_List_module.list__block,children:(0,jsx_runtime.jsx)(WpImg,{imgID:item.tool_feature_img})}),(0,jsx_runtime.jsxs)("dl",{className:List_List_module.list__dl,children:[(0,jsx_runtime.jsx)("dt",{className:List_List_module.list__term,children:item.tool_feature_title}),(0,jsx_runtime.jsx)("dd",{className:List_List_module.list__desc,children:(0,jsx_runtime.jsx)(WpEditor,{children:item.tool_feature_desc})})]})]},index)))})}List.__docgenInfo={description:"Export default",methods:[],displayName:"List",props:{list:{required:!0,tsType:{name:"intersection['acf']['tool_feature']",raw:"PostType['acf']['tool_feature']"},description:""}}};const List_stories={title:"Components/List",component:List,parameters:{layout:"centered"},tags:["autodocs"]},Primary={args:{list:[{tool_feature_title:"ボタン1つでLAMP環境を構築",tool_feature_desc:"ボタン1つで簡単にLAPMP環境が作成可能です。PHPのバージョンも選んで切り替えができる為、本番環境とバージョンを一致させて開発することができます。",tool_feature_img:124},{tool_feature_title:"ボタン1つでLAMP環境を構築",tool_feature_desc:"ボタン1つで簡単にLAPMP環境が作成可能です。PHPのバージョンも選んで切り替えができる為、本番環境とバージョンを一致させて開発することができます。",tool_feature_img:124}]}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    list: (sampleData as PostType['acf']['tool_feature'])\n  }\n}",...Primary.parameters?.docs?.source},description:{story:"見出しのデフォルトスタイル",...Primary.parameters?.docs?.description}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/List/List.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media screen and (min-width: 640px){.List_list__zLjGi{display:grid;gap:48px}.List_list__item__w_BkU{display:flex;gap:24px}.List_list__item__w_BkU:nth-child(even){flex-direction:row-reverse}.List_list__block__JMJo_{flex:1;max-width:640px;margin:0 auto;text-align:center}.List_list__dl__HQ2XH{flex:1}.List_list__term__r_ggT{font-size:22px;font-weight:700}.List_list__desc__Hlj0Y{margin-top:12px}}@media screen and (max-width: 768px)and (min-width: 640px){.List_list__item__w_BkU{flex-direction:column}.List_list__item__w_BkU:nth-child(even){flex-direction:column}}@media screen and (max-width: 639px){.List_list__zLjGi{display:grid;gap:12.3076923077vw}.List_list__item__w_BkU{display:grid;gap:3.0769230769vw}.List_list__term__r_ggT{font-size:5.641025641vw;font-weight:700}.List_list__desc__Hlj0Y{margin-top:3.0769230769vw}}","",{version:3,sources:["webpack://./src/styles/global/mixin/_media.scss","webpack://./src/components/List/List.module.scss","webpack://./src/styles/config/_font.scss"],names:[],mappings:"AAGI,qCCCF,kBACE,YAAA,CACA,QAAA,CACA,wBACE,YAAA,CACA,QAAA,CACA,wCACE,0BAAA,CAGJ,yBACE,MAAA,CACA,eAAA,CACA,aAAA,CACA,iBAAA,CAEF,sBACE,MAAA,CAEF,wBACE,cAAA,CACA,eCJG,CDML,wBACE,eAAA,CAAA,CDnBL,2DC0BG,wBACE,qBAAA,CACA,wCACE,qBAAA,CAAA,CDvBJ,qCC8BF,kBACE,YAAA,CACA,mBAAA,CACA,wBACE,YAAA,CACA,kBAAA,CAEF,wBACE,uBAAA,CACA,eCjCG,CDmCL,wBACE,yBAAA,CAAA",sourcesContent:["@use '../../config/import' as *;\n\n@mixin pc {\n    @media screen and (min-width: $mediaPc) {\n        @content;\n    }\n}\n\n@mixin tab {\n\t@media screen and (max-width: $mediaTab) and (min-width: $mediaPc) {\n\t\t@content;\n\t}\n}\n\n@mixin sp {\n    @media screen and (max-width: $mediaSp) {\n        @content;\n    }\n}\n","@media screen and (min-width: 640px){.list{display:grid;gap:48px}.list__item{display:flex;gap:24px}.list__item:nth-child(even){flex-direction:row-reverse}.list__block{flex:1;max-width:640px;margin:0 auto;text-align:center}.list__dl{flex:1}.list__term{font-size:22px;font-weight:700}.list__desc{margin-top:12px}}@media screen and (max-width: 768px)and (min-width: 640px){.list__item{flex-direction:column}.list__item:nth-child(even){flex-direction:column}}@media screen and (max-width: 639px){.list{display:grid;gap:12.3076923077vw}.list__item{display:grid;gap:3.0769230769vw}.list__term{font-size:5.641025641vw;font-weight:700}.list__desc{margin-top:3.0769230769vw}}","// font-size PC\n$fzSmallPC: 14px;\n$fzBasePC: 16px;\n$fzMediumPC: 22px;\n$fzLargePC: 26px;\n$fzXLPC: 30px;\n\n// font-size SP\n$fzSmallSP: calc(1vw * 14 / 390 * 100);\n$fzBaseSP: calc(1vw * 16 / 390 * 100);\n$fzMediumSP: calc(1vw * 22 / 390 * 100);\n$fzLargeSP: calc(1vw * 26 / 390 * 100);\n$fzXLSP: calc(1vw * 30 / 390 * 100);\n\n$fzSmall: 14;\n$fzBase: 16;\n$fzMedium: 18;\n$fzLarge: 22;\n$fzXL: 30;\n\n// font-weight\n$fwBold: 700;\n$fwMedium: 500;\n$fwNormal: 400;\n\n// line-height\n$lhFlat: 1;\n$lhSmall: 1.4;\n$lhBase: 1.8;\n\n// letter-speacing\n$lsBase: .04em;\n$lsMedium: .06em;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={list:"List_list__zLjGi",list__item:"List_list__item__w_BkU",list__block:"List_list__block__JMJo_",list__dl:"List_list__dl__HQ2XH",list__term:"List_list__term__r_ggT",list__desc:"List_list__desc__Hlj0Y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/WpEditor/WpEditor.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media screen and (min-width: 640px){.WpEditor_wpEditor__42fRT{display:block}}@media screen and (max-width: 639px){.WpEditor_wpEditor__42fRT{display:block}}","",{version:3,sources:["webpack://./src/styles/global/mixin/_media.scss","webpack://./src/components/WpEditor/WpEditor.module.scss"],names:[],mappings:"AAGI,qCCCH,0BACC,aAAA,CAAA,CDUE,qCCLH,0BACC,aAAA,CAAA",sourcesContent:["@use '../../config/import' as *;\n\n@mixin pc {\n    @media screen and (min-width: $mediaPc) {\n        @content;\n    }\n}\n\n@mixin tab {\n\t@media screen and (max-width: $mediaTab) and (min-width: $mediaPc) {\n\t\t@content;\n\t}\n}\n\n@mixin sp {\n    @media screen and (max-width: $mediaSp) {\n        @content;\n    }\n}\n","@media screen and (min-width: 640px){.wpEditor{display:block}}@media screen and (max-width: 639px){.wpEditor{display:block}}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wpEditor:"WpEditor_wpEditor__42fRT"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/WpImg/WpImg.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media screen and (min-width: 640px){.WpImg_wpImg__2hBhW{display:block;aspect-ratio:16/9;overflow:hidden}.WpImg_wpImg__2hBhW img{height:100%}}@media screen and (max-width: 639px){.WpImg_wpImg__2hBhW{display:block;aspect-ratio:16/9}.WpImg_wpImg__2hBhW img{height:100%}}","",{version:3,sources:["webpack://./src/styles/global/mixin/_media.scss","webpack://./src/components/WpImg/WpImg.module.scss"],names:[],mappings:"AAGI,qCCCH,oBACC,aAAA,CACE,iBAAA,CACA,eAAA,CACA,wBACE,WAAA,CAAA,CDMF,qCAAA,oBCCF,aAAA,CACE,iBAAA,CACA,wBACE,WAAA,CAAA",sourcesContent:["@use '../../config/import' as *;\n\n@mixin pc {\n    @media screen and (min-width: $mediaPc) {\n        @content;\n    }\n}\n\n@mixin tab {\n\t@media screen and (max-width: $mediaTab) and (min-width: $mediaPc) {\n\t\t@content;\n\t}\n}\n\n@mixin sp {\n    @media screen and (max-width: $mediaSp) {\n        @content;\n    }\n}\n","@media screen and (min-width: 640px){.wpImg{display:block;aspect-ratio:16/9;overflow:hidden}.wpImg img{height:100%}}@media screen and (max-width: 639px){.wpImg{display:block;aspect-ratio:16/9}.wpImg img{height:100%}}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wpImg:"WpImg_wpImg__2hBhW"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);