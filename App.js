import {StyleSheet} from 'react-native';

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';

import {useSelector} from 'react-redux';
import KeyboardDismiss from './src/components/KeyboardDismiss';

import SplashScreen from './src/screens/SplashScreen';
import Dummy from './src/screens/Dummy';

const App = () => {
  const initialState = useSelector(state => state.navigation.navigationState);
  //return <Dummy />;
  return (
    <SplashScreen>
      <KeyboardDismiss>
        <NavigationContainer initialState={initialState}>
          <AuthStack />
        </NavigationContainer>
      </KeyboardDismiss>
    </SplashScreen>
  );
};

export default App;

const styles = StyleSheet.create({});
