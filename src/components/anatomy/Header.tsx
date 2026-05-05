import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  showBack?: boolean
  backTo?: string
  title: string
}

const Header = ({ showBack = false, backTo = '/', title }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-0">
        <div className="flex items-center gap-3">
          {showBack && backTo ? (
            <Link
              to={backTo}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-brown-800 shadow-sm transition hover:bg-brown-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brown-100 text-brown-900">🐂</div>
          )}
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Chill Anatomy</p>
            <h1 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
