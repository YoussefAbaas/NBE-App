import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchusers} from '../redux/beneficiersSlice';

const History = props => {
  const users = useSelector(state => state.beneficiers.data);
  let transactions = [];
  users.forEach(user => {
    transactions = transactions.concat(user.transactions);
  });
  transactions = transactions?.map(transaction => {
    return {
      name: transaction.username,
      date: transaction.date,
      amount: transaction.amount,
      id: transaction.id,
      image: users.find(user => {
        return user.name == transaction.username;
      }).image,
    };
  });

  const phone = useSelector(state => state.user.phone);
  const dispatch = useDispatch();
  const [HistoryUsers, setHistoryUsers] = useState([
    {
      name: 'Youssef',
      image: require('../assets/images/user2.png'),
      date: '25/10/1999',
      amount: 2550,
      id: 1,
    },
    {
      name: 'Youssef',
      image: require('../assets/images/user2.png'),
      date: '25/10/1999',
      amount: 2550,
      id: 2,
    },
    {
      name: 'Youssef',
      image: require('../assets/images/user2.png'),
      date: '25/10/1999',
      amount: 2550,
      id: 3,
    },
    {
      name: 'Youssef',
      image: require('../assets/images/user2.png'),
      date: '25/10/1999',
      amount: 2550,
      id: 4,
    },
    {
      name: 'Youssef',
      image: require('../assets/images/user2.png'),
      date: '25/10/1999',
      amount: 2550,
      id: 5,
    },
  ]);
  useEffect(() => {
    dispatch(fetchusers(phone));
  }, []);

  return (
    <View>
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 18,
          fontWeight: '700',
          color: 'black',
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        History
      </Text>
      <View style={{height: props.height}}>
        <FlatList
          data={transactions}
          keyExtractor={item => {
            return item.id;
          }}
          scrollEnabled={true}
          renderItem={({item}) => {
            return (
              <TouchableWithoutFeedback>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent',
                    borderRadius: 12,
                    marginLeft: 10,
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    paddingRight: 10,
                    height: 70,
                    marginBottom: 2,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={item.image}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 12,
                        marginLeft: 10,
                      }}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Medium',
                          fontSize: 18,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Medium',
                          fontSize: 16,
                          fontWeight: '400',
                          color: 'grey',
                        }}>
                        {item.date}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Medium',
                      fontSize: 18,
                      fontWeight: '500',
                      color: 'black',
                    }}>
                    ${item.amount}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
