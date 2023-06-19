import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { scaled } from '../theme/scaler';

const Header = ({ onPress, title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Image style={styles.image} source={require('../../img/left-arrow-svgrepo-com.png')} />
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
    // backgroundColor: '#f2f2f2',
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    borderWidth: scaled(4),
  },
  iconContainer: {
    marginRight: scaled(10),
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'red',
    padding: scaled(3),

  },
  title: {
    fontSize: scaled(24),
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlign: 'center',
    marginRight: scaled(25),

  },
  image: {
    width: scaled(25),
    height: scaled(25),

  },
  titlePosition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Header;
