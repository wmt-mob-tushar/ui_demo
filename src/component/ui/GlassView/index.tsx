import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '@/theme';

export interface GlassViewProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  intensity?: number;
  borderRadius?: number;
  tint?: string;
}

export const GlassView = ({
  children,
  style,
  intensity = 10,
  borderRadius = 24,
  tint = colors.white50,
}: GlassViewProps) => (
  <View style={[style, { borderRadius, overflow: 'hidden' }]}>
    <View
      pointerEvents="none"
      style={[StyleSheet.absoluteFill, { backgroundColor: tint, filter: [{ blur: intensity }] }]}
    />
    {children}
  </View>
);
