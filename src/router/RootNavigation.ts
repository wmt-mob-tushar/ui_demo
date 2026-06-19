import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from './navigationTypes';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as any, params as any);
  }
}

export function resetRoot(name: keyof RootStackParamList) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name }],
      }),
    );
  }
}
