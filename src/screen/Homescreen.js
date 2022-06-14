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
  const clickHandler = header => {
    navigation.navigate(header.screenName, {screenName: header.title});
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
          {Headers.sort((a, b) => a.title > b.title).map((title, index) => (
            <CardComponent
              key={index}
              item={title}
              clickHandler={() => {
                clickHandler(title);
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
    backgroundColor: '#F8F9F9',
    padding: 2,
  },
  HeaderContainer: {alignItems: 'center', paddingTop: 15, paddingBottom: 10},
  HeaderText: {
    fontSize: 18,
    color: '#000',
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
