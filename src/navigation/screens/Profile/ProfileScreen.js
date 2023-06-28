import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Row from '../../../components/Row/Row';
import { styles } from './ProfileScreen.style';
import { useState } from 'react';
import Header from '../../../components/Header/Header';
import ScreenContent from '../../../components/ScreenContent/ScreenContent';
import { colors } from '../../../colors/colors';



export default function Profile({ navigation }) {
  const [sendRequest, SetSendRequest] = useState(true);
  const [infoData, setInfoData] = useState({});
  const [statusColor, setStatusColor] = useState();

  async function fetchData() {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const headers = {
        Cookie: userToken,
      };

      const response = await fetch('https://ums.sangu.edu.ge/auth/passport', {
        method: 'GET',
        headers: headers,
      });

      if (response.ok) {
        SetSendRequest(false);
        const data = await response.json();

        const infoData = {
          fullName: data.firstName + ' ' + data.lastName,
          status: data.profiles[0].state ? data.profiles[0].state : null,
          sex: data.gender === 'female' ? 'მდედრობითი' : 'მამრობითი',
          Nationality: data.nationality,
          IDnum: data.personalNo,
          TelNum: data.phone,
          Email: data.email,
        };

        setStatusColor(infoData.status === 'active' ? 'green' : 'red');
        setInfoData(infoData);
      } else {
        throw new Error('Request failed with status code ' + response.status);
      }
    } catch (error) {
      SetSendRequest(false);
      console.error('Error:', error);
    }
  }

  sendRequest && fetchData();

  return (
    <>
      <Header onPress={() => navigation.navigate("insideDetails")} title={'პროფილი'} />
      <ScreenContent backgroundColor={colors.white}>

        <ScrollView>
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
          </View>
        </ScrollView>
      </ScreenContent>
    </>
  );
}
