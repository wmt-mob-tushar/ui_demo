import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '@/screens/UnAuthenticated/Onboarding';
import { UnAuthStackParamList } from './navigationTypes';

const Stack = createNativeStackNavigator<UnAuthStackParamList>();

const UnAuthenticated = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
  </Stack.Navigator>
);

export default UnAuthenticated;
