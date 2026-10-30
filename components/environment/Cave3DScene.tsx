"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CaveSceneProps {
  activeChapter: number;
  isIntroDolly: boolean;
  mousePos: { x: number; y: number };
}

export function Cave3DScene({ activeChapter, isIntroDolly, mousePos }: CaveSceneProps) {
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));
  const lampLightRef = useRef<THREE.PointLight>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const oceanMeshRef = useRef<THREE.Mesh>(null);
  const shipGroupRef = useRef<THREE.Group>(null);
  const forestGroupRef = useRef<THREE.Group>(null);
  const caveGroupRef = useRef<THREE.Group>(null);

  // Generate floating dust particles
  const particleCount = 280;
  const { positions, randomScales } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = Math.random() * 8 - 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      scales[i] = Math.random() * 0.8 + 0.2;
    }
    return { positions: pos, randomScales: scales };
  }, []);

  // Frame Loop for Animations
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. Lamp light flicker (organic oil flame effect)
    if (lampLightRef.current) {
      const flicker =
        Math.sin(time * 6.5) * 0.15 +
        Math.sin(time * 18.2) * 0.08 +
        Math.cos(time * 3.1) * 0.12;
      lampLightRef.current.intensity = 2.4 + flicker;
      lampLightRef.current.position.x = Math.sin(time * 0.8) * 0.25;
      lampLightRef.current.position.y = 1.4 + Math.cos(time * 1.2) * 0.08;
    }

    // 2. Dust particles drifting gently in the air
    if (particlesRef.current) {
      const positionsAttr = particlesRef.current.geometry.attributes.position;
      const array = positionsAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        array[i * 3 + 1] += 0.003 * randomScales[i]; // float upwards
        array[i * 3] += Math.sin(time * 0.5 + i) * 0.002;
        if (array[i * 3 + 1] > 6) {
          array[i * 3 + 1] = -2;
        }
      }
      positionsAttr.needsUpdate = true;
    }

    // 3. Ocean Waves Animation (during Chapter 3 & 4)
    if (oceanMeshRef.current && (activeChapter === 3 || activeChapter === 4)) {
      const geom = oceanMeshRef.current.geometry;
      const pos = geom.attributes.position;
      const arr = pos.array as Float32Array;
      for (let i = 0; i < pos.count; i++) {
        const u = arr[i * 3];
        const v = arr[i * 3 + 1];
        arr[i * 3 + 2] =
          Math.sin(u * 0.8 + time * 2.8) * 0.35 +
          Math.cos(v * 0.6 + time * 2.2) * 0.25;
      }
      pos.needsUpdate = true;
    }

    // 4. Ship Rocking Animation (Chapter 3)
    if (shipGroupRef.current && (activeChapter === 3 || activeChapter === 4)) {
      shipGroupRef.current.rotation.z = Math.sin(time * 1.8) * 0.18;
      shipGroupRef.current.rotation.x = Math.cos(time * 1.4) * 0.12;
      shipGroupRef.current.position.y = -1.2 + Math.sin(time * 2.2) * 0.25;
    }

    // 5. Camera positioning based on chapter & mouse parallax
    const targetCamera = cameraTarget.current;
    const mouseParallaxX = (mousePos.x - 0.5) * 1.5;
    const mouseParallaxY = (mousePos.y - 0.5) * 0.8;

    if (isIntroDolly) {
      // Intro camera moves smoothly from outside cave to inside
      targetCamera.set(mouseParallaxX * 0.5, 0.8 + mouseParallaxY * 0.3, 3.5);
    } else {
      switch (activeChapter) {
        case 1: // Cave 1 entrance & fresco view
          targetCamera.set(mouseParallaxX, 1.2 + mouseParallaxY, 4.2);
          break;
        case 2: // Palace Mithila
          targetCamera.set(mouseParallaxX * 0.8, 1.5, 5.0);
          break;
        case 3: // Ocean storm
        case 4: // Seven days swimming
          targetCamera.set(mouseParallaxX * 1.2, 0.4, 3.2);
          break;
        case 5: // Mithila return
          targetCamera.set(mouseParallaxX * 0.6, 1.4, 4.5);
          break;
        case 6: // Forest renunciation
          targetCamera.set(mouseParallaxX * 0.7, 0.9, 3.8);
          break;
        case 7: // Timeless stone legacy
        default:
          targetCamera.set(mouseParallaxX * 0.5, 1.0, 4.0);
          break;
      }
    }

    state.camera.position.lerp(targetCamera, 0.05);
    state.camera.lookAt(0, 0.6, 0);
  });

  return (
    <>
      {/* Dynamic Lighting Setup */}
      <ambientLight intensity={activeChapter === 3 ? 0.3 : 0.65} color="#2A1F18" />
      
      {/* Warm Oil Lamp Light with Realistic Falloff */}
      <pointLight
        ref={lampLightRef}
        color="#F0A852"
        intensity={2.8}
        distance={18}
        decay={2}
        position={[0, 1.5, 0.5]}
      />

      {/* Directional Sunlight / Moonlight Shaft */}
      <directionalLight
        position={[-6, 8, 8]}
        intensity={activeChapter === 3 ? 0.4 : 1.2}
        color={activeChapter === 3 ? "#4A6E82" : "#E8D0A7"}
        castShadow
      />

      {/* Atmospheric Dust Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#D4AF37"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 1. ROCK-CUT CAVE ENVIRONMENT (CHAPTER 1, 2, 5, 7) */}
      <group ref={caveGroupRef} visible={activeChapter !== 3 && activeChapter !== 6}>
        {/* Back Wall - The Great Painted Basalt Wall of Cave 1 */}
        <mesh position={[0, 1.5, -4]}>
          <planeGeometry args={[16, 10, 32, 32]} />
          <meshStandardMaterial
            color="#2E241E"
            roughness={0.92}
            metalness={0.08}
          />
        </mesh>

        {/* Cave Vault Ceiling with Subtle Curvature */}
        <mesh position={[0, 5.8, -1]} rotation={[Math.PI / 2.2, 0, 0]}>
          <planeGeometry args={[16, 12, 16, 16]} />
          <meshStandardMaterial color="#1A1410" roughness={0.95} />
        </mesh>

        {/* Cave Stone Floor */}
        <mesh position={[0, -2.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[16, 16]} />
          <meshStandardMaterial color="#1B1512" roughness={0.9} />
        </mesh>

        {/* Basalt Carved Pillar Left */}
        <group position={[-3.2, 1.2, -1.5]}>
          {/* Pillar shaft */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.38, 0.42, 6.8, 16]} />
            <meshStandardMaterial color="#2B211B" roughness={0.88} />
          </mesh>
          {/* Chaitya Bracket Capital */}
          <mesh position={[0, 3.2, 0]}>
            <boxGeometry args={[1.2, 0.45, 0.9]} />
            <meshStandardMaterial color="#382C24" roughness={0.85} />
          </mesh>
          <mesh position={[0, -3.2, 0]}>
            <boxGeometry args={[1.1, 0.4, 0.85]} />
            <meshStandardMaterial color="#382C24" roughness={0.85} />
          </mesh>
        </group>

        {/* Basalt Carved Pillar Right */}
        <group position={[3.2, 1.2, -1.5]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.38, 0.42, 6.8, 16]} />
            <meshStandardMaterial color="#2B211B" roughness={0.88} />
          </mesh>
          <mesh position={[0, 3.2, 0]}>
            <boxGeometry args={[1.2, 0.45, 0.9]} />
            <meshStandardMaterial color="#382C24" roughness={0.85} />
          </mesh>
          <mesh position={[0, -3.2, 0]}>
            <boxGeometry args={[1.1, 0.4, 0.85]} />
            <meshStandardMaterial color="#382C24" roughness={0.85} />
          </mesh>
        </group>

        {/* Chaitya Arch Silhouette on Foreground Cave Entrance */}
        <mesh position={[-4.8, 1.5, 1.8]}>
          <boxGeometry args={[1.8, 8, 1.5]} />
          <meshStandardMaterial color="#16110D" roughness={0.95} />
        </mesh>
        <mesh position={[4.8, 1.5, 1.8]}>
          <boxGeometry args={[1.8, 8, 1.5]} />
          <meshStandardMaterial color="#16110D" roughness={0.95} />
        </mesh>
      </group>

      {/* 2. THE OCEAN & SHIP ENVIRONMENT (CHAPTER 3 & 4) */}
      <group visible={activeChapter === 3 || activeChapter === 4}>
        {/* Animated Ocean Surface */}
        <mesh
          ref={oceanMeshRef}
          position={[0, -1.8, -2]}
          rotation={[-Math.PI / 2.3, 0, 0]}
        >
          <planeGeometry args={[20, 16, 48, 48]} />
          <meshStandardMaterial
            color={activeChapter === 3 ? "#132735" : "#1B3B48"}
            roughness={0.25}
            metalness={0.4}
            wireframe={false}
          />
        </mesh>

        {/* Storm Clouds in Background */}
        <mesh position={[0, 3, -7]}>
          <planeGeometry args={[24, 12]} />
          <meshBasicMaterial
            color={activeChapter === 3 ? "#0A131A" : "#1E2B38"}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* 3D Ancient Merchant Vessel Silhouette (Ajanta Style) */}
        <group ref={shipGroupRef} position={[0.8, -1.2, -1.8]}>
          {/* Curved Ship Hull */}
          <mesh position={[0, 0.2, 0]} rotation={[0, 0, 0.05]}>
            <cylinderGeometry args={[0.5, 0.85, 3.8, 8]} />
            <meshStandardMaterial color="#2B1A12" roughness={0.9} />
          </mesh>
          {/* Main Mast */}
          <mesh position={[0, 2.1, 0]}>
            <cylinderGeometry args={[0.04, 0.06, 3.6, 8]} />
            <meshStandardMaterial color="#402C1E" roughness={0.8} />
          </mesh>
          {/* Fore Mast */}
          <mesh position={[-1.1, 1.8, 0]}>
            <cylinderGeometry args={[0.035, 0.05, 3.0, 8]} />
            <meshStandardMaterial color="#402C1E" roughness={0.8} />
          </mesh>
          {/* Square Rigged Sail on Main Mast */}
          <mesh position={[0, 2.2, 0.08]} rotation={[0.05, 0.1, 0]}>
            <planeGeometry args={[1.6, 2.0]} />
            <meshStandardMaterial
              color="#D6C4A5"
              roughness={0.7}
              side={THREE.DoubleSide}
            />
          </mesh>
          {/* Outrigger beam */}
          <mesh position={[0, 0.1, 0.9]}>
            <cylinderGeometry args={[0.12, 0.12, 3.2, 8]} />
            <meshStandardMaterial color="#261710" roughness={0.9} />
          </mesh>
        </group>
      </group>

      {/* 3. THE SACRED FOREST ENVIRONMENT (CHAPTER 6) */}
      <group ref={forestGroupRef} visible={activeChapter === 6}>
        {/* Forest Ground */}
        <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[18, 18]} />
          <meshStandardMaterial color="#1B241C" roughness={0.95} />
        </mesh>

        {/* Banyan / Mango Tree Trunks */}
        <group position={[-2.4, 0.5, -2]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.6, 5.5, 10]} />
            <meshStandardMaterial color="#2A2118" roughness={0.95} />
          </mesh>
          {/* Foliage Canopy */}
          <mesh position={[0, 3.0, 0]}>
            <sphereGeometry args={[1.8, 12, 12]} />
            <meshStandardMaterial color="#1E3322" roughness={0.9} />
          </mesh>
        </group>

        <group position={[2.6, 0.6, -2.5]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.45, 0.65, 5.8, 10]} />
            <meshStandardMaterial color="#2C231B" roughness={0.95} />
          </mesh>
          {/* Foliage Canopy */}
          <mesh position={[0, 3.2, 0]}>
            <sphereGeometry args={[2.0, 12, 12]} />
            <meshStandardMaterial color="#26422C" roughness={0.9} />
          </mesh>
        </group>

        {/* Distant Mist Plane */}
        <mesh position={[0, 1.5, -5.5]}>
          <planeGeometry args={[20, 10]} />
          <meshBasicMaterial color="#142018" transparent opacity={0.7} />
        </mesh>
      </group>
    </>
  );
}

