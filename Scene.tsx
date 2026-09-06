"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AbstractObject() {
  const groupRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current || !ringsRef.current) return;

    // Smooth mouse interaction
    const targetX = state.pointer.y * 0.28;
    const targetY = state.pointer.x * 0.4;

    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * 0.035;

    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * 0.035;

    // Very subtle continuous rotation
    groupRef.current.rotation.z += 0.0015;

    // Independent orbit movement
    ringsRef.current.rotation.x += 0.001;
    ringsRef.current.rotation.y += 0.002;
    ringsRef.current.rotation.z += 0.0005;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.18}
      floatIntensity={0.7}
    >
      <group ref={groupRef}>
        {/* ================= MAIN OBJECT ================= */}

        <mesh>
          <icosahedronGeometry args={[1.6, 2]} />

          <meshStandardMaterial
            color="#d4d4d4"
            metalness={0.95}
            roughness={0.18}
          />
        </mesh>

        {/* ================= INNER WIREFRAME ================= */}

        <mesh scale={0.72}>
          <icosahedronGeometry args={[1.6, 2]} />

          <meshBasicMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* ================= ORBIT SYSTEM ================= */}

        <group ref={ringsRef}>
          {/* Main orbit */}

          <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
            <torusGeometry args={[2.05, 0.025, 16, 100]} />

            <meshStandardMaterial
              color="#ffffff"
              metalness={1}
              roughness={0.18}
            />
          </mesh>

          {/* Secondary orbit */}

          <mesh rotation={[0.5, 0.8, 0.3]}>
            <torusGeometry args={[2.3, 0.012, 16, 100]} />

            <meshStandardMaterial
              color="#777777"
              metalness={1}
              roughness={0.28}
            />
          </mesh>

          {/* Third ultra-subtle orbit */}

          <mesh rotation={[1.2, 0.2, 0.8]}>
            <torusGeometry args={[2.55, 0.008, 12, 100]} />

            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.22}
            />
          </mesh>
        </group>

        {/* ================= CENTER CORE ================= */}

        <mesh scale={0.35}>
          <sphereGeometry args={[1, 32, 32]} />

          <meshStandardMaterial
            color="#ffffff"
            metalness={1}
            roughness={0.08}
          />
        </mesh>

        {/* Small inner glow/core */}

        <mesh scale={0.12}>
          <sphereGeometry args={[1, 24, 24]} />

          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="h-[520px] w-full">
      <Canvas
        camera={{
          position: [0, 0, 6.5],
          fov: 40,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        {/* ================= LIGHTING ================= */}

        <ambientLight intensity={0.9} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={3}
        />

        <directionalLight
          position={[-4, -2, 3]}
          intensity={1.5}
        />

        <pointLight
          position={[0, 0, 3]}
          intensity={1.2}
        />

        {/* ================= ENVIRONMENT ================= */}

        <Environment preset="studio" />

        {/* ================= 3D OBJECT ================= */}

        <AbstractObject />
      </Canvas>
    </div>
  );
}