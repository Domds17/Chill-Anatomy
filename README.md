# Animal Anatomy Viewer

Projeto React + TypeScript com Vite para visualizar e selecionar partes de um modelo 3D interativo. A ideia inicial é usar animais (por exemplo, um boi) e dividir o modelo em subpartes clicáveis.

## O que está neste projeto

- Visualização 3D com `three` e `@react-three/fiber`
- Interface de seleção de animais e partes
- Painel de descrição com nome em destaque e informações detalhadas
- Estrutura modular para adicionar novos animais e partes

## Como usar

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra `http://localhost:5173` no navegador.

## Observações

- O projeto usa malhas de exemplo criadas com caixas (`BoxGeometry`).
- Para usar um modelo real, substitua o componente 3D por um carregador `GLTFLoader` e adapte os `meshName`.

## Dependências principais

- `react`
- `react-dom`
- `three`
- `@react-three/fiber`
- `@react-three/drei`
