import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image } from "react-native";
import HomeSubjectRow from '../../../components/HomeSubjectRow/HomeSubjectsRow';
import jsonData from './data.json';
import { styles } from './HomeScreen.styles';
export default function Home({ navigation }) {
  const [data, setData] = useState([]);

  const mass = jsonData;
  let subjectData = [];
  for (i = 0; i < mass.length; i++) {
    subjectData.push({ subject: mass[i].name, lecturer: mass[i].lecturer, totalScore: mass[i].score, details: mass[i].details });
  }

  let isHeaderRendered = false;

  return (
    <>
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
              info={[require('../../../img/comment.png'),require('../../../img/edit.png'),require('../../../img/idea.png')]}
              total={item.totalScore}
              ScoreDetails={item.details}
            />
            {isHeaderRendered = true}
          </React.Fragment>
        ))}
      </View>
    </>
  );
}
