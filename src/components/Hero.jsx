import React, { Suspense } from "react";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero = () => {
  return (
    <div className="snap-center snap-always h-screen flex-col">
      <Navbar />
      {/* <div className="w-2/3  mx-auto flex mt-28 ">
        <div className="flex flex-col">
          <div className=" h-5 w-5 bg-violet-700 rounded-full " />
          <div className='w-1 sm:h-80 h-40 violet-gradient ml-2' />
        </div>

        <div className="px-5 ">
          <h1 className={` text-white font-bold text-4xl md:text-6xl`}>
            Hi, I'm <span className='text-violet-700'>Mayank</span>
          </h1>
          <p className={` mt-2 text-white-100  font-medium text-l md:text-3xl`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div> */}
      <div className="w-5/6 mx-auto h-full flex items-center justify-center">

        <div className="flex flex-col justify-center px-4 w-6/12 ">

          <h2 className="text-white font-bold text-2xl md:text-6xl my-4">Hello, I'm Mayank Rawat</h2>
          {/* <h3 className="text-white font-bold text-base sm:text-xl md:text-2xl mb-1">What we do</h3> */}

          <p className=" my-3 text-xs sm:text-base ">I work with front-end technologies like React, or NextJS but I've also worked with backend technologies like Express, nodeJS, SQL


          </p>

          <p className="mb-2 text-xs sm:text-base ">
            This entire portfolio was made with  JavaScript, ThreeJS, and TailwindCss
          </p>


        </div>

        <div className="">

          <img className="animate-waving-hand h-600  m-auto  z-10" src="./src/assets/imageedit_1_9554119963.png" alt="no img" srcset="" />

        </div>


      </div>


    </div>


  )
}

export default Hero