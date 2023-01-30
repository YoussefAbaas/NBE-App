import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../components/MainHeader';
import LoginForm from '../components/LoginForm';
import MainFooter from '../components/MainFooter';
import FingerPrintModal from '../components/FingerPrintModal';

const Main = ({navigation}) => {
  const [ismodalOpen, setismodalOpen] = useState(false);
  const toggleModal = () => {
    setismodalOpen(!ismodalOpen);
  };
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/mainBg.png')}
        style={styles.backgroundImage}>
        <View style={styles.pagecontent}>
          {/*view for header*/}
          <MainHeader languageappear={true} />
          {/*form*/}
          <LoginForm openModal={toggleModal} navigation={navigation} />
          {/*footer*/}
          <MainFooter />
          <FingerPrintModal
            openModal={ismodalOpen}
            toggleModal={toggleModal}
            titletext="Fingerprint for NBE Mobile"
            descriptiontext="Log in with your fingerprint"
            onpress={() => {
              navigation.navigate('Home');
              toggleModal();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  pagecontent: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
});
