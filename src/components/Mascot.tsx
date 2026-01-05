import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Mascot(props: any) {
    const group = useRef<THREE.Group>(null)
    const leftEye = useRef<THREE.Group>(null)
    const rightEye = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (!leftEye.current || !rightEye.current) return

        // Calculate mouse position in 3D space
        // state.pointer.x and .y are normalized between -1 and 1
        const targetX = state.pointer.x * 1 // Sensitivity
        const targetY = state.pointer.y * 1

        // Smoothly interpolate eye position to look at mouse
        const step = 0.1

        // Left eye logic
        leftEye.current.rotation.x = THREE.MathUtils.lerp(leftEye.current.rotation.x, -targetY * 0.5, step)
        leftEye.current.rotation.y = THREE.MathUtils.lerp(leftEye.current.rotation.y, targetX * 0.5, step)

        // Right eye logic
        rightEye.current.rotation.x = THREE.MathUtils.lerp(rightEye.current.rotation.x, -targetY * 0.5, step)
        rightEye.current.rotation.y = THREE.MathUtils.lerp(rightEye.current.rotation.y, targetX * 0.5, step)
    })

    return (
        <group ref={group} {...props}>
            {/* Body */}
            <mesh castShadow receiveShadow>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#4F46E5"
                    roughness={0.2}
                    metalness={0.1}
                />
            </mesh>

            {/* Eyes Container */}
            {/* Left Eye */}
            <group position={[-0.35, 0.1, 0.85]} rotation={[0, -0.2, 0]}>
                {/* Eye White */}
                <mesh castShadow receiveShadow>
                    <sphereGeometry args={[0.25, 32, 32]} />
                    <meshStandardMaterial color="white" roughness={0.1} />
                </mesh>

                {/* Pupil Container - Rotates to look */}
                <group ref={leftEye}>
                    <mesh position={[0, 0, 0.22]}>
                        <sphereGeometry args={[0.1, 32, 32]} />
                        <meshStandardMaterial color="black" roughness={0.1} />
                    </mesh>
                </group>
            </group>

            {/* Right Eye */}
            <group position={[0.35, 0.1, 0.85]} rotation={[0, 0.2, 0]}>
                {/* Eye White */}
                <mesh castShadow receiveShadow>
                    <sphereGeometry args={[0.25, 32, 32]} />
                    <meshStandardMaterial color="white" roughness={0.1} />
                </mesh>

                {/* Pupil Container */}
                <group ref={rightEye}>
                    <mesh position={[0, 0, 0.22]}>
                        <sphereGeometry args={[0.1, 32, 32]} />
                        <meshStandardMaterial color="black" roughness={0.1} />
                    </mesh>
                </group>
            </group>

            {/* Optional: Simple Mouth or Smile? Staying clean for now based on "circle with eyes" */}
        </group>
    )
}
