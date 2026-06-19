import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    width: '100%',
    position: 'relative',
  },
  tapTarget: {
    position: 'absolute',
    top: 0,
  },
  tooltip: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(99, 110, 138, 0.62)',
  },
  tooltipText: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: -0.099,
    color: theme.colors.white,
  },
  dayLabel: {
    position: 'absolute',
    textAlign: 'center',
    fontFamily: theme.typography.primary.medium,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.132,
    color: theme.colors.primary,
  },
}));
