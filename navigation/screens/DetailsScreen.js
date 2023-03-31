import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <View> 
        <Text>Profile</Text>
      </View>
      {/* <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Details Screen</Text> */}
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >სასწავლო ბარათი</Text>

      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >ფინანსები</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >გამოცდები</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >დოკუმენტები</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >გზამკვლევი</Text>
      <Text
        // onPress={onPressLearnMore} 
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >გამოსვლა</Text>
    </View>
  );
}