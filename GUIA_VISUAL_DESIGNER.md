# Chill Anatomy - Guia Visual Rápido para Designer

## 📊 Diagrama de Fluxo da Aplicação

```
                          START
                            |
                            v
                    ┌──────────────────┐
                    │  Welcome Screen  │
                    │   🐂 Chill       │
                    │   Anatomy        │
                    └────────┬─────────┘
                             │ [Começar Exploração]
                             v
                    ┌──────────────────┐
                    │ Animal Selection │
                    │  (Grid 6 cards)  │
                    └────────┬─────────┘
                             │ [Seleciona animal]
                             v
                    ┌──────────────────┐
                    │ Anatomy Viewer   │
                    │ (3D + Info)      │
                    └────────┬─────────┘
                     ┌───────┴──────────┐
                     │                  │
        [Clique parte]                  │
                     v                  │
            ┌─────────────────┐         │ [Voltar aos Animais]
            │ Subparte Info   │─────────┤
            │ Panel Update    │         │
            └─────────────────┘         │
                                        v
                              Volta ao [Animal Selection]
```

---

## 🎨 Sketches de Telas (Wireframe Simples)

### Welcome Screen
```
┌─────────────────────────────────────┐
│                                     │
│            🐂                       │
│       CHILL ANATOMY                 │
│   Anatomia Veterinária              │
│                                     │
│   Bem-vindo...                      │
│                                     │
│   ✓ Visualização 3D                 │
│   ✓ Informações                     │
│   ✓ Navegação Intuitiva             │
│   ✓ Foco Veterinário                │
│                                     │
│   [Começar Exploração →]            │
│                                     │
└─────────────────────────────────────┘
```

### Animal Selection Grid
```
┌─────────────────────────────────────────────────┐
│              SELECIONE UM ANIMAL                │
├──────────────┬──────────────┬──────────────┐    │
│              │              │              │    │
│     🐂       │     🐎       │     🐑       │    │
│   BOI        │  CAVALO      │   OVELHA     │    │
│   Bos taurus │ Equus cab.   │  Ovis aries  │    │
│              │              │              │    │
├──────────────┼──────────────┼──────────────┤    │
│              │              │              │    │
│     🐐       │     🐖       │     🐔       │    │
│   CABRA      │   PORCO      │  GALINHA     │    │
│   Capra...   │   Sus scrofa  │ Gallus...    │    │
│              │              │              │    │
└──────────────┴──────────────┴──────────────┘    │
```

### Anatomy Viewer Layout
```
┌────────────────────────────────────────────────────┐
│ ← Back │ 🐂 Visualizador Anatômico │ ← Main Parts │
├────────────────────────────────────────────────────┤
│  Breadcrumb: 🐂 Cabeça > Olhos                    │
├──────────────────────────┬────────────────────────┤
│                          │ ┌──────────────────┐   │
│                          │ │ ■ Olhos        ✕ │   │
│     3D                   │ ├──────────────────┤   │
│    VIEWER                │ │ Órgãos da visão  │   │
│ (70% width)              │ │ localizados...   │   │
│                          │ │                  │   │
│   [Interativo]           │ │ Subcategorias:   │   │
│                          │ │ • Córnea         │   │
│                          │ │ • Retina         │   │
│                          │ │                  │   │
│                          │ │ Partes Rel.:     │   │
│                          │ │ • Cabeça         │   │
│                          │ └──────────────────┘   │
│                          │   (30% width)         │
└──────────────────────────┴────────────────────────┘
```

---

## 🎯 Componentes Principais (Visual)

### Button - Variantes

**Primary Button (Padrão)**
```
┌──────────────────────────────┐
│  Começar Exploração    →     │  ← #8B4513 (marrom)
└──────────────────────────────┘     Texto: Branco
    Padding: 12px 24px
    Border-radius: 6px

    [HOVER]
┌──────────────────────────────┐
│  Começar Exploração    →     │  ← #A0522D (marrom claro)
└──────────────────────────────┘     + Shadow elevation
```

**Secondary Button**
```
┌──────────────────────┐
│   Voltar Animais     │  ← Border outline #8B4513
└──────────────────────┘     Texto: #8B4513
    Background: Transparente

    [HOVER]
┌──────────────────────┐
│   Voltar Animais     │  ← Background rgba(139,69,19,0.1)
└──────────────────────┘
```

