import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
// Import required components
import {SafeAreaView} from 'react-native';
// Import Map and Marker
import MapView, {Marker} from 'react-native-maps';
import HomeHeader from '../components/HomeHeader';
import Geolocation from '@react-native-community/geolocation';
import {useEffect} from 'react';

const Atms = ({navigation}) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        //console.log(initialPosition);
        setcurrentlocation({
          latitude: JSON.parse(initialPosition).coords.latitude,
          longitude: JSON.parse(initialPosition).coords.longitude,
        });
        // setatmslocations([]);
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    /* var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentlocation?.latitude},${currentlocation?.longitude}&radius=5000&type=atm&keyword=NBE&key=AIzaSyDkfPkBKEqjwLnNum9OuzxEuOgJzFHXtvo`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        //console.log(response);
        const data = JSON.stringify(response.data);
        //setatmslocations(JSON.parse(data).results);
        //console.log(atmslocation);
      })
      .catch(function (error) {
        console.log(error);
      });*/
  }, [currentlocation, atmslocation]);
  const [currentlocation, setcurrentlocation] = useState(null);
  const [atmslocation, setatmslocations] = useState([
    {
      latitude: 30.0778987,
      longitude: 31.342715,
      id: 0,
    },
    {
      latitude: 30.081511,
      longitude: 31.350342,
      id: 1,
    },
    {
      latitude: 30.085136,
      longitude: 31.324456,
      id: 2,
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {currentlocation ? (
          <MapView
            userInterfaceStyle="light"
            style={styles.mapStyle}
            initialRegion={{
              latitude: currentlocation.latitude,
              longitude: currentlocation.longitude,
              latitudeDelta: 0.0421,
              longitudeDelta: 0.0421,
            }}
            customMapStyle={mapStandardStyle}>
            {atmslocation.map(location => {
              return (
                <Marker
                  key={location.id}
                  draggable
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                  image={require('../assets/images/marker.png')}
                  title={'Atm here'}
                  onDragEnd={e =>
                    alert(JSON.stringify(e.nativeEvent.coordinate))
                  }
                />
              );
            })}
          </MapView>
        ) : (
          <ActivityIndicator style={{alignSelf: 'center', marginBottom: 100}} />
        )}
      </View>

      <HomeHeader name="youssef" navigation={navigation} />
    </SafeAreaView>
  );
};

export default Atms;

const mapDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    flex: 1,
  },
});
