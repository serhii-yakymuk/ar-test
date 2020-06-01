(this["webpackJsonpar-test"]=this["webpackJsonpar-test"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t){window.ARjs=window.ARjs||{},window.THREEx=window.THREEx||{};var a=window,r=a.ARjs,o=a.THREEx;r.Source=o.ArToolkitSource=function(e){var t=this;this.ready=!1,this.domElement=null,this.parameters={sourceType:"webcam",sourceUrl:null,sourceWidth:640,sourceHeight:480,displayWidth:640,displayHeight:480},function(e){if(void 0===e)return;for(var a in e){var r=e[a];if(void 0!==r)void 0!==t.parameters[a]?t.parameters[a]=r:console.warn("THREEx.ArToolkitSource: '"+a+"' is not a property of this material.");else console.warn("THREEx.ArToolkitSource: '"+a+"' parameter is undefined.")}}(e)},r.Source.prototype.init=function(e,t){var a,r=this;return"image"===this.parameters.sourceType?a=this._initSourceImage(o,t):"video"===this.parameters.sourceType?a=this._initSourceVideo(o,t):"webcam"===this.parameters.sourceType?a=this._initSourceWebcam(o,t):console.assert(!1),this.domElement=a,this.domElement.style.position="absolute",this.domElement.style.top="0px",this.domElement.style.left="0px",this.domElement.style.zIndex="-2",this;function o(){document.getElementById("ar-container").appendChild(r.domElement),r.ready=!0,e&&e()}},r.Source.prototype._initSourceImage=function(e){var t=document.createElement("img");t.src=this.parameters.sourceUrl,t.width=this.parameters.sourceWidth,t.height=this.parameters.sourceHeight,t.style.width=this.parameters.displayWidth+"px",t.style.height=this.parameters.displayHeight+"px";var a=setInterval((function(){t.naturalWidth&&(e(),clearInterval(a))}),20);return t},r.Source.prototype._initSourceVideo=function(e){var t=document.createElement("video");t.src=this.parameters.sourceUrl,t.style.objectFit="initial",t.autoplay=!0,t.webkitPlaysinline=!0,t.controls=!1,t.loop=!0,t.muted=!0,document.body.addEventListener("click",(function e(){document.body.removeEventListener("click",e),t.play()})),t.width=this.parameters.sourceWidth,t.height=this.parameters.sourceHeight,t.style.width=this.parameters.displayWidth+"px",t.style.height=this.parameters.displayHeight+"px";var a=setInterval((function(){t.videoWidth&&(e(),clearInterval(a))}),20);return t},r.Source.prototype._initSourceWebcam=function(e,t){t=t||function(e){alert("Webcam Error\nName: "+e.name+"\nMessage: "+e.message)};var a,r=document.createElement("video");return r.setAttribute("autoplay",""),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.style.width=this.parameters.displayWidth+"px",r.style.height=this.parameters.displayHeight+"px",void 0===navigator.mediaDevices||void 0===navigator.mediaDevices.enumerateDevices||void 0===navigator.mediaDevices.getUserMedia?(void 0===navigator.mediaDevices?a="navigator.mediaDevices":void 0===navigator.mediaDevices.enumerateDevices?a="navigator.mediaDevices.enumerateDevices":void 0===navigator.mediaDevices.getUserMedia?a="navigator.mediaDevices.getUserMedia":console.assert(!1),t({name:"",message:"WebRTC issue-! "+a+" not present in your browser"}),null):(navigator.mediaDevices.enumerateDevices().then((function(a){navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",width:{min:640,max:1920},height:{min:480,max:1080}}}).then((function(t){r.srcObject=t,document.body.addEventListener("click",(function(){return r.play()}));var a=setInterval((function(){r.videoWidth&&(e(),clearInterval(a))}),20)})).catch((function(e){t({name:e.name,message:e.message})}))})).catch((function(e){t({message:e.message})})),r)},r.Source.prototype.domElementWidth=function(){return parseInt(this.domElement.style.width)},r.Source.prototype.domElementHeight=function(){return parseInt(this.domElement.style.height)},r.Source.prototype.onResizeElement=function(){var e,t,a=window.innerWidth,r=window.innerHeight;console.assert(0===arguments.length),"IMG"===this.domElement.nodeName?(e=this.domElement.naturalWidth,t=this.domElement.naturalHeight):"VIDEO"===this.domElement.nodeName?(e=this.domElement.videoWidth,t=this.domElement.videoHeight):console.assert(!1);var o=e/t,n=a/r;if(n<o){var i=o*r;this.domElement.style.width=i+"px",this.domElement.style.marginLeft=-(i-a)/2+"px",this.domElement.style.height=r+"px",this.domElement.style.marginTop="0px"}else{var s=1/(o/a);this.domElement.style.height=s+"px",this.domElement.style.marginTop=-(s-r)/2+"px",this.domElement.style.width=a+"px",this.domElement.style.marginLeft="0px"}},r.Source.prototype.copyElementSizeTo=function(e){window.innerWidth>window.innerHeight?(e.style.width=this.domElement.style.width,e.style.height=this.domElement.style.height,e.style.marginLeft=this.domElement.style.marginLeft,e.style.marginTop=this.domElement.style.marginTop):(e.style.height=this.domElement.style.height,e.style.width=4*parseInt(e.style.height)/3+"px",e.style.marginLeft=(window.innerWidth-parseInt(e.style.width))/2+"px",e.style.marginTop=0)},r.Source.prototype.copySizeTo=function(){console.warn("obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"),this.copyElementSizeTo.apply(this,arguments)},r.Source.prototype.onResize=function(e,t,a){if(3!==arguments.length)return console.warn("obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"),this.onResizeElement.apply(this,arguments);var r=e.parameters.trackingBackend;if("artoolkit"===r){this.onResizeElement();var o=!!t.domElement.dataset.aframeCanvas;!1===o&&this.copyElementSizeTo(t.domElement),null!==e.arController&&this.copyElementSizeTo(e.arController.canvas)}else"aruco"===r?(this.onResizeElement(),this.copyElementSizeTo(t.domElement),this.copyElementSizeTo(e.arucoContext.canvas)):"tango"===r?t.setSize(window.innerWidth,window.innerHeight):console.assert(!1,"unhandled trackingBackend "+r);"artoolkit"===r?null!==e.arController&&a.projectionMatrix.copy(e.getProjectionMatrix()):console.assert(!1,"unhandled trackingBackend "+r)}},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),o=a.n(r),n=a(6),i=a.n(n),s=a(2),l=a(0),c=a(7),d=a(8),m=a.n(d),h=(a(16),function(e){var t=e.width,a=e.height,r=e.style,n=e.fillColor,i=e.isActive,s=e.className;return o.a.createElement("svg",{style:r,width:t,height:a,"aria-hidden":"true",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",className:m()(s,i&&"sound-wave--active")},o.a.createElement("g",{fill:n},o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-1",x:"4.9",rx:"1.5"}),o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-2",x:"13.5",rx:"1.5"}),o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-3",x:"22.1",rx:"1.5"}),o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-2",x:"30.7",rx:"1.5"}),o.a.createElement("rect",{className:"sound-wave-bar sound-wave-bar-1",x:"39.5",rx:"1.5"})))});h.defaultProps={width:"24",height:"24",fillColor:"#fff"};var p=h,u=function(e){var t=e.width,a=e.height,r=e.style,n=e.strokeColor,i=e.isMute;return o.a.createElement("svg",{style:r,width:t,height:a,"aria-hidden":"true",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{transform:"translate(1, 3)",stroke:n,strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{d:"M5.57,6.06 L1.25,6.06 C0.84,6.06 0.5,6.4 0.5,6.8 L0.5,11.36 C0.5,11.78 0.84,12.12 1.25,12.12 L5.57,12.12 C6.7,15.03 9.34,17.06 12.43,17.38 C12.64,17.4 12.85,17.33 13,17.18 C13.16,17.04 13.25,16.84 13.25,16.62 L13.25,1.55 C13.25,1.34 13.16,1.13 13,1 C12.85,0.85 12.64,0.78 12.43,0.8 C9.34,1.11 6.7,3.15 5.57,6.06 Z"}),i?o.a.createElement(o.a.Fragment,null,o.a.createElement("line",{x1:"21.32",y1:"7",x2:"17",y2:"11.5"}),o.a.createElement("line",{x1:"17",y1:"7",x2:"21.32",y2:"11.5"})):o.a.createElement(o.a.Fragment,null,o.a.createElement("path",{d:"M20.46,12.67 C21.85,10.49 21.85,7.69 20.46,5.5"}),o.a.createElement("path",{d:"M17.56,11.357 C18.6,10.06 18.6,8.2 17.56,6.9"}))))};u.defaultProps={width:"24",height:"24",strokeColor:"#fff"};var v,g=u,y=a(4),f=a.n(y),E=a(9),w=a(10),x=[{width:160,height:120},{width:320,height:180},{width:320,height:240},{width:640,height:360},{width:640,height:480},{width:768,height:576},{width:1024,height:576},{width:1280,height:720},{width:1280,height:768},{width:1280,height:800},{width:1280,height:900},{width:1280,height:1e3},{width:1920,height:1080}],k=0,b=x.length,C={width:0,height:0},M=function(){var e=Object(w.a)(f.a.mark((function e(){var t,a,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{width:640,height:480});case 2:if(!(k<=b)){e.next=21;break}return e.prev=3,v=Math.floor((k+b)/2),t={video:{mandatory:{minWidth:x[v].width,minHeight:x[v].height,maxWidth:x[v].width,maxHeight:x[v].height},optional:[]}},e.next=8,navigator.mediaDevices.getUserMedia(t);case 8:a=e.sent,C.width=x[v].width,C.height=x[v].height,k=v+1,r=Object(E.a)(a.getTracks());try{for(r.s();!(o=r.n()).done;)o.value.stop()}catch(n){r.e(n)}finally{r.f()}e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),b=v-1;case 19:e.next=2;break;case 21:return e.abrupt("return",C);case 22:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(){return e.apply(this,arguments)}}(),A=(a(18),function(e){var t=e.initialScale,a=e.patternUrl,n=e.cameraParametersUrl,i=e.modelUrl,d=e.audioUrl,m=Object(r.useRef)(),h=Object(r.useRef)(),u=Object(r.useState)(t),v=Object(s.a)(u,2),y=v[0],f=v[1],E=Object(r.useState)(!1),w=Object(s.a)(E,2),x=w[0],k=w[1],b=Object(r.useState)(!1),C=Object(s.a)(b,2),A=C[0],_=C[1],R=Object(r.useState)(null),T=Object(s.a)(R,2),S=T[0],j=T[1];return Object(r.useEffect)((function(){M().then(j)}),[]),Object(r.useEffect)((function(){h.current&&h.current.scene.scale.set(y,y,y)}),[y]),Object(r.useEffect)((function(){if(S){var e=!0,r=!1,o=S.width,s=S.height,d=window.THREEx,p=d.ArToolkitSource,u=d.ArToolkitContext,v=d.ArMarkerControls,g=new l.ab,y=new l.g,f=new l.mb({antialias:!0,alpha:!0}),E=new p({sourceType:"webcam",sourceWidth:o,sourceHeight:s,displayWidth:o,displayHeight:s}),w=new u({cameraParametersUrl:n,detectionMode:"mono",canvasWidth:o,canvasHeight:s}),x=new l.o,k=function(){E.onResizeElement(),E.copyElementSizeTo(f.domElement),null!==w.arController&&E.copyElementSizeTo(w.arController.canvas)},b=(new l.gb).load("".concat("/ar-test","/models/anchor/Textures/Passage_HDR_1K.exr"));return g.add(y),g.environment=b,f.setClearColor(new l.i("lightgrey"),0),f.setSize(o,s),f.setPixelRatio(window.devicePixelRatio),f.domElement.style.position="absolute",f.domElement.style.top="0px",f.domElement.style.left="0px",document.getElementById("ar-container").appendChild(f.domElement),E.init(k),window.addEventListener("resize",k),w.init((function(){y.projectionMatrix.copy(w.getProjectionMatrix())})),g.add(x),new v(w,x,{type:"pattern",patternUrl:a}),(new c.a).load(i,(function(e){h.current=e;var a=e.scene;console.log(e),a.scale.set(t,t,t);var r=new l.a(16777215,2);a.add(r);var o=new l.S(16777215,1);o.position.set(1,1,1),a.add(o);var n=new l.S(16777215,1);n.position.set(-1,1,-1),a.add(n);var i=new l.S(16777215,1);i.position.set(-1,-1,-1),a.add(i),x.add(a)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log("An error happened:",e)})),function t(){e&&(requestAnimationFrame(t),r!==x.visible&&(_(x.visible),r=x.visible,x.visible?m.current.play():m.current.pause()),x.visible&&(h.current.scene.rotation.y+=.01),!1!==E.ready&&w.update(E.domElement),f.render(g,y))}(),function(){e=!1,E.domElement.srcObject.getTracks().forEach((function(e){return e.stop()})),document.getElementById("ar-container").removeChild(E.domElement),document.getElementById("ar-container").removeChild(f.domElement)}}}),[t,n,a,i,S]),o.a.createElement("div",null,o.a.createElement("audio",{loop:!0,ref:m,preload:"auto"},o.a.createElement("source",{src:d,type:"audio/mpeg"})),o.a.createElement("button",{className:"ar-icon ar-icon-sound",onClick:function(){k(!x),m.current.volume=x?1:0}},o.a.createElement(g,{width:32,height:32,isMute:x})),o.a.createElement(p,{width:32,height:32,isActive:A,className:"ar-icon ar-icon-wave"}),o.a.createElement("button",{className:"ar-scale-button ar-scale-button--plus",onClick:function(){f((function(e){return e+1e-4}))}},"+"),o.a.createElement("button",{className:"ar-scale-button ar-scale-button--minus",onClick:function(){f((function(e){return Math.max(.001,e-1e-4)}))}},"-"))});A.defaultProps={initialScale:.005,audioUrl:"".concat("/ar-test","/audio/anchor.mp3"),modelUrl:"".concat("/ar-test","/models/anchor/MiraiKoukai2.gltf"),patternUrl:"".concat("/ar-test","/data/hiro.patt"),cameraParametersUrl:"".concat("/ar-test","/data/camera_para.dat")};var _=A;a(19);var R=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("button",{className:"App-button",onClick:function(){return n((function(e){return!e}))}},a?"Disable":"Enable"," AR"),a&&o.a.createElement(_,null))};a(20);window.ARjs=window.ARjs||{},window.THREEx=window.THREEx||{};var T=window,S=T.ARjs,j=T.THREEx,I=T.artoolkit,H=T.ARController,O=T.ARCameraParam;S.Context=j.ArToolkitContext=function(e){var t=this;t._updatedAt=null,this.parameters={trackingBackend:"artoolkit",debug:!1,detectionMode:"mono",matrixCodeType:"3x3",cameraParametersUrl:S.Context.baseURL+"parameters/camera_para.dat",maxDetectionRate:60,canvasWidth:640,canvasHeight:480,patternRatio:.5,imageSmoothingEnabled:!1},console.assert(-1!==["artoolkit"].indexOf(this.parameters.trackingBackend),"invalid parameter trackingBackend",this.parameters.trackingBackend),console.assert(-1!==["color","color_and_matrix","mono","mono_and_matrix"].indexOf(this.parameters.detectionMode),"invalid parameter detectionMode",this.parameters.detectionMode),this.arController=null,this.arucoContext=null,t.initialized=!1,this._arMarkersControls=[],function(e){if(void 0===e)return;for(var a in e){var r=e[a];if(void 0!==r)void 0!==t.parameters[a]?t.parameters[a]=r:console.warn("THREEx.ArToolkitContext: '"+a+"' is not a property of this material.");else console.warn("THREEx.ArToolkitContext: '"+a+"' parameter is undefined.")}}(e)},Object.assign(S.Context.prototype,l.l.prototype),S.Context.baseURL="https://jeromeetienne.github.io/AR.js/three.js/",S.Context.REVISION="1.6.0",S.Context.createDefaultCamera=function(e){if(console.assert(!1,"use ARjs.Utils.createDefaultCamera instead"),"artoolkit"===e)var t=new l.g;else console.assert(!1);return t},S.Context.prototype.init=function(e){var t=this;return void("artoolkit"===this.parameters.trackingBackend?this._initArtoolkit((function(){t.dispatchEvent({type:"initialized"}),t.initialized=!0,e&&e()})):console.assert(!1))},S.Context.prototype.update=function(e){if("artoolkit"===this.parameters.trackingBackend&&null===this.arController)return!1;var t=performance.now();return!(null!==this._updatedAt&&t-this._updatedAt<1e3/this.parameters.maxDetectionRate)&&(this._updatedAt=t,this._arMarkersControls.forEach((function(e){e.object3d.visible=!1})),"artoolkit"===this.parameters.trackingBackend?this._updateArtoolkit(e):console.assert(!1),this.dispatchEvent({type:"sourceProcessed"}),!0)},S.Context.prototype.addMarker=function(e){console.assert(e instanceof j.ArMarkerControls),this._arMarkersControls.push(e)},S.Context.prototype.removeMarker=function(e){console.assert(e instanceof j.ArMarkerControls);var t=this._arMarkersControls.findIndex((function(t){return t.id===e.id}));this._arMarkersControls.splice(t,1)},S.Context.prototype._initArtoolkit=function(e){var t=this;this._artoolkitProjectionAxisTransformMatrix=new l.F,this._artoolkitProjectionAxisTransformMatrix.multiply((new l.F).makeRotationY(Math.PI)),this._artoolkitProjectionAxisTransformMatrix.multiply((new l.F).makeRotationZ(Math.PI));var a=new O(t.parameters.cameraParametersUrl,(function(){var r=new H(t.parameters.canvasWidth,t.parameters.canvasHeight,a);t.arController=r,r.ctx.mozImageSmoothingEnabled=t.parameters.imageSmoothingEnabled,r.ctx.webkitImageSmoothingEnabled=t.parameters.imageSmoothingEnabled,r.ctx.msImageSmoothingEnabled=t.parameters.imageSmoothingEnabled,r.ctx.imageSmoothingEnabled=t.parameters.imageSmoothingEnabled,!0===t.parameters.debug&&(r.debugSetup(),r.canvas.style.position="absolute",r.canvas.style.top="0px",r.canvas.style.opacity="0.6",r.canvas.style.pointerEvents="none",r.canvas.style.zIndex="-1");var o={color:I.AR_TEMPLATE_MATCHING_COLOR,color_and_matrix:I.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX,mono:I.AR_TEMPLATE_MATCHING_MONO,mono_and_matrix:I.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX}[t.parameters.detectionMode];console.assert(void 0!==o),r.setPatternDetectionMode(o);var n={"3x3":I.AR_MATRIX_CODE_3x3,"3x3_HAMMING63":I.AR_MATRIX_CODE_3x3_HAMMING63,"3x3_PARITY65":I.AR_MATRIX_CODE_3x3_PARITY65,"4x4":I.AR_MATRIX_CODE_4x4,"4x4_BCH_13_9_3":I.AR_MATRIX_CODE_4x4_BCH_13_9_3,"4x4_BCH_13_5_5":I.AR_MATRIX_CODE_4x4_BCH_13_5_5}[t.parameters.matrixCodeType];console.assert(void 0!==n),r.setMatrixCodeType(n),r.setPattRatio(t.parameters.patternRatio),e()}));return this},S.Context.prototype.getProjectionMatrix=function(e){console.assert("artoolkit"===this.parameters.trackingBackend),console.assert(this.arController,"arController MUST be initialized to call this function");var t=this.arController.getCameraMatrix(),a=(new l.F).fromArray(t);return a.multiply(this._artoolkitProjectionAxisTransformMatrix),a},S.Context.prototype._updateArtoolkit=function(e){this.arController.process(e)},window.THREEx=window.THREEx||{};var P=window.THREEx;P.ArBaseControls=function(e){this.id=P.ArBaseControls.id++,this.object3d=e,this.object3d.matrixAutoUpdate=!1,this.object3d.visible=!1},P.ArBaseControls.id=0,Object.assign(P.ArBaseControls.prototype,l.l.prototype),P.ArBaseControls.prototype.update=function(){console.assert(!1,"you need to implement your own update")},P.ArBaseControls.prototype.name=function(){return console.assert(!1,"you need to implement your own .name()"),"Not yet implemented - name()"},window.ARjs=window.ARjs||{},window.THREEx=window.THREEx||{};var B=window,D=B.artoolkit,W=B.ARjs,N=B.THREEx;W.MarkerControls=N.ArMarkerControls=function(e,t,a){var r=this;N.ArBaseControls.call(this,t),this.context=e,this.parameters={size:1,type:"unknown",patternUrl:null,barcodeValue:null,changeMatrixMode:"modelViewMatrix",minConfidence:.6};console.assert(-1!==["pattern","barcode","unknown"].indexOf(this.parameters.type),"illegal value",this.parameters.type);console.assert(-1!==["modelViewMatrix","cameraTransformMatrix"].indexOf(this.parameters.changeMatrixMode),"illegal value",this.parameters.changeMatrixMode),this.object3d=t,this.object3d.matrixAutoUpdate=!1,this.object3d.visible=!1,function(e){if(void 0===e)return;for(var t in e){var a=e[t];if(void 0!==a)void 0!==r.parameters[t]?r.parameters[t]=a:console.warn("THREEx.ArMarkerControls: '"+t+"' is not a property of this material.");else console.warn("THREEx.ArMarkerControls: '"+t+"' parameter is undefined.")}}(a),e.addMarker(this),"artoolkit"===r.context.parameters.trackingBackend?this._initArtoolkit():console.assert(!1)},W.MarkerControls.prototype=Object.create(N.ArBaseControls.prototype),W.MarkerControls.prototype.constructor=N.ArMarkerControls,W.MarkerControls.prototype.dispose=function(){this.context.removeMarker(this)},W.MarkerControls.prototype.updateWithModelViewMatrix=function(e){var t=this.object3d;if(t.visible=!0,"artoolkit"===this.context.parameters.trackingBackend){var a=(new l.F).copy(this.context._artoolkitProjectionAxisTransformMatrix);a.multiply(e),e.copy(a)}if("tango"!==this.context.parameters.trackingBackend){var r=(new l.F).makeRotationX(Math.PI/2);e.multiply(r)}"modelViewMatrix"===this.parameters.changeMatrixMode?t.matrix.copy(e):"cameraTransformMatrix"===this.parameters.changeMatrixMode?t.matrix.getInverse(e):console.assert(!1),t.matrix.decompose(t.position,t.quaternion,t.scale),this.dispatchEvent({type:"markerFound"})},W.MarkerControls.prototype.name=function(){var e="";(e+=this.parameters.type,"pattern"===this.parameters.type)?e+=" - "+this.parameters.patternUrl.replace(/^.*\//g,""):"barcode"===this.parameters.type?e+=" - "+this.parameters.barcodeValue:console.assert(!1,"no .name() implemented for this marker controls");return e},W.MarkerControls.prototype._initArtoolkit=function(){var e=this,t=null,a=setInterval((function(){null!==e.context.arController&&(clearInterval(a),a=null,function(){var a=e.context.arController;console.assert(null!==a),"pattern"===e.parameters.type?a.loadMarker(e.parameters.patternUrl,(function(r){t=r,a.trackPatternMarkerId(t,e.parameters.size)})):"barcode"===e.parameters.type?(t=e.parameters.barcodeValue,a.trackBarcodeMarkerId(t,e.parameters.size)):"unknown"===e.parameters.type?t=null:console.log(!1,"invalid marker type",e.parameters.type);a.addEventListener("getMarker",(function(a){if(a.data.type===D.PATTERN_MARKER&&"pattern"===e.parameters.type){if(null===t)return;a.data.marker.idPatt===t&&r(a)}else if(a.data.type===D.BARCODE_MARKER&&"barcode"===e.parameters.type){if(null===t)return;a.data.marker.idMatrix===t&&r(a)}else a.data.type===D.UNKNOWN_MARKER&&"unknown"===e.parameters.type&&r(a)}))}())}),20);return;function r(t){if(!(t.data.type===D.PATTERN_MARKER&&t.data.marker.cfPatt<e.parameters.minConfidence)&&!(t.data.type===D.BARCODE_MARKER&&t.data.marker.cfMatt<e.parameters.minConfidence)){var a=(new l.F).fromArray(t.data.matrix);e.updateWithModelViewMatrix(a)}}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b6f97d33.chunk.js.map