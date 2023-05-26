import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TableSubjectsRow from '../../../components/TableSubjectsRow/TableSubjectsRow';
import { styles } from './TableScreen.styles';

import jsonData from './TableData.json';

const table = jsonData.map(row => ({
  subject: row.sessionGroup.subjectActivation?.subject?.name || 'N/A',
  time: row.startTime,
  room: row.room?.name || 'N/A',
  building: row.room?.building || 'N/A',
}));

export default function Table({ navigation }) {
  return (
    <>
      <View style={styles.mainContainer}>
        <Text
          // onPress={() => navigation.navigate('Home')}
          style={styles.header}>ცხრილი</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.listContainer}>
          {table.map((row, index) => (
            <TableSubjectsRow
              key={index}
              subject={row.subject}
              time={row.time}
              room={row.room}
              building={row.building}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
