import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const Buttonscreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView style={style.Container}>
        <View style={style.HeaderContainer}>
          <Text style={style.HeaderText}>BUTTON COMPONENTS</Text>
        </View>
        <FlatList
          data={buttonTypes}
          renderItem={({item}) => <CardComponent item={item} />}
        />
        <View style={style.CardLayout}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
  Container: {
    height: height,
    width: width,
    backgroundColor: 'rgb(188,227,227)',
    padding: 8,
  },
  HeaderContainer: {alignItems: 'center', paddingTop: 50, paddingBottom: 60},
  HeaderText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  CardLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default Buttonscreen;
