import { View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { colors } from '@/theme';
import { styles } from './styles';

export interface CardBridgeProps {
  leftColor: string;
  rightColor: string;
  /** Gap width the bridge fills. */
  width?: number;
  /** Bridge height (match the card height). */
  height?: number;
  /** Number of white pill gaps carved along the bridge. */
  lobes?: number;
  /** Height of each white pill gap. */
  pillHeight?: number;
}

export const CardBridge = ({
  leftColor,
  rightColor,
  width = 18,
  height = 315,
  lobes = 3,
  pillHeight = 56,
}: CardBridgeProps) => {
  // Spread pill centres from top to bottom so the first/last are half-cut by the edges.
  const step = lobes > 1 ? height / (lobes - 1) : 0;

  return (
    <View style={[styles.bridge, { width, height }]}>
      <Svg width={width} height={height}>
        <Rect x={0} y={0} width={width / 2} height={height} fill={leftColor} />
        <Rect x={width / 2} y={0} width={width / 2} height={height} fill={rightColor} />
        {Array.from({ length: lobes }).map((_, i) => {
          const cy = lobes > 1 ? i * step : height / 2;
          return (
            <Rect
              key={i}
              x={0}
              y={cy - pillHeight / 2}
              width={width}
              height={pillHeight}
              rx={width / 2}
              ry={width / 2}
              fill={colors.background}
            />
          );
        })}
      </Svg>
    </View>
  );
};
