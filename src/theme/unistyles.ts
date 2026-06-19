import { PixelRatio } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { timing } from './timing';

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 852;

export const appTheme = {
  colors,
  spacing,
  typography,
  timing,
  /** Percentage of the screen width — wp(50) = half the width. */
  wp: (percent: number) => (UnistylesRuntime.screen.width * percent) / 100,
  /** Percentage of the screen height — hp(50) = half the height. */
  hp: (percent: number) => (UnistylesRuntime.screen.height * percent) / 100,
  /** Scale a design px (393-wide baseline) to the current device width. */
  rw: (size: number) => (UnistylesRuntime.screen.width / DESIGN_WIDTH) * size,
  /** Scale a design px (852-tall baseline) to the current device height. */
  rh: (size: number) => (UnistylesRuntime.screen.height / DESIGN_HEIGHT) * size,
  /**
   * Responsive font / pixel size — scales from the 393 design width and snaps
   * to the nearest device pixel. Best for fontSize, borders and small sizes.
   * Renders 1:1 on a 393-wide device; scales on others.
   */
  rf: (size: number) => {
    const scale = UnistylesRuntime.screen.width / DESIGN_WIDTH;
    return Math.round(PixelRatio.roundToNearestPixel(size * scale));
  },
  /**
   * Figma rotation → RN rotate string. Figma is counter-clockwise-positive while
   * RN/CSS `rotate` is clockwise-positive, so the angle is negated to match Figma.
   * Usage: `transform: [{ rotate: theme.rotation(7.95) }]`.
   */
  rotation: (figmaDeg: number) => `${-figmaDeg}deg`,
} as const;

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

type AppThemes = {
  light: typeof appTheme;
};

type AppBreakpoints = typeof breakpoints;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: {
    light: appTheme,
  },
  breakpoints,
  settings: {
    initialTheme: 'light',
  },
});
