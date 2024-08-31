"use strict";(self.webpackChunknext=self.webpackChunknext||[]).push([[367],{"./src/components/Faq/Faq.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Faq_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FaqItem_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/FaqItem/FaqItem.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FaqItem_module.A,options);const FaqItem_FaqItem_module=FaqItem_module.A&&FaqItem_module.A.locals?FaqItem_module.A.locals:void 0;function FaqItem({question,answer}){const[isActive,setIsActive]=(0,react.useState)(!1),refAnswer=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)("dl",{className:`${FaqItem_FaqItem_module.faqItem} ${isActive?FaqItem_FaqItem_module["faqItem--isActive"]:""}`,onClick:()=>{setIsActive(!isActive)},children:[(0,jsx_runtime.jsxs)("dt",{className:FaqItem_FaqItem_module.faqItem__question,children:[question,(0,jsx_runtime.jsx)("span",{className:FaqItem_FaqItem_module.faqItem__icon})]}),(0,jsx_runtime.jsx)("dd",{className:FaqItem_FaqItem_module.faqItem__answer,ref:refAnswer,style:{height:isActive&&refAnswer.current?`${refAnswer.current.scrollHeight}px`:"0px"},children:answer})]})}FaqItem.__docgenInfo={description:"",methods:[],displayName:"FaqItem",props:{question:{required:!0,tsType:{name:"intersection['acf']['tool_faq'][0]['tool_faq_question']",raw:"PostType['acf']['tool_faq'][0]['tool_faq_question']"},description:""},answer:{required:!0,tsType:{name:"intersection['acf']['tool_faq'][0]['tool_faq_answer']",raw:"PostType['acf']['tool_faq'][0]['tool_faq_answer']"},description:""}}};var Faq_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Faq/Faq.module.scss"),Faq_module_options={};Faq_module_options.styleTagTransform=styleTagTransform_default(),Faq_module_options.setAttributes=setAttributesWithoutAttributes_default(),Faq_module_options.insert=insertBySelector_default().bind(null,"head"),Faq_module_options.domAPI=styleDomAPI_default(),Faq_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Faq_module.A,Faq_module_options);const Faq_Faq_module=Faq_module.A&&Faq_module.A.locals?Faq_module.A.locals:void 0;var console=__webpack_require__("./node_modules/console-browserify/index.js");function Faq({faq}){return console.log(faq),(0,jsx_runtime.jsx)("div",{className:Faq_Faq_module.faq,children:faq.map(((item,index)=>(0,jsx_runtime.jsx)(FaqItem,{question:item.tool_faq_question,answer:item.tool_faq_answer},index)))})}Faq.__docgenInfo={description:"",methods:[],displayName:"Faq",props:{faq:{required:!0,tsType:{name:"intersection['acf']['tool_faq']",raw:"PostType['acf']['tool_faq']"},description:""}}};const Faq_stories={title:"Components/Faq",component:Faq,parameters:{layout:"centered"},tags:["autodocs"]},Primary={args:{faq:[{tool_faq_question:"クロードは使えますか？",tool_faq_answer:"もちろんクロードを使用してコーディングができます。"},{tool_faq_question:"GPT4-oは使えますか？",tool_faq_answer:"もちろんGPT4-oを使用してコーディングができます。"}]}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    faq: (sampleData as PostType['acf']['tool_faq'])\n  }\n}",...Primary.parameters?.docs?.source},description:{story:"FAQのデフォルトスタイル",...Primary.parameters?.docs?.description}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Faq/Faq.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media screen and (min-width: 640px){.Faq_faq__eX5TU{border-bottom:1px solid #155e75}}@media screen and (max-width: 639px){.Faq_faq__eX5TU{border-bottom:1px solid #155e75}}","",{version:3,sources:["webpack://./src/styles/global/mixin/_media.scss","webpack://./src/components/Faq/Faq.module.scss"],names:[],mappings:"AAGI,qCCCF,gBAEE,+BAAA,CAAA,CDSA,qCCJF,gBAEE,+BAAA,CAAA",sourcesContent:["@use '../../config/import' as *;\n\n@mixin pc {\n    @media screen and (min-width: $mediaPc) {\n        @content;\n    }\n}\n\n@mixin tab {\n\t@media screen and (max-width: $mediaTab) and (min-width: $mediaPc) {\n\t\t@content;\n\t}\n}\n\n@mixin sp {\n    @media screen and (max-width: $mediaSp) {\n        @content;\n    }\n}\n","@media screen and (min-width: 640px){.faq{border-bottom:1px solid #155e75}}@media screen and (max-width: 639px){.faq{border-bottom:1px solid #155e75}}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={faq:"Faq_faq__eX5TU"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/FaqItem/FaqItem.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@media screen and (min-width: 640px){.FaqItem_faqItem__GvijY{display:grid;row-gap:0;padding:24px;border-top:1px solid #155e75;cursor:pointer}.FaqItem_faqItem--isActive__kVVYz{row-gap:12px}.FaqItem_faqItem--isActive__kVVYz .FaqItem_faqItem__answer__CNdMx{opacity:1;visibility:visible}.FaqItem_faqItem--isActive__kVVYz .FaqItem_faqItem__icon__s6MUc{transform:translateY(-50%) rotate(180deg)}.FaqItem_faqItem__question__Fx8s3{position:relative;font-size:18px;font-weight:500;padding-right:24px}.FaqItem_faqItem__answer__CNdMx{overflow:hidden;transition:.3s height;visibility:hidden;opacity:0}.FaqItem_faqItem__icon__s6MUc{position:absolute;top:50%;right:0;transform:translateY(-50%);display:inline-block;vertical-align:middle;color:#155e75;line-height:1;width:24px;height:24px;background:currentColor;border-radius:50%;box-sizing:content-box;transition:.3s transform}.FaqItem_faqItem__icon__s6MUc::before{content:"";width:10px;height:8px;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);background:#fff;position:absolute;top:52%;left:50%;transform:translate(-50%, -50%)}}@media screen and (max-width: 639px){.FaqItem_faqItem__GvijY{display:grid;row-gap:0;padding:6.1538461538vw;border-top:1px solid #155e75;cursor:pointer}.FaqItem_faqItem--isActive__kVVYz{row-gap:3.0769230769vw}.FaqItem_faqItem--isActive__kVVYz .FaqItem_faqItem__answer__CNdMx{opacity:1;visibility:visible}.FaqItem_faqItem--isActive__kVVYz .FaqItem_faqItem__icon__s6MUc{transform:translateY(-50%) rotate(180deg)}.FaqItem_faqItem__question__Fx8s3{position:relative;font-weight:500;padding-bottom:0;padding-right:6.1538461538vw}.FaqItem_faqItem__answer__CNdMx{overflow:hidden;transition:.3s height;visibility:hidden;opacity:0}.FaqItem_faqItem__icon__s6MUc{position:absolute;top:50%;right:0;transform:translateY(-50%);display:inline-block;vertical-align:middle;color:#155e75;line-height:1;width:6.1538461538vw;height:6.1538461538vw;background:currentColor;border-radius:50%;box-sizing:content-box;transition:.3s transform}.FaqItem_faqItem__icon__s6MUc::before{content:"";width:2.5641025641vw;height:2.0512820513vw;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);background:#fff;position:absolute;top:52%;left:50%;transform:translate(-50%, -50%)}}',"",{version:3,sources:["webpack://./src/styles/global/mixin/_media.scss","webpack://./src/components/FaqItem/FaqItem.module.scss","webpack://./src/styles/config/_font.scss","webpack://./src/styles/config/_color.scss"],names:[],mappings:"AAGI,qCCCF,wBAEE,YAAA,CACA,SAAA,CACA,YAAA,CACA,4BAAA,CACA,cAAA,CACA,kCACE,YAAA,CACA,kEACE,SAAA,CACA,kBAAA,CAEF,gEACE,yCAAA,CAGJ,kCACE,iBAAA,CACA,cAAA,CACA,eCFK,CDGL,kBAAA,CAEF,gCACE,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,SAAA,CAEF,8BACE,iBAAA,CACA,OAAA,CACA,OAAA,CACA,0BAAA,CACA,oBAAA,CACA,qBAAA,CACA,aErCM,CFsCN,aAAA,CACA,UAAA,CACA,WAAA,CACA,uBAAA,CACA,iBAAA,CACA,sBAAA,CACA,wBAAA,CACA,sCACE,UAAA,CACA,UAAA,CACA,UAAA,CACA,2CAAA,CACA,eErDE,CFsDF,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CAAA,CD1CJ,qCCiDF,wBAEE,YAAA,CACA,SAAA,CACA,sBAAA,CACA,4BAAA,CACA,cAAA,CACA,kCACE,sBAAA,CACA,kEACE,SAAA,CACA,kBAAA,CAEF,gEACE,yCAAA,CAGJ,kCACE,iBAAA,CACA,eC7DK,CD8DL,gBAAA,CACA,4BAAA,CAEF,gCACE,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,SAAA,CAEF,8BACE,iBAAA,CACA,OAAA,CACA,OAAA,CACA,0BAAA,CACA,oBAAA,CACA,qBAAA,CACA,aEjGM,CFkGN,aAAA,CACA,oBAAA,CACA,qBAAA,CACA,uBAAA,CACA,iBAAA,CACA,sBAAA,CACA,wBAAA,CACA,sCACE,UAAA,CACA,oBAAA,CACA,qBAAA,CACA,2CAAA,CACA,eEjHE,CFkHF,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CAAA",sourcesContent:["@use '../../config/import' as *;\n\n@mixin pc {\n    @media screen and (min-width: $mediaPc) {\n        @content;\n    }\n}\n\n@mixin tab {\n\t@media screen and (max-width: $mediaTab) and (min-width: $mediaPc) {\n\t\t@content;\n\t}\n}\n\n@mixin sp {\n    @media screen and (max-width: $mediaSp) {\n        @content;\n    }\n}\n",'@media screen and (min-width: 640px){.faqItem{display:grid;row-gap:0;padding:24px;border-top:1px solid #155e75;cursor:pointer}.faqItem--isActive{row-gap:12px}.faqItem--isActive .faqItem__answer{opacity:1;visibility:visible}.faqItem--isActive .faqItem__icon{transform:translateY(-50%) rotate(180deg)}.faqItem__question{position:relative;font-size:18px;font-weight:500;padding-right:24px}.faqItem__answer{overflow:hidden;transition:.3s height;visibility:hidden;opacity:0}.faqItem__icon{position:absolute;top:50%;right:0;transform:translateY(-50%);display:inline-block;vertical-align:middle;color:#155e75;line-height:1;width:24px;height:24px;background:currentColor;border-radius:50%;box-sizing:content-box;transition:.3s transform}.faqItem__icon::before{content:"";width:10px;height:8px;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);background:#fff;position:absolute;top:52%;left:50%;transform:translate(-50%, -50%)}}@media screen and (max-width: 639px){.faqItem{display:grid;row-gap:0;padding:6.1538461538vw;border-top:1px solid #155e75;cursor:pointer}.faqItem--isActive{row-gap:3.0769230769vw}.faqItem--isActive .faqItem__answer{opacity:1;visibility:visible}.faqItem--isActive .faqItem__icon{transform:translateY(-50%) rotate(180deg)}.faqItem__question{position:relative;font-weight:500;padding-bottom:0;padding-right:6.1538461538vw}.faqItem__answer{overflow:hidden;transition:.3s height;visibility:hidden;opacity:0}.faqItem__icon{position:absolute;top:50%;right:0;transform:translateY(-50%);display:inline-block;vertical-align:middle;color:#155e75;line-height:1;width:6.1538461538vw;height:6.1538461538vw;background:currentColor;border-radius:50%;box-sizing:content-box;transition:.3s transform}.faqItem__icon::before{content:"";width:2.5641025641vw;height:2.0512820513vw;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);background:#fff;position:absolute;top:52%;left:50%;transform:translate(-50%, -50%)}}',"// font-size PC\n$fzSmallPC: 14px;\n$fzBasePC: 16px;\n$fzMediumPC: 22px;\n$fzLargePC: 26px;\n$fzXLPC: 30px;\n\n// font-size SP\n$fzSmallSP: calc(1vw * 14 / 390 * 100);\n$fzBaseSP: calc(1vw * 16 / 390 * 100);\n$fzMediumSP: calc(1vw * 22 / 390 * 100);\n$fzLargeSP: calc(1vw * 26 / 390 * 100);\n$fzXLSP: calc(1vw * 30 / 390 * 100);\n\n$fzSmall: 14;\n$fzBase: 16;\n$fzMedium: 18;\n$fzLarge: 22;\n$fzXL: 30;\n\n// font-weight\n$fwBold: 700;\n$fwMedium: 500;\n$fwNormal: 400;\n\n// line-height\n$lhFlat: 1;\n$lhSmall: 1.4;\n$lhBase: 1.8;\n\n// letter-speacing\n$lsBase: .04em;\n$lsMedium: .06em;\n","$white01: #fff;\n$black01: #333;\n$primary01: #0991B1;\n$primary02: #155E75;\n$accentBg: linear-gradient(45deg, #f7820f, #f79821);\n$accentShadow: #b87019;\n$gray01: #ddd;\n$gray02: #666;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={faqItem:"FaqItem_faqItem__GvijY","faqItem--isActive":"FaqItem_faqItem--isActive__kVVYz",faqItem__answer:"FaqItem_faqItem__answer__CNdMx",faqItem__icon:"FaqItem_faqItem__icon__s6MUc",faqItem__question:"FaqItem_faqItem__question__Fx8s3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);