import type { StyleProp, TextStyle } from 'react-native';

export interface CharacterProps {
  glyph: string;

  x: number;

  y: number;

  opacity: number;

  style?: StyleProp<TextStyle>;
}
