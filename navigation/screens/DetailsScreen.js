import * as React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StudentCard from './StudentCardScreen';

const handlePress = () => {
  Linking.openURL("https://sangu.edu.ge/geo/article/stundeturi-gzamkvlevi?fbclid=IwAR1VoZXK7uUwvnIpNd-HHjs86YoSxTUm3aJ8iDrWWaUoj2BBefx9ijBRNVo");
};


export default function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Profile')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>პროფილი</Text>
      <Text
        onPress={() => navigation.navigate('StudentCard')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>სასწავლო ბარათი</Text>
      <Text
        onPress={() => navigation.navigate('Finances')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>ფინანსები</Text>
      <Text
        onPress={() => navigation.navigate('Exams')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>გამოცდები</Text>
      <Text
        onPress={() => navigation.navigate('Documents')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>დოკუმენტები</Text>
      <Text
        onPress={handlePress}
        style={{ fontSize: 26, fontWeight: 'bold' }}>გზამკვლევი</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}>გამოსვლა</Text>
    </View>
  );
}