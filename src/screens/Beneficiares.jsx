import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import MyAppText from '../components/MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import BeneficiaresList from '../components/BeneficiaresList';
import BeneficiaresEmpty from '../components/BeneficiaresEmpty';
import BeneficiaresHeader from '../components/BeneficiaresHeader';
import {useEffect} from 'react';
import {addbeneficier, getbeneficiers} from '../firebase/FirestoreDB';
import {useCallback} from 'react';
import {fetchusers} from '../redux/beneficiersSlice';

const Beneficiares = ({navigation}) => {
  const isarabic = useSelector(state => state.language.AR);
  const [slider, setslider] = useState(false);
  const dispatch = useDispatch();
  const usersdata = useSelector(state => state.beneficiers.data);
  const toggleslider = () => {
    setslider(!slider);
  };
  const phonenumber = useSelector(state => state.user.phone);
  const [users, setusers] = useState([
    {
      name: 'Alex',
      image: require('../assets/images/user1.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [
        {name: 'flat rent', date: '25-10-1999', amount: '5000'},
        {name: 'new laptop', date: '25-10-2003', amount: '7000'},
      ],
    },
    {
      name: 'youssef',
      image: require('../assets/images/user2.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [
        {name: 'flat rent', date: '25-10-1999', amount: '5000'},
        {name: 'new laptop', date: '25-10-2003', amount: '7000'},
      ],
    },
    {
      name: 'yohan',
      image: require('../assets/images/user3.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [
        {name: 'flat rent', date: '25-10-1999', amount: '5000'},
        {name: 'new laptop', date: '25-10-2003', amount: '7000'},
      ],
    },
    {
      name: 'soha',
      image: require('../assets/images/user4.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [
        {name: 'flat rent', date: '25-10-1999', amount: '5000'},
        {name: 'new laptop', date: '25-10-2003', amount: '7000'},
      ],
    },
    {
      name: 'amir',
      image: require('../assets/images/user1.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [
        {name: 'flat rent', date: '25-10-1999', amount: '5000'},
        {name: 'new laptop', date: '25-10-2003', amount: '7000'},
      ],
    },
    {
      name: 'seham',
      image: require('../assets/images/user2.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [
        {name: 'flat rent', date: '25-10-1999', amount: '5000'},
        {name: 'new laptop', date: '25-10-2003', amount: '7000'},
      ],
    },
    {
      name: 'Alex1',
      image: require('../assets/images/user1.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [
        {name: 'flat rent', date: '25-10-1999', amount: '5000'},
        {name: 'new laptop', date: '25-10-2003', amount: '7000'},
      ],
    },
    {
      name: 'youssef1',
      image: require('../assets/images/user2.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [
        {name: 'flat rent', date: '25-10-1999', amount: '5000'},
        {name: 'new laptop', date: '25-10-2003', amount: '7000'},
      ],
    },
    {
      name: 'yohan1',
      image: require('../assets/images/user3.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
    {
      name: 'soha1',
      image: require('../assets/images/user4.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
    {
      name: 'amir1',
      image: require('../assets/images/user1.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
    {
      name: 'seham1',
      image: require('../assets/images/user2.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
    {
      name: 'Alex2',
      image: require('../assets/images/user1.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
    {
      name: 'youssef2',
      image: require('../assets/images/user2.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
    {
      name: 'yohan2',
      image: require('../assets/images/user3.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
    {
      name: 'soha2',
      image: require('../assets/images/user4.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
    {
      name: 'amir2',
      image: require('../assets/images/user1.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
    {
      name: 'seham2',
      image: require('../assets/images/user2.png'),
      phone: '01018480035',
      amount: '30000',
      transactions: [],
    },
  ]);

  const addbenef = item => {
    addbeneficier({relateduserphone: phonenumber, ...item}).then(() => {
      dispatch(fetchusers(phonenumber));
    });
  };

  useEffect(() => {
    dispatch(fetchusers(phonenumber));
  }, []);
  return (
    <View>
      <HomeHeader name="youssef" navigation={navigation} />
      <BeneficiaresHeader
        toggleslider={toggleslider}
        slider={slider}
        navigation={navigation}
        adduser={addbenef}
      />
      {usersdata.length > 0 ? (
        <BeneficiaresList
          users={usersdata}
          slider={slider}
          navigation={navigation}
          adduser={addbenef}
        />
      ) : (
        <BeneficiaresEmpty navigation={navigation} adduser={addbenef} />
      )}
    </View>
  );
};

export default Beneficiares;

const styles = StyleSheet.create({});
