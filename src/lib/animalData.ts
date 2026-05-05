export interface SubPart {
  name: string
  description: string
  details: string
  relatedParts: string[]
}

export interface Region {
  name: string
  subparts: Record<string, SubPart>
}

export interface Animal {
  id: string
  name: string
  emoji: string
  scientificName: string
  description: string
  color: string
  colorSecondary: string
  parts: Record<string, Region>
}

export const animals: Animal[] = [
  {
    id: 'boi',
    name: 'Boi',
    emoji: '🐂',
    scientificName: 'Bos taurus',
    description: 'Principal animal de produção usado na pecuária e estudos anatômicos.',
    color: '#8B4513',
    colorSecondary: '#654321',
    parts: {
      cabeca: {
        name: 'Cabeça',
        subparts: {
          olhos: {
            name: 'Olhos',
            description: 'Órgãos da visão localizados lateralmente na cabeça.',
            details: 'Os olhos do boi possuem ampla visão periférica e auxiliam na detecção de predadores e barreiras.',
            relatedParts: ['orelhas', 'nariz'],
          },
          orelhas: {
            name: 'Orelhas',
            description: 'Órgãos da audição que captam sons do ambiente.',
            details: 'As orelhas do boi são móveis e ajudam na localização de ruídos e na comunicação com o grupo.',
            relatedParts: ['olhos', 'nariz'],
          },
          nariz: {
            name: 'Nariz',
            description: 'Área respiratória e sensorial responsável pelo olfato.',
            details: 'O nariz filtra o ar e permite a detecção de aromas presentes no ambiente e na alimentação.',
            relatedParts: ['olhos', 'orelha'],
          },
        },
      },
      tronco: {
        name: 'Tronco',
        subparts: {
          coracao: {
            name: 'Coração',
            description: 'Órgão muscular que bombeia sangue para todo o corpo.',
            details: 'O coração bovino é responsável pela circulação sanguínea e pelo transporte de oxigênio e nutrientes.',
            relatedParts: ['pulmoes', 'estomago'],
          },
          pulmoes: {
            name: 'Pulmões',
            description: 'Órgãos respiratórios que realizam trocas gasosas.',
            details: 'Os pulmões fornecem oxigênio ao sangue e eliminam dióxido de carbono durante a respiração.',
            relatedParts: ['coracao', 'estomago'],
          },
          estomago: {
            name: 'Estômago',
            description: 'Parte do sistema digestivo responsável pela digestão inicial do alimento.',
            details: 'O boi possui um estômago composto por rúmen, retículo, omaso e abomaso para digestão eficiente.',
            relatedParts: ['coracao', 'pulmoes'],
          },
        },
      },
      membros: {
        name: 'Membros',
        subparts: {
          dianteiros: {
            name: 'Membros Dianteiros',
            description: 'Estruturas que sustentam e movimentam a parte frontal do corpo.',
            details: 'Os membros dianteiros são importantes para suporte do peso e amortece durante a locomoção.',
            relatedParts: ['traseiros'],
          },
          traseiros: {
            name: 'Membros Traseiros',
            description: 'Estruturas posteriores que fornecem propulsão e equilíbrio.',
            details: 'Os membros traseiros realizam grande parte da força propulsora durante a marcha e o salto.',
            relatedParts: ['dianteiros'],
          },
        },
      },
    },
  },
  {
    id: 'cavalo',
    name: 'Cavalo',
    emoji: '🐎',
    scientificName: 'Equus caballus',
    description: 'Animal de equitação e trabalho, com anatomia adaptada à corrida.',
    color: '#654321',
    colorSecondary: '#5C2E0F',
    parts: {
      cabeca: {
        name: 'Cabeça',
        subparts: {
          olhos: {
            name: 'Olhos',
            description: 'Órgãos da visão que ajudam no deslocamento em alta velocidade.',
            details: 'O cavalo tem visão ampla e sensibilidade à luz, essencial para perceber movimentos rápidos.',
            relatedParts: ['orelhas', 'nariz'],
          },
          orelhas: {
            name: 'Orelhas',
            description: 'Captam sons e indicam atenção e estado emocional.',
            details: 'As orelhas do cavalo movem-se independentemente para localizar sons e comunicar-se.',
            relatedParts: ['olhos', 'nariz'],
          },
        },
      },
      tronco: {
        name: 'Tronco',
        subparts: {
          coracao: {
            name: 'Coração',
            description: 'Órgão vital com alta capacidade de trabalho.',
            details: 'O cavalo tem frequência cardíaca elevada durante o exercício intenso, adaptada ao movimento.',
            relatedParts: ['pulmoes'],
          },
          pulmoes: {
            name: 'Pulmões',
            description: 'Permitem grande volume de trocas gasosas.',
            details: 'A capacidade pulmonar é essencial para o desempenho aeróbico do cavalo.',
            relatedParts: ['coracao'],
          },
        },
      },
      membros: {
        name: 'Membros',
        subparts: {
          dianteiros: {
            name: 'Membros Dianteiros',
            description: 'Suportam e guiam o movimento dianteiro.',
            details: 'Os membros dianteiros do cavalo são responsáveis por absorver impactos e estabilidade.',
            relatedParts: ['traseiros'],
          },
          traseiros: {
            name: 'Membros Traseiros',
            description: 'Geram propulsão e força ao deslocamento.',
            details: 'A musculatura traseira é fundamental para força e ritmo de corrida.',
            relatedParts: ['dianteiros'],
          },
        },
      },
    },
  },
  {
    id: 'ovelha',
    name: 'Ovelha',
    emoji: '🐑',
    scientificName: 'Ovis aries',
    description: 'Animal de lã e carne, com corpo compacto e funcional.',
    color: '#8B8B7A',
    colorSecondary: '#6B6B5A',
    parts: {
      cabeca: {
        name: 'Cabeça',
        subparts: {
          olhos: {
            name: 'Olhos',
            description: 'Órgãos da visão lateral, com atenção a predadores.',
            details: 'As ovelhas dependem da visão periférica para detectar movimentos ao redor.',
            relatedParts: ['orelhas'],
          },
        },
      },
      tronco: {
        name: 'Tronco',
        subparts: {
          estomago: {
            name: 'Estômago',
            description: 'Órgão especializado na digestão de fibras.',
            details: 'A ovelha possui sistema digestivo ruminante adaptado à fermentação de fibras vegetais.',
            relatedParts: [],
          },
        },
      },
      membros: {
        name: 'Membros',
        subparts: {
          traseiros: {
            name: 'Membros Traseiros',
            description: 'Importantes para locomoção e estabilidade.',
            details: 'Os membros traseiros suportam grande parte do peso durante a caminhada.',
            relatedParts: ['dianteiros'],
          },
        },
      },
    },
  },
  {
    id: 'cabra',
    name: 'Cabra',
    emoji: '🐐',
    scientificName: 'Capra aegagrus hircus',
    description: 'Animal resistente e adaptável, usado para leite, carne e lã.',
    color: '#D2B48C',
    colorSecondary: '#CD853F',
    parts: {
      cabeca: {
        name: 'Cabeça',
        subparts: {
          orelhas: {
            name: 'Orelhas',
            description: 'Importantes para audição e comunicação.',
            details: 'As orelhas das cabras são sensíveis e permitem captar sons finos do ambiente.',
            relatedParts: [],
          },
        },
      },
      tronco: {
        name: 'Tronco',
        subparts: {
          estomago: {
            name: 'Estômago',
            description: 'Adequado para fermentação de plantas fibrosas.',
            details: 'A cabra pode digerir folhas duras e caules, graças ao seu sistema ruminal.',
            relatedParts: [],
          },
        },
      },
      membros: {
        name: 'Membros',
        subparts: {
          dianteiros: {
            name: 'Membros Dianteiros',
            description: 'Sustentam e ajudam na movimentação ágil.',
            details: 'Esses membros permitem que as cabras subam encostas e terrenos acidentados.',
            relatedParts: ['traseiros'],
          },
        },
      },
    },
  },
  {
    id: 'porco',
    name: 'Porco',
    emoji: '🐖',
    scientificName: 'Sus scrofa domesticus',
    description: 'Animal de carne e couro com anatomia robusta e adaptada à alimentação omnívora.',
    color: '#FFB6C1',
    colorSecondary: '#FFC0CB',
    parts: {
      cabeca: {
        name: 'Cabeça',
        subparts: {
          nariz: {
            name: 'Nariz',
            description: 'Estrutura sensorial muito desenvolvida.',
            details: 'O focinho do porco é altamente sensível e usado para buscar alimento.',
            relatedParts: [],
          },
        },
      },
      tronco: {
        name: 'Tronco',
        subparts: {
          estomago: {
            name: 'Estômago',
            description: 'Parte do sistema digestivo que processa ração e restos alimentares.',
            details: 'O porco digere uma variedade de alimentos, incluindo grãos e vegetais.',
            relatedParts: [],
          },
        },
      },
      membros: {
        name: 'Membros',
        subparts: {
          traseiros: {
            name: 'Membros Traseiros',
            description: 'Fornecem suporte e propulsão.',
            details: 'As pernas traseiras do porco ajudam a estabilizar o corpo durante a alimentação e o deitar.',
            relatedParts: [],
          },
        },
      },
    },
  },
  {
    id: 'galinha',
    name: 'Galinha',
    emoji: '🐔',
    scientificName: 'Gallus gallus domesticus',
    description: 'Ave doméstica usada para carne e ovos, com corpo compacto e penas.',
    color: '#FFD700',
    colorSecondary: '#FFA500',
    parts: {
      cabeca: {
        name: 'Cabeça',
        subparts: {
          olhos: {
            name: 'Olhos',
            description: 'Órgãos sensoriais adaptados à visão diurna.',
            details: 'As galinhas têm visão aguçada e conseguem detectar movimentos rápidos em seu entorno.',
            relatedParts: [],
          },
        },
      },
      tronco: {
        name: 'Tronco',
        subparts: {
          estomago: {
            name: 'Papo',
            description: 'Região digestiva que armazena e amolece o alimento.',
            details: 'O papo da galinha é uma parte importante do processo digestivo antes do alimento seguir para o moela.',
            relatedParts: [],
          },
        },
      },
      membros: {
        name: 'Pernas',
        subparts: {
          traseiras: {
            name: 'Pernas Traseiras',
            description: 'Permitem a locomoção e a sustentação do corpo.',
            details: 'As pernas das galinhas são adaptadas para andar e ciscar no solo.',
            relatedParts: [],
          },
        },
      },
    },
  },
]

export function getAnimalById(id: string) {
  return animals.find((animal) => animal.id === id) || null
}

export function getPartData(animal: Animal | null, regionKey: string | null, partKey: string | null) {
  if (!animal || !regionKey || !partKey) {
    return null
  }
  return animal.parts[regionKey]?.subparts[partKey] || null
}

export function getAllSubparts(animal: Animal) {
  const result: Array<{ regionKey: string; partKey: string; name: string; description: string }> = []
  Object.entries(animal.parts).forEach(([regionKey, region]) => {
    Object.entries(region.subparts).forEach(([partKey, part]) => {
      result.push({ regionKey, partKey, name: part.name, description: part.description })
    })
  })
  return result
}
