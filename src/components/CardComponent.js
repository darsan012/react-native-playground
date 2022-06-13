import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CardComponent = ({item, clickHandler}) => {
  return (
    <TouchableOpacity style={style.container} onPress={clickHandler}>
      <Icon name="home" size={20} color="white" />
      <Text style={style.titleText}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 150,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'darkslateblue',
    elevation: 3,
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
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
