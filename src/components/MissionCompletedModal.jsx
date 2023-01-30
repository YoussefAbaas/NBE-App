import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const MissionCompletedModal = props => {
  return (
    <Modal animationType={'fade'} transparent={true} visible={props.openModal}>
      <View style={styles.modalPage}>
        <View style={styles.modalContent}>
          <Image source={require('../assets/images/missioncompleted.png')} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              textAlign: 'center',
            }}>
            Mission Completed
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            {props.text}
          </Text>
          <View style={styles.submit}>
            <View style={styles.button}>
              <TouchableOpacity onPress={props.toggleModal}>
                <Text style={styles.buttontext}>Finish</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MissionCompletedModal;

const styles = StyleSheet.create({
  modalPage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    position: 'absolute',
    width: '90%',
    height: 332,
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 35,
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#007236',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 15,
  },
  buttontext: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  submittext: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
  },
});
