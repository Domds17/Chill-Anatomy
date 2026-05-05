# Chill Anatomy - Resumo Executivo para Designer

## 🎯 Propósito do Projeto

Aplicação educacional interativa para explorar anatomia de animais domésticos através de visualização 3D. Foco: estudantes de medicina veterinária.

---

## 📊 Jornada do Usuário (3 telas)

```
1. Welcome Screen
   └─> "Começar Exploração"
       ↓
2. Animal Selection
   └─> Seleciona animal (ex: Boi)
       ↓
3. Anatomy Viewer
   └─> Explora partes 3D + info
```

---

## 🎨 Identidade Visual

### Cores Principais
- **Primária:** Marrom escuro `#8B4513`
- **Secundária:** Marrom médio `#A0522D`
- **Destaque:** Creme `#D2B48C`
- **Fundo:** Branco `#FFFFFF`
- **Texto:** Cinza escuro `#333333`

### Tipografia
- **Títulos:** Bold/SemiBold 28px - 40px
- **Corpo:** Regular 16px
- **Pequeno:** Regular 14px

### Estilo
- Moderno e educacional
- Limpo e minimalista
- Emojis para humanizar
- Tons quentes (terra/madeira)

---

## 🧬 6 Animais (Cards com Grid)

| Animal | Nome Científico | Emoji | Cor |
|--------|-----------------|-------|-----|
| Boi | Bos taurus | 🐂 | #8B4513 |
| Cavalo | Equus caballus | 🐎 | #654321 |
| Ovelha | Ovis aries | 🐑 | #F5F5DC |
| Cabra | Capra aegagrus hircus | 🐐 | #D2B48C |
| Porco | Sus scrofa domesticus | 🐖 | #FFB6C1 |
| Galinha | Gallus gallus domesticus | 🐔 | #FFD700 |

---

## 🧩 Layout da Tela Principal (Anatomy Viewer)

```
┌─────────────────────────────────────────────────┐
│  ← Voltar  │  🐂 Visualizador Anatômico  │ ←    │ (Header)
├─────────────────────────────────────────────────┤
│  Breadcrumb: 🐂 Cabeça > Olhos                  │
├────────────────────────┬────────────────────────┤
│                        │                        │
│                        │  ┌─────────────────┐   │
│                        │  │ [■] Nome Parte  │ ✕ │
│   Visor 3D             │  ├─────────────────┤   │
│   (Canvas)             │  │ Descrição       │   │
│   70% largura          │  │ detalhada...    │   │
│                        │  │                 │   │
│   (Click = seleciona   │  │ • Subparte 1    │   │
│    partes)             │  │ • Subparte 2    │   │
│                        │  │                 │   │
│                        │  │ Partes Rel.:    │   │
│                        │  │ • Parte X       │   │
│                        │  └─────────────────┘   │
│                        │  30% largura           │
└────────────────────────┴────────────────────────┘
```

---

## 🏗️ Componentes Principais

### 1. **Botão Padrão**
- Primária: Marrom + branco
- Hover: Marrom mais claro + elevação
- Padding: 12px 24px
- Border-radius: 6px

### 2. **Card de Animal**
- 280px × 320px
- Emoji grande (64px)
- Nome + Nome científico + Descrição
- Hover: Elevação + shadow
- Left border 4px (cor do animal)

### 3. **Painel de Info**
- Header com cor da parte + nome + botão fechar
- Descrição do corpo
- Subcategorias (se houver)
- Partes relacionadas (se houver)
- Scroll interno

### 4. **Breadcrumb**
- 🐂 Cabeça > Olhos
- Clicável para navegar rápido
- Último item em destaque

---

## 🎬 Hierarquia do Boi (Exemplo Principal)

```
🐂 BÓI
├── Cabeça (#8B4513)
│   ├── Olhos
│   ├── Orelhas
│   ├── Nariz
│   ├── Boca
│   └── Chifres
├── Tronco (#A0522D)
│   ├── Coração
│   ├── Pulmões
│   ├── Estômago
│   ├── Fígado
│   └── Rins
├── Pernas Dianteiras (#654321)
│   ├── Ombro
│   ├── Cotovelo
│   ├── Joelho
│   └── Casco
├── Pernas Traseiras (#5C2E0F)
│   ├── Quadril
│   ├── Joelho
│   ├── Jarrete
│   └── Casco
└── Bunda (#704214)
    ├── Cauda
    ├── Reto
    └── Úbere
```

---

## 📱 Responsividade

| Viewport | Layout | Info Painel |
|----------|--------|-------------|
| **Mobile** (< 768px) | Stack vertical | Modal/Drawer |
| **Tablet** (768-1024px) | Side-by-side ajustado | Sidebar |
| **Desktop** (> 1024px) | 70/30 split | Sidebar 30% |

---

## 🎯 Componentes para Criar (Figma Library)

### Estrutura
- [ ] Container base
- [ ] Header com logo
- [ ] Breadcrumb

### Interação
- [ ] Button (3 tipos: Primary, Secondary, Danger)
- [ ] Card Animal (3 estados: default, hover, active)
- [ ] Info Panel Section
- [ ] Related Part Link

### Feedback
- [ ] Toast (Success, Error, Warning, Info)
- [ ] Tooltip
- [ ] Spinner

### Ícones
- 🐂 🐎 🐑 🐐 🐖 🐔 (animais)
- ← → ✕ (ações)

---

## 🎨 Grid & Espaçamento

- **Base Grid:** 8px
- **Padding Container:** 16px (mobile) / 32px (desktop)
- **Gap Items:** 8px (compact) / 16px (normal) / 24px (seções)
- **Border-radius:** 6-8px (elementos) / 8px (cards)

---

## ⏱️ Transições

- Hover rápido: **0.2s** ease
- Mudança componente: **0.3s** ease
- Transição tela: **0.3-0.4s** ease

---

## 📋 Estrutura Figma Recomendada

```
Chill Anatomy
├── 📋 Cover & Overview
├── 🎨 Design System
│   ├── Colors
│   ├── Typography
│   └── Effects
├── 🧩 Components
│   ├── Buttons
│   ├── Cards
│   ├── Navigation
│   └── Panels
├── 📱 Mobile
├── 💻 Tablet
├── 🖥️ Desktop
└── 🔄 User Flows
```

---

## 🔑 Pontos-Chave para Designer

1. ✅ **Foco em Usabilidade:** Navegação intuitiva e clara
2. ✅ **Educacional:** Design que facilita compreensão
3. ✅ **Responsivo:** Funciona bem mobile/tablet/desktop
4. ✅ **Consistência:** Sistema design robusto
5. ✅ **3D Integration:** Considerar espaço para visor 3D

---

## 📊 Paleta Mínima

```
Primária:    #8B4513 (Marrom)
Secundária:  #A0522D (Marrom claro)
Neutro:      #FFFFFF / #F9F9F9
Texto:       #333333 / #666666
Alerta:      #D32F2F (Vermelho)
Sucesso:     #388E3C (Verde)
```

---

## 🚀 Próximas Ações para Designer

1. Criar library de componentes em Figma
2. Desenhar as 3 telas (Mobile, Tablet, Desktop)
3. Prototipar fluxos principais
4. Validar com stakeholders
5. Exportar assets para desenvolvedor

---

**Stack Técnico:** React + TypeScript + Three.js  
**Arquivo de Detalhes:** `DESCRICAO_PROJETO_DESIGNER.md`  
**Arquivo Técnico Figma:** `ESPECIFICACOES_FIGMA.md`
