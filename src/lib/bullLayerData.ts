// Dados das camadas do boi, mapeados para as regiões do animalData
// Cada camada tem suas próprias partes clicáveis com viewBox de zoom

export const LAYERS = {
  pele: {
    label: "Pele",
    icon: "🐂",
    color: "#C8874A",
    bg: "from-[#F9F3EA] to-[#EEE4D4]",
    parts: [
      { id: "pele_cabeca",    label: "Cabeça",           regionKey: "cabeca",  partKey: "nariz",      zoomBox: "85 20 230 220" },
      { id: "pele_boca",      label: "Boca / Focinho",   regionKey: "cabeca",  partKey: "nariz",      zoomBox: "85 140 160 100" },
      { id: "pele_olhos",     label: "Olhos",            regionKey: "cabeca",  partKey: "olhos",      zoomBox: "155 115 90 60" },
      { id: "pele_orelhas",   label: "Orelhas",          regionKey: "cabeca",  partKey: "orelhas",    zoomBox: "155 25 80 100" },
      { id: "pele_pescoco",   label: "Pescoço",          regionKey: "tronco",  partKey: "coracao",    zoomBox: "185 100 160 150" },
      { id: "pele_torax",     label: "Tórax",            regionKey: "tronco",  partKey: "pulmoes",    zoomBox: "240 120 320 230" },
      { id: "pele_abdomen",   label: "Abdômen",          regionKey: "tronco",  partKey: "estomago",   zoomBox: "460 130 270 230" },
      { id: "pele_pelve",     label: "Pelve / Garupa",   regionKey: "tronco",  partKey: "estomago",   zoomBox: "600 145 200 200" },
      { id: "pele_ubere",     label: "Úbere",            regionKey: "tronco",  partKey: "estomago",   zoomBox: "490 310 180 150" },
      { id: "pele_mant_e",    label: "Membros Anteriores",regionKey: "membros", partKey: "dianteiros", zoomBox: "220 170 130 320" },
      { id: "pele_mpost_e",   label: "Membros Posteriores",regionKey:"membros", partKey: "traseiros", zoomBox: "640 180 130 320" },
      { id: "pele_cascos",    label: "Cascos",           regionKey: "membros", partKey: "dianteiros", zoomBox: "220 420 520 80" },
      { id: "pele_cauda",     label: "Cauda",            regionKey: "tronco",  partKey: "estomago",   zoomBox: "700 60 160 220" },
      { id: "pele_chifres",   label: "Chifres",          regionKey: "cabeca",  partKey: "nariz",      zoomBox: "170 15 130 130" },
    ],
  },
  musculos: {
    label: "Músculos",
    icon: "💪",
    color: "#C0392B",
    bg: "from-[#FDF0EE] to-[#F5D8D5]",
    parts: [
      { id: "musc_masseter",  label: "Masseter (face)",    regionKey: "cabeca",  partKey: "nariz",      zoomBox: "100 120 180 130" },
      { id: "musc_pescoco",   label: "Músculo do Pescoço", regionKey: "tronco",  partKey: "coracao",    zoomBox: "185 100 160 150" },
      { id: "musc_espadua",   label: "Espádua / Trapézio", regionKey: "membros", partKey: "dianteiros", zoomBox: "220 120 220 250" },
      { id: "musc_peitoral",  label: "Peitoral",           regionKey: "tronco",  partKey: "pulmoes",    zoomBox: "230 200 220 200" },
      { id: "musc_dorsal",    label: "Dorsal / Lombo",     regionKey: "tronco",  partKey: "pulmoes",    zoomBox: "330 100 360 180" },
      { id: "musc_abdomen",   label: "Abdômen",            regionKey: "tronco",  partKey: "estomago",   zoomBox: "430 150 260 230" },
      { id: "musc_gluteo",    label: "Glúteo / Garupa",    regionKey: "membros", partKey: "traseiros", zoomBox: "600 130 200 230" },
      { id: "musc_coxa",      label: "Coxa",               regionKey: "membros", partKey: "traseiros", zoomBox: "640 180 150 250" },
      { id: "musc_ant_inf",   label: "Antebraço",          regionKey: "membros", partKey: "dianteiros", zoomBox: "230 300 120 200" },
      { id: "musc_post_inf",  label: "Perna Post.",        regionKey: "membros", partKey: "traseiros", zoomBox: "660 300 130 200" },
    ],
  },
  ossos: {
    label: "Ossos",
    icon: "🦴",
    color: "#7F8C8D",
    bg: "from-[#F0F4F4] to-[#DDE6E6]",
    parts: [
      { id: "osso_cranio",    label: "Crânio",             regionKey: "cabeca",  partKey: "nariz",      zoomBox: "100 100 180 150" },
      { id: "osso_mandibula", label: "Mandíbula",          regionKey: "cabeca",  partKey: "nariz",      zoomBox: "95 145 170 110" },
      { id: "osso_cervical",  label: "Vértebras Cervicais",regionKey: "tronco",  partKey: "coracao",    zoomBox: "190 100 160 130" },
      { id: "osso_toracica",  label: "Vértebras Torácicas",regionKey: "tronco",  partKey: "pulmoes",    zoomBox: "270 100 280 170" },
      { id: "osso_costelas",  label: "Costelas",           regionKey: "tronco",  partKey: "pulmoes",    zoomBox: "270 140 280 200" },
      { id: "osso_lombar",    label: "Vért. Lombares",     regionKey: "tronco",  partKey: "estomago",   zoomBox: "500 100 200 140" },
      { id: "osso_sacro",     label: "Sacro / Pelve",      regionKey: "tronco",  partKey: "estomago",   zoomBox: "630 140 180 180" },
      { id: "osso_escapula",  label: "Escápula",           regionKey: "membros", partKey: "dianteiros", zoomBox: "235 140 180 190" },
      { id: "osso_umero",     label: "Úmero",              regionKey: "membros", partKey: "dianteiros", zoomBox: "240 240 130 170" },
      { id: "osso_radio",     label: "Rádio / Ulna",       regionKey: "membros", partKey: "dianteiros", zoomBox: "240 330 110 160" },
      { id: "osso_femur",     label: "Fêmur",              regionKey: "membros", partKey: "traseiros", zoomBox: "655 185 130 200" },
      { id: "osso_tibia",     label: "Tíbia",              regionKey: "membros", partKey: "traseiros", zoomBox: "665 300 110 180" },
      { id: "osso_cascos",    label: "Falanges / Cascos",  regionKey: "membros", partKey: "traseiros", zoomBox: "220 420 520 80" },
    ],
  },
};

// Retorna o part da camada pelo id
export function getLayerPart(layerKey: keyof typeof LAYERS, partId: string) {
  return LAYERS[layerKey]?.parts.find((p) => p.id === partId) ?? null;
}