import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splashlogo1.png')}
        style={styles.mainlogo}
      />
      <Image
        source={require('../assets/images/splashlogo2.png')}
        style={styles.footerlogo}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C2437',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerlogo: {
    position: 'absolute',
    bottom: 50,
  },
});
