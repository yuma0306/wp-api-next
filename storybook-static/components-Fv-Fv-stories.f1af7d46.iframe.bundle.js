"use strict";(self.webpackChunknext=self.webpackChunknext||[]).push([[961],{"./src/components/Fv/Fv.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Fv_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Fv_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Fv/Fv.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Fv_module.A,options);const Fv_Fv_module=Fv_module.A&&Fv_module.A.locals?Fv_module.A.locals:void 0;function Fv({children}){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:Fv_Fv_module.fv,children})})}Fv.__docgenInfo={description:"",methods:[],displayName:"Fv",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var HeadingLv1_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/HeadingLv1/HeadingLv1.module.scss"),HeadingLv1_module_options={};HeadingLv1_module_options.styleTagTransform=styleTagTransform_default(),HeadingLv1_module_options.setAttributes=setAttributesWithoutAttributes_default(),HeadingLv1_module_options.insert=insertBySelector_default().bind(null,"head"),HeadingLv1_module_options.domAPI=styleDomAPI_default(),HeadingLv1_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(HeadingLv1_module.A,HeadingLv1_module_options);const HeadingLv1_HeadingLv1_module=HeadingLv1_module.A&&HeadingLv1_module.A.locals?HeadingLv1_module.A.locals:void 0;function HeadingLv1({children,addClass}){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("h1",{className:`${HeadingLv1_HeadingLv1_module.headingLv1} ${addClass||""}`,children})})}HeadingLv1.__docgenInfo={description:"",methods:[],displayName:"HeadingLv1",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}};var WpImg=__webpack_require__("./src/components/WpImg/WpImg.tsx");const Fv_stories={title:"Components/Fv",component:Fv,parameters:{layout:"centered"},tags:["autodocs"]},Primary={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(HeadingLv1,{children:"見出し1見出し1"}),(0,jsx_runtime.jsx)(WpImg.A,{imgID:5250})]})}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <HeadingLv1>見出し1見出し1</HeadingLv1>\n        <WpImg imgID={5250} />\n      </>\n  }\n}",...Primary.parameters?.docs?.source},description:{story:"FVのデフォルトスタイル",...Primary.parameters?.docs?.description}}}},"./src/components/WpImg/WpImg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>WpImg});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),wp=__webpack_require__("./src/constants/wp.ts");const fetchImg=async imgID=>{const res=await fetch(`${wp.Hc}/wp-json/wp/v2/media/${imgID}/`),data=await res.json();return{file:data.media_details.file,width:data.media_details.width,height:data.media_details.height,alt:data.alt_text}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),WpImg_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/WpImg/WpImg.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(WpImg_module.A,options);const WpImg_WpImg_module=WpImg_module.A&&WpImg_module.A.locals?WpImg_module.A.locals:void 0;function WpImg({imgID}){const[imageFile,setImageFile]=(0,react.useState)(null),[imageFileName,setImageFileName]=(0,react.useState)(null),[imageDimensions,setImageDimensions]=(0,react.useState)(null),[altText,setAltText]=(0,react.useState)("");return(0,react.useEffect)((()=>{(async()=>{const mediaDetails=await fetchImg(imgID);setImageFile(mediaDetails.file),setImageFileName(mediaDetails.file.split("/").pop()),setImageDimensions({width:mediaDetails.width,height:mediaDetails.height}),setAltText(mediaDetails.alt)})()}),[imgID]),imageFile&&imageDimensions?(0,jsx_runtime.jsx)("picture",{className:`${WpImg_WpImg_module.wpImg}`,children:(0,jsx_runtime.jsx)(next_image.A,{src:`/img/${imageFileName}`,alt:altText,width:imageDimensions.width,height:imageDimensions.height})}):null}WpImg.__docgenInfo={description:"Export default",methods:[],displayName:"WpImg",props:{imgID:{required:!0,tsType:{name:"number"},description:""}}}},"./src/constants/wp.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hc:()=>host});const host="https://dorango-farm.com"},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Fv/Fv.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media screen and (min-width: 640px){.Fv_fv__Uun9a{position:relative;max-width:900px;margin:0 auto}}@media screen and (max-width: 639px){.Fv_fv__Uun9a{position:relative;width:100%}}","",{version:3,sources:["webpack://./src/styles/global/mixin/_media.scss","webpack://./src/components/Fv/Fv.module.scss"],names:[],mappings:"AAGI,qCCCF,cACE,iBAAA,CACA,eAAA,CACA,aAAA,CAAA,CDQA,qCCHF,cACE,iBAAA,CACA,UAAA,CAAA",sourcesContent:["@use '../../config/import' as *;\n\n@mixin pc {\n    @media screen and (min-width: $mediaPc) {\n        @content;\n    }\n}\n\n@mixin tab {\n\t@media screen and (max-width: $mediaTab) and (min-width: $mediaPc) {\n\t\t@content;\n\t}\n}\n\n@mixin sp {\n    @media screen and (max-width: $mediaSp) {\n        @content;\n    }\n}\n","@media screen and (min-width: 640px){.fv{position:relative;max-width:900px;margin:0 auto}}@media screen and (max-width: 639px){.fv{position:relative;width:100%}}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={fv:"Fv_fv__Uun9a"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/HeadingLv1/HeadingLv1.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media screen and (min-width: 640px){.HeadingLv1_headingLv1__M9iRB{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;padding:20px;background:linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1));font-size:30px;text-align:center;font-weight:700;text-shadow:0 0 1px #fff}}@media screen and (max-width: 639px){.HeadingLv1_headingLv1__M9iRB{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;padding:5.1282051282vw;background:linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1));font-size:7.6923076923vw;text-align:center;font-weight:700;text-shadow:0 0 1px #fff}}","",{version:3,sources:["webpack://./src/styles/global/mixin/_media.scss","webpack://./src/components/HeadingLv1/HeadingLv1.module.scss","webpack://./src/styles/config/_font.scss"],names:[],mappings:"AAGI,qCCCF,8BACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,UAAA,CACA,YAAA,CACA,kHAAA,CACA,cCPK,CDQL,iBAAA,CACA,eCSK,CDRL,wBAAA,CAAA,CAAA,qCAKF,8BACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,UAAA,CACA,sBAAA,CACA,kHAAA,CACA,wBCfK,CDgBL,iBAAA,CACA,eCPK,CDQL,wBAAA,CAAA",sourcesContent:["@use '../../config/import' as *;\n\n@mixin pc {\n    @media screen and (min-width: $mediaPc) {\n        @content;\n    }\n}\n\n@mixin tab {\n\t@media screen and (max-width: $mediaTab) and (min-width: $mediaPc) {\n\t\t@content;\n\t}\n}\n\n@mixin sp {\n    @media screen and (max-width: $mediaSp) {\n        @content;\n    }\n}\n","@media screen and (min-width: 640px){.headingLv1{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;padding:20px;background:linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1));font-size:30px;text-align:center;font-weight:700;text-shadow:0 0 1px #fff}}@media screen and (max-width: 639px){.headingLv1{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;padding:5.1282051282vw;background:linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1));font-size:7.6923076923vw;text-align:center;font-weight:700;text-shadow:0 0 1px #fff}}","// font-size PC\n$fzSmallPC: 14px;\n$fzBasePC: 16px;\n$fzMediumPC: 22px;\n$fzLargePC: 26px;\n$fzXLPC: 30px;\n$fzXXLPC: 34px;\n\n// font-size SP\n$fzSmallSP: calc(1vw * 14 / 390 * 100);\n$fzBaseSP: calc(1vw * 16 / 390 * 100);\n$fzMediumSP: calc(1vw * 22 / 390 * 100);\n$fzLargeSP: calc(1vw * 26 / 390 * 100);\n$fzXLSP: calc(1vw * 30 / 390 * 100);\n$fzXXLSP: calc(1vw * 34 / 390 * 100);\n\n$fzSmall: 14;\n$fzBase: 16;\n$fzMedium: 18;\n$fzLarge: 22;\n$fzXL: 30;\n\n// font-weight\n$fwBold: 700;\n$fwMedium: 500;\n$fwNormal: 400;\n\n// line-height\n$lhFlat: 1;\n$lhSmall: 1.4;\n$lhBase: 1.8;\n\n// letter-speacing\n$lsBase: .04em;\n$lsMedium: .06em;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={headingLv1:"HeadingLv1_headingLv1__M9iRB"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/WpImg/WpImg.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media screen and (min-width: 640px){.WpImg_wpImg__2hBhW{display:block;aspect-ratio:16/9;overflow:hidden;text-align:center}.WpImg_wpImg__2hBhW img{width:100%;height:100%}}@media screen and (max-width: 639px){.WpImg_wpImg__2hBhW{display:block;aspect-ratio:16/9;text-align:center}.WpImg_wpImg__2hBhW img{width:100%;height:100%}}","",{version:3,sources:["webpack://./src/styles/global/mixin/_media.scss","webpack://./src/components/WpImg/WpImg.module.scss"],names:[],mappings:"AAGI,qCCCH,oBACC,aAAA,CACE,iBAAA,CACA,eAAA,CACA,iBAAA,CACA,wBACE,UAAA,CACA,WAAA,CAAA,CDIF,qCCEH,oBACC,aAAA,CACE,iBAAA,CACA,iBAAA,CACA,wBACE,UAAA,CACA,WAAA,CAAA",sourcesContent:["@use '../../config/import' as *;\n\n@mixin pc {\n    @media screen and (min-width: $mediaPc) {\n        @content;\n    }\n}\n\n@mixin tab {\n\t@media screen and (max-width: $mediaTab) and (min-width: $mediaPc) {\n\t\t@content;\n\t}\n}\n\n@mixin sp {\n    @media screen and (max-width: $mediaSp) {\n        @content;\n    }\n}\n","@media screen and (min-width: 640px){.wpImg{display:block;aspect-ratio:16/9;overflow:hidden;text-align:center}.wpImg img{width:100%;height:100%}}@media screen and (max-width: 639px){.wpImg{display:block;aspect-ratio:16/9;text-align:center}.wpImg img{width:100%;height:100%}}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wpImg:"WpImg_wpImg__2hBhW"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);