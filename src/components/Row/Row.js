import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = ({ children, style }) => {
  if (React.Children.count(children) !== 2) {
    console.error('Row component must have exactly two children');
    return null;
  }

  return (
    <View style={[styles.row, style]}>
      <View style={[styles.leftChild, style.leftChild]}>{children[0]}</View>
      <View style={[styles.rightChild, style.rightChild]}>{children[1]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftChild: {
    flex: 1,
  },
  rightChild: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Row;
