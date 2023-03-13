import {StyleSheet, Text, View, Image, Animated} from 'react-native';

import React, {useEffect} from 'react';
import {useState} from 'react';

const SplashScreen = ({children}) => {
  const [splashtimePassed, setsplashtimePassed] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(1));
  useEffect(() => {
    const timer1 = setTimeout(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1800);

    const timer2 = setTimeout(() => {
      setsplashtimePassed(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (splashtimePassed) return children;
  else {
    return (
      <Animated.View style={[styles.container, {opacity: animation}]}>
        <Image
          source={require('../assets/images/splashlogo1.png')}
          style={styles.mainlogo}
        />
        <Image
          source={require('../assets/images/splashlogo2.png')}
          style={styles.footerlogo}
        />
      </Animated.View>
    );
  }
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
