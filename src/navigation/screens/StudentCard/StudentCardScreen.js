import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import StudentCardRow from '../../../components/StudentCardRow/StudentCardRow';
import Data from './CardDetails.json';
import { styles } from '../Home/HomeScreen.styles';
import Header from '../../../components/Header/Header';

const CardDetails = Data;
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
// console.log(subjectData);

// const log = () => {
//   console.log(subjectData);
// }

export default function StudentCard({ navigation }) {
  return (
    <>
      <Header onPress={() => { }} />
      <ScrollView>

        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          onPress={() => log()}
          style={{ fontSize: 26, fontWeight: 'bold' }}>StudentCard Screen</Text>
      </View> */}
        {SortedData.map((item, index) => (
          <View key={index} style={{ borderWidth: 1 }}>
            {index === 0 || item.semester !== SortedData[index - 1].semester ? (
              <>
                <View style={{ marginVertical: 2 }}>
                  <Text style={{ fontWeight: 'bold' }}>სემესტრი {item.semester}</Text>
                  <Text style={{ fontWeight: 'bold' }}>საშუალო</Text>
                  <Text style={{ fontWeight: 'bold' }}>კრედიტები</Text>
                </View>
              </>
            ) : null}
            <StudentCardRow
              name={item.name}
              credits={item.credits}
              score={item.score}
              result={item.result}
              state={item.state}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}