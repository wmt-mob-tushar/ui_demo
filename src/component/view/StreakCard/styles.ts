import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  card: {
    backgroundColor: '#F1F1F180',
    borderRadius: 32,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 22,
    fontWeight: '500',
    letterSpacing: -0.242,
    color: theme.colors.primary,
    flexShrink: 1,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF96',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 14,
  },
  badgeNum: {
    fontFamily: theme.typography.primary.bold,
    fontSize: 13,
    color: theme.colors.primary,
  },
  badgeTotal: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 13,
    color: theme.colors.primary40,
  },

  // Progress track
  trackWrap: {
    height: 47,
    justifyContent: 'center',
    marginTop: 18,
  },
  track: {
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EEF1F3',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  fill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 18,
    backgroundColor: 'rgba(129, 167, 56, 0.25)',
  },
  tick: {
    position: 'absolute',
    top: 12,
    width: 2,
    height: 12,
    marginLeft: -1,
    borderRadius: 1,
    backgroundColor: 'rgba(129, 167, 56, 0.6)',
  },
  fireCircle: {
    position: 'absolute',
    top: 0,
    width: 47,
    height: 47,
    borderRadius: 23.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },

  daysRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  dayLabel: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.typography.primary.medium,
    fontSize: 12,
    letterSpacing: -0.132,
  },
  dayDone: {
    color: theme.colors.primary,
  },
  dayTodo: {
    color: theme.colors.primary35,
  },

  // Tip bar
  tip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ECEDF0',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 18,
  },
  tipText: {
    flex: 1,
    fontFamily: theme.typography.primary.normal,
    fontSize: 12,
    color: theme.colors.primary70,
  },
}));
