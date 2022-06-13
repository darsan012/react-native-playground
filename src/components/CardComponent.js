import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CardComponent = ({title}) => {
  return (
    <View style={style.container}>
      <Icon name="home" size={20} color="white" />
      <Text style={style.title}>{title}</Text>
    </View>
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
    borderRadius: 10,
    backgroundColor: 'darkslateblue',
  },
  title: {
    color: 'white',
    fontSize: 18,
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default CardComponent;
