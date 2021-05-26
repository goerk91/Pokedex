interface IDeamWorld {
  front_default: string | undefined;
  front_female: string | undefined;
}

interface ISpritesOther {
  dream_world: IDeamWorld;
}

interface IType {
  name: string;
  url: string;
}

interface ITypes {
  type: IType;
}

interface ISprites {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: ISpritesOther;
}

export interface IPokemonData {
  name: string;
  sprites: ISprites;
  id: number;
  order: number;
  types: ITypes[];
}
