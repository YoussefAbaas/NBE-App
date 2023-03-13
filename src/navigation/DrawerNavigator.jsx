import {createDrawerNavigator} from '@react-navigation/drawer';
import Dummy from '../screens/Dummy';
import CustomDrawer from '../components/CustomDrawer';
import DrawerIcon from '../components/DrawerIcon';
import BottomTabNavigator from './BottomTabNavigator';
import {useSelector} from 'react-redux';
import i18n from '../translation/I18Config';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: '#007236',
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold',
        },
      }}>
      <Drawer.Screen
        name={'Account Summary'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: i18n.t('AccountSummary'),
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
            fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold',
          },
        }}
      />
      <Drawer.Screen
        name={'Open Certificates & Deposits'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: i18n.t('Certificates'),
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
            fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold',
          },
        }}
      />
      <Drawer.Screen
        name={'Payment Services'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: i18n.t('PaymentServices'),
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/payment.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold',
          },
        }}
      />
      <Drawer.Screen
        name={'Cards Services'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: i18n.t('CardsServices'),
          drawerIcon: () => {
            return <DrawerIcon image={require('../assets/images/cards.png')} />;
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold',
          },
        }}
      />
      <Drawer.Screen
        name={'Hard Token'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: i18n.t('HardToken'),
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/hardtoken.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold',
          },
        }}
      />
      <Drawer.Screen
        name={'Offers'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: i18n.t('Offers'),
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/offers.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold',
          },
        }}
      />
      <Drawer.Screen
        name={'Customers'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: i18n.t('Customers'),
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/customers.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold',
          },
        }}
      />
      <Drawer.Screen
        name={'Calculators'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: isarabic ? 'Calculators' : 'حاسبة القروض',
          drawerIcon: () => {
            return (
              <DrawerIcon image={require('../assets/images/calculators.png')} />
            );
          },
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
