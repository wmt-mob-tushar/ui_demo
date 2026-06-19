import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { colors } from '@/theme';

export interface GlassViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  intensity?: number;
  borderRadius?: number;
}

export const GlassView = ({ children, style, intensity = 15, borderRadius = 24 }: GlassViewProps) => {
  return (
    <View style={[styles.container, { borderRadius }, style]}>
      <BlurView intensity={intensity} tint="light" style={StyleSheet.absoluteFill} />

      <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="glassGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor={colors.white45} />
            <Stop offset="100%" stopColor={colors.white18} />
          </LinearGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx={borderRadius}
          ry={borderRadius}
          fill="url(#glassGradient)"
        />
      </Svg>

      <View
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, { borderRadius, borderWidth: 1, borderColor: colors.white35 }]}
      />

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: colors.white08,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
});
