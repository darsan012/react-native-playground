import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Layout from '../components/Layout';

const Switchscreen = ({route}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleButton = () => setButtonState(initailState => !initailState);
  return (
    <Layout screenHeader={route.params.screenName}>
      <View style={style.container}>
        <View style={style.switchContainer}>
          <Text style={{padding: 10}}>
            This is react native switch component
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Pressable onPress={toggleButton}>
          <View style={style.switchContainer}>
            <Text style={{padding: 10}}>This is custom switch component</Text>
            {buttonState && <Icon name="toggle-off" size={30} />}
            {!buttonState && <Icon name="toggle-on" size={30} />}
          </View>
        </Pressable>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  switchContainer: {
    alignItems: 'center',
    width: 320,
    justifyContent: 'space-between',
    backgroundColor: 'rgb(243,243,243)',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 15,
    margin: 8,
  },
});
export default Switchscreen;
