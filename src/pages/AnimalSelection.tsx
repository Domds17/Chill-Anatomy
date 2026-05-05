import { animals } from '../lib/animalData'
import Header from '../components/anatomy/Header'
import AnimalCard from '../components/anatomy/AnimalCard'

const AnimalSelection = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-8 lg:px-16">
      <Header showBack backTo="/" title="Escolha o Animal" />
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {animals.map((animal, index) => (
          <AnimalCard key={animal.id} animal={animal} index={index} />
        ))}
      </div>
    </div>
  )
}

export default AnimalSelection
