import {createDrawerNavigator} from '@react-navigation/drawer';
import Dummy from '../screens/Dummy';
import CustomDrawer from '../components/CustomDrawer';
import {Image} from 'react-native';
import DrawerIcon from '../components/DrawerIcon';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: '#007236',
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Account Summary"
        component={BottomTabNavigator}
        options={{
          drawerIcon: () => {
            return (
              <DrawerIcon
                image={require('../assets/images/accountsummary.png')}
              />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      />
      <Drawer.Screen
        name="Open Certificates & Deposits"
        component={Dummy}
        options={{
          drawerIcon: () => {
            return (
              <DrawerIcon
                image={require('../assets/images/certificates.png')}
              />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      />
      <Drawer.Screen
        name="Payment Services"
        component={Dummy}
        options={{
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/payment.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      />
      <Drawer.Screen
        name="Cards Services"
        component={Dummy}
        options={{
          drawerIcon: () => {
            return <DrawerIcon image={require('../assets/images/cards.png')} />;
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      />
      <Drawer.Screen
        name="Hard Token"
        component={Dummy}
        options={{
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/hardtoken.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      />
      <Drawer.Screen
        name="Offers"
        component={Dummy}
        options={{
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/offers.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      />
      <Drawer.Screen
        name="Customers"
        component={Dummy}
        options={{
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/customers.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      />
      <Drawer.Screen
        name="Calculators"
        component={Dummy}
        options={{
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/calculators.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
