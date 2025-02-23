"use strict";(self.webpackChunkpintechproject=self.webpackChunkpintechproject||[]).push([[376],{"./node_modules/framer-motion/dist/es/value/use-combine-values.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useCombineMotionValues});var _use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useCombineMotionValues(values,combineValues){const value=(0,_use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(combineValues()),updateValue=()=>value.set(combineValues());return updateValue(),(0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.E)((()=>{const scheduleUpdate=()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Gt.preRender(updateValue,!1,!0),subscriptions=values.map((v=>v.on("change",scheduleUpdate)));return()=>{subscriptions.forEach((unsubscribe=>unsubscribe())),(0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.WG)(updateValue)}})),value}},"./node_modules/framer-motion/dist/es/value/use-motion-value.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>useMotionValue});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs"),_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");function useMotionValue(initial){const value=(0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__.M)((()=>(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.OQ)(initial))),{isStatic}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__.Q);if(isStatic){const[,setLatest]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>value.on("change",setLatest)),[])}return value}},"./node_modules/framer-motion/dist/es/value/use-scroll.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useScroll});var value=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),errors=__webpack_require__("./node_modules/motion-utils/dist/es/errors.mjs"),es=__webpack_require__("./node_modules/motion-dom/dist/es/index.mjs"),noop=__webpack_require__("./node_modules/motion-utils/dist/es/noop.mjs"),frameloop_frame=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");function observeTimeline(update,timeline){let prevProgress;const onFrame=()=>{const{currentTime}=timeline,progress=(null===currentTime?0:currentTime.value)/100;prevProgress!==progress&&update(progress),prevProgress=progress};return frameloop_frame.Gt.update(onFrame,!0),()=>(0,frameloop_frame.WG)(onFrame)}const resizeHandlers=new WeakMap;let observer;function notifyTarget({target,contentRect,borderBoxSize}){var _a;null===(_a=resizeHandlers.get(target))||void 0===_a||_a.forEach((handler=>{handler({target,contentSize:contentRect,get size(){return function getElementSize(target,borderBoxSize){if(borderBoxSize){const{inlineSize,blockSize}=borderBoxSize[0];return{width:inlineSize,height:blockSize}}return target instanceof SVGElement&&"getBBox"in target?target.getBBox():{width:target.offsetWidth,height:target.offsetHeight}}(target,borderBoxSize)}})}))}function notifyAll(entries){entries.forEach(notifyTarget)}function resizeElement(target,handler){observer||function createResizeObserver(){"undefined"!=typeof ResizeObserver&&(observer=new ResizeObserver(notifyAll))}();const elements=(0,es.KJ)(target);return elements.forEach((element=>{let elementHandlers=resizeHandlers.get(element);elementHandlers||(elementHandlers=new Set,resizeHandlers.set(element,elementHandlers)),elementHandlers.add(handler),null==observer||observer.observe(element)})),()=>{elements.forEach((element=>{const elementHandlers=resizeHandlers.get(element);null==elementHandlers||elementHandlers.delete(handler),(null==elementHandlers?void 0:elementHandlers.size)||null==observer||observer.unobserve(element)}))}}const windowCallbacks=new Set;let windowResizeHandler;function resizeWindow(callback){return windowCallbacks.add(callback),windowResizeHandler||function createWindowResizeHandler(){windowResizeHandler=()=>{const size={width:window.innerWidth,height:window.innerHeight},info={target:window,size,contentSize:size};windowCallbacks.forEach((callback=>callback(info)))},window.addEventListener("resize",windowResizeHandler)}(),()=>{windowCallbacks.delete(callback),!windowCallbacks.size&&windowResizeHandler&&(windowResizeHandler=void 0)}}var progress=__webpack_require__("./node_modules/motion-utils/dist/es/progress.mjs"),velocity_per_second=__webpack_require__("./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs");const maxElapsed=50,createScrollInfo=()=>({time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}}),keys={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function updateAxisInfo(element,axisName,info,time){const axis=info[axisName],{length,position}=keys[axisName],prev=axis.current,prevTime=info.time;axis.current=element[`scroll${position}`],axis.scrollLength=element[`scroll${length}`]-element[`client${length}`],axis.offset.length=0,axis.offset[0]=0,axis.offset[1]=axis.scrollLength,axis.progress=(0,progress.q)(0,axis.scrollLength,axis.current);const elapsed=time-prevTime;axis.velocity=elapsed>maxElapsed?0:(0,velocity_per_second.f)(axis.current-prev,elapsed)}var clamp=__webpack_require__("./node_modules/framer-motion/dist/es/utils/clamp.mjs"),interpolate=__webpack_require__("./node_modules/framer-motion/dist/es/utils/interpolate.mjs"),offsets_default=__webpack_require__("./node_modules/framer-motion/dist/es/utils/offsets/default.mjs");const namedEdges={start:0,center:.5,end:1};function resolveEdge(edge,length,inset=0){let delta=0;if(edge in namedEdges&&(edge=namedEdges[edge]),"string"==typeof edge){const asNumber=parseFloat(edge);edge.endsWith("px")?delta=asNumber:edge.endsWith("%")?edge=asNumber/100:edge.endsWith("vw")?delta=asNumber/100*document.documentElement.clientWidth:edge.endsWith("vh")?delta=asNumber/100*document.documentElement.clientHeight:edge=asNumber}return"number"==typeof edge&&(delta=length*edge),inset+delta}const defaultOffset=[0,0];function resolveOffset(offset,containerLength,targetLength,targetInset){let offsetDefinition=Array.isArray(offset)?offset:defaultOffset,targetPoint=0,containerPoint=0;return"number"==typeof offset?offsetDefinition=[offset,offset]:"string"==typeof offset&&(offsetDefinition=(offset=offset.trim()).includes(" ")?offset.split(" "):[offset,namedEdges[offset]?offset:"0"]),targetPoint=resolveEdge(offsetDefinition[0],targetLength,targetInset),containerPoint=resolveEdge(offsetDefinition[1],containerLength),targetPoint-containerPoint}const ScrollOffset={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},point={x:0,y:0};function resolveOffsets(container,info,options){const{offset:offsetDefinition=ScrollOffset.All}=options,{target=container,axis="y"}=options,lengthLabel="y"===axis?"height":"width",inset=target!==container?function calcInset(element,container){const inset={x:0,y:0};let current=element;for(;current&&current!==container;)if(current instanceof HTMLElement)inset.x+=current.offsetLeft,inset.y+=current.offsetTop,current=current.offsetParent;else if("svg"===current.tagName){const svgBoundingBox=current.getBoundingClientRect();current=current.parentElement;const parentBoundingBox=current.getBoundingClientRect();inset.x+=svgBoundingBox.left-parentBoundingBox.left,inset.y+=svgBoundingBox.top-parentBoundingBox.top}else{if(!(current instanceof SVGGraphicsElement))break;{const{x,y}=current.getBBox();inset.x+=x,inset.y+=y;let svg=null,parent=current.parentNode;for(;!svg;)"svg"===parent.tagName&&(svg=parent),parent=current.parentNode;current=svg}}return inset}(target,container):point,targetSize=target===container?{width:container.scrollWidth,height:container.scrollHeight}:function getTargetSize(target){return"getBBox"in target&&"svg"!==target.tagName?target.getBBox():{width:target.clientWidth,height:target.clientHeight}}(target),containerSize={width:container.clientWidth,height:container.clientHeight};info[axis].offset.length=0;let hasChanged=!info[axis].interpolate;const numOffsets=offsetDefinition.length;for(let i=0;i<numOffsets;i++){const offset=resolveOffset(offsetDefinition[i],containerSize[lengthLabel],targetSize[lengthLabel],inset[axis]);hasChanged||offset===info[axis].interpolatorOffsets[i]||(hasChanged=!0),info[axis].offset[i]=offset}hasChanged&&(info[axis].interpolate=(0,interpolate.G)(info[axis].offset,(0,offsets_default.Z)(offsetDefinition),{clamp:!1}),info[axis].interpolatorOffsets=[...info[axis].offset]),info[axis].progress=(0,clamp.q)(0,1,info[axis].interpolate(info[axis].current))}function createOnScrollHandler(element,onScroll,info,options={}){return{measure:()=>function measure(container,target=container,info){if(info.x.targetOffset=0,info.y.targetOffset=0,target!==container){let node=target;for(;node&&node!==container;)info.x.targetOffset+=node.offsetLeft,info.y.targetOffset+=node.offsetTop,node=node.offsetParent}info.x.targetLength=target===container?target.scrollWidth:target.clientWidth,info.y.targetLength=target===container?target.scrollHeight:target.clientHeight,info.x.containerLength=container.clientWidth,info.y.containerLength=container.clientHeight}(element,options.target,info),update:time=>{!function updateScrollInfo(element,info,time){updateAxisInfo(element,"x",info,time),updateAxisInfo(element,"y",info,time),info.time=time}(element,info,time),(options.offset||options.target)&&resolveOffsets(element,info,options)},notify:()=>onScroll(info)}}const scrollListeners=new WeakMap,resizeListeners=new WeakMap,onScrollHandlers=new WeakMap,getEventTarget=element=>element===document.documentElement?window:element;function scrollInfo(onScroll,{container=document.documentElement,...options}={}){let containerHandlers=onScrollHandlers.get(container);containerHandlers||(containerHandlers=new Set,onScrollHandlers.set(container,containerHandlers));const info=createScrollInfo(),containerHandler=createOnScrollHandler(container,onScroll,info,options);if(containerHandlers.add(containerHandler),!scrollListeners.has(container)){const measureAll=()=>{for(const handler of containerHandlers)handler.measure()},updateAll=()=>{for(const handler of containerHandlers)handler.update(frameloop_frame.uv.timestamp)},notifyAll=()=>{for(const handler of containerHandlers)handler.notify()},listener=()=>{frameloop_frame.Gt.read(measureAll,!1,!0),frameloop_frame.Gt.read(updateAll,!1,!0),frameloop_frame.Gt.update(notifyAll,!1,!0)};scrollListeners.set(container,listener);const target=getEventTarget(container);window.addEventListener("resize",listener,{passive:!0}),container!==document.documentElement&&resizeListeners.set(container,function resize(a,b){return"function"==typeof a?resizeWindow(a):resizeElement(a,b)}(container,listener)),target.addEventListener("scroll",listener,{passive:!0})}const listener=scrollListeners.get(container);return frameloop_frame.Gt.read(listener,!1,!0),()=>{var _a;(0,frameloop_frame.WG)(listener);const currentHandlers=onScrollHandlers.get(container);if(!currentHandlers)return;if(currentHandlers.delete(containerHandler),currentHandlers.size)return;const scrollListener=scrollListeners.get(container);scrollListeners.delete(container),scrollListener&&(getEventTarget(container).removeEventListener("scroll",scrollListener),null===(_a=resizeListeners.get(container))||void 0===_a||_a(),window.removeEventListener("resize",scrollListener))}}const timelineCache=new Map;function getTimeline({source,container=document.documentElement,axis="y"}={}){source&&(container=source),timelineCache.has(container)||timelineCache.set(container,{});const elementCache=timelineCache.get(container);return elementCache[axis]||(elementCache[axis]=(0,es.Jb)()?new ScrollTimeline({source:container,axis}):function scrollTimelineFallback({source,container,axis="y"}){source&&(container=source);const currentTime={value:0},cancel=scrollInfo((info=>{currentTime.value=100*info[axis].progress}),{container,axis});return{currentTime,cancel}}({source:container,axis})),elementCache[axis]}function needsElementTracking(options){return options&&(options.target||options.offset)}function scroll_scroll(onScroll,{axis="y",...options}={}){const optionsWithDefaults={axis,...options};return"function"==typeof onScroll?function scrollFunction(onScroll,options){return function isOnScrollWithInfo(onScroll){return 2===onScroll.length}(onScroll)||needsElementTracking(options)?scrollInfo((info=>{onScroll(info[options.axis].progress,info)}),options):observeTimeline(onScroll,getTimeline(options))}(onScroll,optionsWithDefaults):function scrollAnimation(animation,options){if(animation.flatten(),needsElementTracking(options))return animation.pause(),scrollInfo((info=>{animation.time=animation.duration*info[options.axis].progress}),options);{const timeline=getTimeline(options);return animation.attachTimeline?animation.attachTimeline(timeline,(valueAnimation=>(valueAnimation.pause(),observeTimeline((progress=>{valueAnimation.time=valueAnimation.duration*progress}),timeline)))):noop.l}}(onScroll,optionsWithDefaults)}var use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function refWarning(name,ref){(0,errors.$)(Boolean(!ref||ref.current),`You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const createScrollMotionValues=()=>({scrollX:(0,value.OQ)(0),scrollY:(0,value.OQ)(0),scrollXProgress:(0,value.OQ)(0),scrollYProgress:(0,value.OQ)(0)});function useScroll({container,target,layoutEffect=!0,...options}={}){const values=(0,use_constant.M)(createScrollMotionValues);return(layoutEffect?use_isomorphic_effect.E:react.useEffect)((()=>(refWarning("target",target),refWarning("container",container),scroll_scroll(((_progress,{x,y})=>{values.scrollX.set(x.current),values.scrollXProgress.set(x.progress),values.scrollY.set(y.current),values.scrollYProgress.set(y.progress)}),{...options,container:(null==container?void 0:container.current)||void 0,target:(null==target?void 0:target.current)||void 0}))),[container,target,JSON.stringify(options.offset)]),values}},"./node_modules/framer-motion/dist/es/value/use-transform.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>useTransform});var interpolate=__webpack_require__("./node_modules/framer-motion/dist/es/utils/interpolate.mjs");const getMixer=v=>(v=>v&&"object"==typeof v&&v.mix)(v)?v.mix:void 0;var use_combine_values=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-combine-values.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),es_value=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs");function useTransform(input,inputRangeOrTransformer,outputRange,options){if("function"==typeof input)return function useComputed(compute){es_value.bt.current=[],compute();const value=(0,use_combine_values.j)(es_value.bt.current,compute);return es_value.bt.current=void 0,value}(input);const transformer="function"==typeof inputRangeOrTransformer?inputRangeOrTransformer:function transform(...args){const useImmediate=!Array.isArray(args[0]),argOffset=useImmediate?0:-1,inputValue=args[0+argOffset],inputRange=args[1+argOffset],outputRange=args[2+argOffset],options=args[3+argOffset],interpolator=(0,interpolate.G)(inputRange,outputRange,{mixer:getMixer(outputRange[0]),...options});return useImmediate?interpolator(inputValue):interpolator}(inputRangeOrTransformer,outputRange,options);return Array.isArray(input)?useListTransform(input,transformer):useListTransform([input],(([latest])=>transformer(latest)))}function useListTransform(values,transformer){const latest=(0,use_constant.M)((()=>[]));return(0,use_combine_values.j)(values,(()=>{latest.length=0;const numValues=values.length;for(let i=0;i<numValues;i++)latest[i]=values[i].get();return transformer(latest)}))}}}]);