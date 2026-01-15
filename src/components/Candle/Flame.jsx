import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Fragment shader for organic flame distortion
const flameShaderMaterial = {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform float uIntensity;
    varying vec2 vUv;
    
    // Noise function for organic movement
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    float smoothNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = noise(i);
      float b = noise(i + vec2(1.0, 0.0));
      float c = noise(i + vec2(0.0, 1.0));
      float d = noise(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    void main() {
      vec2 uv = vUv;
      
      // Create flame shape (pointed at top, wider at bottom)
      float flameShape = smoothstep(0.0, 0.3, uv.y) * smoothstep(1.0, 0.7, uv.y);
      flameShape *= smoothstep(0.0, 0.5, 1.0 - abs(uv.x - 0.5) * 2.0);
      
      // Add organic distortion
      float distortion = smoothNoise(vec2(uv.x * 3.0, uv.y * 5.0 - uTime * 0.5)) * 0.1;
      distortion += smoothNoise(vec2(uv.x * 6.0, uv.y * 10.0 - uTime * 0.8)) * 0.05;
      
      float flame = flameShape + distortion;
      flame = smoothstep(0.2, 0.8, flame);
      
      // Color gradient (bottom = bright amber, top = burnt gold)
      vec3 colorBottom = vec3(0.965, 0.698, 0.420); // #F6B26B
      vec3 colorMid = vec3(0.902, 0.569, 0.220);    // #E69138
      vec3 colorTop = vec3(0.706, 0.373, 0.024);    // #B45F06
      
      vec3 color = mix(colorBottom, colorMid, uv.y);
      color = mix(color, colorTop, smoothstep(0.6, 1.0, uv.y));
      
      // Apply intensity from scroll
      float alpha = flame * uIntensity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `
}

function Flame({ intensity = 1.0 }) {
  const meshRef = useRef()
  const materialRef = useRef()
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uIntensity: { value: intensity }
    }),
    []
  )

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
      materialRef.current.uniforms.uIntensity.value = intensity
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 1.8, 0]}>
      <planeGeometry args={[1.8, 3.2, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={flameShaderMaterial.vertexShader}
        fragmentShader={flameShaderMaterial.fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Flame
