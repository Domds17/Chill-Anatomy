import React from 'react';
import { useBodyPart } from '../context/BodyPartContext';
import CattleViewer3D from './CattleViewer3D';
import BodyPartInfo from './BodyPartInfo';
import './AnatomyViewer.css';

const AnatomyViewer: React.FC = () => {
  const { selectedPart, setSelectedPart } = useBodyPart();

  const isViewingSubparts = selectedPart && ['head', 'torso', 'front-legs', 'back-legs', 'rump'].includes(selectedPart.id);

  const handleBackToMain = () => {
    setSelectedPart(null);
  };

  return (
    <div className="anatomy-viewer">
      <div className="viewer-header">
        <h1>🐂 Visualizador Anatômico - Boi</h1>
        {isViewingSubparts && (
          <button className="back-to-main-btn" onClick={handleBackToMain}>
            ← Voltar às Partes Principais
          </button>
        )}
      </div>

      <div className="viewer-content">
        <div className="viewer-section">
          <CattleViewer3D />
        </div>

        <div className="info-section">
          <BodyPartInfo />
        </div>
      </div>
    </div>
  );
};

export default AnatomyViewer;