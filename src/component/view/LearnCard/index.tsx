import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Ionicons as Icon } from '@expo/vector-icons';
import { GlassView } from '@/component/ui/GlassView';
import { Text } from '@/component/ui/Text';
import { LearnCard as LearnCardData } from '@/data/learn';
import { assets, colors } from '@/theme';
import { styles } from './styles';

type Props = {
  card: LearnCardData;
  onStart: () => void;
};

export const LearnCard = memo(({ card, onStart }: Props) => {
  const { theme } = useUnistyles();
  const Illustration = assets[card.illustration];

  return (
    <View style={[styles.card, { backgroundColor: card.bg }]}>
      <assets.BackgroundVector
        style={styles.bgVector}
        width={theme.rw(450)}
        color={colors.white17}
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
        <GlassView style={StyleSheet.absoluteFill} borderRadius={64} intensity={21} tint={theme.colors.white84} />
        <Text tx="learnSection:startLearning" style={styles.startText} />
        <View style={styles.playCircle}>
          <Icon name="play" size={14} color={colors.white} style={styles.playIcon} />
        </View>
      </Pressable>
    </View>
  );
});

LearnCard.displayName = 'LearnCard';
