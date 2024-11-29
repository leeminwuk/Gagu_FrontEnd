import 'react-native-url-polyfill/auto';
import React, {Suspense, useEffect} from 'react';
import {Canvas} from '@react-three/fiber/native';
import {OrbitControls, useGLTF} from '@react-three/drei/native';
import {Container} from './Styles';
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
    <Container {...events}>
      <Canvas>
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
    </Container>
  );
};

export default CheckRender;
