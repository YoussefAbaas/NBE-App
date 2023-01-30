import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Main from './src/screens/Main';
import SplashScreen from './src/screens/SplashScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack';
import BottomTabNavigator from './src/routes/BottomTabNavigator';
import DrawerNavigator from './src/routes/DrawerNavigator';
import MobileEntry from './src/screens/MobileEntry';
import SetPassword from './src/screens/SetPassword';
import Verification from './src/screens/Verfication';
import SignUpHeader from './src/components/SignUpHeader';
import SignUpSuccess from './src/screens/SignUpSuccess';
import {LogBox} from 'react-native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import KeyboardDismiss from './src/components/KeyboardDismiss';
import {SafeAreaView} from 'react-native-safe-area-context';

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
