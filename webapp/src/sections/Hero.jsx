import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera } from '@react-three/drei';
import Loader from "../components/Loader";
import HackerRoom from "../components/HackerRoom";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import {calculateSizes} from "../constants/index";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
const Hero = () => {
  // const x = useControls("HackerRoom",{
  //   positionX:{
  //     value:2.5,
  //     max:10,
  //     min:-10
  //   },
  //   positionY:{
  //     value:2.5,
  //     max:10,
  //     min:-10
  //   },
  //   positionZ:{
  //     value:2.5,
  //     max:10,
  //     min:-10
  //   },
  //   rotationX:{
  //     value:2.5,
  //     max:10,
  //     min:-10
  //   },
  //   rotationY:{
  //     value:2.5,
  //     max:10,
  //     min:-10
  //   },
  //   rotationZ:{
  //     value:2.5,
  //     max:10,
  //     min:-10
  //   },
  //   scale:{
  //     value:1,
  //     min:0.01,
  //     max:10
  //   }
  // })
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
    className="min-h-screen w-full flex flex-col relative" id="home"
    >
      <div className=" w-full mx-auto flex flex-col sm:mt36 mt-20 c-space gap-3">
        <p className=" sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I'm Jayant <span className="waving-hand">👋</span> </p>
        <p
        className="hero_tag text-gray_gradient font-generalsans text-center  sm:text-4xl font-medium"
        >Building Projects And Learning</p>
      </div>

      <div
      className=" w-full h-full inset-0 absolute"
      >   
          {/* <Leva/> */}
          <Canvas
          className="w-full h-full"
          >
            <Suspense fallback={<Loader/>}>
              <PerspectiveCamera makeDefault position={[0, 0, 17]} >
              </PerspectiveCamera>
              <HeroCamera isMobile={isMobile} >
                <HackerRoom 
                position={sizes.deskPosition} 
                rotation={[0.2, -Math.PI, 0]}
                scale={ sizes.deskScale}
                />
              </HeroCamera>
              

              <group>
                <Target position={sizes.targetPosition} scale={sizes.targetScale} />
                <ReactLogo position={sizes.reactLogoPosition}   />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>
            </Suspense>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5} />
          </Canvas>

      </div>
      <div className=" absolute bottom-7 left-0 right-0 w-full  flex justify-center z-10

      ">
          <a href="#about" className=" w-fit"
          >
            <Button name="Let's Connect"  containerClass="sm:w-fit w-full sm:min-w-36" />
          </a>
      </div>
    </section>
  )
}

export default Hero