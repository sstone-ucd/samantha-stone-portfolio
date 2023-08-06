import React, {Suspense} from 'react'; 
import { Canvas } from '@react-three/fiber';
import { Model } from "../../../public/Bird.jsx";
import { OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from '../Loader'; 

const BirdCanvas = () => {
  
    return (
      <Canvas
          //FOV: how wide the canvas is
          camera={{ position: [0, 0, 10], fov:25 }}
          shadows
          frameloop='demand'  
      >


        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 1.87}
            minPolarAngle={Math.PI / 2}
            //maxAzimuthAngle={Math.PI/2}
            //autoRotate
            //autoRotateSpeed={5}
  
          />
          <Model />
        </Suspense>
  
        <Preload all />
      </Canvas>
    );
  };
  
  export default BirdCanvas;