### Card Animal

**Default State**
```
┌─────────────────────────┐
│                         │
│          🐂             │  64px emoji
│                         │
│        BOI              │  24px bold
│    Bos taurus           │  14px italic gray
│                         │
│  Animal de grande porte │  14px regular
│  fundamental na pecuária│
│                         │
└─────────────────────────┘
    280x320px
    shadow: 0 2px 8px rgba(0,0,0,0.1)
    left-border: 4px #8B4513 (cor tema)
```

**Hover State**
```
┌─────────────────────────┐
│  ▲                      │  +4px elevation
│  │ shadow stronger      │  shadow: 0 4px 16px rgba(0,0,0,0.15)
│          🐂             │
│                         │
│        BOI              │
│    Bos taurus           │
│                         │
│  Animal de grande porte │
│  fundamental na pecuária│
│                         │
└─────────────────────────┘
```

### Info Panel Section

**Header**
```
┌────────────────────────────────┐
│ ■  Cabeça  (Nome Parte)    ✕   │  ■ = cor da parte
└────────────────────────────────┘    12px padding
   Altura: 40px
   Background: branco
   Border-top: 4px (cor parte)
```

**Body Content**
```
┌────────────────────────────────┐
│ A cabeça do boi contém os...   │
│ órgãos dos sentidos...         │
│                                │
│ Subcategorias da Cabeça:       │
│ • Olhos                 [click]│
│ • Orelhas               [click]│
│ • Nariz                 [click]│
│ • Boca                  [click]│
│ • Chifres               [click]│
│                                │
│ Partes Relacionadas:           │
│ • Pescoço               [click]│
│ • Tronco                [click]│
└────────────────────────────────┘
```

---

## 🎨 Hierarquia de Cores (Visor 3D Exemplo)

### Boi - Esquema de Cores
```
PARTE PRINCIPAL          SUBPARTES POSSÍVEIS
├─ Cabeça    #8B4513    ├─ Olhos       #FFFFFF (claro)
│                       ├─ Orelhas     #D2B48C
│                       ├─ Nariz       #696969 (gris)
│                       ├─ Boca        #8B0000 (vermelho escuro)
│                       └─ Chifres     #FFD700 (ouro)
│
├─ Tronco    #A0522D    ├─ Coração     #FF1493 (rosa)
│                       ├─ Pulmões     #FFB6C1 (rosa claro)
│                       ├─ Estômago    #DEB887 (tan)
│                       ├─ Fígado      #8B4513 (marrom escuro)
│                       └─ Rins        #DC143C (crimson)
│
├─ Pernas Diant. #654321 ├─ Ombro      #8B4513
│                         ├─ Cotovelo   #A0522D
│                         ├─ Joelho     #8B4513
│                         └─ Casco      #696969
│
└─ Pernas Tras. #5C2E0F  └─ Quadril    #704214
                         etc...

PADRÃO: Partes principais = cores mais escuras / quentes
        Subpartes = cores mais claras ou contrastantes
```

---

## 📱 Responsividade - Layouts

### DESKTOP (1920px+)
```
┌─────────────────────────────────────────────┐
│ Header (100%)                               │
├─────────────────────────────────────────────┤
│ Breadcrumb (100%)                           │
├────────────────────────┬────────────────────┤
│                        │                    │
│   Visor 3D             │   Info Panel       │
│   70% width            │   30% width        │
│   (Canvas)             │   (Sidebar)        │
│                        │                    │
│                        │                    │
└────────────────────────┴────────────────────┘
```

### TABLET (768-1024px)
```
┌─────────────────────────────────────┐
│ Header (100%)                       │
├─────────────────────────────────────┤
│ Breadcrumb (100%)                   │
├─────────────────────────────────────┤
│                                     │
│   Visor 3D                          │
│   (80% - mais espaço)               │
│                                     │
├─────────────────────────────────────┤
│ Info Panel (100% - drawer style)    │
│ [Collapsed/Expandable]              │
└─────────────────────────────────────┘
```

