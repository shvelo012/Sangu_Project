import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const Header = ({ onPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Image style={styles.Image} source={require('../../img/arrowLeft.png')} />
        <Text style={styles.icon}>Icon</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Header Title</Text>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    width: '100%',
    marginTop: 0, // Add any additional margin or padding as needed
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
};

export default Header;
