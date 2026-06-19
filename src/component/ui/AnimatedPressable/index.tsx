import React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const AnimatedComponent = Animated.createAnimatedComponent(Pressable);

export interface AnimatedPressableProps extends PressableProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  scaleTo?: number;
}

export const AnimatedPressable = ({
  children,
  style,
  scaleTo = 0.96,
  ...props
}: AnimatedPressableProps) => {
  const scale = useSharedValue(1);

  const onPressIn = (e: any) => {
    scale.value = withSpring(scaleTo);
    props.onPressIn?.(e);
  };

  const onPressOut = (e: any) => {
    scale.value = withSpring(1);
    props.onPressOut?.(e);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedComponent
      {...props}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[style, animatedStyle]}
    >
      {children}
    </AnimatedComponent>
  );
};
