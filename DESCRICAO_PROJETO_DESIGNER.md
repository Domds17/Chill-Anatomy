# Chill Anatomy - Documentação Completa para Designer

## 📋 Visão Geral do Projeto

**Chill Anatomy** é uma ferramenta educacional interativa desenvolvida para estudantes de medicina veterinária. O projeto permite explorar a anatomia de animais domésticos de forma visual e intuitiva através de uma interface 3D interativa.

**Objetivo Principal:** Facilitar o aprendizado da anatomia veterinária através de visualização 3D detalhada de animais, onde cada parte do corpo pode ser clicada para obter informações educacionais.

---

## 🎯 Público-Alvo

- Estudantes de Medicina Veterinária
- Profissionais da área veterinária
- Interessados em educação sobre anatomia animal

---

## 🏗️ Arquitetura da Aplicação

### Fluxo de Navegação

```
┌─────────────────────┐
│  Welcome Screen     │  (Tela de Boas-vindas)
│  🐂 Chill Anatomy   │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│ Animal Selection    │  (Seleção de Animal)
│ Boi, Cavalo, Ovelha │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  Anatomy Viewer     │  (Visualizador Anatômico)
│ 3D + Info Panel     │
└─────────────────────┘
```

---

## 📱 Telas da Aplicação

### 1. **Welcome Screen** - Tela de Boas-vindas

**Propósito:** Apresentar o projeto e incentivar o usuário a começar a exploração.

**Elementos Principais:**
- **Logo/Título:** "🐂 Chill Anatomy" (destaque com cor primária)
- **Subtítulo:** "Anatomia Veterinária Interativa"
- **Descrição:** Texto motivacional explicando o propósito da ferramenta
- **Lista de Funcionalidades:**
  - 🔍 Visualização 3D detalhada
  - 📚 Informações educacionais
  - 🎯 Navegação intuitiva
  - 🏥 Foco em medicina veterinária
- **Botão Principal:** "Começar Exploração" com seta (→)

**Estilo Visual:**
- Fundo limpo e minimalista
- Ícones grandes e amigáveis
- Tipografia hierárquica clara
- Paleta: tons quentes (marrom/terra) + branco

---

### 2. **Animal Selection Screen** - Seleção de Animal

**Propósito:** Permitir ao usuário escolher qual animal deseja explorar.

**Elementos Principais:**
- **Cabeçalho:** "Selecione um Animal"
- **Grid de Animais:** Cards interativos para cada animal disponível

**Animais Disponíveis:**
1. **Boi** (Bos taurus) - 🐂
2. **Cavalo** (Equus caballus) - 🐎
3. **Ovelha** (Ovis aries) - 🐑
4. **Cabra** (Capra aegagrus hircus) - 🐐
5. **Porco** (Sus scrofa domesticus) - 🐖
6. **Galinha** (Gallus gallus domesticus) - 🐔

**Card de Animal (Componente Reutilizável):**
- Ícone/Emoji do animal (grande e destacado)
- Nome comum em português
- Nome científico em itálico
- Descrição breve
- Cor temática associada ao animal
- Estado hover: elevação/shadow, mudança de cor

**Cores por Animal:**
- Boi: `#8B4513` (marrom escuro)
- Cavalo: `#654321` (marrom médio)
- Ovelha: `#F5F5DC` (creme claro)
- Cabra: `#D2B48C` (tan)
- Porco: `#FFB6C1` (rosa claro)
- Galinha: `#FFD700` (amarelo ouro)

---

### 3. **Anatomy Viewer** - Visualizador Anatômico

**Propósito:** Exibir o modelo 3D do animal com interface interativa e painel de informações.

**Layout Geral:**
```
┌─────────────────────────────────────────────────┐
│  Header: Botões de Navegação + Título           │
├─────────────────────────────────────────────────┤
│  Breadcrumb Navigation (Caminho de Partes)      │
├──────────────────────┬──────────────────────────┤
│                      │                          │
│   Visor 3D           │   Painel de Informações  │
│   (Canvas)           │   (Info Lateral)         │
│                      │                          │
│   70% da largura     │   30% da largura         │
│                      │                          │
└──────────────────────┴──────────────────────────┘
```

