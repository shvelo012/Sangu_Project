import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import TableSubjectsRow from "../../../components/TableSubjectsRow/TableSubjectsRow";
import { styles } from "./TableScreen.styles";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenContent from "../../../components/ScreenContent/ScreenContent";
import { colors } from "../../../colors/colors";
import CookieManager from "@react-native-cookies/cookies";

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

  async function fetchData() {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const headers = {
        Cookie: userToken,
      };

      const response = await fetch('https://ums.sangu.edu.ge/session/student/list', {
        method: 'GET',
        headers: headers,
      });

      if (response.ok) {
        SetSendRequest(false);
        const data = await response.json();
        setData(data);

        const cookies = await CookieManager.get('https://ums.sangu.edu.ge/auth/login');
        const newToken = cookies["connect.sid"].value;
        AsyncStorage.setItem('userToken', newToken);
        // console.log(newToken);

      } else {
        throw new Error('Request failed with status code ' + response.status);
      }
    } catch (error) {
      SetSendRequest(false);
      console.error('Error:', error);
    }
  }

  sendRequest && fetchData();

  let tableData = [];
  for (i = 0; i < data.length; i++) {
    tableData.push({
      subject: data[i].sessionGroup.subjectActivation.subject.name,
      lecturer: data[i].sessionGroup.lecturer.user.fullName,
      startTime: data[i].startTime,
      room: [data[i].room.name, data[i].room.building],
      day: data[i].dayOfWeek,
    });
  }

  return (
    <ScreenContent backgroundColor={colors.white}>
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
    </ScreenContent>
  );
}
