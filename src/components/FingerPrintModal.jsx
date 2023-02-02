import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const FingerPrintModal = props => {
  return (
    <Modal animationType={'slide'} transparent={true} visible={props.openModal}>
      <View style={styles.modalPage}>
        <View style={styles.modalContent}>
          <Text style={styles.titletext}>{props.titletext}</Text>
          <Text style={styles.descriptiontext}>{props.descriptiontext}</Text>
          <View style={styles.fingerprintsection}>
            <View style={styles.fingerprint}>
              <TouchableWithoutFeedback onPress={props.onpress}>
                <Image
                  source={require('../assets/images/fingerprintelipse.png')}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={props.toggleModal}>
            <Text style={styles.canceltext}>Cancel</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

export default FingerPrintModal;

const styles = StyleSheet.create({
  modalPage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  titletext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  descriptiontext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  canceltext: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#007236',
    textAlign: 'right',
    fontWeight: '700',
  },
  fingerprint: {
    borderRadius: 50,
    shadowColor: '#00C974',
    shadowOpacity: 1,
    shadowRadius: 90,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    padding: 30,
    width: 70,
    height: 70,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00C974',
    borderWidth: 1,
  },
  fingerprintsection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
});
