import React from "react";
import BullPartGroup from "./BullPartGroup";
import SvgDefs from "./SvgDefs";

export default function BullSkinSVG({ activePart, onSelect, viewBox = "0 0 900 480" }) {
  return (
    <svg viewBox={viewBox} className="w-full h-full" style={{transition:"all 0.5s cubic-bezier(0.4,0,0.2,1)"}} xmlns="http://www.w3.org/2000/svg">
      <SvgDefs />
      <defs>
        <radialGradient id="sk-body" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D9965A" />
          <stop offset="100%" stopColor="#9B5A28" />
        </radialGradient>
        <radialGradient id="sk-head" cx="60%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#D08A45" />
          <stop offset="100%" stopColor="#9B5A28" />
        </radialGradient>
        <radialGradient id="sk-abd" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#C4793A" />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        <radialGradient id="sk-pelv" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A0602A" />
          <stop offset="100%" stopColor="#7A3B10" />
        </radialGradient>
        <linearGradient id="sk-legA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4793A" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
        <linearGradient id="sk-legP" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9B5A28" />
          <stop offset="100%" stopColor="#6B3010" />
        </linearGradient>
        <linearGradient id="sk-neck" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C87838" />
          <stop offset="100%" stopColor="#9B5A28" />
        </linearGradient>
        <radialGradient id="sk-uber" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#F0B0A0" />
          <stop offset="100%" stopColor="#D08080" />
        </radialGradient>
      </defs>

      {/* Sombra no chão */}
      <ellipse cx="430" cy="462" rx="280" ry="14" fill="#C4A070" opacity="0.35" />

      {/* Membros de trás (fundo) */}
      <BullPartGroup id="pele_mpost_e" activePart={activePart} onSelect={onSelect} title="Membros Posteriores">
        <path d="M 618 330 C 635 335 645 360 643 390 C 641 415 637 440 633 450 C 628 445 622 445 618 445 C 615 435 614 410 616 385 C 618 360 614 340 608 332 Z" fill="url(#sk-legP)" opacity="0.7" />
        <path d="M 298 330 C 310 335 318 360 316 395 C 314 420 310 440 306 450 C 301 445 295 445 291 445 C 289 430 288 410 290 380 C 292 352 286 338 280 332 Z" fill="url(#sk-legA)" opacity="0.7" />
      </BullPartGroup>

      {/* Cascos de trás */}
      <BullPartGroup id="pele_cascos" activePart={activePart} onSelect={onSelect} title="Cascos">
        <path d="M 618 445 C 615 448 610 455 607 460 C 621 462 633 462 640 457 C 638 450 633 447 628 445 Z" fill="#3D2B1F" opacity="0.8" />
        <path d="M 291 445 C 288 448 283 455 280 460 C 294 462 306 462 313 457 C 311 450 306 447 301 445 Z" fill="#3D2B1F" opacity="0.8" />
      </BullPartGroup>

      {/* Tórax */}
      <BullPartGroup id="pele_torax" activePart={activePart} onSelect={onSelect} title="Tórax">
        <path d="M 270 185 C 285 155 320 140 370 135 C 420 130 460 135 490 145 C 510 152 525 165 530 185 C 540 215 540 250 535 275 C 530 295 520 310 505 320 C 490 330 460 335 430 335 C 390 340 350 335 320 325 C 295 315 278 298 270 278 C 260 255 258 215 270 185 Z" fill="url(#sk-body)" filter="url(#shadow)" />
        {[340,365,390,415,440].map((x,i) => (
          <path key={i} d={`M ${x} 175 Q ${x+5} 230 ${x-5} 290`} stroke="#7A4020" strokeWidth="1" fill="none" opacity="0.18" style={{pointerEvents:"none"}} />
        ))}
      </BullPartGroup>

      {/* Abdômen */}
      <BullPartGroup id="pele_abdomen" activePart={activePart} onSelect={onSelect} title="Abdômen">
        <path d="M 490 145 C 540 150 590 160 630 170 C 660 178 680 192 688 215 C 696 238 695 262 690 282 C 685 300 672 315 655 322 C 635 330 600 335 565 335 C 535 338 505 335 505 320 C 520 310 530 295 535 275 C 540 250 540 215 530 185 C 525 165 510 152 490 145 Z" fill="url(#sk-abd)" filter="url(#shadow)" />
      </BullPartGroup>

      {/* Pelve */}
      <BullPartGroup id="pele_pelve" activePart={activePart} onSelect={onSelect} title="Pelve / Garupa">
        <path d="M 630 170 C 660 165 690 168 712 180 C 730 190 740 208 742 228 C 744 248 738 270 728 285 C 718 298 700 308 682 315 C 666 320 648 322 635 322 C 650 315 665 305 675 292 C 686 277 692 260 690 242 C 688 222 676 205 660 195 C 648 188 638 182 630 180 Z" fill="url(#sk-pelv)" filter="url(#shadow)" />
      </BullPartGroup>

      {/* Pescoço */}
      <BullPartGroup id="pele_pescoco" activePart={activePart} onSelect={onSelect} title="Pescoço">
        <path d="M 270 185 C 260 175 250 165 242 155 C 232 143 222 135 218 125 C 230 118 248 115 265 118 C 280 121 293 130 302 145 C 312 160 318 175 318 190 C 305 190 290 188 270 185 Z" fill="url(#sk-neck)" filter="url(#shadow)" />
        <path d="M 218 125 C 210 130 200 145 198 162 C 196 175 200 188 210 195 C 220 200 238 200 250 195 C 238 188 228 178 224 165 C 220 152 220 138 226 128 Z" fill="#B0622A" opacity="0.85" />
      </BullPartGroup>

      {/* Úbere */}
      <BullPartGroup id="pele_ubere" activePart={activePart} onSelect={onSelect} title="Úbere">
        <ellipse cx="570" cy="340" rx="55" ry="22" fill="url(#sk-uber)" />
        {[545,565,585,605].map((x,i) => <ellipse key={i} cx={x} cy={355} rx={5} ry={9} fill="#D08888" />)}
      </BullPartGroup>

      {/* Cabeça */}
      <BullPartGroup id="pele_cabeca" activePart={activePart} onSelect={onSelect} title="Cabeça">
        <path d="M 120 145 C 130 120 150 108 175 102 C 195 97 215 100 230 110 C 245 120 252 138 252 155 C 252 172 244 188 232 198 C 220 208 204 213 188 214 C 172 215 155 210 142 200 C 128 190 118 175 118 160 C 117 155 118 150 120 145 Z" fill="url(#sk-head)" filter="url(#shadow)" />
      </BullPartGroup>

      {/* Boca / Focinho */}
      <BullPartGroup id="pele_boca" activePart={activePart} onSelect={onSelect} title="Boca / Focinho">
        <ellipse cx="130" cy="178" rx="28" ry="20" fill="#C07840" />
        <ellipse cx="122" cy="173" rx="5" ry="3.5" fill="#7A3A1A" opacity="0.8" />
        <ellipse cx="138" cy="173" rx="5" ry="3.5" fill="#7A3A1A" opacity="0.8" />
        <path d="M 114 185 Q 130 190 146 185" stroke="#7A3A1A" strokeWidth="2" fill="none" opacity="0.7" />
      </BullPartGroup>

      {/* Orelhas */}
      <BullPartGroup id="pele_orelhas" activePart={activePart} onSelect={onSelect} title="Orelhas">
        <path d="M 182 102 C 178 90 174 75 172 62 C 170 50 175 40 185 38 C 195 36 205 44 208 56 C 211 68 208 82 204 95 C 200 100 192 102 182 102 Z" fill="#C8874A" />
        <path d="M 183 98 C 180 88 178 76 177 66 C 176 56 180 48 186 47 C 192 46 198 52 200 62 C 202 72 200 83 196 92 Z" fill="#D09060" opacity="0.7" />
      </BullPartGroup>

      {/* Olhos */}
      <BullPartGroup id="pele_olhos" activePart={activePart} onSelect={onSelect} title="Olhos">
        <ellipse cx="192" cy="140" rx="14" ry="11" fill="#F5E8D0" />
        <ellipse cx="192" cy="140" rx="9" ry="8" fill="#4A2E10" />
        <ellipse cx="192" cy="140" rx="5" ry="5" fill="#1A0E06" />
        <ellipse cx="195" cy="137" rx="2.5" ry="2" fill="white" opacity="0.8" />
        <path d="M 180 133 Q 185 128 192 129 Q 199 128 204 133" stroke="#5C3010" strokeWidth="1.5" fill="none" />
      </BullPartGroup>

      {/* Chifres */}
      <BullPartGroup id="pele_chifres" activePart={activePart} onSelect={onSelect} title="Chifres">
        <path d="M 195 107 C 210 90 228 72 240 55 C 248 44 250 32 244 26 C 252 24 260 28 262 38 C 264 50 258 65 246 78 C 234 91 218 103 205 110 Z" fill="#E8D5A0" stroke="#C8B880" strokeWidth="1" />
        <path d="M 202 104 C 216 88 232 70 242 55" stroke="#B8A868" strokeWidth="2" fill="none" opacity="0.5" />
      </BullPartGroup>

      {/* Membros anteriores frente */}
      <BullPartGroup id="pele_mant_e" activePart={activePart} onSelect={onSelect} title="Membros Anteriores">
        <path d="M 270 185 C 278 215 282 250 278 285 C 276 305 272 325 268 345 C 260 343 252 340 248 338 C 252 318 256 300 258 278 C 262 252 260 220 256 188 Z" fill="url(#sk-legA)" filter="url(#shadow)" />
        <path d="M 268 345 C 264 365 260 390 258 415 C 256 430 255 440 256 448 C 264 450 275 450 282 448 C 282 435 280 418 278 400 C 276 378 272 358 270 345 Z" fill="#B5763C" filter="url(#shadow)" />
      </BullPartGroup>

      {/* Membros posteriores frente */}
      <BullPartGroup id="pele_mpost_e" activePart={activePart} onSelect={onSelect} title="Membros Posteriores">
        <path d="M 688 215 C 700 220 712 232 718 250 C 724 268 722 290 714 308 C 706 324 692 334 678 338 C 672 315 670 295 672 272 C 674 250 680 230 685 215 Z" fill="url(#sk-legP)" filter="url(#shadow)" />
        <path d="M 714 308 C 718 328 720 358 718 385 C 716 410 712 435 708 450 C 700 452 690 452 684 450 C 686 432 688 408 690 385 C 692 360 694 330 694 310 Z" fill="#7A4E2D" filter="url(#shadow)" />
      </BullPartGroup>

      {/* Cascos frente */}
      <BullPartGroup id="pele_cascos" activePart={activePart} onSelect={onSelect} title="Cascos">
        <path d="M 255 448 C 252 452 248 458 246 464 C 260 466 277 466 284 461 C 283 455 278 450 273 448 Z" fill="#3D2B1F" />
        <path d="M 265 448 L 265 464" stroke="#2A1A10" strokeWidth="1" opacity="0.5" />
        <path d="M 683 450 C 680 454 676 460 674 466 C 688 468 705 468 712 463 C 710 457 706 452 700 450 Z" fill="#3D2B1F" />
        <path d="M 693 450 L 693 466" stroke="#2A1A10" strokeWidth="1" opacity="0.5" />
      </BullPartGroup>

      {/* Cauda */}
      <BullPartGroup id="pele_cauda" activePart={activePart} onSelect={onSelect} title="Cauda">
        <path d="M 742 228 C 758 222 772 215 782 205 C 792 195 798 180 796 165 C 802 170 806 182 804 196 C 800 210 792 222 782 232 C 770 242 756 248 744 248 Z" fill="#B5763C" />
        <path d="M 796 165 C 800 152 808 138 812 125 C 814 118 812 110 806 108" stroke="#7A4020" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.8" />
        <path d="M 806 108 C 808 100 812 92 816 88" stroke="#5C2E10" strokeWidth="10" fill="none" strokeLinecap="round" />
        {[0,6,12,-6].map((dy,i) => (
          <path key={i} d={`M 815 ${88+dy} Q ${822+i*3} ${78+dy} ${825+i*2} ${68+dy}`} stroke="#5C2E10" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
        ))}
      </BullPartGroup>

      {/* Linha do dorso */}
      <path d="M 218 118 C 240 105 268 110 295 128 C 320 145 340 155 370 148 C 410 140 460 138 510 145 C 560 152 610 165 650 175 C 680 182 710 185 742 232" stroke="#7A3A10" strokeWidth="2.5" fill="none" opacity="0.2" style={{pointerEvents:"none"}} />
    </svg>
  );
}