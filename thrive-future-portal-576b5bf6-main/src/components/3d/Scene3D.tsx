
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Environment, 
  PerspectiveCamera, 
  Sparkles, 
  Float, 
  useTexture, 
  Stars
} from "@react-three/drei";
import * as THREE from "three";
import AnimatedCube from "./AnimatedCube";
import FloatingBooks from "./FloatingBooks";

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  const count = 500;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 15;
    positions[i3 + 1] = (Math.random() - 0.5) * 15;
    positions[i3 + 2] = (Math.random() - 0.5) * 15;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#88ccff" 
        sizeAttenuation 
        transparent 
        opacity={0.8}
      />
    </points>
  );
};

const GradientBackground = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -10]} scale={20}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="#030D22" opacity={0.8} transparent />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows gl={{ antialias: true, alpha: true, logarithmicDepthBuffer: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        <color attach="background" args={["#030D22"]} />
        
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight 
          position={[-5, 5, 5]} 
          intensity={0.5} 
          angle={Math.PI / 6}
          penumbra={0.5}
          castShadow
        />

        <fog attach="fog" args={["#030D22", 8, 30]} />
        
        <Suspense fallback={null}>
          {/* Animated elements */}
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <AnimatedCube position={[-3, 0, 0]} scale={0.8} color="#38bdf8" emissive="#0284c7" />
          </Float>
          
          <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
            <AnimatedCube position={[-4, 1, -1]} scale={0.5} color="#7dd3fc" emissive="#0ea5e9" />
          </Float>
          
          <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.4}>
            <AnimatedCube position={[-2, -1, 1]} scale={0.6} color="#0891b2" emissive="#0e7490" />
          </Float>
          
          <FloatingBooks position={[3, 0, 0]} scale={0.7} />
          
          {/* Background elements */}
          <ParticleField />
          <GradientBackground />
          
          {/* Sparkles for added visual interest */}
          <Sparkles 
            count={100} 
            scale={10} 
            size={1} 
            speed={0.3} 
            opacity={0.5} 
            color="#88ccff" 
          />
          
          <Stars 
            radius={50} 
            depth={50} 
            count={1000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={true} 
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 3} 
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
