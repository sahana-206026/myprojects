
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

interface FloatingBooksProps {
  position: [number, number, number];
  scale?: number;
}

const FloatingBooks: React.FC<FloatingBooksProps> = ({ position, scale = 1 }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  // Book colors with gradients
  const bookColors = [
    ["#0284c7", "#0369a1"],
    ["#0891b2", "#0e7490"],
    ["#0369a1", "#075985"],
    ["#06b6d4", "#0891b2"]
  ];

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Books stack */}
      {bookColors.map((colors, index) => {
        const height = 0.15 + Math.random() * 0.05;
        const width = 1 + Math.random() * 0.3;
        const depth = 0.8;
        const yPos = index * (height + 0.05);
        
        return (
          <mesh 
            key={index} 
            position={[0, yPos, 0]} 
            castShadow 
            receiveShadow
          >
            <boxGeometry args={[width, height, depth]} />
            <meshPhysicalMaterial 
              color={colors[0]}
              emissive={colors[1]}
              emissiveIntensity={0.2}
              roughness={0.4}
              metalness={0.1}
              clearcoat={0.3}
            />
          </mesh>
        );
      })}

      {/* Book titles on the spine */}
      <Text
        position={[0, 0.45, 0.41]}
        rotation={[0, 0, 0]}
        fontSize={0.05}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        FUTURE GUIDE
      </Text>
      
      <Text
        position={[0, 0.25, 0.41]}
        rotation={[0, 0, 0]}
        fontSize={0.05}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        CAREER PATH
      </Text>
    </group>
  );
};

export default FloatingBooks;
