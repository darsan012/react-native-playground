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
import {Headers} from '../constants/HomePageData/Data';

const Homescreen = ({navigation}) => {
  const clickHandler = screenName => {
    navigation.navigate(screenName);
  };
  return (
    <SafeAreaView>
      <ScrollView style={style.HomeContainer}>
        <View style={style.HeaderContainer}>
          <Text style={style.HeaderText}>REACT NATIVE COMPONENTS</Text>
        </View>
        {/* <FlatList
        data={headers}
        renderItem={({item}) => <CardComponent item={item} />}
      /> */}
        <View style={style.CardLayout}>
          {Headers.map((title, index) => (
            <CardComponent
              key={index}
              item={title}
              clickHandler={() => {
                clickHandler(title.screenName);
              }}
              iconsName={title.iconsName}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
  HomeContainer: {
    height: height,
    width: width,
    backgroundColor: 'rgb(188,227,227)',
    padding: 5,
  },
  HeaderContainer: {alignItems: 'center', paddingTop: 15, paddingBottom: 10},
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

export default Homescreen;
