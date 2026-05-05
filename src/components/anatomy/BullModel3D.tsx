import React, { useState } from "react";

type Bull3DPartMapValue = {
  regionKey: string;
  partKey: string;
};

// Mapeamento de regiões 3D → chaves do animalData
export const BULL_3D_PART_MAP: Record<string, Bull3DPartMapValue> = {
  cabeca:       { regionKey: "cabeca",  partKey: "olhos" },
  boca_focinho: { regionKey: "cabeca",  partKey: "nariz" },
  olhos:        { regionKey: "cabeca",  partKey: "olhos" },
  orelhas:      { regionKey: "cabeca",  partKey: "orelhas" },
  pescoco:      { regionKey: "tronco",  partKey: "coracao" },
  torax:        { regionKey: "tronco",  partKey: "pulmoes" },
  abdomen:      { regionKey: "tronco",  partKey: "estomago" },
  pelve:        { regionKey: "tronco",  partKey: "estomago" },
  membro_ant_e: { regionKey: "membros", partKey: "dianteiros" },
  membro_ant_d: { regionKey: "membros", partKey: "dianteiros" },
  membro_post_e:{ regionKey: "membros", partKey: "traseiros" },
  membro_post_d:{ regionKey: "membros", partKey: "traseiros" },
  casco_ant:    { regionKey: "membros", partKey: "dianteiros" },
  casco_post:   { regionKey: "membros", partKey: "traseiros" },
  cauda:        { regionKey: "tronco",  partKey: "estomago" },
  chifres:      { regionKey: "cabeca",  partKey: "olhos" },
  ubere:        { regionKey: "tronco",  partKey: "estomago" },
};

// Cores base por grupo
const BASE_COLORS = {
  skin:    "#C8874A",
  skin_d:  "#B5763C",
  dark:    "#7A4E2D",
  hooves:  "#3D2B1F",
  horn:    "#E8D5A0",
  pink:    "#E8A0A0",
  white:   "#F5F0E8",
  eye:     "#2C1810",
};

function BullPart({ id, activePart, onSelect, children, title }: {
  id: string;
  activePart: string | null;
  onSelect: (id: string) => void;
  children: React.ReactNode;
  title?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const isActive = activePart === id;

  return (
    <g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(id)}
      style={{ cursor: "pointer" }}
      opacity={isActive ? 1 : hovered ? 0.85 : 1}
    >
      {React.Children.map(children, (child) => {
        if (!child || typeof child === 'string' || typeof child === 'number') return child;
        const extraProps: any = {};
        if ((child as any).props?.applyHighlight !== false) {
          if (isActive) {
            extraProps.filter = "url(#active-glow)";
          } else if (hovered) {
            extraProps.filter = "url(#hover-glow)";
          }
        }
        return React.cloneElement(child as React.ReactElement, extraProps);
      })}
      {title && <title>{title}</title>}
    </g>
  );
}