### MOBILE (< 768px)
```
┌──────────────────────────┐
│ Header (100%)            │
├──────────────────────────┤
│ Breadcrumb (scroll h)    │
├──────────────────────────┤
│                          │
│   Visor 3D               │
│   (100% - full width)    │
│   (Interactive)          │
│                          │
├──────────────────────────┤
│ Info Panel (Modal)       │
│ [Abre com botão ou       │
│  ao clicar parte]        │
└──────────────────────────┘

Ou:

┌──────────────────────────┐
│ Header                   │
├──────────────────────────┤
│ Breadcrumb               │
├──────────────────────────┤
│ Visor 3D  │ Info Panel   │
│ (scroll)  │ (scroll)     │
│           │              │
└──────────────────────────┘
(Split view com scroll)
```

---

## 🧩 Estrutura do Card Animal Detalhado

```
Card Externo: 280px × 320px
├─ Padding: 24px
│
├─ Emoji Container: 64px × 64px
│  └─ Content: Centered emoji 🐂
│  └─ Margin-bottom: 16px
│
├─ Nome (H3): 24px bold #8B4513
│  └─ Margin-bottom: 4px
│
├─ Nome Científico: 14px italic #666666
│  └─ Margin-bottom: 12px
│  └─ Font-style: italic
│
├─ Descrição (Body): 14px regular #333333
│  └─ Line-height: 1.6
│  └─ Max-lines: 2 (overflow ellipsis)
│
├─ Left Border: 4px solid (cor tema)
├─ Border-radius: 8px
├─ Background: #FFFFFF
├─ Box-shadow: 0 2px 8px rgba(0,0,0,0.1)
│
└─ Hover:
   ├─ Transform: translateY(-4px)
   ├─ Box-shadow: 0 4px 16px rgba(0,0,0,0.15)
   ├─ Background: rgba(139,69,19,0.02)
   └─ Transition: 0.3s ease
```

---

## ⏱️ Timing & Animation Specs

### Hover em Button
```
Duração: 0.2s
Easing: ease-out
Propriedades:
  - background-color: #8B4513 → #A0522D
  - box-shadow: none → 0 4px 12px rgba(0,0,0,0.15)
  - cursor: pointer
```

### Abertura de Info Panel
```
Duração: 0.3s
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Propriedades:
  - opacity: 0 → 1
  - transform: translateX(20px) → translateX(0)
```

### Navegação de Tela
```
Duração: 0.3-0.4s
Easing: ease
Propriedades:
  - Fade out (current): opacity 1 → 0 (0.15s)
  - Fade in (next): opacity 0 → 1 (0.3s delay + 0.2s)
```

---

## 📋 Checklist Rápido para Começar

### Fase 1 - Setup Figma
- [ ] Criar projeto "Chill Anatomy"
- [ ] Setup Design System (cores, tipografia)
- [ ] Criar grids de referência (8px)

### Fase 2 - Componentes
- [ ] Buttons (Primary, Secondary, Danger)
- [ ] Cards (Animal)
- [ ] Panels & Sections
- [ ] Breadcrumb & Navigation

### Fase 3 - Telas
- [ ] Welcome Screen (Desktop)
- [ ] Animal Selection (Desktop + responsivas)
- [ ] Anatomy Viewer (Desktop + responsivas)

### Fase 4 - Refinement
- [ ] Estados hover/active de tudo
- [ ] Variantes responsivas
- [ ] Prototipagem de fluxos

### Fase 5 - Exportação
- [ ] Exportar componentes como SVG/PNG
- [ ] Documentar para desenvolvedor
- [ ] Assets em pastas organizadas

---

## 🎯 Dicas Importantes

✅ **Consistência:** Use o grid 8px para tudo  
✅ **Espaçamento:** Padding e margin sempre múltiplos de 8px  
✅ **Cores:** Use exatamente os hex codes especificados  
✅ **Tipografia:** Manter hierarquia clara  
✅ **Componentes:** Auto-layout em tudo  
✅ **Responsividade:** Testar em 3 breakpoints  
✅ **Estados:** Criar todos os estados (hover, active, disabled)  
✅ **Prototipagem:** Linkuar telas para fluxo completo  

---

**Próximo Passo:** Abrir Figma e começar com o Design System!
