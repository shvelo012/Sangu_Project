import { Fragment } from 'react';
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
  const [sendRequest, setSendRequest] = useState(true);

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

      setSendRequest(false);

      const cookies = await CookieManager.get('https://ums.sangu.edu.ge/auth/login');
      const newToken = cookies["connect.sid"].value;
      AsyncStorage.setItem('userToken', newToken);
      // console.log(newToken);

      const data = await response.json();
      const subjectData = [];
      for (i = 0; i < data.length; i++) {
        subjectData.push({ subject: data[i].name, lecturer: data[i].lecturer, totalScore: data[i].score, details: data[i].details });
      }
      setData(subjectData);

    } catch (error) {
      setSendRequest(false);
      console.error('Error:', error);
    }
  }

  sendRequest && fetchData();

  return (
    <ScreenContent backgroundColor={colors.white}>
      <ScrollView>
        <View style={styles.wholeContainer}>
          <View style={styles.mainContainer}>
            <Text style={styles.header}>მიმდინარე სემესტრი</Text>
          </View>
          <View>
            <View style={styles.subjectInfoResultView}>
              <Text style={styles.subjectInfoResult}>საგანი</Text>
              <Text style={styles.subjectInfoResult}>ინფორმაცია</Text>
              <Text style={styles.subjectInfoResult}>შედეგი</Text>
            </View>
            {data.map((item, index) => (
              <Fragment key={index}>
                <HomeSubjectRow
                  subject={item.subject}
                  info={[require('../../../img/comment.png'), require('../../../img/edit.png'), require('../../../img/idea.png'),
                  ]}
                  total={item.totalScore}
                  ScoreDetails={item.details}
                />
              </Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContent>
  );

}
