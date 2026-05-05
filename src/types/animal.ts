// Tipos para estrutura do animal
export interface AnimalPart {
  id: string;
  name: string;
  description: string;
  meshName: string;
  color: number;
  subparts?: AnimalPart[];
}

export interface Animal {
  id: string;
  name: string;
  description: string;
  modelPath: string; // Caminho do modelo 3D (gltf/glb)
  parts: AnimalPart[];
}

export interface SelectedPartState {
  part: AnimalPart | null;
  partPath: AnimalPart[]; // Hierarquia de partes selecionadas
  cameraTarget: [number, number, number];
}
