import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import ScreenContent from '../../../components/ScreenContent/ScreenContent';
import { colors } from '../../../colors/colors';

const SimpleCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    console.log(day.dateString)
  };

  return (
    <ScreenContent backgroundColor={colors.white}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
      />
    </ScreenContent>
  );
};

export default SimpleCalendar;

