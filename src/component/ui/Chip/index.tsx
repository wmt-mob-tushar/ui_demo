import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '@/component/ui/Text';
import { colors } from '@/theme';
import { IoniconName } from '@/utils';
import { styles } from './styles';

export interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
  count?: string;
  icon?: IoniconName;
  style?: StyleProp<ViewStyle>;
}

export const Chip = ({ label, active = false, onPress, count, icon, style }: ChipProps) => (
  <Pressable
    onPress={onPress}
    style={[
      styles.chip,
      !icon && styles.chipNoIcon,
      active ? styles.chipActive : styles.chipInactive,
      style,
    ]}>
    {icon ? (
      <View style={styles.icon}>
        <Ionicons name={icon} size={17} color={colors.primary} />
      </View>
    ) : null}

    <Text text={label} style={[styles.label, active && styles.labelActive]} />

    {count ? (
      <View style={[styles.count, active ? styles.countActive : styles.countInactive]}>
        <Text text={count} style={[styles.countText, active && styles.countTextActive]} />
      </View>
    ) : null}
  </Pressable>
);
