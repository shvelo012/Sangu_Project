import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = ({ children, style }) => {
  if (React.Children.count(children) !== 2) {
    console.error('Row component must have exactly two children');
    return null;
  }

  return (
    <View style={[styles.row, style]}>
      <View style={styles.leftChild}>{children[0]}</View>
      <View style={styles.rightChildContainer}>
        <View style={styles.rightChild}>{children[1]}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical:30,
    // backgroundColor:'red'
  },
  leftChild: {
    width:'40%',
    paddingLeft:20,
  },
  rightChildContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightChild: {
    paddingRight:20,
    flex: 1,
  },
});

export default Row;
