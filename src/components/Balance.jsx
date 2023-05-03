import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import MyAppText from './MyAppText';

import FingerPrintModal from './FingerPrintModal';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import i18n from '../translation/I18Config';

const Balance = () => {
  const [ismodalOpen, setismodalOpen] = useState(false);
  const [balanceshown, setbalanceshown] = useState(false);
  const toggleModal = () => {
    setismodalOpen(!ismodalOpen);
  };
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  const balance = useSelector(state => state.user.balance);
  return (
    <View
      style={{
        backgroundColor: '#007236',
        width: '90%',
        height: 130,
        borderRadius: 15,
        marginLeft: 20,
        marginVertical: 20,
      }}>
      <ImageBackground
        style={{width: '100%', height: 130, borderRadius: 15}}
        source={require('../assets/images/balancebg.png')}>
        <View style={styles.balanceheader}>
          <MyAppText style={styles.balancetitle}>{i18n.t('Balance')}</MyAppText>
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={styles.fingerprintButton}>
              <Image
                source={require('../assets/images/FingerPrint.png')}
                style={{width: 15, height: 15}}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback>
          <MyAppText style={styles.balancetext}>
            {balanceshown ? '$' + balance : i18n.t('BalancePress')}
          </MyAppText>
        </TouchableWithoutFeedback>
      </ImageBackground>
      <FingerPrintModal
        openModal={ismodalOpen}
        toggleModal={toggleModal}
        titletext={i18n.t('FingerPrintTitle')}
        descriptiontext={i18n.t('FingerPrintDescription')}
        onpress={() => {
          setbalanceshown(true);
          toggleModal();
        }}
      />
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  fingerprintButton: {
    borderWidth: 1,
    borderColor: '#F6A721',
    borderRadius: 12,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  balanceheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 17,
  },
  balancetitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  balancetext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});
