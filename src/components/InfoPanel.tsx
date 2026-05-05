import React from 'react';
import type { AnimalPart } from '../types/animal';
import '../styles/InfoPanel.css';

interface InfoPanelProps {
  part: AnimalPart | null;
  onClose: () => void;
  onSelectSubpart?: (subpart: AnimalPart) => void;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ part, onClose, onSelectSubpart }) => {
  if (!part) {
    return null;
  }

  return (
    <div className="info-panel">
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

      <div className="part-header">
        <h1 className="part-name">{part.name}</h1>
        <div
          className="color-indicator"
          style={{ backgroundColor: `#${part.color.toString(16).padStart(6, '0')}` }}
        />
      </div>

      <div className="description-section">
        <h2>Descrição</h2>
        <p className="part-description">{part.description}</p>
      </div>

      {part.subparts && part.subparts.length > 0 && (
        <div className="subparts-section">
          <h2>Partes Relacionadas</h2>
          <div className="subparts-list">
            {part.subparts.map((subpart) => (
              <button
                key={subpart.id}
                className="subpart-item"
                onClick={() => onSelectSubpart?.(subpart)}
              >
                <span className="subpart-name">{subpart.name}</span>
                <span className="subpart-arrow">→</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
