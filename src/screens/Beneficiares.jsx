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
import {
  useAddBeneficierData,
  useBeneficiersData,
} from '../firebase/FirebaseQuery';
import {useQueryClient} from 'react-query';

const Beneficiares = ({navigation}) => {
  const isarabic = useSelector(state => state.language.AR);
  const [slider, setslider] = useState(false);
  const dispatch = useDispatch();
  //const usersdata = useSelector(state => state.beneficiers.data);
  const toggleslider = () => {
    setslider(!slider);
  };
  const phonenumber = useSelector(state => state.user.phone);
  const {data: usersdata, isError, isLoading} = useBeneficiersData(phonenumber);
  const queryclient = useQueryClient();
  const mutation = useAddBeneficierData();
  const addbenef = item => {
    mutation.mutateAsync({relateduserphone: phonenumber, ...item});
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
      {usersdata != undefined && usersdata.length > 0 ? (
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
