import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { cattleModel } from '../data/cattleData';
import CattlePart from './CattlePart';
import { useBodyPart } from '../context/BodyPartContext';
import '../styles/Viewer3D.css';

const CattleViewer3D: React.FC = () => {
  const { selectedPart } = useBodyPart();

  // Partes principais do boi
  const mainParts = cattleModel.parts.filter(part => {
    const mainPartIds = ['head', 'torso', 'front-legs', 'back-legs', 'rump'];
    return mainPartIds.includes(part.id);
  });

  // Se uma parte principal estiver selecionada, mostrar suas subcategorias
  const displayParts = selectedPart && mainParts.some(p => p.id === selectedPart.id)
    ? cattleModel.parts.filter(part => part.id.startsWith(selectedPart.id + '-'))
    : mainParts;

  return (
    <div className="cattle-viewer-3d">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <OrbitControls enableZoom enableRotate enablePan />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />

        {displayParts.map((part) => (
          <CattlePart key={part.id} part={part} />
        ))}
      </Canvas>
    </div>
  );
};

export default CattleViewer3D;
