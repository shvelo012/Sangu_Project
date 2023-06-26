import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scaled } from '../theme/scaler';

const ScreenContent = ({ children, backgroundColor }) => {
  const containerStyle = [styles.container, { backgroundColor }];
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaled(6),
  },
});

export default ScreenContent;
