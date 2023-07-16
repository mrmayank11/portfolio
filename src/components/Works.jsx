import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, RenderTexture } from '@react-three/drei'
const Works = () => {
  return (
    <div className='h-full snap-center snap-always'>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 11]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />

          <meshStandardMaterial>
            {/* <RenderTexture attach="map"> */}
            {/* <PerspectiveCamera makeDefault
                position={[0, 0, 2]}
              /> */}
            <color attach="background" args={["red"]} />
            {/* <Text fontSize={1} color="O#555"> hello */}
            {/* </Text> </RenderTexture> */}
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  )
}

export default Works