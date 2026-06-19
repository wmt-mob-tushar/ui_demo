import { StyleSheet } from 'react-native-unistyles';

export const $styles = StyleSheet.create(theme => ({
  row: { flexDirection: 'row' },
  flex1: { flex: 1 },
  flexWrap: { flexWrap: 'wrap' },
  container: {
    paddingTop: theme.spacing.lg + theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
  },
}));
