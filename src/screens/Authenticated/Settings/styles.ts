import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  sectionLabel: {
    marginTop: theme.spacing.lg,
  },
  list: {
    marginTop: theme.spacing.sm,
  },
  row: {
    minHeight: 52,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.spacing.xs,
    marginTop: theme.spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  rowActive: {
    backgroundColor: theme.colors.tint,
    borderColor: theme.colors.tint,
  },
  rowInactive: {
    backgroundColor: theme.colors.neutral100,
    borderColor: theme.colors.border,
  },
}));
