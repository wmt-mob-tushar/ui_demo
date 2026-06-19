import { colors } from './colors';
import { spacing } from './spacing';
import { timing } from './timing';
import { typography } from './typography';

export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Timing = typeof timing;
export type Typography = typeof typography;

export type TextPreset = 'default' | 'heading' | 'subheading' | 'label';
export type TextWeight = 'normal' | 'medium' | 'bold';
