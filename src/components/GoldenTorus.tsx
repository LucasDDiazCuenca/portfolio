import { useEffect, createRef } from "react";
import * as THREE from "three";
import { Environment, Sparkles, useMatcapTexture, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const material: THREE.MeshMatcapMaterial = new THREE.MeshMatcapMaterial();
const torusGeometry: THREE.TorusGeometry = new THREE.TorusGeometry(1, 0.55, 30, 200);

const GoldenTorus = (): React.ReactElement => {
	const [matCapTexture] = useMatcapTexture("71623B_ECDE8C_30250A_ABA69A", 512) as THREE.Texture[];
	const rightTopTorus = createRef<THREE.Mesh>();
	const rightBottomTorus = createRef<THREE.Mesh>();
	const LeftTorus = createRef<THREE.Mesh>();
	const particleColors: THREE.Color = new THREE.Color("#ffbf00");

	useFrame((_, delta) => {
		if (LeftTorus.current) {
			LeftTorus.current.rotation.y += delta * 0.3;
		}

		if (rightBottomTorus.current) {
			rightBottomTorus.current.rotation.y += delta * 0.2;
			rightBottomTorus.current.rotation.x += delta * 0.2;
		}
		if (rightTopTorus.current) {
			rightTopTorus.current.rotation.y += delta * 0.2;
			rightTopTorus.current.rotation.x += delta * 0.2;
		}
	});

	useEffect(() => {
		matCapTexture.colorSpace = THREE.SRGBColorSpace;
		matCapTexture.needsUpdate = true;

		material.matcap = matCapTexture;
		material.needsUpdate = true;
	});

	return (
		<>
			<ambientLight intensity={0.3} />
			<pointLight position={[10, 10, 10]} intensity={1} castShadow />
			<Environment preset="city" />
			<Sparkles count={300} scale={[8, 4, 5]} size={0.6} speed={0.3} opacity={1} />
			<Sparkles count={100} scale={[8, 4, 5]} size={2} speed={0.3} opacity={1} color={particleColors} />

			<Float speed={1} rotationIntensity={2} floatIntensity={0.02} floatingRange={[-0.1, 10]}>
				<mesh
					ref={LeftTorus}
					geometry={torusGeometry}
					material={material}
					position={[-4, -1, 1]}
					scale={1 + Math.random() * 0.2}
				></mesh>
			</Float>

			<Float speed={1} rotationIntensity={1} floatIntensity={0.01} floatingRange={[-0.1, 10]}>
				<mesh
					ref={rightTopTorus}
					geometry={torusGeometry}
					material={material}
					position={[3, 1.3, 1]}
					scale={0.3 + Math.random() * 0.2}
				></mesh>
			</Float>

			<Float speed={1} rotationIntensity={0.2} floatIntensity={0.01} floatingRange={[-0.1, 10]}>
				<mesh
					ref={rightBottomTorus}
					geometry={torusGeometry}
					material={material}
					position={[10, -6, -8]}
					scale={1 + Math.random() * 0.2}
				></mesh>
			</Float>
		</>
	);
};

export default GoldenTorus;
