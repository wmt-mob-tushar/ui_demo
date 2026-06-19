import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '@/theme';
import Authenticated from './Authenticated';
import { navigationRef } from './RootNavigation';
import { RootStackParamList } from './navigationTypes';
import UnAuthenticated from './UnAuthenticated';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.tint,
    background: colors.background,
    card: colors.background,
    text: colors.text,
    border: colors.separator,
  },
};

const Navigator = () => (
  <NavigationContainer ref={navigationRef} theme={navTheme}>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="UnAuthenticated">
      <Stack.Screen name="UnAuthenticated" component={UnAuthenticated} />
      <Stack.Screen name="Authenticated" component={Authenticated} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
