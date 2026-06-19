import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lesson from '@/screens/Authenticated/Lesson';
import Settings from '@/screens/Authenticated/Settings';
import { AuthStackParamList } from './navigationTypes';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const Authenticated = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen name="Lesson" component={Lesson} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

export default Authenticated;