export default function BullModel3D({ onSelectPart, activePart }: {
  onSelectPart: (partKey3D: string) => void;
  activePart: string | null;
}) {
  const handleSelect = (partId: string) => {
    onSelectPart(partId);
  };

  const legendItems = [
    { id: "cabeca",       label: "Cabeça", color: BASE_COLORS.skin },
    { id: "torax",        label: "Tórax",  color: BASE_COLORS.skin },
    { id: "abdomen",      label: "Abdômen", color: BASE_COLORS.skin_d },
    { id: "pelve",        label: "Pelve",  color: BASE_COLORS.dark },
    { id: "membro_ant_e", label: "Membros Ant.", color: BASE_COLORS.skin_d },
    { id: "membro_post_e",label: "Membros Post.", color: BASE_COLORS.dark },
    { id: "casco_ant",    label: "Cascos", color: BASE_COLORS.hooves },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F9F3EA] to-[#EEE4D4] rounded-xl select-none">
      
      {/* Title */}
      <div className="absolute top-3 left-0 right-0 flex justify-center">
        <span className="text-xs font-semibold text-[#8B4513]/70 tracking-widest uppercase">
          Vista lateral — Bos taurus
        </span>
      </div>

      {/* SVG Bull */}
      <svg
        viewBox="0 0 900 480"
        className="w-full max-w-3xl px-4"
        style={{ maxHeight: "420px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradientes */}
          <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#D9965A" />
            <stop offset="100%" stopColor="#9B5A28" />
          </radialGradient>
          <radialGradient id="headGrad" cx="60%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#D08A45" />
            <stop offset="100%" stopColor="#9B5A28" />
          </radialGradient>
          <radialGradient id="abdomenGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#C4793A" />
            <stop offset="100%" stopColor="#8B4513" />
          </radialGradient>
          <radialGradient id="pelveGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#A0602A" />
            <stop offset="100%" stopColor="#7A3B10" />
          </radialGradient>
          <linearGradient id="legGradAnt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4793A" />
            <stop offset="100%" stopColor="#8B4513" />
          </linearGradient>
          <linearGradient id="legGradPost" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9B5A28" />
            <stop offset="100%" stopColor="#6B3010" />
          </linearGradient>
          <linearGradient id="neckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C87838" />
            <stop offset="100%" stopColor="#9B5A28" />
          </linearGradient>
          <radialGradient id="uberGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#F0B0A0" />
            <stop offset="100%" stopColor="#D08080" />
          </radialGradient>

          {/* Filtros de destaque */}
          <filter id="hover-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#F4A040" floodOpacity="0.9" />
          </filter>
          <filter id="active-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#FF6B00" floodOpacity="1" />
          </filter>
          <filter id="shadow" x="-5%" y="-5%" width="115%" height="130%">
            <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#5C2E0F" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* ===================== SOMBRA NO CHÃO ===================== */}
        <ellipse cx="430" cy="462" rx="280" ry="14" fill="#C4A070" opacity="0.35" />

        {/* ===================== MEMBROS TRASEIROS (fundo) ===================== */}
        {/* Perna post direita (atrás) */}
        <BullPart id="membro_post_d" activePart={activePart} onSelect={handleSelect} title="Membro Posterior">
          <path d="M 618 330 Q 630 360 628 390 Q 626 420 622 445" stroke="#6B3010" strokeWidth="1" fill="url(#legGradPost)" opacity="0.75">
            <title>Membro Posterior</title>
          </path>
          <path d="M 618 330 C 635 335 645 360 643 390 C 641 415 637 440 633 450 C 628 445 622 445 618 445 C 615 435 614 410 616 385 C 618 360 614 340 608 332 Z" fill="url(#legGradPost)" opacity="0.7" />
        </BullPart>

        {/* Perna ant direita (atrás) */}
        <BullPart id="membro_ant_d" activePart={activePart} onSelect={handleSelect} title="Membro Anterior">
          <path d="M 298 330 C 310 335 318 360 316 395 C 314 420 310 440 306 450 C 301 445 295 445 291 445 C 289 430 288 410 290 380 C 292 352 286 338 280 332 Z" fill="url(#legGradAnt)" opacity="0.7" />
        </BullPart>

        {/* Cascos traseiros direitos (atrás) */}
        <BullPart id="casco_post" activePart={activePart} onSelect={handleSelect} title="Cascos">
          <path d="M 618 445 C 615 448 610 455 607 460 C 621 462 633 462 640 457 C 638 450 633 447 628 445 Z" fill={BASE_COLORS.hooves} opacity="0.8" />
        </BullPart>
        <BullPart id="casco_ant" activePart={activePart} onSelect={handleSelect} title="Cascos">
          <path d="M 291 445 C 288 448 283 455 280 460 C 294 462 306 462 313 457 C 311 450 306 447 301 445 Z" fill={BASE_COLORS.hooves} opacity="0.8" />
        </BullPart>

        {/* ===================== CORPO PRINCIPAL ===================== */}

        {/* TÓRAX */}
        <BullPart id="torax" activePart={activePart} onSelect={handleSelect} title="Tórax">
          <path
            d="M 270 185 C 285 155 320 140 370 135 C 420 130 460 135 490 145 C 510 152 525 165 530 185 C 540 215 540 250 535 275 C 530 295 520 310 505 320 C 490 330 460 335 430 335 C 390 340 350 335 320 325 C 295 315 278 298 270 278 C 260 255 258 215 270 185 Z"
            fill="url(#bodyGrad)"
            filter="url(#shadow)"
          />
          {/* Costelas (detalhe anatômico) */}
          {[340, 365, 390, 415, 440].map((x, i) => (
            <path
              key={i}
              d={`M ${x} 175 Q ${x + 5} 230 ${x - 5} 290`}
              stroke="#7A4020"
              strokeWidth="1"
              fill="none"
              opacity="0.18"
              style={{ pointerEvents: "none" }}
            />
          ))}
        </BullPart>

        {/* ABDÔMEN */}
        <BullPart id="abdomen" activePart={activePart} onSelect={handleSelect} title="Abdômen">
          <path
            d="M 490 145 C 540 150 590 160 630 170 C 660 178 680 192 688 215 C 696 238 695 262 690 282 C 685 300 672 315 655 322 C 635 330 600 335 565 335 C 535 338 505 335 505 320 C 520 310 530 295 535 275 C 540 250 540 215 530 185 C 525 165 510 152 490 145 Z"
            fill="url(#abdomenGrad)"
            filter="url(#shadow)"
          />
        </BullPart>

        {/* PELVE / GARUPA */}
        <BullPart id="pelve" activePart={activePart} onSelect={handleSelect} title="Pelve / Garupa">
          <path
            d="M 630 170 C 660 165 690 168 712 180 C 730 190 740 208 742 228 C 744 248 738 270 728 285 C 718 298 700 308 682 315 C 666 320 648 322 635 322 C 650 315 665 305 675 292 C 686 277 692 260 690 242 C 688 222 676 205 660 195 C 648 188 638 182 630 180 Z"
            fill="url(#pelveGrad)"
            filter="url(#shadow)"
          />
        </BullPart>

        {/* PESCOÇO */}
        <BullPart id="pescoco" activePart={activePart} onSelect={handleSelect} title="Pescoço">
          <path
            d="M 270 185 C 260 175 250 165 242 155 C 232 143 222 135 218 125 C 230 118 248 115 265 118 C 280 121 293 130 302 145 C 312 160 318 175 318 190 C 305 190 290 188 270 185 Z"
            fill="url(#neckGrad)"
            filter="url(#shadow)"
          />
          {/* Papada */}
          <path
            d="M 218 125 C 210 130 200 145 198 162 C 196 175 200 188 210 195 C 220 200 238 200 250 195 C 238 188 228 178 224 165 C 220 152 220 138 226 128 Z"
            fill="#B0622A"
            opacity="0.85"
          />
        </BullPart>

        {/* ÚBERE */}
        <BullPart id="ubere" activePart={activePart} onSelect={handleSelect} title="Úbere">
          <ellipse cx="570" cy="340" rx="55" ry="22" fill="url(#uberGrad)" />
          {/* Tetos */}
          {[545, 565, 585, 605].map((x, i) => (
            <ellipse key={i} cx={x} cy={355} rx={5} ry={9} fill="#D08888" />
          ))}
        </BullPart>

        {/* ===================== CABEÇA ===================== */}
        <BullPart id="cabeca" activePart={activePart} onSelect={handleSelect} title="Cabeça">
          <path
            d="M 120 145 C 130 120 150 108 175 102 C 195 97 215 100 230 110 C 245 120 252 138 252 155 C 252 172 244 188 232 198 C 220 208 204 213 188 214 C 172 215 155 210 142 200 C 128 190 118 175 118 160 C 117 155 118 150 120 145 Z"
            fill="url(#headGrad)"
            filter="url(#shadow)"
          />
          {/* Marcas de textura muscular */}
          <path d="M 150 135 Q 175 145 190 165" stroke="#8B4513" strokeWidth="1.5" fill="none" opacity="0.2" style={{ pointerEvents: "none" }} />
          <path d="M 170 125 Q 195 130 210 150" stroke="#8B4513" strokeWidth="1" fill="none" opacity="0.15" style={{ pointerEvents: "none" }} />
        </BullPart>

        {/* FOCINHO / BOCA */}
        <BullPart id="boca_focinho" activePart={activePart} onSelect={handleSelect} title="Boca / Focinho">
          <ellipse cx="130" cy="178" rx="28" ry="20" fill="#C07840" />
          {/* Narinas */}
          <ellipse cx="122" cy="173" rx="5" ry="3.5" fill="#7A3A1A" opacity="0.8" />
          <ellipse cx="138" cy="173" rx="5" ry="3.5" fill="#7A3A1A" opacity="0.8" />
          {/* Boca */}
          <path d="M 114 185 Q 130 190 146 185" stroke="#7A3A1A" strokeWidth="2" fill="none" opacity="0.7" />
        </BullPart>

        {/* ORELHA */}
        <BullPart id="orelhas" activePart={activePart} onSelect={handleSelect} title="Orelhas">
          <path
            d="M 182 102 C 178 90 174 75 172 62 C 170 50 175 40 185 38 C 195 36 205 44 208 56 C 211 68 208 82 204 95 C 200 100 192 102 182 102 Z"
            fill={BASE_COLORS.skin}
          />
          {/* Interior da orelha */}
          <path
            d="M 183 98 C 180 88 178 76 177 66 C 176 56 180 48 186 47 C 192 46 198 52 200 62 C 202 72 200 83 196 92 Z"
            fill="#D09060"
            opacity="0.7"
          />
        </BullPart>

        {/* OLHO */}
        <BullPart id="olhos" activePart={activePart} onSelect={handleSelect} title="Olhos">
          <ellipse cx="192" cy="140" rx="14" ry="11" fill="#F5E8D0" />
          <ellipse cx="192" cy="140" rx="9" ry="8" fill="#4A2E10" />
          <ellipse cx="192" cy="140" rx="5" ry="5" fill="#1A0E06" />
          <ellipse cx="195" cy="137" rx="2.5" ry="2" fill="white" opacity="0.8" />
          {/* Cílios */}
          <path d="M 180 133 Q 185 128 192 129 Q 199 128 204 133" stroke="#5C3010" strokeWidth="1.5" fill="none" />
        </BullPart>

        {/* CHIFRES */}
        <BullPart id="chifres" activePart={activePart} onSelect={handleSelect} title="Chifres">
          {/* Chifre principal */}
          <path
            d="M 195 107 C 210 90 228 72 240 55 C 248 44 250 32 244 26 C 252 24 260 28 262 38 C 264 50 258 65 246 78 C 234 91 218 103 205 110 Z"
            fill={BASE_COLORS.horn}
            stroke="#C8B880"
            strokeWidth="1"
          />
          {/* Gradiente/detalhes do chifre */}
          <path d="M 202 104 C 216 88 232 70 242 55" stroke="#B8A868" strokeWidth="2" fill="none" opacity="0.5" />
        </BullPart>

        {/* ===================== MEMBROS ANTERIORES (frente) ===================== */}
        <BullPart id="membro_ant_e" activePart={activePart} onSelect={handleSelect} title="Membro Anterior">
          {/* Espádua */}
          <path
            d="M 270 185 C 278 215 282 250 278 285 C 276 305 272 325 268 345 C 260 343 252 340 248 338 C 252 318 256 300 258 278 C 262 252 260 220 256 188 Z"
            fill="url(#legGradAnt)"
            filter="url(#shadow)"
          />
          {/* Canela */}
          <path
            d="M 268 345 C 264 365 260 390 258 415 C 256 430 255 440 256 448 C 264 450 275 450 282 448 C 282 435 280 418 278 400 C 276 378 272 358 270 345 Z"
            fill={BASE_COLORS.skin_d}
            filter="url(#shadow)"
          />
        </BullPart>

        {/* ===================== MEMBROS POSTERIORES (frente) ===================== */}
        <BullPart id="membro_post_e" activePart={activePart} onSelect={handleSelect} title="Membro Posterior">
          {/* Coxa */}
          <path
            d="M 688 215 C 700 220 712 232 718 250 C 724 268 722 290 714 308 C 706 324 692 334 678 338 C 672 315 670 295 672 272 C 674 250 680 230 685 215 Z"
            fill="url(#legGradPost)"
            filter="url(#shadow)"
          />
          {/* Perna */}
          <path
            d="M 714 308 C 718 328 720 358 718 385 C 716 410 712 435 708 450 C 700 452 690 452 684 450 C 686 432 688 408 690 385 C 692 360 694 330 694 310 Z"
            fill={BASE_COLORS.dark}
            filter="url(#shadow)"
          />
        </BullPart>

        {/* CASCOS FRENTE */}
        <BullPart id="casco_ant" activePart={activePart} onSelect={handleSelect} title="Cascos">
          <path d="M 255 448 C 252 452 248 458 246 464 C 260 466 277 466 284 461 C 283 455 278 450 273 448 Z" fill={BASE_COLORS.hooves} />
          {/* Linha de divisão do casco */}
          <path d="M 265 448 L 265 464" stroke="#2A1A10" strokeWidth="1" opacity="0.5" />
        </BullPart>

        <BullPart id="casco_post" activePart={activePart} onSelect={handleSelect} title="Cascos">
          <path d="M 683 450 C 680 454 676 460 674 466 C 688 468 705 468 712 463 C 710 457 706 452 700 450 Z" fill={BASE_COLORS.hooves} />
          <path d="M 693 450 L 693 466" stroke="#2A1A10" strokeWidth="1" opacity="0.5" />
        </BullPart>

        {/* ===================== CAUDA ===================== */}
        <BullPart id="cauda" activePart={activePart} onSelect={handleSelect} title="Cauda">
          <path
            d="M 742 228 C 758 222 772 215 782 205 C 792 195 798 180 796 165 C 802 170 806 182 804 196 C 800 210 792 222 782 232 C 770 242 756 248 744 248 Z"
            fill={BASE_COLORS.skin_d}
          />
          {/* Pelo da cauda */}
          <path d="M 796 165 C 800 152 808 138 812 125 C 814 118 812 110 806 108" stroke="#7A4020" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.8" />
          <path d="M 806 108 C 808 100 812 92 816 88" stroke="#5C2E10" strokeWidth="10" fill="none" strokeLinecap="round" />
          {/* Pelo solto */}
          {[0, 6, 12, -6].map((dy, i) => (
            <path key={i} d={`M 815 ${88 + dy} Q ${822 + i * 3} ${78 + dy} ${825 + i * 2} ${68 + dy}`} stroke="#5C2E10" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
          ))}
        </BullPart>

        {/* ===================== DETALHES FINAIS ===================== */}

        {/* Linha do dorso (cernelha) */}
        <path
          d="M 218 118 C 240 105 268 110 295 128 C 320 145 340 155 370 148 C 410 140 460 138 510 145 C 560 152 610 165 650 175 C 680 182 710 185 742 232"
          stroke="#7A3A10"
          strokeWidth="2.5"
          fill="none"
          opacity="0.3"
          style={{ pointerEvents: "none" }}
        />

        {/* Marcações de pelagem */}
        <path d="M 390 168 Q 410 195 405 240" stroke="#9B5A28" strokeWidth="2" fill="none" opacity="0.12" style={{ pointerEvents: "none" }} />
        <path d="M 550 165 Q 570 195 565 245" stroke="#7A3A10" strokeWidth="2" fill="none" opacity="0.10" style={{ pointerEvents: "none" }} />

        {/* Indicador de partes selecionáveis */}
        <text x="450" y="478" textAnchor="middle" fill="#9B5A28" fontSize="11" opacity="0.6" fontFamily="Inter, sans-serif">
          Clique em uma região para explorar
        </text>
      </svg>

      {/* Legenda */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-1.5 bg-white/85 backdrop-blur-sm rounded-xl p-3 shadow-elevation-1">
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Regiões</span>
        {legendItems.map(({ id, label, color }) => (
          <button
            key={id}
            onClick={() => handleSelect(id)}
            className="flex items-center gap-2 text-xs hover:opacity-70 transition-opacity text-left group"
          >
            <span
              className="w-3 h-3 rounded-full shrink-0 ring-1 ring-black/10 group-hover:ring-2"
              style={{
                backgroundColor: color,
                boxShadow: activePart === id ? `0 0 0 2px #FF6B00` : undefined,
              }}
            />
            <span className={activePart === id ? "font-semibold text-[#8B4513]" : "text-foreground"}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}