# 📚 Chill Anatomy - Documentação para Designer (ÍNDICE)

Bem-vindo! Este projeto foi documentado especificamente para facilitar o trabalho do designer no Figma. Aqui está tudo que você precisa saber.

---

## 🚀 Por Onde Começar?

### Opção 1: Quer um Overview Rápido? (5 minutos)
👉 Leia: **[RESUMO_DESIGNER.md](RESUMO_DESIGNER.md)**
- Visão geral do projeto
- 3 telas principais
- Componentes essenciais
- Paleta de cores
- Grid e espaçamento

### Opção 2: Quer Entender Tudo em Detalhes? (20-30 minutos)
👉 Leia: **[DESCRICAO_PROJETO_DESIGNER.md](DESCRICAO_PROJETO_DESIGNER.md)**
- Propósito completo do projeto
- Público-alvo
- Jornada do usuário
- Estrutura visual de cada tela
- Comportamentos e interações
- Fluxos de usuário
- Design system completo

### Opção 3: Quer Ver com Diagramas e Sketches? (10 minutos)
👉 Leia: **[GUIA_VISUAL_DESIGNER.md](GUIA_VISUAL_DESIGNER.md)**
- Fluxograma da aplicação
- Wireframes/sketches das telas
- Componentes visuais
- Esquema de cores hierárquicas
- Layouts responsivos (ASCII art)
- Checklist de começar
- Dicas importantes

### Opção 4: Quer as Specs Técnicas para Figma? (15 minutos)
👉 Leia: **[ESPECIFICACOES_FIGMA.md](ESPECIFICACOES_FIGMA.md)**
- Sistema de grid (8px)
- Componentes base com variantes
- Tipografia (estilos para Figma)
- Paleta de cores (para color library)
- Sombras e efeitos
- Espaçamento responsivo
- Animações e transições
- Estrutura de projeto Figma recomendada

---

## 📖 Resumo da Documentação

| Documento | Duração | Foco | Quando ler |
|-----------|---------|------|-----------|
| 📄 RESUMO_DESIGNER.md | 5 min | Overview rápido | Primeiro contato |
| 📐 GUIA_VISUAL_DESIGNER.md | 10 min | Diagramas e sketches | Entender layout visualmente |
| 📋 DESCRICAO_PROJETO_DESIGNER.md | 30 min | Detalhamento completo | Antes de começar design |
| 🎨 ESPECIFICACOES_FIGMA.md | 20 min | Specs técnicas | Enquanto trabalha no Figma |

---

## 🎯 O Que é Chill Anatomy?

**Aplicação educacional interativa** para explorar anatomia de animais domésticos através de visualização 3D.

**Público:** Estudantes de Medicina Veterinária

**Jornada:** Welcome → Seleção Animal → Visualizador 3D Interativo

---

## 🧩 3 Telas Principais

1. **Welcome Screen**
   - Apresentação do projeto
   - Botão "Começar Exploração"

2. **Animal Selection**
   - Grid com 6 animais (Boi, Cavalo, Ovelha, Cabra, Porco, Galinha)
   - Cards com nome, nome científico, descrição

3. **Anatomy Viewer**
   - Visor 3D interativo (70% da tela)
   - Painel de informações (30% da tela)
   - Breadcrumb para navegação
   - Suporta exploração de subpartes

---

## 🎨 Identidade Visual

### Cores Principais
```
Primária:     #8B4513 (Marrom Escuro)
Secundária:   #A0522D (Marrom Médio)
Destaque:     #D2B48C (Creme)
Fundo:        #FFFFFF (Branco)
Texto:        #333333 (Cinza Escuro)
```

### Tipografia
- **Títulos:** 28-40px, Bold/SemiBold
- **Corpo:** 16px, Regular
- **Pequeno:** 14px, Regular

### Estilo
- Moderno e educacional
- Tons quentes (terra/madeira)
- Limpo e minimalista
- Emojis humanizam interface

---

## 🧬 6 Animais para Design

| Animal | Científico | Emoji | Cor |
|--------|-----------|-------|-----|
| Boi | Bos taurus | 🐂 | #8B4513 |
| Cavalo | Equus caballus | 🐎 | #654321 |
| Ovelha | Ovis aries | 🐑 | #F5F5DC |
| Cabra | Capra aegagrus hircus | 🐐 | #D2B48C |
| Porco | Sus scrofa domesticus | 🐖 | #FFB6C1 |
| Galinha | Gallus gallus domesticus | 🐔 | #FFD700 |

---

## 📱 Breakpoints Responsivos

- **Mobile:** < 768px (Stack vertical, Modal info)
- **Tablet:** 768px - 1024px (Side-by-side)
- **Desktop:** > 1024px (70/30 split)

---

## 🧩 Componentes Principais

### Buttons
- Primary: Marrom + branco
- Secondary: Outline
- Estados: Default, Hover, Active, Disabled

### Cards
- Tamanho: 280px × 320px
- Elementos: Emoji 64px, Nome, Científico, Descrição
- Hover: Elevação + shadow

### Painel Info
- Header com cor temática
- Descrição educacional
- Subcategorias (clicáveis)
- Partes relacionadas

