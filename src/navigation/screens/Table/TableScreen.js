import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import TableSubjectsRow from "../../../components/TableSubjectsRow/TableSubjectsRow";
import { styles } from "./TableScreen.styles";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const getStartTime = (time) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours + ":" + (minutes.toString().length == 1 ? minutes.toString() + "0" : minutes);

};

function getDayOfWeek(day) {
  const daysOfWeek = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
  return daysOfWeek[day];
}


export default function Table({ navigation }) {
  const [data, setData] = useState([]);
  const [sendRequest, SetSendRequest] = useState(true);
  {
    sendRequest &&
      AsyncStorage.getItem('userToken')
        .then(userToken => {
          const headers = {
            Cookie: userToken,
          };

          return fetch('https://ums.sangu.edu.ge/session/student/list', {
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
  const table = data;
  let tableData = [];
  for (i = 0; i < table.length; i++) {
    tableData.push({
      subject: table[i].sessionGroup.subjectActivation.subject.name,
      lecturer: table[i].sessionGroup.lecturer.user.fullName,
      startTime: table[i].startTime,
      room: [table[i].room.name, table[i].room.building],
      day: table[i].dayOfWeek,
    });
  }

  return (
    <>

      <ScrollView>
        <View style={styles.wholeContainer}>
          <View style={styles.mainContainer}>
            <Text
              style={styles.header}>ცხრილი</Text>
          </View>

          <View style={styles.tableContainer}>
            {tableData.map((item, index) => (
              <View key={index}>
                {index === 0 || item.day !== tableData[index - 1].day ? (
                  <>
                    <Text style={styles.dayOfWeek}>{getDayOfWeek(item.day)}</Text>
                    <View style={styles.subjectTimeRoomView}>
                      <Text style={styles.subjectTimeRoom}>საგანი</Text>
                      <Text style={styles.subjectTimeRoom}>დრო</Text>
                      <Text style={styles.subjectTimeRoom}>აუდიტორია</Text>
                    </View>
                  </>
                ) : null}
                <TableSubjectsRow
                  key={index}
                  day={getDayOfWeek(item.day)}
                  subject={item.subject}
                  time={getStartTime(item.startTime)}
                  room={item.room[0]}
                  building={item.room[1]}
                  isLast={index === tableData.length - 1}
                />
              </View>

            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
