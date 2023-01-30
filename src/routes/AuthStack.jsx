import {createStackNavigator} from '@react-navigation/stack';
import Dummy from '../screens/Dummy';
import Main from '../screens/Main';
import MobileEntry from '../screens/MobileEntry';
import SetPassword from '../screens/SetPassword';
import SignUpSuccess from '../screens/SignUpSuccess';
import SplashScreen from '../screens/SplashScreen';
import Verification from '../screens/Verfication';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Main} />
      <Stack.Screen name="Signup" component={MobileEntry} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="SignupSuccess" component={SignUpSuccess} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default AuthStack;
