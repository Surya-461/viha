import React, { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Sparkles, Loader, OrbitControls, Float, Stars, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function Model(props: any) {
  const { scene } = useGLTF('/logo.glb')
  // const meshRef = useRef<THREE.Group>(null) 
  // removed rotation from here to let EntranceAnim handle orientation or just be static first
  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <EntranceAnim>
        {/* Rotate -90deg on Y to face front correctly */}
        <primitive object={scene} rotation={[0, -Math.PI / 2, 0]} {...props} />
      </EntranceAnim>
    </Float>
  )
}

function EntranceAnim({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!group.current) return

    const step = 0.1
    // Scale up from 0 to 1
    const targetScale = 1
    group.current.scale.x = THREE.MathUtils.lerp(group.current.scale.x, targetScale, step)
    group.current.scale.y = THREE.MathUtils.lerp(group.current.scale.y, targetScale, step)
    group.current.scale.z = THREE.MathUtils.lerp(group.current.scale.z, targetScale, step)

    // Move from Z=5 (front/camera) to Z=0
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, 0, step)
  })

  // Start small and close to the camera (Z=5)
  useEffect(() => {
    if (group.current) {
      group.current.scale.set(0, 0, 0)
      group.current.position.z = 5
    }
  }, [])

  return <group ref={group}>{children}</group>
}

export function SplashScene({ onEnter }: { onEnter: () => void }) {
  const [hovered, setHovered] = useState(false)

  // Preload to avoid pop-in
  useGLTF.preload('/logo.glb')

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white">
        <div className="w-full h-full absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <Environment preset="city" />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

              <Model scale={[5, 5, 5]} />

              <ContactShadows opacity={0.5} scale={20} blur={2.5} far={4} color="#0c0c0c" />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#4F46E5" />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={2} />
            </Suspense>
          </Canvas>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="z-10 absolute bottom-20"
        >
          <button
            onClick={onEnter}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`
              px-8 py-3 rounded-full 
              text-white font-light tracking-[0.2em] uppercase text-sm
              border border-white/20 backdrop-blur-md
              transition-all duration-500 ease-out
              ${hovered ? 'bg-white/10 scale-105 border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'bg-transparent'}
            `}
          >
            Enter Experience
          </button>
        </motion.div>
      </div>
      <Loader />
    </>
  )
}
