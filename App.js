import {AppState, StyleSheet, AsyncStorage} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack';
import {LogBox} from 'react-native';
import {store} from './src/redux/store';
import {Provider, useSelector} from 'react-redux';
import KeyboardDismiss from './src/components/KeyboardDismiss';
import Dummy from './src/screens/Dummy';

const App = () => {
  LogBox.ignoreLogs([
    'AsyncStorage has been extracted from react-native core and will be removed in a future release',
  ]);
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality',
  ]);
  return (
    <Provider store={store}>
      <KeyboardDismiss>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </KeyboardDismiss>
    </Provider>
  );
  /*return <Dummy />;*/
};

export default App;

const styles = StyleSheet.create({});
