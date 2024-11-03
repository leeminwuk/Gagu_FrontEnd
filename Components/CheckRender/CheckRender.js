import 'react-native-url-polyfill/auto';
import React, {useRef, Suspense, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Canvas} from '@react-three/fiber/native';
import {OrbitControls, useGLTF} from '@react-three/drei/native';
import styles from './Styles';
import {events} from '@react-three/fiber/native';

const CheckRender = ({gltfUrl}) => {

  const Model = ({gltfUrl}) => {
    const {nodes, materials} = useGLTF(gltfUrl);
    return (
      <group dispose={null} scale={5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.geometry_0.geometry}
          material={nodes.geometry_0.material}
        />
      </group>
    );
  };

  useEffect(() => {
    console.log('gltfUrl:', gltfUrl);
    useGLTF.preload(gltfUrl);
  }, [gltfUrl]);
  return (
    <View style={{flex: 1}} {...events}>
      <Canvas style={{flex: 1}}>
        <OrbitControls enablePan={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 0, 0]} args={['white', 2]} />
        <directionalLight position={[-1, 0, 0]} args={['white', 2]} />
        <directionalLight position={[0, 1, 0]} args={['white', 2]} />
        <directionalLight position={[0, -1, 0]} args={['white', 2]} />
        <directionalLight position={[0, 0, 1]} args={['white', 2]} />
        <directionalLight position={[0, 0, -1]} args={['white', 2]} />
        <Suspense fallback={null}>
          <Model gltfUrl={gltfUrl} />
        </Suspense>
      </Canvas>
    </View>
  );
};

export default CheckRender;
