// components/anatomy/bull/BullViewer.tsx — Orquestrador Principal

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomOut } from 'lucide-react';
import BullSkinSVG from './BullSkinSVG';
import BullMuscleSVG from './BullMuscleSVG';
import BullBoneSVG from './BullBoneSVG';
import { LAYERS, getLayerPart } from '../../../lib/bullLayerData';

type LayerKey = keyof typeof LAYERS;

interface BullViewerProps {
  onSelectPart: (regionKey: string, partKey: string) => void;
}

const SVG_COMPONENTS = {
  pele: BullSkinSVG,
  musculos: BullMuscleSVG,
  ossos: BullBoneSVG,
};

const layerBg = {
  pele: "from-[#F9F3EA] to-[#EEE4D4]",
  musculos: "from-[#FDF0EE] to-[#F5D8D5]",
  ossos: "from-[#F0F4F4] to-[#DDE6E6]",
};

const layerAccent = {
  pele: "#8B4513",
  musculos: "#C0392B",
  ossos: "#2C6E8A",
};

export default function BullViewer({ onSelectPart }: BullViewerProps) {
  const [activeLayer, setActiveLayer] = useState<LayerKey>("pele");
  const [activePart, setActivePart] = useState<string | null>(null);
  const [zoomedPart, setZoomedPart] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState("0 0 900 480");

  const handlePartClick = (partId: string) => {
    const part = getLayerPart(activeLayer, partId);

    if (!part) return;

    if (zoomedPart === partId) {
      // toggle: desfaz zoom
      setZoomedPart(null);
      setActivePart(null);
      setViewBox("0 0 900 480");
      return;
    }

    setActivePart(partId);
    setZoomedPart(partId);
    setViewBox(part.zoomBox);

    // propaga para AnatomyViewer
    onSelectPart(part.regionKey, part.partKey);
  };

  const handleLayerChange = (layer: LayerKey) => {
    setActiveLayer(layer);
    setActivePart(null);
    setZoomedPart(null);
    setViewBox("0 0 900 480");
  };

  const SvgComponent = SVG_COMPONENTS[activeLayer as keyof typeof SVG_COMPONENTS];

  return (
    <div className={`w-full h-full bg-gradient-to-br ${layerBg[activeLayer]} flex flex-col`}>
      {/* Layer Tabs */}
      <div className="flex justify-center py-4 space-x-2">
        {(Object.entries(LAYERS) as [LayerKey, typeof LAYERS[LayerKey]][]).map(([key, layer]) => (
          <button
            key={key}
            onClick={() => handleLayerChange(key)}
            style={activeLayer === key ? { backgroundColor: layerAccent[key], color: '#fff' } : undefined}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeLayer === key
                ? 'shadow-lg'
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            {layer.icon} {layer.label}
          </button>
        ))}
      </div>

      {/* SVG Canvas */}
      <div className="flex-1 relative">
        {/* Subtitle */}
        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 font-medium">
          Vista lateral — Bos taurus — {LAYERS[activeLayer].label}
        </span>

        {/* SVG with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <SvgComponent activePart={activePart} onSelect={handlePartClick} viewBox={viewBox} />
          </motion.div>
        </AnimatePresence>

        {/* Ver boi completo button */}
        <AnimatePresence>
          {zoomedPart && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => handlePartClick(zoomedPart)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <ZoomOut size={20} className="text-gray-700" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Label da parte com zoom */}
        <AnimatePresence>
          {zoomedPart && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-lg px-3 py-1 shadow-lg"
            >
              <span className="text-sm font-medium text-gray-800">
                {getLayerPart(activeLayer, zoomedPart)?.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint */}
        {!zoomedPart && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <span className="text-sm text-gray-500">Clique em uma região para ampliar</span>
          </div>
        )}

        {/* Legenda */}
        <div className="absolute left-3 top-16 bg-white/90 rounded-lg p-3 shadow-lg max-h-80 overflow-y-auto">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Legenda</h4>
          <div className="space-y-1">
            {LAYERS[activeLayer].parts.map((part) => (
              <button
                key={part.id}
                onClick={() => handlePartClick(part.id)}
                className={`block w-full text-left px-2 py-1 rounded text-xs transition-all ${
                  activePart === part.id
                    ? 'bg-blue-100 text-blue-800 font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {part.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}