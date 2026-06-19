import { View, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { SvgProps } from 'react-native-svg';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { assets, colors } from '@/theme';
import type { MainTabParamList } from '../navigationTypes';
import { tabStyles } from './styles';

type RouteName = keyof MainTabParamList;
type IconCmp = React.FC<SvgProps>;

// Tabs that are shown but not yet interactive (dimmed, non-tappable).
const DISABLED_TABS: RouteName[] = ['Learn', 'Profile'];

const ICONS: Record<RouteName, { active: IconCmp; inactive: IconCmp }> = {
  Home: { active: assets.HomeFillIcon, inactive: assets.HomeIcon },
  Learn: { active: assets.AiIcon, inactive: assets.AiIcon },
  Stats: { active: assets.ChartFillIcon, inactive: assets.ChartIcon },
  Profile: { active: assets.ProfileIcon, inactive: assets.ProfileIcon },
};

export const BottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[tabStyles.wrapper, { bottom: insets.bottom + 20 }]} pointerEvents="box-none">
      <View style={tabStyles.bar}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const disabled = DISABLED_TABS.includes(route.name as RouteName);
          const variant = ICONS[route.name as RouteName];
          const Icon = focused ? variant.active : variant.inactive;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={{ selected: focused, disabled }}
              disabled={disabled}
              onPress={onPress}
              style={[
                tabStyles.button,
                focused ? tabStyles.buttonActive : tabStyles.buttonInactive,
                disabled && tabStyles.buttonDisabled,
              ]}>
              <Icon width={20} height={20} color={focused ? colors.white : colors.primary} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
