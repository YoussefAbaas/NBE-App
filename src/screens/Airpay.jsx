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

import {useState} from 'react';
import FingerPrintModal from '../components/FingerPrintModal';
import AirpayModal from '../components/AirpayModal';
import DraggableCardItem from '../components/DraggableCardItem';
import i18n from '../translation/I18Config';

const Airpay = ({navigation}) => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  const [draggingIndex, setDraggingIndex] = useState(-1);
  const cards = [
    require('../assets/images/card1.png'),
    require('../assets/images/card2.png'),
    require('../assets/images/card3.png'),
  ];
  const [data, setdata] = useState(cards);

  const handledragStart = index => {
    //setDraggingIndex(-1);
  };
  const handlekdragEnd = index => {
    setDraggingIndex(index);
    let newdata = cards;
    newdata[index] = null;
    setdata(newdata);
  };

  const renderItem = ({item, index}) =>
    item != null && (
      <DraggableCardItem
        item={item}
        index={index}
        handleDragStart={handledragStart}
        handleDragEnd={handlekdragEnd}
      />
    );
  const [isfingermodalOpen, setisfingermodalOpen] = useState(false);
  const togglefingerModal = () => {
    setisfingermodalOpen(!isfingermodalOpen);
  };
  const [ismodalOpen, setismodalOpen] = useState(false);
  const toggleModal = () => {
    setismodalOpen(!ismodalOpen);
  };
  return (
    <>
      <HomeHeader name="youssef" navigation={navigation} />
      <View style={{flex: 1}}>
        <MyAppText
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'black',
            marginHorizontal: 18,
            marginVertical: 10,
          }}>
          {i18n.t('Cards')}
        </MyAppText>
        <FlatList
          data={data}
          keyExtractor={item => {
            return item;
          }}
          renderItem={renderItem}
          horizontal
          //contentContainerStyle={{flex: 1}}
        />
      </View>
      <View
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
          zIndex: -1,
          position: 'absolute',
          bottom: 100,
        }}>
        {draggingIndex <= -1 ? (
          <MyAppText
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#007236C4',
              textAlign: 'center',
            }}>
            {i18n.t('TouchCard')}
          </MyAppText>
        ) : (
          <Image source={cards[draggingIndex]} />
        )}
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={togglefingerModal}>
          <MyAppText style={styles.buttontext}> {i18n.t('PayNow')}</MyAppText>
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
        titletext={i18n.t('FingerPrintTitle')}
        descriptiontext={i18n.t('FingerPrintAirpay')}
        onpress={() => {
          togglefingerModal();
          toggleModal();
        }}
      />
      <AirpayModal openModal={ismodalOpen} toggleModal={toggleModal} success />
    </>
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
    position: 'absolute',
    bottom: 20,
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
