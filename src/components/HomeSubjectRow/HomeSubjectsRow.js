import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './HomeSubjectsRow.styles';

const HomeSubjectsRow = ({ subject, info, total }) => {
  return (
    <>
      <TouchableOpacity style={styles.container} >
        <Text style={styles.textSubject}>{subject}</Text>
        <Text style={styles.textInfo}>{info}</Text>
        <Text style={styles.textScore}>{total}</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeSubjectsRow;
