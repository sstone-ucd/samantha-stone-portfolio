import React, {Suspense} from 'react'; 
import { Canvas } from '@react-three/fiber';
import { Model } from "../../../public/Lotus.jsx";
import { OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from '../Loader.jsx'; 

const LotusCanvas = () => {
  
    return (
      <Canvas
          //FOV: how wide the canvas is
          camera={{ position: [0, 10, 10], fov:25 }}
          shadows
          frameloop='demand'
        
      >
        <ambientLight intensity={1} />
        <directionalLight
            intensity={5} 
            castShadow
            position={[0, 10, 10]}
            shadow-mapSize={1024}
        />
        <directionalLight 
            intensity={10} 
            color="#945D60"
            castShadow
            position={[-20, 25, 3]}
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
        />
        <directionalLight
            intensity={10} 
            color="#AF473C"
            castShadow
            position={[20, -25, -3]}
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
        />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            //maxPolarAngle={Math.PI / 1.87}
            //minPolarAngle={Math.PI / 2}
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
  
  export default LotusCanvas;