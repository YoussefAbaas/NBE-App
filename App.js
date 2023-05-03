import {StyleSheet} from 'react-native';

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';

import {useSelector} from 'react-redux';
import KeyboardDismiss from './src/components/KeyboardDismiss';

import SplashScreen from './src/screens/SplashScreen';
import Dummy from './src/screens/Dummy';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryclient = new QueryClient();

const App = () => {
  const initialState = useSelector(state => state.navigation.navigationState);
  /* return (
    <QueryClientProvider client={queryclient}>
      <Dummy />
    </QueryClientProvider>
  );*/
  return (
    <QueryClientProvider client={queryclient}>
      <SplashScreen>
        <KeyboardDismiss>
          <NavigationContainer initialState={initialState}>
            <AuthStack />
          </NavigationContainer>
        </KeyboardDismiss>
      </SplashScreen>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
