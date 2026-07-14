import type { TextStyle } from 'react-native';
import type { ParagraphLayout } from '../../layout';

export interface TextMeasurerProps {
  text: string;

  width: number;

  textStyle?: TextStyle;

  onMeasured(layout: ParagraphLayout): void;
}
