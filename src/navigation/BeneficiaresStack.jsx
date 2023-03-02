import {createStackNavigator} from '@react-navigation/stack';
import AddBeneficiare from '../screens/AddBeneficiare';
import Beneficiares from '../screens/Beneficiares';
import BeneficiaresHistory from '../screens/BeneficiaresHistory';
import Transfer from '../screens/Transfer';
import Verification from '../screens/Verfication';

const Stack = createStackNavigator();

function BeneficiaresStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Beneficiares" component={Beneficiares} />
      <Stack.Screen
        name="BeneficiaresHistory"
        component={BeneficiaresHistory}
      />
      <Stack.Screen name="AddBeneficier" component={AddBeneficiare} />
      <Stack.Screen name="OTP" component={Verification} />
    </Stack.Navigator>
  );
}

export default BeneficiaresStack;
