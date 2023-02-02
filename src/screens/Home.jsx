import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import Balance from '../components/Balance';
import HomeServiceIcon from '../components/HomeServiceIcon';
import SendMoney from '../components/SendMoney';
import History from '../components/History';
import Cards from '../components/Cards';

const Home = props => {
  const [cardsshown, setcardsshown] = useState(false);
  const showcards = () => {
    setcardsshown(true);
  };
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
              text="Accounts"
              image={require('../assets/images/accounts.png')}
              background="#00C97426"
            />
            <TouchableOpacity onPress={showcards}>
              <HomeServiceIcon
                text="Cards"
                image={require('../assets/images/cardshome.png')}
                background="#00ADF826"
              />
            </TouchableOpacity>
            <HomeServiceIcon
              text="Utilities"
              image={require('../assets/images/utilities.png')}
              background="#F6A72126"
            />
            <HomeServiceIcon
              text="History"
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
