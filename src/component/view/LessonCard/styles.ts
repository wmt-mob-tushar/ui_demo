import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  card: {
    padding: 20,
    borderRadius: 30,
  },
  cardFaded: {
    opacity: 0.5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(16),
    fontWeight: '500',
    lineHeight: theme.rf(19),
    letterSpacing: -0.176,
    color: theme.colors.primary,
    flex: 1,
    paddingRight: 8,
  },
  durationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 16,
  },
  badgeIcon: {
    marginRight: 4,
  },
  durationText: {
    fontFamily: theme.typography.primary.bold,
    fontSize: 12,
    color: theme.colors.primary,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  cardDesc: {
    flex: 1,
    marginRight: 12,
    fontFamily: theme.typography.primary.normal,
    fontSize: theme.rf(12),
    lineHeight: theme.rf(17),
    letterSpacing: -0.132,
    color: theme.colors.ink50,
  },
  playBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: theme.rw(118),
    backgroundColor: theme.colors.white,
    paddingLeft: 16,
    paddingRight: 6,
    paddingVertical: 6,
    borderRadius: 24,
  },
  playBtnText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.typography.primary.bold,
    fontSize: theme.rf(10),
    lineHeight: theme.rf(13),
    letterSpacing: -0.11,
    color: theme.colors.primary,
    marginRight: 8,
  },
  playCircle: {
    width: theme.rf(31),
    height: theme.rf(31),
    borderRadius: theme.rf(16),
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    marginLeft: 2,
  },
}));
