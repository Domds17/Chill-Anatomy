import { useCallback, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import type { BreadcrumbItem } from '../components/anatomy/Breadcrumb'
import { getAllSubparts, getAnimalById, getPartData } from '../lib/animalData'
import Header from '../components/anatomy/Header'
import Breadcrumb from '../components/anatomy/Breadcrumb'
import AnatomyModel from '../components/anatomy/AnatomyModel'
import InfoPanel from '../components/anatomy/InfoPanel'

const AnatomyViewer = () => {
  const navigate = useNavigate()
  const { animalId } = useParams()
  const animal = useMemo(() => getAnimalById(animalId || ''), [animalId])
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedPart, setSelectedPart] = useState<string | null>(null)
  const [panelOpen, setPanelOpen] = useState(true)

  const allSubparts = useMemo(() => (animal ? getAllSubparts(animal) : []), [animal])
  const currentPartData = useMemo(
    () => getPartData(animal, selectedRegion, selectedPart),
    [animal, selectedRegion, selectedPart],
  )
  const regionName = selectedRegion ? animal?.parts[selectedRegion]?.name ?? null : null

  const items = useMemo(() => {
    const list: BreadcrumbItem[] = [
      { label: animal?.name || 'Animal', emoji: animal?.emoji, level: 'animal' },
    ]
    if (selectedRegion && animal) {
      list.push({ label: regionName || 'Região', level: 'region', regionKey: selectedRegion })
    }
    if (currentPartData && selectedPart) {
      list.push({ label: currentPartData.name, level: 'part', regionKey: selectedRegion!, partKey: selectedPart })
    }
    return list
  }, [animal, selectedRegion, regionName, currentPartData, selectedPart])

  const handleSelectRegion = useCallback(
    (regionKey: string) => {
      setSelectedRegion((current) => (current === regionKey ? null : regionKey))
      setSelectedPart(null)
    },
    [setSelectedRegion, setSelectedPart],
  )

  const handleSelectPart = useCallback(
    (partKey: string) => {
      setSelectedPart(partKey)
      setPanelOpen(true)
    },
    [setSelectedPart],
  )

  const handleNavigatePart = useCallback(
    (regionKey: string, partKey: string) => {
      setSelectedRegion(regionKey)
      setSelectedPart(partKey)
      setPanelOpen(true)
    },
    [],
  )

  const handleBreadcrumbNavigate = useCallback(
    (item: { level: string; regionKey?: string; partKey?: string }) => {
      if (item.level === 'animal') {
        setSelectedRegion(null)
        setSelectedPart(null)
      }
      if (item.level === 'region') {
        setSelectedPart(null)
      }
    },
    [],
  )

  const handlePanelToggle = () => setPanelOpen((value) => !value)

  if (!animal) {
    navigate('/animals')
    return null
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-8 lg:px-16">
      <Header showBack backTo="/animals" title={`Visualizador - ${animal.name}`} />
      <div className="mt-8">
        <Breadcrumb items={items} onNavigate={handleBreadcrumbNavigate} />
      </div>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex-1">
          <AnatomyModel
            animal={animal}
            selectedRegion={selectedRegion}
            selectedPart={selectedPart}
            onSelectRegion={handleSelectRegion}
            onSelectPart={handleSelectPart}
          />
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-[380px]">
          <div className="flex items-center justify-between rounded-3xl border border-border bg-card p-4 shadow-elevation-1 lg:hidden">
            <div>
              <p className="text-sm font-semibold text-foreground">Painel de informações</p>
              <p className="text-xs text-muted-foreground">{panelOpen ? 'Aberto' : 'Fechado'}</p>
            </div>
            <button
              type="button"
              onClick={handlePanelToggle}
              className="rounded-full border border-border bg-white px-3 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-brown-100"
            >
              {panelOpen ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {panelOpen && (
              <InfoPanel
                key={currentPartData?.name || 'empty'}
                animal={animal}
                part={currentPartData}
                regionName={regionName}
                onNavigatePart={handleNavigatePart}
                allSubparts={allSubparts}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default AnatomyViewer
