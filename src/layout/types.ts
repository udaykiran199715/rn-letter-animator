export interface CharacterLayout {
  index: number;

  character: string;

  x: number;

  y: number;

  width: number;

  height: number;
}

export interface WordLayout {
  index: number;

  start: number;

  end: number;

  x: number;

  y: number;

  width: number;

  height: number;
}

export interface LineLayout {
  index: number;

  start: number;

  end: number;

  y: number;

  width: number;

  height: number;
}

export interface ParagraphLayout {
  characters: CharacterLayout[];

  words: WordLayout[];

  lines: LineLayout[];

  width: number;

  height: number;
}
