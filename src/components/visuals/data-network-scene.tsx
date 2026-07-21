import { Float, Line, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";

const nodePositions: [number, number, number][] = [
  [-2.4, 0.8, 0],
  [-1.2, -0.7, 0.6],
  [0, 1.2, -0.4],
  [1.3, -0.2, 0.5],
  [2.2, 0.9, -0.2],
  [0.9, -1.2, -0.7],
];

function DataNetwork() {
  const groupRef = useRef<Group>(null);
  const connections = useMemo(
    () => [
      [nodePositions[0], nodePositions[1]],
      [nodePositions[1], nodePositions[2]],
      [nodePositions[2], nodePositions[3]],
      [nodePositions[3], nodePositions[4]],
      [nodePositions[3], nodePositions[5]],
      [nodePositions[5], nodePositions[1]],
      [nodePositions[0], nodePositions[2]],
    ],
    [],
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.18) * 0.18;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.08;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.55}>
      <group ref={groupRef}>
        {connections.map(([start, end], index) => (
          <Line
            key={`${start.join("-")}-${end.join("-")}`}
            points={[start, end]}
            color={index % 2 === 0 ? "#35f6d4" : "#58a6ff"}
            lineWidth={1.35}
            transparent
            opacity={0.42}
          />
        ))}

        {nodePositions.map((position, index) => (
          <group key={position.join("-")} position={position}>
            <Sphere args={[index === 2 ? 0.2 : 0.14, 32, 32]}>
              <meshStandardMaterial
                color={index === 2 ? "#b9f66b" : "#35f6d4"}
                emissive={index === 2 ? "#6a9f17" : "#0e8f80"}
                emissiveIntensity={0.8}
                roughness={0.34}
                metalness={0.25}
              />
            </Sphere>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[index === 2 ? 0.38 : 0.28, 0.006, 12, 48]} />
              <meshBasicMaterial color={index === 2 ? "#b9f66b" : "#58a6ff"} transparent opacity={0.46} />
            </mesh>
          </group>
        ))}

        <mesh position={[0, 0, -1.2]} rotation={[0.55, 0.2, 0]}>
          <boxGeometry args={[2.9, 1.65, 0.1]} />
          <meshStandardMaterial color="#0f172a" emissive="#12315a" emissiveIntensity={0.24} roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

export default function DataNetworkScene() {
  return (
    <div className="pointer-events-auto absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5.4], fov: 45 }} dpr={[1, 1.65]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.75} />
          <pointLight position={[3, 4, 5]} intensity={3.8} color="#35f6d4" />
          <pointLight position={[-3, -2, 4]} intensity={2.1} color="#58a6ff" />
          <DataNetwork />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.55}
            minPolarAngle={Math.PI / 2.6}
            maxPolarAngle={Math.PI / 1.7}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
