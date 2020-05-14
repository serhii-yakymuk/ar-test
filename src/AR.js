import React, { useEffect } from 'react';

function AR() {
  useEffect(() => {
    let isMounted = true;
    const { THREE, THREEx } = window;
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
    const arToolkitSource = new THREEx.ArToolkitSource({
      sourceType: 'webcam'
    });
    const arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: `${process.env.PUBLIC_URL}/data/camera_para.dat`,
      detectionMode: 'mono'
    });
    const markerRoot = new THREE.Group();

    const onResize = () => {
      arToolkitSource.onResizeElement();
      arToolkitSource.copyElementSizeTo(renderer.domElement);
      if (arToolkitContext.arController !== null) {
        arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
      }
    }

    const initialize = () => {
      scene.add(ambientLight);
      scene.add(camera);
      renderer.setClearColor(new THREE.Color('lightgrey'), 0)
      renderer.setSize(640, 480);
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0px';
      renderer.domElement.style.left = '0px';
      console.log(renderer.domElement);
      document.body.appendChild(renderer.domElement);
    
      arToolkitSource.init(onResize);

      window.addEventListener('resize', onResize);

      arToolkitContext.init(() => {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
      });

      scene.add(markerRoot);
      const markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
        type: 'pattern', patternUrl: `${process.env.PUBLIC_URL}/data/hiro.patt`,
      })
    
      const cubeGeometry = new THREE.CubeGeometry(1, 1, 1);
      const cubeMaterial = new THREE.MeshNormalMaterial({
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide
      });
      
      const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cubeMesh.position.y = 0.5;
      
      markerRoot.add(cubeMesh);
    }

    const update = () => {
      if (arToolkitSource.ready !== false) {
        arToolkitContext.update(arToolkitSource.domElement);
      }
    };

    const render = () => {
      renderer.render(scene, camera);
    };
    
    
    const animate = () => {
      if (isMounted) {
        requestAnimationFrame(animate);
        update();
        render();
      }
    };

    initialize();
    animate();

    return () => {
      isMounted = false;
      arToolkitSource.domElement.srcObject.getTracks()
        .forEach(track => track.stop());
      document.body.removeChild(arToolkitSource.domElement);
    };
  }, []);

  return (
    <div />
  );
}

export default AR;
