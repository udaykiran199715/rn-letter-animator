/**
 * Represents a 2D point.
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Current animation lifecycle state.
 */
export type AnimationState = 'idle' | 'running' | 'paused' | 'finished';

/**
 * Built-in pen presets.
 */
export type PenPreset = 'feather' | 'fountain' | 'marker' | 'brush' | 'pencil';
