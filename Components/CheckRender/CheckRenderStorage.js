import 'react-native-url-polyfill/auto';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls, useGLTF } from '@react-three/drei/native';
import { Container } from './Styles';
import { events } from '@react-three/fiber/native';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const CheckRenderStorage = ({ gltfUrl }) => {
  const [loading, setLoading] = useState(true);

  const Model = ({ gltfUrl }) => {
    const { nodes, materials } = useGLTF(gltfUrl);
    useEffect(() => {
      setLoading(false);
    }, [nodes, materials]);

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
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
      <Canvas>
        <OrbitControls enablePan={true} />
        <ambientLight intensity={2} />
        <Suspense fallback={null}>
          <Model gltfUrl={gltfUrl} />
        </Suspense>
      </Canvas>
    </Container>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheckRenderStorage;