import { AnimatePresence, motion } from 'framer-motion'
import type { Animal } from '../../lib/animalData'

interface AnatomyModelProps {
  animal: Animal
  selectedRegion: string | null
  selectedPart: string | null
  onSelectRegion: (key: string) => void
  onSelectPart: (key: string) => void
}

const AnatomyModel = ({ animal, selectedRegion, selectedPart, onSelectRegion, onSelectPart }: AnatomyModelProps) => {
  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 shadow-elevation-1">
      <div className="text-center">
        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[rgba(139,69,19,0.08)] text-[4rem]">
          {animal.emoji}
        </div>
        <div className="mt-6">
          <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground">Animal</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">{animal.name}</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{animal.description}</p>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        {Object.entries(animal.parts).map(([regionKey, region]) => {
          const isOpen = regionKey === selectedRegion
          return (
            <div key={regionKey} className="overflow-hidden rounded-[1.75rem] border border-border bg-[rgba(255,255,255,0.9)] shadow-sm">
              <button
                type="button"
                onClick={() => onSelectRegion(regionKey)}
                className={`flex w-full items-center justify-between gap-3 px-6 py-5 text-left transition ${
                  isOpen ? 'bg-brown-100 text-foreground' : 'bg-transparent text-foreground'
                }`}
              >
                <div>
                  <p className="text-sm font-semibold">{region.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{Object.keys(region.subparts).length} partes</p>
                </div>
                <span className="text-xl">{isOpen ? '−' : '+'}</span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="space-y-3 px-6 pb-5"
                  >
                    {Object.entries(region.subparts).map(([partKey, part]) => {
                      const active = partKey === selectedPart
                      return (
                        <button
                          key={partKey}
                          type="button"
                          onClick={() => onSelectPart(partKey)}
                          className={`w-full rounded-full border px-4 py-3 text-left text-sm transition ${
                            active
                              ? 'border-brown-800 bg-brown-800 text-white'
                              : 'border-border bg-[rgba(139,69,19,0.08)] text-foreground hover:border-brown-700 hover:bg-brown-100'
                          }`}
                        >
                          {part.name}
                        </button>
                      )
                    })}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnatomyModel
