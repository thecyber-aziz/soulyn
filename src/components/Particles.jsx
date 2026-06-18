import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

export default function Particles() {
  const points = useRef();

  const particles = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 1000; i++) {
      arr.push(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
    }

    return new Float32Array(arr);
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y =
        state.clock.elapsedTime * 0.05;

      points.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#00ffff"
        size={0.04}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}