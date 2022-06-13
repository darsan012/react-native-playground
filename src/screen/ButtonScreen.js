import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const Buttonscreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={style.ButtonContainer}>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
  ButtonContainer: {
    // backgroundColor: 'grey',
  },
});

export default Buttonscreen;
