import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import './WelcomeScreen.css';

const WelcomeScreen: React.FC = () => {
  const { setCurrentScreen } = useNavigation();

  const handleStart = () => {
    setCurrentScreen('animal-selection');
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-header">
          <h1 className="welcome-title">
            🐂 <span className="highlight">Chill Anatomy</span>
          </h1>
          <p className="welcome-subtitle">
            Anatomia Veterinária Interativa
          </p>
        </div>

        <div className="welcome-description">
          <p>
            Bem-vindo ao <strong>Chill Anatomy</strong>, uma ferramenta educacional
            desenvolvida especialmente para estudantes de medicina veterinária.
          </p>
          <p>
            Explore a anatomia dos animais de forma interativa e intuitiva,
            facilitando o aprendizado e compreensão das estruturas corporais.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">🔍</span>
              <span>Visualização 3D detalhada</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📚</span>
              <span>Informações educacionais</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>Navegação intuitiva</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏥</span>
              <span>Foco em medicina veterinária</span>
            </div>
          </div>
        </div>

        <div className="welcome-actions">
          <button className="start-button" onClick={handleStart}>
            Começar Exploração
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;