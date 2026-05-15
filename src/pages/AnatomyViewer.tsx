import { useState, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { getAnimalById, getAllSubparts } from "../lib/animalData";
import Header from "../components/anatomy/Header";
import Breadcrumb from "../components/anatomy/Breadcrumb";
import AnatomyModel from "../components/anatomy/AnatomyModel";
import BullViewer from "../components/anatomy/bull/BullViewer";
import InfoPanel from "../components/anatomy/InfoPanel";
import type { BreadcrumbItem } from "../components/anatomy/Breadcrumb";

export default function AnatomyViewer() {
  const { animalId } = useParams();

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(true);

  const animal = animalId ? getAnimalById(animalId) : null;

  const handleSelectRegion = useCallback((regionKey: string) => {
    setSelectedRegion((prev) => (prev === regionKey ? null : regionKey));
    setSelectedPart(null);
  }, []);

  const handleSelectPart = useCallback(
    (partKey: string) => {
      setSelectedPart(partKey);
      setPanelOpen(true);
    },
    []
  );

  const handleBullViewerSelect = useCallback(
    (regionKey: string, partKey: string) => {
      setSelectedRegion(regionKey);
      setSelectedPart(partKey);
      setPanelOpen(true);
    },
    []
  );

  const handleNavigatePart = useCallback(
    (regionKey: string, partKey: string) => {
      setSelectedRegion(regionKey);
      setSelectedPart(partKey);
    },
    []
  );

  const allSubparts = useMemo(() => animal ? getAllSubparts(animal) : [], [animal]);

  const currentPartData = useMemo(() =>
    animal && selectedRegion && selectedPart
      ? animal.parts[selectedRegion]?.subparts[selectedPart]
      : null,
    [animal, selectedRegion, selectedPart]
  );

  const regionName = selectedRegion && animal
    ? animal.parts[selectedRegion]?.name
    : null;

  // Build breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    if (!animal) return [];
    const items: BreadcrumbItem[] = [
      { label: animal.name, emoji: animal.emoji, level: "animal" },
    ];
    if (selectedRegion) {
      items.push({
        label: animal.parts[selectedRegion].name,
        level: "region" as const,
        regionKey: selectedRegion,
      });
    }
    if (selectedPart && currentPartData) {
      items.push({
        label: currentPartData.name,
        level: "part" as const,
      });
    }
    return items;
  }, [animal, selectedRegion, selectedPart, currentPartData]);

  const handleBreadcrumbNavigate = useCallback((item: BreadcrumbItem) => {
    if (item.level === "animal") {
      setSelectedRegion(null);
      setSelectedPart(null);
    } else if (item.level === "region") {
      setSelectedPart(null);
    }
  }, []);

  if (!animalId || !animal) {
    return <div>Animal not found</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showBack backTo="/animals" title="Anatomia" />

      {/* Breadcrumb bar */}
      <div className="border-b border-border bg-card/50 px-4 md:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Breadcrumb
            items={breadcrumbItems}
            onNavigate={handleBreadcrumbNavigate}
          />
          {currentPartData && (
            <button
              onClick={() => setPanelOpen(!panelOpen)}
              className="p-1.5 rounded-md hover:bg-muted transition-colors lg:hidden"
            >
              {panelOpen ? (
                <PanelRightClose className="w-4 h-4 text-muted-foreground" />
              ) : (
                <PanelRightOpen className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* Model area */}
          <div className="flex-1 min-w-0">
            <div
              className="bg-card rounded-lg shadow-elevation-1 overflow-hidden"
              style={{ minHeight: animal.id === "boi" ? "580px" : undefined, padding: animal.id === "boi" ? 0 : undefined }}
            >
              {animal.id === "boi" ? (
                <div className="w-full h-[580px]">
                  <BullViewer onSelectPart={handleBullViewerSelect} />
                </div>
              ) : (
                <div className="p-4 lg:p-6">
                  <AnatomyModel
                    animal={animal}
                    selectedRegion={selectedRegion}
                    selectedPart={selectedPart}
                    onSelectRegion={handleSelectRegion}
                    onSelectPart={handleSelectPart}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Info panel */}
          <AnimatePresence>
            {currentPartData && panelOpen && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-[360px] shrink-0"
              >
                <InfoPanel
                  part={currentPartData}
                  animal={animal}
                  regionName={regionName}
                  onClose={() => {
                    setSelectedPart(null);
                    setPanelOpen(false);
                  }}
                  onNavigatePart={handleNavigatePart}
                  allSubparts={allSubparts}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}