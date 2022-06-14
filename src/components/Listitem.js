import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon name="check" color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

ListItem.defaultProps = {
  title: 'Hello',
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#2e8bd1',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    color: 'white',
  },
});
export default ListItem;
