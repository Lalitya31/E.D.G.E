import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshStandardMaterial } from 'three'
import Flame from './Flame'
import './glow.css'

// 3D Candle Wax Body
function CandleWax() {
  const meshRef = useRef()
  
  useFrame((state) => {
    // Subtle ambient rotation for depth perception
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <group position={[0, -0.5, 0]}>
      {/* Main candle body - wider, shorter, more realistic proportions */}
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.45, 1.8, 32]} />
        <meshStandardMaterial
          color="#F4A460"
          roughness={0.75}
          metalness={0.05}
          emissive="#4A3520"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* Irregular melted top with deeper wax pool */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.38, 0.35, 0.15, 32]} />
        <meshStandardMaterial
          color="#F5B870"
          roughness={0.4}
          metalness={0.15}
          emissive="#E69138"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Multiple wax drips running down - large drip on right */}
      <mesh position={[0.35, 0.4, 0]} rotation={[0.2, 0, 0.4]} scale={[1, 1.5, 1]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#F5B870"
          roughness={0.65}
          metalness={0.08}
          transparent
          opacity={0.95}
        />
      </mesh>
      
      {/* Long drip extending down */}
      <mesh position={[0.38, 0.0, 0]} rotation={[0, 0, 0.3]} scale={[0.8, 2, 0.8]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#F5B870"
          roughness={0.7}
          metalness={0.05}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Left side drip */}
      <mesh position={[-0.32, 0.2, 0.1]} rotation={[0, 0, -0.35]} scale={[1, 1.3, 1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#F5B870"
          roughness={0.68}
          metalness={0.06}
          transparent
          opacity={0.93}
        />
      </mesh>

      {/* Additional small drips */}
      <mesh position={[0.15, -0.2, 0.3]} rotation={[0, 0, 0.2]} scale={[0.7, 1.2, 0.7]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          color="#F4A460"
          roughness={0.7}
          metalness={0.05}
          transparent
          opacity={0.88}
        />
      </mesh>

      <mesh position={[-0.2, -0.4, -0.2]} rotation={[0, 0, -0.25]} scale={[0.6, 1, 0.6]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color="#F4A460"
          roughness={0.72}
          metalness={0.04}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Wick - taller and more visible */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.2, 8]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.95} />
      </mesh>
    </group>
  )
}

// Static SVG fallback for reduced motion or WebGL unavailable
function StaticFlame() {
  return (
    <svg 
      width="60" 
      height="120" 
      viewBox="0 0 60 120" 
      className="static-flame"
    >
      <defs>
        <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B45F06" />
          <stop offset="50%" stopColor="#E69138" />
          <stop offset="100%" stopColor="#F6B26B" />
        </linearGradient>
      </defs>
      <path
        d="M 30 10 Q 20 30, 25 50 Q 28 70, 30 90 Q 32 70, 35 50 Q 40 30, 30 10 Z"
        fill="url(#flameGradient)"
      />
    </svg>
  )
}

function Candle({ intensity = 1.0, glowRadius = 100 }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [webGLAvailable, setWebGLAvailable] = useState(true)

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setWebGLAvailable(!!gl)
    } catch (e) {
      setWebGLAvailable(false)
    }

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const shouldUseStatic = prefersReducedMotion || !webGLAvailable

  return (
    <div className="candle-container">
      {/* Glow halo */}
      <div 
        className="flame-halo"
        style={{
          width: `${glowRadius}px`,
          height: `${glowRadius}px`,
          opacity: intensity * 0.6
        }}
      />

      {/* 3D Candle with Flame */}
      {shouldUseStatic ? (
        <div className="flame-flicker">
          <StaticFlame />
        </div>
      ) : (
        <Suspense fallback={<StaticFlame />}>
          <Canvas
            className="flame-canvas"
            style={{ width: '450px', height: '650px' }}
            camera={{ position: [0, 0.5, 3.2], fov: 50 }}
            gl={{ alpha: true, antialias: true }}
          >
            {/* Ambient light for overall illumination */}
            <ambientLight intensity={0.3} />
            
            {/* Point light from flame */}
            <pointLight 
              position={[0, 1.5, 0]} 
              intensity={intensity * 1.5} 
              color="#F6B26B"
              distance={5}
              decay={2}
            />
            
            {/* Rim light for depth */}
            <directionalLight 
              position={[2, 2, 2]} 
              intensity={0.4} 
              color="#ffffff"
            />
            
            {/* Flame */}
            <Flame intensity={intensity} />
            
            {/* 3D Wax Candle */}
            <CandleWax />
          </Canvas>
        </Suspense>
      )}
    </div>
  )
}

export default Candle
