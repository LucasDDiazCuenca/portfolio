import { MathUtils } from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance, Environment } from '@react-three/drei'
import { EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing'
import { useControls} from "leva"

const particles = Array.from({ length: 222 }, () => ({
    factor: MathUtils.randInt(20, 100),
    speed: MathUtils.randFloat(0.01, 0.75),
    xFactor: MathUtils.randFloatSpread(40),
    yFactor: MathUtils.randFloatSpread(10),
    zFactor: MathUtils.randFloatSpread(10)
}))

export default function FloatingBubbles() {
    // const {sceneBackground, fog, ballcolor, AOColor} = useControls("Ball", {
    //     sceneBackground: "#131313",
    //     fog: "#000000",
    //     ballcolor: "#2a2a2a",
    //     AOColor: "#363636"
    // })
    return (
        <Canvas shadows dpr={[1, 2]} gl={{ antialias: false }} camera={{ fov: 50, position: [0, 0, 20] }}>
            <color attach="background" args={["#131313"]} />
            <fog attach="fog" args={["#000000", 30, -5]} />

            <ambientLight intensity={0.3} />

            <pointLight position={[10, 10, 10]} intensity={1} castShadow />

            <Bubbles ballcolor="#2a2a2a"/>

            <EffectComposer disableNormalPass>
                <N8AO aoRadius={6} intensity={2} color="#363636" />
                <TiltShift2 blur={0.2} />
            </EffectComposer>
            
            <Environment preset="city" />
        </Canvas>
    )
}

function Bubbles({ballcolor}) {
    const ref = useRef()
    useFrame((state, delta) => {
        void (ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta))
    })
    return (
        <Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 2.5, 0]}>
            <sphereGeometry args={[0.45, 64, 64]} />
            <meshStandardMaterial roughness={1} color={ballcolor} />
            {particles.map((data, i) => (
                <Bubble key={i} {...data} />
            ))}
        </Instances>
    )
}

function Bubble({ factor, speed, xFactor, yFactor, zFactor }) {
    const ref = useRef()
    useFrame((state) => {
        const t = factor + state.clock.elapsedTime * (speed / 20)
        ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 6))
        ref.current.position.set(
            Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
            Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
            Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 4
        )
    })
    return <Instance ref={ref} />
}
