import { Pressable, View } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Text } from '@/component/ui/Text';
import { TxKeyPath } from '@/i18n';
import { assets, colors } from '@/theme';
import { styles } from './styles';

export interface LessonCardProps {
  titleTx: TxKeyPath;
  descTx: TxKeyPath;
  duration: string;
  bg: string;
  buttonTx: TxKeyPath;
  disabled?: boolean;

  onPress?: () => void;
}

export const LessonCard = ({
  titleTx,
  descTx,
  duration,
  bg,
  buttonTx,
  disabled,

  onPress,
}: LessonCardProps) => (
  <View style={[styles.card, { backgroundColor: bg }]}>
    <View style={styles.cardHeader}>
      <Text tx={titleTx} style={styles.cardTitle} />
      <View style={styles.durationBadge}>
        <assets.WatchIcon width={13} height={13} style={styles.badgeIcon} />
        <Text text={duration} style={styles.durationText} />
      </View>
    </View>

    <View style={styles.cardBody}>
      <Text tx={descTx} numberOfLines={2} style={styles.cardDesc} />
      <Pressable style={styles.playBtn} disabled={disabled} onPress={onPress}>
        <Text tx={buttonTx} style={styles.playBtnText} />
        <View style={styles.playCircle}>
          <Icon name="play" size={12} color={colors.white} style={styles.playIcon} />
        </View>
      </Pressable>
    </View>
  </View>
);
