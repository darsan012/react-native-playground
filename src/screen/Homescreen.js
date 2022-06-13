import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import CardComponent from '../components/CardComponent';

const Homescreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={style.HomeContainer}>
        <View style={style.HeaderContainer}>
          <Text style={style.HeaderText}>REACT NATIVE COMPONENTS</Text>
        </View>
        <View>
          <CardComponent title="Button Card" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
  HomeContainer: {
    display: 'flex',
    height: height,
    width: width,
    backgroundColor: 'rgb(188,227,227)',
    padding: 8,
  },
  HeaderContainer: {alignItems: 'center', padding: 10},
  HeaderText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
});

export default Homescreen;
