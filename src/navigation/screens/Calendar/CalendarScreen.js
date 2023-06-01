// import * as React from 'react';
// import { useState } from 'react';
// // import { View, Text } from 'react-native';
// import { Calendar } from 'react-native-calendars';

// export default function CalendarScreen({ navigation }) {
//   const [selected, setSelected] = useState('');

//   return (
//     <Calendar
//       style={{
//         borderWidth: 1,
//         borderColor: 'gray',
//         height: '100%',
//       }}
//       onDayPress={day => {
//         setSelected(day.dateString);
//       }}
//       markedDates={{
//         [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
//       }}
//     />
//   );
// }
// import React, { Component } from 'react';
// import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import testIDs from './testIDs';

// export default class AgendaScreen extends Component {
//   state = {
//     items: undefined,
//   };

//   render() {
//     return (
//       <Agenda
//         testID={testIDs.agenda.CONTAINER}
//         items={this.state.items}
//         loadItemsForMonth={this.loadItems}
//         selected={'2023-05-16'}
//         renderItem={this.renderItem}
//         renderEmptyDate={this.renderEmptyDate}
//         rowHasChanged={this.rowHasChanged}
//         showClosingKnob={true}
//       />
//     );
//   }

//   loadItems = (day) => {
//     const items = this.state.items || {};

//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = this.timeToString(time);

//         if (!items[strTime]) {
//           items[strTime] = [];

//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//             items[strTime].push({
//               name: 'Item for ' + strTime + ' #' + j,
//               height: Math.max(50, Math.floor(Math.random() * 150)),
//               day: strTime,
//             });
//           }
//         }
//       }

//       const newItems = {};
//       Object.keys(items).forEach((key) => {
//         newItems[key] = items[key];
//       });
//       this.setState({
//         items: newItems,
//       });
//     }, 1000);
//   };

//   renderItem = (reservation, isFirst) => {
//     const fontSize = isFirst ? 16 : 14;
//     const color = isFirst ? 'black' : '#43515c';

//     return (
//       <TouchableOpacity
//         testID={testIDs.agenda.ITEM}
//         style={[styles.item, { height: reservation.height }]}
//         onPress={() => Alert.alert(reservation.name)}
//       >
//         <Text style={{ fontSize, color }}>{reservation.name}</Text>
//       </TouchableOpacity>
//     );
//   };

//   renderEmptyDate = () => {
//     return (
//       <View style={styles.emptyDate}>
//         <Text>This is empty date!</Text>
//       </View>
//     );
//   };

//   rowHasChanged = (r1, r2) => {
//     return r1.name !== r2.name;
//   };

//   timeToString(time) {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   }
// }

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'white',
//     flex: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     marginTop: 17,
//   },
//   emptyDate: {
//     height: 15,
//     flex: 1,
//     paddingTop: 30,
//   },
// });
// import React, { useState, useEffect } from 'react';
// import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import testIDs from './testIDs';

// const CalendarScreen = () => {
//   const [items, setItems] = useState();

//   useEffect(() => {
//     loadItemsForMonth('2023-05-16');
//   }, []);

//   const loadItemsForMonth = (selectedDate) => {
//     const newItems = {};

//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = new Date(selectedDate).getTime() + i * 24 * 60 * 60 * 1000;
//         const strTime = timeToString(time);

//         if (!newItems[strTime]) {
//           newItems[strTime] = [];

//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//             newItems[strTime].push({
//               name: `Item for ${strTime} #${j}`,
//               height: Math.max(50, Math.floor(Math.random() * 150)),
//               day: strTime,
//             });
//           }
//         }
//       }

//       setItems(newItems);
//     }, 1000);
//   };

//   const renderItem = (reservation, isFirst) => {
//     const fontSize = isFirst ? 16 : 14;
//     const color = isFirst ? 'black' : '#43515c';

//     return (
//       <TouchableOpacity
//         testID={testIDs.agenda.ITEM}
//         style={[styles.item, { height: reservation.height }]}
//         onPress={() => Alert.alert(reservation.name)}
//       >
//         <Text style={{ fontSize, color }}>{reservation.name}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const renderEmptyDate = () => {
//     return (
//       <View style={styles.emptyDate}>
//         <Text>This is empty date!</Text>
//       </View>
//     );
//   };

//   const rowHasChanged = (r1, r2) => {
//     return r1.name !== r2.name;
//   };

//   // const timeToString = (time) => {
//   //   const date = new Date(time);
//   //   return date.toISOString().split('T')[0];
//   // };
//   const timeToString = (time) => {
//     const date = new Date(time);
//     if (isNaN(date.getTime())) {
//       return '';
//     }
//     return date.toISOString().split('T')[0];
//   };


//   return (
//     <Agenda
//       testID={testIDs.agenda.CONTAINER}
//       items={items}
//       loadItemsForMonth={loadItemsForMonth}
//       selected={'2023-05-16'}
//       renderItem={renderItem}
//       renderEmptyDate={renderEmptyDate}
//       rowHasChanged={rowHasChanged}
//       showClosingKnob={true}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'white',
//     flex: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     marginTop: 17,
//   },
//   emptyDate: {
//     height: 15,
//     flex: 1,
//     paddingTop: 30,
//   },
// });

// export default CalendarScreen;

import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

const SimpleCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    console.log(day.dateString)
  };

  return (
    <Calendar
      onDayPress={handleDayPress}
      markedDates={{
        [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
      }}
    />
  );
};

export default SimpleCalendar;

