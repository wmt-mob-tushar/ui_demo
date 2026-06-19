import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Home from '@/screens/Authenticated/Home';
import Learn from '@/screens/Authenticated/Learn';
import Stats from '@/screens/Authenticated/Stats';
import Profile from '@/screens/Authenticated/Profile';
import { MainTabParamList } from './navigationTypes';
import { BottomTabBar } from './BottomTabBar';

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderTabBar = (props: BottomTabBarProps) => <BottomTabBar {...props} />;

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Learn" component={Learn} />
    <Tab.Screen name="Stats" component={Stats} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default BottomTabs;
