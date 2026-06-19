import { Pressable, View } from 'react-native';
import { Screen, Text } from '@/component';
import { changeLanguage, languages } from '@/i18n';
import { useAppDispatch, useAppSelector } from '@/reduxToolkit/hooks';
import { setLanguage } from '@/reduxToolkit/rootSlice';
import { colors } from '@/theme';
import { styles } from './styles';

const Settings = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(state => state.app);

  return (
    <Screen scroll>
      <Text preset="heading" tx="settingsScreen:title" />

      <Text preset="label" tx="settingsScreen:language" style={styles.sectionLabel} />
      <View style={styles.list}>
        {languages.map(item => {
          const active = language === item.code;
          return (
            <Pressable
              key={item.code}
              style={[styles.row, active ? styles.rowActive : styles.rowInactive]}
              onPress={() => {
                changeLanguage(item.code);
                dispatch(setLanguage(item.code));
              }}>
              <Text
                text={item.label}
                color={active ? colors.neutral100 : colors.text}
              />
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
};

export default Settings;
