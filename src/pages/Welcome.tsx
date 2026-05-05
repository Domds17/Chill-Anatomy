import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Layers, Sparkles } from 'lucide-react'
import { animals } from '../lib/animalData'

const features = [
  {
    title: 'Aprendizado Visual',
    description: 'Explore anatomia com uma navegação clara e intuitiva.',
    icon: Sparkles,
  },
  {
    title: 'Detalhes Científicos',
    description: 'Acesse descrições e informações de cada parte.',
    icon: BookOpen,
  },
  {
    title: 'Seis Espécies',
    description: 'Conheça diferentes animais de produção e estudo.',
    icon: Layers,
  },
]

const Welcome = () => {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-elevation-1">
              <span className="text-brown-800">🐂</span>
              Novo design: Chill Anatomy 3D
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-brown-800 sm:text-5xl">
                Explore a anatomia veterinária de forma interativa.
              </h1>
              <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                Um aplicativo de aprendizado que une navegação clara, dados científicos e uma experiência visual moderna.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/animals"
                className="inline-flex items-center justify-center rounded-full bg-brown-800 px-8 py-3 text-sm font-semibold text-white shadow-elevation-2 transition hover:bg-brown-700"
              >
                Começar Exploração
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[2rem] border border-border bg-card p-10 shadow-elevation-2"
          >
            <div className="grid grid-cols-3 gap-4">
              {animals.slice(0, 6).map((animal) => (
                <div key={animal.id} className="flex h-24 flex-col items-center justify-center rounded-3xl border border-border bg-[rgba(139,69,19,0.05)] p-3 text-center shadow-sm">
                  <span className="text-4xl">{animal.emoji}</span>
                  <span className="mt-3 text-sm font-semibold text-foreground">{animal.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.4, ease: 'easeOut' }}
                className="rounded-3xl border border-border bg-card p-6 shadow-elevation-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brown-100 text-brown-900">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
              </motion.article>
            )
          })}
        </section>

        <footer className="rounded-3xl border border-border bg-card px-6 py-5 text-sm text-muted-foreground shadow-elevation-1">
          Chill Anatomy · Versão 1.0 · Maio 2026
        </footer>
      </div>
    </main>
  )
}

export default Welcome
