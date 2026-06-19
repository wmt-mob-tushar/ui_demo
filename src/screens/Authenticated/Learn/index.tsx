import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Screen, Text } from '@/component';
import { styles } from './styles';

const Learn = () => {
  const navigation = useNavigation();

  return (
    <Screen scroll>
      <Text preset="heading" tx="tabs:learn" />
      <Text preset="default" tx="lessonsScreen:subtitle" style={styles.subtitle} />
      <View style={styles.action}>
        <Button tx="homeScreen:viewDetails" onPress={() => navigation.navigate('Lesson')} />
      </View>
    </Screen>
  );
};

export default Learn;
