import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme,rt) => ({
  screen: {
    padding: 0,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: theme.rf(8),
  },
  bgVector: {
    position: 'absolute',
    top: theme.rh(rt.screen.height * -0.12),
    right: theme.rw(rt.screen.width * -0.95),
    opacity: 0.8,
  },

  // ---- Logo ----
  logo: {
    alignItems: 'center',
    marginBottom: theme.rf(20),
  },
  logoCircle: {
    width: theme.rf(100),
    height: theme.rf(100),
    borderRadius: theme.rf(100),
    borderWidth: 12,
    borderColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  brand: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(24),
    fontWeight: '500',
    lineHeight: theme.rf(31),
    letterSpacing: -0.264,
    textAlign: 'center',
    color: theme.colors.primary,
    marginTop: theme.rf(10),
  },

  stack: {
    height: theme.rh(450),
    overflow: 'visible',
  },
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderWidth: 7,
    borderColor: theme.colors.white,
    overflow: 'visible',
  },
  cardFront: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 30,
  },
  cardBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 30,
  },
  illoWrap: {
    position: 'absolute',
  },
  star: {
    position: 'absolute',
    top: theme.rf(-14),
    left: theme.rf(-6),
    zIndex: 5,
  },
  bulbAnchor: {
    position: 'absolute',
    zIndex: 200,
  },
  bulb: {
    position: 'absolute',
    top: theme.rf(-100),
    right: theme.rf(-10),
    zIndex: 5,
  },
  bulbIcon: {
    width: theme.rf(40),
    height: theme.rf(40),
  },
  cardTitle: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(28),
    fontWeight: '500',
    letterSpacing: -0.33,
    color: theme.colors.primary,
  },
  backCardTitle: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(16),
    fontWeight: '500',
    lineHeight: theme.rf(16),
    letterSpacing: -0.176,
    color: theme.colors.primary60,
  },
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: '#6CA2DF',
    borderRadius: theme.rf(32),
    paddingHorizontal: theme.rf(16),
    paddingVertical: theme.rf(6),
    marginTop: theme.rf(8),
  },
  pillText: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(27),
    fontWeight: '500',
    lineHeight: theme.rf(27),
    letterSpacing: -0.297,
    color: theme.colors.white,
  },
  cardDesc: {
    fontFamily: theme.typography.primary.normal,
    fontSize: theme.rf(14),
    lineHeight: theme.rf(18),
    letterSpacing: -0.154,
    color: theme.colors.primary50,
    marginTop: theme.rf(14),
    maxWidth: '56%',
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.rf(6),
    marginTop: theme.rf(16),
  },
  dot: {
    width: theme.rf(8),
    height: theme.rf(8),
    borderRadius: theme.rf(4),
    backgroundColor: theme.colors.primary24,
  },
  dotActive: {
    width: theme.rf(26),
    backgroundColor: theme.colors.primary,
  },
  buttons: {
    marginTop: theme.rf(14),
    paddingHorizontal: theme.rw(32),
    gap: theme.rf(4),
  },
  btn: {
    borderRadius: theme.rf(30),
  },
}));
