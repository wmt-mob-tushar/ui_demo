import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native-unistyles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { changeLanguage, initI18n } from '@/i18n';
import { useAppSelector } from '@/reduxToolkit/hooks';
import { persistor, store } from '@/reduxToolkit/store';
import Navigator from '@/router';
import Splash from '@/screens/Splash';

const Root = () => {
  const [ready, setReady] = useState(false);
  const language = useAppSelector(state => state.app.language);

  const [fontsLoaded] = useFonts({
    'Inter18pt-Regular': require('./assets/fonts/Inter18pt-Regular.ttf'),
    'Inter18pt-Medium': require('./assets/fonts/Inter18pt-Medium.ttf'),
    'Inter18pt-Bold': require('./assets/fonts/Inter18pt-Bold.ttf'),
  });

  // Subscribe to i18next's languageChanged so the whole tree re-renders
  // AFTER changeLanguage() resolves — keeps every translate() call in sync.
  useTranslation();

  useEffect(() => {
    initI18n().then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready) {
      changeLanguage(language);
    }
  }, [language, ready]);

  if (!ready || !fontsLoaded) {
    return <Splash />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Splash />} persistor={persistor}>
      <GestureHandlerRootView style={styles.root}>
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </PersistGate>
  </Provider>
);

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export default App;
