import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Animal } from '../../lib/animalData'

interface AnimalCardProps {
  animal: Animal
  index: number
}

const AnimalCard = ({ animal, index }: AnimalCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-elevation-1 transition hover:shadow-elevation-3"
    >
      <Link to={`/animal/${animal.id}`} className="block p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[rgba(139,69,19,0.08)] text-5xl transition group-hover:scale-110">
            {animal.emoji}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">{animal.name}</h2>
            <p className="text-sm italic text-muted-foreground">{animal.scientificName}</p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-6 text-muted-foreground">{animal.description}</p>

        <div className="mt-6 flex items-center justify-between gap-3 text-sm text-brown-800">
          <span className="font-semibold">Explorar anatomia</span>
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.article>
  )
}

export default AnimalCard
