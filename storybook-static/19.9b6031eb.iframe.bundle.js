"use strict";(self.webpackChunkpintechproject=self.webpackChunkpintechproject||[]).push([[19],{"./components/LandingPage/Features/Feature/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Features_Feature});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),lib=__webpack_require__("./node_modules/react-icons/lib/index.mjs");function BsRobot(props){return(0,lib.k5)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"},child:[]},{tag:"path",attr:{d:"M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"},child:[]}]})(props)}var use_motion_value=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),use_motion_template=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-template.mjs"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");let t,_=t=>t;const Feature=({id,title,description})=>{const offsetX=(0,use_motion_value.d)(-100),offsetY=(0,use_motion_value.d)(-100),maskImage=(0,use_motion_template.E)(t||(t=_`radial-gradient(100px 100px at ${0}px ${0}px, black, transparent)`),offsetX,offsetY),border=(0,react.useRef)(null);return(0,react.useEffect)((()=>{const updateMousePosition=e=>{var _border_current;if(!border.current)return;const borderRect=null===(_border_current=border.current)||void 0===_border_current?void 0:_border_current.getBoundingClientRect();offsetX.set(e.x-borderRect.x),offsetY.set(e.y-borderRect.y)};return window.addEventListener("mousemove",updateMousePosition),()=>{window.removeEventListener("mousemove",updateMousePosition)}}),[offsetX,offsetY]),(0,jsx_runtime.jsxs)("div",{className:"border border-white/30 px-5 py-10 text-center rounded-xl flex-1 sm:max-w-sm relative ",children:[(0,jsx_runtime.jsx)(proxy.P.div,{className:"absolute inset-0 border-4 border-blue-500 rounded-xl",style:{WebkitMaskImage:maskImage,maskImage},ref:border}),(0,jsx_runtime.jsx)(proxy.P.div,{className:"inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg",initial:{opacity:0},whileInView:{opacity:1},children:(0,jsx_runtime.jsx)(BsRobot,{})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{className:"mt-6 font-bold",children:title}),(0,jsx_runtime.jsx)("p",{className:"mt-2 text-white/70",children:description})]})]},id)},Features_Feature=Feature;Feature.__docgenInfo={description:"",methods:[],displayName:"Feature",props:{id:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}}},"./node_modules/framer-motion/dist/es/value/use-combine-values.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useCombineMotionValues});var _use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useCombineMotionValues(values,combineValues){const value=(0,_use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(combineValues()),updateValue=()=>value.set(combineValues());return updateValue(),(0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.E)((()=>{const scheduleUpdate=()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Gt.preRender(updateValue,!1,!0),subscriptions=values.map((v=>v.on("change",scheduleUpdate)));return()=>{subscriptions.forEach((unsubscribe=>unsubscribe())),(0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.WG)(updateValue)}})),value}},"./node_modules/framer-motion/dist/es/value/use-motion-template.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>useMotionTemplate});var _use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-combine-values.mjs"),_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function useMotionTemplate(fragments,...values){const numFragments=fragments.length;return(0,_use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(values.filter(_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.S),(function buildValue(){let output="";for(let i=0;i<numFragments;i++){output+=fragments[i];const value=values[i];value&&(output+=(0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.S)(value)?value.get():value)}return output}))}},"./node_modules/framer-motion/dist/es/value/use-motion-value.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>useMotionValue});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs"),_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");function useMotionValue(initial){const value=(0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__.M)((()=>(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.OQ)(initial))),{isStatic}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__.Q);if(isStatic){const[,setLatest]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>value.on("change",setLatest)),[])}return value}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k5:()=>GenIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={};for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key)){if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}}}]);