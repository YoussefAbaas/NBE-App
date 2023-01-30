import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack';
import {LogBox} from 'react-native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import KeyboardDismiss from './src/components/KeyboardDismiss';

const App = () => {
  LogBox.ignoreLogs([
    'AsyncStorage has been extracted from react-native core and will be removed in a future release',
  ]);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardDismiss>
          <AuthStack />
        </KeyboardDismiss>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
