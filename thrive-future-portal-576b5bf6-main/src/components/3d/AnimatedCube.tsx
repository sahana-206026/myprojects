
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";

interface AnimatedCubeProps {
  position: [number, number, number];
  scale?: number;
  color?: string;
  emissive?: string;
}

const AnimatedCube: React.FC<AnimatedCubeProps> = ({ 
  position, 
  scale = 1, 
  color = "#0ea5e9", 
  emissive = "#0c4a6e" 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <RoundedBox ref={meshRef} position={position} scale={scale} castShadow receiveShadow radius={0.05} smoothness={4}>
      <meshPhysicalMaterial 
        color={color}
        roughness={0.3}
        metalness={0.2}
        emissive={emissive}
        emissiveIntensity={0.4}
        clearcoat={0.5}
        clearcoatRoughness={0.1}
      />
    </RoundedBox>
  );
};

export default AnimatedCube;
