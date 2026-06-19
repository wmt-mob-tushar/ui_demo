import { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { Canvas, Circle, LinearGradient, Path, Rect, Skia, rect, vec } from '@shopify/react-native-skia';
import { assets, colors } from '@/theme';
import { Text } from '../Text';
import { styles } from './styles';

const STEP = 64;
const OUTER = 32;
const RING = 28;
const STROKE = 8;

export interface StepIndicatorProps {
  index: number;
  total: number;
  value: number;
}

export const StepIndicator = ({ index, total, value }: StepIndicatorProps) => {
  const [height, setHeight] = useState(0);
  const onLayout = (e: LayoutChangeEvent) => setHeight(e.nativeEvent.layout.height);

  const fill = Math.max(0, Math.min(1, value - index));
  const status = fill >= 1 ? 'completed' : fill > 0 ? 'active' : 'locked';

  const cx = STEP / 2;
  const cy = height / 2;
  const hasTop = index > 0;
  const hasBottom = index < total - 1;
  const bottomComplete = value >= index + 1;
  const bottomActive = !bottomComplete && value > index;

  const arc = Skia.Path.Make();
  arc.addArc(rect(cx - RING, cy - RING, RING * 2, RING * 2), -90, fill * 360);

  return (
    <View style={styles.col} onLayout={onLayout}>
      <Canvas style={[styles.canvas, { height }]}>
        {hasTop && (
          <Rect
            x={cx - STROKE / 2}
            y={0}
            width={STROKE}
            height={cy}
            color={value >= index ? colors.progressGreen : colors.timelineGray}
          />
        )}

        {hasBottom && bottomComplete && (
          <Rect x={cx - STROKE / 2} y={cy} width={STROKE} height={cy} color={colors.progressGreen} />
        )}
        {hasBottom && bottomActive && (
          <Rect x={cx - STROKE / 2} y={cy} width={STROKE} height={cy}>
            <LinearGradient
              start={vec(0, cy)}
              end={vec(0, height)}
              colors={[colors.progressGreen, colors.timelineGray]}
            />
          </Rect>
        )}
        {hasBottom && !bottomComplete && !bottomActive && (
          <Rect x={cx - STROKE / 2} y={cy} width={STROKE} height={cy} color={colors.timelineGray} />
        )}

        {status === 'completed' && (
          <>
            <Circle cx={cx} cy={cy} r={OUTER} color={colors.progressGreen} />
            <Circle cx={cx} cy={cy} r={24} color={colors.white} />
            <Circle cx={cx} cy={cy} r={20} color={colors.progressGreen} />
          </>
        )}

        {status === 'active' && (
          <>
            <Circle cx={cx} cy={cy} r={OUTER} color={colors.white} />
            <Circle cx={cx} cy={cy} r={RING} color={colors.timelineGray} style="stroke" strokeWidth={STROKE} />
            <Path path={arc} color={colors.progressGreen} style="stroke" strokeWidth={STROKE} strokeCap="round" />
            <Circle cx={cx} cy={cy} r={22} color={colors.lightBlue} />
          </>
        )}

        {status === 'locked' && (
          <>
            <Circle cx={cx} cy={cy} r={OUTER} color={colors.white} />
            <Circle cx={cx} cy={cy} r={RING} color={colors.timelineGray} style="stroke" strokeWidth={STROKE} />
            <Circle cx={cx} cy={cy} r={21} color={colors.timelineGray} style="stroke" strokeWidth={1.5} />
          </>
        )}
      </Canvas>

      <View style={styles.center} pointerEvents="none">
        {status === 'completed' ? (
          <assets.RightIcon width={22} height={18} />
        ) : (
          <Text text={`${index + 1}`} style={status === 'locked' ? styles.numberLocked : styles.number} />
        )}
      </View>
    </View>
  );
};
