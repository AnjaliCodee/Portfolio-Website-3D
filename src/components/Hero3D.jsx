import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cube() {
  const cubeRef = useRef(null);

  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.8;
      cubeRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <mesh ref={cubeRef} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8b5cf6"
      metalness={0.7}
      roughness={0.2} 
      emissive="#4c1d95"
      emissiveIntensity={0.5}/>
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
        <Cube />
      </Canvas>
    </div>
  );
}