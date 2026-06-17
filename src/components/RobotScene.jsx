import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Robot from "./Robot";
import HologramFloor from "./HologramFloor";

export default function RobotScene({ isSpeaking }) {
  return (
    <div className="fixed bottom-10 right-10 w-80 h-80">
      <Canvas camera={{ position: [0, 0, 5] }}>

        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} intensity={2} />

        {/* 🌐 floor */}
        <HologramFloor />

        {/* 🤖 robot */}
        <Robot isSpeaking={isSpeaking} />

        <Environment preset="night" />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}