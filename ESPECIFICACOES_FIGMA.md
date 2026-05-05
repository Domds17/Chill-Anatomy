# Chill Anatomy - Especificações Técnicas para Figma

## 🎨 Grid e Espaçamento

### Sistema de Grid
- **Base:** 8px
- **Coluna:** 12 colunas
- **Gutter:** 16px
- **Margem externa:** 16px (mobile) / 32px (desktop)

### Escala de Espaçamento
```
4px  - Extra pequeno (micro interações)
8px  - Pequeno (spacing interno)
12px - Médio-pequeno
16px - Médio (padding padrão)
24px - Grande (spacing entre seções)
32px - Extra grande (spacing entre componentes principais)
48px - Gigante (spacing entre blocos)
```

---

## 🧩 Componentes Base (Para Biblioteca Figma)

### 1. Button (Componente)
**Variantes:**
- Tipo: Primary | Secondary | Danger
- Tamanho: Small (8x32px) | Medium (12x48px) | Large (12x64px)
- Estado: Default | Hover | Active | Disabled

**Propriedades:**
- Border-radius: 6px
- Font-weight: 600
- Transição: 0.3s ease

**Primary Button (Padrão)**
- Background: #8B4513
- Text: Branco
- Hover: #A0522D

**Secondary Button**
- Background: Transparente
- Border: 2px solid #8B4513
- Text: #8B4513
- Hover: Background rgba(139, 69, 19, 0.1)

**Danger Button**
- Background: #D32F2F
- Text: Branco
- Hover: #B71C1C

---

### 2. Card Animal (Componente)

**Dimensões:**
- Base: 280px × 320px
- Responsivo: 100% em mobile

**Estrutura:**
```
┌──────────────────┐
│     [Emoji]      │ (Tamanho: 64px)
│                  │
│    Nome [H2]     │ (Tamanho: 24px)
│  Sci Name [Body] │ (Tamanho: 14px, itálico)
│                  │
│   Descrição      │ (Tamanho: 14px, 2 linhas máx)
│   [Texto]        │
│                  │
└──────────────────┘
```

**Propriedades:**
- Border-radius: 8px
- Padding: 24px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.1)
- Cor de fundo: #FFFFFF
- Cor de tema: Left border 4px

**Estados:**
- Default: Sem shadow, border esquerdo sutil
- Hover: Box-shadow 0 4px 16px rgba(0,0,0,0.15), elevação visual
- Active: Border esquerdo 4px solid (cor do animal)

---

### 3. Badge Part (Componente)

**Variantes:**
- Tipo: Square | Round
- Tamanho: Small (8px) | Medium (12px) | Large (16px)

**Propriedades:**
- Border-radius: Square = 0px | Round = 50%
- Uso: Indicador de cor da parte anatômica

---

### 4. Breadcrumb (Componente)

**Estrutura:**
```
🐂 Cabeça > Olhos > Direito
```

**Elementos:**
- Ícone: Emoji do animal (16px)
- Separador: ">" (cinza 50%)
- Texto: 14px regular
- Último item: 14px bold (ativo)

**Propriedades:**
- Altura: 32px
- Padding: 0 12px
- Espaçamento entre itens: 8px
- Elementos clicáveis: Hover com underline

---

### 5. Info Panel Section (Componente)

**Estrutura da Seção:**
```
┌────────────────────────┐
│ [Color] Título      ✕  │ ← Header
├────────────────────────┤
│ Conteúdo da seção      │ ← Body
│ Com múltiplas linhas    │
│ e textos flexíveis      │
└────────────────────────┘
```

**Propriedades:**
- Border-radius: 4px
- Padding: 16px
- Background: #F9F9F9 (suave)
- Border-top: 4px (cor da parte)
- Margin-bottom: 16px

---

### 6. Related Part Link (Componente)

**Variantes:**
- Tipo: Inline | Block
- Estado: Default | Hover | Active

**Propriedades:**
- Tipo: Link button
- Cor: #8B4513
- Hover: Underline + cor mais clara
- Transição: 0.2s ease

---

## 🎯 Telas (Frame Size Recomendadas)

### Welcome Screen
- Desktop: 1440px × 900px
- Tablet: 768px × 1024px
- Mobile: 375px × 812px

**Layout:**
- Centralizado no viewport
- Max-width: 600px
- Vertical center alignment

---

### Animal Selection Screen
- Desktop: 1440px × 900px
- Tablet: 768px × 1024px
- Mobile: 375px × Auto (scroll)

**Grid:**
- Desktop: 3 colunas (4 colunas grid)
- Tablet: 2 colunas
- Mobile: 1 coluna
- Gap: 24px

---

### Anatomy Viewer
- Desktop: 1920px × 1080px
- Tablet: 768px × 1024px
- Mobile: 375px × 812px

