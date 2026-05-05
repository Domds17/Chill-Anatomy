export interface RelatedPart {
  id: string;
  name: string;
}

export interface BodyPart {
  id: string;
  name: string;
  description: string;
  color: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  scale: {
    x: number;
    y: number;
    z: number;
  };
  relatedParts: RelatedPart[];
}

export interface CattleModel {
  id: string;
  name: string;
  description: string;
  parts: BodyPart[];
}
