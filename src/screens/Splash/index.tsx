import { Image, View } from 'react-native';
import { styles } from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/app-icon/adaptive-foreground.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;
