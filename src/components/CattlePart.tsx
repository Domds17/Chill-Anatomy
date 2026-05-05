import React, { useRef } from 'react';
import { Mesh } from 'three';
import type { BodyPart } from '../types/bodyPart';
import { useBodyPart } from '../context/BodyPartContext';

interface CattlePartProps {
  part: BodyPart;
}

const CattlePart: React.FC<CattlePartProps> = ({ part }) => {
  const meshRef = useRef<Mesh>(null);
  const { selectedPart, setSelectedPart } = useBodyPart();
  const isSelected = selectedPart?.id === part.id;

  const handleClick = () => {
    setSelectedPart(isSelected ? null : part);
  };

  return (
    <mesh
      ref={meshRef}
      position={[part.position.x, part.position.y, part.position.z]}
      onClick={handleClick}
      scale={isSelected ? 1.1 : 1}
    >
      <boxGeometry args={[part.scale.x, part.scale.y, part.scale.z]} />
      <meshStandardMaterial
        color={isSelected ? '#FFD700' : part.color}
        emissive={isSelected ? '#FF8C00' : '#000000'}
        emissiveIntensity={isSelected ? 0.3 : 0}
        metalness={0.3}
        roughness={0.7}
      />
    </mesh>
  );
};

export default CattlePart;
