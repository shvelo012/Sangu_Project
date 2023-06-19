import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import StudentCardRow from '../../../components/StudentCardRow/StudentCardRow';
import { styles } from './StudentCardScreen.style';
import Header from '../../../components/Header/Header';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function StudentCard({ navigation }) {
  const [data, setData] = useState([]);
  const [sendRequest, SetSendRequest] = useState(true);
  {
    sendRequest &&
      AsyncStorage.getItem('userToken')
        .then(userToken => {
          const headers = {
            Cookie: userToken,
          };

          return fetch('https://ums.sangu.edu.ge/subject/student/list', {
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
          console.log('Response:', data);
          setData(data);
        })
        .catch(error => {
          SetSendRequest(false);
          console.error('Error:', error);
        });
  }
  const CardDetails = data;
  let subjectData = [];
  for (i = 0; i < CardDetails.length; i++) {
    subjectData.push({
      name: CardDetails[i].subjectWrapper.name,
      semester: CardDetails[i].semester,
      credits: CardDetails[i].credits,
      score: CardDetails[i].score,
      result: CardDetails[i].result,
      state: CardDetails[i].state
    })
  }


  const SortedData = subjectData.sort((a, b) => b.semester - a.semester);
  return (
    <>
      <View>
        <Header onPress={() => navigation.navigate("insideDetails")} title={'სასწავლო ბარათი'} />
        <ScrollView>
          {SortedData.map((item, index) => (
            <View key={index}>
              {index === 0 || item.semester !== SortedData[index - 1].semester ? (
                <View style={styles.topContent}>
                  <Text style={styles.item}>{item.semester} სემესტრი</Text>
                  <View style={styles.topContentInfo}>
                    {/* <Text style={styles.averageText}>საშუალო </Text> */}
                    {/* <Text style={styles.creditText}>კრედიტები</Text> */}
                  </View>
                </View>
              ) : null}
              {index === 0 || item.semester !== SortedData[index - 1].semester ? (
                <View style={styles.bottomContentHeader}>
                  <Text style={styles.subjectName}>საგანი</Text>
                  <Text style={styles.subjectResult}>შედეგი</Text>
                </View>
              ) : null}

              <View style={styles.bottomContent}>
                <View>
                  <StudentCardRow
                    name={item.name}
                    credits={item.credits}
                    score={item.score}
                    result={item.result}
                    state={item.state} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>

  );
}
