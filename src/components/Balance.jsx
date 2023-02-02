import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import FingerPrintModal from './FingerPrintModal';
import React, {useState} from 'react';

const Balance = () => {
  const [ismodalOpen, setismodalOpen] = useState(false);
  const [balanceshown, setbalanceshown] = useState(false);
  const toggleModal = () => {
    setismodalOpen(!ismodalOpen);
  };
  return (
    <View
      style={{
        backgroundColor: '#007236',
        width: 350,
        height: 130,
        borderRadius: 15,
        marginLeft: 20,
        marginVertical: 20,
      }}>
      <ImageBackground
        style={{width: 350, height: 130, borderRadius: 15}}
        source={require('../assets/images/balancebg.png')}>
        <View style={styles.balanceheader}>
          <Text style={styles.balancetitle}>Balance</Text>
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
          <Text style={styles.balancetext}>
            {balanceshown ? '$2,567,879' : 'Press here to show Balance'}
          </Text>
        </TouchableWithoutFeedback>
      </ImageBackground>
      <FingerPrintModal
        openModal={ismodalOpen}
        toggleModal={toggleModal}
        titletext="Fingerprint for NBE Mobile"
        descriptiontext="Show balance with your fingerprint"
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
