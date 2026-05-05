import React from 'react';
import type { Animal } from '../types/animal';
import '../styles/AnimalSelector.css';

interface AnimalSelectorProps {
  animals: Animal[];
  selectedAnimal: Animal;
  onSelectAnimal: (animal: Animal) => void;
}

export const AnimalSelector: React.FC<AnimalSelectorProps> = ({
  animals,
  selectedAnimal,
  onSelectAnimal,
}) => {
  return (
    <div className="animal-selector">
      <h2>Selecione um Animal</h2>
      <div className="animal-list">
        {animals.map((animal) => (
          <button
            key={animal.id}
            className={`animal-btn ${selectedAnimal.id === animal.id ? 'active' : ''}`}
            onClick={() => onSelectAnimal(animal)}
          >
            <span className="animal-name">{animal.name}</span>
            <span className="animal-desc">{animal.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
