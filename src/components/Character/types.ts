import type { TextStyle } from 'react-native';

export interface CharacterProps {
  glyph: string;

  x: number;

  y: number;

  opacity: number;

  style?: TextStyle;
}
