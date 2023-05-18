import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './TableSubjectsRow.styles';





const TableSubjectsRow = ({ subject, time, room, building }) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textSubject}>{subject}</Text>
        <Text style={styles.textSubject}>{time}</Text>
        <Text style={styles.textSubject}>{room} | {building}</Text>
      </View>
    </>
  );
};

export default TableSubjectsRow;
