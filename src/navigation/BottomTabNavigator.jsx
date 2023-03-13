import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import Transfer from '../screens/Transfer';
import BeneficiaresStack from './BeneficiaresStack';
import Airpay from '../screens/Airpay';
import Atms from '../screens/Atms';
import {useSelector} from 'react-redux';
import i18n from '../translation/I18Config';

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);

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
                  name={i18n.t('Home')}
                  image={require('../assets/images/homelogo.png')}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={props => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon
                  name={i18n.t('Transfer')}
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
                  name={i18n.t('Beneficiaries')}
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
        component={Atms}
        options={props => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon
                  name={isarabic ? props.route.name : 'مواقع السحب'}
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
        component={Airpay}
        options={props => {
          return {
            tabBarIcon: ({focused}) => {
              return (
                <TabBarIcon
                  name={i18n.t('Airpay')}
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
