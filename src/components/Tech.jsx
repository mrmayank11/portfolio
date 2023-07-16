import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, RenderTexture, Stage, PerspectiveCamera } from '@react-three/drei'
import Model from './S1';
Model
const Tech = () => {

  const data = [
    "WEB DEVELOPMENT",
    "FRONTEND",
    "BACKEND",
    "DATA STRUCTURES AND ALGORITMS"
  ]
  return (
    <div className="w-5/6 mx-auto h-full flex items-center justify-center snap-center snap-always">

      <div className="flex flex-col justify-center px-4 w-full">

        {/* <h2 className="text-white font-bold text-2xl md:text-6xl my-4">WEB DEVELOPMENT</h2>
        <h2 className="text-white font-bold text-2xl md:text-6xl my-4">FRONTEND</h2>
        <h2 className="text-white font-bold text-2xl md:text-6xl my-4">BACKEND</h2>

        <h2 className="text-white font-bold text-2xl md:text-6xl my-4">DATA STRUCTURES AND ALGORITMS</h2> */}
        {/* <h2 className="text-white font-bold text-2xl md:text-6xl my-4">Think . Make . Solve</h2> */}

        {data.map((sub) => (
          <h1 className=" text-transparent font-outline-3 font-semibold hover:animate-text text-2xl md:text-6xl my-4">{sub}</h1>
        ))}


      </div>

      {/* <img src="https://github.com/safak/youtube23/blob/3d-portfolio/public/img/moon.png?raw=true" alt="" srcset="" /> */}
      {/* <div className="w-full"> */}
      <Canvas >
        <Stage environment="city" intensity={0.7} >
          <PerspectiveCamera makeDefault position={[15, 8, 5]} />
          <Model />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      {/* </div> */}


    </div>
  )
}

export default Tech