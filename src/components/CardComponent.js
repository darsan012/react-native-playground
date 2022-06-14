import React from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CardComponent = ({item, clickHandler, iconsName}) => {
  return (
    <TouchableOpacity style={style.container} onPress={clickHandler}>
      <Icon name={iconsName} size={20} color="white" />
      <Text style={style.titleText}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    height: 125,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'darkslateblue',
    shadowOffset: {width: 1, height: 1},
    elevation: 3,
    shadowColor: '#fff',
    shadowRadius: 2,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default CardComponent;
