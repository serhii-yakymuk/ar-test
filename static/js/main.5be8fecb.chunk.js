(this["webpackJsonpar-test"]=this["webpackJsonpar-test"]||[]).push([[0],[,,,,,,function(e,t,r){e.exports=r(15)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t){window.ARjs=window.ARjs||{},window.THREEx=window.THREEx||{};var r=window,a=r.ARjs,o=r.THREEx;a.Source=o.ArToolkitSource=function(e){var t=this;this.ready=!1,this.domElement=null,this.parameters={sourceType:"webcam",sourceUrl:null,sourceWidth:640,sourceHeight:480,displayWidth:640,displayHeight:480},function(e){if(void 0===e)return;for(var r in e){var a=e[r];if(void 0!==a)void 0!==t.parameters[r]?t.parameters[r]=a:console.warn("THREEx.ArToolkitSource: '"+r+"' is not a property of this material.");else console.warn("THREEx.ArToolkitSource: '"+r+"' parameter is undefined.")}}(e)},a.Source.prototype.init=function(e,t){var r,a=this;return"image"===this.parameters.sourceType?r=this._initSourceImage(o,t):"video"===this.parameters.sourceType?r=this._initSourceVideo(o,t):"webcam"===this.parameters.sourceType?r=this._initSourceWebcam(o,t):console.assert(!1),this.domElement=r,this.domElement.style.position="absolute",this.domElement.style.top="0px",this.domElement.style.left="0px",this.domElement.style.zIndex="-2",this;function o(){document.getElementById("ar-container").appendChild(a.domElement),a.ready=!0,e&&e()}},a.Source.prototype._initSourceImage=function(e){var t=document.createElement("img");t.src=this.parameters.sourceUrl,t.width=this.parameters.sourceWidth,t.height=this.parameters.sourceHeight,t.style.width=this.parameters.displayWidth+"px",t.style.height=this.parameters.displayHeight+"px";var r=setInterval((function(){t.naturalWidth&&(e(),clearInterval(r))}),20);return t},a.Source.prototype._initSourceVideo=function(e){var t=document.createElement("video");t.src=this.parameters.sourceUrl,t.style.objectFit="initial",t.autoplay=!0,t.webkitPlaysinline=!0,t.controls=!1,t.loop=!0,t.muted=!0,document.body.addEventListener("click",(function e(){document.body.removeEventListener("click",e),t.play()})),t.width=this.parameters.sourceWidth,t.height=this.parameters.sourceHeight,t.style.width=this.parameters.displayWidth+"px",t.style.height=this.parameters.displayHeight+"px";var r=setInterval((function(){t.videoWidth&&(e(),clearInterval(r))}),20);return t},a.Source.prototype._initSourceWebcam=function(e,t){var r=this;t=t||function(e){alert("Webcam Error\nName: "+e.name+"\nMessage: "+e.message)};var a,o=document.createElement("video");return o.setAttribute("autoplay",""),o.setAttribute("muted",""),o.setAttribute("playsinline",""),o.style.width=this.parameters.displayWidth+"px",o.style.height=this.parameters.displayHeight+"px",void 0===navigator.mediaDevices||void 0===navigator.mediaDevices.enumerateDevices||void 0===navigator.mediaDevices.getUserMedia?(void 0===navigator.mediaDevices?a="navigator.mediaDevices":void 0===navigator.mediaDevices.enumerateDevices?a="navigator.mediaDevices.enumerateDevices":void 0===navigator.mediaDevices.getUserMedia?a="navigator.mediaDevices.getUserMedia":console.assert(!1),t({name:"",message:"WebRTC issue-! "+a+" not present in your browser"}),null):(navigator.mediaDevices.enumerateDevices().then((function(a){var n={audio:!1,video:{facingMode:"environment",width:{ideal:r.parameters.sourceWidth},height:{ideal:r.parameters.sourceHeight}}};navigator.mediaDevices.getUserMedia(n).then((function(t){o.srcObject=t,document.body.addEventListener("click",(function(){o.play()}));var r=setInterval((function(){o.videoWidth&&(e(),clearInterval(r))}),20)})).catch((function(e){t({name:e.name,message:e.message})}))})).catch((function(e){t({message:e.message})})),o)},a.Source.prototype.domElementWidth=function(){return parseInt(this.domElement.style.width)},a.Source.prototype.domElementHeight=function(){return parseInt(this.domElement.style.height)},a.Source.prototype.onResizeElement=function(){var e,t,r=window.innerWidth,a=window.innerHeight;console.assert(0===arguments.length),"IMG"===this.domElement.nodeName?(e=this.domElement.naturalWidth,t=this.domElement.naturalHeight):"VIDEO"===this.domElement.nodeName?(e=this.domElement.videoWidth,t=this.domElement.videoHeight):console.assert(!1);var o=e/t,n=r/a;if(n<o){var i=o*a;this.domElement.style.width=i+"px",this.domElement.style.marginLeft=-(i-r)/2+"px",this.domElement.style.height=a+"px",this.domElement.style.marginTop="0px"}else{var s=1/(o/r);this.domElement.style.height=s+"px",this.domElement.style.marginTop=-(s-a)/2+"px",this.domElement.style.width=r+"px",this.domElement.style.marginLeft="0px"}},a.Source.prototype.copyElementSizeTo=function(e){window.innerWidth>window.innerHeight?(e.style.width=this.domElement.style.width,e.style.height=this.domElement.style.height,e.style.marginLeft=this.domElement.style.marginLeft,e.style.marginTop=this.domElement.style.marginTop):(e.style.height=this.domElement.style.height,e.style.width=4*parseInt(e.style.height)/3+"px",e.style.marginLeft=(window.innerWidth-parseInt(e.style.width))/2+"px",e.style.marginTop=0)},a.Source.prototype.copySizeTo=function(){console.warn("obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"),this.copyElementSizeTo.apply(this,arguments)},a.Source.prototype.onResize=function(e,t,r){if(3!==arguments.length)return console.warn("obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"),this.onResizeElement.apply(this,arguments);var a=e.parameters.trackingBackend;if("artoolkit"===a){this.onResizeElement();var o=!!t.domElement.dataset.aframeCanvas;!1===o&&this.copyElementSizeTo(t.domElement),null!==e.arController&&this.copyElementSizeTo(e.arController.canvas)}else"aruco"===a?(this.onResizeElement(),this.copyElementSizeTo(t.domElement),this.copyElementSizeTo(e.arucoContext.canvas)):"tango"===a?t.setSize(window.innerWidth,window.innerHeight):console.assert(!1,"unhandled trackingBackend "+a);"artoolkit"===a?null!==e.arController&&r.projectionMatrix.copy(e.getProjectionMatrix()):console.assert(!1,"unhandled trackingBackend "+a)}},function(e,t,r){"use strict";r.r(t);var a=r(1),o=r.n(a),n=r(4),i=r.n(n),s=(r(11),r(2)),l=(r(12),r(0)),c=r(5),d=(r(13),function(e){var t=e.width,r=e.height,a=e.style,n=e.fillColor,i=e.isActive;return o.a.createElement("svg",{style:a,width:t,height:r,"aria-hidden":"true",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",className:i?"sound-wave--active":""},o.a.createElement("g",{fill:n},o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-1",x:"4.9",rx:"1.5"}),o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-2",x:"13.5",rx:"1.5"}),o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-3",x:"22.1",rx:"1.5"}),o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-2",x:"30.7",rx:"1.5"}),o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-1",x:"39.5",rx:"1.5"})))});d.defaultProps={width:"24",height:"24",fillColor:"#fff"};var m=d,p=function(e){var t=e.width,r=e.height,a=e.style,n=e.strokeColor,i=e.isMute;return o.a.createElement("svg",{style:a,width:t,height:r,"aria-hidden":"true",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{transform:"translate(1, 3)",stroke:n,strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{d:"M5.57,6.06 L1.25,6.06 C0.84,6.06 0.5,6.4 0.5,6.8 L0.5,11.36 C0.5,11.78 0.84,12.12 1.25,12.12 L5.57,12.12 C6.7,15.03 9.34,17.06 12.43,17.38 C12.64,17.4 12.85,17.33 13,17.18 C13.16,17.04 13.25,16.84 13.25,16.62 L13.25,1.55 C13.25,1.34 13.16,1.13 13,1 C12.85,0.85 12.64,0.78 12.43,0.8 C9.34,1.11 6.7,3.15 5.57,6.06 Z"}),i?o.a.createElement(o.a.Fragment,null,o.a.createElement("line",{x1:"21.32",y1:"7",x2:"17",y2:"11.5"}),o.a.createElement("line",{x1:"17",y1:"7",x2:"21.32",y2:"11.5"})):o.a.createElement(o.a.Fragment,null,o.a.createElement("path",{d:"M20.46,12.67 C21.85,10.49 21.85,7.69 20.46,5.5"}),o.a.createElement("path",{d:"M17.56,11.357 C18.6,10.06 18.6,8.2 17.56,6.9"}))))};p.defaultProps={width:"24",height:"24",strokeColor:"#fff"};var u=p;var h=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useState)(.004),n=Object(s.a)(r,2),i=n[0],d=n[1],p=Object(a.useState)(!1),h=Object(s.a)(p,2),f=h[0],y=h[1],v=Object(a.useState)(!1),E=Object(s.a)(v,2),g=E[0],x=E[1];return Object(a.useEffect)((function(){t.current&&t.current.scene.scale.set(i,i,i)}),[i]),Object(a.useEffect)((function(){var r=!0,a=!1,o=window.THREEx,n=new l.h,i=new l.cb,s=new l.f,d=new l.ob({antialias:!0,alpha:!0}),m=new l.p(16777147,526368,12),p=new o.ArToolkitSource({sourceType:"webcam"}),u=new o.ArToolkitContext({cameraParametersUrl:"".concat("/ar-test","/data/camera_para.dat"),detectionMode:"mono"}),h=new l.o,f=function(){p.onResizeElement(),p.copyElementSizeTo(d.domElement),null!==u.arController&&p.copyElementSizeTo(u.arController.canvas)};return function(){i.add(m),i.add(s),d.setClearColor(new l.i("lightgrey"),0),d.setSize(640,480),d.domElement.style.position="absolute",d.domElement.style.top="0px",d.domElement.style.left="0px",document.getElementById("ar-container").appendChild(d.domElement),p.init(f),window.addEventListener("resize",f),u.init((function(){s.projectionMatrix.copy(u.getProjectionMatrix())})),i.add(h);new o.ArMarkerControls(u,h,{type:"pattern",patternUrl:"".concat("/ar-test","/data/hiro.patt")});var e=new l.T(1,1,4,4),r=new l.I({color:13226,opacity:.3});new l.H(e,r).rotation.x=-Math.PI/2,(new c.a).load("".concat("/ar-test","/models/anchor.glb"),(function(e){t.current=e,t.current.scene.scale.set(.004,.004,.004),h.add(t.current.scene)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log("An error happened:",e)}))}(),function o(){r&&(requestAnimationFrame(o),n.getDelta(),a!==h.visible&&(x(h.visible),a=h.visible,h.visible?e.current.play():e.current.pause()),h.visible&&(t.current.scene.rotation.y+=.01),!1!==p.ready&&u.update(p.domElement),d.render(i,s))}(),function(){r=!1,p.domElement.srcObject.getTracks().forEach((function(e){return e.stop()})),document.getElementById("ar-container").removeChild(p.domElement),document.getElementById("ar-container").removeChild(d.domElement)}}),[]),o.a.createElement("div",null,o.a.createElement("audio",{loop:!0,ref:e,preload:"auto"},o.a.createElement("source",{type:"audio/mpeg",src:"".concat("/ar-test","/audio/test.mp3")})),o.a.createElement("button",{style:{position:"fixed",zIndex:3,right:10,top:10,background:"none",border:"none",padding:3,display:"inline-flex"},onClick:function(){y(!f),e.current.volume=f?1:0}},o.a.createElement(u,{isMute:f})),o.a.createElement(m,{isActive:g,style:{position:"fixed",zIndex:3,right:45,top:10,background:"none",border:"none",padding:3,display:"inline-flex"}}),o.a.createElement("button",{style:{position:"fixed",zIndex:3,width:30,height:30,right:10,bottom:50,background:"none",padding:3,display:"inline-flex",color:"#fff",fontSize:24,border:"1px solid #fff",borderRadius:3,alignItems:"center",justifyContent:"center"},onClick:function(){d((function(e){return e+1e-4}))}},"+"),o.a.createElement("button",{style:{position:"fixed",zIndex:3,width:30,height:30,right:10,bottom:10,background:"none",padding:3,display:"inline-flex",color:"#fff",fontSize:24,border:"1px solid #fff",borderRadius:3,alignItems:"center",justifyContent:"center"},onClick:function(){d((function(e){return Math.max(.001,e-1e-4)}))}},"-"))};var f=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),r=t[0],n=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("button",{className:"App-button",onClick:function(){return n((function(e){return!e}))}},r?"Disable":"Enable"," AR"),r&&o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(14);window.ARjs=window.ARjs||{},window.THREEx=window.THREEx||{};var y=window,v=y.ARjs,E=y.THREEx,g=y.artoolkit,x=y.ARController,w=y.ARCameraParam;v.Context=E.ArToolkitContext=function(e){var t=this;t._updatedAt=null,this.parameters={trackingBackend:"artoolkit",debug:!1,detectionMode:"mono",matrixCodeType:"3x3",cameraParametersUrl:v.Context.baseURL+"parameters/camera_para.dat",maxDetectionRate:60,canvasWidth:640,canvasHeight:480,patternRatio:.5,imageSmoothingEnabled:!1},console.assert(-1!==["artoolkit"].indexOf(this.parameters.trackingBackend),"invalid parameter trackingBackend",this.parameters.trackingBackend),console.assert(-1!==["color","color_and_matrix","mono","mono_and_matrix"].indexOf(this.parameters.detectionMode),"invalid parameter detectionMode",this.parameters.detectionMode),this.arController=null,this.arucoContext=null,t.initialized=!1,this._arMarkersControls=[],function(e){if(void 0===e)return;for(var r in e){var a=e[r];if(void 0!==a)void 0!==t.parameters[r]?t.parameters[r]=a:console.warn("THREEx.ArToolkitContext: '"+r+"' is not a property of this material.");else console.warn("THREEx.ArToolkitContext: '"+r+"' parameter is undefined.")}}(e)},Object.assign(v.Context.prototype,l.l.prototype),v.Context.baseURL="https://jeromeetienne.github.io/AR.js/three.js/",v.Context.REVISION="1.6.0",v.Context.createDefaultCamera=function(e){if(console.assert(!1,"use ARjs.Utils.createDefaultCamera instead"),"artoolkit"===e)var t=new l.f;else console.assert(!1);return t},v.Context.prototype.init=function(e){var t=this;return void("artoolkit"===this.parameters.trackingBackend?this._initArtoolkit((function(){t.dispatchEvent({type:"initialized"}),t.initialized=!0,e&&e()})):console.assert(!1))},v.Context.prototype.update=function(e){if("artoolkit"===this.parameters.trackingBackend&&null===this.arController)return!1;var t=performance.now();return!(null!==this._updatedAt&&t-this._updatedAt<1e3/this.parameters.maxDetectionRate)&&(this._updatedAt=t,this._arMarkersControls.forEach((function(e){e.object3d.visible=!1})),"artoolkit"===this.parameters.trackingBackend?this._updateArtoolkit(e):console.assert(!1),this.dispatchEvent({type:"sourceProcessed"}),!0)},v.Context.prototype.addMarker=function(e){console.assert(e instanceof E.ArMarkerControls),this._arMarkersControls.push(e)},v.Context.prototype.removeMarker=function(e){console.assert(e instanceof E.ArMarkerControls);var t=this._arMarkersControls.findIndex((function(t){return t.id===e.id}));this._arMarkersControls.splice(t,1)},v.Context.prototype._initArtoolkit=function(e){var t=this;this._artoolkitProjectionAxisTransformMatrix=new l.G,this._artoolkitProjectionAxisTransformMatrix.multiply((new l.G).makeRotationY(Math.PI)),this._artoolkitProjectionAxisTransformMatrix.multiply((new l.G).makeRotationZ(Math.PI));var r=new w(t.parameters.cameraParametersUrl,(function(){var a=new x(t.parameters.canvasWidth,t.parameters.canvasHeight,r);t.arController=a,a.ctx.mozImageSmoothingEnabled=t.parameters.imageSmoothingEnabled,a.ctx.webkitImageSmoothingEnabled=t.parameters.imageSmoothingEnabled,a.ctx.msImageSmoothingEnabled=t.parameters.imageSmoothingEnabled,a.ctx.imageSmoothingEnabled=t.parameters.imageSmoothingEnabled,!0===t.parameters.debug&&(a.debugSetup(),a.canvas.style.position="absolute",a.canvas.style.top="0px",a.canvas.style.opacity="0.6",a.canvas.style.pointerEvents="none",a.canvas.style.zIndex="-1");var o={color:g.AR_TEMPLATE_MATCHING_COLOR,color_and_matrix:g.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX,mono:g.AR_TEMPLATE_MATCHING_MONO,mono_and_matrix:g.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX}[t.parameters.detectionMode];console.assert(void 0!==o),a.setPatternDetectionMode(o);var n={"3x3":g.AR_MATRIX_CODE_3x3,"3x3_HAMMING63":g.AR_MATRIX_CODE_3x3_HAMMING63,"3x3_PARITY65":g.AR_MATRIX_CODE_3x3_PARITY65,"4x4":g.AR_MATRIX_CODE_4x4,"4x4_BCH_13_9_3":g.AR_MATRIX_CODE_4x4_BCH_13_9_3,"4x4_BCH_13_5_5":g.AR_MATRIX_CODE_4x4_BCH_13_5_5}[t.parameters.matrixCodeType];console.assert(void 0!==n),a.setMatrixCodeType(n),a.setPattRatio(t.parameters.patternRatio),e()}));return this},v.Context.prototype.getProjectionMatrix=function(e){console.assert("artoolkit"===this.parameters.trackingBackend),console.assert(this.arController,"arController MUST be initialized to call this function");var t=this.arController.getCameraMatrix(),r=(new l.G).fromArray(t);return r.multiply(this._artoolkitProjectionAxisTransformMatrix),r},v.Context.prototype._updateArtoolkit=function(e){this.arController.process(e)},window.THREEx=window.THREEx||{};var k=window.THREEx;k.ArBaseControls=function(e){this.id=k.ArBaseControls.id++,this.object3d=e,this.object3d.matrixAutoUpdate=!1,this.object3d.visible=!1},k.ArBaseControls.id=0,Object.assign(k.ArBaseControls.prototype,l.l.prototype),k.ArBaseControls.prototype.update=function(){console.assert(!1,"you need to implement your own update")},k.ArBaseControls.prototype.name=function(){return console.assert(!1,"you need to implement your own .name()"),"Not yet implemented - name()"},window.ARjs=window.ARjs||{},window.THREEx=window.THREEx||{};var C=window,b=C.artoolkit,M=C.ARjs,A=C.THREEx;M.MarkerControls=A.ArMarkerControls=function(e,t,r){var a=this;A.ArBaseControls.call(this,t),this.context=e,this.parameters={size:1,type:"unknown",patternUrl:null,barcodeValue:null,changeMatrixMode:"modelViewMatrix",minConfidence:.6};console.assert(-1!==["pattern","barcode","unknown"].indexOf(this.parameters.type),"illegal value",this.parameters.type);console.assert(-1!==["modelViewMatrix","cameraTransformMatrix"].indexOf(this.parameters.changeMatrixMode),"illegal value",this.parameters.changeMatrixMode),this.object3d=t,this.object3d.matrixAutoUpdate=!1,this.object3d.visible=!1,function(e){if(void 0===e)return;for(var t in e){var r=e[t];if(void 0!==r)void 0!==a.parameters[t]?a.parameters[t]=r:console.warn("THREEx.ArMarkerControls: '"+t+"' is not a property of this material.");else console.warn("THREEx.ArMarkerControls: '"+t+"' parameter is undefined.")}}(r),e.addMarker(this),"artoolkit"===a.context.parameters.trackingBackend?this._initArtoolkit():console.assert(!1)},M.MarkerControls.prototype=Object.create(A.ArBaseControls.prototype),M.MarkerControls.prototype.constructor=A.ArMarkerControls,M.MarkerControls.prototype.dispose=function(){this.context.removeMarker(this)},M.MarkerControls.prototype.updateWithModelViewMatrix=function(e){var t=this.object3d;if(t.visible=!0,"artoolkit"===this.context.parameters.trackingBackend){var r=(new l.G).copy(this.context._artoolkitProjectionAxisTransformMatrix);r.multiply(e),e.copy(r)}if("tango"!==this.context.parameters.trackingBackend){var a=(new l.G).makeRotationX(Math.PI/2);e.multiply(a)}"modelViewMatrix"===this.parameters.changeMatrixMode?t.matrix.copy(e):"cameraTransformMatrix"===this.parameters.changeMatrixMode?t.matrix.getInverse(e):console.assert(!1),t.matrix.decompose(t.position,t.quaternion,t.scale),this.dispatchEvent({type:"markerFound"})},M.MarkerControls.prototype.name=function(){var e="";(e+=this.parameters.type,"pattern"===this.parameters.type)?e+=" - "+this.parameters.patternUrl.replace(/^.*\//g,""):"barcode"===this.parameters.type?e+=" - "+this.parameters.barcodeValue:console.assert(!1,"no .name() implemented for this marker controls");return e},M.MarkerControls.prototype._initArtoolkit=function(){var e=this,t=null,r=setInterval((function(){null!==e.context.arController&&(clearInterval(r),r=null,function(){var r=e.context.arController;console.assert(null!==r),"pattern"===e.parameters.type?r.loadMarker(e.parameters.patternUrl,(function(a){t=a,r.trackPatternMarkerId(t,e.parameters.size)})):"barcode"===e.parameters.type?(t=e.parameters.barcodeValue,r.trackBarcodeMarkerId(t,e.parameters.size)):"unknown"===e.parameters.type?t=null:console.log(!1,"invalid marker type",e.parameters.type);r.addEventListener("getMarker",(function(r){if(r.data.type===b.PATTERN_MARKER&&"pattern"===e.parameters.type){if(null===t)return;r.data.marker.idPatt===t&&a(r)}else if(r.data.type===b.BARCODE_MARKER&&"barcode"===e.parameters.type){if(null===t)return;r.data.marker.idMatrix===t&&a(r)}else r.data.type===b.UNKNOWN_MARKER&&"unknown"===e.parameters.type&&a(r)}))}())}),20);return;function a(t){if(!(t.data.type===b.PATTERN_MARKER&&t.data.marker.cfPatt<e.parameters.minConfidence)&&!(t.data.type===b.BARCODE_MARKER&&t.data.marker.cfMatt<e.parameters.minConfidence)){var r=(new l.G).fromArray(t.data.matrix);e.updateWithModelViewMatrix(r)}}},i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.5be8fecb.chunk.js.map