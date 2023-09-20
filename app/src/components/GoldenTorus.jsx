import { useEffect, useRef } from 'react'
import * as THREE from "three"
import { Environment, Sparkles, useMatcapTexture, Float } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'

const material = new THREE.MeshMatcapMaterial()
const torusGeometry = new THREE.TorusGeometry(1, 0.55, 30, 200)


export default function GoldenTorus(props) {
    const [matCapTexture] = useMatcapTexture("71623B_ECDE8C_30250A_ABA69A", 512)
    const rightTorus = useRef()
    const leftTorus = useRef()
    const particleColors = new THREE.Color("#ffbf00")

    useFrame((state, delta) => {
        rightTorus.current.rotation.y += delta * 0.2
        rightTorus.current.rotation.x += delta * 0.2

        leftTorus.current.rotation.y += delta * 0.2
        leftTorus.current.rotation.x += delta * 0.2
    })



    useEffect(() => {
        matCapTexture.colorSpace = THREE.SRGBColorSpace
        matCapTexture.needsUpdate = true

        material.matcap = matCapTexture
        material.needsUpdate = true
    }, [])


    return <>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <Environment preset="city" />
        <Sparkles
            count={300}
            scale={[8, 4, 5]}
            size={0.6}
            speed={0.3}
            opacity={1}
        />

        <Sparkles
            count={100}
            scale={[8, 4, 5]}
            size={2}
            speed={0.3}
            opacity={1}
            color={particleColors}
        />

        <Float
            speed={1} 
            rotationIntensity={2} 
            floatIntensity={0.01} 
            floatingRange={[-0.1, 10]}
        >
            <mesh
                ref={rightTorus}
                geometry={torusGeometry}
                material={material}
                position={[3, 1.3, 1]}
                scale={0.3 + Math.random() * 0.2}
            >
            </mesh>
        </Float>

        <Float
            speed={1} 
            rotationIntensity={2} 
            floatIntensity={0.01} 
            floatingRange={[-0.1, 10]}
        >
            <mesh
                ref={leftTorus}
                geometry={torusGeometry}
                material={material}
                position={[-4, -1, 0.1]}
                scale={0.7 + Math.random() * 0.2}
            ></mesh>


        </Float>
    </>
}