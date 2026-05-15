import React from "react";
import BullPartGroup from "./BullPartGroup";
import SvgDefs from "./SvgDefs";

// Bone / skeleton layer
export default function BullBoneSVG({ activePart, onSelect, viewBox = "0 0 900 480" }) {
  return (
    <svg viewBox={viewBox} className="w-full h-full" style={{transition:"all 0.5s cubic-bezier(0.4,0,0.2,1)"}} xmlns="http://www.w3.org/2000/svg">
      <SvgDefs hoverColor="#90A8B0" activeColor="#2C6E8A" />
      <defs>
        <linearGradient id="bn-bone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8E4E8" />
          <stop offset="100%" stopColor="#9EB8C0" />
        </linearGradient>
        <linearGradient id="bn-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0C8D0" />
          <stop offset="100%" stopColor="#7A9CA8" />
        </linearGradient>
        <radialGradient id="bn-joint" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#C8DCE4" />
          <stop offset="100%" stopColor="#88ACBA" />
        </radialGradient>
      </defs>

      {/* Sombra no chão */}
      <ellipse cx="430" cy="462" rx="280" ry="14" fill="#7090A0" opacity="0.2" />

      {/* ===== CRÂNIO ===== */}
      <BullPartGroup id="osso_cranio" activePart={activePart} onSelect={onSelect} title="Crânio">
        {/* Calvária */}
        <path d="M 148 128 C 158 108 175 98 195 95 C 215 92 232 98 242 112 C 250 124 252 140 248 155 C 244 168 235 178 224 183 C 215 180 205 175 200 168 C 205 160 208 150 206 140 C 204 130 196 122 185 118 C 175 114 162 118 155 128 Z" fill="url(#bn-bone)" stroke="#88ACBA" strokeWidth="1.5" filter="url(#shadow)" />
        {/* Seios frontais */}
        <path d="M 178 96 C 188 92 202 92 210 98" stroke="#7A9CA8" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M 185 96 L 185 110" stroke="#7A9CA8" strokeWidth="0.8" fill="none" opacity="0.4" />
      </BullPartGroup>

      {/* ===== MANDÍBULA ===== */}
      <BullPartGroup id="osso_mandibula" activePart={activePart} onSelect={onSelect} title="Mandíbula">
        <path d="M 110 165 C 115 155 128 148 142 148 C 155 148 165 155 170 165 C 172 172 170 180 165 185 C 152 195 135 198 122 192 C 112 186 107 176 110 165 Z" fill="url(#bn-bone)" stroke="#88ACBA" strokeWidth="1.5" filter="url(#shadow)" />
        {/* Dentes – incisivos */}
        {[118,125,132,139,146].map((x,i) => (
          <rect key={i} x={x} y={190} width={4} height={6} rx={1} fill="#E8F0F4" stroke="#88ACBA" strokeWidth="0.5" />
        ))}
        {/* Côndilo mandibular */}
        <circle cx="170" cy="148" r="5" fill="url(#bn-joint)" stroke="#88ACBA" strokeWidth="1" />
      </BullPartGroup>

      {/* ===== VÉRTEBRAS CERVICAIS ===== */}
      <BullPartGroup id="osso_cervical" activePart={activePart} onSelect={onSelect} title="Vértebras Cervicais (C1–C7)">
        {[0,1,2,3,4,5,6].map((i) => {
          const x = 230 + i * 14;
          const y = 148 - i * 4;
          return (
            <g key={i}>
              <ellipse cx={x} cy={y} rx={10} ry={7} fill="url(#bn-bone)" stroke="#88ACBA" strokeWidth="1" />
              {/* Processo espinhoso */}
              <path d={`M ${x} ${y-7} L ${x} ${y-15}`} stroke="#7A9CA8" strokeWidth="2" strokeLinecap="round" />
            </g>
          );
        })}
      </BullPartGroup>

      {/* ===== VÉRTEBRAS TORÁCICAS ===== */}
      <BullPartGroup id="osso_toracica" activePart={activePart} onSelect={onSelect} title="Vértebras Torácicas (T1–T13)">
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => {
          const x = 328 + i * 22;
          const y = 148 - (i < 3 ? i*2 : 6);
          return (
            <g key={i}>
              <ellipse cx={x} cy={y} rx={11} ry={7} fill="url(#bn-bone)" stroke="#88ACBA" strokeWidth="1" />
              {/* Processo espinhoso – maior nas primeiras */}
              <path d={`M ${x} ${y-7} L ${x} ${y - (i < 4 ? 28 : 18)}`} stroke="#7A9CA8" strokeWidth="2.5" strokeLinecap="round" />
              {/* Cernelha (processos altos) */}
              {i < 5 && <ellipse cx={x} cy={y-(i<4?32:22)} rx={5} ry={3} fill="#B0C8D0" stroke="#88ACBA" strokeWidth="0.8" />}
            </g>
          );
        })}
      </BullPartGroup>

      {/* ===== COSTELAS ===== */}
      <BullPartGroup id="osso_costelas" activePart={activePart} onSelect={onSelect} title="Costelas (13 pares)">
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => {
          const xStart = 335 + i * 22;
          const yStart = 155;
          const xEnd = xStart - 30 - i * 2;
          const yEnd = 310 - i * 4;
          return (
            <path
              key={i}
              d={`M ${xStart} ${yStart} C ${xStart - 15} ${yStart + 60} ${xEnd + 20} ${yEnd - 30} ${xEnd} ${yEnd}`}
              stroke="#9ABAC8"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
        {/* Esterno */}
        <path d="M 265 205 C 268 235 270 265 268 295" stroke="#8AAAB8" strokeWidth="8" fill="none" strokeLinecap="round" />
      </BullPartGroup>

      {/* ===== VÉRTEBRAS LOMBARES ===== */}
      <BullPartGroup id="osso_lombar" activePart={activePart} onSelect={onSelect} title="Vértebras Lombares (L1–L6)">
        {[0,1,2,3,4,5].map((i) => {
          const x = 618 + i * 18;
          const y = 155;
          return (
            <g key={i}>
              <ellipse cx={x} cy={y} rx={12} ry={8} fill="url(#bn-bone)" stroke="#88ACBA" strokeWidth="1" />
              <path d={`M ${x} ${y-8} L ${x} ${y-18}`} stroke="#7A9CA8" strokeWidth="2.5" strokeLinecap="round" />
              {/* Processo transverso */}
              <path d={`M ${x-12} ${y} L ${x-22} ${y+5}`} stroke="#7A9CA8" strokeWidth="2" strokeLinecap="round" />
              <path d={`M ${x+12} ${y} L ${x+22} ${y+5}`} stroke="#7A9CA8" strokeWidth="2" strokeLinecap="round" />
            </g>
          );
        })}
      </BullPartGroup>

      {/* ===== SACRO / PELVE ===== */}
      <BullPartGroup id="osso_sacro" activePart={activePart} onSelect={onSelect} title="Sacro e Osso Ilíaco">
        {/* Sacro */}
        <path d="M 722 148 C 738 145 752 150 758 162 C 762 172 760 185 752 193 C 745 200 734 202 724 198 C 714 194 708 184 710 172 C 712 160 716 152 722 148 Z" fill="url(#bn-bone)" stroke="#88ACBA" strokeWidth="1.5" filter="url(#shadow)" />
        {/* Ilíaco */}
        <path d="M 635 165 C 650 155 675 152 698 158 C 718 163 732 175 738 190 C 742 202 740 215 732 224 C 722 232 708 235 695 230 C 680 225 666 212 658 196 C 650 182 642 170 635 165 Z" fill="url(#bn-dark)" stroke="#88ACBA" strokeWidth="1.5" filter="url(#shadow)" opacity="0.9" />
        {/* Articulação sacroilíaca */}
        <ellipse cx="725" cy="180" rx="8" ry="6" fill="url(#bn-joint)" stroke="#88ACBA" strokeWidth="1" />
      </BullPartGroup>

      {/* ===== ESCÁPULA ===== */}
      <BullPartGroup id="osso_escapula" activePart={activePart} onSelect={onSelect} title="Escápula (Omoplata)">
        <path d="M 275 145 C 295 135 325 133 348 140 C 362 145 370 155 368 168 C 366 180 354 188 340 190 C 325 192 308 188 296 180 C 282 170 272 158 275 145 Z" fill="url(#bn-bone)" stroke="#88ACBA" strokeWidth="1.5" filter="url(#shadow)" />
        {/* Espinha da escápula */}
        <path d="M 278 148 C 305 155 330 160 360 158" stroke="#7A9CA8" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Acrômio */}
        <circle cx="275" cy="155" r="7" fill="url(#bn-joint)" stroke="#88ACBA" strokeWidth="1" />
      </BullPartGroup>

      {/* ===== ÚMERO ===== */}
      <BullPartGroup id="osso_umero" activePart={activePart} onSelect={onSelect} title="Úmero">
        <path d="M 275 188 C 270 210 265 240 263 270 C 261 295 263 315 265 330" stroke="url(#bn-bone)" strokeWidth="14" fill="none" strokeLinecap="round" />
        <path d="M 275 188 C 270 210 265 240 263 270 C 261 295 263 315 265 330" stroke="#88ACBA" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Cabeça do úmero */}
        <circle cx="275" cy="190" r="12" fill="url(#bn-joint)" stroke="#88ACBA" strokeWidth="1.5" />
        {/* Côndilo */}
        <circle cx="265" cy="330" r="9" fill="url(#bn-joint)" stroke="#88ACBA" strokeWidth="1.5" />
      </BullPartGroup>

      {/* ===== RÁDIO / ULNA ===== */}
      <BullPartGroup id="osso_radio" activePart={activePart} onSelect={onSelect} title="Rádio e Ulna">
        {/* Rádio */}
        <path d="M 263 332 C 261 355 259 385 258 415 C 257 430 257 442 258 450" stroke="url(#bn-bone)" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M 263 332 C 261 355 259 385 258 415 C 257 430 257 442 258 450" stroke="#88ACBA" strokeWidth="1.5" fill="none" />
        {/* Ulna (olécrano) */}
        <path d="M 270 332 C 272 355 273 385 272 415 C 271 430 270 442 270 450" stroke="url(#bn-dark)" strokeWidth="7" fill="none" strokeLinecap="round" />
        {/* Articulação do carpo */}
        <ellipse cx="264" cy="450" rx="14" ry="6" fill="url(#bn-joint)" stroke="#88ACBA" strokeWidth="1" />
      </BullPartGroup>

      {/* ===== FÊMUR ===== */}
      <BullPartGroup id="osso_femur" activePart={activePart} onSelect={onSelect} title="Fêmur">
        <path d="M 695 225 C 700 248 708 278 714 305" stroke="url(#bn-bone)" strokeWidth="16" fill="none" strokeLinecap="round" />
        <path d="M 695 225 C 700 248 708 278 714 305" stroke="#88ACBA" strokeWidth="2" fill="none" />
        {/* Cabeça do fêmur */}
        <circle cx="695" cy="222" r="14" fill="url(#bn-joint)" stroke="#88ACBA" strokeWidth="1.5" />
        {/* Côndilo distal */}
        <ellipse cx="714" cy="308" rx="12" ry="8" fill="url(#bn-joint)" stroke="#88ACBA" strokeWidth="1.5" />
      </BullPartGroup>

      {/* ===== TÍBIA / FÍBULA ===== */}
      <BullPartGroup id="osso_tibia" activePart={activePart} onSelect={onSelect} title="Tíbia e Fíbula">
        <path d="M 714 310 C 716 335 718 370 718 400 C 718 425 715 445 712 452" stroke="url(#bn-bone)" strokeWidth="13" fill="none" strokeLinecap="round" />
        <path d="M 714 310 C 716 335 718 370 718 400 C 718 425 715 445 712 452" stroke="#88ACBA" strokeWidth="1.5" fill="none" />
        <path d="M 706 312 C 706 340 705 375 703 408 C 702 428 700 445 698 452" stroke="url(#bn-dark)" strokeWidth="7" fill="none" strokeLinecap="round" />
        {/* Articulação do tarso */}
        <ellipse cx="706" cy="454" rx="14" ry="6" fill="url(#bn-joint)" stroke="#88ACBA" strokeWidth="1" />
      </BullPartGroup>

      {/* ===== FALANGES / CASCOS ===== */}
      <BullPartGroup id="osso_cascos" activePart={activePart} onSelect={onSelect} title="Falanges e Cascos">
        {/* Anteriores */}
        {[252, 264].map((x, i) => (
          <g key={i}>
            <rect x={x} y={452} width={8} height={10} rx={2} fill="url(#bn-bone)" stroke="#88ACBA" strokeWidth="1" />
            <rect x={x} y={462} width={8} height={8} rx={2} fill="#3D2B1F" />
          </g>
        ))}
        {/* Posteriores */}
        {[695, 707].map((x, i) => (
          <g key={i}>
            <rect x={x} y={452} width={8} height={10} rx={2} fill="url(#bn-bone)" stroke="#88ACBA" strokeWidth="1" />
            <rect x={x} y={462} width={8} height={8} rx={2} fill="#3D2B1F" />
          </g>
        ))}
      </BullPartGroup>

      {/* Linha do dorso / coluna */}
      <path d="M 218 155 C 255 145 295 142 328 148 C 500 148 618 148 722 162" stroke="#7A9CA8" strokeWidth="3" fill="none" opacity="0.3" style={{pointerEvents:"none"}} />
    </svg>
  );
}