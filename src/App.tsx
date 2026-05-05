import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import AnimalSelection from './pages/AnimalSelection'
import AnatomyViewer from './pages/AnatomyViewer'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/animals" element={<AnimalSelection />} />
          <Route path="/animal/:animalId" element={<AnatomyViewer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
