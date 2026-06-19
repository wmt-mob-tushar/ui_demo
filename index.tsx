import 'react-native-gesture-handler';
import './src/theme/unistyles';
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App)
// and sets up the environment for both Expo Go and native builds.
registerRootComponent(App);
