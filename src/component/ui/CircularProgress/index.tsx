import { View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import Svg, { Circle } from 'react-native-svg';
import { Text } from '../Text';

export interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  progress: number;
  color: string;
  backgroundColor: string;
  showText?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

export const CircularProgress = ({
  size,
  strokeWidth,
  progress,
  color,
  backgroundColor,
  showText = true,
  textStyle,
  style,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          originX={size / 2}
          originY={size / 2}
          rotation={-90}
          scaleX={-1}
        />
      </Svg>
      {showText && (
        <View style={StyleSheet.absoluteFill}>
          <View style={styles.textWrapper}>
            <Text text={`${progress}%`} style={[styles.text, textStyle]} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
