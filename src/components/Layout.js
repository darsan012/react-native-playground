import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Layout = ({header, children}) => {
  return (
    <SafeAreaView>
      <View style={style.LayoutContainer}>
        <View style={style.HeaderContainer}>
          <Icon
            name={header.iconsName}
            color="white"
            size={20}
            style={{paddingBottom: 5}}
          />
          <Text style={style.HeaderText}>{header.screenName}</Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
  LayoutContainer: {
    height: height,
    width: width,
    backgroundColor: '#F8F9F9',
    elevation: 2,
  },
  HeaderContainer: {
    display: 'flex',
    // flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#2e8bd1',
    marginBottom: 5,
  },
  HeaderText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    borderTopWidth: 2,
    borderColor: '#fff',
    paddingTop: 5,
  },
});

export default Layout;
