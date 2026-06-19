import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Screen, Text } from '@/component';
import { useAppDispatch, useAppSelector } from '@/reduxToolkit/hooks';
import { logout } from '@/reduxToolkit/rootSlice';
import { resetRoot } from '@/router/RootNavigation';
import { colors } from '@/theme';
import { styles } from './styles';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.app);

  const onLogout = () => {
    dispatch(logout());
    resetRoot('UnAuthenticated');
  };

  return (
    <Screen>
      <Text preset="heading" tx="profileScreen:title" />
      <Text
        preset="default"
        text={user?.email ?? ''}
        color={colors.textDim}
        style={styles.email}
      />
      <View style={styles.footer}>
        <Button tx="settingsScreen:title" variant="outline" onPress={() => navigation.navigate('Settings')} />
        <Button tx="common:logOut" variant="outline" onPress={onLogout} />
      </View>
    </Screen>
  );
};

export default Profile;
