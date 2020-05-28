(this["webpackJsonpar-test"]=this["webpackJsonpar-test"]||[]).push([[0],[,,,,,,function(e,t,r){e.exports=r(14)},,,,,function(e,t,r){},function(e,t,r){},function(e,t){window.ARjs=window.ARjs||{},window.THREEx=window.THREEx||{};var r=window,o=r.ARjs,a=r.THREEx;o.Source=a.ArToolkitSource=function(e){var t=this;this.ready=!1,this.domElement=null,this.parameters={sourceType:"webcam",sourceUrl:null,sourceWidth:640,sourceHeight:480,displayWidth:640,displayHeight:480},function(e){if(void 0===e)return;for(var r in e){var o=e[r];if(void 0!==o)void 0!==t.parameters[r]?t.parameters[r]=o:console.warn("THREEx.ArToolkitSource: '"+r+"' is not a property of this material.");else console.warn("THREEx.ArToolkitSource: '"+r+"' parameter is undefined.")}}(e)},o.Source.prototype.init=function(e,t){var r,o=this;return"image"===this.parameters.sourceType?r=this._initSourceImage(a,t):"video"===this.parameters.sourceType?r=this._initSourceVideo(a,t):"webcam"===this.parameters.sourceType?r=this._initSourceWebcam(a,t):console.assert(!1),this.domElement=r,this.domElement.style.position="absolute",this.domElement.style.top="0px",this.domElement.style.left="0px",this.domElement.style.zIndex="-2",this;function a(){document.getElementById("ar-container").appendChild(o.domElement),o.ready=!0,e&&e()}},o.Source.prototype._initSourceImage=function(e){var t=document.createElement("img");t.src=this.parameters.sourceUrl,t.width=this.parameters.sourceWidth,t.height=this.parameters.sourceHeight,t.style.width=this.parameters.displayWidth+"px",t.style.height=this.parameters.displayHeight+"px";var r=setInterval((function(){t.naturalWidth&&(e(),clearInterval(r))}),20);return t},o.Source.prototype._initSourceVideo=function(e){var t=document.createElement("video");t.src=this.parameters.sourceUrl,t.style.objectFit="initial",t.autoplay=!0,t.webkitPlaysinline=!0,t.controls=!1,t.loop=!0,t.muted=!0,document.body.addEventListener("click",(function e(){document.body.removeEventListener("click",e),t.play()})),t.width=this.parameters.sourceWidth,t.height=this.parameters.sourceHeight,t.style.width=this.parameters.displayWidth+"px",t.style.height=this.parameters.displayHeight+"px";var r=setInterval((function(){t.videoWidth&&(e(),clearInterval(r))}),20);return t},o.Source.prototype._initSourceWebcam=function(e,t){var r=this;t=t||function(e){alert("Webcam Error\nName: "+e.name+"\nMessage: "+e.message)};var o,a=document.createElement("video");return a.setAttribute("autoplay",""),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.style.width=this.parameters.displayWidth+"px",a.style.height=this.parameters.displayHeight+"px",void 0===navigator.mediaDevices||void 0===navigator.mediaDevices.enumerateDevices||void 0===navigator.mediaDevices.getUserMedia?(void 0===navigator.mediaDevices?o="navigator.mediaDevices":void 0===navigator.mediaDevices.enumerateDevices?o="navigator.mediaDevices.enumerateDevices":void 0===navigator.mediaDevices.getUserMedia?o="navigator.mediaDevices.getUserMedia":console.assert(!1),t({name:"",message:"WebRTC issue-! "+o+" not present in your browser"}),null):(navigator.mediaDevices.enumerateDevices().then((function(o){var n={audio:!1,video:{facingMode:"environment",width:{ideal:r.parameters.sourceWidth},height:{ideal:r.parameters.sourceHeight}}};navigator.mediaDevices.getUserMedia(n).then((function(t){a.srcObject=t,document.body.addEventListener("click",(function(){a.play()}));var r=setInterval((function(){a.videoWidth&&(e(),clearInterval(r))}),20)})).catch((function(e){t({name:e.name,message:e.message})}))})).catch((function(e){t({message:e.message})})),a)},o.Source.prototype.domElementWidth=function(){return parseInt(this.domElement.style.width)},o.Source.prototype.domElementHeight=function(){return parseInt(this.domElement.style.height)},o.Source.prototype.onResizeElement=function(){var e,t,r=window.innerWidth,o=window.innerHeight;console.assert(0===arguments.length),"IMG"===this.domElement.nodeName?(e=this.domElement.naturalWidth,t=this.domElement.naturalHeight):"VIDEO"===this.domElement.nodeName?(e=this.domElement.videoWidth,t=this.domElement.videoHeight):console.assert(!1);var a=e/t,n=r/o;if(n<a){var i=a*o;this.domElement.style.width=i+"px",this.domElement.style.marginLeft=-(i-r)/2+"px",this.domElement.style.height=o+"px",this.domElement.style.marginTop="0px"}else{var s=1/(a/r);this.domElement.style.height=s+"px",this.domElement.style.marginTop=-(s-o)/2+"px",this.domElement.style.width=r+"px",this.domElement.style.marginLeft="0px"}},o.Source.prototype.copyElementSizeTo=function(e){window.innerWidth>window.innerHeight?(e.style.width=this.domElement.style.width,e.style.height=this.domElement.style.height,e.style.marginLeft=this.domElement.style.marginLeft,e.style.marginTop=this.domElement.style.marginTop):(e.style.height=this.domElement.style.height,e.style.width=4*parseInt(e.style.height)/3+"px",e.style.marginLeft=(window.innerWidth-parseInt(e.style.width))/2+"px",e.style.marginTop=0)},o.Source.prototype.copySizeTo=function(){console.warn("obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"),this.copyElementSizeTo.apply(this,arguments)},o.Source.prototype.onResize=function(e,t,r){if(3!==arguments.length)return console.warn("obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"),this.onResizeElement.apply(this,arguments);var o=e.parameters.trackingBackend;if("artoolkit"===o){this.onResizeElement();var a=!!t.domElement.dataset.aframeCanvas;!1===a&&this.copyElementSizeTo(t.domElement),null!==e.arController&&this.copyElementSizeTo(e.arController.canvas)}else"aruco"===o?(this.onResizeElement(),this.copyElementSizeTo(t.domElement),this.copyElementSizeTo(e.arucoContext.canvas)):"tango"===o?t.setSize(window.innerWidth,window.innerHeight):console.assert(!1,"unhandled trackingBackend "+o);"artoolkit"===o?null!==e.arController&&r.projectionMatrix.copy(e.getProjectionMatrix()):console.assert(!1,"unhandled trackingBackend "+o)}},function(e,t,r){"use strict";r.r(t);var o=r(1),a=r.n(o),n=r(4),i=r.n(n),s=(r(11),r(2)),l=(r(12),r(0)),c=r(5);var d=function(){var e=Object(o.useRef)(),t=Object(o.useRef)(),r=Object(o.useState)(!1),n=Object(s.a)(r,2),i=n[0],d=n[1],m=Object(o.useState)(.004),p=Object(s.a)(m,2),u=p[0],h=p[1];return Object(o.useEffect)((function(){t.current&&t.current.scene.scale.set(u,u,u)}),[u]),Object(o.useEffect)((function(){var r=!0,o=!1,a=window.THREEx,n=new l.h,i=new l.cb,s=new l.f,d=new l.ob({antialias:!0,alpha:!0}),m=new l.p(16777147,526368,12),p=new a.ArToolkitSource({sourceType:"webcam"}),u=new a.ArToolkitContext({cameraParametersUrl:"".concat("/ar-test","/data/camera_para.dat"),detectionMode:"mono"}),h=new l.o,y=function(){p.onResizeElement(),p.copyElementSizeTo(d.domElement),null!==u.arController&&p.copyElementSizeTo(u.arController.canvas)};return function(){i.add(m),i.add(s),d.setClearColor(new l.i("lightgrey"),0),d.setSize(640,480),d.domElement.style.position="absolute",d.domElement.style.top="0px",d.domElement.style.left="0px",document.getElementById("ar-container").appendChild(d.domElement),p.init(y),window.addEventListener("resize",y),u.init((function(){s.projectionMatrix.copy(u.getProjectionMatrix())})),i.add(h);new a.ArMarkerControls(u,h,{type:"pattern",patternUrl:"".concat("/ar-test","/data/hiro.patt")});var e=new l.T(1,1,4,4),r=new l.I({color:13226,opacity:.3});new l.H(e,r).rotation.x=-Math.PI/2,(new c.a).load("".concat("/ar-test","/models/anchor.glb"),(function(e){t.current=e,t.current.scene.scale.set(.004,.004,.004),h.add(t.current.scene)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log("An error happened:",e)}))}(),function a(){r&&(requestAnimationFrame(a),n.getDelta(),o!==h.visible&&((o=h.visible)?(console.log(e.current.volume),e.current.play()):e.current.pause()),h.visible&&(t.current.scene.rotation.y+=.01),!1!==p.ready&&u.update(p.domElement),d.render(i,s))}(),function(){r=!1,p.domElement.srcObject.getTracks().forEach((function(e){return e.stop()})),document.getElementById("ar-container").removeChild(p.domElement),document.getElementById("ar-container").removeChild(d.domElement)}}),[]),a.a.createElement("div",null,a.a.createElement("audio",{loop:!0,ref:e,preload:"auto"},a.a.createElement("source",{type:"audio/mpeg",src:"".concat("/ar-test","/audio/test.mp3")})),a.a.createElement("button",{style:{position:"relative",zIndex:3,padding:5},onClick:function(){d(!i),e.current.volume=i?1:0}},i?"Unmute":"Mute"),a.a.createElement("button",{style:{position:"fixed",zIndex:3,width:30,height:30,right:10,bottom:50},onClick:function(){h((function(e){return e+1e-4}))}},"+"),a.a.createElement("button",{style:{position:"fixed",zIndex:3,width:30,height:30,right:10,bottom:10},onClick:function(){h((function(e){return Math.max(.001,e-1e-4)}))}},"-"))};var m=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),r=t[0],n=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement("button",{className:"App-button",onClick:function(){return n((function(e){return!e}))}},r?"Disable":"Enable"," AR"),r&&a.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(13);window.ARjs=window.ARjs||{},window.THREEx=window.THREEx||{};var p=window,u=p.ARjs,h=p.THREEx,y=p.artoolkit,E=p.ARController,v=p.ARCameraParam;u.Context=h.ArToolkitContext=function(e){var t=this;t._updatedAt=null,this.parameters={trackingBackend:"artoolkit",debug:!1,detectionMode:"mono",matrixCodeType:"3x3",cameraParametersUrl:u.Context.baseURL+"parameters/camera_para.dat",maxDetectionRate:60,canvasWidth:640,canvasHeight:480,patternRatio:.5,imageSmoothingEnabled:!1},console.assert(-1!==["artoolkit"].indexOf(this.parameters.trackingBackend),"invalid parameter trackingBackend",this.parameters.trackingBackend),console.assert(-1!==["color","color_and_matrix","mono","mono_and_matrix"].indexOf(this.parameters.detectionMode),"invalid parameter detectionMode",this.parameters.detectionMode),this.arController=null,this.arucoContext=null,t.initialized=!1,this._arMarkersControls=[],function(e){if(void 0===e)return;for(var r in e){var o=e[r];if(void 0!==o)void 0!==t.parameters[r]?t.parameters[r]=o:console.warn("THREEx.ArToolkitContext: '"+r+"' is not a property of this material.");else console.warn("THREEx.ArToolkitContext: '"+r+"' parameter is undefined.")}}(e)},Object.assign(u.Context.prototype,l.l.prototype),u.Context.baseURL="https://jeromeetienne.github.io/AR.js/three.js/",u.Context.REVISION="1.6.0",u.Context.createDefaultCamera=function(e){if(console.assert(!1,"use ARjs.Utils.createDefaultCamera instead"),"artoolkit"===e)var t=new l.f;else console.assert(!1);return t},u.Context.prototype.init=function(e){var t=this;return void("artoolkit"===this.parameters.trackingBackend?this._initArtoolkit((function(){t.dispatchEvent({type:"initialized"}),t.initialized=!0,e&&e()})):console.assert(!1))},u.Context.prototype.update=function(e){if("artoolkit"===this.parameters.trackingBackend&&null===this.arController)return!1;var t=performance.now();return!(null!==this._updatedAt&&t-this._updatedAt<1e3/this.parameters.maxDetectionRate)&&(this._updatedAt=t,this._arMarkersControls.forEach((function(e){e.object3d.visible=!1})),"artoolkit"===this.parameters.trackingBackend?this._updateArtoolkit(e):console.assert(!1),this.dispatchEvent({type:"sourceProcessed"}),!0)},u.Context.prototype.addMarker=function(e){console.assert(e instanceof h.ArMarkerControls),this._arMarkersControls.push(e)},u.Context.prototype.removeMarker=function(e){console.assert(e instanceof h.ArMarkerControls);var t=this._arMarkersControls.findIndex((function(t){return t.id===e.id}));this._arMarkersControls.splice(t,1)},u.Context.prototype._initArtoolkit=function(e){var t=this;this._artoolkitProjectionAxisTransformMatrix=new l.G,this._artoolkitProjectionAxisTransformMatrix.multiply((new l.G).makeRotationY(Math.PI)),this._artoolkitProjectionAxisTransformMatrix.multiply((new l.G).makeRotationZ(Math.PI));var r=new v(t.parameters.cameraParametersUrl,(function(){var o=new E(t.parameters.canvasWidth,t.parameters.canvasHeight,r);t.arController=o,o.ctx.mozImageSmoothingEnabled=t.parameters.imageSmoothingEnabled,o.ctx.webkitImageSmoothingEnabled=t.parameters.imageSmoothingEnabled,o.ctx.msImageSmoothingEnabled=t.parameters.imageSmoothingEnabled,o.ctx.imageSmoothingEnabled=t.parameters.imageSmoothingEnabled,!0===t.parameters.debug&&(o.debugSetup(),o.canvas.style.position="absolute",o.canvas.style.top="0px",o.canvas.style.opacity="0.6",o.canvas.style.pointerEvents="none",o.canvas.style.zIndex="-1");var a={color:y.AR_TEMPLATE_MATCHING_COLOR,color_and_matrix:y.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX,mono:y.AR_TEMPLATE_MATCHING_MONO,mono_and_matrix:y.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX}[t.parameters.detectionMode];console.assert(void 0!==a),o.setPatternDetectionMode(a);var n={"3x3":y.AR_MATRIX_CODE_3x3,"3x3_HAMMING63":y.AR_MATRIX_CODE_3x3_HAMMING63,"3x3_PARITY65":y.AR_MATRIX_CODE_3x3_PARITY65,"4x4":y.AR_MATRIX_CODE_4x4,"4x4_BCH_13_9_3":y.AR_MATRIX_CODE_4x4_BCH_13_9_3,"4x4_BCH_13_5_5":y.AR_MATRIX_CODE_4x4_BCH_13_5_5}[t.parameters.matrixCodeType];console.assert(void 0!==n),o.setMatrixCodeType(n),o.setPattRatio(t.parameters.patternRatio),e()}));return this},u.Context.prototype.getProjectionMatrix=function(e){console.assert("artoolkit"===this.parameters.trackingBackend),console.assert(this.arController,"arController MUST be initialized to call this function");var t=this.arController.getCameraMatrix(),r=(new l.G).fromArray(t);return r.multiply(this._artoolkitProjectionAxisTransformMatrix),r},u.Context.prototype._updateArtoolkit=function(e){this.arController.process(e)},window.THREEx=window.THREEx||{};var f=window.THREEx;f.ArBaseControls=function(e){this.id=f.ArBaseControls.id++,this.object3d=e,this.object3d.matrixAutoUpdate=!1,this.object3d.visible=!1},f.ArBaseControls.id=0,Object.assign(f.ArBaseControls.prototype,l.l.prototype),f.ArBaseControls.prototype.update=function(){console.assert(!1,"you need to implement your own update")},f.ArBaseControls.prototype.name=function(){return console.assert(!1,"you need to implement your own .name()"),"Not yet implemented - name()"},window.ARjs=window.ARjs||{},window.THREEx=window.THREEx||{};var g=window,x=g.artoolkit,w=g.ARjs,k=g.THREEx;w.MarkerControls=k.ArMarkerControls=function(e,t,r){var o=this;k.ArBaseControls.call(this,t),this.context=e,this.parameters={size:1,type:"unknown",patternUrl:null,barcodeValue:null,changeMatrixMode:"modelViewMatrix",minConfidence:.6};console.assert(-1!==["pattern","barcode","unknown"].indexOf(this.parameters.type),"illegal value",this.parameters.type);console.assert(-1!==["modelViewMatrix","cameraTransformMatrix"].indexOf(this.parameters.changeMatrixMode),"illegal value",this.parameters.changeMatrixMode),this.object3d=t,this.object3d.matrixAutoUpdate=!1,this.object3d.visible=!1,function(e){if(void 0===e)return;for(var t in e){var r=e[t];if(void 0!==r)void 0!==o.parameters[t]?o.parameters[t]=r:console.warn("THREEx.ArMarkerControls: '"+t+"' is not a property of this material.");else console.warn("THREEx.ArMarkerControls: '"+t+"' parameter is undefined.")}}(r),e.addMarker(this),"artoolkit"===o.context.parameters.trackingBackend?this._initArtoolkit():console.assert(!1)},w.MarkerControls.prototype=Object.create(k.ArBaseControls.prototype),w.MarkerControls.prototype.constructor=k.ArMarkerControls,w.MarkerControls.prototype.dispose=function(){this.context.removeMarker(this)},w.MarkerControls.prototype.updateWithModelViewMatrix=function(e){var t=this.object3d;if(t.visible=!0,"artoolkit"===this.context.parameters.trackingBackend){var r=(new l.G).copy(this.context._artoolkitProjectionAxisTransformMatrix);r.multiply(e),e.copy(r)}if("tango"!==this.context.parameters.trackingBackend){var o=(new l.G).makeRotationX(Math.PI/2);e.multiply(o)}"modelViewMatrix"===this.parameters.changeMatrixMode?t.matrix.copy(e):"cameraTransformMatrix"===this.parameters.changeMatrixMode?t.matrix.getInverse(e):console.assert(!1),t.matrix.decompose(t.position,t.quaternion,t.scale),this.dispatchEvent({type:"markerFound"})},w.MarkerControls.prototype.name=function(){var e="";(e+=this.parameters.type,"pattern"===this.parameters.type)?e+=" - "+this.parameters.patternUrl.replace(/^.*\//g,""):"barcode"===this.parameters.type?e+=" - "+this.parameters.barcodeValue:console.assert(!1,"no .name() implemented for this marker controls");return e},w.MarkerControls.prototype._initArtoolkit=function(){var e=this,t=null,r=setInterval((function(){null!==e.context.arController&&(clearInterval(r),r=null,function(){var r=e.context.arController;console.assert(null!==r),"pattern"===e.parameters.type?r.loadMarker(e.parameters.patternUrl,(function(o){t=o,r.trackPatternMarkerId(t,e.parameters.size)})):"barcode"===e.parameters.type?(t=e.parameters.barcodeValue,r.trackBarcodeMarkerId(t,e.parameters.size)):"unknown"===e.parameters.type?t=null:console.log(!1,"invalid marker type",e.parameters.type);r.addEventListener("getMarker",(function(r){if(r.data.type===x.PATTERN_MARKER&&"pattern"===e.parameters.type){if(null===t)return;r.data.marker.idPatt===t&&o(r)}else if(r.data.type===x.BARCODE_MARKER&&"barcode"===e.parameters.type){if(null===t)return;r.data.marker.idMatrix===t&&o(r)}else r.data.type===x.UNKNOWN_MARKER&&"unknown"===e.parameters.type&&o(r)}))}())}),20);return;function o(t){if(!(t.data.type===x.PATTERN_MARKER&&t.data.marker.cfPatt<e.parameters.minConfidence)&&!(t.data.type===x.BARCODE_MARKER&&t.data.marker.cfMatt<e.parameters.minConfidence)){var r=(new l.G).fromArray(t.data.matrix);e.updateWithModelViewMatrix(r)}}},i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.8e7f52a8.chunk.js.map