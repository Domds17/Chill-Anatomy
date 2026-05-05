import React, { createContext, useContext, useState } from 'react';
import type { AnimalPart, SelectedPartState } from '../types/animal';
import type { ReactNode } from 'react';

interface AnimalContextType {
  selectedPart: SelectedPartState | null;
  selectPart: (part: AnimalPart | null, partPath?: AnimalPart[]) => void;
  clearSelection: () => void;
}

const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

export const AnimalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPart, setSelectedPart] = useState<SelectedPartState | null>(null);

  const selectPart = (part: AnimalPart | null, partPath: AnimalPart[] = []) => {
    if (!part) {
      setSelectedPart(null);
      return;
    }

    // Calcular posição alvo da câmera baseada na parte selecionada
    const cameraTarget: [number, number, number] = [0, 0, 0];

    setSelectedPart({
      part,
      partPath: partPath.length > 0 ? partPath : [part],
      cameraTarget,
    });
  };

  const clearSelection = () => {
    setSelectedPart(null);
  };

  const value: AnimalContextType = {
    selectedPart,
    selectPart,
    clearSelection,
  };

  return (
    <AnimalContext.Provider value={value}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimal = () => {
  const context = useContext(AnimalContext);
  if (context === undefined) {
    throw new Error('useAnimal deve ser usado dentro de AnimalProvider');
  }
  return context;
};
