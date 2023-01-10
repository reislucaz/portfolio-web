/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 lucas_name.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Model({...props}) {
  const { nodes, materials } = useGLTF('./lucas_name.gltf')

  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = Math.sin(clock.getElapsedTime() / 2);
    // @ts-ignore
    myMesh.current.rotation.y = a;
    // @ts-ignore
    myMesh.current.rotation.x = a;
  });

  return (
    // @ts-ignore
    <group {...props} dispose={null} ref={myMesh}>
      {/* @ts-ignore */}
      <mesh geometry={nodes.Texto.geometry} material={materials.Materiais} position={[-2, -0.01, 0]} />
      {/* @ts-ignore */}
      <mesh geometry={nodes.Texto001.geometry} material={materials['Materiais.001']} position={[-2.2, -0.01, 0.63]} />
    </group>
  )
}

useGLTF.preload('./lucas_name.gltf')
