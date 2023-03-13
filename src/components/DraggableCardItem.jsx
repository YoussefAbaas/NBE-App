import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  PanResponder,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';

const DraggableCardItem = ({item, index, handleDragStart, handleDragEnd}) => {
  const [pan, setPan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      pan.setValue({x: 0, y: 0});
      handleDragEnd(index);
    },
  });

  return (
    <Animated.View
      style={[
        pan.getLayout(),
        {marginHorizontal: 10, zIndex: 999, elevation: 4},
      ]}
      {...panResponder.panHandlers}>
      <Image source={item} />
    </Animated.View>
  );
};

export default DraggableCardItem;

const styles = StyleSheet.create({});
