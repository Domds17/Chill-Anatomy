import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import './AnimalSelectionScreen.css';

interface Animal {
  id: string;
  name: string;
  scientificName: string;
  emoji: string;
  description: string;
  color: string;
}

const animals: Animal[] = [
  {
    id: 'cattle',
    name: 'Boi',
    scientificName: 'Bos taurus',
    emoji: '🐂',
    description: 'Animal de grande porte, fundamental na pecuária',
    color: '#8B4513'
  },
  {
    id: 'horse',
    name: 'Cavalo',
    scientificName: 'Equus caballus',
    emoji: '🐎',
    description: 'Animal de equitação e trabalho',
    color: '#654321'
  },
  {
    id: 'sheep',
    name: 'Ovelha',
    scientificName: 'Ovis aries',
    emoji: '🐑',
    description: 'Animal de lã e carne',
    color: '#F5F5DC'
  },
  {
    id: 'goat',
    name: 'Cabra',
    scientificName: 'Capra aegagrus hircus',
    emoji: '🐐',
    description: 'Animal resistente e produtivo',
    color: '#D2B48C'
  },
  {
    id: 'pig',
    name: 'Porco',
    scientificName: 'Sus scrofa domesticus',
    emoji: '🐖',
    description: 'Animal de carne e couro',
    color: '#FFB6C1'
  },
  {
    id: 'chicken',
    name: 'Galinha',
    scientificName: 'Gallus gallus domesticus',
    emoji: '🐔',
    description: 'Ave doméstica mais comum',
    color: '#FFD700'
  },
  {
    id: 'dog',
    name: 'Cão',
    scientificName: 'Canis lupus familiaris',
    emoji: '🐕',
    description: 'Melhor amigo do homem',
    color: '#8B4513'
  },
  {
    id: 'cat',
    name: 'Gato',
    scientificName: 'Felis catus',
    emoji: '🐱',
    description: 'Felino doméstico independente',
    color: '#FFA500'
  }
];

const AnimalSelectionScreen: React.FC = () => {
  const { setCurrentScreen, setSelectedAnimal } = useNavigation();

  const handleAnimalSelect = (animalId: string) => {
    setSelectedAnimal(animalId);
    setCurrentScreen('anatomy-viewer');
  };

  const handleBack = () => {
    setCurrentScreen('welcome');
  };

  return (
    <div className="animal-selection-screen">
      <div className="selection-header">
        <button className="back-button" onClick={handleBack}>
          ← Voltar
        </button>
        <h1>Selecione um Animal</h1>
        <p>Escolha o animal que deseja explorar anatomicamente</p>
      </div>

      <div className="animals-grid">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="animal-card"
            onClick={() => handleAnimalSelect(animal.id)}
            style={{ '--accent-color': animal.color } as React.CSSProperties}
          >
            <div className="animal-emoji">
              {animal.emoji}
            </div>
            <div className="animal-info">
              <h3>{animal.name}</h3>
              <p className="scientific-name">{animal.scientificName}</p>
              <p className="description">{animal.description}</p>
            </div>
            <div className="animal-overlay">
              <span className="explore-text">Explorar Anatomia</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalSelectionScreen;