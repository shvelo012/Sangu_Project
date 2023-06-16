import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Header = ({ onPress, title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Image style={styles.image} source={require('../../img/arrowLeft.png')} />
      </TouchableOpacity>
      <View style={styles.titlePosition}>
        <Text style={styles.title}>{title}</Text>
      </View>
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
    width: 5 + "%",

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
  },
  image: {
    // width: 100 + '%',
  },
  titlePosition: {

  }
};

export default Header;
