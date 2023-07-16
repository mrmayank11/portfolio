import React, { Suspense } from "react";
import Cube from './Cube'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const About = () => {
  return (
    <div className=" mx-auto h-full flex items-center justify-center snap-center snap-always  w-11/12">
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <div className="flex flex-col justify-center px-4 w-10/12">

        <h2 className="text-white font-bold text-2xl md:text-6xl my-4">Education</h2>
        <div className="mb-2">
          <div className="flex justify-between">
            <h3 className="text-white font-bold text-base sm:text-xl md:text-2xl ">Delhi Technological University</h3>
            <p>2024</p>
          </div>
          <div>
            <p className="  text-xs sm:text-base ">Computer Science Engineering
            </p>
            <p>CGPA: 8.76</p>
          </div>

        </div>

        <div className="mb-2">
          <div className="flex justify-between ">
            <h3 className="text-white font-bold text-base sm:text-xl md:text-2xl ">St Paul's School</h3>
            <p>2019</p>
          </div>
          <div>
            <p className="  text-xs sm:text-base ">Class 12th
            </p>
            <p>Percentage: 91.6%</p>
          </div>

        </div>
        <div className="mb-2">
          <div className="flex justify-between">
            <h3 className="text-white font-bold text-base sm:text-xl md:text-2xl ">St Paul's School</h3>
            <p>2017</p>
          </div>
          <div>
            <p className="  text-xs sm:text-base ">Class 10th
            </p>
            <p>CGPA: 9</p>
          </div>

        </div>



      </div>

    </div>

  )
}

export default About