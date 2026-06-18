import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function Robot() {
  const groupRef = useRef();

  const headRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const leftLegRef = useRef();
  const rightLegRef = useRef();
  const eyeL = useRef();
  const eyeR = useRef();

  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!groupRef.current) return;

    // ✅ SMOOTH FOLLOW MOUSE (modern AI effect)
    groupRef.current.rotation.y = mouse.x * 0.8;
    groupRef.current.rotation.x = -mouse.y * 0.4;

    // gentle floating
    groupRef.current.position.y = Math.sin(t) * 0.15;

    const walk = Math.sin(t * 3);

    // head motion
    if (headRef.current) {
      headRef.current.rotation.y = mouse.x * 0.5;
    }

    // arms animation
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = walk * 0.6;
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = -walk * 0.6;
    }

    // legs animation
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = -walk * 0.6;
    }

    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = walk * 0.6;
    }

    // blink effect
    const blink = Math.sin(t * 4);
    const visible = blink > 0.85;

    if (eyeL.current && eyeR.current) {
      eyeL.current.visible = visible;
      eyeR.current.visible = visible;
    }
  });

  return (
    <group ref={groupRef}>

      {/* HEAD */}
      <group ref={headRef} position={[0, 1.6, 0]}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={0.4}
          />
        </mesh>

        <mesh ref={eyeL} position={[-0.2, 0.05, 0.42]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
        </mesh>

        <mesh ref={eyeR} position={[0.2, 0.05, 0.42]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
        </mesh>
      </group>

      {/* BODY */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.2, 1.4, 0.7]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* LEFT ARM */}
      <group ref={leftArmRef} position={[-1, 0.6, 0]}>
        <mesh>
          <boxGeometry args={[0.3, 1.2, 0.3]} />
          <meshStandardMaterial color="#22c55e" />
        </mesh>
      </group>

      {/* RIGHT ARM */}
      <group ref={rightArmRef} position={[1, 0.6, 0]}>
        <mesh>
          <boxGeometry args={[0.3, 1.2, 0.3]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
      </group>

      {/* LEFT LEG */}
      <group ref={leftLegRef} position={[-0.35, -1.2, 0]}>
        <mesh>
          <boxGeometry args={[0.4, 1.2, 0.4]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
      </group>

      {/* RIGHT LEG */}
      <group ref={rightLegRef} position={[0.35, -1.2, 0]}>
        <mesh>
          <boxGeometry args={[0.4, 1.2, 0.4]} />
          <meshStandardMaterial color="#ec4899" />
        </mesh>
      </group>

    </group>
  );
}