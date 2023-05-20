import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import HomeSubjectRow from '../../../components/HomeSubjectRow/HomeSubjectsRow';
// import axios from 'axios';
import jsonData from './data.json';
import { styles } from './HomeScreen.styles';

export default function Home({ navigation }) {
  const [data, setData] = useState([]);

  // async function fetchData() {
  //   try {
  //     const response = await fetch('https://ums.sangu.edu.ge/subject/student/current', {
  //       headers: {
  //         'Cookie': 'connect.sid=s%3AMGeB2sZ0gNj76Zp_xE8aqOD9iyHANgWQ.qwpvY6sSmIEv71xv7tdRDbTlwd8x429RZPcPoF7U0t0'
  //       }
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     console.log("fetched");
  //   } catch (error) {
  //     console.error(error);
  //     console.log("done nothing");
  //   }
  // }

  //Data collecting
  const mass = jsonData;
  let subjectData = [];
  for (i = 0; i < mass.length; i++) {
    subjectData.push({ subject: mass[i].name, lecturer: mass[i].lecturer, totalScore: mass[i].score, details: mass[i].details });
  }


  return (
    <>
      <View style={styles.mainContainer}>
        <Text
          style={styles.header}
          onPress={() => fetchData()}
        >
          მიმდინარე სემესტრი</Text>
      </View>
      <View style={styles.listContainer}>
        {subjectData.map((item, index) => (
          <HomeSubjectRow
            key={index}
            subject={item.subject}
            info={"bad looking icon"}
            total={item.totalScore}
            ScoreDetails={item.details}
          />
        ))
        }
      </View>
    </>
  );
}
