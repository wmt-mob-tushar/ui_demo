import { FC, useEffect } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { useUnistyles } from 'react-native-unistyles';
import { Text } from '@/component/ui/Text';
import { OnboardSlide } from '@/data/onboarding';
import { assets, colors } from '@/theme';
import { styles } from './styles';

// Figma geometry per stack slot (393×852 frame) — constant across cards.
const SLOT_SPECS = [
  { w: 340.068, h: 311.085, left: 23.3, top: 351.9, rot: 1.71, radius: 24 },
  { w: 270.422, h: 179.664, left: 46, top: 292, rot: -7.47, radius: 20 },
  { w: 200.383, h: 133.131, left: 101.61, top: 244, rot: 7.95, radius: 20 },
];
const ILLO_SPEC = { w: 211.417, h: 227, left: 170, top: 461 };
const DECO_SPEC = { w: 364.96968, h: 214.9235, left: -33, top: 452, rot: 46.1 };

const SLOT_COUNT = SLOT_SPECS.length;
const INPUT = [0, 1, 2];
const SPRING = { damping: 18, stiffness: 200, mass: 0.8 } as const;
const FLY_MS = 260;

export type DeckGeom = {
  W: number[];
  H: number[];
  L: number[];
  T: number[];
  ROT: number[];
  RAD: number[];
};

/** Scaled deck geometry (slot transforms + illustration/bg-vector placement). */
export const useDeckGeometry = () => {
  const { theme } = useUnistyles();
  const baseTop = SLOT_SPECS[SLOT_COUNT - 1].top;

  const geom: DeckGeom = {
    W: SLOT_SPECS.map(s => theme.rw(s.w)),
    H: SLOT_SPECS.map(s => theme.rh(s.h)),
    L: SLOT_SPECS.map(s => theme.rw(s.left)),
    T: SLOT_SPECS.map(s => theme.rh(s.top - baseTop)),
    ROT: SLOT_SPECS.map(s => -s.rot),
    RAD: SLOT_SPECS.map(s => theme.rf(s.radius)),
  };
  const illo = {
    w: theme.rw(ILLO_SPEC.w),
    h: theme.rh(ILLO_SPEC.h),
    left: theme.rw(ILLO_SPEC.left - SLOT_SPECS[0].left),
    top: theme.rh(ILLO_SPEC.top - SLOT_SPECS[0].top),
  };
  const deco = {
    w: theme.rw(DECO_SPEC.w),
    h: theme.rh(DECO_SPEC.h),
    left: theme.rw(DECO_SPEC.left - SLOT_SPECS[0].left),
    top: theme.rh(DECO_SPEC.top - SLOT_SPECS[0].top),
    rotate: theme.rotation(DECO_SPEC.rot),
  };

  return { geom, illo, deco };
};

export interface DeckCardProps {
  slide: OnboardSlide;
  slideIndex: number;
  slideCount: number;
  slot: number;
  front: boolean;
  Illustration: FC<SvgProps>;
  onSwipe: () => void;
}

export const DeckCard = ({
  slide,
  slideIndex,
  slideCount,
  slot,
  front,
  Illustration,
  onSwipe,
}: DeckCardProps) => {
  const { width: screenW } = useWindowDimensions();
  const { geom, illo, deco } = useDeckGeometry();

  const pos = useSharedValue(slot);
  const tx = useSharedValue(0);
  const ty = useSharedValue(0);
  const op = useSharedValue(1);

  useEffect(() => {
    pos.value = withSpring(slot, SPRING);
  }, [slot, pos]);

  const pan = Gesture.Pan()
    .enabled(front)
    .onUpdate(e => {
      tx.value = e.translationX;
      ty.value = e.translationY * 0.3;
    })
    .onEnd(e => {
      const flung = Math.abs(e.translationX) > screenW * 0.22 || Math.abs(e.velocityX) > 600;
      if (flung) {
        const dir = e.translationX >= 0 ? 1 : -1;
        scheduleOnRN(onSwipe);
        op.value = withTiming(0, { duration: FLY_MS });
        ty.value = withTiming(0, { duration: FLY_MS });
        tx.value = withTiming(dir * screenW * 1.25, { duration: FLY_MS }, finished => {
          if (finished) {
            tx.value = 0;
            op.value = withTiming(1, { duration: 200 });
          }
        });
      } else {
        tx.value = withSpring(0, SPRING);
        ty.value = withSpring(0, SPRING);
      }
    });

  const cardStyle = useAnimatedStyle(() => {
    const s = pos.value;
    return {
      width: interpolate(s, INPUT, geom.W, Extrapolation.CLAMP),
      height: interpolate(s, INPUT, geom.H, Extrapolation.CLAMP),
      borderRadius: interpolate(s, INPUT, geom.RAD, Extrapolation.CLAMP),
      opacity: op.value,
      zIndex: Math.round(interpolate(s, INPUT, [30, 20, 10], Extrapolation.CLAMP)),
      transform: [
        { translateX: interpolate(s, INPUT, geom.L, Extrapolation.CLAMP) + tx.value },
        { translateY: interpolate(s, INPUT, geom.T, Extrapolation.CLAMP) + ty.value },
        { rotate: `${interpolate(s, INPUT, geom.ROT, Extrapolation.CLAMP) + (tx.value / screenW) * 8}deg` },
      ],
    };
  });

  const frontStyle = useAnimatedStyle(() => ({
    opacity: interpolate(pos.value, [0, 0.6], [1, 0], Extrapolation.CLAMP),
  }));
  const backStyle = useAnimatedStyle(() => ({
    opacity: interpolate(pos.value, [0.5, 1], [0, 1], Extrapolation.CLAMP),
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.card, { backgroundColor: slide.bg }, cardStyle]}>
        <Animated.View style={[styles.decoClip, frontStyle]} pointerEvents="none">
          <assets.BackgroundVector
            width={deco.w}
            height={deco.h}
            color={colors.white41}
            style={[styles.deco, { left: deco.left, top: deco.top, transform: [{ rotate: deco.rotate }] }]}
          />
        </Animated.View>

        <Animated.View
          style={[styles.cardFront, frontStyle]}
          pointerEvents={front ? 'box-none' : 'none'}>
          <Text text={slide.label} numberOfLines={1} style={styles.cardTitle} />
          <View style={styles.pill}>
            <Text text={slide.pill} style={styles.pillText} />
          </View>
          <Text text={slide.desc} style={styles.cardDesc} />
          <View style={styles.dots}>
            {Array.from({ length: slideCount }).map((_, di) => (
              <View key={di} style={[styles.dot, di === slideIndex && styles.dotActive]} />
            ))}
          </View>

          <View style={styles.star} pointerEvents="none">
            <assets.StarSvg width={26} height={26} />
          </View>

          <View
            style={[styles.illoWrap, { left: illo.left, top: illo.top, width: illo.w, height: illo.h }]}
            pointerEvents="none">
            <Illustration width="100%" height="100%" />
          </View>
        </Animated.View>

        <Animated.View style={[styles.cardBack, backStyle]} pointerEvents="none">
          <Text
            text={`${slide.label} ${slide.pill}`}
            numberOfLines={2}
            style={styles.backCardTitle}
          />
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};
