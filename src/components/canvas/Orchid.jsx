import {Suspense, useEffect, useState} from 'react'; 
//import to create a blank 3D canvas to place my image on
import {Canvas} from '@react-three/fiber'; 
//import helpers to draw/control the item on the canvas
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'; 

const Orchids = ({ isMobile }) => {
  const orchid = useGLTF("./orchid_flower/scene.gltf");

  return (
    //lighting components related to the image
    <mesh>
        <hemisphereLight intensity={1} groundColor={"white"} />
        <ambientLight intensity={1} />
        <directionalLight 
            intensity={5} 
            color = "blue"
            castShadow
            position={[-20, 25, 3]}
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
        >
            <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
        </directionalLight>
        <directionalLight
            intensity={5} 
            castShadow
            position={[-20, 10, 3]}
            shadow-mapSize={1024}
        />
        <spotLight 
            intensity={30} 
            position={[-20, 50, -3]} 
            angle={0.12}
            penumbra={0.5}  
            castShadow
            shadow-mapSize={1024} 

        />
        <primitive 
            object={orchid.scene}
            scale = {isMobile ? 0.5 : 0.8}
            position = {isMobile ? [2, 2, -2.2] : [-2, -4, 0]}
            rotation={[-0.01, 0, 0]}
            
        />

    </mesh>
  );
};

const OrchidCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  //Check if device is mobile, if it is, canvas will be smaller
  useEffect(() => {
    // Add a listener for changes to the screen size look for max width 500pm
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
        //FOV: how wide the canvas is
        camera={{ position: [0, 0, 30], fov:25 }}
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
        <Orchids isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default OrchidCanvas;