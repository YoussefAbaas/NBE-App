import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import {View, Image, Text} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import Beneficiares from '../screens/Beneficiares';
import Dummy from '../screens/Dummy';
import Home from '../screens/Home';
import Transfer from '../screens/Transfer';
import BeneficiaresStack from './BeneficiaresStack';
import TransferStack from './TransferStack';

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 80,
          display: 'flex',
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={props => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon
                  name={props.route.name}
                  image={require('../assets/images/homelogo.png')}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="TransferOverview"
        component={Transfer}
        options={props => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon
                  name={'Transfer'}
                  image={require('../assets/images/transfer.png')}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="Beneficers"
        component={BeneficiaresStack}
        options={props => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon
                  name={props.route.name}
                  image={require('../assets/images/Beneficers.png')}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="Atms"
        component={Dummy}
        options={props => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon
                  name={props.route.name}
                  image={require('../assets/images/Atms.png')}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="Air Pay"
        component={Dummy}
        options={props => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon
                  name={props.route.name}
                  image={require('../assets/images/airpay.png')}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;
