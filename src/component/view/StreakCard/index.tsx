import { useState } from 'react';
import { View, Pressable, LayoutChangeEvent } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Text } from '@/component/ui/Text';
import { assets, colors } from '@/theme';
import { styles } from './styles';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface StreakCardProps {
  streak?: number;
  total?: number;
  /** Current day index (0 = Mon). Defaults to today. */
  current?: number;
}

export const StreakCard = ({ streak = 3822, total = 5000, current }: StreakCardProps) => {
  const cur = current ?? (new Date().getDay() + 6) % 7;
  const [trackW, setTrackW] = useState(0);
  const [showTip, setShowTip] = useState(true);
  const onTrackLayout = (e: LayoutChangeEvent) => setTrackW(e.nativeEvent.layout.width);

  const slotW = trackW / DAYS.length;
  const fillW = slotW * cur + slotW / 2;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text tx="streakCard:title" style={styles.title} />
        <View style={styles.badge}>
          <Text text={`${streak}`} style={styles.badgeNum} />
          <Text text={`/${total}`} style={styles.badgeTotal} />
        </View>
      </View>

      <View style={styles.trackWrap}>
        <View style={styles.track} onLayout={onTrackLayout}>
          <View style={[styles.fill, { width: fillW }]} />
          {DAYS.slice(0, cur).map((d, i) => (
            <View key={d} style={[styles.tick, { left: slotW * i + slotW / 2 }]} />
          ))}
        </View>
        {trackW > 0 && (
          <View style={[styles.fireCircle, { left: slotW * cur + slotW / 2 - 23.5 }]}>
            <assets.FireIcon width={20} height={20} />
          </View>
        )}
      </View>

      <View style={styles.daysRow}>
        {DAYS.map((d, i) => (
          <Text key={d} text={d} style={[styles.dayLabel, i < cur ? styles.dayDone : styles.dayTodo]} />
        ))}
      </View>

      {showTip && (
        <View style={styles.tip}>
          <assets.RobotSvg width={26} height={26} />
          <Text tx="streakCard:tip" style={styles.tipText} />
          <Pressable hitSlop={8} onPress={() => setShowTip(false)}>
            <Icon name="close" size={16} color={colors.primary50} />
          </Pressable>
        </View>
      )}
    </View>
  );
};
