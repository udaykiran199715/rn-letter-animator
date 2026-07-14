import type { TextStyle, ViewStyle } from 'react-native';
import type { AnimationState, PenPreset, Point } from '../../types';

/**
 * Public imperative API.
 */
export interface LetterAnimatorRef {
  play(): void;

  pause(): void;

  resume(): void;

  stop(): void;

  reset(): void;

  seek(progress: number): void;

  getState(): AnimationState;

  isPlaying(): boolean;
}

/**
 * Error callback.
 */
export interface LetterAnimatorError {
  code: string;
  message: string;
}

/**
 * LetterAnimator component props.
 */
export interface LetterAnimatorProps {
  /**
   * Text to animate.
   */
  text: string;

  /**
   * Animation duration in milliseconds.
   *
   * @default 3000
   */
  duration?: number;

  /**
   * Delay before animation starts.
   *
   * @default 0
   */
  delay?: number;

  /**
   * Automatically start animation.
   *
   * @default true
   */
  autoPlay?: boolean;

  /**
   * Repeat animation.
   *
   * @default false
   */
  loop?: boolean;

  /**
   * Display animated pen.
   *
   * @default true
   */
  showPen?: boolean;

  /**
   * Built-in pen preset.
   */
  penPreset?: PenPreset;

  /**
   * Pen size.
   */
  penSize?: number;

  /**
   * Pen drawing offset.
   */
  penOffset?: Point;

  /**
   * Display cursor.
   *
   * @default true
   */
  showCursor?: boolean;

  /**
   * Blink cursor.
   *
   * @default true
   */
  cursorBlink?: boolean;

  /**
   * Disable animation.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Respect reduced motion accessibility.
   *
   * @default true
   */
  reducedMotion?: boolean;

  /**
   * Container style.
   */
  style?: ViewStyle;

  /**
   * Text style.
   */
  textStyle?: TextStyle;

  /**
   * React Native testing identifier.
   */
  testID?: string;

  /**
   * Accessibility.
   */
  accessible?: boolean;

  /**
   * Accessibility label.
   */
  accessibilityLabel?: string;

  /**
   * Animation started.
   */
  onStart?(): void;

  /**
   * Animation paused.
   */
  onPause?(): void;

  /**
   * Animation resumed.
   */
  onResume?(): void;

  /**
   * Animation finished.
   */
  onFinish?(): void;

  /**
   * Progress callback.
   */
  onProgress?(progress: number): void;

  /**
   * Character completed.
   */
  onCharacter?(character: string, index: number): void;

  /**
   * Word completed.
   */
  onWord?(word: string, index: number): void;

  /**
   * Line completed.
   */
  onLine?(line: string, index: number): void;

  /**
   * Error callback.
   */
  onError?(error: LetterAnimatorError): void;
}