**Layout:**
```
Desktop:
┌────────────────────────────────────────┐
│         Header (100%)                  │
├────────────────┬───────────────────────┤
│   Breadcrumb   │  (100%)               │
├────────────────┼───────────────────────┤
│                │                       │
│  3D Viewer     │   Info Panel          │
│  (70% width)   │   (30% width)         │
│                │                       │
└────────────────┴───────────────────────┘

Tablet/Mobile:
┌──────────────────┐
│    Header        │
├──────────────────┤
│  Breadcrumb      │
├──────────────────┤
│   3D Viewer      │
│    (100%)        │
├──────────────────┤
│  Info Panel      │
│   (Modal/Drawer) │
└──────────────────┘
```

---

## 📐 Tipografia (Para Estilos Figma)

### Style Guide

**Heading 1 (H1)**
- Font: Inter / Arial
- Size: 40px
- Weight: 700 Bold
- Line-height: 1.2 (48px)
- Letter-spacing: -0.5px
- Color: #8B4513

**Heading 2 (H2)**
- Font: Inter / Arial
- Size: 28px
- Weight: 600 SemiBold
- Line-height: 1.3 (36px)
- Letter-spacing: -0.25px
- Color: #333333

**Heading 3 (H3)**
- Font: Inter / Arial
- Size: 20px
- Weight: 600 SemiBold
- Line-height: 1.4 (28px)
- Color: #333333

**Body (Regular)**
- Font: Inter / Arial
- Size: 16px
- Weight: 400 Regular
- Line-height: 1.6 (25.6px)
- Letter-spacing: 0px
- Color: #333333

**Body Small**
- Font: Inter / Arial
- Size: 14px
- Weight: 400 Regular
- Line-height: 1.6 (22.4px)
- Color: #666666

**Label**
- Font: Inter / Arial
- Size: 12px
- Weight: 500 Medium
- Line-height: 1.5 (18px)
- Text-transform: Uppercase
- Letter-spacing: 0.5px
- Color: #666666

**Caption**
- Font: Inter / Arial
- Size: 12px
- Weight: 400 Regular
- Line-height: 1.4 (16.8px)
- Color: #999999
- Style: Italic

---

## 🎨 Paleta de Cores (Para Figma Color Library)

### Cores Primárias
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Brown 900 | #5C2E0F | 92, 46, 15 | Texto escuro |
| Brown 800 | #8B4513 | 139, 69, 19 | Primária principal |
| Brown 700 | #A0522D | 160, 82, 45 | Hover estados |
| Brown 600 | #CD853F | 205, 133, 63 | Secundária |
| Brown 300 | #D2B48C | 210, 180, 140 | Destaque claro |
| Brown 200 | #DEB887 | 222, 184, 135 | Background suave |
| Brown 100 | #F5DEB3 | 245, 222, 179 | Background muito claro |

### Cores Neutras
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| White | #FFFFFF | 255, 255, 255 | Fundo principal |
| Gray 900 | #111111 | 17, 17, 17 | Texto principal |
| Gray 800 | #333333 | 51, 51, 51 | Texto corpo |
| Gray 600 | #666666 | 102, 102, 102 | Texto secundário |
| Gray 400 | #CCCCCC | 204, 204, 204 | Border |
| Gray 200 | #EEEEEE | 238, 238, 238 | Background alternado |
| Gray 100 | #F9F9F9 | 249, 249, 249 | Background suave |

### Cores Semânticas
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Success | #388E3C | 56, 142, 60 | Confirmação |
| Warning | #F57C00 | 245, 124, 0 | Aviso |
| Error | #D32F2F | 211, 47, 47 | Erro |
| Info | #1976D2 | 25, 118, 210 | Informação |

### Cores de Animais
| Animal | Cor Primária | Cor Secundária |
|--------|-------------|-----------------|
| Boi | #8B4513 | #654321 |
| Cavalo | #654321 | #5C2E0F |
| Ovelha | #F5F5DC | #E8E8D0 |
| Cabra | #D2B48C | #CD853F |
| Porco | #FFB6C1 | #FFC0CB |
| Galinha | #FFD700 | #FFA500 |

---

## 🔲 Sombras e Efeitos

### Shadow System

**Shadow 1 (Elevação mínima)**
```
X: 0px, Y: 2px
Blur: 4px, Spread: 0px
Color: rgba(0, 0, 0, 0.06)
```

**Shadow 2 (Elevação média)**
```
X: 0px, Y: 4px
Blur: 8px, Spread: 0px
Color: rgba(0, 0, 0, 0.10)
```

**Shadow 3 (Elevação alta)**
```
X: 0px, Y: 8px
Blur: 16px, Spread: 0px
Color: rgba(0, 0, 0, 0.15)
```

