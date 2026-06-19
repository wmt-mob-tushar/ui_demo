import { ReactNode } from 'react';
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export interface ScreenProps {
  children: ReactNode;
  scroll?: boolean;
  safeAreaEdges?: Edge[];
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const Screen = (props: ScreenProps) => {
  const {
    children,
    scroll = false,
    safeAreaEdges = ['top', 'bottom'],
    style,
    contentContainerStyle,
  } = props;

  return (
    <SafeAreaView edges={safeAreaEdges} style={[styles.container, style]}>
      {scroll ? (
        <ScrollView contentContainerStyle={[styles.content, contentContainerStyle]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, contentContainerStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
};
