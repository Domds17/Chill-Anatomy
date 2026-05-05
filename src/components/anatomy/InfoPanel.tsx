import { Info, BookOpen, Link2 } from 'lucide-react'
import { motion } from 'framer-motion'
import PartBadge from './PartBadge'
import type { Animal, SubPart } from '../../lib/animalData'

interface InfoPanelProps {
  part: SubPart | null
  animal: Animal
  regionName: string | null
  onClose?: () => void
  onNavigatePart: (regionKey: string, partKey: string) => void
  allSubparts: Array<{ regionKey: string; partKey: string; name: string }>
}

const InfoPanel = ({ part, animal, regionName, onNavigatePart, allSubparts }: InfoPanelProps) => {
  if (!part) {
    return (
      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="rounded-[2rem] border border-border bg-card p-6 shadow-elevation-1"
      >
        <h2 className="text-lg font-semibold text-foreground">Selecione uma parte</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Clique em uma região no painel para abrir detalhes específicos sobre cada estrutura.
        </p>
      </motion.aside>
    )
  }

  const relatedParts = allSubparts.filter((subpart) => part.relatedParts.includes(subpart.partKey))

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="rounded-[2rem] border border-border bg-card shadow-elevation-1"
    >
      <div className="rounded-[2rem] bg-[rgba(139,69,19,0.08)] p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <PartBadge color={animal.color} size="lg" />
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">{regionName || 'Região'}</p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">{part.name}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <section className="space-y-3 rounded-3xl border border-border bg-[rgba(255,255,255,0.8)] p-5">
          <div className="flex items-center gap-3 text-brown-800">
            <Info className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Descrição</p>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">{part.description}</p>
        </section>

        <section className="space-y-3 rounded-3xl border border-border bg-[rgba(255,255,255,0.8)] p-5">
          <div className="flex items-center gap-3 text-brown-800">
            <BookOpen className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Detalhes</p>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">{part.details}</p>
        </section>

        {relatedParts.length > 0 && (
          <section className="space-y-3 rounded-3xl border border-border bg-[rgba(255,255,255,0.8)] p-5">
            <div className="flex items-center gap-3 text-brown-800">
              <Link2 className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Partes Relacionadas</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {relatedParts.map((related) => (
                <button
                  key={related.partKey}
                  type="button"
                  onClick={() => onNavigatePart(related.regionKey, related.partKey)}
                  className="rounded-full border border-brown-800 bg-brown-100 px-3 py-2 text-xs font-medium text-brown-900 transition hover:bg-brown-200"
                >
                  {related.name}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.aside>
  )
}

export default InfoPanel
