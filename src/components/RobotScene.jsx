import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";

import Robot from "./Robot";
import Particles from "./Particles";

export default function RobotScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <Environment preset="city" />

        {/* Background Particles */}
        <Particles />

        {/* Robot */}
        <Float
          speed={2}
          rotationIntensity={0.2}
          floatIntensity={0.5}
        >
          <Robot />
        </Float>

      </Canvas>
    </div>
  );
}