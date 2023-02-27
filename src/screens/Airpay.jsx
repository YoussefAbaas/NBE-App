import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import MyAppText from '../components/MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HomeHeader from '../components/HomeHeader';
import {DraxView} from 'react-native-drax';
import {DraxProvider} from 'react-native-drax';
import Cards from '../components/Cards';
import {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FingerPrintModal from '../components/FingerPrintModal';
import AirpayModal from '../components/AirpayModal';

const Airpay = ({navigation}) => {
  const isarabic = useSelector(state => state.language.AR);
  const [cards, setcards] = useState([
    require('../assets/images/card1.png'),
    require('../assets/images/card2.png'),
    require('../assets/images/card3.png'),
  ]);
  const [received, setreceived] = useState('');
  const [isfingermodalOpen, setisfingermodalOpen] = useState(false);
  const togglefingerModal = () => {
    setisfingermodalOpen(!isfingermodalOpen);
  };
  const [ismodalOpen, setismodalOpen] = useState(false);
  const toggleModal = () => {
    setismodalOpen(!ismodalOpen);
  };
  return (
    <DraxProvider>
      <HomeHeader name="youssef" navigation={navigation} />
      <GestureHandlerRootView>
        <View>
          <MyAppText
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              marginHorizontal: 18,
              marginVertical: 10,
            }}>
            Cards
          </MyAppText>
          <FlatList
            data={cards}
            keyExtractor={item => {
              return item;
            }}
            renderItem={({item, index}) => {
              return (
                <DraxView key={index} dragPayload={item} longPressDelay={200}>
                  <Image source={item} style={{marginHorizontal: 10}} />
                </DraxView>
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={true}
          />
        </View>
        <DraxView
          style={{
            width: 346,
            height: 216,
            borderColor: '#007236C4',
            borderStyle: 'dashed',
            borderWidth: 2,
            borderRadius: 20,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}
          renderContent={({viewState}) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return received == '' ? (
              <MyAppText
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: '#007236C4',
                  textAlign: 'center',
                }}>
                Touch & hold a card then drag it to this box
              </MyAppText>
            ) : (
              <Image source={received} />
            );
          }}
          onReceiveDragDrop={event => {
            setreceived(event.dragged.payload);
          }}
        />
        <View style={styles.button}>
          <TouchableOpacity onPress={togglefingerModal}>
            <MyAppText style={styles.buttontext}>Pay Now</MyAppText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={togglefingerModal}
            style={styles.fingerprintButton}>
            <Image source={require('../assets/images/FingerPrint.png')} />
          </TouchableOpacity>
        </View>
        <FingerPrintModal
          openModal={isfingermodalOpen}
          toggleModal={togglefingerModal}
          titletext="Fingerprint for NBE Mobile"
          descriptiontext="Air Payment"
          onpress={() => {
            togglefingerModal();
            toggleModal();
          }}
        />
        <AirpayModal
          openModal={ismodalOpen}
          toggleModal={toggleModal}
          success
        />
      </GestureHandlerRootView>
    </DraxProvider>
  );
};

export default Airpay;

const styles = StyleSheet.create({
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#007236',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 35,
    flexDirection: 'row',
  },
  buttontext: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  fingerprintButton: {
    borderWidth: 1,
    borderColor: '#F6A721',
    borderRadius: 12,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    position: 'absolute',
    right: 5,
  },
});
