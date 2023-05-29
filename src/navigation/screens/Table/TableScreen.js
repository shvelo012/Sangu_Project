import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import TableSubjectsRow from "../../../components/TableSubjectsRow/TableSubjectsRow";
import { styles } from "./TableScreen.styles";

import jsonData from "./TableData.json";

const table = jsonData;
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
  return (
    <>
      <View style={styles.mainContainer}>
        <Text
          // onPress={() => navigation.navigate('Home')}
          style={styles.header}>ცხრილი</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>

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
      </ScrollView>
    </>
  );
}
