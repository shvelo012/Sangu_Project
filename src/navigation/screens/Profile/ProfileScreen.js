import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Row from '../../../components/Row/Row';
import { styles } from './ProfileScreen.style';
import { useState } from 'react';



export default function Profile({ navigation }) {
  const [data, setData] = useState([]);
  const [sendRequest, SetSendRequest] = useState(true);
  {
    sendRequest &&
      AsyncStorage.getItem('userToken')
        .then(userToken => {
          // Create the headers object with the cookie
          const headers = {
            Cookie: userToken,
          };

          // Make the GET request with the headers
          return fetch('https://ums.sangu.edu.ge/auth/passport', {
            method: 'GET',
            headers: headers,
          });
        })
        .then(response => {
          if (response.ok) {
            // Handle the successful response
            SetSendRequest(false);
            return response.json();
          } else {
            // Handle the error response
            throw new Error('Request failed with status code ' + response.status);
          }
        })
        .then(data => {
          // Process the response data
          console.log('Response:', data);
          setData(data);
        })
        .catch(error => {
          // Handle any errors
          SetSendRequest(false);
          console.error('Error:', error);
        });
  }

  const info = data;
  const infoData = {
    fullName: info.firstName + ' ' + info.lastName,
    // status: info.profiles[0]?.state,
    sex: info.gender,
    Nationality: info.nationality,
    IDnum: info.personalNo,
    TelNum: info.phone,
    Email: info.email,
    // Faculty: info.profiles[0].info.programName,
  };
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
          <Text style={[styles.infoContentStyle, styles.lastContentStyle]}>ფაკულტეტი</Text>
          <Text style={[styles.infoContentStyle, styles.lastContentStyle]}>{infoData.Faculty}</Text>
        </Row>
      </View>
    </ScrollView>
  );
}
