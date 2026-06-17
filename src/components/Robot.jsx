import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function Robot({ isSpeaking = false }) {
  const groupRef = useRef();
  const mouthRef = useRef();
  const headRef = useRef();
  const { mouse } = useThree();

  const [mouthOpen, setMouthOpen] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      groupRef.current.position,
      { y: -3 },
      { y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!groupRef.current) return;

    // floating AI
    groupRef.current.position.y = Math.sin(t) * 0.1;

    // follow mouse
    groupRef.current.rotation.y = mouse.x * 0.8;

    // talking animation
    if (mouthRef.current) {
      const target = isSpeaking ? Math.abs(Math.sin(t * 12)) * 0.6 : 0;
      setMouthOpen(target);

      mouthRef.current.scale.y = target + 0.1;
    }
  });

  return (
    <group ref={groupRef}>

      {/* HEAD */}
      <group ref={headRef} position={[0, 1.6, 0]}>
        <mesh>
          <boxGeometry args={[0.9, 0.9, 0.9]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* EYES */}
        <mesh position={[-0.25, 0.1, 0.45]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial emissive="red" emissiveIntensity={2} />
        </mesh>

        <mesh position={[0.25, 0.1, 0.45]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial emissive="red" emissiveIntensity={2} />
        </mesh>

        {/* 👄 MOUTH (talking) */}
        <mesh ref={mouthRef} position={[0, -0.25, 0.45]}>
          <boxGeometry args={[0.3, 0.05, 0.05]} />
          <meshStandardMaterial color="black" emissive="cyan" emissiveIntensity={1.5} />
        </mesh>
      </group>

      {/* BODY */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[1.2, 1.5, 0.7]} />
        <meshStandardMaterial
          color="#111827"
          emissive="#1d4ed8"
          emissiveIntensity={0.3}
        />
      </mesh>

    </group>
  );
}