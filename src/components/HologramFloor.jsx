import { Grid } from "@react-three/drei";

export default function HologramFloor() {
  return (
    <Grid
      position={[0, -1.5, 0]}
      args={[10, 10]}
      cellSize={0.6}
      cellThickness={0.6}
      cellColor="#00e5ff"
      sectionSize={3}
      sectionThickness={1}
      sectionColor="#ff00ff"
      fadeDistance={10}
      fadeStrength={1}
    />
  );
}