### Breadcrumb
- Navegação hierárquica
- Ex: 🐂 Cabeça > Olhos > Direito
- Clicável para navegar rápido

---

## 🎬 Fluxo de Usuário

```
Welcome Screen
      ↓ (Começar)
Animal Selection
      ↓ (Seleciona)
Anatomy Viewer
      ↓ (Clica parte)
Info Panel + Subparte Destacada
      ↓ (Clica subparte)
Info Panel Atualiza + Foco em Subparte
      ↓ (Voltar Animais)
Animal Selection
```

---

## ⏱️ Transições & Animações

- **Hover rápido:** 0.2s ease (botões, cards)
- **Mudança componente:** 0.3s ease
- **Transição tela:** 0.3-0.4s ease (fade)

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
├── 📱 Screens - Mobile
├── 💻 Screens - Tablet
├── 🖥️ Screens - Desktop
└── 🔄 User Flows
```

---

## ✅ Checklist para Começar

### Setup
- [ ] Criar projeto "Chill Anatomy" no Figma
- [ ] Setup Design System (ler ESPECIFICACOES_FIGMA.md)
- [ ] Criar grids de referência (8px)

### Componentes Base
- [ ] Buttons (todos os tipos e estados)
- [ ] Cards (Animal)
- [ ] Info Panel Sections
- [ ] Breadcrumb
- [ ] Navegação

### Telas
- [ ] Welcome Screen
- [ ] Animal Selection
- [ ] Anatomy Viewer (Desktop)
- [ ] Anatomy Viewer (Tablet)
- [ ] Anatomy Viewer (Mobile)

### Refinement
- [ ] Todos os estados (hover, active, disabled)
- [ ] Prototipagem de fluxos
- [ ] Validação com stakeholders

### Exportação
- [ ] Componentes SVG/PNG
- [ ] Assets organizados
- [ ] Documentação para desenvolvedor

---

## 🔑 Dicas Importantes

✅ **Grid 8px** em tudo para consistência  
✅ **Uso de Auto-layout** em todos os componentes  
✅ **Sistema de Variantes** para manter ordem  
✅ **Naming Convention** clara e hierárquica  
✅ **3 Breakpoints** mínimos (Mobile, Tablet, Desktop)  
✅ **Todos os Estados** (default, hover, active, disabled)  
✅ **Prototipar Fluxos** para validação  
✅ **Comentários** em artboards para contexto  

---

## 📞 Stack Técnico

**Frontend:**
- React 19.2.5
- TypeScript 6.0.2
- Vite (build tool)
- Three.js 0.184.0 (3D)
- React Three Fiber 9.6.1
- React Three Drei 10.7.7

**O que você precisa saber como designer:**
- Aplicação web responsiva
- Visor 3D interativo (usar placeholder/mockup)
- Partes clicáveis e navegáveis
- Painel lateral dinâmico

---

## 🎯 Próximos Passos

1. **Leia primeiro:** [RESUMO_DESIGNER.md](RESUMO_DESIGNER.md) (5 min)
2. **Depois:** [GUIA_VISUAL_DESIGNER.md](GUIA_VISUAL_DESIGNER.md) (10 min)
3. **Setup Figma:** Use [ESPECIFICACOES_FIGMA.md](ESPECIFICACOES_FIGMA.md)
4. **Design Detalhado:** Consulte [DESCRICAO_PROJETO_DESIGNER.md](DESCRICAO_PROJETO_DESIGNER.md)

---

## ❓ Dúvidas Frequentes

**P: Preciso implementar o visor 3D?**  
R: Não! Você faz o design/mockup com placeholder. O desenvolvedor implementará o Three.js.

**P: Quantas variantes de cada componente?**  
R: Mínimo: Default, Hover, Active, Disabled. Veja detalhes em ESPECIFICACOES_FIGMA.md.

**P: Devo usar emojis ou ícones?**  
R: Emojis para animais (🐂🐎🐑). Ícones padronizados para ações (←→✕).

**P: Qual deve ser o tamanho base?**  
R: Desktop 1440px+, Tablet 768px, Mobile 375px.

**P: Como estruturar as páginas Figma?**  
R: Veja a estrutura recomendada em ESPECIFICACOES_FIGMA.md e GUIA_VISUAL_DESIGNER.md.

---

## 📝 Versão & Data

- **Versão:** 1.0
- **Data:** Maio de 2026
- **Projeto:** Chill Anatomy
- **Stack:** React + TypeScript + Three.js

---

## 🚀 Bom Trabalho!

Você tem toda a documentação necessária. Comece pelo resumo, depois explore os detalhes conforme necessário.

**Qualquer dúvida, consulte o arquivo específico mencionado acima.**

---

## 📄 Arquivos de Referência Rápida

```
📁 Chill-Anatomy/
├── 📄 RESUMO_DESIGNER.md (👈 COMECE AQUI)
├── 📄 GUIA_VISUAL_DESIGNER.md
├── 📄 DESCRICAO_PROJETO_DESIGNER.md
├── 📄 ESPECIFICACOES_FIGMA.md
├── 📄 README.md (info técnica do projeto)
└── ... (código da aplicação)
```

**Última atualização:** Maio de 2026
