import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  content: {
    padding: 16,
    paddingBottom: 120,
  },
  screenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  screenTitle: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 26,
    fontWeight: '500',
    letterSpacing: -0.286,
    color: theme.colors.primary,
  },
  bellBtn: {
    width: 48,
    height: 48,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F5F7',
  },
  card: {
    backgroundColor: '#E5F2F9',
    borderRadius: 32,
    padding: 20,
    marginTop: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 26,
    fontWeight: '500',
    letterSpacing: -0.286,
    color: theme.colors.primary,
    flexShrink: 1,
  },
  subtitle: {
    fontFamily: theme.typography.primary.normal,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.132,
    color: theme.colors.primary50,
    marginTop: 8,
  },

  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minWidth: 116,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 18,
    backgroundColor: theme.colors.white,
  },
  dropdownText: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 12,
    letterSpacing: -0.132,
    color: theme.colors.primary,
  },
  chipsRow: {
    gap: 10,
    paddingTop: 14,
    paddingBottom: 6,
    paddingRight: 4,
  },
  chip: {
    paddingHorizontal: 22,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActive: {
    backgroundColor: theme.colors.primary,
  },
  chipInactive: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.primary12,
  },
  chipText: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.132,
    textAlign: 'center',
    color: theme.colors.primary,
  },
  chipTextActive: {
    color: theme.colors.white,
  },
}));
