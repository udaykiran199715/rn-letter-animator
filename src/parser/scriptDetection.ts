export type ScriptType =
  | 'latin'
  | 'arabic'
  | 'indic'
  | 'cjk'
  | 'hebrew'
  | 'greek'
  | 'cyrillic'
  | 'unknown';

export function detectScript(text: string): ScriptType {
  if (/[؀-ۿ]/u.test(text)) {
    return 'arabic';
  }

  if (/[ऀ-ॿ]/u.test(text)) {
    return 'indic';
  }

  if (/[\u4E00-\u9FFF]/u.test(text)) {
    return 'cjk';
  }

  if (/[\u0590-\u05FF]/u.test(text)) {
    return 'hebrew';
  }

  if (/[\u0370-\u03FF]/u.test(text)) {
    return 'greek';
  }

  if (/[\u0400-\u04FF]/u.test(text)) {
    return 'cyrillic';
  }

  if (/[A-Za-z]/u.test(text)) {
    return 'latin';
  }

  return 'unknown';
}
