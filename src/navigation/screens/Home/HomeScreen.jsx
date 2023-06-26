import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView } from "react-native";
import HomeSubjectRow from '../../../components/HomeSubjectRow/HomeSubjectsRow';
import { styles } from './HomeScreen.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenContent from '../../../components/ScreenContent/ScreenContent';
import { colors } from '../../../colors/colors';
import CookieManager from '@react-native-cookies/cookies';

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [sendRequest, SetSendRequest] = useState(true);

  async function fetchData() {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const headers = {
        Cookie: userToken,
      };

      const response = await fetch('https://ums.sangu.edu.ge/subject/student/current', {
        method: 'GET',
        headers: headers,
      });

      if (!response.ok) {
        throw new Error('Request failed with status code ' + response.status);
      }

      SetSendRequest(false);

      const cookies = await CookieManager.get('https://ums.sangu.edu.ge/auth/login');
      const newToken = cookies["connect.sid"].value;
      AsyncStorage.setItem('userToken', newToken);
      console.log(newToken);

      const data = await response.json();
      setData(data);
    } catch (error) {
      SetSendRequest(false);
      console.error('Error:', error);
    }
  }

  sendRequest && fetchData();


  const mass = data;
  let subjectData = [];
  for (i = 0; i < mass.length; i++) {
    subjectData.push({ subject: mass[i].name, lecturer: mass[i].lecturer, totalScore: mass[i].score, details: mass[i].details });
  }
  // console.log(userToken);
  let isHeaderRendered = false;

  return (
    <>
      <ScreenContent backgroundColor={colors.white}>
        <ScrollView>
          <View style={styles.wholeContainer}>
            <View style={styles.mainContainer}>
              <Text style={styles.header}>მიმდინარე სემესტრი</Text>
            </View>
            <View style={styles.listContainer}>
              {subjectData.map((item, index) => (
                <React.Fragment key={index}>
                  {!isHeaderRendered && (
                    <View style={styles.subjectInfoResultView}>
                      <Text style={styles.subjectInfoResult}>საგანი</Text>
                      <Text style={styles.subjectInfoResult}>ინფორმაცია</Text>
                      <Text style={styles.subjectInfoResult}>შედეგი</Text>
                    </View>
                  )}
                  <HomeSubjectRow
                    subject={item.subject}
                    info={[require('../../../img/comment.png'), require('../../../img/edit.png'), require('../../../img/idea.png'),
                    ]}
                    total={item.totalScore}
                    ScoreDetails={item.details}
                  />
                  {isHeaderRendered = true}
                </React.Fragment>
              ))}
            </View>
          </View>
        </ScrollView>
      </ScreenContent>
    </>
  );

}
