import {StyleSheet} from 'react-native';

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import {LogBox} from 'react-native';

import {Provider, useSelector} from 'react-redux';
import KeyboardDismiss from './src/components/KeyboardDismiss';
import {useState} from 'react';

import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const initialState = useSelector(state => state.navigation.navigationState);
  const [splashtimePassed, setsplashtimePassed] = useState(false);

  setTimeout(() => {
    setsplashtimePassed(true);
  }, 1500);
  if (!splashtimePassed) return <SplashScreen />;
  return (
    <KeyboardDismiss>
      <NavigationContainer initialState={initialState}>
        <AuthStack />
      </NavigationContainer>
    </KeyboardDismiss>
  );

  /*return <Dummy />;*/
};

export default App;

const styles = StyleSheet.create({});
