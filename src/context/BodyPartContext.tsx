import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { BodyPart } from '../types/bodyPart';

interface BodyPartContextType {
  selectedPart: BodyPart | null;
  setSelectedPart: (part: BodyPart | null) => void;
}

export const BodyPartContext = createContext<BodyPartContextType | undefined>(undefined);

export const BodyPartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPart, setSelectedPart] = useState<BodyPart | null>(null);

  return (
    <BodyPartContext.Provider value={{ selectedPart, setSelectedPart }}>
      {children}
    </BodyPartContext.Provider>
  );
};

export const useBodyPart = () => {
  const context = React.useContext(BodyPartContext);
  if (!context) {
    throw new Error('useBodyPart must be used within BodyPartProvider');
  }
  return context;
};
