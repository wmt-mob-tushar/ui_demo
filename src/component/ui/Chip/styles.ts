import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: theme.rf(44),
    gap: theme.rf(8),
    paddingVertical: theme.rf(5),
    paddingLeft: theme.rf(8),
    paddingRight: theme.rf(5),
    borderRadius: theme.rf(22),
  },
  chipNoIcon: {
    paddingLeft: theme.rf(16),
    paddingRight: theme.rf(16),
  },
  chipActive: {
    backgroundColor: theme.colors.primary,
  },
  chipInactive: {
    backgroundColor: theme.colors.transparent,
    borderWidth: 1.5,
    borderColor: theme.colors.primary12,
  },
  icon: {
    width: theme.rf(30),
    height: theme.rf(30),
    borderRadius: theme.rf(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surfaceCool,
  },
  label: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(12),
    fontWeight: '500',
    lineHeight: theme.rf(18),
    letterSpacing: -0.132,
    textAlign: 'center',
    color: theme.colors.primary,
  },
  labelActive: {
    color: theme.colors.white,
  },
  count: {
    width: theme.rf(34),
    height: theme.rf(34),
    borderRadius: theme.rf(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  countActive: {
    backgroundColor: theme.colors.white,
  },
  countInactive: {
    backgroundColor: theme.colors.primary08,
  },
  countText: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(12),
    fontWeight: '500',
    lineHeight: theme.rf(18),
    letterSpacing: -0.132,
    textAlign: 'center',
    color: theme.colors.primary50,
  },
  countTextActive: {
    color: theme.colors.primary,
  },
}));
