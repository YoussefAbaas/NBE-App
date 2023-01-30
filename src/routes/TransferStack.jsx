import {createStackNavigator} from '@react-navigation/stack';
import Transfer from '../screens/Transfer';
import Verification from '../screens/Verfication';

const Stack = createStackNavigator();

function TransferStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TransferPage" component={Transfer} />
      <Stack.Screen name="OTP" component={Verification} />
    </Stack.Navigator>
  );
}

export default TransferStack;
