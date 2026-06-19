import { useCallback, useState } from 'react';
import { Image, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Button, DeckCard, Screen, Text } from '@/component';
import { resetRoot } from '@/router/RootNavigation';
import { onboardingSlides } from '@/data/onboarding';
import { assets } from '@/theme';
import { styles } from './styles';

const Onboarding = () => {
  const { theme } = useUnistyles();

  const [order, setOrder] = useState(() => onboardingSlides.map((_, i) => i));

  const advance = useCallback(() => {
    setOrder(prev => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }, []);

  const goHome = useCallback(() => resetRoot('Authenticated'), []);

  return (
    <Screen contentContainerStyle={styles.screen}>
      <View style={styles.root}>
        <assets.BackgroundVector
          width={theme.rw(828.193)}
          height={theme.rh(487.707)}
          color="#E4EAF1"
          style={styles.bgVector}
          pointerEvents="none"
        />

        <View style={styles.logo}>
          <View style={styles.logoCircle}>
            <assets.BookLogo width={theme.rf(50)} height={theme.rf(30)} />
          </View>
          <Text text="SmartLearn" style={styles.brand} />
        </View>

        <View style={styles.stack}>
          {order.map((slideIndex, slot) => (
            <DeckCard
              key={onboardingSlides[slideIndex].key}
              slide={onboardingSlides[slideIndex]}
              slideIndex={slideIndex}
              slideCount={onboardingSlides.length}
              slot={slot}
              front={slot === 0}
              Illustration={assets.OnboardingIllustrate}
              onSwipe={advance}
            />
          ))}

          <View
            style={[
              styles.bulbAnchor
            ]}
            pointerEvents="none">
            <View style={styles.bulb}>
              <Image source={assets.Bulb} style={styles.bulbIcon} resizeMode="contain" />
            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <Button text="Sign up" variant="fill" style={styles.btn} onPress={goHome} />
          <Button text="Log in" variant="outline" style={styles.btn} onPress={goHome} />
        </View>
      </View>
    </Screen>
  );
};

export default Onboarding;
