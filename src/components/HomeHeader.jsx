import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const HomeHeader = props => {
  const displayname = useSelector(state => state.user.phone);
  return (
    <View style={styles.header}>
      <View style={styles.headerleft}>
        <Pressable
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <Image
            source={require('../assets/images/sidebaricon.png')}
            style={{width: 20, height: 17}}
          />
        </Pressable>
        <Image
          source={require('../assets/images/user.png')}
          style={{width: 40, height: 40}}
        />
        <Text style={{fontSize: 14, fontWeight: '700'}}>
          Good morning {'\n'}{' '}
          <Text style={{color: 'black'}}>
            {displayname + '@nbe.com' || props.name}
          </Text>
        </Text>
      </View>
      <View style={styles.ring}>
        <Image source={require('../assets/images/ring.png')} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  ring: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  headerleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: 'transparent',
  },
});
