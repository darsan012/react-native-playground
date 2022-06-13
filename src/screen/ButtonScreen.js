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

const Buttonscreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={style.ButtonContainer}>
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
  ButtonContainer: {
    height: height,
    width: width,
    // backgroundColor: 'grey',
  },
});

export default Buttonscreen;
