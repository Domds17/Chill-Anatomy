import './App.css';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { BodyPartProvider } from './context/BodyPartContext';
import WelcomeScreen from './components/WelcomeScreen';
import AnimalSelectionScreen from './components/AnimalSelectionScreen';
import AnatomyViewer from './components/AnatomyViewer';

function AppContent() {
  const { currentScreen } = useNavigation();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'animal-selection':
        return <AnimalSelectionScreen />;
      case 'anatomy-viewer':
        return <AnatomyViewer />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="app">
      {renderScreen()}
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <BodyPartProvider>
        <AppContent />
      </BodyPartProvider>
    </NavigationProvider>
  );
}

export default App;
