import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  base: {
    borderRadius: theme.spacing.xs,
    paddingVertical: 18,
    paddingHorizontal: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    backgroundColor: theme.colors.tint,
  },
  outline: {
    backgroundColor: theme.colors.transparent,
    borderWidth: 1,
    borderColor: theme.colors.tint,
  },
  disabled: {
    opacity: 0.6,
  },
  label: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.176,
    textAlign: 'center',
    color: theme.colors.neutral100,
  },
  labelOutline: {
    color: theme.colors.tint,
  },
}));
