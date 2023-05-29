import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = ({ children }) => {
  return (
    <View style={styles.row}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Row;
