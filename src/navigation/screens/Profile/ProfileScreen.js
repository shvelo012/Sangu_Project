import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

import PersonalInfo from './passport.json';
import Row from '../../../components/Row/Row';
import { styles } from './ProfileScreen.style';

const info = PersonalInfo;
const infoData = {
  fullName: info.firstName + ' ' + info.lastName,
  status: info.profiles[0].state,
  sex: info.gender,
  Nationality: info.nationality,
  IDnum: info.personalNo,
  TelNum: info.phone,
  Email: info.email,
  Faculty: info.profiles[0].info.programName,
};

export default function Profile({ navigation }) {
  let statusColor = infoData.status === 'active' ? 'green' : 'red';

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.topContent}>
          <Text style={styles.nameStyle}>{infoData.fullName}</Text>
          <Text style={[styles.statusStyle, { color: statusColor }]}>{infoData.status}</Text>
        </View>
        <Row>
          <Text style={styles.infoContentStyle}>სქესი</Text>
          <Text style={styles.infoContentStyle}>{infoData.sex}</Text>
        </Row>
        <Row>
          <Text style={styles.infoContentStyle}>ეროვნება</Text>
          <Text style={styles.infoContentStyle}>{infoData.Nationality}</Text>
        </Row>
        <Row>
          <Text style={styles.infoContentStyle}>პირადი ნომერი</Text>
          <Text style={styles.infoContentStyle}>{infoData.IDnum}</Text>
        </Row>
        <Row>
          <Text style={styles.infoContentStyle}>ტელ. ნომერი</Text>
          <Text style={styles.infoContentStyle}>{infoData.TelNum}</Text>
        </Row>
        <Row>
          <Text style={styles.infoContentStyle}>ელ-ფოსტა</Text>
          <Text style={styles.infoContentStyle}>{infoData.Email}</Text>
        </Row>
        <Row style={styles.lastElement}>
          <Text style={[styles.infoContentStyle,styles.lastContentStyle]}>ფაკულტეტი</Text>
          <Text style={[styles.infoContentStyle,styles.lastContentStyle]}>{infoData.Faculty}</Text>
        </Row>
      </View>
    </ScrollView>
  );
}