#### 3.1 **Header - Navegação Superior**

**Elementos:**
- **Botão "← Voltar aos Animais":** Retorna à tela de seleção
- **Título Centralizado:** "🐂 Visualizador Anatômico - [Nome do Animal]"
- **Botão Condicional:** "← Voltar às Partes Principais" (aparece apenas ao visualizar subpartes)

**Comportamento:**
- Botões com espaçamento adequado
- Feedback visual (hover, ativo)
- Cores: primária para ação, cinza para secundária

#### 3.2 **Breadcrumb Navigation**

**Propósito:** Mostrar o caminho hierárquico de navegação dentro das partes do animal.

**Exemplo:**
```
🐂 Cabeça > Olhos
ou
🐂 Tronco > Coração
```

**Características:**
- Componente horizontal
- Separador visual ">" entre níveis
- Cada parte é clicável para navegação rápida
- Última parte é destacada (ativa)

#### 3.3 **Visor 3D (Canvas - 70% da largura)**

**Tecnologia:** WebGL com Three.js + React Three Fiber

**Funcionalidades:**
- Modelo 3D interativo do animal
- Cada parte do corpo é clicável
- Cores diferentes para identificar partes
- Mudanças de cor ao selecionar partes

**Estrutura Hierárquica do Boi (Exemplo Principal):**

