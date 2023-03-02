import {createStackNavigator} from '@react-navigation/stack';
import AddBeneficiare from '../screens/AddBeneficiare';
import Beneficiares from '../screens/Beneficiares';
import BeneficiaresHistory from '../screens/BeneficiaresHistory';
import Transfer from '../screens/Transfer';
import Verification from '../screens/Verfication';

const Stack = createStackNavigator();

function TransferStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="OTP" component={Verification} />
    </Stack.Navigator>
  );
}

export default TransferStack;
