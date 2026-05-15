import React from "react";
import BullPartGroup from "./BullPartGroup";
import SvgDefs from "./SvgDefs";

// Muscle layer – stylized anatomical illustration
export default function BullMuscleSVG({ activePart, onSelect, viewBox = "0 0 900 480" }) {
  return (
    <svg viewBox={viewBox} className="w-full h-full" style={{transition:"all 0.5s cubic-bezier(0.4,0,0.2,1)"}} xmlns="http://www.w3.org/2000/svg">
      <SvgDefs hoverColor="#FF8070" activeColor="#E02010" />
      <defs>
        <radialGradient id="ms-body" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E05040" />
          <stop offset="100%" stopColor="#8B1A0A" />
        </radialGradient>
        <radialGradient id="ms-head" cx="60%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#D04030" />
          <stop offset="100%" stopColor="#8B1A0A" />
        </radialGradient>
        <radialGradient id="ms-abd" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#C83020" />
          <stop offset="100%" stopColor="#7A1208" />
        </radialGradient>
        <radialGradient id="ms-glut" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#B02818" />
          <stop offset="100%" stopColor="#6B0E06" />
        </radialGradient>
        <linearGradient id="ms-legA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C84030" />
          <stop offset="100%" stopColor="#8B1A0A" />
        </linearGradient>
        <linearGradient id="ms-legP" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A02818" />
          <stop offset="100%" stopColor="#6B0E06" />
        </linearGradient>
      </defs>

      {/* Sombra no chão */}
      <ellipse cx="430" cy="462" rx="280" ry="14" fill="#C07070" opacity="0.3" />

      {/* Silhueta base (não clicável, serve de contorno) */}
      <path d="M 270 185 C 285 155 320 140 370 135 C 420 130 460 135 490 145 C 540 150 590 160 630 170 C 660 165 690 168 712 180 C 742 195 742 228 728 285 C 700 315 650 325 565 335 C 505 338 430 335 350 330 C 295 320 260 295 260 255 Z" fill="#5A0A06" opacity="0.08" style={{pointerEvents:"none"}} />

      {/* === PESCOÇO / TRAPÉZIO === */}
      <BullPartGroup id="musc_pescoco" activePart={activePart} onSelect={onSelect} title="Músculos do Pescoço">
        {/* Esternocleidomastoideo */}
        <path d="M 218 125 C 230 118 248 115 265 118 C 280 121 293 130 302 145 C 312 160 318 175 318 190 C 305 190 290 188 270 185 C 260 175 250 165 242 155 C 232 143 222 135 218 125 Z" fill="url(#ms-legA)" filter="url(#shadow)" />
        {/* Papada / musculo laríngeo */}
        <path d="M 218 125 C 210 130 200 145 198 162 C 196 175 200 188 210 195 C 220 200 238 200 250 195 C 238 188 228 178 224 165 C 220 152 220 138 226 128 Z" fill="#A02818" opacity="0.9" />
        {/* Fibras musculares */}
        {[0,12,24].map((dy,i) => (
          <path key={i} d={`M ${228+dy} ${128+dy*0.5} Q ${240+dy} ${150+dy} ${252+dy*0.5} ${170+dy}`} stroke="#FF7060" strokeWidth="1.2" fill="none" opacity="0.35" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* === MASSETER (face) === */}
      <BullPartGroup id="musc_masseter" activePart={activePart} onSelect={onSelect} title="Masseter (Músculo da Mandíbula)">
        <path d="M 120 148 C 130 128 150 115 172 110 C 190 106 210 108 225 118 C 238 127 244 142 244 158 C 244 172 238 186 228 196 C 218 205 205 210 190 211 C 175 212 160 208 148 199 C 136 190 127 177 124 163 Z" fill="url(#ms-head)" filter="url(#shadow)" />
        {/* Fibras do masseter */}
        {[140,155,170,185].map((y,i) => (
          <path key={i} d={`M ${130+i*5} ${y} Q ${165} ${y+5} ${195+i*3} ${y}`} stroke="#FF7060" strokeWidth="1.5" fill="none" opacity="0.3" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* === ESPÁDUA / TRAPÉZIO === */}
      <BullPartGroup id="musc_espadua" activePart={activePart} onSelect={onSelect} title="Espádua / Trapézio">
        <path d="M 270 140 C 310 128 360 128 400 132 C 420 134 435 140 445 152 C 430 150 400 148 370 150 C 340 152 310 160 285 172 C 272 178 265 185 265 185 C 262 175 264 158 270 140 Z" fill="#C03828" filter="url(#shadow)" />
        {/* Fibras do trapézio */}
        {[290,320,350,380,410].map((x,i) => (
          <path key={i} d={`M ${x} 135 Q ${x-5} 158 ${x-10} 175`} stroke="#FF7060" strokeWidth="1.2" fill="none" opacity="0.3" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* === PEITORAL === */}
      <BullPartGroup id="musc_peitoral" activePart={activePart} onSelect={onSelect} title="Músculo Peitoral">
        <path d="M 260 210 C 265 230 270 255 268 280 C 280 270 300 258 325 250 C 310 235 290 222 270 215 Z" fill="#C03828" filter="url(#shadow)" />
        <path d="M 255 205 C 250 225 248 250 250 275 C 258 270 266 262 268 255 C 268 240 264 222 260 210 Z" fill="#A82018" opacity="0.9" />
        {/* Fibras peitorais */}
        {[0,10,20,30].map((dy,i) => (
          <path key={i} d={`M ${255} ${210+dy} Q ${275} ${220+dy} ${290} ${230+dy}`} stroke="#FF9080" strokeWidth="1" fill="none" opacity="0.35" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* === DORSAL / LOMBO === */}
      <BullPartGroup id="musc_dorsal" activePart={activePart} onSelect={onSelect} title="Dorsal Longo / Músculo do Lombo">
        <path d="M 340 135 C 400 128 460 130 510 140 C 550 148 580 158 610 168 C 620 165 640 163 655 168 C 650 150 620 140 580 132 C 540 124 480 120 430 120 C 390 120 360 126 340 135 Z" fill="#C03828" filter="url(#shadow)" />
        {/* Fibras do dorsal */}
        {[360,400,440,480,520,560].map((x,i) => (
          <path key={i} d={`M ${x} 125 L ${x+5} 165`} stroke="#FF9080" strokeWidth="1.5" fill="none" opacity="0.3" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* === ABDÔMEN (oblíquo) === */}
      <BullPartGroup id="musc_abdomen" activePart={activePart} onSelect={onSelect} title="Músculos Abdominais">
        <path d="M 490 145 C 540 150 590 160 630 170 C 660 178 680 192 688 215 C 696 238 695 262 690 282 C 685 300 672 315 655 322 C 635 330 600 335 565 335 C 535 338 505 335 505 320 C 520 310 530 295 535 275 C 540 250 540 215 530 185 C 525 165 510 152 490 145 Z" fill="url(#ms-abd)" filter="url(#shadow)" />
        {/* Tendinous inscriptions */}
        {[530,560,590,620].map((x,i) => (
          <path key={i} d={`M ${x} ${155+i*10} Q ${x+5} ${220} ${x-10} ${290-i*5}`} stroke="#FF7060" strokeWidth="1.2" fill="none" opacity="0.25" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* === GLÚTEO / GARUPA === */}
      <BullPartGroup id="musc_gluteo" activePart={activePart} onSelect={onSelect} title="Glúteo / Músculo da Garupa">
        <path d="M 630 170 C 660 165 690 168 712 180 C 730 190 740 208 742 228 C 744 248 738 270 728 285 C 718 298 700 308 682 315 C 666 320 648 322 635 322 C 650 315 665 305 675 292 C 686 277 692 260 690 242 C 688 222 676 205 660 195 C 648 188 638 182 630 180 Z" fill="url(#ms-glut)" filter="url(#shadow)" />
        {/* Fibras do glúteo */}
        {[640,660,680,700].map((x,i) => (
          <path key={i} d={`M ${x} ${172+i*2} Q ${x+8} ${240} ${x-5} ${305-i*3}`} stroke="#FF7060" strokeWidth="1.2" fill="none" opacity="0.25" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* === COXA (bíceps femoral) === */}
      <BullPartGroup id="musc_coxa" activePart={activePart} onSelect={onSelect} title="Bíceps Femoral / Coxa">
        <path d="M 688 215 C 700 220 712 232 718 250 C 724 268 722 290 714 308 C 706 324 692 334 678 338 C 672 315 670 295 672 272 C 674 250 680 230 685 215 Z" fill="url(#ms-legP)" filter="url(#shadow)" />
        {[0,12,24].map((dy,i) => (
          <path key={i} d={`M ${690} ${218+dy*3} Q ${705} ${260+dy} ${712} ${305-dy}`} stroke="#FF9080" strokeWidth="1" fill="none" opacity="0.3" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* === ANTEBRAÇO (membro ant.) === */}
      <BullPartGroup id="musc_ant_inf" activePart={activePart} onSelect={onSelect} title="Músculos do Antebraço">
        <path d="M 270 185 C 278 215 282 250 278 285 C 276 305 272 325 268 345 C 260 343 252 340 248 338 C 252 318 256 300 258 278 C 262 252 260 220 256 188 Z" fill="url(#ms-legA)" filter="url(#shadow)" />
        <path d="M 268 345 C 264 365 260 390 258 415 C 256 430 255 440 256 448 C 264 450 275 450 282 448 C 282 435 280 418 278 400 C 276 378 272 358 270 345 Z" fill="#A82018" filter="url(#shadow)" />
        {[0,15,30].map((dy,i) => (
          <path key={i} d={`M ${260} ${195+dy*4} Q ${268} ${250+dy} ${265} ${340+dy}`} stroke="#FF9080" strokeWidth="1" fill="none" opacity="0.25" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* === PERNA POST. (gastrocnêmio) === */}
      <BullPartGroup id="musc_post_inf" activePart={activePart} onSelect={onSelect} title="Gastrocnêmio / Perna Post.">
        <path d="M 714 308 C 718 328 720 358 718 385 C 716 410 712 435 708 450 C 700 452 690 452 684 450 C 686 432 688 408 690 385 C 692 360 694 330 694 310 Z" fill="url(#ms-legP)" filter="url(#shadow)" />
        {[0,12,24].map((dy,i) => (
          <path key={i} d={`M ${696+dy} ${312} Q ${702+dy} ${380} ${700+dy} ${448}`} stroke="#FF9080" strokeWidth="1" fill="none" opacity="0.25" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* Cascos (não clicáveis nesta camada) */}
      <path d="M 255 448 C 252 452 248 458 246 464 C 260 466 277 466 284 461 C 283 455 278 450 273 448 Z" fill="#3D2B1F" style={{pointerEvents:"none"}} />
      <path d="M 683 450 C 680 454 676 460 674 466 C 688 468 705 468 712 463 C 710 457 706 452 700 450 Z" fill="#3D2B1F" style={{pointerEvents:"none"}} />
      <path d="M 618 445 C 615 448 610 455 607 460 C 621 462 633 462 640 457 C 638 450 633 447 628 445 Z" fill="#3D2B1F" opacity="0.7" style={{pointerEvents:"none"}} />
      <path d="M 291 445 C 288 448 283 455 280 460 C 294 462 306 462 313 457 C 311 450 306 447 301 445 Z" fill="#3D2B1F" opacity="0.7" style={{pointerEvents:"none"}} />

      {/* Linha do dorso */}
      <path d="M 218 118 C 240 105 268 110 295 128 C 320 145 340 155 370 148 C 410 140 460 138 510 145 C 560 152 610 165 650 175 C 680 182 710 185 742 232" stroke="#8B0A04" strokeWidth="2" fill="none" opacity="0.2" style={{pointerEvents:"none"}} />
    </svg>
  );
}