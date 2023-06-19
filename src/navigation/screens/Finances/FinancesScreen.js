import * as React from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/Header/Header';

export default function Finances({ navigation }) {
  return (
    <>
      <Header onPress={() => navigation.navigate("insideDetails")} title={'ფინანსები'} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{ fontSize: 26, fontWeight: 'bold' }}>Under Construction</Text>
      </View>
    </>
  );
}