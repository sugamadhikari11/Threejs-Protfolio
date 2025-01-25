import { PerspectiveCamera } from '@react-three/drei'
import React, { Suspense } from 'react'
import HackerRoom from '../componenets/HackerRoom'
import CanvasLoader from '../componenets/CanvasLoader'
import { Canvas } from '@react-three/fiber'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
// import { materialLineWidth } from 'three/tsl'
import {calculateSizes} from "../constants/index.js";
import Target from '../componenets/Target.jsx'


const Hero = () => {
    // const x = useControls('HackerRoom',{
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10,
    //     },
    // })
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen border-2 w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-2xl text-2xl font-medium text-white text-center font-generalsans'>
                Hello, I am Sugam <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'>
                Learning and growing every day
            </p>
        </div>

        <div className='w-full h-full absolute inset-9'>
        {/* <Leva /> */}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0,0,30]} />
                    <HackerRoom
                    position = {sizes.deskPosition}
                    rotation = {[0, -Math.PI, 0]}
                    scale = {sizes.deskScale}
                    />
                    <group>
                      
                        <Target position={sizes.targetPosition} />
                    </group>
                   
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={0.5}/>
                </Suspense>
            </Canvas>
        </div>
        
    </section>
  )
}

export default Hero