import { StyleSheet } from 'react-native-unistyles';

export const tabStyles = StyleSheet.create(theme => ({
  // Floating wrapper — centers the pill, sits above the safe area.
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    padding: 5,
    borderRadius: 40,
    backgroundColor: '#F4F3F3',
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: theme.colors.primary,
  },
  buttonInactive: {
    backgroundColor: theme.colors.white,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
}));
