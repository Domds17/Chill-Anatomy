import { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PanelRightClose, PanelRightOpen } from "lucide-react";


import { getAnimalById, getAllSubparts } from "../lib/animalData";
import Header from "../components/anatomy/Header";
import Breadcrumb from "../components/anatomy/Breadcrumb";
import AnatomyModel from "../components/anatomy/AnatomyModel";
import BullModel3D, { BULL_3D_PART_MAP } from "../components/anatomy/BullModel3D";
import InfoPanel from "../components/anatomy/InfoPanel";

export default function AnatomyViewer() {
  const { animalId } = useParams();
  const navigate = useNavigate();

  const animal = getAnimalById(animalId || "");

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(true);

  // ✅ navigate correto
  useEffect(() => {
    if (!animal) {
      navigate("/animals");
    }
  }, [animal, navigate]);

  // =============================
  // HANDLERS
  // =============================
  const handleSelectRegion = useCallback((regionKey: string) => {
    setSelectedRegion((prev) => (prev === regionKey ? null : regionKey));
    setSelectedPart(null);
  }, []);

  const handleSelectPart = useCallback((partKey: string) => {
    setSelectedPart(partKey);
    setPanelOpen(true);
  }, []);

  const handleBull3DSelect = useCallback((partKey3D: string) => {
    const mapped = BULL_3D_PART_MAP[partKey3D];
    if (mapped) {
      setSelectedRegion(mapped.regionKey);
      setSelectedPart(mapped.partKey);
      setPanelOpen(true);
    }
  }, []);

  const handleNavigatePart = useCallback(
    (regionKey: string, partKey: string) => {
      setSelectedRegion(regionKey);
      setSelectedPart(partKey);
      setPanelOpen(true);
    },
    []
  );

  const handleBreadcrumbNavigate = (item: any) => {
    if (item.level === "animal") {
      setSelectedRegion(null);
      setSelectedPart(null);
    } else if (item.level === "region") {
      setSelectedPart(null);
    }
  };

  if (!animal) return null;

  // =============================
  // DADOS
  // =============================
  const allSubparts = getAllSubparts(animal);

  const currentPartData =
    selectedRegion && selectedPart
      ? animal.parts[selectedRegion]?.subparts[selectedPart]
      : null;

  const regionName = selectedRegion
    ? animal.parts[selectedRegion]?.name
    : null;

  // Breadcrumb
  const breadcrumbItems: any[] = [
    { label: animal.name, emoji: animal.emoji, level: "animal" },
  ];

  if (selectedRegion) {
    breadcrumbItems.push({
      label: animal.parts[selectedRegion].name,
      level: "region",
      regionKey: selectedRegion,
    });
  }

  if (selectedPart && currentPartData) {
    breadcrumbItems.push({
      label: currentPartData.name,
      level: "part",
    });
  }

  // highlight 3D
  const activeBull3DPart = selectedPart
    ? Object.entries(BULL_3D_PART_MAP).find(
        ([, v]) => v.partKey === selectedPart
      )?.[0] ?? null
    : null;

  // =============================
  // UI
  // =============================
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showBack backTo="/animals" title={""} />

      {/* BREADCRUMB */}
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
                <PanelRightClose className="w-4 h-4" />
              ) : (
                <PanelRightOpen className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 h-full">

          {/* MODEL */}
          <div className="flex-1 min-w-0">
            <div
              className="bg-card rounded-lg shadow overflow-hidden"
              style={{
                minHeight: animal.id === "boi" ? "520px" : undefined,
              }}
            >
              {animal.id === "boi" ? (
                <div className="w-full h-[520px]">
                  <BullModel3D
                    onSelectPart={handleBull3DSelect}
                    activePart={activeBull3DPart}
                  />
                </div>
              ) : (
                <div className="p-4">
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

          {/* PANEL */}
          <AnimatePresence>
            {currentPartData && panelOpen && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-[360px]"
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