import React from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props)=> {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8,8,0]} scale={1.4} {...props}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, -1, 0.0181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.19, 0.19, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo;