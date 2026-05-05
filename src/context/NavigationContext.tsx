import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Screen = 'welcome' | 'animal-selection' | 'anatomy-viewer';

interface NavigationContextType {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
  selectedAnimal: string | null;
  setSelectedAnimal: (animal: string | null) => void;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);

  return (
    <NavigationContext.Provider value={{
      currentScreen,
      setCurrentScreen,
      selectedAnimal,
      setSelectedAnimal,
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};