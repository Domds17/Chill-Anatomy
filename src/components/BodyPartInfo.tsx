import React from 'react';
import { useBodyPart } from '../context/BodyPartContext';
import { cattleModel } from '../data/cattleData';
import './BodyPartInfo.css';

const BodyPartInfo: React.FC = () => {
  const { selectedPart, setSelectedPart } = useBodyPart();

  const getRelatedPartDetails = (partId: string) => {
    return cattleModel.parts.find((p) => p.id === partId);
  };

  const isMainPart = (partId: string) => {
    const mainParts = ['head', 'torso', 'front-legs', 'back-legs', 'rump'];
    return mainParts.includes(partId);
  };

  if (!selectedPart) {
    return (
      <div className="body-part-info empty">
        <p>Clique em uma parte do boi para ver informações detalhadas</p>
      </div>
    );
  }

  return (
    <div className="body-part-info">
      <button className="close-btn" onClick={() => setSelectedPart(null)}>
        ✕
      </button>

      <div className="part-header">
        <div
          className="part-color-indicator"
          style={{ backgroundColor: selectedPart.color }}
        />
        <h2>{selectedPart.name}</h2>
      </div>

      <div className="part-description">
        <p>{selectedPart.description}</p>
      </div>

      {selectedPart.relatedParts.length > 0 && (
        <div className="related-parts">
          <h3>
            {isMainPart(selectedPart.id) ? 'Estruturas Anatômicas' : 'Detalhes'}
          </h3>
          <ul>
            {selectedPart.relatedParts.map((related) => {
              const partDetails = getRelatedPartDetails(related.id);
              return (
                <li key={related.id}>
                  {partDetails && (
                    <button
                      className="related-part-btn"
                      onClick={() => setSelectedPart(partDetails)}
                      style={{ borderLeftColor: partDetails.color }}
                    >
                      <span className="dot" style={{ backgroundColor: partDetails.color }} />
                      {related.name}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BodyPartInfo;
