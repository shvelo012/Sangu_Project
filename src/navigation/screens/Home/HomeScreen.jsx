import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView } from "react-native";
import HomeSubjectRow from '../../../components/HomeSubjectRow/HomeSubjectsRow';
import { styles } from './HomeScreen.styles';
import { AuthContext } from '../../../Context/AuthContext';
import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  // const { userToken } = useContext(AuthContext);
  const [sendRequest, SetSendRequest] = useState(true);


  {
    sendRequest &&
      AsyncStorage.getItem('userToken')
        .then(userToken => {
          const headers = {
            Cookie: userToken,
          };

          return fetch('https://ums.sangu.edu.ge/subject/student/current', {
            method: 'GET',
            headers: headers,
          });
        })
        .then(response => {
          if (response.ok) {
            SetSendRequest(false);
            return response.json();
          } else {
            throw new Error('Request failed with status code ' + response.status);
          }
        })
        .then(data => {
          // console.log('Response:', data);
          setData(data);
        })
        .catch(error => {
          SetSendRequest(false);
          console.error('Error:', error);
        });
  }

  const mass = data;
  let subjectData = [];
  for (i = 0; i < mass.length; i++) {
    subjectData.push({ subject: mass[i].name, lecturer: mass[i].lecturer, totalScore: mass[i].score, details: mass[i].details });
  }
  // console.log(userToken);
  let isHeaderRendered = false;

  return (
    <>
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
    </>
  );

}
