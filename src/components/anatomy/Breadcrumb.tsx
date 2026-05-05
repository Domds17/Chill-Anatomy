import { ChevronRight } from 'lucide-react'

export type BreadcrumbItem = {
  label: string
  emoji?: string
  level: 'animal' | 'region' | 'part'
  regionKey?: string
  partKey?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  onNavigate: (item: BreadcrumbItem) => void
}

const Breadcrumb = ({ items, onNavigate }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-2 overflow-x-auto rounded-3xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground shadow-elevation-1">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            <button
              type="button"
              disabled={isLast}
              onClick={() => onNavigate(item)}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 transition ${
                isLast
                  ? 'cursor-default font-semibold text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:underline'
              }`}
            >
              {item.emoji && <span>{item.emoji}</span>}
              <span>{item.label}</span>
            </button>
            {!isLast && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
