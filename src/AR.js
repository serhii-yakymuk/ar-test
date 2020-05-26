import React, { useEffect } from 'react';
import { Scene, Camera, WebGLRenderer, Group, Color, AnimationMixer, AnimationClip, Clock, HemisphereLight, PlaneBufferGeometry, MeshBasicMaterial, Mesh } from 'three';
/* import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'; */
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



function AR() {
  useEffect(() => {
    // let fishMesh;
    let robotGltf;
    let mixer;
    let deltaTime = 0;
    let isMounted = true;
    const { THREEx } = window;
    const clock = new Clock();
    const scene = new Scene();
    const camera = new Camera();
    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true
    });
    const light = new HemisphereLight(0xffffbb, 0x080820, 12);
    // const light = new AmbientLight(0x404040, 15);
    const arToolkitSource = new THREEx.ArToolkitSource({
      sourceType: 'webcam'
    });
    const arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: `${process.env.PUBLIC_URL}/data/camera_para.dat`,
      detectionMode: 'mono'
    });
    const markerRoot = new Group();

    const onResize = () => {
      arToolkitSource.onResizeElement();
      arToolkitSource.copyElementSizeTo(renderer.domElement);
      if (arToolkitContext.arController !== null) {
        arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
      }
    }

    const initialize = () => {
      scene.add(light);
      scene.add(camera);
      renderer.setClearColor(new Color('lightgrey'), 0)
      renderer.setSize(640, 480);
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0px';
      renderer.domElement.style.left = '0px';
      document.getElementById('ar-container').appendChild(renderer.domElement);
    
      arToolkitSource.init(onResize);

      window.addEventListener('resize', onResize);

      arToolkitContext.init(() => {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
      });

      scene.add(markerRoot);
      const markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
        type: 'pattern', patternUrl: `${process.env.PUBLIC_URL}/data/hiro.patt`,
      })

      const geometry1 = new PlaneBufferGeometry(1,1, 4,4);
      const material1 = new MeshBasicMaterial({ color: 0x0033aa, opacity: 0.3 });
      const mesh1 = new Mesh(geometry1, material1);

      mesh1.rotation.x = -Math.PI/2;
      markerRoot.add(mesh1);
      
      function onProgress(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      }

      function onError(error) {
        console.log('An error happened:', error);
      }

      
 
      /* new MTLLoader()
        .setPath('models/')
        .load('fish-2.mtl',materials => {
          materials.preload();
          new OBJLoader()
            .setMaterials(materials)
            .setPath('models/')
            .load( 'fish-2.obj', group => {
              fishMesh = group.children[0];

              fishMesh.material.side = DoubleSide;
              fishMesh.position.y = 0.25;
              fishMesh.position.z = 0;
              fishMesh.scale.set(0.2,0.2,0.2);
              markerRoot.add(fishMesh);

              console.log(markerRoot);
            });
        }); */

      new GLTFLoader()
        .load(`${process.env.PUBLIC_URL}/models/robot/multiclip.gltf`, gltf => {
          robotGltf = gltf;

          robotGltf.scene.scale.set(0.005,0.005,0.005);
          markerRoot.add(robotGltf.scene);

          mixer = new AnimationMixer(robotGltf.scene);

          const clip = AnimationClip.findByName(robotGltf.animations, 'dance');
          const action = mixer.clipAction(clip);

          action.play();

        }, onProgress, onError);
    }

    const update = () => {
      if (markerRoot.visible) {
        robotGltf.scene.rotation.y += 0.01;

        if (mixer) {
          mixer.update(deltaTime);
        }
      }
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
        deltaTime = clock.getDelta();
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
      document.getElementById('ar-container').removeChild(arToolkitSource.domElement);
      document.getElementById('ar-container').removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div />
  );
}

export default AR;
