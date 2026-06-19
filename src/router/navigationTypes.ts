import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainTabParamList = {
  Home: undefined;
  Learn: undefined;
  Stats: undefined;
  Profile: undefined;
};

// Authenticated stack — the bottom-tab shell plus screens pushed over it.
export type AuthStackParamList = {
  BottomTabs: NavigatorScreenParams<MainTabParamList> | undefined;
  Lesson: { lessonId?: string } | undefined;
  Settings: undefined;
};

export type UnAuthStackParamList = {
  Onboarding: undefined;
};

export type RootStackParamList = {
  UnAuthenticated: undefined;
  Authenticated: NavigatorScreenParams<AuthStackParamList> | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

export type UnAuthStackScreenProps<T extends keyof UnAuthStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<UnAuthStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  AuthStackScreenProps<keyof AuthStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        AuthStackParamList,
        MainTabParamList,
        UnAuthStackParamList {}
  }
}
