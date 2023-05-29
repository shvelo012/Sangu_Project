import * as React from 'react';
import { View, Text } from 'react-native';

import PersonalInfo from "./passport.json";
import Row from '../../../components/Row/Row';
import { styles } from "./ProfileScreen.style";

const info = PersonalInfo;
const infoData = {
  fullName: info.firstName + " " + info.lastName,
  status: info.profiles[0].state,
  sex: info.gender,
  Nationality: info.nationality,
  IDnum: info.personalNo,
  TelNum: info.phone,
  Email: info.email,
  Faculty: info.profiles[0].info.programName
};
console.log(infoData);





export default function Profile({ navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text
    //     onPress={() => navigation.navigate('Home')}
    //     style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>

    // </View>
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text>{infoData.fullName}</Text>
        <Text>{infoData.status}</Text>
      </View>
      <Row style={styles.gender}>
        <Text>სქესი ---- </Text>
        <Text>{infoData.sex}</Text>
      </Row>
      <Row style={styles.nation}>
        <Text>ეროვნება ---</Text>
        <Text>{infoData.Nationality}</Text>
      </Row>
      <Row style={styles.personalNumber}>
        <Text>პირადი ნომერი ----</Text>
        <Text>{infoData.IDnum}</Text>
      </Row>
      <Row style={styles.phoneNumber}>
        <Text>ტელ. ნომერი ---</Text>
        <Text>{infoData.TelNum}</Text>
      </Row>
      <Row style={styles.emailAdress}>
        <Text>ელ-ფოსტა ----</Text>
        <Text>{infoData.Email}</Text>
      </Row>
      <Row style={styles.facultyStyle}>
        <Text>ფაკულტეტი ----</Text>
        <Text>{infoData.Faculty}</Text>
      </Row>
    </View>
  );
}
