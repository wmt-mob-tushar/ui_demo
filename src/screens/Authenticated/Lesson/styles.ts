import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme, rt) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  bottomFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: theme.rh(140),
  },
  listContent: {
    paddingBottom: 48,
  },
  header: {
    backgroundColor: theme.colors.mint,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 19,
  },
  bgArc: {
    position: 'absolute',
    left: rt.screen.width * 0.4,
    transform: [{ rotate: '-10deg' }]
  },
  backBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  lettersLabel: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 14,
    color: '#8A91D0',
    letterSpacing: 0.5,
    marginTop: 18,
  },
  title: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 30,
    letterSpacing: -0.275,
    color: theme.colors.primary,
    marginTop: 4,
    maxWidth: '60%',
  },
  capsuleRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  capsule: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  capsuleIcon: {
    marginRight: 5,
  },
  capsuleText: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: -0.11,
    color: theme.colors.primary,
  },
  illustration: {
    position: 'absolute',
    right: -16,
    bottom: 0,
  },


  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 32,
    marginTop: 22,
    backgroundColor: theme.colors.white84,
    
  },
  bannerTextCol: {
    flex: 1,
  },
  bannerSubtitle: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 11,
    color: 'rgba(28, 39, 76, 0.5)',
  },
  bannerTitle: {
    fontFamily: theme.typography.primary.bold,
    fontSize: 15,
    color: theme.colors.primary,
    marginTop: 2,
  },
  bannerRing: {
    position: 'absolute',
    right: 16,
  },
  ringCircle: {
   padding: 4,
    borderRadius: 100,
    backgroundColor: theme.colors.white50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.black,
  },

  // ---- Lesson list rows ----
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  // ---- Card ----
  cardCol: {
    flex: 1,
    marginLeft: 14,
    paddingBottom: 8,
  },
}));
