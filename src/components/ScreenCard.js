import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

const Screencard = ({item}) => {
  console.log(item);
  return (
    <View style={style.container}>
      <Text style={style.titleText}>{item.title}</Text>
      <Text style={{color: 'white', padding: 10}}>{item.description}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
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

export default Screencard;
