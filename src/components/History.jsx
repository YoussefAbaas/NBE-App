import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';

const History = props => {
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
  return (
    <View>
      <Text
        style={{
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
          data={HistoryUsers}
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
                          fontSize: 18,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: 'grey',
                        }}>
                        {item.date}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
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
