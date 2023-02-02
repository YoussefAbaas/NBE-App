import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
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
    <KeyboardDismiss>
      <Provider store={store}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </Provider>
    </KeyboardDismiss>
  );
};

export default App;

const styles = StyleSheet.create({});
