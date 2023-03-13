import {Image, ImageBackground, StyleSheet, View} from 'react-native';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MainHeader from '../components/MainHeader';
import LoginForm from '../components/LoginForm';
import MainFooter from '../components/MainFooter';
import FingerPrintModal from '../components/FingerPrintModal';
import {fetchuserdata, login} from '../redux/userSlice';
import i18n from '../translation/I18Config';

const Main = ({navigation}) => {
  const isarabic = useSelector(state => state.language.AR);
  const [ismodalOpen, setismodalOpen] = useState(false);
  const toggleModal = () => {
    setismodalOpen(!ismodalOpen);
  };
  const dispatch = useDispatch();
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
            titletext={i18n.t('FingerPrintTitle')}
            descriptiontext={i18n.t('FingerPrintLogin')}
            onpress={() => {
              dispatch(
                login({phone: '01018480035', accountnum: '1478175632154867'}),
              );
              dispatch(fetchuserdata('01018480035'));
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
