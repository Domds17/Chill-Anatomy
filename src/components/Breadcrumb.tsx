import React from 'react';
import '../styles/Breadcrumb.css';

export interface BreadcrumbPart {
  id: string;
  name: string;
}

interface BreadcrumbProps {
  parts: BreadcrumbPart[];
  onNavigate: (part: BreadcrumbPart | null, index: number) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ parts, onNavigate }) => {
  if (parts.length === 0) {
    return null;
  }

  return (
    <div className="breadcrumb">
      <button className="breadcrumb-item" onClick={() => onNavigate(null, -1)}>
        ← Voltar
      </button>

      {parts.map((part, index) => (
        <React.Fragment key={part.id}>
          <span className="breadcrumb-separator">/</span>
          <button className="breadcrumb-item" onClick={() => onNavigate(part, index)}>
            {part.name}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};
