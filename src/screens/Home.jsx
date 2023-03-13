import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MyAppText from '../components/MyAppText';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HomeHeader from '../components/HomeHeader';
import Balance from '../components/Balance';
import HomeServiceIcon from '../components/HomeServiceIcon';
import SendMoney from '../components/SendMoney';
import History from '../components/History';
import Cards from '../components/Cards';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import i18n from '../translation/I18Config';

const Home = props => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  const focused = useIsFocused();
  const [cardsshown, setcardsshown] = useState(false);
  const showcards = () => {
    setcardsshown(true);
  };
  useEffect(() => {
    if (focused) setcardsshown(false);
  }, [focused]);

  return (
    <View>
      <HomeHeader navigation={props.navigation} name={'youssef'} />
      {cardsshown ? (
        <Cards />
      ) : (
        <View>
          <Balance />
          <View style={styles.services}>
            <HomeServiceIcon
              text={i18n.t('Accounts')}
              image={require('../assets/images/accounts.png')}
              background="#00C97426"
            />
            <TouchableOpacity onPress={showcards}>
              <HomeServiceIcon
                text={isarabic ? 'Cards' : 'الكروت'}
                image={require('../assets/images/cardshome.png')}
                background="#00ADF826"
              />
            </TouchableOpacity>
            <HomeServiceIcon
              text={i18n.t('Utilities')}
              image={require('../assets/images/utilities.png')}
              background="#F6A72126"
            />
            <HomeServiceIcon
              text={i18n.t('History')}
              image={require('../assets/images/history.png')}
              background="#FF002E26"
            />
          </View>
          <SendMoney />
        </View>
      )}

      {/**/}
      <History height={cardsshown ? 300 : 200} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  services: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
