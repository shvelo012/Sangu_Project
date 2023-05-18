import * as React from 'react';
import { View, Text } from 'react-native';
import TableSubjectsRow from '../../../components/TableSubjectsRow/TableSubjectsRow';
import { styles } from './TableScreen.styles';

import jsonData from './TableData.json';


export default function Table({ navigation }) {
  return (
    <>
      <View style={styles.mainContainer}>
        <Text
          // onPress={() => navigation.navigate('Home')}
          style={styles.header}>Table Screen</Text>
      </View>
      <View style={styles.listContainer}>
        <TableSubjectsRow subject={"cpp"} time={"13:00"} room={'208'} building={'II'} />
      </View>
    </>

  );
}