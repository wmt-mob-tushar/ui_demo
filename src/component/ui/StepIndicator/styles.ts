import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  col: {
    width: 64,
  },
  canvas: {
    width: 64,
  },
  center: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontFamily: theme.typography.primary.bold,
    fontSize: 18,
    color: theme.colors.primary,
  },
  numberLocked: {
    fontFamily: theme.typography.primary.bold,
    fontSize: 18,
    color: 'rgba(28, 39, 76, 0.4)',
  },
}));
