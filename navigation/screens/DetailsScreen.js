import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StudentCard from './StudentCardScreen';


export default function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Details Screen</Text> */}
      <Text
        onPress={() => navigation.navigate('StudentCard')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>სასწავლო ბარათი</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}>ფინანსები</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}>გამოცდები</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}>დოკუმენტები</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}>გზამკვლევი</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}>გამოსვლა</Text>
    </View>
  );
}