**Partes Principais:**
1. **Cabeça** (#8B4513)
   - Olhos
   - Orelhas
   - Nariz
   - Boca
   - Chifres

2. **Tronco** (#A0522D)
   - Coração
   - Pulmões
   - Estômago
   - Fígado
   - Rins

3. **Pernas Dianteiras** (#654321)
   - Ombro
   - Cotovelo
   - Joelho
   - Casco

4. **Pernas Traseiras** (#5C2E0F)
   - Quadril
   - Joelho
   - Jarrete
   - Casco

5. **Bunda** (#704214)
   - Cauda
   - Reto
   - Úbere

**Interações do Visor 3D:**
- Clique em parte: seleciona e exibe informações no painel
- Clique em subparte: navega para visualização da subparte
- Hover: destaca a parte (preview visual)
- Drag: rotaciona o modelo
- Scroll/Pinch: zoom in/out

#### 3.4 **Painel de Informações (30% da largura)**

**Propósito:** Exibir informações detalhadas sobre a parte selecionada.

**Estados:**

**Estado Vazio (Nenhuma Parte Selecionada):**
```
┌─────────────────────┐
│  Painel Vazio       │
│                     │
│  "Clique em uma     │
│   parte do boi      │
│   para ver          │
│   informações       │
│   detalhadas"       │
│                     │
└─────────────────────┘
```

**Estado com Parte Selecionada:**
```
┌──────────────────────────┐
│ [Indicador de Cor] Nome  │ ← Header com cor temática
│ ✕ (fechar)               │
├──────────────────────────┤
│                          │
│ Descrição Detalhada      │
│ (texto educacional sobre │
│  a parte selecionada)    │
│                          │
├──────────────────────────┤
│ Subcategorias (se houver)│
│                          │
│ • Subparte 1             │
│ • Subparte 2             │
│ • Subparte 3             │
│                          │
├──────────────────────────┤
│ Partes Relacionadas      │
│ (se houver)              │
│                          │
│ • Parte 1                │
│ • Parte 2                │
│                          │
└──────────────────────────┘
```

**Elementos do Painel de Informações:**

1. **Header da Parte:**
   - Indicador visual de cor (quadrado colorido)
   - Nome da parte em destaque
   - Botão de fechar (✕)

2. **Descrição:**
   - Texto educacional detalhado
   - Explica a função e localização da parte
   - Tipografia legível com line-height adequado

3. **Subcategorias (Condicional):**
   - "Subcategorias de [Nome da Parte Principal]"
   - Lista de botões clicáveis
   - Botões destacam partes específicas no 3D
   - Comportamento: clique = navegação para subparte

4. **Partes Relacionadas (Condicional):**
   - Mostra conexões com outras partes
   - Links rápidos para navegação
   - Útil para compreender anatomia integrada

**Comportamento do Painel:**
- Scroll interno se conteúdo exceder altura
- Animação suave ao abrir/fechar
- Estado destacado para elementos interativos

---

## 🎨 Identidade Visual e Design System

### Paleta de Cores Principal

| Uso | Cor | Hex | RGB |
|-----|-----|-----|-----|
| Primária | Marrom Escuro | #8B4513 | (139, 69, 19) |
| Secundária | Marrom Médio | #A0522D | (160, 82, 45) |
| Destaque | Marrom Claro | #D2B48C | (210, 180, 140) |
| Fundo | Branco | #FFFFFF | (255, 255, 255) |
| Texto | Cinza Escuro | #333333 | (51, 51, 51) |
| Texto Leve | Cinza Médio | #666666 | (102, 102, 102) |
| Botão Hover | Marrom Escuro 85% | #A0522D | (160, 82, 45) |
| Erro/Alerta | Vermelho | #D32F2F | (211, 47, 47) |
| Sucesso | Verde | #388E3C | (56, 142, 60) |
| Informação | Azul | #1976D2 | (25, 118, 210) |

### Tipografia

**Fonte Principal:** Sistema padrão (ou similar)
- Arial/Helvetica (fallback: sans-serif)
- Alternativa moderna: Inter, Segoe UI

**Hierarquia Tipográfica:**

| Elemento | Tamanho | Peso | Cor |
|----------|---------|------|-----|
| Títulos Principais (H1) | 2.5rem (40px) | 700 Bold | #8B4513 |
| Títulos Secundários (H2) | 1.8rem (28px) | 600 SemiBold | #333333 |
| Títulos Terciários (H3) | 1.3rem (20px) | 600 SemiBold | #333333 |
| Texto Corpo | 1rem (16px) | 400 Regular | #333333 |
| Texto Pequeno | 0.875rem (14px) | 400 Regular | #666666 |
| Botões | 1rem (16px) | 600 SemiBold | Branco / Primária |
| Labels | 0.75rem (12px) | 500 Medium | #666666 |

---

## 🧩 Componentes da Interface

### Componentes Reutilizáveis

#### 1. **Botão Padrão**
- **Estados:** Default, Hover, Active, Disabled
- **Variantes:** Primary (marrom), Secondary (outline), Danger (vermelho)
- **Padding:** 12px 24px
- **Border-radius:** 6px
- **Transição:** 0.3s ease

#### 2. **Card de Animal**
- **Dimensões:** ~300px x 300px (responsivo)
- **Elementos:** Ícone, Nome, Nome Científico, Descrição, Cor temática
- **Hover:** Elevação (box-shadow), mudança de cor de fundo
- **Transição:** 0.3s ease

#### 3. **Indicador de Cor de Parte**
- **Forma:** Quadrado (8x8px)
- **Localização:** Left do nome da parte
- **Função:** Código visual da parte no painel

#### 4. **Botão de Parte Relacionada**
- **Estilo:** Link-like com underline opcional
- **Hover:** Muda cor para primária
- **Clique:** Navega para a parte
- **Transição:** 0.2s ease

#### 5. **Badge de Hierarquia (Breadcrumb)**
- **Estilo:** Inline, com separador ">"
- **Clicável:** Sim
- **Estado Ativo:** Última parte em destaque
- **Comportamento:** Navegação rápida

---

## 🎬 Comportamentos e Interações

### Welcome Screen → Animal Selection
- Transição: Fade out / Fade in
- Duração: 0.3s
- Efeito: Suave, não-abrupto

### Animal Selection → Anatomy Viewer
- Transição: Slide/Fade
- Duração: 0.4s
- Efeito: Destaca animal selecionado antes de navegar

### Seleção de Parte no 3D
- Clique em parte: Seleciona e destaca no painel
- Visor 3D: Parte muda de cor (highlight)
- Painel: Abre/atualiza com informações
- Transição: 0.3s

### Navegação entre Subpartes
- Clique em subparte: Visor foca na subparte
- Breadcrumb: Atualiza para mostrar caminho
- Painel: Exibe informações da subparte
- Botão "Voltar": Permite retornar às partes principais

### Hover em Parte (3D)
- Parte muda cor levemente (preview)
- Tooltip opcional: Nome da parte
- Transição: 0.2s

---

## 📐 Layout Responsivo

### Breakpoints de Design

| Dispositivo | Largura | Layout |
|-------------|---------|--------|
| Mobile | < 768px | Stacked (3D acima, Info abaixo) |
| Tablet | 768px - 1024px | Side-by-side com ajuste de proporção |
| Desktop | > 1024px | 70% visor 3D, 30% info painel |

### Considerações Mobile
- Visor 3D redimensiona para 100% em mobile
- Painel de informações em modal/drawer
- Breadcrumb em carousel horizontal
- Botões com tamanho mínimo de 44x44px (acessibilidade)

---

## 📊 Fluxo de Dados e Estados

### Context API - Estrutura de Estado

**1. NavigationContext:**
- `currentScreen`: 'welcome' | 'animal-selection' | 'anatomy-viewer'
- `setCurrentScreen()`: Função para mudar tela

**2. BodyPartContext:**
- `selectedPart`: BodyPart | null (parte selecionada)
- `setSelectedPart()`: Função para selecionar parte
- `pathParts`: BreadcrumbPart[] (caminho hierárquico)

**3. AnimalContext:**
- `selectedAnimal`: Animal | null (animal selecionado)
- `setSelectedAnimal()`: Função para selecionar animal

### Estrutura de Dados - Parte (BodyPart)

```typescript
{
  id: string;              // 'head', 'head-eyes', etc
  name: string;            // "Cabeça", "Olhos"
  description: string;     // Texto educacional
  color: string;           // Hex color "#8B4513"
  position: {              // Posição 3D
    x: number;
    y: number;
    z: number;
  };
  scale: {                 // Escala no espaço 3D
    x: number;
    y: number;
    z: number;
  };
  relatedParts: [          // Partes relacionadas
    {
      id: string;
      name: string;
    }
  ];
}
```

---

## 🔄 Fluxos de Usuário

### Fluxo 1: Exploração Básica
1. Usuário abre aplicação → Welcome Screen
2. Clica "Começar Exploração" → Animal Selection
3. Seleciona animal (Boi) → Anatomy Viewer
4. Clica em parte (ex: Cabeça) → Painel exibe informações
5. Clica em subparte (ex: Olhos) → Visor foca subparte

### Fluxo 2: Navegação Rápida
1. Usuário está em Anatomy Viewer (Tronco > Coração)
2. Clica em "Tronco" no Breadcrumb
3. Retorna para visualizar Tronco principal
4. Painel atualiza com informações do Tronco

### Fluxo 3: Trocar de Animal
1. Usuário está no Anatomy Viewer (Boi)
2. Clica "Voltar aos Animais"
3. Retorna ao Animal Selection
4. Seleciona outro animal (ex: Cavalo)

---

## 🎯 Elementos de UX/UI Importantes

### Feedback Visual
- **Clique:** Mudança de cor, elevação, animação
- **Hover:** Mudança de cor, cursor pointer
- **Loading:** Spinner ou skeleton (se aplicável)
- **Erro:** Mensagem em vermelho, ícone de alerta

### Acessibilidade
- Cores com contraste suficiente (WCAG AA)
- Elementos interativos com tamanho mínimo 44x44px
- Keyboard navigation suportada (Tab, Enter, Esc)
- ARIA labels para elementos do 3D
- Tooltip para elementos pequenos

### Performance Visual
- Transições suaves (0.2s - 0.4s)
- Animações não bloqueantes
- Visor 3D otimizado para 60 FPS
- Lazy loading de recursos

---

## 📋 Checklist para Design no Figma

### Telas
- [ ] Welcome Screen completa com elementos
- [ ] Animal Selection Screen com grid de cards
- [ ] Anatomy Viewer (Desktop, Tablet, Mobile)
- [ ] Visor 3D com placeholder/mockup
- [ ] Painel de Informações (vazio e com conteúdo)
- [ ] Breadcrumb Navigation

### Componentes
- [ ] Botão Padrão (4 estados)
- [ ] Card de Animal (3 estados: default, hover, active)
- [ ] Indicador de Cor
- [ ] Botão de Parte Relacionada
- [ ] Badge de Breadcrumb
- [ ] Input/Fields (se necessário)

### Variantes de Layout
- [ ] Desktop (1920px+)
- [ ] Tablet (768px - 1024px)
- [ ] Mobile (< 768px)

### Fluxos de Navegação
- [ ] Flow 1: Exploração Básica
- [ ] Flow 2: Navegação Rápida
- [ ] Flow 3: Trocar de Animal

### Documentação
- [ ] Design System/Library
- [ ] Tipografia
- [ ] Cores
- [ ] Espaçamento (8px grid)
- [ ] Sombras
- [ ] Ícones

---

## 📝 Notas Importantes para Designer

1. **Modelo 3D:** O visor 3D será implementado com Three.js. O designer deve criar mockup/placeholder com boa fidelidade visual.

2. **Dados Dinâmicos:** O painel de informações e breadcrumb são dinâmicos. Considere variações com textos curtos e longos.

3. **Compatibilidade:** Testar design em diferentes navegadores modernos (Chrome, Firefox, Safari, Edge).

4. **Prototipagem:** Recomenda-se criar protótipos interativos no Figma para validar fluxos com stakeholders.

5. **Cores das Partes:** As cores seguem uma hierarquia (tons mais claros = subpartes, tons mais escuros = partes principais).

6. **Ícones:** Usar emojis para animais e ícones padronizados (seta, fechar, etc).

7. **Tipografia:** Manter consistência com a paleta de tipografia definida.

8. **Espaçamento:** Usar grid de 8px como base para consistência.

---

## 🎨 Exemplos de Elementos Visuais

### Botão Principal
```
┌──────────────────────────┐
│ Começar Exploração  →    │
└──────────────────────────┘
Cor: #8B4513 (Marrom)
Texto: Branco 600 Bold
Padding: 12px 24px
Border-radius: 6px
Hover: #A0522D (Marrom mais claro)
```

### Card de Animal (Hover)
```
┌─────────────────────────┐
│        🐂                │ (Elevação +4px)
│      Boi                 │ (cor: #8B4513)
│   Bos taurus             │ (cor: #666666 italic)
│                          │
│ Animal de grande porte   │
│ fundamental na pecuária  │
└─────────────────────────┘
Background Hover: rgba(139, 69, 19, 0.05)
Box-shadow: 0 4px 12px rgba(0,0,0,0.15)
```

### Painel de Informações (Com Conteúdo)
```
┌────────────────────────────┐
│ [■] Cabeça          ✕      │ ([■] = cor #8B4513)
├────────────────────────────┤
│ A cabeça do boi contém      │
│ os órgãos dos sentidos...   │
│                            │
│ Subcategorias da Cabeça:   │
│ • Olhos                    │
│ • Orelhas                  │
│ • Nariz                    │
│ • Boca                     │
│ • Chifres                  │
└────────────────────────────┘
```

---

## 🚀 Conclusão

**Chill Anatomy** é uma aplicação educacional moderna e intuitiva que combina tecnologia 3D com design user-friendly. O designer deve focar em:

1. **Clareza:** Hierarquia visual clara e navegação intuitiva
2. **Usabilidade:** Elementos interativos bem definidos e responsivos
3. **Educação:** Design que comunica informações complexas de forma acessível
4. **Consistência:** Sistema de design robusto e reutilizável

O projeto está pronto para evolução com novos animais, partes mais detalhadas e possíveis funcionalidades futuras como modo 3D comparativo ou quiz educacional.

---

**Desenvolvido para:** Estudantes de Medicina Veterinária  
**Versão:** 1.0.0  
**Stack:** React + TypeScript + Vite + Three.js  
**Data:** Maio de 2026
