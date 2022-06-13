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

const Homescreen = ({navigation}) => {
  const Headers = [
    {
      screenName: 'Button',
      title: 'Button Card',
    },
    {
      screenName: 'Text',
      title: 'Alert',
    },
    {
      screenName: 'Text',
      title: 'Box',
    },
    {
      screenName: 'Text',
      title: 'Text Card',
    },
    {
      screenName: 'Text',
      title: 'Action Sheet',
    },
  ];
  const clickHandler = screenName => {
    console.log(screenName);
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
    display: 'flex',
    height: height,
    width: width,
    // backgroundColor: 'rgb(188,227,227)',
    padding: 8,
  },
  HeaderContainer: {alignItems: 'center', padding: 10},
  HeaderText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  CardLayout: {
    flex: 1,
    alignItems: 'center',
    // flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Homescreen;