**Shadow 4 (Elevação muito alta)**
```
X: 0px, Y: 12px
Blur: 24px, Spread: 0px
Color: rgba(0, 0, 0, 0.20)
```

### Efeitos de Hover
- Transição: 0.2s - 0.3s ease
- Elevação: +4px (aumenta shadow)
- Mudança de cor: Ligeiramente mais escura (10-15% mais escuro)

---

## 📱 Espaçamento Responsivo

### Padding de Container
| Breakpoint | Padding H | Padding V |
|------------|-----------|-----------|
| Mobile | 16px | 12px |
| Tablet | 24px | 16px |
| Desktop | 32px | 24px |

### Gap entre elementos
| Tipo | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Inline | 8px | 12px | 16px |
| Block | 16px | 20px | 24px |
| Section | 24px | 32px | 48px |

---

## 🎬 Animações e Transições

### Timing Functions
- Rápidas (0.2s): Hover, mudanças de estado simples
- Normais (0.3s): Mudanças de componentes, transições de cor
- Lentas (0.4s): Transições de tela, abrir/fechar painel

### Easing
- Entrada: `ease-in-out`
- Saída: `ease-out`
- Padrão: `cubic-bezier(0.4, 0, 0.2, 1)`

### Transições Principais
1. **Hover em Botão:** 0.2s ease - mudança de cor + elevação
2. **Clique em Parte:** 0.3s ease - mudança de cor gradual
3. **Abertura de Painel:** 0.4s ease-out - slide + fade
4. **Navegação de Tela:** 0.3s ease - fade out/in

---

## ✅ Checklist de Componentes para Criar em Figma

### Componentes Estruturais
- [ ] **Container** (Variantes: Mobile, Tablet, Desktop)
- [ ] **Header** (com logo, navegação)
- [ ] **Footer** (se necessário)

### Componentes Interativos
- [ ] **Button** (Primary, Secondary, Danger)
  - [ ] Default
  - [ ] Hover
  - [ ] Active
  - [ ] Disabled
- [ ] **Card Animal**
  - [ ] Default
  - [ ] Hover
  - [ ] Active
- [ ] **Info Panel Section**
- [ ] **Breadcrumb Item**
- [ ] **Related Part Link**

### Componentes de Feedback
- [ ] **Toast Message** (Success, Error, Warning, Info)
- [ ] **Tooltip**
- [ ] **Spinner / Loading**

### Ícones/Emojis
- [ ] Animais (🐂, 🐎, 🐑, 🐐, 🐖, 🐔)
- [ ] Ações (←, →, ✕, 🔍)
- [ ] Status (✓, ✕, ⓘ)

---

## 📋 Estrutura de Páginas Figma Recomendada

```
Project: Chill Anatomy
├── 📋 Cover Page
├── 📐 Design System
│   ├── Colors
│   ├── Typography
│   ├── Shadows & Effects
│   └── Icons
├── 🧩 Components
│   ├── Buttons
│   ├── Cards
│   ├── Sections
│   ├── Navigation
│   └── Forms
├── 📱 Screens - Mobile
│   ├── Welcome
│   ├── Animal Selection
│   └── Anatomy Viewer
├── 💻 Screens - Tablet
│   ├── Welcome
│   ├── Animal Selection
│   └── Anatomy Viewer
├── 🖥️ Screens - Desktop
│   ├── Welcome
│   ├── Animal Selection
│   └── Anatomy Viewer
└── 🔄 Flows
    ├── Happy Path
    ├── Navigation Flows
    └── Error States
```

---

## 🎯 Guia de Exportação de Ativos

### Tipos de Arquivo
- **Imagens:** PNG (transparência) com @2x para retina
- **Ícones:** SVG (escaláveis)
- **Emojis:** SVG ou PNG (24px × 24px mínimo)

### Pasta de Exportação Recomendada
```
assets/
├── icons/
│   ├── arrow-left.svg
│   ├── arrow-right.svg
│   ├── close.svg
│   └── search.svg
├── images/
│   ├── logo.png
│   └── placeholder-3d.png
└── emojis/
    ├── cattle.png
    ├── horse.png
    └── ...
```

---

## 📝 Notas Finais

1. **Uso de Auto-layout:** Ativar auto-layout em todos os componentes para manter consistência responsiva.

2. **Variantes:** Usar system de variantes Figma para manter biblioteca organizada.

3. **Naming Convention:** Nomenclatura clara e hierárquica (ex: `Button/Primary/Large/Hover`).

4. **Prototyping:** Criar protótipos interativos para validação de fluxos.

5. **Developer Handoff:** Utilizar Figma Dev Mode ou export de CSS para facilitar implementação.

6. **Documentação:** Adicionar notas e comentários nos artboards para contexto do desenvolvedor.

---

**Versão:** 1.0  
**Atualizado:** Maio de 2026
