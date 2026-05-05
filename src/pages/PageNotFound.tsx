import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

const PageNotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 py-16 text-center">
      <div className="max-w-xl rounded-[2rem] border border-border bg-card p-10 shadow-elevation-2">
        <AlertTriangle className="mx-auto mb-6 h-14 w-14 text-brown-800" />
        <h1 className="text-3xl font-semibold text-foreground">Página não encontrada</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          A rota acessada não existe. Volte à seleção de animais para continuar explorando.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-brown-800 px-6 py-3 text-sm font-semibold text-white shadow-elevation-2 transition hover:bg-brown-700"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  )
}

export default PageNotFound
