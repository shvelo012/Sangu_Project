import { View, Text, ScrollView } from 'react-native';
import { useEffect } from 'react';
import StudentCardRow from '../../../components/StudentCardRow/StudentCardRow';
import { styles } from './StudentCardScreen.style';
import Header from '../../../components/Header/Header';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scaled } from '../../../components/theme/scaler';
import CookieManager from '@react-native-cookies/cookies';

export default function StudentCard({ navigation }) {
  const [sendRequest, SetSendRequest] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  const [semesterInfo, setSemesterInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        const headers = {
          Cookie: userToken,
        };

        const response = await fetch('https://ums.sangu.edu.ge/subject/student/list', {
          method: 'GET',
          headers: headers,
        });

        if (response.ok) {
          const data = await response.json();

          let subjectData = [];
          for (let i = 0; i < data.length; i++) {
            subjectData.push({
              name: data[i].subjectWrapper.name,
              semester: data[i].semester,
              credits: data[i].credits,
              score: data[i].score,
              result: data[i].result,
              state: data[i].state,
            });
          }

          let testInfo = {};
          let subjectCount = 0;
          let semester = 1;

          for (let i = 0; i < subjectData.length; i++) {
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

          setSortedData(data.sort((a, b) => b.semester - a.semester));
          setSemesterInfo(testInfo);

          const cookies = await CookieManager.get('https://ums.sangu.edu.ge/auth/login');
          const newToken = cookies["connect.sid"].value;
          AsyncStorage.setItem('userToken', newToken);
        } else {
          throw new Error('Request failed with status code ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        SetSendRequest(false);
      }
    };

    if (sendRequest) {
      fetchData();
    }
  }, [sendRequest]);

  return (
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

  );
}
