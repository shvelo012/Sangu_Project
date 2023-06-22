import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useEffect } from 'react';
import StudentCardRow from '../../../components/StudentCardRow/StudentCardRow';
import { styles } from './StudentCardScreen.style';
import Header from '../../../components/Header/Header';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scaled } from '../../../components/theme/scaler';


export default function StudentCard({ navigation }) {
  const [data, setData] = useState([]);
  const [sendRequest, SetSendRequest] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  const [semesterInfo, setSemesterInfo] = useState({});
  const [subjectData, setSubjectData] = useState([]);

  useEffect(() => {
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
        let subjectData = [];
        for (i = 0; i < data.length; i++) {
          subjectData.push({
            name: data[i].subjectWrapper.name,
            semester: data[i].semester,
            credits: data[i].credits,
            score: data[i].score,
            result: data[i].result,
            state: data[i].state
          });
        }
        setData(subjectData);
        setSortedData(data.sort((a, b) => b.semester - a.semester));
        setSubjectData(subjectData);
      })


      .catch(error => {
        SetSendRequest(false);
        console.error('Error:', error);
      });
  }, [sendRequest]);

  useEffect(() => {
    let testInfo = {};
    let subjectCount = 0;
    let semester = 1;
    for (i = 0; i < subjectData.length; i++) {
      if (semester === subjectData[i].semester) {
        if (!(semester in testInfo)) {
          testInfo[semester] = [subjectData[i].credits, subjectData[i].score];
          subjectCount++;
        } else {
          testInfo[semester][0] += subjectData[i].credits;
          testInfo[semester][1] += subjectData[i].score;
          subjectCount++;
        }
      } else {
        testInfo[semester][1] /= subjectCount;
        semester++;
        testInfo[semester] = [subjectData[i].credits, subjectData[i].score];
        subjectCount = 1;
      }
    }
    if (semester in testInfo) {
      testInfo[semester][1] /= subjectCount;
    }

    setSemesterInfo(testInfo);

  }, [data]);
  return (
    <>
      <View>
        <Header onPress={() => navigation.navigate("insideDetails")} title={'სასწავლო ბარათი'} />
        <ScrollView>
          {sortedData.map((item, index) => (
            <View key={index}>
              {index === 0 || item.semester !== sortedData[index - 1].semester ? (
                <View style={styles.topContent}>
                  <Text style={styles.item}>{item.semester} სემესტრი</Text>
                  {semesterInfo[item.semester] && sortedData.state !== 'current' ? (
                    <View style={styles.topContentInfo}>
                      <Text style={styles.averageText}>საშუალო - {item.state == 'current' ? null : semesterInfo[item.semester][1].toFixed(2)} </Text>
                      <Text style={styles.creditText}>კრედიტები - {item.state == 'current' ? null : semesterInfo[item.semester][0]}</Text>
                    </View>) : null}
                </View>
              ) : null}



              {index === 0 || item.semester !== sortedData[index - 1].semester ? (
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
          <View style={{ height: scaled(80) }} />
        </ScrollView>

      </View>
    </>

  );
}
