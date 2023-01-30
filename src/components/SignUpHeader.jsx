import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

const SignUpHeader = ({navigation}) => {
  const ReturnToLastPage = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={ReturnToLastPage}>
        <View style={styles.return}>
          <Image source={require('../assets/images/return.png')} />
        </View>
      </TouchableWithoutFeedback>
      <Image
        source={require('../assets/images/signupheaderlogo.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default SignUpHeader;

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 39,
  },
  return: {
    backgroundColor: '#007236',
    padding: 20,
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 20,
  },
});
