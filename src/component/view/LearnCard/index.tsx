import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { BlurView } from 'expo-blur';
import { useUnistyles } from 'react-native-unistyles';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Text } from '@/component/ui/Text';
import { LearnCard as LearnCardData } from '@/data/learn';
import { assets, colors } from '@/theme';
import { styles } from './styles';

type Props = {
  card: LearnCardData;
  last: boolean;
  onStart: () => void;
};

export const LearnCard = ({ card, last, onStart }: Props) => {
  const { theme } = useUnistyles();
  const Illustration = assets[card.illustration];

  return (
    <View style={[styles.card, { backgroundColor: card.bg, marginRight: last ? 0 : theme.rw(10) }]}>
      <assets.BackgroundVector
        style={styles.bgVector}
        width={theme.rw(364.97)}
        height={theme.rh(214.92)}
        color={colors.white29}
        pointerEvents="none"
      />

      <View style={styles.topRow}>
        <View style={styles.iconCircle}>
          <Icon name={card.icon} size={26} color={colors.primary} />
        </View>
        <View style={styles.metaRow}>
          <View style={styles.metaPill}>
            <Icon name="book-outline" size={12} color={colors.primary50} />
            <Text text={`${card.lessons} lessons`} style={styles.metaText} />
          </View>
          <View style={styles.metaPill}>
            <Icon name="time-outline" size={12} color={colors.primary50} />
            <Text text={`${card.minutes} min`} style={styles.metaText} />
          </View>
        </View>
      </View>

      <Text text={card.categoryLabel} style={styles.category} />
      <Text text={card.title} numberOfLines={2} style={styles.title} />

      <View
        style={[
          styles.illoWrap,
          { left: theme.rw(100), top: theme.rh(135), width: theme.rw(144.54), height: theme.rh(145.34) },
        ]}
        pointerEvents="none">
        <Illustration width="100%" height="100%" />
      </View>

      <Pressable style={styles.startBtn} onPress={onStart}>
        <BlurView
          style={StyleSheet.absoluteFill}
          tint="light"
          intensity={20}
        />
        <Svg style={StyleSheet.absoluteFill}>
          <Defs>
            <LinearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0.27" stopColor={colors.white} stopOpacity={0.8} />
              <Stop offset="0.85" stopColor={colors.white} stopOpacity={0.32} />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#glass)" />
        </Svg>
        <Text tx="learnSection:startLearning" style={styles.startText} />
        <View style={styles.playCircle}>
          <Icon name="play" size={14} color={colors.white} style={styles.playIcon} />
        </View>
      </Pressable>
    </View>
  );
};
